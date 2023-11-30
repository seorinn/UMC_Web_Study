import "../styles/Login.css";
import { LoginHandlerContext } from "../App";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const loginHandler = useContext(LoginHandlerContext);

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    
    const isValidPassword = /[a-zA-z]/.test(inputs.password) && /\d/.test(inputs.password) && /[!@#$%^&*()_-~]/.test(inputs.password) && inputs.password.length>=8;
    const isValidEmail = inputs.email.includes("@") && inputs.email.includes(".");
    
    const handleInput = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }

    const handleSubmit = () => {
        if(isValidEmail && isValidPassword){
            navigate(`/`);
            loginHandler(true);
        }
    }
    
    return(
        <div className="Login">
            <h2>이메일과 비밀번호를 <br/>입력해주세요</h2>
            <form>
                <div className="input_container">
                    <h5>이메일 주소</h5>
                    <input 
                        name="email" 
                        placeholder="이메일을 입력해주세요"
                        onChange={handleInput}
                    />
                    {inputs.email.length>0 && !isValidEmail &&
                    <h5 className="error">올바른 이메일을 입력해주세요.</h5>}
                </div>
                <div className="input_container">
                    <h5>비밀번호</h5>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                        onChange={handleInput}
                    />
                    {inputs.password.length>0 && !isValidPassword &&
                    <h5 className="error">영문, 숫자, 특수문자 포함 8자 이상으로 설정해주세요.</h5>}
                </div>
            </form>
            <button onClick={handleSubmit}>확인</button>
        </div>
    )
}

export default Login;
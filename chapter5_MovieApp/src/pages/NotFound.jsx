import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/NotFound.css";

const NotFound = () => {
    const navigate = useNavigate();

    const goMain = () => {
        navigate('/');
    }

    return(
        <div className="NotFound">
            <Header/>
            <div className="container">
                <h1>해당 페이지를 찾지 못했습니다.</h1>
                <h4>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</h4>
                <h4 className="btn_main" onClick={goMain}> 메인페이지로 이동</h4>
            </div>
        </div>
    )
}

export default NotFound;
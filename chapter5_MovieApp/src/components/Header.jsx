import "../styles/Header.css";
import {LoginStateContext, LoginHandlerContext} from "../App";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const Header = () => {
    const navigate = useNavigate();
    const IsLoggedIn = useContext(LoginStateContext);
    const loginHandler = useContext(LoginHandlerContext);

    const handleLogout = () => {
        if(IsLoggedIn){
            if(window.confirm("로그아웃 하시겠습니까?")){
                loginHandler(false);
            }
        } else{
            navigate(`/login`);
        }
    }

    return(
        <div className="Header">
            <div className="contents">
                <img className="logo" onClick={()=>{navigate(`/`)}} alt="TMDB" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"/>
                <div className="buttons">
                    <button className="movie" onClick={()=>{navigate(`/movie`)}}>영화</button>
                    <button className="tv" onClick={()=>{navigate(`/tv`)}}>TV 프로그램</button>
                    <button className="celebrity" onClick={()=>{navigate(`/person`)}}>인물</button>
                </div>
                <div className="login">
                    <button onClick={handleLogout}>{IsLoggedIn?"로그아웃":"로그인"}</button>
                    {IsLoggedIn?"환영합니다!":"로그인 해주세요!"}
                </div>
            </div>
        </div>
    )
}

export default Header;
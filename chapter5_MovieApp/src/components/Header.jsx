import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { useState } from "react";

const Header = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState();

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
                    <button onClick={()=>{setIsLogin(!isLogin)}}>{isLogin?"로그인":"로그아웃"}</button>
                    {isLogin?"로그인":"로그아웃"} 해주세요!
                </div>
            </div>
        </div>
    )
}

export default Header;
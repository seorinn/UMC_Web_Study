import Header from "../components/Header";
import { useState } from "react";
import Advertisement from "../components/Advertisement";

const Home = () => {
    const [isAdVisible, setIsAdVisible] = useState(true);

    return(
        <div className="Home">
            <Header />
            {isAdVisible && <Advertisement />}
            <button className="ad" onClick={()=>{setIsAdVisible(!isAdVisible)}}>{isAdVisible ? "광고 안보기" : "광고 보기"}</button>
        </div>
    )
}

export default Home;
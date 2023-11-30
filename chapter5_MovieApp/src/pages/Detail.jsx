import "../styles/Detail.css";
import Header from "../components/Header";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Detail = () => {
    const location = useLocation();
    const receivedProps = location.state;
    useEffect(()=>{

    })

    return(
        <div className="Detail">
            <Header />
            { receivedProps &&
            <div className="container">
                <img alt={receivedProps.title} src={receivedProps.imageUrl}/>
                <div className="title">{receivedProps.title}</div> 
            </div>}
        </div>
    )
}

export default Detail;
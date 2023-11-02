import { useState } from "react";
import "./Movie.css";
import Overview from "./Overview";

function Movie({poster_path, title, vote_average, overview}) {
    const imageUrl = `https://developer.themoviedb.org${poster_path}`;
    console.log(imageUrl);
    const [showOverview, setShowOverview] = useState(false);
    
    const handleMouseEnter = () => {
        setShowOverview(true);
    }
    const handleMouseLeave = () => {
        setShowOverview(false);
    }

    return(            
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="Movie">
                <div className="image-section">
                    <img alt="img_poster" src={imageUrl}/>
                </div>
                <div className="info-section">
                    <div className="title">{title}</div>
                    <div className="vote_average">{vote_average}</div>
                </div>
            {showOverview && (
                <div className="overview-wrapper">
                    <Overview
                        title={title}
                        overview={overview}
                    />        
                </div>
            )}
            </div>
        </div>
    )
}
export default Movie
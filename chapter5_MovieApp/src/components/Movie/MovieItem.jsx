import { useState } from "react";
// import "../Movie.css";
import Overview from "../Overview";
import { Image, InfoSection, MovieWrapper, OverviewWrapper, Title, VoteAverage } from "./MovieItem.style";
import { useLocation, useNavigate } from "react-router-dom";

function MovieItem({poster_path, title, vote_average, overview}) {
    const imageUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`;
    const [showOverview, setShowOverview] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleMouseEnter = () => {
        setShowOverview(true);
    }
    const handleMouseLeave = () => {
        setShowOverview(false);
    }
    const goDetail = () => {
        navigate(`/movie/${title}`, {state: {title: title, imageUrl: imageUrl}});
    }

    return(            
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={goDetail}
        >
            <MovieWrapper>
                <Image alt="img_poster" src={imageUrl}/>

                <InfoSection>
                    <Title>{title}</Title>
                    <VoteAverage>{vote_average}</VoteAverage>
                </InfoSection>

                {showOverview && (
                    <OverviewWrapper>
                        <Overview title={title} overview={overview}/>
                    </OverviewWrapper>
                )}
            </MovieWrapper>
        </div>
    )
}
export default MovieItem
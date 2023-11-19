import { useState } from "react";
import "../Movie.css";
import Overview from "../Overview";
import { ImageSection, Image, InfoSection, MovieWrapper, OverviewWrapper, Title, VoteAverage } from "./Movie.style";

function Movie({poster_path, title, vote_average, overview}) {
    const imageUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`;
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
            <MovieWrapper>
                <ImageSection>
                    <Image alt="img_poster" src={imageUrl}/>
                </ImageSection>

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
export default Movie
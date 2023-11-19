import "../styles/Movie.css";
import Header from "../components/Header";
import MovieItem from "../components/Movie/MovieItem";
import { movies } from "../movieDummy";

const Movie = () => {
    return(
        <div className="Movie">
            <Header/>
            <div className="movie_wrapper">
                {movies.results.map((item)=>(
                    <MovieItem
                    key={item.id}
                    {...item}
                    />
                ))} 
            </div>
        </div>
    )
}

export default Movie;
import "./App.css";
import Movie from "./components/Movie/Movie";
import { movies } from "./movieDummy";

function App() {
  return (
    <div className="App">
      {movies.results.map((item)=>(
            <Movie
              key={item.id}
              {...item}
            />
        ))}
    </div>
  );
}

export default App;

import {  Routes, Route } from 'react-router-dom';

import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import TV from "./pages/TV";

function App() {
  return (
    <div className="App">      
      <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/movie" element={<Movie/>}/>
          <Route path = "/tv" element={<TV/>}/>
          <Route path = "/person" element={<Celebrity/>}/>
        </Routes>
      {/* {movies.results.map((item)=>(
            <Movie
              key={item.id}
              {...item}
            />
        ))} */}
    </div>
  );
}

export default App;

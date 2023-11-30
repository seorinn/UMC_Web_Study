import {  Routes, Route } from 'react-router-dom';

import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import TV from "./pages/TV";
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">      
      <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/movie" element={<Movie/>}/>
          <Route path = "/movie/:title" element={<Detail/>}/>
          <Route path = "/tv" element={<TV/>}/>
          <Route path = "/person" element={<Celebrity/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;

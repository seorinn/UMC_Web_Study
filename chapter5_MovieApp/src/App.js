import {  Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';

import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import TV from "./pages/TV";
import Detail from './pages/Detail';
import Login from "./pages/Login";
import NotFound from './pages/NotFound';

export const LoginStateContext = React.createContext();
export const LoginHandlerContext = React.createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  const loginHandler = (state) => {
    setIsLoggedIn(state);
  }

  return (
    <LoginStateContext.Provider value={isLoggedIn}>
      <LoginHandlerContext.Provider value={loginHandler}>
        <div className="App">      
          <Routes>
              <Route path = "/" element={<Home/>}/>
              <Route path = "/movie" element={<Movie/>}/>
              <Route path = "/movie/:title" element={<Detail/>}/>
              <Route path = "/tv" element={<TV/>}/>
              <Route path = "/person" element={<Celebrity/>}/>
              <Route path = "/login" element={<Login/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
      </LoginHandlerContext.Provider>
    </LoginStateContext.Provider>
  );
}

export default App;

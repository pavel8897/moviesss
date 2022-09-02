import React from 'react';
import './App.css';
import {BrowserRouter as
  Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import {Home} from './pages/Home.js';
import {Movies} from './pages/Movies';
import {Users} from './pages/Users.js';
import {Error} from './pages/Error.js';

export const App = () => {
  return (
    <div>
      <Router>
        <div className="App">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

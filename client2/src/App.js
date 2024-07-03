import './App.css'
import { Navbar } from './navbar.js';
import {Home} from "./home.js"
import { RouterApp } from './router.js';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
       <RouterApp></RouterApp>
    </Router>
  );
}

export default App;

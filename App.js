import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/home';
import About from './Pages/about';
import Profile from './Pages/profile';
import ErrorPage from './Pages/errorpage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"style={{ textDecoration: 'none' }}> Home </Link>
        <Link to="/about"style={{ textDecoration: 'none' }}> About </Link>
        <Link to="/profile"style={{ textDecoration: 'none' }}> Profile </Link>
      
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
	  </nav>
    </Router>
  );
}

export default App;




































// import Login from "./CRUD/login";


// function App() {
// return (

// <Login />

// )
// }

// export default App;


// {/* 
// 	<Router>
// 		<Link>
// 		<Route exact path="\src\sample\home.js" component={Home} />
// 		<Route path="/about" component={About} />
// 		</Link>
// 	</Router>
// 	</>
// ); */}
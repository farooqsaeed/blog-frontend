import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes , Route,useLocation  } from "react-router-dom";
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Category from './Pages/Category';
import Blog from './Pages/Blog';
import Auth from './Pages/Auth';
import Dashboard from './Admin/Dashboard';
import Post from './Admin/Pages/Post';
import NewPost from './Admin/Pages/NewPost';
import User from './Admin/Pages/User';

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulated login function
  const handleLogin = () => {
    // Perform your authentication logic
    setIsLoggedIn(true);
  };

 

  const hideHeaderFooter = location.pathname.includes('/dashboard');

  return (
    <div className="App">
       {!hideHeaderFooter && <Header />}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/blog-details/:id" element={<Blog/>} />
          <Route path="/login" element={<Auth/>} />
          <Route path="/register" element={<Auth/>} />
          <Route path="/dashboard" element={localStorage.getItem("isLoggedIn") ? <Dashboard />:<Auth/>}>
            <Route path="posts" element={localStorage.getItem("isLoggedIn") ?<Post />:<Auth/>} />
            <Route path="users" element={localStorage.getItem("isLoggedIn") ?<User />:<Auth/>} />
            <Route path="createpost" element={localStorage.getItem("isLoggedIn") ?<NewPost />:<Auth/>} />
          </Route>
        </Routes>
        {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;

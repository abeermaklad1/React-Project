import "./App.css";

import { Routes, Route, Link, Navigate } from "react-router-dom";

import Navbar  from './components/Navbar';
import Slider from './components/Slider';
import Counter from './components/Counter';
import Todos from './components/Todos';
import Footer from './components/Footer';
import Error from './components/Error';
import About from './components/About';
import Company from './components/Company';
import Features from './components/Features';
import Profile from './components/Profile';
import Login from './components/Login';


function App() {
  return (

    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Navigate to = "/home" />} />
        <Route path="/home" element={<Slider />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todos/:id" element={<Todos />} />
        <Route path="/about" element={<About />}>
          <Route path="company" element={<Company />}/>
          <Route path="features" element={<Features />}/>
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;

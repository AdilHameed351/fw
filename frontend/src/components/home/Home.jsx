import React from 'react';
import "./home.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-center">
                Organize your <br /> work and life, finally.
            </h1>
            <p className="text-center">
                Become focused, organized, and calm with <br /> todo app. The task manager app.
            </p>
            <Link aria-current="page" to="/todo">
              <button className="home-btn p-2 my-3">Make Todo List</button>
            </Link>
        </div>
    </div>
  )
}

export default Home
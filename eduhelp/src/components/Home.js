// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ isLoggedIn, handleLogout }) => {
    return (
        <div>
            <h1>Welcome to the E-Learning Platform</h1>
            {!isLoggedIn ? (
                <div>
                    <Link to="/student-login">Student Login</Link> <br />
                    <Link to="/faculty-login">Faculty Login</Link> <br />
                    <Link to="/parent-login">Parent Login</Link>
                </div>
            ) : (
                <div>
                    <p>You are logged in.</p>
                    <button onClick={handleLogout}>Logout</button>
                    {/* Conditionally render links based on user role if needed */}
                </div>
            )}
        </div>
    );
};

export default Home;

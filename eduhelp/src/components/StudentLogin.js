// components/StudentLogin.js (Example Login Component)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentLogin({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would typically make an API call to your backend
        // to verify the username and password.  For this example,
        // we'll just simulate a successful login.
        if (username === 'student' && password === 'password') { // Replace with actual validation
            onLogin('student');
            navigate('/student-details');  // Redirect after successful login
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
}

export default StudentLogin;
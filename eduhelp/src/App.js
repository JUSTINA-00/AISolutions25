import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StudentLogin from './components/StudentLogin';
import FacultyLogin from './components/FacultyLogin';
import ParentLogin from './components/ParentLogin';
import StudentDetailsForm from './components/StudentDetailsForm';
import CourseCatalog from './components/CourseCatalog';
import Home from './components/Home'; // Add a Home component
import { useState } from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);

    const handleLogin = (role) => {
        setIsLoggedIn(true);
        setUserRole(role);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserRole(null);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home isLoggedIn={isLoggedIn} handleLogout={handleLogout} />} /> {/* Home Route */}
                <Route path="/student-login" element={!isLoggedIn ? <StudentLogin onLogin={handleLogin} /> : <Navigate to={userRole === 'student' ? "/student-details" : "/"} />} />
                <Route path="/faculty-login" element={!isLoggedIn ? <FacultyLogin onLogin={handleLogin} /> : <Navigate to="/" />} />
                <Route path="/parent-login" element={!isLoggedIn ? <ParentLogin onLogin={handleLogin} /> : <Navigate to="/" />} />
                <Route path="/student-details" element={isLoggedIn && userRole === 'student' ? <StudentDetailsForm /> : <Navigate to="/student-login" />} />
                <Route path="/course-catalog" element={isLoggedIn && userRole === 'student' ? <CourseCatalog /> : <Navigate to="/student-login" />} />
                {/* Add more routes as needed */}
                <Route path="*" element={<Navigate to="/" />} /> {/* Catch-all redirect */}
            </Routes>
        </Router>
    );
}

export default App;

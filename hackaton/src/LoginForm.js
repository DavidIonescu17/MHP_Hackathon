import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const LoginForm = ({ handleLoginSuccess }) => {
    const [loginSuccess, setLoginSuccess] = useState(false);

    const loginUser = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                setLoginSuccess(true);
                handleLoginSuccess(); // Notify App.js of successful login
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    if (loginSuccess) {
        return <Navigate to="/welcome" replace={true} />;
    }

    return (
        <section className="form-section" id="loginSection">
            <h2>Login</h2>
            <form className="user-form" onSubmit={loginUser}>
                <input name="email" type="email" placeholder="Email" required />
                <input name="password" type="password" placeholder="Password" required />
                <button type="submit" className="submit-btn">Login</button>
            </form>
            <p>Don't have an account? <a href="#register">Register</a></p>
        </section>
    );
}

export default LoginForm;

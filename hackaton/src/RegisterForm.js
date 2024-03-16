// src/RegisterForm.js
import React from 'react';

class RegisterForm extends React.Component {
  registerUser = async (event) => {
    event.preventDefault();
    const email = event.target.email.value; // Assuming you have an input field with name="email"
    const password = event.target.password.value; // Assuming you have an input field with name="password"
    const name = event.target.name.value; // Assuming you have an input field with name="name"

    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name })
      });

      if (response.ok) {
        const newUser = await response.json();
        console.log('User registered:', newUser);
        // Handle successful registration, e.g., redirecting to login page
      } else {
        console.error('Registration failed');
        // Handle registration failure, e.g., showing an error message
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle errors, e.g., showing an error message
    }
  };

  render() {
    return (
      <section className="form-section" id="registrationSection">
        <h2>Register</h2>
        <form className="user-form" onSubmit={this.registerUser}>
          <input name="email" type="email" placeholder="Email" required />
          <input name="password" type="password" placeholder="Password" required />
          <input name="name" type="text" placeholder="Name" required />
          <button type="submit" className="submit-btn">Register</button>
        </form>
        <p>Already have an account? <a href="#login" onClick={this.props.toggleForms}>Login</a></p>
      </section>
    );
  }
}

export default RegisterForm;
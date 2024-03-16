import React from 'react';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: true // Replace with your actual authentication logic
        };
    }

    render() {
        // If user is not authenticated, render a message or redirect to login page
        if (!this.state.isAuthenticated) {
            return <p>Please login to access the main page</p>;
            // You can also use window.location.href = '/login' to redirect
        }

        // If user is authenticated, render the main page content
        return (
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Welcome to the Main Page</h1>
                {/* Add your main page content here */}
            </div>
        );
    }
}

export default MainPage;

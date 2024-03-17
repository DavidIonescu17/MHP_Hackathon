// App.js

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import WelcomePage from './WelcomePage';
import './App.css';

const defaultTheme = createTheme();

class App extends React.Component {
    state = {
        isLoginVisible: true,
        isAuthenticated: false,
    };

    toggleForms = () => {
        this.setState(prevState => ({ isLoginVisible: !prevState.isLoginVisible }));
    };

    handleLoginSuccess = () => {
        this.setState({ isAuthenticated: true });
    };

    render() {
        return (
            <ThemeProvider theme={defaultTheme}>
                <BrowserRouter>
                    <Grid container component="main" style={{ height: '100vh' }}>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            style={{
                                backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                            <Box
                                style={{
                                    marginTop: '8rem',
                                    marginLeft: '4rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar style={{ margin: '1rem', backgroundColor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    {this.state.isLoginVisible ? 'Sign in' : 'Sign up'}
                                </Typography>
                                {this.state.isLoginVisible ? (
                                    <LoginForm
                                        toggleForms={this.toggleForms}
                                        handleLoginSuccess={this.handleLoginSuccess}
                                        redirectToWelcome={() => {
                                            // Redirect to the welcome page upon successful login
                                            return <Navigate to="/welcome" />;
                                        }}
                                    />
                                ) : (
                                    <RegisterForm toggleForms={this.toggleForms} />
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                    <Routes>
                        <Route path="/welcome" element={<WelcomePage />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}

export default App;

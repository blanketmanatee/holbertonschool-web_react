import React from 'react';
import './Login.css';

function Login() {
    return (

    <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email</label>
        <input type="email" name="email" id="email"></input>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"></input>
        <button type="button">OK</button>
    </body>
    );
    }
export default Login;
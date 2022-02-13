import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email</label>
        <input type="email" name="email" id="email"></input>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"></input>
        <button type="button">OK</button>
      </body>
      <footer className="App-footer">
      Copyright 2020 - holberton School
      </footer>
    </div>
  );
}

export default App;

import logo from './holberton-logo.jpeg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	  <img src={logo} alt="logo" />
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
      Copyright {getFullYear()}  - {getFooterCopy(true)}
      </footer>
    </div>
  );
}

export default App;

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
    );
}

export default Header;
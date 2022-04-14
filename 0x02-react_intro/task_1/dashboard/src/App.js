import logo from './logo.jpeg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School Dashboard</h1>
	  </header>
  <body className="App-body">
  <p>Login to access the full dashboard</p>
  </body>
  <footer className="App-footer">
  <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
  </footer>
    </>
  );
}

export default App;

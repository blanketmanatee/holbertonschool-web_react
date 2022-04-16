import logo from './logo.jpeg'
import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>School Dashboard</h1>
	  </header>
      <main role="main" className="App-body">
        <p>Login to access the full dashboard</p>
      </main>
      <footer className="App-footer">
      <p>Copyright 2020 - holberton school</p>
      </footer>
      </>
  );
}

export default App;
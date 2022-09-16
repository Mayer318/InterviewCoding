import logo from './logo.svg';
import './App.css';

function FetchUsers() {
    // Fetch the users data from the REST API
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()) // Convert the fetch response to Json
        .then(data => console.log(data))
    };

// Generic React Page
function App() {
  return (
      <div className="App">
      <FetchUsers></FetchUsers>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coding-Test
        </a>
      </header>
    </div>
  );
}

export default App;

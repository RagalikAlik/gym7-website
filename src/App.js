import logo from './pictures/logo.svg';
import './style/App.css';
import {HeaderTemplate} from './pages/headerTemplate';


function App() {
  return (
    <><HeaderTemplate />
    <div className="App">
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
          Learn React
        </a>
      </header>
    </div></>
  );
}

export default App;

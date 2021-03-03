import Kilt from '@kiltprotocol/sdk-js'
import logo from './logo.svg';
import './App.css';

function App() {
  const mnemonic = Kilt.Identity.generateMnemonic()
  const identity = Kilt.Identity.buildFromMnemonic(mnemonic)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {identity.address}
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
    </div>
  );
}

export default App;

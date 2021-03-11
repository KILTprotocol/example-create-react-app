import Kilt from '@kiltprotocol/sdk-js'
import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [identity, setIdentity] = useState(null)
  useEffect(() => {
    const generateIdentity = async () => {
      await Kilt.init()
      const mnemonic = Kilt.Identity.generateMnemonic()
      const newIdentity = Kilt.Identity.buildFromMnemonic(mnemonic)
      setIdentity(newIdentity)
    }
    
    generateIdentity()
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {identity?.address}
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

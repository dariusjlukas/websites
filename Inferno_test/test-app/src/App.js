import { version, Component } from 'inferno';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';
import { render } from 'inferno';

const message = "Hello World!";

// render(
//   <h1> message={ message } </h1>,
//   document.getElementById("root")
// );

class App extends Component {
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <Logo width="80" height="80" />
          <h1>{`Welcome to Inferno ${version}`}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>
          {message}
        </h2>
      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
// import './App.css';
// import './App.scss'
import styles from './App.module.css';

console.log(styles);

// {
//   App: "App_App__B2Ebb"
// App-header: "App_App-header__PyRwd"
// App-link: "App_App-link__XPeK4"
// App-logo: "App_App-logo__yMrik"
// App-logo-spin: "App_App-logo-spin__1up6W"
// logo: "App_logo__7Edbg"
// }

// css import 방식에 문제점 => css scope가 전역으로 적용되어 오염 되기 쉽다.
// BEM => 방식으로 오염을 줄인다.

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="link"
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

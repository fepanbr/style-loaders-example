import logo from './logo.svg';
// import './App.css';
// import './App.scss'
import styles from './App.module.css';

import Button from './components/Button';
console.log({styles})
// [filename]\_[classname]\_\_[hash].
// 오염되지 않도록 사용하기 위해 사용

// 

// css import 방식에 문제점 => css scope가 전역으로 적용되어 오염 되기 쉽다.
// BEM => 방식으로 오염을 줄인다.

function App() {
  return (
    <div className={styles['App']}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Button</Button>
      </header>
    </div>
  );
}

export default App;

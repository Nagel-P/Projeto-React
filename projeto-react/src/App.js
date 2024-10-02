import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exemplo incrivel usando react</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur accumsan euismod lorem, ut gravida nunc facilisis sit amet.
        Duis venenatis interdum lectus, at tempor nisi vestibulum sed. 
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Quisque faucibus, orci vel consectetur efficitur, est metus malesuada libero, 
        nec vestibulum lorem arcu vel nulla. Integer eget ultricies purus. Morbi posuere, 
        lacus id tincidunt convallis, lectus elit dictum purus, nec sodales felis lacus vel lorem. 
        Sed non fringilla eros. Praesent sodales lorem ut malesuada hendrerit. 
        Proin quis leo quis enim vehicula aliquam.
        </p>
        <button onClick={() => alert('Botão testado!')}>
          Botão teste
        </button>
      </header>
    </div>
  );
}

export default App;

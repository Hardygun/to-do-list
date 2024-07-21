import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputValue,setInputValue] = useState('');
  const [renders, setRenders] = useState([]);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function inputHandle(e) {
    const value = e.target.value;
    setInputValue(value);
    console.log('input');
  }

  function buttonHandle(e) {
    setRenders([...renders, inputValue]);
    setCount1(count1 + 1);
    setInputValue('');
    console.log('added');
  }

  function deleteHandle(index) {
    setRenders(renders.filter((text, i) => i !== index));
    setCount2(count2 - 1);
    setInputValue('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do</h1>
      </header>
        
        <div className='All-render'>
        <div className='input'>
          <input type='text' 
            value={inputValue}
            onChange={(e) => inputHandle(e)}
          placeholder='Enter what to do...' />

          <button onClick={(e) =>buttonHandle(e)} >+</button>
        </div>

        <div className='render'>
          <table>
            <tr>
              <th>List</th>
              <th>Clear</th>
            </tr>
              {renders.map((text, index) => (
            <tr key={index}>
              <td>{text}</td>
              <td><button 
              onClick={() => deleteHandle(index)} >X</button></td>
            </tr>
              ))}
          </table>
          </div>
        </div>

      <footer className='App-footer'>
          <h3>Avaliable Task:{count1}</h3>
          <h3>Task Done:{count1}</h3>
      </footer>
    </div>
  );
}

export default App;

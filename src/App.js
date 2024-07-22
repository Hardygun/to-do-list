import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputValue,setInputValue] = useState('');
  const [renders, setRenders] = useState([]);
  const [availableTasks, setAvailableTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [doneTaskIndices, setDoneTaskIndices] = useState(new Set());

  function inputHandle(e) {
    const value = e.target.value;
    setInputValue(value);
    console.log('input');
  }

  function buttonHandle(e) {
    setRenders([...renders, inputValue]);
    setAvailableTasks(availableTasks + 1);
    setInputValue('');
    console.log('added');
  }

  function deleteHandle(index) {
    setRenders(renders.filter((text, i) => i !== index));
    if (doneTaskIndices.has(index)) {
      setCompletedTasks(completedTasks - 1);
      setDoneTaskIndices(prevSet => {
        const newSet = new Set(prevSet);
        newSet.delete(index);
        return newSet;
      });
    } else {
      setAvailableTasks(availableTasks - 1);
    }
  }

  function doneHandle(index) {
    setDoneTaskIndices(prevSet => {
      const newSet = new Set(prevSet);
      newSet.add(index);
      return newSet;
    });
    setAvailableTasks(availableTasks - 1);
    setCompletedTasks(completedTasks + 1);
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
                      onClick={() => doneHandle(index)} 
                      disabled={doneTaskIndices.has(index)}
                    >Done</button> <button 
              onClick={() => deleteHandle(index)} >X</button></td>
            </tr>
              ))}
          </table>
          </div>
        </div>

      <footer className='App-footer'>
          <h3>Avaliable Task: {availableTasks > 0 ? availableTasks : 'null'}</h3>
          <h3>Task Done: {completedTasks}</h3>
      </footer>
    </div>
  );
}

export default App;

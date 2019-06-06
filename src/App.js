/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';

import './App.css';
import TodoItem from './components/TodoItem';
import Header from './components/Header';
import AuthContext from './auth-context';

const TodoList = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10px;
  background-color: ${props => (props.darkMode ? 'black' : 'white')};
  color: ${props => (props.darkMode ? 'white' : 'black')};
`;

const FormGroup = styled.div`
  display: flex;
  label {
    margin-right: 10px;
  }
`;

function useLocalStorage(key, initialValue) {
  const [item, setItem] = useState(initialValue);
  useEffect(() => {
    console.log('get item from local storage');
    const persistedItem = JSON.parse(localStorage.getItem(key));
    setItem(persistedItem || initialValue);
  }, []);

  useEffect(() => {
    console.log('persist item');
    localStorage.setItem(key, JSON.stringify(item));
  }, [item]);

  return [item, setItem];
}

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [darkMode, setDarkMode] = useState(false);
  const [userName, setUserName] = useState(null);
  const valueRef = useRef();

  const login = () => {
    setUserName('Doppelmutzi');
  };
  return (
    <AuthContext.Provider value={{ userName, login }}>
      <TodoList darkMode={darkMode}>
        <Header />
        <FormGroup>
          <label htmlFor="darkmode">dark mode?</label>
          <input
            name="darkmode"
            type="checkbox"
            checked={darkMode}
            onChange={handleCheckboxChange}
          />
        </FormGroup>
        <input ref={valueRef} />
        <button onClick={addTodoItem}>add Todo</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <TodoItem text={todo} />
            </li>
          ))}
        </ul>
      </TodoList>
    </AuthContext.Provider>
  );

  function addTodoItem() {
    setTodos([...todos, valueRef.current.value]);
  }

  function handleCheckboxChange() {
    setDarkMode(previous => {
      return !previous;
    });
  }
}

export default App;

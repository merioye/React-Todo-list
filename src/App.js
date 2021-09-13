import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoContextProvider from './context/TodoContextProvider';



const App = ()=>{
    return(   
        <TodoContextProvider>
            <TodoList/>
        </TodoContextProvider>
    );
}

export default App;

import React, { useState, useEffect, useRef, useReducer, createContext } from 'react';
import TodoList from '../components/TodoList';
import reducer from './TodoReducer';




const Context = createContext();


const TodoContextProvider = ()=>{

    const [state, dispatch] = useReducer(reducer, []);
    const inputRef = useRef();
    const addRef = useRef();
    const [id, setId] = useState(null);
    const [darkMode, setDarkMode] = useState(true);
    useEffect(()=>{
        if(localStorage.getItem('list')){
            dispatch({type:'LOCAL_STORAGE'});
        }
        
    },[]);


    const addNote = (id)=>{
        
        let val = inputRef.current.value;
        if(val.trim().length>0){
            if(id || id===0){
                dispatch({type:'ADD_NOTE', payload:val, id:id});
            }else{
                dispatch({type:'ADD_NOTE', payload:val});
            }
            addRef.current.textContent = 'Add Note';
            inputRef.current.value = '';
        }
    }
    const editNote = (id)=>{
        inputRef.current.value = state[id];
        dispatch({type:'another'});
        addRef.current.textContent = 'Edit Note';
        setId(id);
    }
    const delNote = (id)=>{
        dispatch({type:'DEL_NOTE', payload:id});
    }
    const delAllNotes = ()=>{
        dispatch({type:'DEL_ALL'});
    }
    const toggleMode = ()=>{
        setDarkMode(!darkMode);
    }
    
    return(
        <Context.Provider value={[darkMode, toggleMode, inputRef, addNote, id, addRef, delAllNotes, state, editNote, delNote]}>
            <TodoList/>
        </Context.Provider>
    );
}



export {Context};
export default TodoContextProvider;
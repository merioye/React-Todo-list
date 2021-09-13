import React from 'react';
import NoteItems from './NoteItems';
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { useContext } from 'react';
import {Context} from '../context/TodoContextProvider';

const TodoList = ()=>{
    const [darkMode, toggleMode, inputRef, addNote, id, addRef, delAllNotes, , , ] = useContext(Context);
    return(
        <div className={darkMode?'main-container dark-background':'main-container light container'}>
            <div className='container'>
                <div className='mode' onClick={toggleMode} >{darkMode?<BsSun/>:<BsMoon/>}</div>
                <div className='note-icon-div'>
                    <img src='images/note-icon.png' alt='' />
                </div>
                <h4 className='main-heading' style={darkMode?{color: 'white'}:{color: 'black'}}>Your Notes List</h4>
                <input type='text' className='inputBox' placeholder='Add a Note' ref={inputRef} style={darkMode?{background:'white'}:{background:'#B0E0E6'}}/>
                <div className='main-btns'>
                    <button onClick={()=>addNote(id)} ref={addRef} >Add Note</button>
                    <button onClick={delAllNotes} >Clear List</button>
                </div>
                <div className='todos-container'>
                    <NoteItems/>
                </div>
                
            </div>
        </div>
    );
}

export default TodoList;
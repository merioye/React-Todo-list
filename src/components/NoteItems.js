import React from 'react';
import { useContext } from 'react';
import {Context} from '../context/TodoContextProvider';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const NoteItems = ()=>{
    const [darkMode, , , , , , , state, editNote, delNote] = useContext(Context);
    return(
        <>
        {
            state.length===0?
            <p className='no-work' style={darkMode?{color:'white'}:{color:'black'}}>No Note available</p>
            :
            state.map((item, ind)=>{
                return(
                <div className='todo-item' key={ind} >
                    <div className='todo-item-text'>{item}</div>
                    <div className='todo-item-icons'>
                    <FaRegEdit className='edit-icon' onClick={()=>{editNote(ind)}} />
                    <RiDeleteBin5Line className='delete-icon'onClick={()=>delNote(ind)} />
                    </div>
                 </div>
                )
                
            })
            
        }
        </>

    );
}

export default NoteItems;
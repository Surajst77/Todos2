import React from 'react';
import './Todocss.css';
import { CameraOutlined } from '@ant-design/icons'

const Todo = ({ todo, onDelete, onUpdate }) => {

  return (
    <>
      <div className='container'>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button id='dltbtn' onClick={() => onDelete(todo)}> Delete </button>
        <button id='dltbtn' onClick={onUpdate}style={{backgroundColor:'#2E5C78', margin:'10px'}}>Update</button>
        <CameraOutlined twoToneColor="#eb2f96" />
      </div>
      <hr/>
    
    </>
  )
}

export default Todo

// #2E5C78 --> Navy Color.
//style={{backgroundColor:'red', borderRadius:4, border:'1px solid rgba(0,0,0,0.28)', color:'white', padding:2.5, width:60 }}
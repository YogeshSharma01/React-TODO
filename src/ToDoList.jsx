import React from 'react';

const ToDoList = (props) =>{
    // 
return <>
   <div className="ToDoList">                             
<i id="Delete"  onClick={()=>{
    props.onSelect(props.id)
    }}  
    class="fas fa-trash-alt"></i>
<li>{props.text}</li>
</div>
</>


}

export default ToDoList
import React from 'react';

function ToDoList(props){
    console.log({props});
    return(
        
        <div>
            
            {
            props.todos.map(todo =>(
                
                <li>{todo.task}</li>
                
            ))}
        </div>
    )
}

export default ToDoList
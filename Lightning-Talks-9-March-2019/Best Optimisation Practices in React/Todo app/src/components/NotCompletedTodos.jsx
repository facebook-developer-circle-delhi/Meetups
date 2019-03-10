import React from 'react';
import {Alert} from 'reactstrap';
const NotCompletedTodos=(props)=>{

    if(props.todoArray.length===0 ){
        return <div className="w-75"><Alert color="success">No incomplete tasks</Alert></div>;
       
    }
    

    else{
        return (<div className="w-75">
        {
          props.todoArray.map((element,index)=>{
    
            if(!element.isCompleted){
                return <Alert color="danger">{element.todo}</Alert>
            }
                
            })
        }
    </div>);
    }
}

export default NotCompletedTodos;
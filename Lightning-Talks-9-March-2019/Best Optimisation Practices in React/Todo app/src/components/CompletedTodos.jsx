import React from 'react';
import {Alert} from 'reactstrap';
const CompletedTodos=({completeArray})=>{

    console.log('render CompletedTodos...');
    if(completeArray.length===0 ){
         return (
             <div className="alert alert-warning w-75 mt-2 mb-2">You dont have any completed Tasks yet</div>
         )
    }

    else{
        return (<div className="w-75" style={{
            height: '100px',
            msOverflowY: 'scroll'
        }}>
        {
          completeArray.map((element,index)=>{
                return <Alert color="success" key={index}><img src="http://www.chochoscambridge.com/wp-content/uploads/parser/flower-bouquet-emoji-1.png"/>{element.todo}</Alert>
            })
        }
    </div>);
    }


}

// function areEqual(prevProps, nextProps){
//     console.log('prev length', prevProps.completeArray.length);
//     console.log('new length', nextProps.completeArray.length);
//     if(prevProps.completeArray.length===nextProps.completeArray.length){
//         console.log('inside if statement...');
//         return false;
//     }
//     return true;
// }

export default (CompletedTodos);

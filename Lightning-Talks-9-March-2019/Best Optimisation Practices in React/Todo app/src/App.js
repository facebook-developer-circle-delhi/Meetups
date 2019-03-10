import React, { Component,Suspense,lazy, unstable_Profiler as Profiler } from 'react';
import {FixedSizeList as List} from 'react-window';
import {Button} from 'reactstrap';
import './App.css';
import {Switch,Route,Link} from 'react-router-dom';


import { unstable_trace as trace } from "scheduler/tracing";
// import CompletedTodos from './components/CompletedTodos';
const CompletedTodos= lazy(()=>import('./components/CompletedTodos'));
// import NotCompletedTodos from './components/NotCompletedTodos';

const NotCompletedTodos= lazy(()=> import('./components/NotCompletedTodos'));
// import ListItem from './components/listItem';
var ListItem=lazy(()=>import('./components/listItem'));

const createItemData = ((items, func) => ({
  items,
  func,
}))
class App extends Component {

  constructor(){
    super();
    this.todosArray=[];
    this.state={
      todoArray: [],
      completedArray: []
    };
   
   

    this.add=this.add.bind(this);
    this.Complete= this. Complete.bind(this);

    this.logProfiler=this.logProfiler.bind(this);
    
 
  }

  //code for interaction API
//   checkInitialrender(){
// trace("check state change", performance.now(), ()=>{
//    this.setState({todoArray: []});
// });
  // }

  // componentDidUpdate(){
  //   this.checkInitialrender();
  // }

  logProfiler(profilerId, phase, actualTime, BaseTime, startTime, Committime, Interactions){
   console.log({
     profilerId,
     actualTime,
     startTime,
      Committime,
       BaseTime,
        Interactions,
         phase,
   });
  }

  add(){
  
    let todo=this.refs.myref.value;
    console.log(this.refs.myref.nodeValue);
    this.todosArray.push({
      isCompleted: false,
      todo: todo
    });
    this.setState({
      todoArray: this.todosArray,
      
    });
    // trace("button trigger ", performance.now(), ()=>{
    //   console.log('profiled...');
    //   this.setState({
    //     todoArray:  []
    //   })
    // });
    // console.log('todoArray', this.state.todoArray);
    // console.log('completeArray', this.state.completedArray);
  }
 
   
  Complete(event,value){
    
   console.log('event', value);

    this.state.todoArray.forEach(element=>{
      if(element.todo==value){
        element.isCompleted=true;
        this.state.completedArray.push(element);
        this.setState({
          todoArray: this.todosArray,
          completedArray: this.state.completedArray
        });
      }
      
    });
     
    console.log('state array now', this.state.todoArray);
event.target.disabled=true;
event.target.innerHTML="completed";

    
  }

  render() {
    return (
<Profiler id="id" onRender={this.logProfiler}>
      <div id="id" className="bg bg-light h-100">
            <h1 className="text-center bg bg-secondary">TODOS APP</h1>
        <div className="w-100 p-2">
          <input  type="text" className="px-auto w-75 mx-auto" name="address" id="exampleAddress" placeholder="What are you gonna do today ?" ref="myref" />
        </div>
      <Button color="success" onClick={this.add} className="m-2">Add</Button>
{
//   this.state.todoArray.map((todoElement,index)=>{

//   return <Suspense fallback={<div>loading...</div>}>
//   <ListItem val={todoElement.todo} Complete={this.Complete} key={index} ref={index}/>
//    </Suspense>
// })
}
{ <Suspense fallback={<div>loading.....</div>}>
  <List className="m-2 p-2"
    height={150}
    itemCount={this.state.todoArray.length}
    itemSize={80}
    width={300}
    itemData={createItemData(this.state.todoArray, this.Complete)}
  >
    {ListItem}
  </List>
  </Suspense> }

 
     <Button color="warning" className="m-2"> <Link to={{
       pathname: '/completedTodos',
       state: {completeArray: this.state.completedArray}
     }}>see completed todos</Link></Button>
     <Button color="warning" className="m-2"><Link to={{
       pathname: '/notCompletedTodos',
       state: {todoArray: this.state.todoArray}
     }}>see not completed todos</Link></Button>

     <Switch>
  <Route path='/completedTodos' render={()=><Suspense fallback={<div>loading your completed todos...</div>}><CompletedTodos completeArray={this.state.completedArray} /></Suspense>} />
  <Route path='/notCompletedTodos' render={()=><Suspense fallback={<div>loading your incomplete todos...</div>}><NotCompletedTodos todoArray={this.state.todoArray} /></Suspense>}/>
  <Route/>
</Switch>
      </div>
    </Profiler>

    );
  }
}

export default App;

import React from 'react';
//import logo from './logo.svg';

import './App.css';
// import Courses from './component/Courses'
import { WrapperComponent } from './component/WrapperComponent';


class App extends React.Component {

  constructor(props){ 
    super(props)
    this.state ={
      courses :[
    {id:1,name:'React',statu:true},
    {id:2,name:'Java',statu:false},
    {id:3,name:'PHP',statu:false},
    {id:4,name:'.Net',statu:false},
    {id:5,name:'Javascript',statu:true}
  ]
}
  this.handleCourseClick = this.handleCourseClick.bind(this);
}


handleCourseClick(event){
  console.log(event.target.id);
}


render(){
  return (
   <div>
     <WrapperComponent/>
     </div>
  );
}
}

export default App;

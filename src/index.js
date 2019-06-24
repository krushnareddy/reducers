import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
//import Courses from './component/Courses'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
// import AddCourse from './component/AddCourse';
import CourseDetails from './component/CourseDetails'
import { createStore } from 'redux';
import rootReducer from './reducer/reducer';
import {Provider} from 'react-redux';
import {WrapperComponentadd} from './component/WrapperComponent'


const store = createStore(rootReducer);

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
          <div className="navbar-header">
      <a className="navbar-brand" href="#">React</a>
    </div>
        <ul className="navbar-nav">
            <li className="nav-item nav-link">
                <NavLink activeStyle={{color:'red'}} exact to="/">Home</NavLink>
            </li>
            <li className="nav-item nav-link">
                <NavLink  activeStyle={{color:'red'}} exact to="/add">Add Course</NavLink>
            </li>
            <li className="nav-item nav-link">
                <NavLink activeStyle={{color:'red'}} exact to="/courses/:id">Course Details</NavLink>
            </li>
        </ul>
        </div>
        </nav>
    <Route path="/" exact component={App}/>
    <Route path="/add" exact component={WrapperComponentadd}/>

    <Route path="/courses/:id" exact render={
           ({match})=>{
              return (<CourseDetails selectedCourseId={match.params.id}/>    )
            }
        }/>
{/* <App /> */}
</BrowserRouter>,
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

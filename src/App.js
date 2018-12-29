import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import {BrowserRouter, Route,Link,Switch,Redirect} from 'react-router-dom';
import './App.css';
import Course from './containers/Course/Course';


class App extends Component {
  render () {
    return (
     <BrowserRouter>
      <div>
        <header>
         <nav>
        <ul>
        <li><Link to='/Users'>Users</Link></li>
        <li><Link to='/Courses'>Courses</Link></li>
        </ul>
        </nav>
        </header>
        
     
        <Switch>
         <Route path='/Users' exact component={Users}/>
        <Route path='/Courses'  component={Courses}/>
        <Redirect from='/all-courses' to='/Courses'/>
        <Route render= {()=> <h1>Error 404 , Not Found</h1>} />
        </Switch>
      
      {/*  <Route path='/Courses/:id' component={Course}/>*/}
        </div>
        </BrowserRouter>
    );
  }
}

export default App;

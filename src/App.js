import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import ErrorPage from './components/pages/ErrorPage';
import AddTask from './components/operations/AddTask';
import AddProject from './components/operations/AddProject';
import EditTask from './components/operations/EditTask';
import EditProject from './components/operations/EditProject';
import Project from './components/Project/Project';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/operations/addtask" component={AddTask} />
          <Route exact path="/operations/addproject" component={AddProject} />
          <Route exact path="/operations/edittask/:id" component={EditTask} />
          <Route exact path="/operations/:id" component={EditProject} />
          <Route exact path="/operations/viwe/:id" component={Project} />
          <Route component={ErrorPage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;

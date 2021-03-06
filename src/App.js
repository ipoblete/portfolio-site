import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Projects from './projects/Projects';
import About from './about/About';
import Nav from './nav/Nav';
import './App.css';

export default function App() {
  return (
   <>
   <Nav />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
   </>
  )
}

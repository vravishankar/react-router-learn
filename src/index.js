import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './components/home';

const About = () => {
    return (
        <h1>About</h1>
    )
}

const Login = () => {
    return (
        <h1>Login</h1>
    )
}

const Topics = ({ match }) => {
    return (
        <div>
            <h1>Topics</h1>
            <ul>
                <li><Link to={`${match.url}/java`} >Java</Link></li>
                <li><Link to={`${match.url}/go`} >Go</Link></li>
                <li><Link to={`${match.url}/python`} >Python</Link></li>
                <li><Link to={`${match.url}/rails`} >Rails</Link></li>
                <li><Link to={`${match.url}/reactjs`} >React JS</Link></li>
            </ul>
            <Route path={`${match.url}/:topicId`} component={Topic}/>
        </div>
    )
}

const Topic = ({ match }) => {
    return (
        <div>
            <p>{match.params.topicId}</p>
        </div>
    )
}

ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>,
    document.getElementById('app')
);
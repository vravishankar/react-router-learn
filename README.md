# React Router Tutorial
## Basic Setup
```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

ReactDOM.render(
    <Router>
        <div>
            <Link to="">Home</Link>
            <Route exact path="/" component={Home} />
        </div>
    </Router>,
    document.getElementById('app');
)
```
> Please note that if you are using webpack you need to add the following to the webpack config file (webpack.config.js)
```js
    devServer: {
        historyApiFallback: true
    }
```
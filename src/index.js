import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ToDoList from "./ToDoList";

//ReactDOM.render(<App />, document.getElementById('root'));
var destination = document.querySelector("#container");
registerServiceWorker();

ReactDOM.render(
    <div>
        <ToDoList/>
    </div>,
    destination
);

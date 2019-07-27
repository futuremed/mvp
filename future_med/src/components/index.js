import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './header';
import MainPage from './pages/mainPage';
import DoctorPage from './pages/doctorPage';
import './index.css';


export default class App extends Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/doctor" component={DoctorPage} />
                    </Switch>
                </div>
            </Router>   
        )
    }
}
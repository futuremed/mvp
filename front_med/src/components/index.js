import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './header';
import MainPage from './pages/mainPage/';
import DoctorPage from './pages/doctorPage/';
import Services from '../services/'
import './index.css';

export default class App extends Component {

    services = new Services();

    state = {
        clinic: {},
        department: '',
        currentDoctor: '',
    }
    componentDidMount() { 
        this.services.getClinic()
            .then(clinic => this.setState({clinic}))
    }
    

    render() {
        const {clinic, department, currentDoctor} = this.state;
        console.log(clinic)

        return (
            <Router>
                <div className="container">
                    <Header
                        clinicName={clinic.name}
                        department={department}
                        currentDoctor={currentDoctor}
                    />
                    <Switch>
                        <Route path="/" exact render={() =>(
                            <MainPage data={clinic}/>)}
                        />
                        <Route path="/doctor" exact render={() =>(
                            <DoctorPage
                                 services={this.services}
                            />)}
                        /> 
                    </Switch>
                </div>
            </Router>   
        )
    }
}

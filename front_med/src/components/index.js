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
        clinic: null,
        department: '',
        currentDoctor: '',
    }
    onChangeDoctor = () => this.setState({currentDoctor: 'Врач: Иванов И.И.'})
    onChangeDepart = () => this.setState({department: 'Врачи (Гинекологическое отделение)'})
    componentDidMount() { 
        this.services.getClinic()
            .then(clinic => this.setState({clinic}))
    }
    
    render() {
        const {clinic, department, currentDoctor} = this.state;
        if(!clinic) return true;

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
                            <MainPage 
                                data={clinic}
                                onChangeDoctor={this.onChangeDoctor}
                                onChangeDepart={this.onChangeDepart}
                            />)}
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

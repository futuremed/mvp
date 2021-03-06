import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";

class Header extends Component {

    renderNav = () => (
        <nav className="container full-w">
            <div className="subheader-container">
                <div className="subheader-item">{this.props.clinicName}</div>
                <div className="subheader-item">{this.props.department}</div>
                <div className="subheader-item">{this.props.currentDoctor}</div>
            </div>
        </nav>
    );

    render() {
        const isMainDoctor = this.props.location.pathname === '/'
        
        return (
            <div>
            <header>
                <div className="container full-w">
                    <div className="header-container">
                    <Link to = '/' style={{textDecoration: 'none'}}>
                        <div className="doctor-special">{isMainDoctor ? 'Анализ вылечиваемости' : 'Мед. осмотр'}</div>
                    </Link>
                    <div className="doctor-lk">
                        <div className="doctor-lk__avatar"></div>
                         <Link to = '/doctor' style={{textDecoration: 'none'}}>
                            <div className="doctor-lk__name">{!isMainDoctor ? 'Врач: Иванов И.И.' : 'Главврач: Сидоров И.А.'}</div>
                        </Link>
                    </div>
                    </div>
                </div>
            </header>
                {isMainDoctor && this.renderNav()}
            </div>
        )
    }
}
export default withRouter(Header);
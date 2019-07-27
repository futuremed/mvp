import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";

class Header extends Component {

    renderNav = () => (
        <nav>
            <ul className="menu">
                <li>район</li>
                <li>больница</li>
                <li>отделение</li>
                <li>врач</li>
            </ul>
        </nav>
    );

    render() {
        const {pathname} = this.props.location

        return (
            <div>
                <header className="header">
                    <Link to = '/'>
                        <div>logo</div>
                    </Link>
                    <Link to = '/doctor'>
                        <div>Doctor</div>
                    </Link>
                </header>
                {pathname === '/' && this.renderNav()}
            </div>
        )
    }
}
export default withRouter(Header);
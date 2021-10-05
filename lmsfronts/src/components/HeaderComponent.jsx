import React, { Component } from 'react';
import AdminService from '../services/AdminService';
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://javaguides.net" className="navbar-brand">Admin Dashboard</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent

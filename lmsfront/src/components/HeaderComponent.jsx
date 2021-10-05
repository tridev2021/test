import React, { Component } from 'react';
import StudentService from '../services/StudentService';
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
                    <div><a href="https://javaguides.net" className="navbar-brand">Student Dashboard</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent

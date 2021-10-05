import React, { Component } from 'react';
import AdminService from '../services/AdminService';

class ViewAdminComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            admin: {}
        }
    }

    componentDidMount(){
        AdminService.getadminById(this.state.id).then( res => {
            this.setState({admin: res.data});
            console.log(this.state.admin);
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View admin Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>  Email: </label>
                            <div> { this.state.admin.email }</div>
                        </div>
                        <div className = "row">
                            <label> Username: </label>
                            <div> { this.state.admin.username }</div>
                        </div>
                        {/* <div className = "row">
                            <label> Email ID: </label>
                            <div> { this.state.admin.emailId }</div>
                        </div>
                        <div className = "row">
                            <label> DOB: </label>
                            <div> { this.state.admin.dob }</div>
                        </div> */}
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewAdminComponent

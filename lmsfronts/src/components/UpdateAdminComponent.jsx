import React, { Component } from 'react'
import AdminService from '../services/AdminService';

class UpdateAdminComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Email: '',
            Username: ''

        }
        this.changeEmailHandler = this.changeEmaiHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        // this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        // this.changeDOBHandler = this.changeDOBHandler.bind(this);
        this.updateAdmin = this.updateAdmin.bind(this);
    }

    componentDidMount(){
        AdminService.getAdminById(this.state.id).then( (res) =>{
            let Admin = res.data;
            this.setState({Email: Admin.Email,
                Username: Admin.Username,
                
            });
        });
    }

    updateAdmin = (e) => {
        e.preventDefault();
        let Admin = {Email: this.state.Email, Username: this.state.Username};
        console.log('Admin => ' + JSON.stringify(Admin));
        console.log('id => ' + JSON.stringify(this.state.id));
        AdminService.updateAdmin(Admin, this.state.id).then( res => {
            this.props.history.push('/Admin');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({username: event.target.value});
    }

   

    cancel(){
        this.props.history.push('/Admin');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Admin</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" email="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Username: </label>
                                            <input placeholder="Username" username="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeUsernameHandler}/>
                                        </div>
                                        {/* <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="emailid" name="emailid" className="form-control" 
                                                value={this.state.emailid} onChange={this.changeEmailIdHandler}/>
                                        </div> */}

                                        <button className="btn btn-success" onClick={this.updateAdmin}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateAdminComponent

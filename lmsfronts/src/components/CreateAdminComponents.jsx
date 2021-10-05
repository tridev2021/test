import React, { Component } from 'react'
import AdminService from '../services/AdminService';

class CreateAdminComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            Email: '',
            Username: '',
           
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        // this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        // this.changeDOBHandler = this.changeDOBHandler.bind(this);
        this.saveOrUpdateAdmin = this.saveOrUpdateAdmin.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            AdminService.getAdminById(this.state.id).then( (res) =>{
                let admin = res.data;
                this.setState({Email: admin.Email,
                    Username: admin.Address,
                   
                });
            });
        }        
    }
    saveOrUpdateAdmin = (e) => {
        e.preventDefault();
        let admin = {Email: this.state.Email, Username: this.state.Username};
        console.log('admin => ' + JSON.stringify(admin));

        // step 5
        if(this.state.id === '_add'){
            AdminService.createAdmin(admin).then(res =>{
                this.props.history.push('/admin');
            });
        }else{
            AdminService.updateAdmin(admin, this.state.id).then( res => {
                this.props.history.push('/admin');
            });
        }
    }
    
    changeEmailHandler= (event) => {
        this.setState({Email: event.target.value});
    }

    changeUsernameHandler= (event) => {
        this.setState({Username: event.target.value});
    }

    // changeEmailIdHandler= (event) => {
    //     this.setState({emailId: event.target.value});
    // }
    // changeDOBHandler= (event) => {
    //     this.setState({dob: event.target.value});
    // }

    cancel(){
        this.props.history.push('/admin');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Admin</h3>
        }else{
            return <h3 className="text-center">Update Admin</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>  Email: </label>
                                            <input placeholder="Email" email="=email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Username: </label>
                                            <input placeholder="username" username="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeUsernameHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateAdmin}>Save</button>
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

export default CreateAdminComponent

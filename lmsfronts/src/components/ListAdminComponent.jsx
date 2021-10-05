import React, { Component } from 'react';
import AdminService from '../services/AdminService';


class ListAdminComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                admin: []
        }
        this.addAdmin = this.addAdmin.bind(this);
        this.editAdmin = this.editAdmin.bind(this);
        this.deleteAdmin= this.deleteAdmin.bind(this);
    }

    deleteAdmin(id){
        AdminService.deleteAdmin(id).then( res => {
            this.setState({admin: this.state.admin.filter(admin => admin.id !== id)});
        });
    }
    viewAdmin(id){
        this.props.history.push(`/view-admin/${id}`);
    }
    editAdmin(id){
        this.props.history.push(`/add-admin/${id}`);
    }

    componentDidMount(){
        AdminService.getAdmin().then((res) => {
            this.setState({ admin: res.data});
        });
    }

    addAdmin(){
        this.props.history.push('/add-admin/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Admin List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addAdmin}> Add Admin</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Email</th>
                                    <th> Username</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.admin.map(
                                        admin => 
                                        <tr key = {admin.id}>
                                             <td> { admin.email} </td>   
                                             <td> {admin.username}</td>
                                             <td>
                                                 <button onClick={ () => this.editAdmin(admin.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAdmin(admin.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewAdmin(admin.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListAdminComponent

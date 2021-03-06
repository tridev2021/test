import React, { Component } from 'react';
import StudentService from '../services/StudentService';


class ListStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                student: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent= this.deleteStudent.bind(this);
    }

    deleteStudent(id){
        StudentService.deleteStudent(id).then( res => {
            this.setState({student: this.state.student.filter(student => student.id !== id)});
        });
    }
    viewStudent(id){
        this.props.history.push(`/view-student/${id}`);
    }
    editStudent(id){
        this.props.history.push(`/add-student/${id}`);
    }

    componentDidMount(){
        StudentService.getStudent().then((res) => {
            this.setState({ student: res.data});
        });
    }

    addStudent(){
        this.props.history.push('/add-student/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Student List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStudent}> Add Student</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> Address</th>
                                    <th> Email Id</th>
                                    <th> DOB</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.student.map(
                                        student => 
                                        <tr key = {student.id}>
                                             <td> { student.name} </td>   
                                             <td> {student.address}</td>
                                             <td> {student.emailId}</td>
                                             <td> {student.dob}</td>
                                             <td>
                                                 <button onClick={ () => this.editStudent(student.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStudent(student.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewStudent(student.id)} className="btn btn-info">View </button>
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

export default ListStudentComponent

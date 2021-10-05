import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8084/api";

class AdminService {

    // getAdmin(){
    //     return axios.get(ADMIN_API_BASE_URL);
    // }  

    createAdmin(Register){
        return axios.post(ADMIN_API_BASE_URL+ '/' +Register);
    }

    // getAdminById(adminId){
    //     return axios.get(ADMIN_API_BASE_URL + '/' + adminId);
    // }

    // updateAdmin(admin, adminId){
    //     return axios.put(ADMIN_API_BASE_URL + '/' + adminId, admin);
    // }

    // deleteAdmin(adminId){
    //     return axios.delete("http://localhost:8084/api/admin" + '/' + adminId);
    // }
}

export default new AdminService()
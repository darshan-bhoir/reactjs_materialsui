import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/users';
const SEARCH_FLIGHTS_URL = 'http://localhost:8082/api/search/flights';

class ApiService {

    searchFlights(request) {
        // return axios.create({
        //     baseURL: SEARCH_FLIGHTS_URL,
        //     method: 'POST',
        //     withCredentials: false,
        //     headers: {
        //         'Content-Type' : 'application/json',
        //         'Accept' : '*/*',
        //         //'Access-Control-Allow-Origin': 'http://localhost:3000',
        //         //'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        //         //'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        //         //'Access-Control-Allow-Credentials': 'true',
        //         //'crossorigin': 'true'

        //     },
        //   }).post();
        return axios.post(""+SEARCH_FLIGHTS_URL, request);
    }



    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}

export default new ApiService();
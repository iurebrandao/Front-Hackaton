import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3050/'
});

export default {
    Auth(data) {
        return instance.post('/auth/login', data);
    },
    SignUp(data) {
        return instance.post('/users', data);
    },
    GetAreas() {
        return instance.get('/areas');
    },
    GetConnections() {
        return instance.get('/areas');
    },
    GetMatchUser() {
        return instance.get('/areas');
    },
    AdoptStudent() {
        return instance.post('/areas');
    },
};
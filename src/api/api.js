import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'fba64836-76d3-400a-8b21-39c2505312d7'},
    withCredentials: true
});


export const authAPI = {
    getMe() {
        return instance.get('auth/me')
            .then(response => response.data);
    }
};
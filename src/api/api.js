import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'fba64836-76d3-400a-8b21-39c2505312d7'},
    withCredentials: true
});

const instanceWithoutWC = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: false
});

export const authAPI = {
    getMe() {
        return instance.get('auth/me')
            .then(response => response.data);
    }
};

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instanceWithoutWC.get(`users/?count${pageSize}&page=${currentPage}`)
            .then(response => response.data);
    }
};

export const followAPI = {
  follow(userID) {
      return instance.post(`follow/${userID}`)
          .then(response => response.data);
  },
  unfollow(userID) {
      return instance.delete(`follow/${userID}`)
          .then(response => response.data);
  }
};

export const profileAPI = {
    getProfile(userID) {
        return instanceWithoutWC.get(`profile/${userID}`)
            .then(response => response.data);
    },
    getUserStatus(userID) {
        return instanceWithoutWC.get(`profile/status/${userID}`)
            .then(response => response.data || '');
    },
    changeStatus(status) {
        return instance.put('profile/status', {status})
            .then(response => response.data);
    }
};
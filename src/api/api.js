import * as axios from "axios";

const instance = axios.create({

    withCredentials: true,
    headers: {
        "API-KEY": '2c166ae1-f751-44b5-a004-440a069db72a'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'

});

export const usersAPI = {

    getUsers(currentPage = 1,pageSize = 10) {
        return instance.get(`users?page=${currentPage}&
        count=${pageSize}`).then(response => response.data);
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    auth() {
        return instance.get(`auth/me`)
    },
    getProfileUser(userId) {
        return instance.get(`profile/${userId}`)
    }
}


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
    }
}


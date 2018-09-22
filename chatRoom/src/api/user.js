import fetch from './fetch';

export default {
    getUser(params) { // 获取所有用户
        return fetch.get('/getUser', params);
    },
    login(params) { // 登录
        return fetch.post('/login', params);
    },
    signUp(params) { // 注册
        return fetch.post('/signUp', params);
    },
    loginOut() { // 注册
        return fetch.post('/loginOut');
    },
    getUserInfo() { //获取用户信息
        return fetch.post('/getUserInfo');
    },
    upUserInfo(params) { // 设置主题
        return fetch.post('/upUserInfo', params);
    },
    getUserDetail() { // 获取个人设置用户信息
        return fetch.post('/getUserDetail');
    }
}


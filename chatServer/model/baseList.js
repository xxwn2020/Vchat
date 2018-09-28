/**
 * Created by wyw on 2018/9/27.
 */
const db = require('../utils/database');
let accountBase = db.model("accountBase", {
    code: String,
    status: String, // 1 已使用 0 未使用
    special: String,
    type: String, // 1 用户 2 群聊
    random: Number
});
let users = db.model("users", { //Schema
    name: {type: String, unique: true},
    pass: String,
    code: {type: String, unique: true}, // 唯一的code
    photo: {type: String, default: '/img/picture.png'}, // 默认头像
    signature: { type: String, default: '这个人很懒，暂时没有签名哦！' },
    nickname: { type: String, default: 'vChat-' + Date.now()},
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    sex: { type: String, default: '3' }, // 0 男 1 女 3 保密
    bubble: { type: String, default: 'vchat' }, // 气泡
    chatTheme: { type: String, default: 'vchat' }, // 聊天主题
    projectTheme: { type: String, default: 'vchat' }, // 项目主题
    wallpaper: { type: String, default: 'vchat' }, // 聊天壁纸
    signUpTime: { type: Date, default: Date.now() }, // 注册时间
    lastLoginTime: { type: Date, default: Date.now() } // 最后一次登录
});
module.exports = {
    accountBase,
    users
};
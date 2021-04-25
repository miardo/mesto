export default class UserInfo {
    constructor({ name, info }) {
        this._name = document.querySelector(name);
        this._info = document.querySelector(info);
    }

    getUserInfo() {
        const userInfo = {
            name: this._name.textContent,
            info: this._info.textContent
        }
        return userInfo;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._info.textContent = data.info;
    }

}
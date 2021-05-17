export default class UserInfo {
    constructor({ name, about }) {
        this._name = document.querySelector(name);
        this._info = document.querySelector(about);
        this._avatar = document.querySelector('.profile__photo');
    }

    getUserInfo() {
        const userInfo = {
            name: this._name.textContent,
            about: this._info.textContent,
            userId: this._id
        }
        return userInfo;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._info.textContent = data.about;
        this._id = data._id;
        if (data.avatar) {
            this._avatar.src = data.avatar;
        };
    }

}
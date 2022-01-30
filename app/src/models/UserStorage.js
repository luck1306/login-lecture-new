"use strict";

const fs = require("fs").promises;

class UserStorage {

    static #getUserInfo(data ,id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static getUsers(...fields) {
        fs.readFile("./src/databases/users.json")
            .then((data) => {
                const newUsers = fields.reduce((newUsers, field) => {
                    if (users.hasOwnProperty(field)) { // hasOwnProperty는 객체에 해당 키값이 있는지 확인
                        newUsers[field] = users[field];
                    }
                    return newUsers;
                }, {});
                return newUsers;
            })
            .catch(console.error);
    }

    static getUserInfo(id) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }

    static save(userInfo) {
        // const users = this.#users;
        // users.id.push(userInfo.id);
        // users.name.push(userInfo.name);
        // users.psword.push(userInfo.psword);
        // return {success :true};
    }
}

module.exports = UserStorage;
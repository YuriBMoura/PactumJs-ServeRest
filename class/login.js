import { requestWithBody } from "../helpers/requestsAux.js";
import { apiMethods } from "./global/apiMethods.js";

const routes = {
    getLogin: {
        method: apiMethods.post,
        path: 'https://serverest.dev/login',
    }
}

class Login {
    body = null
    constructor(user, password) {
        this.body = {
            'email': user,
            'password': password
        }
    }
};

export async function doLogin(_user, _password) {
    let login = new Login(_user, _password)
    return requestWithBody(routes.getLogin.method, routes.getLogin.path, login.body)
}

export async function getToken(_user, _password) {
    const response = await doLogin(_user, _password)
    return response.body.authorization
}
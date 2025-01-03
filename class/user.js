import { requestSimple, requestWithQueryParams } from "../helpers/requestsAux.js";
import { apiMethods } from "./global/apiMethods.js";

const routes = {
    getUser: {
        method: apiMethods.get,
        path: 'https://serverest.dev/usuarios'
    },
    getUserWithValue: {
        method: apiMethods.get,
        path: `https://serverest.dev/usuarios/_id`,
    },
    deleteUserWithValue: {
        method: apiMethods.delete,
        path: `https://serverest.dev/usuarios/_id`,
    },
    putUserWithValue: {
        method: apiMethods.put,
        path: `https://serverest.dev/usuarios/_id`,
    }
}

class User {
    nome = null;
    email = null;
    password = null;
    administrador = null;
    id = null;
    body = null;
    parameters = null;
};

export async function getUser(queryParams = undefined, values = undefined) {
    if (arguments.length == 0) {
        return await requestWithQueryParams(routes.getUser.method, routes.getUser.path, undefined, undefined)
    } else if (arguments.length == 1) {
        return await requestWithQueryParams(routes.getUser.method, routes.getUser.path, undefined, queryParams)
    } else {
        let _path = await replacePathValue(routes.getUserWithValue.path,values)
        return await requestSimple(routes.getUser.method, _path)
    }
}

/**
 * 
 */
async function replacePathValue(path,values) {
    let _path = path
    values.forEach(element => {
        _path = _path.replace(element.key,element.value)
    });
    return _path
}
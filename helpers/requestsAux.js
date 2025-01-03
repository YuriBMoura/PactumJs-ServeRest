import pkg from 'pactum';
const { spec } = pkg;


export async function requestSimple(method, path) {
    const _spec = spec();
    _spec.withMethod(method)
    _spec.withPath(path)
    const response = await _spec.toss()
    return response
}

export async function requestWithBody(method, path, body) {
    const _spec = spec();
    _spec.withMethod(method)
    _spec.withPath(path)
    _spec.withBody(body)
    const response = await _spec.toss()
    return response
}

export async function requestWithQueryParams(method, path, body = undefined, queryParams = undefined) {
    const _spec = spec();
    _spec.withMethod(method)
    _spec.withPath(path)
    if (queryParams != undefined)
        _spec.withQueryParams(queryParams)
    if (body != undefined)
        _spec.withBody(body)
    const response = await _spec.toss()
    return response
}

export function ValidateResponseStatusCode(response, code) {
    return response.statusCode == code
}

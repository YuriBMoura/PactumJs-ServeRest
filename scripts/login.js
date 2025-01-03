import { doLogin } from "../class/login.js"
import { assert } from "chai"
import { loginTestData } from "../data/login.js"

it('Realizar login - com sucesso', async () => {
    const response = await doLogin(loginTestData.loginSuccess.user, loginTestData.loginSuccess.password)
    assert.isBelow(response.responseTime, loginTestData.responseTime, `A resposta do servidor ${response.responseTime}ms foi superior a ${loginTestData.responseTime}ms`)
    assert.equal(response.statusCode, 200, 'O sistema esperava que a API retorna-se statusCode igual a 200')
    assert.hasAllKeys(response.body, ['message', 'authorization'], 'O body da resposta não possui os campos esperados de acordo com o Swagger')
})

it('Realizar login - com usuário inválido', async () => {
    const response = await doLogin(loginTestData.loginFail.user, loginTestData.loginFail.password)
    assert.isBelow(response.responseTime, loginTestData.responseTime, `A resposta do servidor ${response.responseTime}ms foi superior a ${loginTestData.responseTime}ms`)
    assert.equal(response.statusCode, 401, 'O sistema esperava que a API retorna-se statusCode igual a 401')
    assert.hasAllKeys(response.body, ['message'], 'O body da resposta não possui os campos esperados de acordo com o Swagger')
})
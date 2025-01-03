import { assert } from "chai"
import { getUser } from "../class/user.js"
import { userTestData } from "../data/user.js"

it('Realizar consulta de usuários', async () => {
    const response = await getUser()
    assert.equal(response.statusCode, 200, `O statusCode esperado era 200, mas foi retornardo ${response.statusCode}`)
    //assert.equal(response.body.quantidade, 280, 'A quantidade esperada de registro na base de dados era de 280 usuários')
    assert.isBelow(response.responseTime, userTestData.responseTime, `A requisição demorou mais de 1000ms para retornar, tempo total de processamento: ${response.responseTime}ms`)
})

it('Realizar consulta de usuários - por ID - QueryParams', async () => {
    const response = await getUser(userTestData.getUserIdNameEmailAdministrator)
    assert.equal(response.statusCode, 200, `O statusCode esperado era 200, mas foi retornardo ${response.statusCode}`)
    assert.equal(response.body.quantidade, 1, 'A quantidade esperada de registro na base de dados era de 1 usuário')
    assert.equal(response.body.usuarios[0]._id, userTestData.getUserIdNameEmailAdministrator._id, `O _id do usuário ${response.body.usuarios[0]._id} não esta confrome o esperado ${userTestData.getUserIdNameEmailAdministrator._id}`)
    assert.equal(response.body.usuarios[0].nome, userTestData.getUserIdNameEmailAdministrator.nome, `O nome do usuário ${response.body.usuarios[0].nome} não esta confrome o esperado ${userTestData.getUserIdNameEmailAdministrator.nome}`)
    assert.equal(response.body.usuarios[0].email, userTestData.getUserIdNameEmailAdministrator.email, `O email do usuário ${response.body.usuarios[0].email} não esta confrome o esperado ${userTestData.getUserIdNameEmailAdministrator.email}`)
    assert.equal(response.body.usuarios[0].administrador, userTestData.getUserIdNameEmailAdministrator.administrador, `O identificador de adminsitrador do usuário ${response.body.usuarios[0].administrador} não esta confrome o esperado ${userTestData.getUserIdNameEmailAdministrator.administrador}`)
    assert.isBelow(response.responseTime, userTestData.responseTime, `A requisição demorou mais de 1000ms para retornar, tempo total de processamento: ${response.responseTime}ms`)
})

it('Realizar consulta de usuários - por ID', async () => {
    const response = await getUser(undefined, userTestData.getUserById.searchKey)
    assert.equal(response.statusCode, 200, `O statusCode esperado era 200, mas foi retornardo ${response.statusCode}`)
    assert.equal(response.body._id, userTestData.getUserById.expectResult._id, `O _id do usuário ${response.body._id} não esta confrome o esperado ${userTestData.getUserById.expectResult._id}`)
    assert.equal(response.body.nome, userTestData.getUserById.expectResult.nome, `O nome do usuário ${response.body.nome} não esta confrome o esperado ${userTestData.getUserById.expectResult.nome}`)
    assert.equal(response.body.email, userTestData.getUserById.expectResult.email, `O email do usuário ${response.body.email} não esta confrome o esperado ${userTestData.getUserById.expectResult.email}`)
    assert.equal(response.body.administrador, userTestData.getUserById.expectResult.administrador, `O identificador de adminsitrador do usuário ${response.body.administrador} não esta confrome o esperado ${userTestData.getUserById.expectResult.administrador}`)
    assert.isBelow(response.responseTime, userTestData.responseTime, `A requisição demorou mais de 1000ms para retornar, tempo total de processamento: ${response.responseTime}ms`)
})
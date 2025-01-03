export const userTestData = {
    getUserId: {
        _id: '0kBC5LFTL5l0xwvW'
    },
    getUserName: {
        nome: 'usuario'
    },
    getUserEmail: {
        email: 'user_tc4y00ai29j@test.com'
    },
    getUserPassword: {
        password: 'senha123'
    },
    getUserAdministrator: {
        administrador: 'true'
    },
    getUserIdName: {
        _id: '0kBC5LFTL5l0xwvW',
        nome: 'usuario'
    },
    getUserIdNameEmail: {
        _id: '0kBC5LFTL5l0xwvW',
        nome: 'usuario',
        email: 'user_tc4y00ai29j@test.com'
    },
    getUserIdNameEmailAdministrator: {
        _id: '0VAbbW89JCQkLkGb',
        nome: "João Silva",
        email: "joao.silva1735874209177@teste.com",
        administrador: "true"
    },
    getUserById: {
        searchKey: [{
            key: '_id',
            value: '0uxuPY0cbmQhpEz1'
        }],
        expectResult: {
            nome: 'Fulano da Silva',
            email: 'fulanteso@qa.com',
            password: 'teste',
            administrador: 'true',
            _id: '0uxuPY0cbmQhpEz1'
        }
    },
    responseTime: 1000
}
import {fastify} from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const database = new DatabaseMemory()
const server = fastify()

server.get('/', () => {
    return 'Rota padrão'
})

server.post('/hamburguer', (request, reply) => {
// Acessando dados do corpo da requisição
    const {nome, tipo_pao, preco} = request.body
// Exibindo dados
//    console.log(body)
   
    // return 'cadastrar'
    database.create({
        nome: nome,
        tipo_pao: tipo_pao,
        preco: preco,
    })

    return reply.status(201).send
})

server.get('/hamburguer', (request) => {
    const search = request.query.search
    console.log(search)
    const hamburgueres = database.list(search)
    console.log(hamburgueres)
    return hamburgueres
})

server.put('/hamburgueres/:id', (request, reply) => {
    const hamburguerId = request.params.id
    const {nome, tipo_pao, preco} = request.body
    const hamburguer = database.update(hamburguerId, {
        nome: nome,
        tipo_pao: tipo_pao,
        preco: preco,
    })
    return reply.status(204).send()
})

server.delete('/hamburgueres/:id', (request, reply) => {
    const hamburguerId = request.params.id

    database.delete(hamburguerId)

    return reply.status(204).send()
}) 

server.listen({
    port: 3333,
})

import {fastify} from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const database = new DatabaseMemory()
const server = fastify()

server.get('/', () => {
    return 'Rota padrão'
})

server.post('/carro', (request, reply) => {
// Acessando dados do corpo da requisição
    const {cor, modelo, marca} = request.body
// Exibindo dados
//    console.log(body)
   
    // return 'cadastrar'
    database.create({
        cor: cor,
        amodelo: modelo,
        marca: marca,
    })

    return reply.status(201).send
})

server.get('/carro', (request) => {
    const search = request.query.search
    console.log(search)
    const carros = database.list(search)
    console.log(carros)
    return carros
})

server.put('/carros/:id', (request, reply) => {
    const carroId = request.params.id
    const {cor, modelo, marca} = request.body
    const carro = database.update(carroId, {
        cor: cor,
        amodelo: modelo,
        marca: marca,
    })
    return reply.status(204).send()
})

server.delete('/carros/:id', (request, reply) => {
    const carroId = request.params.id

    database.delete(carroId)

    return reply.status(204).send()
}) 

server.listen({
    port: 3333,
})

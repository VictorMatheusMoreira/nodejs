import { fastify } from "fastify";
import { DatabaseMemory } from './database-memory';

const server = fastify() 

const database = new DatabaseMemory()

server.post('/videos', () => {
    database.create({
        title: 'video 01',
        description: 'esse e o 1 video',
        duration: 180
    })
})

server.get('/videos', () => {
    return 'hello world porra'
})

server.put('/videos/:id', () => {

})

server.delete('/videos/:id', () => {
     
})





server.listen({
    port: 3000
})
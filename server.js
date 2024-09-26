import { fastify } from "fastify";
import { DatabaseMemory } from './database-memory.js';

const server = fastify() 

const database = new DatabaseMemory()

server.post('/videos', (req, res) => {

    const {title, description, duration } = req.body

    database.create({
        title: title,
        description: description,
        duration: duration
    })

    return res.status(201).send()
})

server.get('/videos', (req, res) => {
    const videos = database.list()

    return videos


})

server.put('/videos/:id', (req, res) => {
    const videoId = req.params.id
    const {title, description, duration } = req.body

    const video = database.update(videoId, {
        title, 
        description, 
        duration
    })

    return res.status(204).send()

})

server.delete('/videos/:id', () => {
    const videoId = req.params.id

    database.delete(videoId)

    return res.status(204).send()

})





server.listen({
    port: 3000
},()=>{
    console.log('server is running F*#$')
})
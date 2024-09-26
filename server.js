import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres.js";
import { sql } from "./db.js";

const server = fastify() 

const database = new DatabasePostgres()

 server.post('/videos', async (req, res) => {

    const {title, description, duration } = req.body

    await database.create({
        title: title,
        description: description,
        duration: duration
    })

    return res.status(201).send()
})

server.get('/videos', async (req, res) => {
    const videos = await database.list()

    return videos


})

server.put('/videos/:id', async (req, res) => {
    const videoId = req.params.id
    const {title, description, duration } = req.body

    await database.update(videoId, {
        title, 
        description, 
        duration
    })

    return res.status(204).send()

})

server.delete('/videos/:id', async (req, res) => {
    const videoId = req.params.id

    await database.delete(videoId)

    return res.status(204).send()

})





server.listen({
    port: 3000
},()=>{
    console.log('server is running dude')
})
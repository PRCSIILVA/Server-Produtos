
import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres.js";

const server = fastify();

const database = new DatabasePostgres();

// Request body



// Create product register
server.post('/produtos', async (request, response)=>{

    const { name, brand, model, year, color, size, price, amount } = request.body
    
     
    await database.create({
        name,
        brand,
        model,
        year,
        color,
        size,
        price,
        amount
    })

    return response.status(201).send()

})

// search product 
 server.get('/produtos', async (request)=>{
    const search = request.query.search

    const produtos = await database.list(search)

    return produtos

})

// update product
server.put('/produtos/:id', async (request, response)=>{
    const produtoId = request.params.id;
    const { name, brand, model, year, color, size, price, amount } = request.body

   await database.update(produtoId,{
        name,
        brand,
        model,
        year,
        color,
        size,
        price,
        amount
    })

    return response.status(204).send()

})
// delete product
server.delete('/produtos/:id', async(request, response)=>{
    const produtoId = request.params.id;

    await database.delete(produtoId)

    return response.status(204).send()

})

server.listen({
    port:process.env.PORT ?? 3333,
})

import { randomUUID } from "node:crypto"
import { sql } from "./db.js"

export class DatabasePostgres{


   async list(search)  {
        let produtos
        if(search){
        produtos = await sql`select * from produtos where name ilike ${'%' + search + '%'}`
        }else{
            produtos = await sql`select * from produtos`
        }
        return produtos

    }

   async create(produto) {
    const produtoId = randomUUID()

    const{ name, brand, model, year, color, size, price, amount} = produto

    await sql`insert into produtos (id, name, brand, model, year, color, size, price, amount) VALUES (${produtoId},${name},${brand},${model},${year},${color},${size},${price},${amount})`
    }

    async update(id, produto) {
        const{ name, brand, model, year, color, size, price, amount} = produto

        await sql`update produtos set name = ${name}, brand = ${brand}, model = ${model}, year = ${year}, color = ${color}, size = ${size}, price = ${price}, amount = ${amount} WHERE id = ${id}`
    }
    async delete(id) {
        await sql`delete from produtos WHERE id = ${id}`
    }


}
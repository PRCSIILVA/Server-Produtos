import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS Produtos`.then(()=>{
//     console.log('Tabela apagada!')
// })

// sql`
// CREATE TABLE Produtos (
//     id TEXT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     brand VARCHAR(255) NOT NULL,
//     model VARCHAR(255) NOT NULL,
//     year VARCHAR(255),
//     color VARCHAR(50),
//     size VARCHAR(50),
//     price DECIMAL(10, 2),
//     amount VARCHAR(255)
// );
// `.then(()=> {
//     console.log("Tabela criada!")
// })
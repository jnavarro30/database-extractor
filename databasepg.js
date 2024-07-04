const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'root',
    database: 'postgres',
})

client.connect()

client.query(`SELECT * from pets`, (err, res) => {
    try {
        console.log(res.rows, 'kinda works')
    } catch (err) {
        console.log(err.message)
    }
    client.end
})
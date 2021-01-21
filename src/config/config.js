// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-db9d371ed40202bc1cfefb796a5f345482c89474.cijlyrkvdcx1.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: ')2uqM3%9v|L_y&S7-3{0#)sz?.9&49tc'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}
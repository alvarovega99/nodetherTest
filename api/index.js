const { dbConnection } = require('./src/bd/connection')
const http = require('./src/app')

require('dotenv').config()

dbConnection()

http.listen(process.env.SERVER_PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.SERVER_PORT}`)
})

import knex from 'knex'
import path from 'path'

const db = knex({ //conexão com banco de dados
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true, //usa nulo como padrão para campos não definidos no banco de dados
})

export default db
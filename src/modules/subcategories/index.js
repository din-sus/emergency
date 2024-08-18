const { readFileSync } = require('fs')

const typeDefs = readFileSync(__dirname + '/schema.gql', 'utf-8')
const resolvers = require('./resolvers.js')

module.exports = {
    typeDefs,
    resolvers
}



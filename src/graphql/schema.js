const { makeExecutableSchema } = require('@graphql-tools/schema')
const _ = require('../modules/nmadur/index.js') // have to get typeDefs and resolvers from modules -> index.js

let schema = makeExecutableSchema({
    typeDefs: [], // typeDefs from index
    resolvers: [] // resolvers from index
})

// module.exports = schema -> this schema has to be exported to main index which is located in graphql file
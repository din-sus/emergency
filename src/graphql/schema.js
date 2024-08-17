const { makeExecutableSchema } = require('@graphql-tools/schema')
const category = require('../modules/categories/index.js') // have to get typeDefs and resolvers from modules -> index.js

let schema = makeExecutableSchema({
    typeDefs: [category.typeDefs], // typeDefs from index
    resolvers: [category.resolvers] // resolvers from index
})

module.exports = schema
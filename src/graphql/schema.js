const { makeExecutableSchema } = require('@graphql-tools/schema')
const category = require('../modules/categories/index.js') // have to get typeDefs and resolvers from modules -> index.js
const user = require('../modules/users/index.js')
const subcategory = require('../modules/subcategories/index.js')

let schema = makeExecutableSchema({
    typeDefs: [category.typeDefs, user.typeDefs, subcategory.typeDefs], // typeDefs from index
    resolvers: [category.resolvers, user.resolvers, subcategory.resolvers] // resolvers from index
})

module.exports = schema
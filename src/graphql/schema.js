const { makeExecutableSchema } = require('@graphql-tools/schema')
const category = require('../modules/categories/index.js') // have to get typeDefs and resolvers from modules -> index.js
const user = require('../modules/users/index.js')
const subcategory = require('../modules/subcategories/index.js')
const situation = require('../modules/situation/index.js')

let schema = makeExecutableSchema({
    typeDefs: [category.typeDefs, user.typeDefs, subcategory.typeDefs, situation.typeDefs], // typeDefs from index
    resolvers: [category.resolvers, user.resolvers, subcategory.resolvers, situation.resolvers] // resolvers from index
})

module.exports = schema
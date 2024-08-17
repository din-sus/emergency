const pubsub = require('../../graphql/pubsub.js')
const {fetchData} = require('../../config/postgres.js')

const resolvers = {
    Query: {
        categories: async() => {
            let categories = await fetchData('SELECT * FROM categories')
            return categories
        }
    },

    Mutation: {
        createCategory: async(_, {name}) => {
            let category = await fetchData('INSERT INTO categories(name) VALUES ($1)', name)
            let categories = await fetchData('SELECT * FROM categories')
            pubsub.publish('CREATE_CATEGORY', {categories})
            return categories
        },

        updateCategory: async(_, {id, name}) => {
            let category = await fetchData('UPDATE categories SET name = $1 WHERE id = $2', name, id)
            let categories = await fetchData('SELECT * FROM categories')
            pubsub.publish('UPDATE_CATEGORY', {categories})
            return categories
        },

        deleteCategory: async(_, {id}) => {
            let category = await fetchData('DELETE FROM categories WHERE id = $1', id)
            let categories = await fetchData('SELECT * FROM categories')
            pubsub.publish('DELETE_CATEGORY', {categories})
            return categories
        }
    },

    Subscription: {
        categories: {
            subscribe: () => pubsub.asyncIterator(['CREATE_CATEGORY', 'UPDATE_CATEGORY', 'DELETE_CATEGORY'])
        }
    }
}

module.exports = resolvers

const pubsub = require('../../graphql/pubsub.js')
const {fetchData} = require('../../config/postgres.js')

const resolvers = {
    Query: {
        subcategories: async() => {
            return await fetchData('SELECT * FROM subcategories')
        }
    },

    Subcategory: {
        users: async(parent) => {
            return await fetchData('SELECT * FROM users WHERE id = $1', parent.user_id)
        },
        
        categories: async(parent) => {
            return await fetchData('SELECT * FROM categories WHERE id = $1', parent.category_id)
        }
    },

    Mutation: {
        createSubcategory: async(_, {name, location, category_id, user_id}) => {
            await fetchData('INSERT INTO subcategories (name, location, category_id, user_id) VALUES ($1, $2, $3, $4)', name, location, category_id, user_id)

            await fetchData('INSERT INTO situation (state, action_id, from_id) VALUES($1, $2, $3)', "started", category_id, user_id)
            
            let sub = await fetchData('SELECT * FROM subcategories')
            pubsub.publish('CREATE_SUB', {sub})
            return sub
        },

        deleteSubcategory: async(_, {id}) => {
            await fetchData('DELETE FROM subcategories WHERE id = $1', id)
            let sub = await fetchData('SELECT * FROM subcategories')
            pubsub.publish('DELETE_SUB', {sub})
            return sub
        }
    },

    Subscription: {
        subcategories: {
            subscribe: ()=> pubsub.asyncIterator(['CREATE_SUB', 'DELETE_SUB'])
        }
    }
}

module.exports = resolvers
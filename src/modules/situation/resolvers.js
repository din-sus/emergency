const pubsub = require('../../graphql/pubsub.js')
const {fetchData} = require('../../config/postgres.js')

const resolvers = {
    Query: {
        situations: async() => {
            return await fetchData('SELECT * FROM situation')
        }
    },

    Situation: {
        category: async(parent) => {
            return await fetchData('SELECT * FROM categories WHERE id = $1', parent.action_id)
        },

        user: async(parent) => {
            return await fetchData('SELECT * FROM users WHERE id = $1', parent.from_id)
        }
    },

    Mutation: {
        updateSituation: async(_, {id, state}) => {
            await fetchData('UPDATE situation SET state = $1 WHERE id = $2', state, id)

            let situation = await fetchData('SELECT * FROM situation')
            pubsub.publish('UPDATE_SITUATION', {situation})
            return situation
        }
    },

    Subscription: {
        situations: {
            subscribe: () => pubsub.asyncIterator(['UPDATE_SITUATION'])
        }
    }
}

module.exports = resolvers


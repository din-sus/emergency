const pubsub = require('../../graphql/pubsub.js')
const {fetchData} = require('../../config/postgres.js')

const resolvers = {
    Query: {
        users: async() => {
            let users = await fetchData('SELECT * FROM users')
            return users
        }
    },

    Mutation: {
        register: async(_, {name, password}) => {
            await fetchData('INSERT INTO users(name, password) VALUES ($1, $2)', name, password)
        },

        login: async(_, {name, password}) => {
            let user = await fetchData('SELECT * FROM users WHERE name = $1 AND password = $2', name, password)
            if(user){
                return user
            }
        }
    }
}

module.exports = resolvers




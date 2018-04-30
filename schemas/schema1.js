// ===[ REQ-DEP ]======================================================
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = graphql
const axios =require('axios')





// ===[ GraphQL Data Types ]=================================================
const CompanyType7 = new GraphQLObjectType({
    name: 'Company',
    fields: () => { return {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        users: {
            type: new GraphQLList(UserType1),
            resolve(parentValue, args){
                return axios.get(`http://localhost:3000/companies/${parentValue.id}/users`)
                            .then((resp) => { return resp.data })
            }
        }
    }}
})

const UserType1 = new GraphQLObjectType({
    name: 'User',
    fields: () => { return {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        company: { 
            type: CompanyType7,
            resolve(parentValue, args){
                return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
                            .then((resp) => { return resp.data })
            }
        }
    }}
})





// ===[ RootQuery ]======================================================
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType1,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/users/${args.id}`)
                            .then((resp) => { return resp.data })
            }
        },
        company: {
            type: CompanyType7,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args){
                return axios.get(`http://localhost:3000/companies/${args.id}`)
                            .then((resp) => { return resp.data })
            }
        }
    }
})





// ===[ Mutation ]======================================================
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {                        //<-- Add new user.
            type: UserType1,
            args: {
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: GraphQLInt },
                companyId: { type: GraphQLString }
            },
            resolve(parentValue, { firstName, age, companyId }){
                return axios.post('http://localhost:3000/users', { firstName, age, companyId })
                            .then((resp) => { return resp.data })
            }
        },
        deleteUser: {                       //<-- Delete User.
            type: UserType1,
            args: {
              id: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, { id }) {
              return axios.delete(`http://localhost:3000/users/${id}`)
                          .then(res => res.data);
            }
        },
        updateUser: {                       //<-- Update user. 
            type: UserType1,
            args: {
              id: { type: new GraphQLNonNull(GraphQLString) },
              firstName: { type: GraphQLString },
              age: { type: GraphQLInt },
              companyId: { type: GraphQLString }
            },
            resolve(parentValue, args) {
              return axios.patch(`http://localhost:3000/users/${args.id}`, args )
                          .then(res => res.data);
            }
        }
    }
})






// ===[ Exporting ]======================================================
module.exports = new GraphQLSchema({ mutation, query: RootQuery })


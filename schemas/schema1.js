// ===[ REQ-DEP ]======================================================
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql
const axios =require('axios')



// ===[ GraphQL Types ]=================================================
const CompanyType7 = new GraphQLObjectType({
    name: 'Company',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString }
    }
})

const UserType1 = new GraphQLObjectType({
    name: 'User',
    fields: {
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
    }
})



// ===[ RootQueries ]======================================================
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
        }
    }
})


// ===[ Exporting ]======================================================
module.exports = new GraphQLSchema({ query: RootQuery })
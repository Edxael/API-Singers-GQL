// ===[ REQ-DEP ]======================================================
const app = require('express')()
const expressGQL = require('express-graphql')
const myUserSchema = require('./schemas/schema1')



// ===[ MIDDLEWARE ]====================================================
app.use('/pg', expressGQL({              // <---Allows calls to the dev-env-query-tool
    schema: myUserSchema,
    graphiql: true
}))   



// ===[ LISTENER ]======================================================
app.listen(4000, () => {
    console.log("Server Linstening on Port: 4000...")
})


// ===[ REQ-DEP ]======================================================
const app = require('express')()
const expressGQL = require('express-graphql')
const myUserSchema = require('./schemas/schema1')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')  




// ===[ Conecting to the DataBase ]====================================
mongoose.connect( process.env.MongoLabsLink , (err) => {
  console.log( (err) ? ("MLabs Conection to DataBase: FAIL..... \n   --> " + err ) : "Conection to DataBase: SUCCESS... \n." )
})




// ===[ MIDDLEWARE ]====================================================
app.use(bodyParser.json());

app.use('/graphql', expressGQL({              // <---Allows calls to the dev-env-query-tool
    schema: myUserSchema,
    graphiql: true
}))   




// ===[ LISTENER ]======================================================
app.listen(4000, () => {
    console.log("Server Linstening on Port: 4000...")
})



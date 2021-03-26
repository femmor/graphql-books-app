const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')

const PORT = 4000
const app = express()

// middleware
app.use('/graphql', graphqlHTTP({
  schema
}))

app.listen(PORT, () => {
  console.log(`Now listening for requests on port ${PORT}`);
})
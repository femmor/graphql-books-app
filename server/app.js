const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const PORT = 4000
const app = express()

// middleware
app.use('/graphql', graphqlHTTP({
  
}))

app.listen(PORT, () => {
  console.log(`Now listening for requests on port ${PORT}`);
})
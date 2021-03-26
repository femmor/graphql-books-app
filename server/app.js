const express = require('express')
const PORT = 4000
const app = express()

app.listen(PORT, () => {
  console.log(`Now listening for requests on port ${PORT}`);
})
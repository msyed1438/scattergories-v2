const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use('/', express.static(path.join(__dirname, '../dist')))

app.listen(port, () => console.log(`App listening on port ${port}!`))
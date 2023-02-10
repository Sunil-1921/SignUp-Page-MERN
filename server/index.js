const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

app.post('/api/register', (req, res) => {
    // res.send('hello world!')
    console.log(req.body)
    res.json({ status: 'ok' })
})

app.listen(1337, () => {
    console.log('Server started on 1337')
})
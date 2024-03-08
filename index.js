require('dotenv').config();
console.log('Environment variables loaded:', process.env.PORT);
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('hey what are you doing here go and Code')
})

app.get('/login', (req, res) => {
    res.send(`<h1> please login at chai aur code<h1>`)
})

app.listen(port, () => {
    console.log(`This app listening on port http://localhost:${port}`)
})
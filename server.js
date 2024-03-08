import express from 'express'  // WE have to use the "type":"module" in the package.json file in the Dependencies
const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');

});

// get a list of 5 jokes    
app.get('jokes', (req, res) => {

})



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`)
});


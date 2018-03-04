const path = require('path');
const express = require('express');
const app = express();

const publicPath = path.join(__dirname, '..','build');
app.use(express.static(publicPath));
app.get('*', (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is up! listening on ${port}`)
})
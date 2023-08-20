const express = require('express');
const path = require('path');
// const fs = require('fs').promises

const app = express()

const port = 3002;

app.use(express.static('public'));

const homepagepath = path.join(__dirname, 'public', 'index.html')
const notFoundPagePath = path.join(__dirname, 'public', '404.html')

app.get('/index.html', (req, res) => {
    res.sendFile(homepagepath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
        }
    });

})

app.get("*", (req, res) => {
    res.sendFile(notFoundPagePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
        }
    });
})

app.listen(port, () => console.log(`listening on port: ${port}`))
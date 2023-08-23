const express = require('express');
const bodyParserMiddleware = require('./middleware/bodyParserMiddleware');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();
const port = 3000;

app.use(bodyParserMiddleware);

app.use('/inventory', inventoryRoutes);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
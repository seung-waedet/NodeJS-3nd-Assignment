const express = require('express');
const bodyParserMiddleware = require('./middleware/bodyParserMiddleware');
const inventoryRoutes = require('./routes/inventoryRoutes');
const usersRoutes = require('./routes/usersRoutes')

const app = express();
const port = 3000;

app.use(bodyParserMiddleware);

app.use('/inventory', inventoryRoutes);

app.use('/users', usersRoutes)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
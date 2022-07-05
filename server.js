const express = require('express');
const app = express();

const routes = require('./api_routes/routes');
routes(app);
const port = 3000;

app.listen(port, () => {
console.log(`Listening to port http://localhost:${port}`);
});


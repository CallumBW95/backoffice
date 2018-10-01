//npm modules
const express = require('express');

const keys = require('./config/keys');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/build', express.static(__dirname + 'admin/build'));

app.get('/', (req, res) => res.send(keys));
require("./routes/authRoutes")(app);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
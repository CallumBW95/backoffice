//npm modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const keys = require('./config/keys');

require("./models/User");
require("./models/Page");

mongoose.connect(keys.mongoURI);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/build', express.static(__dirname + 'admin/build'));

require("./routes/authRoutes")(app);
require("./routes/apiRoutes")(app);

app.get('/*', (req, res) => res.send(keys));

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
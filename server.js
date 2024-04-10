require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});

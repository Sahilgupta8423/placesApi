const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const placeRouter = require("./routers/place");
const userRoutes = require('./routers/user')
require("./db/conn");
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: false }));
userRoutes.use(bodyParser.json())
app.use(bodyParser.json());
const Place = require("./models/places");
const port = process.env.PORT || 3000;
app.use('/user', userRoutes)
app.use(express.json());

// 3. we need to register our router
app.use(placeRouter);

app.listen(port, () => {
  console.log(`listening at port no ${port}`);
});

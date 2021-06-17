const mongoose = require("mongoose");

mongoose // This will return a Promise.
  .connect("mongodb://localhost:27017/place-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Connection Succesful");
  })
  .catch((err) => {
    console.log(err);
  });


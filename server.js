const app = require("./app");
const mongoose = require("mongoose");
require('dotenv').config({ path: '.env.local' });
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION, APP SHUTTING NOW!!");
  console.log(err.message, err.name);
  process.exit(1);
});

const db = process.env.REACT_APP_MONGO_URI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  });

const port = 3000;

const server = app.listen(port, () => {
  console.log("Server is up listening on port:" + port);
});
const express = require('express');
const dotenv = require('dotenv').config();
const dbConnection = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 3000;

dbConnection();
const app = express();

app.use(express.json());
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
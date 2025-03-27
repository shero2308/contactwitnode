const express = require('express');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use("/api/contact", require("./routes/contactRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
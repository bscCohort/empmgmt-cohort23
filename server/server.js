const express = require("express")
const connectDB = require("./config/db")
const routes = require("./routes/api/books")

const app = express()

connectDB().then(() => {
    console.log("Connected to mongodb")
})

require("dotenv").config( { path: "./config.env" } )
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

app.use("/", routes)




const mongoose = require("mongoose")
const db = "mongodb+srv://bscCohort:Crimsy!2345@cluster0.ws1rq5o.mongodb.net/books?retryWrites=true&w=majority"



const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true)
    await mongoose.connect(db, {
      useNewUrlParser: true,
    })
  }
  catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB

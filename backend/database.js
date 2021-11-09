const mongoose = require('mongoose');
const {MONGODB_URI} = process.env

// TODO RECOMENDACIONES: cambiar esto de promesas a async/await
mongoose
  .connect(
    MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));


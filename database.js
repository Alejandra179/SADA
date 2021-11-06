const mongoose = require('mongoose');

mongoose
  .connect(
    "mongodb+srv://aleMz:aleMz@cluster0.wnv0l.gcp.mongodb.net/test?authSource=admin&replicaSet=atlas-nn5vcj-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));


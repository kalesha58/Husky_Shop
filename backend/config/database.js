const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
  
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    }).catch((err)=>{
        console.log(err)
    })
};

module.exports = connectDatabase;
// const mongoose = require("mongoose");

// const dbConnection = async () => {
//   return mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true} ,() => {
//     console.log("DB Connceted");
//   });
// };
// module.exports = dbConnection;

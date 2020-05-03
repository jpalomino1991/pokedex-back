const mongoose = require('mongoose');

const connect = () =>
  mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports.connect = connect;
const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = 'mongodb+srv://root:LCbZRzNjLtiGmoWB@series-react.zriqlrq.mongodb.net/?retryWrites=true&w=majority'

const connect = () => {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connect;
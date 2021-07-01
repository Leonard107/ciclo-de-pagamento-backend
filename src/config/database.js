const mongoose = require('mongoose')
//Pegando a api de promise do node e atribuindo para a api de promise do mongoose
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')
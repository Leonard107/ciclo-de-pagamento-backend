const mongoose = require('mongoose')
//Pegando a api de promise do node e atribuindo para a api de promise do mongoose
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true})


mongoose.Error.messages.general.required = "O atributo '{PATH} é obrigatório."
mongoose.Error.messages.Number.min = 
"O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = 
"O '{VALUE}' informado é maior que o limite maximo de '{MAX}'."
mongoose.Error.messages.String.enum = 
"'{VALUE}' não é valído para o atributo '{PATH}'."
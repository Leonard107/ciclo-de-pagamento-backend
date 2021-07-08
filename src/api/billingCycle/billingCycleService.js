const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
//new: Ao atualizar, retornar o objeto novo.
//runValidators: para as validações funcionarem
BillingCycle.updateOptions({new: true, runValidators: true})

module.exports = BillingCycle
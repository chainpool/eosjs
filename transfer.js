Eos = require('./src') // Eos = require('./src')

eos = Eos.Localnet({keyProvider: '5KfoXJLsWZTRQ6gmLUgrnd5k5G5SucSfE4299eRfL5MmDTHKL5e'})

// Run with no arguments to print usage.
eos.transfer()

// Usage with options (options are always optional)
options = {broadcast: false}

eos.transaction(tr => {
     tr.transfer({from: 'twryy4swtrj3', to: 'eosio', quantity: '1 EOS', memo: ''}, options)
     })

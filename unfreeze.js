Eos = require('./src') // Eos = require('./src')

//eos = Eos.Localnet({keyProvider: '5KfoXJLsWZTRQ6gmLUgrnd5k5G5SucSfE4299eRfL5MmDTHKL5e',
//                    httpEndpoint: 'http://192.168.1.234:8888'})

eos = Eos.Localnet({keyProvider: '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3',
                    httpEndpoint: 'http://192.168.1.185:8888'})
// Run with no arguments to print usage.

// Usage with options (options are always optional)
options = {broadcast: false}

eos.transaction(tr => {
     tr.unfreeze({voter : 'eosio',  bpname: 'eosio'}, options)
     })

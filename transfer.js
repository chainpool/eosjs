Eos = require('./src') // Eos = require('./src')

wif = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'
eos = Eos.Localnet({keyProvider: wif,
                    httpEndpoint: 'http://192.168.1.185:8888'})

// Run with no arguments to print usage.
eos.transfer()

// Usage with options (options are always optional)
options = {broadcast: false}

eos.transaction(tr => {
     tr.transfer({from: 'eosio', to: 'aaa', quantity: '10 EOS', memo: ''}, options)
     })

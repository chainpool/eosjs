Eos = require('./src') // Eos = require('./src')

wif = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'
eos = Eos.Localnet({keyProvider: wif,
                    httpEndpoint: 'http://192.168.1.185:8888'})

// Run with no arguments to print usage.
eos.vote()

// Usage with options (options are always optional)
options = {broadcast: false}

pubkey = 'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV'

eos.transaction(tr => {
     tr.vote({voter: 'eosio', bpname:"eosio", change: "-1 EOS"}, options)
     })

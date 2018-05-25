Eos = require('./src') // Eos = require('./src')

eos = Eos.Localnet({keyProvider: '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3',
                    httpEndpoint: 'http://192.168.1.185:8888'})

// Run with no arguments to print usage.
//eos.conproposal()

// Usage with options (options are always optional)
options = {broadcast: false}

eos.transaction(tr => {
     tr.createp({proposal :"upgradesys",creator:"eosio", data: {code_id: "code"} , expiration : "2018-05-28T12:00:00"}, options)
     })

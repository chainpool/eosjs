Eos = require('./src') // Eos = require('./src')

eos = Eos.Localnet({keyProvider: '5KfoXJLsWZTRQ6gmLUgrnd5k5G5SucSfE4299eRfL5MmDTHKL5e',
                    httpEndpoint: 'http://192.168.1.234:8888'})

// Run with no arguments to print usage.
//eos.conproposal()

// Usage with options (options are always optional)
options = {broadcast: false}

eos.transaction(tr => {
     tr.createp({proposal :"twryy4swtrj3",creator:"proa31", data: {code_id: "code"} , expiration : "2018-05-25T12:00:00"}, options)
     })

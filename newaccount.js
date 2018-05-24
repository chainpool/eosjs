Eos = require('./src') // Eos = require('./src')

wif = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'
pubkey = 'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV'

eos = Eos.Localnet({keyProvider: '5KfoXJLsWZTRQ6gmLUgrnd5k5G5SucSfE4299eRfL5MmDTHKL5e',
                    httpEndpoint: 'http://192.168.1.234:8888'})

eos.transaction(tr => {
  tr.newaccount({
    creator: 'twryy4swtrj3',
    name: 'ggg',
    owner: pubkey,
    active: pubkey
  })
})

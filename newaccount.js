Eos = require('./src') // Eos = require('./src')

wif = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'
pubkey = 'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV'

eos = Eos.Localnet({keyProvider: wif})

eos.transaction(tr => {
  tr.newaccount({
    creator: 'eosio',
    name: 'ontract11',
    owner: pubkey,
    active: pubkey
  })
})

const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const compiledFactory = require('./build/CampaignFactory.json')

const provider = new HDWalletProvider(
  // account mnemonic to access public and private keys
  'leader tent venue narrow defy garlic apple dress believe state truth tribe',
  'https://rinkeby.infura.io/v3/3b7ba3b48c314bc79e4f10e1e08a2bc4'
)
const web3 = new Web3(provider)

const deploy = async () => {
  const accounts = await web3.eth.getAccounts()

  console.log('Deploying from account: ', accounts[0])

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] })

  console.log('Interface: ', compiledFactory.interface)
  console.log('Contract deployed to: ', result.options.address)
}

deploy()

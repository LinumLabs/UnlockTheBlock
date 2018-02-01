// import { Connect } from 'uport-connect'

// export let uport = new Connect('TruffleBox')
// export const web3 = uport.getWeb3()


import { Connect, SimpleSigner } from 'uport-connect';

export const uport = new Connect('Pathfinder', {
  clientId: '2p1GJq3PRRL19cMTDPTAW7rfwca9QiYgzAH',
  network: 'rinkeby',
  signer: SimpleSigner('2f3eba3a2affdea692613c41b3b4525917c82d4b6588f35904977f4bdb41e8d6')
  //This signer key is suspect. Anybody can take it and do other stuff given that it's client side?????
});

export const web3 = uport.getWeb3();

import { ChainId } from 'leekswap-test-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', // TODO
  [ChainId.BSCTESTNET]: '0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A',
  [ChainId.MATIC]: '0x7b00f6e0bc0F90d938de02Eb9174735FfCe17E56',
  [ChainId.MATIC_TESTNET]: '0xf9d5cea631006DDaF5D18640351D43CebF1eF97d',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

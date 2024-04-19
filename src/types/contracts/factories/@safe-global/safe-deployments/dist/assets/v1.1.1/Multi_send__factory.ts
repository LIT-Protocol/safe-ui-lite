/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from 'ethers';
import type {
  Multi_send,
  Multi_sendInterface,
} from '../../../../../../@safe-global/safe-deployments/dist/assets/v1.1.1/Multi_send';

const _abi = [
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'bytes',
        name: 'transactions',
        type: 'bytes',
      },
    ],
    name: 'multiSend',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export class Multi_send__factory {
  static readonly abi = _abi;
  static createInterface(): Multi_sendInterface {
    return new Interface(_abi) as Multi_sendInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Multi_send {
    return new Contract(address, _abi, runner) as unknown as Multi_send;
  }
}

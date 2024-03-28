import Dexie, { Table } from 'dexie';

interface ISignature {
  signer: string;
  data: string;
}
export interface ITransaction {
  id?: number;
  hash: string;
  signatures: ISignature[];
}
export interface ISafe {
  id?: number;
  name: string;
  owners: string[];
}

export class MySubClassedDexie extends Dexie {
  public transactions!: Table<ITransaction>;
  public safes!: Table<ISafe>;

  public constructor() {
    super('1kx');
    this.version(1).stores({
      transactions: '++id, hash, signatures',
      safes: '++id, address, owners',
    });
  }
}

export const db = new MySubClassedDexie();

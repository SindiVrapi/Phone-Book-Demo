export interface RootDb {
  users: User[];
  nrTypes: NrType[];
}

export interface NrType {
  id: string;
  numbersType: string;
}

export interface User {
  id?: string;
  firstname: string;
  lastname: string;
  numbers: Number[];
}

export interface Number {
  id: string;
  numbersType: string;
  numberDigits: string;
}
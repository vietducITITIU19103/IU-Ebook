export interface Data {
    id: number;
    price: number;
    date: string;
    discountRate: number;
    name: string;
  }

 export type Order = 'asc' | 'desc';
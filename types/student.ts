import { Order } from "./order";


export interface Student {
  id: string;
  name: string;
  referralCode: string;
  totalSpent: number;
  orders: Order[];
}

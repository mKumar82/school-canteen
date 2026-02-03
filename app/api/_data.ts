// src/app/api/_data.ts

import { Order } from "@/types/order";
import { Student } from "@/types/student";


export let snacks = [
  { id: 1, name: "Samosa", price: 20, ordersCount: 0 },
  { id: 2, name: "Sandwich", price: 40, ordersCount: 0 },
  { id: 3, name: "Juice", price: 30, ordersCount: 0 },
];

export let students: Student[] = [
  {
    id: "1",
    name: "Rahul",
    referralCode: "REF123",
    totalSpent: 0,
    orders: [], // ✅ now typed as Order[]
  },
];

export let orders: Order[] = [];

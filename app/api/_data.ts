import { Order } from "@/types/order";
import { Student } from "@/types/student";

export let snacks = [
  { id: 1, name: "Samosa", price: 20, ordersCount: 0 },
  { id: 2, name: "Sandwich", price: 40, ordersCount: 0 },
  { id: 3, name: "Juice", price: 30, ordersCount: 0 },
  { id: 4, name: "Burger", price: 50, ordersCount: 0 },
  { id: 5, name: "Pizza", price: 100, ordersCount: 0 },
  { id: 6, name: "Pasta", price: 80, ordersCount: 0 },
  { id: 7, name: "Fries", price: 35, ordersCount: 0 },
  { id: 8, name: "Cold Drink", price: 25, ordersCount: 0 },
];

export let students: Student[] = [
  {
    id: "1",
    name: "Manish",
    referralCode: "REF123",
    totalSpent: 0,
    orders: [],
  },
];

export let orders: Order[] = [];

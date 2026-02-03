// src/app/api/orders/route.ts
import { delay } from "@/lib/delay";
import { snacks, students, orders } from "../_data";

export async function POST(req: Request) {
  const body = await req.json();

  const snack = snacks.find((s) => s.id === body.snackId);
  const student = students.find((s) => s.id === body.studentId);

  if (!snack || !student) {
    return Response.json({ message: "Invalid data" }, { status: 400 });
  }

  const amount = snack.price * body.quantity;

  const order = {
    id: Date.now().toString(),
    snackId: snack.id,
    snackName: snack.name,
    quantity: body.quantity,
    amount,
  };


  snack.ordersCount += body.quantity;


  student.totalSpent += amount;
  student.orders.push(order);

  orders.push(order);

  await delay(800);
  return Response.json(order, { status: 201 });
}

import { delay } from "@/lib/delay";
import { students } from "../_data";

export async function GET() {
  await delay(800);
  return Response.json(students);
}

export async function POST(req: Request) {
  await delay(800);
  const body = await req.json();
  const newStudent = {
    id: Date.now().toString(),
    name: body.name,
    referralCode: `REF${Math.floor(Math.random() * 1000)}`,
    totalSpent: 0,
    orders: [],
  };

  students.push(newStudent);
  
  return Response.json(newStudent, { status: 201 });
}

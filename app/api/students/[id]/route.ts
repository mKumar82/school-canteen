// src/app/api/students/[id]/route.ts
import { delay } from "@/lib/delay";
import { students } from "../../_data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  await delay(800);
  console.log("request arrived...");
  const { id } = await params;
  const student = students.find((s) => s.id === id);

  if (!student) {
    return Response.json({ message: "Student not found" }, { status: 404 });
  }

  
  return Response.json(student);
}

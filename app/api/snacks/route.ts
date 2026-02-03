// src/app/api/snacks/route.ts
import { delay } from "@/lib/delay";
import { snacks } from "../_data";

export async function GET() {
  await delay(800);
  return Response.json(snacks);
}

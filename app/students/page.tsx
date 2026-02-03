"use client";

import Link from "next/link";
import { useGetStudentsQuery } from "@/store/api/canteenApi";

export default function StudentsPage() {
  const { data, isLoading, error } = useGetStudentsQuery();

  console.log("students:", data);
  if (isLoading) return <p className="p-6">Loading students...</p>;
  if (error) return <p className="p-6">Failed to load students</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Students</h1>
        <Link
          href="/students/create"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Create Student
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((student) => (
          <div key={student.id} className="border rounded p-4 space-y-2">
            <h3 className="font-semibold">{student.name}</h3>
            <p className="text-sm">Referral: {student.referralCode}</p>
            <p className="text-sm">Total Spent: ₹{student.totalSpent}</p>

            <Link
              href={`/students/${student.id}`}
              className="text-blue-600 text-sm underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

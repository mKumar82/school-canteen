"use client";

import { useGetStudentsQuery } from "@/store/api/canteenApi";
import StudentCard from "@/components/StudentCard";
import ActionButton from "@/components/ActionButton";
import { useState } from "react";
import CreateStudentModel from "@/components/CreateStudentModal";
import { OrbitProgress } from "react-loading-indicators";

export default function StudentsPage() {
  const { data, isLoading, isError } = useGetStudentsQuery();
  const [isOpen, setIsOpen] = useState(false);


  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <OrbitProgress color="#4f46e5" size="medium" text="" textColor="" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <p className="text-red-500 font-medium">Failed to load students</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Students</h1>

        <ActionButton onClick={() => setIsOpen(true)}>
          + Create Student
        </ActionButton>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>

      {isOpen && <CreateStudentModel onClose={() => setIsOpen(false)} />}
    </div>
  );
}

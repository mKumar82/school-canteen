"use client";

import { useCreateStudentMutation } from "@/store/api/canteenApi";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function CreateStudentPage() {
  const { register, handleSubmit, formState } = useForm<{ name: string }>();
  const [createStudent, { isLoading, isError }] = useCreateStudentMutation();
  const router = useRouter();

  const onSubmit = async (data: { name: string }) => {
    await createStudent(data).unwrap();
    router.push("/students");
  };

  if (isLoading) return <p className="p-6">Creating student...</p>;
  if (isError) return <p className="p-6">Student not created</p>;

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Create Student</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name", { required: true })}
          placeholder="Student Name"
          className="border p-2 w-full rounded"
        />

        {formState.errors.name && (
          <p className="text-red-500 text-sm">Name is required</p>
        )}

        <button
          disabled={isLoading}
          className="bg-green-600 text-white w-full py-2 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
}

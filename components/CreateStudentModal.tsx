"use client";

import { useCreateStudentMutation } from "@/store/api/canteenApi";
import { useForm } from "react-hook-form";
import ActionButton from "@/components/ActionButton";
import toast from "react-hot-toast";

interface Props {
  onClose: () => void;
}

export default function CreateStudentModel({ onClose }: Props) {
  const { register, handleSubmit, formState } = useForm<{ name: string }>();
  const [createStudent, { isLoading }] = useCreateStudentMutation();

  const onSubmit = async (data: { name: string }) => {
    try {
      await createStudent(data).unwrap();
      toast.success("Student created successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to create student");
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded w-1/2 lg:w-1/4 space-y-4"
      >
        <h1 className="text-xl text-center font-bold mb-4">Create Student</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("name", { required: true })}
            placeholder="Student Name"
            className="border p-2 w-full rounded"
          />

          {formState.errors.name && (
            <p className="text-red-500 text-sm">Name is required</p>
          )}

          <ActionButton style="w-full" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Student"}
          </ActionButton>
          <ActionButton
            style="w-full"
            disabled={isLoading}
            onClick={onClose}
            variant="secondary"
          >
            Cancel
          </ActionButton>
        </form>
      </div>
    </div>
  );
}

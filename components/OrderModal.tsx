"use client";

import { Snack } from "@/types/snack";
import {
  useGetSnacksQuery,
  useGetStudentsQuery,
  usePlaceOrderMutation,
} from "@/store/api/canteenApi";
import { useState } from "react";

interface Props {
  snack?: Snack;
  studentId?: string;
  onClose: () => void;
}

export default function OrderModal({ snack, studentId, onClose }: Props) {
  const { data: students } = useGetStudentsQuery();
  const { data: snacks } = useGetSnacksQuery();

  const [placeOrder, { isLoading, isError }] = usePlaceOrderMutation();

  const [selectedStudentId, setSelectedStudentId] = useState<string>(
    studentId || "",
  );

  const [selectedSnackId, setSelectedSnackId] = useState<number | null>(
    snack?.id || null,
  );

  const [quantity, setQuantity] = useState<number>(1);

  const handleSubmit = async () => {
    if (!selectedStudentId || !selectedSnackId) return;

    await placeOrder({
      studentId: selectedStudentId,
      snackId: selectedSnackId,
      quantity,
    }).unwrap();

    onClose();
  };

  if (isLoading) return <p className="p-6">Creating order...</p>;
  if (isError) return <p className="p-6">Failed to create</p>;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-80 space-y-4">
        <h2 className="font-semibold">Order {snack?.name}</h2>

        {!studentId && (
          <select
            className="border p-2 w-full"
            value={selectedStudentId}
            onChange={(e) => setSelectedStudentId(e.target.value)}
          >
            <option value="">Select Student</option>
            {students?.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        )}

        {!snack && (
          <select
            className="border p-2 w-full"
            value={selectedSnackId ?? ""}
            onChange={(e) => setSelectedSnackId(Number(e.target.value))}
          >
            <option value="">Select Snack</option>
            {snacks?.map((sn) => (
              <option key={sn.id} value={sn.id}>
                {sn.name} – ₹{sn.price}
              </option>
            ))}
          </select>
        )}

        <input
          type="number"
          min={1}
          max={5}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border p-2 w-full"
        />

        <button
          onClick={handleSubmit}
          disabled={!selectedStudentId || !selectedSnackId}
          className="bg-green-600 text-white w-full py-2 rounded disabled:opacity-50"
        >
          Place Order
        </button>

        <button onClick={onClose} className="text-sm text-gray-500 w-full">
          Cancel
        </button>
      </div>
    </div>
  );
}

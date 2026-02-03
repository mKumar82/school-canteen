"use client";

import { Snack } from "@/types/snack";
import {
  useGetSnacksQuery,
  useGetStudentsQuery,
  usePlaceOrderMutation,
} from "@/store/api/canteenApi";
import { useState } from "react";
import ActionButton from "./ActionButton";
import toast from "react-hot-toast";

interface Props {
  snack?: Snack;
  studentId?: string;
  onClose: () => void;
}

export default function OrderModal({ snack, studentId, onClose }: Props) {
  const { data: students } = useGetStudentsQuery();
  const { data: snacks } = useGetSnacksQuery();

  const [placeOrder, { isLoading }] = usePlaceOrderMutation();

  const [selectedStudentId, setSelectedStudentId] = useState<string>(
    studentId || "",
  );

  const [selectedSnackId, setSelectedSnackId] = useState<number | null>(
    snack?.id || null,
  );

  const [quantity, setQuantity] = useState<number>(1);

  const handleSubmit = async () => {
    if (!selectedStudentId || !selectedSnackId) return;

    try {
      await placeOrder({
        studentId: selectedStudentId,
        snackId: selectedSnackId,
        quantity,
      }).unwrap();
      toast.success("Order placed successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to place order");
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

        <div className="flex justify-between gap-2">
          <ActionButton style="flex-1" onClick={onClose} variant="secondary">
            Cancel
          </ActionButton>
          <ActionButton
            style="flex-1"
            disabled={!selectedStudentId || !selectedSnackId || isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? "Placing Order..." : "Place Order"}
          </ActionButton>
        </div>
      </div>
    </div>
  );
}

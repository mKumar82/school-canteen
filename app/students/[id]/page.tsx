"use client";

import { useParams } from "next/navigation";
import { useGetStudentByIdQuery } from "@/store/api/canteenApi";
import OrderModal from "@/components/OrderModal";
import { use, useState } from "react";

export default function StudentDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
  console.log("id : ", id);
  const { data, isLoading, error } = useGetStudentByIdQuery(id);
  console.log("student data:", error, data);
  const [open, setOpen] = useState(false);

  if (isLoading) return <p className="p-6">Loading student...</p>;
  if (error || !data) return <p className="p-6">Student not found</p>;

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{data.name}</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          New Order
        </button>
      </div>

      <p>Referral Code: {data.referralCode}</p>
      <p>Total Spent: ₹{data.totalSpent}</p>

      <h2 className="font-semibold mt-4">Orders</h2>

      {data.orders.length === 0 && (
        <p className="text-sm text-gray-500">No orders yet</p>
      )}

      <div className="space-y-2">
        {data.orders.map((order) => (
          <div
            key={order.id}
            className="border rounded p-3 flex justify-between"
          >
            <span>
              {order.snackName} × {order.quantity}
            </span>
            <span>₹{order.amount}</span>
          </div>
        ))}
      </div>

      {open && (
        <OrderModal studentId={data.id} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}

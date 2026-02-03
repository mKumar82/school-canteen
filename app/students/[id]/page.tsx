"use client";

import { useGetStudentByIdQuery } from "@/store/api/canteenApi";
import OrderModal from "@/components/OrderModal";
import { use, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import ActionButton from "@/components/ActionButton";

export default function StudentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data, isLoading, isError } = useGetStudentByIdQuery(id);
  const [open, setOpen] = useState(false);

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
        <p className="text-red-500 font-medium">Student not found</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{data?.name}</h1>

        <ActionButton onClick={() => setOpen(true)}>New Order</ActionButton>
      </div>

      <p>Referral Code: {data?.referralCode}</p>
      <p>Total Spent: ₹{data?.totalSpent}</p>

      <h2 className="font-semibold mt-4">Orders</h2>

      {data?.orders.length === 0 && (
        <p className="text-sm text-gray-500">No orders yet</p>
      )}

      <div className="space-y-2">
        {data?.orders.map((order) => (
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
        <OrderModal studentId={data?.id} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}

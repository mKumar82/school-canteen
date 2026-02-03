"use client";

import { useState } from "react";
import SnackCard from "@/components/SnackCard";
import { Snack } from "@/types/snack";
import { useGetSnacksQuery } from "@/store/api/canteenApi";
import OrderModal from "@/components/OrderModal";
import { OrbitProgress } from "react-loading-indicators";

export default function SnacksPage() {
  const { data, isLoading, error } = useGetSnacksQuery();
  const [selectedSnack, setSelectedSnack] = useState<Snack | null>(null);

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <OrbitProgress color="#4f46e5" size="medium" text="" textColor="" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <p className="text-red-500 font-medium">Failed to load snacks</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Snacks</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((snack: Snack) => (
          <SnackCard key={snack.id} snack={snack} onOrder={setSelectedSnack} />
        ))}
      </div>

      {data?.length === 0 && (
        <p className="text-center text-gray-500 py-10">No snacks available</p>
      )}

      {selectedSnack && (
        <OrderModal
          snack={selectedSnack}
          onClose={() => setSelectedSnack(null)}
        />
      )}
    </div>
  );
}

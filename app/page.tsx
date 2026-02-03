// src/app/page.tsx
"use client";

import { useState } from "react";
import SnackCard from "@/components/SnackCard";
import { Snack } from "@/types/snack";
import { useGetSnacksQuery } from "@/store/api/canteenApi";
import OrderModal from "@/components/OrderModal";

export default function SnacksPage() {
  const { data, isLoading, error } = useGetSnacksQuery();
  const [selectedSnack, setSelectedSnack] = useState<Snack | null>(null);

  if (isLoading) return <p>Loading snacks...</p>;
  if (error) return <p>Failed to load snacks</p>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Snacks</h1>

      {data?.map((snack: Snack) => (
        <SnackCard key={snack.id} snack={snack} onOrder={setSelectedSnack} />
      ))}

      {selectedSnack && (
        <OrderModal
          snack={selectedSnack}
          onClose={() => setSelectedSnack(null)}
        />
      )}
    </div>
  );
}

// src/components/SnackCard.tsx
import { Snack } from "@/types/snack";

interface Props {
  snack: Snack;
  onOrder: (snack: Snack) => void;
}

export default function SnackCard({ snack, onOrder }: Props) {
  return (
    <div className="border rounded p-4 flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{snack.name}</h3>
        <p>₹{snack.price}</p>
        <p className="text-sm text-gray-500">Orders: {snack.ordersCount}</p>
      </div>

      <button
        onClick={() => onOrder(snack)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Order
      </button>
    </div>
  );
}

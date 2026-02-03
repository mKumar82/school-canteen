// src/components/SnackCard.tsx
import { Snack } from "@/types/snack";
import ActionButton from "./ActionButton";

interface Props {
  snack: Snack;
  onOrder: (snack: Snack) => void;
}

export default function SnackCard({ snack, onOrder }: Props) {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition">
     
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{snack.name}</h3>

        <div className="mt-1 flex items-center gap-3">
          <span className="text-indigo-600 font-medium">₹{snack.price}</span>

          <span className="text-sm text-gray-500">
            Ordered {snack.ordersCount} times
          </span>
        </div>
      </div>


      <ActionButton onClick={() => onOrder(snack)}>Order</ActionButton>
    </div>
  );
}

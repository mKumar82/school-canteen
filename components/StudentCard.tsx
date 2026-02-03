import { Student } from "@/types/student";
import ActionButton from "./ActionButton";

const StudentCard = ({ student }: { student: Student }) => {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition">
      
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>

        <div className="mt-2 space-y-1 text-sm text-gray-600">
          <p>
            <span className="font-medium text-gray-800">Referral:</span>{" "}
            {student.referralCode}
          </p>
          <p>
            <span className="font-medium text-gray-800">Total Spent:</span> ₹
            {student.totalSpent}
          </p>
        </div>
      </div>

      
      <ActionButton href={`/students/${student.id}`}>View Details</ActionButton>
    </div>
  );
};

export default StudentCard;

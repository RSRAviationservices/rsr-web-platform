import { Product } from "@/app/types/category";

interface SpecificationsTableProps {
  specifications: Product["specifications"];
}

export function SpecificationsTable({
  specifications,
}: SpecificationsTableProps) {
  if (Object.keys(specifications).length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="text-sm font-semibold text-zinc-600">Specifications</h3>
      <div className="mt-4 overflow-hidden rounded-md ring-1 ring-zinc-200">
        <table className="min-w-full">
          <thead className="bg-zinc-800">
            <tr>
              <th
                scope="col"
                className="px-3 py-3.5 text-center text-sm font-semibold text-white"
              >
                Specification
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-center text-sm font-semibold text-white"
              >
                Value
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 bg-white">
            {Object.entries(specifications).map(([key, value]) => (
              <tr key={key} className="even:bg-zinc-50">
                <td className="whitespace-nowrap px-3 py-4 text-center text-sm font-medium text-zinc-600">
                  {key}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-center text-sm font-medium text-zinc-900">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

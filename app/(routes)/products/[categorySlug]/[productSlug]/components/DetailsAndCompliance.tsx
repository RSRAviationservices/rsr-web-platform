import { Product } from "@/app/types/category";
import { Download, ShieldAlert, ShieldCheck, Thermometer } from "lucide-react";

interface DetailsAndComplianceProps {
  product: Product;
}

export function DetailsAndCompliance({ product }: DetailsAndComplianceProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-zinc-600">
        Details & Compliance
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {product.storage.temperatureControlled && (
          <div className="flex items-center gap-2 text-sm rounded-lg bg-stone-50 p-3 ring-1 ring-zinc-200/50">
            <Thermometer size={16} className="text-amber-600" /> Temp-Controlled
          </div>
        )}
        {product.storage.hazmat && (
          <div className="flex items-center gap-2 text-sm rounded-lg bg-stone-50 p-3 ring-1 ring-zinc-200/50">
            <ShieldAlert size={16} className="text-red-600" /> Hazmat
          </div>
        )}
        {product.compliance.militarySpec && (
          <div className="flex items-center gap-2 text-sm rounded-lg bg-stone-50 p-3 ring-1 ring-zinc-200/50">
            <ShieldCheck size={16} className="text-green-600" />{" "}
            {product.compliance.militarySpec}
          </div>
        )}
        {product.documents.map((doc) => (
          <a
            key={doc.name}
            href={doc.url || "#"}
            className="flex items-center gap-2 text-sm rounded-lg bg-stone-50 p-3 ring-1 ring-zinc-200/50 hover:bg-stone-100"
          >
            <Download size={16} className="text-blue-600" /> Download {doc.type}
          </a>
        ))}
      </div>
    </div>
  );
}

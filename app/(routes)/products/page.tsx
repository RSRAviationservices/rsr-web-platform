import React from "react";
import ProductHeader from "./components/ProductHeader";
import CategoryGrid from "./containers/CategoryGrid";
import { getAllCategories } from "@/app/api/inventory/inventoryService";

export default async function ProductsPage() {
  const categories = await getAllCategories();

  return (
    <main className="bg-white">
      <ProductHeader />
      <CategoryGrid categories={categories} />
    </main>
  );
}
import { Heart } from "lucide-react";

export function ProductCard({ product }: any) {
  return (
    <div className="rounded-lg border p-4 bg-white shadow hover:shadow-lg">
      <img src={product.image} alt={product.name} className="h-40 w-full object-contain" />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-gray-500">Lowest Ask</p>
      <p className="text-lg font-bold">${product.price}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">Xpress Ship</span>
        <Heart className="h-5 w-5 cursor-pointer" />
      </div>
    </div>
  );
}

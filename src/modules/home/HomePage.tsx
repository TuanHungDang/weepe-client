import { ProductCard } from "@/src/components/product/ProductCard";

const demoProducts = [
  { id: 1, name: "Nike Dunk Low Retro White Black Panda", price: 54, image: "/shoes/nike-panda.png" },
  { id: 2, name: "ASICS Gel-1130 Black Pure Silver", price: 104, image: "/shoes/asics.png" },
  { id: 3, name: "adidas Samba OG Cloud White Core Black", price: 50, image: "/shoes/adidas-samba.png" },
];

export default function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="mb-6 text-xl font-bold">Recommended For You</h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {demoProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

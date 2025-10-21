async function getProduct(id: string) {
  return { id, name: "Nike Dunk Low Panda", price: 54, image: "/shoes/nike-panda.png" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; 
  const product = await getProduct(id);

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
      <img src={product.image} className="h-64 object-contain" />
      <p className="mt-2 text-xl font-semibold">${product.price}</p>
    </div>
  );
}

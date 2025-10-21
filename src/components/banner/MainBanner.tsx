export function MainBanner() {
  return (
    <div className="relative w-full bg-gray-100">
      <img
        src="/banner.jpg"
        alt="Supreme Week 6"
        className="w-full h-[300px] object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="rounded-md bg-black px-6 py-3 text-white">Shop Now</button>
      </div>
    </div>
  );
}

const items = [
  { title: "Caps", img: "/collections/caps.jpg" },
  { title: "Shoes", img: "/collections/shoes.jpg" },
  { title: "Apparel", img: "/collections/apparel.jpg" },
]

export default function Collections() {
  return (
    <section className="bg-black px-10 py-32">
      <h2 className="mb-12 text-2xl tracking-widest">COLLECTIONS</h2>

      <div className="grid gap-10 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="relative h-[420px] overflow-hidden">
            <img src={item.img} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <span className="absolute bottom-6 left-6 tracking-widest text-sm">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

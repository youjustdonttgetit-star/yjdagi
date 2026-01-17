export default function Fashion() {
  return (
    <section id="fashion" className="py-32 px-8 md:px-24">
      <h2 className="text-3xl tracking-widest uppercase mb-16">
        Fashion
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {["Caps", "Clothing", "Footwear"].map(item => (
          <div key={item} className="aspect-[3/4] bg-gray-900 flex items-end p-6">
            <span className="tracking-widest uppercase text-sm">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

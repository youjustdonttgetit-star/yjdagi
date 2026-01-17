export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/vanity.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-display text-4xl md:text-6xl tracking-widest uppercase">
          Y.J.D.G.I.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300">
          You Just Don’t Get It
        </p>

        <p className="mt-10 text-sm tracking-widest text-gray-400 uppercase">
          Culture · Fashion · Presence
        </p>
      </div>
    </section>
  )
}

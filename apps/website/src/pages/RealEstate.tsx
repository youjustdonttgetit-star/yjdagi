export default function RealEstate() {
  const items = ["Land", "Airbnb / Apartments", "Compound Estate"];

  return (
    <section className="page center">
      <h1>Real Estate</h1>
      <p className="subtitle">
        Get your space and live, build, be free in it.
      </p>

      <div className="grid-3">
        {items.map((i) => (
          <div key={i} className="card">
            <h2>{i}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

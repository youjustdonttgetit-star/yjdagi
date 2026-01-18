import { Link } from "react-router-dom";

const collections = [
  { name: "Alāhā", desc: "HIS Word" },
  { name: "Olam", desc: "Your contradictory thoughts against The Word" },
  { name: "Anavah", desc: "Humility, a virtue in need of constant reminders." },
  { name: "Khuba", desc: "Wear that fiery emotion, love." },
  { name: "Chay", desc: "What is a truth? A perspective you choose to see through." },
  { name: "Number 6", desc: "Do you get it now?" },
];

export default function Collections() {
  return (
    <section className="page">
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "3rem",
        }}
      >
        {collections.map((c) => (
          <Link
            key={c.name}
            to={`/collections/${c.name}`}
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <div
              style={{
                padding: "3rem 2rem",
                height: "100%",
                borderRadius: "24px",
                background: "rgba(0,0,0,0.4)",
                backdropFilter: "blur(14px)",
                transition: "transform 0.4s ease",
              }}
            >
              <h3 style={{ marginBottom: "1rem", letterSpacing: "0.15em" }}>
                {c.name}
              </h3>
              <p style={{ opacity: 0.7, lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

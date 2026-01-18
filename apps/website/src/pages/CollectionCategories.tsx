import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Caps",
    image: "/fashion/caps.jpg",
  },
  {
    name: "Clothing",
    image: "/fashion/clothing.jpg",
  },
  {
    name: "Shoes",
    image: "/fashion/shoes.jpg",
  },
];

export default function CollectionCategories() {
  const { collectionName } = useParams();

  return (
    <section className="page">
      <div
        className="container"
        style={{
          textAlign: "center",
          marginBottom: "4rem",
        }}
      >
        <h1 style={{ letterSpacing: "0.2em" }}>{collectionName}</h1>
        <p style={{ opacity: 0.6, marginTop: "1rem" }}>
          Select a category
        </p>
      </div>

      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "3rem",
        }}
      >
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to="#"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div
              style={{
                height: "380px",
                borderRadius: "24px",
                overflow: "hidden",
                position: "relative",
                background: `url(${cat.image}) center / cover no-repeat`,
              }}
            >
              {/* Dark overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.45)",
                  backdropFilter: "blur(2px)",
                }}
              />

              {/* Text */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  letterSpacing: "0.25em",
                }}
              >
                {cat.name.toUpperCase()}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

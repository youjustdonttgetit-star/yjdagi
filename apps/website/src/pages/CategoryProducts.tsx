import { useParams } from "react-router-dom";

export default function CategoryProducts() {
  const { category } = useParams();

  return (
    <section className="page center">
      <h1>{category}</h1>

      <div className="grid-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="product-card">
            <div className="product-img" />
            <p>YJDGI Product</p>
          </div>
        ))}
      </div>
    </section>
  );
}

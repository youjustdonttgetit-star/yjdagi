import { useParams, Link } from "react-router-dom"
import { collections } from "../data/collections"

export default function CollectionDetail() {
  const { collectionSlug } = useParams()

  const collection = collections.find(
    (c) => c.slug === collectionSlug
  )

  if (!collection) {
    return <p>Collection not found</p>
  }

  return (
    <div className="page">
      <h1 className="title">{collection.name}</h1>
      <p className="subtitle">{collection.desc}</p>

      <div className="grid">
        <Link
          to={`/collections/${collection.slug}/caps`}
          className="card floating"
        >
          <img src="/fashion/caps.jpg" alt="Caps" />
          <h3>Caps</h3>
        </Link>

        <Link
          to={`/collections/${collection.slug}/clothing`}
          className="card floating"
        >
          <img src="/fashion/clothing.jpg" alt="Clothing" />
          <h3>Clothing</h3>
        </Link>

        <Link
          to={`/collections/${collection.slug}/shoes`}
          className="card floating"
        >
          <img src="/fashion/shoes.jpg" alt="Shoes" />
          <h3>Shoes</h3>
        </Link>
      </div>
    </div>
  )
}

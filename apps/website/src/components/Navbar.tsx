import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 4rem",
        backdropFilter: "blur(12px)",
        background: "rgba(0,0,0,0.35)",
      }}
    >
      {/* Brand */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          fontSize: "1rem",
          letterSpacing: "0.25em",
          fontWeight: 500,
        }}
      >
        Y.J.D.G.I
      </Link>

      {/* Nav links */}
      <div
        style={{
          display: "flex",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {[
          { name: "Home", path: "/" },
          { name: "Collections", path: "/collections" },
          { name: "Events", path: "/events" },
          { name: "Real Estate", path: "/real-estate" },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            style={{
              textDecoration: "none",
              color: "white",
              opacity: 0.75,
              fontSize: "0.9rem",
              letterSpacing: "0.12em",
            }}
          >
            {item.name}
          </Link>
        ))}

        {/* Profile */}
        <Link
          to="/profile"
          style={{
            padding: "0.6rem 1.4rem",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.6)",
            color: "white",
            textDecoration: "none",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
          }}
        >
          ACCOUNT
        </Link>
      </div>
    </nav>
  );
}

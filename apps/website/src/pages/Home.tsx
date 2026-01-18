import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="page">
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "4rem",
        }}
      >
        {/* HERO */}
        <div style={{ maxWidth: "900px" }}>
          <h1
            style={{
              fontSize: "clamp(3rem, 7vw, 5rem)",
              letterSpacing: "-0.04em",
              marginBottom: "1.5rem",
            }}
          >
            You Just Don’t Get It
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              opacity: 0.85,
              marginBottom: "2.5rem",
            }}
          >
            One mind, Infinite thoughts
          </p>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.7,
              opacity: 0.85,
            }}
          >
            Provoking your thoughts on a simple fabric.  
            Complexities unfolded simply.  
            Surrounding you with the thoughts you dared not speak.
          </p>

          <div style={{ marginTop: "3.5rem" }}>
            <button
              onClick={() => navigate("/collections")}
              style={{
                padding: "1rem 3rem",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.6)",
                background: "transparent",
                color: "white",
                fontSize: "0.95rem",
                letterSpacing: "0.08em",
                cursor: "pointer",
              }}
            >
              Explore Our Minds
            </button>
          </div>
        </div>

        {/* ABOUT */}
        <div style={{ maxWidth: "800px" }}>
          <h2
            style={{
              fontSize: "1.1rem",
              letterSpacing: "0.2em",
              marginBottom: "2rem",
              opacity: 0.7,
            }}
          >
            ABOUT
          </h2>

          <p style={{ lineHeight: 1.8, opacity: 0.75 }}>
            “You Just Don’t Get It” truly means that not understanding words
            written so plainly or said so fluently implies there is a deeper
            meaning to everything — even some of the things we think we
            understand.
            <br />
            <br />
            This mindset was born from being misunderstood. These creations are
            mirrors for those who relate — a quiet nod. For those who don’t, an
            invitation to see differently.
            <br />
            <br />
            True wisdom lies in knowing you know nothing.  
            So it’s okay if you just don’t get it.
          </p>
        </div>

        {/* CONTACT */}
        <div style={{ maxWidth: "700px", opacity: 0.7 }}>
          <h2
            style={{
              fontSize: "1.1rem",
              letterSpacing: "0.2em",
              marginBottom: "1.5rem",
            }}
          >
            CONTACT
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            If you just don’t get it — reach out.
            <br />
            <br />
            Email: youjustdonttgetit@gmail.com
            <br />
            Instagram: @yjdgi444
            <br />
            TikTok: @444.yjdgi
          </p>
        </div>
      </div>
    </section>
  );
}

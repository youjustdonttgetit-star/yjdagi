import { useState } from "react";

export default function Events() {
  const [showDJ, setShowDJ] = useState(false);
  const [showPlanning, setShowPlanning] = useState(false);

  return (
    <section className="page center">
      <h1>Events</h1>
      <p className="subtitle">An Inexpressible Atmosphere</p>

      <div className="grid-2">
        {/* HOSTING */}
        <div className="card">
          <h2>Hosting</h2>
          <p>Get access to our curated experiences.</p>
          <button className="btn">Get Tickets</button>
        </div>

        {/* PLANNING */}
        <div className="card">
          <h2>Planning</h2>
          <p>Let us create your surreal moment.</p>

          <div className="btn-group">
            <button className="btn" onClick={() => setShowPlanning(true)}>
              Start Planning
            </button>

            <button className="btn outline" onClick={() => setShowDJ(true)}>
              Book Our DJ
            </button>
          </div>
        </div>
      </div>

      {/* DJ MODAL */}
      {showDJ && (
        <Modal title="Book Our DJ" onClose={() => setShowDJ(false)}>
          <Form email="dj@yjdgi.com" />
        </Modal>
      )}

      {/* PLANNING MODAL */}
      {showPlanning && (
        <Modal title="Start Planning" onClose={() => setShowPlanning(false)}>
          <Form email="youjustdonttgetit@gmail.com" />
        </Modal>
      )}
    </section>
  );
}

/* ---------- REUSABLES ---------- */

function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="modal-bg">
      <div className="modal">
        <h3>{title}</h3>
        {children}
        <button className="btn outline" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

function Form({ email }: { email: string }) {
  return (
    <form
      className="form"
      action={`mailto:${email}`}
      method="POST"
      encType="text/plain"
    >
      <input required placeholder="Name" />
      <input required placeholder="Email" />
      <textarea required placeholder="Message" />
      <button className="btn">Send</button>
    </form>
  );
}

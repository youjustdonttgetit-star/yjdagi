import { payWithPaystack } from "../lib/paystack";

export default function Tickets() {
  return (
    <section className="min-h-screen p-10">
      <h1 className="text-3xl mb-6">Event Tickets</h1>

      <button
        onClick={() =>
          payWithPaystack({
            email: "customer@email.com",
            amount: 20000,
            onSuccess: () => alert("Payment successful"),
          })
        }
        className="px-6 py-3 bg-white text-black rounded-lg"
      >
        Buy Ticket
      </button>
    </section>
  );
}

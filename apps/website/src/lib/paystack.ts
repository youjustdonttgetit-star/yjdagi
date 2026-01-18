declare global {
  interface Window {
    PaystackPop: any;
  }
}

export function payWithPaystack({
  email,
  amount,
  onSuccess,
}: {
  email: string;
  amount: number;
  onSuccess: () => void;
}) {
  const handler = window.PaystackPop.setup({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    email,
    amount: amount * 100,
    currency: "NGN",
    callback: onSuccess,
    onClose: () => alert("Payment cancelled"),
  });

  handler.openIframe();
}

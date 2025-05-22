import React from "react";
export default function StripePayment({ amount, onPay }: { amount: number; onPay: () => void }) {
  return (
    <div>
      <h4>Pay ${amount / 100} for course access</h4>
      <button onClick={onPay}>Pay with Stripe</button>
    </div>
  );
}
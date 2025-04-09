'use client';

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Carregue o Stripe usando a Publishable Key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function SubscribeButton({ planId }) {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      // Cria a sessão de checkout chamando o endpoint
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });
      const data = await res.json();

      if (data.sessionId) {
        const stripe = await stripePromise;
        // Redireciona para a Checkout Session
        const { error } = await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        });
        if (error) {
          console.error("Stripe redirect error:", error);
        }
      } else {
        console.error("Erro na criação da sessão:", data.error);
      }
    } catch (error) {
      console.error("Erro no fetch:", error);
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handleSubscribe}
      disabled={loading}
      className="mt-6 w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
    >
      {loading ? "Processing..." : "Subscribe Now"}
    </button>
  );
}

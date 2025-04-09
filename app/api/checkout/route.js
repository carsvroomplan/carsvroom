import Stripe from "stripe";

// Inicialize o Stripe com sua Secret Key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15", // você pode ajustar para a versão que preferir
  });

export async function POST(req) {
  try {
    // Recebe os dados do front-end (por exemplo, o planId que identifica o preço do seu produto)
    const { planId } = await req.json();

    // Cria uma sessão de checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription", // Use "subscription" se for uma assinatura, caso contrário "payment"
      line_items: [
        {
          // "planId" deve ser o price id criado no Dashboard do Stripe
          price: planId,
          quantity: 1,
        },
      ],
      // URLs para redirecionamento após sucesso ou cancelamento
      success_url: `${req.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/cancel`,
    });

    return new Response(JSON.stringify({ sessionId: session.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Stripe Checkout error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

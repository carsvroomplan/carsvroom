'use client';

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForms() {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Atualiza o token do reCAPTCHA
  const handleRecaptchaChange = (token) => {
    setCaptchaToken(token);
    console.log("reCAPTCHA token atualizado:", token);
  };

  // Handler de envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    // Captura os valores do formulário
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.captchaToken = captchaToken; // Inclui o token do reCAPTCHA

    console.log("Dados do formulário:", data);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }
      console.log("Resposta do backend:", result);
      setSuccessMessage("Message sent successfully!");
      e.target.reset();
      setCaptchaToken(null);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      setErrorMessage("Error sending message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-6 px-4 bg-red-600 rounded max-w-xl mx-auto">
      <h2 className="text-sm text-white font-bold uppercase tracking-wider mb-4">
        NEED A REPAIR?
      </h2>
      <h3 className="text-2xl font-semibold mb-6 text-center text-white">
        Contact Us!
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome e Sobrenome */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full md:w-1/2 px-4 py-2 rounded bg-white text-black placeholder-gray-400"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full md:w-1/2 px-4 py-2 rounded bg-white text-black placeholder-gray-400"
            required
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-400"
          required
        />

        {/* Telefone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-400"
          required
        />

        {/* Mensagem */}
        <textarea
          name="message"
          placeholder="Additional Details"
          rows="4"
          className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-400"
          required
        />

        {/* Widget do reCAPTCHA */}
        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey="6Lco1BgrAAAAAKEXhW0BceoVBFfVwFqmJhFzG-1a"
            onChange={handleRecaptchaChange}
            theme="light"
          />
        </div>

        {/* Feedback de loading e mensagens */}
        {loading && <p className="text-white text-center">Sending...</p>}
        {successMessage && (
          <p className="text-green-300 text-center">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-yellow-300 text-center">{errorMessage}</p>
        )}

        {/* Botão de envio */}
        <button
          type="submit"
          className="bg-black px-6 py-3 rounded text-white font-semibold hover:bg-gray-800 transition w-full"
          disabled={loading}
        >
          Send
        </button>
      </form>
    </section>
  );
}

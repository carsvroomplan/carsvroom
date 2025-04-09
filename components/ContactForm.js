'use client';

<head>
  <script src="https://www.google.com/recaptcha/enterprise.js?render=6LfqNw8rAAAAAF9rW29qdc5QPcTNUfMztUzJi65K"></script>

</head>

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForms() {
  const [captchaToken, setCaptchaToken] = useState(null);

  // Log e atualização do token do reCAPTCHA
  const handleRecaptchaChange = (token) => {
    setCaptchaToken(token);
    console.log("reCAPTCHA token atualizado:", token);
  };

  // Handler de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário submetido");
    
    // Captura os valores do formulário
    const formData = new FormData(e.target);
    console.log("Dados do formulário:");
    for (const [name, value] of formData.entries()) {
      console.log(`${name}: ${value}`);
    }
    
    console.log("Token do reCAPTCHA no submit:", captchaToken);
    
    // Aqui você pode adicionar a lógica para enviar os dados para o backend, por exemplo:
    // fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(Object.fromEntries(formData)),
    // })
    //   .then(res => res.json())
    //   .then(data => console.log("Resposta do backend:", data))
    //   .catch(err => console.error("Erro ao enviar os dados:", err));
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
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full md:w-1/2 px-4 py-2 rounded bg-white text-black placeholder-gray-400"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-400"
        />

        {/* Telefone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-400"
        />

        {/* Mensagem */}
        <textarea
          name="message"
          placeholder="Additional Details"
          rows="4"
          className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-400"
        />

        {/* Widget do reCAPTCHA */}
        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey="6LeCVg8rAAAAAGhUyVIYbEn-ro4Y5YJL3q1x59kPW29qdc5QPcTNUfMztUzJi65K"
            onChange={handleRecaptchaChange}
            theme="light"
          />
        </div>

        {/* Botão de envio */}
        <button
          type="submit"
          className="bg-black px-6 py-3 rounded text-white font-semibold hover:bg-gray-800 transition w-full"
        >
          Send
        </button>
      </form>
    </section>
  );
}

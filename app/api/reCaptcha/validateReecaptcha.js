// Exemplo de validação no back-end usando fetch:
import fetch from 'node-fetch';

export default async function validateRecaptcha(token) {
  const projectId = "carsvroom"; // substitua pelo ID do seu projeto
  const apiKey = process.env.RECAPTCHA_API_KEY; // geralmente você obtém uma chave de API para chamar o reCAPTCHA Enterprise
  const url = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`;

  const body = {
    event: {
      token: token,
      siteKey: "6Ld3RRYrAAAAAHVpHmLitA1Cyr4jk0XFtKKUjfmu" // mesma Site Key do front-end
    }
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  
  const result = await response.json();
  console.log("Resultado da validação do reCAPTCHA:", result);
  return result;
}

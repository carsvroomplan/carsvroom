export default async function validateRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const url = `https://www.google.com/recaptcha/api/siteverify`;

  const params = new URLSearchParams();
  params.append('secret', secretKey);
  params.append('response', token);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params
  });

  const result = await response.json();
  console.log("Resultado da validação do reCAPTCHA:", result);
  return result;
}

// Seleciona elementos
const form = document.getElementById('form');
const input = document.getElementById('palavrainput');
const out = document.getElementById('resultado');

// Escuta quando o usuário envia o formulário
form.addEventListener('submit', (e) => {
  e.preventDefault(); // evita recarregar a página

  const palavra = (input.value || '').trim().toLowerCase();

  if (!palavra) {
    out.textContent = 'Digite uma palavra.';
    return;
  }

  const invertida = [...palavra].reverse().join('');

  out.textContent =
    palavra === invertida
      ? `“${palavra}” é um palíndromo!`
      : `“${palavra}” não é palíndromo.`;
});

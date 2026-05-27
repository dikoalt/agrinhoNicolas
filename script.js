const yearElement = document.getElementById('year');
if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.textContent = `© ${currentYear} Água Sustentável para Estufas de Morango`;
}

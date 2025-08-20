function calculateTax() {
  const income = Number(document.getElementById('income').value || 0);
  const p = document.getElementById('result');  // <— we'll watch this
  const tax = Math.round(income * 0.1 * 100) / 100;
  p.textContent = `Tax: ${tax}`;
}

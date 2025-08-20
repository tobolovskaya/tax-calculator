import './style.css';
import './taxCalculator.js'; // this attaches calculateTax to window if needed

// Optional: expose for inline onclick
window.calculateTax = window.calculateTax || function() {
  const income = Number(document.getElementById('income').value || 0);
  const p = document.getElementById('result');
  const tax = Math.round(income * 0.1 * 100) / 100;
  p.textContent = `Tax: ${tax}`;
};

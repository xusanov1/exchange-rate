const pulInput = document.getElementById('amount-input');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const resultInput = document.getElementById('result-input');
const exchangeBtn = document.getElementById('exchange-btn');

let valyuta = {
  USD: parseFloat(localStorage.getItem('usd')) || 1,
  EUR: parseFloat(localStorage.getItem('eur')) || 0.85,
  RUB: parseFloat(localStorage.getItem('rub')) || 75,
  SUM: parseFloat(localStorage.getItem('sum')) || 11000,
};

function exchangeCurrency() {
  const pul = parseFloat(pulInput.value);
  const fromCurrencyValue = valyuta[fromCurrency.value];
  const toCurrencyValue = valyuta[toCurrency.value];

  if (isNaN(pul) || fromCurrencyValue === undefined || toCurrencyValue === undefined) {
    resultInput.value = '';
    return;
  }

  const exchangeRate = toCurrencyValue / fromCurrencyValue;
  const result = pul * exchangeRate;
  resultInput.value = result.toFixed(2);
}

exchangeBtn.addEventListener('click', exchangeCurrency);

window.addEventListener('load', () => {
  localStorage.setItem('usd', '1');
  localStorage.setItem('eur', '0.85');
  localStorage.setItem('rub', '75');
  localStorage.setItem('sum', '11000');

  valyuta = {
    USD: parseFloat(localStorage.getItem('usd')),
    EUR: parseFloat(localStorage.getItem('eur')),
    RUB: parseFloat(localStorage.getItem('rub')),
    SUM: parseFloat(localStorage.getItem('sum')),
  };
});
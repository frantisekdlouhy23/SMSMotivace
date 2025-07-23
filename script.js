const form = document.getElementById('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  sessionStorage.setItem('regData', JSON.stringify(data));
  window.location = 'platba.html';
});

// na platba.html
if (location.pathname.endsWith('platba.html')) {
  const data = JSON.parse(sessionStorage.getItem('regData') || '{}');
  const section = document.getElementById('qr-section');
  const price = data.count==='1' ? 99 : data.count==='2' ? 179 : 249;
  // sem můžeš vložit skutečné QR, teď placeholder
  section.innerHTML = `<p>${price} Kč / měsíc</p>
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PLATBA_${price}" alt="QR platební kód">`;
}

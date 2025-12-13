const input = document.getElementById('qr-input');
const button = document.getElementById('generate-btn');
const qrBlock = document.getElementById('qr-code');

let qr;

button.addEventListener('click', () => {
   const value = input.value.trim();

   if (!value) {
      alert('Вставь ссылку');
      return;
   }

   qrBlock.innerHTML = '';

   qr = new QRCode(qrBlock, {
      text: value,
      width: 500,
      height: 500,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
   });
});
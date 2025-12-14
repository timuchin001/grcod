const input = document.getElementById('qr-input');
const button = document.getElementById('generate-btn');
const clearBtn = document.getElementById('clear-btn');
const downloadBtn = document.getElementById('download-btn');
const qrBlock = document.getElementById('qr-code');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

let qr;

// Генерация QR-кода
function generateQRCode() {
    const value = input.value.trim();
    if (!value) { alert('Вставь ссылку'); return; }

    qrBlock.innerHTML = '';
    qrBlock.classList.add('gr__paste--padded');

    qr = new QRCode(qrBlock, {
        text: value,
        width: 320,
        height: 320,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Плавное появление
    setTimeout(() => qrBlock.classList.add('visible'), 50);
}

// Генерация QR-кода по кнопке
button.addEventListener('click', generateQRCode);

// По Enter
input.addEventListener('keyup', (e) => {
    if (e.key === "Enter") generateQRCode();
});

// Очистка QR-кода
clearBtn.addEventListener('click', () => {
    qrBlock.classList.remove('visible');
    setTimeout(() => {
        qrBlock.innerHTML = '';
        qrBlock.classList.remove('gr__paste--padded');
    }, 500);
});

// Скачать QR-код
downloadBtn.addEventListener('click', () => {
    const img = qrBlock.querySelector('img');
    if (!img) { alert('Сначала сгенерируй QR-код'); return; }
    const link = document.createElement('a');
    link.href = img.src;
    link.download = 'qr-code.png';
    link.click();
});

// Переключение темы
body.classList.add('dark');
themeToggle.textContent = '🌙';

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'light');
        themeToggle.textContent = '🌞';
    } else {
        body.classList.replace('light', 'dark');
        themeToggle.textContent = '🌙';
    }
});

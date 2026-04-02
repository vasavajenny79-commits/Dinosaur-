let noClickCount = 0;
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const expression = document.getElementById('expression-emoji');
const toast = document.getElementById('toast');

// Background Music Play on first click
document.body.addEventListener('click', () => {
    document.getElementById('bgMusic').play();
}, { once: true });

function showToast(msg) {
    toast.innerText = msg;
    toast.style.opacity = '1';
    setTimeout(() => toast.style.opacity = '0', 2000);
}

function handleNo() {
    noClickCount++;
    
    // Yes button badhta jayega
    let currentSize = 1.2 + (noClickCount * 0.3);
    yesBtn.style.transform = `scale(${currentSize})`;

    if (noClickCount === 1) {
        noBtn.innerText = "Please 😢";
        expression.innerText = "😢";
        showToast("Please don't say no 🥺");
    } else if (noClickCount === 2) {
        noBtn.innerText = "I'm crying now 😭";
        expression.innerText = "😭";
        showToast("You're making me cry 😭");
    } else {
        noBtn.innerText = "Please don't leave me 🥺💔";
        expression.innerText = "🥺💔";
        noBtn.style.fontSize = "0.8rem";
        showToast("Catch me if you can 😜");
    }
}

function moveNo() {
    if (noClickCount >= 3) {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    }
}

function sayYes() {
    document.getElementById('proposal-section').classList.add('hidden');
    document.getElementById('celebration-section').classList.remove('hidden');
    createKisses();
}

// Continuous Falling Hearts
setInterval(() => {
    const heart = document.createElement('div');
    const hearts = ['💖', '💕', '💗', '❤️'];
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 300);

function createKisses() {
    setInterval(() => {
        const kiss = document.createElement('div');
        kiss.innerText = '💋';
        kiss.style.position = 'fixed';
        kiss.style.left = Math.random() * 100 + 'vw';
        kiss.style.bottom = '0';
        kiss.style.fontSize = '30px';
        kiss.style.animation = 'floatUp 3s forwards';
        document.body.appendChild(kiss);
    }, 500);
}

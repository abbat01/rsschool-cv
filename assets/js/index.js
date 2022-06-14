const telegram = document.querySelector('.fa-telegram-plane');

telegram.addEventListener('click', function() {
    const div = document.createElement('div')
    div.style.backgroundColor = 'rgba(125, 125, 125, 0.4)'
    div.textContent = 'abbat002'
    telegram.append(div)
}, { once: true });
const telegram = document.querySelector('.fa-telegram-plane');

telegram.addEventListener('mouseout', function() {
    const div = document.createElement('div')
    div.style.backgroundColor = 'red'
    div.textContent = 'Hi!'
    telegram.append(div)
}, { once: true })
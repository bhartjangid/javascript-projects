const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = hslColor();
});

const hslColor = () => {
    return `hsl(${Math.floor(Math.random()*360)},100%, 50%)`;
};
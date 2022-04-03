const toggle = document.getElementById('btn');

toggle.addEventListener('change', (e) => {
    document.body.classList.toggle("dark", e.target.checked);
})

function createHeart() {
    const hearts = ["💘","💖","💙","💚","💛","💜","🧡","🤎","💗"];
    
    let randomHeart = hearts[Math.floor(Math.random()*hearts.length)]
    
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = randomHeart;
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout( () => {
        heart.remove();
    },5000);
    }

    

setInterval(createHeart,200);
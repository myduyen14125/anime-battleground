let body = document.querySelector('body');

document.addEventListener('click', function(e){
    let bullet = document.createElement('span');
    bullet.classList.add('bullet'); //Add class="bullet" for span element
    let x = e.offsetX;
    let y = e.offsetY;
    bullet.style.left = x + 'px';
    bullet.style.top = y + 'px';
    body.appendChild(bullet);

    //Add sound on click
    let sound = document.getElementById('shortgun-sound');
    sound.play()

    //Add random blood imanges
    let bloodImages = [
        'url("blood1.png")',
        'url("blood2.png")',
        'url("blood3.png")',
        'url("blood4.png")',
    ]
    //Blood appear on screen
    let blood = document.createElement('span');
    blood.classList.add('blood');

    let bg = bloodImages[Math.floor(Math.random() * bloodImages.length)]; //Rounding integer math random
    blood.style.backgroundImage = bg;

    blood.style.left = Math.random() * innerWidth + 'px';
    blood.style.top = Math.random() *innerHeight + 'px';
    body.appendChild(blood);

    //Remove bullet and blood after 4s
    setTimeout(function(){
        bullet.remove();
        blood.remove();
    }, 4000)
})


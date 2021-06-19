// Main page, show menu
let buttonStart = document.getElementById('button-start')

buttonStart.addEventListener('click', function(){
    let menu = document.getElementById('menu-bg');
    menu.style.transform = "translateY(0)"
    menu.style.opacity = "1"
})

// Choose background -> section
let buttonScene1 = document.getElementById('button-scene1')
let scene1 = document.getElementById('scene1')

scene1.style.display = "none"

buttonScene1.addEventListener('click', function(){
    scene1.style.display = "block"
})



// Each section
let section = document.querySelector('section');

section.addEventListener('click', function(e){
    let bullet = document.createElement('span');
    bullet.classList.add('bullet'); //Add class="bullet" for span element
    let x = e.offsetX;
    let y = e.offsetY;
    bullet.style.left = x + 'px';
    bullet.style.top = y + 'px';
    section.appendChild(bullet);

    //Add sound on click
    let sound = document.getElementById('shortgun-sound');
    sound.play()

    //Add random blood imanges
    let bloodImages = [
        'url("./assets/blood1.png")',
        'url("./assets/blood2.png")',
        'url("./assets/blood3.png")',
        'url("./assets/blood4.png")',
    ]
    //Blood appear on screen
    let blood = document.createElement('span');
    blood.classList.add('blood');

    let bg = bloodImages[Math.floor(Math.random() * bloodImages.length)]; //Rounding integer math random
    blood.style.backgroundImage = bg;

    blood.style.left = Math.random() * innerWidth + 'px';
    blood.style.top = Math.random() *innerHeight + 'px';
    section.appendChild(blood);

    //Remove bullet and blood after 4s
    setTimeout(function(){
        bullet.remove();
        blood.remove();
    }, 4000)
})


// Main page, show menu
let buttonStart = document.getElementById('button-start')

buttonStart.addEventListener('click', function(){
    let menu = document.getElementById('menu-bg');
    menu.style.transform = "translateY(0)"
    menu.style.opacity = "1"
})

// Choose background -> section
let buttonScene1 = document.getElementById('button-scene1')
let buttonScene2 = document.getElementById('button-scene2')
let buttonScene3 = document.getElementById('button-scene3')
let buttonScene4 = document.getElementById('button-scene4')
let scene = document.getElementById('scene')

scene.style.display = "none";

let i;

function changeBg(i){
    scene.style.display = "block";
    scene.style.background = "url(./assets/cover" + i + ".jpg)";
    scene.style.backgroundSize = "cover";
}

buttonScene1.addEventListener('click', function(){
    i = 1;
    changeBg(i);
})
buttonScene2.addEventListener('click', function(){
    i = 2;
    changeBg(i);
})
buttonScene3.addEventListener('click', function(){
    i = 3;
    changeBg(i);
})
buttonScene4.addEventListener('click', function(){
    i = 4;
    changeBg(i);
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

// Setting box
let setting = document.getElementById("button-setting");
let dropdown = document.getElementById("drop-down");
let undo = document.getElementById("undo");
let volume = document.getElementById("volume");
let exit = document.getElementById("eixt");

// Show dropdown box
dropdown.style.display = "none";
let show = 0;
setting.addEventListener("click", function(){
    show++;
    if(show % 2 !== 0) {
        dropdown.style.animation = "fadeIn 0.4s ease 1"
        dropdown.style.display = "block";
    }
    else dropdown.style.display = "none";
})
// Set function for dropdown box


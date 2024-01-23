const $btn = document.getElementById('btn-kick'); 
const $btn2 = document.getElementById('btn2-kick');
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 90,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character') 
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),  
    elProgressbar: document.getElementById('progressbar-enemy') 
}

$btn.addEventListener('click', function () {
    console.log('Kick');
});

$btn2.addEventListener('click', function () {
    console.log('Kick2');
});

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person){
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + '/' + person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
    if(person.damageHP < count) {
        person.damageHP = 0;
        alert('Бідний '+ person.name +' програв бій!');
        $btn.disabled = true;
    } else {
        person.damageHP -= count;
    }
    renderHP(person);
}

function random(num){
    return Math.ceil(Math.random() * num);
}

$btn.addEventListener('click', function() {
    changeHP(random(20), character);
    changeHP(random(20), enemy);
})

$btn2.addEventListener('click', function() {
    changeHP(random(25), enemy);
})

init();


const $btn = document.getElementById('btn-kick'); 
const $btn2 = document.getElementById('btn2-kick');
const $logs = document.getElementById('logs');
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 90,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),

    renderHP: function () {
        this.renderHPLife();
        this.renderProgressbarHP();
    },

    renderHPLife: function (){
        this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
    },

    renderProgressbarHP: function (){
        this.elProgressbar.style.width = this.damageHP + '%';
    },

    changeHP: function (count){
        if (this.damageHP < count) {
            this.damageHP = 0;
            alert('Бідний ' + this.name + ' програв бій!');
            $btn.disabled = true;
            $btn2.disabled = true;
        } else {
            this.damageHP -= count;
        }
        this.renderHP();
    }
};

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),

    renderHP: function (){
        this.renderHPLife();
        this.renderProgressbarHP();
    },

    renderHPLife: function (){
        this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
    },

    renderProgressbarHP: function (){
        this.elProgressbar.style.width = this.damageHP + '%';
    },

    changeHP: function (count){
        if (this.damageHP < count) {
            this.damageHP = 0;
            alert('Бідний ' + this.name + ' програв бій!');
			$btn.disabled = true;
            $btn2.disabled = true;
        } else {
            this.damageHP -= count;
        }
        this.renderHP();
    }
	
};

function generateLog(firstPerson, secondPerson) {
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага.`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага.`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил.`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар.`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком <вырезанно цензурой> противника.`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар.`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар.`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника.`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику.`
    ];
    return logs[random(logs.length) - 1];
}

function changeHP(count, attacker, target) {
    target.changeHP(count);
    const $logEntry = document.createElement('p');
    $logEntry.innerText = generateLog(target, attacker);
    $logs.insertBefore($logEntry, $logs.firstChild);
}

$btn.addEventListener('click', function () {
    console.log('Kick');
    changeHP(random(20), character, enemy);
});

$btn2.addEventListener('click', function () {
    console.log('Kick2');
	changeHP(random(20), enemy, character);
});

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

function random(num){
    return Math.ceil(Math.random() * num);
}


init();


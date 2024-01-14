const $btn = window.document.getElementById('btn-kick');
const $btnOtherAttack = window.document.getElementById('btn-other-attack');

const character = {
  name: 'Picachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: null,
  elProgressbar: null,
  random(num) {
    return Math.ceil(Math.random() * num);
  },
  changeHP(count) {
    if (this.damageHP < count) {
      this.damageHP = 0;
      window.alert('Бедный ' + this.name + ' проиграл бой!');
    } else {
      this.damageHP -= count;
    }
    this.renderHP();
  },
  renderHPLife() {
    this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
  },
  renderProgressbarHP() {
    this.elProgressbar.style.width = this.damageHP + '%';
    this.renderHPLife();
  },
  renderHP() {
    if (this.elHP) {
      this.renderHPLife();
    }

    if (this.elProgressbar) {
      this.renderProgressbarHP();
    }
  },
};

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: null,
  elProgressbar: null,
  random(num) {
    return Math.ceil(Math.random() * num);
  },
  changeHP(count) {
    if (this.damageHP < count) {
      this.damageHP = 0;
      window.alert('Бедный ' + this.name + ' проиграл бой!');
    } else {
      this.damageHP -= count;
    }
    this.renderHP();
  },
  renderHPLife() {
    this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
  },
  renderProgressbarHP() {
    this.elProgressbar.style.width = this.damageHP + '%';
    this.renderHPLife();
  },
  renderHP() {
    if (this.elHP) {
      this.renderHPLife();
    }

    if (this.elProgressbar) {
      this.renderProgressbarHP();
    }
  },
};

$btn.addEventListener('click', function () {
  console.log('Kick');
  character.changeHP(character.random(20));
  enemy.changeHP(enemy.random(20));
});

$btnOtherAttack.addEventListener('click', function () {
  console.log('Kick two');
  character.changeHP(character.random(70));
  enemy.changeHP(enemy.random(70));
});

function init() {
  console.log('Start Game!');

  character.elHP = window.document.getElementById('health-character');
  character.elProgressbar = window.document.getElementById('character-progressbar');

  enemy.elHP = window.document.getElementById('health-enemy');
  enemy.elProgressbar = window.document.getElementById('enemy-progressbar');

  character.renderHP();
  enemy.renderHP();
}

init();

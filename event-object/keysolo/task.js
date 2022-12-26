class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    this.currentSymbol = this.container.querySelector('.symbol_current');
    this.currantSec = this.container.querySelector('.status__time');
    this.currantSec.innerHTML = Array.from(this.wordElement.textContent).length;
    let time = parseInt(this.currantSec.innerHTML);
    
    document.addEventListener('keyup', (event) => {
      let currant = this.currentSymbol.textContent.toLowerCase();
      let keyboard = event.key.toLowerCase();
      if (keyboard === currant) {
        this.success();
      } else {
        this.fail();
      }
      this.currantSec.innerHTML = Array.from(this.wordElement.textContent).length;
      time = parseInt(this.currantSec.innerHTML);
    });
    
    function timer() {
      time -=1;
      document.querySelector('.status__time').innerHTML = time;
      if (time < 1) {
        clearInterval(idInterval);
        alert('Вы проиграли!');
        location.reload();
      }
    }
    
    let idInterval = setInterval(timer, 1000);
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))


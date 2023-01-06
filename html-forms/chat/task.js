const chatWidget = document.querySelector('.chat-widget');
const chatWidgetMessages = document.querySelector('.chat-widget__messages');
const widgetInput = document.querySelector('.chat-widget__input');
const messagesContainer = document.querySelector('.chat-widget__messages-container');
const currantDate = new Date();
const currantTime = (new Date()).getHours() + ":" + (new Date()).getMinutes();

messagesContainer.scrollTop = messagesContainer.scrollHeight;

function questionRobot() {
  setInterval(() => {
    chatWidgetMessages.innerHTML += `
    <div class="message">
      <div class="message__time">${currantTime}</div>
      <div class="message__text">У Вас остались вопросы?</div>
     </div>`;
  }, 30000)
}

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
  questionRobot();
})

widgetInput.addEventListener('keyup', (event) => {
  event.preventDefault();
  const message = widgetInput.value;
  const keyboard = event.key;
  if (keyboard == 'Enter') {
    const phraseRobot = [
      'Кто ты?',
      'Чем ты занимаешься?',
      'Как Вас зовут?',
      'Как ваши дела?',
      'Как это работает?',
      'Что вы предлагаете?',
      'Где вы находитесь?'
    ];
    const random = Math.floor(Math.random() * ((phraseRobot.length - 1) + 1));
    chatWidgetMessages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${currantTime}</div> 
        <div class="message__text">${message}</div>
      </div>
      <div class="message">
        <div class="message__time">${currantTime}</div>
        <div class="message__text">${phraseRobot[random]}</div>
      </div>
    `;
    questionRobot();
    widgetInput.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
})
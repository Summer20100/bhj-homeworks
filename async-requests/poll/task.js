const poll = document.querySelector('.poll');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send(null);

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {

    let question = JSON.parse(xhr.responseText).data;
    let questionId = JSON.parse(xhr.responseText).id;
    
    poll.querySelector('#poll__title').innerHTML = `
      <div class="poll__title" id="poll__title">
        ${question.title}
      </div>
    `;

    for (let el of question.answers) {
      poll.querySelector('#poll__answers').innerHTML += `
        <button class="poll__answer">
          ${el}
        </button>
      `;
      
      poll.querySelectorAll('.poll__answer').forEach( (el, ind) => {
        el.addEventListener('click', () => {
          const xhrVote = new XMLHttpRequest;
          xhrVote.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
          xhrVote.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
          let name = 'vote=' + questionId + '&answer=' + ind;
          xhrVote.send(name);
          popUpMsg();
          if (xhrVote.readyState === xhrVote.DONE && xhrVote.status === 200) {
            let vote = Object.values(JSON.parse(xhrVote.responseText).start);
            if (vote.answer === el.innerText) {
              document.querySelector('#poll__answers').innerHTML =  `
              <div class="item">
                <div class="item__code">
                  ${vote.answer}
                </div>
                <div class="item__value">
                  ${vote.votes} %
                </div>
              </div>
            `;
            }
          }
        })
      });
    }
  }
})

function popUpMsg() {
  const popUpMsg = document.querySelector('body');
  popUpMsg.insertAdjacentHTML("beforeEnd",
    `<div class="modal_mask">
       <div class="modal">
            <div class="modal_msg">Спасибо, ваш голос засчитан!</div>
            <button class="close_btn">Закрыть</button>
        </div>
    </div>`
  );
  const closeBtn = document.querySelector('.close_btn');
  closeBtn.addEventListener('click', (ev) => {
    ev.target.closest('div.modal_mask').remove();
  });
}
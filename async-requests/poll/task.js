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
          alert('Спасибо, ваш голос засчитан!');
          const xhrVote = new XMLHttpRequest;
          xhrVote.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
          xhrVote.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
          xhrVote.send( 'vote=`&{questionId}`&answer=`&{ind}`' );
          if (xhrVote.readyState === xhrVote.DONE && xhrVote.status === 200) {
            let vote = JSON.parse(xhrVote.responseText);
            console.log(vote);
          }
        })
      });
    }
  }
})
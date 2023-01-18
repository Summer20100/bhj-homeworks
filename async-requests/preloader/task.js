const img = document.querySelector('#loader');
const items = document.querySelector('#items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

let currency = [];

// if (localStorage.length > 0) {
//     items.innerHTML = `
//       <div class="item">
//         <div class="item__code">
//           ${JSON.parse(localStorage.getItem('currency'))}
//         </div>
//       </div>
//     `;
// }


xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    img.classList.remove('loader_active');
    localStorage.setItem('currancy', JSON.parse(xhr.responseText).response.Valute);
    let valute = Object.values(JSON.parse(xhr.responseText).response.Valute);
    valute.forEach(val => {
      items.innerHTML += `
        <div class="item">
          <div class="item__code">
            ${val.CharCode}
          </div>
          <div class="item__value">
            ${val.Value}
          </div>
          <div class="item__currency">
            руб.
          </div>
        </div>
      `;
      let currencyValue = {
        CharCode: val.CharCode,
        Value: val.Value
      };
      currency.push(JSON.stringify(currencyValue));
    })
    localStorage.setItem('currency', currency);
  }
})
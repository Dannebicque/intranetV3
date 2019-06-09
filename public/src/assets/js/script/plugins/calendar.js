const dateDuJour = moment().day()
const moisDuJour = moment().month()
const semaineAnnee = moment().week()

const table = $('#calendar')
let num = 0

console.log('jour' + dateDuJour);
console.log('mois' + moisDuJour);
console.log('semaine' + semaineAnnee);


function dessineLigne() {
  let html = ''

  html = html + '<tr>';
  for (let i = 0; i < 6; i++) {
    html = html + '<td>' + num + '</td>';
    num++;
  }
  html = html + '</tr>';

  $('#calendar').append(html);
}

$(document).ready(function () {
  dessineLigne();
  dessineLigne();
  dessineLigne();
  dessineLigne();
});

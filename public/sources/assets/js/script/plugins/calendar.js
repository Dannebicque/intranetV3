var dateDuJour = moment().day();
var moisDuJour = moment().month();
var semaineAnnee = moment().week();

var table = $('#calendar');
var num = 0;

console.log('jour' + dateDuJour);
console.log('mois' + moisDuJour);
console.log('semaine' + semaineAnnee);


function dessineLigne() {
  var html = '';

  html = html + '<tr>';
  for (var i = 0; i < 6; i++) {
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
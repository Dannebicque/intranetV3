'use strict';


require('./config');
require('./util');

/** CSS **/
require("../../css/style.scss");


/*
|--------------------------------------------------------------------------
| Application Is Ready
|--------------------------------------------------------------------------
|
| When all the dependencies of the page are loaded and executed,
| the application automatically call this function. You can consider it as
| a replacer for jQuery ready function - "$( document ).ready()".
|
*/

app.ready(function () {

  //colorise le bon menu
  readUrlMenu($(location).attr('pathname'));

  /*
  |--------------------------------------------------------------------------
  | Plugins
  |--------------------------------------------------------------------------
  |
  | Import initialization of plugins that used in your application
  |
  */

  var langueFr = {
    "decimal": "",
    "emptyTable": "Aucune donn&eacute;e disponible dans le tableau",
    "info": "Affichage de l'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
    "infoEmpty": "Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
    "infoFiltered": "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
    "infoPostFix": "",
    "thousands": ",",
    "lengthMenu": "Afficher _MENU_ &eacute;l&eacute;ments",
    "loadingRecords": "Chargement en cours...",
    "processing": "Traitement en cours...",
    "search": "Rechercher&nbsp;:",
    "zeroRecords": "Aucun &eacute;l&eacute;ment &agrave; afficher",
    "paginate": {
      "first": "Premier",
      "last": "Dernier",
      "next": "Suivant",
      "previous": "Pr&eacute;c&eacute;dent"
    },
    "aria": {
      "sortAscending": ": activer pour trier la colonne par ordre croissant",
      "sortDescending": ": activer pour trier la colonne par ordre d&eacute;croissant"
    }
  };

  //require('./plugins/documents.js'
  require('./plugins/myModal.js');
  require('./plugins/pagination');

  $.fn.editable.defaults.mode = 'inline'
  $.fn.editableform.buttons =
    '<button type="submit" class="btn btn-primary btn-sm editable-submit">' +
    '<i class="fa fa-fw fa-check"></i>' +
    '</button>' +
    '<button type="button" class="btn btn-default btn-sm editable-cancel">' +
    '<i class="fa fa-fw fa-times"></i>' +
    '</button>'
  /*$('#username').editable({
    type: 'text',
    pk: 1,
    url: '/post',
    title: 'Enter username'
  });*/

  //require('./plugins/calendar');

  /*
  |--------------------------------------------------------------------------
  | Paritials
  |--------------------------------------------------------------------------
  |
  | Import your main application code
  |
  */
  require('./partials/profil.js');
  require('./partials/documents.js');
  require('./partials/trombinoscope.js');
  require('./partials/personnel.js');
  require('./partials/etudiants');
  require('./partials/applications');
  require('./partials/previsionnel');
  require('./partials/informations');
  require('./partials/configuration');
  require('./partials/messagerie');
  require('./partials/absences');
  require('./partials/notes')
  require('./partials/social');

  //$.fn.dataTable.moment( 'Do MMMM  YYYY à h:mm' ); pour trier les datatable selon une date. Ne fonctionne pas.

  if (typeof $('#editCourrier') != 'undefined') {
    //require('./plugins/myQuill');
    //var editor = loadQuill('#editCourrier', ['[CiviliteEtudiant]','[NomEtudiant]', '[PrenomEtudiant]', '[Entreprise]','[Tuteur]'])
  }

  var preloader = $('.preloader');
  if (preloader.length) {
    var speed = preloader.dataAttr('hide-spped', 600);
    preloader.fadeOut(speed);
  }

  $(document).on({
    ajaxStart: function () {
      preloader.show();
    },
    ajaxStop: function () {
      preloader.hide();
    }
  });

  $('.callout').delay(5000).slideUp('slow');


});

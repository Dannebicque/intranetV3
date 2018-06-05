'use strict';


require('./config');
require('./util.js');

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

  //require('./plugins/documents.js');
  require('./plugins/datetable-moment');
  require('./plugins/myModal.js');
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


});

/*
 * Copyright (C) 2013 - 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 *
 * @file /Users/davidannebicque/htdocs/intranetv3/public/src/assets/js/script/main.js
 * @author David annebicque
 * @project intranetv3
 * @date  05/05/2019 11:55
 * @lastUpdate 05/05/2019 11:55
 *
 */

'use strict'


require('./config');
require('./util');

/** CSS **/
require("../../css/style.scss");

const langueFr = {
  'decimal': '',
  'emptyTable': 'Aucune donn&eacute;e disponible dans le tableau',
  'info': 'Affichage de l\'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments',
  'infoEmpty': 'Affichage de l\'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment',
  'infoFiltered': '(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)',
  'infoPostFix': '',
  'thousands': ',',
  'lengthMenu': 'Afficher _MENU_ &eacute;l&eacute;ments',
  'loadingRecords': 'Chargement en cours...',
  'processing': 'Traitement en cours...',
  'search': 'Rechercher&nbsp;:',
  'zeroRecords': 'Aucun &eacute;l&eacute;ment &agrave; afficher',
  'paginate': {
    'first': 'Premier',
    'last': 'Dernier',
    'next': 'Suivant',
    'previous': 'Pr&eacute;c&eacute;dent'
  },
  'aria': {
    'sortAscending': ': activer pour trier la colonne par ordre croissant',
    'sortDescending': ': activer pour trier la colonne par ordre d&eacute;croissant'
  }
}
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

  // script pour afficher le fichier selectionné avec bootstrap4
  $('.custom-file input').change(function (e) {
    const files = []
    for (let i = 0; i < $(this)[0].files.length; i++) {
      files.push($(this)[0].files[i].name)
    }
    $(this).next('.custom-file-label').html(files.join(', '))
  })


  /*
  |--------------------------------------------------------------------------
  | Plugins
  |--------------------------------------------------------------------------
  |
  | Import initialization of plugins that used in your application
  |
  */



  //require('./plugins/documents.js'
  require('./plugins/myModal.js')
  require('./plugins/pagination')


  // $.fn.editableform.buttons =
  //   '<button type="submit" class="btn btn-primary btn-sm editable-submit">' +
  //   '<i class="fa fa-fw fa-check"></i>' +
  //   '</button>' +
  //   '<button type="button" class="btn btn-default btn-sm editable-cancel">' +
  //   '<i class="fa fa-fw fa-times"></i>' +
  //   '</button>'


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
  require('./partials/profil')
  require('./partials/documents')
  require('./partials/trombinoscope')
  require('./partials/personnel')
  require('./partials/etudiants')
  require('./partials/applications')
  require('./partials/previsionnel')
  require('./partials/informations')
  require('./partials/configuration')
  require('./partials/messagerie')
  require('./partials/absences')
  require('./partials/notes')
  require('./partials/social')
  require('./partials/search')
  require('./partials/rattrapages')
  require('./partials/adm-notes')
  require('./partials/planning')
  require('./partials/user')
  require('./partials/matiere')
  require('./partials/alternances')
  require('./partials/scolarite')
  require('./partials/borne')
  require('./partials/groupe')
  require('./partials/creneaux')
  require('./partials/progression')
  require('./partials/admEdt')
  require('./partials/articles')
  require('./partials/stage')

  //$.fn.dataTable.moment( 'Do MMMM  YYYY à h:mm' ); pour trier les datatable selon une date. Ne fonctionne pas.

  if (typeof $('#editCourrier') != 'undefined') {
    //require('./plugins/myQuill');
    //var editor = loadQuill('#editCourrier', ['[CiviliteEtudiant]','[NomEtudiant]', '[PrenomEtudiant]', '[Entreprise]','[Tuteur]'])
  }

  const preloader = $('.preloader')
  if (preloader.length) {
    const speed = preloader.dataAttr('hide-spped', 600)
    preloader.fadeOut(speed)
  }

  $(document).on({
    ajaxStart: function () {
      preloader.show()
    },
    ajaxStop: function () {
      preloader.hide()
    }
  })

  $('.callout').delay(5000).slideUp('slow')


})

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/public/src-a_supprimer/assets/js/script/main.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/07/2020 09:06

'use strict'

require('./config')
require('./util')
// require('../../vendor/jquery.collection')
// require('../../vendor/jqueryui')

/** CSS **/
require('../../css/style.scss')


const iconShow = 'fa fa-info'
const iconEdit = 'fa fa-edit'
const iconDelete = 'fa fa-trash'
const iconPrint = 'fa fa-print'
const iconDuplicate = 'fa fa-copy'
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

  //bouton copier du lien ical
  $(document).on('click', '#copyLink', function() {
    $('#lienIcal').select()
    document.execCommand('copy')
  })


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

  require('./plugins/pagination')


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
  require('./partials/quizz')
  require('./partials/quizzEtudiant')
  require('./partials/qualite')
  //require('./partials/sousCommission')

  require('./plugins/myQuill')


  const preloader = $('.preloader')
  if (preloader.length) {
    const speed = preloader.dataAttr('hide-spped', 600)
    preloader.fadeOut(speed)
  }

  // $(document).on({
  //   ajaxStart: function () {
  //     preloader.show()
  //   },
  //   ajaxStop: function () {
  //     preloader.hide()
  //   }
  // })

  $('.callout').delay(5000).slideUp('slow')

})

/*
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/public/src/assets/js/script.js
 * @author     David Annebicque
 * @project intranetv3
 * @date 18/08/2019 11:48
 * @lastUpdate 18/08/2019 11:47
 */

'use strict'


app.config({

  /*
  |--------------------------------------------------------------------------
  | Autoload
  |--------------------------------------------------------------------------
  |
  | By default, the app will load all the required plugins from /assets/vendor/
  | directory. If you need to disable this functionality, simply change the
  | following variable to false. In that case, you need to take care of loading
  | the required CSS and JS files into your page.
  |
  */

  autoload: true,

  /*
  |--------------------------------------------------------------------------
  | Provide
  |--------------------------------------------------------------------------
  |
  | Specify an array of the name of vendors that should be load in all pages.
  | Visit following URL to see a list of available vendors.
  |
  | https://thetheme.io/theadmin/help/article-dependency-injection.html#provider-list
  |
  */

  provide: ['datatables', 'quill', 'momentjs', 'chartjs'],

  /*
  |--------------------------------------------------------------------------
  | Google API Key
  |--------------------------------------------------------------------------
  |
  | Here you may specify your Google API key if you need to use Google Maps
  | in your application
  |
  | Warning: You should replace the following value with your own Api Key.
  | Since this is our own API Key, we can't guarantee that this value always
  | works for you.
  |
  | https://developers.google.com/maps/documentation/javascript/get-api-key
  |
  */

  googleApiKey: 'AIzaSyDRBLFOTTh2NFM93HpUA4ZrA99yKnCAsto',

  /*
  |--------------------------------------------------------------------------
  | Google Analytics Tracking
  |--------------------------------------------------------------------------
  |
  | If you want to use Google Analytics, you can specify your Tracking ID in
  | this option. Your key would be a value like: UA-XXXXXXXX-Y
  |
  */

  googleAnalyticsId: '',

  /*
  |--------------------------------------------------------------------------
  | Smooth Scroll
  |--------------------------------------------------------------------------
  |
  | By changing the value of this option to true, the browser's scrollbar
  | moves smoothly on scroll.
  |
  */

  smoothScroll: false,

  /*
  |--------------------------------------------------------------------------
  | Save States
  |--------------------------------------------------------------------------
  |
  | If you turn on this option, we save the state of your application to load
  | them on the next visit (e.g. make topbar fixed).
  |
  | Supported states: Topbar fix, Sidebar fold
  |
  */

  saveState: false,

  /*
  |--------------------------------------------------------------------------
  | Cache Bust String
  |--------------------------------------------------------------------------
  |
  | Adds a cache-busting string to the end of a script URL. We automatically
  | add a question mark (?) before the string. Possible values are: '1.2.3',
  | 'v1.2.3', or '123456789'
  |
  */

  cacheBust: '',
});


function readUrlMenu($url) {
  const $elt = $url.split('/')
  let $firstElt = 2
  console.log($elt);
    if ($elt[1] === 'index.php') {
      if ($elt.length > 1) {
        $firstElt = 3;
      }
    }

    if ($elt[$firstElt] === 'super-administration') {
        $firstElt = $firstElt+1;
    }

  if ($elt[$elt.length-1] === "") {
    $elt.pop();
  }

  $('.menu-item').removeClass('active');
  $('#menu-' + $elt[$firstElt]).addClass('active');
}

//colorise le bon menu
readUrlMenu($(location).attr('pathname'))

function updateAffichage (date, heure) {
  console.log('aff')
  $.ajax({
    type: 'GET',
    url: Routing.generate('application_personnel_absence_get_ajax', {matiere: $('#absence-matiere').val()}),
    dataType: 'json',
    success: function (data) {

      // const tabsences = data
      //console.log('date ' + date)
      //console.log(data)
      const t = date.split('/')
      const ddate = t[2].trim() + '-' + t[1].trim() + '-' + t[0].trim()
      //console.log('ddate ' + ddate)
      if (heure.length === 4) {
        heure = '0' + heure
      }
      //console.log('heure ' + heure)
      // var obj = tabsences[ddate]
      // console.log('tabsences[ddate] ' + obj)
      for (let d in data) {
        //console.log('d ' + d)
        if (d == ddate) {
          //console.log('ok')
          if (typeof data[d][heure] !== 'undefined') {
            for (let i = 0; i < data[d][heure].length; i++) {
              //console.log('marquage')
              //console.log('tabsences[ddate][heure][i] ' + data[d][heure][i])
              $('#etu_' + data[d][heure][i]).addClass('absent')
            }
          }
        }
      }
      //if (typeof tabsences[ddate] !== 'undefined') {
      //if (typeof tabsences[ddate][heure] !== 'undefined') {

      // }
      //}
    }
  })
}

//pop up de confirmation de suppression
$(document).on('click', '.supprimer', function (e) {
  e.preventDefault();
  const url = $(this).attr('href')
  const csrf = $(this).data('csrf')
  swal({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    confirmButtonClass: 'btn btn-primary',
    cancelButtonClass: 'btn btn-secondary',
    buttonsStyling: false
  }).then(function (result) {
    console.log(result)
    if (result.value) {
      console.log(url);
      $.ajax({
        url: url,
        type: "DELETE",
        data: {
          _token: csrf
        },
        success: function (id) {
          $("#ligne_" + id).closest('tr').remove();
          addCallout('Suppression effectuée avec succès', 'success')
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        },
        error: function (xhr, ajaxOptions, thrownError) {
          swal("Error deleting!", "Please try again", "error");
          addCallout('Erreur lors de la tentative de suppression', 'danger')
        }
      });

    } else if (
      // Read more about handling dismissals
      result.dismiss === 'cancel'
    ) {
      swal(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
});

function addCallout (message, label) {
  const html = '<div class="callout callout-' + label + '" role="alert">\n' +
    '                    <button type="button" class="close" data-dismiss="callout" aria-label="Close">\n' +
    '                        <span>&times;</span>\n' +
    '                    </button>\n' +
    '                    <h5>' + label + '</h5>\n' +
    '                    <p>' + message + '</p>\n' +
    '                </div>'

  $('#mainContent').prepend(html).slideDown('slow')
  $('.callout').delay(5000).slideUp('slow')
}



/** CSS **/


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

const iconShow = 'fa fa-info'
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


  //require('./plugins/documents.js'


/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/plugins/myModal.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

const idModal = 1

function openModal(titre)
{


  const html = '<div id="modal' + idModal + '" role="dialog" aria-hidden="true" class="modal fade" style="display: none;">\n' +
    '                    <div class="modal-dialog modal-md modal-dialog-centered">\n' +
    '                        <div tabindex="-1" class="modal-content">\n' +
    '                            <header class="modal-header"><h5 class="modal-title">\n' +
    '                                    ' + titre + '</h5>\n' +
    '                                <button type="button" data-dismiss="modal" class="close">×</button>\n' +
    '                            </header>\n' +
    '                            <div class="modal-body"><p class="my-4"></p></div>\n' +
    '                            <footer class="modal-footer">\n' +
    '                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>\n' +
    '                            </footer>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>'


}


$(document).on('click', '.page-link', function (e) {
  e.preventDefault();
  e.stopPropagation();
  const zone = $('#zone-pagination')
  zone.empty();
  zone.load($(this).attr('href'));
});


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


/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/profil.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('click', '.changeprofil', function (e) {
  e.preventDefault()
  e.stopPropagation()

  $('.changeprofil').removeClass('active show')
  $(this).addClass('active show')
  $('#profilContent').empty().load($(this).attr('href'))
})

$(document).on('change', '.addfavori', function (e) {
  e.preventDefault()
  e.stopPropagation()

  $.ajax({
    url: Routing.generate('user_add_favori'),
    method: 'POST',
    data: {
      'user': $(this).val(),
      'etat': $(this).prop('checked')
    }
  })
})

$(document).on('click', '#btnabs', function (e) {
  $.ajax({
    url: Routing.generate('administration_absences_ajax_add'),
    data: {
      'etudiant': $(this).data('etudiant'),
      'date': $('#jourabs').val(),
      'matiere': $('#moduleabs').val(),
      'heure': $('#heureabs').val(),
      'justif': $('input[type=radio][name=justifabs]:checked').val()
    },
    method: 'POST',
    success: function (data) {
      //ajout de la ligne
      //calcout
      let classe = ''
      let texte = ''
      let checked = ''
      if (data.justifie === true) {
        classe = 'bg-pale-success'
        texte = 'Oui'
        checked = 'checked'
      } else {
        classe = 'bg-pale-warning'
        texte = 'Non'
        checked = ''
      }

      let html = '<tr class="' + classe + '" id="ligne_' + data.id + '">\n' +
        '                    <td>' + data.date + '</td>\n' +
        '                    <td>' + data.heure + '</td>\n' +
        '                    <td>' + data.codeMatiere + '</td>\n' +
        '                    <td>' + texte + '</td>\n' +
        '                    <td class="hide">' + data.personnel + '</td>\n' +
        '                    <td>\n' +
        '                        <button data-provide="modaler tooltip"\n' +
        '                                data-url="' + Routing.generate('app_etudiant_absence_detail', {'uuid': data.uuidString}) + '"\n' +
        '                                class="btn btn-info btn-outline btn-square btn-xs"\n' +
        '                                data-placement="bottom"\n' +
        '                                title="Détails"\n' +
        '                                data-title="Détails de l\'absence"\n' +
        '                        >\n' +
        '                            <i class="' + iconShow + '"></i>\n' +
        '                        </button>\n' +
        '                    </td>\n' +
        '                        <td>\n' +
        '                            <div class="custom-control custom-control-lg custom-checkbox">\n' +
        '                                <input type="checkbox" class="custom-control-input checkAbsence" id="check_' + data.id + '"\n' +
        '                                       data-absence="' + data.id + '" ' + checked + '>\n' +
        '                                <label class="custom-control-label" for="check_' + data.id + '">Justifiée*</label>\n' +
        '                            </div>\n' +
        '                        </td>\n' +
        '                </tr>'


      $('#tableAbsence > tbody:last').append(html)
    }
  })
})

$(document).on('click', '.checkAbsence', function (e) {
  let absence = $(this).data('absence')
  let etat = 1

  if (($(this).is(':checked'))) {
    etat = 0
  }

  console.log(etat)
  $.ajax({
    url: Routing.generate('administration_absences_justifie', {'absence': absence, 'etat': etat}),
    type: 'GET',
    success: function (data) {
      if (data) {
        $('#ligne_' + absence).removeClass('bg-pale-warning').addClass('bg-pale-success')
      } else {
        $('#ligne_' + absence).removeClass('bg-pale-success').addClass('bg-pale-warning')
      }
    }
  })

})


/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/documents.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('click', '.afficheDocuments', function() {
  $('#zone_document').empty().load(Routing.generate('document_ajax', {typedocument: $(this).data('type')}));
  $('#boutonBack').show();
});

$(document).on('click', '#boutonBack', function() {
  $('#zone_document').empty().load(Routing.generate('typedocument_ajax'));
  $('#boutonBack').hide();
});


/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/trombinoscope.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('click', '.semestretrombi', function(e) {
  //todo: comment gérer la locale ?
  e.preventDefault();


  $('.semestretrombi').removeClass('active show');
  $('.enseignanttrombi').removeClass('active show');
  $(this).addClass('active show');


  /*$.ajax({
    url: Routing.generate('api_etudiants_semestre', {semestre: $(this).data('sem')}),
    success: function (data){
      $('#trombi').empty();
      jQuery.each(data, function(index, etudiant) {
        var html = "<div class=\"col-sm-6 col-md-3 col-lg-3\">\n" +
          "    <div class=\"card card-trombi\">\n" +
          "        <div class=\"flexbox align-items-center px-20 pt-20\">\n" +
          "            <label class=\"toggler toggler-danger fs-16\">\n" +
          "                <input type=\"checkbox\" checked class=\"addfavori\" value=\"" + etudiant.slug + "\">\n" +
          "                <i class=\"fa fa-heart\"></i>\n" +
          "            </label>\n" +
          "            <div class=\"dropdown\">\n" +
          "                <a data-toggle=\"dropdown\" href=\"#\"><i class=\"ti-more-alt rotate-90 text-muted\"></i></a>\n" +
          "                <div class=\"dropdown-menu dropdown-menu-right\">\n" +
          "                    <a class=\"dropdown-item\" href=\"" + Routing.generate('user_profil.fr', {
            type: 'etudiant',
            slug: etudiant.slug
          }) + "\"><i class=\"fa fa-user\"></i> Profil</a>\n" +
          "                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-picture-o\"></i> Site personnel</a>\n" +
          "                    <a class=\"dropdown-item\" href=\"#\"><i class=\"ti-world\"></i> Site Universitaire</a>\n" +
          "                    <a class=\"dropdown-item\" href=\"#\"><i class=\"ti-email\"></i> Contacter</a>\n" +
          "                </div>\n" +
          "            </div>\n" +
          "        </div>\n" +
          "        <div class=\"card-body text-center pt-1 pb-50\">\n" +
          "            <a href=\"" + Routing.generate('user_profil.fr', {
            type: 'etudiant',
            slug: etudiant.slug
          }) + "\">\n" +
          "                <img class=\"avatar avatar-xxl\" src=\"\">\n" +
          "            </a>\n" +
          "            <h5 class=\"mt-3 mb-1\">\n" +
          "                <a class=\"hover-primary\" href=\"" + Routing.generate('user_profil.fr', {
            type: 'etudiant',
            slug: etudiant.slug
          }) + "\">" + etudiant.prenom + " " + etudiant.nom + "\n" +
          "                </a>\n" +
          "            </h5>\n" +
          "        </div>\n" +
          "    </div>\n" +
          "</div>";
        $('#trombi').append(html);
      });
    }
  })*/
  $('#trombi').slideUp().empty().load(Routing.generate('trombinoscope_etudiant_semestre', {semestre: $(this).data('sem')})).slideDown();
});

$(document).on('click', '.changeTypeGroupe', function (e) {
  //todo: comment gérer la locale ?
  e.preventDefault();

  $('#trombi').slideUp().empty().load(Routing.generate('trombinoscope_etudiant_semestre', {
    semestre: $(this).data('semestre'),
    typegroupe: $(this).data('typegroupe')
  })).slideDown();
});

$(document).on('click', '.enseignanttrombi', function(e) {
  e.preventDefault();
  //$('#trombifiltre').hide();
  $('.semestretrombi').removeClass('active show');
  $('.enseignanttrombi').removeClass('active show');
  $(this).addClass('active show');
  $('#trombi').slideUp().empty().load(Routing.generate('trombinoscope_personnel', {type: $(this).data('type')})).slideDown();

  //$('.card-title').html($(this).text());
  /*$.ajax({
    url: Routing.generate('api_enseignants_type', {type: $(this).data('type')}),
    dataType: 'json',
    success: function (data){

      $('#trombi').empty();
      jQuery.each(data, function(index, pers) {
        var html = "<div class=\"col-sm-6 col-md-3 col-lg-3\">\n" +
          "    <div class=\"card card-trombi\">\n" +
          "        <div class=\"flexbox align-items-center px-20 pt-20\">\n" +
          "            <label class=\"toggler toggler-danger fs-16\">\n" +
          "                <input type=\"checkbox\" checked>\n" +
          "                <i class=\"fa fa-heart\"></i>\n" +
          "            </label>\n" +
          "            <div class=\"dropdown\">\n" +
          "                <a data-toggle=\"dropdown\" href=\"#\"><i class=\"ti-more-alt rotate-90 text-muted\"></i></a>\n" +
          "                <div class=\"dropdown-menu dropdown-menu-right\">\n" +
          "                    <a class=\"dropdown-item\" href=\""+Routing.generate('user_profil', {type: 'personnel', slug: pers.slug})+"\"><i class=\"fa fa-user\"></i> Profil</a>\n" +
          "                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-picture-o\"></i> Site personnel</a>\n" +
          "                    <a class=\"dropdown-item\" href=\"#\"><i class=\"ti-world\"></i> Site Universitaire</a>\n" +
          "                    <a class=\"dropdown-item\" href=\"#\"><i class=\"ti-email\"></i> Contacter</a>\n" +
          "                </div>\n" +
          "            </div>\n" +
          "        </div>\n" +
          "        <div class=\"card-body text-center pt-1 pb-50\">\n" +
          "            <a href=\""+Routing.generate('user_profil', {type: 'personnel', slug: pers.slug})+"\">\n" +
          "                <img class=\"avatar avatar-xxl\" src=\"\">\n" +
          "            </a>\n" +
          "            <h5 class=\"mt-3 mb-1\">\n" +
          "                <a class=\"hover-primary\" href=\""+Routing.generate('user_profil', {type: 'personnel', slug: pers.slug})+"\">"+pers.prenom+" " + pers.nom+"\n" +
          "                </a>\n" +
          "            </h5>\n" +
          "        </div>\n" +
          "    </div>\n" +
          "</div>";
        $('#trombi').append(html);
      });
    }
  })*/

});


/*
 * Copyright (C) 2013 - 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 *
 * @file /Users/davidannebicque/htdocs/intranetv3/public/src/assets/js/script/partials/personnel.js
 * @author David annebicque
 * @project intranetv3
 * @date  05/05/2019 11:55
 * @lastUpdate 05/05/2019 11:55
 *
 */

$(document).on('keyup', '#login_urca', function () {
  const $val = $(this).val()
  console.log($val)
  if ($val.length > 2) {
    $.ajax({
      url: Routing.generate('api_personnel_recherche', {needle: $val}),
      dataType: 'json',
      success: function (data) {
        $('#result').empty()
        jQuery.each(data, function (index, pers) {
          const html = '<tr>' +
            '<td>' + pers.nom + '</td>' +
            '<td>' + pers.prenom + '</td>' +
            '<td>' + pers.username + '</td>' +
            '<td>' + pers.mail_univ + '</td>' +
            '<td><a href="#" class="btn btn-success btn-outline btn-square addpersonnel" data-provide="tooltip" data-placement="bottom" title="Ajouter à la departement" data-slug="' + pers.slug + '"><i class="ti-plus"></i></a></td>' +
            '</tr>'
          $('#result').append(html)
        })
      }
    })
  }
})

$(document).on('click', '.addpersonnel', function () {
  $.ajax({
    url: Routing.generate('api_personnel_add_to_departement', {slug: $(this).data('slug')}),
    dataType: 'json',
    success: function (data) {
      addCallout('Personnel ajouté au département !', 'success')
    }
  })
})

$(document).on('keyup', '#sa_login_urca', function () {
  const departement = $(this).data('departement')
  const $val = $(this).val()
  console.log($val)
  if ($val.length > 2) {
    $.ajax({
      url: Routing.generate('api_personnel_recherche', {needle: $val}),
      dataType: 'json',
      success: function (data) {
        $('#result').empty()
        jQuery.each(data, function (index, pers) {
          const html = '<tr>' +
            '<td>' + pers.nom + '</td>' +
            '<td>' + pers.prenom + '</td>' +
            '<td>' + pers.username + '</td>' +
            '<td>' + pers.mail_univ + '</td>' +
            '<td><a href="#" class="btn btn-success btn-outline btn-square sa_addpersonnel" data-provide="tooltip" data-placement="bottom" title="Ajouter au departement" data-slug="' + pers.slug + '" data-departement="' + departement + '"><i class="ti-plus"></i></a></td>' +
            '</tr>'
          $('#result').append(html)
        })
      }
    })
  }
})

$(document).on('click', '.sa_addpersonnel', function () {
  $.ajax({
    url: Routing.generate('api_personnel_add_to_departement', {
      slug: $(this).data('slug'),
      departement: $(this).data('departement')
    }),
    dataType: 'json',
    success: function (data) {
      addCallout('Personnel ajouté au departement !', 'success')

    }
  })
})

$(document).on('click', '.personnel_index_change', function () {
  $('.personnel_index_change').removeClass('active show')
  $(this).addClass('active show')
  const table = $('#tableau').DataTable()
  table.clear() //effacer le datatable
  table.destroy() //supprimer le datatable
  $.ajax({
    url: Routing.generate('api_enseignants_type', {type: $(this).data('type')}),
    dataType: 'json',
    success: function (data) {
      jQuery.each(data, function (index, pers) {
        //ajouter les lignes
        const html = '<tr>\n' +
          '                        <td>' + pers.nom + '</td>\n' +
          '                        <td>' + pers.prenom + '</td>\n' +
          '                        <td>' + pers.posteInterne + '</td>\n' +
          '                        <td>' + pers.telBureau + '</td>\n' +
          '                        <td>' + pers.bureau1 + '</td>\n' +
          '                        <td>' + pers.numeroHarpege + '</td>\n' +
          '                        <td>' + pers.mailUniv + '</td>\n' +
          '                        <td>\n' +
          '<a href="' + Routing.generate('administration_personnel_show', {id: pers.id}) + '" class="btn btn-info btn-outline btn-square" data-provide="tooltip"\n' +
          '   data-placement="bottom" title="Détails"><i class="fa fa-info"></i></a>\n' +
          '<a href="' + Routing.generate('administration_personnel_edit', {id: pers.id}) + '"\n' +
          '   class="btn btn-warning btn-outline btn-square"><i class="fa fa-edit"\n' +
          '                                                     data-provide="tooltip"\n' +
          '                                                     data-placement="bottom"\n' +
          '                                                     title="Modifier"></i></a>\n' +
          '<a href="' + Routing.generate('administration_personnel_delete', {id: pers.id}) + '" class="btn btn-danger btn-outline btn-square supprimer" data-id="id"><i\n' +
          '            class="fa fa-trash" data-provide="tooltip" data-placement="bottom"\n' +
          '            title="Supprimer"></i></a>' +
          '                        </td>\n' +
          '                    </tr>'
        $('#datatableau').append(html)
      })

      $('#tableau').DataTable({}) //regenerer le datatable avec les nouvelles data
    }
  })
})

$('#datatableRh').DataTable({
  'processing': true,
  'serverSide': true,
  'langue': langueFr,
  'ajax': Routing.generate('api_all_personnel'),
  'sAjaxDataProp': 'data',
  'pageLength': 25,
  'columns': [
    {'data': 'numero_harpege'},
    {'data': 'nom'},
    {'data': 'prenom'},
    {'data': 'departements'},
    {'data': 'deleted'},
    {
      'data': 'id',
      'sortable': false,
      'mRender': function (data, type, full) {
        return '<a href="' + Routing.generate('sa_rh_personnel_show', {id: data}) + '" class="btn btn-info btn-outline btn-square" data-provide="tooltip"\n' +
          '   data-placement="bottom" title="Détails"><i class="fa fa-info"></i></a>\n' +
          '<a href="' + Routing.generate('sa_rh_personnel_edit', {id: data}) + '"\n' +
          '   class="btn btn-warning btn-outline btn-square"\n' +
          '                                                     data-provide="tooltip"\n' +
          '                                                     data-placement="bottom"\n' +
          '                                                     title="Modifier"><i class="fa fa-edit"></i></a>\n' +
          '<a href="' + Routing.generate('sa_rh_delete_personnel', {id: data}) + '" class="btn btn-danger btn-outline btn-square supprimer" data-id="id"' +
          '            data-provide="tooltip" data-placement="bottom"\n' +
          '            title="Supprimer"><i class="fa fa-trash"></i></a>'
      }
    }]
  //todo: gérer scrf sur le delete
})

$(document).on('change', '.change_droit_pf', function () {
  $.ajax({
    url: Routing.generate('sa_personnel_departement_modifier_droit', {pf: $(this).data('pf')}),
    method: 'POST',
    data: {'droit': $(this).val()},
    success: function (data) {
      addCallout('Droits modifiés !', 'success')

    }
  })
})

$(document).on('change', '.updateRole', function () {
  $.ajax({
    url: Routing.generate('admin_personnel_departement_modifier_droit', {personnel: $('#personnel').val()}),
    method: 'POST',
    data: {'droit': $(this).val()},
    success: function (data) {
      addCallout('Droits modifiés !', 'success')
    }
  })
})


/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/etudiants.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

const table = $('#datatableEtudiants').DataTable({})
table.clear(); //effacer le datatable
table.destroy(); //supprimer le datatable

$('#datatableEtudiants').DataTable({
  "language": langueFr,
  "processing": true,
  "serverSide": true,
  "ajax": Routing.generate('api_etudiant_departement'),
  "sAjaxDataProp": "data",
  //"pageLength": 25,
  "columns": [
    {"data": "numetudiant"},
    {"data": "nom"},
    {"data": "prenom"},
    {"data": "semestre"},
    {"data": "profil"}]
});


$(document).on('click', '.admChangeTypeGroupe', function() {
  $('.admChangeTypeGroupe').removeClass('btn-primary');
  $(this).addClass('btn-primary')
  $('#listeEtudiantsGroupes').empty().load(Routing.generate('administration_etudiant_groupe_affecte',{typeGroupe: $(this).data('typegroupe')}));
});

$(document).on( 'click', '.changegroupe', function() {
  if($(this).is(':checked')) {
    const newgroupe = $(this).val()
    const oldgroupe = '#' + $(this).attr('name') + '_old'

    console.log(oldgroupe);
    $.ajax(
      {
        url: Routing.generate('administration_etudiant_groupe_change'),
        type: 'POST',
        data: {
          id: $(this).attr('name') + '-' + $(this).val(),
          typegroupe: $('#autocom').val(),
          oldgroupe: $(oldgroupe).val()
        },
        success: function (data) {
          $(oldgroupe).val(newgroupe);
        }
      });
  }
});



/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/applications.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */


$(document).on('click', '.changeapplication', function(e) {
  e.preventDefault();
  e.stopPropagation();

  $('.changeapplication').removeClass('active show');
  $(this).addClass('active show');
  $('#mainContent').empty().load($(this).attr('href'));
});

$(document).on('change', '#selectsemestre', function () {
  //matieres
  $('#listegroupe').empty();
  const selectMatiere = $('#selectmatiere')
  const selectGroupes = $('#selectgroupes')
  $.ajax(
    {
      url: Routing.generate('api_matieres_semestre', {semestre: $(this).val()}),
      dataType: "json", //Return data type (what we expect).
      success: function (data) {
        selectMatiere.empty();
        selectMatiere.append($("<option></option>")
          .attr("value", "")
          .text("Choisir une matière"));
        jQuery.each(data, function (index, matiere) {

          selectMatiere.append($("<option></option>")
            .attr("value", matiere.id)
            .text(matiere.libelle));
        });
      },
      error: function () {
//todo: message ?
      }
    });
  //groupes
  $.ajax(
    {
      url: Routing.generate('api_type_groupe_semestre', {semestre: $(this).val()}),

      dataType: "json", //Return data type (what we expect).
      success: function (data) {
        selectGroupes.empty();
        selectGroupes.append($("<option></option>")
          .attr("value", "")
          .text("Choisir un type de groupe"));
        jQuery.each(data, function (index, typeGroupe) {

          selectGroupes.append($("<option></option>")
            .attr("value", typeGroupe.id)
            .text(typeGroupe.libelle));
        });
      },
      error: function () {
//todo: message ?
      }
    });
});

$(document).on('change', '#selectgroupes', function () {

  const $lgr = $('#listegroupe')
  //matieres
  $.ajax(
    {
      url: Routing.generate('api_groupe_type_groupe', {typeGroupe: $(this).val()}),
      dataType: "json", //Return data type (what we expect).
      success: function (data) {
        $lgr.empty();
        let $html = ''
        jQuery.each(data, function (index, groupe) {
          $html += '<input type="checkbox" checked name="detail_groupes[]" value="' + groupe.id + '"> ' + groupe.libelle + ' | ';
        });
        $lgr.html($html);
      },
      error: function () {
        //todo: message ?
      }
    });
});

$(document).on('click','#add_rattrapage', function(){
  $('#bloc_add_rattrapage').toggle();
})

$(document).on('click','#add_carnet', function(){
  $('#bloc_add_carnet').toggle();
})

//todo: faire idem avec justificatif ? Implique de changer les méthodes.


/*
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/public/src/assets/js/script/partials/previsionnel.js
 * @author     David Annebicque
 * @project intranetv3
 * @date 02/08/2019 12:40
 * @lastUpdate 02/08/2019 12:39
 */

let nbLignePrevisionnel = 1

//todo: désactivé car off-line. Ajouter les CDN sur base.html.twig
//todo: pourquoi ajaxcomplete?
$(document).ajaxComplete(function () {
  $('.editPrevi').editable({
    type: 'text',
    url: Routing.generate('administration_previsionnel_edit')
    //todo: si success recalculer toute la ligne.
  })
})

$(document).on('change', '#previSemestre', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_semestre', {
    semestre: $(this).val(),
    annee: $(this).data('annee')
  }))
})

$(document).on('click', '#reloadPreviSemestre', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_semestre', {
    semestre: $(this).data('semestre'),
    annee: $(this).data('annee')
  }))
})

$(document).on('change', '#previMatiere', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_matiere', {
    matiere: $(this).val(),
    annee: $(this).data('annee')
  }))
})

$(document).on('click', '#reloadPreviMatiere', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_matiere', {
    matiere: $(this).data('matiere'),
    annee: $(this).data('annee')
  }))
})

$(document).on('change', '#previPersonnel', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_personnel', {
    personnel: $(this).val(),
    annee: $(this).data('annee')
  }))
})

$(document).on('click', '#reloadPreviPersonnel', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_personnel', {
    personnel: $(this).data('personnel'),
    annee: $(this).data('annee')
  }))
})

$(document).on('click', '.previsionnel_add_change', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('.previsionnel_add_change').removeClass('active show')
  $(this).addClass('active show')
  $('#mainContent').empty().load($(this).attr('href'))
})

$(document).on('click', '#addIntervenantPrevisionnel', function (e) {
  e.preventDefault()
  e.stopPropagation()
  nbLignePrevisionnel++


  $.ajax({
    url: Routing.generate('api_enseignants_departement'),
    method: 'POST',
    success: function (data) {
      let html = '<tr>\n' +
        '                        <td>\n' +
        '                            <select class="form-control" data-live-search="true" name="intervenant_' + nbLignePrevisionnel + '" id="intervenant_' + nbLignePrevisionnel + '">\n' +
        '                                <option value="">Choisir l\'intervenant</option>\n'
      jQuery.each(data, function (index, pers) {
        html = html + '<option value="' + pers.id + '">' + pers.display + '</option>\n'
      })
      html = html + '                            </select>\n' +
        '                        </td>\n' +
        '                        <td><input type="text" name="cm_' + nbLignePrevisionnel + '" id="cm_' + nbLignePrevisionnel + '" data-ligne="' + nbLignePrevisionnel + '" class="form-control chgcm" value="0"></td>\n' +
        '                        <td><input type="number" name="gr_cm_' + nbLignePrevisionnel + '" id="gr_cm_' + nbLignePrevisionnel + '" value="0" data-ligne="' + nbLignePrevisionnel + '" class="form-control chgcm">\n' +
        '                        </td>\n' +
        '                        <td id="ind_cm_' + nbLignePrevisionnel + '">0</td>\n' +
        '                        <td style="background-color: #68C39F"><input type="text" value="0" name="td_' + nbLignePrevisionnel + '" id="td_' + nbLignePrevisionnel + '" data-ligne="' + nbLignePrevisionnel + '"\n' +
        '                                                                     class="form-control chgtd"></td>\n' +
        '                        <td style="background-color: #68C39F"><input type="number" value="0" name="gr_td_' + nbLignePrevisionnel + '" id="gr_td_' + nbLignePrevisionnel + '"\n' +
        '                                                                     data-ligne="' + nbLignePrevisionnel + '" class="form-control chgtd"></td>\n' +
        '                        <td style="background-color: #68C39F" id="ind_td_' + nbLignePrevisionnel + '">0</td>\n' +
        '                        <td style="background-color: #FFC052"><input type="text" value="0" name="tp_' + nbLignePrevisionnel + '" id="tp_' + nbLignePrevisionnel + '" data-ligne="' + nbLignePrevisionnel + '"\n' +
        '                                                                     class="form-control chgtp"></td>\n' +
        '                        <td style="background-color: #FFC052"><input type="number" value="0" name="gr_tp_' + nbLignePrevisionnel + '" id="gr_tp_' + nbLignePrevisionnel + '"\n' +
        '                                                                     data-ligne="' + nbLignePrevisionnel + '" class="form-control chgtp"></td>\n' +
        '                        <td style="background-color: #FFC052" id="ind_tp_' + nbLignePrevisionnel + '">0</td>\n' +
        '                    </tr>'

      $('#nbLigne').val(nbLignePrevisionnel)
      $('#ligneAdd').before(html)
      $('#intervenant_' + nbLignePrevisionnel).selectpicker()
    }
  })


})

$(document).on('change', '.chgcm', function (e) {
  const ligne = $(this).data('ligne')
  const nbSeance = parseFloat($('#cm_' + ligne).val()) / 1.5
  $('#ind_cm_' + ligne).html(nbSeance.toFixed(2))

  updateSynthesePrevisionnel()
})

$(document).on('change', '.chgtd', function (e) {
  const ligne = $(this).data('ligne')
  const nbSeance = parseFloat($('#td_' + ligne).val()) / 1.5
  $('#ind_td_' + ligne).html(nbSeance.toFixed(2))

  updateSynthesePrevisionnel()
})

$(document).on('change', '.chgtp', function (e) {
  const ligne = $(this).data('ligne')
  const nbSeance = parseFloat($('#tp_' + ligne).val()) / 1.5
  $('#ind_tp_' + ligne).html(nbSeance.toFixed(2))

  updateSynthesePrevisionnel()
})

  function updateSynthesePrevisionnel () {
  let totalCm = 0
  let totalTd = 0
  let totalTp = 0
    let totalEqTd = 0
  let totalEtu = 0

    let totalHeuresCm = 0
    let totalHeuresTd = 0
    let totalHeuresTp = 0
    //let totalMatiere = 0

  for (let i = 1; i <= nbLignePrevisionnel; i++) {
    let $cm = $('#cm_' + i)
    let $td = $('#td_' + i)
    let $tp = $('#tp_' + i)

    totalCm = totalCm + parseFloat($cm.val()) * parseInt($('#gr_cm_' + i).val())
    totalTd = totalTd + parseFloat($td.val()) * parseInt($('#gr_td_' + i).val())
    totalTp = totalTp + parseFloat($tp.val()) * parseInt($('#gr_tp_' + i).val())

    totalHeuresCm = totalHeuresCm + parseFloat($cm.val())
    totalHeuresTd = totalHeuresTd + parseFloat($td.val())
    totalHeuresTp = totalHeuresTp + parseFloat($tp.val())
    //totalEqTd = totalEqTd + totalCm + totalTd + totalTp;

    totalEtu = totalEtu + parseFloat($cm.val()) + parseFloat($td.val()) + parseFloat($tp.val())
  }
    totalEqTd = totalCm + totalTd + totalTp

    $('#totalCm').html(totalCm.toFixed(2))
    $('#totalTd').html(totalTd.toFixed(2))
    $('#totalTp').html(totalTp.toFixed(2))
    $('#totalEqTd').html(totalEqTd.toFixed(2))
    $('#totalEtu').html(totalEtu.toFixed(2))

    /** vérificiation */
    /* todo: ne fonctionne par, car doit prendre en compte le nombre de groupe et les possibles autres données déjà saisies. */
    $('#totalHeuresCm').html(totalHeuresCm.toFixed(2))
    $('#totalHeuresTd').html(totalHeuresTd.toFixed(2))
    $('#totalHeuresTp').html(totalHeuresTp.toFixed(2))

    let diffCm = parseFloat($('#cmMaquette').html()) - totalHeuresCm
    let diffTd = parseFloat($('#tdMaquette').html()) - totalHeuresTd
    let diffTp = parseFloat($('#tpMaquette').html()) - totalHeuresTp
    $('#diffCm').html(diffCm.toFixed(2))
    $('#diffTd').html(diffTd.toFixed(2))
    $('#diffTp').html(diffTp.toFixed(2))

    if (diffCm < 0) {
      $('#diffCm').addClass('erreurPrevi').removeClass('validePrevi')
    } else {
      $('#diffCm').addClass('validePrevi').removeClass('erreurPrevi')
    }

    if (diffTd < 0) {
      $('#diffTd').addClass('erreurPrevi').removeClass('validePrevi')
    } else {
      $('#diffTd').addClass('validePrevi').removeClass('erreurPrevi')
    }

    if (diffTp < 0) {
      $('#diffTp').addClass('erreurPrevi').removeClass('validePrevi')
    } else {
      $('#diffTp').addClass('validePrevi').removeClass('erreurPrevi')
    }

    //$('#totalMatiere').html(totalMatiere.toFixed(2));
  }

  /*
  $(document).on('change', '#previsionnel_semestre', function () {
    const selectMatiere = $('#previsionnel_matiere')
    if ($(this).val() === '') {
      selectMatiere.empty()
      selectMatiere.append($('<option></option>')
        .attr('value', '')
        .text('Choisir d\'abord un semestre'))
    } else {
      $.ajax({
        url: Routing.generate('api_matieres_semestre', {'semestre': $(this).val()}),
        success: function (data) {

          selectMatiere.empty()
          selectMatiere.append($('<option></option>')
            .attr('value', '')
            .text('Choisir une matière'))
          jQuery.each(data, function (index, matiere) {

            selectMatiere.append($('<option></option>')
              .attr('value', matiere.id)
              .text(matiere.libelle))
          })
        }
      })
    }
  })*/

$(document).on('change', '#previsionnel_matiere', function () {
  const volumeMatiere = $('#volumeMatiere')
  if ($(this).val() === '') {
    volumeMatiere.html('Choisir d\'abord une matière')
  } else {
    $.ajax({
      url: Routing.generate('api_matiere', {'matiere': $(this).val()}),
      success: function (data) {
        const html = 'PPN Officiel => CM ' + data.cmFormation + ' heure(s); TD ' + data.tdFormation + ' heure(s); TP ' + data.tpFormation + ' heure(s); PPN Réalisé/departement => CM ' + data.cmPpn + ' heure(s); TD ' + data.tdPpn + ' heure(s); TP ' + data.tpPpn + ' heure(s);'
        volumeMatiere.html(html)
        $('#cmMaquette').html(data.cmFormation)
        $('#totalHeuresCm').html(0)
        $('#diffCm').html(0)
        $('#tdMaquette').html(data.tdFormation)
        $('#totalHeuresTd').html(0)
        $('#diffTd').html(0)
        $('#tpMaquette').html(data.tpFormation)
        $('#totalHeuresTp').html(0)
        $('#diffTp').html(0)
        $('#tabheures').show()
      }
    })
  }
})


$(document).on('click', '#btnGenereFichier', function (e) {
  e.preventDefault()
  e.stopPropagation()

  const selectedChamps = []
  $('input:checkbox[name=exportChamps]:checked').each(function () {
    selectedChamps.push($(this).val())
  })

  $.ajax({
    url: Routing.generate('export_listing.fr'),
    method: 'POST',
    data: {
      'matiere': $(this).data('matiere'),
      'exportTypeDocument': $('input[type=radio][name=exportTypeDocument]:checked').val(),
      'exportChamps': selectedChamps,
      'exportFormat': $('input[type=radio][name=exportFormat]:checked').val(),
      'exportFiltre': $('input[type=radio][name=exportFiltre]:checked').val()
    },
    success: function (fichier) {

    }
  })
})


//reload si changement d'année
  $(document).on('change', '#change_annee_temp_hrs', function (e) {

    window.location = Routing.generate('administration_hrs_index', {annee: $(this).val()})
  })

  $(document).on('change', '#change_annee_temp_previsionnel', function (e) {
    window.location = Routing.generate('administration_previsionnel_index', {annee: $(this).val()})
  })

// $(document).on('click', '.previsionnelModule', function () {
//   var modalPrevisionnel = $('#modalPrevisionnel');
//
//   $.ajax({
//     url: Routing.generate('api_previsionnel_matiere', {'matiere': $(this).data('matiere')}),
//     success: function (data) {
//
//       modalPrevisionnel.empty();
//       var html = '<table class="table table-bordered table-condensed">\n' +
//         '                    <thead>\n' +
//         '                    <tr>\n' +
//         '                        <th class="cm">NB h*</th>\n' +
//         '                        <th class="cm">NB Gr.</th>\n' +
//         '                        <th class="cm">1.5**</th>\n' +
//         '\n' +
//         '                        <th class="previtd">NB h/ Gr.*</th>\n' +
//         '                        <th class="previtd">NB Gr.</th>\n' +
//         '                        <th class="previtd">1.5**</th>\n' +
//         '\n' +
//         '                        <th class="previtp">NB h/ Gr.*</th>\n' +
//         '                        <th class="previtp">NB Gr.</th>\n' +
//         '                        <th class="previtp">1.5**</th>\n' +
//         '                    </tr>\n' +
//         '                    </thead>\n' +
//         '                    <tbody>\n';
//
//       jQuery.each(data, function (index, matiere) {
//         html = html +
//           '                        <tr>\n' +
//           '                            <td colspan="9">\n' +
//           '                                ' + matiere.personnel + '\n' +
//           '                            </td>\n' +
//           '                        </tr>\n' +
//           '                        <tr>\n' +
//           '                            <td>' + matiere.nbHCm + ' h</td>\n' +
//           '                            <td>' + matiere.nbGrCm + '</td>\n' +
//           '                            <td>' + matiere.nbSeanceCm + '</td>\n' +
//           '                            <td class="previtd">' + matiere.nbHTd + ' h</td>\n' +
//           '                            <td class="previtd">' + matiere.nbGrTd + '</td>\n' +
//           '                            <td class="previtd">' + matiere.nbSeanceTd + '</td>\n' +
//           '                            <td class="previtp">' + matiere.nbHTp + ' h</td>\n' +
//           '                            <td class="previtp">' + matiere.nbGrTp + '</td>\n' +
//           '                            <td class="previtp">' + matiere.nbSeanceTp + '</td>\n' +
//           '                        </tr>\n';
//
//       });
//       html = html + '                    </tbody>\n' +
//         '                </table>';
//
//       modalPrevisionnel.append(html);
//     }
//   });
// })


/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/informations.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('click', '.changeinformation', function(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log($(this).text());
  $('#header-title').empty().append($(this).text());
  $('.changeinformation').removeClass('active show');
  $(this).addClass('active show');
  $('#mainContent').empty().load($(this).attr('href'));
});

$('.edit').editable('fichier.php', {
  type: 'text',
  cancel: 'Cancel',
  cancelcssclass: 'btn btn-danger',
  submitcssclass: 'btn btn-success',
  submit: 'Save',
  tooltip: 'Click to edit...'
})


$(document).on('change', '.changeOption', function (e) {
  e.preventDefault();
  e.stopPropagation();

  $.ajax({
    url: Routing.generate('administration_configuration_change_option'),
    method: 'POST',
    data: {
      type: $(this).data('type'),
      value: $(this).prop('checked'),
      name: $(this).attr('name'),
      id: $(this).data('id')
    },
    success: function(data) {
      addCallout('Configuration enregistrée', 'success')
    }, error: function(e){
      addCallout('Erreur lors de l\'enregistrement de la configuration', 'danger')
    }
  })

});

$(document).on('change', '.changeOptionSelect', function () {
  $.ajax({
    url: Routing.generate('administration_configuration_change_option'),
    method: 'POST',
    data: {
      type: $(this).data('type'),
      value: $(this).val(),
      name: $(this).attr('name'),
      id: $(this).data('id')
    },
    success: function(data) {
      addCallout('Configuration enregistrée', 'success')
    }, error: function(e){
      addCallout('Erreur lors de l\'enregistrement de la configuration', 'danger')
    }
  })

});


/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/messagerie.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('click', '.messagerie-filtre', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', {'filtre': $(this).data('filtre')}));
});

$(document).on('click', '.message-read', function (e) {
  e.preventDefault();
  e.stopPropagation();

  $('#messages-liste').empty().load(Routing.generate('messagerie_message', {message: $(this).data('message')}));
})

$(document).on('click', '#new-message', function (e) {
  e.preventDefault();
  e.stopPropagation();

  $('#messages-liste').empty().load(Routing.generate('messagerie_nouveau'));
})

$(document).on('click', '#marquerNotificationsRead', function (e) {
  e.preventDefault();
  e.stopPropagation();

  $.ajax({
    url: Routing.generate('notification_marquer_lu'),
    success: function (e) {

      $('.notification').removeClass('media-new')
    }
  })
})

$(document).on('click', '#messageSent', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $.ajax({
    url: Routing.generate('messagerie_sent'),
    data: {
      messageToSemestre: $('#messageToSemestre').val(),
      messageToGroupe: $('#messageToGroupe').val(),
      messageToLibreEtudiant: $('#messageToLibreEtudiant').val(),
      messageToLibrePersonnel: $('#messageToLibrePersonnel').val(),
      typeDestinataire: $('input[type=radio][name=messageDestinataireType]:checked').val(),
      copie: $('#messageCopy').val(),
      message: $('.ql-editor').html(),
      sujet: $('#messageSubject').val()
    },
    method: 'POST',
    success: function (data) {
      //baculer vers l'affichage du message + statistiques d'envois
    }
  })
})

$(document).on('click', '.starred', function () {
  $.ajax({
    url: Routing.generate('messagerie_starred'),
    method: 'POST',
    data: {
      valeur: $(this).is(':checked'),
      message: $(this).dataAttr('message')
    },
    error: function () {
      $(this).prop('checked', false)//todo: annuler le check
    }
  })
})

$(document).on('click', '.messageDestinataireType', function () {
  const type = $(this).val()
  const blocDestLibreEtudiant = $('#blocDestLibreEtudiant')
  const blocDestLibrePersonnel = $('#blocDestLibrePersonnel')
  const blocDestMessgaeInfo = $('#blocDestMessgaeInfo')
  const blocDestGroupe = $('#blocDestGroupe')
  const blocDestSemestre = $('#blocDestSemestre')

  if (type === 'e'){
    blocDestLibreEtudiant.show()
    blocDestLibrePersonnel.hide()
    blocDestMessgaeInfo.hide()
    blocDestGroupe.hide()
    blocDestSemestre.hide()
  } else if (type === 's'){
    blocDestLibreEtudiant.hide()
    blocDestLibrePersonnel.hide()
    blocDestMessgaeInfo.hide()
    blocDestGroupe.hide()
    blocDestSemestre.show()
  }else if (type === 'g'){
    blocDestLibreEtudiant.hide()
    blocDestLibrePersonnel.hide()
    blocDestMessgaeInfo.hide()
    blocDestGroupe.show()
    blocDestSemestre.hide()
  }else if (type === 'p'){
    blocDestLibreEtudiant.hide()
    blocDestLibrePersonnel.show()
    blocDestMessgaeInfo.hide()
    blocDestGroupe.hide()
    blocDestSemestre.hide()
  }
})


/*
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/absences.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:10 PM
 *  *
 *
 */

let tabsences = [];

$(document).on('change', '#justifier_etudiant', function () {

  let table = $('#tableJustifier').DataTable();
  table.clear(); //effacer le datatable
  table.destroy(); //supprimer le datatable


  $.ajax({
    url: Routing.generate('administration_absences_liste_absence_etudiant', {etudiant: $(this).val()}),
    success: function (data) {
      let table = $('#tableJustifier').empty();
      table.append('<thead>\n' +
        '                <tr>\n' +
        '                    <th>Date</th>\n' +
        '                    <th>Heure</th>\n' +
        '                    <th>Matière</th>\n' +
        '                    <th>Justifier</th>\n' +
        '                    <th>Actions</th>\n' +
        '                </tr>\n' +
        '                </thead>' +
        '<tbody>')

      jQuery.each(data, function (index, etudiant) {
        //console.log(etudiant)
        let html = '<tr>\n' +
          '                        <td>' + etudiant.date + '</td>\n' +
          '                        <td>' + etudiant.heure + '</td>\n' +
          '                        <td>' + etudiant.matiere + '</td>\n' +
          '                        <td><input type="radio" value="true" data-absence="'+ etudiant.id +'" name="radio_'+ etudiant.id +'" class="justifieAbsence"';
        if (etudiant.justifie === true) {
          html = html + " checked ";
        }
         html = html +  '> Oui | <input type="radio" value="false" data-absence="'+ etudiant.id +'" name="radio_'+ etudiant.id +'" class="justifieAbsence"';
        if (etudiant.justifie === false) {
          html = html + " checked ";
        }
        html = html + '> Non</td>\n' +
          '                        <td><a href="" class="btn btn-danger supprimer"><i class="ti-close"></i></a></td>\n' +
          '                    </tr>'
        table.append(html)
      })
      table.append('</tbody>')
      table.dataTable({
        'language': langueFr
      })
    }
  })
})

$(document).on('click', '.justifieAbsence', function() {
  console.log($(this).val());
  $.ajax({
    type: 'GET',
    url: Routing.generate('administration_absences_justifie', {absence: $(this).data('absence'), etat:$(this).val()}),
    error: function () {
        addCallout('Erreur lors de l\'enregistrement.', 'danger')
    },
    success: function (data) {
      if (data === true) {
        addCallout('Absence justifiée avec succés !', 'success')
      } else {
        addCallout('Absence non justifiée avec succés !', 'warning')
      }
    }
  });

})

//Saisie des absences
$(document).on('click', '.absChangeTypeGroupe', function (e) {
  e.preventDefault()
  e.stopPropagation()
  $('.absChangeTypeGroupe').removeClass('btn-primary')
  $(this).addClass('btn-primary')
  $('#listeEtudiantsAbsences').load(Routing.generate('api_absence_liste_etudiant', {typegroupe: $(this).data('typegroupe')}))
  let date = $('#absence-date')
  let heure = $('#absence-heure')
  updateAffichage(date.val(), heure.val())
})

$(document).on('change', '#absence-matiere', function () {
  let etudiants = $('.etudiant')
  let date = $('#absence-date')
  let heure = $('#absence-heure')
  etudiants.removeClass('absent')
  //etudiants.addClass('absence');
  updateAffichage(date.val(), heure.val())
})

$(document).on('change', '#absence-date', function () {
  let etudiants = $('.etudiant')
  let date = $('#absence-date')
  let heure = $('#absence-heure')
  etudiants.removeClass('absent')
  updateAffichage(date.val(), heure.val())
})

$(document).on('change', '#absence-heure', function () {
  const etudiants = $('.etudiant')
  const date = $('#absence-date')
  const heure = $('#absence-heure')
  etudiants.removeClass('absent')
  updateAffichage(date.val(), heure.val())
})

//marquage et enregistrement des absents
$(document).on('click', '.etudiant', function () {
  const $split = $(this).attr('id').split('_')
  if ($(this).hasClass('absent')) {

    //supprimer absence
    $(this).removeClass('absent')

    //$(this).addClass('absence');
    $.ajax({
      type: 'POST',
      url: Routing.generate('application_personnel_absence_saisie_ajax', {
        matiere: $('#absence-matiere').val(),
        etudiant: $split[1]
      }),
      dataType: 'json',
      data: {
        date: $('#absence-date').val(),
        heure: $('#absence-heure').val(),
        action: 'suppr'
      },
      //affichage de l'erreur en cas de problème
      error: function () {
        addCallout('Le délai pour l\'enregistrement est dépassé. Contactez le responsable de la departement', 'danger')
      },
      success: function (data) {
        tabsences = data
        addCallout('La suppression a été effectuée avec succés !', 'success')
      }
    })
  }
  else {
    //marquer comme absent
    $(this).addClass('absent')
    $.ajax({
      type: 'POST',
      url: Routing.generate('application_personnel_absence_saisie_ajax', {
        matiere: $('#absence-matiere').val(),
        etudiant: $split[1]
      }),
      dataType: 'json',
      data: {
        date: $('#absence-date').val(),
        heure: $('#absence-heure').val(),
        action: 'saisie'
      },
      //affichage de l'erreur en cas de problème
      error: function (msg) {
        if (msg.responseText === 'out') {
          addCallout('Le délai pour l\'enregistrement est dépassé. Contactez le responsable de la departement', 'danger')
        } else {
          addCallout('Erreur lors de l\'enregistrement.', 'danger')
        }
      },
      success: function (data) {
        tabsences = data
        console.log('ajout')
        console.log(tabsences)
        addCallout('Absence enregistrée avec succés !', 'success')

      }
    })
  }
})

$('#liste-absences').dataTable({
  'language': langueFr,
  /*'createdRow': function (row, data, dataIndex) {
    if (data[6] == 'non' || data[6] == 'no' || data[6] == 'No' || data[6] == 'Non')
    {
      $(row).addClass('bg-pale-error')
    } else {
      $(row).addClass('bg-pale-error')
    }
  }*/
  'fnRowCallback': function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
    if (aData[6] === 'non' || aData[6] === 'no' || aData[6] === 'No' || aData[6] === 'Non') {
      $('td', nRow).css('background-color', '#fce3e3')
    } else {
      $('td', nRow).css('background-color', '#e3fcf2')
    }
  }
})

//** Partie Justificatif **/

$(document).on('click', '.justificatif-accepte', function (e) {
  const justificatif = $(this).data('justificatif')
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', {uuid: justificatif, etat: 'A'}),
    success: function (e) {
      const bx = $('.bx_' + justificatif)
      const parent = bx.parent()
      bx.remove()
      parent.prepend('<a href="#" class="btn btn-success btn-outline"><i class="ti-check"></i>Accepté</a>')
      //todo: gérer la création du bouton annuler.
      addCallout('Justificatif d\'absence validé !', 'success')
    },
    error: function (e) {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('click', '.justificatif-refuse', function (e) {
  const justificatif = $(this).data('justificatif')
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', {uuid: justificatif, etat: 'R'}),
    success: function (e) {
      const bx = $('.bx_' + justificatif)
      const parent = bx.parent()
      bx.remove()
      parent.prepend('<a href="#" class="btn btn-warning btn-outline"><i class="ti-check"></i>Refusé</a>')
      //todo: gérer la création du bouton annuler.
      addCallout('Justificatif d\'absence refusé !', 'success')
    },
    error: function () {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('click', '.justificatif-annuler', function (e) {
  const justificatif = $(this).data('justificatif')
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', {uuid: justificatif, etat: 'D'}),
    success: function (e) {
      const bx = $('.bx_' + justificatif)
      const parent = bx.parent()
      bx.remove()
      //todo: gérer la création des deux boutons.

      const html = '<a href="#"\n' +
        '                               class="btn btn-success btn-outline btn-square justificatif-accepte bx_' + justificatif + '" data-provide="tooltip"\n' +
        '                               data-justificatif="' + justificatif + '"\n' +
        '                               data-placement="bottom" title="atitle.accepter.le.justificatif"><i\n' +
        '                                        class="ti-check"></i></a>\n' +
        '                            <a href="#"\n' +
        '                               class="btn btn-warning btn-outline btn-square justificatif-refuse bx_' + justificatif + '" data-provide="tooltip"\n' +
        '                               data-justificatif="' + justificatif + '"\n' +
        '                               data-placement="bottom" title="atitle.refuser.le.justificatif"><i\n' +
        '                                        class="ti-na"></i></a>\n' +
        '\n' +
        '                            <a href="' + Routing.generate('administration_absence_justificatif_delete', {id: justificatif}) + '" data-csrf="{{ csrf_token(\'delete\' ~ justificatif.uuidString) }}"\n' +
        '                               class="btn btn-danger btn-outline btn-square supprimer bx_' + justificatif + '"><i\n' +
        '                                        class="ti-close" data-provide="tooltip" data-placement="bottom"\n' +
        '                                        title="atitle.supprimer"></i></a>'
      parent.prepend(html)
      addCallout('Etat du justificatif d\'absence annulé !', 'success')
    },
    error: function (e) {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})


/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/notes.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$('.savegroupe').click(function () {
  const groupe = $(this).attr('id')
  const notes = {'notes': []}
  $('.noteetudiant:input').each(function () {
    if ($(this).hasClass(groupe)) //vérifier que c'est le groupe concerné
    {
      const $id = $(this).data('etudiant')
      const obj = {
        'id': $id,
        'note': $(this).val(),
        'absence': $('#abs_' + $id).prop('checked'),
        'commentaire': $('#com_' + $id).val()
      }

      notes['notes'].push(obj)
    }
  })

  $.ajax(
    {
      url: Routing.generate('application_personnel_note_ajax_saisie', {uuid: $(this).data('evaluation')}),
      type: 'POST',
      data: {
        notes: notes
      },
      success: function (data) {
        addCallout('Les notes de <strong>ce groupe</strong> ont été enregistrées avec succés ! Vous pouvez les modifier !', 'success')
        //feature: supprimer le "orange" sur les notes sauvegardées. Peut être récupérer en data les notes.
      },
      error: function () {
        addCallout('Une erreur est survenue pendant l\'envoi... <br>Veuillez réessayer', 'danger')
        //feature: être plus précis ?
      }
    })

})

$(document).on('keyup', '.noteetudiant', function (e) {
  const val = $(this).val()
  console.log(val)
  if (val === '-0.01') {
    $(this).removeClass('is-invalid').removeClass('is-valid')
  } else if (parseFloat(val) >= 0 && parseFloat(val) <= 20) {
    $(this).removeClass('is-invalid').addClass('is-valid')
  } else {
    $(this).removeClass('is-valid').addClass('is-invalid')
  }
})

  $('.evaluation-edit').editable(
    Routing.generate('application_personnel_evaluation_update')
    , {
      type: 'text',
      submit: 'OK',
      cancel: 'Cancel',
      cssclass: 'editable-class',
      cancelcssclass: 'btn btn-danger',
      submitcssclass: 'btn btn-success',
      indicator: 'Sauvegarde…',
      label: $(this).data('title'),
      //event     : 'dbclick',
      tooltip: 'Double click pour modifier',
      submitdata: function (revert, settings, submitdata) {
        return {
          id: $(this).data('id'),
          name: $(this).data('name'),
          value: submitdata.value
        }
      },
      intercept: function (jsondata) {
        console.log(jsondata)
        console.log($(this))
        if (jsondata == 'true') {
          $(this).after('OK')
        } else {
          $(this).after('NOK')
        }
      }
    })




/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/social.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('click', '.articleLike', function (e) {
  e.preventDefault();
  e.stopPropagation();
  const elt = $(this)

  $.ajax({
    url: Routing.generate('article_like', {slug: $(this).data('article')}),
    success: function (data) {
      elt.html('<i class="ti-heart text-danger fs-11"></i> ' + data);
    }
  })
})


/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/search.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('keyup', '#search', function (e) {

  const keyword = $(this).val()
  console.log(keyword)
  const search_reponse_etudiant = $('#search_reponse_etudiant')
  const search_reponse_personnel = $('#search_reponse_personnel')
  const search_reponse_autre = $('#search_reponse_autre')

  if (keyword.length > 2) {
    $.ajax({
      url: Routing.generate('recherche', {keyword: keyword}),
      dataType: 'json',
      success: function (data) {


        let html = ''
        if (data.etudiants.length > 0) {
          jQuery.each(data.etudiants, function (index, etudiant) {
            html = html + '<a class="media" href="' + Routing.generate('user_profil', {
                type: 'etudiant',
                slug: etudiant.slug
              }) + '" target="_blank">\n' +
              '                <span class="avatar status-dark">\n' +
              '                  <img src="/upload/etudiants/' + etudiant.photo + '" alt="Photo de profil de ' + etudiant.displayPr + '">\n' +
              '                </span>\n' +
              '\n' +
              '                        <div class="media-body">\n' +
              '                            <p><strong>' + etudiant.displayPr + '</strong>\n' +
              '                                <time class="float-right">' + etudiant.groupes +'</time>\n' +
              '                            </p>\n' +
              '                        </div>\n' +
              '                    </a>'
          })
        } else {
          html = '<div class="alert alert-warning">Pas de résultat pour votre rehcerche <strong>"' + keyword + '"</strong></div>'
        }

        search_reponse_etudiant.slideUp().empty().append(html).slideDown()

        html = ''
        if (data.personnels.length > 0) {
          jQuery.each(data.personnels, function (index, personnel) {
            html = html + '<a class="media items-center" href="' + Routing.generate('user_profil', {
                type: 'personnel',
                slug: personnel.slug
              }) + '" target="_blank">\n' +
              '                        <img class="avatar avatar-sm" src="upload/personnels/' + personnel.photo + '" alt="Photo de profil de ' + personnel.displayPr + '">\n' +
              '                        <p>' + personnel.displayPr + '</p>\n' +
              '                    </a>'
          })
        } else {
          html = '<div class="alert alert-warning">Pas de résultat pour votre rehcerche <strong>"' + keyword + '"</strong></div>'
        }
        search_reponse_personnel.slideUp().empty().append(html).slideDown()

        html = ''
        if (data.autres.length > 0) {
          jQuery.each(data.autres, function (index, autre) {
            html = html + '<a class="media items-center" href="">\n' +
              '                        <img class="avatar avatar-sm" src="../assets/img/avatar/1.jpg" alt="...">\n' +
              '                        <p>' + autre + '</p>\n' +
              '                    </a>'
          })
        } else {
          html = '<div class="alert alert-warning">Pas de résultat pour votre rehcerche <strong>"' + keyword + '"</strong></div>'
        }
        search_reponse_autre.slideUp().empty().append(html).slideDown()
      }
    })
  } else {
    var html = '<div class="alert alert-info">Saisir au moins 3 caractères</div>'
    search_reponse_autre.slideUp().empty().append(html).slideDown()
    search_reponse_personnel.slideUp().empty().append(html).slideDown()
    search_reponse_etudiant.slideUp().empty().append(html).slideDown()
  }
})


/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/rattrapages.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('click', '.rattrapage-accepte', function (e) {
  e.preventDefault()
  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_change_etat', {uuid: rattrapage, etat: 'A'}),
    success: function () {
      const bx = $('.bx_' + rattrapage)
      const parent = bx.parent()
      bx.remove()
      parent.prepend('<a href="#" class="btn btn-success btn-outline"><i class="ti-check"></i>Acceptée</a>')
      addCallout('Demande de rattrapage validée !', 'success')
    },
    error: function () {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('click', '.rattrapage-refuse', function (e) {
  e.preventDefault()
  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_change_etat', {uuid: rattrapage, etat: 'R'}),
    success: function () {
      const bx = $('.bx_' + rattrapage)
      const parent = bx.parent()
      bx.remove()
      parent.prepend('<a href="#" class="btn btn-warning btn-outline"><i class="ti-na"></i>Refusée</a>')
      addCallout('Demande de rattrapage refusée !', 'success')
    },
    error: function () {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})


$(document).on('change', '.dateChange', function () {

  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_planning_change', {uuid: rattrapage, type: 'date'}),
    data: {
      data: $(this).val()
    },
    method: 'POST',
    success: function () {
      //todo:...
    },
    error: function () {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('blur', '.salleChange', function () {
  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_planning_change', {uuid: rattrapage, type: 'salle', data: $(this).val()}),
    error: function (e) {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('blur', '.heureChange', function () {
  const rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_planning_change', {uuid: rattrapage, type: 'heure', data: $(this).val()}),
    error: function () {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('click', '#sallePartout', function () {
  const salle = $('#salle').val()
  $.ajax({
    //sauvegarde de la salle pour les rattrapages du diplôme
    url: Routing.generate('administration_rattrapage_update_global', {type: 'salle', diplome:diplome}),
    data: {
      valeur: salle
    },
    method: 'POST',
    success: function () {
      $('.salleChange').each(function() {
        $(this).val(salle)
      })
    }
  })
})

$(document).on('click', '#datePartout', function (e) {
  e.preventDefault()
  const date = $('#date').val()
  $.ajax({
    //sauvegarde de la salle pour les rattrapages du diplôme
    url: Routing.generate('administration_rattrapage_update_global', {type: 'date', diplome:diplome}),
    data: {
      valeur: date
    },
    method: 'POST',
    success: function () {
      $('.dateChange').each(function() {
        $(this).val(date)
      })
    }
  })
})

$(document).on('click', '#heurePartout', function (e) {
  e.preventDefault()
  const heure = $('#heure').val()
  $.ajax({
    //sauvegarde de la salle pour les rattrapages du diplôme
    url: Routing.generate('administration_rattrapage_update_global', {type: 'heure', diplome:diplome}),
    data: {
      valeur: heure
    },
    method: 'POST',
    success: function () {
      $('.heureChange').each(function() {
        $(this).val(heure)
      })
    }
  })
})


$(document).on('click', '.optAfficher', function () {
  const evaluation = $(this).data('id')
  const $child = $(this).children('i')
  const $a = $(this)
  $.ajax({
    url: Routing.generate('administration_evaluation_visibilite', {uuid: evaluation}),
    success: function () {
      if ($child.hasClass('fa-eye')) {
        $a.addClass('btn-danger')
        $a.removeClass('btn-info').removeClass('btn-outline')

        $child.removeClass('fa-eye')
        $child.addClass('fa-eye-slash')
        $a.attr('title', 'Evaluation masquée. Rendre visible l\'évaluation')
      } else {
        $a.removeClass('btn-danger')
        $a.addClass('btn-info').addClass('btn-outline')
        $child.removeClass('fa-eye-slash')
        $child.addClass('fa-eye')
        $a.attr('title', 'Evaluation visible. Masquer l\'évaluation')
      }
      addCallout('Visibilité de l\'évaluation modifiée !', 'success')
    },
    error: function () {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('click', '.optVerrouiller', function () {
  const evaluation = $(this).data('id')
  const $child = $(this).children('i')
  const $a = $(this)
  $.ajax({
    url: Routing.generate('administration_evaluation_modifiable', {uuid: evaluation}),
    success: function () {
      if ($(this).children('i').hasClass('fa-pencil')) {
        $a.addClass('btn-danger')
        $a.removeClass('btn-warning').removeClass('btn-outline')
        $child.children('i').removeClass('fa-pencil')
        $child.children('i').addClass('fa-lock')
        $a.attr('data-original-title', 'Modification interdite. Autoriser la modificaiton')
      } else {
        $a.removeClass('btn-danger')
        $a.addClass('btn-warning').addClass('btn-outline')
        $child.children('i').removeClass('fa-lock')
        $child.addClass('fa-pencil')
        $a.attr('data-original-title', 'Modification autorisée. Interdire la modification')
      }
      addCallout('Vérouillage de l\'évaluation modifiée !', 'success')
    },
    error: function () {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})


/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/planning.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('click', '.filtreTypeDate', function (e) {
  const btn = $(this)
  const type = btn.data('type')
  if (btn.hasClass('btn-outline')) {
    afficheType(type)
    btn.removeClass('btn-outline')
  } else {
    btn.addClass('btn-outline')
    removeType(type)

  }
})

$(document).on('click', '.filtreUtilisateurDate', function (e) {
  const btn = $(this)
  const type = btn.data('type')
  if (btn.hasClass('btn-outline')) {
    afficheUtilisateur(type)
    btn.removeClass('btn-outline')
  } else {
    btn.addClass('btn-outline')
    removeUtilisateur(type)

  }
})

//todo: croiser les filtres.
function removeType (type) {
  $('.event').each(function (e) {
    if ($(this).data('type-event') === type) {
      $(this).hide()
    }
  })
}

function afficheType (type) {
  $('.event').each(function (e) {
    if ($(this).data('type-event') === type) {
      $(this).show()
    }
  })
}

function removeUtilisateur (type) {
  if (type === 'E') {
    $('.event').each(function (e) {
      if ($(this).data('qui-event') === type) {
        $(this).hide()
      }
    })
  } else {
    $('.event').each(function (e) {
      if ($(this).hasClass(type)) {
        $(this).hide()
      }
    })
  }
}

function afficheUtilisateur (type) {
  if (type === 'E') {
    $('.event').each(function (e) {
      if ($(this).data('qui-event') === type) {
        $(this).show()
      }
    })
  } else {
    $('.event').each(function (e) {
      if ($(this).hasClass(type)) {
        $(this).show()
      }
    })
  }
}

$(document).on('change', '#semaine', function(e){
  e.preventDefault()
  //{{ edt.filtre }}_{{ edt.valeur }}_{{ sem.semaineReelle}}
  let tab = $(this).val().split('_')
  console.log(tab)
  location.href = Routing.generate('agenda_index', {semaine: tab[2] ,valeur: tab[1],  filtre: tab[0]});
})


/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/user.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('change', '.departementParDefaut', function(e){
  $.ajax({
    url: Routing.generate('user_change_departement_defaut', {departement: $(this).val()}),
    method: 'POST',
    success: function(e) {
      addCallout('Mofification enregistrée !', 'success')
    },
    error: function(e) {
      addCallout('Erreur lors de la sauvegarde de la modification !', 'danger')
    }

  })
});


/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/matiere.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$('#matiere_semestre').change(function () {
  const semestreSelector = $(this)

  // Request the neighborhoods of the selected city.
  $.ajax({
    url: Routing.generate('api_liste_ue_by_semestre'),
    dataType: 'JSON',
    type: 'POST',
    data: {
      semestreid: semestreSelector.val()
    },
    success: function (ues) {
      const matiereSelector = $('#matiere_ue')

      // Remove current options
      matiereSelector.html('')

      // Empty value ...
      matiereSelector.append('<option value> Choisir une UE dans le semestre ' + semestreSelector.find('option:selected').text() + ' ...</option>')


      $.each(ues, function (key, ue) {
        matiereSelector.append('<option value="' + ue.id + '">' + ue.numeroUe + ' ' + ue.libelle + '</option>')
      })
    },
    error: function (err) {
      alert('An error ocurred while loading data ...')
    }
  })

  $.ajax({
    url: Routing.generate('api_liste_parcour_by_semestre'),
    dataType: 'JSON',
    type: 'POST',
    data: {
      semestreid: semestreSelector.val()
    },
    success: function (parcours) {
      const parcourSelector = $('#matiere_parcours')

      // Remove current options
      parcourSelector.html('')

      // Empty value ...
      parcourSelector.append('<option value> Choisir (optionnel) un parcour pour le semestre ' + semestreSelector.find('option:selected').text() + ' ...</option>')


      $.each(parcours, function (key, parcour) {
        parcourSelector.append('<option value="' + parcour.id + '">' + parcour.libelle + '</option>')
      })
    },
    error: function (err) {
      alert('An error ocurred while loading data ...')
    }
  })

  $.ajax({
    url: Routing.generate('api_matieres_semestre', {semestre: semestreSelector.val()}),
    dataType: 'JSON',
    type: 'GET',
    success: function (matieres) {
      const parentSelector = $('#matiere_matiereParent')

      // Remove current options
      parentSelector.html('')

      // Empty value ...
      parentSelector.append('<option value> Choisir (optionnel) une matière parent pour ' + $('#matiere_libelle').val() + ' ...</option>')


      $.each(matieres, function (key, matiere) {
        parentSelector.append('<option value="' + matiere.id + '">' + matiere.display + '</option>')
      })
    },
    error: function (err) {
      alert('An error ocurred while loading data ...')
    }
  })
})

$(document).on('click', '.change-diplome', function (e) {
  e.preventDefault()
  $('.change-diplome').removeClass('active show')
  $(this).addClass('active show')
  $.ajax({
    url: Routing.generate('administration_matiere_diplome', {diplome:$(this).data('diplome')}),
    dataType: 'HTML',
    type: 'GET',
    success: function (data) {
      $('#content_diplome').slideUp().empty().append(data).slideDown()
      $('.datatable_matieres').dataTable({
        language:langueFr
      })
    }
  })

})


$(document).on('change', '#tuteurUniversitaire', function () {
  $.ajax({
    url: Routing.generate('administration_alternance_update_tuteur_universitaire', {alternance: $(this).data('alternance'), personnel: $(this).val()}),
    success: function () {
      addCallout('Justificatif d\'absence refusé !', 'success')
    },
    error: function () {
      addCallout('Une erreur est survenue !', 'danger')
    }
  })
})

$(document).on('click', '.initAllAlternance', function (e) {
  e.preventDefault();
  const url = $(this).attr('href')

  swal({
    title: 'Etes vous sûr?',
    text: "Vous allez initialiser tous les suivis d'alternances. Cela effacera les données déjà présente. !",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, initialiser!',
    cancelButtonText: 'Non, ne rien faire!',
    confirmButtonClass: 'btn btn-primary',
    cancelButtonClass: 'btn btn-secondary',
    buttonsStyling: false
  }).then(function (result) {
    if (result.value) {
      $.ajax({
        url: url,
        type: "POST",
        success: function () {
          addCallout('Initialisation effectuée avec succès', 'success')
          swal(
            'Initialisé!',
            'Toutes les fiches des alertnants ont été initialisées.',
            'success'
          )
        },
        error: function () {
          swal("Error deleting!", "Please try again", "error");
          addCallout('Erreur lors de la tentative d\'initialisation', 'danger')
        }
      });

    } else if (
      // Read more about handling dismissals
      result.dismiss === 'cancel'
    ) {
      swal(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
});


/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/scolarite.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('keyup', '#etudiant', function() {
  const $val = $(this).val()
  console.log($val);
  if ($val.length > 2) {
    $('#resultat').empty().load(Routing.generate('sa_scolarite_recherche', {needle: $val}))
  }
});

$(document).on('change','#scolarite_semestre', function () {
  $.ajax(
    {
      url: Routing.generate('administration_scolarite_ues_semestre', {semestre: $(this).val()}),
      type: 'POST',
      success: function (data) {
        var $html = '<div class="row" id="blocUEs"><div class="col-sm-1">&nbsp;</div><div class="col-sm-11">';
        for (var key in data) {
          var value = data[key];
          $html = $html + '<div class="form-group"><label for="ue_'+key+'" class="required">UE '+value+'</label><input type="text" id="ue_'+key+'" name="ue_'+key+'" required="required" class="form-control" value="0"></div>';
        }
        $html = $html + '</div></div>'
        var idUE = $('#scolarite_semestre')
        if (document.getElementById("blocUEs")) {
          $('#blocUEs').remove()
        }
        idUE.after($html)
      },
      error: function () {
        addCallout('Erreur la requête.','error');
      }
    });
});


$(document).on('click', '.visibiliteBorne', function(){
  const btn = $(this)
  $.ajax({
    url: Routing.generate('administration_borne_visibilite', {id:btn.data('id')}),
    success: function(data) {
      if (data === false) {
        addCallout('Message masqué avec succés !', 'success')
        btn.removeClass('btn-success').addClass('btn-danger');
        btn.children('i').removeClass('fa-eye').addClass('fa-eye-slash');
        btn.attr('title','Message masqué. Rendre visible')
      } else {
        addCallout('Message affiché avec succés !', 'success')
        btn.removeClass('btn-danger').addClass('btn-success');
        btn.children('i').removeClass('fa-eye-slash').addClass('fa-eye');
        btn.attr('title','Message affiché. Rendre invisible')
      }
    }
  })
})


/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/groupe.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('change', '.typegroupe_defaut', function (e) {
  $.ajax({
    url: Routing.generate('administration_type_groupe_defaut'),
    method: 'POST',
    data: {
      typegroupe: $(this).val()
    },
    success: function (data) {
      addCallout('Type de groupe par défaut enregistré', 'success')
    }, error: function (e) {
      addCallout('Erreur lors de l\'enregistrement du type de groupe par défaut', 'danger')
    }
  })
})

$(document).on('click', '#add_type_groupe', function () {
  const $semestre = $(this).data('semestre')
  $.ajax({
    url: Routing.generate('administration_type_groupe_new'),
    method: 'POST',
    data: {
      libelle: $('#type_groupe_libelle').val(),
      semestre: $semestre,
      defaut: $('#type_groupe_defaut').prop('checked')
    },
    success: function (data) {
      $('#typgeGroupe_bloc').empty().load(Routing.generate('administration_type_groupe_refresh', {semestre: $semestre}))
      addCallout('Type de groupe ajouté', 'success')
    }, error: function (e) {
      addCallout('Erreur lors de l\'ajout du type de groupe', 'danger')
    }
  })
})

$(document).on('click', '.add_groupe', function () {
  const $parent = $(this).data('parent')

  $.ajax({
    url: Routing.generate('administration_groupe_new'),
    method: 'POST',
    data: {
      //todo: ca bug pour le refresh...
      libelle: $('#groupe_libelle_' + $parent).val(),
      ordre: $('#groupe_ordre_' + $parent).val(),
      code: $('#groupe_code_apogee_' + $parent).val(),
      type: $('#groupe_type_groupe_' + $parent).val(),
      parcours: $('#groupe_parcours_' + $parent).val(),
      parent: $parent
    },
    success: function (data) {
      $('#groupe_bloc').empty().load(Routing.generate('administration_groupe_refresh', {parent: $parent}))
      addCallout('Groupe ajouté', 'success')
    }, error: function (e) {
      addCallout('Erreur lors de l\'ajout du groupe', 'danger')
    }
  })
})


/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/creneaux.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

$(document).on('click', '#btn_creneau_add', function(){
  const $annee = $('#change_annee_universitiare_temp').val()
  $.ajax({
    method:'POST',
    data: {
      anneeUniversitaire: $annee,
      jour:$('#creneau_jour').val(),
      debut:$('#creneau_debut').val(),
      fin:$('#creneau_fin').val()
    },
    url: Routing.generate('administration_creneau_cours_new'),
    success: function() {
      $('#liste_creneaux').empty().load(Routing.generate('administration_creneau_cours_liste', {annee_universitaire: $annee}));
      addCallout('Créneau ajouté avec succès', 'success')
    },
    error: function() {
      addCallout('Erreur lors de l\'ajout du créneau', 'danger')
    }
  })
});

$(document).on('click', '.bloquercreneau', function(){
  const $cr = $(this)
  console.log('click')
  if ($cr.hasClass('bloquercreneau_eviter')) {
    updateCreneau('dispo', $cr.data('creneau'), $cr.data('semaine'));
    $cr.removeClass('bloquercreneau_eviter')
  } else if($cr.hasClass('bloquercreneau_interdit')) {
    $cr.removeClass('bloquercreneau_interdit')
    $cr.addClass('bloquercreneau_eviter')
    updateCreneau('au', $cr.data('creneau'), $cr.data('semaine'));
  } else {
    $cr.addClass('bloquercreneau_interdit')
    updateCreneau('va', $cr.data('creneau'), $cr.data('semaine'));
  }
})

$(document).on('click', '.creneau', function () {
  const interdit = $('#nb_interdit')
  const eviter = $('#nb_eviter')
  const dispo = $('#nb_dispo')
  const heure = $(this).data('heure')
  const jour = $(this).dataAttr('jour')

  let nb_interdit = parseInt(interdit.text())
  let nb_eviter = parseInt(eviter.text())
  let nb_dispo = parseInt(dispo.text())

  if ($(this).hasClass('bloquercreneau_interdit')) {
    $(this).removeClass('bloquercreneau_interdit')
    $(this).addClass('bloquercreneau_eviter')
    nb_interdit--
    nb_eviter++
    updateDisponibilite(jour, heure,'E')
  } else if ($(this).hasClass('bloquercreneau_eviter')) {
    $(this).removeClass('bloquercreneau_eviter')
    nb_eviter--
    nb_dispo++
    updateDisponibilite(jour, heure,'D')
  } else {

    $(this).addClass('bloquercreneau_interdit')
    nb_interdit++
    nb_dispo--
    updateDisponibilite(jour, heure,'I')
  }

  interdit.text(nb_interdit)
  eviter.text(nb_eviter)
  dispo.text(nb_dispo)
})

function updateDisponibilite($jour, $heure, $etat){
  $.ajax({
    url: Routing.generate('application_personnel_disponibilite_update'),
    data:{
      jour: $jour,
      heure: $heure,
      etat: $etat
    },
    method: 'POST'
  })
}

function updateCreneau($type, $cr, $semaine){
  $.ajax({
    url: Routing.generate('administration_creneau_bloque_modifie_etat'),
    data:{
      creneau: $cr,
      type: $type,
      semaine: $semaine
    },
    method: 'POST'
  })
}


$(document).on('change', '.updateProgression', function () {
  console.log('update')
  updateProgression($(this).data('semaine'), $(this).data('type'), $(this).data('matiere'), $(this).val())
  calculProgression($(this).data('semaine'), $(this).data('type'), $(this).data('matiere'))
})

function updateProgression (semaine, typecours, matiere,nbSeances) {
  $.ajax({
    url: Routing.generate('application_personnel_progression_update', {matiere:matiere}),
    data: {
      semaine: semaine,
      typecours: typecours,
      nbSeances: nbSeances
    },
    method: 'POST'
  })
}

function calculProgression (semaine, typecours, matiere) {
  //update colonne
  const $nbGrCm = parseInt($('#nbgr_cm_' + matiere).text())
  const $nbGrTd = parseInt($('#nbgr_td_' + matiere).text())
  const $nbGrTp = parseInt($('#nbgr_tp_' + matiere).text())


  const $col = 'tot_s' + semaine + '_' + matiere

  let cm = parseInt($('#' + $col + '_cm').val())
  if (isNaN(cm)) {
    cm = 0
  }

  let td = parseInt($('#' + $col + '_td').val())
  if (isNaN(td)) {
    td = 0
  }

  let tp = parseInt($('#' + $col + '_tp').val())
  if (isNaN(tp)) {
    tp = 0
  }

  const $total = cm * $nbGrCm * 1.5 + td * $nbGrTd * 1.5 + tp * $nbGrTp * 1.5
  $('#' + $col).text($total)

  //update ligne
  const $ztotCm = 'tot_cm_' + matiere
  const $ztotTd = 'tot_td_' + matiere
  const $ztotTp = 'tot_tp_' + matiere
  const $ztotSCm = 'tot_cm_seance_' + matiere
  const $ztotSTd = 'tot_td_seance_' + matiere
  const $ztotSTp = 'tot_tp_seance_' + matiere
  const $ztot = 'tot_' + matiere
  const $ztotS = 'tot_seance_' + matiere
  const $ztotCmH = 'tot_cm_h_' + matiere
  const $ztotTdH = 'tot_td_h_' + matiere
  const $ztotTpH = 'tot_tp_h_' + matiere
  const $ztotH = 'tot_h_' + matiere

  let $totCm = 0
  let $totTd = 0
  let $totTp = 0
  //CM
  $('.cm_' + matiere).each(function () {
    let t = parseInt($(this).val())
    if (isNaN(t)) {
      t = 0
    }
    $totCm += t
  })
  console.log($totCm)
  $('#' + $ztotSCm).text($totCm)
  $('#' + $ztotCm).text($totCm * $nbGrCm)
  $('#' + $ztotCmH).text($totCm * 1.5 * $nbGrCm)

  //TD
  $('.td_' + matiere).each(function () {
    let t = parseInt($(this).val())
    if (isNaN(t)) {
      t = 0
    }
    $totTd += t
  })
  $('#' + $ztotSTd).text($totTd)
  $('#' + $ztotTd).text($totTd * $nbGrTd)
  $('#' + $ztotTdH).text($totTd * 1.5 * $nbGrTd)

  //TP
  $('.tp_' + matiere).each(function () {
    let t = parseInt($(this).val())
    if (isNaN(t)) {
      t = 0
    }
    $totTp += t
  })
  $('#' + $ztotSTp).text($totTp)
  $('#' + $ztotTp).text($totTp * $nbGrTp)
  $('#' + $ztotTpH).text($totTp * 1.5 * $nbGrTp)

  $('#' + $ztotS).text($totCm + $totTd + $totTp)
  $('#' + $ztot).text($totCm * $nbGrCm + $totTd * $nbGrTd + $totTp * $nbGrTp)
  $('#' + $ztotH).text($totCm * 1.5 * $nbGrCm + $totTd * 1.5 * $nbGrTd + $totTp * 1.5 * $nbGrTp)
}

$(document).on('click', '#refresh', function () {
  updateAllProgresssion();
})

function updateAllProgresssion() {
  const totSemaine = Array()
  for (var semaine = 1; semaine<15; semaine++) {
    totSemaine[semaine] = 0;
  }
  totSemaine['total'] = 0;
  totSemaine['total_groupe'] = 0;
  totSemaine['total_heure'] = 0;

  $('.une_matiere').each(function(){
    //update colonne
    const matiere = $(this).data('matiere')
    const $nbGrCm = parseInt($('#nbgr_cm_' + matiere).text())
    const $nbGrTd = parseInt($('#nbgr_td_' + matiere).text())
    const $nbGrTp = parseInt($('#nbgr_tp_' + matiere).text())
    let $totCm = 0
    let $totTd = 0
    let $totTp = 0

    for (let semaine = 1; semaine<15; semaine++) {

        const $col = 'tot_s' + semaine + '_' + matiere

        let cm = parseInt($('#' + $col + '_cm').val())
        if (isNaN(cm)) {
          cm = 0
        }
        $totCm += cm

        let td = parseInt($('#' + $col + '_td').val())
        if (isNaN(td)) {
          td = 0
        }
        $totTd += td

        let tp = parseInt($('#' + $col + '_tp').val())
        if (isNaN(tp)) {
          tp = 0
        }
        $totTp += tp

        const $total = cm * $nbGrCm * 1.5 + td * $nbGrTd * 1.5 + tp * $nbGrTp * 1.5
        $('#' + $col).text($total)
        totSemaine[semaine] += $total;
    }//fin boucle semaine

    //update ligne
    const $ztotCm = 'tot_cm_' + matiere
    const $ztotTd = 'tot_td_' + matiere
    const $ztotTp = 'tot_tp_' + matiere
    const $ztotSCm = 'tot_cm_seance_' + matiere
    const $ztotSTd = 'tot_td_seance_' + matiere
    const $ztotSTp = 'tot_tp_seance_' + matiere
    const $ztot = 'tot_' + matiere
    const $ztotS = 'tot_seance_' + matiere
    const $ztotCmH = 'tot_cm_h_' + matiere
    const $ztotTdH = 'tot_td_h_' + matiere
    const $ztotTpH = 'tot_tp_h_' + matiere
    const $ztotH = 'tot_h_' + matiere


    $('#' + $ztotSCm).text($totCm)
    $('#' + $ztotCm).text($totCm * $nbGrCm)
    $('#' + $ztotCmH).text($totCm * 1.5 * $nbGrCm)

    $('#' + $ztotSTd).text($totTd)
    $('#' + $ztotTd).text($totTd * $nbGrTd)
    $('#' + $ztotTdH).text($totTd * 1.5 * $nbGrTd)

    $('#' + $ztotSTp).text($totTp)
    $('#' + $ztotTp).text($totTp * $nbGrTp)
    $('#' + $ztotTpH).text($totTp * 1.5 * $nbGrTp)

    $('#' + $ztotS).text($totCm + $totTd + $totTp)
    $('#' + $ztot).text($totCm * $nbGrCm + $totTd * $nbGrTd + $totTp * $nbGrTp)
    $('#' + $ztotH).text($totCm * 1.5 * $nbGrCm + $totTd * 1.5 * $nbGrTd + $totTp * 1.5 * $nbGrTp)

    totSemaine['total'] += $totCm + $totTd + $totTp;
    totSemaine['total_groupe'] += $totCm * $nbGrCm + $totTd * $nbGrTd + $totTp * $nbGrTp;
    totSemaine['total_heure'] += $totCm * 1.5 * $nbGrCm + $totTd * 1.5 * $nbGrTd + $totTp * 1.5 * $nbGrTp;

  })

  for (var semaine = 1; semaine<15; semaine++) {
    $('#tot_s'+semaine).text(totSemaine[semaine]);
  }
  $('#tot_seance').text(totSemaine['total']);
  $('#tot_global_groupe').text(totSemaine['total_groupe']);
  $('#tot_global_heure').text(totSemaine['total_heure']);
}



/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/partials/admEdt.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 3/30/19 12:11 PM
 *  * @lastUpdate 3/30/19 12:11 PM
 *  *
 *
 */

const Cells = []
const Ind = 0

const $contextMenuEdt = $('#contextMenuEdt')
let $rowClicked

//menu contextuel
$(document).on("contextmenu", ".edt_cours", function (e) {
  $rowClicked = $(this);
  $contextMenuEdt.css({
    display: "block",
    position: "absolute",
    left: e.pageX,
    top: e.pageY
  });

  return false;
});

$contextMenuEdt.on("click", "a", function () {
  switch ($(this).data("priority")) {
    case 'suppr':
      $.ajax(
        {
          //url: "{{ path('da_kernel_administration_edt_suppr') }}",
          type: 'DELETE',
          data: 'id=' + $rowClicked[0].id,
          //dataType: "json", //Return data type (what we expect).
          success: function () {
            $('#' + $rowClicked[0].id).empty();

            addCallout('Element supprimé du planing.','success');
          },
          error: function () {
            addCallout('Erreur lors de la suppression.','error');
          }
        });
      break;
    case 'modifier':
      console.log('modification ' + $rowClicked[0].id);
      $('#blocadd').hide();
      const tabetu = $('#zoneaction')
      tabetu.empty().hide();
      /*tabetu.load("{{ path('da_kernel_administration_edt_modifier') }}", {
        id: $rowClicked[0].id,
        annee: $annee
      });*/
      tabetu.fadeIn(1000);
      break;
    case 'dupliquer':

      break;
    case 'deplacer':

      break;
  }

  $contextMenuEdt.hide();
  $('#load-page').hide();
});

$(document).click(function () {
  $contextMenuEdt.hide();
});

// //une fois la selection terminée
// function selectfin() {
//   console.log('fin');
//   var valeur;
//   for (var i = 0; i < Cells.length; i++) {
//     console.log(Cells[i]);
//   }
//   console.log("cell0 " + Cells[0]);
//   console.log("cell-fin " + Cells[Cells.length - 1]);
//   var tabdbt = Cells[0].split('_');
//   $('#hdbt').val(tabdbt[1]);
//   var tabfin = Cells[Cells.length - 1].split('_');
//
//   var fin = parseInt(tabfin[1]) + 1;
//   $('#hfin').val(fin);
//   $('#jourc' + tabdbt[2]).iCheck('check');
//   var diff = parseInt(tabfin[3]) - parseInt(tabdbt[3]);
//   if (diff === 0)//donc sur la même colonne
//   {
//     valeur = 'TP-' + tabdbt[3];
//   }
//   else if (diff === 1)//donc sur 2 colonnes)
//   {
//     valeur = 'TD-' + tabdbt[3];
//   }
//   else {
//     valeur = 'CM-1';
//   }
//   console.log(valeur);
//   $('#typecours').val(valeur);
//   $('#salle').val('');
//   $('#texte').val('');
//
//   $('#blocadd').show();
//   $('#zoneaction').hide();
// }
//
// //au debut de la selection
// function debut() {
//   Cells = [];
//   Ind = 0;
//   console.log('debut');
// }
//
//
//   //mémoriser les celulles selectionnées
//   $('#selectable').selectable({
//     filter: 'th,td:not(.modedt)',
//     start: function (event, ui) {
//       debut()
//     },
//     stop: function (event, ui) {
//       selectfin()
//     },
//     selected: function (event, ui) {
//       var s = $(this).find('.ui-selected');
//
//       Cells[Ind] = $(ui.selected).attr('id');
//       console.log('case' + Cells);
//       Ind = Ind + 1;
//
//     }
//   });
//


  //suppression d'une semaine
  $('#supprimerSemaineModal').click(function () {
    const $id = createModal('suppr')
    const $valeur = $(this).data('element')

    $('#textemodal_' + $idModal).html("Vous allez la semaine/promo suivante : \"" + $(this).attr('data-titre') + "\" .");

    $('#validSuppr-' + $id).click(function () {
      $.ajax(
        {
          url: Routing.generate('da_kernel_administraton_edt_semaine_suppr'),
          type: 'DELETE',
          data: 'id=' + $valeur,
          success: function (data) {
            closeModal();
            autohidenotify('success', 'La suppression a été effectuée avec succés !');

          },
          error: function () {
            closeModal();
            autohidenotify('error', 'Erreur lors la suppression.');
          }
        });
    });
  });

  $('#foc').scroll();

  //importer semaine
  $(document).on('click', '#idimportsemaine', function () {
    console.log('ok')
    const za = $('#zoneaction')
    za.empty()
    za.load(Routing.generate('administration_edt_za_importsemaine'))
    za.fadeIn(1000);
  });

  //zones
  $('#idcreerzone').click(function () {
    const za = $('#zoneaction')
    za.empty();
    //za.load("{{ path('da_kernel_administration_edt_creerzone') }}");
    za.fadeIn(1000);
  });

  //export
  $('#idexport').click(function () {
    const za = $('#zoneaction')
    za.empty();
    //za.load("{{ path('da_kernel_administration_edt_za_export') }}");
    za.fadeIn(1000);
    $('#load-page').hide();

  });

  //suppr semestre
  $('#ideffacer').click(function () {
    const za = $('#zoneaction')
    za.empty();
    //za.load("{{ path('da_kernel_administration_edt_za_effacer') }}");
    za.fadeIn(1000);
    $('#load-page').hide();

  });


$(document).on('click', '.closeza', function (e) {
  e.preventDefault();
  const za = $('#zoneaction')
  za.fadeOut(1000);
  za.empty();
  za.hide();
});

//changement d'heure de début
$(document).on('change', "#hdbt", function () {
  const t = parseInt($(this).val()) + 3
  $('#hfin').val(t);
});

//affiche par prof
$(document).on('change', '#afficheenseignant', function () {
  const tabetu = $('#zone_edt')
  const $sem = $('#semainereelle').val()

  tabetu.empty();
  /*tabetu.load("{{ path('da_kernel_administration_ajaxedt') }}", {
    filtre: 'prof',
    valeur: $(this).val(),
    semainer: $sem
  });*/
  tabetu.fadeIn(2000);
  $('#load-page').hide();

});

//affiche par prof
$(document).on('change', '#affichesalle', function () {
  const tabetu = $('#zone_edt')
  const $sem = $('#semainereelle').val()
  tabetu.empty().hide();
  /*tabetu.load("{{ path('da_kernel_administration_ajaxedt') }}", {
    filtre: 'salle',
    valeur: $(this).val(),
    semainer: $sem
  });*/
  tabetu.fadeIn(2000);
  $('#load-page').hide();
});


//affiche de tous les groupes de toutes les promos
$(document).on('change', '#affichejour', function () {
  const tabetu = $('#zone_edt')
  const $sem = $('#semainereelle').val()
  tabetu.empty();
  /*tabetu.load("{{ path('da_kernel_administration_ajaxedt') }}", {
    filtre: 'jour',
    valeur: $(this).val(),
    semainer: $sem
  });*/
  tabetu.fadeIn(2000);
  $('#load-page').hide();

});

//affichage d'une promo sur une semaine précise
$(document).on('change', '#affichesemaine', function () {
  const tabetu = $('#zone_edt')

  tabetu.empty();
  let $t = $(this).val().split('_');
  //tabetu.load("{{ path('da_kernel_administration_ajaxedt') }}", {filtre: $t[0], valeur: $t[1], semainer: $t[2]});
  $('#load-page').hide();
});

//affichage par matière
$(document).on('change', '#affichemodule', function () {
  const tabetu = $('#zone_edt')
  const $sem = $('#semainereelle').val()

  tabetu.empty();
  /*tabetu.load("{{ path('da_kernel_administration_ajaxedt') }}", {
    filtre: 'module',
    valeur: $(this).val(),
    semainer: $sem
  });*/
  tabetu.fadeIn(2000);
  $('#load-page').hide();

});

/***************/
/* EDT REALISE */
/***************/


$(document).on('change','#selectpersonnel', function () {
  const selectSemestre = $('#selectsemestre');
  const selectMatiere = $('#selectmatiere');

  selectSemestre.val('0');
  selectMatiere.selectpicker('destroy')
  selectMatiere.empty()
  selectMatiere.append(new Option("Choisissez un semestre !", "0"));
  selectMatiere.selectpicker('val', '0')

})

$(document).on('change','#edtSelectSemestre', function () {
  $.ajax(
    {
      url: Routing.generate('api_matieres_semestre_personnel', {semestre: $(this).val(), personnel: $('#selectpersonnel').val()}),
      type: 'POST',
      dataType: "json", //Return data type (what we expect).
      success: function (data) {
        const selectMatiere = $("#selectmatiere");
        selectMatiere.selectpicker('destroy')
        selectMatiere.empty()
        selectMatiere.append(new Option("Choisissez une matière !", ""))
        for (let key in data) {
          let value = data[key];
          console.log(key)
          console.log(value)
          selectMatiere.append(new Option(value.libelle + " (UE: " + value.ue + ")", value.id));
        }
        selectMatiere.selectpicker()
      },
      error: function () {

      }
    });
})

$(document).on('click', '#btnafficheRealise', function (e) {
  e.preventDefault();
  const $bloc = $('#blocchrono');
  $bloc.empty();
  $bloc.load(Routing.generate('administration_edt_service_realise_affiche', {
    semestre: $('#edtSelectSemestre').val(),
    personnel: $('#selectpersonnel').val(),
    matiere: $('#selectmatiere').val()
  }))
})

// $(document).ajaxComplete(function (event, xhr, settings) {
//   // actions
//
//
//   $('#selectmatiere').select2();
//   $('#selectenseignant').select2();
//   $('#typecours').select2();
//
//   //bouton journée entière
//   $("#allday").on("ifChecked ifUnchecked", function (event) {
//     if (event.type == 'ifChecked') {
//       var hdbt = $("#hdbt");
//       hdbt.prop('disabled', 'disabled');
//       hdbt.val(1);
//
//       var hfin = $("#hfin");
//       hfin.prop('disabled', 'disabled');
//       hfin.val(26);
//     }
//     else {
//       $("#hdbt").removeAttr('disabled');
//       $("#hfin").removeAttr('disabled');
//
//     }
//   });
//
//   $('.select2').select2();
//
// });





$(document).on('click', '#addCategorie', function () {

  const table = $('#listeCategories').DataTable()
  table.clear(); //effacer le datatable
  table.destroy(); //supprimer le datatable


  $.ajax({
    url: Routing.generate('administration_article_categorie_add'),
    //dataType: 'json',
    data: {
      libelle: $('#libelle').val()
    },
    method: 'POST',
    success: function (data) {
      const table = $('#listeCategories').empty()
      table.append('<thead>\n' +
       '<tr>\n' +
        '<th>Libellé</th>\n' +
      '<th>Nb Article</th>\n' +
      '<th>Actions</th>\n' +
      '</tr>\n' +
      '</thead>' +
        '<tbody>')

      jQuery.each(data, function (index, categorie) {
        //console.log(etudiant)
        const html = '<tr>\n' +
          '                        <td>' + categorie.libelle + '</td>\n' +
          '                        <td>' + categorie.nbArticles + '</td>\n' +
          '                        <td>' + categorie.id + '</td>\n' +
          '                    </tr>'
        table.append(html)
      })
      table.append('</tbody>')
      table.append('<tfoot>\n' +
        '                <tr>\n' +
        '                    <td><label for="libelle" class="sr-only">Libelle</label>\n' +
        '                        <input type="text" placeholder="Libellé de la catégorie" id="libelle" class="form-control"></td>\n' +
        '                    <td>&nbsp;</td>\n' +
        '                    <td>\n' +
        '                        <button class="btn btn-success btn-block" id="addCategorie">Ajouter catégorie</button>\n' +
        '                    </td>\n' +
        '                </tr>\n' +
        '                </tfoot>')
      table.dataTable({
        'language': langueFr
      })
    }
  })
})


  /*
   * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
   * @file /Users/davidannebicque/htdocs/intranetv3/public/src/assets/js/script/partials/stage.js
   * @author     David Annebicque
   * @project intranetv3
   * @date 30/07/2019 08:40
   * @lastUpdate 30/07/2019 08:39
   */

  $(document).on('change', '#tuteurUniversitaireStage', function () {
  $.ajax({
    url: Routing.generate('administration_stage_etudiant_change_tuteur', {stageEtudiant: $(this).data('stage'), tuteur: $(this).val()}),
    success: function () {
      addCallout('Tuteur universitaire modifié !', 'success')
    }
  })
})

  /*let ed2, ed3, ed4, ed5, ed6, ed7, ed8, ed9;

  if (typeof $('.editCourrier') != 'undefined') {

    const champs = ['[CiviliteEtudiant]','[NomEtudiant]', '[PrenomEtudiant]', '[Entreprise]','[Tuteur]'];
    //let ed1 = loadQuill('#editCourrier', champs)
    ed2 = loadQuill('ETAT_STAGE_AUTORISE')
    ed3 = loadQuill('ETAT_STAGE_DEPOSE')
    ed4 = loadQuill('ETAT_STAGE_VALIDE')
    ed5 = loadQuill('ETAT_STAGE_REFUS')
    ed6 = loadQuill('ETAT_STAGE_INCOMPLET')
    ed7 = loadQuill('ETAT_STAGE_IMPRIME')
    ed8 = loadQuill('ETAT_STAGE_CONVENTION_ENVOYEE')
    ed9 = loadQuill('ETAT_STAGE_CONVENTION_RECUE')
  }*/

  $(document).on('click', '.enregistreModeleMail', function () {
    const etat = $(this).data('type')
    console.log(etat)
    console.log(ed2.getContents())
    $.ajax({
      url: Routing.generate('administration_stage_periode_courrier_sauvegarde_modele', {
        uuid: $(this).data('periode'),
        mail: etat
      }),
      data: {
        message: ed2.root.innerHTML,
        sujet: $('#sujet_' + etat).val()
      },
      success: function () {
        addCallout('Modèle enregistré !', 'success')
      }
    })
  })


  //require('./partials/sousCommission')

  //$.fn.dataTable.moment( 'Do MMMM  YYYY à h:mm' ); pour trier les datatable selon une date. Ne fonctionne pas.


  /*
   * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
   * @file /Users/davidannebicque/htdocs/intranetv3/public/src/assets/js/script/plugins/myQuill.js
   * @author     David Annebicque
   * @project intranetv3
   * @date 30/07/2019 08:40
   * @lastUpdate 30/07/2019 08:39
   */

  function loadQuill ($id) {
    /*const toolbarFullOptions = [
      [
        // {'font': []},
        {'header': [1, 2, 3, 4, 5, 6, false]}
        //  {'size': ['small', false, 'large', 'huge']}
      ],
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      //  [{'color': []}, {'background': []}],          // dropdown with defaults from theme
      // [{'script': 'sub'}, {'script': 'super'}],
      [{'header': 1}, {'header': 2}, 'blockquote', 'code-block'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      [{'direction': 'rtl'}, {'align': []}],        // text direction
      ['link', 'image', 'video'],
      ['clean'],
      [{'placeholder': $options}]// remove formatting button
    ]*/

    const options = {
      debug: 'info',
      modules: {
        toolbar: {
          container: '#toolbar_' + $id,
          handlers: {
            'customsfields': function (value) {
              /* do something with lang */
              console.log('--' + value)
              if (value) {
                const cursorPosition = this.quill.getSelection().index
                this.quill.insertText(cursorPosition, value)
                this.quill.setSelection(cursorPosition + value.length)
              }
            }
          }
        }

      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    }
    let quill = new Quill('#text_' + $id, options)
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

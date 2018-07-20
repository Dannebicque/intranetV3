'use strict';


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
  if ($url !== '/' && $url !== '/index.php/') {
    var $elt = $url.split('/');
    var $firstElt = 0;
    console.log($elt);

    if ($elt[1] === 'index.php') {
      if ($elt.length > 1) {
        $firstElt = 2;
      }
    }
    $('.menu-item').removeClass('active');
    $('#menu-' + $elt[$firstElt]).addClass('active');
  } else {
    $('#menu-dashboard').addClass('active');
  }
}

//pop up de confirmation de suppression
$(document).on('click', '.supprimer', function (e) {
  e.preventDefault();
  var url = $(this).attr('href');
  var csrf = $(this).data('csrf');
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
          //table.row( $(this).parents('tr') )
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        },
        error: function (xhr, ajaxOptions, thrownError) {
          swal("Error deleting!", "Please try again", "error");
          //todo: gérer le callout
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
  var html = '<div class="callout callout-' + label + '" role="alert">\n' +
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
  const basePath = 'http://newintranet:8888/upload/' //chemin de base pour les images


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


  var idModal = 1

  function openModal (titre) {


    var html = '<div id="modal' + idModal + '" role="dialog" aria-hidden="true" class="modal fade" style="display: none;">\n' +
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
    e.preventDefault()
    e.stopPropagation()
    var zone = $('#zone-pagination')
    zone.empty()
    zone.load($(this).attr('href'))
  })

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
      url: Routing.generate('user_add_favori.fr'),
      method: 'POST',
      data: {
        'user': $(this).val(),
        'etat': $(this).prop('checked')
      }
    })
  })

  $(document).on('click', '.afficheDocuments', function () {
    $('#zone_document').empty().load(Routing.generate('document_ajax', {typedocument: $(this).data('type')}))
    $('#boutonBack').show()
  })

  $(document).on('click', '#boutonBack', function () {
    $('#zone_document').empty().load(Routing.generate('typedocument_ajax'))
    $('#boutonBack').hide()
  })

  $(document).on('click', '.semestretrombi', function (e) {
    //todo: comment gérer la locale ?
    e.preventDefault()


    $('.semestretrombi').removeClass('active show')
    $('.enseignanttrombi').removeClass('active show')
    $(this).addClass('active show')


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
    $('#trombi').slideUp().empty().load(Routing.generate('trombinoscope_etudiant_semestre.fr', {semestre: $(this).data('sem')})).slideDown()
  })

  $(document).on('click', '.changeTypeGroupe', function (e) {
    //todo: comment gérer la locale ?
    e.preventDefault()

    $('#trombi').slideUp().empty().load(Routing.generate('trombinoscope_etudiant_semestre.fr', {
      semestre: $(this).data('semestre'),
      typegroupe: $(this).data('typegroupe')
    })).slideDown()
  })

  $(document).on('click', '.enseignanttrombi', function (e) {
    e.preventDefault()
    //$('#trombifiltre').hide();
    $('.semestretrombi').removeClass('active show')
    $('.enseignanttrombi').removeClass('active show')
    $(this).addClass('active show')
    $('#trombi').slideUp().empty().load(Routing.generate('trombinoscope_personnel.fr', {type: $(this).data('type')})).slideDown()

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

  })


  $(document).on('keyup', '#login_urca', function () {
    var $val = $(this).val()
    console.log($val)
    if ($val.length > 2) {
      $.ajax({
        url: Routing.generate('api_personnel_recherche', {needle: $val}),
        dataType: 'json',
        success: function (data) {
          $('#result').empty()
          jQuery.each(data, function (index, pers) {
            var html = '<tr>' +
              '<td>' + pers.nom + '</td>' +
              '<td>' + pers.prenom + '</td>' +
              '<td>' + pers.username + '</td>' +
              '<td>' + pers.mail_univ + '</td>' +
              '<td><a href="#" class="btn btn-success btn-outline btn-square addpersonnel" data-provide="tooltip" data-placement="bottom" title="Ajouter à la formation" data-slug="' + pers.slug + '"><i class="ti-plus"></i></a></td>' +
              '</tr>'
            $('#result').append(html)
          })
        }
      })
    }
  })

  $(document).on('click', '.addpersonnel', function () {
    $.ajax({
      url: Routing.generate('api_personnel_add_to_formation', {slug: $(this).data('slug')}),
      dataType: 'json',
      success: function (data) {
        $(this).remove()
      }
    })
  })

  $(document).on('click', '.personnel_index_change', function () {
    $('.personnel_index_change').removeClass('active show')
    $(this).addClass('active show')
    var table = $('#tableau').DataTable()
    table.clear() //effacer le datatable
    table.destroy() //supprimer le datatable
    $.ajax({
      url: Routing.generate('api_enseignants_type', {type: $(this).data('type')}),
      dataType: 'json',
      success: function (data) {
        jQuery.each(data, function (index, pers) {
          //ajouter les lignes
          var html = '<tr>\n' +
            '                        <td>' + pers.nom + '</td>\n' +
            '                        <td>' + pers.prenom + '</td>\n' +
            '                        <td>' + pers.posteInterne + '</td>\n' +
            '                        <td>' + pers.telBureau + '</td>\n' +
            '                        <td>' + pers.bureau1 + '</td>\n' +
            '                        <td>' + pers.numeroHarpege + '</td>\n' +
            '                        <td>' + pers.mailUniv + '</td>\n' +
            '                        <td>\n' +
            '<a href="' + Routing.generate('administration_personnel_show', {id: pers.id}) + '" class="btn btn-info btn-outline btn-square" data-provide="tooltip"\n' +
            '   data-placement="bottom" title="Détails"><i class="ti-eye"></i></a>\n' +
            '<a href="' + Routing.generate('administration_personnel_edit', {id: pers.id}) + '"\n' +
            '   class="btn btn-warning btn-outline btn-square"><i class="ti-pencil"\n' +
            '                                                     data-provide="tooltip"\n' +
            '                                                     data-placement="bottom"\n' +
            '                                                     title="Modifier"></i></a>\n' +
            '<a href="' + Routing.generate('administration_personnel_delete', {id: pers.id}) + '" class="btn btn-danger btn-outline btn-square supprimer" data-id="id"><i\n' +
            '            class="ti-close" data-provide="tooltip" data-placement="bottom"\n' +
            '            title="Supprimer"></i></a>'
          "                        </td>\n" +
          "                    </tr>";
          $('#datatableau').append(html)
        });

        $('#tableau').DataTable({}) //regenerer le datatable avec les nouvelles data
      }
    })
  });

//var table = $('#datatableRh').DataTable({});
//table.clear(); //effacer le datatable
//table.destroy(); //supprimer le datatable

  $('#datatableRh').DataTable({
    'processing': true,
    'serverSide': true,
    'ajax': Routing.generate('api_all_personnel'),
    'sAjaxDataProp': 'data',
    'pageLength': 25,
    'columns': [
      {'data': 'numero_harpege'},
      {'data': 'nom'},
      {'data': 'prenom'},
      {'data': 'formations'},
      {'data': 'profil'}]
  })


  var table = $('#datatableEtudiants').DataTable({})
  table.clear() //effacer le datatable
  table.destroy() //supprimer le datatable

  $('#datatableEtudiants').DataTable({
    'language': langueFr,
    'processing': true,
    'serverSide': true,
    'ajax': Routing.generate('api_etudiant_formation'),
    'sAjaxDataProp': 'data',
    //"pageLength": 25,
    'columns': [
      {'data': 'numetudiant'},
      {'data': 'nom'},
      {'data': 'prenom'},
      {'data': 'semestre'},
      {'data': 'profil'}]
  })


  $(document).on('click', '.changeapplication', function (e) {
    e.preventDefault()
    e.stopPropagation()

    $('.changeapplication').removeClass('active show')
    $(this).addClass('active show')
    $('#mainContent').empty().load($(this).attr('href'))

  })

  var nbLignePrevisionnel = 1

  $(document).ajaxComplete(function () {
    $('.editPrevi').editable({
      type: 'text',
      url: Routing.generate('administration_previsionnel_edit.fr')
      //todo: si success recalculer toute la ligne.
    })
  })

  $(document).on('change', '#previSemestre', function (e) {
    e.preventDefault()
    e.stopPropagation()
    $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_semestre.fr', {semestre: $(this).val()}))
  })

  $(document).on('change', '#previMatiere', function (e) {
    e.preventDefault()
    e.stopPropagation()
    $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_matiere.fr', {matiere: $(this).val()}))
  })

  $(document).on('change', '#previPersonnel', function (e) {
    e.preventDefault()
    e.stopPropagation()
    $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_personnel.fr', {personnel: $(this).val()}))
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

    var html = '<tr>\n' +
      '                        <td>\n' +
      '                            <select class="form-control">\n' +
      '                                <option value="">Choisir l\'intervenant</option>\n' +
      '                            </select>\n' +
      '                        </td>\n' +
      '                        <td><input type="text" name="cm_1" id="cm_' + nbLignePrevisionnel + '" data-ligne="1" class="form-control chgcm" value="0"></td>\n' +
      '                        <td><input type="number" name="gr_cm_1" id="gr_cm_' + nbLignePrevisionnel + '" value="0" data-ligne="1" class="form-control chgcm">\n' +
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
  })

  $(document).on('change', '.chgcm', function (e) {
    var ligne = $(this).data('ligne')
    var nbSeance = parseFloat($('#cm_' + ligne).val()) / 1.5
    $('#ind_cm_' + ligne).html(nbSeance.toFixed(2))

    updateSynthesePrevisionnel()
  })

  $(document).on('change', '.chgtd', function (e) {
    var ligne = $(this).data('ligne')
    var nbSeance = parseFloat($('#td_' + ligne).val()) / 1.5
    $('#ind_td_' + ligne).html(nbSeance.toFixed(2))

    updateSynthesePrevisionnel()
  })

  $(document).on('change', '.chgtp', function (e) {
    var ligne = $(this).data('ligne')
    var nbSeance = parseFloat($('#tp_' + ligne).val()) / 1.5
    $('#ind_tp_' + ligne).html(nbSeance.toFixed(2))

    updateSynthesePrevisionnel()
  })

  function updateSynthesePrevisionnel () {
    var totalCm = 0
    var totalTd = 0
    var totalTp = 0
    var totalEqTd = 0
    var totalEtu = 0
    var totalMatiere = 0

    for (var i = 1; i <= nbLignePrevisionnel; i++) {
      totalCm = totalCm + parseFloat($('#cm_' + i).val()) * parseInt($('#gr_cm_' + i).val())
      totalTd = totalTd + parseFloat($('#td_' + i).val()) * parseInt($('#gr_td_' + i).val())
      totalTp = totalTp + parseFloat($('#tp_' + i).val()) * parseInt($('#gr_tp_' + i).val())
      totalMatiere = totalMatiere + totalCm + totalTd + totalTp
      totalEtu = totalEtu + parseFloat($('#cm_' + i).val()) + parseFloat($('#td_' + i).val()) + parseFloat($('#tp_' + i).val())
    }


    $('#totalCm').html(totalCm.toFixed(2))
    $('#totalTd').html(totalTd.toFixed(2))
    $('#totalTp').html(totalTp.toFixed(2))
    $('#totalEqTd').html(totalEqTd.toFixed(2))
    $('#totalEtu').html(totalEtu.toFixed(2))
    $('#totalMatiere').html(totalMatiere.toFixed(2))
  }

  $(document).on('change', '#previsionnel_semestre', function () {
    var selectMatiere = $('#previsionnel_matiere')
    if ($(this).val() == '') {
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
  })

  $(document).on('change', '#previsionnel_matiere', function () {
    var volumeMatiere = $('#volumeMatiere')
    if ($(this).val() == '') {
      volumeMatiere.html('Choisir d\'abord une matière')
    } else {
      $.ajax({
        url: Routing.generate('api_matiere', {'matiere': $(this).val()}),
        success: function (data) {
          var html = 'PPN Officiel => CM ' + data.cmFormation + ' heure(s); TD ' + data.tdFormation + ' heure(s); TP ' + data.tpFormation + ' heure(s); PPN Réalisé/formation => CM ' + data.cmPpn + ' heure(s); TD ' + data.tdPpn + ' heure(s); TP ' + data.tpPpn + ' heure(s);'
          volumeMatiere.html(html)
        }
      })
    }
  })

  $(document).on('click', '#btnGenereFichier', function (e) {
    e.preventDefault()
    e.stopPropagation()

    var selectedChamps = []
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
      }
    })
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

  $(document).on('click', '.changeinformation', function (e) {
    e.preventDefault()
    e.stopPropagation()
    console.log($(this).text())
    $('#header-title').empty().append($(this).text())
    $('.changeinformation').removeClass('active show')
    $(this).addClass('active show')
    $('#mainContent').empty().load($(this).attr('href'))

  })

  $(document).on('change', '.changeOption', function (e) {
    e.preventDefault()
    e.stopPropagation()

    console.log($(this))
    console.log()

    $.ajax({
      url: Routing.generate('administration_configuration_change_option.fr'),
      method: 'POST',
      data: {
        type: $(this).data('type'),
        value: $(this).prop('checked'),
        name: $(this).attr('name'),
        id: $(this).data('id')
      }
    })

  })

  $(document).on('change', '.changeOptionSelect', function (e) {
    e.preventDefault()
    e.stopPropagation()

    console.log($(this))
    console.log()

    $.ajax({
      url: Routing.generate('administration_configuration_change_option.fr'),
      method: 'POST',
      data: {
        type: $(this).data('type'),
        value: $(this).val(),
        name: $(this).attr('name'),
        id: $(this).data('id')
      }
    })

  })

  $(document).on('click', '.messagerie-filtre', function (e) {
    e.preventDefault()
    e.stopPropagation()
    $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', {'filtre': $(this).data('filtre')}))
  })

  $(document).on('click', '.message-read', function (e) {
    e.preventDefault()
    e.stopPropagation()

    $('#messages-liste').empty().load(Routing.generate('messagerie_message', {message: $(this).data('message')}))
  })

  $(document).on('click', '#message-new', function (e) {
    e.preventDefault()
    e.stopPropagation()

    $('#zone-messagerie').empty().load(Routing.generate('messagerie_new'))
  })

  $(document).on('click', '#marquerNotificationsRead', function (e) {
    e.preventDefault()
    e.stopPropagation()

    $.ajax({
      url: Routing.generate('notification_marquer_lu'),
      success: function (e) {

        $('.notification').removeClass('media-new')
      }
    })
  })


  var tabsences = []

  $(document).on('change', '#justifier_etudiant', function (e) {
    console.log('justifier_etudiant')
    $.ajax({
      url: Routing.generate('administration_absences_liste_absence_etudiant.fr', {etudiant: $(this).val()}),
      //dataType: 'json',
      success: function (data) {
        console.log('ok')
        console.log(data)
        console.log(data.length)

        var table = $('#tableJustifier').empty()
        table.append('<thead>\n' +
          '                <tr>\n' +
          '                    <th>{{ \'table.date\'|trans }}</th>\n' +
          '                    <th>{{ \'table.heure\'|trans }}</th>\n' +
          '                    <th>{{ \'table.matiere\'|trans }}</th>\n' +
          '                    <th>{{ \'table.justifier\'|trans }}</th>\n' +
          '                    <th>{{ \'table.actions\'|trans }}</th>\n' +
          '                </tr>\n' +
          '                </thead>' +
          '<tbody>')

        jQuery.each(data, function (index, etudiant) {
          console.log(etudiant)
          var html = '<tr>\n' +
            '                        <td>' + etudiant.date + '</td>\n' +
            '                        <td>' + etudiant.heure + '</td>\n' +
            '                        <td>' + etudiant.matiere + '</td>\n' +
            '                        <td>' + etudiant.justifie + '</td>\n' +
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

//Saisie des absences
  $(document).on('click', '.absChangeTypeGroupe', function (e) {
    e.preventDefault()
    e.stopPropagation()
    $('#listeEtudiantsAbsences').load(Routing.generate('api_absence_liste_etudiant', {typegroupe: $(this).data('typegroupe')}))
    var date = $('#absence-date')
    var heure = $('#absence-heure')
    updateAffichage(date.val(), heure.val())
  })


  function updateAffichage (date, heure) {
    $.ajax({
      type: 'GET',
      url: Routing.generate('application_personnel_absence_get_ajax.fr', {matiere: $('#absence-matiere').val()}),
      dataType: 'json',
      success: function (data) {
        tabsences = data
      }
    })
    var t = date.split('/')
    var ddate = t[2].trim() + '-' + t[1].trim() + '-' + t[0].trim()


    if (typeof tabsences[ddate] !== 'undefined') {
      if (typeof tabsences[ddate][heure] !== 'undefined') {
        for (var i = 0; i < tabsences[ddate][heure].length; i++) {
          $('#' + tabsences[ddate][heure][i]).addClass('absent')
        }
      }
    }

  }

  $(document).on('change', '#absence-matiere', function () {
    var etudiants = $('.etudiant')
    var date = $('#absence-date')
    var heure = $('#absence-heure')
    etudiants.removeClass('absent')
    //etudiants.addClass('absence');
    updateAffichage(date.val(), heure.val())
  })

  $(document).on('change', '#absence-date', function () {
    var etudiants = $('.etudiant')
    var date = $('#absence-date')
    var heure = $('#absence-heure')
    etudiants.removeClass('absent')
    updateAffichage(date.val(), heure.val())
  })

  $(document).on('change', '#absence-heure', function () {
    var etudiants = $('.etudiant')
    var date = $('#absence-date')
    var heure = $('#absence-heure')
    etudiants.removeClass('absent')
    updateAffichage(date.val(), heure.val())
  })

//marquage et enregistrement des absents
  $(document).on('click', '.etudiant', function () {
    if ($(this).hasClass('absent')) {

      //supprimer absence
      $(this).removeClass('absent')
      //$(this).addClass('absence');
      $.ajax({
        type: 'POST',
        url: Routing.generate('application_personnel_absence_saisie_ajax.fr', {
          matiere: $('#absence-matiere').val(),
          etudiant: $(this).attr('id')
        }),
        dataType: 'json',
        data: {
          date: $('#absence-date').val(),
          heure: $('#absence-heure').val(),
          action: 'suppr'
        },
        //affichage de l'erreur en cas de problème
        error: function (msg, string) {
          addCallout('Le délai pour l\'enregistrement est dépassé. Contactez le responsable de la formation', 'danger')
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
      //$(this).removeClass('absence');
      $.ajax({
        type: 'POST',
        url: Routing.generate('application_personnel_absence_saisie_ajax.fr', {
          matiere: $('#absence-matiere').val(),
          etudiant: $(this).attr('id')
        }),
        dataType: 'json',
        data: {
          date: $('#absence-date').val(),
          heure: $('#absence-heure').val(),
          action: 'saisie'
        },
        //affichage de l'erreur en cas de problème
        error: function (msg, string) {
          if (msg.responseText == 'out') {
            addCallout('Le délai pour l\'enregistrement est dépassé. Contactez le responsable de la formation', 'danger')
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
      if (aData[6] == 'non' || aData[6] == 'no' || aData[6] == 'No' || aData[6] == 'Non') {
        $('td', nRow).css('background-color', '#fce3e3')
      } else {
        $('td', nRow).css('background-color', '#e3fcf2')
      }
    }
  })

  $('.savegroupe').click(function () {
    var groupe = $(this).attr('id')
    console.log(groupe)
    var notes = {'notes': []}
    $('.noteetudiant:input').each(function () {
      if ($(this).hasClass(groupe)) //vérifier que c'est le groupe concerné
      {
        var $id = $(this).data('etudiant')
        var obj = {
          'id': $id,
          'note': $(this).val(),
          'commentaire': $('#com_' + $id).val()
        }

        notes['notes'].push(obj)
      }
    })

    $.ajax(
      {
        url: Routing.generate('application_personnel_note_ajax_saisie.fr', {evaluation: $(this).data('evaluation')}),
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
    var val = $(this).val()

    if (val == '-0.01') {
      $(this).addClass('is-valid')
    } else if (parseFloat(val) >= 0 && parseFloat(val) <= 20) {
      $(this).addClass('is-valid')
    } else {
      $(this).addClass('is-invalid')
    }
  })

  $(document).on('click', '.articleLike', function (e) {
    e.preventDefault()
    e.stopPropagation()
    var elt = $(this)

    $.ajax({
      url: Routing.generate('article_like.fr', {slug: $(this).data('article')}),
      success: function (data) {
        elt.html('<i class="ti-heart text-danger fs-11"></i> ' + data)
      }
    })
  })

  $(document).on('keyup', '#search', function (e) {

    var keyword = $(this).val()
    console.log(keyword)
    var search_reponse_etudiant = $('#search_reponse_etudiant')
    var search_reponse_personnel = $('#search_reponse_personnel')
    var search_reponse_autre = $('#search_reponse_autre')

    if (keyword.length > 2) {
      $.ajax({
        url: Routing.generate('recherche', {keyword: keyword}),
        dataType: 'json',
        success: function (data) {


          var html = ''
          if (data.etudiants.length > 0) {
            jQuery.each(data.etudiants, function (index, etudiant) {
              html = html + '<a class="media" href="' + Routing.generate('user_profil.fr', {
                  type: 'etudiant',
                  slug: etudiant.slug
                }) + '" target="_blank">\n' +
                '                <span class="avatar status-dark">\n' +
                '                  <img src="' + basePath + 'photo/' + etudiant.photo + '" alt="Photo de profil de ' + etudiant.displayPr + '">\n' +
                '                </span>\n' +
                '\n' +
                '                        <div class="media-body">\n' +
                '                            <p><strong>' + etudiant.displayPr + '</strong>\n' +
                '                                <time class="float-right" datetime="2018-07-14 20:00">Groupes...</time>\n' +
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
              html = html + '<a class="media items-center" href="' + Routing.generate('user_profil.fr', {
                  type: 'personnel',
                  slug: personnel.slug
                }) + '" target="_blank">\n' +
                '                        <img class="avatar avatar-sm" src="' + basePath + 'photo/' + personnel.photo + '" alt="Photo de profil de ' + personnel.displayPr + '">\n' +
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

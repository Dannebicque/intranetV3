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

  provide: ['datatables', 'quill', 'momentjs'],

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


  /**
   * This plug-in for DataTables represents the ultimate option in extensibility
   * for sorting date / time strings correctly. It uses
   * [Moment.js](http://momentjs.com) to create automatic type detection and
   * sorting plug-ins for DataTables based on a given format. This way, DataTables
   * will automatically detect your temporal information and sort it correctly.
   *
   * For usage instructions, please see the DataTables blog
   * post that [introduces it](//datatables.net/blog/2014-12-18).
   *
   * @name Ultimate Date / Time sorting
   * @summary Sort date and time in any format using Moment.js
   * @author [Allan Jardine](//datatables.net)
   * @depends DataTables 1.10+, Moment.js 1.7+
   *
   * @example
   *    $.fn.dataTable.moment( 'HH:mm MMM D, YY' );
   *    $.fn.dataTable.moment( 'dddd, MMMM Do, YYYY' );
   *
   *    $('#example').DataTable();
   */

  (function (factory) {
    if (typeof define === "function" && define.amd) {
      define(["jquery", "moment", "datatables.net"], factory);
    } else {
      factory(jQuery, moment);
    }
  }(function ($, moment) {

    $.fn.dataTable.moment = function (format, locale) {
      var types = $.fn.dataTable.ext.type;

      // Add type detection
      types.detect.unshift(function (d) {
        if (d) {
          // Strip HTML tags and newline characters if possible
          if (d.replace) {
            d = d.replace(/(<.*?>)|(\r?\n|\r)/g, '');
          }

          // Strip out surrounding white space
          d = $.trim(d);
        }

        // Null and empty values are acceptable
        if (d === '' || d === null) {
          return 'moment-' + format;
        }

        return moment(d, format, locale, true).isValid() ?
          'moment-' + format :
          null;
      });

      // Add sorting method - use an integer for the sorting
      types.order['moment-' + format + '-pre'] = function (d) {
        if (d) {
          // Strip HTML tags and newline characters if possible
          if (d.replace) {
            d = d.replace(/(<.*?>)|(\r?\n|\r)/g, '');
          }

          // Strip out surrounding white space
          d = $.trim(d);
        }

        return !moment(d, format, locale, true).isValid() ?
          Infinity :
          parseInt(moment(d, format, locale, true).format('x'), 10);
      };
    };

  }));


  var idModal = 1;

  function openModal(titre) {


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
      '                </div>';


  }

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
    e.preventDefault();
    e.stopPropagation();

    $('.changeprofil').removeClass('active show');
    $(this).addClass('active show');
    $('#profilContent').empty().load($(this).attr('href'));
  });

  $(document).on('change', '.addfavori', function (e) {
    e.preventDefault();
    e.stopPropagation();

    $.ajax({
      url: Routing.generate('user_add_favori.fr'),
      method: 'POST',
      data: {
        'user': $(this).val(),
        'etat': $(this).prop('checked')
      }
    })
  });

  $(document).on('click', '.afficheDocuments', function () {
    $('#zone_document').empty().load(Routing.generate('document_ajax', {typedocument: $(this).data('type')}));
    $('#boutonBack').show();
  });

  $(document).on('click', '#boutonBack', function () {
    $('#zone_document').empty().load(Routing.generate('typedocument_ajax'));
    $('#boutonBack').hide();
  });

  $(document).on('click', '.semestretrombi', function (e) {
    //todo: comment gérer la locale ?
    e.preventDefault();
    $('#trombifiltre').show();

    $('.semestretrombi').removeClass('active show');
    $('.enseignanttrombi').removeClass('active show');
    $(this).addClass('active show');

    $('.card-title').html($(this).text());
    $.ajax({
      url: Routing.generate('api_etudiants_semestre', {semestre: $(this).data('sem')}),
      success: function (data) {
        $('#trombi').empty();
        jQuery.each(data, function (index, etudiant) {
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
    })
  });

  $(document).on('click', '.enseignanttrombi', function (e) {
    e.preventDefault();
    $('#trombifiltre').hide();
    $('.semestretrombi').removeClass('active show');
    $('.enseignanttrombi').removeClass('active show');
    $(this).addClass('active show');
    $('.card-title').html($(this).text());
    $.ajax({
      url: Routing.generate('api_enseignants_type', {type: $(this).data('type')}),
      dataType: 'json',
      success: function (data) {

        $('#trombi').empty();
        jQuery.each(data, function (index, pers) {
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
            "                    <a class=\"dropdown-item\" href=\"" + Routing.generate('user_profil', {
              type: 'personnel',
              slug: pers.slug
            }) + "\"><i class=\"fa fa-user\"></i> Profil</a>\n" +
            "                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-picture-o\"></i> Site personnel</a>\n" +
            "                    <a class=\"dropdown-item\" href=\"#\"><i class=\"ti-world\"></i> Site Universitaire</a>\n" +
            "                    <a class=\"dropdown-item\" href=\"#\"><i class=\"ti-email\"></i> Contacter</a>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"card-body text-center pt-1 pb-50\">\n" +
            "            <a href=\"" + Routing.generate('user_profil', {type: 'personnel', slug: pers.slug}) + "\">\n" +
            "                <img class=\"avatar avatar-xxl\" src=\"\">\n" +
            "            </a>\n" +
            "            <h5 class=\"mt-3 mb-1\">\n" +
            "                <a class=\"hover-primary\" href=\"" + Routing.generate('user_profil', {
              type: 'personnel',
              slug: pers.slug
            }) + "\">" + pers.prenom + " " + pers.nom + "\n" +
            "                </a>\n" +
            "            </h5>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div>";
          $('#trombi').append(html);
        });
      }
    })

  });


  $(document).on('keyup', '#login_urca', function () {
    var $val = $(this).val();
    console.log($val);
    if ($val.length > 2) {
      $.ajax({
        url: Routing.generate('api_personnel_recherche', {needle: $val}),
        dataType: 'json',
        success: function (data) {
          $('#result').empty();
          jQuery.each(data, function (index, pers) {
            var html = "<tr>" +
              "<td>" + pers.nom + "</td>" +
              "<td>" + pers.prenom + "</td>" +
              "<td>" + pers.username + "</td>" +
              "<td>" + pers.mail_univ + "</td>" +
              "<td><a href=\"#\" class=\"btn btn-success btn-outline btn-square addpersonnel\" data-provide=\"tooltip\" data-placement=\"bottom\" title=\"Ajouter à la formation\" data-slug=\"" + pers.slug + "\"><i class=\"ti-plus\"></i></a></td>" +
              "</tr>";
            $('#result').append(html);
          });
        }
      })
    }
  });

  $(document).on('click', '.addpersonnel', function () {
    $.ajax({
      url: Routing.generate('api_personnel_add_to_formation', {slug: $(this).data('slug')}),
      dataType: 'json',
      success: function (data) {
        $(this).remove();
      }
    })
  });

  $(document).on('click', '.personnel_index_change', function () {
    $('.personnel_index_change').removeClass('active show');
    $(this).addClass('active show');
    var table = $('#tableau').DataTable();
    table.clear(); //effacer le datatable
    table.destroy(); //supprimer le datatable
    $.ajax({
      url: Routing.generate('api_enseignants_type', {type: $(this).data('type')}),
      dataType: 'json',
      success: function (data) {
        jQuery.each(data, function (index, pers) {
          //ajouter les lignes
          var html = "<tr>\n" +
            "                        <td>" + pers.nom + "</td>\n" +
            "                        <td>" + pers.prenom + "</td>\n" +
            "                        <td>" + pers.posteInterne + "</td>\n" +
            "                        <td>" + pers.telBureau + "</td>\n" +
            "                        <td>" + pers.bureau1 + "</td>\n" +
            "                        <td>" + pers.numeroHarpege + "</td>\n" +
            "                        <td>" + pers.mailUniv + "</td>\n" +
            "                        <td>\n" +
            "<a href=\"" + Routing.generate('administration_personnel_show', {id: pers.id}) + "\" class=\"btn btn-info btn-outline btn-square\" data-provide=\"tooltip\"\n" +
            "   data-placement=\"bottom\" title=\"Détails\"><i class=\"ti-eye\"></i></a>\n" +
            "<a href=\"" + Routing.generate('administration_personnel_edit', {id: pers.id}) + "\"\n" +
            "   class=\"btn btn-warning btn-outline btn-square\"><i class=\"ti-pencil\"\n" +
            "                                                     data-provide=\"tooltip\"\n" +
            "                                                     data-placement=\"bottom\"\n" +
            "                                                     title=\"Modifier\"></i></a>\n" +
            "<a href=\"" + Routing.generate('administration_personnel_delete', {id: pers.id}) + "\" class=\"btn btn-danger btn-outline btn-square supprimer\" data-id=\"id\"><i\n" +
            "            class=\"ti-close\" data-provide=\"tooltip\" data-placement=\"bottom\"\n" +
            "            title=\"Supprimer\"></i></a>"
          "                        </td>\n" +
          "                    </tr>";
          $('#datatableau').append(html);
        });

        $('#tableau').DataTable({}); //regenerer le datatable avec les nouvelles data
      }
    })
  });


  var table = $('#datatableEtudiants').DataTable({});
  table.clear(); //effacer le datatable
  table.destroy(); //supprimer le datatable

  $('#datatableEtudiants').DataTable({
    "processing": true,
    "serverSide": true,
    "ajax": Routing.generate('api_etudiant_formation'),
    "sAjaxDataProp": "data",
    //"pageLength": 25,
    "columns": [
      {"data": "numetudiant"},
      {"data": "nom"},
      {"data": "prenom"},
      {"data": "semestre"},
      {"data": "profil"}]
  });


  $(document).on('click', '.changeapplication', function (e) {
    e.preventDefault();
    e.stopPropagation();

    $('.changeapplication').removeClass('active show');
    $(this).addClass('active show');
    $('#mainContent').empty().load($(this).attr('href'));

  });

  $(document).on('change', '#previSemestre', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_semestre.fr', {semestre: $(this).val()}));
  });

  $(document).on('change', '#previMatiere', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_matiere.fr', {matiere: $(this).val()}));
  });

  $(document).on('change', '#previPersonnel', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('#blocPrevisionnel').empty().load(Routing.generate('administration_previsionnel_personnel.fr', {personnel: $(this).val()}));
  });

  $(document).on('click', '.previsionnel_add_change', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.previsionnel_add_change').removeClass('active show');
    $(this).addClass('active show');
    $('#mainContent').empty().load($(this).attr('href'));
  });

  $(document).on('click', '.changeinformation', function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log($(this).text());
    $('#header-title').empty().append($(this).text());
    $('.changeinformation').removeClass('active show');
    $(this).addClass('active show');
    $('#mainContent').empty().load($(this).attr('href'));

  });

  $(document).on('change', '.changeOption', function (e) {
    e.preventDefault();
    e.stopPropagation();

    console.log($(this));
    console.log();

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

  });

  $(document).on('change', '.changeOptionSelect', function (e) {
    e.preventDefault();
    e.stopPropagation();

    console.log($(this));
    console.log();

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

  });

  $(document).on('click', '.messagerie-filtre', function (e) {
    e.preventDefault();
    e.stopPropagation();

    $.ajax({
      url: Routing.generate('messagerie_filtre', {'filtre': $(this).data('filtre')}),
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        $('#messages-liste').empty();
        var html = '';
        jQuery.each(data, function (index, pers) {
          html = html + '<div class="media align-items-center">\n' +
            '                        <div class="custom-control custom-checkbox">\n' +
            '                            <input type="checkbox" class="custom-control-input">\n' +
            '                            <label class="custom-control-label"></label>\n' +
            '                        </div>\n' +
            '                        <label class="toggler ml-20 fs-16">\n' +
            '                            <input type="checkbox">\n' +
            '                            <i class="fa fa-star"></i>\n' +
            '                        </label>\n' +
            '                        <span class="badge badge-dot badge-danger"></span>\n' +
            '                        <a href="#"><img class="avatar" src="../assets/img/avatar/1.jpg" alt="..."></a>\n' +
            '                        <a class="media-body text-truncate" href="mailbox-single.html">\n' +
            '                            <h6>Maryam Amiri</h6>\n' +
            '                            <small>\n' +
            '                                <strong>Happy Christmas!</strong>\n' +
            '                                <span class="fw-300 opacity-80">Conveniently parallel task wireless convergence before goal-oriented human capital.</span>\n' +
            '                            </small>\n' +
            '                        </a>\n' +
            '                        <a class="text-lighter fs-18 opacity-0" href="#"><i class="ti-clip"></i></a>\n' +
            '                        <time datetime="2018">12:35 AM</time>\n' +
            '                    </div>'
        });
      }

    })
  });

  $(document).on('click', '.message-read', function (e) {
    e.preventDefault();
    e.stopPropagation();

    $('#messages-liste').empty().load(Routing.generate('messagerie_message', {message: 1}));
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


  var table = $('#tableJustifier').DataTable({
    retrieve: true
  });

  $(document).on('change', '#justifier_etudiant', function (e) {
    $.ajax({
      url: Routing.generate('administration_absences_liste_absence_etudiant.fr', {etudiant: $(this).val()}),
      //dataType: 'json',
      success: function (e) {
        console.log('ok');
        //var table = $('#tableJustifier').DataTable({});
        // table.clear(); //effacer le datatable
        // table.destroy(); //supprimer le datatable
        table.rows().remove();
        jQuery.each(data, function (index, etudiant) {
          table.row.add([1, 2, '<a href="" class="btn btn-danger supprimer"><i class="ti-close"></i></a>']).draw();
        });


      }
    })
  });

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

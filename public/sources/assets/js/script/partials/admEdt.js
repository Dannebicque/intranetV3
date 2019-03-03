
var Cells = [];
var Ind = 0;

var $contextMenuEdt = $("#contextMenuEdt");
var $rowClicked;

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

            autohidenotify('success', 'Element supprimé du planing.');
          },
          error: function () {
            autohidenotify('error', 'Erreur lors de la suppression.');
          }
        });
      break;
    case 'modifier':
      console.log('modification ' + $rowClicked[0].id);
      $('#blocadd').hide();
      var tabetu = $('#zoneaction');
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

//une fois la selection terminée
function selectfin() {
  console.log('fin');
  var valeur;
  for (var i = 0; i < Cells.length; i++) {
    console.log(Cells[i]);
  }
  console.log("cell0 " + Cells[0]);
  console.log("cell-fin " + Cells[Cells.length - 1]);
  var tabdbt = Cells[0].split('_');
  $('#hdbt').val(tabdbt[1]);
  var tabfin = Cells[Cells.length - 1].split('_');

  var fin = parseInt(tabfin[1]) + 1;
  $('#hfin').val(fin);
  $('#jourc' + tabdbt[2]).iCheck('check');
  var diff = parseInt(tabfin[3]) - parseInt(tabdbt[3]);
  if (diff === 0)//donc sur la même colonne
  {
    valeur = 'TP-' + tabdbt[3];
  }
  else if (diff === 1)//donc sur 2 colonnes)
  {
    valeur = 'TD-' + tabdbt[3];
  }
  else {
    valeur = 'CM-1';
  }
  console.log(valeur);
  $('#typecours').val(valeur);
  $('#salle').val('');
  $('#texte').val('');

  $('#blocadd').show();
  $('#zoneaction').hide();
}

//au debut de la selection
function debut() {
  Cells = [];
  Ind = 0;
  console.log('debut');
}

$(document).ready(function () {

  //mémoriser les celulles selectionnées
  $('#selectable').selectable({
    filter: 'th,td:not(.modedt)',
    start: function (event, ui) {
      debut()
    },
    stop: function (event, ui) {
      selectfin()
    },
    selected: function (event, ui) {
      var s = $(this).find('.ui-selected');

      Cells[Ind] = $(ui.selected).attr('id');
      console.log('case' + Cells);
      Ind = Ind + 1;

    }
  });



  //suppression d'une semaine
  $('#supprimerSemaineModal').click(function () {
    var $id = createModal('suppr');
    var $valeur = $(this).data('element');

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
  $('#idimportsemaine').click(function () {
    var za = $('#zoneaction');
    za.empty();
    //za.load("{{ path('da_kernel_administration_edt_za_importsemaine') }}");
    za.fadeIn(1000);
    $('#load-page').hide();
  });

  //zones
  $('#idcreerzone').click(function () {
    var za = $('#zoneaction');
    za.empty();
    //za.load("{{ path('da_kernel_administration_edt_creerzone') }}");
    za.fadeIn(1000);
  });

  //export
  $('#idexport').click(function () {
    var za = $('#zoneaction');
    za.empty();
    //za.load("{{ path('da_kernel_administration_edt_za_export') }}");
    za.fadeIn(1000);
    $('#load-page').hide();

  });

  //suppr semestre
  $('#ideffacer').click(function () {
    var za = $('#zoneaction');
    za.empty();
    //za.load("{{ path('da_kernel_administration_edt_za_effacer') }}");
    za.fadeIn(1000);
    $('#load-page').hide();

  });

});//document ready

$(document).on('click', '.closeza', function (e) {
  e.preventDefault();
  var za = $('#zoneaction');
  za.fadeOut(1000);
  za.empty();
  za.hide();
});

//changement d'heure de début
$(document).on('change', "#hdbt", function () {
  var t = parseInt($(this).val()) + 3;
  $('#hfin').val(t);
});

//affiche par prof
$(document).on('change', '#afficheenseignant', function () {
  var tabetu = $('#zone_edt');
  var $sem = $('#semainereelle').val();

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
  var tabetu = $('#zone_edt');
  var $sem = $('#semainereelle').val();
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
  var tabetu = $('#zone_edt');
  var $sem = $('#semainereelle').val();
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
  var tabetu = $('#zone_edt');

  tabetu.empty();
  $t = $(this).val().split('_');
  //tabetu.load("{{ path('da_kernel_administration_ajaxedt') }}", {filtre: $t[0], valeur: $t[1], semainer: $t[2]});
  $('#load-page').hide();
});

//affichage par matière
$(document).on('change', '#affichemodule', function () {
  var tabetu = $('#zone_edt');
  var $sem = $('#semainereelle').val();

  tabetu.empty();
  /*tabetu.load("{{ path('da_kernel_administration_ajaxedt') }}", {
    filtre: 'module',
    valeur: $(this).val(),
    semainer: $sem
  });*/
  tabetu.fadeIn(2000);
  $('#load-page').hide();

});

$(document).ajaxComplete(function (event, xhr, settings) {
  // actions


  $('#selectmatiere').select2();
  $('#selectenseignant').select2();
  $('#typecours').select2();

  //bouton journée entière
  $("#allday").on("ifChecked ifUnchecked", function (event) {
    if (event.type == 'ifChecked') {
      var hdbt = $("#hdbt");
      hdbt.prop('disabled', 'disabled');
      hdbt.val(1);

      var hfin = $("#hfin");
      hfin.prop('disabled', 'disabled');
      hfin.val(26);
    }
    else {
      $("#hdbt").removeAttr('disabled');
      $("#hfin").removeAttr('disabled');

    }
  });

  $('.select2').select2();

});


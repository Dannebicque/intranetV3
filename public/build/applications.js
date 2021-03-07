(self["webpackChunk"] = self["webpackChunk"] || []).push([["applications"],{

/***/ "./assets/js/pages/applications.js":
/*!*****************************************!*\
  !*** ./assets/js/pages/applications.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* harmony import */ var _messagerie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messagerie */ "./assets/js/pages/messagerie.js");
/* harmony import */ var _messagerie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_messagerie__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/applications.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/09/2020 16:14


$(document).on('click', '.changeapplication', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('.changeapplication').removeClass('active show');
  $(this).addClass('active show');
  $('#mainContent').empty().load($(this).attr('href'));
});
$(document).on('change', '#selectsemestre', function () {
  //matieres
  $('#listegroupe').empty();
  var selectMatiere = $('#selectmatiere');
  var selectGroupes = $('#selectgroupes');
  $.ajax({
    url: Routing.generate('api_matieres_semestre', {
      semestre: $(this).val()
    }),
    dataType: "json",
    //Return data type (what we expect).
    success: function success(data) {
      selectMatiere.empty();
      selectMatiere.append($('<option></option>').attr('value', '').text('Choisir une matière'));
      jQuery.each(data, function (index, matiere) {
        selectMatiere.append($('<option></option>').attr('value', matiere.id).text(matiere.display));
      });
      selectMatiere.attr('data-provide', 'selectpicker');
      selectMatiere.attr('data-live-search', 'true');
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de la tentative d\'affichage des matières du semestres. Veuillez contacter le responsable de l\'intranet si le problème persiste !', 'danger');
    }
  }); //groupes

  $.ajax({
    url: Routing.generate('api_type_groupe_semestre', {
      semestre: $(this).val()
    }),
    dataType: "json",
    //Return data type (what we expect).
    success: function success(data) {
      selectGroupes.empty();
      selectGroupes.append($('<option></option>').attr('value', '').text('Choisir un type de groupe'));
      jQuery.each(data, function (index, typeGroupe) {
        selectGroupes.append($('<option></option>').attr('value', typeGroupe.id).text(typeGroupe.libelle));
      });
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de la tentative d\'affichage des groupes du semestres. Veuillez contacter le responsable de l\'intranet si le problème persiste !', 'danger');
    }
  });
});
$(document).on('change', '#selectgroupes', function () {
  var $lgr = $('#listegroupe'); //matieres

  $.ajax({
    url: Routing.generate('api_groupe_type_groupe', {
      typeGroupe: $(this).val()
    }),
    dataType: "json",
    //Return data type (what we expect).
    success: function success(data) {
      $lgr.empty();
      var $html = '';
      jQuery.each(data, function (index, groupe) {
        $html += '<input type="checkbox" checked name="detail_groupes[]" value="' + groupe.id + '"> ' + groupe.libelle + ' | ';
      });
      $lgr.html($html);
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de la tentative d\'affichage des groupes du semestres. Veuillez contacter le responsable de l\'intranet si le problème persiste !', 'danger');
    }
  });
});
$(document).on('click', '#add_rattrapage', function () {
  $('#bloc_add_rattrapage').toggle();
});
$(document).on('click', '#add_carnet', function () {
  $('#bloc_add_carnet').toggle();
});

/***/ }),

/***/ "./assets/js/pages/messagerie.js":
/*!***************************************!*\
  !*** ./assets/js/pages/messagerie.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/messagerie.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/03/2021 11:11
$(document).on('click', '.messagerie-filtre', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('.messagerie-filtre').parent().removeClass('active');
  $(this).parent().addClass('active');
  $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', {
    'filtre': $(this).data('filtre')
  }));
});
$(document).on('click', '#modalPj', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#blocPj').toggle();
});
$(document).on('click', '.addFile', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var $id = parseInt($(this).data('file')) + 1;
  var html = '<div class="row" id="file' + $id + '">\n' + '            <div class="col-10">\n' + '                <input type="file" name="pj' + $id + '" id="pj' + $id + '" class="form-control pjFile" placeholder="Ajouter une pièce jointe">\n' + '            </div>\n' + '            <div class="col-1">\n' + '                <button class="btn btn-block btn-success-outline addFile" data-file="' + $id + '"><i class="fa fa-plus-circle"></i></button>\n' + '            </div>\n' + '            <div class="col-1">\n' + '                <button class="btn btn-block btn-danger-outline removeFile" data-file="' + $id + '"><i class="fa\n' + '            fa-minus-circle"></i></button>\n' + '            </div>\n' + '        </div>';
  $('#blocPj').append(html);
});
$(document).on('click', '.removeFile', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var $id = $(this).data('file');
  $('#file' + $id).remove();
});
$(document).on('click', '#saveDraft', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $.ajax({
    url: Routing.generate('messagerie_draft'),
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
    success: function success(data) {
      $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', {
        'filtre': 'draft'
      }));
    }
  });
});
$(document).on('click', '.message-read', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#messages-liste').empty().load(Routing.generate('messagerie_message', {
    message: $(this).data('message')
  }));
});
$(document).on('click', '.message-read-auteur', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#messages-liste').empty().load(Routing.generate('messagerie_message_envoye', {
    message: $(this).data('message')
  }));
});
$(document).on('click', '#new-message', function (e) {
  e.preventDefault();
  e.stopPropagation();
  console.log('toto');
  $('#messages-liste').empty().load(Routing.generate('messagerie_nouveau'), {}, function () {
    tinymce.init({
      selector: '#messageMessage',
      height: 300,
      menubar: false,
      language: 'fr_FR',
      content_css: 'default',
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent'
    });
  });
});
$(document).on('click', '#marquerNotificationsRead', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $.ajax({
    url: Routing.generate('notification_marquer_lu'),
    success: function success(e) {
      $('.notification').removeClass('media-new');
    }
  });
});
$(document).on('change', '.pjFile', function () {
  var tailleTotale = 0;
  $('input[type="file"]').each(function (file, element) {
    console.log(element.files[0]);

    if (typeof element.files[0] !== 'undefined') {
      tailleTotale += element.files[0].size;
    }
  });
  tailleTotale = tailleTotale / 1024;
  tailleTotale = tailleTotale / 1024;
  $('#poidPj').show().html('Le poids des pièces jointes est de ' + tailleTotale.toFixed(3) + ' Mo');
});
$(document).on('click', '#messageSent', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).attr('disabled', true);
  $(this).text('Envoi en cours...');
  var formData = new FormData($('form')[0]);
  formData.append('messageMessage', tinymce.activeEditor.getContent({
    format: 'html'
  }));
  $.ajax({
    url: Routing.generate('messagerie_sent'),
    data: formData,
    async: false,
    cache: false,
    contentType: false,
    enctype: 'multipart/form-data',
    processData: false,
    method: 'POST',
    success: function success(data) {
      $('#messages-liste').empty().load(Routing.generate('messagerie_message_envoye', {
        message: data.message
      }));
      $('#messageSent').attr('disabled', false);
      $(this).text('Envoyer');
    }
  });
});
$(document).on('click', '.send_draft', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#messages-liste').empty().load(Routing.generate('messagerie_nouveau', {
    message: $(this).data('message')
  }));
});
$(document).on('click', '.starred', function () {
  $.ajax({
    url: Routing.generate('messagerie_change_etat'),
    method: 'POST',
    data: {
      valeur: 'S',
      message: $(this).data('message')
    },
    error: function error() {
      $(this).prop('checked', false);
    }
  });
});
$(document).on('click', '#deleteMessage', function () {
  $.ajax({
    url: Routing.generate('messagerie_change_etat'),
    method: 'POST',
    data: {
      etat: 'D',
      message: $(this).data('message')
    },
    success: function success() {
      $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', {
        'filtre': 'all'
      }));
    }
  });
});
$(document).on('click', '.messageDestinataireType', function () {
  var type = $(this).val();
  var blocDestLibreEtudiant = $('#blocDestLibreEtudiant');
  var blocDestLibrePersonnel = $('#blocDestLibrePersonnel');
  var blocDestMessgaeInfo = $('#blocDestMessgaeInfo');
  var blocDestGroupe = $('#blocDestGroupe');
  var blocDestSemestre = $('#blocDestSemestre');

  if (type === 'e') {
    blocDestLibreEtudiant.show();
    blocDestLibrePersonnel.hide();
    blocDestMessgaeInfo.hide();
    blocDestGroupe.hide();
    blocDestSemestre.hide();
  } else if (type === 's') {
    blocDestLibreEtudiant.hide();
    blocDestLibrePersonnel.hide();
    blocDestMessgaeInfo.hide();
    blocDestGroupe.hide();
    blocDestSemestre.show();
  } else if (type === 'g') {
    blocDestLibreEtudiant.hide();
    blocDestLibrePersonnel.hide();
    blocDestMessgaeInfo.hide();
    blocDestGroupe.show();
    blocDestSemestre.hide();
  } else if (type === 'p') {
    blocDestLibreEtudiant.hide();
    blocDestLibrePersonnel.show();
    blocDestMessgaeInfo.hide();
    blocDestGroupe.hide();
    blocDestSemestre.hide();
  }
});

/***/ }),

/***/ "./assets/js/util.js":
/*!***************************!*\
  !*** ./assets/js/util.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCallout": () => (/* binding */ addCallout),
/* harmony export */   "getDataOptions": () => (/* binding */ getDataOptions),
/* harmony export */   "invalidChamps": () => (/* binding */ invalidChamps),
/* harmony export */   "validChamps": () => (/* binding */ validChamps),
/* harmony export */   "completeChamps": () => (/* binding */ completeChamps)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/util.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/12/2020 22:04


var $stopCatchEnter = false;

function readUrlMenu($url) {
  var $elt = $url.split('/');
  var $firstElt = 2;

  if ($elt[1] === 'index.php') {
    if ($elt.length > 1) {
      $firstElt = 3;
    }
  }

  if ($elt[$firstElt] === 'super-administration') {
    $firstElt = $firstElt + 1;
  }

  if ($elt[$elt.length - 1] === '') {
    $elt.pop();
  }

  jquery__WEBPACK_IMPORTED_MODULE_5___default()('.menu-item').removeClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#menu-' + $elt[$firstElt]).addClass('active');
} //colorise le bon menu


readUrlMenu(jquery__WEBPACK_IMPORTED_MODULE_5___default()(location).attr('pathname'));
sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().mixin({
  customClass: {
    confirmButton: 'btn btn-primary',
    cancelButton: 'btn btn-secondary'
  },
  buttonsStyling: false
}); //pop up de confirmation de suppression

jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '.supprimer', function (e) {
  e.preventDefault();
  var url = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('href');
  var csrf = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('csrf');
  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
    title: 'Confirmer la suppression ?',
    text: 'L\'opération ne pourra pas être annulée.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, je confirme',
    cancelButtonText: 'Non, Annuler',
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-secondary'
    },
    buttonsStyling: false
  }).then(function (result) {
    if (result.value) {
      jquery__WEBPACK_IMPORTED_MODULE_5___default().ajax({
        url: url,
        type: 'DELETE',
        data: {
          _token: csrf
        },
        success: function success(id) {
          if (id.hasOwnProperty('redirect') && id.hasOwnProperty('url')) {
            document.location.href = id.url;
          } else {
            //t.row("#ligne_"+id).remove().draw(); =< datattable todo: remove ligne si datatable ?? problème dans adm>personnel
            jquery__WEBPACK_IMPORTED_MODULE_5___default()('#ligne_' + id).closest('tr').remove();
            addCallout('Suppression effectuée avec succès', 'success');
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
              title: 'Supprimé!',
              text: 'L\'enregistrement a été supprimé.',
              icon: 'success',
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-secondary'
              },
              buttonsStyling: false
            });
          }
        },
        error: function error(xhr, ajaxOptions, thrownError) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            title: 'Erreur lors de la suppression!',
            text: 'Merci de renouveler l\'opération',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary',
              cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
          });
          addCallout('Erreur lors de la tentative de suppression', 'danger');
        }
      });
    } else if ( // Read more about handling dismissals
    result.dismiss === 'cancel') {
      sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
        title: 'Cancelled',
        text: 'OK! Tout est comme avant !',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-secondary'
        },
        buttonsStyling: false
      });
    }
  });
});
function addCallout(message, label) {
  console.log('callout');
  var translate = new Array();
  translate['success'] = 'Succès';
  translate['danger'] = 'Erreur';
  translate['warning'] = 'Attention';
  var html = '<div class="callout callout-' + label + '" role="alert">\n' + '                    <button type="button" class="close" data-dismiss="callout" aria-label="Close">\n' + '                        <span>&times;</span>\n' + '                    </button>\n' + '                    <h5>' + translate[label] + '</h5>\n' + '                    <p>' + message + '</p>\n' + '                </div>';
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#mainContent').prepend(html).slideDown('slow');
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('.callout').delay(5000).slideUp('slow');
} //Editable

var myEditInitialContent = '';
var type = 'text';
var EditOnLine = false;
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '.myedit', function (e) {
  e.preventDefault();
  myEditInitialContent = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this);
  var html = '';
  EditOnLine = true;

  if (typeof jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') !== 'undefined') {
    type = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type');
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') === 'select') {//todo: A finaliser
  } else if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') === 'textarea') {
    html = genereTextArea(jquery__WEBPACK_IMPORTED_MODULE_5___default()(this));
  } else {
    html = genereInput(jquery__WEBPACK_IMPORTED_MODULE_5___default()(this));
  }

  jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).replaceWith(html);
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myedit-input').focus();
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keyup', '#myedit-input', function (e) {
  if (e.keyCode === 13 && $stopCatchEnter === false) {
    updateData();
  } else if (e.keyCode === 27) {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
  }
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '#myedit-valide', function (e) {
  $stopCatchEnter = false;
  e.preventDefault();
  updateData();
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keypress', function (e) {
  if (EditOnLine === true && $stopCatchEnter === false && e.which === 13) {
    e.preventDefault();
    updateData();
  }

  if (EditOnLine === true && $stopCatchEnter === false && e.which === 27) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
  }
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '#myedit-annule', function (e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
});

function updateData() {
  var val = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myedit-input').val();
  jquery__WEBPACK_IMPORTED_MODULE_5___default().ajax({
    url: myEditInitialContent.attr('href'),
    data: {
      field: myEditInitialContent.data('field'),
      value: val,
      type: type
    },
    method: 'POST',
    success: function success() {
      myEditInitialContent.html(val);
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
      EditOnLine = false;
    }
  });
}

function genereTextArea($obj) {
  $stopCatchEnter = true;
  return '<div id="myEdit-zone">\n' + '                      <textarea rows="5" class="form-control" id="myedit-input">' + $obj.html().trim() + '</textarea>\n' + '                      <span class="input-group-append">\n' + ' <button class="btn btn-success-outline" id="myedit-valide"><i class="fas fa-check"></i></button>\n' + '                        <button class="btn btn-danger-outline" id="myedit-annule"><i class="fas fa-times"></i></button>\n' + '                      </span>\n' + '                    </div>';
}

function genereInput($obj) {
  return '<div id="myEdit-zone" class="input-group">\n' + '                      <input type="text" class="form-control" id="myedit-input" value="' + $obj.html().trim() + '" >\n' + '                      <span class="input-group-append">\n' + ' <button class="btn btn-success-outline" id="myedit-valide"><i class="fas fa-check"></i></button>\n' + '                        <button class="btn btn-danger-outline" id="myedit-annule"><i class="fas fa-times"></i></button>\n' + '                      </span>\n' + '                    </div>';
}

jQuery.fn.dataAttr = function (name, def) {
  return jquery__WEBPACK_IMPORTED_MODULE_5___default()(this)[0].getAttribute('data-' + name) || def;
};

jQuery.fn.hasDataAttr = function (name) {
  return jquery__WEBPACK_IMPORTED_MODULE_5___default()(this)[0].hasAttribute('data-' + name);
};

function dataToOption(name) {
  return name.replace(/-([a-z])/g, function (x) {
    return x[1].toUpperCase();
  });
}

function getDataOptions(el, castList) {
  var options = {};
  jquery__WEBPACK_IMPORTED_MODULE_5___default().each(jquery__WEBPACK_IMPORTED_MODULE_5___default()(el).data(), function (key, value) {
    key = dataToOption(key); // Escape data-provide

    if (key == 'provide') {
      return;
    }

    if (castList != undefined) {
      var type = castList[key];

      switch (type) {
        case 'bool':
          value = Boolean(value);
          break;

        case 'num':
          value = Number(value);
          break;

        case 'array':
          value = value.split(',');
          break;

        default:
      }
    }

    options[key] = value;
  });
  return options;
}
function invalidChamps($obj) {
  $obj.removeClass('is-valid').addClass('is-invalid');
}
function validChamps($obj) {
  $obj.removeClass('is-invalid').addClass('is-valid');
}
function completeChamps($obj) {
  $obj.removeClass('is-invalid').removeClass('is-valid');
}

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-fixed.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    var multiply = function (n, c) {
      var index = -1;
      var c2 = c;
      while (++index < 6) {
        c2 += n * data[index];
        data[index] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function (n) {
      var index = 6;
      var c = 0;
      while (--index >= 0) {
        c += data[index];
        data[index] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };

    var dataToString = function () {
      var index = 6;
      var s = '';
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index]);
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
        }
      } return s;
    };

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        result = dataToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        result = dataToString() + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ })

},
0,[["./assets/js/pages/applications.js","runtime","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_inherit-if-required_js-node_modules_core-js_internals_-f30b81","vendors-node_modules_core-js_modules_es_number_constructor_js-node_modules_core-js_modules_es-13932d"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYXBwbGljYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9tZXNzYWdlcmllLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctcmVwZWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci50by1maXhlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWludC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJlbXB0eSIsImxvYWQiLCJhdHRyIiwic2VsZWN0TWF0aWVyZSIsInNlbGVjdEdyb3VwZXMiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwic2VtZXN0cmUiLCJ2YWwiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwiYXBwZW5kIiwidGV4dCIsImpRdWVyeSIsImVhY2giLCJpbmRleCIsIm1hdGllcmUiLCJpZCIsImRpc3BsYXkiLCJlcnJvciIsImFkZENhbGxvdXQiLCJ0eXBlR3JvdXBlIiwibGliZWxsZSIsIiRsZ3IiLCIkaHRtbCIsImdyb3VwZSIsImh0bWwiLCJ0b2dnbGUiLCJwYXJlbnQiLCIkaWQiLCJwYXJzZUludCIsInJlbW92ZSIsIm1lc3NhZ2VUb1NlbWVzdHJlIiwibWVzc2FnZVRvR3JvdXBlIiwibWVzc2FnZVRvTGlicmVFdHVkaWFudCIsIm1lc3NhZ2VUb0xpYnJlUGVyc29ubmVsIiwidHlwZURlc3RpbmF0YWlyZSIsImNvcGllIiwibWVzc2FnZSIsInN1amV0IiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsInRpbnltY2UiLCJpbml0Iiwic2VsZWN0b3IiLCJoZWlnaHQiLCJtZW51YmFyIiwibGFuZ3VhZ2UiLCJjb250ZW50X2NzcyIsInRvb2xiYXIiLCJ0YWlsbGVUb3RhbGUiLCJmaWxlIiwiZWxlbWVudCIsImZpbGVzIiwic2l6ZSIsInNob3ciLCJ0b0ZpeGVkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFjdGl2ZUVkaXRvciIsImdldENvbnRlbnQiLCJmb3JtYXQiLCJhc3luYyIsImNhY2hlIiwiY29udGVudFR5cGUiLCJlbmN0eXBlIiwicHJvY2Vzc0RhdGEiLCJ2YWxldXIiLCJwcm9wIiwiZXRhdCIsInR5cGUiLCJibG9jRGVzdExpYnJlRXR1ZGlhbnQiLCJibG9jRGVzdExpYnJlUGVyc29ubmVsIiwiYmxvY0Rlc3RNZXNzZ2FlSW5mbyIsImJsb2NEZXN0R3JvdXBlIiwiYmxvY0Rlc3RTZW1lc3RyZSIsImhpZGUiLCIkc3RvcENhdGNoRW50ZXIiLCJyZWFkVXJsTWVudSIsIiR1cmwiLCIkZWx0Iiwic3BsaXQiLCIkZmlyc3RFbHQiLCJsZW5ndGgiLCJwb3AiLCJsb2NhdGlvbiIsIlN3YWwiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImNzcmYiLCJ0aXRsZSIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJfdG9rZW4iLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJjbG9zZXN0IiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJsYWJlbCIsInRyYW5zbGF0ZSIsIkFycmF5IiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZVRleHRBcmVhIiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ3aGljaCIsImZpZWxkIiwiJG9iaiIsInRyaW0iLCJmbiIsImRhdGFBdHRyIiwibmFtZSIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRpb25zIiwiZWwiLCJjYXN0TGlzdCIsIm9wdGlvbnMiLCJrZXkiLCJ1bmRlZmluZWQiLCJCb29sZWFuIiwiTnVtYmVyIiwiaW52YWxpZENoYW1wcyIsInZhbGlkQ2hhbXBzIiwiY29tcGxldGVDaGFtcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLG9CQUF4QixFQUE4QyxVQUFVQyxDQUFWLEVBQWE7QUFDekRBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBRCxHQUFDLENBQUNFLGVBQUY7QUFFQUwsR0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JNLFdBQXhCLENBQW9DLGFBQXBDO0FBQ0FOLEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sUUFBUixDQUFpQixhQUFqQjtBQUNBUCxHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCUSxLQUFsQixHQUEwQkMsSUFBMUIsQ0FBK0JULENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsSUFBUixDQUFhLE1BQWIsQ0FBL0I7QUFDRCxDQVBEO0FB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bGljYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2FwcGxpY2F0aW9ucy5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDA2LzA5LzIwMjAgMTY6MTRcbmltcG9ydCB7YWRkQ2FsbG91dH0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCAnLi9tZXNzYWdlcmllJ1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNoYW5nZWFwcGxpY2F0aW9uJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAkKCcuY2hhbmdlYXBwbGljYXRpb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlIHNob3cnKVxuICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUgc2hvdycpXG4gICQoJyNtYWluQ29udGVudCcpLmVtcHR5KCkubG9hZCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI3NlbGVjdHNlbWVzdHJlJywgZnVuY3Rpb24gKCkge1xuICAvL21hdGllcmVzXG4gICQoJyNsaXN0ZWdyb3VwZScpLmVtcHR5KClcbiAgY29uc3Qgc2VsZWN0TWF0aWVyZSA9ICQoJyNzZWxlY3RtYXRpZXJlJylcbiAgY29uc3Qgc2VsZWN0R3JvdXBlcyA9ICQoJyNzZWxlY3Rncm91cGVzJylcbiAgJC5hamF4KFxuICAgIHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX21hdGllcmVzX3NlbWVzdHJlJywge3NlbWVzdHJlOiAkKHRoaXMpLnZhbCgpfSksXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsIC8vUmV0dXJuIGRhdGEgdHlwZSAod2hhdCB3ZSBleHBlY3QpLlxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgc2VsZWN0TWF0aWVyZS5lbXB0eSgpXG4gICAgICAgIHNlbGVjdE1hdGllcmUuYXBwZW5kKCQoJzxvcHRpb24+PC9vcHRpb24+JylcbiAgICAgICAgICAuYXR0cigndmFsdWUnLCAnJylcbiAgICAgICAgICAudGV4dCgnQ2hvaXNpciB1bmUgbWF0acOocmUnKSlcbiAgICAgICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24gKGluZGV4LCBtYXRpZXJlKSB7XG4gICAgICAgICAgc2VsZWN0TWF0aWVyZS5hcHBlbmQoJCgnPG9wdGlvbj48L29wdGlvbj4nKVxuICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgbWF0aWVyZS5pZClcbiAgICAgICAgICAgIC50ZXh0KG1hdGllcmUuZGlzcGxheSkpXG4gICAgICAgIH0pXG4gICAgICAgIHNlbGVjdE1hdGllcmUuYXR0cignZGF0YS1wcm92aWRlJywgJ3NlbGVjdHBpY2tlcicpXG4gICAgICAgIHNlbGVjdE1hdGllcmUuYXR0cignZGF0YS1saXZlLXNlYXJjaCcsICd0cnVlJylcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZFxcJ2FmZmljaGFnZSBkZXMgbWF0acOocmVzIGR1IHNlbWVzdHJlcy4gVmV1aWxsZXogY29udGFjdGVyIGxlIHJlc3BvbnNhYmxlIGRlIGxcXCdpbnRyYW5ldCBzaSBsZSBwcm9ibMOobWUgcGVyc2lzdGUgIScsICdkYW5nZXInKVxuICAgICAgfVxuICAgIH0pXG4gIC8vZ3JvdXBlc1xuICAkLmFqYXgoXG4gICAge1xuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfdHlwZV9ncm91cGVfc2VtZXN0cmUnLCB7c2VtZXN0cmU6ICQodGhpcykudmFsKCl9KSxcblxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLCAvL1JldHVybiBkYXRhIHR5cGUgKHdoYXQgd2UgZXhwZWN0KS5cbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHNlbGVjdEdyb3VwZXMuZW1wdHkoKVxuICAgICAgICBzZWxlY3RHcm91cGVzLmFwcGVuZCgkKCc8b3B0aW9uPjwvb3B0aW9uPicpXG4gICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgJycpXG4gICAgICAgICAgLnRleHQoJ0Nob2lzaXIgdW4gdHlwZSBkZSBncm91cGUnKSlcbiAgICAgICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24gKGluZGV4LCB0eXBlR3JvdXBlKSB7XG5cbiAgICAgICAgICBzZWxlY3RHcm91cGVzLmFwcGVuZCgkKCc8b3B0aW9uPjwvb3B0aW9uPicpXG4gICAgICAgICAgICAuYXR0cigndmFsdWUnLCB0eXBlR3JvdXBlLmlkKVxuICAgICAgICAgICAgLnRleHQodHlwZUdyb3VwZS5saWJlbGxlKSlcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZFxcJ2FmZmljaGFnZSBkZXMgZ3JvdXBlcyBkdSBzZW1lc3RyZXMuIFZldWlsbGV6IGNvbnRhY3RlciBsZSByZXNwb25zYWJsZSBkZSBsXFwnaW50cmFuZXQgc2kgbGUgcHJvYmzDqG1lIHBlcnNpc3RlICEnLCAnZGFuZ2VyJylcbiAgICAgIH1cbiAgICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjc2VsZWN0Z3JvdXBlcycsIGZ1bmN0aW9uICgpIHtcblxuICBjb25zdCAkbGdyID0gJCgnI2xpc3RlZ3JvdXBlJylcbiAgLy9tYXRpZXJlc1xuICAkLmFqYXgoXG4gICAge1xuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfZ3JvdXBlX3R5cGVfZ3JvdXBlJywge3R5cGVHcm91cGU6ICQodGhpcykudmFsKCl9KSxcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIiwgLy9SZXR1cm4gZGF0YSB0eXBlICh3aGF0IHdlIGV4cGVjdCkuXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkbGdyLmVtcHR5KClcbiAgICAgICAgbGV0ICRodG1sID0gJydcbiAgICAgICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24gKGluZGV4LCBncm91cGUpIHtcbiAgICAgICAgICAkaHRtbCArPSAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQgbmFtZT1cImRldGFpbF9ncm91cGVzW11cIiB2YWx1ZT1cIicgKyBncm91cGUuaWQgKyAnXCI+ICcgKyBncm91cGUubGliZWxsZSArICcgfCAnXG4gICAgICAgIH0pXG4gICAgICAgICRsZ3IuaHRtbCgkaHRtbClcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZFxcJ2FmZmljaGFnZSBkZXMgZ3JvdXBlcyBkdSBzZW1lc3RyZXMuIFZldWlsbGV6IGNvbnRhY3RlciBsZSByZXNwb25zYWJsZSBkZSBsXFwnaW50cmFuZXQgc2kgbGUgcHJvYmzDqG1lIHBlcnNpc3RlICEnLCAnZGFuZ2VyJylcbiAgICAgIH1cbiAgICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywnI2FkZF9yYXR0cmFwYWdlJywgZnVuY3Rpb24oKXtcbiAgJCgnI2Jsb2NfYWRkX3JhdHRyYXBhZ2UnKS50b2dnbGUoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywnI2FkZF9jYXJuZXQnLCBmdW5jdGlvbigpe1xuICAkKCcjYmxvY19hZGRfY2FybmV0JykudG9nZ2xlKClcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvbWVzc2FnZXJpZS5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDA1LzAzLzIwMjEgMTE6MTFcblxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1lc3NhZ2VyaWUtZmlsdHJlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgJCgnLm1lc3NhZ2VyaWUtZmlsdHJlJykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZXNzYWdlcy1saXN0ZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX2ZpbHRyZScsIHsnZmlsdHJlJzogJCh0aGlzKS5kYXRhKCdmaWx0cmUnKX0pKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNtb2RhbFBqJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgJCgnI2Jsb2NQaicpLnRvZ2dsZSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFkZEZpbGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICBsZXQgJGlkID0gcGFyc2VJbnQoJCh0aGlzKS5kYXRhKCdmaWxlJykpICsgMVxuICBsZXQgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicm93XCIgaWQ9XCJmaWxlJyArICRpZCArICdcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cInBqJyArICRpZCArICdcIiBpZD1cInBqJyArICRpZCArICdcIiBjbGFzcz1cImZvcm0tY29udHJvbCBwakZpbGVcIiBwbGFjZWhvbGRlcj1cIkFqb3V0ZXIgdW5lIHBpw6hjZSBqb2ludGVcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXN1Y2Nlc3Mtb3V0bGluZSBhZGRGaWxlXCIgZGF0YS1maWxlPVwiJyArICRpZCArICdcIj48aSBjbGFzcz1cImZhIGZhLXBsdXMtY2lyY2xlXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tZGFuZ2VyLW91dGxpbmUgcmVtb3ZlRmlsZVwiIGRhdGEtZmlsZT1cIicgKyAkaWQgKyAnXCI+PGkgY2xhc3M9XCJmYVxcbicgK1xuICAgICcgICAgICAgICAgICBmYS1taW51cy1jaXJjbGVcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICAgIDwvZGl2PidcblxuICAkKCcjYmxvY1BqJykuYXBwZW5kKGh0bWwpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnJlbW92ZUZpbGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICBsZXQgJGlkID0gJCh0aGlzKS5kYXRhKCdmaWxlJylcbiAgJCgnI2ZpbGUnICsgJGlkKS5yZW1vdmUoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNzYXZlRHJhZnQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9kcmFmdCcpLFxuICAgIGRhdGE6IHtcbiAgICAgIG1lc3NhZ2VUb1NlbWVzdHJlOiAkKCcjbWVzc2FnZVRvU2VtZXN0cmUnKS52YWwoKSxcbiAgICAgIG1lc3NhZ2VUb0dyb3VwZTogJCgnI21lc3NhZ2VUb0dyb3VwZScpLnZhbCgpLFxuICAgICAgbWVzc2FnZVRvTGlicmVFdHVkaWFudDogJCgnI21lc3NhZ2VUb0xpYnJlRXR1ZGlhbnQnKS52YWwoKSxcbiAgICAgIG1lc3NhZ2VUb0xpYnJlUGVyc29ubmVsOiAkKCcjbWVzc2FnZVRvTGlicmVQZXJzb25uZWwnKS52YWwoKSxcbiAgICAgIHR5cGVEZXN0aW5hdGFpcmU6ICQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9bWVzc2FnZURlc3RpbmF0YWlyZVR5cGVdOmNoZWNrZWQnKS52YWwoKSxcbiAgICAgIGNvcGllOiAkKCcjbWVzc2FnZUNvcHknKS52YWwoKSxcbiAgICAgIG1lc3NhZ2U6ICQoJy5xbC1lZGl0b3InKS5odG1sKCksXG4gICAgICBzdWpldDogJCgnI21lc3NhZ2VTdWJqZWN0JykudmFsKClcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAkKCcjbWVzc2FnZXMtbGlzdGUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9maWx0cmUnLCB7J2ZpbHRyZSc6ICdkcmFmdCd9KSlcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1lc3NhZ2UtcmVhZCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgJCgnI21lc3NhZ2VzLWxpc3RlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfbWVzc2FnZScsIHttZXNzYWdlOiAkKHRoaXMpLmRhdGEoJ21lc3NhZ2UnKX0pKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tZXNzYWdlLXJlYWQtYXV0ZXVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAkKCcjbWVzc2FnZXMtbGlzdGUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9tZXNzYWdlX2Vudm95ZScsIHttZXNzYWdlOiAkKHRoaXMpLmRhdGEoJ21lc3NhZ2UnKX0pKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNuZXctbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgY29uc29sZS5sb2coJ3RvdG8nKVxuXG5cbiAgJCgnI21lc3NhZ2VzLWxpc3RlJykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfbm91dmVhdScpLCB7fSwgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRpbnltY2UuaW5pdCh7XG4gICAgICAgIHNlbGVjdG9yOiAnI21lc3NhZ2VNZXNzYWdlJyxcbiAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICAgIG1lbnViYXI6IGZhbHNlLFxuICAgICAgICBsYW5ndWFnZTogJ2ZyX0ZSJyxcbiAgICAgICAgY29udGVudF9jc3M6ICdkZWZhdWx0JyxcbiAgICAgICAgdG9vbGJhcjogJ3VuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBvdXRkZW50IGluZGVudCdcbiAgICAgIH0pXG4gICAgfVxuICApKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNtYXJxdWVyTm90aWZpY2F0aW9uc1JlYWQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdub3RpZmljYXRpb25fbWFycXVlcl9sdScpLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICQoJy5ub3RpZmljYXRpb24nKS5yZW1vdmVDbGFzcygnbWVkaWEtbmV3JylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5wakZpbGUnLCBmdW5jdGlvbiAoKSB7XG4gIGxldCB0YWlsbGVUb3RhbGUgPSAwXG4gICQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykuZWFjaChmdW5jdGlvbiAoZmlsZSwgZWxlbWVudCkge1xuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuZmlsZXNbMF0pXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50LmZpbGVzWzBdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGFpbGxlVG90YWxlICs9IGVsZW1lbnQuZmlsZXNbMF0uc2l6ZVxuICAgIH1cbiAgfSlcbiAgdGFpbGxlVG90YWxlID0gdGFpbGxlVG90YWxlIC8gMTAyNFxuICB0YWlsbGVUb3RhbGUgPSB0YWlsbGVUb3RhbGUgLyAxMDI0XG4gICQoJyNwb2lkUGonKS5zaG93KCkuaHRtbCgnTGUgcG9pZHMgZGVzIHBpw6hjZXMgam9pbnRlcyBlc3QgZGUgJyArIHRhaWxsZVRvdGFsZS50b0ZpeGVkKDMpICsgJyBNbycpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI21lc3NhZ2VTZW50JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgJCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXG4gICQodGhpcykudGV4dCgnRW52b2kgZW4gY291cnMuLi4nKVxuXG4gIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKCdmb3JtJylbMF0pXG4gIGZvcm1EYXRhLmFwcGVuZCgnbWVzc2FnZU1lc3NhZ2UnLCB0aW55bWNlLmFjdGl2ZUVkaXRvci5nZXRDb250ZW50KHtmb3JtYXQ6ICdodG1sJ30pKVxuXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX3NlbnQnKSxcbiAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICBhc3luYzogZmFsc2UsXG4gICAgY2FjaGU6IGZhbHNlLFxuICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICBlbmN0eXBlOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAkKCcjbWVzc2FnZXMtbGlzdGUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9tZXNzYWdlX2Vudm95ZScsIHttZXNzYWdlOiBkYXRhLm1lc3NhZ2V9KSlcbiAgICAgICQoJyNtZXNzYWdlU2VudCcpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXG4gICAgICAkKHRoaXMpLnRleHQoJ0Vudm95ZXInKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2VuZF9kcmFmdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICQoJyNtZXNzYWdlcy1saXN0ZScpLmVtcHR5KCkubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdtZXNzYWdlcmllX25vdXZlYXUnLCB7bWVzc2FnZTogJCh0aGlzKS5kYXRhKCdtZXNzYWdlJyl9KSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3RhcnJlZCcsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ21lc3NhZ2VyaWVfY2hhbmdlX2V0YXQnKSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICB2YWxldXI6ICdTJyxcbiAgICAgIG1lc3NhZ2U6ICQodGhpcykuZGF0YSgnbWVzc2FnZScpXG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNkZWxldGVNZXNzYWdlJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9jaGFuZ2VfZXRhdCcpLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgIGV0YXQ6ICdEJyxcbiAgICAgIG1lc3NhZ2U6ICQodGhpcykuZGF0YSgnbWVzc2FnZScpXG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjbWVzc2FnZXMtbGlzdGUnKS5lbXB0eSgpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnbWVzc2FnZXJpZV9maWx0cmUnLCB7J2ZpbHRyZSc6ICdhbGwnfSkpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tZXNzYWdlRGVzdGluYXRhaXJlVHlwZScsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdHlwZSA9ICQodGhpcykudmFsKClcbiAgY29uc3QgYmxvY0Rlc3RMaWJyZUV0dWRpYW50ID0gJCgnI2Jsb2NEZXN0TGlicmVFdHVkaWFudCcpXG4gIGNvbnN0IGJsb2NEZXN0TGlicmVQZXJzb25uZWwgPSAkKCcjYmxvY0Rlc3RMaWJyZVBlcnNvbm5lbCcpXG4gIGNvbnN0IGJsb2NEZXN0TWVzc2dhZUluZm8gPSAkKCcjYmxvY0Rlc3RNZXNzZ2FlSW5mbycpXG4gIGNvbnN0IGJsb2NEZXN0R3JvdXBlID0gJCgnI2Jsb2NEZXN0R3JvdXBlJylcbiAgY29uc3QgYmxvY0Rlc3RTZW1lc3RyZSA9ICQoJyNibG9jRGVzdFNlbWVzdHJlJylcblxuICBpZiAodHlwZSA9PT0gJ2UnKSB7XG4gICAgYmxvY0Rlc3RMaWJyZUV0dWRpYW50LnNob3coKVxuICAgIGJsb2NEZXN0TGlicmVQZXJzb25uZWwuaGlkZSgpXG4gICAgYmxvY0Rlc3RNZXNzZ2FlSW5mby5oaWRlKClcbiAgICBibG9jRGVzdEdyb3VwZS5oaWRlKClcbiAgICBibG9jRGVzdFNlbWVzdHJlLmhpZGUoKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzJykge1xuICAgIGJsb2NEZXN0TGlicmVFdHVkaWFudC5oaWRlKClcbiAgICBibG9jRGVzdExpYnJlUGVyc29ubmVsLmhpZGUoKVxuICAgIGJsb2NEZXN0TWVzc2dhZUluZm8uaGlkZSgpXG4gICAgYmxvY0Rlc3RHcm91cGUuaGlkZSgpXG4gICAgYmxvY0Rlc3RTZW1lc3RyZS5zaG93KClcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnZycpIHtcbiAgICBibG9jRGVzdExpYnJlRXR1ZGlhbnQuaGlkZSgpXG4gICAgYmxvY0Rlc3RMaWJyZVBlcnNvbm5lbC5oaWRlKClcbiAgICBibG9jRGVzdE1lc3NnYWVJbmZvLmhpZGUoKVxuICAgIGJsb2NEZXN0R3JvdXBlLnNob3coKVxuICAgIGJsb2NEZXN0U2VtZXN0cmUuaGlkZSgpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3AnKSB7XG4gICAgYmxvY0Rlc3RMaWJyZUV0dWRpYW50LmhpZGUoKVxuICAgIGJsb2NEZXN0TGlicmVQZXJzb25uZWwuc2hvdygpXG4gICAgYmxvY0Rlc3RNZXNzZ2FlSW5mby5oaWRlKClcbiAgICBibG9jRGVzdEdyb3VwZS5oaWRlKClcbiAgICBibG9jRGVzdFNlbWVzdHJlLmhpZGUoKVxuICB9XG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3V0aWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwMS8xMi8yMDIwIDIyOjA0XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5sZXQgJHN0b3BDYXRjaEVudGVyID0gZmFsc2VcblxuZnVuY3Rpb24gcmVhZFVybE1lbnUgKCR1cmwpIHtcbiAgY29uc3QgJGVsdCA9ICR1cmwuc3BsaXQoJy8nKVxuICBsZXQgJGZpcnN0RWx0ID0gMlxuICBpZiAoJGVsdFsxXSA9PT0gJ2luZGV4LnBocCcpIHtcbiAgICBpZiAoJGVsdC5sZW5ndGggPiAxKSB7XG4gICAgICAkZmlyc3RFbHQgPSAzXG4gICAgfVxuICB9XG5cbiAgaWYgKCRlbHRbJGZpcnN0RWx0XSA9PT0gJ3N1cGVyLWFkbWluaXN0cmF0aW9uJykge1xuICAgICRmaXJzdEVsdCA9ICRmaXJzdEVsdCArIDFcbiAgfVxuXG4gIGlmICgkZWx0WyRlbHQubGVuZ3RoIC0gMV0gPT09ICcnKSB7XG4gICAgJGVsdC5wb3AoKVxuICB9XG5cbiAgJCgnLm1lbnUtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAkKCcjbWVudS0nICsgJGVsdFskZmlyc3RFbHRdKS5hZGRDbGFzcygnYWN0aXZlJylcbn1cblxuLy9jb2xvcmlzZSBsZSBib24gbWVudVxucmVhZFVybE1lbnUoJChsb2NhdGlvbikuYXR0cigncGF0aG5hbWUnKSlcblxuU3dhbC5taXhpbih7XG4gIGN1c3RvbUNsYXNzOiB7XG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gIH0sXG4gIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxufSlcbi8vcG9wIHVwIGRlIGNvbmZpcm1hdGlvbiBkZSBzdXBwcmVzc2lvblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdXBwcmltZXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJylcbiAgY29uc3QgY3NyZiA9ICQodGhpcykuZGF0YSgnY3NyZicpXG4gIFN3YWwuZmlyZSh7XG4gICAgdGl0bGU6ICdDb25maXJtZXIgbGEgc3VwcHJlc3Npb24gPycsXG4gICAgdGV4dDogJ0xcXCdvcMOpcmF0aW9uIG5lIHBvdXJyYSBwYXMgw6p0cmUgYW5udWzDqWUuJyxcbiAgICBpY29uOiAnd2FybmluZycsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBqZSBjb25maXJtZScsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlcicsXG4gICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgfSxcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgX3Rva2VuOiBjc3JmXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGlmIChpZC5oYXNPd25Qcm9wZXJ0eSgncmVkaXJlY3QnKSAmJiBpZC5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBpZC51cmxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy90LnJvdyhcIiNsaWduZV9cIitpZCkucmVtb3ZlKCkuZHJhdygpOyA9PCBkYXRhdHRhYmxlIHRvZG86IHJlbW92ZSBsaWduZSBzaSBkYXRhdGFibGUgPz8gcHJvYmzDqG1lIGRhbnMgYWRtPnBlcnNvbm5lbFxuICAgICAgICAgICAgJCgnI2xpZ25lXycgKyBpZCkuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgICAgICAgICAgYWRkQ2FsbG91dCgnU3VwcHJlc3Npb24gZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqHMnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogJ1N1cHByaW3DqSEnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTFxcJ2VucmVnaXN0cmVtZW50IGEgw6l0w6kgc3VwcHJpbcOpLicsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYWxsb3V0IChtZXNzYWdlLCBsYWJlbCkge1xuICBjb25zb2xlLmxvZygnY2FsbG91dCcpXG4gIHZhciB0cmFuc2xhdGUgPSBuZXcgQXJyYXkoKVxuICB0cmFuc2xhdGVbJ3N1Y2Nlc3MnXSA9ICdTdWNjw6hzJ1xuICB0cmFuc2xhdGVbJ2RhbmdlciddID0gJ0VycmV1cidcbiAgdHJhbnNsYXRlWyd3YXJuaW5nJ10gPSAnQXR0ZW50aW9uJ1xuXG4gIGNvbnN0IGh0bWwgPSAnPGRpdiBjbGFzcz1cImNhbGxvdXQgY2FsbG91dC0nICsgbGFiZWwgKyAnXCIgcm9sZT1cImFsZXJ0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImNhbGxvdXRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8aDU+JyArIHRyYW5zbGF0ZVtsYWJlbF0gKyAnPC9oNT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8cD4nICsgbWVzc2FnZSArICc8L3A+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4nXG5cbiAgJCgnI21haW5Db250ZW50JykucHJlcGVuZChodG1sKS5zbGlkZURvd24oJ3Nsb3cnKVxuICAkKCcuY2FsbG91dCcpLmRlbGF5KDUwMDApLnNsaWRlVXAoJ3Nsb3cnKVxufVxuXG4vL0VkaXRhYmxlXG5sZXQgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAnJ1xubGV0IHR5cGUgPSAndGV4dCdcbmxldCBFZGl0T25MaW5lID0gZmFsc2VcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5teWVkaXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAkKHRoaXMpXG4gIGxldCBodG1sID0gJydcbiAgRWRpdE9uTGluZSA9IHRydWVcbiAgaWYgKHR5cGVvZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykpICE9PSAndW5kZWZpbmVkJykge1xuICAgIHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICB9XG5cbiAgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAnc2VsZWN0Jykge1xuICAgIC8vdG9kbzogQSBmaW5hbGlzZXJcbiAgfSBlbHNlIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3RleHRhcmVhJykge1xuICAgIGh0bWwgPSBnZW5lcmVUZXh0QXJlYSgkKHRoaXMpKVxuICB9IGVsc2Uge1xuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSkge1xuICAgIHVwZGF0ZURhdGEoKVxuICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtdmFsaWRlJywgZnVuY3Rpb24gKGUpIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gZmFsc2VcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHVwZGF0ZURhdGEoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSAmJiBlLndoaWNoID09PSAxMykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHVwZGF0ZURhdGEoKVxuICB9XG5cbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSAmJiBlLndoaWNoID09PSAyNykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG15RWRpdEluaXRpYWxDb250ZW50Lmh0bWwodmFsKVxuICAgICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gICAgICBFZGl0T25MaW5lID0gZmFsc2VcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZVRleHRBcmVhICgkb2JqKSB7XG4gICRzdG9wQ2F0Y2hFbnRlciA9IHRydWVcbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJteWVkaXQtaW5wdXRcIj4nICsgJG9iai5odG1sKCkudHJpbSgpICsgJzwvdGV4dGFyZWE+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxcbicgK1xuICAgICcgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzcy1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlci1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+J1xufVxuXG5mdW5jdGlvbiBnZW5lcmVJbnB1dCAoJG9iaikge1xuXG4gIHJldHVybiAnPGRpdiBpZD1cIm15RWRpdC16b25lXCIgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm15ZWRpdC1pbnB1dFwiIHZhbHVlPVwiJyArICRvYmouaHRtbCgpLnRyaW0oKSArICdcIiA+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxcbicgK1xuICAgICcgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzcy1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlci1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+J1xufVxuXG5qUXVlcnkuZm4uZGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSkgfHwgZGVmXG59XG5cbmpRdWVyeS5mbi5oYXNEYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmhhc0F0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSlcbn1cblxuZnVuY3Rpb24gZGF0YVRvT3B0aW9uIChuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHhbMV0udG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YU9wdGlvbnMgKGVsLCBjYXN0TGlzdCkge1xuICB2YXIgb3B0aW9ucyA9IHt9XG4gICQuZWFjaCgkKGVsKS5kYXRhKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cbiAgICBrZXkgPSBkYXRhVG9PcHRpb24oa2V5KVxuXG4gICAgLy8gRXNjYXBlIGRhdGEtcHJvdmlkZVxuICAgIGlmIChrZXkgPT0gJ3Byb3ZpZGUnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoY2FzdExpc3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgdHlwZSA9IGNhc3RMaXN0W2tleV1cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdib29sJzpcbiAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdudW0nOlxuICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJywnKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnNba2V5XSA9IHZhbHVlXG4gIH0pXG5cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRDaGFtcHMgKCRvYmopIHtcbiAgJG9iai5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZENoYW1wcyAoJG9iaikge1xuICAkb2JqLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJykuYWRkQ2xhc3MoJ2lzLXZhbGlkJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbXBzICgkb2JqKSB7XG4gICRvYmoucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKVxufVxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgJHBhcnNlSW50ID0gZ2xvYmFsLnBhcnNlSW50O1xudmFyIGhleCA9IC9eWystXT8wW1h4XS87XG52YXIgRk9SQ0VEID0gJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzA4JykgIT09IDggfHwgJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzB4MTYnKSAhPT0gMjI7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiAkcGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3QoUykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUucmVwZWF0YCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBlYXRcbm1vZHVsZS5leHBvcnRzID0gJycucmVwZWF0IHx8IGZ1bmN0aW9uIHJlcGVhdChjb3VudCkge1xuICB2YXIgc3RyID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBuID0gdG9JbnRlZ2VyKGNvdW50KTtcbiAgaWYgKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpIHRocm93IFJhbmdlRXJyb3IoJ1dyb25nIG51bWJlciBvZiByZXBldGl0aW9ucycpO1xuICBmb3IgKDtuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpIGlmIChuICYgMSkgcmVzdWx0ICs9IHN0cjtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgdGhpc051bWJlclZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdGhpc251bWJlcnZhbHVlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInICYmIGNsYXNzb2YodmFsdWUpICE9ICdOdW1iZXInKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvcnJlY3QgaW52b2NhdGlvbicpO1xuICB9XG4gIHJldHVybiArdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciB0aGlzTnVtYmVyVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGhpcy1udW1iZXItdmFsdWUnKTtcbnZhciByZXBlYXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBuYXRpdmVUb0ZpeGVkID0gMS4wLnRvRml4ZWQ7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG52YXIgcG93ID0gZnVuY3Rpb24gKHgsIG4sIGFjYykge1xuICByZXR1cm4gbiA9PT0gMCA/IGFjYyA6IG4gJSAyID09PSAxID8gcG93KHgsIG4gLSAxLCBhY2MgKiB4KSA6IHBvdyh4ICogeCwgbiAvIDIsIGFjYyk7XG59O1xuXG52YXIgbG9nID0gZnVuY3Rpb24gKHgpIHtcbiAgdmFyIG4gPSAwO1xuICB2YXIgeDIgPSB4O1xuICB3aGlsZSAoeDIgPj0gNDA5Nikge1xuICAgIG4gKz0gMTI7XG4gICAgeDIgLz0gNDA5NjtcbiAgfVxuICB3aGlsZSAoeDIgPj0gMikge1xuICAgIG4gKz0gMTtcbiAgICB4MiAvPSAyO1xuICB9IHJldHVybiBuO1xufTtcblxudmFyIEZPUkNFRCA9IG5hdGl2ZVRvRml4ZWQgJiYgKFxuICAwLjAwMDA4LnRvRml4ZWQoMykgIT09ICcwLjAwMCcgfHxcbiAgMC45LnRvRml4ZWQoMCkgIT09ICcxJyB8fFxuICAxLjI1NS50b0ZpeGVkKDIpICE9PSAnMS4yNScgfHxcbiAgMTAwMDAwMDAwMDAwMDAwMDEyOC4wLnRvRml4ZWQoMCkgIT09ICcxMDAwMDAwMDAwMDAwMDAwMTI4J1xuKSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuICBuYXRpdmVUb0ZpeGVkLmNhbGwoe30pO1xufSk7XG5cbi8vIGBOdW1iZXIucHJvdG90eXBlLnRvRml4ZWRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1udW1iZXIucHJvdG90eXBlLnRvZml4ZWRcbiQoeyB0YXJnZXQ6ICdOdW1iZXInLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXN0YXRlbWVudHNcbiAgdG9GaXhlZDogZnVuY3Rpb24gdG9GaXhlZChmcmFjdGlvbkRpZ2l0cykge1xuICAgIHZhciBudW1iZXIgPSB0aGlzTnVtYmVyVmFsdWUodGhpcyk7XG4gICAgdmFyIGZyYWN0RGlnaXRzID0gdG9JbnRlZ2VyKGZyYWN0aW9uRGlnaXRzKTtcbiAgICB2YXIgZGF0YSA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICB2YXIgc2lnbiA9ICcnO1xuICAgIHZhciByZXN1bHQgPSAnMCc7XG4gICAgdmFyIGUsIHosIGosIGs7XG5cbiAgICB2YXIgbXVsdGlwbHkgPSBmdW5jdGlvbiAobiwgYykge1xuICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICB2YXIgYzIgPSBjO1xuICAgICAgd2hpbGUgKCsraW5kZXggPCA2KSB7XG4gICAgICAgIGMyICs9IG4gKiBkYXRhW2luZGV4XTtcbiAgICAgICAgZGF0YVtpbmRleF0gPSBjMiAlIDFlNztcbiAgICAgICAgYzIgPSBmbG9vcihjMiAvIDFlNyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBkaXZpZGUgPSBmdW5jdGlvbiAobikge1xuICAgICAgdmFyIGluZGV4ID0gNjtcbiAgICAgIHZhciBjID0gMDtcbiAgICAgIHdoaWxlICgtLWluZGV4ID49IDApIHtcbiAgICAgICAgYyArPSBkYXRhW2luZGV4XTtcbiAgICAgICAgZGF0YVtpbmRleF0gPSBmbG9vcihjIC8gbik7XG4gICAgICAgIGMgPSAoYyAlIG4pICogMWU3O1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGF0YVRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGluZGV4ID0gNjtcbiAgICAgIHZhciBzID0gJyc7XG4gICAgICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgICAgIGlmIChzICE9PSAnJyB8fCBpbmRleCA9PT0gMCB8fCBkYXRhW2luZGV4XSAhPT0gMCkge1xuICAgICAgICAgIHZhciB0ID0gU3RyaW5nKGRhdGFbaW5kZXhdKTtcbiAgICAgICAgICBzID0gcyA9PT0gJycgPyB0IDogcyArIHJlcGVhdC5jYWxsKCcwJywgNyAtIHQubGVuZ3RoKSArIHQ7XG4gICAgICAgIH1cbiAgICAgIH0gcmV0dXJuIHM7XG4gICAgfTtcblxuICAgIGlmIChmcmFjdERpZ2l0cyA8IDAgfHwgZnJhY3REaWdpdHMgPiAyMCkgdGhyb3cgUmFuZ2VFcnJvcignSW5jb3JyZWN0IGZyYWN0aW9uIGRpZ2l0cycpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAobnVtYmVyICE9IG51bWJlcikgcmV0dXJuICdOYU4nO1xuICAgIGlmIChudW1iZXIgPD0gLTFlMjEgfHwgbnVtYmVyID49IDFlMjEpIHJldHVybiBTdHJpbmcobnVtYmVyKTtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgc2lnbiA9ICctJztcbiAgICAgIG51bWJlciA9IC1udW1iZXI7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPiAxZS0yMSkge1xuICAgICAgZSA9IGxvZyhudW1iZXIgKiBwb3coMiwgNjksIDEpKSAtIDY5O1xuICAgICAgeiA9IGUgPCAwID8gbnVtYmVyICogcG93KDIsIC1lLCAxKSA6IG51bWJlciAvIHBvdygyLCBlLCAxKTtcbiAgICAgIHogKj0gMHgxMDAwMDAwMDAwMDAwMDtcbiAgICAgIGUgPSA1MiAtIGU7XG4gICAgICBpZiAoZSA+IDApIHtcbiAgICAgICAgbXVsdGlwbHkoMCwgeik7XG4gICAgICAgIGogPSBmcmFjdERpZ2l0cztcbiAgICAgICAgd2hpbGUgKGogPj0gNykge1xuICAgICAgICAgIG11bHRpcGx5KDFlNywgMCk7XG4gICAgICAgICAgaiAtPSA3O1xuICAgICAgICB9XG4gICAgICAgIG11bHRpcGx5KHBvdygxMCwgaiwgMSksIDApO1xuICAgICAgICBqID0gZSAtIDE7XG4gICAgICAgIHdoaWxlIChqID49IDIzKSB7XG4gICAgICAgICAgZGl2aWRlKDEgPDwgMjMpO1xuICAgICAgICAgIGogLT0gMjM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2aWRlKDEgPDwgaik7XG4gICAgICAgIG11bHRpcGx5KDEsIDEpO1xuICAgICAgICBkaXZpZGUoMik7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXVsdGlwbHkoMCwgeik7XG4gICAgICAgIG11bHRpcGx5KDEgPDwgLWUsIDApO1xuICAgICAgICByZXN1bHQgPSBkYXRhVG9TdHJpbmcoKSArIHJlcGVhdC5jYWxsKCcwJywgZnJhY3REaWdpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZnJhY3REaWdpdHMgPiAwKSB7XG4gICAgICBrID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyAoayA8PSBmcmFjdERpZ2l0c1xuICAgICAgICA/ICcwLicgKyByZXBlYXQuY2FsbCgnMCcsIGZyYWN0RGlnaXRzIC0gaykgKyByZXN1bHRcbiAgICAgICAgOiByZXN1bHQuc2xpY2UoMCwgayAtIGZyYWN0RGlnaXRzKSArICcuJyArIHJlc3VsdC5zbGljZShrIC0gZnJhY3REaWdpdHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gc2lnbiArIHJlc3VsdDtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50Jyk7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUludCAhPSBwYXJzZUludEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50SW1wbGVtZW50YXRpb25cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.stage_courrier"],{

/***/ "./assets/css/quill.css":
/*!******************************!*\
  !*** ./assets/css/quill.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/pages/adm.stage_courrier.js":
/*!***********************************************!*\
  !*** ./assets/js/pages/adm.stage_courrier.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../quill */ "./assets/js/quill.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.stage_courrier.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/10/2020 18:03




var ed_courrier, ed_ETAT_STAGE_AUTORISE, ed_ETAT_STAGE_DEPOSE, ed_ETAT_STAGE_VALIDE, ed_ETAT_STAGE_REFUS, ed_ETAT_STAGE_INCOMPLET, ed_ETAT_STAGE_CONVENTION_IMPRIMEE, ed_ETAT_STAGE_CONVENTION_ENVOYEE, ed_ETAT_STAGE_CONVENTION_RECUE;
var tabEd = {};

function loadQuill($id) {
  var options = {
    modules: {
      toolbar: {
        container: '#toolbar_' + $id,
        handlers: {
          'customsfields': function customsfields(value) {
            if (value) {
              var cursorPosition = this.quill.getSelection().index;
              this.quill.insertText(cursorPosition, value);
              this.quill.setSelection(cursorPosition + value.length);
            }
          }
        }
      }
    },
    placeholder: 'Composez le corps du message... Laisser vide pour utiliser le mail par défaut.',
    theme: 'snow'
  };
  return new _quill__WEBPACK_IMPORTED_MODULE_0__["default"]('#text_' + $id, options);
}

jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).ready(function () {
  ed_ETAT_STAGE_AUTORISE = loadQuill('ETAT_STAGE_AUTORISE');
  ed_ETAT_STAGE_DEPOSE = loadQuill('ETAT_STAGE_DEPOSE');
  ed_ETAT_STAGE_VALIDE = loadQuill('ETAT_STAGE_VALIDE');
  ed_ETAT_STAGE_REFUS = loadQuill('ETAT_STAGE_REFUS');
  ed_ETAT_STAGE_INCOMPLET = loadQuill('ETAT_STAGE_INCOMPLET');
  ed_ETAT_STAGE_CONVENTION_IMPRIMEE = loadQuill('ETAT_STAGE_CONVENTION_IMPRIMEE');
  ed_ETAT_STAGE_CONVENTION_ENVOYEE = loadQuill('ETAT_STAGE_CONVENTION_ENVOYEE');
  ed_ETAT_STAGE_CONVENTION_RECUE = loadQuill('ETAT_STAGE_CONVENTION_RECUE');
  ed_courrier = loadQuill('courrier');
  tabEd = {
    'ed_ETAT_STAGE_AUTORISE': ed_ETAT_STAGE_AUTORISE,
    'ed_ETAT_STAGE_DEPOSE': ed_ETAT_STAGE_DEPOSE,
    'ed_ETAT_STAGE_VALIDE': ed_ETAT_STAGE_VALIDE,
    'ed_ETAT_STAGE_REFUS': ed_ETAT_STAGE_REFUS,
    'ed_ETAT_STAGE_INCOMPLET': ed_ETAT_STAGE_INCOMPLET,
    'ed_ETAT_STAGE_CONVENTION_IMPRIMEE': ed_ETAT_STAGE_CONVENTION_IMPRIMEE,
    'ed_ETAT_STAGE_CONVENTION_ENVOYEE': ed_ETAT_STAGE_CONVENTION_ENVOYEE,
    'ed_ETAT_STAGE_CONVENTION_RECUE': ed_ETAT_STAGE_CONVENTION_RECUE,
    'ed_courrier': ed_courrier
  };
});
jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.enregistreModeleMail', function () {
  var etat = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('type');
  var onglet = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('ed');
  jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
    url: Routing.generate('administration_stage_periode_courrier_sauvegarde_modele', {
      uuid: jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('periode'),
      mail: etat
    }),
    method: 'POST',
    data: {
      message: tabEd['ed_' + onglet].root.innerHTML,
      sujet: jquery__WEBPACK_IMPORTED_MODULE_2___default()('#sujet_' + etat).val()
    },
    success: function success() {
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCallout"])('Modèle enregistré !', 'success');
    }
  });
});
jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.resetDefaut', function (e) {
  e.preventDefault();
  var etat = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('type');
  var periode = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('periode');
  sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
    title: 'Confirmer le retour au message par défaut ?',
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
      jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
        url: Routing.generate('administration_stage_periode_courrier_reset', {
          id: periode,
          etat: etat
        }),
        type: 'POST',
        success: function success() {
          tabEd['ed_' + etat].setText('');
          Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCallout"])('Suppression effectuée avec succès, retour au message par défaut', 'success');
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Message réinitialisé!',
            text: 'Le message par défaut sera maintenant utilisé.',
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary',
              cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
          });
        },
        error: function error(xhr, ajaxOptions, thrownError) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
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
          Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCallout"])('Erreur lors de la tentative de suppression', 'danger');
        }
      });
    } else if ( // Read more about handling dismissals
    result.dismiss === 'cancel') {
      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
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

/***/ }),

/***/ "./assets/js/quill.js":
/*!****************************!*\
  !*** ./assets/js/quill.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_quill_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/quill.css */ "./assets/css/quill.css");
/* harmony import */ var _css_quill_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_quill_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/core */ "./node_modules/quill/core.js");
/* harmony import */ var quill_modules_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill/modules/toolbar */ "./node_modules/quill/modules/toolbar.js");
/* harmony import */ var quill_themes_snow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill/themes/snow */ "./node_modules/quill/themes/snow.js");
/* harmony import */ var quill_formats_bold__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill/formats/bold */ "./node_modules/quill/formats/bold.js");
/* harmony import */ var quill_formats_italic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill/formats/italic */ "./node_modules/quill/formats/italic.js");
/* harmony import */ var quill_formats_underline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! quill/formats/underline */ "./node_modules/quill/formats/underline.js");
/* harmony import */ var quill_formats_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! quill/formats/header */ "./node_modules/quill/formats/header.js");
/* harmony import */ var quill_formats_align__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! quill/formats/align */ "./node_modules/quill/formats/align.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var quill_formats_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! quill/formats/list */ "./node_modules/quill/formats/list.js");
/* harmony import */ var quill_formats_size__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! quill/formats/size */ "./node_modules/quill/formats/size.js");
/* harmony import */ var quill_formats_color__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! quill/formats/color */ "./node_modules/quill/formats/color.js");
/* harmony import */ var quill_formats_background__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! quill/formats/background */ "./node_modules/quill/formats/background.js");
/* harmony import */ var quill_formats_blockquote__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! quill/formats/blockquote */ "./node_modules/quill/formats/blockquote.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/quill.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/10/2020 06:58















quill_core__WEBPACK_IMPORTED_MODULE_1__["default"].register({
  'modules/toolbar': quill_modules_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"],
  'themes/snow': quill_themes_snow__WEBPACK_IMPORTED_MODULE_3__["default"],
  'formats/bold': quill_formats_bold__WEBPACK_IMPORTED_MODULE_4__["default"],
  'formats/italic': quill_formats_italic__WEBPACK_IMPORTED_MODULE_5__["default"],
  'formats/size': quill_formats_size__WEBPACK_IMPORTED_MODULE_11__["SizeStyle"],
  'formats/color': quill_formats_color__WEBPACK_IMPORTED_MODULE_12__["ColorStyle"],
  'formats/background': quill_formats_background__WEBPACK_IMPORTED_MODULE_13__["BackgroundStyle"],
  'formats/underline': quill_formats_underline__WEBPACK_IMPORTED_MODULE_6__["default"],
  'formats/header': quill_formats_header__WEBPACK_IMPORTED_MODULE_7__["default"],
  'formats/list': quill_formats_list__WEBPACK_IMPORTED_MODULE_10__["default"],
  'formats/list-item': quill_formats_list__WEBPACK_IMPORTED_MODULE_10__["ListItem"],
  'formats/align': quill_formats_align__WEBPACK_IMPORTED_MODULE_8__["AlignStyle"]
});
/* harmony default export */ __webpack_exports__["default"] = (quill_core__WEBPACK_IMPORTED_MODULE_1__["default"]);
var options = {
  theme: 'snow',
  toolbar: 'full'
};
var toolbarFullOptions = [[{
  'header': [1, 2, 3, 4, 5, 6, false]
}, {
  'size': ['small', false, 'large', 'huge']
}], ['bold', 'italic', 'underline'], // toggled buttons
[{
  'color': []
}, {
  'background': []
}], // dropdown with defaults from theme
[{
  'header': 1
}, {
  'header': 2
}], [{
  'list': 'ordered'
}, {
  'list': 'bullet'
}, {
  'indent': '-1'
}, {
  'indent': '+1'
}], ['link'], ['clean'] // remove formatting button
];

if (options.toolbar !== undefined) {
  var toolbar = options.toolbar.toLowerCase();

  if (toolbar == 'full') {
    options.modules = {
      //syntax: 'true',
      toolbar: toolbarFullOptions
    };
  }
}

jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).ready(function () {
  initQuill();
});
jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).ajaxComplete(function () {
  initQuill();
});

function initQuill() {
  var obj = jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-provide="quill"]');

  if (obj.length === 1) {
    new quill_core__WEBPACK_IMPORTED_MODULE_1__["default"](jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-provide="quill"]')[0], options);
  }
}

/***/ }),

/***/ "./assets/js/util.js":
/*!***************************!*\
  !*** ./assets/js/util.js ***!
  \***************************/
/*! exports provided: addCallout, getDataOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCallout", function() { return addCallout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataOptions", function() { return getDataOptions; });
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);





// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/util.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/10/2020 14:54


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
sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.mixin({
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
  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
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
      jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
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
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
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
      sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
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
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
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
  jquery__WEBPACK_IMPORTED_MODULE_5___default.a.each(jquery__WEBPACK_IMPORTED_MODULE_5___default()(el).data(), function (key, value) {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/pages/adm.stage_courrier.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~3a8cbb67","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7452d955","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~0d230585","vendors~adm.stage_courrier~quill"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3F1aWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnN0YWdlX2NvdXJyaWVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9xdWlsbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC5qcyJdLCJuYW1lcyI6WyJlZF9jb3VycmllciIsImVkX0VUQVRfU1RBR0VfQVVUT1JJU0UiLCJlZF9FVEFUX1NUQUdFX0RFUE9TRSIsImVkX0VUQVRfU1RBR0VfVkFMSURFIiwiZWRfRVRBVF9TVEFHRV9SRUZVUyIsImVkX0VUQVRfU1RBR0VfSU5DT01QTEVUIiwiZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUVFIiwiZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0VOVk9ZRUUiLCJlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fUkVDVUUiLCJ0YWJFZCIsImxvYWRRdWlsbCIsIiRpZCIsIm9wdGlvbnMiLCJtb2R1bGVzIiwidG9vbGJhciIsImNvbnRhaW5lciIsImhhbmRsZXJzIiwidmFsdWUiLCJjdXJzb3JQb3NpdGlvbiIsInF1aWxsIiwiZ2V0U2VsZWN0aW9uIiwiaW5kZXgiLCJpbnNlcnRUZXh0Iiwic2V0U2VsZWN0aW9uIiwibGVuZ3RoIiwicGxhY2Vob2xkZXIiLCJ0aGVtZSIsIlF1aWxsIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImV0YXQiLCJkYXRhIiwib25nbGV0IiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInV1aWQiLCJtYWlsIiwibWV0aG9kIiwibWVzc2FnZSIsInJvb3QiLCJpbm5lckhUTUwiLCJzdWpldCIsInZhbCIsInN1Y2Nlc3MiLCJhZGRDYWxsb3V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicGVyaW9kZSIsIlN3YWwiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGhlbiIsInJlc3VsdCIsImlkIiwidHlwZSIsInNldFRleHQiLCJlcnJvciIsInhociIsImFqYXhPcHRpb25zIiwidGhyb3duRXJyb3IiLCJkaXNtaXNzIiwicmVnaXN0ZXIiLCJUb29sYmFyIiwiU25vdyIsIkJvbGQiLCJJdGFsaWMiLCJTaXplU3R5bGUiLCJDb2xvclN0eWxlIiwiQmFja2dyb3VuZFN0eWxlIiwiVW5kZXJsaW5lIiwiSGVhZGVyIiwiTGlzdCIsIkxpc3RJdGVtIiwiQWxpZ25TdHlsZSIsInRvb2xiYXJGdWxsT3B0aW9ucyIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiaW5pdFF1aWxsIiwiYWpheENvbXBsZXRlIiwib2JqIiwiJHN0b3BDYXRjaEVudGVyIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwicG9wIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImxvY2F0aW9uIiwiYXR0ciIsIm1peGluIiwiY3NyZiIsIl90b2tlbiIsImhhc093blByb3BlcnR5IiwiaHJlZiIsImNsb3Nlc3QiLCJyZW1vdmUiLCJsYWJlbCIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc2xhdGUiLCJBcnJheSIsImh0bWwiLCJwcmVwZW5kIiwic2xpZGVEb3duIiwiZGVsYXkiLCJzbGlkZVVwIiwibXlFZGl0SW5pdGlhbENvbnRlbnQiLCJFZGl0T25MaW5lIiwiZ2VuZXJlVGV4dEFyZWEiLCJnZW5lcmVJbnB1dCIsInJlcGxhY2VXaXRoIiwiZm9jdXMiLCJrZXlDb2RlIiwidXBkYXRlRGF0YSIsIndoaWNoIiwiZmllbGQiLCIkb2JqIiwidHJpbSIsImpRdWVyeSIsImZuIiwiZGF0YUF0dHIiLCJuYW1lIiwiZGVmIiwiZ2V0QXR0cmlidXRlIiwiaGFzRGF0YUF0dHIiLCJoYXNBdHRyaWJ1dGUiLCJkYXRhVG9PcHRpb24iLCJyZXBsYWNlIiwieCIsInRvVXBwZXJDYXNlIiwiZ2V0RGF0YU9wdGlvbnMiLCJlbCIsImNhc3RMaXN0IiwiZWFjaCIsImtleSIsIkJvb2xlYW4iLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFdBQUosRUFBaUJDLHNCQUFqQixFQUF5Q0Msb0JBQXpDLEVBQStEQyxvQkFBL0QsRUFBcUZDLG1CQUFyRixFQUNFQyx1QkFERixFQUVFQyxpQ0FGRixFQUVxQ0MsZ0NBRnJDLEVBRXVFQyw4QkFGdkU7QUFJQSxJQUFJQyxLQUFLLEdBQUcsRUFBWjs7QUFFQSxTQUFTQyxTQUFULENBQW9CQyxHQUFwQixFQUF5QjtBQUN2QixNQUFNQyxPQUFPLEdBQUc7QUFDZEMsV0FBTyxFQUFFO0FBQ1BDLGFBQU8sRUFBRTtBQUNQQyxpQkFBUyxFQUFFLGNBQWNKLEdBRGxCO0FBRVBLLGdCQUFRLEVBQUU7QUFDUiwyQkFBaUIsdUJBQVVDLEtBQVYsRUFBaUI7QUFDaEMsZ0JBQUlBLEtBQUosRUFBVztBQUNULGtCQUFNQyxjQUFjLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxZQUFYLEdBQTBCQyxLQUFqRDtBQUNBLG1CQUFLRixLQUFMLENBQVdHLFVBQVgsQ0FBc0JKLGNBQXRCLEVBQXNDRCxLQUF0QztBQUNBLG1CQUFLRSxLQUFMLENBQVdJLFlBQVgsQ0FBd0JMLGNBQWMsR0FBR0QsS0FBSyxDQUFDTyxNQUEvQztBQUNEO0FBQ0Y7QUFQTztBQUZIO0FBREYsS0FESztBQWVkQyxlQUFXLEVBQUUsZ0ZBZkM7QUFnQmRDLFNBQUssRUFBRTtBQWhCTyxHQUFoQjtBQWtCQSxTQUFPLElBQUlDLDhDQUFKLENBQVUsV0FBV2hCLEdBQXJC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LEdBQUQsQ0FBbkI7O0FBQ0EsY0FBUWxGLElBQVI7QUFDRSxhQUFLLE1BQUw7QUFDRXBELGVBQUssR0FBR3VJLE9BQU8sQ0FBQ3ZJLEtBQUQsQ0FBZjtBQUNBOztBQUVGLGFBQUssS0FBTDtBQUNFQSxlQUFLLEdBQUd3SSxNQUFNLENBQUN4SSxLQUFELENBQWQ7QUFDQTs7QUFFRixhQUFLLE9BQUw7QUFDRUEsZUFBSyxHQUFHQSxLQUFLLENBQUNrRixLQUFOLENBQVksR0FBWixDQUFSO0FBQ0E7O0FBRUY7QUFiRjtBQWdCRDs7QUFFRHZGLFdBQU8sQ0FBQzJJLEdBQUQsQ0FBUCxHQUFldEksS0FBZjtBQUNELEdBOUJEO0FBZ0NBLFNBQU9MLE9BQVA7QUFDRCxDIiwiZmlsZSI6ImFkbS5zdGFnZV9jb3Vycmllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0uc3RhZ2VfY291cnJpZXIuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxOS8xMC8yMDIwIDE4OjAzXG5cbmltcG9ydCBRdWlsbCBmcm9tICcuLi9xdWlsbCdcbmltcG9ydCB7YWRkQ2FsbG91dH0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5sZXQgZWRfY291cnJpZXIsIGVkX0VUQVRfU1RBR0VfQVVUT1JJU0UsIGVkX0VUQVRfU1RBR0VfREVQT1NFLCBlZF9FVEFUX1NUQUdFX1ZBTElERSwgZWRfRVRBVF9TVEFHRV9SRUZVUyxcbiAgZWRfRVRBVF9TVEFHRV9JTkNPTVBMRVQsXG4gIGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9JTVBSSU1FRSwgZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0VOVk9ZRUUsIGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRVxuXG5sZXQgdGFiRWQgPSB7fVxuXG5mdW5jdGlvbiBsb2FkUXVpbGwgKCRpZCkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1vZHVsZXM6IHtcbiAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgY29udGFpbmVyOiAnI3Rvb2xiYXJfJyArICRpZCxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAnY3VzdG9tc2ZpZWxkcyc6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5xdWlsbC5nZXRTZWxlY3Rpb24oKS5pbmRleFxuICAgICAgICAgICAgICB0aGlzLnF1aWxsLmluc2VydFRleHQoY3Vyc29yUG9zaXRpb24sIHZhbHVlKVxuICAgICAgICAgICAgICB0aGlzLnF1aWxsLnNldFNlbGVjdGlvbihjdXJzb3JQb3NpdGlvbiArIHZhbHVlLmxlbmd0aClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiAnQ29tcG9zZXogbGUgY29ycHMgZHUgbWVzc2FnZS4uLiBMYWlzc2VyIHZpZGUgcG91ciB1dGlsaXNlciBsZSBtYWlsIHBhciBkw6lmYXV0LicsXG4gICAgdGhlbWU6ICdzbm93J1xuICB9XG4gIHJldHVybiBuZXcgUXVpbGwoJyN0ZXh0XycgKyAkaWQsIG9wdGlvbnMpXG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgZWRfRVRBVF9TVEFHRV9BVVRPUklTRSA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9BVVRPUklTRScpXG4gIGVkX0VUQVRfU1RBR0VfREVQT1NFID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX0RFUE9TRScpXG4gIGVkX0VUQVRfU1RBR0VfVkFMSURFID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX1ZBTElERScpXG4gIGVkX0VUQVRfU1RBR0VfUkVGVVMgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfUkVGVVMnKVxuICBlZF9FVEFUX1NUQUdFX0lOQ09NUExFVCA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9JTkNPTVBMRVQnKVxuICBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fSU1QUklNRUUgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfQ09OVkVOVElPTl9JTVBSSU1FRScpXG4gIGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9FTlZPWUVFID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX0NPTlZFTlRJT05fRU5WT1lFRScpXG4gIGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRSA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9DT05WRU5USU9OX1JFQ1VFJylcbiAgZWRfY291cnJpZXIgPSBsb2FkUXVpbGwoJ2NvdXJyaWVyJylcblxuICB0YWJFZCA9IHtcbiAgICAnZWRfRVRBVF9TVEFHRV9BVVRPUklTRSc6IGVkX0VUQVRfU1RBR0VfQVVUT1JJU0UsXG4gICAgJ2VkX0VUQVRfU1RBR0VfREVQT1NFJzogZWRfRVRBVF9TVEFHRV9ERVBPU0UsXG4gICAgJ2VkX0VUQVRfU1RBR0VfVkFMSURFJzogZWRfRVRBVF9TVEFHRV9WQUxJREUsXG4gICAgJ2VkX0VUQVRfU1RBR0VfUkVGVVMnOiBlZF9FVEFUX1NUQUdFX1JFRlVTLFxuICAgICdlZF9FVEFUX1NUQUdFX0lOQ09NUExFVCc6IGVkX0VUQVRfU1RBR0VfSU5DT01QTEVULFxuICAgICdlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fSU1QUklNRUUnOiBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fSU1QUklNRUUsXG4gICAgJ2VkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9FTlZPWUVFJzogZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0VOVk9ZRUUsXG4gICAgJ2VkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRSc6IGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRSxcbiAgICAnZWRfY291cnJpZXInOiBlZF9jb3VycmllclxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmVucmVnaXN0cmVNb2RlbGVNYWlsJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBldGF0ID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgY29uc3Qgb25nbGV0ID0gJCh0aGlzKS5kYXRhKCdlZCcpXG5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3N0YWdlX3BlcmlvZGVfY291cnJpZXJfc2F1dmVnYXJkZV9tb2RlbGUnLCB7XG4gICAgICB1dWlkOiAkKHRoaXMpLmRhdGEoJ3BlcmlvZGUnKSxcbiAgICAgIG1haWw6IGV0YXRcbiAgICB9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICBtZXNzYWdlOiB0YWJFZFsnZWRfJyArIG9uZ2xldF0ucm9vdC5pbm5lckhUTUwsXG4gICAgICBzdWpldDogJCgnI3N1amV0XycgKyBldGF0KS52YWwoKVxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgYWRkQ2FsbG91dCgnTW9kw6hsZSBlbnJlZ2lzdHLDqSAhJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucmVzZXREZWZhdXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbGV0IGV0YXQgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICBsZXQgcGVyaW9kZSA9ICQodGhpcykuZGF0YSgncGVyaW9kZScpXG5cbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsZSByZXRvdXIgYXUgbWVzc2FnZSBwYXIgZMOpZmF1dCA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3N0YWdlX3BlcmlvZGVfY291cnJpZXJfcmVzZXQnLCB7aWQ6IHBlcmlvZGUsIGV0YXQ6IGV0YXR9KSxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGFiRWRbJ2VkXycgKyBldGF0XS5zZXRUZXh0KCcnKVxuICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzLCByZXRvdXIgYXUgbWVzc2FnZSBwYXIgZMOpZmF1dCcsICdzdWNjZXNzJylcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdNZXNzYWdlIHLDqWluaXRpYWxpc8OpIScsXG4gICAgICAgICAgICB0ZXh0OiAnTGUgbWVzc2FnZSBwYXIgZMOpZmF1dCBzZXJhIG1haW50ZW5hbnQgdXRpbGlzw6kuJyxcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcXVpbGwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwNC8xMC8yMDIwIDA2OjU4XG5cbmltcG9ydCAnLi4vY3NzL3F1aWxsLmNzcydcblxuaW1wb3J0IFF1aWxsIGZyb20gJ3F1aWxsL2NvcmUnXG5cbmltcG9ydCBUb29sYmFyIGZyb20gJ3F1aWxsL21vZHVsZXMvdG9vbGJhcidcbmltcG9ydCBTbm93IGZyb20gJ3F1aWxsL3RoZW1lcy9zbm93J1xuXG5pbXBvcnQgQm9sZCBmcm9tICdxdWlsbC9mb3JtYXRzL2JvbGQnXG5pbXBvcnQgSXRhbGljIGZyb20gJ3F1aWxsL2Zvcm1hdHMvaXRhbGljJ1xuaW1wb3J0IFVuZGVybGluZSBmcm9tICdxdWlsbC9mb3JtYXRzL3VuZGVybGluZSdcbmltcG9ydCBIZWFkZXIgZnJvbSAncXVpbGwvZm9ybWF0cy9oZWFkZXInXG5pbXBvcnQge0FsaWduU3R5bGV9IGZyb20gJ3F1aWxsL2Zvcm1hdHMvYWxpZ24nXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgTGlzdCwge0xpc3RJdGVtfSBmcm9tICdxdWlsbC9mb3JtYXRzL2xpc3QnXG5pbXBvcnQge1NpemVTdHlsZX0gZnJvbSAncXVpbGwvZm9ybWF0cy9zaXplJ1xuaW1wb3J0IHtDb2xvclN0eWxlfSBmcm9tICdxdWlsbC9mb3JtYXRzL2NvbG9yJ1xuaW1wb3J0IHtCYWNrZ3JvdW5kU3R5bGV9IGZyb20gJ3F1aWxsL2Zvcm1hdHMvYmFja2dyb3VuZCdcbmltcG9ydCBCbG9ja3F1b3RlIGZyb20gJ3F1aWxsL2Zvcm1hdHMvYmxvY2txdW90ZSdcblxuUXVpbGwucmVnaXN0ZXIoe1xuICAnbW9kdWxlcy90b29sYmFyJzogVG9vbGJhcixcbiAgJ3RoZW1lcy9zbm93JzogU25vdyxcbiAgJ2Zvcm1hdHMvYm9sZCc6IEJvbGQsXG4gICdmb3JtYXRzL2l0YWxpYyc6IEl0YWxpYyxcbiAgJ2Zvcm1hdHMvc2l6ZSc6IFNpemVTdHlsZSxcbiAgJ2Zvcm1hdHMvY29sb3InOiBDb2xvclN0eWxlLFxuICAnZm9ybWF0cy9iYWNrZ3JvdW5kJzogQmFja2dyb3VuZFN0eWxlLFxuICAnZm9ybWF0cy91bmRlcmxpbmUnOiBVbmRlcmxpbmUsXG4gICdmb3JtYXRzL2hlYWRlcic6IEhlYWRlcixcbiAgJ2Zvcm1hdHMvbGlzdCc6IExpc3QsXG4gICdmb3JtYXRzL2xpc3QtaXRlbSc6IExpc3RJdGVtLFxuICAnZm9ybWF0cy9hbGlnbic6IEFsaWduU3R5bGVcbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgUXVpbGxcblxubGV0IG9wdGlvbnMgPSB7XG4gIHRoZW1lOiAnc25vdycsXG4gIHRvb2xiYXI6ICdmdWxsJ1xufVxuXG5sZXQgdG9vbGJhckZ1bGxPcHRpb25zID0gW1xuICBbXG4gICAgeydoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdfSxcbiAgICB7J3NpemUnOiBbJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJ119XG4gIF0sXG4gIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10sICAgICAgICAvLyB0b2dnbGVkIGJ1dHRvbnNcbiAgW3snY29sb3InOiBbXX0sIHsnYmFja2dyb3VuZCc6IFtdfV0sICAgICAgICAgIC8vIGRyb3Bkb3duIHdpdGggZGVmYXVsdHMgZnJvbSB0aGVtZVxuICBbeydoZWFkZXInOiAxfSwgeydoZWFkZXInOiAyfV0sXG4gIFt7J2xpc3QnOiAnb3JkZXJlZCd9LCB7J2xpc3QnOiAnYnVsbGV0J30sIHsnaW5kZW50JzogJy0xJ30sIHsnaW5kZW50JzogJysxJ31dLFxuICBbJ2xpbmsnXSxcbiAgWydjbGVhbiddICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZm9ybWF0dGluZyBidXR0b25cbl1cblxuaWYgKG9wdGlvbnMudG9vbGJhciAhPT0gdW5kZWZpbmVkKSB7XG4gIHZhciB0b29sYmFyID0gb3B0aW9ucy50b29sYmFyLnRvTG93ZXJDYXNlKClcbiAgaWYgKHRvb2xiYXIgPT0gJ2Z1bGwnKSB7XG4gICAgb3B0aW9ucy5tb2R1bGVzID0ge1xuICAgICAgLy9zeW50YXg6ICd0cnVlJyxcbiAgICAgIHRvb2xiYXI6IHRvb2xiYXJGdWxsT3B0aW9uc1xuICAgIH1cbiAgfVxufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIGluaXRRdWlsbCgpXG59KVxuXG4kKGRvY3VtZW50KS5hamF4Q29tcGxldGUoZnVuY3Rpb24gKCkge1xuICBpbml0UXVpbGwoKVxufSlcblxuZnVuY3Rpb24gaW5pdFF1aWxsICgpIHtcbiAgbGV0IG9iaiA9ICQoJ1tkYXRhLXByb3ZpZGU9XCJxdWlsbFwiXScpXG4gIGlmIChvYmoubGVuZ3RoID09PSAxKSB7XG4gICAgbmV3IFF1aWxsKCQoJ1tkYXRhLXByb3ZpZGU9XCJxdWlsbFwiXScpWzBdLCBvcHRpb25zKVxuICB9XG59XG5cblxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3V0aWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxNi8xMC8yMDIwIDE0OjU0XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5sZXQgJHN0b3BDYXRjaEVudGVyID0gZmFsc2VcblxuZnVuY3Rpb24gcmVhZFVybE1lbnUgKCR1cmwpIHtcbiAgY29uc3QgJGVsdCA9ICR1cmwuc3BsaXQoJy8nKVxuICBsZXQgJGZpcnN0RWx0ID0gMlxuICBpZiAoJGVsdFsxXSA9PT0gJ2luZGV4LnBocCcpIHtcbiAgICBpZiAoJGVsdC5sZW5ndGggPiAxKSB7XG4gICAgICAkZmlyc3RFbHQgPSAzXG4gICAgfVxuICB9XG5cbiAgaWYgKCRlbHRbJGZpcnN0RWx0XSA9PT0gJ3N1cGVyLWFkbWluaXN0cmF0aW9uJykge1xuICAgICRmaXJzdEVsdCA9ICRmaXJzdEVsdCArIDFcbiAgfVxuXG4gIGlmICgkZWx0WyRlbHQubGVuZ3RoIC0gMV0gPT09ICcnKSB7XG4gICAgJGVsdC5wb3AoKVxuICB9XG5cbiAgJCgnLm1lbnUtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAkKCcjbWVudS0nICsgJGVsdFskZmlyc3RFbHRdKS5hZGRDbGFzcygnYWN0aXZlJylcbn1cblxuLy9jb2xvcmlzZSBsZSBib24gbWVudVxucmVhZFVybE1lbnUoJChsb2NhdGlvbikuYXR0cigncGF0aG5hbWUnKSlcblxuU3dhbC5taXhpbih7XG4gIGN1c3RvbUNsYXNzOiB7XG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gIH0sXG4gIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxufSlcbi8vcG9wIHVwIGRlIGNvbmZpcm1hdGlvbiBkZSBzdXBwcmVzc2lvblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdXBwcmltZXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJylcbiAgY29uc3QgY3NyZiA9ICQodGhpcykuZGF0YSgnY3NyZicpXG4gIFN3YWwuZmlyZSh7XG4gICAgdGl0bGU6ICdDb25maXJtZXIgbGEgc3VwcHJlc3Npb24gPycsXG4gICAgdGV4dDogJ0xcXCdvcMOpcmF0aW9uIG5lIHBvdXJyYSBwYXMgw6p0cmUgYW5udWzDqWUuJyxcbiAgICBpY29uOiAnd2FybmluZycsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBqZSBjb25maXJtZScsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlcicsXG4gICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgfSxcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgX3Rva2VuOiBjc3JmXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGlmIChpZC5oYXNPd25Qcm9wZXJ0eSgncmVkaXJlY3QnKSAmJiBpZC5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBpZC51cmxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy90LnJvdyhcIiNsaWduZV9cIitpZCkucmVtb3ZlKCkuZHJhdygpOyA9PCBkYXRhdHRhYmxlIHRvZG86IHJlbW92ZSBsaWduZSBzaSBkYXRhdGFibGUgPz8gcHJvYmzDqG1lIGRhbnMgYWRtPnBlcnNvbm5lbFxuICAgICAgICAgICAgJCgnI2xpZ25lXycgKyBpZCkuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgICAgICAgICAgYWRkQ2FsbG91dCgnU3VwcHJlc3Npb24gZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqHMnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogJ1N1cHByaW3DqSEnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTFxcJ2VucmVnaXN0cmVtZW50IGEgw6l0w6kgc3VwcHJpbcOpLicsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYWxsb3V0IChtZXNzYWdlLCBsYWJlbCkge1xuICBjb25zb2xlLmxvZygnY2FsbG91dCcpXG4gIHZhciB0cmFuc2xhdGUgPSBuZXcgQXJyYXkoKVxuICB0cmFuc2xhdGVbJ3N1Y2Nlc3MnXSA9ICdTdWNjw6hzJ1xuICB0cmFuc2xhdGVbJ2RhbmdlciddID0gJ0VycmV1cidcbiAgdHJhbnNsYXRlWyd3YXJuaW5nJ10gPSAnQXR0ZW50aW9uJ1xuXG4gIGNvbnN0IGh0bWwgPSAnPGRpdiBjbGFzcz1cImNhbGxvdXQgY2FsbG91dC0nICsgbGFiZWwgKyAnXCIgcm9sZT1cImFsZXJ0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImNhbGxvdXRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8aDU+JyArIHRyYW5zbGF0ZVtsYWJlbF0gKyAnPC9oNT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8cD4nICsgbWVzc2FnZSArICc8L3A+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4nXG5cbiAgJCgnI21haW5Db250ZW50JykucHJlcGVuZChodG1sKS5zbGlkZURvd24oJ3Nsb3cnKVxuICAkKCcuY2FsbG91dCcpLmRlbGF5KDUwMDApLnNsaWRlVXAoJ3Nsb3cnKVxufVxuXG4vL0VkaXRhYmxlXG5sZXQgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAnJ1xubGV0IHR5cGUgPSAndGV4dCdcbmxldCBFZGl0T25MaW5lID0gZmFsc2VcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5teWVkaXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAkKHRoaXMpXG4gIGxldCBodG1sID0gJydcbiAgRWRpdE9uTGluZSA9IHRydWVcbiAgaWYgKHR5cGVvZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykpICE9PSAndW5kZWZpbmVkJykge1xuICAgIHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICB9XG5cbiAgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAnc2VsZWN0Jykge1xuICAgIC8vdG9kbzogQSBmaW5hbGlzZXJcbiAgfSBlbHNlIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3RleHRhcmVhJykge1xuICAgIGh0bWwgPSBnZW5lcmVUZXh0QXJlYSgkKHRoaXMpKVxuICB9IGVsc2Uge1xuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSkge1xuICAgIHVwZGF0ZURhdGEoKVxuICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtdmFsaWRlJywgZnVuY3Rpb24gKGUpIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gZmFsc2VcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHVwZGF0ZURhdGEoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSAmJiBlLndoaWNoID09PSAxMykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHVwZGF0ZURhdGEoKVxuICB9XG5cbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSAmJiBlLndoaWNoID09PSAyNykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG15RWRpdEluaXRpYWxDb250ZW50Lmh0bWwodmFsKVxuICAgICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gICAgICBFZGl0T25MaW5lID0gZmFsc2VcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZVRleHRBcmVhICgkb2JqKSB7XG4gICRzdG9wQ2F0Y2hFbnRlciA9IHRydWVcbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJteWVkaXQtaW5wdXRcIj4nICsgJG9iai5odG1sKCkudHJpbSgpICsgJzwvdGV4dGFyZWE+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxcbicgK1xuICAgICcgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzcy1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlci1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+J1xufVxuXG5mdW5jdGlvbiBnZW5lcmVJbnB1dCAoJG9iaikge1xuXG4gIHJldHVybiAnPGRpdiBpZD1cIm15RWRpdC16b25lXCIgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm15ZWRpdC1pbnB1dFwiIHZhbHVlPVwiJyArICRvYmouaHRtbCgpLnRyaW0oKSArICdcIiA+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxcbicgK1xuICAgICcgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzcy1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlci1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+J1xufVxuXG5qUXVlcnkuZm4uZGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSkgfHwgZGVmXG59XG5cbmpRdWVyeS5mbi5oYXNEYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmhhc0F0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSlcbn1cblxuZnVuY3Rpb24gZGF0YVRvT3B0aW9uIChuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHhbMV0udG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YU9wdGlvbnMgKGVsLCBjYXN0TGlzdCkge1xuICB2YXIgb3B0aW9ucyA9IHt9XG4gICQuZWFjaCgkKGVsKS5kYXRhKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cbiAgICBrZXkgPSBkYXRhVG9PcHRpb24oa2V5KVxuXG4gICAgLy8gRXNjYXBlIGRhdGEtcHJvdmlkZVxuICAgIGlmIChrZXkgPT0gJ3Byb3ZpZGUnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoY2FzdExpc3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgdHlwZSA9IGNhc3RMaXN0W2tleV1cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdib29sJzpcbiAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdudW0nOlxuICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJywnKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnNba2V5XSA9IHZhbHVlXG4gIH0pXG5cbiAgcmV0dXJuIG9wdGlvbnNcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
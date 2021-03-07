(self["webpackChunk"] = self["webpackChunk"] || []).push([["adm.stage_courrier"],{

/***/ "./assets/js/pages/adm.stage_courrier.js":
/*!***********************************************!*\
  !*** ./assets/js/pages/adm.stage_courrier.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  return new _quill__WEBPACK_IMPORTED_MODULE_0__.default('#text_' + $id, options);
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
  jquery__WEBPACK_IMPORTED_MODULE_2___default().ajax({
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
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Modèle enregistré !', 'success');
    }
  });
});
jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.resetDefaut', function (e) {
  e.preventDefault();
  var etat = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('type');
  var periode = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).data('periode');
  sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
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
      jquery__WEBPACK_IMPORTED_MODULE_2___default().ajax({
        url: Routing.generate('administration_stage_periode_courrier_reset', {
          id: periode,
          etat: etat
        }),
        type: 'POST',
        success: function success() {
          tabEd['ed_' + etat].setText('');
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Suppression effectuée avec succès, retour au message par défaut', 'success');
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
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
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
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
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Erreur lors de la tentative de suppression', 'danger');
        }
      });
    } else if ( // Read more about handling dismissals
    result.dismiss === 'cancel') {
      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_quill_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/quill.css */ "./assets/css/quill.css");
/* harmony import */ var quill_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/core */ "./node_modules/quill/core.js");
/* harmony import */ var quill_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill/ui/icons */ "./node_modules/quill/ui/icons.js");
/* harmony import */ var quill_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var quill_modules_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill/modules/toolbar */ "./node_modules/quill/modules/toolbar.js");
/* harmony import */ var quill_themes_snow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill/themes/snow */ "./node_modules/quill/themes/snow.js");
/* harmony import */ var quill_formats_bold__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill/formats/bold */ "./node_modules/quill/formats/bold.js");
/* harmony import */ var quill_formats_italic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! quill/formats/italic */ "./node_modules/quill/formats/italic.js");
/* harmony import */ var quill_formats_underline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! quill/formats/underline */ "./node_modules/quill/formats/underline.js");
/* harmony import */ var quill_formats_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! quill/formats/header */ "./node_modules/quill/formats/header.js");
/* harmony import */ var quill_formats_align__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! quill/formats/align */ "./node_modules/quill/formats/align.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var quill_formats_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! quill/formats/list */ "./node_modules/quill/formats/list.js");
/* harmony import */ var quill_formats_size__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! quill/formats/size */ "./node_modules/quill/formats/size.js");
/* harmony import */ var quill_formats_color__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! quill/formats/color */ "./node_modules/quill/formats/color.js");
/* harmony import */ var quill_formats_background__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! quill/formats/background */ "./node_modules/quill/formats/background.js");
/* harmony import */ var quill_formats_blockquote__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! quill/formats/blockquote */ "./node_modules/quill/formats/blockquote.js");
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/quill.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/02/2021 18:22
















quill_core__WEBPACK_IMPORTED_MODULE_1__.default.register({
  'modules/toolbar': quill_modules_toolbar__WEBPACK_IMPORTED_MODULE_3__.default,
  'themes/snow': quill_themes_snow__WEBPACK_IMPORTED_MODULE_4__.default,
  'formats/bold': quill_formats_bold__WEBPACK_IMPORTED_MODULE_5__.default,
  'formats/italic': quill_formats_italic__WEBPACK_IMPORTED_MODULE_6__.default,
  'formats/size': quill_formats_size__WEBPACK_IMPORTED_MODULE_12__.SizeStyle,
  'formats/color': quill_formats_color__WEBPACK_IMPORTED_MODULE_13__.ColorStyle,
  'formats/background': quill_formats_background__WEBPACK_IMPORTED_MODULE_14__.BackgroundStyle,
  'formats/underline': quill_formats_underline__WEBPACK_IMPORTED_MODULE_7__.default,
  'formats/header': quill_formats_header__WEBPACK_IMPORTED_MODULE_8__.default,
  'formats/list': quill_formats_list__WEBPACK_IMPORTED_MODULE_11__.default,
  'formats/list-item': quill_formats_list__WEBPACK_IMPORTED_MODULE_11__.ListItem,
  'formats/align': quill_formats_align__WEBPACK_IMPORTED_MODULE_9__.AlignStyle,
  'ui/icons': (quill_ui_icons__WEBPACK_IMPORTED_MODULE_2___default())
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quill_core__WEBPACK_IMPORTED_MODULE_1__.default);
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

jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).ready(function () {
  initQuill();
});
jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).ajaxComplete(function () {
  initQuill();
});

function initQuill() {
  var obj = jquery__WEBPACK_IMPORTED_MODULE_10___default()('[data-provide="quill"]');

  if (obj.length === 1) {
    new quill_core__WEBPACK_IMPORTED_MODULE_1__.default(jquery__WEBPACK_IMPORTED_MODULE_10___default()('[data-provide="quill"]')[0], options);
  }
}

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

/***/ "./assets/css/quill.css":
/*!******************************!*\
  !*** ./assets/css/quill.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
0,[["./assets/js/pages/adm.stage_courrier.js","runtime","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_inherit-if-required_js-node_modules_core-js_internals_-f30b81","vendors-node_modules_core-js_modules_es_number_constructor_js-node_modules_core-js_modules_es-13932d","vendors-node_modules_quill_core_js-node_modules_quill_formats_blockquote_js-node_modules_quil-d001d1"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnN0YWdlX2NvdXJyaWVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9xdWlsbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3F1aWxsLmNzcz8xN2NmIl0sIm5hbWVzIjpbImVkX2NvdXJyaWVyIiwiZWRfRVRBVF9TVEFHRV9BVVRPUklTRSIsImVkX0VUQVRfU1RBR0VfREVQT1NFIiwiZWRfRVRBVF9TVEFHRV9WQUxJREUiLCJlZF9FVEFUX1NUQUdFX1JFRlVTIiwiZWRfRVRBVF9TVEFHRV9JTkNPTVBMRVQiLCJlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fSU1QUklNRUUiLCJlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fRU5WT1lFRSIsImVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRSIsInRhYkVkIiwibG9hZFF1aWxsIiwiJGlkIiwib3B0aW9ucyIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiY29udGFpbmVyIiwiaGFuZGxlcnMiLCJ2YWx1ZSIsImN1cnNvclBvc2l0aW9uIiwicXVpbGwiLCJnZXRTZWxlY3Rpb24iLCJpbmRleCIsImluc2VydFRleHQiLCJzZXRTZWxlY3Rpb24iLCJsZW5ndGgiLCJwbGFjZWhvbGRlciIsInRoZW1lIiwiUXVpbGwiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiZXRhdCIsImRhdGEiLCJvbmdsZXQiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJ1dWlkIiwibWFpbCIsIm1ldGhvZCIsIm1lc3NhZ2UiLCJyb290IiwiaW5uZXJIVE1MIiwic3VqZXQiLCJ2YWwiLCJzdWNjZXNzIiwiYWRkQ2FsbG91dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBlcmlvZGUiLCJTd2FsIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGhlbiIsInJlc3VsdCIsImlkIiwidHlwZSIsInNldFRleHQiLCJlcnJvciIsInhociIsImFqYXhPcHRpb25zIiwidGhyb3duRXJyb3IiLCJkaXNtaXNzIiwiVG9vbGJhciIsIlNub3ciLCJCb2xkIiwiSXRhbGljIiwiU2l6ZVN0eWxlIiwiQ29sb3JTdHlsZSIsIkJhY2tncm91bmRTdHlsZSIsIlVuZGVybGluZSIsIkhlYWRlciIsIkxpc3QiLCJMaXN0SXRlbSIsIkFsaWduU3R5bGUiLCJJY29ucyIsInRvb2xiYXJGdWxsT3B0aW9ucyIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiaW5pdFF1aWxsIiwiYWpheENvbXBsZXRlIiwib2JqIiwiJHN0b3BDYXRjaEVudGVyIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwicG9wIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImxvY2F0aW9uIiwiYXR0ciIsImNzcmYiLCJfdG9rZW4iLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJjbG9zZXN0IiwicmVtb3ZlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJodG1sIiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZVRleHRBcmVhIiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ3aGljaCIsImZpZWxkIiwiJG9iaiIsInRyaW0iLCJqUXVlcnkiLCJmbiIsImRhdGFBdHRyIiwibmFtZSIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRpb25zIiwiZWwiLCJjYXN0TGlzdCIsImtleSIsIkJvb2xlYW4iLCJOdW1iZXIiLCJpbnZhbGlkQ2hhbXBzIiwidmFsaWRDaGFtcHMiLCJjb21wbGV0ZUNoYW1wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFdBQUosRUFBaUJDLHNCQUFqQixFQUF5Q0Msb0JBQXpDLEVBQStEQyxvQkFBL0QsRUFBcUZDLG1CQUFyRixFQUNFQyx1QkFERixFQUVFQyxpQ0FGRixFQUVxQ0MsZ0NBRnJDLEVBRXVFQyw4QkFGdkU7QUFJQSxJQUFJQyxLQUFLLEdBQUcsRUFBWjs7QUFFQSxTQUFTQyxTQUFULENBQW9CQyxHQUFwQixFQUF5QjtBQUN2QixNQUFNQyxPQUFPLEdBQUc7QUFDZEMsV0FBTyxFQUFFO0FBQ1BDLGFBQU8sRUFBRTtBQUNQQyxpQkFBUyxFQUFFLGNBQWNKLEdBRGxCO0FBRVBLLGdCQUFRLEVBQUU7QUFDUiwyQkFBaUIsdUJBQVVDLEtBQVYsRUFBaUI7QUFDaEMsZ0JBQUlBLEtBQUosRUFBVztBQUNULGtCQUFNQyxjQUFjLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxZQUFYLEdBQTBCQyxLQUFqRDtBQUNBLG1CQUFLRixLQUFMLENBQVdHLFVBQVgsQ0FBc0JKLGNBQXRCLEVBQXNDRCxLQUF0QztBQUNBLG1CQUFLRSxLQUFMLENBQVdJLFlBQVgsQ0FBd0JMLGNBQWMsR0FBR0QsS0FBSyxDQUFDTyxNQUEvQztBQUNEO0FBQ0Y7QUFQTztBQUZIO0FBREYsS0FESztBQWVkQyxlQUFXLEVBQUUsZ0ZBZkM7QUFnQmRDLFNBQUssRUFBRTtBQWhCTyxHQUFoQjtBQWtCQSxTQUFPLElBQUlDLDJDQUFKLENBQVUsV0FBV2hCLEdBQXJCLEVBQTBCQyxPQUExQixDQUFQO0FBQ0Q7O0FB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O0FBZ0JEOztBQUVEckYsV0FBTyxDQUFDdUksR0FBRCxDQUFQLEdBQWVsSSxLQUFmO0FBQ0QsR0E5QkQ7QUFnQ0EsU0FBT0wsT0FBUDtBQUNEO0FBRU0sU0FBUzBJLGFBQVQsQ0FBd0JwQixJQUF4QixFQUE4QjtBQUNuQ0EsTUFBSSxDQUFDOUIsV0FBTCxDQUFpQixVQUFqQixFQUE2QkMsUUFBN0IsQ0FBc0MsWUFBdEM7QUFDRDtBQUVNLFNBQVNrRCxXQUFULENBQXNCckIsSUFBdEIsRUFBNEI7QUFDakNBLE1BQUksQ0FBQzlCLFdBQUwsQ0FBaUIsWUFBakIsRUFBK0JDLFFBQS9CLENBQXdDLFVBQXhDO0FBQ0Q7QUFFTSxTQUFTbUQsY0FBVCxDQUF5QnRCLElBQXpCLEVBQStCO0FBQ3BDQSxNQUFJLENBQUM5QixXQUFMLENBQWlCLFlBQWpCLEVBQStCQSxXQUEvQixDQUEyQyxVQUEzQztBQUNELEM7Ozs7Ozs7Ozs7OztBQzVTRCIsImZpbGUiOiJhZG0uc3RhZ2VfY291cnJpZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLnN0YWdlX2NvdXJyaWVyLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTkvMTAvMjAyMCAxODowM1xuXG5pbXBvcnQgUXVpbGwgZnJvbSAnLi4vcXVpbGwnXG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxubGV0IGVkX2NvdXJyaWVyLCBlZF9FVEFUX1NUQUdFX0FVVE9SSVNFLCBlZF9FVEFUX1NUQUdFX0RFUE9TRSwgZWRfRVRBVF9TVEFHRV9WQUxJREUsIGVkX0VUQVRfU1RBR0VfUkVGVVMsXG4gIGVkX0VUQVRfU1RBR0VfSU5DT01QTEVULFxuICBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fSU1QUklNRUUsIGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9FTlZPWUVFLCBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fUkVDVUVcblxubGV0IHRhYkVkID0ge31cblxuZnVuY3Rpb24gbG9hZFF1aWxsICgkaWQpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtb2R1bGVzOiB7XG4gICAgICB0b29sYmFyOiB7XG4gICAgICAgIGNvbnRhaW5lcjogJyN0b29sYmFyXycgKyAkaWQsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgJ2N1c3RvbXNmaWVsZHMnOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMucXVpbGwuZ2V0U2VsZWN0aW9uKCkuaW5kZXhcbiAgICAgICAgICAgICAgdGhpcy5xdWlsbC5pbnNlcnRUZXh0KGN1cnNvclBvc2l0aW9uLCB2YWx1ZSlcbiAgICAgICAgICAgICAgdGhpcy5xdWlsbC5zZXRTZWxlY3Rpb24oY3Vyc29yUG9zaXRpb24gKyB2YWx1ZS5sZW5ndGgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjogJ0NvbXBvc2V6IGxlIGNvcnBzIGR1IG1lc3NhZ2UuLi4gTGFpc3NlciB2aWRlIHBvdXIgdXRpbGlzZXIgbGUgbWFpbCBwYXIgZMOpZmF1dC4nLFxuICAgIHRoZW1lOiAnc25vdydcbiAgfVxuICByZXR1cm4gbmV3IFF1aWxsKCcjdGV4dF8nICsgJGlkLCBvcHRpb25zKVxufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIGVkX0VUQVRfU1RBR0VfQVVUT1JJU0UgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfQVVUT1JJU0UnKVxuICBlZF9FVEFUX1NUQUdFX0RFUE9TRSA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9ERVBPU0UnKVxuICBlZF9FVEFUX1NUQUdFX1ZBTElERSA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9WQUxJREUnKVxuICBlZF9FVEFUX1NUQUdFX1JFRlVTID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX1JFRlVTJylcbiAgZWRfRVRBVF9TVEFHRV9JTkNPTVBMRVQgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfSU5DT01QTEVUJylcbiAgZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUVFID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX0NPTlZFTlRJT05fSU1QUklNRUUnKVxuICBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fRU5WT1lFRSA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9DT05WRU5USU9OX0VOVk9ZRUUnKVxuICBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fUkVDVUUgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRScpXG4gIGVkX2NvdXJyaWVyID0gbG9hZFF1aWxsKCdjb3VycmllcicpXG5cbiAgdGFiRWQgPSB7XG4gICAgJ2VkX0VUQVRfU1RBR0VfQVVUT1JJU0UnOiBlZF9FVEFUX1NUQUdFX0FVVE9SSVNFLFxuICAgICdlZF9FVEFUX1NUQUdFX0RFUE9TRSc6IGVkX0VUQVRfU1RBR0VfREVQT1NFLFxuICAgICdlZF9FVEFUX1NUQUdFX1ZBTElERSc6IGVkX0VUQVRfU1RBR0VfVkFMSURFLFxuICAgICdlZF9FVEFUX1NUQUdFX1JFRlVTJzogZWRfRVRBVF9TVEFHRV9SRUZVUyxcbiAgICAnZWRfRVRBVF9TVEFHRV9JTkNPTVBMRVQnOiBlZF9FVEFUX1NUQUdFX0lOQ09NUExFVCxcbiAgICAnZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUVFJzogZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUVFLFxuICAgICdlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fRU5WT1lFRSc6IGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9FTlZPWUVFLFxuICAgICdlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fUkVDVUUnOiBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fUkVDVUUsXG4gICAgJ2VkX2NvdXJyaWVyJzogZWRfY291cnJpZXJcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5lbnJlZ2lzdHJlTW9kZWxlTWFpbCcsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZXRhdCA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIGNvbnN0IG9uZ2xldCA9ICQodGhpcykuZGF0YSgnZWQnKVxuXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9zdGFnZV9wZXJpb2RlX2NvdXJyaWVyX3NhdXZlZ2FyZGVfbW9kZWxlJywge1xuICAgICAgdXVpZDogJCh0aGlzKS5kYXRhKCdwZXJpb2RlJyksXG4gICAgICBtYWlsOiBldGF0XG4gICAgfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgbWVzc2FnZTogdGFiRWRbJ2VkXycgKyBvbmdsZXRdLnJvb3QuaW5uZXJIVE1MLFxuICAgICAgc3VqZXQ6ICQoJyNzdWpldF8nICsgZXRhdCkudmFsKClcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ01vZMOobGUgZW5yZWdpc3Ryw6kgIScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnJlc2V0RGVmYXV0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGxldCBldGF0ID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgbGV0IHBlcmlvZGUgPSAkKHRoaXMpLmRhdGEoJ3BlcmlvZGUnKVxuXG4gIFN3YWwuZmlyZSh7XG4gICAgdGl0bGU6ICdDb25maXJtZXIgbGUgcmV0b3VyIGF1IG1lc3NhZ2UgcGFyIGTDqWZhdXQgPycsXG4gICAgdGV4dDogJ0xcXCdvcMOpcmF0aW9uIG5lIHBvdXJyYSBwYXMgw6p0cmUgYW5udWzDqWUuJyxcbiAgICBpY29uOiAnd2FybmluZycsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBqZSBjb25maXJtZScsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlcicsXG4gICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgfSxcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9zdGFnZV9wZXJpb2RlX2NvdXJyaWVyX3Jlc2V0Jywge2lkOiBwZXJpb2RlLCBldGF0OiBldGF0fSksXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRhYkVkWydlZF8nICsgZXRhdF0uc2V0VGV4dCgnJylcbiAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocywgcmV0b3VyIGF1IG1lc3NhZ2UgcGFyIGTDqWZhdXQnLCAnc3VjY2VzcycpXG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnTWVzc2FnZSByw6lpbml0aWFsaXPDqSEnLFxuICAgICAgICAgICAgdGV4dDogJ0xlIG1lc3NhZ2UgcGFyIGTDqWZhdXQgc2VyYSBtYWludGVuYW50IHV0aWxpc8OpLicsXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24hJyxcbiAgICAgICAgICAgIHRleHQ6ICdNZXJjaSBkZSByZW5vdXZlbGVyIGxcXCdvcMOpcmF0aW9uJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXG4gICAgICByZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCdcbiAgICApIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQ2FuY2VsbGVkJyxcbiAgICAgICAgdGV4dDogJ09LISBUb3V0IGVzdCBjb21tZSBhdmFudCAhJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIxLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3F1aWxsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTkvMDIvMjAyMSAxODoyMlxuXG5pbXBvcnQgJy4uL2Nzcy9xdWlsbC5jc3MnXG5cbmltcG9ydCBRdWlsbCBmcm9tICdxdWlsbC9jb3JlJ1xuXG5pbXBvcnQgSWNvbnMgZnJvbSAncXVpbGwvdWkvaWNvbnMnXG5pbXBvcnQgVG9vbGJhciBmcm9tICdxdWlsbC9tb2R1bGVzL3Rvb2xiYXInXG5pbXBvcnQgU25vdyBmcm9tICdxdWlsbC90aGVtZXMvc25vdydcblxuaW1wb3J0IEJvbGQgZnJvbSAncXVpbGwvZm9ybWF0cy9ib2xkJ1xuaW1wb3J0IEl0YWxpYyBmcm9tICdxdWlsbC9mb3JtYXRzL2l0YWxpYydcbmltcG9ydCBVbmRlcmxpbmUgZnJvbSAncXVpbGwvZm9ybWF0cy91bmRlcmxpbmUnXG5pbXBvcnQgSGVhZGVyIGZyb20gJ3F1aWxsL2Zvcm1hdHMvaGVhZGVyJ1xuaW1wb3J0IHtBbGlnblN0eWxlfSBmcm9tICdxdWlsbC9mb3JtYXRzL2FsaWduJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IExpc3QsIHtMaXN0SXRlbX0gZnJvbSAncXVpbGwvZm9ybWF0cy9saXN0J1xuaW1wb3J0IHtTaXplU3R5bGV9IGZyb20gJ3F1aWxsL2Zvcm1hdHMvc2l6ZSdcbmltcG9ydCB7Q29sb3JTdHlsZX0gZnJvbSAncXVpbGwvZm9ybWF0cy9jb2xvcidcbmltcG9ydCB7QmFja2dyb3VuZFN0eWxlfSBmcm9tICdxdWlsbC9mb3JtYXRzL2JhY2tncm91bmQnXG5pbXBvcnQgQmxvY2txdW90ZSBmcm9tICdxdWlsbC9mb3JtYXRzL2Jsb2NrcXVvdGUnXG5cblF1aWxsLnJlZ2lzdGVyKHtcbiAgJ21vZHVsZXMvdG9vbGJhcic6IFRvb2xiYXIsXG4gICd0aGVtZXMvc25vdyc6IFNub3csXG4gICdmb3JtYXRzL2JvbGQnOiBCb2xkLFxuICAnZm9ybWF0cy9pdGFsaWMnOiBJdGFsaWMsXG4gICdmb3JtYXRzL3NpemUnOiBTaXplU3R5bGUsXG4gICdmb3JtYXRzL2NvbG9yJzogQ29sb3JTdHlsZSxcbiAgJ2Zvcm1hdHMvYmFja2dyb3VuZCc6IEJhY2tncm91bmRTdHlsZSxcbiAgJ2Zvcm1hdHMvdW5kZXJsaW5lJzogVW5kZXJsaW5lLFxuICAnZm9ybWF0cy9oZWFkZXInOiBIZWFkZXIsXG4gICdmb3JtYXRzL2xpc3QnOiBMaXN0LFxuICAnZm9ybWF0cy9saXN0LWl0ZW0nOiBMaXN0SXRlbSxcbiAgJ2Zvcm1hdHMvYWxpZ24nOiBBbGlnblN0eWxlLFxuICAndWkvaWNvbnMnOiBJY29uc1xufSlcblxuXG5leHBvcnQgZGVmYXVsdCBRdWlsbFxuXG5sZXQgb3B0aW9ucyA9IHtcbiAgdGhlbWU6ICdzbm93JyxcbiAgdG9vbGJhcjogJ2Z1bGwnXG59XG5cbmxldCB0b29sYmFyRnVsbE9wdGlvbnMgPSBbXG4gIFtcbiAgICB7J2hlYWRlcic6IFsxLCAyLCAzLCA0LCA1LCA2LCBmYWxzZV19LFxuICAgIHsnc2l6ZSc6IFsnc21hbGwnLCBmYWxzZSwgJ2xhcmdlJywgJ2h1Z2UnXX1cbiAgXSxcbiAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXSwgICAgICAgIC8vIHRvZ2dsZWQgYnV0dG9uc1xuICBbeydjb2xvcic6IFtdfSwgeydiYWNrZ3JvdW5kJzogW119XSwgICAgICAgICAgLy8gZHJvcGRvd24gd2l0aCBkZWZhdWx0cyBmcm9tIHRoZW1lXG4gIFt7J2hlYWRlcic6IDF9LCB7J2hlYWRlcic6IDJ9XSxcbiAgW3snbGlzdCc6ICdvcmRlcmVkJ30sIHsnbGlzdCc6ICdidWxsZXQnfSwgeydpbmRlbnQnOiAnLTEnfSwgeydpbmRlbnQnOiAnKzEnfV0sXG4gIFsnbGluayddLFxuICBbJ2NsZWFuJ10gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmb3JtYXR0aW5nIGJ1dHRvblxuXVxuXG5pZiAob3B0aW9ucy50b29sYmFyICE9PSB1bmRlZmluZWQpIHtcbiAgdmFyIHRvb2xiYXIgPSBvcHRpb25zLnRvb2xiYXIudG9Mb3dlckNhc2UoKVxuICBpZiAodG9vbGJhciA9PSAnZnVsbCcpIHtcbiAgICBvcHRpb25zLm1vZHVsZXMgPSB7XG4gICAgICAvL3N5bnRheDogJ3RydWUnLFxuICAgICAgdG9vbGJhcjogdG9vbGJhckZ1bGxPcHRpb25zXG4gICAgfVxuICB9XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgaW5pdFF1aWxsKClcbn0pXG5cbiQoZG9jdW1lbnQpLmFqYXhDb21wbGV0ZShmdW5jdGlvbiAoKSB7XG4gIGluaXRRdWlsbCgpXG59KVxuXG5mdW5jdGlvbiBpbml0UXVpbGwgKCkge1xuICBsZXQgb2JqID0gJCgnW2RhdGEtcHJvdmlkZT1cInF1aWxsXCJdJylcbiAgaWYgKG9iai5sZW5ndGggPT09IDEpIHtcbiAgICBuZXcgUXVpbGwoJCgnW2RhdGEtcHJvdmlkZT1cInF1aWxsXCJdJylbMF0sIG9wdGlvbnMpXG4gIH1cbn1cblxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDAxLzEyLzIwMjAgMjI6MDRcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmxldCAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3Qucm93KFwiI2xpZ25lX1wiK2lkKS5yZW1vdmUoKS5kcmF3KCk7ID08IGRhdGF0dGFibGUgdG9kbzogcmVtb3ZlIGxpZ25lIHNpIGRhdGF0YWJsZSA/PyBwcm9ibMOobWUgZGFucyBhZG0+cGVyc29ubmVsXG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2UgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAndGV4dGFyZWEnKSB7XG4gICAgaHRtbCA9IGdlbmVyZVRleHRBcmVhKCQodGhpcykpXG4gIH0gZWxzZSB7XG4gICAgaHRtbCA9IGdlbmVyZUlucHV0KCQodGhpcykpXG4gIH1cbiAgJCh0aGlzKS5yZXBsYWNlV2l0aChodG1sKVxuICAkKCcjbXllZGl0LWlucHV0JykuZm9jdXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNteWVkaXQtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDI3KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICAgIEVkaXRPbkxpbmUgPSBmYWxzZVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlVGV4dEFyZWEgKCRvYmopIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gdHJ1ZVxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI1XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm15ZWRpdC1pbnB1dFwiPicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnPC90ZXh0YXJlYT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG5cbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCIgdmFsdWU9XCInICsgJG9iai5odG1sKCkudHJpbSgpICsgJ1wiID5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZENoYW1wcyAoJG9iaikge1xuICAkb2JqLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkQ2hhbXBzICgkb2JqKSB7XG4gICRvYmoucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5hZGRDbGFzcygnaXMtdmFsaWQnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxldGVDaGFtcHMgKCRvYmopIHtcbiAgJG9iai5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9
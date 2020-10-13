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
// @lastUpdate 28/09/2020 11:43




var ed_courrier, ed_ETAT_STAGE_AUTORISE, ed_ETAT_STAGE_DEPOSE, ed_ETAT_STAGE_VALIDE, ed_ETAT_STAGE_REFUS, ed_ETAT_STAGE_INCOMPLET, ed_ETAT_STAGE_CONVENTION_IMPRIME, ed_ETAT_STAGE_CONVENTION_ENVOYEE, ed_ETAT_STAGE_CONVENTION_RECUE;
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
  ed_ETAT_STAGE_CONVENTION_IMPRIME = loadQuill('ETAT_STAGE_CONVENTION_IMPRIME');
  ed_ETAT_STAGE_CONVENTION_ENVOYEE = loadQuill('ETAT_STAGE_CONVENTION_ENVOYEE');
  ed_ETAT_STAGE_CONVENTION_RECUE = loadQuill('ETAT_STAGE_CONVENTION_RECUE');
  ed_courrier = loadQuill('courrier');
  tabEd = {
    'ed_ETAT_STAGE_AUTORISE': ed_ETAT_STAGE_AUTORISE,
    'ed_ETAT_STAGE_DEPOSE': ed_ETAT_STAGE_DEPOSE,
    'ed_ETAT_STAGE_VALIDE': ed_ETAT_STAGE_VALIDE,
    'ed_ETAT_STAGE_REFUS': ed_ETAT_STAGE_REFUS,
    'ed_ETAT_STAGE_INCOMPLET': ed_ETAT_STAGE_INCOMPLET,
    'ed_ETAT_STAGE_CONVENTION_IMPRIME': ed_ETAT_STAGE_CONVENTION_IMPRIME,
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
// @lastUpdate 11/10/2020 08:04



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
  } else {
    html = genereInput(jquery__WEBPACK_IMPORTED_MODULE_5___default()(this));
  }

  jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).replaceWith(html);
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myedit-input').focus();
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keyup', '#myedit-input', function (e) {
  if (e.keyCode === 13) {
    updateData();
  } else if (e.keyCode === 27) {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
  }
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '#myedit-valide', function (e) {
  e.preventDefault();
  updateData();
});
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keypress', function (e) {
  if (EditOnLine === true && e.which === 13) {
    e.preventDefault();
    updateData();
  }

  if (EditOnLine === true && e.which === 27) {
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

function genereInput($obj) {
  var $html = '<div id="myEdit-zone"><input type="text" value="' + $obj.html().trim() + '" id="myedit-input" />';
  $html = $html + '<button class="btn btn-square btn-sm btn-success btn-outline" id="myedit-valide"><i class="fas fa-check"></i></button>';
  $html = $html + '<button class="btn btn-square btn-sm btn-danger btn-outline" id="myedit-annule"><i class="fas fa-times"></i></button></div>';
  return $html;
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

},[["./assets/js/pages/adm.stage_courrier.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~08e24351","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7c3f1a6f","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~a14823c0","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~38bcb1f7","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~31cc1171","vendors~adm.stage_courrier~quill"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3F1aWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnN0YWdlX2NvdXJyaWVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9xdWlsbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC5qcyJdLCJuYW1lcyI6WyJlZF9jb3VycmllciIsImVkX0VUQVRfU1RBR0VfQVVUT1JJU0UiLCJlZF9FVEFUX1NUQUdFX0RFUE9TRSIsImVkX0VUQVRfU1RBR0VfVkFMSURFIiwiZWRfRVRBVF9TVEFHRV9SRUZVUyIsImVkX0VUQVRfU1RBR0VfSU5DT01QTEVUIiwiZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUUiLCJlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fRU5WT1lFRSIsImVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRSIsInRhYkVkIiwibG9hZFF1aWxsIiwiJGlkIiwib3B0aW9ucyIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiY29udGFpbmVyIiwiaGFuZGxlcnMiLCJ2YWx1ZSIsImN1cnNvclBvc2l0aW9uIiwicXVpbGwiLCJnZXRTZWxlY3Rpb24iLCJpbmRleCIsImluc2VydFRleHQiLCJzZXRTZWxlY3Rpb24iLCJsZW5ndGgiLCJwbGFjZWhvbGRlciIsInRoZW1lIiwiUXVpbGwiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiZXRhdCIsImRhdGEiLCJvbmdsZXQiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwidXVpZCIsIm1haWwiLCJtZXRob2QiLCJtZXNzYWdlIiwicm9vdCIsImlubmVySFRNTCIsInN1amV0IiwidmFsIiwic3VjY2VzcyIsImFkZENhbGxvdXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwZXJpb2RlIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJ0aGVuIiwicmVzdWx0IiwiaWQiLCJ0eXBlIiwic2V0VGV4dCIsImVycm9yIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJyZWdpc3RlciIsIlRvb2xiYXIiLCJTbm93IiwiQm9sZCIsIkl0YWxpYyIsIlNpemVTdHlsZSIsIkNvbG9yU3R5bGUiLCJCYWNrZ3JvdW5kU3R5bGUiLCJVbmRlcmxpbmUiLCJIZWFkZXIiLCJMaXN0IiwiTGlzdEl0ZW0iLCJBbGlnblN0eWxlIiwidG9vbGJhckZ1bGxPcHRpb25zIiwidW5kZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJpbml0UXVpbGwiLCJhamF4Q29tcGxldGUiLCJvYmoiLCJyZWFkVXJsTWVudSIsIiR1cmwiLCIkZWx0Iiwic3BsaXQiLCIkZmlyc3RFbHQiLCJwb3AiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwibG9jYXRpb24iLCJhdHRyIiwibWl4aW4iLCJjc3JmIiwiX3Rva2VuIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiY2xvc2VzdCIsInJlbW92ZSIsImxhYmVsIiwiY29uc29sZSIsImxvZyIsInRyYW5zbGF0ZSIsIkFycmF5IiwiaHRtbCIsInByZXBlbmQiLCJzbGlkZURvd24iLCJkZWxheSIsInNsaWRlVXAiLCJteUVkaXRJbml0aWFsQ29udGVudCIsIkVkaXRPbkxpbmUiLCJnZW5lcmVJbnB1dCIsInJlcGxhY2VXaXRoIiwiZm9jdXMiLCJrZXlDb2RlIiwidXBkYXRlRGF0YSIsIndoaWNoIiwiZmllbGQiLCIkb2JqIiwiJGh0bWwiLCJ0cmltIiwialF1ZXJ5IiwiZm4iLCJkYXRhQXR0ciIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImVsIiwiY2FzdExpc3QiLCJlYWNoIiwia2V5IiwiQm9vbGVhbiIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsV0FBSixFQUFpQkMsc0JBQWpCLEVBQXlDQyxvQkFBekMsRUFBK0RDLG9CQUEvRCxFQUFxRkMsbUJBQXJGLEVBQ0VDLHVCQURGLEVBRUVDLGdDQUZGLEVBRW9DQyxnQ0FGcEMsRUFFc0VDLDhCQUZ0RTtBQUlBLElBQUlDLEtBQUssR0FBRyxFQUFaOztBQUVBLFNBQVNDLFNBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO0FBQ3ZCLE1BQU1DLE9BQU8sR0FBRztBQUNkQyxXQUFPLEVBQUU7QUFDUEMsYUFBTyxFQUFFO0FBQ1BDLGlCQUFTLEVBQUUsY0FBY0osR0FEbEI7QUFFUEssZ0JBQVEsRUFBRTtBQUNSLDJCQUFpQix1QkFBVUMsS0FBVixFQUFpQjtBQUNoQyxnQkFBSUEsS0FBSixFQUFXO0FBQ1Qsa0JBQU1DLGNBQWMsR0FBRyxLQUFLQyxLQUFMLENBQVdDLFlBQVgsR0FBMEJDLEtBQWpEO0FBQ0EsbUJBQUtGLEtBQUwsQ0FBV0csVUFBWCxDQUFzQkosY0FBdEIsRUFBc0NELEtBQXRDO0FBQ0EsbUJBQUtFLEtBQUwsQ0FBV0ksWUFBWCxDQUF3QkwsY0FBYyxHQUFHRCxLQUFLLENBQUNPLE1BQS9DO0FBQ0Q7QUFDRjtBQVBPO0FBRkg7QUFERixLQURLO0FBZWRDLGVBQVcsRUFBRSxnRkFmQztBQWdCZEMsU0FBSyxFQUFFO0FBaEJPLEdBQWhCO0FBa0JBLFNBQU8sSUFBSUMsOENBQUosQ0FBVSxXQUFXaEIsR0FBckIsRUFBMEJDLE9BQTFCLENBQVA7QUFDRDs7QUFF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VUFBVUMsQ0FBVixFQUFhO0FBQzVDLFdBQU9BLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS0MsV0FBTCxFQUFQO0FBQ0QsR0FGTSxDQUFQO0FBR0Q7O0FBRU0sU0FBU0MsY0FBVCxDQUF5QkMsRUFBekIsRUFBNkJDLFFBQTdCLEVBQXVDO0FBQzVDLE1BQUl4SSxPQUFPLEdBQUcsRUFBZDtBQUNBZ0IsK0NBQUMsQ0FBQ3lILElBQUYsQ0FBT3pILDZDQUFDLENBQUN1SCxFQUFELENBQUQsQ0FBTWxILElBQU4sRUFBUCxFQUFxQixVQUFVcUgsR0FBVixFQUFlckksS0FBZixFQUFzQjtBQUV6Q3FJLE9BQUcsR0FBR1IsWUFBWSxDQUFDUSxHQUFELENBQWxCLENBRnlDLENBSXpDOztBQUNBLFFBQUlBLEdBQUcsSUFBSSxTQUFYLEVBQXNCO0FBQ3BCO0FBQ0Q7O0FBRUQsUUFBSUYsUUFBUSxJQUFJMUQsU0FBaEIsRUFBMkI7QUFDekIsVUFBSXJCLElBQUksR0FBRytFLFFBQVEsQ0FBQ0UsR0FBRCxDQUFuQjs7QUFDQSxjQUFRakYsSUFBUjtBQUNFLGFBQUssTUFBTDtBQUNFcEQsZUFBSyxHQUFHc0ksT0FBTyxDQUFDdEksS0FBRCxDQUFmO0FBQ0E7O0FBRUYsYUFBSyxLQUFMO0FBQ0VBLGVBQUssR0FBR3VJLE1BQU0sQ0FBQ3ZJLEtBQUQsQ0FBZDtBQUNBOztBQUVGLGFBQUssT0FBTDtBQUNFQSxlQUFLLEdBQUdBLEtBQUssQ0FBQ2lGLEtBQU4sQ0FBWSxHQUFaLENBQVI7QUFDQTs7QUFFRjtBQWJGO0FBZ0JEOztBQUVEdEYsV0FBTyxDQUFDMEksR0FBRCxDQUFQLEdBQWVySSxLQUFmO0FBQ0QsR0E5QkQ7QUFnQ0EsU0FBT0wsT0FBUDtBQUNELEMiLCJmaWxlIjoiYWRtLnN0YWdlX2NvdXJyaWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2FkbS5zdGFnZV9jb3Vycmllci5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI4LzA5LzIwMjAgMTE6NDNcblxuaW1wb3J0IFF1aWxsIGZyb20gJy4uL3F1aWxsJ1xuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmxldCBlZF9jb3VycmllciwgZWRfRVRBVF9TVEFHRV9BVVRPUklTRSwgZWRfRVRBVF9TVEFHRV9ERVBPU0UsIGVkX0VUQVRfU1RBR0VfVkFMSURFLCBlZF9FVEFUX1NUQUdFX1JFRlVTLFxuICBlZF9FVEFUX1NUQUdFX0lOQ09NUExFVCxcbiAgZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUUsIGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9FTlZPWUVFLCBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fUkVDVUVcblxubGV0IHRhYkVkID0ge31cblxuZnVuY3Rpb24gbG9hZFF1aWxsICgkaWQpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtb2R1bGVzOiB7XG4gICAgICB0b29sYmFyOiB7XG4gICAgICAgIGNvbnRhaW5lcjogJyN0b29sYmFyXycgKyAkaWQsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgJ2N1c3RvbXNmaWVsZHMnOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMucXVpbGwuZ2V0U2VsZWN0aW9uKCkuaW5kZXhcbiAgICAgICAgICAgICAgdGhpcy5xdWlsbC5pbnNlcnRUZXh0KGN1cnNvclBvc2l0aW9uLCB2YWx1ZSlcbiAgICAgICAgICAgICAgdGhpcy5xdWlsbC5zZXRTZWxlY3Rpb24oY3Vyc29yUG9zaXRpb24gKyB2YWx1ZS5sZW5ndGgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjogJ0NvbXBvc2V6IGxlIGNvcnBzIGR1IG1lc3NhZ2UuLi4gTGFpc3NlciB2aWRlIHBvdXIgdXRpbGlzZXIgbGUgbWFpbCBwYXIgZMOpZmF1dC4nLFxuICAgIHRoZW1lOiAnc25vdydcbiAgfVxuICByZXR1cm4gbmV3IFF1aWxsKCcjdGV4dF8nICsgJGlkLCBvcHRpb25zKVxufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIGVkX0VUQVRfU1RBR0VfQVVUT1JJU0UgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfQVVUT1JJU0UnKVxuICBlZF9FVEFUX1NUQUdFX0RFUE9TRSA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9ERVBPU0UnKVxuICBlZF9FVEFUX1NUQUdFX1ZBTElERSA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9WQUxJREUnKVxuICBlZF9FVEFUX1NUQUdFX1JFRlVTID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX1JFRlVTJylcbiAgZWRfRVRBVF9TVEFHRV9JTkNPTVBMRVQgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfSU5DT01QTEVUJylcbiAgZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUUgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfQ09OVkVOVElPTl9JTVBSSU1FJylcbiAgZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0VOVk9ZRUUgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfQ09OVkVOVElPTl9FTlZPWUVFJylcbiAgZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX1JFQ1VFID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX0NPTlZFTlRJT05fUkVDVUUnKVxuICBlZF9jb3VycmllciA9IGxvYWRRdWlsbCgnY291cnJpZXInKVxuXG4gIHRhYkVkID0ge1xuICAgICdlZF9FVEFUX1NUQUdFX0FVVE9SSVNFJzogZWRfRVRBVF9TVEFHRV9BVVRPUklTRSxcbiAgICAnZWRfRVRBVF9TVEFHRV9ERVBPU0UnOiBlZF9FVEFUX1NUQUdFX0RFUE9TRSxcbiAgICAnZWRfRVRBVF9TVEFHRV9WQUxJREUnOiBlZF9FVEFUX1NUQUdFX1ZBTElERSxcbiAgICAnZWRfRVRBVF9TVEFHRV9SRUZVUyc6IGVkX0VUQVRfU1RBR0VfUkVGVVMsXG4gICAgJ2VkX0VUQVRfU1RBR0VfSU5DT01QTEVUJzogZWRfRVRBVF9TVEFHRV9JTkNPTVBMRVQsXG4gICAgJ2VkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9JTVBSSU1FJzogZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUUsXG4gICAgJ2VkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9FTlZPWUVFJzogZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0VOVk9ZRUUsXG4gICAgJ2VkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRSc6IGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRSxcbiAgICAnZWRfY291cnJpZXInOiBlZF9jb3VycmllclxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmVucmVnaXN0cmVNb2RlbGVNYWlsJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBldGF0ID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgY29uc3Qgb25nbGV0ID0gJCh0aGlzKS5kYXRhKCdlZCcpXG5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3N0YWdlX3BlcmlvZGVfY291cnJpZXJfc2F1dmVnYXJkZV9tb2RlbGUnLCB7XG4gICAgICB1dWlkOiAkKHRoaXMpLmRhdGEoJ3BlcmlvZGUnKSxcbiAgICAgIG1haWw6IGV0YXRcbiAgICB9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICBtZXNzYWdlOiB0YWJFZFsnZWRfJyArIG9uZ2xldF0ucm9vdC5pbm5lckhUTUwsXG4gICAgICBzdWpldDogJCgnI3N1amV0XycgKyBldGF0KS52YWwoKVxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgYWRkQ2FsbG91dCgnTW9kw6hsZSBlbnJlZ2lzdHLDqSAhJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucmVzZXREZWZhdXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbGV0IGV0YXQgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICBsZXQgcGVyaW9kZSA9ICQodGhpcykuZGF0YSgncGVyaW9kZScpXG5cbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsZSByZXRvdXIgYXUgbWVzc2FnZSBwYXIgZMOpZmF1dCA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3N0YWdlX3BlcmlvZGVfY291cnJpZXJfcmVzZXQnLCB7aWQ6IHBlcmlvZGUsIGV0YXQ6IGV0YXR9KSxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGFiRWRbJ2VkXycgKyBldGF0XS5zZXRUZXh0KCcnKVxuICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzLCByZXRvdXIgYXUgbWVzc2FnZSBwYXIgZMOpZmF1dCcsICdzdWNjZXNzJylcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdNZXNzYWdlIHLDqWluaXRpYWxpc8OpIScsXG4gICAgICAgICAgICB0ZXh0OiAnTGUgbWVzc2FnZSBwYXIgZMOpZmF1dCBzZXJhIG1haW50ZW5hbnQgdXRpbGlzw6kuJyxcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcXVpbGwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwNC8xMC8yMDIwIDA2OjU4XG5cbmltcG9ydCAnLi4vY3NzL3F1aWxsLmNzcydcblxuaW1wb3J0IFF1aWxsIGZyb20gJ3F1aWxsL2NvcmUnXG5cbmltcG9ydCBUb29sYmFyIGZyb20gJ3F1aWxsL21vZHVsZXMvdG9vbGJhcidcbmltcG9ydCBTbm93IGZyb20gJ3F1aWxsL3RoZW1lcy9zbm93J1xuXG5pbXBvcnQgQm9sZCBmcm9tICdxdWlsbC9mb3JtYXRzL2JvbGQnXG5pbXBvcnQgSXRhbGljIGZyb20gJ3F1aWxsL2Zvcm1hdHMvaXRhbGljJ1xuaW1wb3J0IFVuZGVybGluZSBmcm9tICdxdWlsbC9mb3JtYXRzL3VuZGVybGluZSdcbmltcG9ydCBIZWFkZXIgZnJvbSAncXVpbGwvZm9ybWF0cy9oZWFkZXInXG5pbXBvcnQge0FsaWduU3R5bGV9IGZyb20gJ3F1aWxsL2Zvcm1hdHMvYWxpZ24nXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgTGlzdCwge0xpc3RJdGVtfSBmcm9tICdxdWlsbC9mb3JtYXRzL2xpc3QnXG5pbXBvcnQge1NpemVTdHlsZX0gZnJvbSAncXVpbGwvZm9ybWF0cy9zaXplJ1xuaW1wb3J0IHtDb2xvclN0eWxlfSBmcm9tICdxdWlsbC9mb3JtYXRzL2NvbG9yJ1xuaW1wb3J0IHtCYWNrZ3JvdW5kU3R5bGV9IGZyb20gJ3F1aWxsL2Zvcm1hdHMvYmFja2dyb3VuZCdcbmltcG9ydCBCbG9ja3F1b3RlIGZyb20gJ3F1aWxsL2Zvcm1hdHMvYmxvY2txdW90ZSdcblxuUXVpbGwucmVnaXN0ZXIoe1xuICAnbW9kdWxlcy90b29sYmFyJzogVG9vbGJhcixcbiAgJ3RoZW1lcy9zbm93JzogU25vdyxcbiAgJ2Zvcm1hdHMvYm9sZCc6IEJvbGQsXG4gICdmb3JtYXRzL2l0YWxpYyc6IEl0YWxpYyxcbiAgJ2Zvcm1hdHMvc2l6ZSc6IFNpemVTdHlsZSxcbiAgJ2Zvcm1hdHMvY29sb3InOiBDb2xvclN0eWxlLFxuICAnZm9ybWF0cy9iYWNrZ3JvdW5kJzogQmFja2dyb3VuZFN0eWxlLFxuICAnZm9ybWF0cy91bmRlcmxpbmUnOiBVbmRlcmxpbmUsXG4gICdmb3JtYXRzL2hlYWRlcic6IEhlYWRlcixcbiAgJ2Zvcm1hdHMvbGlzdCc6IExpc3QsXG4gICdmb3JtYXRzL2xpc3QtaXRlbSc6IExpc3RJdGVtLFxuICAnZm9ybWF0cy9hbGlnbic6IEFsaWduU3R5bGVcbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgUXVpbGxcblxubGV0IG9wdGlvbnMgPSB7XG4gIHRoZW1lOiAnc25vdycsXG4gIHRvb2xiYXI6ICdmdWxsJ1xufVxuXG5sZXQgdG9vbGJhckZ1bGxPcHRpb25zID0gW1xuICBbXG4gICAgeydoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdfSxcbiAgICB7J3NpemUnOiBbJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJ119XG4gIF0sXG4gIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10sICAgICAgICAvLyB0b2dnbGVkIGJ1dHRvbnNcbiAgW3snY29sb3InOiBbXX0sIHsnYmFja2dyb3VuZCc6IFtdfV0sICAgICAgICAgIC8vIGRyb3Bkb3duIHdpdGggZGVmYXVsdHMgZnJvbSB0aGVtZVxuICBbeydoZWFkZXInOiAxfSwgeydoZWFkZXInOiAyfV0sXG4gIFt7J2xpc3QnOiAnb3JkZXJlZCd9LCB7J2xpc3QnOiAnYnVsbGV0J30sIHsnaW5kZW50JzogJy0xJ30sIHsnaW5kZW50JzogJysxJ31dLFxuICBbJ2xpbmsnXSxcbiAgWydjbGVhbiddICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZm9ybWF0dGluZyBidXR0b25cbl1cblxuaWYgKG9wdGlvbnMudG9vbGJhciAhPT0gdW5kZWZpbmVkKSB7XG4gIHZhciB0b29sYmFyID0gb3B0aW9ucy50b29sYmFyLnRvTG93ZXJDYXNlKClcbiAgaWYgKHRvb2xiYXIgPT0gJ2Z1bGwnKSB7XG4gICAgb3B0aW9ucy5tb2R1bGVzID0ge1xuICAgICAgLy9zeW50YXg6ICd0cnVlJyxcbiAgICAgIHRvb2xiYXI6IHRvb2xiYXJGdWxsT3B0aW9uc1xuICAgIH1cbiAgfVxufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIGluaXRRdWlsbCgpXG59KVxuXG4kKGRvY3VtZW50KS5hamF4Q29tcGxldGUoZnVuY3Rpb24gKCkge1xuICBpbml0UXVpbGwoKVxufSlcblxuZnVuY3Rpb24gaW5pdFF1aWxsICgpIHtcbiAgbGV0IG9iaiA9ICQoJ1tkYXRhLXByb3ZpZGU9XCJxdWlsbFwiXScpXG4gIGlmIChvYmoubGVuZ3RoID09PSAxKSB7XG4gICAgbmV3IFF1aWxsKCQoJ1tkYXRhLXByb3ZpZGU9XCJxdWlsbFwiXScpWzBdLCBvcHRpb25zKVxuICB9XG59XG5cblxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3V0aWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxMS8xMC8yMDIwIDA4OjA0XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2Uge1xuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiBlLndoaWNoID09PSAyNykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG15RWRpdEluaXRpYWxDb250ZW50Lmh0bWwodmFsKVxuICAgICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gICAgICBFZGl0T25MaW5lID0gZmFsc2VcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG4gIGxldCAkaHRtbCA9ICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiAvPidcbiAgJGh0bWwgPSAkaHRtbCArICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLXNtIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLWRhbmdlciBidG4tb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPjwvZGl2PidcbiAgcmV0dXJuICRodG1sXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
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
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/quill.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/09/2020 08:40











quill_core__WEBPACK_IMPORTED_MODULE_1__["default"].register({
  'modules/toolbar': quill_modules_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"],
  'themes/snow': quill_themes_snow__WEBPACK_IMPORTED_MODULE_3__["default"],
  'formats/bold': quill_formats_bold__WEBPACK_IMPORTED_MODULE_4__["default"],
  'formats/italic': quill_formats_italic__WEBPACK_IMPORTED_MODULE_5__["default"],
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
}, 'blockquote', 'code-block'], [{
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
// @lastUpdate 30/07/2020 11:18



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
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '.myedit', function (e) {
  e.preventDefault();
  myEditInitialContent = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this);
  var html = '';

  if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).data('type') === 'select') {//todo: A finaliser
  } else {
    console.log('toto');
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
      value: val
    },
    method: 'POST',
    success: function success() {
      myEditInitialContent.html(val);
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#myEdit-zone').replaceWith(myEditInitialContent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3F1aWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnN0YWdlX2NvdXJyaWVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9xdWlsbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC5qcyJdLCJuYW1lcyI6WyJlZF9jb3VycmllciIsImVkX0VUQVRfU1RBR0VfQVVUT1JJU0UiLCJlZF9FVEFUX1NUQUdFX0RFUE9TRSIsImVkX0VUQVRfU1RBR0VfVkFMSURFIiwiZWRfRVRBVF9TVEFHRV9SRUZVUyIsImVkX0VUQVRfU1RBR0VfSU5DT01QTEVUIiwiZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUUiLCJlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fRU5WT1lFRSIsImVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRSIsInRhYkVkIiwibG9hZFF1aWxsIiwiJGlkIiwib3B0aW9ucyIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiY29udGFpbmVyIiwiaGFuZGxlcnMiLCJ2YWx1ZSIsImN1cnNvclBvc2l0aW9uIiwicXVpbGwiLCJnZXRTZWxlY3Rpb24iLCJpbmRleCIsImluc2VydFRleHQiLCJzZXRTZWxlY3Rpb24iLCJsZW5ndGgiLCJwbGFjZWhvbGRlciIsInRoZW1lIiwiUXVpbGwiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiZXRhdCIsImRhdGEiLCJvbmdsZXQiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwidXVpZCIsIm1haWwiLCJtZXRob2QiLCJtZXNzYWdlIiwicm9vdCIsImlubmVySFRNTCIsInN1amV0IiwidmFsIiwic3VjY2VzcyIsImFkZENhbGxvdXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwZXJpb2RlIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJ0aGVuIiwicmVzdWx0IiwiaWQiLCJ0eXBlIiwic2V0VGV4dCIsImVycm9yIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJyZWdpc3RlciIsIlRvb2xiYXIiLCJTbm93IiwiQm9sZCIsIkl0YWxpYyIsIlVuZGVybGluZSIsIkhlYWRlciIsIkxpc3QiLCJMaXN0SXRlbSIsIkFsaWduU3R5bGUiLCJ0b29sYmFyRnVsbE9wdGlvbnMiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImluaXRRdWlsbCIsImFqYXhDb21wbGV0ZSIsIm9iaiIsInJlYWRVcmxNZW51IiwiJHVybCIsIiRlbHQiLCJzcGxpdCIsIiRmaXJzdEVsdCIsInBvcCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJsb2NhdGlvbiIsImF0dHIiLCJtaXhpbiIsImNzcmYiLCJfdG9rZW4iLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJjbG9zZXN0IiwicmVtb3ZlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJodG1sIiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJmaWVsZCIsIiRvYmoiLCIkaHRtbCIsInRyaW0iLCJqUXVlcnkiLCJmbiIsImRhdGFBdHRyIiwibmFtZSIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRp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QSxTQUFPTCxPQUFQO0FBQ0QsQyIsImZpbGUiOiJhZG0uc3RhZ2VfY291cnJpZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLnN0YWdlX2NvdXJyaWVyLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjgvMDkvMjAyMCAxMTo0M1xuXG5pbXBvcnQgUXVpbGwgZnJvbSAnLi4vcXVpbGwnXG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxubGV0IGVkX2NvdXJyaWVyLCBlZF9FVEFUX1NUQUdFX0FVVE9SSVNFLCBlZF9FVEFUX1NUQUdFX0RFUE9TRSwgZWRfRVRBVF9TVEFHRV9WQUxJREUsIGVkX0VUQVRfU1RBR0VfUkVGVVMsXG4gIGVkX0VUQVRfU1RBR0VfSU5DT01QTEVULFxuICBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fSU1QUklNRSwgZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0VOVk9ZRUUsIGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRVxuXG5sZXQgdGFiRWQgPSB7fVxuXG5mdW5jdGlvbiBsb2FkUXVpbGwgKCRpZCkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1vZHVsZXM6IHtcbiAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgY29udGFpbmVyOiAnI3Rvb2xiYXJfJyArICRpZCxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAnY3VzdG9tc2ZpZWxkcyc6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5xdWlsbC5nZXRTZWxlY3Rpb24oKS5pbmRleFxuICAgICAgICAgICAgICB0aGlzLnF1aWxsLmluc2VydFRleHQoY3Vyc29yUG9zaXRpb24sIHZhbHVlKVxuICAgICAgICAgICAgICB0aGlzLnF1aWxsLnNldFNlbGVjdGlvbihjdXJzb3JQb3NpdGlvbiArIHZhbHVlLmxlbmd0aClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiAnQ29tcG9zZXogbGUgY29ycHMgZHUgbWVzc2FnZS4uLiBMYWlzc2VyIHZpZGUgcG91ciB1dGlsaXNlciBsZSBtYWlsIHBhciBkw6lmYXV0LicsXG4gICAgdGhlbWU6ICdzbm93J1xuICB9XG4gIHJldHVybiBuZXcgUXVpbGwoJyN0ZXh0XycgKyAkaWQsIG9wdGlvbnMpXG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgZWRfRVRBVF9TVEFHRV9BVVRPUklTRSA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9BVVRPUklTRScpXG4gIGVkX0VUQVRfU1RBR0VfREVQT1NFID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX0RFUE9TRScpXG4gIGVkX0VUQVRfU1RBR0VfVkFMSURFID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX1ZBTElERScpXG4gIGVkX0VUQVRfU1RBR0VfUkVGVVMgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfUkVGVVMnKVxuICBlZF9FVEFUX1NUQUdFX0lOQ09NUExFVCA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9JTkNPTVBMRVQnKVxuICBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fSU1QUklNRSA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUUnKVxuICBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fRU5WT1lFRSA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9DT05WRU5USU9OX0VOVk9ZRUUnKVxuICBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fUkVDVUUgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRScpXG4gIGVkX2NvdXJyaWVyID0gbG9hZFF1aWxsKCdjb3VycmllcicpXG5cbiAgdGFiRWQgPSB7XG4gICAgJ2VkX0VUQVRfU1RBR0VfQVVUT1JJU0UnOiBlZF9FVEFUX1NUQUdFX0FVVE9SSVNFLFxuICAgICdlZF9FVEFUX1NUQUdFX0RFUE9TRSc6IGVkX0VUQVRfU1RBR0VfREVQT1NFLFxuICAgICdlZF9FVEFUX1NUQUdFX1ZBTElERSc6IGVkX0VUQVRfU1RBR0VfVkFMSURFLFxuICAgICdlZF9FVEFUX1NUQUdFX1JFRlVTJzogZWRfRVRBVF9TVEFHRV9SRUZVUyxcbiAgICAnZWRfRVRBVF9TVEFHRV9JTkNPTVBMRVQnOiBlZF9FVEFUX1NUQUdFX0lOQ09NUExFVCxcbiAgICAnZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUUnOiBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fSU1QUklNRSxcbiAgICAnZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0VOVk9ZRUUnOiBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fRU5WT1lFRSxcbiAgICAnZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX1JFQ1VFJzogZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX1JFQ1VFLFxuICAgICdlZF9jb3Vycmllcic6IGVkX2NvdXJyaWVyXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZW5yZWdpc3RyZU1vZGVsZU1haWwnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGV0YXQgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICBjb25zdCBvbmdsZXQgPSAkKHRoaXMpLmRhdGEoJ2VkJylcblxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fc3RhZ2VfcGVyaW9kZV9jb3Vycmllcl9zYXV2ZWdhcmRlX21vZGVsZScsIHtcbiAgICAgIHV1aWQ6ICQodGhpcykuZGF0YSgncGVyaW9kZScpLFxuICAgICAgbWFpbDogZXRhdFxuICAgIH0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgIG1lc3NhZ2U6IHRhYkVkWydlZF8nICsgb25nbGV0XS5yb290LmlubmVySFRNTCxcbiAgICAgIHN1amV0OiAkKCcjc3VqZXRfJyArIGV0YXQpLnZhbCgpXG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdNb2TDqGxlIGVucmVnaXN0csOpICEnLCAnc3VjY2VzcycpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5yZXNldERlZmF1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBsZXQgZXRhdCA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIGxldCBwZXJpb2RlID0gJCh0aGlzKS5kYXRhKCdwZXJpb2RlJylcblxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxlIHJldG91ciBhdSBtZXNzYWdlIHBhciBkw6lmYXV0ID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fc3RhZ2VfcGVyaW9kZV9jb3Vycmllcl9yZXNldCcsIHtpZDogcGVyaW9kZSwgZXRhdDogZXRhdH0pLFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0YWJFZFsnZWRfJyArIGV0YXRdLnNldFRleHQoJycpXG4gICAgICAgICAgYWRkQ2FsbG91dCgnU3VwcHJlc3Npb24gZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqHMsIHJldG91ciBhdSBtZXNzYWdlIHBhciBkw6lmYXV0JywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ01lc3NhZ2UgcsOpaW5pdGlhbGlzw6khJyxcbiAgICAgICAgICAgIHRleHQ6ICdMZSBtZXNzYWdlIHBhciBkw6lmYXV0IHNlcmEgbWFpbnRlbmFudCB1dGlsaXPDqS4nLFxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9xdWlsbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI4LzA5LzIwMjAgMDg6NDBcblxuaW1wb3J0ICcuLi9jc3MvcXVpbGwuY3NzJ1xuXG5pbXBvcnQgUXVpbGwgZnJvbSAncXVpbGwvY29yZSdcblxuaW1wb3J0IFRvb2xiYXIgZnJvbSAncXVpbGwvbW9kdWxlcy90b29sYmFyJ1xuaW1wb3J0IFNub3cgZnJvbSAncXVpbGwvdGhlbWVzL3Nub3cnXG5cbmltcG9ydCBCb2xkIGZyb20gJ3F1aWxsL2Zvcm1hdHMvYm9sZCdcbmltcG9ydCBJdGFsaWMgZnJvbSAncXVpbGwvZm9ybWF0cy9pdGFsaWMnXG5pbXBvcnQgVW5kZXJsaW5lIGZyb20gJ3F1aWxsL2Zvcm1hdHMvdW5kZXJsaW5lJ1xuaW1wb3J0IEhlYWRlciBmcm9tICdxdWlsbC9mb3JtYXRzL2hlYWRlcidcbmltcG9ydCB7QWxpZ25TdHlsZX0gZnJvbSAncXVpbGwvZm9ybWF0cy9hbGlnbidcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBMaXN0LCB7TGlzdEl0ZW19IGZyb20gJ3F1aWxsL2Zvcm1hdHMvbGlzdCdcblxuUXVpbGwucmVnaXN0ZXIoe1xuICAnbW9kdWxlcy90b29sYmFyJzogVG9vbGJhcixcbiAgJ3RoZW1lcy9zbm93JzogU25vdyxcbiAgJ2Zvcm1hdHMvYm9sZCc6IEJvbGQsXG4gICdmb3JtYXRzL2l0YWxpYyc6IEl0YWxpYyxcbiAgJ2Zvcm1hdHMvdW5kZXJsaW5lJzogVW5kZXJsaW5lLFxuICAnZm9ybWF0cy9oZWFkZXInOiBIZWFkZXIsXG4gICdmb3JtYXRzL2xpc3QnOiBMaXN0LFxuICAnZm9ybWF0cy9saXN0LWl0ZW0nOiBMaXN0SXRlbSxcbiAgJ2Zvcm1hdHMvYWxpZ24nOiBBbGlnblN0eWxlXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IFF1aWxsXG5cbmxldCBvcHRpb25zID0ge1xuICB0aGVtZTogJ3Nub3cnLFxuICB0b29sYmFyOiAnZnVsbCdcbn1cblxubGV0IHRvb2xiYXJGdWxsT3B0aW9ucyA9IFtcbiAgW1xuICAgIHsnaGVhZGVyJzogWzEsIDIsIDMsIDQsIDUsIDYsIGZhbHNlXX0sXG4gICAgeydzaXplJzogWydzbWFsbCcsIGZhbHNlLCAnbGFyZ2UnLCAnaHVnZSddfVxuICBdLFxuICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZSddLCAgICAgICAgLy8gdG9nZ2xlZCBidXR0b25zXG4gIFt7J2NvbG9yJzogW119LCB7J2JhY2tncm91bmQnOiBbXX1dLCAgICAgICAgICAvLyBkcm9wZG93biB3aXRoIGRlZmF1bHRzIGZyb20gdGhlbWVcbiAgW3snaGVhZGVyJzogMX0sIHsnaGVhZGVyJzogMn0sICdibG9ja3F1b3RlJywgJ2NvZGUtYmxvY2snXSxcbiAgW3snbGlzdCc6ICdvcmRlcmVkJ30sIHsnbGlzdCc6ICdidWxsZXQnfSwgeydpbmRlbnQnOiAnLTEnfSwgeydpbmRlbnQnOiAnKzEnfV0sXG4gIFsnbGluayddLFxuICBbJ2NsZWFuJ10gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmb3JtYXR0aW5nIGJ1dHRvblxuXVxuXG5pZiAob3B0aW9ucy50b29sYmFyICE9PSB1bmRlZmluZWQpIHtcbiAgdmFyIHRvb2xiYXIgPSBvcHRpb25zLnRvb2xiYXIudG9Mb3dlckNhc2UoKVxuICBpZiAodG9vbGJhciA9PSAnZnVsbCcpIHtcbiAgICBvcHRpb25zLm1vZHVsZXMgPSB7XG4gICAgICAvL3N5bnRheDogJ3RydWUnLFxuICAgICAgdG9vbGJhcjogdG9vbGJhckZ1bGxPcHRpb25zXG4gICAgfVxuICB9XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgaW5pdFF1aWxsKClcbn0pXG5cbiQoZG9jdW1lbnQpLmFqYXhDb21wbGV0ZShmdW5jdGlvbiAoKSB7XG4gIGluaXRRdWlsbCgpXG59KVxuXG5mdW5jdGlvbiBpbml0UXVpbGwgKCkge1xuICBsZXQgb2JqID0gJCgnW2RhdGEtcHJvdmlkZT1cInF1aWxsXCJdJylcbiAgaWYgKG9iai5sZW5ndGggPT09IDEpIHtcbiAgICBuZXcgUXVpbGwoJCgnW2RhdGEtcHJvdmlkZT1cInF1aWxsXCJdJylbMF0sIG9wdGlvbnMpXG4gIH1cbn1cblxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDMwLzA3LzIwMjAgMTE6MThcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmZ1bmN0aW9uIHJlYWRVcmxNZW51ICgkdXJsKSB7XG4gIGNvbnN0ICRlbHQgPSAkdXJsLnNwbGl0KCcvJylcbiAgbGV0ICRmaXJzdEVsdCA9IDJcbiAgaWYgKCRlbHRbMV0gPT09ICdpbmRleC5waHAnKSB7XG4gICAgaWYgKCRlbHQubGVuZ3RoID4gMSkge1xuICAgICAgJGZpcnN0RWx0ID0gM1xuICAgIH1cbiAgfVxuXG4gIGlmICgkZWx0WyRmaXJzdEVsdF0gPT09ICdzdXBlci1hZG1pbmlzdHJhdGlvbicpIHtcbiAgICAkZmlyc3RFbHQgPSAkZmlyc3RFbHQgKyAxXG4gIH1cblxuICBpZiAoJGVsdFskZWx0Lmxlbmd0aCAtIDFdID09PSAnJykge1xuICAgICRlbHQucG9wKClcbiAgfVxuXG4gICQoJy5tZW51LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lbnUtJyArICRlbHRbJGZpcnN0RWx0XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59XG5cbi8vY29sb3Jpc2UgbGUgYm9uIG1lbnVcbnJlYWRVcmxNZW51KCQobG9jYXRpb24pLmF0dHIoJ3BhdGhuYW1lJykpXG5cblN3YWwubWl4aW4oe1xuICBjdXN0b21DbGFzczoge1xuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICB9LFxuICBidXR0b25zU3R5bGluZzogZmFsc2Vcbn0pXG4vL3BvcCB1cCBkZSBjb25maXJtYXRpb24gZGUgc3VwcHJlc3Npb25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3VwcHJpbWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gIGNvbnN0IGNzcmYgPSAkKHRoaXMpLmRhdGEoJ2NzcmYnKVxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIF90b2tlbjogY3NyZlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0JykgJiYgaWQuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gaWQudXJsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyNsaWduZV8nICsgaWQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdTdXBwcmltw6khJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0xcXCdlbnJlZ2lzdHJlbWVudCBhIMOpdMOpIHN1cHByaW3DqS4nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24hJyxcbiAgICAgICAgICAgIHRleHQ6ICdNZXJjaSBkZSByZW5vdXZlbGVyIGxcXCdvcMOpcmF0aW9uJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXG4gICAgICByZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCdcbiAgICApIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQ2FuY2VsbGVkJyxcbiAgICAgICAgdGV4dDogJ09LISBUb3V0IGVzdCBjb21tZSBhdmFudCAhJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbG91dCAobWVzc2FnZSwgbGFiZWwpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxvdXQnKVxuICB2YXIgdHJhbnNsYXRlID0gbmV3IEFycmF5KClcbiAgdHJhbnNsYXRlWydzdWNjZXNzJ10gPSAnU3VjY8OocydcbiAgdHJhbnNsYXRlWydkYW5nZXInXSA9ICdFcnJldXInXG4gIHRyYW5zbGF0ZVsnd2FybmluZyddID0gJ0F0dGVudGlvbidcblxuICBjb25zdCBodG1sID0gJzxkaXYgY2xhc3M9XCJjYWxsb3V0IGNhbGxvdXQtJyArIGxhYmVsICsgJ1wiIHJvbGU9XCJhbGVydFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJjYWxsb3V0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGg1PicgKyB0cmFuc2xhdGVbbGFiZWxdICsgJzwvaDU+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPHA+JyArIG1lc3NhZ2UgKyAnPC9wPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9kaXY+J1xuXG4gICQoJyNtYWluQ29udGVudCcpLnByZXBlbmQoaHRtbCkuc2xpZGVEb3duKCdzbG93JylcbiAgJCgnLmNhbGxvdXQnKS5kZWxheSg1MDAwKS5zbGlkZVVwKCdzbG93Jylcbn1cblxuLy9FZGl0YWJsZVxubGV0IG15RWRpdEluaXRpYWxDb250ZW50ID0gJydcblxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCd0b3RvJylcbiAgICBodG1sID0gZ2VuZXJlSW5wdXQoJCh0aGlzKSlcbiAgfVxuICAkKHRoaXMpLnJlcGxhY2VXaXRoKGh0bWwpXG4gICQoJyNteWVkaXQtaW5wdXQnKS5mb2N1cygpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI215ZWRpdC1pbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG4gIGxldCAkaHRtbCA9ICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiAvPidcbiAgJGh0bWwgPSAkaHRtbCArICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLXNtIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLWRhbmdlciBidG4tb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPjwvZGl2PidcbiAgcmV0dXJuICRodG1sXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
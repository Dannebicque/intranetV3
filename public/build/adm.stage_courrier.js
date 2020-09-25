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
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../quill */ "./assets/js/quill.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.stage_courrier.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/09/2020 17:11


var ed_ETAT_STAGE_AUTORISE, ed_ETAT_STAGE_DEPOSE, ed_ETAT_STAGE_VALIDE, ed_ETAT_STAGE_REFUS, ed_ETAT_STAGE_INCOMPLET, ed_ETAT_STAGE_CONVENTION_IMPRIME, ed_ETAT_STAGE_CONVENTION_ENVOYEE, ed_ETAT_STAGE_CONVENTION_RECUE;
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
    placeholder: 'Composez le corps du message...',
    theme: 'snow'
  };
  return new _quill__WEBPACK_IMPORTED_MODULE_0__["default"]('#text_' + $id, options);
}

$(document).ready(function () {
  ed_ETAT_STAGE_AUTORISE = loadQuill('ETAT_STAGE_AUTORISE');
  ed_ETAT_STAGE_DEPOSE = loadQuill('ETAT_STAGE_DEPOSE');
  ed_ETAT_STAGE_VALIDE = loadQuill('ETAT_STAGE_VALIDE');
  ed_ETAT_STAGE_REFUS = loadQuill('ETAT_STAGE_REFUS');
  ed_ETAT_STAGE_INCOMPLET = loadQuill('ETAT_STAGE_INCOMPLET');
  ed_ETAT_STAGE_CONVENTION_IMPRIME = loadQuill('ETAT_STAGE_CONVENTION_IMPRIME');
  ed_ETAT_STAGE_CONVENTION_ENVOYEE = loadQuill('ETAT_STAGE_CONVENTION_ENVOYEE');
  ed_ETAT_STAGE_CONVENTION_RECUE = loadQuill('ETAT_STAGE_CONVENTION_RECUE');
  tabEd = {
    'ed_ETAT_STAGE_AUTORISE': ed_ETAT_STAGE_AUTORISE,
    'ed_ETAT_STAGE_DEPOSE': ed_ETAT_STAGE_DEPOSE,
    'ed_ETAT_STAGE_VALIDE': ed_ETAT_STAGE_VALIDE,
    'ed_ETAT_STAGE_REFUS': ed_ETAT_STAGE_REFUS,
    'ed_ETAT_STAGE_INCOMPLET': ed_ETAT_STAGE_INCOMPLET,
    'ed_ETAT_STAGE_CONVENTION_IMPRIME': ed_ETAT_STAGE_CONVENTION_IMPRIME,
    'ed_ETAT_STAGE_CONVENTION_ENVOYEE': ed_ETAT_STAGE_CONVENTION_ENVOYEE,
    'ed_ETAT_STAGE_CONVENTION_RECUE': ed_ETAT_STAGE_CONVENTION_RECUE
  };
});
$(document).on('click', '.enregistreModeleMail', function () {
  var etat = $(this).data('type');
  var onglet = $(this).data('ed');
  $.ajax({
    url: Routing.generate('administration_stage_periode_courrier_sauvegarde_modele', {
      uuid: $(this).data('periode'),
      mail: etat
    }),
    method: 'POST',
    data: {
      message: tabEd['ed_' + onglet].root.innerHTML,
      sujet: $('#sujet_' + etat).val()
    },
    success: function success() {
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["addCallout"])('Modèle enregistré !', 'success');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/quill.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/09/2020 13:25










quill_core__WEBPACK_IMPORTED_MODULE_1__["default"].register({
  'modules/toolbar': quill_modules_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"],
  'themes/snow': quill_themes_snow__WEBPACK_IMPORTED_MODULE_3__["default"],
  'formats/bold': quill_formats_bold__WEBPACK_IMPORTED_MODULE_4__["default"],
  'formats/italic': quill_formats_italic__WEBPACK_IMPORTED_MODULE_5__["default"],
  'formats/underline': quill_formats_underline__WEBPACK_IMPORTED_MODULE_6__["default"],
  'formats/header': quill_formats_header__WEBPACK_IMPORTED_MODULE_7__["default"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3F1aWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnN0YWdlX2NvdXJyaWVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9xdWlsbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC5qcyJdLCJuYW1lcyI6WyJlZF9FVEFUX1NUQUdFX0FVVE9SSVNFIiwiZWRfRVRBVF9TVEFHRV9ERVBPU0UiLCJlZF9FVEFUX1NUQUdFX1ZBTElERSIsImVkX0VUQVRfU1RBR0VfUkVGVVMiLCJlZF9FVEFUX1NUQUdFX0lOQ09NUExFVCIsImVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9JTVBSSU1FIiwiZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0VOVk9ZRUUiLCJlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fUkVDVUUiLCJ0YWJFZCIsImxvYWRRdWlsbCIsIiRpZCIsIm9wdGlvbnMiLCJtb2R1bGVzIiwidG9vbGJhciIsImNvbnRhaW5lciIsImhhbmRsZXJzIiwidmFsdWUiLCJjdXJzb3JQb3NpdGlvbiIsInF1aWxsIiwiZ2V0U2VsZWN0aW9uIiwiaW5kZXgiLCJpbnNlcnRUZXh0Iiwic2V0U2VsZWN0aW9uIiwibGVuZ3RoIiwicGxhY2Vob2xkZXIiLCJ0aGVtZSIsIlF1aWxsIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImV0YXQiLCJkYXRhIiwib25nbGV0IiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInV1aWQiLCJtYWlsIiwibWV0aG9kIiwibWVzc2FnZSIsInJvb3QiLCJpbm5lckhUTUwiLCJzdWpldCIsInZhbCIsInN1Y2Nlc3MiLCJhZGRDYWxsb3V0IiwicmVnaXN0ZXIiLCJUb29sYmFyIiwiU25vdyIsIkJvbGQiLCJJdGFsaWMiLCJVbmRlcmxpbmUiLCJIZWFkZXIiLCJBbGlnblN0eWxlIiwidG9vbGJhckZ1bGxPcHRpb25zIiwidW5kZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJpbml0UXVpbGwiLCJhamF4Q29tcGxldGUiLCJvYmoiLCJyZWFkVXJsTWVudSIsIiR1cmwiLCIkZWx0Iiwic3BsaXQiLCIkZmlyc3RFbHQiLCJwb3AiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwibG9jYXRpb24iLCJhdHRyIiwiU3dhbCIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJlIiwicHJldmVudERlZmF1bHQiLCJjc3JmIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidHlwZSIsIl90b2tlbiIsImlkIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiY2xvc2VzdCIsInJlbW92ZSIsImVycm9yIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJsYWJlbCIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc2xhdGUiLCJBcnJheSIsImh0bWwiLCJwcmVwZW5kIiwic2xpZGVEb3duIiwiZGVsYXkiLCJzbGlkZVVwIiwibXlFZGl0SW5pdGlhbENvbnRlbnQiLCJnZW5lcmVJbnB1dCIsInJlcGxhY2VXaXRoIiwiZm9jdXMiLCJrZXlDb2RlIiwidXBkYXRlRGF0YSIsImZpZWxkIiwiJG9iaiIsIiRodG1sIiwidHJpbSIsImpRdWVyeSIsImZuIiwiZGF0YUF0dHIiLCJuYW1lIiwiZGVmIiwiZ2V0QXR0cmlidXRlIiwiaGFzRGF0YUF0dHIiLCJoYXNBdHRyaWJ1dGUiLCJkYXRhVG9PcHRpb24iLCJyZXBsYWNlIiwieCIsInRvVXBwZXJDYXNlIiwiZ2V0RGF0YU9wdGlvbnMiLCJlbCIsImNhc3RMaXN0IiwiZWFjaCIsImtleSIsIkJvb2xlYW4iLCJOdW1iZXIi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QVVDLENBQVYsRUFBYTtBQUM1QyxXQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtDLFdBQUwsRUFBUDtBQUNELEdBRk0sQ0FBUDtBQUdEOztBQUVNLFNBQVNDLGNBQVQsQ0FBeUJDLEVBQXpCLEVBQTZCQyxRQUE3QixFQUF1QztBQUM1QyxNQUFJL0gsT0FBTyxHQUFHLEVBQWQ7QUFDQWdCLCtDQUFDLENBQUNnSCxJQUFGLENBQU9oSCw2Q0FBQyxDQUFDOEcsRUFBRCxDQUFELENBQU16RyxJQUFOLEVBQVAsRUFBcUIsVUFBVTRHLEdBQVYsRUFBZTVILEtBQWYsRUFBc0I7QUFFekM0SCxPQUFHLEdBQUdSLFlBQVksQ0FBQ1EsR0FBRCxDQUFsQixDQUZ5QyxDQUl6Qzs7QUFDQSxRQUFJQSxHQUFHLElBQUksU0FBWCxFQUFzQjtBQUNwQjtBQUNEOztBQUVELFFBQUlGLFFBQVEsSUFBSWpGLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQUltQyxJQUFJLEdBQUc4QyxRQUFRLENBQUNFLEdBQUQsQ0FBbkI7O0FBQ0EsY0FBUWhELElBQVI7QUFDRSxhQUFLLE1BQUw7QUFDRTVFLGVBQUssR0FBRzZILE9BQU8sQ0FBQzdILEtBQUQsQ0FBZjtBQUNBOztBQUVGLGFBQUssS0FBTDtBQUNFQSxlQUFLLEdBQUc4SCxNQUFNLENBQUM5SCxLQUFELENBQWQ7QUFDQTs7QUFFRixhQUFLLE9BQUw7QUFDRUEsZUFBSyxHQUFHQSxLQUFLLENBQUNpRCxLQUFOLENBQVksR0FBWixDQUFSO0FBQ0E7O0FBRUY7QUFiRjtBQWdCRDs7QUFFRHRELFdBQU8sQ0FBQ2lJLEdBQUQsQ0FBUCxHQUFlNUgsS0FBZjtBQUNELEdBOUJEO0FBZ0NBLFNBQU9MLE9BQVA7QUFDRCxDIiwiZmlsZSI6ImFkbS5zdGFnZV9jb3Vycmllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0uc3RhZ2VfY291cnJpZXIuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyNS8wOS8yMDIwIDE3OjExXG5cbmltcG9ydCBRdWlsbCBmcm9tICcuLi9xdWlsbCdcbmltcG9ydCB7YWRkQ2FsbG91dH0gZnJvbSAnLi4vdXRpbCdcblxubGV0IGVkX0VUQVRfU1RBR0VfQVVUT1JJU0UsIGVkX0VUQVRfU1RBR0VfREVQT1NFLCBlZF9FVEFUX1NUQUdFX1ZBTElERSwgZWRfRVRBVF9TVEFHRV9SRUZVUywgZWRfRVRBVF9TVEFHRV9JTkNPTVBMRVQsXG4gIGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9JTVBSSU1FLCBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fRU5WT1lFRSwgZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX1JFQ1VFXG5cbmxldCB0YWJFZCA9IHt9XG5cbmZ1bmN0aW9uIGxvYWRRdWlsbCAoJGlkKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbW9kdWxlczoge1xuICAgICAgdG9vbGJhcjoge1xuICAgICAgICBjb250YWluZXI6ICcjdG9vbGJhcl8nICsgJGlkLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICdjdXN0b21zZmllbGRzJzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3Vyc29yUG9zaXRpb24gPSB0aGlzLnF1aWxsLmdldFNlbGVjdGlvbigpLmluZGV4XG4gICAgICAgICAgICAgIHRoaXMucXVpbGwuaW5zZXJ0VGV4dChjdXJzb3JQb3NpdGlvbiwgdmFsdWUpXG4gICAgICAgICAgICAgIHRoaXMucXVpbGwuc2V0U2VsZWN0aW9uKGN1cnNvclBvc2l0aW9uICsgdmFsdWUubGVuZ3RoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6ICdDb21wb3NleiBsZSBjb3JwcyBkdSBtZXNzYWdlLi4uJyxcbiAgICB0aGVtZTogJ3Nub3cnXG4gIH1cbiAgcmV0dXJuIG5ldyBRdWlsbCgnI3RleHRfJyArICRpZCwgb3B0aW9ucylcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBlZF9FVEFUX1NUQUdFX0FVVE9SSVNFID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX0FVVE9SSVNFJylcbiAgZWRfRVRBVF9TVEFHRV9ERVBPU0UgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfREVQT1NFJylcbiAgZWRfRVRBVF9TVEFHRV9WQUxJREUgPSBsb2FkUXVpbGwoJ0VUQVRfU1RBR0VfVkFMSURFJylcbiAgZWRfRVRBVF9TVEFHRV9SRUZVUyA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9SRUZVUycpXG4gIGVkX0VUQVRfU1RBR0VfSU5DT01QTEVUID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX0lOQ09NUExFVCcpXG4gIGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9JTVBSSU1FID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX0NPTlZFTlRJT05fSU1QUklNRScpXG4gIGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9FTlZPWUVFID0gbG9hZFF1aWxsKCdFVEFUX1NUQUdFX0NPTlZFTlRJT05fRU5WT1lFRScpXG4gIGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRSA9IGxvYWRRdWlsbCgnRVRBVF9TVEFHRV9DT05WRU5USU9OX1JFQ1VFJylcblxuICB0YWJFZCA9IHtcbiAgICAnZWRfRVRBVF9TVEFHRV9BVVRPUklTRSc6IGVkX0VUQVRfU1RBR0VfQVVUT1JJU0UsXG4gICAgJ2VkX0VUQVRfU1RBR0VfREVQT1NFJzogZWRfRVRBVF9TVEFHRV9ERVBPU0UsXG4gICAgJ2VkX0VUQVRfU1RBR0VfVkFMSURFJzogZWRfRVRBVF9TVEFHRV9WQUxJREUsXG4gICAgJ2VkX0VUQVRfU1RBR0VfUkVGVVMnOiBlZF9FVEFUX1NUQUdFX1JFRlVTLFxuICAgICdlZF9FVEFUX1NUQUdFX0lOQ09NUExFVCc6IGVkX0VUQVRfU1RBR0VfSU5DT01QTEVULFxuICAgICdlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fSU1QUklNRSc6IGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9JTVBSSU1FLFxuICAgICdlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fRU5WT1lFRSc6IGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9FTlZPWUVFLFxuICAgICdlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fUkVDVUUnOiBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fUkVDVUVcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5lbnJlZ2lzdHJlTW9kZWxlTWFpbCcsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZXRhdCA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIGNvbnN0IG9uZ2xldCA9ICQodGhpcykuZGF0YSgnZWQnKVxuXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9zdGFnZV9wZXJpb2RlX2NvdXJyaWVyX3NhdXZlZ2FyZGVfbW9kZWxlJywge1xuICAgICAgdXVpZDogJCh0aGlzKS5kYXRhKCdwZXJpb2RlJyksXG4gICAgICBtYWlsOiBldGF0XG4gICAgfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgbWVzc2FnZTogdGFiRWRbJ2VkXycgKyBvbmdsZXRdLnJvb3QuaW5uZXJIVE1MLFxuICAgICAgc3VqZXQ6ICQoJyNzdWpldF8nICsgZXRhdCkudmFsKClcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ01vZMOobGUgZW5yZWdpc3Ryw6kgIScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3F1aWxsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDUvMDkvMjAyMCAxMzoyNVxuXG5pbXBvcnQgJy4uL2Nzcy9xdWlsbC5jc3MnXG5cbmltcG9ydCBRdWlsbCBmcm9tICdxdWlsbC9jb3JlJ1xuXG5pbXBvcnQgVG9vbGJhciBmcm9tICdxdWlsbC9tb2R1bGVzL3Rvb2xiYXInXG5pbXBvcnQgU25vdyBmcm9tICdxdWlsbC90aGVtZXMvc25vdydcblxuaW1wb3J0IEJvbGQgZnJvbSAncXVpbGwvZm9ybWF0cy9ib2xkJ1xuaW1wb3J0IEl0YWxpYyBmcm9tICdxdWlsbC9mb3JtYXRzL2l0YWxpYydcbmltcG9ydCBVbmRlcmxpbmUgZnJvbSAncXVpbGwvZm9ybWF0cy91bmRlcmxpbmUnXG5pbXBvcnQgSGVhZGVyIGZyb20gJ3F1aWxsL2Zvcm1hdHMvaGVhZGVyJ1xuaW1wb3J0IHtBbGlnblN0eWxlfSBmcm9tICdxdWlsbC9mb3JtYXRzL2FsaWduJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG5cblF1aWxsLnJlZ2lzdGVyKHtcbiAgJ21vZHVsZXMvdG9vbGJhcic6IFRvb2xiYXIsXG4gICd0aGVtZXMvc25vdyc6IFNub3csXG4gICdmb3JtYXRzL2JvbGQnOiBCb2xkLFxuICAnZm9ybWF0cy9pdGFsaWMnOiBJdGFsaWMsXG4gICdmb3JtYXRzL3VuZGVybGluZSc6IFVuZGVybGluZSxcbiAgJ2Zvcm1hdHMvaGVhZGVyJzogSGVhZGVyLFxuICAnZm9ybWF0cy9hbGlnbic6IEFsaWduU3R5bGVcbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgUXVpbGxcblxubGV0IG9wdGlvbnMgPSB7XG4gIHRoZW1lOiAnc25vdycsXG4gIHRvb2xiYXI6ICdmdWxsJ1xufVxuXG5sZXQgdG9vbGJhckZ1bGxPcHRpb25zID0gW1xuICBbXG4gICAgeydoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdfSxcbiAgICB7J3NpemUnOiBbJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJ119XG4gIF0sXG4gIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10sICAgICAgICAvLyB0b2dnbGVkIGJ1dHRvbnNcbiAgW3snY29sb3InOiBbXX0sIHsnYmFja2dyb3VuZCc6IFtdfV0sICAgICAgICAgIC8vIGRyb3Bkb3duIHdpdGggZGVmYXVsdHMgZnJvbSB0aGVtZVxuICBbeydoZWFkZXInOiAxfSwgeydoZWFkZXInOiAyfSwgJ2Jsb2NrcXVvdGUnLCAnY29kZS1ibG9jayddLFxuICBbeydsaXN0JzogJ29yZGVyZWQnfSwgeydsaXN0JzogJ2J1bGxldCd9LCB7J2luZGVudCc6ICctMSd9LCB7J2luZGVudCc6ICcrMSd9XSxcbiAgWydsaW5rJ10sXG4gIFsnY2xlYW4nXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGZvcm1hdHRpbmcgYnV0dG9uXG5dXG5cbmlmIChvcHRpb25zLnRvb2xiYXIgIT09IHVuZGVmaW5lZCkge1xuICB2YXIgdG9vbGJhciA9IG9wdGlvbnMudG9vbGJhci50b0xvd2VyQ2FzZSgpXG4gIGlmICh0b29sYmFyID09ICdmdWxsJykge1xuICAgIG9wdGlvbnMubW9kdWxlcyA9IHtcbiAgICAgIC8vc3ludGF4OiAndHJ1ZScsXG4gICAgICB0b29sYmFyOiB0b29sYmFyRnVsbE9wdGlvbnNcbiAgICB9XG4gIH1cbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBpbml0UXVpbGwoKVxufSlcblxuJChkb2N1bWVudCkuYWpheENvbXBsZXRlKGZ1bmN0aW9uICgpIHtcbiAgaW5pdFF1aWxsKClcbn0pXG5cbmZ1bmN0aW9uIGluaXRRdWlsbCAoKSB7XG4gIGxldCBvYmogPSAkKCdbZGF0YS1wcm92aWRlPVwicXVpbGxcIl0nKVxuICBpZiAob2JqLmxlbmd0aCA9PT0gMSkge1xuICAgIG5ldyBRdWlsbCgkKCdbZGF0YS1wcm92aWRlPVwicXVpbGxcIl0nKVswXSwgb3B0aW9ucylcbiAgfVxufVxuXG5cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy91dGlsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMzAvMDcvMjAyMCAxMToxOFxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxuZnVuY3Rpb24gcmVhZFVybE1lbnUgKCR1cmwpIHtcbiAgY29uc3QgJGVsdCA9ICR1cmwuc3BsaXQoJy8nKVxuICBsZXQgJGZpcnN0RWx0ID0gMlxuICBpZiAoJGVsdFsxXSA9PT0gJ2luZGV4LnBocCcpIHtcbiAgICBpZiAoJGVsdC5sZW5ndGggPiAxKSB7XG4gICAgICAkZmlyc3RFbHQgPSAzXG4gICAgfVxuICB9XG5cbiAgaWYgKCRlbHRbJGZpcnN0RWx0XSA9PT0gJ3N1cGVyLWFkbWluaXN0cmF0aW9uJykge1xuICAgICRmaXJzdEVsdCA9ICRmaXJzdEVsdCArIDFcbiAgfVxuXG4gIGlmICgkZWx0WyRlbHQubGVuZ3RoIC0gMV0gPT09ICcnKSB7XG4gICAgJGVsdC5wb3AoKVxuICB9XG5cbiAgJCgnLm1lbnUtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAkKCcjbWVudS0nICsgJGVsdFskZmlyc3RFbHRdKS5hZGRDbGFzcygnYWN0aXZlJylcbn1cblxuLy9jb2xvcmlzZSBsZSBib24gbWVudVxucmVhZFVybE1lbnUoJChsb2NhdGlvbikuYXR0cigncGF0aG5hbWUnKSlcblxuU3dhbC5taXhpbih7XG4gIGN1c3RvbUNsYXNzOiB7XG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gIH0sXG4gIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxufSlcbi8vcG9wIHVwIGRlIGNvbmZpcm1hdGlvbiBkZSBzdXBwcmVzc2lvblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdXBwcmltZXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJylcbiAgY29uc3QgY3NyZiA9ICQodGhpcykuZGF0YSgnY3NyZicpXG4gIFN3YWwuZmlyZSh7XG4gICAgdGl0bGU6ICdDb25maXJtZXIgbGEgc3VwcHJlc3Npb24gPycsXG4gICAgdGV4dDogJ0xcXCdvcMOpcmF0aW9uIG5lIHBvdXJyYSBwYXMgw6p0cmUgYW5udWzDqWUuJyxcbiAgICBpY29uOiAnd2FybmluZycsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBqZSBjb25maXJtZScsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlcicsXG4gICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgfSxcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgX3Rva2VuOiBjc3JmXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGlmIChpZC5oYXNPd25Qcm9wZXJ0eSgncmVkaXJlY3QnKSAmJiBpZC5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBpZC51cmxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI2xpZ25lXycgKyBpZCkuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgICAgICAgICAgYWRkQ2FsbG91dCgnU3VwcHJlc3Npb24gZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqHMnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogJ1N1cHByaW3DqSEnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTFxcJ2VucmVnaXN0cmVtZW50IGEgw6l0w6kgc3VwcHJpbcOpLicsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYWxsb3V0IChtZXNzYWdlLCBsYWJlbCkge1xuICBjb25zb2xlLmxvZygnY2FsbG91dCcpXG4gIHZhciB0cmFuc2xhdGUgPSBuZXcgQXJyYXkoKVxuICB0cmFuc2xhdGVbJ3N1Y2Nlc3MnXSA9ICdTdWNjw6hzJ1xuICB0cmFuc2xhdGVbJ2RhbmdlciddID0gJ0VycmV1cidcbiAgdHJhbnNsYXRlWyd3YXJuaW5nJ10gPSAnQXR0ZW50aW9uJ1xuXG4gIGNvbnN0IGh0bWwgPSAnPGRpdiBjbGFzcz1cImNhbGxvdXQgY2FsbG91dC0nICsgbGFiZWwgKyAnXCIgcm9sZT1cImFsZXJ0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImNhbGxvdXRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8aDU+JyArIHRyYW5zbGF0ZVtsYWJlbF0gKyAnPC9oNT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8cD4nICsgbWVzc2FnZSArICc8L3A+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4nXG5cbiAgJCgnI21haW5Db250ZW50JykucHJlcGVuZChodG1sKS5zbGlkZURvd24oJ3Nsb3cnKVxuICAkKCcuY2FsbG91dCcpLmRlbGF5KDUwMDApLnNsaWRlVXAoJ3Nsb3cnKVxufVxuXG4vL0VkaXRhYmxlXG5sZXQgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAnJ1xuXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubXllZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG15RWRpdEluaXRpYWxDb250ZW50ID0gJCh0aGlzKVxuICBsZXQgaHRtbCA9ICcnXG4gIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvL3RvZG86IEEgZmluYWxpc2VyXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ3RvdG8nKVxuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBteUVkaXRJbml0aWFsQ29udGVudC5odG1sKHZhbClcbiAgICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlSW5wdXQgKCRvYmopIHtcbiAgbGV0ICRodG1sID0gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJyArICRvYmouaHRtbCgpLnRyaW0oKSArICdcIiBpZD1cIm15ZWRpdC1pbnB1dFwiIC8+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLXN1Y2Nlc3MgYnRuLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj4nXG4gICRodG1sID0gJGh0bWwgKyAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3F1YXJlIGJ0bi1zbSBidG4tZGFuZ2VyIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+PC9kaXY+J1xuICByZXR1cm4gJGh0bWxcbn1cblxualF1ZXJ5LmZuLmRhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICByZXR1cm4gJCh0aGlzKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpIHx8IGRlZlxufVxuXG5qUXVlcnkuZm4uaGFzRGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJCh0aGlzKVswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFUb09wdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4WzFdLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFPcHRpb25zIChlbCwgY2FzdExpc3QpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fVxuICAkLmVhY2goJChlbCkuZGF0YSgpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXG4gICAga2V5ID0gZGF0YVRvT3B0aW9uKGtleSlcblxuICAgIC8vIEVzY2FwZSBkYXRhLXByb3ZpZGVcbiAgICBpZiAoa2V5ID09ICdwcm92aWRlJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNhc3RMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHR5cGUgPSBjYXN0TGlzdFtrZXldXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiBvcHRpb25zXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
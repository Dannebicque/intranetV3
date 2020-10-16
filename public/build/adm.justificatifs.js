(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.justificatifs"],{

/***/ "./assets/js/pages/adm.justificatifs.js":
/*!**********************************************!*\
  !*** ./assets/js/pages/adm.justificatifs.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.justificatifs.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 11:18

$(document).on('click', '.justificatif-accepte', function (e) {
  var justificatif = $(this).data('justificatif');
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', {
      uuid: justificatif,
      etat: 'A'
    }),
    success: function success(e) {
      var bx = $('.bx_' + justificatif);
      var parent = bx.parent();
      bx.remove();
      var html = '<a href="#" class="btn btn-success btn-outline"><i class="ti-check"></i>Accepté</a>';
      html = html + '<button data-justificatif="' + justificatif + '"\n' + 'class="btn btn-danger btn-outline btn-square justificatif-annuler bx_' + justificatif + '" data-provide="tooltip" data-placement="bottom"\n' + 'title="Annuler"><i\n' + 'class="material-icons">undo</i></button>';
      parent.prepend(html);
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Justificatif d\'absence validé !', 'success');
    },
    error: function error(e) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Une erreur est survenue !', 'danger');
    }
  });
});
$(document).on('click', '.justificatif-refuse', function (e) {
  var justificatif = $(this).data('justificatif');
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', {
      uuid: justificatif,
      etat: 'R'
    }),
    success: function success(e) {
      var bx = $('.bx_' + justificatif);
      var parent = bx.parent();
      bx.remove();
      var html = '<a href="#" class="btn btn-warning btn-outline"><i class="ti-check"></i>Refusé</a>';
      html = html + '<button data-justificatif="' + justificatif + '"\n' + 'class="btn btn-danger btn-outline btn-square justificatif-annuler bx_' + justificatif + '" data-provide="tooltip" data-placement="bottom"\n' + 'title="Annuler"><i\n' + 'class="material-icons">undo</i></button>';
      parent.prepend(html);
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Justificatif d\'absence refusé !', 'success');
    },
    error: function error() {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Une erreur est survenue !', 'danger');
    }
  });
});
$(document).on('click', '.justificatif-annuler', function (e) {
  var justificatif = $(this).data('justificatif');
  $.ajax({
    url: Routing.generate('administration_absence_justificatif_change_etat', {
      uuid: justificatif,
      etat: 'D'
    }),
    success: function success(e) {
      var bx = $('.bx_' + justificatif);
      var parent = bx.parent();
      bx.remove();
      var html = '<a href="#"\n' + '                               class="btn btn-success btn-outline btn-square justificatif-accepte bx_' + justificatif + '" data-provide="tooltip"\n' + '                               data-justificatif="' + justificatif + '"\n' + '                               data-placement="bottom" title="atitle.accepter.le.justificatif"><i\n' + '                                        class="ti-check"></i></a>\n' + '                            <a href="#"\n' + '                               class="btn btn-warning btn-outline btn-square justificatif-refuse bx_' + justificatif + '" data-provide="tooltip"\n' + '                               data-justificatif="' + justificatif + '"\n' + '                               data-placement="bottom" title="atitle.refuser.le.justificatif"><i\n' + '                                        class="ti-na"></i></a>\n' + '\n' + '                            <a href="' + Routing.generate('administration_absence_justificatif_delete', {
        id: justificatif
      }) + '" data-csrf="{{ csrf_token(\'delete\' ~ justificatif.uuidString) }}"\n' + '                               class="btn btn-danger btn-outline btn-square supprimer bx_' + justificatif + '"><i\n' + '                                        class="ti-close" data-provide="tooltip" data-placement="bottom"\n' + '                                        title="atitle.supprimer"></i></a>';
      parent.prepend(html);
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Etat du justificatif d\'absence annulé !', 'success');
    },
    error: function error(e) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Une erreur est survenue !', 'danger');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

},[["./assets/js/pages/adm.justificatifs.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~3a8cbb67","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7452d955","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~0d230585"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLmp1c3RpZmljYXRpZnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCJlIiwianVzdGlmaWNhdGlmIiwiZGF0YSIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJ1dWlkIiwiZXRhdCIsInN1Y2Nlc3MiLCJieCIsInBhcmVudCIsInJlbW92ZSIsImh0bWwiLCJwcmVwZW5kIiwiYWRkQ2FsbG91dCIsImVycm9yIiwiaWQiLCJyZWFkVXJsTWVudSIsIiR1cmwiLCIkZWx0Iiwic3BsaXQiLCIkZmlyc3RFbHQiLCJsZW5ndGgiLCJwb3AiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwibG9jYXRpb24iLCJhdHRyIiwiU3dhbCIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJwcmV2ZW50RGVmYXVsdCIsImNzcmYiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsInR5cGUiLCJfdG9rZW4iLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJjbG9zZXN0IiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJzbGlkZURvd24iLCJkZWxheSIsInNsaWRlVXAiLCJteUVkaXRJbml0aWFsQ29udGVudCIsIkVkaXRPbkxpbmUiLCJnZW5lcmVJbnB1dCIsInJlcGxhY2VXaXRoIiwiZm9jdXMiLCJrZXlDb2RlIiwidXBkYXRlRGF0YSIsIndoaWNoIiwidmFsIiwiZmllbGQiLCJtZXRob2QiLCIkb2JqIiwiJGh0bWwiLCJ0cmltIiwialF1ZXJ5IiwiZm4iLCJkYXRhQXR0ciIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImVsIiwiY2FzdExpc3QiLCJvcHRpb25zIiwiZWFjaCIsImtleSIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLHVCQUF4QixFQUFpRCxVQUFVQyxDQUFWLEVBQWE7QUFDNUQsTUFBTUMsWUFBWSxHQUFHSixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFLLElBQVIsQ0FBYSxjQUFiLENBQXJCO0FBQ0FMLEdBQUMsQ0FBQ00sSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLGlEQUFqQixFQUFvRTtBQUFDQyxVQUFJLEVBQUVOLFlBQVA7QUFBcUJPLFVBQUksRUFBRTtBQUEzQixLQUFwRSxDQURBO0FBRUxDLFdBQU8sRUFBRSxpQkFBVVQsQ0FBVixFQUFhO0FBQ3BCLFVBQU1VLEVBQUUsR0FBR2IsQ0FBQyxDQUFDLFNBQVNJLFlBQVYsQ0FBWjtBQUNBLFVBQU1VLE1BQU0sR0FBR0QsRUFBRSxDQUFDQyxNQUFILEVBQWY7QUFDQUQsUUFBRSxDQUFDRSxNQUFIO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLHFGQUFYO0FBQ0FBLFVBQUksR0FBR0EsSUFBSSxHQUFHLDZCQUFQLEdBQXVDWixZQUF2QyxHQUFzRCxLQUF0RCxHQUNMLHVFQURLLEdBQ3FFQSxZQURyRSxHQUNvRixv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LENBQUtDLFdBQUwsRUFBUDtBQUNELEdBRk0sQ0FBUDtBQUdEOztBQUVNLFNBQVNDLGNBQVQsQ0FBeUJDLEVBQXpCLEVBQTZCQyxRQUE3QixFQUF1QztBQUM1QyxNQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUNBbkcsK0NBQUMsQ0FBQ29HLElBQUYsQ0FBT3BHLDZDQUFDLENBQUNpRyxFQUFELENBQUQsQ0FBTTVGLElBQU4sRUFBUCxFQUFxQixVQUFVZ0csR0FBVixFQUFlbEQsS0FBZixFQUFzQjtBQUV6Q2tELE9BQUcsR0FBR1QsWUFBWSxDQUFDUyxHQUFELENBQWxCLENBRnlDLENBSXpDOztBQUNBLFFBQUlBLEdBQUcsSUFBSSxTQUFYLEVBQXNCO0FBQ3BCO0FBQ0Q7O0FBRUQsUUFBSUgsUUFBUSxJQUFJSSxTQUFoQixFQUEyQjtBQUN6QixVQUFJbEQsSUFBSSxHQUFHOEMsUUFBUSxDQUFDRyxHQUFELENBQW5COztBQUNBLGNBQVFqRCxJQUFSO0FBQ0UsYUFBSyxNQUFMO0FBQ0VELGVBQUssR0FBR29ELE9BQU8sQ0FBQ3BELEtBQUQsQ0FBZjtBQUNBOztBQUVGLGFBQUssS0FBTDtBQUNFQSxlQUFLLEdBQUdxRCxNQUFNLENBQUNyRCxLQUFELENBQWQ7QUFDQTs7QUFFRixhQUFLLE9BQUw7QUFDRUEsZUFBSyxHQUFHQSxLQUFLLENBQUMzQixLQUFOLENBQVksR0FBWixDQUFSO0FBQ0E7O0FBRUY7QUFiRjtBQWdCRDs7QUFFRDJFLFdBQU8sQ0FBQ0UsR0FBRCxDQUFQLEdBQWVsRCxLQUFmO0FBQ0QsR0E5QkQ7QUFnQ0EsU0FBT2dELE9BQVA7QUFDRCxDIiwiZmlsZSI6ImFkbS5qdXN0aWZpY2F0aWZzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2FkbS5qdXN0aWZpY2F0aWZzLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMzAvMDcvMjAyMCAxMToxOFxuXG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuanVzdGlmaWNhdGlmLWFjY2VwdGUnLCBmdW5jdGlvbiAoZSkge1xuICBjb25zdCBqdXN0aWZpY2F0aWYgPSAkKHRoaXMpLmRhdGEoJ2p1c3RpZmljYXRpZicpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9hYnNlbmNlX2p1c3RpZmljYXRpZl9jaGFuZ2VfZXRhdCcsIHt1dWlkOiBqdXN0aWZpY2F0aWYsIGV0YXQ6ICdBJ30pLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zdCBieCA9ICQoJy5ieF8nICsganVzdGlmaWNhdGlmKVxuICAgICAgY29uc3QgcGFyZW50ID0gYngucGFyZW50KClcbiAgICAgIGJ4LnJlbW92ZSgpXG4gICAgICBsZXQgaHRtbCA9ICc8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lXCI+PGkgY2xhc3M9XCJ0aS1jaGVja1wiPjwvaT5BY2NlcHTDqTwvYT4nXG4gICAgICBodG1sID0gaHRtbCArICc8YnV0dG9uIGRhdGEtanVzdGlmaWNhdGlmPVwiJyArIGp1c3RpZmljYXRpZiArICdcIlxcbicgK1xuICAgICAgICAnY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tb3V0bGluZSBidG4tc3F1YXJlIGp1c3RpZmljYXRpZi1hbm51bGVyIGJ4XycgKyBqdXN0aWZpY2F0aWYgKyAnXCIgZGF0YS1wcm92aWRlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCJcXG4nICtcbiAgICAgICAgJ3RpdGxlPVwiQW5udWxlclwiPjxpXFxuJyArXG4gICAgICAgICdjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+dW5kbzwvaT48L2J1dHRvbj4nXG4gICAgICBwYXJlbnQucHJlcGVuZChodG1sKVxuICAgICAgYWRkQ2FsbG91dCgnSnVzdGlmaWNhdGlmIGRcXCdhYnNlbmNlIHZhbGlkw6kgIScsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRkQ2FsbG91dCgnVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIScsICdkYW5nZXInKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuanVzdGlmaWNhdGlmLXJlZnVzZScsIGZ1bmN0aW9uIChlKSB7XG4gIGNvbnN0IGp1c3RpZmljYXRpZiA9ICQodGhpcykuZGF0YSgnanVzdGlmaWNhdGlmJylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2Fic2VuY2VfanVzdGlmaWNhdGlmX2NoYW5nZV9ldGF0Jywge3V1aWQ6IGp1c3RpZmljYXRpZiwgZXRhdDogJ1InfSksXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IGJ4ID0gJCgnLmJ4XycgKyBqdXN0aWZpY2F0aWYpXG4gICAgICBjb25zdCBwYXJlbnQgPSBieC5wYXJlbnQoKVxuICAgICAgYngucmVtb3ZlKClcbiAgICAgIGxldCBodG1sID0gJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmcgYnRuLW91dGxpbmVcIj48aSBjbGFzcz1cInRpLWNoZWNrXCI+PC9pPlJlZnVzw6k8L2E+J1xuICAgICAgaHRtbCA9IGh0bWwgKyAnPGJ1dHRvbiBkYXRhLWp1c3RpZmljYXRpZj1cIicgKyBqdXN0aWZpY2F0aWYgKyAnXCJcXG4nICtcbiAgICAgICAgJ2NsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLW91dGxpbmUgYnRuLXNxdWFyZSBqdXN0aWZpY2F0aWYtYW5udWxlciBieF8nICsganVzdGlmaWNhdGlmICsgJ1wiIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiXFxuJyArXG4gICAgICAgICd0aXRsZT1cIkFubnVsZXJcIj48aVxcbicgK1xuICAgICAgICAnY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnVuZG88L2k+PC9idXR0b24+J1xuICAgICAgcGFyZW50LnByZXBlbmQoaHRtbClcbiAgICAgIGFkZENhbGxvdXQoJ0p1c3RpZmljYXRpZiBkXFwnYWJzZW5jZSByZWZ1c8OpICEnLCAnc3VjY2VzcycpXG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgYWRkQ2FsbG91dCgnVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIScsICdkYW5nZXInKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuanVzdGlmaWNhdGlmLWFubnVsZXInLCBmdW5jdGlvbiAoZSkge1xuICBjb25zdCBqdXN0aWZpY2F0aWYgPSAkKHRoaXMpLmRhdGEoJ2p1c3RpZmljYXRpZicpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9hYnNlbmNlX2p1c3RpZmljYXRpZl9jaGFuZ2VfZXRhdCcsIHt1dWlkOiBqdXN0aWZpY2F0aWYsIGV0YXQ6ICdEJ30pLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zdCBieCA9ICQoJy5ieF8nICsganVzdGlmaWNhdGlmKVxuICAgICAgY29uc3QgcGFyZW50ID0gYngucGFyZW50KClcbiAgICAgIGJ4LnJlbW92ZSgpXG4gICAgICBjb25zdCBodG1sID0gJzxhIGhyZWY9XCIjXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tb3V0bGluZSBidG4tc3F1YXJlIGp1c3RpZmljYXRpZi1hY2NlcHRlIGJ4XycgKyBqdXN0aWZpY2F0aWYgKyAnXCIgZGF0YS1wcm92aWRlPVwidG9vbHRpcFwiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1qdXN0aWZpY2F0aWY9XCInICsganVzdGlmaWNhdGlmICsgJ1wiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT1cImF0aXRsZS5hY2NlcHRlci5sZS5qdXN0aWZpY2F0aWZcIj48aVxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGktY2hlY2tcIj48L2k+PC9hPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4td2FybmluZyBidG4tb3V0bGluZSBidG4tc3F1YXJlIGp1c3RpZmljYXRpZi1yZWZ1c2UgYnhfJyArIGp1c3RpZmljYXRpZiArICdcIiBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWp1c3RpZmljYXRpZj1cIicgKyBqdXN0aWZpY2F0aWYgKyAnXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPVwiYXRpdGxlLnJlZnVzZXIubGUuanVzdGlmaWNhdGlmXCI+PGlcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRpLW5hXCI+PC9pPjwvYT5cXG4nICtcbiAgICAgICAgJ1xcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCInICsgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fYWJzZW5jZV9qdXN0aWZpY2F0aWZfZGVsZXRlJywge2lkOiBqdXN0aWZpY2F0aWZ9KSArICdcIiBkYXRhLWNzcmY9XCJ7eyBjc3JmX3Rva2VuKFxcJ2RlbGV0ZVxcJyB+IGp1c3RpZmljYXRpZi51dWlkU3RyaW5nKSB9fVwiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tb3V0bGluZSBidG4tc3F1YXJlIHN1cHByaW1lciBieF8nICsganVzdGlmaWNhdGlmICsgJ1wiPjxpXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0aS1jbG9zZVwiIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJhdGl0bGUuc3VwcHJpbWVyXCI+PC9pPjwvYT4nXG4gICAgICBwYXJlbnQucHJlcGVuZChodG1sKVxuICAgICAgYWRkQ2FsbG91dCgnRXRhdCBkdSBqdXN0aWZpY2F0aWYgZFxcJ2Fic2VuY2UgYW5udWzDqSAhJywgJ3N1Y2Nlc3MnKVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBhZGRDYWxsb3V0KCdVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhJywgJ2RhbmdlcicpXG4gICAgfVxuICB9KVxufSlcblxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3V0aWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxMS8xMC8yMDIwIDA4OjA0XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3Qucm93KFwiI2xpZ25lX1wiK2lkKS5yZW1vdmUoKS5kcmF3KCk7ID08IGRhdGF0dGFibGUgdG9kbzogcmVtb3ZlIGxpZ25lIHNpIGRhdGF0YWJsZSA/PyBwcm9ibMOobWUgZGFucyBhZG0+cGVyc29ubmVsXG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2Uge1xuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiBlLndoaWNoID09PSAyNykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG15RWRpdEluaXRpYWxDb250ZW50Lmh0bWwodmFsKVxuICAgICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gICAgICBFZGl0T25MaW5lID0gZmFsc2VcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG4gIGxldCAkaHRtbCA9ICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiAvPidcbiAgJGh0bWwgPSAkaHRtbCArICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLXNtIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLWRhbmdlciBidG4tb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPjwvZGl2PidcbiAgcmV0dXJuICRodG1sXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
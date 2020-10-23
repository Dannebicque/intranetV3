(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.notes"],{

/***/ "./assets/js/pages/adm.notes.js":
/*!**************************************!*\
  !*** ./assets/js/pages/adm.notes.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.notes.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 11:18

$(document).on('click', '.optAfficher', function () {
  var evaluation = $(this).data('id');
  var $child = $(this).children('i');
  var $a = $(this);
  $.ajax({
    url: Routing.generate('administration_evaluation_visibilite', {
      uuid: evaluation
    }),
    success: function success() {
      if ($child.hasClass('fa-eye')) {
        $a.addClass('btn-danger');
        $a.removeClass('btn-info').removeClass('btn-outline');
        $child.removeClass('fa-eye');
        $child.addClass('fa-eye-slash');
        $a.attr('title', 'Evaluation masquée. Rendre visible l\'évaluation');
      } else {
        $a.removeClass('btn-danger');
        $a.addClass('btn-info').addClass('btn-outline');
        $child.removeClass('fa-eye-slash');
        $child.addClass('fa-eye');
        $a.attr('title', 'Evaluation visible. Masquer l\'évaluation');
      }

      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Visibilité de l\'évaluation modifiée !', 'success');
    },
    error: function error() {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Une erreur est survenue !', 'danger');
    }
  });
});
$(document).on('click', '.optVerrouiller', function () {
  var evaluation = $(this).data('id');
  var $child = $(this).children('i');
  var $a = $(this);
  $.ajax({
    url: Routing.generate('administration_evaluation_modifiable', {
      uuid: evaluation
    }),
    success: function success() {
      if ($child.hasClass('fa-lock-open')) {
        console.log('ok');
        $a.addClass('btn-danger');
        $a.removeClass('btn-warning').removeClass('btn-outline');
        $child.removeClass('fa-lock-open');
        $child.addClass('fa-lock');
        $a.attr('data-original-title', 'Modification interdite. Autoriser la modificaiton');
      } else {
        $a.removeClass('btn-danger');
        $a.addClass('btn-warning').addClass('btn-outline');
        $child.removeClass('fa-lock');
        $child.addClass('fa-lock-open');
        $a.attr('data-original-title', 'Modification autorisée. Interdire la modification');
      }

      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Vérouillage de l\'évaluation modifiée !', 'success');
    },
    error: function error() {
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

},[["./assets/js/pages/adm.notes.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~3a8cbb67","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7452d955","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~0d230585"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLm5vdGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiZXZhbHVhdGlvbiIsImRhdGEiLCIkY2hpbGQiLCJjaGlsZHJlbiIsIiRhIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInV1aWQiLCJzdWNjZXNzIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYXR0ciIsImFkZENhbGxvdXQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCIkc3RvcENhdGNoRW50ZXIiLCJyZWFkVXJsTWVudSIsIiR1cmwiLCIkZWx0Iiwic3BsaXQiLCIkZmlyc3RFbHQiLCJsZW5ndGgiLCJwb3AiLCJsb2NhdGlvbiIsIlN3YWwiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3NyZiIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwidHlwZSIsIl90b2tlbiIsImlkIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiY2xvc2VzdCIsInJlbW92ZSIsInhociIsImFqYXhPcHRpb25zIiwidGhyb3duRXJyb3IiLCJkaXNtaXNzIiwibWVzc2FnZSIsImxhYmVsIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJodG1sIiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZVRleHRBcmVhIiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ3aGljaCIsInZhbCIsImZpZWxkIiwibWV0aG9kIiwiJG9iaiIsInRyaW0iLCJqUXVlcnkiLCJmbiIsImRhdGFBdHRyIiwibmFtZSIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRpb25zIiwiZWwiLCJjYXN0TGlzdCIsIm9wdGlvbnMiLCJlYWNoIiwia2V5IiwidW5kZWZpbmVkIiwiQm9vbGVhbiIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsY0FBeEIsRUFBd0MsWUFBWTtBQUNsRCxNQUFNQyxVQUFVLEdBQUdILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksSUFBUixDQUFhLElBQWIsQ0FBbkI7QUFDQSxNQUFNQyxNQUFNLEdBQUdMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sUUFBUixDQUFpQixHQUFqQixDQUFmO0FBQ0EsTUFBTUMsRUFBRSxHQUFHUCxDQUFDLENBQUMsSUFBRCxDQUFaO0FBQ0FBLEdBQUMsQ0FBQ1EsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHNDQUFqQixFQUF5RDtBQUFDQyxVQUFJLEVBQUVUO0FBQVAsS0FBekQsQ0FEQTtBQUVMVSxXQUFPLEVBQUUsbUJBQVk7QUFDbkIsVUFBSVIsTUFBTSxDQUFDUyxRQUFQLENBQWdCLFFBQWhCLENBQUosRUFBK0I7QUFDN0JQLFVBQUUsQ0FBQ1EsUUFBSCxDQUFZLFlBQVo7QUFDQVIsVUFBRSxDQUFDUyxXQUFILENBQWUsVUFBZixFQUEyQkEsV0FBM0IsQ0FB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QUdEOztBQUVNLFNBQVNDLGNBQVQsQ0FBeUJDLEVBQXpCLEVBQTZCQyxRQUE3QixFQUF1QztBQUM1QyxNQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUNBckcsK0NBQUMsQ0FBQ3NHLElBQUYsQ0FBT3RHLDZDQUFDLENBQUNtRyxFQUFELENBQUQsQ0FBTS9GLElBQU4sRUFBUCxFQUFxQixVQUFVbUcsR0FBVixFQUFlcEQsS0FBZixFQUFzQjtBQUV6Q29ELE9BQUcsR0FBR1QsWUFBWSxDQUFDUyxHQUFELENBQWxCLENBRnlDLENBSXpDOztBQUNBLFFBQUlBLEdBQUcsSUFBSSxTQUFYLEVBQXNCO0FBQ3BCO0FBQ0Q7O0FBRUQsUUFBSUgsUUFBUSxJQUFJSSxTQUFoQixFQUEyQjtBQUN6QixVQUFJcEQsSUFBSSxHQUFHZ0QsUUFBUSxDQUFDRyxHQUFELENBQW5COztBQUNBLGNBQVFuRCxJQUFSO0FBQ0UsYUFBSyxNQUFMO0FBQ0VELGVBQUssR0FBR3NELE9BQU8sQ0FBQ3RELEtBQUQsQ0FBZjtBQUNBOztBQUVGLGFBQUssS0FBTDtBQUNFQSxlQUFLLEdBQUd1RCxNQUFNLENBQUN2RCxLQUFELENBQWQ7QUFDQTs7QUFFRixhQUFLLE9BQUw7QUFDRUEsZUFBSyxHQUFHQSxLQUFLLENBQUN6QixLQUFOLENBQVksR0FBWixDQUFSO0FBQ0E7O0FBRUY7QUFiRjtBQWdCRDs7QUFFRDJFLFdBQU8sQ0FBQ0UsR0FBRCxDQUFQLEdBQWVwRCxLQUFmO0FBQ0QsR0E5QkQ7QUFnQ0EsU0FBT2tELE9BQVA7QUFDRCxDIiwiZmlsZSI6ImFkbS5ub3Rlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0ubm90ZXMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAzMC8wNy8yMDIwIDExOjE4XG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcub3B0QWZmaWNoZXInLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGV2YWx1YXRpb24gPSAkKHRoaXMpLmRhdGEoJ2lkJylcbiAgY29uc3QgJGNoaWxkID0gJCh0aGlzKS5jaGlsZHJlbignaScpXG4gIGNvbnN0ICRhID0gJCh0aGlzKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fZXZhbHVhdGlvbl92aXNpYmlsaXRlJywge3V1aWQ6IGV2YWx1YXRpb259KSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJGNoaWxkLmhhc0NsYXNzKCdmYS1leWUnKSkge1xuICAgICAgICAkYS5hZGRDbGFzcygnYnRuLWRhbmdlcicpXG4gICAgICAgICRhLnJlbW92ZUNsYXNzKCdidG4taW5mbycpLnJlbW92ZUNsYXNzKCdidG4tb3V0bGluZScpXG5cbiAgICAgICAgJGNoaWxkLnJlbW92ZUNsYXNzKCdmYS1leWUnKVxuICAgICAgICAkY2hpbGQuYWRkQ2xhc3MoJ2ZhLWV5ZS1zbGFzaCcpXG4gICAgICAgICRhLmF0dHIoJ3RpdGxlJywgJ0V2YWx1YXRpb24gbWFzcXXDqWUuIFJlbmRyZSB2aXNpYmxlIGxcXCfDqXZhbHVhdGlvbicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkYS5yZW1vdmVDbGFzcygnYnRuLWRhbmdlcicpXG4gICAgICAgICRhLmFkZENsYXNzKCdidG4taW5mbycpLmFkZENsYXNzKCdidG4tb3V0bGluZScpXG4gICAgICAgICRjaGlsZC5yZW1vdmVDbGFzcygnZmEtZXllLXNsYXNoJylcbiAgICAgICAgJGNoaWxkLmFkZENsYXNzKCdmYS1leWUnKVxuICAgICAgICAkYS5hdHRyKCd0aXRsZScsICdFdmFsdWF0aW9uIHZpc2libGUuIE1hc3F1ZXIgbFxcJ8OpdmFsdWF0aW9uJylcbiAgICAgIH1cbiAgICAgIGFkZENhbGxvdXQoJ1Zpc2liaWxpdMOpIGRlIGxcXCfDqXZhbHVhdGlvbiBtb2RpZmnDqWUgIScsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhJywgJ2RhbmdlcicpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5vcHRWZXJyb3VpbGxlcicsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZXZhbHVhdGlvbiA9ICQodGhpcykuZGF0YSgnaWQnKVxuICBjb25zdCAkY2hpbGQgPSAkKHRoaXMpLmNoaWxkcmVuKCdpJylcbiAgY29uc3QgJGEgPSAkKHRoaXMpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9ldmFsdWF0aW9uX21vZGlmaWFibGUnLCB7dXVpZDogZXZhbHVhdGlvbn0pLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkY2hpbGQuaGFzQ2xhc3MoJ2ZhLWxvY2stb3BlbicpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvaycpXG4gICAgICAgICRhLmFkZENsYXNzKCdidG4tZGFuZ2VyJylcbiAgICAgICAgJGEucmVtb3ZlQ2xhc3MoJ2J0bi13YXJuaW5nJykucmVtb3ZlQ2xhc3MoJ2J0bi1vdXRsaW5lJylcbiAgICAgICAgJGNoaWxkLnJlbW92ZUNsYXNzKCdmYS1sb2NrLW9wZW4nKVxuICAgICAgICAkY2hpbGQuYWRkQ2xhc3MoJ2ZhLWxvY2snKVxuICAgICAgICAkYS5hdHRyKCdkYXRhLW9yaWdpbmFsLXRpdGxlJywgJ01vZGlmaWNhdGlvbiBpbnRlcmRpdGUuIEF1dG9yaXNlciBsYSBtb2RpZmljYWl0b24nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGEucmVtb3ZlQ2xhc3MoJ2J0bi1kYW5nZXInKVxuICAgICAgICAkYS5hZGRDbGFzcygnYnRuLXdhcm5pbmcnKS5hZGRDbGFzcygnYnRuLW91dGxpbmUnKVxuICAgICAgICAkY2hpbGQucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2snKVxuICAgICAgICAkY2hpbGQuYWRkQ2xhc3MoJ2ZhLWxvY2stb3BlbicpXG4gICAgICAgICRhLmF0dHIoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLCAnTW9kaWZpY2F0aW9uIGF1dG9yaXPDqWUuIEludGVyZGlyZSBsYSBtb2RpZmljYXRpb24nKVxuICAgICAgfVxuICAgICAgYWRkQ2FsbG91dCgnVsOpcm91aWxsYWdlIGRlIGxcXCfDqXZhbHVhdGlvbiBtb2RpZmnDqWUgIScsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhJywgJ2RhbmdlcicpXG4gICAgfVxuICB9KVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy91dGlsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTYvMTAvMjAyMCAxNDo1NFxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxubGV0ICRzdG9wQ2F0Y2hFbnRlciA9IGZhbHNlXG5cbmZ1bmN0aW9uIHJlYWRVcmxNZW51ICgkdXJsKSB7XG4gIGNvbnN0ICRlbHQgPSAkdXJsLnNwbGl0KCcvJylcbiAgbGV0ICRmaXJzdEVsdCA9IDJcbiAgaWYgKCRlbHRbMV0gPT09ICdpbmRleC5waHAnKSB7XG4gICAgaWYgKCRlbHQubGVuZ3RoID4gMSkge1xuICAgICAgJGZpcnN0RWx0ID0gM1xuICAgIH1cbiAgfVxuXG4gIGlmICgkZWx0WyRmaXJzdEVsdF0gPT09ICdzdXBlci1hZG1pbmlzdHJhdGlvbicpIHtcbiAgICAkZmlyc3RFbHQgPSAkZmlyc3RFbHQgKyAxXG4gIH1cblxuICBpZiAoJGVsdFskZWx0Lmxlbmd0aCAtIDFdID09PSAnJykge1xuICAgICRlbHQucG9wKClcbiAgfVxuXG4gICQoJy5tZW51LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lbnUtJyArICRlbHRbJGZpcnN0RWx0XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59XG5cbi8vY29sb3Jpc2UgbGUgYm9uIG1lbnVcbnJlYWRVcmxNZW51KCQobG9jYXRpb24pLmF0dHIoJ3BhdGhuYW1lJykpXG5cblN3YWwubWl4aW4oe1xuICBjdXN0b21DbGFzczoge1xuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICB9LFxuICBidXR0b25zU3R5bGluZzogZmFsc2Vcbn0pXG4vL3BvcCB1cCBkZSBjb25maXJtYXRpb24gZGUgc3VwcHJlc3Npb25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3VwcHJpbWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gIGNvbnN0IGNzcmYgPSAkKHRoaXMpLmRhdGEoJ2NzcmYnKVxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIF90b2tlbjogY3NyZlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0JykgJiYgaWQuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gaWQudXJsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vdC5yb3coXCIjbGlnbmVfXCIraWQpLnJlbW92ZSgpLmRyYXcoKTsgPTwgZGF0YXR0YWJsZSB0b2RvOiByZW1vdmUgbGlnbmUgc2kgZGF0YXRhYmxlID8/IHByb2Jsw6htZSBkYW5zIGFkbT5wZXJzb25uZWxcbiAgICAgICAgICAgICQoJyNsaWduZV8nICsgaWQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdTdXBwcmltw6khJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0xcXCdlbnJlZ2lzdHJlbWVudCBhIMOpdMOpIHN1cHByaW3DqS4nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24hJyxcbiAgICAgICAgICAgIHRleHQ6ICdNZXJjaSBkZSByZW5vdXZlbGVyIGxcXCdvcMOpcmF0aW9uJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXG4gICAgICByZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCdcbiAgICApIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQ2FuY2VsbGVkJyxcbiAgICAgICAgdGV4dDogJ09LISBUb3V0IGVzdCBjb21tZSBhdmFudCAhJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbG91dCAobWVzc2FnZSwgbGFiZWwpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxvdXQnKVxuICB2YXIgdHJhbnNsYXRlID0gbmV3IEFycmF5KClcbiAgdHJhbnNsYXRlWydzdWNjZXNzJ10gPSAnU3VjY8OocydcbiAgdHJhbnNsYXRlWydkYW5nZXInXSA9ICdFcnJldXInXG4gIHRyYW5zbGF0ZVsnd2FybmluZyddID0gJ0F0dGVudGlvbidcblxuICBjb25zdCBodG1sID0gJzxkaXYgY2xhc3M9XCJjYWxsb3V0IGNhbGxvdXQtJyArIGxhYmVsICsgJ1wiIHJvbGU9XCJhbGVydFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJjYWxsb3V0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGg1PicgKyB0cmFuc2xhdGVbbGFiZWxdICsgJzwvaDU+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPHA+JyArIG1lc3NhZ2UgKyAnPC9wPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9kaXY+J1xuXG4gICQoJyNtYWluQ29udGVudCcpLnByZXBlbmQoaHRtbCkuc2xpZGVEb3duKCdzbG93JylcbiAgJCgnLmNhbGxvdXQnKS5kZWxheSg1MDAwKS5zbGlkZVVwKCdzbG93Jylcbn1cblxuLy9FZGl0YWJsZVxubGV0IG15RWRpdEluaXRpYWxDb250ZW50ID0gJydcbmxldCB0eXBlID0gJ3RleHQnXG5sZXQgRWRpdE9uTGluZSA9IGZhbHNlXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubXllZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG15RWRpdEluaXRpYWxDb250ZW50ID0gJCh0aGlzKVxuICBsZXQgaHRtbCA9ICcnXG4gIEVkaXRPbkxpbmUgPSB0cnVlXG4gIGlmICh0eXBlb2YgKCQodGhpcykuZGF0YSgndHlwZScpKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0eXBlID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgfVxuXG4gIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvL3RvZG86IEEgZmluYWxpc2VyXG4gIH0gZWxzZSBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICd0ZXh0YXJlYScpIHtcbiAgICBodG1sID0gZ2VuZXJlVGV4dEFyZWEoJCh0aGlzKSlcbiAgfSBlbHNlIHtcbiAgICBodG1sID0gZ2VuZXJlSW5wdXQoJCh0aGlzKSlcbiAgfVxuICAkKHRoaXMpLnJlcGxhY2VXaXRoKGh0bWwpXG4gICQoJyNteWVkaXQtaW5wdXQnKS5mb2N1cygpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI215ZWRpdC1pbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gICRzdG9wQ2F0Y2hFbnRlciA9IGZhbHNlXG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UgJiYgZS53aGljaCA9PT0gMTMpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB1cGRhdGVEYXRhKClcbiAgfVxuXG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UgJiYgZS53aGljaCA9PT0gMjcpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtYW5udWxlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxufSlcblxuZnVuY3Rpb24gdXBkYXRlRGF0YSAoKSB7XG4gIGxldCB2YWwgPSAkKCcjbXllZGl0LWlucHV0JykudmFsKClcbiAgJC5hamF4KHtcbiAgICB1cmw6IG15RWRpdEluaXRpYWxDb250ZW50LmF0dHIoJ2hyZWYnKSxcbiAgICBkYXRhOiB7XG4gICAgICBmaWVsZDogbXlFZGl0SW5pdGlhbENvbnRlbnQuZGF0YSgnZmllbGQnKSxcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBteUVkaXRJbml0aWFsQ29udGVudC5odG1sKHZhbClcbiAgICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICAgICAgRWRpdE9uTGluZSA9IGZhbHNlXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZW5lcmVUZXh0QXJlYSAoJG9iaikge1xuICAkc3RvcENhdGNoRW50ZXIgPSB0cnVlXG4gIHJldHVybiAnPGRpdiBpZD1cIm15RWRpdC16b25lXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCI+JyArICRvYmouaHRtbCgpLnRyaW0oKSArICc8L3RleHRhcmVhPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cXG4nICtcbiAgICAnIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mtb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXItb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2Pidcbn1cblxuZnVuY3Rpb24gZ2VuZXJlSW5wdXQgKCRvYmopIHtcblxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiIGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cXG4nICtcbiAgICAnIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mtb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXItb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2Pidcbn1cblxualF1ZXJ5LmZuLmRhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICByZXR1cm4gJCh0aGlzKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpIHx8IGRlZlxufVxuXG5qUXVlcnkuZm4uaGFzRGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJCh0aGlzKVswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFUb09wdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4WzFdLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFPcHRpb25zIChlbCwgY2FzdExpc3QpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fVxuICAkLmVhY2goJChlbCkuZGF0YSgpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXG4gICAga2V5ID0gZGF0YVRvT3B0aW9uKGtleSlcblxuICAgIC8vIEVzY2FwZSBkYXRhLXByb3ZpZGVcbiAgICBpZiAoa2V5ID09ICdwcm92aWRlJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNhc3RMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHR5cGUgPSBjYXN0TGlzdFtrZXldXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiBvcHRpb25zXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
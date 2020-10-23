(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.configuration"],{

/***/ "./assets/js/pages/adm.configuration.js":
/*!**********************************************!*\
  !*** ./assets/js/pages/adm.configuration.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.configuration.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/09/2020 16:14

$(document).on('change', '.changeOption', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $.ajax({
    url: Routing.generate('administration_configuration_change_option'),
    method: 'POST',
    data: {
      type: $(this).data('type'),
      value: $(this).prop('checked'),
      name: $(this).attr('name'),
      id: $(this).data('id')
    },
    success: function success(data) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Configuration enregistrée', 'success');
    },
    error: function error(e) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Erreur lors de l\'enregistrement de la configuration', 'danger');
    }
  });
});
$(document).on('change', '.changeOptionSelect', function () {
  $.ajax({
    url: Routing.generate('administration_configuration_change_option'),
    method: 'POST',
    data: {
      type: $(this).data('type'),
      value: $(this).val(),
      name: $(this).attr('name'),
      id: $(this).data('id')
    },
    success: function success(data) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Configuration enregistrée', 'success');
    },
    error: function error(e) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Erreur lors de l\'enregistrement de la configuration', 'danger');
    }
  });
});
$(document).on('change', '.activeAnneeUniversitaire', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $.ajax({
    url: Routing.generate('sa_annee_universitaire_change_active', {
      annee: $(this).data('id')
    }),
    method: 'POST',
    data: {
      value: $(this).prop('checked')
    },
    success: function success(data) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Configuration enregistrée', 'success');
    },
    error: function error(e) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Erreur lors de l\'enregistrement de la configuration', 'danger');
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

},[["./assets/js/pages/adm.configuration.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~3a8cbb67","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7452d955","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~0d230585"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLmNvbmZpZ3VyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwibWV0aG9kIiwiZGF0YSIsInR5cGUiLCJ2YWx1ZSIsInByb3AiLCJuYW1lIiwiYXR0ciIsImlkIiwic3VjY2VzcyIsImFkZENhbGxvdXQiLCJlcnJvciIsInZhbCIsImFubmVlIiwiJHN0b3BDYXRjaEVudGVyIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwibGVuZ3RoIiwicG9wIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImxvY2F0aW9uIiwiU3dhbCIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJjc3JmIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwiX3Rva2VuIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiY2xvc2VzdCIsInJlbW92ZSIsInhociIsImFqYXhPcHRpb25zIiwidGhyb3duRXJyb3IiLCJkaXNtaXNzIiwibWVzc2FnZSIsImxhYmVsIiwiY29uc29sZSIsImxvZyIsInRyYW5zbGF0ZSIsIkFycmF5IiwiaHRtbCIsInByZXBlbmQiLCJzbGlkZURvd24iLCJkZWxheSIsInNsaWRlVXAiLCJteUVkaXRJbml0aWFsQ29udGVudCIsIkVkaXRPbkxpbmUiLCJnZW5lcmVUZXh0QXJlYSIsImdlbmVyZUlucHV0IiwicmVwbGFjZVdpdGgiLCJmb2N1cyIsImtleUNvZGUiLCJ1cGRhdGVEYXRhIiwid2hpY2giLCJmaWVsZCIsIiRvYmoiLCJ0cmltIiwialF1ZXJ5IiwiZm4iLCJkYXRhQXR0ciIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRpb25zIiwiZWwiLCJjYXN0TGlzdCIsIm9wdGlvbnMiLCJlYWNoIiwia2V5IiwidW5kZWZpbmVkIiwiQm9vbGVhbiIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLFFBQWYsRUFBeUIsZUFBekIsRUFBMEMsVUFBVUMsQ0FBVixFQUFhO0FBQ3JEQSxHQUFDLENBQUNDLGNBQUY7QUFDQUQsR0FBQyxDQUFDRSxlQUFGO0FBRUFMLEdBQUMsQ0FBQ00sSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLDRDQUFqQixDQURBO0FBRUxDLFVBQU0sRUFBRSxNQUZIO0FBR0xDLFFBQUksRUFBRTtBQUNKQyxVQUFJLEVBQUVaLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVcsSUFBUixDQUFhLE1BQWIsQ0FERjtBQUVKRSxXQUFLLEVBQUViLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsSUFBUixDQUFhLFNBQWIsQ0FGSDtBQUdKQyxVQUFJLEVBQUVmLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdCLElBQVIsQ0FBYSxNQUFiLENBSEY7QUFJSkMsUUFBRSxFQUFFakIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVyxJQUFSLENBQWEsSUFBYjtBQUpBLEtBSEQ7QUFTTE8sV0FBTyxFQUFFLGlCQUFVUCxJQUFWLEVBQWdC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LEVBQXNCO0FBRXpDdUYsT0FBRyxHQUFHVCxZQUFZLENBQUNTLEdBQUQsQ0FBbEIsQ0FGeUMsQ0FJekM7O0FBQ0EsUUFBSUEsR0FBRyxJQUFJLFNBQVgsRUFBc0I7QUFDcEI7QUFDRDs7QUFFRCxRQUFJSCxRQUFRLElBQUlJLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQUl6RixJQUFJLEdBQUdxRixRQUFRLENBQUNHLEdBQUQsQ0FBbkI7O0FBQ0EsY0FBUXhGLElBQVI7QUFDRSxhQUFLLE1BQUw7QUFDRUMsZUFBSyxHQUFHeUYsT0FBTyxDQUFDekYsS0FBRCxDQUFmO0FBQ0E7O0FBRUYsYUFBSyxLQUFMO0FBQ0VBLGVBQUssR0FBRzBGLE1BQU0sQ0FBQzFGLEtBQUQsQ0FBZDtBQUNBOztBQUVGLGFBQUssT0FBTDtBQUNFQSxlQUFLLEdBQUdBLEtBQUssQ0FBQ2MsS0FBTixDQUFZLEdBQVosQ0FBUjtBQUNBOztBQUVGO0FBYkY7QUFnQkQ7O0FBRUR1RSxXQUFPLENBQUNFLEdBQUQsQ0FBUCxHQUFldkYsS0FBZjtBQUNELEdBOUJEO0FBZ0NBLFNBQU9xRixPQUFQO0FBQ0QsQyIsImZpbGUiOiJhZG0uY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0uY29uZmlndXJhdGlvbi5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDA2LzA5LzIwMjAgMTY6MTRcbmltcG9ydCB7YWRkQ2FsbG91dH0gZnJvbSAnLi4vdXRpbCdcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hhbmdlT3B0aW9uJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fY29uZmlndXJhdGlvbl9jaGFuZ2Vfb3B0aW9uJyksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogJCh0aGlzKS5kYXRhKCd0eXBlJyksXG4gICAgICB2YWx1ZTogJCh0aGlzKS5wcm9wKCdjaGVja2VkJyksXG4gICAgICBuYW1lOiAkKHRoaXMpLmF0dHIoJ25hbWUnKSxcbiAgICAgIGlkOiAkKHRoaXMpLmRhdGEoJ2lkJylcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBhZGRDYWxsb3V0KCdDb25maWd1cmF0aW9uIGVucmVnaXN0csOpZScsICdzdWNjZXNzJylcbiAgICB9LCBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxcXCdlbnJlZ2lzdHJlbWVudCBkZSBsYSBjb25maWd1cmF0aW9uJywgJ2RhbmdlcicpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hhbmdlT3B0aW9uU2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fY29uZmlndXJhdGlvbl9jaGFuZ2Vfb3B0aW9uJyksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogJCh0aGlzKS5kYXRhKCd0eXBlJyksXG4gICAgICB2YWx1ZTogJCh0aGlzKS52YWwoKSxcbiAgICAgIG5hbWU6ICQodGhpcykuYXR0cignbmFtZScpLFxuICAgICAgaWQ6ICQodGhpcykuZGF0YSgnaWQnKVxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0NvbmZpZ3VyYXRpb24gZW5yZWdpc3Ryw6llJywgJ3N1Y2Nlc3MnKVxuICAgIH0sIGVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbFxcJ2VucmVnaXN0cmVtZW50IGRlIGxhIGNvbmZpZ3VyYXRpb24nLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5hY3RpdmVBbm5lZVVuaXZlcnNpdGFpcmUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdzYV9hbm5lZV91bml2ZXJzaXRhaXJlX2NoYW5nZV9hY3RpdmUnLCB7YW5uZWU6ICQodGhpcykuZGF0YSgnaWQnKX0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgIHZhbHVlOiAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKVxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0NvbmZpZ3VyYXRpb24gZW5yZWdpc3Ryw6llJywgJ3N1Y2Nlc3MnKVxuICAgIH0sIGVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbFxcJ2VucmVnaXN0cmVtZW50IGRlIGxhIGNvbmZpZ3VyYXRpb24nLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3V0aWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxNi8xMC8yMDIwIDE0OjU0XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5sZXQgJHN0b3BDYXRjaEVudGVyID0gZmFsc2VcblxuZnVuY3Rpb24gcmVhZFVybE1lbnUgKCR1cmwpIHtcbiAgY29uc3QgJGVsdCA9ICR1cmwuc3BsaXQoJy8nKVxuICBsZXQgJGZpcnN0RWx0ID0gMlxuICBpZiAoJGVsdFsxXSA9PT0gJ2luZGV4LnBocCcpIHtcbiAgICBpZiAoJGVsdC5sZW5ndGggPiAxKSB7XG4gICAgICAkZmlyc3RFbHQgPSAzXG4gICAgfVxuICB9XG5cbiAgaWYgKCRlbHRbJGZpcnN0RWx0XSA9PT0gJ3N1cGVyLWFkbWluaXN0cmF0aW9uJykge1xuICAgICRmaXJzdEVsdCA9ICRmaXJzdEVsdCArIDFcbiAgfVxuXG4gIGlmICgkZWx0WyRlbHQubGVuZ3RoIC0gMV0gPT09ICcnKSB7XG4gICAgJGVsdC5wb3AoKVxuICB9XG5cbiAgJCgnLm1lbnUtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAkKCcjbWVudS0nICsgJGVsdFskZmlyc3RFbHRdKS5hZGRDbGFzcygnYWN0aXZlJylcbn1cblxuLy9jb2xvcmlzZSBsZSBib24gbWVudVxucmVhZFVybE1lbnUoJChsb2NhdGlvbikuYXR0cigncGF0aG5hbWUnKSlcblxuU3dhbC5taXhpbih7XG4gIGN1c3RvbUNsYXNzOiB7XG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gIH0sXG4gIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxufSlcbi8vcG9wIHVwIGRlIGNvbmZpcm1hdGlvbiBkZSBzdXBwcmVzc2lvblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdXBwcmltZXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJylcbiAgY29uc3QgY3NyZiA9ICQodGhpcykuZGF0YSgnY3NyZicpXG4gIFN3YWwuZmlyZSh7XG4gICAgdGl0bGU6ICdDb25maXJtZXIgbGEgc3VwcHJlc3Npb24gPycsXG4gICAgdGV4dDogJ0xcXCdvcMOpcmF0aW9uIG5lIHBvdXJyYSBwYXMgw6p0cmUgYW5udWzDqWUuJyxcbiAgICBpY29uOiAnd2FybmluZycsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBqZSBjb25maXJtZScsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlcicsXG4gICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgfSxcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgX3Rva2VuOiBjc3JmXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGlmIChpZC5oYXNPd25Qcm9wZXJ0eSgncmVkaXJlY3QnKSAmJiBpZC5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBpZC51cmxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy90LnJvdyhcIiNsaWduZV9cIitpZCkucmVtb3ZlKCkuZHJhdygpOyA9PCBkYXRhdHRhYmxlIHRvZG86IHJlbW92ZSBsaWduZSBzaSBkYXRhdGFibGUgPz8gcHJvYmzDqG1lIGRhbnMgYWRtPnBlcnNvbm5lbFxuICAgICAgICAgICAgJCgnI2xpZ25lXycgKyBpZCkuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgICAgICAgICAgYWRkQ2FsbG91dCgnU3VwcHJlc3Npb24gZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqHMnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogJ1N1cHByaW3DqSEnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTFxcJ2VucmVnaXN0cmVtZW50IGEgw6l0w6kgc3VwcHJpbcOpLicsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYWxsb3V0IChtZXNzYWdlLCBsYWJlbCkge1xuICBjb25zb2xlLmxvZygnY2FsbG91dCcpXG4gIHZhciB0cmFuc2xhdGUgPSBuZXcgQXJyYXkoKVxuICB0cmFuc2xhdGVbJ3N1Y2Nlc3MnXSA9ICdTdWNjw6hzJ1xuICB0cmFuc2xhdGVbJ2RhbmdlciddID0gJ0VycmV1cidcbiAgdHJhbnNsYXRlWyd3YXJuaW5nJ10gPSAnQXR0ZW50aW9uJ1xuXG4gIGNvbnN0IGh0bWwgPSAnPGRpdiBjbGFzcz1cImNhbGxvdXQgY2FsbG91dC0nICsgbGFiZWwgKyAnXCIgcm9sZT1cImFsZXJ0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImNhbGxvdXRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8aDU+JyArIHRyYW5zbGF0ZVtsYWJlbF0gKyAnPC9oNT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8cD4nICsgbWVzc2FnZSArICc8L3A+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4nXG5cbiAgJCgnI21haW5Db250ZW50JykucHJlcGVuZChodG1sKS5zbGlkZURvd24oJ3Nsb3cnKVxuICAkKCcuY2FsbG91dCcpLmRlbGF5KDUwMDApLnNsaWRlVXAoJ3Nsb3cnKVxufVxuXG4vL0VkaXRhYmxlXG5sZXQgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAnJ1xubGV0IHR5cGUgPSAndGV4dCdcbmxldCBFZGl0T25MaW5lID0gZmFsc2VcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5teWVkaXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAkKHRoaXMpXG4gIGxldCBodG1sID0gJydcbiAgRWRpdE9uTGluZSA9IHRydWVcbiAgaWYgKHR5cGVvZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykpICE9PSAndW5kZWZpbmVkJykge1xuICAgIHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICB9XG5cbiAgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAnc2VsZWN0Jykge1xuICAgIC8vdG9kbzogQSBmaW5hbGlzZXJcbiAgfSBlbHNlIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3RleHRhcmVhJykge1xuICAgIGh0bWwgPSBnZW5lcmVUZXh0QXJlYSgkKHRoaXMpKVxuICB9IGVsc2Uge1xuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSkge1xuICAgIHVwZGF0ZURhdGEoKVxuICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtdmFsaWRlJywgZnVuY3Rpb24gKGUpIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gZmFsc2VcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHVwZGF0ZURhdGEoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSAmJiBlLndoaWNoID09PSAxMykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHVwZGF0ZURhdGEoKVxuICB9XG5cbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSAmJiBlLndoaWNoID09PSAyNykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG15RWRpdEluaXRpYWxDb250ZW50Lmh0bWwodmFsKVxuICAgICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gICAgICBFZGl0T25MaW5lID0gZmFsc2VcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZVRleHRBcmVhICgkb2JqKSB7XG4gICRzdG9wQ2F0Y2hFbnRlciA9IHRydWVcbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJteWVkaXQtaW5wdXRcIj4nICsgJG9iai5odG1sKCkudHJpbSgpICsgJzwvdGV4dGFyZWE+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxcbicgK1xuICAgICcgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzcy1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlci1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+J1xufVxuXG5mdW5jdGlvbiBnZW5lcmVJbnB1dCAoJG9iaikge1xuXG4gIHJldHVybiAnPGRpdiBpZD1cIm15RWRpdC16b25lXCIgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm15ZWRpdC1pbnB1dFwiIHZhbHVlPVwiJyArICRvYmouaHRtbCgpLnRyaW0oKSArICdcIiA+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxcbicgK1xuICAgICcgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzcy1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlci1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+J1xufVxuXG5qUXVlcnkuZm4uZGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSkgfHwgZGVmXG59XG5cbmpRdWVyeS5mbi5oYXNEYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmhhc0F0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSlcbn1cblxuZnVuY3Rpb24gZGF0YVRvT3B0aW9uIChuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHhbMV0udG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YU9wdGlvbnMgKGVsLCBjYXN0TGlzdCkge1xuICB2YXIgb3B0aW9ucyA9IHt9XG4gICQuZWFjaCgkKGVsKS5kYXRhKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cbiAgICBrZXkgPSBkYXRhVG9PcHRpb24oa2V5KVxuXG4gICAgLy8gRXNjYXBlIGRhdGEtcHJvdmlkZVxuICAgIGlmIChrZXkgPT0gJ3Byb3ZpZGUnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoY2FzdExpc3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgdHlwZSA9IGNhc3RMaXN0W2tleV1cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdib29sJzpcbiAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdudW0nOlxuICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJywnKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnNba2V5XSA9IHZhbHVlXG4gIH0pXG5cbiAgcmV0dXJuIG9wdGlvbnNcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
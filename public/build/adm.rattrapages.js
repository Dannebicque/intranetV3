(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.rattrapages"],{

/***/ "./assets/js/pages/adm.rattrapages.js":
/*!********************************************!*\
  !*** ./assets/js/pages/adm.rattrapages.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.rattrapages.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 11:18

$(document).on('click', '.rattrapage-accepte', function (e) {
  e.preventDefault();
  var rattrapage = $(this).data('rattrapage');
  $.ajax({
    url: Routing.generate('administration_rattrapage_change_etat', {
      uuid: rattrapage,
      etat: 'A'
    }),
    success: function success() {
      var bx = $('.bx_' + rattrapage);
      var parent = bx.parent();
      bx.remove();
      parent.prepend('<a href="#" class="btn btn-success btn-outline"><i class="ti-check"></i>Acceptée</a>');
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Demande de rattrapage validée !', 'success');
    },
    error: function error() {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Une erreur est survenue !', 'danger');
    }
  });
});
$(document).on('click', '.rattrapage-refuse', function (e) {
  e.preventDefault();
  var rattrapage = $(this).data('rattrapage');
  $.ajax({
    url: Routing.generate('administration_rattrapage_change_etat', {
      uuid: rattrapage,
      etat: 'R'
    }),
    success: function success() {
      var bx = $('.bx_' + rattrapage);
      var parent = bx.parent();
      bx.remove();
      parent.prepend('<a href="#" class="btn btn-warning btn-outline"><i class="ti-na"></i>Refusée</a>');
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Demande de rattrapage refusée !', 'success');
    },
    error: function error() {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Une erreur est survenue !', 'danger');
    }
  });
});
$(document).on('change', '.dateChange', function () {
  var rattrapage = $(this).data('rattrapage');
  $.ajax({
    url: Routing.generate('administration_rattrapage_planning_change', {
      uuid: rattrapage,
      type: 'date'
    }),
    data: {
      data: $(this).val()
    },
    method: 'POST',
    error: function error() {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Une erreur est survenue !', 'danger');
    }
  });
});
$(document).on('blur', '.salleChange', function () {
  var rattrapage = $(this).data('rattrapage');
  $.ajax({
    url: Routing.generate('administration_rattrapage_planning_change', {
      uuid: rattrapage,
      type: 'salle',
      data: $(this).val()
    }),
    error: function error(e) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Une erreur est survenue !', 'danger');
    }
  });
});
$(document).on('blur', '.heureChange', function () {
  var rattrapage = $(this).data('rattrapage');
  $.ajax({
    url: Routing.generate('administration_rattrapage_planning_change', {
      uuid: rattrapage,
      type: 'heure',
      data: $(this).val()
    }),
    error: function error() {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Une erreur est survenue !', 'danger');
    }
  });
});
$(document).on('click', '#sallePartout', function () {
  var salle = $('#salle').val();
  $.ajax({
    //sauvegarde de la salle pour les rattrapages du diplôme
    url: Routing.generate('administration_rattrapage_update_global', {
      type: 'salle',
      diplome: diplome
    }),
    data: {
      valeur: salle
    },
    method: 'POST',
    success: function success() {
      $('.salleChange').each(function () {
        $(this).val(salle);
      });
    }
  });
});
$(document).on('click', '#datePartout', function (e) {
  e.preventDefault();
  var date = $('#date').val();
  $.ajax({
    //sauvegarde de la salle pour les rattrapages du diplôme
    url: Routing.generate('administration_rattrapage_update_global', {
      type: 'date',
      diplome: diplome
    }),
    data: {
      valeur: date
    },
    method: 'POST',
    success: function success() {
      $('.dateChange').each(function () {
        $(this).val(date);
      });
    }
  });
});
$(document).on('click', '#heurePartout', function (e) {
  e.preventDefault();
  var heure = $('#heure').val();
  $.ajax({
    //sauvegarde de la salle pour les rattrapages du diplôme
    url: Routing.generate('administration_rattrapage_update_global', {
      type: 'heure',
      diplome: diplome
    }),
    data: {
      valeur: heure
    },
    method: 'POST',
    success: function success() {
      $('.heureChange').each(function () {
        $(this).val(heure);
      });
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

},[["./assets/js/pages/adm.rattrapages.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~3a8cbb67","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7452d955","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~0d230585"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnJhdHRyYXBhZ2VzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmF0dHJhcGFnZSIsImRhdGEiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwidXVpZCIsImV0YXQiLCJzdWNjZXNzIiwiYngiLCJwYXJlbnQiLCJyZW1vdmUiLCJwcmVwZW5kIiwiYWRkQ2FsbG91dCIsImVycm9yIiwidHlwZSIsInZhbCIsIm1ldGhvZCIsInNhbGxlIiwiZGlwbG9tZSIsInZhbGV1ciIsImVhY2giLCJkYXRlIiwiaGV1cmUiLCJyZWFkVXJsTWVudSIsIiR1cmwiLCIkZWx0Iiwic3BsaXQiLCIkZmlyc3RFbHQiLCJsZW5ndGgiLCJwb3AiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwibG9jYXRpb24iLCJhdHRyIiwiU3dhbCIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJjc3JmIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJfdG9rZW4iLCJpZCIsImhhc093blByb3BlcnR5IiwiaHJlZiIsImNsb3Nlc3QiLCJ4aHIiLCJhamF4T3B0aW9ucyIsInRocm93bkVycm9yIiwiZGlzbWlzcyIsIm1lc3NhZ2UiLCJsYWJlbCIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc2xhdGUiLCJBcnJheSIsImh0bWwiLCJzbGlkZURvd24iLCJkZWxheSIsInNsaWRlVXAiLCJteUVkaXRJbml0aWFsQ29udGVudCIsIkVkaXRPbkxpbmUiLCJnZW5lcmVJbnB1dCIsInJlcGxhY2VXaXRoIiwiZm9jdXMiLCJrZXlDb2RlIiwidXBkYXRlRGF0YSIsIndoaWNoIiwiZmllbGQiLCIkb2JqIiwiJGh0bWwiLCJ0cmltIiwialF1ZXJ5IiwiZm4iLCJkYXRhQXR0ciIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImVsIiwiY2FzdExpc3QiLCJvcHRpb25zIiwia2V5IiwidW5kZWZpbmVkIiwiQm9vbGVhbiIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IscUJBQXhCLEVBQStDLFVBQVVDLENBQVYsRUFBYTtBQUMxREEsR0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsVUFBVSxHQUFHTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLElBQVIsQ0FBYSxZQUFiLENBQW5CO0FBQ0FOLEdBQUMsQ0FBQ08sSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHVDQUFqQixFQUEwRDtBQUFDQyxVQUFJLEVBQUVOLFVBQVA7QUFBbUJPLFVBQUksRUFBRTtBQUF6QixLQUExRCxDQURBO0FBRUxDLFdBQU8sRUFBRSxtQkFBWTtBQUNuQixVQUFNQyxFQUFFLEdBQUdkLENBQUMsQ0FBQyxTQUFTSyxVQUFWLENBQVo7QUFDQSxVQUFNVSxNQUFNLEdBQUdELEVBQUUsQ0FBQ0MsTUFBSCxFQUFmO0FBQ0FELFFBQUUsQ0FBQ0UsTUFBSDtBQUNBRCxZQUFNLENBQUNFLE9BQVAsQ0FBZSxzRkFBZjtBQUNBQyw4REFBVSxDQUFDLGlDQUFELEVBQW9DLFNBQXBD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b0csR0FBVixFQUFlaEQsS0FBZixFQUFzQjtBQUV6Q2dELE9BQUcsR0FBR1IsWUFBWSxDQUFDUSxHQUFELENBQWxCLENBRnlDLENBSXpDOztBQUNBLFFBQUlBLEdBQUcsSUFBSSxTQUFYLEVBQXNCO0FBQ3BCO0FBQ0Q7O0FBRUQsUUFBSUYsUUFBUSxJQUFJRyxTQUFoQixFQUEyQjtBQUN6QixVQUFJdkYsSUFBSSxHQUFHb0YsUUFBUSxDQUFDRSxHQUFELENBQW5COztBQUNBLGNBQVF0RixJQUFSO0FBQ0UsYUFBSyxNQUFMO0FBQ0VzQyxlQUFLLEdBQUdrRCxPQUFPLENBQUNsRCxLQUFELENBQWY7QUFDQTs7QUFFRixhQUFLLEtBQUw7QUFDRUEsZUFBSyxHQUFHbUQsTUFBTSxDQUFDbkQsS0FBRCxDQUFkO0FBQ0E7O0FBRUYsYUFBSyxPQUFMO0FBQ0VBLGVBQUssR0FBR0EsS0FBSyxDQUFDMUIsS0FBTixDQUFZLEdBQVosQ0FBUjtBQUNBOztBQUVGO0FBYkY7QUFnQkQ7O0FBRUR5RSxXQUFPLENBQUNDLEdBQUQsQ0FBUCxHQUFlaEQsS0FBZjtBQUNELEdBOUJEO0FBZ0NBLFNBQU8rQyxPQUFQO0FBQ0QsQyIsImZpbGUiOiJhZG0ucmF0dHJhcGFnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLnJhdHRyYXBhZ2VzLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMzAvMDcvMjAyMCAxMToxOFxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnJhdHRyYXBhZ2UtYWNjZXB0ZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCByYXR0cmFwYWdlID0gJCh0aGlzKS5kYXRhKCdyYXR0cmFwYWdlJylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3JhdHRyYXBhZ2VfY2hhbmdlX2V0YXQnLCB7dXVpZDogcmF0dHJhcGFnZSwgZXRhdDogJ0EnfSksXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgYnggPSAkKCcuYnhfJyArIHJhdHRyYXBhZ2UpXG4gICAgICBjb25zdCBwYXJlbnQgPSBieC5wYXJlbnQoKVxuICAgICAgYngucmVtb3ZlKClcbiAgICAgIHBhcmVudC5wcmVwZW5kKCc8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lXCI+PGkgY2xhc3M9XCJ0aS1jaGVja1wiPjwvaT5BY2NlcHTDqWU8L2E+JylcbiAgICAgIGFkZENhbGxvdXQoJ0RlbWFuZGUgZGUgcmF0dHJhcGFnZSB2YWxpZMOpZSAhJywgJ3N1Y2Nlc3MnKVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlICEnLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnJhdHRyYXBhZ2UtcmVmdXNlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHJhdHRyYXBhZ2UgPSAkKHRoaXMpLmRhdGEoJ3JhdHRyYXBhZ2UnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcmF0dHJhcGFnZV9jaGFuZ2VfZXRhdCcsIHt1dWlkOiByYXR0cmFwYWdlLCBldGF0OiAnUid9KSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBieCA9ICQoJy5ieF8nICsgcmF0dHJhcGFnZSlcbiAgICAgIGNvbnN0IHBhcmVudCA9IGJ4LnBhcmVudCgpXG4gICAgICBieC5yZW1vdmUoKVxuICAgICAgcGFyZW50LnByZXBlbmQoJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmcgYnRuLW91dGxpbmVcIj48aSBjbGFzcz1cInRpLW5hXCI+PC9pPlJlZnVzw6llPC9hPicpXG4gICAgICBhZGRDYWxsb3V0KCdEZW1hbmRlIGRlIHJhdHRyYXBhZ2UgcmVmdXPDqWUgIScsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSAhJywgJ2RhbmdlcicpXG4gICAgfVxuICB9KVxufSlcblxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5kYXRlQ2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXG4gIGNvbnN0IHJhdHRyYXBhZ2UgPSAkKHRoaXMpLmRhdGEoJ3JhdHRyYXBhZ2UnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcmF0dHJhcGFnZV9wbGFubmluZ19jaGFuZ2UnLCB7dXVpZDogcmF0dHJhcGFnZSwgdHlwZTogJ2RhdGUnfSksXG4gICAgZGF0YToge1xuICAgICAgZGF0YTogJCh0aGlzKS52YWwoKVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlICEnLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignYmx1cicsICcuc2FsbGVDaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJhdHRyYXBhZ2UgPSAkKHRoaXMpLmRhdGEoJ3JhdHRyYXBhZ2UnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcmF0dHJhcGFnZV9wbGFubmluZ19jaGFuZ2UnLCB7dXVpZDogcmF0dHJhcGFnZSwgdHlwZTogJ3NhbGxlJywgZGF0YTogJCh0aGlzKS52YWwoKX0pLFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRkQ2FsbG91dCgnVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIScsICdkYW5nZXInKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdibHVyJywgJy5oZXVyZUNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcmF0dHJhcGFnZSA9ICQodGhpcykuZGF0YSgncmF0dHJhcGFnZScpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9yYXR0cmFwYWdlX3BsYW5uaW5nX2NoYW5nZScsIHt1dWlkOiByYXR0cmFwYWdlLCB0eXBlOiAnaGV1cmUnLCBkYXRhOiAkKHRoaXMpLnZhbCgpfSksXG4gICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlICEnLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3NhbGxlUGFydG91dCcsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2FsbGUgPSAkKCcjc2FsbGUnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIC8vc2F1dmVnYXJkZSBkZSBsYSBzYWxsZSBwb3VyIGxlcyByYXR0cmFwYWdlcyBkdSBkaXBsw7RtZVxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcmF0dHJhcGFnZV91cGRhdGVfZ2xvYmFsJywge3R5cGU6ICdzYWxsZScsIGRpcGxvbWU6ZGlwbG9tZX0pLFxuICAgIGRhdGE6IHtcbiAgICAgIHZhbGV1cjogc2FsbGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5zYWxsZUNoYW5nZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykudmFsKHNhbGxlKVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2RhdGVQYXJ0b3V0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IGRhdGUgPSAkKCcjZGF0ZScpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgLy9zYXV2ZWdhcmRlIGRlIGxhIHNhbGxlIHBvdXIgbGVzIHJhdHRyYXBhZ2VzIGR1IGRpcGzDtG1lXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9yYXR0cmFwYWdlX3VwZGF0ZV9nbG9iYWwnLCB7dHlwZTogJ2RhdGUnLCBkaXBsb21lOmRpcGxvbWV9KSxcbiAgICBkYXRhOiB7XG4gICAgICB2YWxldXI6IGRhdGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5kYXRlQ2hhbmdlJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS52YWwoZGF0ZSlcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNoZXVyZVBhcnRvdXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgaGV1cmUgPSAkKCcjaGV1cmUnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIC8vc2F1dmVnYXJkZSBkZSBsYSBzYWxsZSBwb3VyIGxlcyByYXR0cmFwYWdlcyBkdSBkaXBsw7RtZVxuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcmF0dHJhcGFnZV91cGRhdGVfZ2xvYmFsJywge3R5cGU6ICdoZXVyZScsIGRpcGxvbWU6ZGlwbG9tZX0pLFxuICAgIGRhdGE6IHtcbiAgICAgIHZhbGV1cjogaGV1cmVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5oZXVyZUNoYW5nZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykudmFsKGhldXJlKVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3V0aWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxMS8xMC8yMDIwIDA4OjA0XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3Qucm93KFwiI2xpZ25lX1wiK2lkKS5yZW1vdmUoKS5kcmF3KCk7ID08IGRhdGF0dGFibGUgdG9kbzogcmVtb3ZlIGxpZ25lIHNpIGRhdGF0YWJsZSA/PyBwcm9ibMOobWUgZGFucyBhZG0+cGVyc29ubmVsXG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2Uge1xuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiBlLndoaWNoID09PSAyNykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG15RWRpdEluaXRpYWxDb250ZW50Lmh0bWwodmFsKVxuICAgICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gICAgICBFZGl0T25MaW5lID0gZmFsc2VcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG4gIGxldCAkaHRtbCA9ICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiAvPidcbiAgJGh0bWwgPSAkaHRtbCArICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLXNtIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLWRhbmdlciBidG4tb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPjwvZGl2PidcbiAgcmV0dXJuICRodG1sXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
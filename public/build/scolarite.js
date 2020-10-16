(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scolarite"],{

/***/ "./assets/js/pages/scolarite.js":
/*!**************************************!*\
  !*** ./assets/js/pages/scolarite.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/scolarite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/08/2020 15:05

$(document).on('change', '#scolarite_semestre', function () {
  $.ajax({
    url: Routing.generate('administration_scolarite_ues_semestre', {
      semestre: $(this).val()
    }),
    type: 'POST',
    success: function success(data) {
      var $html = '<div class="row">';

      for (var key in data) {
        var value = data[key];
        $html = $html + '<div class="col-sm-12 col-md-4">';
        $html = $html + '<div class="form-group"><label for="ue_' + key + '" class="required">UE ' + value + '</label><input type="text" id="ue_' + key + '" name="ue_' + key + '" required="required" class="form-control" value="0"></div>';
        $html = $html + '</div>';
      }

      $html = $html + '</div>';
      var idUE = $('#ues_semestre');
      idUE.empty().append($html);
    },
    error: function error() {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Erreur la requête.', 'danger');
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
// @lastUpdate 16/10/2020 11:50



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

},[["./assets/js/pages/scolarite.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~3a8cbb67","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7452d955","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~0d230585"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvc2NvbGFyaXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInNlbWVzdHJlIiwidmFsIiwidHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwiJGh0bWwiLCJrZXkiLCJ2YWx1ZSIsImlkVUUiLCJlbXB0eSIsImFwcGVuZCIsImVycm9yIiwiYWRkQ2FsbG91dCIsInJlYWRVcmxNZW51IiwiJHVybCIsIiRlbHQiLCJzcGxpdCIsIiRmaXJzdEVsdCIsImxlbmd0aCIsInBvcCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJsb2NhdGlvbiIsImF0dHIiLCJTd2FsIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNzcmYiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJfdG9rZW4iLCJpZCIsImhhc093blByb3BlcnR5IiwiaHJlZiIsImNsb3Nlc3QiLCJyZW1vdmUiLCJ4aHIiLCJhamF4T3B0aW9ucyIsInRocm93bkVycm9yIiwiZGlzbWlzcyIsIm1lc3NhZ2UiLCJsYWJlbCIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc2xhdGUiLCJBcnJheSIsImh0bWwiLCJwcmVwZW5kIiwic2xpZGVEb3duIiwiZGVsYXkiLCJzbGlkZVVwIiwibXlFZGl0SW5pdGlhbENvbnRlbnQiLCJFZGl0T25MaW5lIiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ3aGljaCIsImZpZWxkIiwibWV0aG9kIiwiJG9iaiIsInRyaW0iLCJqUXVlcnkiLCJmbiIsImRhdGFBdHRyIiwibmFtZSIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRpb25zIiwiZWwiLCJjYXN0TGlzdCIsIm9wdGlvbnMiLCJlYWNoIiwidW5kZWZpbmVkIiwiQm9vbGVhbiIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLFFBQWYsRUFBeUIscUJBQXpCLEVBQWdELFlBQVk7QUFDMURGLEdBQUMsQ0FBQ0csSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHVDQUFqQixFQUEwRDtBQUFDQyxjQUFRLEVBQUVQLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsR0FBUjtBQUFYLEtBQTFELENBREE7QUFFTEMsUUFBSSxFQUFFLE1BRkQ7QUFHTEMsV0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCLFVBQUlDLEtBQUssR0FBRyxtQkFBWjs7QUFDQSxXQUFLLElBQUlDLEdBQVQsSUFBZ0JGLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlHLEtBQUssR0FBR0gsSUFBSSxDQUFDRSxHQUFELENBQWhCO0FBQ0FELGFBQUssR0FBR0EsS0FBSyxHQUFHLGtDQUFoQjtBQUNBQSxhQUFLLEdBQUdBLEtBQUssR0FBRyx5Q0FBUixHQUFvREMsR0FBcEQsR0FBMEQsd0JBQTFELEdBQXFGQyxLQUFyRixHQUE2RixvQ0FBN0YsR0FBb0lELEdBQXBJLEdBQTBJLGFBQTFJLEdBQTBKQSxHQUExSixHQUFnSyw2REFBeEs7QUFDQUQsYUFBSyxH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LFVBQVVDLENBQVYsRUFBYTtBQUM1QyxXQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtDLFdBQUwsRUFBUDtBQUNELEdBRk0sQ0FBUDtBQUdEOztBQUVNLFNBQVNDLGNBQVQsQ0FBeUJDLEVBQXpCLEVBQTZCQyxRQUE3QixFQUF1QztBQUM1QyxNQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUNBbkcsK0NBQUMsQ0FBQ29HLElBQUYsQ0FBT3BHLDZDQUFDLENBQUNpRyxFQUFELENBQUQsQ0FBTXRGLElBQU4sRUFBUCxFQUFxQixVQUFVRSxHQUFWLEVBQWVDLEtBQWYsRUFBc0I7QUFFekNELE9BQUcsR0FBRytFLFlBQVksQ0FBQy9FLEdBQUQsQ0FBbEIsQ0FGeUMsQ0FJekM7O0FBQ0EsUUFBSUEsR0FBRyxJQUFJLFNBQVgsRUFBc0I7QUFDcEI7QUFDRDs7QUFFRCxRQUFJcUYsUUFBUSxJQUFJRyxTQUFoQixFQUEyQjtBQUN6QixVQUFJNUYsSUFBSSxHQUFHeUYsUUFBUSxDQUFDckYsR0FBRCxDQUFuQjs7QUFDQSxjQUFRSixJQUFSO0FBQ0UsYUFBSyxNQUFMO0FBQ0VLLGVBQUssR0FBR3dGLE9BQU8sQ0FBQ3hGLEtBQUQsQ0FBZjtBQUNBOztBQUVGLGFBQUssS0FBTDtBQUNFQSxlQUFLLEdBQUd5RixNQUFNLENBQUN6RixLQUFELENBQWQ7QUFDQTs7QUFFRixhQUFLLE9BQUw7QUFDRUEsZUFBSyxHQUFHQSxLQUFLLENBQUNTLEtBQU4sQ0FBWSxHQUFaLENBQVI7QUFDQTs7QUFFRjtBQWJGO0FBZ0JEOztBQUVENEUsV0FBTyxDQUFDdEYsR0FBRCxDQUFQLEdBQWVDLEtBQWY7QUFDRCxHQTlCRDtBQWdDQSxTQUFPcUYsT0FBUDtBQUNELEMiLCJmaWxlIjoic2NvbGFyaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL3Njb2xhcml0ZS5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDExLzA4LzIwMjAgMTU6MDVcblxuXG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI3Njb2xhcml0ZV9zZW1lc3RyZScsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3Njb2xhcml0ZV91ZXNfc2VtZXN0cmUnLCB7c2VtZXN0cmU6ICQodGhpcykudmFsKCl9KSxcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGxldCAkaHRtbCA9ICc8ZGl2IGNsYXNzPVwicm93XCI+J1xuICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YVtrZXldXG4gICAgICAgICRodG1sID0gJGh0bWwgKyAnPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBjb2wtbWQtNFwiPidcbiAgICAgICAgJGh0bWwgPSAkaHRtbCArICc8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPjxsYWJlbCBmb3I9XCJ1ZV8nICsga2V5ICsgJ1wiIGNsYXNzPVwicmVxdWlyZWRcIj5VRSAnICsgdmFsdWUgKyAnPC9sYWJlbD48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVlXycgKyBrZXkgKyAnXCIgbmFtZT1cInVlXycgKyBrZXkgKyAnXCIgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9XCIwXCI+PC9kaXY+J1xuICAgICAgICAkaHRtbCA9ICRodG1sICsgJzwvZGl2PidcbiAgICAgIH1cbiAgICAgICRodG1sID0gJGh0bWwgKyAnPC9kaXY+J1xuICAgICAgY29uc3QgaWRVRSA9ICQoJyN1ZXNfc2VtZXN0cmUnKVxuICAgICAgaWRVRS5lbXB0eSgpLmFwcGVuZCgkaHRtbClcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbGEgcmVxdcOqdGUuJywgJ2RhbmdlcicpXG4gICAgfVxuICB9KVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy91dGlsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTYvMTAvMjAyMCAxMTo1MFxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxuZnVuY3Rpb24gcmVhZFVybE1lbnUgKCR1cmwpIHtcbiAgY29uc3QgJGVsdCA9ICR1cmwuc3BsaXQoJy8nKVxuICBsZXQgJGZpcnN0RWx0ID0gMlxuICBpZiAoJGVsdFsxXSA9PT0gJ2luZGV4LnBocCcpIHtcbiAgICBpZiAoJGVsdC5sZW5ndGggPiAxKSB7XG4gICAgICAkZmlyc3RFbHQgPSAzXG4gICAgfVxuICB9XG5cbiAgaWYgKCRlbHRbJGZpcnN0RWx0XSA9PT0gJ3N1cGVyLWFkbWluaXN0cmF0aW9uJykge1xuICAgICRmaXJzdEVsdCA9ICRmaXJzdEVsdCArIDFcbiAgfVxuXG4gIGlmICgkZWx0WyRlbHQubGVuZ3RoIC0gMV0gPT09ICcnKSB7XG4gICAgJGVsdC5wb3AoKVxuICB9XG5cbiAgJCgnLm1lbnUtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAkKCcjbWVudS0nICsgJGVsdFskZmlyc3RFbHRdKS5hZGRDbGFzcygnYWN0aXZlJylcbn1cblxuLy9jb2xvcmlzZSBsZSBib24gbWVudVxucmVhZFVybE1lbnUoJChsb2NhdGlvbikuYXR0cigncGF0aG5hbWUnKSlcblxuU3dhbC5taXhpbih7XG4gIGN1c3RvbUNsYXNzOiB7XG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gIH0sXG4gIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxufSlcbi8vcG9wIHVwIGRlIGNvbmZpcm1hdGlvbiBkZSBzdXBwcmVzc2lvblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdXBwcmltZXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJylcbiAgY29uc3QgY3NyZiA9ICQodGhpcykuZGF0YSgnY3NyZicpXG4gIFN3YWwuZmlyZSh7XG4gICAgdGl0bGU6ICdDb25maXJtZXIgbGEgc3VwcHJlc3Npb24gPycsXG4gICAgdGV4dDogJ0xcXCdvcMOpcmF0aW9uIG5lIHBvdXJyYSBwYXMgw6p0cmUgYW5udWzDqWUuJyxcbiAgICBpY29uOiAnd2FybmluZycsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBqZSBjb25maXJtZScsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlcicsXG4gICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgfSxcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgX3Rva2VuOiBjc3JmXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGlmIChpZC5oYXNPd25Qcm9wZXJ0eSgncmVkaXJlY3QnKSAmJiBpZC5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBpZC51cmxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy90LnJvdyhcIiNsaWduZV9cIitpZCkucmVtb3ZlKCkuZHJhdygpOyA9PCBkYXRhdHRhYmxlIHRvZG86IHJlbW92ZSBsaWduZSBzaSBkYXRhdGFibGUgPz8gcHJvYmzDqG1lIGRhbnMgYWRtPnBlcnNvbm5lbFxuICAgICAgICAgICAgJCgnI2xpZ25lXycgKyBpZCkuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgICAgICAgICAgYWRkQ2FsbG91dCgnU3VwcHJlc3Npb24gZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqHMnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogJ1N1cHByaW3DqSEnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTFxcJ2VucmVnaXN0cmVtZW50IGEgw6l0w6kgc3VwcHJpbcOpLicsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYWxsb3V0IChtZXNzYWdlLCBsYWJlbCkge1xuICBjb25zb2xlLmxvZygnY2FsbG91dCcpXG4gIHZhciB0cmFuc2xhdGUgPSBuZXcgQXJyYXkoKVxuICB0cmFuc2xhdGVbJ3N1Y2Nlc3MnXSA9ICdTdWNjw6hzJ1xuICB0cmFuc2xhdGVbJ2RhbmdlciddID0gJ0VycmV1cidcbiAgdHJhbnNsYXRlWyd3YXJuaW5nJ10gPSAnQXR0ZW50aW9uJ1xuXG4gIGNvbnN0IGh0bWwgPSAnPGRpdiBjbGFzcz1cImNhbGxvdXQgY2FsbG91dC0nICsgbGFiZWwgKyAnXCIgcm9sZT1cImFsZXJ0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImNhbGxvdXRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8aDU+JyArIHRyYW5zbGF0ZVtsYWJlbF0gKyAnPC9oNT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8cD4nICsgbWVzc2FnZSArICc8L3A+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4nXG5cbiAgJCgnI21haW5Db250ZW50JykucHJlcGVuZChodG1sKS5zbGlkZURvd24oJ3Nsb3cnKVxuICAkKCcuY2FsbG91dCcpLmRlbGF5KDUwMDApLnNsaWRlVXAoJ3Nsb3cnKVxufVxuXG4vL0VkaXRhYmxlXG5sZXQgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAnJ1xubGV0IHR5cGUgPSAndGV4dCdcbmxldCBFZGl0T25MaW5lID0gZmFsc2VcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5teWVkaXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAkKHRoaXMpXG4gIGxldCBodG1sID0gJydcbiAgRWRpdE9uTGluZSA9IHRydWVcbiAgaWYgKHR5cGVvZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykpICE9PSAndW5kZWZpbmVkJykge1xuICAgIHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICB9XG5cbiAgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAnc2VsZWN0Jykge1xuICAgIC8vdG9kbzogQSBmaW5hbGlzZXJcbiAgfSBlbHNlIHtcbiAgICBodG1sID0gZ2VuZXJlSW5wdXQoJCh0aGlzKSlcbiAgfVxuICAkKHRoaXMpLnJlcGxhY2VXaXRoKGh0bWwpXG4gICQoJyNteWVkaXQtaW5wdXQnKS5mb2N1cygpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI215ZWRpdC1pbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiBlLndoaWNoID09PSAxMykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHVwZGF0ZURhdGEoKVxuICB9XG5cbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgZS53aGljaCA9PT0gMjcpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtYW5udWxlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxufSlcblxuZnVuY3Rpb24gdXBkYXRlRGF0YSAoKSB7XG4gIGxldCB2YWwgPSAkKCcjbXllZGl0LWlucHV0JykudmFsKClcbiAgJC5hamF4KHtcbiAgICB1cmw6IG15RWRpdEluaXRpYWxDb250ZW50LmF0dHIoJ2hyZWYnKSxcbiAgICBkYXRhOiB7XG4gICAgICBmaWVsZDogbXlFZGl0SW5pdGlhbENvbnRlbnQuZGF0YSgnZmllbGQnKSxcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBteUVkaXRJbml0aWFsQ29udGVudC5odG1sKHZhbClcbiAgICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICAgICAgRWRpdE9uTGluZSA9IGZhbHNlXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZW5lcmVJbnB1dCAoJG9iaikge1xuICBsZXQgJGh0bWwgPSAnPGRpdiBpZD1cIm15RWRpdC16b25lXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCInICsgJG9iai5odG1sKCkudHJpbSgpICsgJ1wiIGlkPVwibXllZGl0LWlucHV0XCIgLz4nXG4gICRodG1sID0gJGh0bWwgKyAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3F1YXJlIGJ0bi1zbSBidG4tc3VjY2VzcyBidG4tb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPidcbiAgJGh0bWwgPSAkaHRtbCArICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLXNtIGJ0bi1kYW5nZXIgYnRuLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj48L2Rpdj4nXG4gIHJldHVybiAkaHRtbFxufVxuXG5qUXVlcnkuZm4uZGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSkgfHwgZGVmXG59XG5cbmpRdWVyeS5mbi5oYXNEYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmhhc0F0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSlcbn1cblxuZnVuY3Rpb24gZGF0YVRvT3B0aW9uIChuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHhbMV0udG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YU9wdGlvbnMgKGVsLCBjYXN0TGlzdCkge1xuICB2YXIgb3B0aW9ucyA9IHt9XG4gICQuZWFjaCgkKGVsKS5kYXRhKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cbiAgICBrZXkgPSBkYXRhVG9PcHRpb24oa2V5KVxuXG4gICAgLy8gRXNjYXBlIGRhdGEtcHJvdmlkZVxuICAgIGlmIChrZXkgPT0gJ3Byb3ZpZGUnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoY2FzdExpc3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgdHlwZSA9IGNhc3RMaXN0W2tleV1cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdib29sJzpcbiAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdudW0nOlxuICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJywnKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnNba2V5XSA9IHZhbHVlXG4gIH0pXG5cbiAgcmV0dXJuIG9wdGlvbnNcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
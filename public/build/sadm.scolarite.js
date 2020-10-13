(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sadm.scolarite"],{

/***/ "./assets/js/pages/sadm.scolarite.js":
/*!*******************************************!*\
  !*** ./assets/js/pages/sadm.scolarite.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/sadm.scolarite.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/09/2020 15:49

$(document).on('change', '#chgt_etudiant_departement', function () {
  $.ajax({
    url: Routing.generate('user_change_departement', {
      etudiant: $(this).data('etudiant'),
      departement: $(this).val()
    }),
    method: 'POST',
    success: function success(e) {
      $('#liste_groupes').empty().append('<tr><td colspan="3">Aucun groupe</td></tr>');
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Mofification enregistrée !', 'success');
    },
    error: function error(e) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Erreur lors de la sauvegarde de la modification !', 'danger');
    }
  });
});
$(document).on('change', '#chgt_etudiant_fin', function () {
  $.ajax({
    url: Routing.generate('user_change_annee_sortie', {
      etudiant: $(this).data('etudiant'),
      annee: $(this).val()
    }),
    method: 'POST',
    success: function success(e) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Mofification enregistrée !', 'success');
    },
    error: function error(e) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Erreur lors de la sauvegarde de la modification !', 'danger');
    }
  });
});
$(document).on('keyup', '#etudiant', function () {
  var $val = $(this).val();

  if ($val.length > 2) {
    $('#resultat').empty().load(Routing.generate('sa_etudiant_recherche', {
      needle: $val
    }));
  }
});
$(document).on('change', '#scolarite_semestre', function () {
  $.ajax({
    url: Routing.generate('administration_scolarite_ues_semestre', {
      semestre: $(this).val()
    }),
    type: 'POST',
    success: function success(data) {
      var $html = '<div class="row" id="blocUEs"><div class="col-sm-1">&nbsp;</div><div class="col-sm-11">';

      for (var key in data) {
        var value = data[key];
        $html = $html + '<div class="form-group"><label for="ue_' + key + '" class="required">UE ' + value + '</label><input type="text" id="ue_' + key + '" name="ue_' + key + '" required="required" class="form-control" value="0"></div>';
      }

      $html = $html + '</div></div>';
      var idUE = $('#scolarite_semestre');

      if (document.getElementById("blocUEs")) {
        $('#blocUEs').remove();
      }

      idUE.after($html);
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

},[["./assets/js/pages/sadm.scolarite.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~08e24351","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7c3f1a6f","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~a14823c0","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~38bcb1f7","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~31cc1171"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvc2FkbS5zY29sYXJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwiZXR1ZGlhbnQiLCJkYXRhIiwiZGVwYXJ0ZW1lbnQiLCJ2YWwiLCJtZXRob2QiLCJzdWNjZXNzIiwiZSIsImVtcHR5IiwiYXBwZW5kIiwiYWRkQ2FsbG91dCIsImVycm9yIiwiYW5uZWUiLCIkdmFsIiwibGVuZ3RoIiwibG9hZCIsIm5lZWRsZSIsInNlbWVzdHJlIiwidHlwZSIsIiRodG1sIiwia2V5IiwidmFsdWUiLCJpZFVFIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJhZnRlciIsInJlYWRVcmxNZW51IiwiJHVybCIsIiRlbHQiLCJzcGxpdCIsIiRmaXJzdEVsdCIsInBvcCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJsb2NhdGlvbiIsImF0dHIiLCJTd2FsIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsInByZXZlbnREZWZhdWx0IiwiY3NyZiIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsIl90b2tlbiIsImlkIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiY2xvc2VzdCIsInhociIsImFqYXhPcHRpb25zIiwidGhyb3duRXJyb3IiLCJkaXNtaXNzIiwibWVzc2FnZSIsImxhYmVsIiwiY29uc29sZSIsImxvZyIsInRyYW5zbGF0ZSIsIkFycmF5IiwiaHRtbCIsInByZXBlbmQiLCJzbGlkZURvd24iLCJkZWxheSIsInNsaWRlVXAiLCJteUVkaXRJbml0aWFsQ29udGVudCIsIkVkaXRPbkxpbmUiLCJnZW5lcmVJbnB1dCIsInJlcGxhY2VXaXRoIiwiZm9jdXMiLCJrZXlDb2RlIiwidXBkYXRlRGF0YSIsIndoaWNoIiwiZmllbGQiLCIkb2JqIiwidHJpbSIsImpRdWVyeSIsImZuIiwiZGF0YUF0dHIiLCJuYW1lIiwiZGVmIiwiZ2V0QXR0cmlidXRlIiwiaGFzRGF0YUF0dHIiLCJoYXNBdHRyaWJ1dGUiLCJkYXRhVG9PcHRpb24iLCJyZXBsYWNlIiwieCIsInRvVXBwZXJDYXNlIiwiZ2V0RGF0YU9wdGlvbnMiLCJlbCIsImNhc3RMaXN0Iiwib3B0aW9ucyIsImVhY2giLCJ1bmRlZmluZWQiLCJCb29sZWFuIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5Qiw0QkFBekIsRUFBdUQsWUFBWTtBQUNqRUYsR0FBQyxDQUFDRyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIseUJBQWpCLEVBQTRDO0FBQUNDLGNBQVEsRUFBRVAsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxJQUFSLENBQWEsVUFBYixDQUFYO0FBQXFDQyxpQkFBVyxFQUFFVCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLEdBQVI7QUFBbEQsS0FBNUMsQ0FEQTtBQUVMQyxVQUFNLEVBQUUsTUFGSDtBQUdMQyxXQUFPLEVBQUUsaUJBQVVDLENBQVYsRUFBYTtBQUNwQmIsT0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JjLEtBQXBCLEdBQTRCQyxNQUE1QixDQUFtQyw0Q0FBbkM7QUFDQUMsOERBQVUsQ0FBQyw0QkFBRCxFQUErQixTQUEvQixDQUFWO0FBQ0QsS0FOSTtBQU9MQyxTQUFLLEVBQUUsZUFBVUosQ0FBVixF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O0FBQ0EsUUFBSUEsR0FBRyxJQUFJLFNBQVgsRUFBc0I7QUFDcEI7QUFDRDs7QUFFRCxRQUFJZ0YsUUFBUSxJQUFJRyxTQUFoQixFQUEyQjtBQUN6QixVQUFJckYsSUFBSSxHQUFHa0YsUUFBUSxDQUFDaEYsR0FBRCxDQUFuQjs7QUFDQSxjQUFRRixJQUFSO0FBQ0UsYUFBSyxNQUFMO0FBQ0VHLGVBQUssR0FBR21GLE9BQU8sQ0FBQ25GLEtBQUQsQ0FBZjtBQUNBOztBQUVGLGFBQUssS0FBTDtBQUNFQSxlQUFLLEdBQUdvRixNQUFNLENBQUNwRixLQUFELENBQWQ7QUFDQTs7QUFFRixhQUFLLE9BQUw7QUFDRUEsZUFBSyxHQUFHQSxLQUFLLENBQUNRLEtBQU4sQ0FBWSxHQUFaLENBQVI7QUFDQTs7QUFFRjtBQWJGO0FBZ0JEOztBQUVEd0UsV0FBTyxDQUFDakYsR0FBRCxDQUFQLEdBQWVDLEtBQWY7QUFDRCxHQTlCRDtBQWdDQSxTQUFPZ0YsT0FBUDtBQUNELEMiLCJmaWxlIjoic2FkbS5zY29sYXJpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvc2FkbS5zY29sYXJpdGUuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyMS8wOS8yMDIwIDE1OjQ5XG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2NoZ3RfZXR1ZGlhbnRfZGVwYXJ0ZW1lbnQnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd1c2VyX2NoYW5nZV9kZXBhcnRlbWVudCcsIHtldHVkaWFudDogJCh0aGlzKS5kYXRhKCdldHVkaWFudCcpLCBkZXBhcnRlbWVudDogJCh0aGlzKS52YWwoKX0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAkKCcjbGlzdGVfZ3JvdXBlcycpLmVtcHR5KCkuYXBwZW5kKCc8dHI+PHRkIGNvbHNwYW49XCIzXCI+QXVjdW4gZ3JvdXBlPC90ZD48L3RyPicpXG4gICAgICBhZGRDYWxsb3V0KCdNb2ZpZmljYXRpb24gZW5yZWdpc3Ryw6llICEnLCAnc3VjY2VzcycpXG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHNhdXZlZ2FyZGUgZGUgbGEgbW9kaWZpY2F0aW9uICEnLCAnZGFuZ2VyJylcbiAgICB9XG5cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2NoZ3RfZXR1ZGlhbnRfZmluJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndXNlcl9jaGFuZ2VfYW5uZWVfc29ydGllJywge2V0dWRpYW50OiAkKHRoaXMpLmRhdGEoJ2V0dWRpYW50JyksIGFubmVlOiAkKHRoaXMpLnZhbCgpfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ01vZmlmaWNhdGlvbiBlbnJlZ2lzdHLDqWUgIScsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgc2F1dmVnYXJkZSBkZSBsYSBtb2RpZmljYXRpb24gIScsICdkYW5nZXInKVxuICAgIH1cblxuICB9KVxufSlcblxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI2V0dWRpYW50JywgZnVuY3Rpb24gKCkge1xuICBjb25zdCAkdmFsID0gJCh0aGlzKS52YWwoKVxuICBpZiAoJHZhbC5sZW5ndGggPiAyKSB7XG4gICAgJCgnI3Jlc3VsdGF0JykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ3NhX2V0dWRpYW50X3JlY2hlcmNoZScsIHtuZWVkbGU6ICR2YWx9KSlcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjc2NvbGFyaXRlX3NlbWVzdHJlJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoXG4gICAge1xuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9zY29sYXJpdGVfdWVzX3NlbWVzdHJlJywge3NlbWVzdHJlOiAkKHRoaXMpLnZhbCgpfSksXG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgJGh0bWwgPSAnPGRpdiBjbGFzcz1cInJvd1wiIGlkPVwiYmxvY1VFc1wiPjxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPiZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9XCJjb2wtc20tMTFcIj4nXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gZGF0YVtrZXldXG4gICAgICAgICAgJGh0bWwgPSAkaHRtbCArICc8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPjxsYWJlbCBmb3I9XCJ1ZV8nICsga2V5ICsgJ1wiIGNsYXNzPVwicmVxdWlyZWRcIj5VRSAnICsgdmFsdWUgKyAnPC9sYWJlbD48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVlXycgKyBrZXkgKyAnXCIgbmFtZT1cInVlXycgKyBrZXkgKyAnXCIgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9XCIwXCI+PC9kaXY+J1xuICAgICAgICB9XG4gICAgICAgICRodG1sID0gJGh0bWwgKyAnPC9kaXY+PC9kaXY+J1xuICAgICAgICB2YXIgaWRVRSA9ICQoJyNzY29sYXJpdGVfc2VtZXN0cmUnKVxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibG9jVUVzXCIpKSB7XG4gICAgICAgICAgJCgnI2Jsb2NVRXMnKS5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgICAgIGlkVUUuYWZ0ZXIoJGh0bWwpXG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxhIHJlcXXDqnRlLicsICdkYW5nZXInKVxuICAgICAgfVxuICAgIH0pO1xufSk7XG5cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy91dGlsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTEvMTAvMjAyMCAwODowNFxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxuZnVuY3Rpb24gcmVhZFVybE1lbnUgKCR1cmwpIHtcbiAgY29uc3QgJGVsdCA9ICR1cmwuc3BsaXQoJy8nKVxuICBsZXQgJGZpcnN0RWx0ID0gMlxuICBpZiAoJGVsdFsxXSA9PT0gJ2luZGV4LnBocCcpIHtcbiAgICBpZiAoJGVsdC5sZW5ndGggPiAxKSB7XG4gICAgICAkZmlyc3RFbHQgPSAzXG4gICAgfVxuICB9XG5cbiAgaWYgKCRlbHRbJGZpcnN0RWx0XSA9PT0gJ3N1cGVyLWFkbWluaXN0cmF0aW9uJykge1xuICAgICRmaXJzdEVsdCA9ICRmaXJzdEVsdCArIDFcbiAgfVxuXG4gIGlmICgkZWx0WyRlbHQubGVuZ3RoIC0gMV0gPT09ICcnKSB7XG4gICAgJGVsdC5wb3AoKVxuICB9XG5cbiAgJCgnLm1lbnUtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAkKCcjbWVudS0nICsgJGVsdFskZmlyc3RFbHRdKS5hZGRDbGFzcygnYWN0aXZlJylcbn1cblxuLy9jb2xvcmlzZSBsZSBib24gbWVudVxucmVhZFVybE1lbnUoJChsb2NhdGlvbikuYXR0cigncGF0aG5hbWUnKSlcblxuU3dhbC5taXhpbih7XG4gIGN1c3RvbUNsYXNzOiB7XG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gIH0sXG4gIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxufSlcbi8vcG9wIHVwIGRlIGNvbmZpcm1hdGlvbiBkZSBzdXBwcmVzc2lvblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdXBwcmltZXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJylcbiAgY29uc3QgY3NyZiA9ICQodGhpcykuZGF0YSgnY3NyZicpXG4gIFN3YWwuZmlyZSh7XG4gICAgdGl0bGU6ICdDb25maXJtZXIgbGEgc3VwcHJlc3Npb24gPycsXG4gICAgdGV4dDogJ0xcXCdvcMOpcmF0aW9uIG5lIHBvdXJyYSBwYXMgw6p0cmUgYW5udWzDqWUuJyxcbiAgICBpY29uOiAnd2FybmluZycsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBqZSBjb25maXJtZScsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlcicsXG4gICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgfSxcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgX3Rva2VuOiBjc3JmXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGlmIChpZC5oYXNPd25Qcm9wZXJ0eSgncmVkaXJlY3QnKSAmJiBpZC5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBpZC51cmxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI2xpZ25lXycgKyBpZCkuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgICAgICAgICAgYWRkQ2FsbG91dCgnU3VwcHJlc3Npb24gZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqHMnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogJ1N1cHByaW3DqSEnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTFxcJ2VucmVnaXN0cmVtZW50IGEgw6l0w6kgc3VwcHJpbcOpLicsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYWxsb3V0IChtZXNzYWdlLCBsYWJlbCkge1xuICBjb25zb2xlLmxvZygnY2FsbG91dCcpXG4gIHZhciB0cmFuc2xhdGUgPSBuZXcgQXJyYXkoKVxuICB0cmFuc2xhdGVbJ3N1Y2Nlc3MnXSA9ICdTdWNjw6hzJ1xuICB0cmFuc2xhdGVbJ2RhbmdlciddID0gJ0VycmV1cidcbiAgdHJhbnNsYXRlWyd3YXJuaW5nJ10gPSAnQXR0ZW50aW9uJ1xuXG4gIGNvbnN0IGh0bWwgPSAnPGRpdiBjbGFzcz1cImNhbGxvdXQgY2FsbG91dC0nICsgbGFiZWwgKyAnXCIgcm9sZT1cImFsZXJ0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImNhbGxvdXRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8aDU+JyArIHRyYW5zbGF0ZVtsYWJlbF0gKyAnPC9oNT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8cD4nICsgbWVzc2FnZSArICc8L3A+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4nXG5cbiAgJCgnI21haW5Db250ZW50JykucHJlcGVuZChodG1sKS5zbGlkZURvd24oJ3Nsb3cnKVxuICAkKCcuY2FsbG91dCcpLmRlbGF5KDUwMDApLnNsaWRlVXAoJ3Nsb3cnKVxufVxuXG4vL0VkaXRhYmxlXG5sZXQgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAnJ1xubGV0IHR5cGUgPSAndGV4dCdcbmxldCBFZGl0T25MaW5lID0gZmFsc2VcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5teWVkaXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAkKHRoaXMpXG4gIGxldCBodG1sID0gJydcbiAgRWRpdE9uTGluZSA9IHRydWVcbiAgaWYgKHR5cGVvZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykpICE9PSAndW5kZWZpbmVkJykge1xuICAgIHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICB9XG5cbiAgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAnc2VsZWN0Jykge1xuICAgIC8vdG9kbzogQSBmaW5hbGlzZXJcbiAgfSBlbHNlIHtcbiAgICBodG1sID0gZ2VuZXJlSW5wdXQoJCh0aGlzKSlcbiAgfVxuICAkKHRoaXMpLnJlcGxhY2VXaXRoKGh0bWwpXG4gICQoJyNteWVkaXQtaW5wdXQnKS5mb2N1cygpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI215ZWRpdC1pbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiBlLndoaWNoID09PSAxMykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHVwZGF0ZURhdGEoKVxuICB9XG5cbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgZS53aGljaCA9PT0gMjcpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtYW5udWxlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxufSlcblxuZnVuY3Rpb24gdXBkYXRlRGF0YSAoKSB7XG4gIGxldCB2YWwgPSAkKCcjbXllZGl0LWlucHV0JykudmFsKClcbiAgJC5hamF4KHtcbiAgICB1cmw6IG15RWRpdEluaXRpYWxDb250ZW50LmF0dHIoJ2hyZWYnKSxcbiAgICBkYXRhOiB7XG4gICAgICBmaWVsZDogbXlFZGl0SW5pdGlhbENvbnRlbnQuZGF0YSgnZmllbGQnKSxcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBteUVkaXRJbml0aWFsQ29udGVudC5odG1sKHZhbClcbiAgICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICAgICAgRWRpdE9uTGluZSA9IGZhbHNlXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZW5lcmVJbnB1dCAoJG9iaikge1xuICBsZXQgJGh0bWwgPSAnPGRpdiBpZD1cIm15RWRpdC16b25lXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCInICsgJG9iai5odG1sKCkudHJpbSgpICsgJ1wiIGlkPVwibXllZGl0LWlucHV0XCIgLz4nXG4gICRodG1sID0gJGh0bWwgKyAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3F1YXJlIGJ0bi1zbSBidG4tc3VjY2VzcyBidG4tb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPidcbiAgJGh0bWwgPSAkaHRtbCArICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLXNtIGJ0bi1kYW5nZXIgYnRuLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj48L2Rpdj4nXG4gIHJldHVybiAkaHRtbFxufVxuXG5qUXVlcnkuZm4uZGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSkgfHwgZGVmXG59XG5cbmpRdWVyeS5mbi5oYXNEYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmhhc0F0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSlcbn1cblxuZnVuY3Rpb24gZGF0YVRvT3B0aW9uIChuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHhbMV0udG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YU9wdGlvbnMgKGVsLCBjYXN0TGlzdCkge1xuICB2YXIgb3B0aW9ucyA9IHt9XG4gICQuZWFjaCgkKGVsKS5kYXRhKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cbiAgICBrZXkgPSBkYXRhVG9PcHRpb24oa2V5KVxuXG4gICAgLy8gRXNjYXBlIGRhdGEtcHJvdmlkZVxuICAgIGlmIChrZXkgPT0gJ3Byb3ZpZGUnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoY2FzdExpc3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgdHlwZSA9IGNhc3RMaXN0W2tleV1cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdib29sJzpcbiAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdudW0nOlxuICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJywnKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnNba2V5XSA9IHZhbHVlXG4gIH0pXG5cbiAgcmV0dXJuIG9wdGlvbnNcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.bornes"],{

/***/ "./assets/js/pages/adm.borne.js":
/*!**************************************!*\
  !*** ./assets/js/pages/adm.borne.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.borne.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/09/2020 16:14

$(document).on('click', '.visibiliteBorne', function () {
  var btn = $(this);
  $.ajax({
    url: Routing.generate('administration_borne_visibilite', {
      id: btn.data('id')
    }),
    success: function success(data) {
      if (data === false) {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Message masqué avec succés !', 'success');
        btn.removeClass('btn-success').addClass('btn-danger');
        btn.children('i').removeClass('fa-eye').addClass('fa-eye-slash');
        btn.attr('title', 'Message masqué. Rendre visible');
      } else {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["addCallout"])('Message affiché avec succés !', 'success');
        btn.removeClass('btn-danger').addClass('btn-success');
        btn.children('i').removeClass('fa-eye-slash').addClass('fa-eye');
        btn.attr('title', 'Message affiché. Rendre invisible');
      }
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

},[["./assets/js/pages/adm.borne.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~08e24351","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7c3f1a6f","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~a14823c0","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~38bcb1f7","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~31cc1171"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLmJvcm5lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiYnRuIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImlkIiwiZGF0YSIsInN1Y2Nlc3MiLCJhZGRDYWxsb3V0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNoaWxkcmVuIiwiYXR0ciIsInJlYWRVcmxNZW51IiwiJHVybCIsIiRlbHQiLCJzcGxpdCIsIiRmaXJzdEVsdCIsImxlbmd0aCIsInBvcCIsImxvY2F0aW9uIiwiU3dhbCIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJlIiwicHJldmVudERlZmF1bHQiLCJjc3JmIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJ0eXBlIiwiX3Rva2VuIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiY2xvc2VzdCIsInJlbW92ZSIsImVycm9yIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJodG1sIiwicHJlcGVuZCIsInNsaWRlRG93biIsImRlbGF5Iiwic2xpZGVVcCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ2YWwiLCJmaWVsZCIsIm1ldGhvZCIsIiRvYmoiLCIkaHRtbCIsInRyaW0iLCJqUXVlcnkiLCJmbiIsImRhdGFBdHRyIiwibmFtZSIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0RhdGFBdHRyIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwicmVwbGFjZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImdldERhdGFPcHRpb25zIiwiZWwiLCJjYXN0TGlzdCIsIm9wdGlvbnMiLCJlYWNoIiwia2V5IiwidW5kZWZpbmVkIiwiQm9vbGVhbiIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0Isa0JBQXhCLEVBQTRDLFlBQVU7QUFDcEQsTUFBTUMsR0FBRyxHQUFHSCxDQUFDLENBQUMsSUFBRCxDQUFiO0FBQ0FBLEdBQUMsQ0FBQ0ksSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLGlDQUFqQixFQUFvRDtBQUFDQyxRQUFFLEVBQUNMLEdBQUcsQ0FBQ00sSUFBSixDQUFTLElBQVQ7QUFBSixLQUFwRCxDQURBO0FBRUxDLFdBQU8sRUFBRSxpQkFBU0QsSUFBVCxFQUFlO0FBQ3RCLFVBQUlBLElBQUksS0FBSyxLQUFiLEVBQW9CO0FBQ2xCRSxnRUFBVSxDQUFDLDhCQUFELEVBQWlDLFNBQWpDLENBQVY7QUFDQVIsV0FBRyxDQUFDUyxXQUFKLENBQWdCLGFBQWhCLEVBQStCQyxRQUEvQixDQUF3QyxZQUF4QztBQUNBVixXQUFHLENBQUNXLFFBQUosQ0FBYSxHQUFiLEVBQWtCRixXQUFsQixDQUE4QixRQUE5QixFQUF3Q0MsUUFBeEMsQ0FBaUQsY0FBakQ7QUFDQVYsV0FBRyxDQUFDWSxJQUFKLENBQVMsT0FBVCxFQUFrQixnQ0FBbEI7QUFDRCxPQUxELE1BS087QUFDTEosZ0VBQVUsQ0FBQywrQkFBRCxFQUFrQyxTQUFsQyxDQUFWO0FBQ0FS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QUFOLENBQVksR0FBWixDQUFSO0FBQ0E7O0FBRUY7QUFiRjtBQWdCRDs7QUFFRDJFLFdBQU8sQ0FBQ0UsR0FBRCxDQUFQLEdBQWVwRCxLQUFmO0FBQ0QsR0E5QkQ7QUFnQ0EsU0FBT2tELE9BQVA7QUFDRCxDIiwiZmlsZSI6ImFkbS5ib3JuZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLmJvcm5lLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDYvMDkvMjAyMCAxNjoxNFxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnZpc2liaWxpdGVCb3JuZScsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGJ0biA9ICQodGhpcylcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2Jvcm5lX3Zpc2liaWxpdGUnLCB7aWQ6YnRuLmRhdGEoJ2lkJyl9KSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBpZiAoZGF0YSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYWRkQ2FsbG91dCgnTWVzc2FnZSBtYXNxdcOpIGF2ZWMgc3VjY8OpcyAhJywgJ3N1Y2Nlc3MnKVxuICAgICAgICBidG4ucmVtb3ZlQ2xhc3MoJ2J0bi1zdWNjZXNzJykuYWRkQ2xhc3MoJ2J0bi1kYW5nZXInKVxuICAgICAgICBidG4uY2hpbGRyZW4oJ2knKS5yZW1vdmVDbGFzcygnZmEtZXllJykuYWRkQ2xhc3MoJ2ZhLWV5ZS1zbGFzaCcpXG4gICAgICAgIGJ0bi5hdHRyKCd0aXRsZScsICdNZXNzYWdlIG1hc3F1w6kuIFJlbmRyZSB2aXNpYmxlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZENhbGxvdXQoJ01lc3NhZ2UgYWZmaWNow6kgYXZlYyBzdWNjw6lzICEnLCAnc3VjY2VzcycpXG4gICAgICAgIGJ0bi5yZW1vdmVDbGFzcygnYnRuLWRhbmdlcicpLmFkZENsYXNzKCdidG4tc3VjY2VzcycpXG4gICAgICAgIGJ0bi5jaGlsZHJlbignaScpLnJlbW92ZUNsYXNzKCdmYS1leWUtc2xhc2gnKS5hZGRDbGFzcygnZmEtZXllJylcbiAgICAgICAgYnRuLmF0dHIoJ3RpdGxlJywgJ01lc3NhZ2UgYWZmaWNow6kuIFJlbmRyZSBpbnZpc2libGUnKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDMwLzA3LzIwMjAgMTE6MThcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmZ1bmN0aW9uIHJlYWRVcmxNZW51ICgkdXJsKSB7XG4gIGNvbnN0ICRlbHQgPSAkdXJsLnNwbGl0KCcvJylcbiAgbGV0ICRmaXJzdEVsdCA9IDJcbiAgaWYgKCRlbHRbMV0gPT09ICdpbmRleC5waHAnKSB7XG4gICAgaWYgKCRlbHQubGVuZ3RoID4gMSkge1xuICAgICAgJGZpcnN0RWx0ID0gM1xuICAgIH1cbiAgfVxuXG4gIGlmICgkZWx0WyRmaXJzdEVsdF0gPT09ICdzdXBlci1hZG1pbmlzdHJhdGlvbicpIHtcbiAgICAkZmlyc3RFbHQgPSAkZmlyc3RFbHQgKyAxXG4gIH1cblxuICBpZiAoJGVsdFskZWx0Lmxlbmd0aCAtIDFdID09PSAnJykge1xuICAgICRlbHQucG9wKClcbiAgfVxuXG4gICQoJy5tZW51LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lbnUtJyArICRlbHRbJGZpcnN0RWx0XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59XG5cbi8vY29sb3Jpc2UgbGUgYm9uIG1lbnVcbnJlYWRVcmxNZW51KCQobG9jYXRpb24pLmF0dHIoJ3BhdGhuYW1lJykpXG5cblN3YWwubWl4aW4oe1xuICBjdXN0b21DbGFzczoge1xuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICB9LFxuICBidXR0b25zU3R5bGluZzogZmFsc2Vcbn0pXG4vL3BvcCB1cCBkZSBjb25maXJtYXRpb24gZGUgc3VwcHJlc3Npb25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3VwcHJpbWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gIGNvbnN0IGNzcmYgPSAkKHRoaXMpLmRhdGEoJ2NzcmYnKVxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIF90b2tlbjogY3NyZlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0JykgJiYgaWQuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gaWQudXJsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyNsaWduZV8nICsgaWQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdTdXBwcmltw6khJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0xcXCdlbnJlZ2lzdHJlbWVudCBhIMOpdMOpIHN1cHByaW3DqS4nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24hJyxcbiAgICAgICAgICAgIHRleHQ6ICdNZXJjaSBkZSByZW5vdXZlbGVyIGxcXCdvcMOpcmF0aW9uJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXG4gICAgICByZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCdcbiAgICApIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQ2FuY2VsbGVkJyxcbiAgICAgICAgdGV4dDogJ09LISBUb3V0IGVzdCBjb21tZSBhdmFudCAhJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbG91dCAobWVzc2FnZSwgbGFiZWwpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxvdXQnKVxuICB2YXIgdHJhbnNsYXRlID0gbmV3IEFycmF5KClcbiAgdHJhbnNsYXRlWydzdWNjZXNzJ10gPSAnU3VjY8OocydcbiAgdHJhbnNsYXRlWydkYW5nZXInXSA9ICdFcnJldXInXG4gIHRyYW5zbGF0ZVsnd2FybmluZyddID0gJ0F0dGVudGlvbidcblxuICBjb25zdCBodG1sID0gJzxkaXYgY2xhc3M9XCJjYWxsb3V0IGNhbGxvdXQtJyArIGxhYmVsICsgJ1wiIHJvbGU9XCJhbGVydFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJjYWxsb3V0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGg1PicgKyB0cmFuc2xhdGVbbGFiZWxdICsgJzwvaDU+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPHA+JyArIG1lc3NhZ2UgKyAnPC9wPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9kaXY+J1xuXG4gICQoJyNtYWluQ29udGVudCcpLnByZXBlbmQoaHRtbCkuc2xpZGVEb3duKCdzbG93JylcbiAgJCgnLmNhbGxvdXQnKS5kZWxheSg1MDAwKS5zbGlkZVVwKCdzbG93Jylcbn1cblxuLy9FZGl0YWJsZVxubGV0IG15RWRpdEluaXRpYWxDb250ZW50ID0gJydcblxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCd0b3RvJylcbiAgICBodG1sID0gZ2VuZXJlSW5wdXQoJCh0aGlzKSlcbiAgfVxuICAkKHRoaXMpLnJlcGxhY2VXaXRoKGh0bWwpXG4gICQoJyNteWVkaXQtaW5wdXQnKS5mb2N1cygpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI215ZWRpdC1pbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG4gIGxldCAkaHRtbCA9ICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiAvPidcbiAgJGh0bWwgPSAkaHRtbCArICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLXNtIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLWRhbmdlciBidG4tb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPjwvZGl2PidcbiAgcmV0dXJuICRodG1sXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
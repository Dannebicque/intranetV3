(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["adm.stage_courrier"],{

/***/ "./assets/js/pages/adm.stage_courrier.js":
/*!***********************************************!*\
  !*** ./assets/js/pages/adm.stage_courrier.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tinyMce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tinyMce */ "./assets/js/tinyMce.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.stage_courrier.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/09/2021 10:25

 // import $ from 'jquery'


var ed_courrier, ed_ETAT_STAGE_AUTORISE, ed_ETAT_STAGE_DEPOSE, ed_ETAT_STAGE_VALIDE, ed_ETAT_STAGE_REFUS, ed_ETAT_STAGE_INCOMPLET, ed_ETAT_STAGE_CONVENTION_IMPRIMEE, ed_ETAT_STAGE_CONVENTION_ENVOYEE, ed_ETAT_STAGE_CONVENTION_RECUE;
var fields = ['{{civilite_court_etudiant}}', '{{civilite_etudiant}}', '{{prenom_etudiant}}', '{{nom_etudiant}}', '{{entreprise}}', '{{civilite_court_responsable}}', '{{civilite_responsable}}', '{{prenom_reponsable}}', '{{nom_responsable}}', '{{civilite_court_tuteur}}', '{{civilite_tuteur}}', '{{prenom_tuteur}}', '{{nom_tuteur}}', '{{civilite_court_tuteur_univ}}', '{{civilite_tuteur_univ}}', '{{prenom_tuteur_univ}}', '{{nom_tuteur_univ}}', '{{date_debut_stage}}', '{{date_fin_stage}}', '{{nom_periode_stage}}'];
var nbfields = fields.length;
var text = '';

for (var i = 0; i < nbfields; i++) {
  text = text + ' ' + fields[i];
}

function loadTinyMce($id) {
  return tinymce.init({
    selector: '#text_' + $id,
    height: 300,
    menubar: 'publipostage',
    language: 'fr_FR',
    content_css: 'default',
    toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent',
    menu: {
      publipostage: {
        title: 'Champs de publipostage',
        items: text
      }
    },
    setup: function setup(editor) {
      var _loop = function _loop(_i) {
        editor.ui.registry.addMenuItem(fields[_i], {
          text: fields[_i],
          onAction: function onAction() {
            editor.insertContent(fields[_i]);
          }
        });
      };

      for (var _i = 0; _i < nbfields; _i++) {
        _loop(_i);
      }
    }
  });
}

$(document).ready(function () {
  ed_ETAT_STAGE_AUTORISE = loadTinyMce('ETAT_STAGE_AUTORISE');
  ed_ETAT_STAGE_DEPOSE = loadTinyMce('ETAT_STAGE_DEPOSE');
  ed_ETAT_STAGE_VALIDE = loadTinyMce('ETAT_STAGE_VALIDE');
  ed_ETAT_STAGE_REFUS = loadTinyMce('ETAT_STAGE_REFUS');
  ed_ETAT_STAGE_INCOMPLET = loadTinyMce('ETAT_STAGE_INCOMPLET');
  ed_ETAT_STAGE_CONVENTION_IMPRIMEE = loadTinyMce('ETAT_STAGE_CONVENTION_IMPRIMEE');
  ed_ETAT_STAGE_CONVENTION_ENVOYEE = loadTinyMce('ETAT_STAGE_CONVENTION_ENVOYEE');
  ed_ETAT_STAGE_CONVENTION_RECUE = loadTinyMce('ETAT_STAGE_CONVENTION_RECUE');
  ed_courrier = loadTinyMce('courrier');
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
      message: tinymce.get('text_' + onglet).getContent(),
      sujet: $('#sujet_' + etat).val()
    },
    success: function success() {
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Modèle enregistré !', 'success');
    }
  });
});
$(document).on('click', '.resetDefaut', function (e) {
  e.preventDefault();
  var etat = $(this).data('type');
  var periode = $(this).data('periode');
  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
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
      $.ajax({
        url: Routing.generate('administration_stage_periode_courrier_reset', {
          id: periode,
          etat: etat
        }),
        type: 'POST',
        success: function success() {
          tinymce.get('text_' + etat).setContent('');
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Suppression effectuée avec succès, retour au message par défaut', 'success');
          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
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
          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
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
          (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Erreur lors de la tentative de suppression', 'danger');
        }
      });
    } else if ( // Read more about handling dismissals
    result.dismiss === 'cancel') {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","vendors-node_modules_tinymce_icons_default_icons_min_js-node_modules_tinymce_plugins_lists_pl-a86b6f","assets_js_util_js","assets_js_tinyMce_js"], () => (__webpack_exec__("./assets/js/pages/adm.stage_courrier.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2FkbS5zdGFnZV9jb3Vycmllci5qcyJdLCJuYW1lcyI6WyJlZF9jb3VycmllciIsImVkX0VUQVRfU1RBR0VfQVVUT1JJU0UiLCJlZF9FVEFUX1NUQUdFX0RFUE9TRSIsImVkX0VUQVRfU1RBR0VfVkFMSURFIiwiZWRfRVRBVF9TVEFHRV9SRUZVUyIsImVkX0VUQVRfU1RBR0VfSU5DT01QTEVUIiwiZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0lNUFJJTUVFIiwiZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0VOVk9ZRUUiLCJlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fUkVDVUUiLCJmaWVsZHMiLCJuYmZpZWxkcyIsImxlbmd0aCIsInRleHQiLCJpIiwibG9hZFRpbnlNY2UiLCIkaWQiLCJ0aW55bWNlIiwiaW5pdCIsInNlbGVjdG9yIiwiaGVpZ2h0IiwibWVudWJhciIsImxhbmd1YWdlIiwiY29udGVudF9jc3MiLCJ0b29sYmFyIiwibWVudSIsInB1YmxpcG9zdGFnZSIsInRpdGxlIiwiaXRlbXMiLCJzZXR1cCIsImVkaXRvciIsInVpIiwicmVnaXN0cnkiLCJhZGRNZW51SXRlbSIsIm9uQWN0aW9uIiwiaW5zZXJ0Q29udGVudCIsIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwib24iLCJldGF0IiwiZGF0YSIsIm9uZ2xldCIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJ1dWlkIiwibWFpbCIsIm1ldGhvZCIsIm1lc3NhZ2UiLCJnZXQiLCJnZXRDb250ZW50Iiwic3VqZXQiLCJ2YWwiLCJzdWNjZXNzIiwiYWRkQ2FsbG91dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBlcmlvZGUiLCJTd2FsIiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiaWQiLCJ0eXBlIiwic2V0Q29udGVudCIsImVycm9yIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtDQUVBOztBQUNBO0FBRUEsSUFBSUEsV0FBSixFQUFpQkMsc0JBQWpCLEVBQXlDQyxvQkFBekMsRUFBK0RDLG9CQUEvRCxFQUFxRkMsbUJBQXJGLEVBQ0VDLHVCQURGLEVBRUVDLGlDQUZGLEVBRXFDQyxnQ0FGckMsRUFFdUVDLDhCQUZ2RTtBQUlBLElBQUlDLE1BQU0sR0FBRyxDQUNYLDZCQURXLEVBRVgsdUJBRlcsRUFHWCxxQkFIVyxFQUlYLGtCQUpXLEVBS1gsZ0JBTFcsRUFNWCxnQ0FOVyxFQU9YLDBCQVBXLEVBUVgsdUJBUlcsRUFTWCxxQkFUVyxFQVVYLDJCQVZXLEVBV1gscUJBWFcsRUFZWCxtQkFaVyxFQWFYLGdCQWJXLEVBY1gsZ0NBZFcsRUFlWCwwQkFmVyxFQWdCWCx3QkFoQlcsRUFpQlgscUJBakJXLEVBa0JYLHNCQWxCVyxFQW1CWCxvQkFuQlcsRUFvQlgsdUJBcEJXLENBQWI7QUFzQkEsSUFBTUMsUUFBUSxHQUFHRCxNQUFNLENBQUNFLE1BQXhCO0FBQ0EsSUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxRQUFwQixFQUE4QkcsQ0FBQyxFQUEvQixFQUFtQztBQUNqQ0QsTUFBSSxHQUFHQSxJQUFJLEdBQUcsR0FBUCxHQUFhSCxNQUFNLENBQUNJLENBQUQsQ0FBMUI7QUFDRDs7QUFFRCxTQUFTQyxXQUFULENBQXNCQyxHQUF0QixFQUEyQjtBQUN6QixTQUFPQyxPQUFPLENBQUNDLElBQVIsQ0FBYTtB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RUFBRSxTQUhFO0FBSVJJLDZCQUFpQixFQUFFLElBSlg7QUFLUkUsdUJBQVcsRUFBRTtBQUNYQywyQkFBYSxFQUFFLGlCQURKO0FBRVhDLDBCQUFZLEVBQUU7QUFGSCxhQUxMO0FBU1JDLDBCQUFjLEVBQUU7QUFUUixXQUFWO0FBV0QsU0FqQkk7QUFrQkxPLGFBQUssRUFBRSxlQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEJDLFdBQTVCLEVBQXlDO0FBQzlDcEIsaUVBQUEsQ0FBVTtBQUNSakMsaUJBQUssRUFBRSxnQ0FEQztBQUVSZCxnQkFBSSxFQUFFLGtDQUZFO0FBR1JnRCxnQkFBSSxFQUFFLE9BSEU7QUFJUkksNkJBQWlCLEVBQUUsSUFKWDtBQUtSRSx1QkFBVyxFQUFFO0FBQ1hDLDJCQUFhLEVBQUUsaUJBREo7QUFFWEMsMEJBQVksRUFBRTtBQUZILGFBTEw7QUFTUkMsMEJBQWMsRUFBRTtBQVRSLFdBQVY7QUFXQWQsMkRBQVUsQ0FBQyw0Q0FBRCxFQUErQyxRQUEvQyxDQUFWO0FBQ0Q7QUEvQkksT0FBUDtBQWtDRCxLQW5DRCxNQW1DTyxLQUNMO0FBQ0FnQixVQUFNLENBQUNTLE9BQVAsS0FBbUIsUUFGZCxFQUdMO0FBQ0FyQiw2REFBQSxDQUFVO0FBQ1JqQyxhQUFLLEVBQUUsV0FEQztBQUVSZCxZQUFJLEVBQUUsNEJBRkU7QUFHUmdELFlBQUksRUFBRSxPQUhFO0FBSVJJLHlCQUFpQixFQUFFLElBSlg7QUFLUkUsbUJBQVcsRUFBRTtBQUNYQyx1QkFBYSxFQUFFLGlCQURKO0FBRVhDLHNCQUFZLEVBQUU7QUFGSCxTQUxMO0FBU1JDLHNCQUFjLEVBQUU7QUFUUixPQUFWO0FBV0Q7QUFDRixHQWxFRDtBQW1FRCxDQXhFRCxFIiwiZmlsZSI6ImFkbS5zdGFnZV9jb3Vycmllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0uc3RhZ2VfY291cnJpZXIuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyMS8wOS8yMDIxIDEwOjI1XG5cbmltcG9ydCAnLi4vdGlueU1jZSdcbmltcG9ydCB7YWRkQ2FsbG91dH0gZnJvbSAnLi4vdXRpbCdcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5sZXQgZWRfY291cnJpZXIsIGVkX0VUQVRfU1RBR0VfQVVUT1JJU0UsIGVkX0VUQVRfU1RBR0VfREVQT1NFLCBlZF9FVEFUX1NUQUdFX1ZBTElERSwgZWRfRVRBVF9TVEFHRV9SRUZVUyxcbiAgZWRfRVRBVF9TVEFHRV9JTkNPTVBMRVQsXG4gIGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9JTVBSSU1FRSwgZWRfRVRBVF9TVEFHRV9DT05WRU5USU9OX0VOVk9ZRUUsIGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRVxuXG5sZXQgZmllbGRzID0gW1xuICAne3tjaXZpbGl0ZV9jb3VydF9ldHVkaWFudH19JyxcbiAgJ3t7Y2l2aWxpdGVfZXR1ZGlhbnR9fScsXG4gICd7e3ByZW5vbV9ldHVkaWFudH19JyxcbiAgJ3t7bm9tX2V0dWRpYW50fX0nLFxuICAne3tlbnRyZXByaXNlfX0nLFxuICAne3tjaXZpbGl0ZV9jb3VydF9yZXNwb25zYWJsZX19JyxcbiAgJ3t7Y2l2aWxpdGVfcmVzcG9uc2FibGV9fScsXG4gICd7e3ByZW5vbV9yZXBvbnNhYmxlfX0nLFxuICAne3tub21fcmVzcG9uc2FibGV9fScsXG4gICd7e2NpdmlsaXRlX2NvdXJ0X3R1dGV1cn19JyxcbiAgJ3t7Y2l2aWxpdGVfdHV0ZXVyfX0nLFxuICAne3twcmVub21fdHV0ZXVyfX0nLFxuICAne3tub21fdHV0ZXVyfX0nLFxuICAne3tjaXZpbGl0ZV9jb3VydF90dXRldXJfdW5pdn19JyxcbiAgJ3t7Y2l2aWxpdGVfdHV0ZXVyX3VuaXZ9fScsXG4gICd7e3ByZW5vbV90dXRldXJfdW5pdn19JyxcbiAgJ3t7bm9tX3R1dGV1cl91bml2fX0nLFxuICAne3tkYXRlX2RlYnV0X3N0YWdlfX0nLFxuICAne3tkYXRlX2Zpbl9zdGFnZX19JyxcbiAgJ3t7bm9tX3BlcmlvZGVfc3RhZ2V9fSdcbl1cbmNvbnN0IG5iZmllbGRzID0gZmllbGRzLmxlbmd0aFxubGV0IHRleHQgPSAnJ1xuZm9yIChsZXQgaSA9IDA7IGkgPCBuYmZpZWxkczsgaSsrKSB7XG4gIHRleHQgPSB0ZXh0ICsgJyAnICsgZmllbGRzW2ldXG59XG5cbmZ1bmN0aW9uIGxvYWRUaW55TWNlICgkaWQpIHtcbiAgcmV0dXJuIHRpbnltY2UuaW5pdCh7XG4gICAgc2VsZWN0b3I6ICcjdGV4dF8nICsgJGlkLFxuICAgIGhlaWdodDogMzAwLFxuICAgIG1lbnViYXI6ICdwdWJsaXBvc3RhZ2UnLFxuICAgIGxhbmd1YWdlOiAnZnJfRlInLFxuICAgIGNvbnRlbnRfY3NzOiAnZGVmYXVsdCcsXG4gICAgdG9vbGJhcjogJ3VuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBvdXRkZW50IGluZGVudCcsXG4gICAgbWVudToge1xuICAgICAgcHVibGlwb3N0YWdlOiB7dGl0bGU6ICdDaGFtcHMgZGUgcHVibGlwb3N0YWdlJywgaXRlbXM6IHRleHR9XG4gICAgfSxcbiAgICBzZXR1cDogZnVuY3Rpb24gKGVkaXRvcikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYmZpZWxkczsgaSsrKSB7XG4gICAgICAgIGVkaXRvci51aS5yZWdpc3RyeS5hZGRNZW51SXRlbShmaWVsZHNbaV0sIHtcbiAgICAgICAgICB0ZXh0OiBmaWVsZHNbaV0sXG4gICAgICAgICAgb25BY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVkaXRvci5pbnNlcnRDb250ZW50KGZpZWxkc1tpXSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIGVkX0VUQVRfU1RBR0VfQVVUT1JJU0UgPSBsb2FkVGlueU1jZSgnRVRBVF9TVEFHRV9BVVRPUklTRScpXG4gIGVkX0VUQVRfU1RBR0VfREVQT1NFID0gbG9hZFRpbnlNY2UoJ0VUQVRfU1RBR0VfREVQT1NFJylcbiAgZWRfRVRBVF9TVEFHRV9WQUxJREUgPSBsb2FkVGlueU1jZSgnRVRBVF9TVEFHRV9WQUxJREUnKVxuICBlZF9FVEFUX1NUQUdFX1JFRlVTID0gbG9hZFRpbnlNY2UoJ0VUQVRfU1RBR0VfUkVGVVMnKVxuICBlZF9FVEFUX1NUQUdFX0lOQ09NUExFVCA9IGxvYWRUaW55TWNlKCdFVEFUX1NUQUdFX0lOQ09NUExFVCcpXG4gIGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9JTVBSSU1FRSA9IGxvYWRUaW55TWNlKCdFVEFUX1NUQUdFX0NPTlZFTlRJT05fSU1QUklNRUUnKVxuICBlZF9FVEFUX1NUQUdFX0NPTlZFTlRJT05fRU5WT1lFRSA9IGxvYWRUaW55TWNlKCdFVEFUX1NUQUdFX0NPTlZFTlRJT05fRU5WT1lFRScpXG4gIGVkX0VUQVRfU1RBR0VfQ09OVkVOVElPTl9SRUNVRSA9IGxvYWRUaW55TWNlKCdFVEFUX1NUQUdFX0NPTlZFTlRJT05fUkVDVUUnKVxuICBlZF9jb3VycmllciA9IGxvYWRUaW55TWNlKCdjb3VycmllcicpXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmVucmVnaXN0cmVNb2RlbGVNYWlsJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBldGF0ID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgY29uc3Qgb25nbGV0ID0gJCh0aGlzKS5kYXRhKCdlZCcpXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9zdGFnZV9wZXJpb2RlX2NvdXJyaWVyX3NhdXZlZ2FyZGVfbW9kZWxlJywge1xuICAgICAgdXVpZDogJCh0aGlzKS5kYXRhKCdwZXJpb2RlJyksXG4gICAgICBtYWlsOiBldGF0XG4gICAgfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YToge1xuICAgICAgbWVzc2FnZTogdGlueW1jZS5nZXQoJ3RleHRfJyArIG9uZ2xldCkuZ2V0Q29udGVudCgpLFxuICAgICAgc3VqZXQ6ICQoJyNzdWpldF8nICsgZXRhdCkudmFsKClcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFkZENhbGxvdXQoJ01vZMOobGUgZW5yZWdpc3Ryw6kgIScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnJlc2V0RGVmYXV0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGxldCBldGF0ID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgbGV0IHBlcmlvZGUgPSAkKHRoaXMpLmRhdGEoJ3BlcmlvZGUnKVxuXG4gIFN3YWwuZmlyZSh7XG4gICAgdGl0bGU6ICdDb25maXJtZXIgbGUgcmV0b3VyIGF1IG1lc3NhZ2UgcGFyIGTDqWZhdXQgPycsXG4gICAgdGV4dDogJ0xcXCdvcMOpcmF0aW9uIG5lIHBvdXJyYSBwYXMgw6p0cmUgYW5udWzDqWUuJyxcbiAgICBpY29uOiAnd2FybmluZycsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBqZSBjb25maXJtZScsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlcicsXG4gICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgfSxcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9zdGFnZV9wZXJpb2RlX2NvdXJyaWVyX3Jlc2V0Jywge2lkOiBwZXJpb2RlLCBldGF0OiBldGF0fSksXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRpbnltY2UuZ2V0KCd0ZXh0XycgKyBldGF0KS5zZXRDb250ZW50KCcnKVxuICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzLCByZXRvdXIgYXUgbWVzc2FnZSBwYXIgZMOpZmF1dCcsICdzdWNjZXNzJylcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdNZXNzYWdlIHLDqWluaXRpYWxpc8OpIScsXG4gICAgICAgICAgICB0ZXh0OiAnTGUgbWVzc2FnZSBwYXIgZMOpZmF1dCBzZXJhIG1haW50ZW5hbnQgdXRpbGlzw6kuJyxcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9
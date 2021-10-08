(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["assets_js_util_js"],{

/***/ "./assets/components/Toast.js":
/*!************************************!*\
  !*** ./assets/components/Toast.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! toastify-js */ "./node_modules/toastify-js/src/toastify.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_9__);










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/components/Toast.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/10/2021 13:06


var Toast = /*#__PURE__*/function () {
  function Toast() {
    _classCallCheck(this, Toast);

    _defineProperty(this, "defaultOptions", {
      close: true,
      duration: 3000,
      className: 'toast',
      escapeMarkup: false,
      gravity: 'top',
      position: 'right',
      stopOnFocus: true
    });
  }

  _createClass(Toast, [{
    key: "show",
    value: function show(type, text) {
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      options = _objectSpread(_objectSpread({}, this.defaultOptions), options); //todo: Utiliser le type Alerte https://gouvfr.atlassian.net/wiki/spaces/DB/pages/736362500/Alertes+-+Alerts

      options['className'] += ' toast-' + type;
      var html = '<div class="toast-wrapper">';

      if (title) {
        html += '<div class="toast-head">' + title + '</div>';
      }

      html += '<div class="toast-body">' + text + '</div>';
      html += '</div>';
      options['text'] = html;
      toastify_js__WEBPACK_IMPORTED_MODULE_9___default()(options).showToast();
    }
  }, {
    key: "error",
    value: function error(text) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.show('error', text, title, options);
    }
  }, {
    key: "warning",
    value: function warning(text) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.show('warning', text, title, options);
    }
  }, {
    key: "success",
    value: function success(text) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.show('success', text, title, options);
    }
  }, {
    key: "info",
    value: function info(text) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.show('info', text, title, options);
    }
  }]);

  return Toast;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Toast());

/***/ }),

/***/ "./assets/js/util.js":
/*!***************************!*\
  !*** ./assets/js/util.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getParentByTagName": () => (/* binding */ getParentByTagName),
/* harmony export */   "addCallout": () => (/* binding */ addCallout),
/* harmony export */   "getDataOptions": () => (/* binding */ getDataOptions),
/* harmony export */   "invalidChamps": () => (/* binding */ invalidChamps),
/* harmony export */   "validChamps": () => (/* binding */ validChamps),
/* harmony export */   "completeChamps": () => (/* binding */ completeChamps)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Toast */ "./assets/components/Toast.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");







// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/util.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/09/2021 12:08
// import $ from 'jquery'


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

  $('.menu-item').removeClass('active');
  $('#menu-' + $elt[$firstElt]).addClass('active');
} //colorise le bon menu


readUrlMenu($(location).attr('pathname'));
sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().mixin({
  customClass: {
    confirmButton: 'btn btn-primary',
    cancelButton: 'btn btn-secondary'
  },
  buttonsStyling: false
}); //pop up de confirmation de suppression

$(document).on('click', '.supprimer', function (e) {
  e.preventDefault();
  var url = $(this).attr('href');
  var csrf = $(this).data('csrf');
  sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
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
      $.ajax({
        url: url,
        type: 'DELETE',
        data: {
          _token: csrf
        },
        success: function success(id) {
          if (id.hasOwnProperty('redirect') && id.hasOwnProperty('url')) {
            document.location.href = id.url;
          } else {
            var ligne = getParentByTagName(e.target, 'tr');
            ligne.parentNode.removeChild(ligne);
            addCallout('Suppression effectuée avec succès', 'success');
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
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
          sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
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
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
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
function getParentByTagName(el, tag) {
  tag = tag.toLowerCase();

  while (el && el.nodeName.toLowerCase() != tag) {
    el = el.parentNode;
  }

  return el || null;
}
function addCallout(message, label) {
  switch (label) {
    case 'success':
      _components_Toast__WEBPACK_IMPORTED_MODULE_8__.default.success(message);
      break;

    case 'danger':
      _components_Toast__WEBPACK_IMPORTED_MODULE_8__.default.error(message);
      break;

    case 'warning':
      _components_Toast__WEBPACK_IMPORTED_MODULE_8__.default.warning(message);
      break;

    case 'info':
      _components_Toast__WEBPACK_IMPORTED_MODULE_8__.default.info(message);
      break;
  }
} //Editable

var myEditInitialContent = '';
var type = 'text';
var EditOnLine = false;
$(document).on('click', '.myedit', function (e) {
  e.preventDefault();
  myEditInitialContent = $(this);
  var html = '';
  EditOnLine = true;

  if (typeof $(this).data('type') !== 'undefined') {
    type = $(this).data('type');
  }

  if ($(this).data('type') === 'select') {//todo: A finaliser
  } else if ($(this).data('type') === 'textarea') {
    html = genereTextArea($(this));
  } else {
    html = genereInput($(this));
  }

  $(this).replaceWith(html);
  $('#myedit-input').focus();
});
$(document).on('keyup', '#myedit-input', function (e) {
  if (e.keyCode === 13 && $stopCatchEnter === false) {
    updateData();
  } else if (e.keyCode === 27) {
    $('#myEdit-zone').replaceWith(myEditInitialContent);
  }
});
$(document).on('click', '.myedit-valide', function (e) {
  $stopCatchEnter = false;
  e.preventDefault();
  updateData($(this).data('key'));
});
$(document).on('keypress', function (e) {
  if (EditOnLine === true && $stopCatchEnter === false && e.which === 13) {
    e.preventDefault();
    updateData($(this).data('key'));
  }

  if (EditOnLine === true && $stopCatchEnter === false && e.which === 27) {
    e.preventDefault();
    $('#myEdit-zone-' + $(this).data('key')).replaceWith(myEditInitialContent);
  }
});
$(document).on('click', '.myedit-annule', function (e) {
  e.preventDefault();
  $('#myEdit-zone-' + $(this).data('key')).replaceWith(myEditInitialContent);
});

function updateData(key) {
  var val = $('#myedit-input-' + key).val();
  $.ajax({
    url: myEditInitialContent.attr('href'),
    data: {
      field: myEditInitialContent.data('field'),
      value: val,
      type: type
    },
    method: 'POST',
    success: function success() {
      myEditInitialContent.html(val);
      $('#myEdit-zone-' + key).replaceWith(myEditInitialContent);
      EditOnLine = false;
    }
  });
}

function genereTextArea($obj) {
  var key = Date.now();
  $stopCatchEnter = true;
  return '<div id="myEdit-zone-' + key + '">\n' + '                      <textarea rows="5" class="form-control" id="myedit-input-' + key + '">' + $obj.html().trim() + '</textarea>\n' + '                      <span class="input-group-append">\n' + ' <button class="btn btn-success-outline myedit-valide" data-key="' + key + '"><i class="fas fa-check"></i></button>\n' + '                        <button class="btn btn-danger-outline myedit-annule"  data-key="' + key + '"><i class="fas fa-times"></i></button>\n' + '                      </span>\n' + '                    </div>';
}

function genereInput($obj) {
  var key = Date.now();
  return '<div id="myEdit-zone-' + key + '" class="input-group">\n' + '                      <input type="text" class="form-control" id="myedit-input-' + key + '" value="' + $obj.html().trim() + '" >\n' + '                      <span class="input-group-append">\n' + ' <button class="btn btn-success-outline myedit-valide"  data-key="' + key + '"><i class="fas fa-check"></i></button>\n' + '                        <button class="btn btn-danger-outline myedit-annule"  data-key="' + key + '"><i class="fas fa-times"></i></button>\n' + '                      </span>\n' + '                    </div>';
}

jQuery.fn.dataAttr = function (name, def) {
  return $(this)[0].getAttribute('data-' + name) || def;
};

jQuery.fn.hasDataAttr = function (name) {
  return $(this)[0].hasAttribute('data-' + name);
};

function dataToOption(name) {
  return name.replace(/-([a-z])/g, function (x) {
    return x[1].toUpperCase();
  });
}

function getDataOptions(el, castList) {
  var options = {};
  $.each($(el).data(), function (key, value) {
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
function invalidChamps($obj) {
  $obj.removeClass('is-valid').addClass('is-invalid');
}
function validChamps($obj) {
  $obj.removeClass('is-invalid').addClass('is-valid');
}
function completeChamps($obj) {
  $obj.removeClass('is-invalid').removeClass('is-valid');
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2NvbXBvbmVudHMvVG9hc3QuanMiLCJ3ZWJwYWNrOi8vaW50cmFuZXR2My8uL2Fzc2V0cy9qcy91dGlsLmpzIl0sIm5hbWVzIjpbIlRvYXN0IiwiY2xvc2UiLCJkdXJhdGlvbiIsImNsYXNzTmFtZSIsImVzY2FwZU1hcmt1cCIsImdyYXZpdHkiLCJwb3NpdGlvbiIsInN0b3BPbkZvY3VzIiwidHlwZSIsInRleHQiLCJ0aXRsZSIsIm9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImh0bWwiLCJUb2FzdGlmeSIsInNob3dUb2FzdCIsInNob3ciLCIkc3RvcENhdGNoRW50ZXIiLCJyZWFkVXJsTWVudSIsIiR1cmwiLCIkZWx0Iiwic3BsaXQiLCIkZmlyc3RFbHQiLCJsZW5ndGgiLCJwb3AiLCIkIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImxvY2F0aW9uIiwiYXR0ciIsIlN3YWwiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImRvY3VtZW50Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ1cmwiLCJjc3JmIiwiZGF0YSIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJhamF4IiwiX3Rva2VuIiwic3VjY2VzcyIsImlkIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwibGlnbmUiLCJnZXRQYXJlbnRCeVRhZ05hbWUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJhZGRDYWxsb3V0IiwiZXJyb3IiLCJ4aHIiLCJhamF4T3B0aW9ucyIsInRocm93bkVycm9yIiwiZGlzbWlzcyIsImVsIiwidGFnIiwidG9Mb3dlckNhc2UiLCJub2RlTmFtZSIsIm1lc3NhZ2UiLCJsYWJlbCIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZVRleHRBcmVhIiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImZvY3VzIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ3aGljaCIsImtleSIsInZhbCIsImZpZWxkIiwibWV0aG9kIiwiJG9iaiIsIkRhdGUiLCJub3ciLCJ0cmltIiwialF1ZXJ5IiwiZm4iLCJkYXRhQXR0ciIsIm5hbWUiLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNEYXRhQXR0ciIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsInJlcGxhY2UiLCJ4IiwidG9VcHBlckNhc2UiLCJnZXREYXRhT3B0aW9ucyIsImNhc3RMaXN0IiwiZWFjaCIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJOdW1iZXIiLCJpbnZhbGlkQ2hhbXBzIiwidmFsaWRDaGFtcHMiLCJjb21wbGV0ZUNoYW1wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7SUFHTUEsSzs7Ozs0Q0FFYTtBQUNmQyxXQUFLLEVBQUUsSUFEUTtBQUVmQyxjQUFRLEVBQUUsSUFGSztBQUdmQyxlQUFTLEVBQUUsT0FISTtBQUlmQyxrQkFBWSxFQUFFLEtBSkM7QUFLZkMsYUFBTyxFQUFFLEtBTE07QUFNZkMsY0FBUSxFQUFFLE9BTks7QUFPZkMsaUJBQVcsRUFBRTtBQVBFLEs7Ozs7O1dBVWpCLGNBQU1DLElBQU4sRUFBWUMsSUFBWixFQUE4QztBQUFBLFVBQTVCQyxLQUE0Qix1RUFBcEIsSUFBb0I7QUFBQSxVQUFkQyxPQUFjLHVFQUFKLEVBQUk7QUFDNUNBLGFBQU8sbUNBQU8sS0FBS0MsY0FBWixHQUErQkQsT0FBL0IsQ0FBUCxDQUQ0QyxDQUVoRDs7QUFDSUEsYUFBTyxDQUFDLFdBQUQsQ0FBUCxJQUF3QixZQUFZ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WUFBWSxDQUFDaEIsR0FBRCxDQUFsQixDQUZ5QyxDQUl6Qzs7QUFDQSxRQUFJQSxHQUFHLElBQUksU0FBWCxFQUFzQjtBQUNwQjtBQUNEOztBQUVELFFBQUlxQixRQUFRLElBQUlFLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQUlsRyxJQUFJLEdBQUdnRyxRQUFRLENBQUNyQixHQUFELENBQW5COztBQUNBLGNBQVEzRSxJQUFSO0FBQ0UsYUFBSyxNQUFMO0FBQ0UwQyxlQUFLLEdBQUd5RCxPQUFPLENBQUN6RCxLQUFELENBQWY7QUFDQTs7QUFFRixhQUFLLEtBQUw7QUFDRUEsZUFBSyxHQUFHMEQsTUFBTSxDQUFDMUQsS0FBRCxDQUFkO0FBQ0E7O0FBRUYsYUFBSyxPQUFMO0FBQ0VBLGVBQUssR0FBR0EsS0FBSyxDQUFDN0IsS0FBTixDQUFZLEdBQVosQ0FBUjtBQUNBOztBQUVGO0FBYkY7QUFnQkQ7O0FBRURWLFdBQU8sQ0FBQ3dFLEdBQUQsQ0FBUCxHQUFlakMsS0FBZjtBQUNELEdBOUJEO0FBZ0NBLFNBQU92QyxPQUFQO0FBQ0Q7QUFFTSxTQUFTa0csYUFBVCxDQUF3QnRCLElBQXhCLEVBQThCO0FBQ25DQSxNQUFJLENBQUM3RCxXQUFMLENBQWlCLFVBQWpCLEVBQTZCQyxRQUE3QixDQUFzQyxZQUF0QztBQUNEO0FBRU0sU0FBU21GLFdBQVQsQ0FBc0J2QixJQUF0QixFQUE0QjtBQUNqQ0EsTUFBSSxDQUFDN0QsV0FBTCxDQUFpQixZQUFqQixFQUErQkMsUUFBL0IsQ0FBd0MsVUFBeEM7QUFDRDtBQUVNLFNBQVNvRixjQUFULENBQXlCeEIsSUFBekIsRUFBK0I7QUFDcENBLE1BQUksQ0FBQzdELFdBQUwsQ0FBaUIsWUFBakIsRUFBK0JBLFdBQS9CLENBQTJDLFVBQTNDO0FBQ0QsQyIsImZpbGUiOiJhc3NldHNfanNfdXRpbF9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9jb21wb25lbnRzL1RvYXN0LmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDEvMTAvMjAyMSAxMzowNlxuXG5pbXBvcnQgVG9hc3RpZnkgZnJvbSAndG9hc3RpZnktanMnXG5cblxuY2xhc3MgVG9hc3Qge1xuXG4gIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGNsb3NlOiB0cnVlLFxuICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgIGNsYXNzTmFtZTogJ3RvYXN0JyxcbiAgICBlc2NhcGVNYXJrdXA6IGZhbHNlLFxuICAgIGdyYXZpdHk6ICd0b3AnLFxuICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgIHN0b3BPbkZvY3VzOiB0cnVlXG4gIH1cblxuICBzaG93ICh0eXBlLCB0ZXh0LCB0aXRsZSA9IG51bGwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7Li4udGhpcy5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9uc31cbi8vdG9kbzogVXRpbGlzZXIgbGUgdHlwZSBBbGVydGUgaHR0cHM6Ly9nb3V2ZnIuYXRsYXNzaWFuLm5ldC93aWtpL3NwYWNlcy9EQi9wYWdlcy83MzYzNjI1MDAvQWxlcnRlcystK0FsZXJ0c1xuICAgIG9wdGlvbnNbJ2NsYXNzTmFtZSddICs9ICcgdG9hc3QtJyArIHR5cGVcblxuICAgIGxldCBodG1sID0gJzxkaXYgY2xhc3M9XCJ0b2FzdC13cmFwcGVyXCI+J1xuICAgIGlmICh0aXRsZSkge1xuICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cInRvYXN0LWhlYWRcIj4nICsgdGl0bGUgKyAnPC9kaXY+J1xuICAgIH1cbiAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwidG9hc3QtYm9keVwiPicgKyB0ZXh0ICsgJzwvZGl2PidcbiAgICBodG1sICs9ICc8L2Rpdj4nXG5cbiAgICBvcHRpb25zWyd0ZXh0J10gPSBodG1sXG4gICAgVG9hc3RpZnkob3B0aW9ucykuc2hvd1RvYXN0KClcbiAgfVxuXG4gIGVycm9yICh0ZXh0LCB0aXRsZSA9IG51bGwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuc2hvdygnZXJyb3InLCB0ZXh0LCB0aXRsZSwgb3B0aW9ucylcbiAgfVxuXG4gIHdhcm5pbmcgKHRleHQsIHRpdGxlID0gbnVsbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5zaG93KCd3YXJuaW5nJywgdGV4dCwgdGl0bGUsIG9wdGlvbnMpXG4gIH1cblxuICBzdWNjZXNzICh0ZXh0LCB0aXRsZSA9IG51bGwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuc2hvdygnc3VjY2VzcycsIHRleHQsIHRpdGxlLCBvcHRpb25zKVxuICB9XG5cbiAgaW5mbyAodGV4dCwgdGl0bGUgPSBudWxsLCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnNob3coJ2luZm8nLCB0ZXh0LCB0aXRsZSwgb3B0aW9ucylcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUb2FzdCgpXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDA4LzA5LzIwMjEgMTI6MDhcblxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2FzdCdcblxubGV0ICRzdG9wQ2F0Y2hFbnRlciA9IGZhbHNlXG5cbmZ1bmN0aW9uIHJlYWRVcmxNZW51ICgkdXJsKSB7XG4gIGNvbnN0ICRlbHQgPSAkdXJsLnNwbGl0KCcvJylcbiAgbGV0ICRmaXJzdEVsdCA9IDJcbiAgaWYgKCRlbHRbMV0gPT09ICdpbmRleC5waHAnKSB7XG4gICAgaWYgKCRlbHQubGVuZ3RoID4gMSkge1xuICAgICAgJGZpcnN0RWx0ID0gM1xuICAgIH1cbiAgfVxuXG4gIGlmICgkZWx0WyRmaXJzdEVsdF0gPT09ICdzdXBlci1hZG1pbmlzdHJhdGlvbicpIHtcbiAgICAkZmlyc3RFbHQgPSAkZmlyc3RFbHQgKyAxXG4gIH1cblxuICBpZiAoJGVsdFskZWx0Lmxlbmd0aCAtIDFdID09PSAnJykge1xuICAgICRlbHQucG9wKClcbiAgfVxuXG4gICQoJy5tZW51LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lbnUtJyArICRlbHRbJGZpcnN0RWx0XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59XG5cbi8vY29sb3Jpc2UgbGUgYm9uIG1lbnVcbnJlYWRVcmxNZW51KCQobG9jYXRpb24pLmF0dHIoJ3BhdGhuYW1lJykpXG5cblN3YWwubWl4aW4oe1xuICBjdXN0b21DbGFzczoge1xuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICB9LFxuICBidXR0b25zU3R5bGluZzogZmFsc2Vcbn0pXG4vL3BvcCB1cCBkZSBjb25maXJtYXRpb24gZGUgc3VwcHJlc3Npb25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3VwcHJpbWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gIGNvbnN0IGNzcmYgPSAkKHRoaXMpLmRhdGEoJ2NzcmYnKVxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIF90b2tlbjogY3NyZlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0JykgJiYgaWQuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gaWQudXJsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxpZ25lID0gZ2V0UGFyZW50QnlUYWdOYW1lKGUudGFyZ2V0LCAndHInKVxuICAgICAgICAgICAgbGlnbmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaWduZSlcblxuICAgICAgICAgICAgYWRkQ2FsbG91dCgnU3VwcHJlc3Npb24gZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqHMnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogJ1N1cHByaW3DqSEnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTFxcJ2VucmVnaXN0cmVtZW50IGEgw6l0w6kgc3VwcHJpbcOpLicsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudEJ5VGFnTmFtZSAoZWwsIHRhZykge1xuICB0YWcgPSB0YWcudG9Mb3dlckNhc2UoKVxuICB3aGlsZSAoZWwgJiYgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPSB0YWcpIHtcbiAgICBlbCA9IGVsLnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gZWwgfHwgbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbG91dCAobWVzc2FnZSwgbGFiZWwpIHtcbiAgc3dpdGNoIChsYWJlbCkge1xuICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgVG9hc3Quc3VjY2VzcyhtZXNzYWdlKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdkYW5nZXInOlxuICAgICAgVG9hc3QuZXJyb3IobWVzc2FnZSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnd2FybmluZyc6XG4gICAgICBUb2FzdC53YXJuaW5nKG1lc3NhZ2UpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2luZm8nOlxuICAgICAgVG9hc3QuaW5mbyhtZXNzYWdlKVxuICAgICAgYnJlYWtcbiAgfVxufVxuXG4vL0VkaXRhYmxlXG5sZXQgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAnJ1xubGV0IHR5cGUgPSAndGV4dCdcbmxldCBFZGl0T25MaW5lID0gZmFsc2VcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5teWVkaXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAkKHRoaXMpXG4gIGxldCBodG1sID0gJydcbiAgRWRpdE9uTGluZSA9IHRydWVcbiAgaWYgKHR5cGVvZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykpICE9PSAndW5kZWZpbmVkJykge1xuICAgIHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICB9XG5cbiAgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAnc2VsZWN0Jykge1xuICAgIC8vdG9kbzogQSBmaW5hbGlzZXJcbiAgfSBlbHNlIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3RleHRhcmVhJykge1xuICAgIGh0bWwgPSBnZW5lcmVUZXh0QXJlYSgkKHRoaXMpKVxuICB9IGVsc2Uge1xuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgJHN0b3BDYXRjaEVudGVyID09PSBmYWxzZSkge1xuICAgIHVwZGF0ZURhdGEoKVxuICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5teWVkaXQtdmFsaWRlJywgZnVuY3Rpb24gKGUpIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gZmFsc2VcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHVwZGF0ZURhdGEoJCh0aGlzKS5kYXRhKCdrZXknKSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UgJiYgZS53aGljaCA9PT0gMTMpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB1cGRhdGVEYXRhKCQodGhpcykuZGF0YSgna2V5JykpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDI3KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCgnI215RWRpdC16b25lLScgKyAkKHRoaXMpLmRhdGEoJ2tleScpKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5teWVkaXQtYW5udWxlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJyNteUVkaXQtem9uZS0nICsgJCh0aGlzKS5kYXRhKCdrZXknKSkucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhIChrZXkpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQtJyArIGtleSkudmFsKClcbiAgJC5hamF4KHtcbiAgICB1cmw6IG15RWRpdEluaXRpYWxDb250ZW50LmF0dHIoJ2hyZWYnKSxcbiAgICBkYXRhOiB7XG4gICAgICBmaWVsZDogbXlFZGl0SW5pdGlhbENvbnRlbnQuZGF0YSgnZmllbGQnKSxcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBteUVkaXRJbml0aWFsQ29udGVudC5odG1sKHZhbClcbiAgICAgICQoJyNteUVkaXQtem9uZS0nICsga2V5KS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICAgIEVkaXRPbkxpbmUgPSBmYWxzZVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlVGV4dEFyZWEgKCRvYmopIHtcbiAgY29uc3Qga2V5ID0gRGF0ZS5ub3coKVxuICAkc3RvcENhdGNoRW50ZXIgPSB0cnVlXG4gIHJldHVybiAnPGRpdiBpZD1cIm15RWRpdC16b25lLScgKyBrZXkgKyAnXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0LScgKyBrZXkgKyAnXCI+JyArICRvYmouaHRtbCgpLnRyaW0oKSArICc8L3RleHRhcmVhPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cXG4nICtcbiAgICAnIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mtb3V0bGluZSBteWVkaXQtdmFsaWRlXCIgZGF0YS1rZXk9XCInICsga2V5ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXItb3V0bGluZSBteWVkaXQtYW5udWxlXCIgIGRhdGEta2V5PVwiJyArIGtleSArICdcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG4gIGNvbnN0IGtleSA9IERhdGUubm93KClcbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmUtJyArIGtleSArICdcIiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0LScgKyBrZXkgKyAnXCIgdmFsdWU9XCInICsgJG9iai5odG1sKCkudHJpbSgpICsgJ1wiID5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmUgbXllZGl0LXZhbGlkZVwiICBkYXRhLWtleT1cIicgKyBrZXkgKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlci1vdXRsaW5lIG15ZWRpdC1hbm51bGVcIiAgZGF0YS1rZXk9XCInICsga2V5ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2Pidcbn1cblxualF1ZXJ5LmZuLmRhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICByZXR1cm4gJCh0aGlzKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpIHx8IGRlZlxufVxuXG5qUXVlcnkuZm4uaGFzRGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJCh0aGlzKVswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFUb09wdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4WzFdLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFPcHRpb25zIChlbCwgY2FzdExpc3QpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fVxuICAkLmVhY2goJChlbCkuZGF0YSgpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXG4gICAga2V5ID0gZGF0YVRvT3B0aW9uKGtleSlcblxuICAgIC8vIEVzY2FwZSBkYXRhLXByb3ZpZGVcbiAgICBpZiAoa2V5ID09ICdwcm92aWRlJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNhc3RMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHR5cGUgPSBjYXN0TGlzdFtrZXldXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiBvcHRpb25zXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkQ2hhbXBzICgkb2JqKSB7XG4gICRvYmoucmVtb3ZlQ2xhc3MoJ2lzLXZhbGlkJykuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRDaGFtcHMgKCRvYmopIHtcbiAgJG9iai5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLmFkZENsYXNzKCdpcy12YWxpZCcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0ZUNoYW1wcyAoJG9iaikge1xuICAkb2JqLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJykucmVtb3ZlQ2xhc3MoJ2lzLXZhbGlkJylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agenda~app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reloadQv; });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_free_scss_fontawesome_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/scss/fontawesome.scss */ "./node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss");
/* harmony import */ var _fortawesome_fontawesome_free_scss_fontawesome_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_scss_fontawesome_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_free_scss_solid_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/scss/solid.scss */ "./node_modules/@fortawesome/fontawesome-free/scss/solid.scss");
/* harmony import */ var _fortawesome_fontawesome_free_scss_solid_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_scss_solid_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_select_dist_css_bootstrap_select_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-select/dist/css/bootstrap-select.min.css */ "./node_modules/bootstrap-select/dist/css/bootstrap-select.min.css");
/* harmony import */ var bootstrap_select_dist_css_bootstrap_select_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_select_dist_css_bootstrap_select_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vendor_bootstrap_datepicker_css_bootstrap_datepicker3_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css */ "./assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css");
/* harmony import */ var _vendor_bootstrap_datepicker_css_bootstrap_datepicker3_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_datepicker_css_bootstrap_datepicker3_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vendor_bootstrap_datepicker_js_bootstrap_datepicker_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js */ "./assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js");
/* harmony import */ var _vendor_bootstrap_datepicker_js_bootstrap_datepicker_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_datepicker_js_bootstrap_datepicker_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vendor_bootstrap_datepicker_locales_bootstrap_datepicker_fr_min__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min */ "./assets/vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min.js");
/* harmony import */ var _vendor_bootstrap_datepicker_locales_bootstrap_datepicker_fr_min__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_datepicker_locales_bootstrap_datepicker_fr_min__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var _validator_bs4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./validator-bs4 */ "./assets/js/validator-bs4.js");
/* harmony import */ var _validator_bs4__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_validator_bs4__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./util */ "./assets/js/util.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material */ "./assets/js/material.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search */ "./assets/js/search.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_search__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _modaler__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modaler */ "./assets/js/modaler.js");
/* harmony import */ var _modaler__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_modaler__WEBPACK_IMPORTED_MODULE_16__);



// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/app.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 22/10/2020 15:56
// any CSS you import will output into a single css file (app.css in this case)















__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

var lookup = {};

__webpack_require__(/*! bootstrap-select */ "./node_modules/bootstrap-select/dist/js/bootstrap-select.js");

jquery__WEBPACK_IMPORTED_MODULE_10___default()('input[type="file"]').on('change', function (e) {
  var filename = e.target.files[0].name;
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('.custom-file-label').html(filename);
});
jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).ready(function () {
  // copy link EDT
  jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('click', '#copyLink', function () {
    jquery__WEBPACK_IMPORTED_MODULE_10___default()('#lienIcal').select();
    document.execCommand('copy');
  }); // script pour afficher le fichier selectionné avec bootstrap4

  jquery__WEBPACK_IMPORTED_MODULE_10___default()('.custom-file input').change(function (e) {
    var files = [];

    for (var i = 0; i < jquery__WEBPACK_IMPORTED_MODULE_10___default()(this)[0].files.length; i++) {
      files.push(jquery__WEBPACK_IMPORTED_MODULE_10___default()(this)[0].files[i].name);
    }

    jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).next('.custom-file-label').html(files.join(', '));
  });
  var preloader = jquery__WEBPACK_IMPORTED_MODULE_10___default()('.preloader');

  if (preloader.length) {
    var speed = preloader.dataAttr('hide-spped', 600);
    preloader.fadeOut(speed);
  }

  jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('focus', '.topbar-search input', function () {
    jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).closest('.topbar-search').find('.lookup-placeholder span').css('opacity', '0');
  });
  jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('blur', '.topbar-search input', function () {
    jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).closest('.topbar-search').find('.lookup-placeholder span').css('opacity', '1');
  });
  jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('click', '#lookup', function (e) {
    e.preventDefault();
    var target = jquery__WEBPACK_IMPORTED_MODULE_10___default()('#lookup-full');

    if (target !== false) {
      lookup.toggle(target);
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('click', '#lookup-close', function () {
    lookup.toggle(jquery__WEBPACK_IMPORTED_MODULE_10___default()('#lookup-full'));
  }); //tooltip

  updateInterface();
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('[data-provide="validation"]').validator();
});
jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).ajaxComplete(function () {
  updateInterface();
}); // Fullscreen
//

jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('click', '.card-btn-fullscreen', function () {
  jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).closest('.card').toggleClass('card-fullscreen').removeClass('card-maximize');
}); // Slide up/down

jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('click', '.card-btn-slide', function () {
  jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).toggleClass('rotate-180').closest('.card').find('.card-content').slideToggle();
}); //modaler

jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('click', '[data-provide~="modaler"]', function () {
  modaler(Object(_util__WEBPACK_IMPORTED_MODULE_13__["getDataOptions"])(jquery__WEBPACK_IMPORTED_MODULE_10___default()(this)));
});

function updateInterface() {
  //selectpicker
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('.selectpicker').selectpicker({
    iconBase: '',
    tickIcon: 'fas fa-check',
    style: 'btn-light',
    size: 10,
    liveSearch: true
  }); //tooltip

  jquery__WEBPACK_IMPORTED_MODULE_10___default()('[data-provide~="tooltip"]').each(function () {
    var color = '';

    if (jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).hasDataAttr('tooltip-color')) {
      color = ' tooltip-' + jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).data('tooltip-color');
    }

    jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).tooltip({
      container: 'body',
      trigger: 'hover',
      template: '<div class="tooltip' + color + '" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('[data-provide~="datepicker"]').each(function () {
    var options = {
      multidateSeparator: ', ',
      language: 'fr',
      daysOfWeekHighlighted: '06'
    };

    if (jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).prop('tagName') != 'INPUT') {
      //si ce n'est pas un input => donc un date range
      options.inputs = [jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).find('input:first'), jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).find('input:last')];
    }

    jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).datepicker(options);
  });
} // Open fullscreen lookup
//


lookup.toggle = function (e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_10___default()(e).hasClass('reveal')) {
    lookup.close(e);
  } else {
    lookup.open(e);
  }
}; // Close fullscreen lookup
//


lookup.close = function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_10___default()(e).removeClass('reveal');
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('body').removeClass('no-scroll');
}; // Close fullscreen lookup
//


lookup.open = function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_10___default()(e).addClass('reveal');
  jquery__WEBPACK_IMPORTED_MODULE_10___default()(e).find('.lookup-form input').focus();
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('body').addClass('no-scroll');
}; // =====================
// Sidebar
// =====================


var sidebar = {}; // Scrollable

console.log(document.getElementsByClassName('sidebar-navigation'));

if (document.getElementsByClassName('sidebar-navigation').length > 0) {
  var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["default"]('.sidebar-navigation');
} // Handle sidebar openner
//


jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('click', '.sidebar-toggler', function () {
  sidebar.open();
}); // Close sidebar when backdrop touches
//

jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('click', '.backdrop-sidebar', function () {
  sidebar.close();
}); // Slide up/down menu item on click
//

jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('click', '.sidebar .menu-link', function () {
  var $submenu = jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).next('.menu-submenu');
  if ($submenu.length < 1) return;

  if ($submenu.is(':visible')) {
    $submenu.slideUp(function () {
      jquery__WEBPACK_IMPORTED_MODULE_10___default()('.sidebar .menu-item.open').removeClass('open');
    });
    jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).removeClass('open');
    return;
  }

  jquery__WEBPACK_IMPORTED_MODULE_10___default()('.sidebar .menu-submenu:visible').slideUp();
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('.sidebar .menu-link').removeClass('open');
  $submenu.slideToggle(function () {
    jquery__WEBPACK_IMPORTED_MODULE_10___default()('.sidebar .menu-item.open').removeClass('open');
  });
  jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).addClass('open');
}); // Handle fold toggler
//

jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('click', '.sidebar-toggle-fold', function () {
  sidebar.toggleFold();
}); //}

sidebar.toggleFold = function () {
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('body').toggleClass('sidebar-folded');
  app.toggleState('sidebar.folded');
};

sidebar.fold = function () {
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('body').addClass('sidebar-folded');
  app.state('sidebar.folded', true);
};

sidebar.unfold = function () {
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('body').removeClass('sidebar-folded');
  app.state('sidebar.folded', false);
};

sidebar.toggleHide = function () {
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('body').toggleClass('sidebar-hidden');
  app.toggleState('sidebar.hidden');
};

sidebar.hide = function () {
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('body').addClass('sidebar-hidden');
  app.state('sidebar.hidden', true);
};

sidebar.show = function () {
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('body').removeClass('sidebar-hidden');
  app.state('sidebar.hidden', false);
};

sidebar.open = function () {
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('body').addClass('sidebar-open').prepend('<div class="app-backdrop backdrop-sidebar"></div>');
};

sidebar.close = function () {
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('body').removeClass('sidebar-open');
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('.backdrop-sidebar').remove();
}; // =====================
// Quickview
// =====================
//


var quickview = {};
var qps = null; // Update scrollbar on tab change
//

jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('shown.bs.tab', '.quickview-header a[data-toggle="tab"]', function (e) {
  qps.update();
});
function reloadQv() {
  qps.destroy();
  qps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["default"]('.quickview');
} // Quickview closer
//

jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('click', '[data-dismiss="quickview"]', function () {
  quickview.close(jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).closest('.quickview'));
}); // Handle quickview openner
//

jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('click', '[data-toggle="quickview"]', function (e) {
  e.preventDefault();
  var target = app.getTarget(jquery__WEBPACK_IMPORTED_MODULE_10___default()(this));

  if (target == false) {
    quickview.close(jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).closest('.quickview'));
  } else {
    var url = '';

    if (jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).hasDataAttr('url')) {
      url = jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).data('url');
    }

    quickview.toggle(target, url);
  }
}); // Close quickview when backdrop touches
//

jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('click', '.backdrop-quickview', function () {
  var qv = jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).attr('data-target');

  if (!jquery__WEBPACK_IMPORTED_MODULE_10___default()(qv).is('[data-disable-backdrop-click]')) {
    quickview.close(qv);
  }
});
jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('click', '.quickview .close, [data-dismiss="quickview"]', function () {
  var qv = jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).closest('.quickview');
  quickview.close(qv);
}); // Toggle open/close state
//

quickview.toggle = function (e, url) {
  if (jquery__WEBPACK_IMPORTED_MODULE_10___default()(e).hasClass('reveal')) {
    quickview.close(e);
  } else {
    if (url !== '') {
      jquery__WEBPACK_IMPORTED_MODULE_10___default()(e).html('<div class="spinner-linear"><div class="line"></div></div>');
      jquery__WEBPACK_IMPORTED_MODULE_10___default()(e).load(url, function () {
        qps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["default"]('.quickview');
      });
    }

    quickview.open(e);
  }
}; // Open quickview
//


quickview.open = function (e) {
  var quickview = jquery__WEBPACK_IMPORTED_MODULE_10___default()(e);
  var url = ''; // Load content from URL if required

  if (quickview.hasDataAttr('url') && 'true' !== quickview.data('url-has-loaded')) {
    if (quickview.data('url') === 'no-url') {
      url = Routing.generate('quick_view');
    } else {
      url = quickview.data('url');
    }

    quickview.load(url, function () {
      qps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["default"]('.quickview'); // Don't load it next time, if don't need to

      if (quickview.hasDataAttr('always-reload') && 'true' === quickview.data('always-reload')) {} else {
        quickview.data('url-has-loaded', 'true');
      }
    });
  } // Open it


  quickview.addClass('reveal').not('.backdrop-remove').after('<div class="app-backdrop backdrop-quickview" data-target="' + e + '"></div>');
}; // Close quickview
//


quickview.close = function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_10___default()(e).removeClass('reveal');
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('.backdrop-quickview').remove();
};

var app = {};

app.getTarget = function (e) {
  var target;

  if (e.hasDataAttr('target')) {
    target = e.data('target');
  } else {
    target = e.attr('href');
  }

  if (target == 'next') {
    target = jquery__WEBPACK_IMPORTED_MODULE_10___default()(e).next();
  } else if (target == 'prev') {
    target = jquery__WEBPACK_IMPORTED_MODULE_10___default()(e).prev();
  }

  if (target == undefined) {
    return false;
  }

  return target;
};

/***/ }),

/***/ "./assets/js/material.js":
/*!*******************************!*\
  !*** ./assets/js/material.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/material.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/11/2019 19:40
// Material input
//
$(document).on('focus', '.form-type-material .form-control:not(.bootstrap-select)', function () {
  materialDoFloat($(this));
});
$(document).on('focusout', '.form-type-material .form-control:not(.bootstrap-select)', function () {
  if ($(this).val() === '') {
    materialNoFloat($(this));
  }
}); // Auto focus inputs

materialDoFloat($('.form-type-material .form-control[autofocus="true"]'));

function materialDoFloat(e) {
  if (e.parent('.input-group-input').length) {
    e.parent('.input-group-input').addClass('do-float');
  } else {
    e.closest('.form-group').addClass('do-float');
  }
}

function materialNoFloat(e) {
  if (e.parent('.input-group-input').length) {
    e.parent('.input-group-input').removeClass('do-float');
  } else {
    e.closest('.form-group').removeClass('do-float');
  }
}

$('.form-type-material .form-control').each(function () {
  if ($(this).val().length > 0) {
    //if ($(this).is('[data-provide~="selectpicker"]')) {
    //  return
    //}
    materialDoFloat($(this));
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/modaler.js":
/*!******************************!*\
  !*** ./assets/js/modaler.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/modaler.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 27/07/2020 11:23
// =====================
// Modaler
// =====================
//
+function ($) {
  var configModaler = {
    url: '',
    isModal: false,
    html: '',
    target: '',
    type: '',
    size: '',
    title: '',
    backdrop: true,
    headerVisible: true,
    footerVisible: true,
    confirmVisible: true,
    confirmText: 'Ok',
    confirmClass: 'btn btn-w-sm btn-flat btn-primary',
    cancelVisible: false,
    cancelText: 'Cancel',
    cancelClass: 'btn btn-w-sm btn-flat btn-secondary',
    bodyExtraClass: '',
    spinner: '<div class="h-200 center-vh"><svg class="spinner-circle-material-svg" viewBox="0 0 50 50"><circle class="circle" cx="25" cy="25" r="20"></svg></div>',
    autoDestroy: true,
    // Events
    onShow: null,
    onShown: null,
    onHide: null,
    onHidden: null,
    onConfirm: null,
    onCancel: null,
    // Private options
    modalId: null
  };

  function guid(len) {
    if (len == undefined) {
      len = 5;
    }

    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, len);
  }

  modaler = function modaler(options) {
    var setting = $.extend({}, configModaler, options);

    if (setting.modalId) {
      $('#' + setting.modalId).modal('show');
      return;
    }

    var id = 'modal-' + guid();

    var handleCallback = function handleCallback(id) {
      // Bootstrap modal events
      //
      if (setting.onShow) {
        $('#' + id).on('show.bs.modal', function (e) {//setting.onShow();
        });
      }

      if (setting.onShown) {
        $('#' + id).on('shown.bs.modal', function (e) {//setting.onShown();
        });
      }

      if (setting.onHide) {
        $('#' + id).on('hide.bs.modal', function (e) {
          setting.onHide();
        });
      }

      if (setting.onHidden) {
        $('#' + id).on('hidden.bs.modal', function (e) {
          setting.onHidden();
        });
      } // Handle confirm callback
      //


      $('#' + id).find('[data-perform="confirm"]').on('click', function () {
        // Hasn't set
        if (setting.onConfirm == null) {
          return;
        } // Is a function


        if ($.isFunction(setting.onConfirm)) {
          setting.onConfirm($('#' + id));
          return;
        } // Is string value, so call it


        if (setting.onConfirm.substring) {
          app.call(setting.onConfirm, $('#' + id));
        }
      }); // Handle cancel callback
      //

      $('#' + id).find('[data-perform="cancel"]').on('click', function () {
        // Hasn't set
        if (setting.onCancel == null) {
          return;
        } // Is a function


        if ($.isFunction(setting.onCancel)) {
          setting.onCancel($('#' + id));
          return;
        } // Is string value, so call it


        if (setting.onCancel.substring) {
          app.call(setting.onCancel, $('#' + id));
        }
      });
    }; //----------------------------------
    // We recieve modal markup from url
    //


    if (setting.isModal) {
      $('<div>').load(setting.url, function () {
        $('body').append($(this).find('.modal').attr('id', id).outerHTML());
        $('#' + id).modal('show');
        $('#' + id).one('shown.bs.modal', function (e) {//todo: a confirmer $('#'+ id).find('.modal-body').perfectScrollbar('update');
        }); // Destroy after close
        //

        if (setting.autoDestroy) {
          $('#' + id).on('hidden.bs.modal', function () {
            $('#' + id).remove();
          });
        } else {
          $(setting["this"]).attr('data-modal-id', id);
        }

        handleCallback(id);
      });
    } ////----------------------------------
    // We should design the modal
    //
    else {
        switch (setting.size) {
          case 'sm':
            setting.size = 'modal-sm';
            break;

          case 'lg':
            setting.size = 'modal-lg';
            break;

          default: //setting.size = '';

        }

        if (setting.type) {
          setting.type = 'modal-' + setting.type;
        } // Header code
        //


        var html_header = '';

        if (setting.headerVisible) {
          html_header += '<div class="modal-header"> \
            <h5 class="modal-title">' + setting.title + '</h5> \
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button> \
          </div>';
        } // Footer code
        //


        var html_footer = '';

        if (setting.footerVisible) {
          html_footer += '<div class="modal-footer">';

          if (setting.cancelVisible) {
            html_footer += '<button class="' + setting.cancelClass + '" data-dismiss="modal" data-perform="cancel">' + setting.cancelText + '</button>';
          }

          if (setting.confirmVisible) {
            html_footer += '<button class="' + setting.confirmClass + '" data-dismiss="modal" data-perform="confirm">' + setting.confirmText + '</button>';
          }

          html_footer += '</div>';
        } // Modal code
        //


        var modal_html = '<div class="modal fade ' + setting.type + '" id="' + id + '" tabindex="-1"' + (!setting.backdrop ? ' data-backdrop="false"' : '') + '> \
            <div class="modal-dialog ' + setting.size + '"> \
              <div class="modal-content"> \
                ' + html_header + ' \
                <div class="modal-body ' + setting.bodyExtraClass + '"> \
                  ' + setting.spinner + ' \
                </div> \
                ' + html_footer + ' \
              </div> \
            </div> \
          </div>'; // Show modal

        $('body').append(modal_html);
        $('#' + id).modal('show'); // Destroy after close
        //

        if (setting.autoDestroy) {
          $('#' + id).on('hidden.bs.modal', function () {
            $('#' + id).remove();
          });
        } else {
          $(setting["this"]).attr('data-modal-id', id);
        } // Load data into the modal
        //


        if (setting.url) {
          $('#' + id).find('.modal-body').load(setting.url, function () {
            //todo: a confirmer $(this).perfectScrollbar('update');
            handleCallback(id);
          });
        } else if (setting.html) {
          $('#' + id).find('.modal-body').html(setting.html);
          handleCallback(id);
        } else if (setting.target) {
          $('#' + id).find('.modal-body').html($(setting.target).html());
          handleCallback(id);
        }
      }
  };
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/search.js":
/*!*****************************!*\
  !*** ./assets/js/search.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, jQuery) {// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/search.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/09/2020 18:18
$(document).on('keyup', '#search', function (e) {
  var keyword = $(this).val();
  var search_reponse_etudiant = $('#search_reponse_etudiant');
  var search_reponse_personnel = $('#search_reponse_personnel');
  var search_reponse_autre = $('#search_reponse_autre');

  if (keyword.length > 2) {
    $.ajax({
      url: Routing.generate('recherche', {
        keyword: keyword
      }),
      dataType: 'json',
      success: function success(data) {
        var html = '';

        if (data.etudiants.length > 0) {
          jQuery.each(data.etudiants, function (index, etudiant) {
            html = html + '<a class="media" href="' + Routing.generate('user_profil', {
              type: 'etudiant',
              slug: etudiant.slug
            }) + '" target="_blank">\n';

            if (etudiant.photo === 'noimage.png' || etudiant.photo == null) {
              html = html + '<div class="avatar-circle-sm">\n' + '    <span class="initials">' + etudiant.avatarInitiales + '</span>\n' + '</div>';
            } else {
              html = html + '<img class="avatar avatar-sm" src="' + data.basepath + 'etudiants/' + etudiant.photo + '" alt="Photo de profil de ' + etudiant.displayPr + '">\n';
            }

            html = html + '                        <div class="media-body">\n' + '                            <p><strong>' + etudiant.displayPr + ' (' + etudiant.semestre + ')</strong>\n' + '                                <time class="float-right">' + etudiant.groupes + '</time>\n' + '                            </p>\n' + '                        </div>\n' + '                    </a>';
          });
        } else {
          html = '<div class="alert alert-warning">Pas de résultat pour votre recherche <strong>"' + keyword + '"</strong></div>';
        }

        search_reponse_etudiant.empty().append(html);
        html = '';

        if (data.personnels.length > 0) {
          jQuery.each(data.personnels, function (index, personnel) {
            html = html + '<a class="media items-center" href="' + Routing.generate('user_profil', {
              type: 'personnel',
              slug: personnel.slug
            }) + '" target="_blank">\n';

            if (personnel.photo === 'noimage.png' || personnel.photo == null) {
              html = html + '<div class="avatar-circle-sm">\n' + '    <span class="initials">' + personnel.avatarInitiales + '</span>\n' + '</div>';
            } else {
              html = html + '<img class="avatar avatar-sm" src="' + data.basepath + 'personnels/' + personnel.photo + '" alt="Photo de profil de ' + personnel.displayPr + '">\n';
            }

            html = html + '                        <p>' + personnel.displayPr + '</p>\n' + '</a>';
          });
        } else {
          html = '<div class="alert alert-warning">Pas de résultat pour votre recherche <strong>"' + keyword + '"</strong></div>';
        }

        search_reponse_personnel.empty().append(html);
        html = '';

        if (data.autres.length > 0) {
          jQuery.each(data.autres, function (index, autre) {
            html = html + '<a class="media items-center" href="">\n' + '                        <img class="avatar avatar-sm" src="../assets/img/avatar/1.jpg" alt="...">\n' + '                        <p>' + autre + '</p>\n' + '                    </a>';
          });
        } else {
          html = '<div class="alert alert-warning">Pas de résultat pour votre recherche <strong>"' + keyword + '"</strong></div>';
        }

        search_reponse_autre.empty().append(html);
      }
    });
  } else {
    var html = '<div class="alert alert-info">Saisir au moins 3 caractères</div>';
    search_reponse_autre.empty().append(html);
    search_reponse_personnel.empty().append(html);
    search_reponse_etudiant.empty().append(html);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

/***/ }),

/***/ "./assets/js/validator-bs4.js":
/*!************************************!*\
  !*** ./assets/js/validator-bs4.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/validator-bs4.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/11/2019 19:40
+function ($) {
  'use strict'; // VALIDATOR CLASS DEFINITION
  // ==========================

  function getValue($el) {
    return $el.is('[type="checkbox"]') ? $el.prop('checked') : $el.is('[type="radio"]') ? !!$('[name="' + $el.attr('name') + '"]:checked').length : $el.is('select[multiple]') ? ($el.val() || []).length : $el.val();
  }

  var Validator = function Validator(element, options) {
    this.options = options;
    this.validators = $.extend({}, Validator.VALIDATORS, options.custom);
    this.$element = $(element);
    this.$btn = $('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr('id') + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]'));
    this.update();
    this.$element.on('input.bs.validator change.bs.validator focusout.bs.validator', $.proxy(this.onInput, this));
    this.$element.on('submit.bs.validator', $.proxy(this.onSubmit, this));
    this.$element.on('reset.bs.validator', $.proxy(this.reset, this));
    this.$element.find('[data-match]').each(function () {
      var $this = $(this);
      var target = $this.attr('data-match');
      $(target).on('input.bs.validator', function (e) {
        getValue($this) && $this.trigger('input.bs.validator');
      });
    }); // run validators for fields with values, but don't clobber server-side errors

    this.$inputs.filter(function () {
      return getValue($(this)) && !$(this).closest('.has-error').length;
    }).trigger('focusout');
    this.$element.attr('novalidate', true); // disable automatic native validation
  };

  Validator.VERSION = '0.11.9';
  Validator.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)';
  Validator.FOCUS_OFFSET = 20;
  Validator.DEFAULTS = {
    delay: 500,
    html: false,
    disable: true,
    focus: true,
    custom: {},
    errors: {
      match: 'Does not match',
      minlength: 'Not long enough'
    },
    feedback: {
      success: 'glyphicon-ok',
      error: 'glyphicon-remove'
    }
  };
  Validator.VALIDATORS = {
    'native': function native($el) {
      var el = $el[0];

      if (el.checkValidity) {
        return !el.checkValidity() && !el.validity.valid && (el.validationMessage || "error!");
      }
    },
    'match': function match($el) {
      var target = $el.attr('data-match');
      return $el.val() !== $(target).val() && Validator.DEFAULTS.errors.match;
    },
    'minlength': function minlength($el) {
      var minlength = $el.attr('data-minlength');
      return $el.val().length < minlength && Validator.DEFAULTS.errors.minlength;
    }
  };

  Validator.prototype.update = function () {
    var self = this;
    this.$inputs = this.$element.find(Validator.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]').each(function () {
      self.clearErrors($(this));
    }));
    this.toggleSubmit();
    return this;
  };

  Validator.prototype.onInput = function (e) {
    var self = this;
    var $el = $(e.target);
    var deferErrors = e.type !== 'focusout';
    if (!this.$inputs.is($el)) return;
    this.validateInput($el, deferErrors).done(function () {
      self.toggleSubmit();
    });
  };

  Validator.prototype.validateInput = function ($el, deferErrors) {
    var value = getValue($el);
    var prevErrors = $el.data('bs.validator.errors');
    if ($el.is('[type="radio"]')) $el = this.$element.find('input[name="' + $el.attr('name') + '"]');
    var e = $.Event('validate.bs.validator', {
      relatedTarget: $el[0]
    });
    this.$element.trigger(e);
    if (e.isDefaultPrevented()) return;
    var self = this;
    return this.runValidators($el).done(function (errors) {
      $el.data('bs.validator.errors', errors);
      errors.length ? deferErrors ? self.defer($el, self.showErrors) : self.showErrors($el) : self.clearErrors($el);

      if (!prevErrors || errors.toString() !== prevErrors.toString()) {
        e = errors.length ? $.Event('invalid.bs.validator', {
          relatedTarget: $el[0],
          detail: errors
        }) : $.Event('valid.bs.validator', {
          relatedTarget: $el[0],
          detail: prevErrors
        });
        self.$element.trigger(e);
      }

      self.toggleSubmit();
      self.$element.trigger($.Event('validated.bs.validator', {
        relatedTarget: $el[0]
      }));
    });
  };

  Validator.prototype.runValidators = function ($el) {
    var errors = [];
    var deferred = $.Deferred();
    $el.data('bs.validator.deferred') && $el.data('bs.validator.deferred').reject();
    $el.data('bs.validator.deferred', deferred);

    function getValidatorSpecificError(key) {
      return $el.attr('data-' + key + '-error');
    }

    function getValidityStateError() {
      var validity = $el[0].validity;
      return validity.typeMismatch ? $el.attr('data-type-error') : validity.patternMismatch ? $el.attr('data-pattern-error') : validity.stepMismatch ? $el.attr('data-step-error') : validity.rangeOverflow ? $el.attr('data-max-error') : validity.rangeUnderflow ? $el.attr('data-min-error') : validity.valueMissing ? $el.attr('data-required-error') : null;
    }

    function getGenericError() {
      return $el.attr('data-error');
    }

    function getErrorMessage(key) {
      return getValidatorSpecificError(key) || getValidityStateError() || getGenericError();
    }

    $.each(this.validators, $.proxy(function (key, validator) {
      var error = null;

      if ((getValue($el) || $el.attr('required')) && ($el.attr('data-' + key) !== undefined || key == 'native') && (error = validator.call(this, $el))) {
        error = getErrorMessage(key) || error;
        !~errors.indexOf(error) && errors.push(error);
      }
    }, this));

    if (!errors.length && getValue($el) && $el.attr('data-remote')) {
      this.defer($el, function () {
        var data = {};
        data[$el.attr('name')] = getValue($el);
        $.get($el.attr('data-remote'), data).fail(function (jqXHR, textStatus, error) {
          errors.push(getErrorMessage('remote') || error);
        }).always(function () {
          deferred.resolve(errors);
        });
      });
    } else deferred.resolve(errors);

    return deferred.promise();
  };

  Validator.prototype.validate = function () {
    var self = this;
    $.when(this.$inputs.map(function (el) {
      return self.validateInput($(this), false);
    })).then(function () {
      self.toggleSubmit();
      self.focusError();
    });
    return this;
  };

  Validator.prototype.focusError = function () {
    if (!this.options.focus) return;
    var $input = this.$element.find(".has-error:first :input");
    if ($input.length === 0) return;
    $('html, body').animate({
      scrollTop: $input.offset().top - Validator.FOCUS_OFFSET
    }, 250);
    $input.focus();
  };

  Validator.prototype.showErrors = function ($el) {
    var method = this.options.html ? 'html' : 'text';
    var errors = $el.data('bs.validator.errors');
    var $group = $el.closest('.form-group');
    var $block = $group.find('.invalid-feedback');
    var $feedback = $group.find('.invalid-feedback');
    if (!errors.length) return;
    $el.addClass('is-invalid');
    errors = $('<ul/>').addClass('list-unstyled').append($.map(errors, function (error) {
      return $('<li/>')[method](error);
    }));
    $block.data('bs.validator.originalContent') === undefined && $block.data('bs.validator.originalContent', $block.html());
    $block.empty().append(errors);
    $group.addClass('has-error has-danger');
    $group.hasClass('has-feedback') && $feedback.removeClass(this.options.feedback.success) && $feedback.addClass(this.options.feedback.error) && $group.removeClass('has-success');
  };

  Validator.prototype.clearErrors = function ($el) {
    var $group = $el.closest('.form-group');
    var $block = $group.find('.invalid-feedback');
    var $feedback = $group.find('.invalid-feedback');
    $el.removeClass('is-invalid');
    $block.html($block.data('bs.validator.originalContent'));
    $group.removeClass('has-error has-danger has-success');
    $group.hasClass('has-feedback') && $feedback.removeClass(this.options.feedback.error) && $feedback.removeClass(this.options.feedback.success) && getValue($el) && $feedback.addClass(this.options.feedback.success) && $group.addClass('has-success');
  };

  Validator.prototype.hasErrors = function () {
    function fieldErrors() {
      return !!($(this).data('bs.validator.errors') || []).length;
    }

    return !!this.$inputs.filter(fieldErrors).length;
  };

  Validator.prototype.isIncomplete = function () {
    function fieldIncomplete() {
      var value = getValue($(this));
      return !(typeof value == "string" ? $.trim(value) : value);
    }

    return !!this.$inputs.filter('[required]').filter(fieldIncomplete).length;
  };

  Validator.prototype.onSubmit = function (e) {
    this.validate();
    if (this.isIncomplete() || this.hasErrors()) e.preventDefault();
  };

  Validator.prototype.toggleSubmit = function () {
    if (!this.options.disable) return;
    this.$btn.toggleClass('disabled', this.isIncomplete() || this.hasErrors());
  };

  Validator.prototype.defer = function ($el, callback) {
    callback = $.proxy(callback, this, $el);
    if (!this.options.delay) return callback();
    window.clearTimeout($el.data('bs.validator.timeout'));
    $el.data('bs.validator.timeout', window.setTimeout(callback, this.options.delay));
  };

  Validator.prototype.reset = function () {
    this.$element.find('.invalid-feedback').removeClass(this.options.feedback.error).removeClass(this.options.feedback.success);
    this.$inputs.removeData(['bs.validator.errors', 'bs.validator.deferred']).removeClass('is-invalid').each(function () {
      var $this = $(this);
      var timeout = $this.data('bs.validator.timeout');
      window.clearTimeout(timeout) && $this.removeData('bs.validator.timeout');
    });
    this.$element.find('.invalid-feedback').each(function () {
      var $this = $(this);
      var originalContent = $this.data('bs.validator.originalContent');
      $this.removeData('bs.validator.originalContent').html(originalContent);
    });
    this.$btn.removeClass('disabled');
    this.$element.find('.has-error, .has-danger, .has-success').removeClass('has-error has-danger has-success');
    return this;
  };

  Validator.prototype.destroy = function () {
    this.reset();
    this.$element.removeAttr('novalidate').removeData('bs.validator').off('.bs.validator');
    this.$inputs.off('.bs.validator');
    this.options = null;
    this.validators = null;
    this.$element = null;
    this.$btn = null;
    this.$inputs = null;
    return this;
  }; // VALIDATOR PLUGIN DEFINITION
  // ===========================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var options = $.extend({}, Validator.DEFAULTS, $this.data(), _typeof(option) == 'object' && option);
      var data = $this.data('bs.validator');
      if (!data && option == 'destroy') return;
      if (!data) $this.data('bs.validator', data = new Validator(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.validator;
  $.fn.validator = Plugin;
  $.fn.validator.Constructor = Validator; // VALIDATOR NO CONFLICT
  // =====================

  $.fn.validator.noConflict = function () {
    $.fn.validator = old;
    return this;
  }; // VALIDATOR DATA-API
  // ==================


  $(window).on('load', function () {
    $('form[data-toggle="validator"]').each(function () {
      var $form = $(this);
      Plugin.call($form, $form.data());
    });
  });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css":
/*!******************************************************************************!*\
  !*** ./assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js":
/*!***************************************************************************!*\
  !*** ./assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.fill */ "./node_modules/core-js/modules/es.array.fill.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 17/08/2020 14:20

/*!
 * Datepicker for Bootstrap v1.8.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a, b) {
  function c() {
    return new Date(Date.UTC.apply(Date, arguments));
  }

  function d() {
    var a = new Date();
    return c(a.getFullYear(), a.getMonth(), a.getDate());
  }

  function e(a, b) {
    return a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate();
  }

  function f(c, d) {
    return function () {
      return d !== b && a.fn.datepicker.deprecated(d), this[c].apply(this, arguments);
    };
  }

  function g(a) {
    return a && !isNaN(a.getTime());
  }

  function h(b, c) {
    function d(a, b) {
      return b.toLowerCase();
    }

    var e,
        f = a(b).data(),
        g = {},
        h = new RegExp("^" + c.toLowerCase() + "([A-Z])");
    c = new RegExp("^" + c.toLowerCase());

    for (var i in f) {
      c.test(i) && (e = i.replace(h, d), g[e] = f[i]);
    }

    return g;
  }

  function i(b) {
    var c = {};

    if (q[b] || (b = b.split("-")[0], q[b])) {
      var d = q[b];
      return a.each(p, function (a, b) {
        b in d && (c[b] = d[b]);
      }), c;
    }
  }

  var j = function () {
    var b = {
      get: function get(a) {
        return this.slice(a)[0];
      },
      contains: function contains(a) {
        for (var b = a && a.valueOf(), c = 0, d = this.length; c < d; c++) {
          if (0 <= this[c].valueOf() - b && this[c].valueOf() - b < 864e5) return c;
        }

        return -1;
      },
      remove: function remove(a) {
        this.splice(a, 1);
      },
      replace: function replace(b) {
        b && (a.isArray(b) || (b = [b]), this.clear(), this.push.apply(this, b));
      },
      clear: function clear() {
        this.length = 0;
      },
      copy: function copy() {
        var a = new j();
        return a.replace(this), a;
      }
    };
    return function () {
      var c = [];
      return c.push.apply(c, arguments), a.extend(c, b), c;
    };
  }(),
      k = function k(b, c) {
    a.data(b, "datepicker", this), this._process_options(c), this.dates = new j(), this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = a(b), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = a(r.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function (a, b) {
      return Number(b) + 1;
    }), this._process_options({
      startDate: this._o.startDate,
      endDate: this._o.endDate,
      daysOfWeekDisabled: this.o.daysOfWeekDisabled,
      daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
      datesDisabled: this.o.datesDisabled
    }), this._allow_update = !1, this.setViewMode(this.o.startView), this._allow_update = !0, this.fillDow(), this.fillMonths(), this.update(), this.isInline && this.show();
  };

  k.prototype = {
    constructor: k,
    _resolveViewName: function _resolveViewName(b) {
      return a.each(r.viewModes, function (c, d) {
        if (b === c || a.inArray(b, d.names) !== -1) return b = c, !1;
      }), b;
    },
    _resolveDaysOfWeek: function _resolveDaysOfWeek(b) {
      return a.isArray(b) || (b = b.split(/[,\s]*/)), a.map(b, Number);
    },
    _check_template: function _check_template(c) {
      try {
        if (c === b || "" === c) return !1;
        if ((c.match(/[<>]/g) || []).length <= 0) return !0;
        var d = a(c);
        return d.length > 0;
      } catch (a) {
        return !1;
      }
    },
    _process_options: function _process_options(b) {
      this._o = a.extend({}, this._o, b);
      var e = this.o = a.extend({}, this._o),
          f = e.language;
      q[f] || (f = f.split("-")[0], q[f] || (f = o.language)), e.language = f, e.startView = this._resolveViewName(e.startView), e.minViewMode = this._resolveViewName(e.minViewMode), e.maxViewMode = this._resolveViewName(e.maxViewMode), e.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, e.startView)), e.multidate !== !0 && (e.multidate = Number(e.multidate) || !1, e.multidate !== !1 && (e.multidate = Math.max(0, e.multidate))), e.multidateSeparator = String(e.multidateSeparator), e.weekStart %= 7, e.weekEnd = (e.weekStart + 6) % 7;
      var g = r.parseFormat(e.format);
      e.startDate !== -(1 / 0) && (e.startDate ? e.startDate instanceof Date ? e.startDate = this._local_to_utc(this._zero_time(e.startDate)) : e.startDate = r.parseDate(e.startDate, g, e.language, e.assumeNearbyYear) : e.startDate = -(1 / 0)), e.endDate !== 1 / 0 && (e.endDate ? e.endDate instanceof Date ? e.endDate = this._local_to_utc(this._zero_time(e.endDate)) : e.endDate = r.parseDate(e.endDate, g, e.language, e.assumeNearbyYear) : e.endDate = 1 / 0), e.daysOfWeekDisabled = this._resolveDaysOfWeek(e.daysOfWeekDisabled || []), e.daysOfWeekHighlighted = this._resolveDaysOfWeek(e.daysOfWeekHighlighted || []), e.datesDisabled = e.datesDisabled || [], a.isArray(e.datesDisabled) || (e.datesDisabled = e.datesDisabled.split(",")), e.datesDisabled = a.map(e.datesDisabled, function (a) {
        return r.parseDate(a, g, e.language, e.assumeNearbyYear);
      });
      var h = String(e.orientation).toLowerCase().split(/\s+/g),
          i = e.orientation.toLowerCase();
      if (h = a.grep(h, function (a) {
        return /^auto|left|right|top|bottom$/.test(a);
      }), e.orientation = {
        x: "auto",
        y: "auto"
      }, i && "auto" !== i) {
        if (1 === h.length) switch (h[0]) {
          case "top":
          case "bottom":
            e.orientation.y = h[0];
            break;

          case "left":
          case "right":
            e.orientation.x = h[0];
        } else i = a.grep(h, function (a) {
          return /^left|right$/.test(a);
        }), e.orientation.x = i[0] || "auto", i = a.grep(h, function (a) {
          return /^top|bottom$/.test(a);
        }), e.orientation.y = i[0] || "auto";
      } else ;
      if (e.defaultViewDate instanceof Date || "string" == typeof e.defaultViewDate) e.defaultViewDate = r.parseDate(e.defaultViewDate, g, e.language, e.assumeNearbyYear);else if (e.defaultViewDate) {
        var j = e.defaultViewDate.year || new Date().getFullYear(),
            k = e.defaultViewDate.month || 0,
            l = e.defaultViewDate.day || 1;
        e.defaultViewDate = c(j, k, l);
      } else e.defaultViewDate = d();
    },
    _events: [],
    _secondaryEvents: [],
    _applyEvents: function _applyEvents(a) {
      for (var c, d, e, f = 0; f < a.length; f++) {
        c = a[f][0], 2 === a[f].length ? (d = b, e = a[f][1]) : 3 === a[f].length && (d = a[f][1], e = a[f][2]), c.on(e, d);
      }
    },
    _unapplyEvents: function _unapplyEvents(a) {
      for (var c, d, e, f = 0; f < a.length; f++) {
        c = a[f][0], 2 === a[f].length ? (e = b, d = a[f][1]) : 3 === a[f].length && (e = a[f][1], d = a[f][2]), c.off(d, e);
      }
    },
    _buildEvents: function _buildEvents() {
      var b = {
        keyup: a.proxy(function (b) {
          a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1 && this.update();
        }, this),
        keydown: a.proxy(this.keydown, this),
        paste: a.proxy(this.paste, this)
      };
      this.o.showOnFocus === !0 && (b.focus = a.proxy(this.show, this)), this.isInput ? this._events = [[this.element, b]] : this.component && this.inputField.length ? this._events = [[this.inputField, b], [this.component, {
        click: a.proxy(this.show, this)
      }]] : this._events = [[this.element, {
        click: a.proxy(this.show, this),
        keydown: a.proxy(this.keydown, this)
      }]], this._events.push([this.element, "*", {
        blur: a.proxy(function (a) {
          this._focused_from = a.target;
        }, this)
      }], [this.element, {
        blur: a.proxy(function (a) {
          this._focused_from = a.target;
        }, this)
      }]), this.o.immediateUpdates && this._events.push([this.element, {
        "changeYear changeMonth": a.proxy(function (a) {
          this.update(a.date);
        }, this)
      }]), this._secondaryEvents = [[this.picker, {
        click: a.proxy(this.click, this)
      }], [this.picker, ".prev, .next", {
        click: a.proxy(this.navArrowsClick, this)
      }], [this.picker, ".day:not(.disabled)", {
        click: a.proxy(this.dayCellClick, this)
      }], [a(window), {
        resize: a.proxy(this.place, this)
      }], [a(document), {
        "mousedown touchstart": a.proxy(function (a) {
          this.element.is(a.target) || this.element.find(a.target).length || this.picker.is(a.target) || this.picker.find(a.target).length || this.isInline || this.hide();
        }, this)
      }]];
    },
    _attachEvents: function _attachEvents() {
      this._detachEvents(), this._applyEvents(this._events);
    },
    _detachEvents: function _detachEvents() {
      this._unapplyEvents(this._events);
    },
    _attachSecondaryEvents: function _attachSecondaryEvents() {
      this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents);
    },
    _detachSecondaryEvents: function _detachSecondaryEvents() {
      this._unapplyEvents(this._secondaryEvents);
    },
    _trigger: function _trigger(b, c) {
      var d = c || this.dates.get(-1),
          e = this._utc_to_local(d);

      this.element.trigger({
        type: b,
        date: e,
        viewMode: this.viewMode,
        dates: a.map(this.dates, this._utc_to_local),
        format: a.proxy(function (a, b) {
          0 === arguments.length ? (a = this.dates.length - 1, b = this.o.format) : "string" == typeof a && (b = a, a = this.dates.length - 1), b = b || this.o.format;
          var c = this.dates.get(a);
          return r.formatDate(c, b, this.o.language);
        }, this)
      });
    },
    show: function show() {
      if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && this.o.enableOnReadonly === !1)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && a(this.element).blur(), this;
    },
    hide: function hide() {
      return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this);
    },
    destroy: function destroy() {
      return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this;
    },
    paste: function paste(b) {
      var c;
      if (b.originalEvent.clipboardData && b.originalEvent.clipboardData.types && a.inArray("text/plain", b.originalEvent.clipboardData.types) !== -1) c = b.originalEvent.clipboardData.getData("text/plain");else {
        if (!window.clipboardData) return;
        c = window.clipboardData.getData("Text");
      }
      this.setDate(c), this.update(), b.preventDefault();
    },
    _utc_to_local: function _utc_to_local(a) {
      if (!a) return a;
      var b = new Date(a.getTime() + 6e4 * a.getTimezoneOffset());
      return b.getTimezoneOffset() !== a.getTimezoneOffset() && (b = new Date(a.getTime() + 6e4 * b.getTimezoneOffset())), b;
    },
    _local_to_utc: function _local_to_utc(a) {
      return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset());
    },
    _zero_time: function _zero_time(a) {
      return a && new Date(a.getFullYear(), a.getMonth(), a.getDate());
    },
    _zero_utc_time: function _zero_utc_time(a) {
      return a && c(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate());
    },
    getDates: function getDates() {
      return a.map(this.dates, this._utc_to_local);
    },
    getUTCDates: function getUTCDates() {
      return a.map(this.dates, function (a) {
        return new Date(a);
      });
    },
    getDate: function getDate() {
      return this._utc_to_local(this.getUTCDate());
    },
    getUTCDate: function getUTCDate() {
      var a = this.dates.get(-1);
      return a !== b ? new Date(a) : null;
    },
    clearDates: function clearDates() {
      this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide();
    },
    setDates: function setDates() {
      var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.update.apply(this, b), this._trigger("changeDate"), this.setValue(), this;
    },
    setUTCDates: function setUTCDates() {
      var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.setDates.apply(this, a.map(b, this._utc_to_local)), this;
    },
    setDate: f("setDates"),
    setUTCDate: f("setUTCDates"),
    remove: f("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
    setValue: function setValue() {
      var a = this.getFormattedDate();
      return this.inputField.val(a), this;
    },
    getFormattedDate: function getFormattedDate(c) {
      c === b && (c = this.o.format);
      var d = this.o.language;
      return a.map(this.dates, function (a) {
        return r.formatDate(a, c, d);
      }).join(this.o.multidateSeparator);
    },
    getStartDate: function getStartDate() {
      return this.o.startDate;
    },
    setStartDate: function setStartDate(a) {
      return this._process_options({
        startDate: a
      }), this.update(), this.updateNavArrows(), this;
    },
    getEndDate: function getEndDate() {
      return this.o.endDate;
    },
    setEndDate: function setEndDate(a) {
      return this._process_options({
        endDate: a
      }), this.update(), this.updateNavArrows(), this;
    },
    setDaysOfWeekDisabled: function setDaysOfWeekDisabled(a) {
      return this._process_options({
        daysOfWeekDisabled: a
      }), this.update(), this;
    },
    setDaysOfWeekHighlighted: function setDaysOfWeekHighlighted(a) {
      return this._process_options({
        daysOfWeekHighlighted: a
      }), this.update(), this;
    },
    setDatesDisabled: function setDatesDisabled(a) {
      return this._process_options({
        datesDisabled: a
      }), this.update(), this;
    },
    place: function place() {
      if (this.isInline) return this;
      var b = this.picker.outerWidth(),
          c = this.picker.outerHeight(),
          d = 10,
          e = a(this.o.container),
          f = e.width(),
          g = "body" === this.o.container ? a(document).scrollTop() : e.scrollTop(),
          h = e.offset(),
          i = [0];
      this.element.parents().each(function () {
        var b = a(this).css("z-index");
        "auto" !== b && 0 !== Number(b) && i.push(Number(b));
      });
      var j = Math.max.apply(Math, i) + this.o.zIndexOffset,
          k = this.component ? this.component.parent().offset() : this.element.offset(),
          l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
          m = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
          n = k.left - h.left,
          o = k.top - h.top;
      "body" !== this.o.container && (o += g), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (n -= b - m)) : k.left < 0 ? (this.picker.addClass("datepicker-orient-left"), n -= k.left - d) : n + b > f ? (this.picker.addClass("datepicker-orient-right"), n += m - b) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left");
      var p,
          q = this.o.orientation.y;

      if ("auto" === q && (p = -g + o - c, q = p < 0 ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + q), "top" === q ? o -= c + parseInt(this.picker.css("padding-top")) : o += l, this.o.rtl) {
        var r = f - (n + m);
        this.picker.css({
          top: o,
          right: r,
          zIndex: j
        });
      } else this.picker.css({
        top: o,
        left: n,
        zIndex: j
      });

      return this;
    },
    _allow_update: !0,
    update: function update() {
      if (!this._allow_update) return this;
      var b = this.dates.copy(),
          c = [],
          d = !1;
      return arguments.length ? (a.each(arguments, a.proxy(function (a, b) {
        b instanceof Date && (b = this._local_to_utc(b)), c.push(b);
      }, this)), d = !0) : (c = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val(), c = c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c], delete this.element.data().date), c = a.map(c, a.proxy(function (a) {
        return r.parseDate(a, this.o.format, this.o.language, this.o.assumeNearbyYear);
      }, this)), c = a.grep(c, a.proxy(function (a) {
        return !this.dateWithinRange(a) || !a;
      }, this), !0), this.dates.replace(c), this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate), d ? (this.setValue(), this.element.change()) : this.dates.length && String(b) !== String(this.dates) && d && (this._trigger("changeDate"), this.element.change()), !this.dates.length && b.length && (this._trigger("clearDate"), this.element.change()), this.fill(), this;
    },
    fillDow: function fillDow() {
      if (this.o.showWeekDays) {
        var b = this.o.weekStart,
            c = "<tr>";

        for (this.o.calendarWeeks && (c += '<th class="cw">&#160;</th>'); b < this.o.weekStart + 7;) {
          c += '<th class="dow', a.inArray(b, this.o.daysOfWeekDisabled) !== -1 && (c += " disabled"), c += '">' + q[this.o.language].daysMin[b++ % 7] + "</th>";
        }

        c += "</tr>", this.picker.find(".datepicker-days thead").append(c);
      }
    },
    fillMonths: function fillMonths() {
      for (var a, b = this._utc_to_local(this.viewDate), c = "", d = 0; d < 12; d++) {
        a = b && b.getMonth() === d ? " focused" : "", c += '<span class="month' + a + '">' + q[this.o.language].monthsShort[d] + "</span>";
      }

      this.picker.find(".datepicker-months td").html(c);
    },
    setRange: function setRange(b) {
      b && b.length ? this.range = a.map(b, function (a) {
        return a.valueOf();
      }) : delete this.range, this.fill();
    },
    getClassNames: function getClassNames(b) {
      var c = [],
          f = this.viewDate.getUTCFullYear(),
          g = this.viewDate.getUTCMonth(),
          h = d();
      return b.getUTCFullYear() < f || b.getUTCFullYear() === f && b.getUTCMonth() < g ? c.push("old") : (b.getUTCFullYear() > f || b.getUTCFullYear() === f && b.getUTCMonth() > g) && c.push("new"), this.focusDate && b.valueOf() === this.focusDate.valueOf() && c.push("focused"), this.o.todayHighlight && e(b, h) && c.push("today"), this.dates.contains(b) !== -1 && c.push("active"), this.dateWithinRange(b) || c.push("disabled"), this.dateIsDisabled(b) && c.push("disabled", "disabled-date"), a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1 && c.push("highlighted"), this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push("range"), a.inArray(b.valueOf(), this.range) !== -1 && c.push("selected"), b.valueOf() === this.range[0] && c.push("range-start"), b.valueOf() === this.range[this.range.length - 1] && c.push("range-end")), c;
    },
    _fill_yearsView: function _fill_yearsView(c, d, e, f, g, h, i) {
      for (var j, k, l, m = "", n = e / 10, o = this.picker.find(c), p = Math.floor(f / e) * e, q = p + 9 * n, r = Math.floor(this.viewDate.getFullYear() / n) * n, s = a.map(this.dates, function (a) {
        return Math.floor(a.getUTCFullYear() / n) * n;
      }), t = p - n; t <= q + n; t += n) {
        j = [d], k = null, t === p - n ? j.push("old") : t === q + n && j.push("new"), a.inArray(t, s) !== -1 && j.push("active"), (t < g || t > h) && j.push("disabled"), t === r && j.push("focused"), i !== a.noop && (l = i(new Date(t, 0, 1)), l === b ? l = {} : "boolean" == typeof l ? l = {
          enabled: l
        } : "string" == typeof l && (l = {
          classes: l
        }), l.enabled === !1 && j.push("disabled"), l.classes && (j = j.concat(l.classes.split(/\s+/))), l.tooltip && (k = l.tooltip)), m += '<span class="' + j.join(" ") + '"' + (k ? ' title="' + k + '"' : "") + ">" + t + "</span>";
      }

      o.find(".datepicker-switch").text(p + "-" + q), o.find("td").html(m);
    },
    fill: function fill() {
      var d,
          e,
          f = new Date(this.viewDate),
          g = f.getUTCFullYear(),
          h = f.getUTCMonth(),
          i = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
          j = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
          k = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
          l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
          m = q[this.o.language].today || q.en.today || "",
          n = q[this.o.language].clear || q.en.clear || "",
          o = q[this.o.language].titleFormat || q.en.titleFormat;

      if (!isNaN(g) && !isNaN(h)) {
        this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(f, o, this.o.language)), this.picker.find("tfoot .today").text(m).css("display", this.o.todayBtn === !0 || "linked" === this.o.todayBtn ? "table-cell" : "none"), this.picker.find("tfoot .clear").text(n).css("display", this.o.clearBtn === !0 ? "table-cell" : "none"), this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell" : "none"), this.updateNavArrows(), this.fillMonths();
        var p = c(g, h, 0),
            s = p.getUTCDate();
        p.setUTCDate(s - (p.getUTCDay() - this.o.weekStart + 7) % 7);
        var t = new Date(p);
        p.getUTCFullYear() < 100 && t.setUTCFullYear(p.getUTCFullYear()), t.setUTCDate(t.getUTCDate() + 42), t = t.valueOf();

        for (var u, v, w = []; p.valueOf() < t;) {
          if (u = p.getUTCDay(), u === this.o.weekStart && (w.push("<tr>"), this.o.calendarWeeks)) {
            var x = new Date(+p + (this.o.weekStart - u - 7) % 7 * 864e5),
                y = new Date(Number(x) + (11 - x.getUTCDay()) % 7 * 864e5),
                z = new Date(Number(z = c(y.getUTCFullYear(), 0, 1)) + (11 - z.getUTCDay()) % 7 * 864e5),
                A = (y - z) / 864e5 / 7 + 1;
            w.push('<td class="cw">' + A + "</td>");
          }

          v = this.getClassNames(p), v.push("day");
          var B = p.getUTCDate();
          this.o.beforeShowDay !== a.noop && (e = this.o.beforeShowDay(this._utc_to_local(p)), e === b ? e = {} : "boolean" == typeof e ? e = {
            enabled: e
          } : "string" == typeof e && (e = {
            classes: e
          }), e.enabled === !1 && v.push("disabled"), e.classes && (v = v.concat(e.classes.split(/\s+/))), e.tooltip && (d = e.tooltip), e.content && (B = e.content)), v = a.isFunction(a.uniqueSort) ? a.uniqueSort(v) : a.unique(v), w.push('<td class="' + v.join(" ") + '"' + (d ? ' title="' + d + '"' : "") + ' data-date="' + p.getTime().toString() + '">' + B + "</td>"), d = null, u === this.o.weekEnd && w.push("</tr>"), p.setUTCDate(p.getUTCDate() + 1);
        }

        this.picker.find(".datepicker-days tbody").html(w.join(""));
        var C = q[this.o.language].monthsTitle || q.en.monthsTitle || "Months",
            D = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? C : g).end().find("tbody span").removeClass("active");

        if (a.each(this.dates, function (a, b) {
          b.getUTCFullYear() === g && D.eq(b.getUTCMonth()).addClass("active");
        }), (g < i || g > k) && D.addClass("disabled"), g === i && D.slice(0, j).addClass("disabled"), g === k && D.slice(l + 1).addClass("disabled"), this.o.beforeShowMonth !== a.noop) {
          var E = this;
          a.each(D, function (c, d) {
            var e = new Date(g, c, 1),
                f = E.o.beforeShowMonth(e);
            f === b ? f = {} : "boolean" == typeof f ? f = {
              enabled: f
            } : "string" == typeof f && (f = {
              classes: f
            }), f.enabled !== !1 || a(d).hasClass("disabled") || a(d).addClass("disabled"), f.classes && a(d).addClass(f.classes), f.tooltip && a(d).prop("title", f.tooltip);
          });
        }

        this._fill_yearsView(".datepicker-years", "year", 10, g, i, k, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, g, i, k, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, g, i, k, this.o.beforeShowCentury);
      }
    },
    updateNavArrows: function updateNavArrows() {
      if (this._allow_update) {
        var a,
            b,
            c = new Date(this.viewDate),
            d = c.getUTCFullYear(),
            e = c.getUTCMonth(),
            f = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
            g = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
            h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
            i = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
            j = 1;

        switch (this.viewMode) {
          case 4:
            j *= 10;

          case 3:
            j *= 10;

          case 2:
            j *= 10;

          case 1:
            a = Math.floor(d / j) * j < f, b = Math.floor(d / j) * j + j > h;
            break;

          case 0:
            a = d <= f && e < g, b = d >= h && e > i;
        }

        this.picker.find(".prev").toggleClass("disabled", a), this.picker.find(".next").toggleClass("disabled", b);
      }
    },
    click: function click(b) {
      b.preventDefault(), b.stopPropagation();
      var e, f, g, h;
      e = a(b.target), e.hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1), e.hasClass("today") && !e.hasClass("day") && (this.setViewMode(0), this._setDate(d(), "linked" === this.o.todayBtn ? null : "view")), e.hasClass("clear") && this.clearDates(), e.hasClass("disabled") || (e.hasClass("month") || e.hasClass("year") || e.hasClass("decade") || e.hasClass("century")) && (this.viewDate.setUTCDate(1), f = 1, 1 === this.viewMode ? (h = e.parent().find("span").index(e), g = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(h)) : (h = 0, g = Number(e.text()), this.viewDate.setUTCFullYear(g)), this._trigger(r.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(c(g, h, f)) : (this.setViewMode(this.viewMode - 1), this.fill())), this.picker.is(":visible") && this._focused_from && this._focused_from.focus(), delete this._focused_from;
    },
    dayCellClick: function dayCellClick(b) {
      var c = a(b.currentTarget),
          d = c.data("date"),
          e = new Date(d);
      this.o.updateViewDate && (e.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate), e.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate)), this._setDate(e);
    },
    navArrowsClick: function navArrowsClick(b) {
      var c = a(b.currentTarget),
          d = c.hasClass("prev") ? -1 : 1;
      0 !== this.viewMode && (d *= 12 * r.viewModes[this.viewMode].navStep), this.viewDate = this.moveMonth(this.viewDate, d), this._trigger(r.viewModes[this.viewMode].e, this.viewDate), this.fill();
    },
    _toggle_multidate: function _toggle_multidate(a) {
      var b = this.dates.contains(a);
      if (a || this.dates.clear(), b !== -1 ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(b) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(a)) : this.dates.push(a), "number" == typeof this.o.multidate) for (; this.dates.length > this.o.multidate;) {
        this.dates.remove(0);
      }
    },
    _setDate: function _setDate(a, b) {
      b && "date" !== b || this._toggle_multidate(a && new Date(a)), (!b && this.o.updateViewDate || "view" === b) && (this.viewDate = a && new Date(a)), this.fill(), this.setValue(), b && "view" === b || this._trigger("changeDate"), this.inputField.trigger("change"), !this.o.autoclose || b && "date" !== b || this.hide();
    },
    moveDay: function moveDay(a, b) {
      var c = new Date(a);
      return c.setUTCDate(a.getUTCDate() + b), c;
    },
    moveWeek: function moveWeek(a, b) {
      return this.moveDay(a, 7 * b);
    },
    moveMonth: function moveMonth(a, b) {
      if (!g(a)) return this.o.defaultViewDate;
      if (!b) return a;
      var c,
          d,
          e = new Date(a.valueOf()),
          f = e.getUTCDate(),
          h = e.getUTCMonth(),
          i = Math.abs(b);
      if (b = b > 0 ? 1 : -1, 1 === i) d = b === -1 ? function () {
        return e.getUTCMonth() === h;
      } : function () {
        return e.getUTCMonth() !== c;
      }, c = h + b, e.setUTCMonth(c), c = (c + 12) % 12;else {
        for (var j = 0; j < i; j++) {
          e = this.moveMonth(e, b);
        }

        c = e.getUTCMonth(), e.setUTCDate(f), d = function d() {
          return c !== e.getUTCMonth();
        };
      }

      for (; d();) {
        e.setUTCDate(--f), e.setUTCMonth(c);
      }

      return e;
    },
    moveYear: function moveYear(a, b) {
      return this.moveMonth(a, 12 * b);
    },
    moveAvailableDate: function moveAvailableDate(a, b, c) {
      do {
        if (a = this[c](a, b), !this.dateWithinRange(a)) return !1;
        c = "moveDay";
      } while (this.dateIsDisabled(a));

      return a;
    },
    weekOfDateIsDisabled: function weekOfDateIsDisabled(b) {
      return a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
    },
    dateIsDisabled: function dateIsDisabled(b) {
      return this.weekOfDateIsDisabled(b) || a.grep(this.o.datesDisabled, function (a) {
        return e(b, a);
      }).length > 0;
    },
    dateWithinRange: function dateWithinRange(a) {
      return a >= this.o.startDate && a <= this.o.endDate;
    },
    keydown: function keydown(a) {
      if (!this.picker.is(":visible")) return void (40 !== a.keyCode && 27 !== a.keyCode || (this.show(), a.stopPropagation()));
      var b,
          c,
          d = !1,
          e = this.focusDate || this.viewDate;

      switch (a.keyCode) {
        case 27:
          this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), a.preventDefault(), a.stopPropagation();
          break;

        case 37:
        case 38:
        case 39:
        case 40:
          if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
          b = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1, 0 === this.viewMode ? a.ctrlKey ? (c = this.moveAvailableDate(e, b, "moveYear"), c && this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (c = this.moveAvailableDate(e, b, "moveMonth"), c && this._trigger("changeMonth", this.viewDate)) : 37 === a.keyCode || 39 === a.keyCode ? c = this.moveAvailableDate(e, b, "moveDay") : this.weekOfDateIsDisabled(e) || (c = this.moveAvailableDate(e, b, "moveWeek")) : 1 === this.viewMode ? (38 !== a.keyCode && 40 !== a.keyCode || (b *= 4), c = this.moveAvailableDate(e, b, "moveMonth")) : 2 === this.viewMode && (38 !== a.keyCode && 40 !== a.keyCode || (b *= 4), c = this.moveAvailableDate(e, b, "moveYear")), c && (this.focusDate = this.viewDate = c, this.setValue(), this.fill(), a.preventDefault());
          break;

        case 13:
          if (!this.o.forceParse) break;
          e = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(e), d = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (a.preventDefault(), a.stopPropagation(), this.o.autoclose && this.hide());
          break;

        case 9:
          this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide();
      }

      d && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField.trigger("change"));
    },
    setViewMode: function setViewMode(a) {
      this.viewMode = a, this.picker.children("div").hide().filter(".datepicker-" + r.viewModes[this.viewMode].clsName).show(), this.updateNavArrows(), this._trigger("changeViewMode", new Date(this.viewDate));
    }
  };

  var l = function l(b, c) {
    a.data(b, "datepicker", this), this.element = a(b), this.inputs = a.map(c.inputs, function (a) {
      return a.jquery ? a[0] : a;
    }), delete c.inputs, this.keepEmptyValues = c.keepEmptyValues, delete c.keepEmptyValues, n.call(a(this.inputs), c).on("changeDate", a.proxy(this.dateUpdated, this)), this.pickers = a.map(this.inputs, function (b) {
      return a.data(b, "datepicker");
    }), this.updateDates();
  };

  l.prototype = {
    updateDates: function updateDates() {
      this.dates = a.map(this.pickers, function (a) {
        return a.getUTCDate();
      }), this.updateRanges();
    },
    updateRanges: function updateRanges() {
      var b = a.map(this.dates, function (a) {
        return a.valueOf();
      });
      a.each(this.pickers, function (a, c) {
        c.setRange(b);
      });
    },
    clearDates: function clearDates() {
      a.each(this.pickers, function (a, b) {
        b.clearDates();
      });
    },
    dateUpdated: function dateUpdated(c) {
      if (!this.updating) {
        this.updating = !0;
        var d = a.data(c.target, "datepicker");

        if (d !== b) {
          var e = d.getUTCDate(),
              f = this.keepEmptyValues,
              g = a.inArray(c.target, this.inputs),
              h = g - 1,
              i = g + 1,
              j = this.inputs.length;

          if (g !== -1) {
            if (a.each(this.pickers, function (a, b) {
              b.getUTCDate() || b !== d && f || b.setUTCDate(e);
            }), e < this.dates[h]) for (; h >= 0 && e < this.dates[h];) {
              this.pickers[h--].setUTCDate(e);
            } else if (e > this.dates[i]) for (; i < j && e > this.dates[i];) {
              this.pickers[i++].setUTCDate(e);
            }
            this.updateDates(), delete this.updating;
          }
        }
      }
    },
    destroy: function destroy() {
      a.map(this.pickers, function (a) {
        a.destroy();
      }), a(this.inputs).off("changeDate", this.dateUpdated), delete this.element.data().datepicker;
    },
    remove: f("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
  };

  var m = a.fn.datepicker,
      n = function n(c) {
    var d = Array.apply(null, arguments);
    d.shift();
    var e;
    if (this.each(function () {
      var b = a(this),
          f = b.data("datepicker"),
          g = "object" == _typeof(c) && c;

      if (!f) {
        var j = h(this, "date"),
            m = a.extend({}, o, j, g),
            n = i(m.language),
            p = a.extend({}, o, n, j, g);
        b.hasClass("input-daterange") || p.inputs ? (a.extend(p, {
          inputs: p.inputs || b.find("input").toArray()
        }), f = new l(this, p)) : f = new k(this, p), b.data("datepicker", f);
      }

      "string" == typeof c && "function" == typeof f[c] && (e = f[c].apply(f, d));
    }), e === b || e instanceof k || e instanceof l) return this;
    if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + c + " function)");
    return e;
  };

  a.fn.datepicker = n;
  var o = a.fn.datepicker.defaults = {
    assumeNearbyYear: !1,
    autoclose: !1,
    beforeShowDay: a.noop,
    beforeShowMonth: a.noop,
    beforeShowYear: a.noop,
    beforeShowDecade: a.noop,
    beforeShowCentury: a.noop,
    calendarWeeks: !1,
    clearBtn: !1,
    toggleActive: !1,
    daysOfWeekDisabled: [],
    daysOfWeekHighlighted: [],
    datesDisabled: [],
    endDate: 1 / 0,
    forceParse: !0,
    format: "mm/dd/yyyy",
    keepEmptyValues: !1,
    keyboardNavigation: !0,
    language: "en",
    minViewMode: 0,
    maxViewMode: 4,
    multidate: !1,
    multidateSeparator: ",",
    orientation: "auto",
    rtl: !1,
    startDate: -(1 / 0),
    startView: 0,
    todayBtn: !1,
    todayHighlight: !1,
    updateViewDate: !0,
    weekStart: 0,
    disableTouchKeyboard: !1,
    enableOnReadonly: !0,
    showOnFocus: !0,
    zIndexOffset: 10,
    container: "body",
    immediateUpdates: !1,
    title: "",
    templates: {
      leftArrow: "&#x00AB;",
      rightArrow: "&#x00BB;"
    },
    showWeekDays: !0
  },
      p = a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
  a.fn.datepicker.Constructor = k;
  var q = a.fn.datepicker.dates = {
    en: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: "Today",
      clear: "Clear",
      titleFormat: "MM yyyy"
    }
  },
      r = {
    viewModes: [{
      names: ["days", "month"],
      clsName: "days",
      e: "changeMonth"
    }, {
      names: ["months", "year"],
      clsName: "months",
      e: "changeYear",
      navStep: 1
    }, {
      names: ["years", "decade"],
      clsName: "years",
      e: "changeDecade",
      navStep: 10
    }, {
      names: ["decades", "century"],
      clsName: "decades",
      e: "changeCentury",
      navStep: 100
    }, {
      names: ["centuries", "millennium"],
      clsName: "centuries",
      e: "changeMillennium",
      navStep: 1e3
    }],
    validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
    nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
    parseFormat: function parseFormat(a) {
      if ("function" == typeof a.toValue && "function" == typeof a.toDisplay) return a;
      var b = a.replace(this.validParts, "\0").split("\0"),
          c = a.match(this.validParts);
      if (!b || !b.length || !c || 0 === c.length) throw new Error("Invalid date format.");
      return {
        separators: b,
        parts: c
      };
    },
    parseDate: function parseDate(c, e, f, g) {
      function h(a, b) {
        return b === !0 && (b = 10), a < 100 && (a += 2e3, a > new Date().getFullYear() + b && (a -= 100)), a;
      }

      function i() {
        var a = this.slice(0, j[n].length),
            b = j[n].slice(0, a.length);
        return a.toLowerCase() === b.toLowerCase();
      }

      if (!c) return b;
      if (c instanceof Date) return c;
      if ("string" == typeof e && (e = r.parseFormat(e)), e.toValue) return e.toValue(c, e, f);
      var j,
          l,
          m,
          n,
          o,
          p = {
        d: "moveDay",
        m: "moveMonth",
        w: "moveWeek",
        y: "moveYear"
      },
          s = {
        yesterday: "-1d",
        today: "+0d",
        tomorrow: "+1d"
      };

      if (c in s && (c = s[c]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(c)) {
        for (j = c.match(/([\-+]\d+)([dmwy])/gi), c = new Date(), n = 0; n < j.length; n++) {
          l = j[n].match(/([\-+]\d+)([dmwy])/i), m = Number(l[1]), o = p[l[2].toLowerCase()], c = k.prototype[o](c, m);
        }

        return k.prototype._zero_utc_time(c);
      }

      j = c && c.match(this.nonpunctuation) || [];
      var t,
          u,
          v = {},
          w = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
          x = {
        yyyy: function yyyy(a, b) {
          return a.setUTCFullYear(g ? h(b, g) : b);
        },
        m: function m(a, b) {
          if (isNaN(a)) return a;

          for (b -= 1; b < 0;) {
            b += 12;
          }

          for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b;) {
            a.setUTCDate(a.getUTCDate() - 1);
          }

          return a;
        },
        d: function d(a, b) {
          return a.setUTCDate(b);
        }
      };
      x.yy = x.yyyy, x.M = x.MM = x.mm = x.m, x.dd = x.d, c = d();
      var y = e.parts.slice();

      if (j.length !== y.length && (y = a(y).filter(function (b, c) {
        return a.inArray(c, w) !== -1;
      }).toArray()), j.length === y.length) {
        var z;

        for (n = 0, z = y.length; n < z; n++) {
          if (t = parseInt(j[n], 10), l = y[n], isNaN(t)) switch (l) {
            case "MM":
              u = a(q[f].months).filter(i), t = a.inArray(u[0], q[f].months) + 1;
              break;

            case "M":
              u = a(q[f].monthsShort).filter(i), t = a.inArray(u[0], q[f].monthsShort) + 1;
          }
          v[l] = t;
        }

        var A, B;

        for (n = 0; n < w.length; n++) {
          B = w[n], B in v && !isNaN(v[B]) && (A = new Date(c), x[B](A, v[B]), isNaN(A) || (c = A));
        }
      }

      return c;
    },
    formatDate: function formatDate(b, c, d) {
      if (!b) return "";
      if ("string" == typeof c && (c = r.parseFormat(c)), c.toDisplay) return c.toDisplay(b, c, d);
      var e = {
        d: b.getUTCDate(),
        D: q[d].daysShort[b.getUTCDay()],
        DD: q[d].days[b.getUTCDay()],
        m: b.getUTCMonth() + 1,
        M: q[d].monthsShort[b.getUTCMonth()],
        MM: q[d].months[b.getUTCMonth()],
        yy: b.getUTCFullYear().toString().substring(2),
        yyyy: b.getUTCFullYear()
      };
      e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m, b = [];

      for (var f = a.extend([], c.separators), g = 0, h = c.parts.length; g <= h; g++) {
        f.length && b.push(f.shift()), b.push(e[c.parts[g]]);
      }

      return b.join("");
    },
    headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + o.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + o.templates.rightArrow + "</th></tr></thead>",
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
  };
  r.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + r.headTemplate + "<tbody></tbody>" + r.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + "</table></div></div>", a.fn.datepicker.DPGlobal = r, a.fn.datepicker.noConflict = function () {
    return a.fn.datepicker = m, this;
  }, a.fn.datepicker.version = "1.8.0", a.fn.datepicker.deprecated = function (a) {
    var b = window.console;
    b && b.warn && b.warn("DEPRECATED: " + a);
  }, a(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (b) {
    var c = a(this);
    c.data("datepicker") || (b.preventDefault(), n.call(c, "show"));
  }), a(function () {
    n.call(a('[data-provide="datepicker-inline"]'));
  });
});

/***/ }),

/***/ "./assets/vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min.js":
/*!***********************************************************************************!*\
  !*** ./assets/vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 17/08/2020 14:20
!function (a) {
  a.fn.datepicker.dates.fr = {
    days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
    daysShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
    daysMin: ["d", "l", "ma", "me", "j", "v", "s"],
    months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
    monthsShort: ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
    today: "Aujourd'hui",
    monthsTitle: "Mois",
    clear: "Effacer",
    weekStart: 1,
    format: "dd/mm/yyyy"
  };
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21hdGVyaWFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2RhbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3ZhbGlkYXRvci1iczQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9jc3MvYm9vdHN0cmFwLWRhdGVwaWNrZXIzLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9qcy9ib290c3RyYXAtZGF0ZXBpY2tlci5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9sb2NhbGVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmZyLm1pbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwibG9va3VwIiwiJCIsIm9uIiwiZSIsImZpbGVuYW1lIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwiaHRtbCIsImRvY3VtZW50IiwicmVhZHkiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImNoYW5nZSIsImkiLCJsZW5ndGgiLCJwdXNoIiwibmV4dCIsImpvaW4iLCJwcmVsb2FkZXIiLCJzcGVlZCIsImRhdGFBdHRyIiwiZmFkZU91dCIsImNsb3Nlc3QiLCJmaW5kIiwiY3NzIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGUiLCJ1cGRhdGVJbnRlcmZhY2UiLCJ2YWxpZGF0b3IiLCJhamF4Q29tcGxldGUiLCJ0b2dnbGVDbGFzcyIsInJlbW92ZUNsYXNzIiwic2xpZGVUb2dnbGUiLCJtb2RhbGVyIiwiZ2V0RGF0YU9wdGlvbnMiLCJzZWxlY3RwaWNrZXIiLCJpY29uQmFzZSIsInRpY2tJY29uIiwic3R5bGUiLCJzaXplIiwibGl2ZVNlYXJjaCIsImVhY2giLCJjb2xvciIsImhhc0RhdGFBdHRyIiwiZGF0YSIsInRvb2x0aXAiLCJjb250YWluZXIiLCJ0cmlnZ2VyIiwidGVtcGxhdGUiLCJvcHRpb25zIiwibXVsdGlkYXRlU2VwYXJhdG9yIiwibGFuZ3VhZ2UiLCJkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQiLCJwcm9wIiwiaW5wdXRzIiwiZGF0ZXBpY2tlciIsImhhc0NsYXNzIiwiY2xvc2UiLCJvcGVuIiwiYWRkQ2xhc3MiLCJmb2N1cyIsInNpZGViYXIiLCJjb25zb2xlIiwibG9nIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInBzIiwiUGVyZmVjdFNjcm9sbGJhciIsIiRzdWJtZW51IiwiaXMiLCJzbGlkZVVwIiwidG9nZ2xlRm9sZCIsImFwcCIsInRvZ2dsZVN0YXRlIiwiZm9sZCIsInN0YXRlIiwidW5mb2xkIiwidG9nZ2xlSGlkZSIsImhpZGUiLCJzaG93IiwicHJlcGVuZCIsInJlbW92ZSIsInF1aWNrdmlldyIsInFwcyIsInVwZGF0ZSIsInJlbG9hZFF2IiwiZGVzdHJveSIsImdldFRhcmdldCIsInVybCIsInF2IiwiYXR0ciIsImxvYWQiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJub3QiLCJhZnRlciIsInByZXYiLCJ1bmRlZmluZWQiLCJtYXRlcmlhbERvRmxvYXQiLCJ2YWwiLCJtYXRlcmlhbE5vRmxvYXQiLCJwYXJlbnQiLCJjb25maWdNb2RhbGVyIiwiaXNNb2RhbCIsInR5cGUiLCJ0aXRsZSIsImJhY2tkcm9wIiwiaGVhZGVyVmlzaWJsZSIsImZvb3RlclZpc2libGUiLCJjb25maXJtVmlzaWJsZSIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNsYXNzIiwiY2FuY2VsVmlzaWJsZSIsImNhbmNlbFRleHQiLCJjYW5jZWxDbGFzcyIsImJvZHlFeHRyYUNsYXNzIiwic3Bpbm5lciIsImF1dG9EZXN0cm95Iiwib25TaG93Iiwib25TaG93biIsIm9uSGlkZSIsIm9uSGlkZGVuIiwib25Db25maXJtIiwib25DYW5jZWwiLCJtb2RhbElkIiwiZ3VpZCIsImxlbiIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJzdWJzdHIiLCJzZXR0aW5nIiwiZXh0ZW5kIiwibW9kYWwiLCJpZCIsImhhbmRsZUNhbGxiYWNrIiwiaXNGdW5jdGlvbiIsInN1YnN0cmluZyIsImNhbGwiLCJhcHBlbmQiLCJvdXRlckhUTUwiLCJvbmUiLCJodG1sX2hlYWRlciIsImh0bWxfZm9vdGVyIiwibW9kYWxfaHRtbCIsImpRdWVyeSIsImtleXdvcmQiLCJzZWFyY2hfcmVwb25zZV9ldHVkaWFudCIsInNlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbCIsInNlYXJjaF9yZXBvbnNlX2F1dHJlIiwiYWpheCIsImRhdGFUeXBlIiwic3VjY2VzcyIsImV0dWRpYW50cyIsImluZGV4IiwiZXR1ZGlhbnQiLCJzbHVnIiwicGhvdG8iLCJhdmF0YXJJbml0aWFsZXMiLCJiYXNlcGF0aCIsImRpc3BsYXlQciIsInNlbWVzdHJlIiwiZ3JvdXBlcyIsImVtcHR5IiwicGVyc29ubmVscyIsInBlcnNvbm5lbCIsImF1dHJlcyIsImF1dHJlIiwiJHN0b3BDYXRjaEVudGVyIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwicG9wIiwibG9jYXRpb24iLCJTd2FsIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImNzcmYiLCJmaXJlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJfdG9rZW4iLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJhZGRDYWxsb3V0IiwiZXJyb3IiLCJ4aHIiLCJhamF4T3B0aW9ucyIsInRocm93bkVycm9yIiwiZGlzbWlzcyIsIm1lc3NhZ2UiLCJsYWJlbCIsInRyYW5zbGF0ZSIsIkFycmF5Iiwic2xpZGVEb3duIiwiZGVsYXkiLCJteUVkaXRJbml0aWFsQ29udGVudCIsIkVkaXRPbkxpbmUiLCJnZW5lcmVUZXh0QXJlYSIsImdlbmVyZUlucHV0IiwicmVwbGFjZVdpdGgiLCJrZXlDb2RlIiwidXBkYXRlRGF0YSIsIndoaWNoIiwiZmllbGQiLCJtZXRob2QiLCIkb2JqIiwidHJpbSIsImZuIiwiZGVmIiwiZ2V0QXR0cmlidXRlIiwiaGFzQXR0cmlidXRlIiwiZGF0YVRvT3B0aW9uIiwieCIsInRvVXBwZXJDYXNlIiwiZWwiLCJjYXN0TGlzdCIsImtleSIsIkJvb2xlYW4iLCJOdW1iZXIiLCJnZXRWYWx1ZSIsIiRlbCIsIlZhbGlkYXRvciIsImVsZW1lbnQiLCJ2YWxpZGF0b3JzIiwiVkFMSURBVE9SUyIsImN1c3RvbSIsIiRlbGVtZW50IiwiJGJ0biIsImZpbHRlciIsImFkZCIsInByb3h5Iiwib25JbnB1dCIsIm9uU3VibWl0IiwicmVzZXQiLCIkdGhpcyIsIiRpbnB1dHMiLCJWRVJTSU9OIiwiSU5QVVRfU0VMRUNUT1IiLCJGT0NVU19PRkZTRVQiLCJERUZBVUxUUyIsImRpc2FibGUiLCJlcnJvcnMiLCJtYXRjaCIsIm1pbmxlbmd0aCIsImZlZWRiYWNrIiwiY2hlY2tWYWxpZGl0eSIsInZhbGlkaXR5IiwidmFsaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInByb3RvdHlwZSIsInNlbGYiLCJjbGVhckVycm9ycyIsInRvZ2dsZVN1Ym1pdCIsImRlZmVyRXJyb3JzIiwidmFsaWRhdGVJbnB1dCIsImRvbmUiLCJwcmV2RXJyb3JzIiwiRXZlbnQiLCJyZWxhdGVkVGFyZ2V0IiwiaXNEZWZhdWx0UHJldmVudGVkIiwicnVuVmFsaWRhdG9ycyIsImRlZmVyIiwic2hvd0Vycm9ycyIsImRldGFpbCIsImRlZmVycmVkIiwiRGVmZXJyZWQiLCJyZWplY3QiLCJnZXRWYWxpZGF0b3JTcGVjaWZpY0Vycm9yIiwiZ2V0VmFsaWRpdHlTdGF0ZUVycm9yIiwidHlwZU1pc21hdGNoIiwicGF0dGVybk1pc21hdGNoIiwic3RlcE1pc21hdGNoIiwicmFuZ2VPdmVyZmxvdyIsInJhbmdlVW5kZXJmbG93IiwidmFsdWVNaXNzaW5nIiwiZ2V0R2VuZXJpY0Vycm9yIiwiZ2V0RXJyb3JNZXNzYWdlIiwiaW5kZXhPZiIsImdldCIsImZhaWwiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJhbHdheXMiLCJyZXNvbHZlIiwicHJvbWlzZSIsInZhbGlkYXRlIiwid2hlbiIsIm1hcCIsImZvY3VzRXJyb3IiLCIkaW5wdXQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiJGdyb3VwIiwiJGJsb2NrIiwiJGZlZWRiYWNrIiwiaGFzRXJyb3JzIiwiZmllbGRFcnJvcnMiLCJpc0luY29tcGxldGUiLCJmaWVsZEluY29tcGxldGUiLCJjYWxsYmFjayIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJyZW1vdmVEYXRhIiwidGltZW91dCIsIm9yaWdpbmFsQ29udGVudCIsInJlbW92ZUF0dHIiLCJvZmYiLCJQbHVnaW4iLCJvcHRpb24iLCJvbGQiLCJDb25zdHJ1Y3RvciIsIm5vQ29uZmxpY3QiLCIkZm9ybSIsImEiLCJkZWZpbmUiLCJiIiwiYyIsIkRhdGUiLCJVVEMiLCJhcHBseSIsImFyZ3VtZW50cyIsImQiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiZiIsImRlcHJlY2F0ZWQiLCJnIiwiaXNOYU4iLCJnZXRUaW1lIiwiaCIsInRvTG93ZXJDYXNlIiwiUmVnRXhwIiwidGVzdCIsInEiLCJwIiwiaiIsInNsaWNlIiwiY29udGFpbnMiLCJ2YWx1ZU9mIiwic3BsaWNlIiwiaXNBcnJheSIsImNsZWFyIiwiY29weSIsImsiLCJfcHJvY2Vzc19vcHRpb25zIiwiZGF0ZXMiLCJ2aWV3RGF0ZSIsIm8iLCJkZWZhdWx0Vmlld0RhdGUiLCJmb2N1c0RhdGUiLCJpc0lucHV0IiwiaW5wdXRGaWVsZCIsImNvbXBvbmVudCIsImlzSW5saW5lIiwicGlja2VyIiwiciIsIl9jaGVja190ZW1wbGF0ZSIsInRlbXBsYXRlcyIsImxlZnRBcnJvdyIsInJpZ2h0QXJyb3ciLCJfYnVpbGRFdmVudHMiLCJfYXR0YWNoRXZlbnRzIiwiYXBwZW5kVG8iLCJydGwiLCJjYWxlbmRhcldlZWtzIiwic3RhcnREYXRlIiwiX28iLCJlbmREYXRlIiwiZGF5c09mV2Vla0Rpc2FibGVkIiwiZGF0ZXNEaXNhYmxlZCIsIl9hbGxvd191cGRhdGUiLCJzZXRWaWV3TW9kZSIsInN0YXJ0VmlldyIsImZpbGxEb3ciLCJmaWxsTW9udGhzIiwiY29uc3RydWN0b3IiLCJfcmVzb2x2ZVZpZXdOYW1lIiwidmlld01vZGVzIiwiaW5BcnJheSIsIm5hbWVzIiwiX3Jlc29sdmVEYXlzT2ZXZWVrIiwibWluVmlld01vZGUiLCJtYXhWaWV3TW9kZSIsIm1heCIsIm1pbiIsIm11bHRpZGF0ZSIsIlN0cmluZyIsIndlZWtTdGFydCIsIndlZWtFbmQiLCJwYXJzZUZvcm1hdCIsImZvcm1hdCIsIl9sb2NhbF90b191dGMiLCJfemVyb190aW1lIiwicGFyc2VEYXRlIiwiYXNzdW1lTmVhcmJ5WWVhciIsIm9yaWVudGF0aW9uIiwiZ3JlcCIsInkiLCJ5ZWFyIiwibW9udGgiLCJsIiwiZGF5IiwiX2V2ZW50cyIsIl9zZWNvbmRhcnlFdmVudHMiLCJfYXBwbHlFdmVudHMiLCJfdW5hcHBseUV2ZW50cyIsImtleXVwIiwia2V5ZG93biIsInBhc3RlIiwic2hvd09uRm9jdXMiLCJjbGljayIsImJsdXIiLCJfZm9jdXNlZF9mcm9tIiwiaW1tZWRpYXRlVXBkYXRlcyIsImRhdGUiLCJuYXZBcnJvd3NDbGljayIsImRheUNlbGxDbGljayIsInJlc2l6ZSIsInBsYWNlIiwiX2RldGFjaEV2ZW50cyIsIl9hdHRhY2hTZWNvbmRhcnlFdmVudHMiLCJfZGV0YWNoU2Vjb25kYXJ5RXZlbnRzIiwiX3RyaWdnZXIiLCJfdXRjX3RvX2xvY2FsIiwidmlld01vZGUiLCJmb3JtYXREYXRlIiwiZW5hYmxlT25SZWFkb25seSIsIm5hdmlnYXRvciIsIm1zTWF4VG91Y2hQb2ludHMiLCJkaXNhYmxlVG91Y2hLZXlib2FyZCIsImRldGFjaCIsImZvcmNlUGFyc2UiLCJzZXRWYWx1ZSIsIm9yaWdpbmFsRXZlbnQiLCJjbGlwYm9hcmREYXRhIiwidHlwZXMiLCJnZXREYXRhIiwic2V0RGF0ZSIsImdldFRpbWV6b25lT2Zmc2V0IiwiX3plcm9fdXRjX3RpbWUiLCJnZXREYXRlcyIsImdldFVUQ0RhdGVzIiwiY2xlYXJEYXRlcyIsImF1dG9jbG9zZSIsInNldERhdGVzIiwic2V0VVRDRGF0ZXMiLCJzZXRVVENEYXRlIiwiZ2V0Rm9ybWF0dGVkRGF0ZSIsImdldFN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsInVwZGF0ZU5hdkFycm93cyIsImdldEVuZERhdGUiLCJzZXRFbmREYXRlIiwic2V0RGF5c09mV2Vla0Rpc2FibGVkIiwic2V0RGF5c09mV2Vla0hpZ2hsaWdodGVkIiwic2V0RGF0ZXNEaXNhYmxlZCIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsIndpZHRoIiwicGFyZW50cyIsInpJbmRleE9mZnNldCIsIm0iLCJuIiwibGVmdCIsInBhcnNlSW50IiwicmlnaHQiLCJ6SW5kZXgiLCJkYXRlV2l0aGluUmFuZ2UiLCJ1cGRhdGVWaWV3RGF0ZSIsImZpbGwiLCJzaG93V2Vla0RheXMiLCJkYXlzTWluIiwibW9udGhzU2hvcnQiLCJzZXRSYW5nZSIsInJhbmdlIiwiZ2V0Q2xhc3NOYW1lcyIsInRvZGF5SGlnaGxpZ2h0IiwiZGF0ZUlzRGlzYWJsZWQiLCJnZXRVVENEYXkiLCJfZmlsbF95ZWFyc1ZpZXciLCJmbG9vciIsInMiLCJ0Iiwibm9vcCIsImVuYWJsZWQiLCJjbGFzc2VzIiwiY29uY2F0IiwidG9kYXkiLCJlbiIsInRpdGxlRm9ybWF0IiwidG9kYXlCdG4iLCJjbGVhckJ0biIsInNldFVUQ0Z1bGxZZWFyIiwidSIsInYiLCJ3IiwieiIsIkEiLCJCIiwiYmVmb3JlU2hvd0RheSIsImNvbnRlbnQiLCJ1bmlxdWVTb3J0IiwidW5pcXVlIiwiQyIsIm1vbnRoc1RpdGxlIiwiRCIsImVuZCIsImVxIiwiYmVmb3JlU2hvd01vbnRoIiwiRSIsImJlZm9yZVNob3dZZWFyIiwiYmVmb3JlU2hvd0RlY2FkZSIsImJlZm9yZVNob3dDZW50dXJ5Iiwic3RvcFByb3BhZ2F0aW9uIiwiX3NldERhdGUiLCJzZXRVVENNb250aCIsImN1cnJlbnRUYXJnZXQiLCJuYXZTdGVwIiwibW92ZU1vbnRoIiwiX3RvZ2dsZV9tdWx0aWRhdGUiLCJ0b2dnbGVBY3RpdmUiLCJtb3ZlRGF5IiwibW92ZVdlZWsiLCJhYnMiLCJtb3ZlWWVhciIsIm1vdmVBdmFpbGFibGVEYXRlIiwid2Vla09mRGF0ZUlzRGlzYWJsZWQiLCJrZXlib2FyZE5hdmlnYXRpb24iLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJjaGlsZHJlbiIsImNsc05hbWUiLCJqcXVlcnkiLCJrZWVwRW1wdHlWYWx1ZXMiLCJkYXRlVXBkYXRlZCIsInBpY2tlcnMiLCJ1cGRhdGVEYXRlcyIsInVwZGF0ZVJhbmdlcyIsInVwZGF0aW5nIiwic2hpZnQiLCJ0b0FycmF5IiwiRXJyb3IiLCJkZWZhdWx0cyIsImxvY2FsZV9vcHRzIiwiZGF5cyIsImRheXNTaG9ydCIsIm1vbnRocyIsInZhbGlkUGFydHMiLCJub25wdW5jdHVhdGlvbiIsInRvVmFsdWUiLCJ0b0Rpc3BsYXkiLCJzZXBhcmF0b3JzIiwicGFydHMiLCJ5ZXN0ZXJkYXkiLCJ0b21vcnJvdyIsInl5eXkiLCJ5eSIsIk0iLCJNTSIsIm1tIiwiZGQiLCJERCIsImhlYWRUZW1wbGF0ZSIsImNvbnRUZW1wbGF0ZSIsImZvb3RUZW1wbGF0ZSIsIkRQR2xvYmFsIiwidmVyc2lvbiIsIndhcm4iLCJmciJdLCJtYXBwaW5ncyI6Ijs7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QyxDQUFDLE9BQUQsRUFBUyxPQUFULEVBQWlCLE1BQWpCLEVBQXdCLE9BQXhCLEVBQWdDLEtBQWhDLEVBQXNDLE1BQXRDLEVBQTZDLE9BQTdDLEVBQXFELE1BQXJELEVBQTRELE9BQTVELEVBQW9FLE1BQXBFLEVBQTJFLE1BQTNFLEVBQWtGLE1BQWxGLENBQWpUO0FBQTJZZSxTQUFLLEVBQUMsYUFBalo7QUFBK1ppQixlQUFXLEVBQUMsTUFBM2E7QUFBa2JuSyxTQUFLLEVBQUMsU0FBeGI7QUFBa2M4QyxhQUFTLEVBQUMsQ0FBNWM7QUFBOGNHLFVBQU0sRUFBQztBQUFyZCxHQUF6QjtBQUE0ZixDQUF4Z0IsQ0FBeWdCMVEsTUFBemdCLENBQUQsQyIsImZpbGUiOiJhZ2VuZGF+YXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL2FwcC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDIyLzEwLzIwMjAgMTU6NTZcblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9zY3NzL2ZvbnRhd2Vzb21lLnNjc3MnXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3Njc3Mvc29saWQuc2NzcydcbmltcG9ydCAnYm9vdHN0cmFwLXNlbGVjdC9kaXN0L2Nzcy9ib290c3RyYXAtc2VsZWN0Lm1pbi5jc3MnXG5pbXBvcnQgJy4uL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9jc3MvYm9vdHN0cmFwLWRhdGVwaWNrZXIzLm1pbi5jc3MnXG5pbXBvcnQgJy4uL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9qcy9ib290c3RyYXAtZGF0ZXBpY2tlci5taW4uanMnXG5pbXBvcnQgJy4uL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9sb2NhbGVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmZyLm1pbidcblxuaW1wb3J0ICcuLi9jc3MvYXBwLnNjc3MnXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3BlcmZlY3Qtc2Nyb2xsYmFyJ1xuaW1wb3J0ICcuL3ZhbGlkYXRvci1iczQnXG5pbXBvcnQge2dldERhdGFPcHRpb25zfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgJy4vbWF0ZXJpYWwnXG5pbXBvcnQgJy4vc2VhcmNoJ1xuaW1wb3J0ICcuL21vZGFsZXInXG5cbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpXG5cbmxldCBsb29rdXAgPSB7fVxuXG5yZXF1aXJlKCdib290c3RyYXAtc2VsZWN0JylcblxuJCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgbGV0IGZpbGVuYW1lID0gZS50YXJnZXQuZmlsZXNbMF0ubmFtZVxuICAkKCcuY3VzdG9tLWZpbGUtbGFiZWwnKS5odG1sKGZpbGVuYW1lKVxufSlcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAvLyBjb3B5IGxpbmsgRURUXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjY29weUxpbmsnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnI2xpZW5JY2FsJykuc2VsZWN0KClcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXG4gIH0pXG5cbiAgLy8gc2NyaXB0IHBvdXIgYWZmaWNoZXIgbGUgZmljaGllciBzZWxlY3Rpb25uw6kgYXZlYyBib290c3RyYXA0XG4gICQoJy5jdXN0b20tZmlsZSBpbnB1dCcpLmNoYW5nZShmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IGZpbGVzID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICQodGhpcylbMF0uZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZpbGVzLnB1c2goJCh0aGlzKVswXS5maWxlc1tpXS5uYW1lKVxuICAgIH1cbiAgICAkKHRoaXMpLm5leHQoJy5jdXN0b20tZmlsZS1sYWJlbCcpLmh0bWwoZmlsZXMuam9pbignLCAnKSlcbiAgfSlcblxuICB2YXIgcHJlbG9hZGVyID0gJCgnLnByZWxvYWRlcicpXG4gIGlmIChwcmVsb2FkZXIubGVuZ3RoKSB7XG4gICAgdmFyIHNwZWVkID0gcHJlbG9hZGVyLmRhdGFBdHRyKCdoaWRlLXNwcGVkJywgNjAwKVxuICAgIHByZWxvYWRlci5mYWRlT3V0KHNwZWVkKVxuICB9XG5cbiAgJChkb2N1bWVudCkub24oJ2ZvY3VzJywgJy50b3BiYXItc2VhcmNoIGlucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnLnRvcGJhci1zZWFyY2gnKS5maW5kKCcubG9va3VwLXBsYWNlaG9sZGVyIHNwYW4nKS5jc3MoJ29wYWNpdHknLCAnMCcpXG4gIH0pXG5cbiAgJChkb2N1bWVudCkub24oJ2JsdXInLCAnLnRvcGJhci1zZWFyY2ggaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCcudG9wYmFyLXNlYXJjaCcpLmZpbmQoJy5sb29rdXAtcGxhY2Vob2xkZXIgc3BhbicpLmNzcygnb3BhY2l0eScsICcxJylcbiAgfSlcblxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2xvb2t1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdmFyIHRhcmdldCA9ICQoJyNsb29rdXAtZnVsbCcpXG5cbiAgICBpZiAodGFyZ2V0ICE9PSBmYWxzZSkge1xuICAgICAgbG9va3VwLnRvZ2dsZSh0YXJnZXQpXG4gICAgfVxuICB9KVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbG9va3VwLWNsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIGxvb2t1cC50b2dnbGUoJCgnI2xvb2t1cC1mdWxsJykpXG4gIH0pXG5cbiAgLy90b29sdGlwXG4gIHVwZGF0ZUludGVyZmFjZSgpXG5cbiAgJCgnW2RhdGEtcHJvdmlkZT1cInZhbGlkYXRpb25cIl0nKS52YWxpZGF0b3IoKVxufSlcblxuJChkb2N1bWVudCkuYWpheENvbXBsZXRlKGZ1bmN0aW9uICgpIHtcbiAgdXBkYXRlSW50ZXJmYWNlKClcbn0pXG5cbi8vIEZ1bGxzY3JlZW5cbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNhcmQtYnRuLWZ1bGxzY3JlZW4nLCBmdW5jdGlvbiAoKSB7XG4gICQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS50b2dnbGVDbGFzcygnY2FyZC1mdWxsc2NyZWVuJykucmVtb3ZlQ2xhc3MoJ2NhcmQtbWF4aW1pemUnKVxufSlcblxuLy8gU2xpZGUgdXAvZG93blxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jYXJkLWJ0bi1zbGlkZScsIGZ1bmN0aW9uICgpIHtcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygncm90YXRlLTE4MCcpLmNsb3Nlc3QoJy5jYXJkJykuZmluZCgnLmNhcmQtY29udGVudCcpLnNsaWRlVG9nZ2xlKClcbn0pXG5cbi8vbW9kYWxlclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXByb3ZpZGV+PVwibW9kYWxlclwiXScsIGZ1bmN0aW9uICgpIHtcbiAgbW9kYWxlcihnZXREYXRhT3B0aW9ucygkKHRoaXMpKSlcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZUludGVyZmFjZSAoKSB7XG4gIC8vc2VsZWN0cGlja2VyXG4gICQoJy5zZWxlY3RwaWNrZXInKS5zZWxlY3RwaWNrZXIoe1xuICAgIGljb25CYXNlOiAnJyxcbiAgICB0aWNrSWNvbjogJ2ZhcyBmYS1jaGVjaycsXG4gICAgc3R5bGU6ICdidG4tbGlnaHQnLFxuICAgIHNpemU6IDEwLFxuICAgIGxpdmVTZWFyY2g6IHRydWVcbiAgfSlcblxuICAvL3Rvb2x0aXBcbiAgJCgnW2RhdGEtcHJvdmlkZX49XCJ0b29sdGlwXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yID0gJydcblxuICAgIGlmICgkKHRoaXMpLmhhc0RhdGFBdHRyKCd0b29sdGlwLWNvbG9yJykpIHtcbiAgICAgIGNvbG9yID0gJyB0b29sdGlwLScgKyAkKHRoaXMpLmRhdGEoJ3Rvb2x0aXAtY29sb3InKVxuICAgIH1cblxuICAgICQodGhpcykudG9vbHRpcCh7XG4gICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwJyArIGNvbG9yICsgJ1wiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nXG4gICAgfSlcbiAgfSlcblxuICAkKCdbZGF0YS1wcm92aWRlfj1cImRhdGVwaWNrZXJcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIG11bHRpZGF0ZVNlcGFyYXRvcjogJywgJyxcbiAgICAgIGxhbmd1YWdlOiAnZnInLFxuICAgICAgZGF5c09mV2Vla0hpZ2hsaWdodGVkOiAnMDYnXG4gICAgfVxuXG4gICAgaWYgKCQodGhpcykucHJvcCgndGFnTmFtZScpICE9ICdJTlBVVCcpIHtcbiAgICAgIC8vc2kgY2Ugbidlc3QgcGFzIHVuIGlucHV0ID0+IGRvbmMgdW4gZGF0ZSByYW5nZVxuICAgICAgb3B0aW9ucy5pbnB1dHMgPSBbJCh0aGlzKS5maW5kKCdpbnB1dDpmaXJzdCcpLCAkKHRoaXMpLmZpbmQoJ2lucHV0Omxhc3QnKV1cbiAgICB9XG4gICAgJCh0aGlzKS5kYXRlcGlja2VyKG9wdGlvbnMpXG4gIH0pXG5cbn1cblxuLy8gT3BlbiBmdWxsc2NyZWVuIGxvb2t1cFxuLy9cbmxvb2t1cC50b2dnbGUgPSBmdW5jdGlvbiAoZSkge1xuICBpZiAoJChlKS5oYXNDbGFzcygncmV2ZWFsJykpIHtcbiAgICBsb29rdXAuY2xvc2UoZSlcbiAgfSBlbHNlIHtcbiAgICBsb29rdXAub3BlbihlKVxuICB9XG59XG5cbi8vIENsb3NlIGZ1bGxzY3JlZW4gbG9va3VwXG4vL1xubG9va3VwLmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgJChlKS5yZW1vdmVDbGFzcygncmV2ZWFsJylcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKVxufVxuXG5cbi8vIENsb3NlIGZ1bGxzY3JlZW4gbG9va3VwXG4vL1xubG9va3VwLm9wZW4gPSBmdW5jdGlvbiAoZSkge1xuICAkKGUpLmFkZENsYXNzKCdyZXZlYWwnKVxuICAkKGUpLmZpbmQoJy5sb29rdXAtZm9ybSBpbnB1dCcpLmZvY3VzKClcbiAgJCgnYm9keScpLmFkZENsYXNzKCduby1zY3JvbGwnKVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cbi8vIFNpZGViYXJcbi8vID09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgc2lkZWJhciA9IHt9XG5cbi8vIFNjcm9sbGFibGVcbmNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpZGViYXItbmF2aWdhdGlvbicpKVxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpZGViYXItbmF2aWdhdGlvbicpLmxlbmd0aCA+IDApIHtcbiAgY29uc3QgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnNpZGViYXItbmF2aWdhdGlvbicpXG59XG5cbi8vIEhhbmRsZSBzaWRlYmFyIG9wZW5uZXJcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNpZGViYXItdG9nZ2xlcicsIGZ1bmN0aW9uICgpIHtcbiAgc2lkZWJhci5vcGVuKClcbn0pXG5cblxuLy8gQ2xvc2Ugc2lkZWJhciB3aGVuIGJhY2tkcm9wIHRvdWNoZXNcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJhY2tkcm9wLXNpZGViYXInLCBmdW5jdGlvbiAoKSB7XG4gIHNpZGViYXIuY2xvc2UoKVxufSlcblxuXG4vLyBTbGlkZSB1cC9kb3duIG1lbnUgaXRlbSBvbiBjbGlja1xuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2lkZWJhciAubWVudS1saW5rJywgZnVuY3Rpb24gKCkge1xuICB2YXIgJHN1Ym1lbnUgPSAkKHRoaXMpLm5leHQoJy5tZW51LXN1Ym1lbnUnKVxuICBpZiAoJHN1Ym1lbnUubGVuZ3RoIDwgMSlcbiAgICByZXR1cm5cblxuICBpZiAoJHN1Ym1lbnUuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAkc3VibWVudS5zbGlkZVVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5zaWRlYmFyIC5tZW51LWl0ZW0ub3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICB9KVxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgIHJldHVyblxuICB9XG5cbiAgJCgnLnNpZGViYXIgLm1lbnUtc3VibWVudTp2aXNpYmxlJykuc2xpZGVVcCgpXG4gICQoJy5zaWRlYmFyIC5tZW51LWxpbmsnKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gICRzdWJtZW51LnNsaWRlVG9nZ2xlKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc2lkZWJhciAubWVudS1pdGVtLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gIH0pXG4gICQodGhpcykuYWRkQ2xhc3MoJ29wZW4nKVxufSlcblxuLy8gSGFuZGxlIGZvbGQgdG9nZ2xlclxuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2lkZWJhci10b2dnbGUtZm9sZCcsIGZ1bmN0aW9uICgpIHtcbiAgc2lkZWJhci50b2dnbGVGb2xkKClcbn0pXG5cbi8vfVxuXG5cbnNpZGViYXIudG9nZ2xlRm9sZCA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzaWRlYmFyLWZvbGRlZCcpXG4gIGFwcC50b2dnbGVTdGF0ZSgnc2lkZWJhci5mb2xkZWQnKVxufVxuXG5zaWRlYmFyLmZvbGQgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1mb2xkZWQnKVxuICBhcHAuc3RhdGUoJ3NpZGViYXIuZm9sZGVkJywgdHJ1ZSlcbn1cblxuXG5zaWRlYmFyLnVuZm9sZCA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLWZvbGRlZCcpXG4gIGFwcC5zdGF0ZSgnc2lkZWJhci5mb2xkZWQnLCBmYWxzZSlcbn1cblxuXG5zaWRlYmFyLnRvZ2dsZUhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS50b2dnbGVDbGFzcygnc2lkZWJhci1oaWRkZW4nKVxuICBhcHAudG9nZ2xlU3RhdGUoJ3NpZGViYXIuaGlkZGVuJylcbn1cblxuc2lkZWJhci5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykuYWRkQ2xhc3MoJ3NpZGViYXItaGlkZGVuJylcbiAgYXBwLnN0YXRlKCdzaWRlYmFyLmhpZGRlbicsIHRydWUpXG59XG5cbnNpZGViYXIuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLWhpZGRlbicpXG4gIGFwcC5zdGF0ZSgnc2lkZWJhci5oaWRkZW4nLCBmYWxzZSlcbn1cblxuXG5zaWRlYmFyLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1vcGVuJykucHJlcGVuZCgnPGRpdiBjbGFzcz1cImFwcC1iYWNrZHJvcCBiYWNrZHJvcC1zaWRlYmFyXCI+PC9kaXY+Jylcbn1cblxuc2lkZWJhci5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLW9wZW4nKVxuICAkKCcuYmFja2Ryb3Atc2lkZWJhcicpLnJlbW92ZSgpXG59XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09XG4vLyBRdWlja3ZpZXdcbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy9cblxubGV0IHF1aWNrdmlldyA9IHt9XG5sZXQgcXBzID0gbnVsbFxuXG4vLyBVcGRhdGUgc2Nyb2xsYmFyIG9uIHRhYiBjaGFuZ2Vcbi8vXG4kKGRvY3VtZW50KS5vbignc2hvd24uYnMudGFiJywgJy5xdWlja3ZpZXctaGVhZGVyIGFbZGF0YS10b2dnbGU9XCJ0YWJcIl0nLCBmdW5jdGlvbiAoZSkge1xuICBxcHMudXBkYXRlKClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbG9hZFF2ICgpIHtcbiAgcXBzLmRlc3Ryb3koKVxuICBxcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnF1aWNrdmlldycpXG59XG5cbi8vIFF1aWNrdmlldyBjbG9zZXJcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtZGlzbWlzcz1cInF1aWNrdmlld1wiXScsIGZ1bmN0aW9uICgpIHtcbiAgcXVpY2t2aWV3LmNsb3NlKCQodGhpcykuY2xvc2VzdCgnLnF1aWNrdmlldycpKVxufSlcblxuXG4vLyBIYW5kbGUgcXVpY2t2aWV3IG9wZW5uZXJcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtdG9nZ2xlPVwicXVpY2t2aWV3XCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGxldCB0YXJnZXQgPSBhcHAuZ2V0VGFyZ2V0KCQodGhpcykpXG5cbiAgaWYgKHRhcmdldCA9PSBmYWxzZSkge1xuICAgIHF1aWNrdmlldy5jbG9zZSgkKHRoaXMpLmNsb3Nlc3QoJy5xdWlja3ZpZXcnKSlcbiAgfSBlbHNlIHtcbiAgICBsZXQgdXJsID0gJydcbiAgICBpZiAoJCh0aGlzKS5oYXNEYXRhQXR0cigndXJsJykpIHtcbiAgICAgIHVybCA9ICQodGhpcykuZGF0YSgndXJsJylcbiAgICB9XG4gICAgcXVpY2t2aWV3LnRvZ2dsZSh0YXJnZXQsIHVybClcbiAgfVxufSlcblxuXG4vLyBDbG9zZSBxdWlja3ZpZXcgd2hlbiBiYWNrZHJvcCB0b3VjaGVzXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5iYWNrZHJvcC1xdWlja3ZpZXcnLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBxdiA9ICQodGhpcykuYXR0cignZGF0YS10YXJnZXQnKVxuICBpZiAoISQocXYpLmlzKCdbZGF0YS1kaXNhYmxlLWJhY2tkcm9wLWNsaWNrXScpKSB7XG4gICAgcXVpY2t2aWV3LmNsb3NlKHF2KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnF1aWNrdmlldyAuY2xvc2UsIFtkYXRhLWRpc21pc3M9XCJxdWlja3ZpZXdcIl0nLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBxdiA9ICQodGhpcykuY2xvc2VzdCgnLnF1aWNrdmlldycpXG4gIHF1aWNrdmlldy5jbG9zZShxdilcbn0pXG5cbi8vIFRvZ2dsZSBvcGVuL2Nsb3NlIHN0YXRlXG4vL1xucXVpY2t2aWV3LnRvZ2dsZSA9IGZ1bmN0aW9uIChlLCB1cmwpIHtcbiAgaWYgKCQoZSkuaGFzQ2xhc3MoJ3JldmVhbCcpKSB7XG4gICAgcXVpY2t2aWV3LmNsb3NlKGUpXG4gIH0gZWxzZSB7XG4gICAgaWYgKHVybCAhPT0gJycpIHtcbiAgICAgICQoZSkuaHRtbCgnPGRpdiBjbGFzcz1cInNwaW5uZXItbGluZWFyXCI+PGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj48L2Rpdj4nKVxuICAgICAgJChlKS5sb2FkKHVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBxcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnF1aWNrdmlldycpXG4gICAgICB9KVxuICAgIH1cbiAgICBxdWlja3ZpZXcub3BlbihlKVxuICB9XG59XG5cblxuLy8gT3BlbiBxdWlja3ZpZXdcbi8vXG5xdWlja3ZpZXcub3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gIGxldCBxdWlja3ZpZXcgPSAkKGUpXG4gIGxldCB1cmwgPSAnJ1xuICAvLyBMb2FkIGNvbnRlbnQgZnJvbSBVUkwgaWYgcmVxdWlyZWRcbiAgaWYgKHF1aWNrdmlldy5oYXNEYXRhQXR0cigndXJsJykgJiYgJ3RydWUnICE9PSBxdWlja3ZpZXcuZGF0YSgndXJsLWhhcy1sb2FkZWQnKSkge1xuICAgIGlmIChxdWlja3ZpZXcuZGF0YSgndXJsJykgPT09ICduby11cmwnKSB7XG4gICAgICB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdxdWlja192aWV3JylcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gcXVpY2t2aWV3LmRhdGEoJ3VybCcpXG4gICAgfVxuXG4gICAgcXVpY2t2aWV3LmxvYWQodXJsLCBmdW5jdGlvbiAoKSB7XG4gICAgICBxcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnF1aWNrdmlldycpXG5cbiAgICAgIC8vIERvbid0IGxvYWQgaXQgbmV4dCB0aW1lLCBpZiBkb24ndCBuZWVkIHRvXG4gICAgICBpZiAocXVpY2t2aWV3Lmhhc0RhdGFBdHRyKCdhbHdheXMtcmVsb2FkJykgJiYgJ3RydWUnID09PSBxdWlja3ZpZXcuZGF0YSgnYWx3YXlzLXJlbG9hZCcpKSB7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1aWNrdmlldy5kYXRhKCd1cmwtaGFzLWxvYWRlZCcsICd0cnVlJylcbiAgICAgIH1cbiAgICB9KVxuXG4gIH1cblxuLy8gT3BlbiBpdFxuICBxdWlja3ZpZXcuYWRkQ2xhc3MoJ3JldmVhbCcpLm5vdCgnLmJhY2tkcm9wLXJlbW92ZScpLmFmdGVyKCc8ZGl2IGNsYXNzPVwiYXBwLWJhY2tkcm9wIGJhY2tkcm9wLXF1aWNrdmlld1wiIGRhdGEtdGFyZ2V0PVwiJyArIGUgKyAnXCI+PC9kaXY+Jylcbn1cblxuXG4vLyBDbG9zZSBxdWlja3ZpZXdcbi8vXG5xdWlja3ZpZXcuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAkKGUpLnJlbW92ZUNsYXNzKCdyZXZlYWwnKVxuICAkKCcuYmFja2Ryb3AtcXVpY2t2aWV3JykucmVtb3ZlKClcbn1cblxuXG5sZXQgYXBwID0ge31cblxuYXBwLmdldFRhcmdldCA9IGZ1bmN0aW9uIChlKSB7XG4gIGxldCB0YXJnZXRcbiAgaWYgKGUuaGFzRGF0YUF0dHIoJ3RhcmdldCcpKSB7XG4gICAgdGFyZ2V0ID0gZS5kYXRhKCd0YXJnZXQnKVxuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGUuYXR0cignaHJlZicpXG4gIH1cblxuICBpZiAodGFyZ2V0ID09ICduZXh0Jykge1xuICAgIHRhcmdldCA9ICQoZSkubmV4dCgpXG4gIH0gZWxzZSBpZiAodGFyZ2V0ID09ICdwcmV2Jykge1xuICAgIHRhcmdldCA9ICQoZSkucHJldigpXG4gIH1cblxuICBpZiAodGFyZ2V0ID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldFxufVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvbWF0ZXJpYWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyOC8xMS8yMDE5IDE5OjQwXG5cbi8vIE1hdGVyaWFsIGlucHV0XG4vL1xuJChkb2N1bWVudCkub24oJ2ZvY3VzJywgJy5mb3JtLXR5cGUtbWF0ZXJpYWwgLmZvcm0tY29udHJvbDpub3QoLmJvb3RzdHJhcC1zZWxlY3QpJywgZnVuY3Rpb24gKCkge1xuICBtYXRlcmlhbERvRmxvYXQoJCh0aGlzKSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdmb2N1c291dCcsICcuZm9ybS10eXBlLW1hdGVyaWFsIC5mb3JtLWNvbnRyb2w6bm90KC5ib290c3RyYXAtc2VsZWN0KScsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKCQodGhpcykudmFsKCkgPT09ICcnKSB7XG4gICAgbWF0ZXJpYWxOb0Zsb2F0KCQodGhpcykpXG4gIH1cbn0pXG5cbi8vIEF1dG8gZm9jdXMgaW5wdXRzXG5tYXRlcmlhbERvRmxvYXQoJCgnLmZvcm0tdHlwZS1tYXRlcmlhbCAuZm9ybS1jb250cm9sW2F1dG9mb2N1cz1cInRydWVcIl0nKSlcblxuXG5mdW5jdGlvbiBtYXRlcmlhbERvRmxvYXQgKGUpIHtcbiAgaWYgKGUucGFyZW50KCcuaW5wdXQtZ3JvdXAtaW5wdXQnKS5sZW5ndGgpIHtcbiAgICBlLnBhcmVudCgnLmlucHV0LWdyb3VwLWlucHV0JykuYWRkQ2xhc3MoJ2RvLWZsb2F0JylcbiAgfSBlbHNlIHtcbiAgICBlLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykuYWRkQ2xhc3MoJ2RvLWZsb2F0JylcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIG1hdGVyaWFsTm9GbG9hdCAoZSkge1xuICBpZiAoZS5wYXJlbnQoJy5pbnB1dC1ncm91cC1pbnB1dCcpLmxlbmd0aCkge1xuICAgIGUucGFyZW50KCcuaW5wdXQtZ3JvdXAtaW5wdXQnKS5yZW1vdmVDbGFzcygnZG8tZmxvYXQnKVxuICB9IGVsc2Uge1xuICAgIGUuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmVDbGFzcygnZG8tZmxvYXQnKVxuICB9XG59XG5cbiQoJy5mb3JtLXR5cGUtbWF0ZXJpYWwgLmZvcm0tY29udHJvbCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICBpZiAoJCh0aGlzKS52YWwoKS5sZW5ndGggPiAwKSB7XG4gICAgLy9pZiAoJCh0aGlzKS5pcygnW2RhdGEtcHJvdmlkZX49XCJzZWxlY3RwaWNrZXJcIl0nKSkge1xuICAgIC8vICByZXR1cm5cbiAgICAvL31cbiAgICBtYXRlcmlhbERvRmxvYXQoJCh0aGlzKSlcbiAgfVxufSlcblxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL21vZGFsZXIuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyNy8wNy8yMDIwIDExOjIzXG5cbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy8gTW9kYWxlclxuLy8gPT09PT09PT09PT09PT09PT09PT09XG4vL1xuK2Z1bmN0aW9uICgkKSB7XG5cbiAgbGV0IGNvbmZpZ01vZGFsZXIgPSB7XG4gICAgdXJsOiAnJyxcbiAgICBpc01vZGFsOiBmYWxzZSxcbiAgICBodG1sOiAnJyxcbiAgICB0YXJnZXQ6ICcnLFxuICAgIHR5cGU6ICcnLFxuICAgIHNpemU6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBoZWFkZXJWaXNpYmxlOiB0cnVlLFxuICAgIGZvb3RlclZpc2libGU6IHRydWUsXG4gICAgY29uZmlybVZpc2libGU6IHRydWUsXG4gICAgY29uZmlybVRleHQ6ICdPaycsXG4gICAgY29uZmlybUNsYXNzOiAnYnRuIGJ0bi13LXNtIGJ0bi1mbGF0IGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxWaXNpYmxlOiBmYWxzZSxcbiAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJyxcbiAgICBjYW5jZWxDbGFzczogJ2J0biBidG4tdy1zbSBidG4tZmxhdCBidG4tc2Vjb25kYXJ5JyxcbiAgICBib2R5RXh0cmFDbGFzczogJycsXG4gICAgc3Bpbm5lcjogJzxkaXYgY2xhc3M9XCJoLTIwMCBjZW50ZXItdmhcIj48c3ZnIGNsYXNzPVwic3Bpbm5lci1jaXJjbGUtbWF0ZXJpYWwtc3ZnXCIgdmlld0JveD1cIjAgMCA1MCA1MFwiPjxjaXJjbGUgY2xhc3M9XCJjaXJjbGVcIiBjeD1cIjI1XCIgY3k9XCIyNVwiIHI9XCIyMFwiPjwvc3ZnPjwvZGl2PicsXG5cbiAgICBhdXRvRGVzdHJveTogdHJ1ZSxcblxuICAgIC8vIEV2ZW50c1xuICAgIG9uU2hvdzogbnVsbCxcbiAgICBvblNob3duOiBudWxsLFxuICAgIG9uSGlkZTogbnVsbCxcbiAgICBvbkhpZGRlbjogbnVsbCxcbiAgICBvbkNvbmZpcm06IG51bGwsXG4gICAgb25DYW5jZWw6IG51bGwsXG5cbiAgICAvLyBQcml2YXRlIG9wdGlvbnNcbiAgICBtb2RhbElkOiBudWxsXG4gIH1cblxuICBmdW5jdGlvbiBndWlkIChsZW4pIHtcbiAgICBpZiAobGVuID09IHVuZGVmaW5lZCkge1xuICAgICAgbGVuID0gNVxuICAgIH1cbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikucmVwbGFjZSgvW15hLXpdKy9nLCAnJykuc3Vic3RyKDAsIGxlbilcbiAgfVxuXG5cbiAgbW9kYWxlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIHNldHRpbmcgPSAkLmV4dGVuZCh7fSwgY29uZmlnTW9kYWxlciwgb3B0aW9ucylcblxuICAgIGlmIChzZXR0aW5nLm1vZGFsSWQpIHtcbiAgICAgICQoJyMnICsgc2V0dGluZy5tb2RhbElkKS5tb2RhbCgnc2hvdycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cblxuICAgIHZhciBpZCA9ICdtb2RhbC0nICsgZ3VpZCgpXG5cblxuICAgIHZhciBoYW5kbGVDYWxsYmFjayA9IGZ1bmN0aW9uIChpZCkge1xuXG4gICAgICAvLyBCb290c3RyYXAgbW9kYWwgZXZlbnRzXG4gICAgICAvL1xuICAgICAgaWYgKHNldHRpbmcub25TaG93KSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvL3NldHRpbmcub25TaG93KCk7XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5nLm9uU2hvd24pIHtcbiAgICAgICAgJCgnIycgKyBpZCkub24oJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvL3NldHRpbmcub25TaG93bigpO1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAoc2V0dGluZy5vbkhpZGUpIHtcbiAgICAgICAgJCgnIycgKyBpZCkub24oJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHNldHRpbmcub25IaWRlKClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNldHRpbmcub25IaWRkZW4pIHtcbiAgICAgICAgJCgnIycgKyBpZCkub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgc2V0dGluZy5vbkhpZGRlbigpXG4gICAgICAgIH0pXG4gICAgICB9XG5cblxuICAgICAgLy8gSGFuZGxlIGNvbmZpcm0gY2FsbGJhY2tcbiAgICAgIC8vXG4gICAgICAkKCcjJyArIGlkKS5maW5kKCdbZGF0YS1wZXJmb3JtPVwiY29uZmlybVwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBIYXNuJ3Qgc2V0XG4gICAgICAgIGlmIChzZXR0aW5nLm9uQ29uZmlybSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJcyBhIGZ1bmN0aW9uXG4gICAgICAgIGlmICgkLmlzRnVuY3Rpb24oc2V0dGluZy5vbkNvbmZpcm0pKSB7XG4gICAgICAgICAgc2V0dGluZy5vbkNvbmZpcm0oJCgnIycgKyBpZCkpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJcyBzdHJpbmcgdmFsdWUsIHNvIGNhbGwgaXRcbiAgICAgICAgaWYgKHNldHRpbmcub25Db25maXJtLnN1YnN0cmluZykge1xuICAgICAgICAgIGFwcC5jYWxsKHNldHRpbmcub25Db25maXJtLCAkKCcjJyArIGlkKSlcbiAgICAgICAgfVxuXG4gICAgICB9KVxuXG5cbiAgICAgIC8vIEhhbmRsZSBjYW5jZWwgY2FsbGJhY2tcbiAgICAgIC8vXG4gICAgICAkKCcjJyArIGlkKS5maW5kKCdbZGF0YS1wZXJmb3JtPVwiY2FuY2VsXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vIEhhc24ndCBzZXRcbiAgICAgICAgaWYgKHNldHRpbmcub25DYW5jZWwgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXMgYSBmdW5jdGlvblxuICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmcub25DYW5jZWwpKSB7XG4gICAgICAgICAgc2V0dGluZy5vbkNhbmNlbCgkKCcjJyArIGlkKSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElzIHN0cmluZyB2YWx1ZSwgc28gY2FsbCBpdFxuICAgICAgICBpZiAoc2V0dGluZy5vbkNhbmNlbC5zdWJzdHJpbmcpIHtcbiAgICAgICAgICBhcHAuY2FsbChzZXR0aW5nLm9uQ2FuY2VsLCAkKCcjJyArIGlkKSlcbiAgICAgICAgfVxuXG4gICAgICB9KVxuICAgIH1cblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gV2UgcmVjaWV2ZSBtb2RhbCBtYXJrdXAgZnJvbSB1cmxcbiAgICAvL1xuICAgIGlmIChzZXR0aW5nLmlzTW9kYWwpIHtcblxuICAgICAgJCgnPGRpdj4nKS5sb2FkKHNldHRpbmcudXJsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJCh0aGlzKS5maW5kKCcubW9kYWwnKS5hdHRyKCdpZCcsIGlkKS5vdXRlckhUTUwoKSlcblxuICAgICAgICAkKCcjJyArIGlkKS5tb2RhbCgnc2hvdycpXG4gICAgICAgICQoJyMnICsgaWQpLm9uZSgnc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vdG9kbzogYSBjb25maXJtZXIgJCgnIycrIGlkKS5maW5kKCcubW9kYWwtYm9keScpLnBlcmZlY3RTY3JvbGxiYXIoJ3VwZGF0ZScpO1xuICAgICAgICB9KVxuXG5cbiAgICAgICAgLy8gRGVzdHJveSBhZnRlciBjbG9zZVxuICAgICAgICAvL1xuICAgICAgICBpZiAoc2V0dGluZy5hdXRvRGVzdHJveSkge1xuICAgICAgICAgICQoJyMnICsgaWQpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcjJyArIGlkKS5yZW1vdmUoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJChzZXR0aW5nLnRoaXMpLmF0dHIoJ2RhdGEtbW9kYWwtaWQnLCBpZClcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaGFuZGxlQ2FsbGJhY2soaWQpXG4gICAgICB9KVxuICAgIH1cblxuXG5cblxuXG4gICAgICAvLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gV2Ugc2hvdWxkIGRlc2lnbiB0aGUgbW9kYWxcbiAgICAvL1xuICAgIGVsc2Uge1xuXG4gICAgICBzd2l0Y2ggKHNldHRpbmcuc2l6ZSkge1xuICAgICAgICBjYXNlICdzbSc6XG4gICAgICAgICAgc2V0dGluZy5zaXplID0gJ21vZGFsLXNtJ1xuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbGcnOlxuICAgICAgICAgIHNldHRpbmcuc2l6ZSA9ICdtb2RhbC1sZydcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vc2V0dGluZy5zaXplID0gJyc7XG4gICAgICB9XG5cblxuICAgICAgaWYgKHNldHRpbmcudHlwZSkge1xuICAgICAgICBzZXR0aW5nLnR5cGUgPSAnbW9kYWwtJyArIHNldHRpbmcudHlwZVxuICAgICAgfVxuXG5cbiAgICAgIC8vIEhlYWRlciBjb2RlXG4gICAgICAvL1xuICAgICAgdmFyIGh0bWxfaGVhZGVyID0gJydcbiAgICAgIGlmIChzZXR0aW5nLmhlYWRlclZpc2libGUpIHtcbiAgICAgICAgaHRtbF9oZWFkZXIgKz1cbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPiBcXFxuICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj4nICsgc2V0dGluZy50aXRsZSArICc8L2g1PiBcXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj4gXFxcbiAgICAgICAgICA8L2Rpdj4nXG4gICAgICB9XG5cblxuICAgICAgLy8gRm9vdGVyIGNvZGVcbiAgICAgIC8vXG4gICAgICB2YXIgaHRtbF9mb290ZXIgPSAnJ1xuICAgICAgaWYgKHNldHRpbmcuZm9vdGVyVmlzaWJsZSkge1xuICAgICAgICBodG1sX2Zvb3RlciArPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPidcblxuICAgICAgICBpZiAoc2V0dGluZy5jYW5jZWxWaXNpYmxlKSB7XG4gICAgICAgICAgaHRtbF9mb290ZXIgKz0gJzxidXR0b24gY2xhc3M9XCInICsgc2V0dGluZy5jYW5jZWxDbGFzcyArICdcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtcGVyZm9ybT1cImNhbmNlbFwiPicgKyBzZXR0aW5nLmNhbmNlbFRleHQgKyAnPC9idXR0b24+J1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNldHRpbmcuY29uZmlybVZpc2libGUpIHtcbiAgICAgICAgICBodG1sX2Zvb3RlciArPSAnPGJ1dHRvbiBjbGFzcz1cIicgKyBzZXR0aW5nLmNvbmZpcm1DbGFzcyArICdcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtcGVyZm9ybT1cImNvbmZpcm1cIj4nICsgc2V0dGluZy5jb25maXJtVGV4dCArICc8L2J1dHRvbj4nXG4gICAgICAgIH1cblxuICAgICAgICBodG1sX2Zvb3RlciArPSAnPC9kaXY+J1xuICAgICAgfVxuXG4gICAgICAvLyBNb2RhbCBjb2RlXG4gICAgICAvL1xuICAgICAgdmFyIG1vZGFsX2h0bWwgPVxuICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGUgJyArIHNldHRpbmcudHlwZSArICdcIiBpZD1cIicgKyBpZCArICdcIiB0YWJpbmRleD1cIi0xXCInICsgKCFzZXR0aW5nLmJhY2tkcm9wID8gJyBkYXRhLWJhY2tkcm9wPVwiZmFsc2VcIicgOiAnJykgKyAnPiBcXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyAnICsgc2V0dGluZy5zaXplICsgJ1wiPiBcXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPiBcXFxuICAgICAgICAgICAgICAgICcgKyBodG1sX2hlYWRlciArICcgXFxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSAnICsgc2V0dGluZy5ib2R5RXh0cmFDbGFzcyArICdcIj4gXFxcbiAgICAgICAgICAgICAgICAgICcgKyBzZXR0aW5nLnNwaW5uZXIgKyAnIFxcXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxcXG4gICAgICAgICAgICAgICAgJyArIGh0bWxfZm9vdGVyICsgJyBcXFxuICAgICAgICAgICAgICA8L2Rpdj4gXFxcbiAgICAgICAgICAgIDwvZGl2PiBcXFxuICAgICAgICAgIDwvZGl2PidcblxuXG4gICAgICAvLyBTaG93IG1vZGFsXG4gICAgICAkKCdib2R5JykuYXBwZW5kKG1vZGFsX2h0bWwpXG4gICAgICAkKCcjJyArIGlkKS5tb2RhbCgnc2hvdycpXG5cblxuICAgICAgLy8gRGVzdHJveSBhZnRlciBjbG9zZVxuICAgICAgLy9cbiAgICAgIGlmIChzZXR0aW5nLmF1dG9EZXN0cm95KSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJCgnIycgKyBpZCkucmVtb3ZlKClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoc2V0dGluZy50aGlzKS5hdHRyKCdkYXRhLW1vZGFsLWlkJywgaWQpXG4gICAgICB9XG5cblxuICAgICAgLy8gTG9hZCBkYXRhIGludG8gdGhlIG1vZGFsXG4gICAgICAvL1xuICAgICAgaWYgKHNldHRpbmcudXJsKSB7XG4gICAgICAgICQoJyMnICsgaWQpLmZpbmQoJy5tb2RhbC1ib2R5JykubG9hZChzZXR0aW5nLnVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vdG9kbzogYSBjb25maXJtZXIgJCh0aGlzKS5wZXJmZWN0U2Nyb2xsYmFyKCd1cGRhdGUnKTtcbiAgICAgICAgICBoYW5kbGVDYWxsYmFjayhpZClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGluZy5odG1sKSB7XG4gICAgICAgICQoJyMnICsgaWQpLmZpbmQoJy5tb2RhbC1ib2R5JykuaHRtbChzZXR0aW5nLmh0bWwpXG4gICAgICAgIGhhbmRsZUNhbGxiYWNrKGlkKVxuICAgICAgfSBlbHNlIGlmIChzZXR0aW5nLnRhcmdldCkge1xuICAgICAgICAkKCcjJyArIGlkKS5maW5kKCcubW9kYWwtYm9keScpLmh0bWwoJChzZXR0aW5nLnRhcmdldCkuaHRtbCgpKVxuICAgICAgICBoYW5kbGVDYWxsYmFjayhpZClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0oalF1ZXJ5KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3NlYXJjaC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI2LzA5LzIwMjAgMTg6MThcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNzZWFyY2gnLCBmdW5jdGlvbiAoZSkge1xuXG4gIGNvbnN0IGtleXdvcmQgPSAkKHRoaXMpLnZhbCgpXG4gIGNvbnN0IHNlYXJjaF9yZXBvbnNlX2V0dWRpYW50ID0gJCgnI3NlYXJjaF9yZXBvbnNlX2V0dWRpYW50JylcbiAgY29uc3Qgc2VhcmNoX3JlcG9uc2VfcGVyc29ubmVsID0gJCgnI3NlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbCcpXG4gIGNvbnN0IHNlYXJjaF9yZXBvbnNlX2F1dHJlID0gJCgnI3NlYXJjaF9yZXBvbnNlX2F1dHJlJylcblxuICBpZiAoa2V5d29yZC5sZW5ndGggPiAyKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgncmVjaGVyY2hlJywge2tleXdvcmQ6IGtleXdvcmR9KSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBsZXQgaHRtbCA9ICcnXG4gICAgICAgIGlmIChkYXRhLmV0dWRpYW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgalF1ZXJ5LmVhY2goZGF0YS5ldHVkaWFudHMsIGZ1bmN0aW9uIChpbmRleCwgZXR1ZGlhbnQpIHtcbiAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxhIGNsYXNzPVwibWVkaWFcIiBocmVmPVwiJyArIFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfcHJvZmlsJywge1xuICAgICAgICAgICAgICB0eXBlOiAnZXR1ZGlhbnQnLFxuICAgICAgICAgICAgICBzbHVnOiBldHVkaWFudC5zbHVnXG4gICAgICAgICAgICB9KSArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cXG4nXG4gICAgICAgICAgICBpZiAoZXR1ZGlhbnQucGhvdG8gPT09ICdub2ltYWdlLnBuZycgfHwgZXR1ZGlhbnQucGhvdG8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICBodG1sID0gaHRtbCArICc8ZGl2IGNsYXNzPVwiYXZhdGFyLWNpcmNsZS1zbVwiPlxcbicgK1xuICAgICAgICAgICAgICAgICcgICAgPHNwYW4gY2xhc3M9XCJpbml0aWFsc1wiPicgKyBldHVkaWFudC5hdmF0YXJJbml0aWFsZXMgKyAnPC9zcGFuPlxcbicgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBodG1sID0gaHRtbCArICc8aW1nIGNsYXNzPVwiYXZhdGFyIGF2YXRhci1zbVwiIHNyYz1cIicgKyBkYXRhLmJhc2VwYXRoICsgJ2V0dWRpYW50cy8nICsgZXR1ZGlhbnQucGhvdG8gKyAnXCIgYWx0PVwiUGhvdG8gZGUgcHJvZmlsIGRlICcgKyBldHVkaWFudC5kaXNwbGF5UHIgKyAnXCI+XFxuJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPicgKyBldHVkaWFudC5kaXNwbGF5UHIgKyAnICgnICsgZXR1ZGlhbnQuc2VtZXN0cmUgKyAnKTwvc3Ryb25nPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZSBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+JyArIGV0dWRpYW50Lmdyb3VwZXMgKyAnPC90aW1lPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2E+J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPlBhcyBkZSByw6lzdWx0YXQgcG91ciB2b3RyZSByZWNoZXJjaGUgPHN0cm9uZz5cIicgKyBrZXl3b3JkICsgJ1wiPC9zdHJvbmc+PC9kaXY+J1xuICAgICAgICB9XG5cbiAgICAgICAgc2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQuZW1wdHkoKS5hcHBlbmQoaHRtbClcblxuICAgICAgICBodG1sID0gJydcbiAgICAgICAgaWYgKGRhdGEucGVyc29ubmVscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgalF1ZXJ5LmVhY2goZGF0YS5wZXJzb25uZWxzLCBmdW5jdGlvbiAoaW5kZXgsIHBlcnNvbm5lbCkge1xuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGEgY2xhc3M9XCJtZWRpYSBpdGVtcy1jZW50ZXJcIiBocmVmPVwiJyArIFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfcHJvZmlsJywge1xuICAgICAgICAgICAgICB0eXBlOiAncGVyc29ubmVsJyxcbiAgICAgICAgICAgICAgc2x1ZzogcGVyc29ubmVsLnNsdWdcbiAgICAgICAgICAgIH0pICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiPlxcbidcbiAgICAgICAgICAgIGlmIChwZXJzb25uZWwucGhvdG8gPT09ICdub2ltYWdlLnBuZycgfHwgcGVyc29ubmVsLnBob3RvID09IG51bGwpIHtcbiAgICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGRpdiBjbGFzcz1cImF2YXRhci1jaXJjbGUtc21cIj5cXG4nICtcbiAgICAgICAgICAgICAgICAnICAgIDxzcGFuIGNsYXNzPVwiaW5pdGlhbHNcIj4nICsgcGVyc29ubmVsLmF2YXRhckluaXRpYWxlcyArICc8L3NwYW4+XFxuJyArXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxpbWcgY2xhc3M9XCJhdmF0YXIgYXZhdGFyLXNtXCIgc3JjPVwiJyArIGRhdGEuYmFzZXBhdGggKyAncGVyc29ubmVscy8nICsgcGVyc29ubmVsLnBob3RvICsgJ1wiIGFsdD1cIlBob3RvIGRlIHByb2ZpbCBkZSAnICsgcGVyc29ubmVsLmRpc3BsYXlQciArICdcIj5cXG4nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICcgICAgICAgICAgICAgICAgICAgICAgICA8cD4nICsgcGVyc29ubmVsLmRpc3BsYXlQciArICc8L3A+XFxuJyArXG4gICAgICAgICAgICAgICc8L2E+J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPlBhcyBkZSByw6lzdWx0YXQgcG91ciB2b3RyZSByZWNoZXJjaGUgPHN0cm9uZz5cIicgKyBrZXl3b3JkICsgJ1wiPC9zdHJvbmc+PC9kaXY+J1xuICAgICAgICB9XG4gICAgICAgIHNlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbC5lbXB0eSgpLmFwcGVuZChodG1sKVxuXG4gICAgICAgIGh0bWwgPSAnJ1xuICAgICAgICBpZiAoZGF0YS5hdXRyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGpRdWVyeS5lYWNoKGRhdGEuYXV0cmVzLCBmdW5jdGlvbiAoaW5kZXgsIGF1dHJlKSB7XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICc8YSBjbGFzcz1cIm1lZGlhIGl0ZW1zLWNlbnRlclwiIGhyZWY9XCJcIj5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXIgYXZhdGFyLXNtXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9hdmF0YXIvMS5qcGdcIiBhbHQ9XCIuLi5cIj5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxwPicgKyBhdXRyZSArICc8L3A+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvYT4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+UGFzIGRlIHLDqXN1bHRhdCBwb3VyIHZvdHJlIHJlY2hlcmNoZSA8c3Ryb25nPlwiJyArIGtleXdvcmQgKyAnXCI8L3N0cm9uZz48L2Rpdj4nXG4gICAgICAgIH1cbiAgICAgICAgc2VhcmNoX3JlcG9uc2VfYXV0cmUuZW1wdHkoKS5hcHBlbmQoaHRtbClcbiAgICAgIH1cbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCI+U2Fpc2lyIGF1IG1vaW5zIDMgY2FyYWN0w6hyZXM8L2Rpdj4nXG4gICAgc2VhcmNoX3JlcG9uc2VfYXV0cmUuZW1wdHkoKS5hcHBlbmQoaHRtbClcbiAgICBzZWFyY2hfcmVwb25zZV9wZXJzb25uZWwuZW1wdHkoKS5hcHBlbmQoaHRtbClcbiAgICBzZWFyY2hfcmVwb25zZV9ldHVkaWFudC5lbXB0eSgpLmFwcGVuZChodG1sKVxuICB9XG59KVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE2LzEwLzIwMjAgMTQ6NTRcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmxldCAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3Qucm93KFwiI2xpZ25lX1wiK2lkKS5yZW1vdmUoKS5kcmF3KCk7ID08IGRhdGF0dGFibGUgdG9kbzogcmVtb3ZlIGxpZ25lIHNpIGRhdGF0YWJsZSA/PyBwcm9ibMOobWUgZGFucyBhZG0+cGVyc29ubmVsXG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2UgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAndGV4dGFyZWEnKSB7XG4gICAgaHRtbCA9IGdlbmVyZVRleHRBcmVhKCQodGhpcykpXG4gIH0gZWxzZSB7XG4gICAgaHRtbCA9IGdlbmVyZUlucHV0KCQodGhpcykpXG4gIH1cbiAgJCh0aGlzKS5yZXBsYWNlV2l0aChodG1sKVxuICAkKCcjbXllZGl0LWlucHV0JykuZm9jdXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNteWVkaXQtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDI3KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICAgIEVkaXRPbkxpbmUgPSBmYWxzZVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlVGV4dEFyZWEgKCRvYmopIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gdHJ1ZVxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI1XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm15ZWRpdC1pbnB1dFwiPicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnPC90ZXh0YXJlYT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG5cbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCIgdmFsdWU9XCInICsgJG9iai5odG1sKCkudHJpbSgpICsgJ1wiID5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3ZhbGlkYXRvci1iczQuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyOC8xMS8yMDE5IDE5OjQwXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gVkFMSURBVE9SIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBnZXRWYWx1ZSgkZWwpIHtcbiAgICByZXR1cm4gJGVsLmlzKCdbdHlwZT1cImNoZWNrYm94XCJdJykgPyAkZWwucHJvcCgnY2hlY2tlZCcpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgJGVsLmlzKCdbdHlwZT1cInJhZGlvXCJdJykgICAgPyAhISQoJ1tuYW1lPVwiJyArICRlbC5hdHRyKCduYW1lJykgKyAnXCJdOmNoZWNrZWQnKS5sZW5ndGggOlxuICAgICAgICAgICAkZWwuaXMoJ3NlbGVjdFttdWx0aXBsZV0nKSAgPyAoJGVsLnZhbCgpIHx8IFtdKS5sZW5ndGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVsLnZhbCgpXG4gIH1cblxuICB2YXIgVmFsaWRhdG9yID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgICAgPSBvcHRpb25zXG4gICAgdGhpcy52YWxpZGF0b3JzID0gJC5leHRlbmQoe30sIFZhbGlkYXRvci5WQUxJREFUT1JTLCBvcHRpb25zLmN1c3RvbSlcbiAgICB0aGlzLiRlbGVtZW50ICAgPSAkKGVsZW1lbnQpXG4gICAgdGhpcy4kYnRuICAgICAgID0gJCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcignW2Zvcm09XCInICsgdGhpcy4kZWxlbWVudC5hdHRyKCdpZCcpICsgJ1wiXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuJGVsZW1lbnQuZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKSlcblxuICAgIHRoaXMudXBkYXRlKClcblxuICAgIHRoaXMuJGVsZW1lbnQub24oJ2lucHV0LmJzLnZhbGlkYXRvciBjaGFuZ2UuYnMudmFsaWRhdG9yIGZvY3Vzb3V0LmJzLnZhbGlkYXRvcicsICQucHJveHkodGhpcy5vbklucHV0LCB0aGlzKSlcbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdzdWJtaXQuYnMudmFsaWRhdG9yJywgJC5wcm94eSh0aGlzLm9uU3VibWl0LCB0aGlzKSlcbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdyZXNldC5icy52YWxpZGF0b3InLCAkLnByb3h5KHRoaXMucmVzZXQsIHRoaXMpKVxuXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS1tYXRjaF0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgPSAkKHRoaXMpXG4gICAgICB2YXIgdGFyZ2V0ID0gJHRoaXMuYXR0cignZGF0YS1tYXRjaCcpXG5cbiAgICAgICQodGFyZ2V0KS5vbignaW5wdXQuYnMudmFsaWRhdG9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZ2V0VmFsdWUoJHRoaXMpICYmICR0aGlzLnRyaWdnZXIoJ2lucHV0LmJzLnZhbGlkYXRvcicpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBydW4gdmFsaWRhdG9ycyBmb3IgZmllbGRzIHdpdGggdmFsdWVzLCBidXQgZG9uJ3QgY2xvYmJlciBzZXJ2ZXItc2lkZSBlcnJvcnNcbiAgICB0aGlzLiRpbnB1dHMuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRWYWx1ZSgkKHRoaXMpKSAmJiAhJCh0aGlzKS5jbG9zZXN0KCcuaGFzLWVycm9yJykubGVuZ3RoXG4gICAgfSkudHJpZ2dlcignZm9jdXNvdXQnKVxuXG4gICAgdGhpcy4kZWxlbWVudC5hdHRyKCdub3ZhbGlkYXRlJywgdHJ1ZSkgLy8gZGlzYWJsZSBhdXRvbWF0aWMgbmF0aXZlIHZhbGlkYXRpb25cbiAgfVxuXG4gIFZhbGlkYXRvci5WRVJTSU9OID0gJzAuMTEuOSdcblxuICBWYWxpZGF0b3IuSU5QVVRfU0VMRUNUT1IgPSAnOmlucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSwgW3R5cGU9XCJzdWJtaXRcIl0sIFt0eXBlPVwicmVzZXRcIl0sIGJ1dHRvbiknXG5cbiAgVmFsaWRhdG9yLkZPQ1VTX09GRlNFVCA9IDIwXG5cbiAgVmFsaWRhdG9yLkRFRkFVTFRTID0ge1xuICAgIGRlbGF5OiA1MDAsXG4gICAgaHRtbDogZmFsc2UsXG4gICAgZGlzYWJsZTogdHJ1ZSxcbiAgICBmb2N1czogdHJ1ZSxcbiAgICBjdXN0b206IHt9LFxuICAgIGVycm9yczoge1xuICAgICAgbWF0Y2g6ICdEb2VzIG5vdCBtYXRjaCcsXG4gICAgICBtaW5sZW5ndGg6ICdOb3QgbG9uZyBlbm91Z2gnXG4gICAgfSxcbiAgICBmZWVkYmFjazoge1xuICAgICAgc3VjY2VzczogJ2dseXBoaWNvbi1vaycsXG4gICAgICBlcnJvcjogJ2dseXBoaWNvbi1yZW1vdmUnXG4gICAgfVxuICB9XG5cbiAgVmFsaWRhdG9yLlZBTElEQVRPUlMgPSB7XG4gICAgJ25hdGl2ZSc6IGZ1bmN0aW9uICgkZWwpIHtcbiAgICAgIHZhciBlbCA9ICRlbFswXVxuICAgICAgaWYgKGVsLmNoZWNrVmFsaWRpdHkpIHtcbiAgICAgICAgcmV0dXJuICFlbC5jaGVja1ZhbGlkaXR5KCkgJiYgIWVsLnZhbGlkaXR5LnZhbGlkICYmIChlbC52YWxpZGF0aW9uTWVzc2FnZSB8fCBcImVycm9yIVwiKVxuICAgICAgfVxuICAgIH0sXG4gICAgJ21hdGNoJzogZnVuY3Rpb24gKCRlbCkge1xuICAgICAgdmFyIHRhcmdldCA9ICRlbC5hdHRyKCdkYXRhLW1hdGNoJylcbiAgICAgIHJldHVybiAkZWwudmFsKCkgIT09ICQodGFyZ2V0KS52YWwoKSAmJiBWYWxpZGF0b3IuREVGQVVMVFMuZXJyb3JzLm1hdGNoXG4gICAgfSxcbiAgICAnbWlubGVuZ3RoJzogZnVuY3Rpb24gKCRlbCkge1xuICAgICAgdmFyIG1pbmxlbmd0aCA9ICRlbC5hdHRyKCdkYXRhLW1pbmxlbmd0aCcpXG4gICAgICByZXR1cm4gJGVsLnZhbCgpLmxlbmd0aCA8IG1pbmxlbmd0aCAmJiBWYWxpZGF0b3IuREVGQVVMVFMuZXJyb3JzLm1pbmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuXG4gICAgdGhpcy4kaW5wdXRzID0gdGhpcy4kZWxlbWVudC5maW5kKFZhbGlkYXRvci5JTlBVVF9TRUxFQ1RPUilcbiAgICAgIC5hZGQodGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS12YWxpZGF0ZT1cInRydWVcIl0nKSlcbiAgICAgIC5ub3QodGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS12YWxpZGF0ZT1cImZhbHNlXCJdJylcbiAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkgeyBzZWxmLmNsZWFyRXJyb3JzKCQodGhpcykpIH0pXG4gICAgICApXG5cbiAgICB0aGlzLnRvZ2dsZVN1Ym1pdCgpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5vbklucHV0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzXG4gICAgdmFyICRlbCAgICAgICAgID0gJChlLnRhcmdldClcbiAgICB2YXIgZGVmZXJFcnJvcnMgPSBlLnR5cGUgIT09ICdmb2N1c291dCdcblxuICAgIGlmICghdGhpcy4kaW5wdXRzLmlzKCRlbCkpIHJldHVyblxuXG4gICAgdGhpcy52YWxpZGF0ZUlucHV0KCRlbCwgZGVmZXJFcnJvcnMpLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi50b2dnbGVTdWJtaXQoKVxuICAgIH0pXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlSW5wdXQgPSBmdW5jdGlvbiAoJGVsLCBkZWZlckVycm9ycykge1xuICAgIHZhciB2YWx1ZSAgICAgID0gZ2V0VmFsdWUoJGVsKVxuICAgIHZhciBwcmV2RXJyb3JzID0gJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5lcnJvcnMnKVxuXG4gICAgaWYgKCRlbC5pcygnW3R5cGU9XCJyYWRpb1wiXScpKSAkZWwgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ2lucHV0W25hbWU9XCInICsgJGVsLmF0dHIoJ25hbWUnKSArICdcIl0nKVxuXG4gICAgdmFyIGUgPSAkLkV2ZW50KCd2YWxpZGF0ZS5icy52YWxpZGF0b3InLCB7cmVsYXRlZFRhcmdldDogJGVsWzBdfSlcbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSlcbiAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICB2YXIgc2VsZiA9IHRoaXNcblxuICAgIHJldHVybiB0aGlzLnJ1blZhbGlkYXRvcnMoJGVsKS5kb25lKGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgICAgICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZXJyb3JzJywgZXJyb3JzKVxuXG4gICAgICBlcnJvcnMubGVuZ3RoXG4gICAgICAgID8gZGVmZXJFcnJvcnMgPyBzZWxmLmRlZmVyKCRlbCwgc2VsZi5zaG93RXJyb3JzKSA6IHNlbGYuc2hvd0Vycm9ycygkZWwpXG4gICAgICAgIDogc2VsZi5jbGVhckVycm9ycygkZWwpXG5cbiAgICAgIGlmICghcHJldkVycm9ycyB8fCBlcnJvcnMudG9TdHJpbmcoKSAhPT0gcHJldkVycm9ycy50b1N0cmluZygpKSB7XG4gICAgICAgIGUgPSBlcnJvcnMubGVuZ3RoXG4gICAgICAgICAgPyAkLkV2ZW50KCdpbnZhbGlkLmJzLnZhbGlkYXRvcicsIHtyZWxhdGVkVGFyZ2V0OiAkZWxbMF0sIGRldGFpbDogZXJyb3JzfSlcbiAgICAgICAgICA6ICQuRXZlbnQoJ3ZhbGlkLmJzLnZhbGlkYXRvcicsIHtyZWxhdGVkVGFyZ2V0OiAkZWxbMF0sIGRldGFpbDogcHJldkVycm9yc30pXG5cbiAgICAgICAgc2VsZi4kZWxlbWVudC50cmlnZ2VyKGUpXG4gICAgICB9XG5cbiAgICAgIHNlbGYudG9nZ2xlU3VibWl0KClcblxuICAgICAgc2VsZi4kZWxlbWVudC50cmlnZ2VyKCQuRXZlbnQoJ3ZhbGlkYXRlZC5icy52YWxpZGF0b3InLCB7cmVsYXRlZFRhcmdldDogJGVsWzBdfSkpXG4gICAgfSlcbiAgfVxuXG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5ydW5WYWxpZGF0b3JzID0gZnVuY3Rpb24gKCRlbCkge1xuICAgIHZhciBlcnJvcnMgICA9IFtdXG4gICAgdmFyIGRlZmVycmVkID0gJC5EZWZlcnJlZCgpXG5cbiAgICAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmRlZmVycmVkJykgJiYgJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5kZWZlcnJlZCcpLnJlamVjdCgpXG4gICAgJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5kZWZlcnJlZCcsIGRlZmVycmVkKVxuXG4gICAgZnVuY3Rpb24gZ2V0VmFsaWRhdG9yU3BlY2lmaWNFcnJvcihrZXkpIHtcbiAgICAgIHJldHVybiAkZWwuYXR0cignZGF0YS0nICsga2V5ICsgJy1lcnJvcicpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmFsaWRpdHlTdGF0ZUVycm9yKCkge1xuICAgICAgdmFyIHZhbGlkaXR5ID0gJGVsWzBdLnZhbGlkaXR5XG4gICAgICByZXR1cm4gdmFsaWRpdHkudHlwZU1pc21hdGNoICAgID8gJGVsLmF0dHIoJ2RhdGEtdHlwZS1lcnJvcicpXG4gICAgICAgICAgIDogdmFsaWRpdHkucGF0dGVybk1pc21hdGNoID8gJGVsLmF0dHIoJ2RhdGEtcGF0dGVybi1lcnJvcicpXG4gICAgICAgICAgIDogdmFsaWRpdHkuc3RlcE1pc21hdGNoICAgID8gJGVsLmF0dHIoJ2RhdGEtc3RlcC1lcnJvcicpXG4gICAgICAgICAgIDogdmFsaWRpdHkucmFuZ2VPdmVyZmxvdyAgID8gJGVsLmF0dHIoJ2RhdGEtbWF4LWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS5yYW5nZVVuZGVyZmxvdyAgPyAkZWwuYXR0cignZGF0YS1taW4tZXJyb3InKVxuICAgICAgICAgICA6IHZhbGlkaXR5LnZhbHVlTWlzc2luZyAgICA/ICRlbC5hdHRyKCdkYXRhLXJlcXVpcmVkLWVycm9yJylcbiAgICAgICAgICAgOiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R2VuZXJpY0Vycm9yKCkge1xuICAgICAgcmV0dXJuICRlbC5hdHRyKCdkYXRhLWVycm9yJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFcnJvck1lc3NhZ2Uoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0VmFsaWRhdG9yU3BlY2lmaWNFcnJvcihrZXkpXG4gICAgICAgICAgfHwgZ2V0VmFsaWRpdHlTdGF0ZUVycm9yKClcbiAgICAgICAgICB8fCBnZXRHZW5lcmljRXJyb3IoKVxuICAgIH1cblxuICAgICQuZWFjaCh0aGlzLnZhbGlkYXRvcnMsICQucHJveHkoZnVuY3Rpb24gKGtleSwgdmFsaWRhdG9yKSB7XG4gICAgICB2YXIgZXJyb3IgPSBudWxsXG4gICAgICBpZiAoKGdldFZhbHVlKCRlbCkgfHwgJGVsLmF0dHIoJ3JlcXVpcmVkJykpICYmXG4gICAgICAgICAgKCRlbC5hdHRyKCdkYXRhLScgKyBrZXkpICE9PSB1bmRlZmluZWQgfHwga2V5ID09ICduYXRpdmUnKSAmJlxuICAgICAgICAgIChlcnJvciA9IHZhbGlkYXRvci5jYWxsKHRoaXMsICRlbCkpKSB7XG4gICAgICAgICBlcnJvciA9IGdldEVycm9yTWVzc2FnZShrZXkpIHx8IGVycm9yXG4gICAgICAgICF+ZXJyb3JzLmluZGV4T2YoZXJyb3IpICYmIGVycm9ycy5wdXNoKGVycm9yKVxuICAgICAgfVxuICAgIH0sIHRoaXMpKVxuXG4gICAgaWYgKCFlcnJvcnMubGVuZ3RoICYmIGdldFZhbHVlKCRlbCkgJiYgJGVsLmF0dHIoJ2RhdGEtcmVtb3RlJykpIHtcbiAgICAgIHRoaXMuZGVmZXIoJGVsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0ge31cbiAgICAgICAgZGF0YVskZWwuYXR0cignbmFtZScpXSA9IGdldFZhbHVlKCRlbClcbiAgICAgICAgJC5nZXQoJGVsLmF0dHIoJ2RhdGEtcmVtb3RlJyksIGRhdGEpXG4gICAgICAgICAgLmZhaWwoZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvcikgeyBlcnJvcnMucHVzaChnZXRFcnJvck1lc3NhZ2UoJ3JlbW90ZScpIHx8IGVycm9yKSB9KVxuICAgICAgICAgIC5hbHdheXMoZnVuY3Rpb24gKCkgeyBkZWZlcnJlZC5yZXNvbHZlKGVycm9ycyl9KVxuICAgICAgfSlcbiAgICB9IGVsc2UgZGVmZXJyZWQucmVzb2x2ZShlcnJvcnMpXG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuXG4gICAgJC53aGVuKHRoaXMuJGlucHV0cy5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgICByZXR1cm4gc2VsZi52YWxpZGF0ZUlucHV0KCQodGhpcyksIGZhbHNlKVxuICAgIH0pKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYudG9nZ2xlU3VibWl0KClcbiAgICAgIHNlbGYuZm9jdXNFcnJvcigpXG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmZvY3VzRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZm9jdXMpIHJldHVyblxuXG4gICAgdmFyICRpbnB1dCA9IHRoaXMuJGVsZW1lbnQuZmluZChcIi5oYXMtZXJyb3I6Zmlyc3QgOmlucHV0XCIpXG4gICAgaWYgKCRpbnB1dC5sZW5ndGggPT09IDApIHJldHVyblxuXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJGlucHV0Lm9mZnNldCgpLnRvcCAtIFZhbGlkYXRvci5GT0NVU19PRkZTRVR9LCAyNTApXG4gICAgJGlucHV0LmZvY3VzKClcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuc2hvd0Vycm9ycyA9IGZ1bmN0aW9uICgkZWwpIHtcbiAgICB2YXIgbWV0aG9kID0gdGhpcy5vcHRpb25zLmh0bWwgPyAnaHRtbCcgOiAndGV4dCdcbiAgICB2YXIgZXJyb3JzID0gJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5lcnJvcnMnKVxuICAgIHZhciAkZ3JvdXAgPSAkZWwuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKVxuICAgIHZhciAkYmxvY2sgPSAkZ3JvdXAuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuICAgIHZhciAkZmVlZGJhY2sgPSAkZ3JvdXAuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuXG4gICAgaWYgKCFlcnJvcnMubGVuZ3RoKSByZXR1cm5cblxuICAgICRlbC5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuXG4gICAgZXJyb3JzID0gJCgnPHVsLz4nKVxuICAgICAgLmFkZENsYXNzKCdsaXN0LXVuc3R5bGVkJylcbiAgICAgIC5hcHBlbmQoJC5tYXAoZXJyb3JzLCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuICQoJzxsaS8+JylbbWV0aG9kXShlcnJvcikgfSkpXG5cbiAgICAkYmxvY2suZGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcpID09PSB1bmRlZmluZWQgJiYgJGJsb2NrLmRhdGEoJ2JzLnZhbGlkYXRvci5vcmlnaW5hbENvbnRlbnQnLCAkYmxvY2suaHRtbCgpKVxuICAgICRibG9jay5lbXB0eSgpLmFwcGVuZChlcnJvcnMpXG4gICAgJGdyb3VwLmFkZENsYXNzKCdoYXMtZXJyb3IgaGFzLWRhbmdlcicpXG5cbiAgICAkZ3JvdXAuaGFzQ2xhc3MoJ2hhcy1mZWVkYmFjaycpXG4gICAgICAmJiAkZmVlZGJhY2sucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLnN1Y2Nlc3MpXG4gICAgICAmJiAkZmVlZGJhY2suYWRkQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLmVycm9yKVxuICAgICAgJiYgJGdyb3VwLnJlbW92ZUNsYXNzKCdoYXMtc3VjY2VzcycpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmNsZWFyRXJyb3JzID0gZnVuY3Rpb24gKCRlbCkge1xuICAgIHZhciAkZ3JvdXAgPSAkZWwuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKVxuICAgIHZhciAkYmxvY2sgPSAkZ3JvdXAuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuICAgIHZhciAkZmVlZGJhY2sgPSAkZ3JvdXAuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuXG4gICAgJGVsLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG5cbiAgICAkYmxvY2suaHRtbCgkYmxvY2suZGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcpKVxuICAgICRncm91cC5yZW1vdmVDbGFzcygnaGFzLWVycm9yIGhhcy1kYW5nZXIgaGFzLXN1Y2Nlc3MnKVxuXG4gICAgJGdyb3VwLmhhc0NsYXNzKCdoYXMtZmVlZGJhY2snKVxuICAgICAgJiYgJGZlZWRiYWNrLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5lcnJvcilcbiAgICAgICYmICRmZWVkYmFjay5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suc3VjY2VzcylcbiAgICAgICYmIGdldFZhbHVlKCRlbClcbiAgICAgICYmICRmZWVkYmFjay5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suc3VjY2VzcylcbiAgICAgICYmICRncm91cC5hZGRDbGFzcygnaGFzLXN1Y2Nlc3MnKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5oYXNFcnJvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZmllbGRFcnJvcnMoKSB7XG4gICAgICByZXR1cm4gISEoJCh0aGlzKS5kYXRhKCdicy52YWxpZGF0b3IuZXJyb3JzJykgfHwgW10pLmxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiAhIXRoaXMuJGlucHV0cy5maWx0ZXIoZmllbGRFcnJvcnMpLmxlbmd0aFxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5pc0luY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZmllbGRJbmNvbXBsZXRlKCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0VmFsdWUoJCh0aGlzKSlcbiAgICAgIHJldHVybiAhKHR5cGVvZiB2YWx1ZSA9PSBcInN0cmluZ1wiID8gJC50cmltKHZhbHVlKSA6IHZhbHVlKVxuICAgIH1cblxuICAgIHJldHVybiAhIXRoaXMuJGlucHV0cy5maWx0ZXIoJ1tyZXF1aXJlZF0nKS5maWx0ZXIoZmllbGRJbmNvbXBsZXRlKS5sZW5ndGhcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMudmFsaWRhdGUoKVxuICAgIGlmICh0aGlzLmlzSW5jb21wbGV0ZSgpIHx8IHRoaXMuaGFzRXJyb3JzKCkpIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS50b2dnbGVTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGlzYWJsZSkgcmV0dXJuXG4gICAgdGhpcy4kYnRuLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHRoaXMuaXNJbmNvbXBsZXRlKCkgfHwgdGhpcy5oYXNFcnJvcnMoKSlcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuZGVmZXIgPSBmdW5jdGlvbiAoJGVsLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gJC5wcm94eShjYWxsYmFjaywgdGhpcywgJGVsKVxuICAgIGlmICghdGhpcy5vcHRpb25zLmRlbGF5KSByZXR1cm4gY2FsbGJhY2soKVxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci50aW1lb3V0JykpXG4gICAgJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci50aW1lb3V0Jywgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIHRoaXMub3B0aW9ucy5kZWxheSkpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5lcnJvcilcbiAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suc3VjY2VzcylcblxuICAgIHRoaXMuJGlucHV0c1xuICAgICAgLnJlbW92ZURhdGEoWydicy52YWxpZGF0b3IuZXJyb3JzJywgJ2JzLnZhbGlkYXRvci5kZWZlcnJlZCddKVxuICAgICAgLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJylcbiAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgICB2YXIgdGltZW91dCA9ICR0aGlzLmRhdGEoJ2JzLnZhbGlkYXRvci50aW1lb3V0JylcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KSAmJiAkdGhpcy5yZW1vdmVEYXRhKCdicy52YWxpZGF0b3IudGltZW91dCcpXG4gICAgICB9KVxuXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG4gICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgICAgdmFyIG9yaWdpbmFsQ29udGVudCA9ICR0aGlzLmRhdGEoJ2JzLnZhbGlkYXRvci5vcmlnaW5hbENvbnRlbnQnKVxuXG4gICAgICAgICR0aGlzXG4gICAgICAgICAgLnJlbW92ZURhdGEoJ2JzLnZhbGlkYXRvci5vcmlnaW5hbENvbnRlbnQnKVxuICAgICAgICAgIC5odG1sKG9yaWdpbmFsQ29udGVudClcbiAgICAgIH0pXG5cbiAgICB0aGlzLiRidG4ucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJylcblxuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnLmhhcy1lcnJvciwgLmhhcy1kYW5nZXIsIC5oYXMtc3VjY2VzcycpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3IgaGFzLWRhbmdlciBoYXMtc3VjY2VzcycpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzZXQoKVxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLnJlbW92ZUF0dHIoJ25vdmFsaWRhdGUnKVxuICAgICAgLnJlbW92ZURhdGEoJ2JzLnZhbGlkYXRvcicpXG4gICAgICAub2ZmKCcuYnMudmFsaWRhdG9yJylcblxuICAgIHRoaXMuJGlucHV0c1xuICAgICAgLm9mZignLmJzLnZhbGlkYXRvcicpXG5cbiAgICB0aGlzLm9wdGlvbnMgICAgPSBudWxsXG4gICAgdGhpcy52YWxpZGF0b3JzID0gbnVsbFxuICAgIHRoaXMuJGVsZW1lbnQgICA9IG51bGxcbiAgICB0aGlzLiRidG4gICAgICAgPSBudWxsXG4gICAgdGhpcy4kaW5wdXRzICAgID0gbnVsbFxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIFZBTElEQVRPUiBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIGZ1bmN0aW9uIFBsdWdpbihvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgVmFsaWRhdG9yLkRFRkFVTFRTLCAkdGhpcy5kYXRhKCksIHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy52YWxpZGF0b3InKVxuXG4gICAgICBpZiAoIWRhdGEgJiYgb3B0aW9uID09ICdkZXN0cm95JykgcmV0dXJuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLnZhbGlkYXRvcicsIChkYXRhID0gbmV3IFZhbGlkYXRvcih0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4udmFsaWRhdG9yXG5cbiAgJC5mbi52YWxpZGF0b3IgICAgICAgICAgICAgPSBQbHVnaW5cbiAgJC5mbi52YWxpZGF0b3IuQ29uc3RydWN0b3IgPSBWYWxpZGF0b3JcblxuXG4gIC8vIFZBTElEQVRPUiBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLnZhbGlkYXRvci5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4udmFsaWRhdG9yID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gVkFMSURBVE9SIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09PT09PVxuXG4gICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCdmb3JtW2RhdGEtdG9nZ2xlPVwidmFsaWRhdG9yXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGZvcm0gPSAkKHRoaXMpXG4gICAgICBQbHVnaW4uY2FsbCgkZm9ybSwgJGZvcm0uZGF0YSgpKVxuICAgIH0pXG4gIH0pXG5cbn0oalF1ZXJ5KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy92ZW5kb3IvYm9vdHN0cmFwLWRhdGVwaWNrZXIvanMvYm9vdHN0cmFwLWRhdGVwaWNrZXIubWluLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTcvMDgvMjAyMCAxNDoyMFxuXG4vKiFcbiAqIERhdGVwaWNrZXIgZm9yIEJvb3RzdHJhcCB2MS44LjAgKGh0dHBzOi8vZ2l0aHViLmNvbS91eHNvbHV0aW9ucy9ib290c3RyYXAtZGF0ZXBpY2tlcilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgdjIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKVxuICovXG5cbiFmdW5jdGlvbihhKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxhKTphKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP3JlcXVpcmUoXCJqcXVlcnlcIik6alF1ZXJ5KX0oZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKCl7cmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KERhdGUsYXJndW1lbnRzKSl9ZnVuY3Rpb24gZCgpe3ZhciBhPW5ldyBEYXRlO3JldHVybiBjKGEuZ2V0RnVsbFllYXIoKSxhLmdldE1vbnRoKCksYS5nZXREYXRlKCkpfWZ1bmN0aW9uIGUoYSxiKXtyZXR1cm4gYS5nZXRVVENGdWxsWWVhcigpPT09Yi5nZXRVVENGdWxsWWVhcigpJiZhLmdldFVUQ01vbnRoKCk9PT1iLmdldFVUQ01vbnRoKCkmJmEuZ2V0VVRDRGF0ZSgpPT09Yi5nZXRVVENEYXRlKCl9ZnVuY3Rpb24gZihjLGQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBkIT09YiYmYS5mbi5kYXRlcGlja2VyLmRlcHJlY2F0ZWQoZCksdGhpc1tjXS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGcoYSl7cmV0dXJuIGEmJiFpc05hTihhLmdldFRpbWUoKSl9ZnVuY3Rpb24gaChiLGMpe2Z1bmN0aW9uIGQoYSxiKXtyZXR1cm4gYi50b0xvd2VyQ2FzZSgpfXZhciBlLGY9YShiKS5kYXRhKCksZz17fSxoPW5ldyBSZWdFeHAoXCJeXCIrYy50b0xvd2VyQ2FzZSgpK1wiKFtBLVpdKVwiKTtjPW5ldyBSZWdFeHAoXCJeXCIrYy50b0xvd2VyQ2FzZSgpKTtmb3IodmFyIGkgaW4gZiljLnRlc3QoaSkmJihlPWkucmVwbGFjZShoLGQpLGdbZV09ZltpXSk7cmV0dXJuIGd9ZnVuY3Rpb24gaShiKXt2YXIgYz17fTtpZihxW2JdfHwoYj1iLnNwbGl0KFwiLVwiKVswXSxxW2JdKSl7dmFyIGQ9cVtiXTtyZXR1cm4gYS5lYWNoKHAsZnVuY3Rpb24oYSxiKXtiIGluIGQmJihjW2JdPWRbYl0pfSksY319dmFyIGo9ZnVuY3Rpb24oKXt2YXIgYj17Z2V0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnNsaWNlKGEpWzBdfSxjb250YWluczpmdW5jdGlvbihhKXtmb3IodmFyIGI9YSYmYS52YWx1ZU9mKCksYz0wLGQ9dGhpcy5sZW5ndGg7YzxkO2MrKylpZigwPD10aGlzW2NdLnZhbHVlT2YoKS1iJiZ0aGlzW2NdLnZhbHVlT2YoKS1iPDg2NGU1KXJldHVybiBjO3JldHVybi0xfSxyZW1vdmU6ZnVuY3Rpb24oYSl7dGhpcy5zcGxpY2UoYSwxKX0scmVwbGFjZTpmdW5jdGlvbihiKXtiJiYoYS5pc0FycmF5KGIpfHwoYj1bYl0pLHRoaXMuY2xlYXIoKSx0aGlzLnB1c2guYXBwbHkodGhpcyxiKSl9LGNsZWFyOmZ1bmN0aW9uKCl7dGhpcy5sZW5ndGg9MH0sY29weTpmdW5jdGlvbigpe3ZhciBhPW5ldyBqO3JldHVybiBhLnJlcGxhY2UodGhpcyksYX19O3JldHVybiBmdW5jdGlvbigpe3ZhciBjPVtdO3JldHVybiBjLnB1c2guYXBwbHkoYyxhcmd1bWVudHMpLGEuZXh0ZW5kKGMsYiksY319KCksaz1mdW5jdGlvbihiLGMpe2EuZGF0YShiLFwiZGF0ZXBpY2tlclwiLHRoaXMpLHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyhjKSx0aGlzLmRhdGVzPW5ldyBqLHRoaXMudmlld0RhdGU9dGhpcy5vLmRlZmF1bHRWaWV3RGF0ZSx0aGlzLmZvY3VzRGF0ZT1udWxsLHRoaXMuZWxlbWVudD1hKGIpLHRoaXMuaXNJbnB1dD10aGlzLmVsZW1lbnQuaXMoXCJpbnB1dFwiKSx0aGlzLmlucHV0RmllbGQ9dGhpcy5pc0lucHV0P3RoaXMuZWxlbWVudDp0aGlzLmVsZW1lbnQuZmluZChcImlucHV0XCIpLHRoaXMuY29tcG9uZW50PSEhdGhpcy5lbGVtZW50Lmhhc0NsYXNzKFwiZGF0ZVwiKSYmdGhpcy5lbGVtZW50LmZpbmQoXCIuYWRkLW9uLCAuaW5wdXQtZ3JvdXAtYWRkb24sIC5idG5cIiksdGhpcy5jb21wb25lbnQmJjA9PT10aGlzLmNvbXBvbmVudC5sZW5ndGgmJih0aGlzLmNvbXBvbmVudD0hMSksdGhpcy5pc0lubGluZT0hdGhpcy5jb21wb25lbnQmJnRoaXMuZWxlbWVudC5pcyhcImRpdlwiKSx0aGlzLnBpY2tlcj1hKHIudGVtcGxhdGUpLHRoaXMuX2NoZWNrX3RlbXBsYXRlKHRoaXMuby50ZW1wbGF0ZXMubGVmdEFycm93KSYmdGhpcy5waWNrZXIuZmluZChcIi5wcmV2XCIpLmh0bWwodGhpcy5vLnRlbXBsYXRlcy5sZWZ0QXJyb3cpLHRoaXMuX2NoZWNrX3RlbXBsYXRlKHRoaXMuby50ZW1wbGF0ZXMucmlnaHRBcnJvdykmJnRoaXMucGlja2VyLmZpbmQoXCIubmV4dFwiKS5odG1sKHRoaXMuby50ZW1wbGF0ZXMucmlnaHRBcnJvdyksdGhpcy5fYnVpbGRFdmVudHMoKSx0aGlzLl9hdHRhY2hFdmVudHMoKSx0aGlzLmlzSW5saW5lP3RoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1pbmxpbmVcIikuYXBwZW5kVG8odGhpcy5lbGVtZW50KTp0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItZHJvcGRvd24gZHJvcGRvd24tbWVudVwiKSx0aGlzLm8ucnRsJiZ0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItcnRsXCIpLHRoaXMuby5jYWxlbmRhcldlZWtzJiZ0aGlzLnBpY2tlci5maW5kKFwiLmRhdGVwaWNrZXItZGF5cyAuZGF0ZXBpY2tlci1zd2l0Y2gsIHRoZWFkIC5kYXRlcGlja2VyLXRpdGxlLCB0Zm9vdCAudG9kYXksIHRmb290IC5jbGVhclwiKS5hdHRyKFwiY29sc3BhblwiLGZ1bmN0aW9uKGEsYil7cmV0dXJuIE51bWJlcihiKSsxfSksdGhpcy5fcHJvY2Vzc19vcHRpb25zKHtzdGFydERhdGU6dGhpcy5fby5zdGFydERhdGUsZW5kRGF0ZTp0aGlzLl9vLmVuZERhdGUsZGF5c09mV2Vla0Rpc2FibGVkOnRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQsZGF5c09mV2Vla0hpZ2hsaWdodGVkOnRoaXMuby5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQsZGF0ZXNEaXNhYmxlZDp0aGlzLm8uZGF0ZXNEaXNhYmxlZH0pLHRoaXMuX2FsbG93X3VwZGF0ZT0hMSx0aGlzLnNldFZpZXdNb2RlKHRoaXMuby5zdGFydFZpZXcpLHRoaXMuX2FsbG93X3VwZGF0ZT0hMCx0aGlzLmZpbGxEb3coKSx0aGlzLmZpbGxNb250aHMoKSx0aGlzLnVwZGF0ZSgpLHRoaXMuaXNJbmxpbmUmJnRoaXMuc2hvdygpfTtrLnByb3RvdHlwZT17Y29uc3RydWN0b3I6ayxfcmVzb2x2ZVZpZXdOYW1lOmZ1bmN0aW9uKGIpe3JldHVybiBhLmVhY2goci52aWV3TW9kZXMsZnVuY3Rpb24oYyxkKXtpZihiPT09Y3x8YS5pbkFycmF5KGIsZC5uYW1lcykhPT0tMSlyZXR1cm4gYj1jLCExfSksYn0sX3Jlc29sdmVEYXlzT2ZXZWVrOmZ1bmN0aW9uKGIpe3JldHVybiBhLmlzQXJyYXkoYil8fChiPWIuc3BsaXQoL1ssXFxzXSovKSksYS5tYXAoYixOdW1iZXIpfSxfY2hlY2tfdGVtcGxhdGU6ZnVuY3Rpb24oYyl7dHJ5e2lmKGM9PT1ifHxcIlwiPT09YylyZXR1cm4hMTtpZigoYy5tYXRjaCgvWzw+XS9nKXx8W10pLmxlbmd0aDw9MClyZXR1cm4hMDt2YXIgZD1hKGMpO3JldHVybiBkLmxlbmd0aD4wfWNhdGNoKGEpe3JldHVybiExfX0sX3Byb2Nlc3Nfb3B0aW9uczpmdW5jdGlvbihiKXt0aGlzLl9vPWEuZXh0ZW5kKHt9LHRoaXMuX28sYik7dmFyIGU9dGhpcy5vPWEuZXh0ZW5kKHt9LHRoaXMuX28pLGY9ZS5sYW5ndWFnZTtxW2ZdfHwoZj1mLnNwbGl0KFwiLVwiKVswXSxxW2ZdfHwoZj1vLmxhbmd1YWdlKSksZS5sYW5ndWFnZT1mLGUuc3RhcnRWaWV3PXRoaXMuX3Jlc29sdmVWaWV3TmFtZShlLnN0YXJ0VmlldyksZS5taW5WaWV3TW9kZT10aGlzLl9yZXNvbHZlVmlld05hbWUoZS5taW5WaWV3TW9kZSksZS5tYXhWaWV3TW9kZT10aGlzLl9yZXNvbHZlVmlld05hbWUoZS5tYXhWaWV3TW9kZSksZS5zdGFydFZpZXc9TWF0aC5tYXgodGhpcy5vLm1pblZpZXdNb2RlLE1hdGgubWluKHRoaXMuby5tYXhWaWV3TW9kZSxlLnN0YXJ0VmlldykpLGUubXVsdGlkYXRlIT09ITAmJihlLm11bHRpZGF0ZT1OdW1iZXIoZS5tdWx0aWRhdGUpfHwhMSxlLm11bHRpZGF0ZSE9PSExJiYoZS5tdWx0aWRhdGU9TWF0aC5tYXgoMCxlLm11bHRpZGF0ZSkpKSxlLm11bHRpZGF0ZVNlcGFyYXRvcj1TdHJpbmcoZS5tdWx0aWRhdGVTZXBhcmF0b3IpLGUud2Vla1N0YXJ0JT03LGUud2Vla0VuZD0oZS53ZWVrU3RhcnQrNiklNzt2YXIgZz1yLnBhcnNlRm9ybWF0KGUuZm9ybWF0KTtlLnN0YXJ0RGF0ZSE9PS0oMS8wKSYmKGUuc3RhcnREYXRlP2Uuc3RhcnREYXRlIGluc3RhbmNlb2YgRGF0ZT9lLnN0YXJ0RGF0ZT10aGlzLl9sb2NhbF90b191dGModGhpcy5femVyb190aW1lKGUuc3RhcnREYXRlKSk6ZS5zdGFydERhdGU9ci5wYXJzZURhdGUoZS5zdGFydERhdGUsZyxlLmxhbmd1YWdlLGUuYXNzdW1lTmVhcmJ5WWVhcik6ZS5zdGFydERhdGU9LSgxLzApKSxlLmVuZERhdGUhPT0xLzAmJihlLmVuZERhdGU/ZS5lbmREYXRlIGluc3RhbmNlb2YgRGF0ZT9lLmVuZERhdGU9dGhpcy5fbG9jYWxfdG9fdXRjKHRoaXMuX3plcm9fdGltZShlLmVuZERhdGUpKTplLmVuZERhdGU9ci5wYXJzZURhdGUoZS5lbmREYXRlLGcsZS5sYW5ndWFnZSxlLmFzc3VtZU5lYXJieVllYXIpOmUuZW5kRGF0ZT0xLzApLGUuZGF5c09mV2Vla0Rpc2FibGVkPXRoaXMuX3Jlc29sdmVEYXlzT2ZXZWVrKGUuZGF5c09mV2Vla0Rpc2FibGVkfHxbXSksZS5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ9dGhpcy5fcmVzb2x2ZURheXNPZldlZWsoZS5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWR8fFtdKSxlLmRhdGVzRGlzYWJsZWQ9ZS5kYXRlc0Rpc2FibGVkfHxbXSxhLmlzQXJyYXkoZS5kYXRlc0Rpc2FibGVkKXx8KGUuZGF0ZXNEaXNhYmxlZD1lLmRhdGVzRGlzYWJsZWQuc3BsaXQoXCIsXCIpKSxlLmRhdGVzRGlzYWJsZWQ9YS5tYXAoZS5kYXRlc0Rpc2FibGVkLGZ1bmN0aW9uKGEpe3JldHVybiByLnBhcnNlRGF0ZShhLGcsZS5sYW5ndWFnZSxlLmFzc3VtZU5lYXJieVllYXIpfSk7dmFyIGg9U3RyaW5nKGUub3JpZW50YXRpb24pLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1xccysvZyksaT1lLm9yaWVudGF0aW9uLnRvTG93ZXJDYXNlKCk7aWYoaD1hLmdyZXAoaCxmdW5jdGlvbihhKXtyZXR1cm4vXmF1dG98bGVmdHxyaWdodHx0b3B8Ym90dG9tJC8udGVzdChhKX0pLGUub3JpZW50YXRpb249e3g6XCJhdXRvXCIseTpcImF1dG9cIn0saSYmXCJhdXRvXCIhPT1pKWlmKDE9PT1oLmxlbmd0aClzd2l0Y2goaFswXSl7Y2FzZVwidG9wXCI6Y2FzZVwiYm90dG9tXCI6ZS5vcmllbnRhdGlvbi55PWhbMF07YnJlYWs7Y2FzZVwibGVmdFwiOmNhc2VcInJpZ2h0XCI6ZS5vcmllbnRhdGlvbi54PWhbMF19ZWxzZSBpPWEuZ3JlcChoLGZ1bmN0aW9uKGEpe3JldHVybi9ebGVmdHxyaWdodCQvLnRlc3QoYSl9KSxlLm9yaWVudGF0aW9uLng9aVswXXx8XCJhdXRvXCIsaT1hLmdyZXAoaCxmdW5jdGlvbihhKXtyZXR1cm4vXnRvcHxib3R0b20kLy50ZXN0KGEpfSksZS5vcmllbnRhdGlvbi55PWlbMF18fFwiYXV0b1wiO2Vsc2U7aWYoZS5kZWZhdWx0Vmlld0RhdGUgaW5zdGFuY2VvZiBEYXRlfHxcInN0cmluZ1wiPT10eXBlb2YgZS5kZWZhdWx0Vmlld0RhdGUpZS5kZWZhdWx0Vmlld0RhdGU9ci5wYXJzZURhdGUoZS5kZWZhdWx0Vmlld0RhdGUsZyxlLmxhbmd1YWdlLGUuYXNzdW1lTmVhcmJ5WWVhcik7ZWxzZSBpZihlLmRlZmF1bHRWaWV3RGF0ZSl7dmFyIGo9ZS5kZWZhdWx0Vmlld0RhdGUueWVhcnx8KG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpLGs9ZS5kZWZhdWx0Vmlld0RhdGUubW9udGh8fDAsbD1lLmRlZmF1bHRWaWV3RGF0ZS5kYXl8fDE7ZS5kZWZhdWx0Vmlld0RhdGU9YyhqLGssbCl9ZWxzZSBlLmRlZmF1bHRWaWV3RGF0ZT1kKCl9LF9ldmVudHM6W10sX3NlY29uZGFyeUV2ZW50czpbXSxfYXBwbHlFdmVudHM6ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQsZSxmPTA7ZjxhLmxlbmd0aDtmKyspYz1hW2ZdWzBdLDI9PT1hW2ZdLmxlbmd0aD8oZD1iLGU9YVtmXVsxXSk6Mz09PWFbZl0ubGVuZ3RoJiYoZD1hW2ZdWzFdLGU9YVtmXVsyXSksYy5vbihlLGQpfSxfdW5hcHBseUV2ZW50czpmdW5jdGlvbihhKXtmb3IodmFyIGMsZCxlLGY9MDtmPGEubGVuZ3RoO2YrKyljPWFbZl1bMF0sMj09PWFbZl0ubGVuZ3RoPyhlPWIsZD1hW2ZdWzFdKTozPT09YVtmXS5sZW5ndGgmJihlPWFbZl1bMV0sZD1hW2ZdWzJdKSxjLm9mZihkLGUpfSxfYnVpbGRFdmVudHM6ZnVuY3Rpb24oKXt2YXIgYj17a2V5dXA6YS5wcm94eShmdW5jdGlvbihiKXthLmluQXJyYXkoYi5rZXlDb2RlLFsyNywzNywzOSwzOCw0MCwzMiwxMyw5XSk9PT0tMSYmdGhpcy51cGRhdGUoKX0sdGhpcyksa2V5ZG93bjphLnByb3h5KHRoaXMua2V5ZG93bix0aGlzKSxwYXN0ZTphLnByb3h5KHRoaXMucGFzdGUsdGhpcyl9O3RoaXMuby5zaG93T25Gb2N1cz09PSEwJiYoYi5mb2N1cz1hLnByb3h5KHRoaXMuc2hvdyx0aGlzKSksdGhpcy5pc0lucHV0P3RoaXMuX2V2ZW50cz1bW3RoaXMuZWxlbWVudCxiXV06dGhpcy5jb21wb25lbnQmJnRoaXMuaW5wdXRGaWVsZC5sZW5ndGg/dGhpcy5fZXZlbnRzPVtbdGhpcy5pbnB1dEZpZWxkLGJdLFt0aGlzLmNvbXBvbmVudCx7Y2xpY2s6YS5wcm94eSh0aGlzLnNob3csdGhpcyl9XV06dGhpcy5fZXZlbnRzPVtbdGhpcy5lbGVtZW50LHtjbGljazphLnByb3h5KHRoaXMuc2hvdyx0aGlzKSxrZXlkb3duOmEucHJveHkodGhpcy5rZXlkb3duLHRoaXMpfV1dLHRoaXMuX2V2ZW50cy5wdXNoKFt0aGlzLmVsZW1lbnQsXCIqXCIse2JsdXI6YS5wcm94eShmdW5jdGlvbihhKXt0aGlzLl9mb2N1c2VkX2Zyb209YS50YXJnZXR9LHRoaXMpfV0sW3RoaXMuZWxlbWVudCx7Ymx1cjphLnByb3h5KGZ1bmN0aW9uKGEpe3RoaXMuX2ZvY3VzZWRfZnJvbT1hLnRhcmdldH0sdGhpcyl9XSksdGhpcy5vLmltbWVkaWF0ZVVwZGF0ZXMmJnRoaXMuX2V2ZW50cy5wdXNoKFt0aGlzLmVsZW1lbnQse1wiY2hhbmdlWWVhciBjaGFuZ2VNb250aFwiOmEucHJveHkoZnVuY3Rpb24oYSl7dGhpcy51cGRhdGUoYS5kYXRlKX0sdGhpcyl9XSksdGhpcy5fc2Vjb25kYXJ5RXZlbnRzPVtbdGhpcy5waWNrZXIse2NsaWNrOmEucHJveHkodGhpcy5jbGljayx0aGlzKX1dLFt0aGlzLnBpY2tlcixcIi5wcmV2LCAubmV4dFwiLHtjbGljazphLnByb3h5KHRoaXMubmF2QXJyb3dzQ2xpY2ssdGhpcyl9XSxbdGhpcy5waWNrZXIsXCIuZGF5Om5vdCguZGlzYWJsZWQpXCIse2NsaWNrOmEucHJveHkodGhpcy5kYXlDZWxsQ2xpY2ssdGhpcyl9XSxbYSh3aW5kb3cpLHtyZXNpemU6YS5wcm94eSh0aGlzLnBsYWNlLHRoaXMpfV0sW2EoZG9jdW1lbnQpLHtcIm1vdXNlZG93biB0b3VjaHN0YXJ0XCI6YS5wcm94eShmdW5jdGlvbihhKXt0aGlzLmVsZW1lbnQuaXMoYS50YXJnZXQpfHx0aGlzLmVsZW1lbnQuZmluZChhLnRhcmdldCkubGVuZ3RofHx0aGlzLnBpY2tlci5pcyhhLnRhcmdldCl8fHRoaXMucGlja2VyLmZpbmQoYS50YXJnZXQpLmxlbmd0aHx8dGhpcy5pc0lubGluZXx8dGhpcy5oaWRlKCl9LHRoaXMpfV1dfSxfYXR0YWNoRXZlbnRzOmZ1bmN0aW9uKCl7dGhpcy5fZGV0YWNoRXZlbnRzKCksdGhpcy5fYXBwbHlFdmVudHModGhpcy5fZXZlbnRzKX0sX2RldGFjaEV2ZW50czpmdW5jdGlvbigpe3RoaXMuX3VuYXBwbHlFdmVudHModGhpcy5fZXZlbnRzKX0sX2F0dGFjaFNlY29uZGFyeUV2ZW50czpmdW5jdGlvbigpe3RoaXMuX2RldGFjaFNlY29uZGFyeUV2ZW50cygpLHRoaXMuX2FwcGx5RXZlbnRzKHRoaXMuX3NlY29uZGFyeUV2ZW50cyl9LF9kZXRhY2hTZWNvbmRhcnlFdmVudHM6ZnVuY3Rpb24oKXt0aGlzLl91bmFwcGx5RXZlbnRzKHRoaXMuX3NlY29uZGFyeUV2ZW50cyl9LF90cmlnZ2VyOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9Y3x8dGhpcy5kYXRlcy5nZXQoLTEpLGU9dGhpcy5fdXRjX3RvX2xvY2FsKGQpO3RoaXMuZWxlbWVudC50cmlnZ2VyKHt0eXBlOmIsZGF0ZTplLHZpZXdNb2RlOnRoaXMudmlld01vZGUsZGF0ZXM6YS5tYXAodGhpcy5kYXRlcyx0aGlzLl91dGNfdG9fbG9jYWwpLGZvcm1hdDphLnByb3h5KGZ1bmN0aW9uKGEsYil7MD09PWFyZ3VtZW50cy5sZW5ndGg/KGE9dGhpcy5kYXRlcy5sZW5ndGgtMSxiPXRoaXMuby5mb3JtYXQpOlwic3RyaW5nXCI9PXR5cGVvZiBhJiYoYj1hLGE9dGhpcy5kYXRlcy5sZW5ndGgtMSksYj1ifHx0aGlzLm8uZm9ybWF0O3ZhciBjPXRoaXMuZGF0ZXMuZ2V0KGEpO3JldHVybiByLmZvcm1hdERhdGUoYyxiLHRoaXMuby5sYW5ndWFnZSl9LHRoaXMpfSl9LHNob3c6ZnVuY3Rpb24oKXtpZighKHRoaXMuaW5wdXRGaWVsZC5wcm9wKFwiZGlzYWJsZWRcIil8fHRoaXMuaW5wdXRGaWVsZC5wcm9wKFwicmVhZG9ubHlcIikmJnRoaXMuby5lbmFibGVPblJlYWRvbmx5PT09ITEpKXJldHVybiB0aGlzLmlzSW5saW5lfHx0aGlzLnBpY2tlci5hcHBlbmRUbyh0aGlzLm8uY29udGFpbmVyKSx0aGlzLnBsYWNlKCksdGhpcy5waWNrZXIuc2hvdygpLHRoaXMuX2F0dGFjaFNlY29uZGFyeUV2ZW50cygpLHRoaXMuX3RyaWdnZXIoXCJzaG93XCIpLCh3aW5kb3cubmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHN8fFwib250b3VjaHN0YXJ0XCJpbiBkb2N1bWVudCkmJnRoaXMuby5kaXNhYmxlVG91Y2hLZXlib2FyZCYmYSh0aGlzLmVsZW1lbnQpLmJsdXIoKSx0aGlzfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNJbmxpbmV8fCF0aGlzLnBpY2tlci5pcyhcIjp2aXNpYmxlXCIpP3RoaXM6KHRoaXMuZm9jdXNEYXRlPW51bGwsdGhpcy5waWNrZXIuaGlkZSgpLmRldGFjaCgpLHRoaXMuX2RldGFjaFNlY29uZGFyeUV2ZW50cygpLHRoaXMuc2V0Vmlld01vZGUodGhpcy5vLnN0YXJ0VmlldyksdGhpcy5vLmZvcmNlUGFyc2UmJnRoaXMuaW5wdXRGaWVsZC52YWwoKSYmdGhpcy5zZXRWYWx1ZSgpLHRoaXMuX3RyaWdnZXIoXCJoaWRlXCIpLHRoaXMpfSxkZXN0cm95OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaGlkZSgpLHRoaXMuX2RldGFjaEV2ZW50cygpLHRoaXMuX2RldGFjaFNlY29uZGFyeUV2ZW50cygpLHRoaXMucGlja2VyLnJlbW92ZSgpLGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGVwaWNrZXIsdGhpcy5pc0lucHV0fHxkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlLHRoaXN9LHBhc3RlOmZ1bmN0aW9uKGIpe3ZhciBjO2lmKGIub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhJiZiLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YS50eXBlcyYmYS5pbkFycmF5KFwidGV4dC9wbGFpblwiLGIub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhLnR5cGVzKSE9PS0xKWM9Yi5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7ZWxzZXtpZighd2luZG93LmNsaXBib2FyZERhdGEpcmV0dXJuO2M9d2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcIlRleHRcIil9dGhpcy5zZXREYXRlKGMpLHRoaXMudXBkYXRlKCksYi5wcmV2ZW50RGVmYXVsdCgpfSxfdXRjX3RvX2xvY2FsOmZ1bmN0aW9uKGEpe2lmKCFhKXJldHVybiBhO3ZhciBiPW5ldyBEYXRlKGEuZ2V0VGltZSgpKzZlNCphLmdldFRpbWV6b25lT2Zmc2V0KCkpO3JldHVybiBiLmdldFRpbWV6b25lT2Zmc2V0KCkhPT1hLmdldFRpbWV6b25lT2Zmc2V0KCkmJihiPW5ldyBEYXRlKGEuZ2V0VGltZSgpKzZlNCpiLmdldFRpbWV6b25lT2Zmc2V0KCkpKSxifSxfbG9jYWxfdG9fdXRjOmZ1bmN0aW9uKGEpe3JldHVybiBhJiZuZXcgRGF0ZShhLmdldFRpbWUoKS02ZTQqYS5nZXRUaW1lem9uZU9mZnNldCgpKX0sX3plcm9fdGltZTpmdW5jdGlvbihhKXtyZXR1cm4gYSYmbmV3IERhdGUoYS5nZXRGdWxsWWVhcigpLGEuZ2V0TW9udGgoKSxhLmdldERhdGUoKSl9LF96ZXJvX3V0Y190aW1lOmZ1bmN0aW9uKGEpe3JldHVybiBhJiZjKGEuZ2V0VVRDRnVsbFllYXIoKSxhLmdldFVUQ01vbnRoKCksYS5nZXRVVENEYXRlKCkpfSxnZXREYXRlczpmdW5jdGlvbigpe3JldHVybiBhLm1hcCh0aGlzLmRhdGVzLHRoaXMuX3V0Y190b19sb2NhbCl9LGdldFVUQ0RhdGVzOmZ1bmN0aW9uKCl7cmV0dXJuIGEubWFwKHRoaXMuZGF0ZXMsZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBEYXRlKGEpfSl9LGdldERhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdXRjX3RvX2xvY2FsKHRoaXMuZ2V0VVRDRGF0ZSgpKX0sZ2V0VVRDRGF0ZTpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZGF0ZXMuZ2V0KC0xKTtyZXR1cm4gYSE9PWI/bmV3IERhdGUoYSk6bnVsbH0sY2xlYXJEYXRlczpmdW5jdGlvbigpe3RoaXMuaW5wdXRGaWVsZC52YWwoXCJcIiksdGhpcy51cGRhdGUoKSx0aGlzLl90cmlnZ2VyKFwiY2hhbmdlRGF0ZVwiKSx0aGlzLm8uYXV0b2Nsb3NlJiZ0aGlzLmhpZGUoKX0sc2V0RGF0ZXM6ZnVuY3Rpb24oKXt2YXIgYj1hLmlzQXJyYXkoYXJndW1lbnRzWzBdKT9hcmd1bWVudHNbMF06YXJndW1lbnRzO3JldHVybiB0aGlzLnVwZGF0ZS5hcHBseSh0aGlzLGIpLHRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VEYXRlXCIpLHRoaXMuc2V0VmFsdWUoKSx0aGlzfSxzZXRVVENEYXRlczpmdW5jdGlvbigpe3ZhciBiPWEuaXNBcnJheShhcmd1bWVudHNbMF0pP2FyZ3VtZW50c1swXTphcmd1bWVudHM7cmV0dXJuIHRoaXMuc2V0RGF0ZXMuYXBwbHkodGhpcyxhLm1hcChiLHRoaXMuX3V0Y190b19sb2NhbCkpLHRoaXN9LHNldERhdGU6ZihcInNldERhdGVzXCIpLHNldFVUQ0RhdGU6ZihcInNldFVUQ0RhdGVzXCIpLHJlbW92ZTpmKFwiZGVzdHJveVwiLFwiTWV0aG9kIGByZW1vdmVgIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDIuMC4gVXNlIGBkZXN0cm95YCBpbnN0ZWFkXCIpLHNldFZhbHVlOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5nZXRGb3JtYXR0ZWREYXRlKCk7cmV0dXJuIHRoaXMuaW5wdXRGaWVsZC52YWwoYSksdGhpc30sZ2V0Rm9ybWF0dGVkRGF0ZTpmdW5jdGlvbihjKXtjPT09YiYmKGM9dGhpcy5vLmZvcm1hdCk7dmFyIGQ9dGhpcy5vLmxhbmd1YWdlO3JldHVybiBhLm1hcCh0aGlzLmRhdGVzLGZ1bmN0aW9uKGEpe3JldHVybiByLmZvcm1hdERhdGUoYSxjLGQpfSkuam9pbih0aGlzLm8ubXVsdGlkYXRlU2VwYXJhdG9yKX0sZ2V0U3RhcnREYXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuby5zdGFydERhdGV9LHNldFN0YXJ0RGF0ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fcHJvY2Vzc19vcHRpb25zKHtzdGFydERhdGU6YX0pLHRoaXMudXBkYXRlKCksdGhpcy51cGRhdGVOYXZBcnJvd3MoKSx0aGlzfSxnZXRFbmREYXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuby5lbmREYXRlfSxzZXRFbmREYXRlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9wcm9jZXNzX29wdGlvbnMoe2VuZERhdGU6YX0pLHRoaXMudXBkYXRlKCksdGhpcy51cGRhdGVOYXZBcnJvd3MoKSx0aGlzfSxzZXREYXlzT2ZXZWVrRGlzYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7ZGF5c09mV2Vla0Rpc2FibGVkOmF9KSx0aGlzLnVwZGF0ZSgpLHRoaXN9LHNldERheXNPZldlZWtIaWdobGlnaHRlZDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fcHJvY2Vzc19vcHRpb25zKHtkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6YX0pLHRoaXMudXBkYXRlKCksdGhpc30sc2V0RGF0ZXNEaXNhYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fcHJvY2Vzc19vcHRpb25zKHtkYXRlc0Rpc2FibGVkOmF9KSx0aGlzLnVwZGF0ZSgpLHRoaXN9LHBsYWNlOmZ1bmN0aW9uKCl7aWYodGhpcy5pc0lubGluZSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnBpY2tlci5vdXRlcldpZHRoKCksYz10aGlzLnBpY2tlci5vdXRlckhlaWdodCgpLGQ9MTAsZT1hKHRoaXMuby5jb250YWluZXIpLGY9ZS53aWR0aCgpLGc9XCJib2R5XCI9PT10aGlzLm8uY29udGFpbmVyP2EoZG9jdW1lbnQpLnNjcm9sbFRvcCgpOmUuc2Nyb2xsVG9wKCksaD1lLm9mZnNldCgpLGk9WzBdO3RoaXMuZWxlbWVudC5wYXJlbnRzKCkuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcykuY3NzKFwiei1pbmRleFwiKTtcImF1dG9cIiE9PWImJjAhPT1OdW1iZXIoYikmJmkucHVzaChOdW1iZXIoYikpfSk7dmFyIGo9TWF0aC5tYXguYXBwbHkoTWF0aCxpKSt0aGlzLm8uekluZGV4T2Zmc2V0LGs9dGhpcy5jb21wb25lbnQ/dGhpcy5jb21wb25lbnQucGFyZW50KCkub2Zmc2V0KCk6dGhpcy5lbGVtZW50Lm9mZnNldCgpLGw9dGhpcy5jb21wb25lbnQ/dGhpcy5jb21wb25lbnQub3V0ZXJIZWlnaHQoITApOnRoaXMuZWxlbWVudC5vdXRlckhlaWdodCghMSksbT10aGlzLmNvbXBvbmVudD90aGlzLmNvbXBvbmVudC5vdXRlcldpZHRoKCEwKTp0aGlzLmVsZW1lbnQub3V0ZXJXaWR0aCghMSksbj1rLmxlZnQtaC5sZWZ0LG89ay50b3AtaC50b3A7XCJib2R5XCIhPT10aGlzLm8uY29udGFpbmVyJiYobys9ZyksdGhpcy5waWNrZXIucmVtb3ZlQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC10b3AgZGF0ZXBpY2tlci1vcmllbnQtYm90dG9tIGRhdGVwaWNrZXItb3JpZW50LXJpZ2h0IGRhdGVwaWNrZXItb3JpZW50LWxlZnRcIiksXCJhdXRvXCIhPT10aGlzLm8ub3JpZW50YXRpb24ueD8odGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC1cIit0aGlzLm8ub3JpZW50YXRpb24ueCksXCJyaWdodFwiPT09dGhpcy5vLm9yaWVudGF0aW9uLngmJihuLT1iLW0pKTprLmxlZnQ8MD8odGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC1sZWZ0XCIpLG4tPWsubGVmdC1kKTpuK2I+Zj8odGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC1yaWdodFwiKSxuKz1tLWIpOnRoaXMuby5ydGw/dGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC1yaWdodFwiKTp0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItb3JpZW50LWxlZnRcIik7dmFyIHAscT10aGlzLm8ub3JpZW50YXRpb24ueTtpZihcImF1dG9cIj09PXEmJihwPS1nK28tYyxxPXA8MD9cImJvdHRvbVwiOlwidG9wXCIpLHRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtXCIrcSksXCJ0b3BcIj09PXE/by09YytwYXJzZUludCh0aGlzLnBpY2tlci5jc3MoXCJwYWRkaW5nLXRvcFwiKSk6bys9bCx0aGlzLm8ucnRsKXt2YXIgcj1mLShuK20pO3RoaXMucGlja2VyLmNzcyh7dG9wOm8scmlnaHQ6cix6SW5kZXg6an0pfWVsc2UgdGhpcy5waWNrZXIuY3NzKHt0b3A6byxsZWZ0Om4sekluZGV4Omp9KTtyZXR1cm4gdGhpc30sX2FsbG93X3VwZGF0ZTohMCx1cGRhdGU6ZnVuY3Rpb24oKXtpZighdGhpcy5fYWxsb3dfdXBkYXRlKXJldHVybiB0aGlzO3ZhciBiPXRoaXMuZGF0ZXMuY29weSgpLGM9W10sZD0hMTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oYS5lYWNoKGFyZ3VtZW50cyxhLnByb3h5KGZ1bmN0aW9uKGEsYil7YiBpbnN0YW5jZW9mIERhdGUmJihiPXRoaXMuX2xvY2FsX3RvX3V0YyhiKSksYy5wdXNoKGIpfSx0aGlzKSksZD0hMCk6KGM9dGhpcy5pc0lucHV0P3RoaXMuZWxlbWVudC52YWwoKTp0aGlzLmVsZW1lbnQuZGF0YShcImRhdGVcIil8fHRoaXMuaW5wdXRGaWVsZC52YWwoKSxjPWMmJnRoaXMuby5tdWx0aWRhdGU/Yy5zcGxpdCh0aGlzLm8ubXVsdGlkYXRlU2VwYXJhdG9yKTpbY10sZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZSksYz1hLm1hcChjLGEucHJveHkoZnVuY3Rpb24oYSl7cmV0dXJuIHIucGFyc2VEYXRlKGEsdGhpcy5vLmZvcm1hdCx0aGlzLm8ubGFuZ3VhZ2UsdGhpcy5vLmFzc3VtZU5lYXJieVllYXIpfSx0aGlzKSksYz1hLmdyZXAoYyxhLnByb3h5KGZ1bmN0aW9uKGEpe3JldHVybiF0aGlzLmRhdGVXaXRoaW5SYW5nZShhKXx8IWF9LHRoaXMpLCEwKSx0aGlzLmRhdGVzLnJlcGxhY2UoYyksdGhpcy5vLnVwZGF0ZVZpZXdEYXRlJiYodGhpcy5kYXRlcy5sZW5ndGg/dGhpcy52aWV3RGF0ZT1uZXcgRGF0ZSh0aGlzLmRhdGVzLmdldCgtMSkpOnRoaXMudmlld0RhdGU8dGhpcy5vLnN0YXJ0RGF0ZT90aGlzLnZpZXdEYXRlPW5ldyBEYXRlKHRoaXMuby5zdGFydERhdGUpOnRoaXMudmlld0RhdGU+dGhpcy5vLmVuZERhdGU/dGhpcy52aWV3RGF0ZT1uZXcgRGF0ZSh0aGlzLm8uZW5kRGF0ZSk6dGhpcy52aWV3RGF0ZT10aGlzLm8uZGVmYXVsdFZpZXdEYXRlKSxkPyh0aGlzLnNldFZhbHVlKCksdGhpcy5lbGVtZW50LmNoYW5nZSgpKTp0aGlzLmRhdGVzLmxlbmd0aCYmU3RyaW5nKGIpIT09U3RyaW5nKHRoaXMuZGF0ZXMpJiZkJiYodGhpcy5fdHJpZ2dlcihcImNoYW5nZURhdGVcIiksdGhpcy5lbGVtZW50LmNoYW5nZSgpKSwhdGhpcy5kYXRlcy5sZW5ndGgmJmIubGVuZ3RoJiYodGhpcy5fdHJpZ2dlcihcImNsZWFyRGF0ZVwiKSx0aGlzLmVsZW1lbnQuY2hhbmdlKCkpLHRoaXMuZmlsbCgpLHRoaXN9LGZpbGxEb3c6ZnVuY3Rpb24oKXtpZih0aGlzLm8uc2hvd1dlZWtEYXlzKXt2YXIgYj10aGlzLm8ud2Vla1N0YXJ0LGM9XCI8dHI+XCI7Zm9yKHRoaXMuby5jYWxlbmRhcldlZWtzJiYoYys9Jzx0aCBjbGFzcz1cImN3XCI+JiMxNjA7PC90aD4nKTtiPHRoaXMuby53ZWVrU3RhcnQrNzspYys9Jzx0aCBjbGFzcz1cImRvdycsYS5pbkFycmF5KGIsdGhpcy5vLmRheXNPZldlZWtEaXNhYmxlZCkhPT0tMSYmKGMrPVwiIGRpc2FibGVkXCIpLGMrPSdcIj4nK3FbdGhpcy5vLmxhbmd1YWdlXS5kYXlzTWluW2IrKyU3XStcIjwvdGg+XCI7Yys9XCI8L3RyPlwiLHRoaXMucGlja2VyLmZpbmQoXCIuZGF0ZXBpY2tlci1kYXlzIHRoZWFkXCIpLmFwcGVuZChjKX19LGZpbGxNb250aHM6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj10aGlzLl91dGNfdG9fbG9jYWwodGhpcy52aWV3RGF0ZSksYz1cIlwiLGQ9MDtkPDEyO2QrKylhPWImJmIuZ2V0TW9udGgoKT09PWQ/XCIgZm9jdXNlZFwiOlwiXCIsYys9JzxzcGFuIGNsYXNzPVwibW9udGgnK2ErJ1wiPicrcVt0aGlzLm8ubGFuZ3VhZ2VdLm1vbnRoc1Nob3J0W2RdK1wiPC9zcGFuPlwiO3RoaXMucGlja2VyLmZpbmQoXCIuZGF0ZXBpY2tlci1tb250aHMgdGRcIikuaHRtbChjKX0sc2V0UmFuZ2U6ZnVuY3Rpb24oYil7YiYmYi5sZW5ndGg/dGhpcy5yYW5nZT1hLm1hcChiLGZ1bmN0aW9uKGEpe3JldHVybiBhLnZhbHVlT2YoKX0pOmRlbGV0ZSB0aGlzLnJhbmdlLHRoaXMuZmlsbCgpfSxnZXRDbGFzc05hbWVzOmZ1bmN0aW9uKGIpe3ZhciBjPVtdLGY9dGhpcy52aWV3RGF0ZS5nZXRVVENGdWxsWWVhcigpLGc9dGhpcy52aWV3RGF0ZS5nZXRVVENNb250aCgpLGg9ZCgpO3JldHVybiBiLmdldFVUQ0Z1bGxZZWFyKCk8Znx8Yi5nZXRVVENGdWxsWWVhcigpPT09ZiYmYi5nZXRVVENNb250aCgpPGc/Yy5wdXNoKFwib2xkXCIpOihiLmdldFVUQ0Z1bGxZZWFyKCk+Znx8Yi5nZXRVVENGdWxsWWVhcigpPT09ZiYmYi5nZXRVVENNb250aCgpPmcpJiZjLnB1c2goXCJuZXdcIiksdGhpcy5mb2N1c0RhdGUmJmIudmFsdWVPZigpPT09dGhpcy5mb2N1c0RhdGUudmFsdWVPZigpJiZjLnB1c2goXCJmb2N1c2VkXCIpLHRoaXMuby50b2RheUhpZ2hsaWdodCYmZShiLGgpJiZjLnB1c2goXCJ0b2RheVwiKSx0aGlzLmRhdGVzLmNvbnRhaW5zKGIpIT09LTEmJmMucHVzaChcImFjdGl2ZVwiKSx0aGlzLmRhdGVXaXRoaW5SYW5nZShiKXx8Yy5wdXNoKFwiZGlzYWJsZWRcIiksdGhpcy5kYXRlSXNEaXNhYmxlZChiKSYmYy5wdXNoKFwiZGlzYWJsZWRcIixcImRpc2FibGVkLWRhdGVcIiksYS5pbkFycmF5KGIuZ2V0VVRDRGF5KCksdGhpcy5vLmRheXNPZldlZWtIaWdobGlnaHRlZCkhPT0tMSYmYy5wdXNoKFwiaGlnaGxpZ2h0ZWRcIiksdGhpcy5yYW5nZSYmKGI+dGhpcy5yYW5nZVswXSYmYjx0aGlzLnJhbmdlW3RoaXMucmFuZ2UubGVuZ3RoLTFdJiZjLnB1c2goXCJyYW5nZVwiKSxhLmluQXJyYXkoYi52YWx1ZU9mKCksdGhpcy5yYW5nZSkhPT0tMSYmYy5wdXNoKFwic2VsZWN0ZWRcIiksYi52YWx1ZU9mKCk9PT10aGlzLnJhbmdlWzBdJiZjLnB1c2goXCJyYW5nZS1zdGFydFwiKSxiLnZhbHVlT2YoKT09PXRoaXMucmFuZ2VbdGhpcy5yYW5nZS5sZW5ndGgtMV0mJmMucHVzaChcInJhbmdlLWVuZFwiKSksY30sX2ZpbGxfeWVhcnNWaWV3OmZ1bmN0aW9uKGMsZCxlLGYsZyxoLGkpe2Zvcih2YXIgaixrLGwsbT1cIlwiLG49ZS8xMCxvPXRoaXMucGlja2VyLmZpbmQoYykscD1NYXRoLmZsb29yKGYvZSkqZSxxPXArOSpuLHI9TWF0aC5mbG9vcih0aGlzLnZpZXdEYXRlLmdldEZ1bGxZZWFyKCkvbikqbixzPWEubWFwKHRoaXMuZGF0ZXMsZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGguZmxvb3IoYS5nZXRVVENGdWxsWWVhcigpL24pKm59KSx0PXAtbjt0PD1xK247dCs9bilqPVtkXSxrPW51bGwsdD09PXAtbj9qLnB1c2goXCJvbGRcIik6dD09PXErbiYmai5wdXNoKFwibmV3XCIpLGEuaW5BcnJheSh0LHMpIT09LTEmJmoucHVzaChcImFjdGl2ZVwiKSwodDxnfHx0PmgpJiZqLnB1c2goXCJkaXNhYmxlZFwiKSx0PT09ciYmai5wdXNoKFwiZm9jdXNlZFwiKSxpIT09YS5ub29wJiYobD1pKG5ldyBEYXRlKHQsMCwxKSksbD09PWI/bD17fTpcImJvb2xlYW5cIj09dHlwZW9mIGw/bD17ZW5hYmxlZDpsfTpcInN0cmluZ1wiPT10eXBlb2YgbCYmKGw9e2NsYXNzZXM6bH0pLGwuZW5hYmxlZD09PSExJiZqLnB1c2goXCJkaXNhYmxlZFwiKSxsLmNsYXNzZXMmJihqPWouY29uY2F0KGwuY2xhc3Nlcy5zcGxpdCgvXFxzKy8pKSksbC50b29sdGlwJiYoaz1sLnRvb2x0aXApKSxtKz0nPHNwYW4gY2xhc3M9XCInK2ouam9pbihcIiBcIikrJ1wiJysoaz8nIHRpdGxlPVwiJytrKydcIic6XCJcIikrXCI+XCIrdCtcIjwvc3Bhbj5cIjtvLmZpbmQoXCIuZGF0ZXBpY2tlci1zd2l0Y2hcIikudGV4dChwK1wiLVwiK3EpLG8uZmluZChcInRkXCIpLmh0bWwobSl9LGZpbGw6ZnVuY3Rpb24oKXt2YXIgZCxlLGY9bmV3IERhdGUodGhpcy52aWV3RGF0ZSksZz1mLmdldFVUQ0Z1bGxZZWFyKCksaD1mLmdldFVUQ01vbnRoKCksaT10aGlzLm8uc3RhcnREYXRlIT09LSgxLzApP3RoaXMuby5zdGFydERhdGUuZ2V0VVRDRnVsbFllYXIoKTotKDEvMCksaj10aGlzLm8uc3RhcnREYXRlIT09LSgxLzApP3RoaXMuby5zdGFydERhdGUuZ2V0VVRDTW9udGgoKTotKDEvMCksaz10aGlzLm8uZW5kRGF0ZSE9PTEvMD90aGlzLm8uZW5kRGF0ZS5nZXRVVENGdWxsWWVhcigpOjEvMCxsPXRoaXMuby5lbmREYXRlIT09MS8wP3RoaXMuby5lbmREYXRlLmdldFVUQ01vbnRoKCk6MS8wLG09cVt0aGlzLm8ubGFuZ3VhZ2VdLnRvZGF5fHxxLmVuLnRvZGF5fHxcIlwiLG49cVt0aGlzLm8ubGFuZ3VhZ2VdLmNsZWFyfHxxLmVuLmNsZWFyfHxcIlwiLG89cVt0aGlzLm8ubGFuZ3VhZ2VdLnRpdGxlRm9ybWF0fHxxLmVuLnRpdGxlRm9ybWF0O2lmKCFpc05hTihnKSYmIWlzTmFOKGgpKXt0aGlzLnBpY2tlci5maW5kKFwiLmRhdGVwaWNrZXItZGF5cyAuZGF0ZXBpY2tlci1zd2l0Y2hcIikudGV4dChyLmZvcm1hdERhdGUoZixvLHRoaXMuby5sYW5ndWFnZSkpLHRoaXMucGlja2VyLmZpbmQoXCJ0Zm9vdCAudG9kYXlcIikudGV4dChtKS5jc3MoXCJkaXNwbGF5XCIsdGhpcy5vLnRvZGF5QnRuPT09ITB8fFwibGlua2VkXCI9PT10aGlzLm8udG9kYXlCdG4/XCJ0YWJsZS1jZWxsXCI6XCJub25lXCIpLHRoaXMucGlja2VyLmZpbmQoXCJ0Zm9vdCAuY2xlYXJcIikudGV4dChuKS5jc3MoXCJkaXNwbGF5XCIsdGhpcy5vLmNsZWFyQnRuPT09ITA/XCJ0YWJsZS1jZWxsXCI6XCJub25lXCIpLHRoaXMucGlja2VyLmZpbmQoXCJ0aGVhZCAuZGF0ZXBpY2tlci10aXRsZVwiKS50ZXh0KHRoaXMuby50aXRsZSkuY3NzKFwiZGlzcGxheVwiLFwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLm8udGl0bGUmJlwiXCIhPT10aGlzLm8udGl0bGU/XCJ0YWJsZS1jZWxsXCI6XCJub25lXCIpLHRoaXMudXBkYXRlTmF2QXJyb3dzKCksdGhpcy5maWxsTW9udGhzKCk7dmFyIHA9YyhnLGgsMCkscz1wLmdldFVUQ0RhdGUoKTtwLnNldFVUQ0RhdGUocy0ocC5nZXRVVENEYXkoKS10aGlzLm8ud2Vla1N0YXJ0KzcpJTcpO3ZhciB0PW5ldyBEYXRlKHApO3AuZ2V0VVRDRnVsbFllYXIoKTwxMDAmJnQuc2V0VVRDRnVsbFllYXIocC5nZXRVVENGdWxsWWVhcigpKSx0LnNldFVUQ0RhdGUodC5nZXRVVENEYXRlKCkrNDIpLHQ9dC52YWx1ZU9mKCk7Zm9yKHZhciB1LHYsdz1bXTtwLnZhbHVlT2YoKTx0Oyl7aWYodT1wLmdldFVUQ0RheSgpLHU9PT10aGlzLm8ud2Vla1N0YXJ0JiYody5wdXNoKFwiPHRyPlwiKSx0aGlzLm8uY2FsZW5kYXJXZWVrcykpe3ZhciB4PW5ldyBEYXRlKCtwKyh0aGlzLm8ud2Vla1N0YXJ0LXUtNyklNyo4NjRlNSkseT1uZXcgRGF0ZShOdW1iZXIoeCkrKDExLXguZ2V0VVRDRGF5KCkpJTcqODY0ZTUpLHo9bmV3IERhdGUoTnVtYmVyKHo9Yyh5LmdldFVUQ0Z1bGxZZWFyKCksMCwxKSkrKDExLXouZ2V0VVRDRGF5KCkpJTcqODY0ZTUpLEE9KHkteikvODY0ZTUvNysxO3cucHVzaCgnPHRkIGNsYXNzPVwiY3dcIj4nK0ErXCI8L3RkPlwiKX12PXRoaXMuZ2V0Q2xhc3NOYW1lcyhwKSx2LnB1c2goXCJkYXlcIik7dmFyIEI9cC5nZXRVVENEYXRlKCk7dGhpcy5vLmJlZm9yZVNob3dEYXkhPT1hLm5vb3AmJihlPXRoaXMuby5iZWZvcmVTaG93RGF5KHRoaXMuX3V0Y190b19sb2NhbChwKSksZT09PWI/ZT17fTpcImJvb2xlYW5cIj09dHlwZW9mIGU/ZT17ZW5hYmxlZDplfTpcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9e2NsYXNzZXM6ZX0pLGUuZW5hYmxlZD09PSExJiZ2LnB1c2goXCJkaXNhYmxlZFwiKSxlLmNsYXNzZXMmJih2PXYuY29uY2F0KGUuY2xhc3Nlcy5zcGxpdCgvXFxzKy8pKSksZS50b29sdGlwJiYoZD1lLnRvb2x0aXApLGUuY29udGVudCYmKEI9ZS5jb250ZW50KSksdj1hLmlzRnVuY3Rpb24oYS51bmlxdWVTb3J0KT9hLnVuaXF1ZVNvcnQodik6YS51bmlxdWUodiksdy5wdXNoKCc8dGQgY2xhc3M9XCInK3Yuam9pbihcIiBcIikrJ1wiJysoZD8nIHRpdGxlPVwiJytkKydcIic6XCJcIikrJyBkYXRhLWRhdGU9XCInK3AuZ2V0VGltZSgpLnRvU3RyaW5nKCkrJ1wiPicrQitcIjwvdGQ+XCIpLGQ9bnVsbCx1PT09dGhpcy5vLndlZWtFbmQmJncucHVzaChcIjwvdHI+XCIpLHAuc2V0VVRDRGF0ZShwLmdldFVUQ0RhdGUoKSsxKX10aGlzLnBpY2tlci5maW5kKFwiLmRhdGVwaWNrZXItZGF5cyB0Ym9keVwiKS5odG1sKHcuam9pbihcIlwiKSk7dmFyIEM9cVt0aGlzLm8ubGFuZ3VhZ2VdLm1vbnRoc1RpdGxlfHxxLmVuLm1vbnRoc1RpdGxlfHxcIk1vbnRoc1wiLEQ9dGhpcy5waWNrZXIuZmluZChcIi5kYXRlcGlja2VyLW1vbnRoc1wiKS5maW5kKFwiLmRhdGVwaWNrZXItc3dpdGNoXCIpLnRleHQodGhpcy5vLm1heFZpZXdNb2RlPDI/QzpnKS5lbmQoKS5maW5kKFwidGJvZHkgc3BhblwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtpZihhLmVhY2godGhpcy5kYXRlcyxmdW5jdGlvbihhLGIpe2IuZ2V0VVRDRnVsbFllYXIoKT09PWcmJkQuZXEoYi5nZXRVVENNb250aCgpKS5hZGRDbGFzcyhcImFjdGl2ZVwiKX0pLChnPGl8fGc+aykmJkQuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSxnPT09aSYmRC5zbGljZSgwLGopLmFkZENsYXNzKFwiZGlzYWJsZWRcIiksZz09PWsmJkQuc2xpY2UobCsxKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpLHRoaXMuby5iZWZvcmVTaG93TW9udGghPT1hLm5vb3Ape3ZhciBFPXRoaXM7YS5lYWNoKEQsZnVuY3Rpb24oYyxkKXt2YXIgZT1uZXcgRGF0ZShnLGMsMSksZj1FLm8uYmVmb3JlU2hvd01vbnRoKGUpO2Y9PT1iP2Y9e306XCJib29sZWFuXCI9PXR5cGVvZiBmP2Y9e2VuYWJsZWQ6Zn06XCJzdHJpbmdcIj09dHlwZW9mIGYmJihmPXtjbGFzc2VzOmZ9KSxmLmVuYWJsZWQhPT0hMXx8YShkKS5oYXNDbGFzcyhcImRpc2FibGVkXCIpfHxhKGQpLmFkZENsYXNzKFwiZGlzYWJsZWRcIiksZi5jbGFzc2VzJiZhKGQpLmFkZENsYXNzKGYuY2xhc3NlcyksZi50b29sdGlwJiZhKGQpLnByb3AoXCJ0aXRsZVwiLGYudG9vbHRpcCl9KX10aGlzLl9maWxsX3llYXJzVmlldyhcIi5kYXRlcGlja2VyLXllYXJzXCIsXCJ5ZWFyXCIsMTAsZyxpLGssdGhpcy5vLmJlZm9yZVNob3dZZWFyKSx0aGlzLl9maWxsX3llYXJzVmlldyhcIi5kYXRlcGlja2VyLWRlY2FkZXNcIixcImRlY2FkZVwiLDEwMCxnLGksayx0aGlzLm8uYmVmb3JlU2hvd0RlY2FkZSksdGhpcy5fZmlsbF95ZWFyc1ZpZXcoXCIuZGF0ZXBpY2tlci1jZW50dXJpZXNcIixcImNlbnR1cnlcIiwxZTMsZyxpLGssdGhpcy5vLmJlZm9yZVNob3dDZW50dXJ5KX19LHVwZGF0ZU5hdkFycm93czpmdW5jdGlvbigpe2lmKHRoaXMuX2FsbG93X3VwZGF0ZSl7dmFyIGEsYixjPW5ldyBEYXRlKHRoaXMudmlld0RhdGUpLGQ9Yy5nZXRVVENGdWxsWWVhcigpLGU9Yy5nZXRVVENNb250aCgpLGY9dGhpcy5vLnN0YXJ0RGF0ZSE9PS0oMS8wKT90aGlzLm8uc3RhcnREYXRlLmdldFVUQ0Z1bGxZZWFyKCk6LSgxLzApLGc9dGhpcy5vLnN0YXJ0RGF0ZSE9PS0oMS8wKT90aGlzLm8uc3RhcnREYXRlLmdldFVUQ01vbnRoKCk6LSgxLzApLGg9dGhpcy5vLmVuZERhdGUhPT0xLzA/dGhpcy5vLmVuZERhdGUuZ2V0VVRDRnVsbFllYXIoKToxLzAsaT10aGlzLm8uZW5kRGF0ZSE9PTEvMD90aGlzLm8uZW5kRGF0ZS5nZXRVVENNb250aCgpOjEvMCxqPTE7c3dpdGNoKHRoaXMudmlld01vZGUpe2Nhc2UgNDpqKj0xMDtjYXNlIDM6aio9MTA7Y2FzZSAyOmoqPTEwO2Nhc2UgMTphPU1hdGguZmxvb3IoZC9qKSpqPGYsYj1NYXRoLmZsb29yKGQvaikqaitqPmg7YnJlYWs7Y2FzZSAwOmE9ZDw9ZiYmZTxnLGI9ZD49aCYmZT5pfXRoaXMucGlja2VyLmZpbmQoXCIucHJldlwiKS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsYSksdGhpcy5waWNrZXIuZmluZChcIi5uZXh0XCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIixiKX19LGNsaWNrOmZ1bmN0aW9uKGIpe2IucHJldmVudERlZmF1bHQoKSxiLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBlLGYsZyxoO2U9YShiLnRhcmdldCksZS5oYXNDbGFzcyhcImRhdGVwaWNrZXItc3dpdGNoXCIpJiZ0aGlzLnZpZXdNb2RlIT09dGhpcy5vLm1heFZpZXdNb2RlJiZ0aGlzLnNldFZpZXdNb2RlKHRoaXMudmlld01vZGUrMSksZS5oYXNDbGFzcyhcInRvZGF5XCIpJiYhZS5oYXNDbGFzcyhcImRheVwiKSYmKHRoaXMuc2V0Vmlld01vZGUoMCksdGhpcy5fc2V0RGF0ZShkKCksXCJsaW5rZWRcIj09PXRoaXMuby50b2RheUJ0bj9udWxsOlwidmlld1wiKSksZS5oYXNDbGFzcyhcImNsZWFyXCIpJiZ0aGlzLmNsZWFyRGF0ZXMoKSxlLmhhc0NsYXNzKFwiZGlzYWJsZWRcIil8fChlLmhhc0NsYXNzKFwibW9udGhcIil8fGUuaGFzQ2xhc3MoXCJ5ZWFyXCIpfHxlLmhhc0NsYXNzKFwiZGVjYWRlXCIpfHxlLmhhc0NsYXNzKFwiY2VudHVyeVwiKSkmJih0aGlzLnZpZXdEYXRlLnNldFVUQ0RhdGUoMSksZj0xLDE9PT10aGlzLnZpZXdNb2RlPyhoPWUucGFyZW50KCkuZmluZChcInNwYW5cIikuaW5kZXgoZSksZz10aGlzLnZpZXdEYXRlLmdldFVUQ0Z1bGxZZWFyKCksdGhpcy52aWV3RGF0ZS5zZXRVVENNb250aChoKSk6KGg9MCxnPU51bWJlcihlLnRleHQoKSksdGhpcy52aWV3RGF0ZS5zZXRVVENGdWxsWWVhcihnKSksdGhpcy5fdHJpZ2dlcihyLnZpZXdNb2Rlc1t0aGlzLnZpZXdNb2RlLTFdLmUsdGhpcy52aWV3RGF0ZSksdGhpcy52aWV3TW9kZT09PXRoaXMuby5taW5WaWV3TW9kZT90aGlzLl9zZXREYXRlKGMoZyxoLGYpKToodGhpcy5zZXRWaWV3TW9kZSh0aGlzLnZpZXdNb2RlLTEpLHRoaXMuZmlsbCgpKSksdGhpcy5waWNrZXIuaXMoXCI6dmlzaWJsZVwiKSYmdGhpcy5fZm9jdXNlZF9mcm9tJiZ0aGlzLl9mb2N1c2VkX2Zyb20uZm9jdXMoKSxkZWxldGUgdGhpcy5fZm9jdXNlZF9mcm9tfSxkYXlDZWxsQ2xpY2s6ZnVuY3Rpb24oYil7dmFyIGM9YShiLmN1cnJlbnRUYXJnZXQpLGQ9Yy5kYXRhKFwiZGF0ZVwiKSxlPW5ldyBEYXRlKGQpO3RoaXMuby51cGRhdGVWaWV3RGF0ZSYmKGUuZ2V0VVRDRnVsbFllYXIoKSE9PXRoaXMudmlld0RhdGUuZ2V0VVRDRnVsbFllYXIoKSYmdGhpcy5fdHJpZ2dlcihcImNoYW5nZVllYXJcIix0aGlzLnZpZXdEYXRlKSxlLmdldFVUQ01vbnRoKCkhPT10aGlzLnZpZXdEYXRlLmdldFVUQ01vbnRoKCkmJnRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VNb250aFwiLHRoaXMudmlld0RhdGUpKSx0aGlzLl9zZXREYXRlKGUpfSxuYXZBcnJvd3NDbGljazpmdW5jdGlvbihiKXt2YXIgYz1hKGIuY3VycmVudFRhcmdldCksZD1jLmhhc0NsYXNzKFwicHJldlwiKT8tMToxOzAhPT10aGlzLnZpZXdNb2RlJiYoZCo9MTIqci52aWV3TW9kZXNbdGhpcy52aWV3TW9kZV0ubmF2U3RlcCksdGhpcy52aWV3RGF0ZT10aGlzLm1vdmVNb250aCh0aGlzLnZpZXdEYXRlLGQpLHRoaXMuX3RyaWdnZXIoci52aWV3TW9kZXNbdGhpcy52aWV3TW9kZV0uZSx0aGlzLnZpZXdEYXRlKSx0aGlzLmZpbGwoKX0sX3RvZ2dsZV9tdWx0aWRhdGU6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5kYXRlcy5jb250YWlucyhhKTtpZihhfHx0aGlzLmRhdGVzLmNsZWFyKCksYiE9PS0xPyh0aGlzLm8ubXVsdGlkYXRlPT09ITB8fHRoaXMuby5tdWx0aWRhdGU+MXx8dGhpcy5vLnRvZ2dsZUFjdGl2ZSkmJnRoaXMuZGF0ZXMucmVtb3ZlKGIpOnRoaXMuby5tdWx0aWRhdGU9PT0hMT8odGhpcy5kYXRlcy5jbGVhcigpLHRoaXMuZGF0ZXMucHVzaChhKSk6dGhpcy5kYXRlcy5wdXNoKGEpLFwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLm8ubXVsdGlkYXRlKWZvcig7dGhpcy5kYXRlcy5sZW5ndGg+dGhpcy5vLm11bHRpZGF0ZTspdGhpcy5kYXRlcy5yZW1vdmUoMCl9LF9zZXREYXRlOmZ1bmN0aW9uKGEsYil7YiYmXCJkYXRlXCIhPT1ifHx0aGlzLl90b2dnbGVfbXVsdGlkYXRlKGEmJm5ldyBEYXRlKGEpKSwoIWImJnRoaXMuby51cGRhdGVWaWV3RGF0ZXx8XCJ2aWV3XCI9PT1iKSYmKHRoaXMudmlld0RhdGU9YSYmbmV3IERhdGUoYSkpLHRoaXMuZmlsbCgpLHRoaXMuc2V0VmFsdWUoKSxiJiZcInZpZXdcIj09PWJ8fHRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VEYXRlXCIpLHRoaXMuaW5wdXRGaWVsZC50cmlnZ2VyKFwiY2hhbmdlXCIpLCF0aGlzLm8uYXV0b2Nsb3NlfHxiJiZcImRhdGVcIiE9PWJ8fHRoaXMuaGlkZSgpfSxtb3ZlRGF5OmZ1bmN0aW9uKGEsYil7dmFyIGM9bmV3IERhdGUoYSk7cmV0dXJuIGMuc2V0VVRDRGF0ZShhLmdldFVUQ0RhdGUoKStiKSxjfSxtb3ZlV2VlazpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdmVEYXkoYSw3KmIpfSxtb3ZlTW9udGg6ZnVuY3Rpb24oYSxiKXtpZighZyhhKSlyZXR1cm4gdGhpcy5vLmRlZmF1bHRWaWV3RGF0ZTtpZighYilyZXR1cm4gYTt2YXIgYyxkLGU9bmV3IERhdGUoYS52YWx1ZU9mKCkpLGY9ZS5nZXRVVENEYXRlKCksaD1lLmdldFVUQ01vbnRoKCksaT1NYXRoLmFicyhiKTtpZihiPWI+MD8xOi0xLDE9PT1pKWQ9Yj09PS0xP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZ2V0VVRDTW9udGgoKT09PWh9OmZ1bmN0aW9uKCl7cmV0dXJuIGUuZ2V0VVRDTW9udGgoKSE9PWN9LGM9aCtiLGUuc2V0VVRDTW9udGgoYyksYz0oYysxMiklMTI7ZWxzZXtmb3IodmFyIGo9MDtqPGk7aisrKWU9dGhpcy5tb3ZlTW9udGgoZSxiKTtjPWUuZ2V0VVRDTW9udGgoKSxlLnNldFVUQ0RhdGUoZiksZD1mdW5jdGlvbigpe3JldHVybiBjIT09ZS5nZXRVVENNb250aCgpfX1mb3IoO2QoKTspZS5zZXRVVENEYXRlKC0tZiksZS5zZXRVVENNb250aChjKTtyZXR1cm4gZX0sbW92ZVllYXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3ZlTW9udGgoYSwxMipiKX0sbW92ZUF2YWlsYWJsZURhdGU6ZnVuY3Rpb24oYSxiLGMpe2Rve2lmKGE9dGhpc1tjXShhLGIpLCF0aGlzLmRhdGVXaXRoaW5SYW5nZShhKSlyZXR1cm4hMTtjPVwibW92ZURheVwifXdoaWxlKHRoaXMuZGF0ZUlzRGlzYWJsZWQoYSkpO3JldHVybiBhfSx3ZWVrT2ZEYXRlSXNEaXNhYmxlZDpmdW5jdGlvbihiKXtyZXR1cm4gYS5pbkFycmF5KGIuZ2V0VVRDRGF5KCksdGhpcy5vLmRheXNPZldlZWtEaXNhYmxlZCkhPT0tMX0sZGF0ZUlzRGlzYWJsZWQ6ZnVuY3Rpb24oYil7cmV0dXJuIHRoaXMud2Vla09mRGF0ZUlzRGlzYWJsZWQoYil8fGEuZ3JlcCh0aGlzLm8uZGF0ZXNEaXNhYmxlZCxmdW5jdGlvbihhKXtyZXR1cm4gZShiLGEpfSkubGVuZ3RoPjB9LGRhdGVXaXRoaW5SYW5nZTpmdW5jdGlvbihhKXtyZXR1cm4gYT49dGhpcy5vLnN0YXJ0RGF0ZSYmYTw9dGhpcy5vLmVuZERhdGV9LGtleWRvd246ZnVuY3Rpb24oYSl7aWYoIXRoaXMucGlja2VyLmlzKFwiOnZpc2libGVcIikpcmV0dXJuIHZvaWQoNDAhPT1hLmtleUNvZGUmJjI3IT09YS5rZXlDb2RlfHwodGhpcy5zaG93KCksYS5zdG9wUHJvcGFnYXRpb24oKSkpO3ZhciBiLGMsZD0hMSxlPXRoaXMuZm9jdXNEYXRlfHx0aGlzLnZpZXdEYXRlO3N3aXRjaChhLmtleUNvZGUpe2Nhc2UgMjc6dGhpcy5mb2N1c0RhdGU/KHRoaXMuZm9jdXNEYXRlPW51bGwsdGhpcy52aWV3RGF0ZT10aGlzLmRhdGVzLmdldCgtMSl8fHRoaXMudmlld0RhdGUsdGhpcy5maWxsKCkpOnRoaXMuaGlkZSgpLGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpO2JyZWFrO2Nhc2UgMzc6Y2FzZSAzODpjYXNlIDM5OmNhc2UgNDA6aWYoIXRoaXMuby5rZXlib2FyZE5hdmlnYXRpb258fDc9PT10aGlzLm8uZGF5c09mV2Vla0Rpc2FibGVkLmxlbmd0aClicmVhaztiPTM3PT09YS5rZXlDb2RlfHwzOD09PWEua2V5Q29kZT8tMToxLDA9PT10aGlzLnZpZXdNb2RlP2EuY3RybEtleT8oYz10aGlzLm1vdmVBdmFpbGFibGVEYXRlKGUsYixcIm1vdmVZZWFyXCIpLGMmJnRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VZZWFyXCIsdGhpcy52aWV3RGF0ZSkpOmEuc2hpZnRLZXk/KGM9dGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShlLGIsXCJtb3ZlTW9udGhcIiksYyYmdGhpcy5fdHJpZ2dlcihcImNoYW5nZU1vbnRoXCIsdGhpcy52aWV3RGF0ZSkpOjM3PT09YS5rZXlDb2RlfHwzOT09PWEua2V5Q29kZT9jPXRoaXMubW92ZUF2YWlsYWJsZURhdGUoZSxiLFwibW92ZURheVwiKTp0aGlzLndlZWtPZkRhdGVJc0Rpc2FibGVkKGUpfHwoYz10aGlzLm1vdmVBdmFpbGFibGVEYXRlKGUsYixcIm1vdmVXZWVrXCIpKToxPT09dGhpcy52aWV3TW9kZT8oMzghPT1hLmtleUNvZGUmJjQwIT09YS5rZXlDb2RlfHwoYio9NCksYz10aGlzLm1vdmVBdmFpbGFibGVEYXRlKGUsYixcIm1vdmVNb250aFwiKSk6Mj09PXRoaXMudmlld01vZGUmJigzOCE9PWEua2V5Q29kZSYmNDAhPT1hLmtleUNvZGV8fChiKj00KSxjPXRoaXMubW92ZUF2YWlsYWJsZURhdGUoZSxiLFwibW92ZVllYXJcIikpLGMmJih0aGlzLmZvY3VzRGF0ZT10aGlzLnZpZXdEYXRlPWMsdGhpcy5zZXRWYWx1ZSgpLHRoaXMuZmlsbCgpLGEucHJldmVudERlZmF1bHQoKSk7YnJlYWs7Y2FzZSAxMzppZighdGhpcy5vLmZvcmNlUGFyc2UpYnJlYWs7ZT10aGlzLmZvY3VzRGF0ZXx8dGhpcy5kYXRlcy5nZXQoLTEpfHx0aGlzLnZpZXdEYXRlLHRoaXMuby5rZXlib2FyZE5hdmlnYXRpb24mJih0aGlzLl90b2dnbGVfbXVsdGlkYXRlKGUpLGQ9ITApLHRoaXMuZm9jdXNEYXRlPW51bGwsdGhpcy52aWV3RGF0ZT10aGlzLmRhdGVzLmdldCgtMSl8fHRoaXMudmlld0RhdGUsdGhpcy5zZXRWYWx1ZSgpLHRoaXMuZmlsbCgpLHRoaXMucGlja2VyLmlzKFwiOnZpc2libGVcIikmJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLm8uYXV0b2Nsb3NlJiZ0aGlzLmhpZGUoKSk7YnJlYWs7Y2FzZSA5OnRoaXMuZm9jdXNEYXRlPW51bGwsdGhpcy52aWV3RGF0ZT10aGlzLmRhdGVzLmdldCgtMSl8fHRoaXMudmlld0RhdGUsdGhpcy5maWxsKCksdGhpcy5oaWRlKCl9ZCYmKHRoaXMuZGF0ZXMubGVuZ3RoP3RoaXMuX3RyaWdnZXIoXCJjaGFuZ2VEYXRlXCIpOnRoaXMuX3RyaWdnZXIoXCJjbGVhckRhdGVcIiksdGhpcy5pbnB1dEZpZWxkLnRyaWdnZXIoXCJjaGFuZ2VcIikpfSxzZXRWaWV3TW9kZTpmdW5jdGlvbihhKXt0aGlzLnZpZXdNb2RlPWEsdGhpcy5waWNrZXIuY2hpbGRyZW4oXCJkaXZcIikuaGlkZSgpLmZpbHRlcihcIi5kYXRlcGlja2VyLVwiK3Iudmlld01vZGVzW3RoaXMudmlld01vZGVdLmNsc05hbWUpLnNob3coKSx0aGlzLnVwZGF0ZU5hdkFycm93cygpLHRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VWaWV3TW9kZVwiLG5ldyBEYXRlKHRoaXMudmlld0RhdGUpKX19O3ZhciBsPWZ1bmN0aW9uKGIsYyl7YS5kYXRhKGIsXCJkYXRlcGlja2VyXCIsdGhpcyksdGhpcy5lbGVtZW50PWEoYiksdGhpcy5pbnB1dHM9YS5tYXAoYy5pbnB1dHMsZnVuY3Rpb24oYSl7cmV0dXJuIGEuanF1ZXJ5P2FbMF06YX0pLGRlbGV0ZSBjLmlucHV0cyx0aGlzLmtlZXBFbXB0eVZhbHVlcz1jLmtlZXBFbXB0eVZhbHVlcyxkZWxldGUgYy5rZWVwRW1wdHlWYWx1ZXMsbi5jYWxsKGEodGhpcy5pbnB1dHMpLGMpLm9uKFwiY2hhbmdlRGF0ZVwiLGEucHJveHkodGhpcy5kYXRlVXBkYXRlZCx0aGlzKSksdGhpcy5waWNrZXJzPWEubWFwKHRoaXMuaW5wdXRzLGZ1bmN0aW9uKGIpe3JldHVybiBhLmRhdGEoYixcImRhdGVwaWNrZXJcIil9KSx0aGlzLnVwZGF0ZURhdGVzKCl9O2wucHJvdG90eXBlPXt1cGRhdGVEYXRlczpmdW5jdGlvbigpe3RoaXMuZGF0ZXM9YS5tYXAodGhpcy5waWNrZXJzLGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldFVUQ0RhdGUoKX0pLHRoaXMudXBkYXRlUmFuZ2VzKCl9LHVwZGF0ZVJhbmdlczpmdW5jdGlvbigpe3ZhciBiPWEubWFwKHRoaXMuZGF0ZXMsZnVuY3Rpb24oYSl7cmV0dXJuIGEudmFsdWVPZigpfSk7YS5lYWNoKHRoaXMucGlja2VycyxmdW5jdGlvbihhLGMpe2Muc2V0UmFuZ2UoYil9KX0sY2xlYXJEYXRlczpmdW5jdGlvbigpe2EuZWFjaCh0aGlzLnBpY2tlcnMsZnVuY3Rpb24oYSxiKXtiLmNsZWFyRGF0ZXMoKX0pfSxkYXRlVXBkYXRlZDpmdW5jdGlvbihjKXtpZighdGhpcy51cGRhdGluZyl7dGhpcy51cGRhdGluZz0hMDt2YXIgZD1hLmRhdGEoYy50YXJnZXQsXCJkYXRlcGlja2VyXCIpO2lmKGQhPT1iKXt2YXIgZT1kLmdldFVUQ0RhdGUoKSxmPXRoaXMua2VlcEVtcHR5VmFsdWVzLGc9YS5pbkFycmF5KGMudGFyZ2V0LHRoaXMuaW5wdXRzKSxoPWctMSxpPWcrMSxqPXRoaXMuaW5wdXRzLmxlbmd0aDtpZihnIT09LTEpe2lmKGEuZWFjaCh0aGlzLnBpY2tlcnMsZnVuY3Rpb24oYSxiKXtiLmdldFVUQ0RhdGUoKXx8YiE9PWQmJmZ8fGIuc2V0VVRDRGF0ZShlKX0pLGU8dGhpcy5kYXRlc1toXSlmb3IoO2g+PTAmJmU8dGhpcy5kYXRlc1toXTspdGhpcy5waWNrZXJzW2gtLV0uc2V0VVRDRGF0ZShlKTtlbHNlIGlmKGU+dGhpcy5kYXRlc1tpXSlmb3IoO2k8aiYmZT50aGlzLmRhdGVzW2ldOyl0aGlzLnBpY2tlcnNbaSsrXS5zZXRVVENEYXRlKGUpO3RoaXMudXBkYXRlRGF0ZXMoKSxkZWxldGUgdGhpcy51cGRhdGluZ319fX0sZGVzdHJveTpmdW5jdGlvbigpe2EubWFwKHRoaXMucGlja2VycyxmdW5jdGlvbihhKXthLmRlc3Ryb3koKX0pLGEodGhpcy5pbnB1dHMpLm9mZihcImNoYW5nZURhdGVcIix0aGlzLmRhdGVVcGRhdGVkKSxkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlcGlja2VyfSxyZW1vdmU6ZihcImRlc3Ryb3lcIixcIk1ldGhvZCBgcmVtb3ZlYCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiAyLjAuIFVzZSBgZGVzdHJveWAgaW5zdGVhZFwiKX07dmFyIG09YS5mbi5kYXRlcGlja2VyLG49ZnVuY3Rpb24oYyl7dmFyIGQ9QXJyYXkuYXBwbHkobnVsbCxhcmd1bWVudHMpO2Quc2hpZnQoKTt2YXIgZTtpZih0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLGY9Yi5kYXRhKFwiZGF0ZXBpY2tlclwiKSxnPVwib2JqZWN0XCI9PXR5cGVvZiBjJiZjO2lmKCFmKXt2YXIgaj1oKHRoaXMsXCJkYXRlXCIpLG09YS5leHRlbmQoe30sbyxqLGcpLG49aShtLmxhbmd1YWdlKSxwPWEuZXh0ZW5kKHt9LG8sbixqLGcpO2IuaGFzQ2xhc3MoXCJpbnB1dC1kYXRlcmFuZ2VcIil8fHAuaW5wdXRzPyhhLmV4dGVuZChwLHtpbnB1dHM6cC5pbnB1dHN8fGIuZmluZChcImlucHV0XCIpLnRvQXJyYXkoKX0pLGY9bmV3IGwodGhpcyxwKSk6Zj1uZXcgayh0aGlzLHApLGIuZGF0YShcImRhdGVwaWNrZXJcIixmKX1cInN0cmluZ1wiPT10eXBlb2YgYyYmXCJmdW5jdGlvblwiPT10eXBlb2YgZltjXSYmKGU9ZltjXS5hcHBseShmLGQpKX0pLGU9PT1ifHxlIGluc3RhbmNlb2Yga3x8ZSBpbnN0YW5jZW9mIGwpcmV0dXJuIHRoaXM7aWYodGhpcy5sZW5ndGg+MSl0aHJvdyBuZXcgRXJyb3IoXCJVc2luZyBvbmx5IGFsbG93ZWQgZm9yIHRoZSBjb2xsZWN0aW9uIG9mIGEgc2luZ2xlIGVsZW1lbnQgKFwiK2MrXCIgZnVuY3Rpb24pXCIpO3JldHVybiBlfTthLmZuLmRhdGVwaWNrZXI9bjt2YXIgbz1hLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHM9e2Fzc3VtZU5lYXJieVllYXI6ITEsYXV0b2Nsb3NlOiExLGJlZm9yZVNob3dEYXk6YS5ub29wLGJlZm9yZVNob3dNb250aDphLm5vb3AsYmVmb3JlU2hvd1llYXI6YS5ub29wLGJlZm9yZVNob3dEZWNhZGU6YS5ub29wLGJlZm9yZVNob3dDZW50dXJ5OmEubm9vcCxjYWxlbmRhcldlZWtzOiExLGNsZWFyQnRuOiExLHRvZ2dsZUFjdGl2ZTohMSxkYXlzT2ZXZWVrRGlzYWJsZWQ6W10sZGF5c09mV2Vla0hpZ2hsaWdodGVkOltdLGRhdGVzRGlzYWJsZWQ6W10sZW5kRGF0ZToxLzAsZm9yY2VQYXJzZTohMCxmb3JtYXQ6XCJtbS9kZC95eXl5XCIsa2VlcEVtcHR5VmFsdWVzOiExLGtleWJvYXJkTmF2aWdhdGlvbjohMCxsYW5ndWFnZTpcImVuXCIsbWluVmlld01vZGU6MCxtYXhWaWV3TW9kZTo0LG11bHRpZGF0ZTohMSxtdWx0aWRhdGVTZXBhcmF0b3I6XCIsXCIsb3JpZW50YXRpb246XCJhdXRvXCIscnRsOiExLHN0YXJ0RGF0ZTotKDEvMCksc3RhcnRWaWV3OjAsdG9kYXlCdG46ITEsdG9kYXlIaWdobGlnaHQ6ITEsdXBkYXRlVmlld0RhdGU6ITAsd2Vla1N0YXJ0OjAsZGlzYWJsZVRvdWNoS2V5Ym9hcmQ6ITEsZW5hYmxlT25SZWFkb25seTohMCxzaG93T25Gb2N1czohMCx6SW5kZXhPZmZzZXQ6MTAsY29udGFpbmVyOlwiYm9keVwiLGltbWVkaWF0ZVVwZGF0ZXM6ITEsdGl0bGU6XCJcIix0ZW1wbGF0ZXM6e2xlZnRBcnJvdzpcIiYjeDAwQUI7XCIscmlnaHRBcnJvdzpcIiYjeDAwQkI7XCJ9LHNob3dXZWVrRGF5czohMH0scD1hLmZuLmRhdGVwaWNrZXIubG9jYWxlX29wdHM9W1wiZm9ybWF0XCIsXCJydGxcIixcIndlZWtTdGFydFwiXTthLmZuLmRhdGVwaWNrZXIuQ29uc3RydWN0b3I9azt2YXIgcT1hLmZuLmRhdGVwaWNrZXIuZGF0ZXM9e2VuOntkYXlzOltcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdLGRheXNTaG9ydDpbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0sZGF5c01pbjpbXCJTdVwiLFwiTW9cIixcIlR1XCIsXCJXZVwiLFwiVGhcIixcIkZyXCIsXCJTYVwiXSxtb250aHM6W1wiSmFudWFyeVwiLFwiRmVicnVhcnlcIixcIk1hcmNoXCIsXCJBcHJpbFwiLFwiTWF5XCIsXCJKdW5lXCIsXCJKdWx5XCIsXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2N0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlY2VtYmVyXCJdLG1vbnRoc1Nob3J0OltcIkphblwiLFwiRmViXCIsXCJNYXJcIixcIkFwclwiLFwiTWF5XCIsXCJKdW5cIixcIkp1bFwiLFwiQXVnXCIsXCJTZXBcIixcIk9jdFwiLFwiTm92XCIsXCJEZWNcIl0sdG9kYXk6XCJUb2RheVwiLGNsZWFyOlwiQ2xlYXJcIix0aXRsZUZvcm1hdDpcIk1NIHl5eXlcIn19LHI9e3ZpZXdNb2Rlczpbe25hbWVzOltcImRheXNcIixcIm1vbnRoXCJdLGNsc05hbWU6XCJkYXlzXCIsZTpcImNoYW5nZU1vbnRoXCJ9LHtuYW1lczpbXCJtb250aHNcIixcInllYXJcIl0sY2xzTmFtZTpcIm1vbnRoc1wiLGU6XCJjaGFuZ2VZZWFyXCIsbmF2U3RlcDoxfSx7bmFtZXM6W1wieWVhcnNcIixcImRlY2FkZVwiXSxjbHNOYW1lOlwieWVhcnNcIixlOlwiY2hhbmdlRGVjYWRlXCIsbmF2U3RlcDoxMH0se25hbWVzOltcImRlY2FkZXNcIixcImNlbnR1cnlcIl0sY2xzTmFtZTpcImRlY2FkZXNcIixlOlwiY2hhbmdlQ2VudHVyeVwiLG5hdlN0ZXA6MTAwfSx7bmFtZXM6W1wiY2VudHVyaWVzXCIsXCJtaWxsZW5uaXVtXCJdLGNsc05hbWU6XCJjZW50dXJpZXNcIixlOlwiY2hhbmdlTWlsbGVubml1bVwiLG5hdlN0ZXA6MWUzfV0sdmFsaWRQYXJ0czovZGQ/fEREP3xtbT98TU0/fHl5KD86eXkpPy9nLG5vbnB1bmN0dWF0aW9uOi9bXiAtXFwvOi1AXFx1NWU3NFxcdTY3MDhcXHU2NWU1XFxbLWB7LX5cXHRcXG5cXHJdKy9nLHBhcnNlRm9ybWF0OmZ1bmN0aW9uKGEpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGEudG9WYWx1ZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYS50b0Rpc3BsYXkpcmV0dXJuIGE7dmFyIGI9YS5yZXBsYWNlKHRoaXMudmFsaWRQYXJ0cyxcIlxcMFwiKS5zcGxpdChcIlxcMFwiKSxjPWEubWF0Y2godGhpcy52YWxpZFBhcnRzKTtpZighYnx8IWIubGVuZ3RofHwhY3x8MD09PWMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGF0ZSBmb3JtYXQuXCIpO3JldHVybntzZXBhcmF0b3JzOmIscGFydHM6Y319LHBhcnNlRGF0ZTpmdW5jdGlvbihjLGUsZixnKXtmdW5jdGlvbiBoKGEsYil7cmV0dXJuIGI9PT0hMCYmKGI9MTApLGE8MTAwJiYoYSs9MmUzLGE+KG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpK2ImJihhLT0xMDApKSxhfWZ1bmN0aW9uIGkoKXt2YXIgYT10aGlzLnNsaWNlKDAsaltuXS5sZW5ndGgpLGI9altuXS5zbGljZSgwLGEubGVuZ3RoKTtyZXR1cm4gYS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfWlmKCFjKXJldHVybiBiO2lmKGMgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBjO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1yLnBhcnNlRm9ybWF0KGUpKSxlLnRvVmFsdWUpcmV0dXJuIGUudG9WYWx1ZShjLGUsZik7dmFyIGosbCxtLG4sbyxwPXtkOlwibW92ZURheVwiLG06XCJtb3ZlTW9udGhcIix3OlwibW92ZVdlZWtcIix5OlwibW92ZVllYXJcIn0scz17eWVzdGVyZGF5OlwiLTFkXCIsdG9kYXk6XCIrMGRcIix0b21vcnJvdzpcIisxZFwifTtpZihjIGluIHMmJihjPXNbY10pLC9eW1xcLStdXFxkK1tkbXd5XShbXFxzLF0rW1xcLStdXFxkK1tkbXd5XSkqJC9pLnRlc3QoYykpe2ZvcihqPWMubWF0Y2goLyhbXFwtK11cXGQrKShbZG13eV0pL2dpKSxjPW5ldyBEYXRlLG49MDtuPGoubGVuZ3RoO24rKylsPWpbbl0ubWF0Y2goLyhbXFwtK11cXGQrKShbZG13eV0pL2kpLG09TnVtYmVyKGxbMV0pLG89cFtsWzJdLnRvTG93ZXJDYXNlKCldLGM9ay5wcm90b3R5cGVbb10oYyxtKTtyZXR1cm4gay5wcm90b3R5cGUuX3plcm9fdXRjX3RpbWUoYyl9aj1jJiZjLm1hdGNoKHRoaXMubm9ucHVuY3R1YXRpb24pfHxbXTt2YXIgdCx1LHY9e30sdz1bXCJ5eXl5XCIsXCJ5eVwiLFwiTVwiLFwiTU1cIixcIm1cIixcIm1tXCIsXCJkXCIsXCJkZFwiXSx4PXt5eXl5OmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuc2V0VVRDRnVsbFllYXIoZz9oKGIsZyk6Yil9LG06ZnVuY3Rpb24oYSxiKXtpZihpc05hTihhKSlyZXR1cm4gYTtmb3IoYi09MTtiPDA7KWIrPTEyO2ZvcihiJT0xMixhLnNldFVUQ01vbnRoKGIpO2EuZ2V0VVRDTW9udGgoKSE9PWI7KWEuc2V0VVRDRGF0ZShhLmdldFVUQ0RhdGUoKS0xKTtyZXR1cm4gYX0sZDpmdW5jdGlvbihhLGIpe3JldHVybiBhLnNldFVUQ0RhdGUoYil9fTt4Lnl5PXgueXl5eSx4Lk09eC5NTT14Lm1tPXgubSx4LmRkPXguZCxjPWQoKTt2YXIgeT1lLnBhcnRzLnNsaWNlKCk7aWYoai5sZW5ndGghPT15Lmxlbmd0aCYmKHk9YSh5KS5maWx0ZXIoZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5pbkFycmF5KGMsdykhPT0tMX0pLnRvQXJyYXkoKSksai5sZW5ndGg9PT15Lmxlbmd0aCl7dmFyIHo7Zm9yKG49MCx6PXkubGVuZ3RoO248ejtuKyspe2lmKHQ9cGFyc2VJbnQoaltuXSwxMCksbD15W25dLGlzTmFOKHQpKXN3aXRjaChsKXtjYXNlXCJNTVwiOnU9YShxW2ZdLm1vbnRocykuZmlsdGVyKGkpLHQ9YS5pbkFycmF5KHVbMF0scVtmXS5tb250aHMpKzE7YnJlYWs7Y2FzZVwiTVwiOnU9YShxW2ZdLm1vbnRoc1Nob3J0KS5maWx0ZXIoaSksdD1hLmluQXJyYXkodVswXSxxW2ZdLm1vbnRoc1Nob3J0KSsxfXZbbF09dH12YXIgQSxCO2ZvcihuPTA7bjx3Lmxlbmd0aDtuKyspQj13W25dLEIgaW4gdiYmIWlzTmFOKHZbQl0pJiYoQT1uZXcgRGF0ZShjKSx4W0JdKEEsdltCXSksaXNOYU4oQSl8fChjPUEpKX1yZXR1cm4gY30sZm9ybWF0RGF0ZTpmdW5jdGlvbihiLGMsZCl7aWYoIWIpcmV0dXJuXCJcIjtpZihcInN0cmluZ1wiPT10eXBlb2YgYyYmKGM9ci5wYXJzZUZvcm1hdChjKSksYy50b0Rpc3BsYXkpcmV0dXJuIGMudG9EaXNwbGF5KGIsYyxkKTt2YXIgZT17ZDpiLmdldFVUQ0RhdGUoKSxEOnFbZF0uZGF5c1Nob3J0W2IuZ2V0VVRDRGF5KCldLEREOnFbZF0uZGF5c1tiLmdldFVUQ0RheSgpXSxtOmIuZ2V0VVRDTW9udGgoKSsxLE06cVtkXS5tb250aHNTaG9ydFtiLmdldFVUQ01vbnRoKCldLE1NOnFbZF0ubW9udGhzW2IuZ2V0VVRDTW9udGgoKV0seXk6Yi5nZXRVVENGdWxsWWVhcigpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIpLHl5eXk6Yi5nZXRVVENGdWxsWWVhcigpfTtlLmRkPShlLmQ8MTA/XCIwXCI6XCJcIikrZS5kLGUubW09KGUubTwxMD9cIjBcIjpcIlwiKStlLm0sYj1bXTtmb3IodmFyIGY9YS5leHRlbmQoW10sYy5zZXBhcmF0b3JzKSxnPTAsaD1jLnBhcnRzLmxlbmd0aDtnPD1oO2crKylmLmxlbmd0aCYmYi5wdXNoKGYuc2hpZnQoKSksYi5wdXNoKGVbYy5wYXJ0c1tnXV0pO3JldHVybiBiLmpvaW4oXCJcIil9LGhlYWRUZW1wbGF0ZTonPHRoZWFkPjx0cj48dGggY29sc3Bhbj1cIjdcIiBjbGFzcz1cImRhdGVwaWNrZXItdGl0bGVcIj48L3RoPjwvdHI+PHRyPjx0aCBjbGFzcz1cInByZXZcIj4nK28udGVtcGxhdGVzLmxlZnRBcnJvdysnPC90aD48dGggY29sc3Bhbj1cIjVcIiBjbGFzcz1cImRhdGVwaWNrZXItc3dpdGNoXCI+PC90aD48dGggY2xhc3M9XCJuZXh0XCI+JytvLnRlbXBsYXRlcy5yaWdodEFycm93K1wiPC90aD48L3RyPjwvdGhlYWQ+XCIsXG5jb250VGVtcGxhdGU6Jzx0Ym9keT48dHI+PHRkIGNvbHNwYW49XCI3XCI+PC90ZD48L3RyPjwvdGJvZHk+Jyxmb290VGVtcGxhdGU6Jzx0Zm9vdD48dHI+PHRoIGNvbHNwYW49XCI3XCIgY2xhc3M9XCJ0b2RheVwiPjwvdGg+PC90cj48dHI+PHRoIGNvbHNwYW49XCI3XCIgY2xhc3M9XCJjbGVhclwiPjwvdGg+PC90cj48L3Rmb290Pid9O3IudGVtcGxhdGU9JzxkaXYgY2xhc3M9XCJkYXRlcGlja2VyXCI+PGRpdiBjbGFzcz1cImRhdGVwaWNrZXItZGF5c1wiPjx0YWJsZSBjbGFzcz1cInRhYmxlLWNvbmRlbnNlZFwiPicrci5oZWFkVGVtcGxhdGUrXCI8dGJvZHk+PC90Ym9keT5cIityLmZvb3RUZW1wbGF0ZSsnPC90YWJsZT48L2Rpdj48ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1tb250aHNcIj48dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK3IuaGVhZFRlbXBsYXRlK3IuY29udFRlbXBsYXRlK3IuZm9vdFRlbXBsYXRlKyc8L3RhYmxlPjwvZGl2PjxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLXllYXJzXCI+PHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+JytyLmhlYWRUZW1wbGF0ZStyLmNvbnRUZW1wbGF0ZStyLmZvb3RUZW1wbGF0ZSsnPC90YWJsZT48L2Rpdj48ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1kZWNhZGVzXCI+PHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+JytyLmhlYWRUZW1wbGF0ZStyLmNvbnRUZW1wbGF0ZStyLmZvb3RUZW1wbGF0ZSsnPC90YWJsZT48L2Rpdj48ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1jZW50dXJpZXNcIj48dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK3IuaGVhZFRlbXBsYXRlK3IuY29udFRlbXBsYXRlK3IuZm9vdFRlbXBsYXRlK1wiPC90YWJsZT48L2Rpdj48L2Rpdj5cIixhLmZuLmRhdGVwaWNrZXIuRFBHbG9iYWw9cixhLmZuLmRhdGVwaWNrZXIubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmRhdGVwaWNrZXI9bSx0aGlzfSxhLmZuLmRhdGVwaWNrZXIudmVyc2lvbj1cIjEuOC4wXCIsYS5mbi5kYXRlcGlja2VyLmRlcHJlY2F0ZWQ9ZnVuY3Rpb24oYSl7dmFyIGI9d2luZG93LmNvbnNvbGU7YiYmYi53YXJuJiZiLndhcm4oXCJERVBSRUNBVEVEOiBcIithKX0sYShkb2N1bWVudCkub24oXCJmb2N1cy5kYXRlcGlja2VyLmRhdGEtYXBpIGNsaWNrLmRhdGVwaWNrZXIuZGF0YS1hcGlcIiwnW2RhdGEtcHJvdmlkZT1cImRhdGVwaWNrZXJcIl0nLGZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcyk7Yy5kYXRhKFwiZGF0ZXBpY2tlclwiKXx8KGIucHJldmVudERlZmF1bHQoKSxuLmNhbGwoYyxcInNob3dcIikpfSksYShmdW5jdGlvbigpe24uY2FsbChhKCdbZGF0YS1wcm92aWRlPVwiZGF0ZXBpY2tlci1pbmxpbmVcIl0nKSl9KX0pO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9sb2NhbGVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmZyLm1pbi5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE3LzA4LzIwMjAgMTQ6MjBcblxuIWZ1bmN0aW9uKGEpe2EuZm4uZGF0ZXBpY2tlci5kYXRlcy5mcj17ZGF5czpbXCJkaW1hbmNoZVwiLFwibHVuZGlcIixcIm1hcmRpXCIsXCJtZXJjcmVkaVwiLFwiamV1ZGlcIixcInZlbmRyZWRpXCIsXCJzYW1lZGlcIl0sZGF5c1Nob3J0OltcImRpbS5cIixcImx1bi5cIixcIm1hci5cIixcIm1lci5cIixcImpldS5cIixcInZlbi5cIixcInNhbS5cIl0sZGF5c01pbjpbXCJkXCIsXCJsXCIsXCJtYVwiLFwibWVcIixcImpcIixcInZcIixcInNcIl0sbW9udGhzOltcImphbnZpZXJcIixcImbDqXZyaWVyXCIsXCJtYXJzXCIsXCJhdnJpbFwiLFwibWFpXCIsXCJqdWluXCIsXCJqdWlsbGV0XCIsXCJhb8O7dFwiLFwic2VwdGVtYnJlXCIsXCJvY3RvYnJlXCIsXCJub3ZlbWJyZVwiLFwiZMOpY2VtYnJlXCJdLG1vbnRoc1Nob3J0OltcImphbnYuXCIsXCJmw6l2ci5cIixcIm1hcnNcIixcImF2cmlsXCIsXCJtYWlcIixcImp1aW5cIixcImp1aWwuXCIsXCJhb8O7dFwiLFwic2VwdC5cIixcIm9jdC5cIixcIm5vdi5cIixcImTDqWMuXCJdLHRvZGF5OlwiQXVqb3VyZCdodWlcIixtb250aHNUaXRsZTpcIk1vaXNcIixjbGVhcjpcIkVmZmFjZXJcIix3ZWVrU3RhcnQ6MSxmb3JtYXQ6XCJkZC9tbS95eXl5XCJ9fShqUXVlcnkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agenda~app"],{

/***/ "./assets/controllers sync recursive \\.(j|t)sx?$":
/*!*********************************************!*\
  !*** ./assets/controllers sync \.(j|t)sx?$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./assets/controllers sync recursive \\.(j|t)sx?$";

/***/ }),

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
/*! exports provided: app2, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app2", function() { return app2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reloadQv; });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_free_scss_fontawesome_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/scss/fontawesome.scss */ "./node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss");
/* harmony import */ var _fortawesome_fontawesome_free_scss_fontawesome_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_scss_fontawesome_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_free_scss_solid_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free/scss/solid.scss */ "./node_modules/@fortawesome/fontawesome-free/scss/solid.scss");
/* harmony import */ var _fortawesome_fontawesome_free_scss_solid_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_scss_solid_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_select_dist_css_bootstrap_select_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-select/dist/css/bootstrap-select.min.css */ "./node_modules/bootstrap-select/dist/css/bootstrap-select.min.css");
/* harmony import */ var bootstrap_select_dist_css_bootstrap_select_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_select_dist_css_bootstrap_select_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vendor_bootstrap_datepicker_css_bootstrap_datepicker3_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css */ "./assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css");
/* harmony import */ var _vendor_bootstrap_datepicker_css_bootstrap_datepicker3_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_datepicker_css_bootstrap_datepicker3_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vendor_bootstrap_datepicker_js_bootstrap_datepicker_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js */ "./assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js");
/* harmony import */ var _vendor_bootstrap_datepicker_js_bootstrap_datepicker_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_datepicker_js_bootstrap_datepicker_min_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vendor_bootstrap_datepicker_locales_bootstrap_datepicker_fr_min__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min */ "./assets/vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min.js");
/* harmony import */ var _vendor_bootstrap_datepicker_locales_bootstrap_datepicker_fr_min__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_datepicker_locales_bootstrap_datepicker_fr_min__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var _validator_bs4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./validator-bs4 */ "./assets/js/validator-bs4.js");
/* harmony import */ var _validator_bs4__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_validator_bs4__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util */ "./assets/js/util.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material */ "./assets/js/material.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search */ "./assets/js/search.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_search__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _modaler__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modaler */ "./assets/js/modaler.js");
/* harmony import */ var _modaler__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_modaler__WEBPACK_IMPORTED_MODULE_17__);



// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/app.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/12/2020 13:43
// any CSS you import will output into a single css file (app.css in this case)

var app2 = Object(_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_3__["startStimulusApp"])(__webpack_require__("./assets/controllers sync recursive \\.(j|t)sx?$"));















__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

var lookup = {};

__webpack_require__(/*! bootstrap-select */ "./node_modules/bootstrap-select/dist/js/bootstrap-select.js");

jquery__WEBPACK_IMPORTED_MODULE_11___default()('input[type="file"]').on('change', function (e) {
  var filename = e.target.files[0].name;
  jquery__WEBPACK_IMPORTED_MODULE_11___default()('.custom-file-label').html(filename);
});
jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).ready(function () {
  // copy link EDT
  jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '#copyLink', function () {
    jquery__WEBPACK_IMPORTED_MODULE_11___default()('#lienIcal').select();
    document.execCommand('copy');
  }); // script pour afficher le fichier selectionné avec bootstrap4

  jquery__WEBPACK_IMPORTED_MODULE_11___default()('.custom-file input').change(function (e) {
    var files = [];

    for (var i = 0; i < jquery__WEBPACK_IMPORTED_MODULE_11___default()(this)[0].files.length; i++) {
      files.push(jquery__WEBPACK_IMPORTED_MODULE_11___default()(this)[0].files[i].name);
    }

    jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).next('.custom-file-label').html(files.join(', '));
  });
  var preloader = jquery__WEBPACK_IMPORTED_MODULE_11___default()('.preloader');

  if (preloader.length) {
    var speed = preloader.dataAttr('hide-spped', 600);
    preloader.fadeOut(speed);
  }

  jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('focus', '.topbar-search input', function () {
    jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).closest('.topbar-search').find('.lookup-placeholder span').css('opacity', '0');
  });
  jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('blur', '.topbar-search input', function () {
    jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).closest('.topbar-search').find('.lookup-placeholder span').css('opacity', '1');
  });
  jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '#lookup', function (e) {
    e.preventDefault();
    var target = jquery__WEBPACK_IMPORTED_MODULE_11___default()('#lookup-full');

    if (target !== false) {
      lookup.toggle(target);
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '#lookup-close', function () {
    lookup.toggle(jquery__WEBPACK_IMPORTED_MODULE_11___default()('#lookup-full'));
  }); //tooltip

  updateInterface();
  jquery__WEBPACK_IMPORTED_MODULE_11___default()('[data-provide="validation"]').validator();
});
jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).ajaxComplete(function () {
  updateInterface();
}); // Fullscreen
//

jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '.card-btn-fullscreen', function () {
  jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).closest('.card').toggleClass('card-fullscreen').removeClass('card-maximize');
}); // Slide up/down

jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '.card-btn-slide', function () {
  jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).toggleClass('rotate-180').closest('.card').find('.card-content').slideToggle();
}); //modaler

jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '[data-provide~="modaler"]', function () {
  modaler(Object(_util__WEBPACK_IMPORTED_MODULE_14__["getDataOptions"])(jquery__WEBPACK_IMPORTED_MODULE_11___default()(this)));
});

function updateInterface() {
  //selectpicker
  jquery__WEBPACK_IMPORTED_MODULE_11___default()('.selectpicker').selectpicker({
    iconBase: '',
    tickIcon: 'fas fa-check',
    style: 'btn-light',
    size: 10,
    liveSearch: true
  }); //tooltip

  jquery__WEBPACK_IMPORTED_MODULE_11___default()('[data-provide~="tooltip"]').each(function () {
    var color = '';

    if (jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).hasDataAttr('tooltip-color')) {
      color = ' tooltip-' + jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).data('tooltip-color');
    }

    jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).tooltip({
      container: 'body',
      trigger: 'hover',
      template: '<div class="tooltip' + color + '" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_11___default()('[data-provide~="datepicker"]').each(function () {
    var options = {
      multidateSeparator: ', ',
      language: 'fr',
      daysOfWeekHighlighted: '06',
      format: 'dd/mm/yyyy'
    };

    if (jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).prop('tagName') != 'INPUT') {
      //si ce n'est pas un input => donc un date range
      options.inputs = [jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).find('input:first'), jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).find('input:last')];
    }

    jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).datepicker(options);
  });
} // Open fullscreen lookup
//


lookup.toggle = function (e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).hasClass('reveal')) {
    lookup.close(e);
  } else {
    lookup.open(e);
  }
}; // Close fullscreen lookup
//


lookup.close = function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).removeClass('reveal');
  jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').removeClass('no-scroll');
}; // Close fullscreen lookup
//


lookup.open = function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).addClass('reveal');
  jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).find('.lookup-form input').focus();
  jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').addClass('no-scroll');
}; // =====================
// Sidebar
// =====================


var sidebar = {}; // Scrollable

console.log(document.getElementsByClassName('sidebar-navigation'));

if (document.getElementsByClassName('sidebar-navigation').length > 0) {
  var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["default"]('.sidebar-navigation');
} // Handle sidebar openner
//


jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '.sidebar-toggler', function () {
  sidebar.open();
}); // Close sidebar when backdrop touches
//

jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '.backdrop-sidebar', function () {
  sidebar.close();
}); // Slide up/down menu item on click
//

jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '.sidebar .menu-link', function () {
  var $submenu = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).next('.menu-submenu');
  if ($submenu.length < 1) return;

  if ($submenu.is(':visible')) {
    $submenu.slideUp(function () {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('.sidebar .menu-item.open').removeClass('open');
    });
    jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).removeClass('open');
    return;
  }

  jquery__WEBPACK_IMPORTED_MODULE_11___default()('.sidebar .menu-submenu:visible').slideUp();
  jquery__WEBPACK_IMPORTED_MODULE_11___default()('.sidebar .menu-link').removeClass('open');
  $submenu.slideToggle(function () {
    jquery__WEBPACK_IMPORTED_MODULE_11___default()('.sidebar .menu-item.open').removeClass('open');
  });
  jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).addClass('open');
}); // Handle fold toggler
//

jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '.sidebar-toggle-fold', function () {
  sidebar.toggleFold();
}); //}

sidebar.toggleFold = function () {
  jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').toggleClass('sidebar-folded');
  app.toggleState('sidebar.folded');
};

sidebar.fold = function () {
  jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').addClass('sidebar-folded');
  app.state('sidebar.folded', true);
};

sidebar.unfold = function () {
  jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').removeClass('sidebar-folded');
  app.state('sidebar.folded', false);
};

sidebar.toggleHide = function () {
  jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').toggleClass('sidebar-hidden');
  app.toggleState('sidebar.hidden');
};

sidebar.hide = function () {
  jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').addClass('sidebar-hidden');
  app.state('sidebar.hidden', true);
};

sidebar.show = function () {
  jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').removeClass('sidebar-hidden');
  app.state('sidebar.hidden', false);
};

sidebar.open = function () {
  jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').addClass('sidebar-open').prepend('<div class="app-backdrop backdrop-sidebar"></div>');
};

sidebar.close = function () {
  jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').removeClass('sidebar-open');
  jquery__WEBPACK_IMPORTED_MODULE_11___default()('.backdrop-sidebar').remove();
}; // =====================
// Quickview
// =====================
//


var quickview = {};
var qps = null; // Update scrollbar on tab change
//

jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('shown.bs.tab', '.quickview-header a[data-toggle="tab"]', function (e) {
  qps.update();
});
function reloadQv() {
  qps.destroy();
  qps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["default"]('.quickview');
} // Quickview closer
//

jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '[data-dismiss="quickview"]', function () {
  quickview.close(jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).closest('.quickview'));
}); // Handle quickview openner
//

jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '[data-toggle="quickview"]', function (e) {
  e.preventDefault();
  var target = app.getTarget(jquery__WEBPACK_IMPORTED_MODULE_11___default()(this));

  if (target == false) {
    quickview.close(jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).closest('.quickview'));
  } else {
    var url = '';

    if (jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).hasDataAttr('url')) {
      url = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).data('url');
    }

    quickview.toggle(target, url);
  }
}); // Close quickview when backdrop touches
//

jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '.backdrop-quickview', function () {
  var qv = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).attr('data-target');

  if (!jquery__WEBPACK_IMPORTED_MODULE_11___default()(qv).is('[data-disable-backdrop-click]')) {
    quickview.close(qv);
  }
});
jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '.quickview .close, [data-dismiss="quickview"]', function () {
  var qv = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).closest('.quickview');
  quickview.close(qv);
}); // Toggle open/close state
//

quickview.toggle = function (e, url) {
  if (jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).hasClass('reveal')) {
    quickview.close(e);
  } else {
    if (url !== '') {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).html('<div class="spinner-linear"><div class="line"></div></div>');
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).load(url, function () {
        qps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["default"]('.quickview');
      });
    }

    quickview.open(e);
  }
}; // Open quickview
//


quickview.open = function (e) {
  var quickview = jquery__WEBPACK_IMPORTED_MODULE_11___default()(e);
  var url = ''; // Load content from URL if required

  if (quickview.hasDataAttr('url') && 'true' !== quickview.data('url-has-loaded')) {
    if (quickview.data('url') === 'no-url') {
      url = Routing.generate('quick_view');
    } else {
      url = quickview.data('url');
    }

    quickview.load(url, function () {
      qps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["default"]('.quickview'); // Don't load it next time, if don't need to

      if (quickview.hasDataAttr('always-reload') && 'true' === quickview.data('always-reload')) {} else {
        quickview.data('url-has-loaded', 'true');
      }
    });
  } // Open it


  quickview.addClass('reveal').not('.backdrop-remove').after('<div class="app-backdrop backdrop-quickview" data-target="' + e + '"></div>');
}; // Close quickview
//


quickview.close = function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).removeClass('reveal');
  jquery__WEBPACK_IMPORTED_MODULE_11___default()('.backdrop-quickview').remove();
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
    target = jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).next();
  } else if (target == 'prev') {
    target = jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).prev();
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
/*! exports provided: addCallout, getDataOptions, invalidChamps, validChamps, completeChamps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCallout", function() { return addCallout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataOptions", function() { return getDataOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidChamps", function() { return invalidChamps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validChamps", function() { return validChamps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeChamps", function() { return completeChamps; });
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
// @lastUpdate 01/12/2020 22:04


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
function invalidChamps($obj) {
  $obj.removeClass('is-valid').addClass('is-invalid');
}
function validChamps($obj) {
  $obj.removeClass('is-invalid').addClass('is-valid');
}
function completeChamps($obj) {
  $obj.removeClass('is-invalid').removeClass('is-valid');
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

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyBcXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZGFsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdmFsaWRhdG9yLWJzNC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2Nzcy9ib290c3RyYXAtZGF0ZXBpY2tlcjMubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2pzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2xvY2FsZXMvYm9vdHN0cmFwLWRhdGVwaWNrZXIuZnIubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCJdLCJuYW1lcyI6WyJhcHAyIiwic3RhcnRTdGltdWx1c0FwcCIsInJlcXVpcmUiLCJsb29rdXAiLCIkIiwib24iLCJlIiwiZmlsZW5hbWUiLCJ0YXJnZXQiLCJmaWxlcyIsIm5hbWUiLCJodG1sIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwiY2hhbmdlIiwiaSIsImxlbmd0aCIsInB1c2giLCJuZXh0Iiwiam9pbiIsInByZWxvYWRlciIsInNwZWVkIiwiZGF0YUF0dHIiLCJmYWRlT3V0IiwiY2xvc2VzdCIsImZpbmQiLCJjc3MiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZSIsInVwZGF0ZUludGVyZmFjZSIsInZhbGlkYXRvciIsImFqYXhDb21wbGV0ZSIsInRvZ2dsZUNsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzbGlkZVRvZ2dsZSIsIm1vZGFsZXIiLCJnZXREYXRhT3B0aW9ucyIsInNlbGVjdHBpY2tlciIsImljb25CYXNlIiwidGlja0ljb24iLCJzdHlsZSIsInNpemUiLCJsaXZlU2VhcmNoIiwiZWFjaCIsImNvbG9yIiwiaGFzRGF0YUF0dHIiLCJkYXRhIiwidG9vbHRpcCIsImNvbnRhaW5lciIsInRyaWdnZXIiLCJ0ZW1wbGF0ZSIsIm9wdGlvbnMiLCJtdWx0aWRhdGVTZXBhcmF0b3IiLCJsYW5ndWFnZSIsImRheXNPZldlZWtIaWdobGlnaHRlZCIsImZvcm1hdCIsInByb3AiLCJpbnB1dHMiLCJkYXRlcGlja2VyIiwiaGFzQ2xhc3MiLCJjbG9zZSIsIm9wZW4iLCJhZGRDbGFzcyIsImZvY3VzIiwic2lkZWJhciIsImNvbnNvbGUiLCJsb2ciLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicHMiLCJQZXJmZWN0U2Nyb2xsYmFyIiwiJHN1Ym1lbnUiLCJpcyIsInNsaWRlVXAiLCJ0b2dnbGVGb2xkIiwiYXBwIiwidG9nZ2xlU3RhdGUiLCJmb2xkIiwic3RhdGUiLCJ1bmZvbGQiLCJ0b2dnbGVIaWRlIiwiaGlkZSIsInNob3ciLCJwcmVwZW5kIiwicmVtb3ZlIiwicXVpY2t2aWV3IiwicXBzIiwidXBkYXRlIiwicmVsb2FkUXYiLCJkZXN0cm95IiwiZ2V0VGFyZ2V0IiwidXJsIiwicXYiLCJhdHRyIiwibG9hZCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsIm5vdCIsImFmdGVyIiwicHJldiIsInVuZGVmaW5lZCIsIm1hdGVyaWFsRG9GbG9hdCIsInZhbCIsIm1hdGVyaWFsTm9GbG9hdCIsInBhcmVudCIsImNvbmZpZ01vZGFsZXIiLCJpc01vZGFsIiwidHlwZSIsInRpdGxlIiwiYmFja2Ryb3AiLCJoZWFkZXJWaXNpYmxlIiwiZm9vdGVyVmlzaWJsZSIsImNvbmZpcm1WaXNpYmxlIiwiY29uZmlybVRleHQiLCJjb25maXJtQ2xhc3MiLCJjYW5jZWxWaXNpYmxlIiwiY2FuY2VsVGV4dCIsImNhbmNlbENsYXNzIiwiYm9keUV4dHJhQ2xhc3MiLCJzcGlubmVyIiwiYXV0b0Rlc3Ryb3kiLCJvblNob3ciLCJvblNob3duIiwib25IaWRlIiwib25IaWRkZW4iLCJvbkNvbmZpcm0iLCJvbkNhbmNlbCIsIm1vZGFsSWQiLCJndWlkIiwibGVuIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwicmVwbGFjZSIsInN1YnN0ciIsInNldHRpbmciLCJleHRlbmQiLCJtb2RhbCIsImlkIiwiaGFuZGxlQ2FsbGJhY2siLCJpc0Z1bmN0aW9uIiwic3Vic3RyaW5nIiwiY2FsbCIsImFwcGVuZCIsIm91dGVySFRNTCIsIm9uZSIsImh0bWxfaGVhZGVyIiwiaHRtbF9mb290ZXIiLCJtb2RhbF9odG1sIiwialF1ZXJ5Iiwia2V5d29yZCIsInNlYXJjaF9yZXBvbnNlX2V0dWRpYW50Iiwic2VhcmNoX3JlcG9uc2VfcGVyc29ubmVsIiwic2VhcmNoX3JlcG9uc2VfYXV0cmUiLCJhamF4IiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiZXR1ZGlhbnRzIiwiaW5kZXgiLCJldHVkaWFudCIsInNsdWciLCJwaG90byIsImF2YXRhckluaXRpYWxlcyIsImJhc2VwYXRoIiwiZGlzcGxheVByIiwic2VtZXN0cmUiLCJncm91cGVzIiwiZW1wdHkiLCJwZXJzb25uZWxzIiwicGVyc29ubmVsIiwiYXV0cmVzIiwiYXV0cmUiLCIkc3RvcENhdGNoRW50ZXIiLCJyZWFkVXJsTWVudSIsIiR1cmwiLCIkZWx0Iiwic3BsaXQiLCIkZmlyc3RFbHQiLCJwb3AiLCJsb2NhdGlvbiIsIlN3YWwiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY3NyZiIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsIl90b2tlbiIsImhhc093blByb3BlcnR5IiwiaHJlZiIsImFkZENhbGxvdXQiLCJlcnJvciIsInhociIsImFqYXhPcHRpb25zIiwidGhyb3duRXJyb3IiLCJkaXNtaXNzIiwibWVzc2FnZSIsImxhYmVsIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJzbGlkZURvd24iLCJkZWxheSIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZVRleHRBcmVhIiwiZ2VuZXJlSW5wdXQiLCJyZXBsYWNlV2l0aCIsImtleUNvZGUiLCJ1cGRhdGVEYXRhIiwid2hpY2giLCJmaWVsZCIsIm1ldGhvZCIsIiRvYmoiLCJ0cmltIiwiZm4iLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiLCJkYXRhVG9PcHRpb24iLCJ4IiwidG9VcHBlckNhc2UiLCJlbCIsImNhc3RMaXN0Iiwia2V5IiwiQm9vbGVhbiIsIk51bWJlciIsImludmFsaWRDaGFtcHMiLCJ2YWxpZENoYW1wcyIsImNvbXBsZXRlQ2hhbXBzIiwiZ2V0VmFsdWUiLCIkZWwiLCJWYWxpZGF0b3IiLCJlbGVtZW50IiwidmFsaWRhdG9ycyIsIlZBTElEQVRPUlMiLCJjdXN0b20iLCIkZWxlbWVudCIsIiRidG4iLCJmaWx0ZXIiLCJhZGQiLCJwcm94eSIsIm9uSW5wdXQiLCJvblN1Ym1pdCIsInJlc2V0IiwiJHRoaXMiLCIkaW5wdXRzIiwiVkVSU0lPTiIsIklOUFVUX1NFTEVDVE9SIiwiRk9DVVNfT0ZGU0VUIiwiREVGQVVMVFMiLCJkaXNhYmxlIiwiZXJyb3JzIiwibWF0Y2giLCJtaW5sZW5ndGgiLCJmZWVkYmFjayIsImNoZWNrVmFsaWRpdHkiLCJ2YWxpZGl0eSIsInZhbGlkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJwcm90b3R5cGUiLCJzZWxmIiwiY2xlYXJFcnJvcnMiLCJ0b2dnbGVTdWJtaXQiLCJkZWZlckVycm9ycyIsInZhbGlkYXRlSW5wdXQiLCJkb25lIiwicHJldkVycm9ycyIsIkV2ZW50IiwicmVsYXRlZFRhcmdldCIsImlzRGVmYXVsdFByZXZlbnRlZCIsInJ1blZhbGlkYXRvcnMiLCJkZWZlciIsInNob3dFcnJvcnMiLCJkZXRhaWwiLCJkZWZlcnJlZCIsIkRlZmVycmVkIiwicmVqZWN0IiwiZ2V0VmFsaWRhdG9yU3BlY2lmaWNFcnJvciIsImdldFZhbGlkaXR5U3RhdGVFcnJvciIsInR5cGVNaXNtYXRjaCIsInBhdHRlcm5NaXNtYXRjaCIsInN0ZXBNaXNtYXRjaCIsInJhbmdlT3ZlcmZsb3ciLCJyYW5nZVVuZGVyZmxvdyIsInZhbHVlTWlzc2luZyIsImdldEdlbmVyaWNFcnJvciIsImdldEVycm9yTWVzc2FnZSIsImluZGV4T2YiLCJnZXQiLCJmYWlsIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiYWx3YXlzIiwicmVzb2x2ZSIsInByb21pc2UiLCJ2YWxpZGF0ZSIsIndoZW4iLCJtYXAiLCJmb2N1c0Vycm9yIiwiJGlucHV0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsIiRncm91cCIsIiRibG9jayIsIiRmZWVkYmFjayIsImhhc0Vycm9ycyIsImZpZWxkRXJyb3JzIiwiaXNJbmNvbXBsZXRlIiwiZmllbGRJbmNvbXBsZXRlIiwiY2FsbGJhY2siLCJ3aW5kb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlRGF0YSIsInRpbWVvdXQiLCJvcmlnaW5hbENvbnRlbnQiLCJyZW1vdmVBdHRyIiwib2ZmIiwiUGx1Z2luIiwib3B0aW9uIiwib2xkIiwiQ29uc3RydWN0b3IiLCJub0NvbmZsaWN0IiwiJGZvcm0iLCJhIiwiZGVmaW5lIiwiYiIsImMiLCJEYXRlIiwiVVRDIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJkIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRGF0ZSIsImYiLCJkZXByZWNhdGVkIiwiZyIsImlzTmFOIiwiZ2V0VGltZSIsImgiLCJ0b0xvd2VyQ2FzZSIsIlJlZ0V4cCIsInRlc3QiLCJxIiwicCIsImoiLCJzbGljZSIsImNvbnRhaW5zIiwidmFsdWVPZiIsInNwbGljZSIsImlzQXJyYXkiLCJjbGVhciIsImNvcHkiLCJrIiwiX3Byb2Nlc3Nfb3B0aW9ucyIsImRhdGVzIiwidmlld0RhdGUiLCJvIiwiZGVmYXVsdFZpZXdEYXRlIiwiZm9jdXNEYXRlIiwiaXNJbnB1dCIsImlucHV0RmllbGQiLCJjb21wb25lbnQiLCJpc0lubGluZSIsInBpY2tlciIsInIiLCJfY2hlY2tfdGVtcGxhdGUiLCJ0ZW1wbGF0ZXMiLCJsZWZ0QXJyb3ciLCJyaWdodEFycm93IiwiX2J1aWxkRXZlbnRzIiwiX2F0dGFjaEV2ZW50cyIsImFwcGVuZFRvIiwicnRsIiwiY2FsZW5kYXJXZWVrcyIsInN0YXJ0RGF0ZSIsIl9vIiwiZW5kRGF0ZSIsImRheXNPZldlZWtEaXNhYmxlZCIsImRhdGVzRGlzYWJsZWQiLCJfYWxsb3dfdXBkYXRlIiwic2V0Vmlld01vZGUiLCJzdGFydFZpZXciLCJmaWxsRG93IiwiZmlsbE1vbnRocyIsImNvbnN0cnVjdG9yIiwiX3Jlc29sdmVWaWV3TmFtZSIsInZpZXdNb2RlcyIsImluQXJyYXkiLCJuYW1lcyIsIl9yZXNvbHZlRGF5c09mV2VlayIsIm1pblZpZXdNb2RlIiwibWF4Vmlld01vZGUiLCJtYXgiLCJtaW4iLCJtdWx0aWRhdGUiLCJTdHJpbmciLCJ3ZWVrU3RhcnQiLCJ3ZWVrRW5kIiwicGFyc2VGb3JtYXQiLCJfbG9jYWxfdG9fdXRjIiwiX3plcm9fdGltZSIsInBhcnNlRGF0ZSIsImFzc3VtZU5lYXJieVllYXIiLCJvcmllbnRhdGlvbiIsImdyZXAiLCJ5IiwieWVhciIsIm1vbnRoIiwibCIsImRheSIsIl9ldmVudHMiLCJfc2Vjb25kYXJ5RXZlbnRzIiwiX2FwcGx5RXZlbnRzIiwiX3VuYXBwbHlFdmVudHMiLCJrZXl1cCIsImtleWRvd24iLCJwYXN0ZSIsInNob3dPbkZvY3VzIiwiY2xpY2siLCJibHVyIiwiX2ZvY3VzZWRfZnJvbSIsImltbWVkaWF0ZVVwZGF0ZXMiLCJkYXRlIiwibmF2QXJyb3dzQ2xpY2siLCJkYXlDZWxsQ2xpY2siLCJyZXNpemUiLCJwbGFjZSIsIl9kZXRhY2hFdmVudHMiLCJfYXR0YWNoU2Vjb25kYXJ5RXZlbnRzIiwiX2RldGFjaFNlY29uZGFyeUV2ZW50cyIsIl90cmlnZ2VyIiwiX3V0Y190b19sb2NhbCIsInZpZXdNb2RlIiwiZm9ybWF0RGF0ZSIsImVuYWJsZU9uUmVhZG9ubHkiLCJuYXZpZ2F0b3IiLCJtc01heFRvdWNoUG9pbnRzIiwiZGlzYWJsZVRvdWNoS2V5Ym9hcmQiLCJkZXRhY2giLCJmb3JjZVBhcnNlIiwic2V0VmFsdWUiLCJvcmlnaW5hbEV2ZW50IiwiY2xpcGJvYXJkRGF0YSIsInR5cGVzIiwiZ2V0RGF0YSIsInNldERhdGUiLCJnZXRUaW1lem9uZU9mZnNldCIsIl96ZXJvX3V0Y190aW1lIiwiZ2V0RGF0ZXMiLCJnZXRVVENEYXRlcyIsImNsZWFyRGF0ZXMiLCJhdXRvY2xvc2UiLCJzZXREYXRlcyIsInNldFVUQ0RhdGVzIiwic2V0VVRDRGF0ZSIsImdldEZvcm1hdHRlZERhdGUiLCJnZXRTdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJ1cGRhdGVOYXZBcnJvd3MiLCJnZXRFbmREYXRlIiwic2V0RW5kRGF0ZSIsInNldERheXNPZldlZWtEaXNhYmxlZCIsInNldERheXNPZldlZWtIaWdobGlnaHRlZCIsInNldERhdGVzRGlzYWJsZWQiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJ3aWR0aCIsInBhcmVudHMiLCJ6SW5kZXhPZmZzZXQiLCJtIiwibiIsImxlZnQiLCJwYXJzZUludCIsInJpZ2h0IiwiekluZGV4IiwiZGF0ZVdpdGhpblJhbmdlIiwidXBkYXRlVmlld0RhdGUiLCJmaWxsIiwic2hvd1dlZWtEYXlzIiwiZGF5c01pbiIsIm1vbnRoc1Nob3J0Iiwic2V0UmFuZ2UiLCJyYW5nZSIsImdldENsYXNzTmFtZXMiLCJ0b2RheUhpZ2hsaWdodCIsImRhdGVJc0Rpc2FibGVkIiwiZ2V0VVRDRGF5IiwiX2ZpbGxfeWVhcnNWaWV3IiwiZmxvb3IiLCJzIiwidCIsIm5vb3AiLCJlbmFibGVkIiwiY2xhc3NlcyIsImNvbmNhdCIsInRvZGF5IiwiZW4iLCJ0aXRsZUZvcm1hdCIsInRvZGF5QnRuIiwiY2xlYXJCdG4iLCJzZXRVVENGdWxsWWVhciIsInUiLCJ2IiwidyIsInoiLCJBIiwiQiIsImJlZm9yZVNob3dEYXkiLCJjb250ZW50IiwidW5pcXVlU29ydCIsInVuaXF1ZSIsIkMiLCJtb250aHNUaXRsZSIsIkQiLCJlbmQiLCJlcSIsImJlZm9yZVNob3dNb250aCIsIkUiLCJiZWZvcmVTaG93WWVhciIsImJlZm9yZVNob3dEZWNhZGUiLCJiZWZvcmVTaG93Q2VudHVyeSIsInN0b3BQcm9wYWdhdGlvbiIsIl9zZXREYXRlIiwic2V0VVRDTW9udGgiLCJjdXJyZW50VGFyZ2V0IiwibmF2U3RlcCIsIm1vdmVNb250aCIsIl90b2dnbGVfbXVsdGlkYXRlIiwidG9nZ2xlQWN0aXZlIiwibW92ZURheSIsIm1vdmVXZWVrIiwiYWJzIiwibW92ZVllYXIiLCJtb3ZlQXZhaWxhYmxlRGF0ZSIsIndlZWtPZkRhdGVJc0Rpc2FibGVkIiwia2V5Ym9hcmROYXZpZ2F0aW9uIiwiY3RybEtleSIsInNoaWZ0S2V5IiwiY2hpbGRyZW4iLCJjbHNOYW1lIiwianF1ZXJ5Iiwia2VlcEVtcHR5VmFsdWVzIiwiZGF0ZVVwZGF0ZWQiLCJwaWNrZXJzIiwidXBkYXRlRGF0ZXMiLCJ1cGRhdGVSYW5nZXMiLCJ1cGRhdGluZyIsInNoaWZ0IiwidG9BcnJheSIsIkVycm9yIiwiZGVmYXVsdHMiLCJsb2NhbGVfb3B0cyIsImRheXMiLCJkYXlzU2hvcnQiLCJtb250aHMiLCJ2YWxpZFBhcnRzIiwibm9ucHVuY3R1YXRpb24iLCJ0b1ZhbHVlIiwidG9EaXNwbGF5Iiwic2VwYXJhdG9ycyIsInBhcnRzIiwieWVzdGVyZGF5IiwidG9tb3Jyb3ciLCJ5eXl5IiwieXkiLCJNIiwiTU0iLCJtbSIsImRkIiwiREQiLCJoZWFkVGVtcGxhdGUiLCJjb250VGVtcGxhdGUiLCJmb290VGVtcGxhdGUiLCJEUEdsb2JhbCIsInZlcnNpb24iLCJ3YXJuIiwiZnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVztBQUNsRDtBQUNBO0FBQ0EsNEU7Ozs7Ozs7Ozs7O0FDUkEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVPLElBQU1BLElBQUksR0FBR0MsaUZBQWdCLENBQ2xDQyx1RUFEa0MsQ0FBN0I7QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxtQkFBTyxDQUFDLGdFQUFELENBQVA7O0FBRUEsSUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBRUFELG1CQUFPLENBQUMscUZBQUQsQ0FBUDs7QUFFQUUsOENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCQyxFQUF4QixDQUEyQixRQUEzQixFQUFxQyxVQUFVQyxDQUFWLEVBQWE7QUFDaEQsTUFBSUMsUUFBUSxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsRUFBa0JDLElBQWpDO0FBQ0FOLGdEQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3Qk8sSUFBeEIsQ0FBNkJKLFFBQTdCO0FBQ0QsQ0FIRDtBQUtBSCw4Q0FBQyxDQUFDUSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzVCO0FBQ0FULGdEQUFDLENBQUNRLFFBQUQsQ0FBRCxDQUFZUCxFQUFaLENBQWUsT0FBZixFQUF3QixXQUF4QixFQUFxQyxZQUFZO0FB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LEVBQUM7QUFBcmQsR0FBekI7QUFBNGYsQ0FBeGdCLENBQXlnQjZGLE1BQXpnQixDQUFELEM7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkUiLCJmaWxlIjoiYWdlbmRhfmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihqfHQpc3g/JFwiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9hcHAuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwNC8xMi8yMDIwIDEzOjQzXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCB7c3RhcnRTdGltdWx1c0FwcH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJ1xuXG5leHBvcnQgY29uc3QgYXBwMiA9IHN0YXJ0U3RpbXVsdXNBcHAoXG4gIHJlcXVpcmUuY29udGV4dCgnLi4vY29udHJvbGxlcnMnLCB0cnVlLCAvXFwuKGp8dClzeD8kLylcbilcblxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9zY3NzL2ZvbnRhd2Vzb21lLnNjc3MnXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3Njc3Mvc29saWQuc2NzcydcbmltcG9ydCAnYm9vdHN0cmFwLXNlbGVjdC9kaXN0L2Nzcy9ib290c3RyYXAtc2VsZWN0Lm1pbi5jc3MnXG5pbXBvcnQgJy4uL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9jc3MvYm9vdHN0cmFwLWRhdGVwaWNrZXIzLm1pbi5jc3MnXG5pbXBvcnQgJy4uL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9qcy9ib290c3RyYXAtZGF0ZXBpY2tlci5taW4uanMnXG5pbXBvcnQgJy4uL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9sb2NhbGVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmZyLm1pbidcbmltcG9ydCAnLi4vY3NzL2FwcC5zY3NzJ1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdwZXJmZWN0LXNjcm9sbGJhcidcbmltcG9ydCAnLi92YWxpZGF0b3ItYnM0J1xuaW1wb3J0IHtnZXREYXRhT3B0aW9uc30gZnJvbSAnLi91dGlsJ1xuaW1wb3J0ICcuL21hdGVyaWFsJ1xuaW1wb3J0ICcuL3NlYXJjaCdcbmltcG9ydCAnLi9tb2RhbGVyJ1xuXG5yZXF1aXJlKCdib290c3RyYXAnKVxuXG5sZXQgbG9va3VwID0ge31cblxucmVxdWlyZSgnYm9vdHN0cmFwLXNlbGVjdCcpXG5cbiQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gIGxldCBmaWxlbmFtZSA9IGUudGFyZ2V0LmZpbGVzWzBdLm5hbWVcbiAgJCgnLmN1c3RvbS1maWxlLWxhYmVsJykuaHRtbChmaWxlbmFtZSlcbn0pXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgLy8gY29weSBsaW5rIEVEVFxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2NvcHlMaW5rJywgZnVuY3Rpb24gKCkge1xuICAgICQoJyNsaWVuSWNhbCcpLnNlbGVjdCgpXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxuICB9KVxuXG4gIC8vIHNjcmlwdCBwb3VyIGFmZmljaGVyIGxlIGZpY2hpZXIgc2VsZWN0aW9ubsOpIGF2ZWMgYm9vdHN0cmFwNFxuICAkKCcuY3VzdG9tLWZpbGUgaW5wdXQnKS5jaGFuZ2UoZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBmaWxlcyA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkKHRoaXMpWzBdLmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWxlcy5wdXNoKCQodGhpcylbMF0uZmlsZXNbaV0ubmFtZSlcbiAgICB9XG4gICAgJCh0aGlzKS5uZXh0KCcuY3VzdG9tLWZpbGUtbGFiZWwnKS5odG1sKGZpbGVzLmpvaW4oJywgJykpXG4gIH0pXG5cbiAgdmFyIHByZWxvYWRlciA9ICQoJy5wcmVsb2FkZXInKVxuICBpZiAocHJlbG9hZGVyLmxlbmd0aCkge1xuICAgIHZhciBzcGVlZCA9IHByZWxvYWRlci5kYXRhQXR0cignaGlkZS1zcHBlZCcsIDYwMClcbiAgICBwcmVsb2FkZXIuZmFkZU91dChzcGVlZClcbiAgfVxuXG4gICQoZG9jdW1lbnQpLm9uKCdmb2N1cycsICcudG9wYmFyLXNlYXJjaCBpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJy50b3BiYXItc2VhcmNoJykuZmluZCgnLmxvb2t1cC1wbGFjZWhvbGRlciBzcGFuJykuY3NzKCdvcGFjaXR5JywgJzAnKVxuICB9KVxuXG4gICQoZG9jdW1lbnQpLm9uKCdibHVyJywgJy50b3BiYXItc2VhcmNoIGlucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnLnRvcGJhci1zZWFyY2gnKS5maW5kKCcubG9va3VwLXBsYWNlaG9sZGVyIHNwYW4nKS5jc3MoJ29wYWNpdHknLCAnMScpXG4gIH0pXG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNsb29rdXAnLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHZhciB0YXJnZXQgPSAkKCcjbG9va3VwLWZ1bGwnKVxuXG4gICAgaWYgKHRhcmdldCAhPT0gZmFsc2UpIHtcbiAgICAgIGxvb2t1cC50b2dnbGUodGFyZ2V0KVxuICAgIH1cbiAgfSlcblxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2xvb2t1cC1jbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICBsb29rdXAudG9nZ2xlKCQoJyNsb29rdXAtZnVsbCcpKVxuICB9KVxuXG4gIC8vdG9vbHRpcFxuICB1cGRhdGVJbnRlcmZhY2UoKVxuXG4gICQoJ1tkYXRhLXByb3ZpZGU9XCJ2YWxpZGF0aW9uXCJdJykudmFsaWRhdG9yKClcbn0pXG5cbiQoZG9jdW1lbnQpLmFqYXhDb21wbGV0ZShmdW5jdGlvbiAoKSB7XG4gIHVwZGF0ZUludGVyZmFjZSgpXG59KVxuXG4vLyBGdWxsc2NyZWVuXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jYXJkLWJ0bi1mdWxsc2NyZWVuJywgZnVuY3Rpb24gKCkge1xuICAkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykudG9nZ2xlQ2xhc3MoJ2NhcmQtZnVsbHNjcmVlbicpLnJlbW92ZUNsYXNzKCdjYXJkLW1heGltaXplJylcbn0pXG5cbi8vIFNsaWRlIHVwL2Rvd25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2FyZC1idG4tc2xpZGUnLCBmdW5jdGlvbiAoKSB7XG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ3JvdGF0ZS0xODAnKS5jbG9zZXN0KCcuY2FyZCcpLmZpbmQoJy5jYXJkLWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpXG59KVxuXG4vL21vZGFsZXJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1wcm92aWRlfj1cIm1vZGFsZXJcIl0nLCBmdW5jdGlvbiAoKSB7XG4gIG1vZGFsZXIoZ2V0RGF0YU9wdGlvbnMoJCh0aGlzKSkpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVJbnRlcmZhY2UgKCkge1xuICAvL3NlbGVjdHBpY2tlclxuICAkKCcuc2VsZWN0cGlja2VyJykuc2VsZWN0cGlja2VyKHtcbiAgICBpY29uQmFzZTogJycsXG4gICAgdGlja0ljb246ICdmYXMgZmEtY2hlY2snLFxuICAgIHN0eWxlOiAnYnRuLWxpZ2h0JyxcbiAgICBzaXplOiAxMCxcbiAgICBsaXZlU2VhcmNoOiB0cnVlXG4gIH0pXG5cbiAgLy90b29sdGlwXG4gICQoJ1tkYXRhLXByb3ZpZGV+PVwidG9vbHRpcFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb2xvciA9ICcnXG5cbiAgICBpZiAoJCh0aGlzKS5oYXNEYXRhQXR0cigndG9vbHRpcC1jb2xvcicpKSB7XG4gICAgICBjb2xvciA9ICcgdG9vbHRpcC0nICsgJCh0aGlzKS5kYXRhKCd0b29sdGlwLWNvbG9yJylcbiAgICB9XG5cbiAgICAkKHRoaXMpLnRvb2x0aXAoe1xuICAgICAgY29udGFpbmVyOiAnYm9keScsXG4gICAgICB0cmlnZ2VyOiAnaG92ZXInLFxuICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcCcgKyBjb2xvciArICdcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+J1xuICAgIH0pXG4gIH0pXG5cbiAgJCgnW2RhdGEtcHJvdmlkZX49XCJkYXRlcGlja2VyXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBtdWx0aWRhdGVTZXBhcmF0b3I6ICcsICcsXG4gICAgICBsYW5ndWFnZTogJ2ZyJyxcbiAgICAgIGRheXNPZldlZWtIaWdobGlnaHRlZDogJzA2JyxcbiAgICAgIGZvcm1hdDogJ2RkL21tL3l5eXknXG4gICAgfVxuXG4gICAgaWYgKCQodGhpcykucHJvcCgndGFnTmFtZScpICE9ICdJTlBVVCcpIHtcbiAgICAgIC8vc2kgY2Ugbidlc3QgcGFzIHVuIGlucHV0ID0+IGRvbmMgdW4gZGF0ZSByYW5nZVxuICAgICAgb3B0aW9ucy5pbnB1dHMgPSBbJCh0aGlzKS5maW5kKCdpbnB1dDpmaXJzdCcpLCAkKHRoaXMpLmZpbmQoJ2lucHV0Omxhc3QnKV1cbiAgICB9XG4gICAgJCh0aGlzKS5kYXRlcGlja2VyKG9wdGlvbnMpXG4gIH0pXG5cbn1cblxuLy8gT3BlbiBmdWxsc2NyZWVuIGxvb2t1cFxuLy9cbmxvb2t1cC50b2dnbGUgPSBmdW5jdGlvbiAoZSkge1xuICBpZiAoJChlKS5oYXNDbGFzcygncmV2ZWFsJykpIHtcbiAgICBsb29rdXAuY2xvc2UoZSlcbiAgfSBlbHNlIHtcbiAgICBsb29rdXAub3BlbihlKVxuICB9XG59XG5cbi8vIENsb3NlIGZ1bGxzY3JlZW4gbG9va3VwXG4vL1xubG9va3VwLmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgJChlKS5yZW1vdmVDbGFzcygncmV2ZWFsJylcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKVxufVxuXG5cbi8vIENsb3NlIGZ1bGxzY3JlZW4gbG9va3VwXG4vL1xubG9va3VwLm9wZW4gPSBmdW5jdGlvbiAoZSkge1xuICAkKGUpLmFkZENsYXNzKCdyZXZlYWwnKVxuICAkKGUpLmZpbmQoJy5sb29rdXAtZm9ybSBpbnB1dCcpLmZvY3VzKClcbiAgJCgnYm9keScpLmFkZENsYXNzKCduby1zY3JvbGwnKVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cbi8vIFNpZGViYXJcbi8vID09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgc2lkZWJhciA9IHt9XG5cbi8vIFNjcm9sbGFibGVcbmNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpZGViYXItbmF2aWdhdGlvbicpKVxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpZGViYXItbmF2aWdhdGlvbicpLmxlbmd0aCA+IDApIHtcbiAgY29uc3QgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnNpZGViYXItbmF2aWdhdGlvbicpXG59XG5cbi8vIEhhbmRsZSBzaWRlYmFyIG9wZW5uZXJcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNpZGViYXItdG9nZ2xlcicsIGZ1bmN0aW9uICgpIHtcbiAgc2lkZWJhci5vcGVuKClcbn0pXG5cblxuLy8gQ2xvc2Ugc2lkZWJhciB3aGVuIGJhY2tkcm9wIHRvdWNoZXNcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJhY2tkcm9wLXNpZGViYXInLCBmdW5jdGlvbiAoKSB7XG4gIHNpZGViYXIuY2xvc2UoKVxufSlcblxuXG4vLyBTbGlkZSB1cC9kb3duIG1lbnUgaXRlbSBvbiBjbGlja1xuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2lkZWJhciAubWVudS1saW5rJywgZnVuY3Rpb24gKCkge1xuICB2YXIgJHN1Ym1lbnUgPSAkKHRoaXMpLm5leHQoJy5tZW51LXN1Ym1lbnUnKVxuICBpZiAoJHN1Ym1lbnUubGVuZ3RoIDwgMSlcbiAgICByZXR1cm5cblxuICBpZiAoJHN1Ym1lbnUuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAkc3VibWVudS5zbGlkZVVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5zaWRlYmFyIC5tZW51LWl0ZW0ub3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICB9KVxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgIHJldHVyblxuICB9XG5cbiAgJCgnLnNpZGViYXIgLm1lbnUtc3VibWVudTp2aXNpYmxlJykuc2xpZGVVcCgpXG4gICQoJy5zaWRlYmFyIC5tZW51LWxpbmsnKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gICRzdWJtZW51LnNsaWRlVG9nZ2xlKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc2lkZWJhciAubWVudS1pdGVtLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gIH0pXG4gICQodGhpcykuYWRkQ2xhc3MoJ29wZW4nKVxufSlcblxuLy8gSGFuZGxlIGZvbGQgdG9nZ2xlclxuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2lkZWJhci10b2dnbGUtZm9sZCcsIGZ1bmN0aW9uICgpIHtcbiAgc2lkZWJhci50b2dnbGVGb2xkKClcbn0pXG5cbi8vfVxuXG5cbnNpZGViYXIudG9nZ2xlRm9sZCA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzaWRlYmFyLWZvbGRlZCcpXG4gIGFwcC50b2dnbGVTdGF0ZSgnc2lkZWJhci5mb2xkZWQnKVxufVxuXG5zaWRlYmFyLmZvbGQgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1mb2xkZWQnKVxuICBhcHAuc3RhdGUoJ3NpZGViYXIuZm9sZGVkJywgdHJ1ZSlcbn1cblxuXG5zaWRlYmFyLnVuZm9sZCA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLWZvbGRlZCcpXG4gIGFwcC5zdGF0ZSgnc2lkZWJhci5mb2xkZWQnLCBmYWxzZSlcbn1cblxuXG5zaWRlYmFyLnRvZ2dsZUhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS50b2dnbGVDbGFzcygnc2lkZWJhci1oaWRkZW4nKVxuICBhcHAudG9nZ2xlU3RhdGUoJ3NpZGViYXIuaGlkZGVuJylcbn1cblxuc2lkZWJhci5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykuYWRkQ2xhc3MoJ3NpZGViYXItaGlkZGVuJylcbiAgYXBwLnN0YXRlKCdzaWRlYmFyLmhpZGRlbicsIHRydWUpXG59XG5cbnNpZGViYXIuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLWhpZGRlbicpXG4gIGFwcC5zdGF0ZSgnc2lkZWJhci5oaWRkZW4nLCBmYWxzZSlcbn1cblxuXG5zaWRlYmFyLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1vcGVuJykucHJlcGVuZCgnPGRpdiBjbGFzcz1cImFwcC1iYWNrZHJvcCBiYWNrZHJvcC1zaWRlYmFyXCI+PC9kaXY+Jylcbn1cblxuc2lkZWJhci5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLW9wZW4nKVxuICAkKCcuYmFja2Ryb3Atc2lkZWJhcicpLnJlbW92ZSgpXG59XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09XG4vLyBRdWlja3ZpZXdcbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy9cblxubGV0IHF1aWNrdmlldyA9IHt9XG5sZXQgcXBzID0gbnVsbFxuXG4vLyBVcGRhdGUgc2Nyb2xsYmFyIG9uIHRhYiBjaGFuZ2Vcbi8vXG4kKGRvY3VtZW50KS5vbignc2hvd24uYnMudGFiJywgJy5xdWlja3ZpZXctaGVhZGVyIGFbZGF0YS10b2dnbGU9XCJ0YWJcIl0nLCBmdW5jdGlvbiAoZSkge1xuICBxcHMudXBkYXRlKClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbG9hZFF2ICgpIHtcbiAgcXBzLmRlc3Ryb3koKVxuICBxcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnF1aWNrdmlldycpXG59XG5cbi8vIFF1aWNrdmlldyBjbG9zZXJcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtZGlzbWlzcz1cInF1aWNrdmlld1wiXScsIGZ1bmN0aW9uICgpIHtcbiAgcXVpY2t2aWV3LmNsb3NlKCQodGhpcykuY2xvc2VzdCgnLnF1aWNrdmlldycpKVxufSlcblxuXG4vLyBIYW5kbGUgcXVpY2t2aWV3IG9wZW5uZXJcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtdG9nZ2xlPVwicXVpY2t2aWV3XCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGxldCB0YXJnZXQgPSBhcHAuZ2V0VGFyZ2V0KCQodGhpcykpXG5cbiAgaWYgKHRhcmdldCA9PSBmYWxzZSkge1xuICAgIHF1aWNrdmlldy5jbG9zZSgkKHRoaXMpLmNsb3Nlc3QoJy5xdWlja3ZpZXcnKSlcbiAgfSBlbHNlIHtcbiAgICBsZXQgdXJsID0gJydcbiAgICBpZiAoJCh0aGlzKS5oYXNEYXRhQXR0cigndXJsJykpIHtcbiAgICAgIHVybCA9ICQodGhpcykuZGF0YSgndXJsJylcbiAgICB9XG4gICAgcXVpY2t2aWV3LnRvZ2dsZSh0YXJnZXQsIHVybClcbiAgfVxufSlcblxuXG4vLyBDbG9zZSBxdWlja3ZpZXcgd2hlbiBiYWNrZHJvcCB0b3VjaGVzXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5iYWNrZHJvcC1xdWlja3ZpZXcnLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBxdiA9ICQodGhpcykuYXR0cignZGF0YS10YXJnZXQnKVxuICBpZiAoISQocXYpLmlzKCdbZGF0YS1kaXNhYmxlLWJhY2tkcm9wLWNsaWNrXScpKSB7XG4gICAgcXVpY2t2aWV3LmNsb3NlKHF2KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnF1aWNrdmlldyAuY2xvc2UsIFtkYXRhLWRpc21pc3M9XCJxdWlja3ZpZXdcIl0nLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBxdiA9ICQodGhpcykuY2xvc2VzdCgnLnF1aWNrdmlldycpXG4gIHF1aWNrdmlldy5jbG9zZShxdilcbn0pXG5cbi8vIFRvZ2dsZSBvcGVuL2Nsb3NlIHN0YXRlXG4vL1xucXVpY2t2aWV3LnRvZ2dsZSA9IGZ1bmN0aW9uIChlLCB1cmwpIHtcbiAgaWYgKCQoZSkuaGFzQ2xhc3MoJ3JldmVhbCcpKSB7XG4gICAgcXVpY2t2aWV3LmNsb3NlKGUpXG4gIH0gZWxzZSB7XG4gICAgaWYgKHVybCAhPT0gJycpIHtcbiAgICAgICQoZSkuaHRtbCgnPGRpdiBjbGFzcz1cInNwaW5uZXItbGluZWFyXCI+PGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj48L2Rpdj4nKVxuICAgICAgJChlKS5sb2FkKHVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBxcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnF1aWNrdmlldycpXG4gICAgICB9KVxuICAgIH1cbiAgICBxdWlja3ZpZXcub3BlbihlKVxuICB9XG59XG5cblxuLy8gT3BlbiBxdWlja3ZpZXdcbi8vXG5xdWlja3ZpZXcub3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gIGxldCBxdWlja3ZpZXcgPSAkKGUpXG4gIGxldCB1cmwgPSAnJ1xuICAvLyBMb2FkIGNvbnRlbnQgZnJvbSBVUkwgaWYgcmVxdWlyZWRcbiAgaWYgKHF1aWNrdmlldy5oYXNEYXRhQXR0cigndXJsJykgJiYgJ3RydWUnICE9PSBxdWlja3ZpZXcuZGF0YSgndXJsLWhhcy1sb2FkZWQnKSkge1xuICAgIGlmIChxdWlja3ZpZXcuZGF0YSgndXJsJykgPT09ICduby11cmwnKSB7XG4gICAgICB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdxdWlja192aWV3JylcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gcXVpY2t2aWV3LmRhdGEoJ3VybCcpXG4gICAgfVxuXG4gICAgcXVpY2t2aWV3LmxvYWQodXJsLCBmdW5jdGlvbiAoKSB7XG4gICAgICBxcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnF1aWNrdmlldycpXG5cbiAgICAgIC8vIERvbid0IGxvYWQgaXQgbmV4dCB0aW1lLCBpZiBkb24ndCBuZWVkIHRvXG4gICAgICBpZiAocXVpY2t2aWV3Lmhhc0RhdGFBdHRyKCdhbHdheXMtcmVsb2FkJykgJiYgJ3RydWUnID09PSBxdWlja3ZpZXcuZGF0YSgnYWx3YXlzLXJlbG9hZCcpKSB7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1aWNrdmlldy5kYXRhKCd1cmwtaGFzLWxvYWRlZCcsICd0cnVlJylcbiAgICAgIH1cbiAgICB9KVxuXG4gIH1cblxuLy8gT3BlbiBpdFxuICBxdWlja3ZpZXcuYWRkQ2xhc3MoJ3JldmVhbCcpLm5vdCgnLmJhY2tkcm9wLXJlbW92ZScpLmFmdGVyKCc8ZGl2IGNsYXNzPVwiYXBwLWJhY2tkcm9wIGJhY2tkcm9wLXF1aWNrdmlld1wiIGRhdGEtdGFyZ2V0PVwiJyArIGUgKyAnXCI+PC9kaXY+Jylcbn1cblxuXG4vLyBDbG9zZSBxdWlja3ZpZXdcbi8vXG5xdWlja3ZpZXcuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAkKGUpLnJlbW92ZUNsYXNzKCdyZXZlYWwnKVxuICAkKCcuYmFja2Ryb3AtcXVpY2t2aWV3JykucmVtb3ZlKClcbn1cblxuXG5sZXQgYXBwID0ge31cblxuYXBwLmdldFRhcmdldCA9IGZ1bmN0aW9uIChlKSB7XG4gIGxldCB0YXJnZXRcbiAgaWYgKGUuaGFzRGF0YUF0dHIoJ3RhcmdldCcpKSB7XG4gICAgdGFyZ2V0ID0gZS5kYXRhKCd0YXJnZXQnKVxuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGUuYXR0cignaHJlZicpXG4gIH1cblxuICBpZiAodGFyZ2V0ID09ICduZXh0Jykge1xuICAgIHRhcmdldCA9ICQoZSkubmV4dCgpXG4gIH0gZWxzZSBpZiAodGFyZ2V0ID09ICdwcmV2Jykge1xuICAgIHRhcmdldCA9ICQoZSkucHJldigpXG4gIH1cblxuICBpZiAodGFyZ2V0ID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldFxufVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvbWF0ZXJpYWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyOC8xMS8yMDE5IDE5OjQwXG5cbi8vIE1hdGVyaWFsIGlucHV0XG4vL1xuJChkb2N1bWVudCkub24oJ2ZvY3VzJywgJy5mb3JtLXR5cGUtbWF0ZXJpYWwgLmZvcm0tY29udHJvbDpub3QoLmJvb3RzdHJhcC1zZWxlY3QpJywgZnVuY3Rpb24gKCkge1xuICBtYXRlcmlhbERvRmxvYXQoJCh0aGlzKSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdmb2N1c291dCcsICcuZm9ybS10eXBlLW1hdGVyaWFsIC5mb3JtLWNvbnRyb2w6bm90KC5ib290c3RyYXAtc2VsZWN0KScsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKCQodGhpcykudmFsKCkgPT09ICcnKSB7XG4gICAgbWF0ZXJpYWxOb0Zsb2F0KCQodGhpcykpXG4gIH1cbn0pXG5cbi8vIEF1dG8gZm9jdXMgaW5wdXRzXG5tYXRlcmlhbERvRmxvYXQoJCgnLmZvcm0tdHlwZS1tYXRlcmlhbCAuZm9ybS1jb250cm9sW2F1dG9mb2N1cz1cInRydWVcIl0nKSlcblxuXG5mdW5jdGlvbiBtYXRlcmlhbERvRmxvYXQgKGUpIHtcbiAgaWYgKGUucGFyZW50KCcuaW5wdXQtZ3JvdXAtaW5wdXQnKS5sZW5ndGgpIHtcbiAgICBlLnBhcmVudCgnLmlucHV0LWdyb3VwLWlucHV0JykuYWRkQ2xhc3MoJ2RvLWZsb2F0JylcbiAgfSBlbHNlIHtcbiAgICBlLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykuYWRkQ2xhc3MoJ2RvLWZsb2F0JylcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIG1hdGVyaWFsTm9GbG9hdCAoZSkge1xuICBpZiAoZS5wYXJlbnQoJy5pbnB1dC1ncm91cC1pbnB1dCcpLmxlbmd0aCkge1xuICAgIGUucGFyZW50KCcuaW5wdXQtZ3JvdXAtaW5wdXQnKS5yZW1vdmVDbGFzcygnZG8tZmxvYXQnKVxuICB9IGVsc2Uge1xuICAgIGUuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmVDbGFzcygnZG8tZmxvYXQnKVxuICB9XG59XG5cbiQoJy5mb3JtLXR5cGUtbWF0ZXJpYWwgLmZvcm0tY29udHJvbCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICBpZiAoJCh0aGlzKS52YWwoKS5sZW5ndGggPiAwKSB7XG4gICAgLy9pZiAoJCh0aGlzKS5pcygnW2RhdGEtcHJvdmlkZX49XCJzZWxlY3RwaWNrZXJcIl0nKSkge1xuICAgIC8vICByZXR1cm5cbiAgICAvL31cbiAgICBtYXRlcmlhbERvRmxvYXQoJCh0aGlzKSlcbiAgfVxufSlcblxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL21vZGFsZXIuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyNy8wNy8yMDIwIDExOjIzXG5cbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy8gTW9kYWxlclxuLy8gPT09PT09PT09PT09PT09PT09PT09XG4vL1xuK2Z1bmN0aW9uICgkKSB7XG5cbiAgbGV0IGNvbmZpZ01vZGFsZXIgPSB7XG4gICAgdXJsOiAnJyxcbiAgICBpc01vZGFsOiBmYWxzZSxcbiAgICBodG1sOiAnJyxcbiAgICB0YXJnZXQ6ICcnLFxuICAgIHR5cGU6ICcnLFxuICAgIHNpemU6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBoZWFkZXJWaXNpYmxlOiB0cnVlLFxuICAgIGZvb3RlclZpc2libGU6IHRydWUsXG4gICAgY29uZmlybVZpc2libGU6IHRydWUsXG4gICAgY29uZmlybVRleHQ6ICdPaycsXG4gICAgY29uZmlybUNsYXNzOiAnYnRuIGJ0bi13LXNtIGJ0bi1mbGF0IGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxWaXNpYmxlOiBmYWxzZSxcbiAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJyxcbiAgICBjYW5jZWxDbGFzczogJ2J0biBidG4tdy1zbSBidG4tZmxhdCBidG4tc2Vjb25kYXJ5JyxcbiAgICBib2R5RXh0cmFDbGFzczogJycsXG4gICAgc3Bpbm5lcjogJzxkaXYgY2xhc3M9XCJoLTIwMCBjZW50ZXItdmhcIj48c3ZnIGNsYXNzPVwic3Bpbm5lci1jaXJjbGUtbWF0ZXJpYWwtc3ZnXCIgdmlld0JveD1cIjAgMCA1MCA1MFwiPjxjaXJjbGUgY2xhc3M9XCJjaXJjbGVcIiBjeD1cIjI1XCIgY3k9XCIyNVwiIHI9XCIyMFwiPjwvc3ZnPjwvZGl2PicsXG5cbiAgICBhdXRvRGVzdHJveTogdHJ1ZSxcblxuICAgIC8vIEV2ZW50c1xuICAgIG9uU2hvdzogbnVsbCxcbiAgICBvblNob3duOiBudWxsLFxuICAgIG9uSGlkZTogbnVsbCxcbiAgICBvbkhpZGRlbjogbnVsbCxcbiAgICBvbkNvbmZpcm06IG51bGwsXG4gICAgb25DYW5jZWw6IG51bGwsXG5cbiAgICAvLyBQcml2YXRlIG9wdGlvbnNcbiAgICBtb2RhbElkOiBudWxsXG4gIH1cblxuICBmdW5jdGlvbiBndWlkIChsZW4pIHtcbiAgICBpZiAobGVuID09IHVuZGVmaW5lZCkge1xuICAgICAgbGVuID0gNVxuICAgIH1cbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikucmVwbGFjZSgvW15hLXpdKy9nLCAnJykuc3Vic3RyKDAsIGxlbilcbiAgfVxuXG5cbiAgbW9kYWxlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIHNldHRpbmcgPSAkLmV4dGVuZCh7fSwgY29uZmlnTW9kYWxlciwgb3B0aW9ucylcblxuICAgIGlmIChzZXR0aW5nLm1vZGFsSWQpIHtcbiAgICAgICQoJyMnICsgc2V0dGluZy5tb2RhbElkKS5tb2RhbCgnc2hvdycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cblxuICAgIHZhciBpZCA9ICdtb2RhbC0nICsgZ3VpZCgpXG5cblxuICAgIHZhciBoYW5kbGVDYWxsYmFjayA9IGZ1bmN0aW9uIChpZCkge1xuXG4gICAgICAvLyBCb290c3RyYXAgbW9kYWwgZXZlbnRzXG4gICAgICAvL1xuICAgICAgaWYgKHNldHRpbmcub25TaG93KSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvL3NldHRpbmcub25TaG93KCk7XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5nLm9uU2hvd24pIHtcbiAgICAgICAgJCgnIycgKyBpZCkub24oJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvL3NldHRpbmcub25TaG93bigpO1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAoc2V0dGluZy5vbkhpZGUpIHtcbiAgICAgICAgJCgnIycgKyBpZCkub24oJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHNldHRpbmcub25IaWRlKClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNldHRpbmcub25IaWRkZW4pIHtcbiAgICAgICAgJCgnIycgKyBpZCkub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgc2V0dGluZy5vbkhpZGRlbigpXG4gICAgICAgIH0pXG4gICAgICB9XG5cblxuICAgICAgLy8gSGFuZGxlIGNvbmZpcm0gY2FsbGJhY2tcbiAgICAgIC8vXG4gICAgICAkKCcjJyArIGlkKS5maW5kKCdbZGF0YS1wZXJmb3JtPVwiY29uZmlybVwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBIYXNuJ3Qgc2V0XG4gICAgICAgIGlmIChzZXR0aW5nLm9uQ29uZmlybSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJcyBhIGZ1bmN0aW9uXG4gICAgICAgIGlmICgkLmlzRnVuY3Rpb24oc2V0dGluZy5vbkNvbmZpcm0pKSB7XG4gICAgICAgICAgc2V0dGluZy5vbkNvbmZpcm0oJCgnIycgKyBpZCkpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJcyBzdHJpbmcgdmFsdWUsIHNvIGNhbGwgaXRcbiAgICAgICAgaWYgKHNldHRpbmcub25Db25maXJtLnN1YnN0cmluZykge1xuICAgICAgICAgIGFwcC5jYWxsKHNldHRpbmcub25Db25maXJtLCAkKCcjJyArIGlkKSlcbiAgICAgICAgfVxuXG4gICAgICB9KVxuXG5cbiAgICAgIC8vIEhhbmRsZSBjYW5jZWwgY2FsbGJhY2tcbiAgICAgIC8vXG4gICAgICAkKCcjJyArIGlkKS5maW5kKCdbZGF0YS1wZXJmb3JtPVwiY2FuY2VsXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vIEhhc24ndCBzZXRcbiAgICAgICAgaWYgKHNldHRpbmcub25DYW5jZWwgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXMgYSBmdW5jdGlvblxuICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmcub25DYW5jZWwpKSB7XG4gICAgICAgICAgc2V0dGluZy5vbkNhbmNlbCgkKCcjJyArIGlkKSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElzIHN0cmluZyB2YWx1ZSwgc28gY2FsbCBpdFxuICAgICAgICBpZiAoc2V0dGluZy5vbkNhbmNlbC5zdWJzdHJpbmcpIHtcbiAgICAgICAgICBhcHAuY2FsbChzZXR0aW5nLm9uQ2FuY2VsLCAkKCcjJyArIGlkKSlcbiAgICAgICAgfVxuXG4gICAgICB9KVxuICAgIH1cblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gV2UgcmVjaWV2ZSBtb2RhbCBtYXJrdXAgZnJvbSB1cmxcbiAgICAvL1xuICAgIGlmIChzZXR0aW5nLmlzTW9kYWwpIHtcblxuICAgICAgJCgnPGRpdj4nKS5sb2FkKHNldHRpbmcudXJsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJCh0aGlzKS5maW5kKCcubW9kYWwnKS5hdHRyKCdpZCcsIGlkKS5vdXRlckhUTUwoKSlcblxuICAgICAgICAkKCcjJyArIGlkKS5tb2RhbCgnc2hvdycpXG4gICAgICAgICQoJyMnICsgaWQpLm9uZSgnc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vdG9kbzogYSBjb25maXJtZXIgJCgnIycrIGlkKS5maW5kKCcubW9kYWwtYm9keScpLnBlcmZlY3RTY3JvbGxiYXIoJ3VwZGF0ZScpO1xuICAgICAgICB9KVxuXG5cbiAgICAgICAgLy8gRGVzdHJveSBhZnRlciBjbG9zZVxuICAgICAgICAvL1xuICAgICAgICBpZiAoc2V0dGluZy5hdXRvRGVzdHJveSkge1xuICAgICAgICAgICQoJyMnICsgaWQpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcjJyArIGlkKS5yZW1vdmUoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJChzZXR0aW5nLnRoaXMpLmF0dHIoJ2RhdGEtbW9kYWwtaWQnLCBpZClcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaGFuZGxlQ2FsbGJhY2soaWQpXG4gICAgICB9KVxuICAgIH1cblxuXG5cblxuXG4gICAgICAvLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gV2Ugc2hvdWxkIGRlc2lnbiB0aGUgbW9kYWxcbiAgICAvL1xuICAgIGVsc2Uge1xuXG4gICAgICBzd2l0Y2ggKHNldHRpbmcuc2l6ZSkge1xuICAgICAgICBjYXNlICdzbSc6XG4gICAgICAgICAgc2V0dGluZy5zaXplID0gJ21vZGFsLXNtJ1xuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbGcnOlxuICAgICAgICAgIHNldHRpbmcuc2l6ZSA9ICdtb2RhbC1sZydcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vc2V0dGluZy5zaXplID0gJyc7XG4gICAgICB9XG5cblxuICAgICAgaWYgKHNldHRpbmcudHlwZSkge1xuICAgICAgICBzZXR0aW5nLnR5cGUgPSAnbW9kYWwtJyArIHNldHRpbmcudHlwZVxuICAgICAgfVxuXG5cbiAgICAgIC8vIEhlYWRlciBjb2RlXG4gICAgICAvL1xuICAgICAgdmFyIGh0bWxfaGVhZGVyID0gJydcbiAgICAgIGlmIChzZXR0aW5nLmhlYWRlclZpc2libGUpIHtcbiAgICAgICAgaHRtbF9oZWFkZXIgKz1cbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPiBcXFxuICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj4nICsgc2V0dGluZy50aXRsZSArICc8L2g1PiBcXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj4gXFxcbiAgICAgICAgICA8L2Rpdj4nXG4gICAgICB9XG5cblxuICAgICAgLy8gRm9vdGVyIGNvZGVcbiAgICAgIC8vXG4gICAgICB2YXIgaHRtbF9mb290ZXIgPSAnJ1xuICAgICAgaWYgKHNldHRpbmcuZm9vdGVyVmlzaWJsZSkge1xuICAgICAgICBodG1sX2Zvb3RlciArPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPidcblxuICAgICAgICBpZiAoc2V0dGluZy5jYW5jZWxWaXNpYmxlKSB7XG4gICAgICAgICAgaHRtbF9mb290ZXIgKz0gJzxidXR0b24gY2xhc3M9XCInICsgc2V0dGluZy5jYW5jZWxDbGFzcyArICdcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtcGVyZm9ybT1cImNhbmNlbFwiPicgKyBzZXR0aW5nLmNhbmNlbFRleHQgKyAnPC9idXR0b24+J1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNldHRpbmcuY29uZmlybVZpc2libGUpIHtcbiAgICAgICAgICBodG1sX2Zvb3RlciArPSAnPGJ1dHRvbiBjbGFzcz1cIicgKyBzZXR0aW5nLmNvbmZpcm1DbGFzcyArICdcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtcGVyZm9ybT1cImNvbmZpcm1cIj4nICsgc2V0dGluZy5jb25maXJtVGV4dCArICc8L2J1dHRvbj4nXG4gICAgICAgIH1cblxuICAgICAgICBodG1sX2Zvb3RlciArPSAnPC9kaXY+J1xuICAgICAgfVxuXG4gICAgICAvLyBNb2RhbCBjb2RlXG4gICAgICAvL1xuICAgICAgdmFyIG1vZGFsX2h0bWwgPVxuICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGUgJyArIHNldHRpbmcudHlwZSArICdcIiBpZD1cIicgKyBpZCArICdcIiB0YWJpbmRleD1cIi0xXCInICsgKCFzZXR0aW5nLmJhY2tkcm9wID8gJyBkYXRhLWJhY2tkcm9wPVwiZmFsc2VcIicgOiAnJykgKyAnPiBcXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyAnICsgc2V0dGluZy5zaXplICsgJ1wiPiBcXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPiBcXFxuICAgICAgICAgICAgICAgICcgKyBodG1sX2hlYWRlciArICcgXFxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSAnICsgc2V0dGluZy5ib2R5RXh0cmFDbGFzcyArICdcIj4gXFxcbiAgICAgICAgICAgICAgICAgICcgKyBzZXR0aW5nLnNwaW5uZXIgKyAnIFxcXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxcXG4gICAgICAgICAgICAgICAgJyArIGh0bWxfZm9vdGVyICsgJyBcXFxuICAgICAgICAgICAgICA8L2Rpdj4gXFxcbiAgICAgICAgICAgIDwvZGl2PiBcXFxuICAgICAgICAgIDwvZGl2PidcblxuXG4gICAgICAvLyBTaG93IG1vZGFsXG4gICAgICAkKCdib2R5JykuYXBwZW5kKG1vZGFsX2h0bWwpXG4gICAgICAkKCcjJyArIGlkKS5tb2RhbCgnc2hvdycpXG5cblxuICAgICAgLy8gRGVzdHJveSBhZnRlciBjbG9zZVxuICAgICAgLy9cbiAgICAgIGlmIChzZXR0aW5nLmF1dG9EZXN0cm95KSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJCgnIycgKyBpZCkucmVtb3ZlKClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoc2V0dGluZy50aGlzKS5hdHRyKCdkYXRhLW1vZGFsLWlkJywgaWQpXG4gICAgICB9XG5cblxuICAgICAgLy8gTG9hZCBkYXRhIGludG8gdGhlIG1vZGFsXG4gICAgICAvL1xuICAgICAgaWYgKHNldHRpbmcudXJsKSB7XG4gICAgICAgICQoJyMnICsgaWQpLmZpbmQoJy5tb2RhbC1ib2R5JykubG9hZChzZXR0aW5nLnVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vdG9kbzogYSBjb25maXJtZXIgJCh0aGlzKS5wZXJmZWN0U2Nyb2xsYmFyKCd1cGRhdGUnKTtcbiAgICAgICAgICBoYW5kbGVDYWxsYmFjayhpZClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGluZy5odG1sKSB7XG4gICAgICAgICQoJyMnICsgaWQpLmZpbmQoJy5tb2RhbC1ib2R5JykuaHRtbChzZXR0aW5nLmh0bWwpXG4gICAgICAgIGhhbmRsZUNhbGxiYWNrKGlkKVxuICAgICAgfSBlbHNlIGlmIChzZXR0aW5nLnRhcmdldCkge1xuICAgICAgICAkKCcjJyArIGlkKS5maW5kKCcubW9kYWwtYm9keScpLmh0bWwoJChzZXR0aW5nLnRhcmdldCkuaHRtbCgpKVxuICAgICAgICBoYW5kbGVDYWxsYmFjayhpZClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0oalF1ZXJ5KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3NlYXJjaC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI2LzA5LzIwMjAgMTg6MThcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNzZWFyY2gnLCBmdW5jdGlvbiAoZSkge1xuXG4gIGNvbnN0IGtleXdvcmQgPSAkKHRoaXMpLnZhbCgpXG4gIGNvbnN0IHNlYXJjaF9yZXBvbnNlX2V0dWRpYW50ID0gJCgnI3NlYXJjaF9yZXBvbnNlX2V0dWRpYW50JylcbiAgY29uc3Qgc2VhcmNoX3JlcG9uc2VfcGVyc29ubmVsID0gJCgnI3NlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbCcpXG4gIGNvbnN0IHNlYXJjaF9yZXBvbnNlX2F1dHJlID0gJCgnI3NlYXJjaF9yZXBvbnNlX2F1dHJlJylcblxuICBpZiAoa2V5d29yZC5sZW5ndGggPiAyKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgncmVjaGVyY2hlJywge2tleXdvcmQ6IGtleXdvcmR9KSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBsZXQgaHRtbCA9ICcnXG4gICAgICAgIGlmIChkYXRhLmV0dWRpYW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgalF1ZXJ5LmVhY2goZGF0YS5ldHVkaWFudHMsIGZ1bmN0aW9uIChpbmRleCwgZXR1ZGlhbnQpIHtcbiAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxhIGNsYXNzPVwibWVkaWFcIiBocmVmPVwiJyArIFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfcHJvZmlsJywge1xuICAgICAgICAgICAgICB0eXBlOiAnZXR1ZGlhbnQnLFxuICAgICAgICAgICAgICBzbHVnOiBldHVkaWFudC5zbHVnXG4gICAgICAgICAgICB9KSArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cXG4nXG4gICAgICAgICAgICBpZiAoZXR1ZGlhbnQucGhvdG8gPT09ICdub2ltYWdlLnBuZycgfHwgZXR1ZGlhbnQucGhvdG8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICBodG1sID0gaHRtbCArICc8ZGl2IGNsYXNzPVwiYXZhdGFyLWNpcmNsZS1zbVwiPlxcbicgK1xuICAgICAgICAgICAgICAgICcgICAgPHNwYW4gY2xhc3M9XCJpbml0aWFsc1wiPicgKyBldHVkaWFudC5hdmF0YXJJbml0aWFsZXMgKyAnPC9zcGFuPlxcbicgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBodG1sID0gaHRtbCArICc8aW1nIGNsYXNzPVwiYXZhdGFyIGF2YXRhci1zbVwiIHNyYz1cIicgKyBkYXRhLmJhc2VwYXRoICsgJ2V0dWRpYW50cy8nICsgZXR1ZGlhbnQucGhvdG8gKyAnXCIgYWx0PVwiUGhvdG8gZGUgcHJvZmlsIGRlICcgKyBldHVkaWFudC5kaXNwbGF5UHIgKyAnXCI+XFxuJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPicgKyBldHVkaWFudC5kaXNwbGF5UHIgKyAnICgnICsgZXR1ZGlhbnQuc2VtZXN0cmUgKyAnKTwvc3Ryb25nPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZSBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+JyArIGV0dWRpYW50Lmdyb3VwZXMgKyAnPC90aW1lPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2E+J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPlBhcyBkZSByw6lzdWx0YXQgcG91ciB2b3RyZSByZWNoZXJjaGUgPHN0cm9uZz5cIicgKyBrZXl3b3JkICsgJ1wiPC9zdHJvbmc+PC9kaXY+J1xuICAgICAgICB9XG5cbiAgICAgICAgc2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQuZW1wdHkoKS5hcHBlbmQoaHRtbClcblxuICAgICAgICBodG1sID0gJydcbiAgICAgICAgaWYgKGRhdGEucGVyc29ubmVscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgalF1ZXJ5LmVhY2goZGF0YS5wZXJzb25uZWxzLCBmdW5jdGlvbiAoaW5kZXgsIHBlcnNvbm5lbCkge1xuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGEgY2xhc3M9XCJtZWRpYSBpdGVtcy1jZW50ZXJcIiBocmVmPVwiJyArIFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfcHJvZmlsJywge1xuICAgICAgICAgICAgICB0eXBlOiAncGVyc29ubmVsJyxcbiAgICAgICAgICAgICAgc2x1ZzogcGVyc29ubmVsLnNsdWdcbiAgICAgICAgICAgIH0pICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiPlxcbidcbiAgICAgICAgICAgIGlmIChwZXJzb25uZWwucGhvdG8gPT09ICdub2ltYWdlLnBuZycgfHwgcGVyc29ubmVsLnBob3RvID09IG51bGwpIHtcbiAgICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGRpdiBjbGFzcz1cImF2YXRhci1jaXJjbGUtc21cIj5cXG4nICtcbiAgICAgICAgICAgICAgICAnICAgIDxzcGFuIGNsYXNzPVwiaW5pdGlhbHNcIj4nICsgcGVyc29ubmVsLmF2YXRhckluaXRpYWxlcyArICc8L3NwYW4+XFxuJyArXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxpbWcgY2xhc3M9XCJhdmF0YXIgYXZhdGFyLXNtXCIgc3JjPVwiJyArIGRhdGEuYmFzZXBhdGggKyAncGVyc29ubmVscy8nICsgcGVyc29ubmVsLnBob3RvICsgJ1wiIGFsdD1cIlBob3RvIGRlIHByb2ZpbCBkZSAnICsgcGVyc29ubmVsLmRpc3BsYXlQciArICdcIj5cXG4nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICcgICAgICAgICAgICAgICAgICAgICAgICA8cD4nICsgcGVyc29ubmVsLmRpc3BsYXlQciArICc8L3A+XFxuJyArXG4gICAgICAgICAgICAgICc8L2E+J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPlBhcyBkZSByw6lzdWx0YXQgcG91ciB2b3RyZSByZWNoZXJjaGUgPHN0cm9uZz5cIicgKyBrZXl3b3JkICsgJ1wiPC9zdHJvbmc+PC9kaXY+J1xuICAgICAgICB9XG4gICAgICAgIHNlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbC5lbXB0eSgpLmFwcGVuZChodG1sKVxuXG4gICAgICAgIGh0bWwgPSAnJ1xuICAgICAgICBpZiAoZGF0YS5hdXRyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGpRdWVyeS5lYWNoKGRhdGEuYXV0cmVzLCBmdW5jdGlvbiAoaW5kZXgsIGF1dHJlKSB7XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICc8YSBjbGFzcz1cIm1lZGlhIGl0ZW1zLWNlbnRlclwiIGhyZWY9XCJcIj5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXIgYXZhdGFyLXNtXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9hdmF0YXIvMS5qcGdcIiBhbHQ9XCIuLi5cIj5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxwPicgKyBhdXRyZSArICc8L3A+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvYT4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+UGFzIGRlIHLDqXN1bHRhdCBwb3VyIHZvdHJlIHJlY2hlcmNoZSA8c3Ryb25nPlwiJyArIGtleXdvcmQgKyAnXCI8L3N0cm9uZz48L2Rpdj4nXG4gICAgICAgIH1cbiAgICAgICAgc2VhcmNoX3JlcG9uc2VfYXV0cmUuZW1wdHkoKS5hcHBlbmQoaHRtbClcbiAgICAgIH1cbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCI+U2Fpc2lyIGF1IG1vaW5zIDMgY2FyYWN0w6hyZXM8L2Rpdj4nXG4gICAgc2VhcmNoX3JlcG9uc2VfYXV0cmUuZW1wdHkoKS5hcHBlbmQoaHRtbClcbiAgICBzZWFyY2hfcmVwb25zZV9wZXJzb25uZWwuZW1wdHkoKS5hcHBlbmQoaHRtbClcbiAgICBzZWFyY2hfcmVwb25zZV9ldHVkaWFudC5lbXB0eSgpLmFwcGVuZChodG1sKVxuICB9XG59KVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDAxLzEyLzIwMjAgMjI6MDRcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmxldCAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3Qucm93KFwiI2xpZ25lX1wiK2lkKS5yZW1vdmUoKS5kcmF3KCk7ID08IGRhdGF0dGFibGUgdG9kbzogcmVtb3ZlIGxpZ25lIHNpIGRhdGF0YWJsZSA/PyBwcm9ibMOobWUgZGFucyBhZG0+cGVyc29ubmVsXG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2UgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAndGV4dGFyZWEnKSB7XG4gICAgaHRtbCA9IGdlbmVyZVRleHRBcmVhKCQodGhpcykpXG4gIH0gZWxzZSB7XG4gICAgaHRtbCA9IGdlbmVyZUlucHV0KCQodGhpcykpXG4gIH1cbiAgJCh0aGlzKS5yZXBsYWNlV2l0aChodG1sKVxuICAkKCcjbXllZGl0LWlucHV0JykuZm9jdXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNteWVkaXQtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICAkc3RvcENhdGNoRW50ZXIgPSBmYWxzZVxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiAkc3RvcENhdGNoRW50ZXIgPT09IGZhbHNlICYmIGUud2hpY2ggPT09IDI3KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICAgIEVkaXRPbkxpbmUgPSBmYWxzZVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlVGV4dEFyZWEgKCRvYmopIHtcbiAgJHN0b3BDYXRjaEVudGVyID0gdHJ1ZVxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI1XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm15ZWRpdC1pbnB1dFwiPicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnPC90ZXh0YXJlYT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG5cbiAgcmV0dXJuICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCIgdmFsdWU9XCInICsgJG9iai5odG1sKCkudHJpbSgpICsgJ1wiID5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XFxuJyArXG4gICAgJyA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZENoYW1wcyAoJG9iaikge1xuICAkb2JqLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkQ2hhbXBzICgkb2JqKSB7XG4gICRvYmoucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5hZGRDbGFzcygnaXMtdmFsaWQnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxldGVDaGFtcHMgKCRvYmopIHtcbiAgJG9iai5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdmFsaWRhdG9yLWJzNC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI4LzExLzIwMTkgMTk6NDBcblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBWQUxJREFUT1IgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIGdldFZhbHVlKCRlbCkge1xuICAgIHJldHVybiAkZWwuaXMoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKSA/ICRlbC5wcm9wKCdjaGVja2VkJykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAkZWwuaXMoJ1t0eXBlPVwicmFkaW9cIl0nKSAgICA/ICEhJCgnW25hbWU9XCInICsgJGVsLmF0dHIoJ25hbWUnKSArICdcIl06Y2hlY2tlZCcpLmxlbmd0aCA6XG4gICAgICAgICAgICRlbC5pcygnc2VsZWN0W211bHRpcGxlXScpICA/ICgkZWwudmFsKCkgfHwgW10pLmxlbmd0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZWwudmFsKClcbiAgfVxuXG4gIHZhciBWYWxpZGF0b3IgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyAgICA9IG9wdGlvbnNcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSAkLmV4dGVuZCh7fSwgVmFsaWRhdG9yLlZBTElEQVRPUlMsIG9wdGlvbnMuY3VzdG9tKVxuICAgIHRoaXMuJGVsZW1lbnQgICA9ICQoZWxlbWVudClcbiAgICB0aGlzLiRidG4gICAgICAgPSAkKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCdbZm9ybT1cIicgKyB0aGlzLiRlbGVtZW50LmF0dHIoJ2lkJykgKyAnXCJdJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy4kZWxlbWVudC5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpKVxuXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gICAgdGhpcy4kZWxlbWVudC5vbignaW5wdXQuYnMudmFsaWRhdG9yIGNoYW5nZS5icy52YWxpZGF0b3IgZm9jdXNvdXQuYnMudmFsaWRhdG9yJywgJC5wcm94eSh0aGlzLm9uSW5wdXQsIHRoaXMpKVxuICAgIHRoaXMuJGVsZW1lbnQub24oJ3N1Ym1pdC5icy52YWxpZGF0b3InLCAkLnByb3h5KHRoaXMub25TdWJtaXQsIHRoaXMpKVxuICAgIHRoaXMuJGVsZW1lbnQub24oJ3Jlc2V0LmJzLnZhbGlkYXRvcicsICQucHJveHkodGhpcy5yZXNldCwgdGhpcykpXG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLW1hdGNoXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICA9ICQodGhpcylcbiAgICAgIHZhciB0YXJnZXQgPSAkdGhpcy5hdHRyKCdkYXRhLW1hdGNoJylcblxuICAgICAgJCh0YXJnZXQpLm9uKCdpbnB1dC5icy52YWxpZGF0b3InLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBnZXRWYWx1ZSgkdGhpcykgJiYgJHRoaXMudHJpZ2dlcignaW5wdXQuYnMudmFsaWRhdG9yJylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIHJ1biB2YWxpZGF0b3JzIGZvciBmaWVsZHMgd2l0aCB2YWx1ZXMsIGJ1dCBkb24ndCBjbG9iYmVyIHNlcnZlci1zaWRlIGVycm9yc1xuICAgIHRoaXMuJGlucHV0cy5maWx0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldFZhbHVlKCQodGhpcykpICYmICEkKHRoaXMpLmNsb3Nlc3QoJy5oYXMtZXJyb3InKS5sZW5ndGhcbiAgICB9KS50cmlnZ2VyKCdmb2N1c291dCcpXG5cbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ25vdmFsaWRhdGUnLCB0cnVlKSAvLyBkaXNhYmxlIGF1dG9tYXRpYyBuYXRpdmUgdmFsaWRhdGlvblxuICB9XG5cbiAgVmFsaWRhdG9yLlZFUlNJT04gPSAnMC4xMS45J1xuXG4gIFZhbGlkYXRvci5JTlBVVF9TRUxFQ1RPUiA9ICc6aW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdLCBbdHlwZT1cInN1Ym1pdFwiXSwgW3R5cGU9XCJyZXNldFwiXSwgYnV0dG9uKSdcblxuICBWYWxpZGF0b3IuRk9DVVNfT0ZGU0VUID0gMjBcblxuICBWYWxpZGF0b3IuREVGQVVMVFMgPSB7XG4gICAgZGVsYXk6IDUwMCxcbiAgICBodG1sOiBmYWxzZSxcbiAgICBkaXNhYmxlOiB0cnVlLFxuICAgIGZvY3VzOiB0cnVlLFxuICAgIGN1c3RvbToge30sXG4gICAgZXJyb3JzOiB7XG4gICAgICBtYXRjaDogJ0RvZXMgbm90IG1hdGNoJyxcbiAgICAgIG1pbmxlbmd0aDogJ05vdCBsb25nIGVub3VnaCdcbiAgICB9LFxuICAgIGZlZWRiYWNrOiB7XG4gICAgICBzdWNjZXNzOiAnZ2x5cGhpY29uLW9rJyxcbiAgICAgIGVycm9yOiAnZ2x5cGhpY29uLXJlbW92ZSdcbiAgICB9XG4gIH1cblxuICBWYWxpZGF0b3IuVkFMSURBVE9SUyA9IHtcbiAgICAnbmF0aXZlJzogZnVuY3Rpb24gKCRlbCkge1xuICAgICAgdmFyIGVsID0gJGVsWzBdXG4gICAgICBpZiAoZWwuY2hlY2tWYWxpZGl0eSkge1xuICAgICAgICByZXR1cm4gIWVsLmNoZWNrVmFsaWRpdHkoKSAmJiAhZWwudmFsaWRpdHkudmFsaWQgJiYgKGVsLnZhbGlkYXRpb25NZXNzYWdlIHx8IFwiZXJyb3IhXCIpXG4gICAgICB9XG4gICAgfSxcbiAgICAnbWF0Y2gnOiBmdW5jdGlvbiAoJGVsKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gJGVsLmF0dHIoJ2RhdGEtbWF0Y2gnKVxuICAgICAgcmV0dXJuICRlbC52YWwoKSAhPT0gJCh0YXJnZXQpLnZhbCgpICYmIFZhbGlkYXRvci5ERUZBVUxUUy5lcnJvcnMubWF0Y2hcbiAgICB9LFxuICAgICdtaW5sZW5ndGgnOiBmdW5jdGlvbiAoJGVsKSB7XG4gICAgICB2YXIgbWlubGVuZ3RoID0gJGVsLmF0dHIoJ2RhdGEtbWlubGVuZ3RoJylcbiAgICAgIHJldHVybiAkZWwudmFsKCkubGVuZ3RoIDwgbWlubGVuZ3RoICYmIFZhbGlkYXRvci5ERUZBVUxUUy5lcnJvcnMubWlubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgICB0aGlzLiRpbnB1dHMgPSB0aGlzLiRlbGVtZW50LmZpbmQoVmFsaWRhdG9yLklOUFVUX1NFTEVDVE9SKVxuICAgICAgLmFkZCh0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLXZhbGlkYXRlPVwidHJ1ZVwiXScpKVxuICAgICAgLm5vdCh0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLXZhbGlkYXRlPVwiZmFsc2VcIl0nKVxuICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7IHNlbGYuY2xlYXJFcnJvcnMoJCh0aGlzKSkgfSlcbiAgICAgIClcblxuICAgIHRoaXMudG9nZ2xlU3VibWl0KClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLm9uSW5wdXQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBzZWxmICAgICAgICA9IHRoaXNcbiAgICB2YXIgJGVsICAgICAgICAgPSAkKGUudGFyZ2V0KVxuICAgIHZhciBkZWZlckVycm9ycyA9IGUudHlwZSAhPT0gJ2ZvY3Vzb3V0J1xuXG4gICAgaWYgKCF0aGlzLiRpbnB1dHMuaXMoJGVsKSkgcmV0dXJuXG5cbiAgICB0aGlzLnZhbGlkYXRlSW5wdXQoJGVsLCBkZWZlckVycm9ycykuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLnRvZ2dsZVN1Ym1pdCgpXG4gICAgfSlcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGVJbnB1dCA9IGZ1bmN0aW9uICgkZWwsIGRlZmVyRXJyb3JzKSB7XG4gICAgdmFyIHZhbHVlICAgICAgPSBnZXRWYWx1ZSgkZWwpXG4gICAgdmFyIHByZXZFcnJvcnMgPSAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmVycm9ycycpXG5cbiAgICBpZiAoJGVsLmlzKCdbdHlwZT1cInJhZGlvXCJdJykpICRlbCA9IHRoaXMuJGVsZW1lbnQuZmluZCgnaW5wdXRbbmFtZT1cIicgKyAkZWwuYXR0cignbmFtZScpICsgJ1wiXScpXG5cbiAgICB2YXIgZSA9ICQuRXZlbnQoJ3ZhbGlkYXRlLmJzLnZhbGlkYXRvcicsIHtyZWxhdGVkVGFyZ2V0OiAkZWxbMF19KVxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIHZhciBzZWxmID0gdGhpc1xuXG4gICAgcmV0dXJuIHRoaXMucnVuVmFsaWRhdG9ycygkZWwpLmRvbmUoZnVuY3Rpb24gKGVycm9ycykge1xuICAgICAgJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5lcnJvcnMnLCBlcnJvcnMpXG5cbiAgICAgIGVycm9ycy5sZW5ndGhcbiAgICAgICAgPyBkZWZlckVycm9ycyA/IHNlbGYuZGVmZXIoJGVsLCBzZWxmLnNob3dFcnJvcnMpIDogc2VsZi5zaG93RXJyb3JzKCRlbClcbiAgICAgICAgOiBzZWxmLmNsZWFyRXJyb3JzKCRlbClcblxuICAgICAgaWYgKCFwcmV2RXJyb3JzIHx8IGVycm9ycy50b1N0cmluZygpICE9PSBwcmV2RXJyb3JzLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgZSA9IGVycm9ycy5sZW5ndGhcbiAgICAgICAgICA/ICQuRXZlbnQoJ2ludmFsaWQuYnMudmFsaWRhdG9yJywge3JlbGF0ZWRUYXJnZXQ6ICRlbFswXSwgZGV0YWlsOiBlcnJvcnN9KVxuICAgICAgICAgIDogJC5FdmVudCgndmFsaWQuYnMudmFsaWRhdG9yJywge3JlbGF0ZWRUYXJnZXQ6ICRlbFswXSwgZGV0YWlsOiBwcmV2RXJyb3JzfSlcblxuICAgICAgICBzZWxmLiRlbGVtZW50LnRyaWdnZXIoZSlcbiAgICAgIH1cblxuICAgICAgc2VsZi50b2dnbGVTdWJtaXQoKVxuXG4gICAgICBzZWxmLiRlbGVtZW50LnRyaWdnZXIoJC5FdmVudCgndmFsaWRhdGVkLmJzLnZhbGlkYXRvcicsIHtyZWxhdGVkVGFyZ2V0OiAkZWxbMF19KSlcbiAgICB9KVxuICB9XG5cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnJ1blZhbGlkYXRvcnMgPSBmdW5jdGlvbiAoJGVsKSB7XG4gICAgdmFyIGVycm9ycyAgID0gW11cbiAgICB2YXIgZGVmZXJyZWQgPSAkLkRlZmVycmVkKClcblxuICAgICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZGVmZXJyZWQnKSAmJiAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmRlZmVycmVkJykucmVqZWN0KClcbiAgICAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmRlZmVycmVkJywgZGVmZXJyZWQpXG5cbiAgICBmdW5jdGlvbiBnZXRWYWxpZGF0b3JTcGVjaWZpY0Vycm9yKGtleSkge1xuICAgICAgcmV0dXJuICRlbC5hdHRyKCdkYXRhLScgKyBrZXkgKyAnLWVycm9yJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWYWxpZGl0eVN0YXRlRXJyb3IoKSB7XG4gICAgICB2YXIgdmFsaWRpdHkgPSAkZWxbMF0udmFsaWRpdHlcbiAgICAgIHJldHVybiB2YWxpZGl0eS50eXBlTWlzbWF0Y2ggICAgPyAkZWwuYXR0cignZGF0YS10eXBlLWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2ggPyAkZWwuYXR0cignZGF0YS1wYXR0ZXJuLWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS5zdGVwTWlzbWF0Y2ggICAgPyAkZWwuYXR0cignZGF0YS1zdGVwLWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS5yYW5nZU92ZXJmbG93ICAgPyAkZWwuYXR0cignZGF0YS1tYXgtZXJyb3InKVxuICAgICAgICAgICA6IHZhbGlkaXR5LnJhbmdlVW5kZXJmbG93ICA/ICRlbC5hdHRyKCdkYXRhLW1pbi1lcnJvcicpXG4gICAgICAgICAgIDogdmFsaWRpdHkudmFsdWVNaXNzaW5nICAgID8gJGVsLmF0dHIoJ2RhdGEtcmVxdWlyZWQtZXJyb3InKVxuICAgICAgICAgICA6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHZW5lcmljRXJyb3IoKSB7XG4gICAgICByZXR1cm4gJGVsLmF0dHIoJ2RhdGEtZXJyb3InKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShrZXkpIHtcbiAgICAgIHJldHVybiBnZXRWYWxpZGF0b3JTcGVjaWZpY0Vycm9yKGtleSlcbiAgICAgICAgICB8fCBnZXRWYWxpZGl0eVN0YXRlRXJyb3IoKVxuICAgICAgICAgIHx8IGdldEdlbmVyaWNFcnJvcigpXG4gICAgfVxuXG4gICAgJC5lYWNoKHRoaXMudmFsaWRhdG9ycywgJC5wcm94eShmdW5jdGlvbiAoa2V5LCB2YWxpZGF0b3IpIHtcbiAgICAgIHZhciBlcnJvciA9IG51bGxcbiAgICAgIGlmICgoZ2V0VmFsdWUoJGVsKSB8fCAkZWwuYXR0cigncmVxdWlyZWQnKSkgJiZcbiAgICAgICAgICAoJGVsLmF0dHIoJ2RhdGEtJyArIGtleSkgIT09IHVuZGVmaW5lZCB8fCBrZXkgPT0gJ25hdGl2ZScpICYmXG4gICAgICAgICAgKGVycm9yID0gdmFsaWRhdG9yLmNhbGwodGhpcywgJGVsKSkpIHtcbiAgICAgICAgIGVycm9yID0gZ2V0RXJyb3JNZXNzYWdlKGtleSkgfHwgZXJyb3JcbiAgICAgICAgIX5lcnJvcnMuaW5kZXhPZihlcnJvcikgJiYgZXJyb3JzLnB1c2goZXJyb3IpXG4gICAgICB9XG4gICAgfSwgdGhpcykpXG5cbiAgICBpZiAoIWVycm9ycy5sZW5ndGggJiYgZ2V0VmFsdWUoJGVsKSAmJiAkZWwuYXR0cignZGF0YS1yZW1vdGUnKSkge1xuICAgICAgdGhpcy5kZWZlcigkZWwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB7fVxuICAgICAgICBkYXRhWyRlbC5hdHRyKCduYW1lJyldID0gZ2V0VmFsdWUoJGVsKVxuICAgICAgICAkLmdldCgkZWwuYXR0cignZGF0YS1yZW1vdGUnKSwgZGF0YSlcbiAgICAgICAgICAuZmFpbChmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yKSB7IGVycm9ycy5wdXNoKGdldEVycm9yTWVzc2FnZSgncmVtb3RlJykgfHwgZXJyb3IpIH0pXG4gICAgICAgICAgLmFsd2F5cyhmdW5jdGlvbiAoKSB7IGRlZmVycmVkLnJlc29sdmUoZXJyb3JzKX0pXG4gICAgICB9KVxuICAgIH0gZWxzZSBkZWZlcnJlZC5yZXNvbHZlKGVycm9ycylcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlKClcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgICAkLndoZW4odGhpcy4kaW5wdXRzLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiBzZWxmLnZhbGlkYXRlSW5wdXQoJCh0aGlzKSwgZmFsc2UpXG4gICAgfSkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi50b2dnbGVTdWJtaXQoKVxuICAgICAgc2VsZi5mb2N1c0Vycm9yKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuZm9jdXNFcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5mb2N1cykgcmV0dXJuXG5cbiAgICB2YXIgJGlucHV0ID0gdGhpcy4kZWxlbWVudC5maW5kKFwiLmhhcy1lcnJvcjpmaXJzdCA6aW5wdXRcIilcbiAgICBpZiAoJGlucHV0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkaW5wdXQub2Zmc2V0KCkudG9wIC0gVmFsaWRhdG9yLkZPQ1VTX09GRlNFVH0sIDI1MClcbiAgICAkaW5wdXQuZm9jdXMoKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5zaG93RXJyb3JzID0gZnVuY3Rpb24gKCRlbCkge1xuICAgIHZhciBtZXRob2QgPSB0aGlzLm9wdGlvbnMuaHRtbCA/ICdodG1sJyA6ICd0ZXh0J1xuICAgIHZhciBlcnJvcnMgPSAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmVycm9ycycpXG4gICAgdmFyICRncm91cCA9ICRlbC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpXG4gICAgdmFyICRibG9jayA9ICRncm91cC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG4gICAgdmFyICRmZWVkYmFjayA9ICRncm91cC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG5cbiAgICBpZiAoIWVycm9ycy5sZW5ndGgpIHJldHVyblxuXG4gICAgJGVsLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG5cbiAgICBlcnJvcnMgPSAkKCc8dWwvPicpXG4gICAgICAuYWRkQ2xhc3MoJ2xpc3QtdW5zdHlsZWQnKVxuICAgICAgLmFwcGVuZCgkLm1hcChlcnJvcnMsIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gJCgnPGxpLz4nKVttZXRob2RdKGVycm9yKSB9KSlcblxuICAgICRibG9jay5kYXRhKCdicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50JykgPT09IHVuZGVmaW5lZCAmJiAkYmxvY2suZGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcsICRibG9jay5odG1sKCkpXG4gICAgJGJsb2NrLmVtcHR5KCkuYXBwZW5kKGVycm9ycylcbiAgICAkZ3JvdXAuYWRkQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZGFuZ2VyJylcblxuICAgICRncm91cC5oYXNDbGFzcygnaGFzLWZlZWRiYWNrJylcbiAgICAgICYmICRmZWVkYmFjay5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suc3VjY2VzcylcbiAgICAgICYmICRmZWVkYmFjay5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suZXJyb3IpXG4gICAgICAmJiAkZ3JvdXAucmVtb3ZlQ2xhc3MoJ2hhcy1zdWNjZXNzJylcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuY2xlYXJFcnJvcnMgPSBmdW5jdGlvbiAoJGVsKSB7XG4gICAgdmFyICRncm91cCA9ICRlbC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpXG4gICAgdmFyICRibG9jayA9ICRncm91cC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG4gICAgdmFyICRmZWVkYmFjayA9ICRncm91cC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG5cbiAgICAkZWwucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcblxuICAgICRibG9jay5odG1sKCRibG9jay5kYXRhKCdicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50JykpXG4gICAgJGdyb3VwLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3IgaGFzLWRhbmdlciBoYXMtc3VjY2VzcycpXG5cbiAgICAkZ3JvdXAuaGFzQ2xhc3MoJ2hhcy1mZWVkYmFjaycpXG4gICAgICAmJiAkZmVlZGJhY2sucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLmVycm9yKVxuICAgICAgJiYgJGZlZWRiYWNrLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5zdWNjZXNzKVxuICAgICAgJiYgZ2V0VmFsdWUoJGVsKVxuICAgICAgJiYgJGZlZWRiYWNrLmFkZENsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5zdWNjZXNzKVxuICAgICAgJiYgJGdyb3VwLmFkZENsYXNzKCdoYXMtc3VjY2VzcycpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmhhc0Vycm9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBmaWVsZEVycm9ycygpIHtcbiAgICAgIHJldHVybiAhISgkKHRoaXMpLmRhdGEoJ2JzLnZhbGlkYXRvci5lcnJvcnMnKSB8fCBbXSkubGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuICEhdGhpcy4kaW5wdXRzLmZpbHRlcihmaWVsZEVycm9ycykubGVuZ3RoXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmlzSW5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBmaWVsZEluY29tcGxldGUoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXRWYWx1ZSgkKHRoaXMpKVxuICAgICAgcmV0dXJuICEodHlwZW9mIHZhbHVlID09IFwic3RyaW5nXCIgPyAkLnRyaW0odmFsdWUpIDogdmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuICEhdGhpcy4kaW5wdXRzLmZpbHRlcignW3JlcXVpcmVkXScpLmZpbHRlcihmaWVsZEluY29tcGxldGUpLmxlbmd0aFxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdGhpcy52YWxpZGF0ZSgpXG4gICAgaWYgKHRoaXMuaXNJbmNvbXBsZXRlKCkgfHwgdGhpcy5oYXNFcnJvcnMoKSkgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnRvZ2dsZVN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kaXNhYmxlKSByZXR1cm5cbiAgICB0aGlzLiRidG4udG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgdGhpcy5pc0luY29tcGxldGUoKSB8fCB0aGlzLmhhc0Vycm9ycygpKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5kZWZlciA9IGZ1bmN0aW9uICgkZWwsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSAkLnByb3h5KGNhbGxiYWNrLCB0aGlzLCAkZWwpXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGVsYXkpIHJldHVybiBjYWxsYmFjaygpXG4gICAgd2luZG93LmNsZWFyVGltZW91dCgkZWwuZGF0YSgnYnMudmFsaWRhdG9yLnRpbWVvdXQnKSlcbiAgICAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLnRpbWVvdXQnLCB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgdGhpcy5vcHRpb25zLmRlbGF5KSlcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG4gICAgICAucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLmVycm9yKVxuICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5zdWNjZXNzKVxuXG4gICAgdGhpcy4kaW5wdXRzXG4gICAgICAucmVtb3ZlRGF0YShbJ2JzLnZhbGlkYXRvci5lcnJvcnMnLCAnYnMudmFsaWRhdG9yLmRlZmVycmVkJ10pXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKVxuICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgIHZhciB0aW1lb3V0ID0gJHRoaXMuZGF0YSgnYnMudmFsaWRhdG9yLnRpbWVvdXQnKVxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpICYmICR0aGlzLnJlbW92ZURhdGEoJ2JzLnZhbGlkYXRvci50aW1lb3V0JylcbiAgICAgIH0pXG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcbiAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgICB2YXIgb3JpZ2luYWxDb250ZW50ID0gJHRoaXMuZGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcpXG5cbiAgICAgICAgJHRoaXNcbiAgICAgICAgICAucmVtb3ZlRGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcpXG4gICAgICAgICAgLmh0bWwob3JpZ2luYWxDb250ZW50KVxuICAgICAgfSlcblxuICAgIHRoaXMuJGJ0bi5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKVxuXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCcuaGFzLWVycm9yLCAuaGFzLWRhbmdlciwgLmhhcy1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZGFuZ2VyIGhhcy1zdWNjZXNzJylcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAucmVtb3ZlQXR0cignbm92YWxpZGF0ZScpXG4gICAgICAucmVtb3ZlRGF0YSgnYnMudmFsaWRhdG9yJylcbiAgICAgIC5vZmYoJy5icy52YWxpZGF0b3InKVxuXG4gICAgdGhpcy4kaW5wdXRzXG4gICAgICAub2ZmKCcuYnMudmFsaWRhdG9yJylcblxuICAgIHRoaXMub3B0aW9ucyAgICA9IG51bGxcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSBudWxsXG4gICAgdGhpcy4kZWxlbWVudCAgID0gbnVsbFxuICAgIHRoaXMuJGJ0biAgICAgICA9IG51bGxcbiAgICB0aGlzLiRpbnB1dHMgICAgPSBudWxsXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gVkFMSURBVE9SIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgZnVuY3Rpb24gUGx1Z2luKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBWYWxpZGF0b3IuREVGQVVMVFMsICR0aGlzLmRhdGEoKSwgdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb24pXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLnZhbGlkYXRvcicpXG5cbiAgICAgIGlmICghZGF0YSAmJiBvcHRpb24gPT0gJ2Rlc3Ryb3knKSByZXR1cm5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMudmFsaWRhdG9yJywgKGRhdGEgPSBuZXcgVmFsaWRhdG9yKHRoaXMsIG9wdGlvbnMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0oKVxuICAgIH0pXG4gIH1cblxuICB2YXIgb2xkID0gJC5mbi52YWxpZGF0b3JcblxuICAkLmZuLnZhbGlkYXRvciAgICAgICAgICAgICA9IFBsdWdpblxuICAkLmZuLnZhbGlkYXRvci5Db25zdHJ1Y3RvciA9IFZhbGlkYXRvclxuXG5cbiAgLy8gVkFMSURBVE9SIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09PT09PVxuXG4gICQuZm4udmFsaWRhdG9yLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi52YWxpZGF0b3IgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBWQUxJREFUT1IgREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09PT09PT09XG5cbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICQoJ2Zvcm1bZGF0YS10b2dnbGU9XCJ2YWxpZGF0b3JcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkZm9ybSA9ICQodGhpcylcbiAgICAgIFBsdWdpbi5jYWxsKCRmb3JtLCAkZm9ybS5kYXRhKCkpXG4gICAgfSlcbiAgfSlcblxufShqUXVlcnkpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9qcy9ib290c3RyYXAtZGF0ZXBpY2tlci5taW4uanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxNy8wOC8yMDIwIDE0OjIwXG5cbi8qIVxuICogRGF0ZXBpY2tlciBmb3IgQm9vdHN0cmFwIHYxLjguMCAoaHR0cHM6Ly9naXRodWIuY29tL3V4c29sdXRpb25zL2Jvb3RzdHJhcC1kYXRlcGlja2VyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSB2Mi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApXG4gKi9cblxuIWZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGEpOmEoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/cmVxdWlyZShcImpxdWVyeVwiKTpqUXVlcnkpfShmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoKXtyZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkoRGF0ZSxhcmd1bWVudHMpKX1mdW5jdGlvbiBkKCl7dmFyIGE9bmV3IERhdGU7cmV0dXJuIGMoYS5nZXRGdWxsWWVhcigpLGEuZ2V0TW9udGgoKSxhLmdldERhdGUoKSl9ZnVuY3Rpb24gZShhLGIpe3JldHVybiBhLmdldFVUQ0Z1bGxZZWFyKCk9PT1iLmdldFVUQ0Z1bGxZZWFyKCkmJmEuZ2V0VVRDTW9udGgoKT09PWIuZ2V0VVRDTW9udGgoKSYmYS5nZXRVVENEYXRlKCk9PT1iLmdldFVUQ0RhdGUoKX1mdW5jdGlvbiBmKGMsZCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGQhPT1iJiZhLmZuLmRhdGVwaWNrZXIuZGVwcmVjYXRlZChkKSx0aGlzW2NdLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19ZnVuY3Rpb24gZyhhKXtyZXR1cm4gYSYmIWlzTmFOKGEuZ2V0VGltZSgpKX1mdW5jdGlvbiBoKGIsYyl7ZnVuY3Rpb24gZChhLGIpe3JldHVybiBiLnRvTG93ZXJDYXNlKCl9dmFyIGUsZj1hKGIpLmRhdGEoKSxnPXt9LGg9bmV3IFJlZ0V4cChcIl5cIitjLnRvTG93ZXJDYXNlKCkrXCIoW0EtWl0pXCIpO2M9bmV3IFJlZ0V4cChcIl5cIitjLnRvTG93ZXJDYXNlKCkpO2Zvcih2YXIgaSBpbiBmKWMudGVzdChpKSYmKGU9aS5yZXBsYWNlKGgsZCksZ1tlXT1mW2ldKTtyZXR1cm4gZ31mdW5jdGlvbiBpKGIpe3ZhciBjPXt9O2lmKHFbYl18fChiPWIuc3BsaXQoXCItXCIpWzBdLHFbYl0pKXt2YXIgZD1xW2JdO3JldHVybiBhLmVhY2gocCxmdW5jdGlvbihhLGIpe2IgaW4gZCYmKGNbYl09ZFtiXSl9KSxjfX12YXIgaj1mdW5jdGlvbigpe3ZhciBiPXtnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuc2xpY2UoYSlbMF19LGNvbnRhaW5zOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1hJiZhLnZhbHVlT2YoKSxjPTAsZD10aGlzLmxlbmd0aDtjPGQ7YysrKWlmKDA8PXRoaXNbY10udmFsdWVPZigpLWImJnRoaXNbY10udmFsdWVPZigpLWI8ODY0ZTUpcmV0dXJuIGM7cmV0dXJuLTF9LHJlbW92ZTpmdW5jdGlvbihhKXt0aGlzLnNwbGljZShhLDEpfSxyZXBsYWNlOmZ1bmN0aW9uKGIpe2ImJihhLmlzQXJyYXkoYil8fChiPVtiXSksdGhpcy5jbGVhcigpLHRoaXMucHVzaC5hcHBseSh0aGlzLGIpKX0sY2xlYXI6ZnVuY3Rpb24oKXt0aGlzLmxlbmd0aD0wfSxjb3B5OmZ1bmN0aW9uKCl7dmFyIGE9bmV3IGo7cmV0dXJuIGEucmVwbGFjZSh0aGlzKSxhfX07cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9W107cmV0dXJuIGMucHVzaC5hcHBseShjLGFyZ3VtZW50cyksYS5leHRlbmQoYyxiKSxjfX0oKSxrPWZ1bmN0aW9uKGIsYyl7YS5kYXRhKGIsXCJkYXRlcGlja2VyXCIsdGhpcyksdGhpcy5fcHJvY2Vzc19vcHRpb25zKGMpLHRoaXMuZGF0ZXM9bmV3IGosdGhpcy52aWV3RGF0ZT10aGlzLm8uZGVmYXVsdFZpZXdEYXRlLHRoaXMuZm9jdXNEYXRlPW51bGwsdGhpcy5lbGVtZW50PWEoYiksdGhpcy5pc0lucHV0PXRoaXMuZWxlbWVudC5pcyhcImlucHV0XCIpLHRoaXMuaW5wdXRGaWVsZD10aGlzLmlzSW5wdXQ/dGhpcy5lbGVtZW50OnRoaXMuZWxlbWVudC5maW5kKFwiaW5wdXRcIiksdGhpcy5jb21wb25lbnQ9ISF0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJkYXRlXCIpJiZ0aGlzLmVsZW1lbnQuZmluZChcIi5hZGQtb24sIC5pbnB1dC1ncm91cC1hZGRvbiwgLmJ0blwiKSx0aGlzLmNvbXBvbmVudCYmMD09PXRoaXMuY29tcG9uZW50Lmxlbmd0aCYmKHRoaXMuY29tcG9uZW50PSExKSx0aGlzLmlzSW5saW5lPSF0aGlzLmNvbXBvbmVudCYmdGhpcy5lbGVtZW50LmlzKFwiZGl2XCIpLHRoaXMucGlja2VyPWEoci50ZW1wbGF0ZSksdGhpcy5fY2hlY2tfdGVtcGxhdGUodGhpcy5vLnRlbXBsYXRlcy5sZWZ0QXJyb3cpJiZ0aGlzLnBpY2tlci5maW5kKFwiLnByZXZcIikuaHRtbCh0aGlzLm8udGVtcGxhdGVzLmxlZnRBcnJvdyksdGhpcy5fY2hlY2tfdGVtcGxhdGUodGhpcy5vLnRlbXBsYXRlcy5yaWdodEFycm93KSYmdGhpcy5waWNrZXIuZmluZChcIi5uZXh0XCIpLmh0bWwodGhpcy5vLnRlbXBsYXRlcy5yaWdodEFycm93KSx0aGlzLl9idWlsZEV2ZW50cygpLHRoaXMuX2F0dGFjaEV2ZW50cygpLHRoaXMuaXNJbmxpbmU/dGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLWlubGluZVwiKS5hcHBlbmRUbyh0aGlzLmVsZW1lbnQpOnRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1kcm9wZG93biBkcm9wZG93bi1tZW51XCIpLHRoaXMuby5ydGwmJnRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1ydGxcIiksdGhpcy5vLmNhbGVuZGFyV2Vla3MmJnRoaXMucGlja2VyLmZpbmQoXCIuZGF0ZXBpY2tlci1kYXlzIC5kYXRlcGlja2VyLXN3aXRjaCwgdGhlYWQgLmRhdGVwaWNrZXItdGl0bGUsIHRmb290IC50b2RheSwgdGZvb3QgLmNsZWFyXCIpLmF0dHIoXCJjb2xzcGFuXCIsZnVuY3Rpb24oYSxiKXtyZXR1cm4gTnVtYmVyKGIpKzF9KSx0aGlzLl9wcm9jZXNzX29wdGlvbnMoe3N0YXJ0RGF0ZTp0aGlzLl9vLnN0YXJ0RGF0ZSxlbmREYXRlOnRoaXMuX28uZW5kRGF0ZSxkYXlzT2ZXZWVrRGlzYWJsZWQ6dGhpcy5vLmRheXNPZldlZWtEaXNhYmxlZCxkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6dGhpcy5vLmRheXNPZldlZWtIaWdobGlnaHRlZCxkYXRlc0Rpc2FibGVkOnRoaXMuby5kYXRlc0Rpc2FibGVkfSksdGhpcy5fYWxsb3dfdXBkYXRlPSExLHRoaXMuc2V0Vmlld01vZGUodGhpcy5vLnN0YXJ0VmlldyksdGhpcy5fYWxsb3dfdXBkYXRlPSEwLHRoaXMuZmlsbERvdygpLHRoaXMuZmlsbE1vbnRocygpLHRoaXMudXBkYXRlKCksdGhpcy5pc0lubGluZSYmdGhpcy5zaG93KCl9O2sucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjprLF9yZXNvbHZlVmlld05hbWU6ZnVuY3Rpb24oYil7cmV0dXJuIGEuZWFjaChyLnZpZXdNb2RlcyxmdW5jdGlvbihjLGQpe2lmKGI9PT1jfHxhLmluQXJyYXkoYixkLm5hbWVzKSE9PS0xKXJldHVybiBiPWMsITF9KSxifSxfcmVzb2x2ZURheXNPZldlZWs6ZnVuY3Rpb24oYil7cmV0dXJuIGEuaXNBcnJheShiKXx8KGI9Yi5zcGxpdCgvWyxcXHNdKi8pKSxhLm1hcChiLE51bWJlcil9LF9jaGVja190ZW1wbGF0ZTpmdW5jdGlvbihjKXt0cnl7aWYoYz09PWJ8fFwiXCI9PT1jKXJldHVybiExO2lmKChjLm1hdGNoKC9bPD5dL2cpfHxbXSkubGVuZ3RoPD0wKXJldHVybiEwO3ZhciBkPWEoYyk7cmV0dXJuIGQubGVuZ3RoPjB9Y2F0Y2goYSl7cmV0dXJuITF9fSxfcHJvY2Vzc19vcHRpb25zOmZ1bmN0aW9uKGIpe3RoaXMuX289YS5leHRlbmQoe30sdGhpcy5fbyxiKTt2YXIgZT10aGlzLm89YS5leHRlbmQoe30sdGhpcy5fbyksZj1lLmxhbmd1YWdlO3FbZl18fChmPWYuc3BsaXQoXCItXCIpWzBdLHFbZl18fChmPW8ubGFuZ3VhZ2UpKSxlLmxhbmd1YWdlPWYsZS5zdGFydFZpZXc9dGhpcy5fcmVzb2x2ZVZpZXdOYW1lKGUuc3RhcnRWaWV3KSxlLm1pblZpZXdNb2RlPXRoaXMuX3Jlc29sdmVWaWV3TmFtZShlLm1pblZpZXdNb2RlKSxlLm1heFZpZXdNb2RlPXRoaXMuX3Jlc29sdmVWaWV3TmFtZShlLm1heFZpZXdNb2RlKSxlLnN0YXJ0Vmlldz1NYXRoLm1heCh0aGlzLm8ubWluVmlld01vZGUsTWF0aC5taW4odGhpcy5vLm1heFZpZXdNb2RlLGUuc3RhcnRWaWV3KSksZS5tdWx0aWRhdGUhPT0hMCYmKGUubXVsdGlkYXRlPU51bWJlcihlLm11bHRpZGF0ZSl8fCExLGUubXVsdGlkYXRlIT09ITEmJihlLm11bHRpZGF0ZT1NYXRoLm1heCgwLGUubXVsdGlkYXRlKSkpLGUubXVsdGlkYXRlU2VwYXJhdG9yPVN0cmluZyhlLm11bHRpZGF0ZVNlcGFyYXRvciksZS53ZWVrU3RhcnQlPTcsZS53ZWVrRW5kPShlLndlZWtTdGFydCs2KSU3O3ZhciBnPXIucGFyc2VGb3JtYXQoZS5mb3JtYXQpO2Uuc3RhcnREYXRlIT09LSgxLzApJiYoZS5zdGFydERhdGU/ZS5zdGFydERhdGUgaW5zdGFuY2VvZiBEYXRlP2Uuc3RhcnREYXRlPXRoaXMuX2xvY2FsX3RvX3V0Yyh0aGlzLl96ZXJvX3RpbWUoZS5zdGFydERhdGUpKTplLnN0YXJ0RGF0ZT1yLnBhcnNlRGF0ZShlLnN0YXJ0RGF0ZSxnLGUubGFuZ3VhZ2UsZS5hc3N1bWVOZWFyYnlZZWFyKTplLnN0YXJ0RGF0ZT0tKDEvMCkpLGUuZW5kRGF0ZSE9PTEvMCYmKGUuZW5kRGF0ZT9lLmVuZERhdGUgaW5zdGFuY2VvZiBEYXRlP2UuZW5kRGF0ZT10aGlzLl9sb2NhbF90b191dGModGhpcy5femVyb190aW1lKGUuZW5kRGF0ZSkpOmUuZW5kRGF0ZT1yLnBhcnNlRGF0ZShlLmVuZERhdGUsZyxlLmxhbmd1YWdlLGUuYXNzdW1lTmVhcmJ5WWVhcik6ZS5lbmREYXRlPTEvMCksZS5kYXlzT2ZXZWVrRGlzYWJsZWQ9dGhpcy5fcmVzb2x2ZURheXNPZldlZWsoZS5kYXlzT2ZXZWVrRGlzYWJsZWR8fFtdKSxlLmRheXNPZldlZWtIaWdobGlnaHRlZD10aGlzLl9yZXNvbHZlRGF5c09mV2VlayhlLmRheXNPZldlZWtIaWdobGlnaHRlZHx8W10pLGUuZGF0ZXNEaXNhYmxlZD1lLmRhdGVzRGlzYWJsZWR8fFtdLGEuaXNBcnJheShlLmRhdGVzRGlzYWJsZWQpfHwoZS5kYXRlc0Rpc2FibGVkPWUuZGF0ZXNEaXNhYmxlZC5zcGxpdChcIixcIikpLGUuZGF0ZXNEaXNhYmxlZD1hLm1hcChlLmRhdGVzRGlzYWJsZWQsZnVuY3Rpb24oYSl7cmV0dXJuIHIucGFyc2VEYXRlKGEsZyxlLmxhbmd1YWdlLGUuYXNzdW1lTmVhcmJ5WWVhcil9KTt2YXIgaD1TdHJpbmcoZS5vcmllbnRhdGlvbikudG9Mb3dlckNhc2UoKS5zcGxpdCgvXFxzKy9nKSxpPWUub3JpZW50YXRpb24udG9Mb3dlckNhc2UoKTtpZihoPWEuZ3JlcChoLGZ1bmN0aW9uKGEpe3JldHVybi9eYXV0b3xsZWZ0fHJpZ2h0fHRvcHxib3R0b20kLy50ZXN0KGEpfSksZS5vcmllbnRhdGlvbj17eDpcImF1dG9cIix5OlwiYXV0b1wifSxpJiZcImF1dG9cIiE9PWkpaWYoMT09PWgubGVuZ3RoKXN3aXRjaChoWzBdKXtjYXNlXCJ0b3BcIjpjYXNlXCJib3R0b21cIjplLm9yaWVudGF0aW9uLnk9aFswXTticmVhaztjYXNlXCJsZWZ0XCI6Y2FzZVwicmlnaHRcIjplLm9yaWVudGF0aW9uLng9aFswXX1lbHNlIGk9YS5ncmVwKGgsZnVuY3Rpb24oYSl7cmV0dXJuL15sZWZ0fHJpZ2h0JC8udGVzdChhKX0pLGUub3JpZW50YXRpb24ueD1pWzBdfHxcImF1dG9cIixpPWEuZ3JlcChoLGZ1bmN0aW9uKGEpe3JldHVybi9edG9wfGJvdHRvbSQvLnRlc3QoYSl9KSxlLm9yaWVudGF0aW9uLnk9aVswXXx8XCJhdXRvXCI7ZWxzZTtpZihlLmRlZmF1bHRWaWV3RGF0ZSBpbnN0YW5jZW9mIERhdGV8fFwic3RyaW5nXCI9PXR5cGVvZiBlLmRlZmF1bHRWaWV3RGF0ZSllLmRlZmF1bHRWaWV3RGF0ZT1yLnBhcnNlRGF0ZShlLmRlZmF1bHRWaWV3RGF0ZSxnLGUubGFuZ3VhZ2UsZS5hc3N1bWVOZWFyYnlZZWFyKTtlbHNlIGlmKGUuZGVmYXVsdFZpZXdEYXRlKXt2YXIgaj1lLmRlZmF1bHRWaWV3RGF0ZS55ZWFyfHwobmV3IERhdGUpLmdldEZ1bGxZZWFyKCksaz1lLmRlZmF1bHRWaWV3RGF0ZS5tb250aHx8MCxsPWUuZGVmYXVsdFZpZXdEYXRlLmRheXx8MTtlLmRlZmF1bHRWaWV3RGF0ZT1jKGosayxsKX1lbHNlIGUuZGVmYXVsdFZpZXdEYXRlPWQoKX0sX2V2ZW50czpbXSxfc2Vjb25kYXJ5RXZlbnRzOltdLF9hcHBseUV2ZW50czpmdW5jdGlvbihhKXtmb3IodmFyIGMsZCxlLGY9MDtmPGEubGVuZ3RoO2YrKyljPWFbZl1bMF0sMj09PWFbZl0ubGVuZ3RoPyhkPWIsZT1hW2ZdWzFdKTozPT09YVtmXS5sZW5ndGgmJihkPWFbZl1bMV0sZT1hW2ZdWzJdKSxjLm9uKGUsZCl9LF91bmFwcGx5RXZlbnRzOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkLGUsZj0wO2Y8YS5sZW5ndGg7ZisrKWM9YVtmXVswXSwyPT09YVtmXS5sZW5ndGg/KGU9YixkPWFbZl1bMV0pOjM9PT1hW2ZdLmxlbmd0aCYmKGU9YVtmXVsxXSxkPWFbZl1bMl0pLGMub2ZmKGQsZSl9LF9idWlsZEV2ZW50czpmdW5jdGlvbigpe3ZhciBiPXtrZXl1cDphLnByb3h5KGZ1bmN0aW9uKGIpe2EuaW5BcnJheShiLmtleUNvZGUsWzI3LDM3LDM5LDM4LDQwLDMyLDEzLDldKT09PS0xJiZ0aGlzLnVwZGF0ZSgpfSx0aGlzKSxrZXlkb3duOmEucHJveHkodGhpcy5rZXlkb3duLHRoaXMpLHBhc3RlOmEucHJveHkodGhpcy5wYXN0ZSx0aGlzKX07dGhpcy5vLnNob3dPbkZvY3VzPT09ITAmJihiLmZvY3VzPWEucHJveHkodGhpcy5zaG93LHRoaXMpKSx0aGlzLmlzSW5wdXQ/dGhpcy5fZXZlbnRzPVtbdGhpcy5lbGVtZW50LGJdXTp0aGlzLmNvbXBvbmVudCYmdGhpcy5pbnB1dEZpZWxkLmxlbmd0aD90aGlzLl9ldmVudHM9W1t0aGlzLmlucHV0RmllbGQsYl0sW3RoaXMuY29tcG9uZW50LHtjbGljazphLnByb3h5KHRoaXMuc2hvdyx0aGlzKX1dXTp0aGlzLl9ldmVudHM9W1t0aGlzLmVsZW1lbnQse2NsaWNrOmEucHJveHkodGhpcy5zaG93LHRoaXMpLGtleWRvd246YS5wcm94eSh0aGlzLmtleWRvd24sdGhpcyl9XV0sdGhpcy5fZXZlbnRzLnB1c2goW3RoaXMuZWxlbWVudCxcIipcIix7Ymx1cjphLnByb3h5KGZ1bmN0aW9uKGEpe3RoaXMuX2ZvY3VzZWRfZnJvbT1hLnRhcmdldH0sdGhpcyl9XSxbdGhpcy5lbGVtZW50LHtibHVyOmEucHJveHkoZnVuY3Rpb24oYSl7dGhpcy5fZm9jdXNlZF9mcm9tPWEudGFyZ2V0fSx0aGlzKX1dKSx0aGlzLm8uaW1tZWRpYXRlVXBkYXRlcyYmdGhpcy5fZXZlbnRzLnB1c2goW3RoaXMuZWxlbWVudCx7XCJjaGFuZ2VZZWFyIGNoYW5nZU1vbnRoXCI6YS5wcm94eShmdW5jdGlvbihhKXt0aGlzLnVwZGF0ZShhLmRhdGUpfSx0aGlzKX1dKSx0aGlzLl9zZWNvbmRhcnlFdmVudHM9W1t0aGlzLnBpY2tlcix7Y2xpY2s6YS5wcm94eSh0aGlzLmNsaWNrLHRoaXMpfV0sW3RoaXMucGlja2VyLFwiLnByZXYsIC5uZXh0XCIse2NsaWNrOmEucHJveHkodGhpcy5uYXZBcnJvd3NDbGljayx0aGlzKX1dLFt0aGlzLnBpY2tlcixcIi5kYXk6bm90KC5kaXNhYmxlZClcIix7Y2xpY2s6YS5wcm94eSh0aGlzLmRheUNlbGxDbGljayx0aGlzKX1dLFthKHdpbmRvdykse3Jlc2l6ZTphLnByb3h5KHRoaXMucGxhY2UsdGhpcyl9XSxbYShkb2N1bWVudCkse1wibW91c2Vkb3duIHRvdWNoc3RhcnRcIjphLnByb3h5KGZ1bmN0aW9uKGEpe3RoaXMuZWxlbWVudC5pcyhhLnRhcmdldCl8fHRoaXMuZWxlbWVudC5maW5kKGEudGFyZ2V0KS5sZW5ndGh8fHRoaXMucGlja2VyLmlzKGEudGFyZ2V0KXx8dGhpcy5waWNrZXIuZmluZChhLnRhcmdldCkubGVuZ3RofHx0aGlzLmlzSW5saW5lfHx0aGlzLmhpZGUoKX0sdGhpcyl9XV19LF9hdHRhY2hFdmVudHM6ZnVuY3Rpb24oKXt0aGlzLl9kZXRhY2hFdmVudHMoKSx0aGlzLl9hcHBseUV2ZW50cyh0aGlzLl9ldmVudHMpfSxfZGV0YWNoRXZlbnRzOmZ1bmN0aW9uKCl7dGhpcy5fdW5hcHBseUV2ZW50cyh0aGlzLl9ldmVudHMpfSxfYXR0YWNoU2Vjb25kYXJ5RXZlbnRzOmZ1bmN0aW9uKCl7dGhpcy5fZGV0YWNoU2Vjb25kYXJ5RXZlbnRzKCksdGhpcy5fYXBwbHlFdmVudHModGhpcy5fc2Vjb25kYXJ5RXZlbnRzKX0sX2RldGFjaFNlY29uZGFyeUV2ZW50czpmdW5jdGlvbigpe3RoaXMuX3VuYXBwbHlFdmVudHModGhpcy5fc2Vjb25kYXJ5RXZlbnRzKX0sX3RyaWdnZXI6ZnVuY3Rpb24oYixjKXt2YXIgZD1jfHx0aGlzLmRhdGVzLmdldCgtMSksZT10aGlzLl91dGNfdG9fbG9jYWwoZCk7dGhpcy5lbGVtZW50LnRyaWdnZXIoe3R5cGU6YixkYXRlOmUsdmlld01vZGU6dGhpcy52aWV3TW9kZSxkYXRlczphLm1hcCh0aGlzLmRhdGVzLHRoaXMuX3V0Y190b19sb2NhbCksZm9ybWF0OmEucHJveHkoZnVuY3Rpb24oYSxiKXswPT09YXJndW1lbnRzLmxlbmd0aD8oYT10aGlzLmRhdGVzLmxlbmd0aC0xLGI9dGhpcy5vLmZvcm1hdCk6XCJzdHJpbmdcIj09dHlwZW9mIGEmJihiPWEsYT10aGlzLmRhdGVzLmxlbmd0aC0xKSxiPWJ8fHRoaXMuby5mb3JtYXQ7dmFyIGM9dGhpcy5kYXRlcy5nZXQoYSk7cmV0dXJuIHIuZm9ybWF0RGF0ZShjLGIsdGhpcy5vLmxhbmd1YWdlKX0sdGhpcyl9KX0sc2hvdzpmdW5jdGlvbigpe2lmKCEodGhpcy5pbnB1dEZpZWxkLnByb3AoXCJkaXNhYmxlZFwiKXx8dGhpcy5pbnB1dEZpZWxkLnByb3AoXCJyZWFkb25seVwiKSYmdGhpcy5vLmVuYWJsZU9uUmVhZG9ubHk9PT0hMSkpcmV0dXJuIHRoaXMuaXNJbmxpbmV8fHRoaXMucGlja2VyLmFwcGVuZFRvKHRoaXMuby5jb250YWluZXIpLHRoaXMucGxhY2UoKSx0aGlzLnBpY2tlci5zaG93KCksdGhpcy5fYXR0YWNoU2Vjb25kYXJ5RXZlbnRzKCksdGhpcy5fdHJpZ2dlcihcInNob3dcIiksKHdpbmRvdy5uYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50c3x8XCJvbnRvdWNoc3RhcnRcImluIGRvY3VtZW50KSYmdGhpcy5vLmRpc2FibGVUb3VjaEtleWJvYXJkJiZhKHRoaXMuZWxlbWVudCkuYmx1cigpLHRoaXN9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc0lubGluZXx8IXRoaXMucGlja2VyLmlzKFwiOnZpc2libGVcIik/dGhpczoodGhpcy5mb2N1c0RhdGU9bnVsbCx0aGlzLnBpY2tlci5oaWRlKCkuZGV0YWNoKCksdGhpcy5fZGV0YWNoU2Vjb25kYXJ5RXZlbnRzKCksdGhpcy5zZXRWaWV3TW9kZSh0aGlzLm8uc3RhcnRWaWV3KSx0aGlzLm8uZm9yY2VQYXJzZSYmdGhpcy5pbnB1dEZpZWxkLnZhbCgpJiZ0aGlzLnNldFZhbHVlKCksdGhpcy5fdHJpZ2dlcihcImhpZGVcIiksdGhpcyl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oaWRlKCksdGhpcy5fZGV0YWNoRXZlbnRzKCksdGhpcy5fZGV0YWNoU2Vjb25kYXJ5RXZlbnRzKCksdGhpcy5waWNrZXIucmVtb3ZlKCksZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZXBpY2tlcix0aGlzLmlzSW5wdXR8fGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGUsdGhpc30scGFzdGU6ZnVuY3Rpb24oYil7dmFyIGM7aWYoYi5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEmJmIub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhLnR5cGVzJiZhLmluQXJyYXkoXCJ0ZXh0L3BsYWluXCIsYi5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEudHlwZXMpIT09LTEpYz1iLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtlbHNle2lmKCF3aW5kb3cuY2xpcGJvYXJkRGF0YSlyZXR1cm47Yz13aW5kb3cuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwiVGV4dFwiKX10aGlzLnNldERhdGUoYyksdGhpcy51cGRhdGUoKSxiLnByZXZlbnREZWZhdWx0KCl9LF91dGNfdG9fbG9jYWw6ZnVuY3Rpb24oYSl7aWYoIWEpcmV0dXJuIGE7dmFyIGI9bmV3IERhdGUoYS5nZXRUaW1lKCkrNmU0KmEuZ2V0VGltZXpvbmVPZmZzZXQoKSk7cmV0dXJuIGIuZ2V0VGltZXpvbmVPZmZzZXQoKSE9PWEuZ2V0VGltZXpvbmVPZmZzZXQoKSYmKGI9bmV3IERhdGUoYS5nZXRUaW1lKCkrNmU0KmIuZ2V0VGltZXpvbmVPZmZzZXQoKSkpLGJ9LF9sb2NhbF90b191dGM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJm5ldyBEYXRlKGEuZ2V0VGltZSgpLTZlNCphLmdldFRpbWV6b25lT2Zmc2V0KCkpfSxfemVyb190aW1lOmZ1bmN0aW9uKGEpe3JldHVybiBhJiZuZXcgRGF0ZShhLmdldEZ1bGxZZWFyKCksYS5nZXRNb250aCgpLGEuZ2V0RGF0ZSgpKX0sX3plcm9fdXRjX3RpbWU6ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJmMoYS5nZXRVVENGdWxsWWVhcigpLGEuZ2V0VVRDTW9udGgoKSxhLmdldFVUQ0RhdGUoKSl9LGdldERhdGVzOmZ1bmN0aW9uKCl7cmV0dXJuIGEubWFwKHRoaXMuZGF0ZXMsdGhpcy5fdXRjX3RvX2xvY2FsKX0sZ2V0VVRDRGF0ZXM6ZnVuY3Rpb24oKXtyZXR1cm4gYS5tYXAodGhpcy5kYXRlcyxmdW5jdGlvbihhKXtyZXR1cm4gbmV3IERhdGUoYSl9KX0sZ2V0RGF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl91dGNfdG9fbG9jYWwodGhpcy5nZXRVVENEYXRlKCkpfSxnZXRVVENEYXRlOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5kYXRlcy5nZXQoLTEpO3JldHVybiBhIT09Yj9uZXcgRGF0ZShhKTpudWxsfSxjbGVhckRhdGVzOmZ1bmN0aW9uKCl7dGhpcy5pbnB1dEZpZWxkLnZhbChcIlwiKSx0aGlzLnVwZGF0ZSgpLHRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VEYXRlXCIpLHRoaXMuby5hdXRvY2xvc2UmJnRoaXMuaGlkZSgpfSxzZXREYXRlczpmdW5jdGlvbigpe3ZhciBiPWEuaXNBcnJheShhcmd1bWVudHNbMF0pP2FyZ3VtZW50c1swXTphcmd1bWVudHM7cmV0dXJuIHRoaXMudXBkYXRlLmFwcGx5KHRoaXMsYiksdGhpcy5fdHJpZ2dlcihcImNoYW5nZURhdGVcIiksdGhpcy5zZXRWYWx1ZSgpLHRoaXN9LHNldFVUQ0RhdGVzOmZ1bmN0aW9uKCl7dmFyIGI9YS5pc0FycmF5KGFyZ3VtZW50c1swXSk/YXJndW1lbnRzWzBdOmFyZ3VtZW50cztyZXR1cm4gdGhpcy5zZXREYXRlcy5hcHBseSh0aGlzLGEubWFwKGIsdGhpcy5fdXRjX3RvX2xvY2FsKSksdGhpc30sc2V0RGF0ZTpmKFwic2V0RGF0ZXNcIiksc2V0VVRDRGF0ZTpmKFwic2V0VVRDRGF0ZXNcIikscmVtb3ZlOmYoXCJkZXN0cm95XCIsXCJNZXRob2QgYHJlbW92ZWAgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gMi4wLiBVc2UgYGRlc3Ryb3lgIGluc3RlYWRcIiksc2V0VmFsdWU6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmdldEZvcm1hdHRlZERhdGUoKTtyZXR1cm4gdGhpcy5pbnB1dEZpZWxkLnZhbChhKSx0aGlzfSxnZXRGb3JtYXR0ZWREYXRlOmZ1bmN0aW9uKGMpe2M9PT1iJiYoYz10aGlzLm8uZm9ybWF0KTt2YXIgZD10aGlzLm8ubGFuZ3VhZ2U7cmV0dXJuIGEubWFwKHRoaXMuZGF0ZXMsZnVuY3Rpb24oYSl7cmV0dXJuIHIuZm9ybWF0RGF0ZShhLGMsZCl9KS5qb2luKHRoaXMuby5tdWx0aWRhdGVTZXBhcmF0b3IpfSxnZXRTdGFydERhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vLnN0YXJ0RGF0ZX0sc2V0U3RhcnREYXRlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9wcm9jZXNzX29wdGlvbnMoe3N0YXJ0RGF0ZTphfSksdGhpcy51cGRhdGUoKSx0aGlzLnVwZGF0ZU5hdkFycm93cygpLHRoaXN9LGdldEVuZERhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vLmVuZERhdGV9LHNldEVuZERhdGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7ZW5kRGF0ZTphfSksdGhpcy51cGRhdGUoKSx0aGlzLnVwZGF0ZU5hdkFycm93cygpLHRoaXN9LHNldERheXNPZldlZWtEaXNhYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fcHJvY2Vzc19vcHRpb25zKHtkYXlzT2ZXZWVrRGlzYWJsZWQ6YX0pLHRoaXMudXBkYXRlKCksdGhpc30sc2V0RGF5c09mV2Vla0hpZ2hsaWdodGVkOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9wcm9jZXNzX29wdGlvbnMoe2RheXNPZldlZWtIaWdobGlnaHRlZDphfSksdGhpcy51cGRhdGUoKSx0aGlzfSxzZXREYXRlc0Rpc2FibGVkOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9wcm9jZXNzX29wdGlvbnMoe2RhdGVzRGlzYWJsZWQ6YX0pLHRoaXMudXBkYXRlKCksdGhpc30scGxhY2U6ZnVuY3Rpb24oKXtpZih0aGlzLmlzSW5saW5lKXJldHVybiB0aGlzO3ZhciBiPXRoaXMucGlja2VyLm91dGVyV2lkdGgoKSxjPXRoaXMucGlja2VyLm91dGVySGVpZ2h0KCksZD0xMCxlPWEodGhpcy5vLmNvbnRhaW5lciksZj1lLndpZHRoKCksZz1cImJvZHlcIj09PXRoaXMuby5jb250YWluZXI/YShkb2N1bWVudCkuc2Nyb2xsVG9wKCk6ZS5zY3JvbGxUb3AoKSxoPWUub2Zmc2V0KCksaT1bMF07dGhpcy5lbGVtZW50LnBhcmVudHMoKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKS5jc3MoXCJ6LWluZGV4XCIpO1wiYXV0b1wiIT09YiYmMCE9PU51bWJlcihiKSYmaS5wdXNoKE51bWJlcihiKSl9KTt2YXIgaj1NYXRoLm1heC5hcHBseShNYXRoLGkpK3RoaXMuby56SW5kZXhPZmZzZXQsaz10aGlzLmNvbXBvbmVudD90aGlzLmNvbXBvbmVudC5wYXJlbnQoKS5vZmZzZXQoKTp0aGlzLmVsZW1lbnQub2Zmc2V0KCksbD10aGlzLmNvbXBvbmVudD90aGlzLmNvbXBvbmVudC5vdXRlckhlaWdodCghMCk6dGhpcy5lbGVtZW50Lm91dGVySGVpZ2h0KCExKSxtPXRoaXMuY29tcG9uZW50P3RoaXMuY29tcG9uZW50Lm91dGVyV2lkdGgoITApOnRoaXMuZWxlbWVudC5vdXRlcldpZHRoKCExKSxuPWsubGVmdC1oLmxlZnQsbz1rLnRvcC1oLnRvcDtcImJvZHlcIiE9PXRoaXMuby5jb250YWluZXImJihvKz1nKSx0aGlzLnBpY2tlci5yZW1vdmVDbGFzcyhcImRhdGVwaWNrZXItb3JpZW50LXRvcCBkYXRlcGlja2VyLW9yaWVudC1ib3R0b20gZGF0ZXBpY2tlci1vcmllbnQtcmlnaHQgZGF0ZXBpY2tlci1vcmllbnQtbGVmdFwiKSxcImF1dG9cIiE9PXRoaXMuby5vcmllbnRhdGlvbi54Pyh0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItb3JpZW50LVwiK3RoaXMuby5vcmllbnRhdGlvbi54KSxcInJpZ2h0XCI9PT10aGlzLm8ub3JpZW50YXRpb24ueCYmKG4tPWItbSkpOmsubGVmdDwwPyh0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItb3JpZW50LWxlZnRcIiksbi09ay5sZWZ0LWQpOm4rYj5mPyh0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItb3JpZW50LXJpZ2h0XCIpLG4rPW0tYik6dGhpcy5vLnJ0bD90aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItb3JpZW50LXJpZ2h0XCIpOnRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtbGVmdFwiKTt2YXIgcCxxPXRoaXMuby5vcmllbnRhdGlvbi55O2lmKFwiYXV0b1wiPT09cSYmKHA9LWcrby1jLHE9cDwwP1wiYm90dG9tXCI6XCJ0b3BcIiksdGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC1cIitxKSxcInRvcFwiPT09cT9vLT1jK3BhcnNlSW50KHRoaXMucGlja2VyLmNzcyhcInBhZGRpbmctdG9wXCIpKTpvKz1sLHRoaXMuby5ydGwpe3ZhciByPWYtKG4rbSk7dGhpcy5waWNrZXIuY3NzKHt0b3A6byxyaWdodDpyLHpJbmRleDpqfSl9ZWxzZSB0aGlzLnBpY2tlci5jc3Moe3RvcDpvLGxlZnQ6bix6SW5kZXg6an0pO3JldHVybiB0aGlzfSxfYWxsb3dfdXBkYXRlOiEwLHVwZGF0ZTpmdW5jdGlvbigpe2lmKCF0aGlzLl9hbGxvd191cGRhdGUpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5kYXRlcy5jb3B5KCksYz1bXSxkPSExO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhhLmVhY2goYXJndW1lbnRzLGEucHJveHkoZnVuY3Rpb24oYSxiKXtiIGluc3RhbmNlb2YgRGF0ZSYmKGI9dGhpcy5fbG9jYWxfdG9fdXRjKGIpKSxjLnB1c2goYil9LHRoaXMpKSxkPSEwKTooYz10aGlzLmlzSW5wdXQ/dGhpcy5lbGVtZW50LnZhbCgpOnRoaXMuZWxlbWVudC5kYXRhKFwiZGF0ZVwiKXx8dGhpcy5pbnB1dEZpZWxkLnZhbCgpLGM9YyYmdGhpcy5vLm11bHRpZGF0ZT9jLnNwbGl0KHRoaXMuby5tdWx0aWRhdGVTZXBhcmF0b3IpOltjXSxkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlKSxjPWEubWFwKGMsYS5wcm94eShmdW5jdGlvbihhKXtyZXR1cm4gci5wYXJzZURhdGUoYSx0aGlzLm8uZm9ybWF0LHRoaXMuby5sYW5ndWFnZSx0aGlzLm8uYXNzdW1lTmVhcmJ5WWVhcil9LHRoaXMpKSxjPWEuZ3JlcChjLGEucHJveHkoZnVuY3Rpb24oYSl7cmV0dXJuIXRoaXMuZGF0ZVdpdGhpblJhbmdlKGEpfHwhYX0sdGhpcyksITApLHRoaXMuZGF0ZXMucmVwbGFjZShjKSx0aGlzLm8udXBkYXRlVmlld0RhdGUmJih0aGlzLmRhdGVzLmxlbmd0aD90aGlzLnZpZXdEYXRlPW5ldyBEYXRlKHRoaXMuZGF0ZXMuZ2V0KC0xKSk6dGhpcy52aWV3RGF0ZTx0aGlzLm8uc3RhcnREYXRlP3RoaXMudmlld0RhdGU9bmV3IERhdGUodGhpcy5vLnN0YXJ0RGF0ZSk6dGhpcy52aWV3RGF0ZT50aGlzLm8uZW5kRGF0ZT90aGlzLnZpZXdEYXRlPW5ldyBEYXRlKHRoaXMuby5lbmREYXRlKTp0aGlzLnZpZXdEYXRlPXRoaXMuby5kZWZhdWx0Vmlld0RhdGUpLGQ/KHRoaXMuc2V0VmFsdWUoKSx0aGlzLmVsZW1lbnQuY2hhbmdlKCkpOnRoaXMuZGF0ZXMubGVuZ3RoJiZTdHJpbmcoYikhPT1TdHJpbmcodGhpcy5kYXRlcykmJmQmJih0aGlzLl90cmlnZ2VyKFwiY2hhbmdlRGF0ZVwiKSx0aGlzLmVsZW1lbnQuY2hhbmdlKCkpLCF0aGlzLmRhdGVzLmxlbmd0aCYmYi5sZW5ndGgmJih0aGlzLl90cmlnZ2VyKFwiY2xlYXJEYXRlXCIpLHRoaXMuZWxlbWVudC5jaGFuZ2UoKSksdGhpcy5maWxsKCksdGhpc30sZmlsbERvdzpmdW5jdGlvbigpe2lmKHRoaXMuby5zaG93V2Vla0RheXMpe3ZhciBiPXRoaXMuby53ZWVrU3RhcnQsYz1cIjx0cj5cIjtmb3IodGhpcy5vLmNhbGVuZGFyV2Vla3MmJihjKz0nPHRoIGNsYXNzPVwiY3dcIj4mIzE2MDs8L3RoPicpO2I8dGhpcy5vLndlZWtTdGFydCs3OyljKz0nPHRoIGNsYXNzPVwiZG93JyxhLmluQXJyYXkoYix0aGlzLm8uZGF5c09mV2Vla0Rpc2FibGVkKSE9PS0xJiYoYys9XCIgZGlzYWJsZWRcIiksYys9J1wiPicrcVt0aGlzLm8ubGFuZ3VhZ2VdLmRheXNNaW5bYisrJTddK1wiPC90aD5cIjtjKz1cIjwvdHI+XCIsdGhpcy5waWNrZXIuZmluZChcIi5kYXRlcGlja2VyLWRheXMgdGhlYWRcIikuYXBwZW5kKGMpfX0sZmlsbE1vbnRoczpmdW5jdGlvbigpe2Zvcih2YXIgYSxiPXRoaXMuX3V0Y190b19sb2NhbCh0aGlzLnZpZXdEYXRlKSxjPVwiXCIsZD0wO2Q8MTI7ZCsrKWE9YiYmYi5nZXRNb250aCgpPT09ZD9cIiBmb2N1c2VkXCI6XCJcIixjKz0nPHNwYW4gY2xhc3M9XCJtb250aCcrYSsnXCI+JytxW3RoaXMuby5sYW5ndWFnZV0ubW9udGhzU2hvcnRbZF0rXCI8L3NwYW4+XCI7dGhpcy5waWNrZXIuZmluZChcIi5kYXRlcGlja2VyLW1vbnRocyB0ZFwiKS5odG1sKGMpfSxzZXRSYW5nZTpmdW5jdGlvbihiKXtiJiZiLmxlbmd0aD90aGlzLnJhbmdlPWEubWFwKGIsZnVuY3Rpb24oYSl7cmV0dXJuIGEudmFsdWVPZigpfSk6ZGVsZXRlIHRoaXMucmFuZ2UsdGhpcy5maWxsKCl9LGdldENsYXNzTmFtZXM6ZnVuY3Rpb24oYil7dmFyIGM9W10sZj10aGlzLnZpZXdEYXRlLmdldFVUQ0Z1bGxZZWFyKCksZz10aGlzLnZpZXdEYXRlLmdldFVUQ01vbnRoKCksaD1kKCk7cmV0dXJuIGIuZ2V0VVRDRnVsbFllYXIoKTxmfHxiLmdldFVUQ0Z1bGxZZWFyKCk9PT1mJiZiLmdldFVUQ01vbnRoKCk8Zz9jLnB1c2goXCJvbGRcIik6KGIuZ2V0VVRDRnVsbFllYXIoKT5mfHxiLmdldFVUQ0Z1bGxZZWFyKCk9PT1mJiZiLmdldFVUQ01vbnRoKCk+ZykmJmMucHVzaChcIm5ld1wiKSx0aGlzLmZvY3VzRGF0ZSYmYi52YWx1ZU9mKCk9PT10aGlzLmZvY3VzRGF0ZS52YWx1ZU9mKCkmJmMucHVzaChcImZvY3VzZWRcIiksdGhpcy5vLnRvZGF5SGlnaGxpZ2h0JiZlKGIsaCkmJmMucHVzaChcInRvZGF5XCIpLHRoaXMuZGF0ZXMuY29udGFpbnMoYikhPT0tMSYmYy5wdXNoKFwiYWN0aXZlXCIpLHRoaXMuZGF0ZVdpdGhpblJhbmdlKGIpfHxjLnB1c2goXCJkaXNhYmxlZFwiKSx0aGlzLmRhdGVJc0Rpc2FibGVkKGIpJiZjLnB1c2goXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWQtZGF0ZVwiKSxhLmluQXJyYXkoYi5nZXRVVENEYXkoKSx0aGlzLm8uZGF5c09mV2Vla0hpZ2hsaWdodGVkKSE9PS0xJiZjLnB1c2goXCJoaWdobGlnaHRlZFwiKSx0aGlzLnJhbmdlJiYoYj50aGlzLnJhbmdlWzBdJiZiPHRoaXMucmFuZ2VbdGhpcy5yYW5nZS5sZW5ndGgtMV0mJmMucHVzaChcInJhbmdlXCIpLGEuaW5BcnJheShiLnZhbHVlT2YoKSx0aGlzLnJhbmdlKSE9PS0xJiZjLnB1c2goXCJzZWxlY3RlZFwiKSxiLnZhbHVlT2YoKT09PXRoaXMucmFuZ2VbMF0mJmMucHVzaChcInJhbmdlLXN0YXJ0XCIpLGIudmFsdWVPZigpPT09dGhpcy5yYW5nZVt0aGlzLnJhbmdlLmxlbmd0aC0xXSYmYy5wdXNoKFwicmFuZ2UtZW5kXCIpKSxjfSxfZmlsbF95ZWFyc1ZpZXc6ZnVuY3Rpb24oYyxkLGUsZixnLGgsaSl7Zm9yKHZhciBqLGssbCxtPVwiXCIsbj1lLzEwLG89dGhpcy5waWNrZXIuZmluZChjKSxwPU1hdGguZmxvb3IoZi9lKSplLHE9cCs5Km4scj1NYXRoLmZsb29yKHRoaXMudmlld0RhdGUuZ2V0RnVsbFllYXIoKS9uKSpuLHM9YS5tYXAodGhpcy5kYXRlcyxmdW5jdGlvbihhKXtyZXR1cm4gTWF0aC5mbG9vcihhLmdldFVUQ0Z1bGxZZWFyKCkvbikqbn0pLHQ9cC1uO3Q8PXErbjt0Kz1uKWo9W2RdLGs9bnVsbCx0PT09cC1uP2oucHVzaChcIm9sZFwiKTp0PT09cStuJiZqLnB1c2goXCJuZXdcIiksYS5pbkFycmF5KHQscykhPT0tMSYmai5wdXNoKFwiYWN0aXZlXCIpLCh0PGd8fHQ+aCkmJmoucHVzaChcImRpc2FibGVkXCIpLHQ9PT1yJiZqLnB1c2goXCJmb2N1c2VkXCIpLGkhPT1hLm5vb3AmJihsPWkobmV3IERhdGUodCwwLDEpKSxsPT09Yj9sPXt9OlwiYm9vbGVhblwiPT10eXBlb2YgbD9sPXtlbmFibGVkOmx9Olwic3RyaW5nXCI9PXR5cGVvZiBsJiYobD17Y2xhc3NlczpsfSksbC5lbmFibGVkPT09ITEmJmoucHVzaChcImRpc2FibGVkXCIpLGwuY2xhc3NlcyYmKGo9ai5jb25jYXQobC5jbGFzc2VzLnNwbGl0KC9cXHMrLykpKSxsLnRvb2x0aXAmJihrPWwudG9vbHRpcCkpLG0rPSc8c3BhbiBjbGFzcz1cIicrai5qb2luKFwiIFwiKSsnXCInKyhrPycgdGl0bGU9XCInK2srJ1wiJzpcIlwiKStcIj5cIit0K1wiPC9zcGFuPlwiO28uZmluZChcIi5kYXRlcGlja2VyLXN3aXRjaFwiKS50ZXh0KHArXCItXCIrcSksby5maW5kKFwidGRcIikuaHRtbChtKX0sZmlsbDpmdW5jdGlvbigpe3ZhciBkLGUsZj1uZXcgRGF0ZSh0aGlzLnZpZXdEYXRlKSxnPWYuZ2V0VVRDRnVsbFllYXIoKSxoPWYuZ2V0VVRDTW9udGgoKSxpPXRoaXMuby5zdGFydERhdGUhPT0tKDEvMCk/dGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENGdWxsWWVhcigpOi0oMS8wKSxqPXRoaXMuby5zdGFydERhdGUhPT0tKDEvMCk/dGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENNb250aCgpOi0oMS8wKSxrPXRoaXMuby5lbmREYXRlIT09MS8wP3RoaXMuby5lbmREYXRlLmdldFVUQ0Z1bGxZZWFyKCk6MS8wLGw9dGhpcy5vLmVuZERhdGUhPT0xLzA/dGhpcy5vLmVuZERhdGUuZ2V0VVRDTW9udGgoKToxLzAsbT1xW3RoaXMuby5sYW5ndWFnZV0udG9kYXl8fHEuZW4udG9kYXl8fFwiXCIsbj1xW3RoaXMuby5sYW5ndWFnZV0uY2xlYXJ8fHEuZW4uY2xlYXJ8fFwiXCIsbz1xW3RoaXMuby5sYW5ndWFnZV0udGl0bGVGb3JtYXR8fHEuZW4udGl0bGVGb3JtYXQ7aWYoIWlzTmFOKGcpJiYhaXNOYU4oaCkpe3RoaXMucGlja2VyLmZpbmQoXCIuZGF0ZXBpY2tlci1kYXlzIC5kYXRlcGlja2VyLXN3aXRjaFwiKS50ZXh0KHIuZm9ybWF0RGF0ZShmLG8sdGhpcy5vLmxhbmd1YWdlKSksdGhpcy5waWNrZXIuZmluZChcInRmb290IC50b2RheVwiKS50ZXh0KG0pLmNzcyhcImRpc3BsYXlcIix0aGlzLm8udG9kYXlCdG49PT0hMHx8XCJsaW5rZWRcIj09PXRoaXMuby50b2RheUJ0bj9cInRhYmxlLWNlbGxcIjpcIm5vbmVcIiksdGhpcy5waWNrZXIuZmluZChcInRmb290IC5jbGVhclwiKS50ZXh0KG4pLmNzcyhcImRpc3BsYXlcIix0aGlzLm8uY2xlYXJCdG49PT0hMD9cInRhYmxlLWNlbGxcIjpcIm5vbmVcIiksdGhpcy5waWNrZXIuZmluZChcInRoZWFkIC5kYXRlcGlja2VyLXRpdGxlXCIpLnRleHQodGhpcy5vLnRpdGxlKS5jc3MoXCJkaXNwbGF5XCIsXCJzdHJpbmdcIj09dHlwZW9mIHRoaXMuby50aXRsZSYmXCJcIiE9PXRoaXMuby50aXRsZT9cInRhYmxlLWNlbGxcIjpcIm5vbmVcIiksdGhpcy51cGRhdGVOYXZBcnJvd3MoKSx0aGlzLmZpbGxNb250aHMoKTt2YXIgcD1jKGcsaCwwKSxzPXAuZ2V0VVRDRGF0ZSgpO3Auc2V0VVRDRGF0ZShzLShwLmdldFVUQ0RheSgpLXRoaXMuby53ZWVrU3RhcnQrNyklNyk7dmFyIHQ9bmV3IERhdGUocCk7cC5nZXRVVENGdWxsWWVhcigpPDEwMCYmdC5zZXRVVENGdWxsWWVhcihwLmdldFVUQ0Z1bGxZZWFyKCkpLHQuc2V0VVRDRGF0ZSh0LmdldFVUQ0RhdGUoKSs0MiksdD10LnZhbHVlT2YoKTtmb3IodmFyIHUsdix3PVtdO3AudmFsdWVPZigpPHQ7KXtpZih1PXAuZ2V0VVRDRGF5KCksdT09PXRoaXMuby53ZWVrU3RhcnQmJih3LnB1c2goXCI8dHI+XCIpLHRoaXMuby5jYWxlbmRhcldlZWtzKSl7dmFyIHg9bmV3IERhdGUoK3ArKHRoaXMuby53ZWVrU3RhcnQtdS03KSU3Kjg2NGU1KSx5PW5ldyBEYXRlKE51bWJlcih4KSsoMTEteC5nZXRVVENEYXkoKSklNyo4NjRlNSksej1uZXcgRGF0ZShOdW1iZXIoej1jKHkuZ2V0VVRDRnVsbFllYXIoKSwwLDEpKSsoMTEtei5nZXRVVENEYXkoKSklNyo4NjRlNSksQT0oeS16KS84NjRlNS83KzE7dy5wdXNoKCc8dGQgY2xhc3M9XCJjd1wiPicrQStcIjwvdGQ+XCIpfXY9dGhpcy5nZXRDbGFzc05hbWVzKHApLHYucHVzaChcImRheVwiKTt2YXIgQj1wLmdldFVUQ0RhdGUoKTt0aGlzLm8uYmVmb3JlU2hvd0RheSE9PWEubm9vcCYmKGU9dGhpcy5vLmJlZm9yZVNob3dEYXkodGhpcy5fdXRjX3RvX2xvY2FsKHApKSxlPT09Yj9lPXt9OlwiYm9vbGVhblwiPT10eXBlb2YgZT9lPXtlbmFibGVkOmV9Olwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT17Y2xhc3NlczplfSksZS5lbmFibGVkPT09ITEmJnYucHVzaChcImRpc2FibGVkXCIpLGUuY2xhc3NlcyYmKHY9di5jb25jYXQoZS5jbGFzc2VzLnNwbGl0KC9cXHMrLykpKSxlLnRvb2x0aXAmJihkPWUudG9vbHRpcCksZS5jb250ZW50JiYoQj1lLmNvbnRlbnQpKSx2PWEuaXNGdW5jdGlvbihhLnVuaXF1ZVNvcnQpP2EudW5pcXVlU29ydCh2KTphLnVuaXF1ZSh2KSx3LnB1c2goJzx0ZCBjbGFzcz1cIicrdi5qb2luKFwiIFwiKSsnXCInKyhkPycgdGl0bGU9XCInK2QrJ1wiJzpcIlwiKSsnIGRhdGEtZGF0ZT1cIicrcC5nZXRUaW1lKCkudG9TdHJpbmcoKSsnXCI+JytCK1wiPC90ZD5cIiksZD1udWxsLHU9PT10aGlzLm8ud2Vla0VuZCYmdy5wdXNoKFwiPC90cj5cIikscC5zZXRVVENEYXRlKHAuZ2V0VVRDRGF0ZSgpKzEpfXRoaXMucGlja2VyLmZpbmQoXCIuZGF0ZXBpY2tlci1kYXlzIHRib2R5XCIpLmh0bWwody5qb2luKFwiXCIpKTt2YXIgQz1xW3RoaXMuby5sYW5ndWFnZV0ubW9udGhzVGl0bGV8fHEuZW4ubW9udGhzVGl0bGV8fFwiTW9udGhzXCIsRD10aGlzLnBpY2tlci5maW5kKFwiLmRhdGVwaWNrZXItbW9udGhzXCIpLmZpbmQoXCIuZGF0ZXBpY2tlci1zd2l0Y2hcIikudGV4dCh0aGlzLm8ubWF4Vmlld01vZGU8Mj9DOmcpLmVuZCgpLmZpbmQoXCJ0Ym9keSBzcGFuXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO2lmKGEuZWFjaCh0aGlzLmRhdGVzLGZ1bmN0aW9uKGEsYil7Yi5nZXRVVENGdWxsWWVhcigpPT09ZyYmRC5lcShiLmdldFVUQ01vbnRoKCkpLmFkZENsYXNzKFwiYWN0aXZlXCIpfSksKGc8aXx8Zz5rKSYmRC5hZGRDbGFzcyhcImRpc2FibGVkXCIpLGc9PT1pJiZELnNsaWNlKDAsaikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSxnPT09ayYmRC5zbGljZShsKzEpLmFkZENsYXNzKFwiZGlzYWJsZWRcIiksdGhpcy5vLmJlZm9yZVNob3dNb250aCE9PWEubm9vcCl7dmFyIEU9dGhpczthLmVhY2goRCxmdW5jdGlvbihjLGQpe3ZhciBlPW5ldyBEYXRlKGcsYywxKSxmPUUuby5iZWZvcmVTaG93TW9udGgoZSk7Zj09PWI/Zj17fTpcImJvb2xlYW5cIj09dHlwZW9mIGY/Zj17ZW5hYmxlZDpmfTpcInN0cmluZ1wiPT10eXBlb2YgZiYmKGY9e2NsYXNzZXM6Zn0pLGYuZW5hYmxlZCE9PSExfHxhKGQpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIil8fGEoZCkuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSxmLmNsYXNzZXMmJmEoZCkuYWRkQ2xhc3MoZi5jbGFzc2VzKSxmLnRvb2x0aXAmJmEoZCkucHJvcChcInRpdGxlXCIsZi50b29sdGlwKX0pfXRoaXMuX2ZpbGxfeWVhcnNWaWV3KFwiLmRhdGVwaWNrZXIteWVhcnNcIixcInllYXJcIiwxMCxnLGksayx0aGlzLm8uYmVmb3JlU2hvd1llYXIpLHRoaXMuX2ZpbGxfeWVhcnNWaWV3KFwiLmRhdGVwaWNrZXItZGVjYWRlc1wiLFwiZGVjYWRlXCIsMTAwLGcsaSxrLHRoaXMuby5iZWZvcmVTaG93RGVjYWRlKSx0aGlzLl9maWxsX3llYXJzVmlldyhcIi5kYXRlcGlja2VyLWNlbnR1cmllc1wiLFwiY2VudHVyeVwiLDFlMyxnLGksayx0aGlzLm8uYmVmb3JlU2hvd0NlbnR1cnkpfX0sdXBkYXRlTmF2QXJyb3dzOmZ1bmN0aW9uKCl7aWYodGhpcy5fYWxsb3dfdXBkYXRlKXt2YXIgYSxiLGM9bmV3IERhdGUodGhpcy52aWV3RGF0ZSksZD1jLmdldFVUQ0Z1bGxZZWFyKCksZT1jLmdldFVUQ01vbnRoKCksZj10aGlzLm8uc3RhcnREYXRlIT09LSgxLzApP3RoaXMuby5zdGFydERhdGUuZ2V0VVRDRnVsbFllYXIoKTotKDEvMCksZz10aGlzLm8uc3RhcnREYXRlIT09LSgxLzApP3RoaXMuby5zdGFydERhdGUuZ2V0VVRDTW9udGgoKTotKDEvMCksaD10aGlzLm8uZW5kRGF0ZSE9PTEvMD90aGlzLm8uZW5kRGF0ZS5nZXRVVENGdWxsWWVhcigpOjEvMCxpPXRoaXMuby5lbmREYXRlIT09MS8wP3RoaXMuby5lbmREYXRlLmdldFVUQ01vbnRoKCk6MS8wLGo9MTtzd2l0Y2godGhpcy52aWV3TW9kZSl7Y2FzZSA0OmoqPTEwO2Nhc2UgMzpqKj0xMDtjYXNlIDI6aio9MTA7Y2FzZSAxOmE9TWF0aC5mbG9vcihkL2opKmo8ZixiPU1hdGguZmxvb3IoZC9qKSpqK2o+aDticmVhaztjYXNlIDA6YT1kPD1mJiZlPGcsYj1kPj1oJiZlPml9dGhpcy5waWNrZXIuZmluZChcIi5wcmV2XCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIixhKSx0aGlzLnBpY2tlci5maW5kKFwiLm5leHRcIikudG9nZ2xlQ2xhc3MoXCJkaXNhYmxlZFwiLGIpfX0sY2xpY2s6ZnVuY3Rpb24oYil7Yi5wcmV2ZW50RGVmYXVsdCgpLGIuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGUsZixnLGg7ZT1hKGIudGFyZ2V0KSxlLmhhc0NsYXNzKFwiZGF0ZXBpY2tlci1zd2l0Y2hcIikmJnRoaXMudmlld01vZGUhPT10aGlzLm8ubWF4Vmlld01vZGUmJnRoaXMuc2V0Vmlld01vZGUodGhpcy52aWV3TW9kZSsxKSxlLmhhc0NsYXNzKFwidG9kYXlcIikmJiFlLmhhc0NsYXNzKFwiZGF5XCIpJiYodGhpcy5zZXRWaWV3TW9kZSgwKSx0aGlzLl9zZXREYXRlKGQoKSxcImxpbmtlZFwiPT09dGhpcy5vLnRvZGF5QnRuP251bGw6XCJ2aWV3XCIpKSxlLmhhc0NsYXNzKFwiY2xlYXJcIikmJnRoaXMuY2xlYXJEYXRlcygpLGUuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKXx8KGUuaGFzQ2xhc3MoXCJtb250aFwiKXx8ZS5oYXNDbGFzcyhcInllYXJcIil8fGUuaGFzQ2xhc3MoXCJkZWNhZGVcIil8fGUuaGFzQ2xhc3MoXCJjZW50dXJ5XCIpKSYmKHRoaXMudmlld0RhdGUuc2V0VVRDRGF0ZSgxKSxmPTEsMT09PXRoaXMudmlld01vZGU/KGg9ZS5wYXJlbnQoKS5maW5kKFwic3BhblwiKS5pbmRleChlKSxnPXRoaXMudmlld0RhdGUuZ2V0VVRDRnVsbFllYXIoKSx0aGlzLnZpZXdEYXRlLnNldFVUQ01vbnRoKGgpKTooaD0wLGc9TnVtYmVyKGUudGV4dCgpKSx0aGlzLnZpZXdEYXRlLnNldFVUQ0Z1bGxZZWFyKGcpKSx0aGlzLl90cmlnZ2VyKHIudmlld01vZGVzW3RoaXMudmlld01vZGUtMV0uZSx0aGlzLnZpZXdEYXRlKSx0aGlzLnZpZXdNb2RlPT09dGhpcy5vLm1pblZpZXdNb2RlP3RoaXMuX3NldERhdGUoYyhnLGgsZikpOih0aGlzLnNldFZpZXdNb2RlKHRoaXMudmlld01vZGUtMSksdGhpcy5maWxsKCkpKSx0aGlzLnBpY2tlci5pcyhcIjp2aXNpYmxlXCIpJiZ0aGlzLl9mb2N1c2VkX2Zyb20mJnRoaXMuX2ZvY3VzZWRfZnJvbS5mb2N1cygpLGRlbGV0ZSB0aGlzLl9mb2N1c2VkX2Zyb219LGRheUNlbGxDbGljazpmdW5jdGlvbihiKXt2YXIgYz1hKGIuY3VycmVudFRhcmdldCksZD1jLmRhdGEoXCJkYXRlXCIpLGU9bmV3IERhdGUoZCk7dGhpcy5vLnVwZGF0ZVZpZXdEYXRlJiYoZS5nZXRVVENGdWxsWWVhcigpIT09dGhpcy52aWV3RGF0ZS5nZXRVVENGdWxsWWVhcigpJiZ0aGlzLl90cmlnZ2VyKFwiY2hhbmdlWWVhclwiLHRoaXMudmlld0RhdGUpLGUuZ2V0VVRDTW9udGgoKSE9PXRoaXMudmlld0RhdGUuZ2V0VVRDTW9udGgoKSYmdGhpcy5fdHJpZ2dlcihcImNoYW5nZU1vbnRoXCIsdGhpcy52aWV3RGF0ZSkpLHRoaXMuX3NldERhdGUoZSl9LG5hdkFycm93c0NsaWNrOmZ1bmN0aW9uKGIpe3ZhciBjPWEoYi5jdXJyZW50VGFyZ2V0KSxkPWMuaGFzQ2xhc3MoXCJwcmV2XCIpPy0xOjE7MCE9PXRoaXMudmlld01vZGUmJihkKj0xMipyLnZpZXdNb2Rlc1t0aGlzLnZpZXdNb2RlXS5uYXZTdGVwKSx0aGlzLnZpZXdEYXRlPXRoaXMubW92ZU1vbnRoKHRoaXMudmlld0RhdGUsZCksdGhpcy5fdHJpZ2dlcihyLnZpZXdNb2Rlc1t0aGlzLnZpZXdNb2RlXS5lLHRoaXMudmlld0RhdGUpLHRoaXMuZmlsbCgpfSxfdG9nZ2xlX211bHRpZGF0ZTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmRhdGVzLmNvbnRhaW5zKGEpO2lmKGF8fHRoaXMuZGF0ZXMuY2xlYXIoKSxiIT09LTE/KHRoaXMuby5tdWx0aWRhdGU9PT0hMHx8dGhpcy5vLm11bHRpZGF0ZT4xfHx0aGlzLm8udG9nZ2xlQWN0aXZlKSYmdGhpcy5kYXRlcy5yZW1vdmUoYik6dGhpcy5vLm11bHRpZGF0ZT09PSExPyh0aGlzLmRhdGVzLmNsZWFyKCksdGhpcy5kYXRlcy5wdXNoKGEpKTp0aGlzLmRhdGVzLnB1c2goYSksXCJudW1iZXJcIj09dHlwZW9mIHRoaXMuby5tdWx0aWRhdGUpZm9yKDt0aGlzLmRhdGVzLmxlbmd0aD50aGlzLm8ubXVsdGlkYXRlOyl0aGlzLmRhdGVzLnJlbW92ZSgwKX0sX3NldERhdGU6ZnVuY3Rpb24oYSxiKXtiJiZcImRhdGVcIiE9PWJ8fHRoaXMuX3RvZ2dsZV9tdWx0aWRhdGUoYSYmbmV3IERhdGUoYSkpLCghYiYmdGhpcy5vLnVwZGF0ZVZpZXdEYXRlfHxcInZpZXdcIj09PWIpJiYodGhpcy52aWV3RGF0ZT1hJiZuZXcgRGF0ZShhKSksdGhpcy5maWxsKCksdGhpcy5zZXRWYWx1ZSgpLGImJlwidmlld1wiPT09Ynx8dGhpcy5fdHJpZ2dlcihcImNoYW5nZURhdGVcIiksdGhpcy5pbnB1dEZpZWxkLnRyaWdnZXIoXCJjaGFuZ2VcIiksIXRoaXMuby5hdXRvY2xvc2V8fGImJlwiZGF0ZVwiIT09Ynx8dGhpcy5oaWRlKCl9LG1vdmVEYXk6ZnVuY3Rpb24oYSxiKXt2YXIgYz1uZXcgRGF0ZShhKTtyZXR1cm4gYy5zZXRVVENEYXRlKGEuZ2V0VVRDRGF0ZSgpK2IpLGN9LG1vdmVXZWVrOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW92ZURheShhLDcqYil9LG1vdmVNb250aDpmdW5jdGlvbihhLGIpe2lmKCFnKGEpKXJldHVybiB0aGlzLm8uZGVmYXVsdFZpZXdEYXRlO2lmKCFiKXJldHVybiBhO3ZhciBjLGQsZT1uZXcgRGF0ZShhLnZhbHVlT2YoKSksZj1lLmdldFVUQ0RhdGUoKSxoPWUuZ2V0VVRDTW9udGgoKSxpPU1hdGguYWJzKGIpO2lmKGI9Yj4wPzE6LTEsMT09PWkpZD1iPT09LTE/ZnVuY3Rpb24oKXtyZXR1cm4gZS5nZXRVVENNb250aCgpPT09aH06ZnVuY3Rpb24oKXtyZXR1cm4gZS5nZXRVVENNb250aCgpIT09Y30sYz1oK2IsZS5zZXRVVENNb250aChjKSxjPShjKzEyKSUxMjtlbHNle2Zvcih2YXIgaj0wO2o8aTtqKyspZT10aGlzLm1vdmVNb250aChlLGIpO2M9ZS5nZXRVVENNb250aCgpLGUuc2V0VVRDRGF0ZShmKSxkPWZ1bmN0aW9uKCl7cmV0dXJuIGMhPT1lLmdldFVUQ01vbnRoKCl9fWZvcig7ZCgpOyllLnNldFVUQ0RhdGUoLS1mKSxlLnNldFVUQ01vbnRoKGMpO3JldHVybiBlfSxtb3ZlWWVhcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdmVNb250aChhLDEyKmIpfSxtb3ZlQXZhaWxhYmxlRGF0ZTpmdW5jdGlvbihhLGIsYyl7ZG97aWYoYT10aGlzW2NdKGEsYiksIXRoaXMuZGF0ZVdpdGhpblJhbmdlKGEpKXJldHVybiExO2M9XCJtb3ZlRGF5XCJ9d2hpbGUodGhpcy5kYXRlSXNEaXNhYmxlZChhKSk7cmV0dXJuIGF9LHdlZWtPZkRhdGVJc0Rpc2FibGVkOmZ1bmN0aW9uKGIpe3JldHVybiBhLmluQXJyYXkoYi5nZXRVVENEYXkoKSx0aGlzLm8uZGF5c09mV2Vla0Rpc2FibGVkKSE9PS0xfSxkYXRlSXNEaXNhYmxlZDpmdW5jdGlvbihiKXtyZXR1cm4gdGhpcy53ZWVrT2ZEYXRlSXNEaXNhYmxlZChiKXx8YS5ncmVwKHRoaXMuby5kYXRlc0Rpc2FibGVkLGZ1bmN0aW9uKGEpe3JldHVybiBlKGIsYSl9KS5sZW5ndGg+MH0sZGF0ZVdpdGhpblJhbmdlOmZ1bmN0aW9uKGEpe3JldHVybiBhPj10aGlzLm8uc3RhcnREYXRlJiZhPD10aGlzLm8uZW5kRGF0ZX0sa2V5ZG93bjpmdW5jdGlvbihhKXtpZighdGhpcy5waWNrZXIuaXMoXCI6dmlzaWJsZVwiKSlyZXR1cm4gdm9pZCg0MCE9PWEua2V5Q29kZSYmMjchPT1hLmtleUNvZGV8fCh0aGlzLnNob3coKSxhLnN0b3BQcm9wYWdhdGlvbigpKSk7dmFyIGIsYyxkPSExLGU9dGhpcy5mb2N1c0RhdGV8fHRoaXMudmlld0RhdGU7c3dpdGNoKGEua2V5Q29kZSl7Y2FzZSAyNzp0aGlzLmZvY3VzRGF0ZT8odGhpcy5mb2N1c0RhdGU9bnVsbCx0aGlzLnZpZXdEYXRlPXRoaXMuZGF0ZXMuZ2V0KC0xKXx8dGhpcy52aWV3RGF0ZSx0aGlzLmZpbGwoKSk6dGhpcy5oaWRlKCksYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCk7YnJlYWs7Y2FzZSAzNzpjYXNlIDM4OmNhc2UgMzk6Y2FzZSA0MDppZighdGhpcy5vLmtleWJvYXJkTmF2aWdhdGlvbnx8Nz09PXRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQubGVuZ3RoKWJyZWFrO2I9Mzc9PT1hLmtleUNvZGV8fDM4PT09YS5rZXlDb2RlPy0xOjEsMD09PXRoaXMudmlld01vZGU/YS5jdHJsS2V5PyhjPXRoaXMubW92ZUF2YWlsYWJsZURhdGUoZSxiLFwibW92ZVllYXJcIiksYyYmdGhpcy5fdHJpZ2dlcihcImNoYW5nZVllYXJcIix0aGlzLnZpZXdEYXRlKSk6YS5zaGlmdEtleT8oYz10aGlzLm1vdmVBdmFpbGFibGVEYXRlKGUsYixcIm1vdmVNb250aFwiKSxjJiZ0aGlzLl90cmlnZ2VyKFwiY2hhbmdlTW9udGhcIix0aGlzLnZpZXdEYXRlKSk6Mzc9PT1hLmtleUNvZGV8fDM5PT09YS5rZXlDb2RlP2M9dGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShlLGIsXCJtb3ZlRGF5XCIpOnRoaXMud2Vla09mRGF0ZUlzRGlzYWJsZWQoZSl8fChjPXRoaXMubW92ZUF2YWlsYWJsZURhdGUoZSxiLFwibW92ZVdlZWtcIikpOjE9PT10aGlzLnZpZXdNb2RlPygzOCE9PWEua2V5Q29kZSYmNDAhPT1hLmtleUNvZGV8fChiKj00KSxjPXRoaXMubW92ZUF2YWlsYWJsZURhdGUoZSxiLFwibW92ZU1vbnRoXCIpKToyPT09dGhpcy52aWV3TW9kZSYmKDM4IT09YS5rZXlDb2RlJiY0MCE9PWEua2V5Q29kZXx8KGIqPTQpLGM9dGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShlLGIsXCJtb3ZlWWVhclwiKSksYyYmKHRoaXMuZm9jdXNEYXRlPXRoaXMudmlld0RhdGU9Yyx0aGlzLnNldFZhbHVlKCksdGhpcy5maWxsKCksYS5wcmV2ZW50RGVmYXVsdCgpKTticmVhaztjYXNlIDEzOmlmKCF0aGlzLm8uZm9yY2VQYXJzZSlicmVhaztlPXRoaXMuZm9jdXNEYXRlfHx0aGlzLmRhdGVzLmdldCgtMSl8fHRoaXMudmlld0RhdGUsdGhpcy5vLmtleWJvYXJkTmF2aWdhdGlvbiYmKHRoaXMuX3RvZ2dsZV9tdWx0aWRhdGUoZSksZD0hMCksdGhpcy5mb2N1c0RhdGU9bnVsbCx0aGlzLnZpZXdEYXRlPXRoaXMuZGF0ZXMuZ2V0KC0xKXx8dGhpcy52aWV3RGF0ZSx0aGlzLnNldFZhbHVlKCksdGhpcy5maWxsKCksdGhpcy5waWNrZXIuaXMoXCI6dmlzaWJsZVwiKSYmKGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMuby5hdXRvY2xvc2UmJnRoaXMuaGlkZSgpKTticmVhaztjYXNlIDk6dGhpcy5mb2N1c0RhdGU9bnVsbCx0aGlzLnZpZXdEYXRlPXRoaXMuZGF0ZXMuZ2V0KC0xKXx8dGhpcy52aWV3RGF0ZSx0aGlzLmZpbGwoKSx0aGlzLmhpZGUoKX1kJiYodGhpcy5kYXRlcy5sZW5ndGg/dGhpcy5fdHJpZ2dlcihcImNoYW5nZURhdGVcIik6dGhpcy5fdHJpZ2dlcihcImNsZWFyRGF0ZVwiKSx0aGlzLmlucHV0RmllbGQudHJpZ2dlcihcImNoYW5nZVwiKSl9LHNldFZpZXdNb2RlOmZ1bmN0aW9uKGEpe3RoaXMudmlld01vZGU9YSx0aGlzLnBpY2tlci5jaGlsZHJlbihcImRpdlwiKS5oaWRlKCkuZmlsdGVyKFwiLmRhdGVwaWNrZXItXCIrci52aWV3TW9kZXNbdGhpcy52aWV3TW9kZV0uY2xzTmFtZSkuc2hvdygpLHRoaXMudXBkYXRlTmF2QXJyb3dzKCksdGhpcy5fdHJpZ2dlcihcImNoYW5nZVZpZXdNb2RlXCIsbmV3IERhdGUodGhpcy52aWV3RGF0ZSkpfX07dmFyIGw9ZnVuY3Rpb24oYixjKXthLmRhdGEoYixcImRhdGVwaWNrZXJcIix0aGlzKSx0aGlzLmVsZW1lbnQ9YShiKSx0aGlzLmlucHV0cz1hLm1hcChjLmlucHV0cyxmdW5jdGlvbihhKXtyZXR1cm4gYS5qcXVlcnk/YVswXTphfSksZGVsZXRlIGMuaW5wdXRzLHRoaXMua2VlcEVtcHR5VmFsdWVzPWMua2VlcEVtcHR5VmFsdWVzLGRlbGV0ZSBjLmtlZXBFbXB0eVZhbHVlcyxuLmNhbGwoYSh0aGlzLmlucHV0cyksYykub24oXCJjaGFuZ2VEYXRlXCIsYS5wcm94eSh0aGlzLmRhdGVVcGRhdGVkLHRoaXMpKSx0aGlzLnBpY2tlcnM9YS5tYXAodGhpcy5pbnB1dHMsZnVuY3Rpb24oYil7cmV0dXJuIGEuZGF0YShiLFwiZGF0ZXBpY2tlclwiKX0pLHRoaXMudXBkYXRlRGF0ZXMoKX07bC5wcm90b3R5cGU9e3VwZGF0ZURhdGVzOmZ1bmN0aW9uKCl7dGhpcy5kYXRlcz1hLm1hcCh0aGlzLnBpY2tlcnMsZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0VVRDRGF0ZSgpfSksdGhpcy51cGRhdGVSYW5nZXMoKX0sdXBkYXRlUmFuZ2VzOmZ1bmN0aW9uKCl7dmFyIGI9YS5tYXAodGhpcy5kYXRlcyxmdW5jdGlvbihhKXtyZXR1cm4gYS52YWx1ZU9mKCl9KTthLmVhY2godGhpcy5waWNrZXJzLGZ1bmN0aW9uKGEsYyl7Yy5zZXRSYW5nZShiKX0pfSxjbGVhckRhdGVzOmZ1bmN0aW9uKCl7YS5lYWNoKHRoaXMucGlja2VycyxmdW5jdGlvbihhLGIpe2IuY2xlYXJEYXRlcygpfSl9LGRhdGVVcGRhdGVkOmZ1bmN0aW9uKGMpe2lmKCF0aGlzLnVwZGF0aW5nKXt0aGlzLnVwZGF0aW5nPSEwO3ZhciBkPWEuZGF0YShjLnRhcmdldCxcImRhdGVwaWNrZXJcIik7aWYoZCE9PWIpe3ZhciBlPWQuZ2V0VVRDRGF0ZSgpLGY9dGhpcy5rZWVwRW1wdHlWYWx1ZXMsZz1hLmluQXJyYXkoYy50YXJnZXQsdGhpcy5pbnB1dHMpLGg9Zy0xLGk9ZysxLGo9dGhpcy5pbnB1dHMubGVuZ3RoO2lmKGchPT0tMSl7aWYoYS5lYWNoKHRoaXMucGlja2VycyxmdW5jdGlvbihhLGIpe2IuZ2V0VVRDRGF0ZSgpfHxiIT09ZCYmZnx8Yi5zZXRVVENEYXRlKGUpfSksZTx0aGlzLmRhdGVzW2hdKWZvcig7aD49MCYmZTx0aGlzLmRhdGVzW2hdOyl0aGlzLnBpY2tlcnNbaC0tXS5zZXRVVENEYXRlKGUpO2Vsc2UgaWYoZT50aGlzLmRhdGVzW2ldKWZvcig7aTxqJiZlPnRoaXMuZGF0ZXNbaV07KXRoaXMucGlja2Vyc1tpKytdLnNldFVUQ0RhdGUoZSk7dGhpcy51cGRhdGVEYXRlcygpLGRlbGV0ZSB0aGlzLnVwZGF0aW5nfX19fSxkZXN0cm95OmZ1bmN0aW9uKCl7YS5tYXAodGhpcy5waWNrZXJzLGZ1bmN0aW9uKGEpe2EuZGVzdHJveSgpfSksYSh0aGlzLmlucHV0cykub2ZmKFwiY2hhbmdlRGF0ZVwiLHRoaXMuZGF0ZVVwZGF0ZWQpLGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGVwaWNrZXJ9LHJlbW92ZTpmKFwiZGVzdHJveVwiLFwiTWV0aG9kIGByZW1vdmVgIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDIuMC4gVXNlIGBkZXN0cm95YCBpbnN0ZWFkXCIpfTt2YXIgbT1hLmZuLmRhdGVwaWNrZXIsbj1mdW5jdGlvbihjKXt2YXIgZD1BcnJheS5hcHBseShudWxsLGFyZ3VtZW50cyk7ZC5zaGlmdCgpO3ZhciBlO2lmKHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyksZj1iLmRhdGEoXCJkYXRlcGlja2VyXCIpLGc9XCJvYmplY3RcIj09dHlwZW9mIGMmJmM7aWYoIWYpe3ZhciBqPWgodGhpcyxcImRhdGVcIiksbT1hLmV4dGVuZCh7fSxvLGosZyksbj1pKG0ubGFuZ3VhZ2UpLHA9YS5leHRlbmQoe30sbyxuLGosZyk7Yi5oYXNDbGFzcyhcImlucHV0LWRhdGVyYW5nZVwiKXx8cC5pbnB1dHM/KGEuZXh0ZW5kKHAse2lucHV0czpwLmlucHV0c3x8Yi5maW5kKFwiaW5wdXRcIikudG9BcnJheSgpfSksZj1uZXcgbCh0aGlzLHApKTpmPW5ldyBrKHRoaXMscCksYi5kYXRhKFwiZGF0ZXBpY2tlclwiLGYpfVwic3RyaW5nXCI9PXR5cGVvZiBjJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBmW2NdJiYoZT1mW2NdLmFwcGx5KGYsZCkpfSksZT09PWJ8fGUgaW5zdGFuY2VvZiBrfHxlIGluc3RhbmNlb2YgbClyZXR1cm4gdGhpcztpZih0aGlzLmxlbmd0aD4xKXRocm93IG5ldyBFcnJvcihcIlVzaW5nIG9ubHkgYWxsb3dlZCBmb3IgdGhlIGNvbGxlY3Rpb24gb2YgYSBzaW5nbGUgZWxlbWVudCAoXCIrYytcIiBmdW5jdGlvbilcIik7cmV0dXJuIGV9O2EuZm4uZGF0ZXBpY2tlcj1uO3ZhciBvPWEuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cz17YXNzdW1lTmVhcmJ5WWVhcjohMSxhdXRvY2xvc2U6ITEsYmVmb3JlU2hvd0RheTphLm5vb3AsYmVmb3JlU2hvd01vbnRoOmEubm9vcCxiZWZvcmVTaG93WWVhcjphLm5vb3AsYmVmb3JlU2hvd0RlY2FkZTphLm5vb3AsYmVmb3JlU2hvd0NlbnR1cnk6YS5ub29wLGNhbGVuZGFyV2Vla3M6ITEsY2xlYXJCdG46ITEsdG9nZ2xlQWN0aXZlOiExLGRheXNPZldlZWtEaXNhYmxlZDpbXSxkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6W10sZGF0ZXNEaXNhYmxlZDpbXSxlbmREYXRlOjEvMCxmb3JjZVBhcnNlOiEwLGZvcm1hdDpcIm1tL2RkL3l5eXlcIixrZWVwRW1wdHlWYWx1ZXM6ITEsa2V5Ym9hcmROYXZpZ2F0aW9uOiEwLGxhbmd1YWdlOlwiZW5cIixtaW5WaWV3TW9kZTowLG1heFZpZXdNb2RlOjQsbXVsdGlkYXRlOiExLG11bHRpZGF0ZVNlcGFyYXRvcjpcIixcIixvcmllbnRhdGlvbjpcImF1dG9cIixydGw6ITEsc3RhcnREYXRlOi0oMS8wKSxzdGFydFZpZXc6MCx0b2RheUJ0bjohMSx0b2RheUhpZ2hsaWdodDohMSx1cGRhdGVWaWV3RGF0ZTohMCx3ZWVrU3RhcnQ6MCxkaXNhYmxlVG91Y2hLZXlib2FyZDohMSxlbmFibGVPblJlYWRvbmx5OiEwLHNob3dPbkZvY3VzOiEwLHpJbmRleE9mZnNldDoxMCxjb250YWluZXI6XCJib2R5XCIsaW1tZWRpYXRlVXBkYXRlczohMSx0aXRsZTpcIlwiLHRlbXBsYXRlczp7bGVmdEFycm93OlwiJiN4MDBBQjtcIixyaWdodEFycm93OlwiJiN4MDBCQjtcIn0sc2hvd1dlZWtEYXlzOiEwfSxwPWEuZm4uZGF0ZXBpY2tlci5sb2NhbGVfb3B0cz1bXCJmb3JtYXRcIixcInJ0bFwiLFwid2Vla1N0YXJ0XCJdO2EuZm4uZGF0ZXBpY2tlci5Db25zdHJ1Y3Rvcj1rO3ZhciBxPWEuZm4uZGF0ZXBpY2tlci5kYXRlcz17ZW46e2RheXM6W1wiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl0sZGF5c1Nob3J0OltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSxkYXlzTWluOltcIlN1XCIsXCJNb1wiLFwiVHVcIixcIldlXCIsXCJUaFwiLFwiRnJcIixcIlNhXCJdLG1vbnRoczpbXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl0sbW9udGhzU2hvcnQ6W1wiSmFuXCIsXCJGZWJcIixcIk1hclwiLFwiQXByXCIsXCJNYXlcIixcIkp1blwiLFwiSnVsXCIsXCJBdWdcIixcIlNlcFwiLFwiT2N0XCIsXCJOb3ZcIixcIkRlY1wiXSx0b2RheTpcIlRvZGF5XCIsY2xlYXI6XCJDbGVhclwiLHRpdGxlRm9ybWF0OlwiTU0geXl5eVwifX0scj17dmlld01vZGVzOlt7bmFtZXM6W1wiZGF5c1wiLFwibW9udGhcIl0sY2xzTmFtZTpcImRheXNcIixlOlwiY2hhbmdlTW9udGhcIn0se25hbWVzOltcIm1vbnRoc1wiLFwieWVhclwiXSxjbHNOYW1lOlwibW9udGhzXCIsZTpcImNoYW5nZVllYXJcIixuYXZTdGVwOjF9LHtuYW1lczpbXCJ5ZWFyc1wiLFwiZGVjYWRlXCJdLGNsc05hbWU6XCJ5ZWFyc1wiLGU6XCJjaGFuZ2VEZWNhZGVcIixuYXZTdGVwOjEwfSx7bmFtZXM6W1wiZGVjYWRlc1wiLFwiY2VudHVyeVwiXSxjbHNOYW1lOlwiZGVjYWRlc1wiLGU6XCJjaGFuZ2VDZW50dXJ5XCIsbmF2U3RlcDoxMDB9LHtuYW1lczpbXCJjZW50dXJpZXNcIixcIm1pbGxlbm5pdW1cIl0sY2xzTmFtZTpcImNlbnR1cmllc1wiLGU6XCJjaGFuZ2VNaWxsZW5uaXVtXCIsbmF2U3RlcDoxZTN9XSx2YWxpZFBhcnRzOi9kZD98REQ/fG1tP3xNTT98eXkoPzp5eSk/L2csbm9ucHVuY3R1YXRpb246L1teIC1cXC86LUBcXHU1ZTc0XFx1NjcwOFxcdTY1ZTVcXFstYHstflxcdFxcblxccl0rL2cscGFyc2VGb3JtYXQ6ZnVuY3Rpb24oYSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgYS50b1ZhbHVlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnRvRGlzcGxheSlyZXR1cm4gYTt2YXIgYj1hLnJlcGxhY2UodGhpcy52YWxpZFBhcnRzLFwiXFwwXCIpLnNwbGl0KFwiXFwwXCIpLGM9YS5tYXRjaCh0aGlzLnZhbGlkUGFydHMpO2lmKCFifHwhYi5sZW5ndGh8fCFjfHwwPT09Yy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkYXRlIGZvcm1hdC5cIik7cmV0dXJue3NlcGFyYXRvcnM6YixwYXJ0czpjfX0scGFyc2VEYXRlOmZ1bmN0aW9uKGMsZSxmLGcpe2Z1bmN0aW9uIGgoYSxiKXtyZXR1cm4gYj09PSEwJiYoYj0xMCksYTwxMDAmJihhKz0yZTMsYT4obmV3IERhdGUpLmdldEZ1bGxZZWFyKCkrYiYmKGEtPTEwMCkpLGF9ZnVuY3Rpb24gaSgpe3ZhciBhPXRoaXMuc2xpY2UoMCxqW25dLmxlbmd0aCksYj1qW25dLnNsaWNlKDAsYS5sZW5ndGgpO3JldHVybiBhLnRvTG93ZXJDYXNlKCk9PT1iLnRvTG93ZXJDYXNlKCl9aWYoIWMpcmV0dXJuIGI7aWYoYyBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIGM7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPXIucGFyc2VGb3JtYXQoZSkpLGUudG9WYWx1ZSlyZXR1cm4gZS50b1ZhbHVlKGMsZSxmKTt2YXIgaixsLG0sbixvLHA9e2Q6XCJtb3ZlRGF5XCIsbTpcIm1vdmVNb250aFwiLHc6XCJtb3ZlV2Vla1wiLHk6XCJtb3ZlWWVhclwifSxzPXt5ZXN0ZXJkYXk6XCItMWRcIix0b2RheTpcIiswZFwiLHRvbW9ycm93OlwiKzFkXCJ9O2lmKGMgaW4gcyYmKGM9c1tjXSksL15bXFwtK11cXGQrW2Rtd3ldKFtcXHMsXStbXFwtK11cXGQrW2Rtd3ldKSokL2kudGVzdChjKSl7Zm9yKGo9Yy5tYXRjaCgvKFtcXC0rXVxcZCspKFtkbXd5XSkvZ2kpLGM9bmV3IERhdGUsbj0wO248ai5sZW5ndGg7bisrKWw9altuXS5tYXRjaCgvKFtcXC0rXVxcZCspKFtkbXd5XSkvaSksbT1OdW1iZXIobFsxXSksbz1wW2xbMl0udG9Mb3dlckNhc2UoKV0sYz1rLnByb3RvdHlwZVtvXShjLG0pO3JldHVybiBrLnByb3RvdHlwZS5femVyb191dGNfdGltZShjKX1qPWMmJmMubWF0Y2godGhpcy5ub25wdW5jdHVhdGlvbil8fFtdO3ZhciB0LHUsdj17fSx3PVtcInl5eXlcIixcInl5XCIsXCJNXCIsXCJNTVwiLFwibVwiLFwibW1cIixcImRcIixcImRkXCJdLHg9e3l5eXk6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5zZXRVVENGdWxsWWVhcihnP2goYixnKTpiKX0sbTpmdW5jdGlvbihhLGIpe2lmKGlzTmFOKGEpKXJldHVybiBhO2ZvcihiLT0xO2I8MDspYis9MTI7Zm9yKGIlPTEyLGEuc2V0VVRDTW9udGgoYik7YS5nZXRVVENNb250aCgpIT09YjspYS5zZXRVVENEYXRlKGEuZ2V0VVRDRGF0ZSgpLTEpO3JldHVybiBhfSxkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuc2V0VVRDRGF0ZShiKX19O3gueXk9eC55eXl5LHguTT14Lk1NPXgubW09eC5tLHguZGQ9eC5kLGM9ZCgpO3ZhciB5PWUucGFydHMuc2xpY2UoKTtpZihqLmxlbmd0aCE9PXkubGVuZ3RoJiYoeT1hKHkpLmZpbHRlcihmdW5jdGlvbihiLGMpe3JldHVybiBhLmluQXJyYXkoYyx3KSE9PS0xfSkudG9BcnJheSgpKSxqLmxlbmd0aD09PXkubGVuZ3RoKXt2YXIgejtmb3Iobj0wLHo9eS5sZW5ndGg7bjx6O24rKyl7aWYodD1wYXJzZUludChqW25dLDEwKSxsPXlbbl0saXNOYU4odCkpc3dpdGNoKGwpe2Nhc2VcIk1NXCI6dT1hKHFbZl0ubW9udGhzKS5maWx0ZXIoaSksdD1hLmluQXJyYXkodVswXSxxW2ZdLm1vbnRocykrMTticmVhaztjYXNlXCJNXCI6dT1hKHFbZl0ubW9udGhzU2hvcnQpLmZpbHRlcihpKSx0PWEuaW5BcnJheSh1WzBdLHFbZl0ubW9udGhzU2hvcnQpKzF9dltsXT10fXZhciBBLEI7Zm9yKG49MDtuPHcubGVuZ3RoO24rKylCPXdbbl0sQiBpbiB2JiYhaXNOYU4odltCXSkmJihBPW5ldyBEYXRlKGMpLHhbQl0oQSx2W0JdKSxpc05hTihBKXx8KGM9QSkpfXJldHVybiBjfSxmb3JtYXREYXRlOmZ1bmN0aW9uKGIsYyxkKXtpZighYilyZXR1cm5cIlwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBjJiYoYz1yLnBhcnNlRm9ybWF0KGMpKSxjLnRvRGlzcGxheSlyZXR1cm4gYy50b0Rpc3BsYXkoYixjLGQpO3ZhciBlPXtkOmIuZ2V0VVRDRGF0ZSgpLEQ6cVtkXS5kYXlzU2hvcnRbYi5nZXRVVENEYXkoKV0sREQ6cVtkXS5kYXlzW2IuZ2V0VVRDRGF5KCldLG06Yi5nZXRVVENNb250aCgpKzEsTTpxW2RdLm1vbnRoc1Nob3J0W2IuZ2V0VVRDTW9udGgoKV0sTU06cVtkXS5tb250aHNbYi5nZXRVVENNb250aCgpXSx5eTpiLmdldFVUQ0Z1bGxZZWFyKCkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMikseXl5eTpiLmdldFVUQ0Z1bGxZZWFyKCl9O2UuZGQ9KGUuZDwxMD9cIjBcIjpcIlwiKStlLmQsZS5tbT0oZS5tPDEwP1wiMFwiOlwiXCIpK2UubSxiPVtdO2Zvcih2YXIgZj1hLmV4dGVuZChbXSxjLnNlcGFyYXRvcnMpLGc9MCxoPWMucGFydHMubGVuZ3RoO2c8PWg7ZysrKWYubGVuZ3RoJiZiLnB1c2goZi5zaGlmdCgpKSxiLnB1c2goZVtjLnBhcnRzW2ddXSk7cmV0dXJuIGIuam9pbihcIlwiKX0saGVhZFRlbXBsYXRlOic8dGhlYWQ+PHRyPjx0aCBjb2xzcGFuPVwiN1wiIGNsYXNzPVwiZGF0ZXBpY2tlci10aXRsZVwiPjwvdGg+PC90cj48dHI+PHRoIGNsYXNzPVwicHJldlwiPicrby50ZW1wbGF0ZXMubGVmdEFycm93Kyc8L3RoPjx0aCBjb2xzcGFuPVwiNVwiIGNsYXNzPVwiZGF0ZXBpY2tlci1zd2l0Y2hcIj48L3RoPjx0aCBjbGFzcz1cIm5leHRcIj4nK28udGVtcGxhdGVzLnJpZ2h0QXJyb3crXCI8L3RoPjwvdHI+PC90aGVhZD5cIixcbmNvbnRUZW1wbGF0ZTonPHRib2R5Pjx0cj48dGQgY29sc3Bhbj1cIjdcIj48L3RkPjwvdHI+PC90Ym9keT4nLGZvb3RUZW1wbGF0ZTonPHRmb290Pjx0cj48dGggY29sc3Bhbj1cIjdcIiBjbGFzcz1cInRvZGF5XCI+PC90aD48L3RyPjx0cj48dGggY29sc3Bhbj1cIjdcIiBjbGFzcz1cImNsZWFyXCI+PC90aD48L3RyPjwvdGZvb3Q+J307ci50ZW1wbGF0ZT0nPGRpdiBjbGFzcz1cImRhdGVwaWNrZXJcIj48ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1kYXlzXCI+PHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+JytyLmhlYWRUZW1wbGF0ZStcIjx0Ym9keT48L3Rib2R5PlwiK3IuZm9vdFRlbXBsYXRlKyc8L3RhYmxlPjwvZGl2PjxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLW1vbnRoc1wiPjx0YWJsZSBjbGFzcz1cInRhYmxlLWNvbmRlbnNlZFwiPicrci5oZWFkVGVtcGxhdGUrci5jb250VGVtcGxhdGUrci5mb290VGVtcGxhdGUrJzwvdGFibGU+PC9kaXY+PGRpdiBjbGFzcz1cImRhdGVwaWNrZXIteWVhcnNcIj48dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK3IuaGVhZFRlbXBsYXRlK3IuY29udFRlbXBsYXRlK3IuZm9vdFRlbXBsYXRlKyc8L3RhYmxlPjwvZGl2PjxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWRlY2FkZXNcIj48dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK3IuaGVhZFRlbXBsYXRlK3IuY29udFRlbXBsYXRlK3IuZm9vdFRlbXBsYXRlKyc8L3RhYmxlPjwvZGl2PjxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWNlbnR1cmllc1wiPjx0YWJsZSBjbGFzcz1cInRhYmxlLWNvbmRlbnNlZFwiPicrci5oZWFkVGVtcGxhdGUrci5jb250VGVtcGxhdGUrci5mb290VGVtcGxhdGUrXCI8L3RhYmxlPjwvZGl2PjwvZGl2PlwiLGEuZm4uZGF0ZXBpY2tlci5EUEdsb2JhbD1yLGEuZm4uZGF0ZXBpY2tlci5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uZGF0ZXBpY2tlcj1tLHRoaXN9LGEuZm4uZGF0ZXBpY2tlci52ZXJzaW9uPVwiMS44LjBcIixhLmZuLmRhdGVwaWNrZXIuZGVwcmVjYXRlZD1mdW5jdGlvbihhKXt2YXIgYj13aW5kb3cuY29uc29sZTtiJiZiLndhcm4mJmIud2FybihcIkRFUFJFQ0FURUQ6IFwiK2EpfSxhKGRvY3VtZW50KS5vbihcImZvY3VzLmRhdGVwaWNrZXIuZGF0YS1hcGkgY2xpY2suZGF0ZXBpY2tlci5kYXRhLWFwaVwiLCdbZGF0YS1wcm92aWRlPVwiZGF0ZXBpY2tlclwiXScsZnVuY3Rpb24oYil7dmFyIGM9YSh0aGlzKTtjLmRhdGEoXCJkYXRlcGlja2VyXCIpfHwoYi5wcmV2ZW50RGVmYXVsdCgpLG4uY2FsbChjLFwic2hvd1wiKSl9KSxhKGZ1bmN0aW9uKCl7bi5jYWxsKGEoJ1tkYXRhLXByb3ZpZGU9XCJkYXRlcGlja2VyLWlubGluZVwiXScpKX0pfSk7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2xvY2FsZXMvYm9vdHN0cmFwLWRhdGVwaWNrZXIuZnIubWluLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTcvMDgvMjAyMCAxNDoyMFxuXG4hZnVuY3Rpb24oYSl7YS5mbi5kYXRlcGlja2VyLmRhdGVzLmZyPXtkYXlzOltcImRpbWFuY2hlXCIsXCJsdW5kaVwiLFwibWFyZGlcIixcIm1lcmNyZWRpXCIsXCJqZXVkaVwiLFwidmVuZHJlZGlcIixcInNhbWVkaVwiXSxkYXlzU2hvcnQ6W1wiZGltLlwiLFwibHVuLlwiLFwibWFyLlwiLFwibWVyLlwiLFwiamV1LlwiLFwidmVuLlwiLFwic2FtLlwiXSxkYXlzTWluOltcImRcIixcImxcIixcIm1hXCIsXCJtZVwiLFwialwiLFwidlwiLFwic1wiXSxtb250aHM6W1wiamFudmllclwiLFwiZsOpdnJpZXJcIixcIm1hcnNcIixcImF2cmlsXCIsXCJtYWlcIixcImp1aW5cIixcImp1aWxsZXRcIixcImFvw7t0XCIsXCJzZXB0ZW1icmVcIixcIm9jdG9icmVcIixcIm5vdmVtYnJlXCIsXCJkw6ljZW1icmVcIl0sbW9udGhzU2hvcnQ6W1wiamFudi5cIixcImbDqXZyLlwiLFwibWFyc1wiLFwiYXZyaWxcIixcIm1haVwiLFwianVpblwiLFwianVpbC5cIixcImFvw7t0XCIsXCJzZXB0LlwiLFwib2N0LlwiLFwibm92LlwiLFwiZMOpYy5cIl0sdG9kYXk6XCJBdWpvdXJkJ2h1aVwiLG1vbnRoc1RpdGxlOlwiTW9pc1wiLGNsZWFyOlwiRWZmYWNlclwiLHdlZWtTdGFydDoxLGZvcm1hdDpcImRkL21tL3l5eXlcIn19KGpRdWVyeSk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4taW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tc2dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lbi1zZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZpbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1kZXZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWRldmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9vYy1sbmNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vb2MtbG5jLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtbW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC1tby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiXSwic291cmNlUm9vdCI6IiJ9
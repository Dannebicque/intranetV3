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
// @lastUpdate 12/10/2020 17:16
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
//

var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["default"]('.sidebar-navigation'); // Handle sidebar openner
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21hdGVyaWFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2RhbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3ZhbGlkYXRvci1iczQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9jc3MvYm9vdHN0cmFwLWRhdGVwaWNrZXIzLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9qcy9ib290c3RyYXAtZGF0ZXBpY2tlci5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9sb2NhbGVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmZyLm1pbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwibG9va3VwIiwiJCIsIm9uIiwiZSIsImZpbGVuYW1lIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwiaHRtbCIsImRvY3VtZW50IiwicmVhZHkiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImNoYW5nZSIsImkiLCJsZW5ndGgiLCJwdXNoIiwibmV4dCIsImpvaW4iLCJwcmVsb2FkZXIiLCJzcGVlZCIsImRhdGFBdHRyIiwiZmFkZU91dCIsImNsb3Nlc3QiLCJmaW5kIiwiY3NzIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGUiLCJ1cGRhdGVJbnRlcmZhY2UiLCJ2YWxpZGF0b3IiLCJhamF4Q29tcGxldGUiLCJ0b2dnbGVDbGFzcyIsInJlbW92ZUNsYXNzIiwic2xpZGVUb2dnbGUiLCJtb2RhbGVyIiwiZ2V0RGF0YU9wdGlvbnMiLCJzZWxlY3RwaWNrZXIiLCJpY29uQmFzZSIsInRpY2tJY29uIiwic3R5bGUiLCJzaXplIiwibGl2ZVNlYXJjaCIsImVhY2giLCJjb2xvciIsImhhc0RhdGFBdHRyIiwiZGF0YSIsInRvb2x0aXAiLCJjb250YWluZXIiLCJ0cmlnZ2VyIiwidGVtcGxhdGUiLCJvcHRpb25zIiwibXVsdGlkYXRlU2VwYXJhdG9yIiwibGFuZ3VhZ2UiLCJkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQiLCJwcm9wIiwiaW5wdXRzIiwiZGF0ZXBpY2tlciIsImhhc0NsYXNzIiwiY2xvc2UiLCJvcGVuIiwiYWRkQ2xhc3MiLCJmb2N1cyIsInNpZGViYXIiLCJwcyIsIlBlcmZlY3RTY3JvbGxiYXIiLCIkc3VibWVudSIsImlzIiwic2xpZGVVcCIsInRvZ2dsZUZvbGQiLCJhcHAiLCJ0b2dnbGVTdGF0ZSIsImZvbGQiLCJzdGF0ZSIsInVuZm9sZCIsInRvZ2dsZUhpZGUiLCJoaWRlIiwic2hvdyIsInByZXBlbmQiLCJyZW1vdmUiLCJxdWlja3ZpZXciLCJxcHMiLCJ1cGRhdGUiLCJyZWxvYWRRdiIsImRlc3Ryb3kiLCJnZXRUYXJnZXQiLCJ1cmwiLCJxdiIsImF0dHIiLCJsb2FkIiwiUm91dGluZyIsImdlbmVyYXRlIiwibm90IiwiYWZ0ZXIiLCJwcmV2IiwidW5kZWZpbmVkIiwibWF0ZXJpYWxEb0Zsb2F0IiwidmFsIiwibWF0ZXJpYWxOb0Zsb2F0IiwicGFyZW50IiwiY29uZmlnTW9kYWxlciIsImlzTW9kYWwiLCJ0eXBlIiwidGl0bGUiLCJiYWNrZHJvcCIsImhlYWRlclZpc2libGUiLCJmb290ZXJWaXNpYmxlIiwiY29uZmlybVZpc2libGUiLCJjb25maXJtVGV4dCIsImNvbmZpcm1DbGFzcyIsImNhbmNlbFZpc2libGUiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ2xhc3MiLCJib2R5RXh0cmFDbGFzcyIsInNwaW5uZXIiLCJhdXRvRGVzdHJveSIsIm9uU2hvdyIsIm9uU2hvd24iLCJvbkhpZGUiLCJvbkhpZGRlbiIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwibW9kYWxJZCIsImd1aWQiLCJsZW4iLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJyZXBsYWNlIiwic3Vic3RyIiwic2V0dGluZyIsImV4dGVuZCIsIm1vZGFsIiwiaWQiLCJoYW5kbGVDYWxsYmFjayIsImlzRnVuY3Rpb24iLCJzdWJzdHJpbmciLCJjYWxsIiwiYXBwZW5kIiwib3V0ZXJIVE1MIiwib25lIiwiaHRtbF9oZWFkZXIiLCJodG1sX2Zvb3RlciIsIm1vZGFsX2h0bWwiLCJqUXVlcnkiLCJrZXl3b3JkIiwic2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQiLCJzZWFyY2hfcmVwb25zZV9wZXJzb25uZWwiLCJzZWFyY2hfcmVwb25zZV9hdXRyZSIsImFqYXgiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJldHVkaWFudHMiLCJpbmRleCIsImV0dWRpYW50Iiwic2x1ZyIsInBob3RvIiwiYXZhdGFySW5pdGlhbGVzIiwiYmFzZXBhdGgiLCJkaXNwbGF5UHIiLCJzZW1lc3RyZSIsImdyb3VwZXMiLCJlbXB0eSIsInBlcnNvbm5lbHMiLCJwZXJzb25uZWwiLCJhdXRyZXMiLCJhdXRyZSIsInJlYWRVcmxNZW51IiwiJHVybCIsIiRlbHQiLCJzcGxpdCIsIiRmaXJzdEVsdCIsInBvcCIsImxvY2F0aW9uIiwiU3dhbCIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJjc3JmIiwiZmlyZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiX3Rva2VuIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiYWRkQ2FsbG91dCIsImVycm9yIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJzbGlkZURvd24iLCJkZWxheSIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZUlucHV0IiwicmVwbGFjZVdpdGgiLCJrZXlDb2RlIiwidXBkYXRlRGF0YSIsIndoaWNoIiwiZmllbGQiLCJtZXRob2QiLCIkb2JqIiwiJGh0bWwiLCJ0cmltIiwiZm4iLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiLCJkYXRhVG9PcHRpb24iLCJ4IiwidG9VcHBlckNhc2UiLCJlbCIsImNhc3RMaXN0Iiwia2V5IiwiQm9vbGVhbiIsIk51bWJlciIsImdldFZhbHVlIiwiJGVsIiwiVmFsaWRhdG9yIiwiZWxlbWVudCIsInZhbGlkYXRvcnMiLCJWQUxJREFUT1JTIiwiY3VzdG9tIiwiJGVsZW1lbnQiLCIkYnRuIiwiZmlsdGVyIiwiYWRkIiwicHJveHkiLCJvbklucHV0Iiwib25TdWJtaXQiLCJyZXNldCIsIiR0aGlzIiwiJGlucHV0cyIsIlZFUlNJT04iLCJJTlBVVF9TRUxFQ1RPUiIsIkZPQ1VTX09GRlNFVCIsIkRFRkFVTFRTIiwiZGlzYWJsZSIsImVycm9ycyIsIm1hdGNoIiwibWlubGVuZ3RoIiwiZmVlZGJhY2siLCJjaGVja1ZhbGlkaXR5IiwidmFsaWRpdHkiLCJ2YWxpZCIsInZhbGlkYXRpb25NZXNzYWdlIiwicHJvdG90eXBlIiwic2VsZiIsImNsZWFyRXJyb3JzIiwidG9nZ2xlU3VibWl0IiwiZGVmZXJFcnJvcnMiLCJ2YWxpZGF0ZUlucHV0IiwiZG9uZSIsInByZXZFcnJvcnMiLCJFdmVudCIsInJlbGF0ZWRUYXJnZXQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJydW5WYWxpZGF0b3JzIiwiZGVmZXIiLCJzaG93RXJyb3JzIiwiZGV0YWlsIiwiZGVmZXJyZWQiLCJEZWZlcnJlZCIsInJlamVjdCIsImdldFZhbGlkYXRvclNwZWNpZmljRXJyb3IiLCJnZXRWYWxpZGl0eVN0YXRlRXJyb3IiLCJ0eXBlTWlzbWF0Y2giLCJwYXR0ZXJuTWlzbWF0Y2giLCJzdGVwTWlzbWF0Y2giLCJyYW5nZU92ZXJmbG93IiwicmFuZ2VVbmRlcmZsb3ciLCJ2YWx1ZU1pc3NpbmciLCJnZXRHZW5lcmljRXJyb3IiLCJnZXRFcnJvck1lc3NhZ2UiLCJpbmRleE9mIiwiZ2V0IiwiZmFpbCIsImpxWEhSIiwidGV4dFN0YXR1cyIsImFsd2F5cyIsInJlc29sdmUiLCJwcm9taXNlIiwidmFsaWRhdGUiLCJ3aGVuIiwibWFwIiwiZm9jdXNFcnJvciIsIiRpbnB1dCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCIkZ3JvdXAiLCIkYmxvY2siLCIkZmVlZGJhY2siLCJoYXNFcnJvcnMiLCJmaWVsZEVycm9ycyIsImlzSW5jb21wbGV0ZSIsImZpZWxkSW5jb21wbGV0ZSIsImNhbGxiYWNrIiwid2luZG93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbW92ZURhdGEiLCJ0aW1lb3V0Iiwib3JpZ2luYWxDb250ZW50IiwicmVtb3ZlQXR0ciIsIm9mZiIsIlBsdWdpbiIsIm9wdGlvbiIsIm9sZCIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsIiRmb3JtIiwiYSIsImRlZmluZSIsImIiLCJjIiwiRGF0ZSIsIlVUQyIsImFwcGx5IiwiYXJndW1lbnRzIiwiZCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJmIiwiZGVwcmVjYXRlZCIsImciLCJpc05hTiIsImdldFRpbWUiLCJoIiwidG9Mb3dlckNhc2UiLCJSZWdFeHAiLCJ0ZXN0IiwicSIsInAiLCJqIiwic2xpY2UiLCJjb250YWlucyIsInZhbHVlT2YiLCJzcGxpY2UiLCJpc0FycmF5IiwiY2xlYXIiLCJjb3B5IiwiayIsIl9wcm9jZXNzX29wdGlvbnMiLCJkYXRlcyIsInZpZXdEYXRlIiwibyIsImRlZmF1bHRWaWV3RGF0ZSIsImZvY3VzRGF0ZSIsImlzSW5wdXQiLCJpbnB1dEZpZWxkIiwiY29tcG9uZW50IiwiaXNJbmxpbmUiLCJwaWNrZXIiLCJyIiwiX2NoZWNrX3RlbXBsYXRlIiwidGVtcGxhdGVzIiwibGVmdEFycm93IiwicmlnaHRBcnJvdyIsIl9idWlsZEV2ZW50cyIsIl9hdHRhY2hFdmVudHMiLCJhcHBlbmRUbyIsInJ0bCIsImNhbGVuZGFyV2Vla3MiLCJzdGFydERhdGUiLCJfbyIsImVuZERhdGUiLCJkYXlzT2ZXZWVrRGlzYWJsZWQiLCJkYXRlc0Rpc2FibGVkIiwiX2FsbG93X3VwZGF0ZSIsInNldFZpZXdNb2RlIiwic3RhcnRWaWV3IiwiZmlsbERvdyIsImZpbGxNb250aHMiLCJjb25zdHJ1Y3RvciIsIl9yZXNvbHZlVmlld05hbWUiLCJ2aWV3TW9kZXMiLCJpbkFycmF5IiwibmFtZXMiLCJfcmVzb2x2ZURheXNPZldlZWsiLCJtaW5WaWV3TW9kZSIsIm1heFZpZXdNb2RlIiwibWF4IiwibWluIiwibXVsdGlkYXRlIiwiU3RyaW5nIiwid2Vla1N0YXJ0Iiwid2Vla0VuZCIsInBhcnNlRm9ybWF0IiwiZm9ybWF0IiwiX2xvY2FsX3RvX3V0YyIsIl96ZXJvX3RpbWUiLCJwYXJzZURhdGUiLCJhc3N1bWVOZWFyYnlZZWFyIiwib3JpZW50YXRpb24iLCJncmVwIiwieSIsInllYXIiLCJtb250aCIsImwiLCJkYXkiLCJfZXZlbnRzIiwiX3NlY29uZGFyeUV2ZW50cyIsIl9hcHBseUV2ZW50cyIsIl91bmFwcGx5RXZlbnRzIiwia2V5dXAiLCJrZXlkb3duIiwicGFzdGUiLCJzaG93T25Gb2N1cyIsImNsaWNrIiwiYmx1ciIsIl9mb2N1c2VkX2Zyb20iLCJpbW1lZGlhdGVVcGRhdGVzIiwiZGF0ZSIsIm5hdkFycm93c0NsaWNrIiwiZGF5Q2VsbENsaWNrIiwicmVzaXplIiwicGxhY2UiLCJfZGV0YWNoRXZlbnRzIiwiX2F0dGFjaFNlY29uZGFyeUV2ZW50cyIsIl9kZXRhY2hTZWNvbmRhcnlFdmVudHMiLCJfdHJpZ2dlciIsIl91dGNfdG9fbG9jYWwiLCJ2aWV3TW9kZSIsImZvcm1hdERhdGUiLCJlbmFibGVPblJlYWRvbmx5IiwibmF2aWdhdG9yIiwibXNNYXhUb3VjaFBvaW50cyIsImRpc2FibGVUb3VjaEtleWJvYXJkIiwiZGV0YWNoIiwiZm9yY2VQYXJzZSIsInNldFZhbHVlIiwib3JpZ2luYWxFdmVudCIsImNsaXBib2FyZERhdGEiLCJ0eXBlcyIsImdldERhdGEiLCJzZXREYXRlIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJfemVyb191dGNfdGltZSIsImdldERhdGVzIiwiZ2V0VVRDRGF0ZXMiLCJjbGVhckRhdGVzIiwiYXV0b2Nsb3NlIiwic2V0RGF0ZXMiLCJzZXRVVENEYXRlcyIsInNldFVUQ0RhdGUiLCJnZXRGb3JtYXR0ZWREYXRlIiwiZ2V0U3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwidXBkYXRlTmF2QXJyb3dzIiwiZ2V0RW5kRGF0ZSIsInNldEVuZERhdGUiLCJzZXREYXlzT2ZXZWVrRGlzYWJsZWQiLCJzZXREYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQiLCJzZXREYXRlc0Rpc2FibGVkIiwib3V0ZXJXaWR0aCIsIm91dGVySGVpZ2h0Iiwid2lkdGgiLCJwYXJlbnRzIiwiekluZGV4T2Zmc2V0IiwibSIsIm4iLCJsZWZ0IiwicGFyc2VJbnQiLCJyaWdodCIsInpJbmRleCIsImRhdGVXaXRoaW5SYW5nZSIsInVwZGF0ZVZpZXdEYXRlIiwiZmlsbCIsInNob3dXZWVrRGF5cyIsImRheXNNaW4iLCJtb250aHNTaG9ydCIsInNldFJhbmdlIiwicmFuZ2UiLCJnZXRDbGFzc05hbWVzIiwidG9kYXlIaWdobGlnaHQiLCJkYXRlSXNEaXNhYmxlZCIsImdldFVUQ0RheSIsIl9maWxsX3llYXJzVmlldyIsImZsb29yIiwicyIsInQiLCJub29wIiwiZW5hYmxlZCIsImNsYXNzZXMiLCJjb25jYXQiLCJ0b2RheSIsImVuIiwidGl0bGVGb3JtYXQiLCJ0b2RheUJ0biIsImNsZWFyQnRuIiwic2V0VVRDRnVsbFllYXIiLCJ1IiwidiIsInciLCJ6IiwiQSIsIkIiLCJiZWZvcmVTaG93RGF5IiwiY29udGVudCIsInVuaXF1ZVNvcnQiLCJ1bmlxdWUiLCJDIiwibW9udGhzVGl0bGUiLCJEIiwiZW5kIiwiZXEiLCJiZWZvcmVTaG93TW9udGgiLCJFIiwiYmVmb3JlU2hvd1llYXIiLCJiZWZvcmVTaG93RGVjYWRlIiwiYmVmb3JlU2hvd0NlbnR1cnkiLCJzdG9wUHJvcGFnYXRpb24iLCJfc2V0RGF0ZSIsInNldFVUQ01vbnRoIiwiY3VycmVudFRhcmdldCIsIm5hdlN0ZXAiLCJtb3ZlTW9udGgiLCJfdG9nZ2xlX211bHRpZGF0ZSIsInRvZ2dsZUFjdGl2ZSIsIm1vdmVEYXkiLCJtb3ZlV2VlayIsImFicyIsIm1vdmVZZWFyIiwibW92ZUF2YWlsYWJsZURhdGUiLCJ3ZWVrT2ZEYXRlSXNEaXNhYmxlZCIsImtleWJvYXJkTmF2aWdhdGlvbiIsImN0cmxLZXkiLCJzaGlmdEtleSIsImNoaWxkcmVuIiwiY2xzTmFtZSIsImpxdWVyeSIsImtlZXBFbXB0eVZhbHVlcyIsImRhdGVVcGRhdGVkIiwicGlja2VycyIsInVwZGF0ZURhdGVzIiwidXBkYXRlUmFuZ2VzIiwidXBkYXRpbmciLCJzaGlmdCIsInRvQXJyYXkiLCJFcnJvciIsImRlZmF1bHRzIiwibG9jYWxlX29wdHMiLCJkYXlzIiwiZGF5c1Nob3J0IiwibW9udGhzIiwidmFsaWRQYXJ0cyIsIm5vbnB1bmN0dWF0aW9uIiwidG9WYWx1ZSIsInRvRGlzcGxheSIsInNlcGFyYXRvcnMiLCJwYXJ0cyIsInllc3RlcmRheSIsInRvbW9ycm93IiwieXl5eSIsInl5IiwiTSIsIk1NIiwibW0iLCJkZCIsIkREIiwiaGVhZFRlbXBsYXRlIiwiY29udFRlbXBsYXRlIiwiZm9vdFRlbXBsYXRlIiwiRFBHbG9iYWwiLCJ2ZXJzaW9uIiwid2FybiIsImZyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLG1CQUFPLENBQUMsZ0VBQUQsQ0FBUDs7QUFFQSxJQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFFQUQsbUJBQU8sQ0FBQyxxRkFBRCxDQUFQOztBQUVBRSw4Q0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JDLEVBQXhCLENBQTJCLFFBQTNCLEVBQXFDLFVBQVVDLENBQVYsRUFBYTtBQUNoRCxNQUFJQyxRQUFRLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixFQUFrQkMsSUFBakM7QUFDQU4sZ0RBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCTyxJQUF4QixDQUE2QkosUUFBN0I7QUFDRCxDQUhEO0FBS0FILDhDQUFDLENBQUNRLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDNUI7QUFDQVQsZ0RBQUMsQ0FBQ1EsUUFBRCxDQUFELENBQVlQLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFdBQXhCLEVBQXFDLFlBQVk7QUFDL0NELGtEQUFDLENBQUMsV0FBRCxDQUFELENBQWVVLE1BQWY7QUFDQUYsWUFBUSxDQUFDRyxXQUFULENBQXFCLE1BQXJCO0FBQ0QsR0FIRCxFQUY0QixDQU81Qjs7QUFDQVgsZ0RBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCWSxNQUF4QixDQUErQixVQUFVVixDQUFWLEVBQWE7QUFDMUMsUUFBTUcsS0FBSyxHQUFHLEVBQWQ7O0FBQ0EsU0FBSyxJQUFJUSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYiw4Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLENBQVIsRUFBV0ssS0FBWCxDQUFpQlMsTUFBckMsRUFBNkNELENBQUMsRUFBOUMsRUFBa0Q7QUFDaERSLFdBQUssQ0FBQ1UsSUFBTixDQUFXZiw4Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLENBQVIsRUFBV0ssS0FBWCxDQUFpQlEsQ0FBakIsRUFBb0JQLElBQS9CO0FBQ0Q7O0FBQ0ROLGtEQUFDLENBQUMsSUFBRCxDQUFELENBQVFnQixJQUFSLENBQWEsb0JBQWIsRUFBbUNULElBQW5DLENBQXdDRixLQUFLLENBQUNZLElBQU4sQ0FBVyxJQUFYLENBQXhDO0FBQ0QsR0FORDtBQVFBLE1BQUlDLFNBQVMsR0FBR2xCLDhDQUFDLENBQUMsWUFBRCxDQUFqQjs7QUFDQSxNQUFJa0IsU0FBUyxDQUFDSixNQUFkLEVBQXNCO0FBQ3BCLFFBQUlLLEtBQUssR0FBR0QsU0FBUyxDQUFDRSxRQUFWLENBQW1CLFlBQW5CLEVBQWlDLEdBQWpDLENBQVo7QUFDQUYsYUFBUyxDQUFDRyxPQUFWLENBQWtCRixLQUFsQjtBQUNEOztBQUVEbkIsZ0RBQUMsQ0FBQ1EsUUFBRCxDQUFELENBQVlQLEVBQVosQ0FBZSxPQUFmLEVBQXdCLHNCQUF4QixFQUFnRCxZQUFZO0FBQzFERCxrREFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0IsT0FBUixDQUFnQixnQkFBaEIsRUFBa0NDLElBQWxDLENBQXVDLDBCQUF2QyxFQUFtRUMsR0FBbkUsQ0FBdUUsU0FBdkUsRUFBa0YsR0FBbEY7QUFDRCxHQUZEO0FBSUF4QixnREFBQyxDQUFDUSxRQUFELENBQUQsQ0FBWVAsRUFBWixDQUFlLE1BQWYsRUFBdUIsc0JBQXZCLEVBQStDLFlBQVk7QUFDekRELGtEQUFDLENBQUMsSUFBRCxDQUFELENBQVFzQixPQUFSLENBQWdCLGdCQUFoQixFQUFrQ0MsSUFBbEMsQ0FBdUMsMEJBQXZDLEVBQW1FQyxHQUFuRSxDQUF1RSxTQUF2RSxFQUFrRixHQUFsRjtBQUNELEdBRkQ7QUFJQXhCLGdEQUFDLENBQUNRLFFBQUQsQ0FBRCxDQUFZUCxFQUFaLENBQWUsT0FBZixFQUF3QixTQUF4QixFQUFtQyxVQUFVQyxDQUFWLEVBQWE7QUFDOUNBLEtBQUMsQ0FBQ3VCLGNBQUY7QUFDQSxRQUFJckIsTUFBTSxHQUFHSiw4Q0FBQyxDQUFDLGNBQUQsQ0FBZDs7QUFFQSxRQUFJSSxNQUFNLEtBQUssS0FBZixFQUFzQjtBQUNwQkwsWUFBTSxDQUFDMkIsTUFBUCxDQUFjdEIsTUFBZDtBQUNEO0FBQ0YsR0FQRDtBQVNBSixnREFBQyxDQUFDUSxRQUFELENBQUQsQ0FBWVAsRUFBWixDQUFlLE9BQWYsRUFBd0IsZUFBeEIsRUFBeUMsWUFBWTtBQUNuREYsVUFBTSxDQUFDMkIsTUFBUCxDQUFjMUIsOENBQUMsQ0FBQyxjQUFELENBQWY7QUFDRCxHQUZELEVBdkM0QixDQTJDNUI7O0FBQ0EyQixpQkFBZTtBQUVmM0IsZ0RBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDNEIsU0FBakM7QUFDRCxDQS9DRDtBQWlEQTVCLDhDQUFDLENBQUNRLFFBQUQsQ0FBRCxDQUFZcUIsWUFBWixDQUF5QixZQUFZO0FBQ25DRixpQkFBZTtBQUNoQixDQUZELEUsQ0FJQTtBQUNBOztBQUNBM0IsOENBQUMsQ0FBQ1EsUUFBRCxDQUFELENBQVlQLEVBQVosQ0FBZSxPQUFmLEVBQXdCLHNCQUF4QixFQUFnRCxZQUFZO0FBQzFERCxnREFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0IsT0FBUixDQUFnQixPQUFoQixFQUF5QlEsV0FBekIsQ0FBcUMsaUJBQXJDLEVBQXdEQyxXQUF4RCxDQUFvRSxlQUFwRTtBQUNELENBRkQsRSxDQUlBOztBQUNBL0IsOENBQUMsQ0FBQ1EsUUFBRCxDQUFELENBQVlQLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGlCQUF4QixFQUEyQyxZQUFZO0FBQ3JERCxnREFBQyxDQUFDLElBQUQsQ0FBRCxDQUFROEIsV0FBUixDQUFvQixZQUFwQixFQUFrQ1IsT0FBbEMsQ0FBMEMsT0FBMUMsRUFBbURDLElBQW5ELENBQXdELGVBQXhELEVBQXlFUyxXQUF6RTtBQUNELENBRkQsRSxDQUlBOztBQUNBaEMsOENBQUMsQ0FBQ1EsUUFBRCxDQUFELENBQVlQLEVBQVosQ0FBZSxPQUFmLEVBQXdCLDJCQUF4QixFQUFxRCxZQUFZO0FBQy9EZ0MsU0FBTyxDQUFDQyw2REFBYyxDQUFDbEMsOENBQUMsQ0FBQyxJQUFELENBQUYsQ0FBZixDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTMkIsZUFBVCxHQUE0QjtBQUMxQjtBQUNBM0IsZ0RBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJtQyxZQUFuQixDQUFnQztBQUM5QkMsWUFBUSxFQUFFLEVBRG9CO0FBRTlCQyxZQUFRLEVBQUUsY0FGb0I7QUFHOUJDLFNBQUssRUFBRSxXQUh1QjtBQUk5QkMsUUFBSSxFQUFFLEVBSndCO0FBSzlCQyxjQUFVLEVBQUU7QUFMa0IsR0FBaEMsRUFGMEIsQ0FVMUI7O0FBQ0F4QyxnREFBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0J5QyxJQUEvQixDQUFvQyxZQUFZO0FBQzlDLFFBQUlDLEtBQUssR0FBRyxFQUFaOztBQUVBLFFBQUkxQyw4Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMkMsV0FBUixDQUFvQixlQUFwQixDQUFKLEVBQTBDO0FBQ3hDRCxXQUFLLEdBQUcsY0FBYzFDLDhDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxJQUFSLENBQWEsZUFBYixDQUF0QjtBQUNEOztBQUVENUMsa0RBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTZDLE9BQVIsQ0FBZ0I7QUFDZEMsZUFBUyxFQUFFLE1BREc7QUFFZEMsYUFBTyxFQUFFLE9BRks7QUFHZEMsY0FBUSxFQUFFLHdCQUF3Qk4sS0FBeEIsR0FBZ0M7QUFINUIsS0FBaEI7QUFLRCxHQVpEO0FBY0ExQyxnREFBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0N5QyxJQUFsQyxDQUF1QyxZQUFZO0FBQ2pELFFBQUlRLE9BQU8sR0FBRztBQUNaQyx3QkFBa0IsRUFBRSxJQURSO0FBRVpDLGNBQVEsRUFBRSxJQUZFO0FBR1pDLDJCQUFxQixFQUFFO0FBSFgsS0FBZDs7QUFNQSxRQUFJcEQsOENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFELElBQVIsQ0FBYSxTQUFiLEtBQTJCLE9BQS9CLEVBQXdDO0FBQ3RDO0FBQ0FKLGFBQU8sQ0FBQ0ssTUFBUixHQUFpQixDQUFDdEQsOENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVCLElBQVIsQ0FBYSxhQUFiLENBQUQsRUFBOEJ2Qiw4Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUIsSUFBUixDQUFhLFlBQWIsQ0FBOUIsQ0FBakI7QUFDRDs7QUFDRHZCLGtEQUFDLENBQUMsSUFBRCxDQUFELENBQVF1RCxVQUFSLENBQW1CTixPQUFuQjtBQUNELEdBWkQ7QUFjRCxDLENBRUQ7QUFDQTs7O0FBQ0FsRCxNQUFNLENBQUMyQixNQUFQLEdBQWdCLFVBQVV4QixDQUFWLEVBQWE7QUFDM0IsTUFBSUYsOENBQUMsQ0FBQ0UsQ0FBRCxDQUFELENBQUtzRCxRQUFMLENBQWMsUUFBZCxDQUFKLEVBQTZCO0FBQzNCekQsVUFBTSxDQUFDMEQsS0FBUCxDQUFhdkQsQ0FBYjtBQUNELEdBRkQsTUFFTztBQUNMSCxVQUFNLENBQUMyRCxJQUFQLENBQVl4RCxDQUFaO0FBQ0Q7QUFDRixDQU5ELEMsQ0FRQTtBQUNBOzs7QUFDQUgsTUFBTSxDQUFDMEQsS0FBUCxHQUFlLFVBQVV2RCxDQUFWLEVBQWE7QUFDMUJGLGdEQUFDLENBQUNFLENBQUQsQ0FBRCxDQUFLNkIsV0FBTCxDQUFpQixRQUFqQjtBQUNBL0IsZ0RBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVStCLFdBQVYsQ0FBc0IsV0FBdEI7QUFDRCxDQUhELEMsQ0FNQTtBQUNBOzs7QUFDQWhDLE1BQU0sQ0FBQzJELElBQVAsR0FBYyxVQUFVeEQsQ0FBVixFQUFhO0FBQ3pCRixnREFBQyxDQUFDRSxDQUFELENBQUQsQ0FBS3lELFFBQUwsQ0FBYyxRQUFkO0FBQ0EzRCxnREFBQyxDQUFDRSxDQUFELENBQUQsQ0FBS3FCLElBQUwsQ0FBVSxvQkFBVixFQUFnQ3FDLEtBQWhDO0FBQ0E1RCxnREFBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMkQsUUFBVixDQUFtQixXQUFuQjtBQUNELENBSkQsQyxDQU1BO0FBQ0E7QUFDQTs7O0FBRUEsSUFBSUUsT0FBTyxHQUFHLEVBQWQsQyxDQUVBO0FBQ0E7O0FBQ0EsSUFBTUMsRUFBRSxHQUFHLElBQUlDLDBEQUFKLENBQXFCLHFCQUFyQixDQUFYLEMsQ0FFQTtBQUNBOztBQUNBL0QsOENBQUMsQ0FBQ1EsUUFBRCxDQUFELENBQVlQLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGtCQUF4QixFQUE0QyxZQUFZO0FBQ3RENEQsU0FBTyxDQUFDSCxJQUFSO0FBQ0QsQ0FGRCxFLENBS0E7QUFDQTs7QUFDQTFELDhDQUFDLENBQUNRLFFBQUQsQ0FBRCxDQUFZUCxFQUFaLENBQWUsT0FBZixFQUF3QixtQkFBeEIsRUFBNkMsWUFBWTtBQUN2RDRELFNBQU8sQ0FBQ0osS0FBUjtBQUNELENBRkQsRSxDQUtBO0FBQ0E7O0FBQ0F6RCw4Q0FBQyxDQUFDUSxRQUFELENBQUQsQ0FBWVAsRUFBWixDQUFlLE9BQWYsRUFBd0IscUJBQXhCLEVBQStDLFlBQVk7QUFDekQsTUFBSStELFFBQVEsR0FBR2hFLDhDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnQixJQUFSLENBQWEsZUFBYixDQUFmO0FBQ0EsTUFBSWdELFFBQVEsQ0FBQ2xELE1BQVQsR0FBa0IsQ0FBdEIsRUFDRTs7QUFFRixNQUFJa0QsUUFBUSxDQUFDQyxFQUFULENBQVksVUFBWixDQUFKLEVBQTZCO0FBQzNCRCxZQUFRLENBQUNFLE9BQVQsQ0FBaUIsWUFBWTtBQUMzQmxFLG9EQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QitCLFdBQTlCLENBQTBDLE1BQTFDO0FBQ0QsS0FGRDtBQUdBL0Isa0RBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUStCLFdBQVIsQ0FBb0IsTUFBcEI7QUFDQTtBQUNEOztBQUVEL0IsZ0RBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9Da0UsT0FBcEM7QUFDQWxFLGdEQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QitCLFdBQXpCLENBQXFDLE1BQXJDO0FBQ0FpQyxVQUFRLENBQUNoQyxXQUFULENBQXFCLFlBQVk7QUFDL0JoQyxrREFBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEIrQixXQUE5QixDQUEwQyxNQUExQztBQUNELEdBRkQ7QUFHQS9CLGdEQUFDLENBQUMsSUFBRCxDQUFELENBQVEyRCxRQUFSLENBQWlCLE1BQWpCO0FBQ0QsQ0FuQkQsRSxDQXFCQTtBQUNBOztBQUNBM0QsOENBQUMsQ0FBQ1EsUUFBRCxDQUFELENBQVlQLEVBQVosQ0FBZSxPQUFmLEVBQXdCLHNCQUF4QixFQUFnRCxZQUFZO0FBQzFENEQsU0FBTyxDQUFDTSxVQUFSO0FBQ0QsQ0FGRCxFLENBSUE7O0FBR0FOLE9BQU8sQ0FBQ00sVUFBUixHQUFxQixZQUFZO0FBQy9CbkUsZ0RBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVThCLFdBQVYsQ0FBc0IsZ0JBQXRCO0FBQ0FzQyxLQUFHLENBQUNDLFdBQUosQ0FBZ0IsZ0JBQWhCO0FBQ0QsQ0FIRDs7QUFLQVIsT0FBTyxDQUFDUyxJQUFSLEdBQWUsWUFBWTtBQUN6QnRFLGdEQUFDLENBQUMsTUFBRCxDQUFELENBQVUyRCxRQUFWLENBQW1CLGdCQUFuQjtBQUNBUyxLQUFHLENBQUNHLEtBQUosQ0FBVSxnQkFBVixFQUE0QixJQUE1QjtBQUNELENBSEQ7O0FBTUFWLE9BQU8sQ0FBQ1csTUFBUixHQUFpQixZQUFZO0FBQzNCeEUsZ0RBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVStCLFdBQVYsQ0FBc0IsZ0JBQXRCO0FBQ0FxQyxLQUFHLENBQUNHLEtBQUosQ0FBVSxnQkFBVixFQUE0QixLQUE1QjtBQUNELENBSEQ7O0FBTUFWLE9BQU8sQ0FBQ1ksVUFBUixHQUFxQixZQUFZO0FBQy9CekUsZ0RBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVThCLFdBQVYsQ0FBc0IsZ0JBQXRCO0FBQ0FzQyxLQUFHLENBQUNDLFdBQUosQ0FBZ0IsZ0JBQWhCO0FBQ0QsQ0FIRDs7QUFLQVIsT0FBTyxDQUFDYSxJQUFSLEdBQWUsWUFBWTtBQUN6QjFFLGdEQUFDLENBQUMsTUFBRCxDQUFELENBQVUyRCxRQUFWLENBQW1CLGdCQUFuQjtBQUNBUyxLQUFHLENBQUNHLEtBQUosQ0FBVSxnQkFBVixFQUE0QixJQUE1QjtBQUNELENBSEQ7O0FBS0FWLE9BQU8sQ0FBQ2MsSUFBUixHQUFlLFlBQVk7QUFDekIzRSxnREFBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVK0IsV0FBVixDQUFzQixnQkFBdEI7QUFDQXFDLEtBQUcsQ0FBQ0csS0FBSixDQUFVLGdCQUFWLEVBQTRCLEtBQTVCO0FBQ0QsQ0FIRDs7QUFNQVYsT0FBTyxDQUFDSCxJQUFSLEdBQWUsWUFBWTtBQUN6QjFELGdEQUFDLENBQUMsTUFBRCxDQUFELENBQVUyRCxRQUFWLENBQW1CLGNBQW5CLEVBQW1DaUIsT0FBbkMsQ0FBMkMsbURBQTNDO0FBQ0QsQ0FGRDs7QUFJQWYsT0FBTyxDQUFDSixLQUFSLEdBQWdCLFlBQVk7QUFDMUJ6RCxnREFBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVK0IsV0FBVixDQUFzQixjQUF0QjtBQUNBL0IsZ0RBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCNkUsTUFBdkI7QUFDRCxDQUhELEMsQ0FNQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsSUFBSUMsR0FBRyxHQUFHLElBQVYsQyxDQUVBO0FBQ0E7O0FBQ0EvRSw4Q0FBQyxDQUFDUSxRQUFELENBQUQsQ0FBWVAsRUFBWixDQUFlLGNBQWYsRUFBK0Isd0NBQS9CLEVBQXlFLFVBQVVDLENBQVYsRUFBYTtBQUNwRjZFLEtBQUcsQ0FBQ0MsTUFBSjtBQUNELENBRkQ7QUFJZSxTQUFTQyxRQUFULEdBQ2Y7QUFDRUYsS0FBRyxDQUFDRyxPQUFKO0FBQ0FILEtBQUcsR0FBRyxJQUFJaEIsMERBQUosQ0FBcUIsWUFBckIsQ0FBTjtBQUNELEMsQ0FFRDtBQUNBOztBQUNBL0QsOENBQUMsQ0FBQ1EsUUFBRCxDQUFELENBQVlQLEVBQVosQ0FBZSxPQUFmLEVBQXdCLDRCQUF4QixFQUFzRCxZQUFZO0FBQ2hFNkUsV0FBUyxDQUFDckIsS0FBVixDQUFnQnpELDhDQUFDLENBQUMsSUFBRCxDQUFELENBQVFzQixPQUFSLENBQWdCLFlBQWhCLENBQWhCO0FBQ0QsQ0FGRCxFLENBS0E7QUFDQTs7QUFDQXRCLDhDQUFDLENBQUNRLFFBQUQsQ0FBRCxDQUFZUCxFQUFaLENBQWUsT0FBZixFQUF3QiwyQkFBeEIsRUFBcUQsVUFBVUMsQ0FBVixFQUFhO0FBQ2hFQSxHQUFDLENBQUN1QixjQUFGO0FBQ0EsTUFBSXJCLE1BQU0sR0FBR2dFLEdBQUcsQ0FBQ2UsU0FBSixDQUFjbkYsOENBQUMsQ0FBQyxJQUFELENBQWYsQ0FBYjs7QUFFQSxNQUFJSSxNQUFNLElBQUksS0FBZCxFQUFxQjtBQUNuQjBFLGFBQVMsQ0FBQ3JCLEtBQVYsQ0FBZ0J6RCw4Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0IsT0FBUixDQUFnQixZQUFoQixDQUFoQjtBQUNELEdBRkQsTUFFTztBQUNMLFFBQUk4RCxHQUFHLEdBQUcsRUFBVjs7QUFDQSxRQUFJcEYsOENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTJDLFdBQVIsQ0FBb0IsS0FBcEIsQ0FBSixFQUFnQztBQUM5QnlDLFNBQUcsR0FBR3BGLDhDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxJQUFSLENBQWEsS0FBYixDQUFOO0FBQ0Q7O0FBQ0RrQyxhQUFTLENBQUNwRCxNQUFWLENBQWlCdEIsTUFBakIsRUFBeUJnRixHQUF6QjtBQUNEO0FBQ0YsQ0FiRCxFLENBZ0JBO0FBQ0E7O0FBQ0FwRiw4Q0FBQyxDQUFDUSxRQUFELENBQUQsQ0FBWVAsRUFBWixDQUFlLE9BQWYsRUFBd0IscUJBQXhCLEVBQStDLFlBQVk7QUFDekQsTUFBSW9GLEVBQUUsR0FBR3JGLDhDQUFDLENBQUMsSUFBRCxDQUFELENBQVFzRixJQUFSLENBQWEsYUFBYixDQUFUOztBQUNBLE1BQUksQ0FBQ3RGLDhDQUFDLENBQUNxRixFQUFELENBQUQsQ0FBTXBCLEVBQU4sQ0FBUywrQkFBVCxDQUFMLEVBQWdEO0FBQzlDYSxhQUFTLENBQUNyQixLQUFWLENBQWdCNEIsRUFBaEI7QUFDRDtBQUNGLENBTEQ7QUFPQXJGLDhDQUFDLENBQUNRLFFBQUQsQ0FBRCxDQUFZUCxFQUFaLENBQWUsT0FBZixFQUF3QiwrQ0FBeEIsRUFBeUUsWUFBWTtBQUNuRixNQUFJb0YsRUFBRSxHQUFHckYsOENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNCLE9BQVIsQ0FBZ0IsWUFBaEIsQ0FBVDtBQUNBd0QsV0FBUyxDQUFDckIsS0FBVixDQUFnQjRCLEVBQWhCO0FBQ0QsQ0FIRCxFLENBS0E7QUFDQTs7QUFDQVAsU0FBUyxDQUFDcEQsTUFBVixHQUFtQixVQUFVeEIsQ0FBVixFQUFha0YsR0FBYixFQUFrQjtBQUNuQyxNQUFJcEYsOENBQUMsQ0FBQ0UsQ0FBRCxDQUFELENBQUtzRCxRQUFMLENBQWMsUUFBZCxDQUFKLEVBQTZCO0FBQzNCc0IsYUFBUyxDQUFDckIsS0FBVixDQUFnQnZELENBQWhCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBSWtGLEdBQUcsS0FBSyxFQUFaLEVBQWdCO0FBQ2RwRixvREFBQyxDQUFDRSxDQUFELENBQUQsQ0FBS0ssSUFBTCxDQUFVLDREQUFWO0FBQ0FQLG9EQUFDLENBQUNFLENBQUQsQ0FBRCxDQUFLcUYsSUFBTCxDQUFVSCxHQUFWLEVBQWUsWUFBWTtBQUN6QkwsV0FBRyxHQUFHLElBQUloQiwwREFBSixDQUFxQixZQUFyQixDQUFOO0FBQ0QsT0FGRDtBQUdEOztBQUNEZSxhQUFTLENBQUNwQixJQUFWLENBQWV4RCxDQUFmO0FBQ0Q7QUFDRixDQVpELEMsQ0FlQTtBQUNBOzs7QUFDQTRFLFNBQVMsQ0FBQ3BCLElBQVYsR0FBaUIsVUFBVXhELENBQVYsRUFBYTtBQUM1QixNQUFJNEUsU0FBUyxHQUFHOUUsOENBQUMsQ0FBQ0UsQ0FBRCxDQUFqQjtBQUNBLE1BQUlrRixHQUFHLEdBQUcsRUFBVixDQUY0QixDQUc1Qjs7QUFDQSxNQUFJTixTQUFTLENBQUNuQyxXQUFWLENBQXNCLEtBQXRCLEtBQWdDLFdBQVdtQyxTQUFTLENBQUNsQyxJQUFWLENBQWUsZ0JBQWYsQ0FBL0MsRUFBaUY7QUFDL0UsUUFBSWtDLFNBQVMsQ0FBQ2xDLElBQVYsQ0FBZSxLQUFmLE1BQTBCLFFBQTlCLEVBQXdDO0FBQ3RDd0MsU0FBRyxHQUFHSSxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsWUFBakIsQ0FBTjtBQUNELEtBRkQsTUFFTztBQUNMTCxTQUFHLEdBQUdOLFNBQVMsQ0FBQ2xDLElBQVYsQ0FBZSxLQUFmLENBQU47QUFDRDs7QUFFRGtDLGFBQVMsQ0FBQ1MsSUFBVixDQUFlSCxHQUFmLEVBQW9CLFlBQVk7QUFDOUJMLFNBQUcsR0FBRyxJQUFJaEIsMERBQUosQ0FBcUIsWUFBckIsQ0FBTixDQUQ4QixDQUc5Qjs7QUFDQSxVQUFJZSxTQUFTLENBQUNuQyxXQUFWLENBQXNCLGVBQXRCLEtBQTBDLFdBQVdtQyxTQUFTLENBQUNsQyxJQUFWLENBQWUsZUFBZixDQUF6RCxFQUEwRixDQUV6RixDQUZELE1BRU87QUFDTGtDLGlCQUFTLENBQUNsQyxJQUFWLENBQWUsZ0JBQWYsRUFBaUMsTUFBakM7QUFDRDtBQUNGLEtBVEQ7QUFXRCxHQXRCMkIsQ0F3QjlCOzs7QUFDRWtDLFdBQVMsQ0FBQ25CLFFBQVYsQ0FBbUIsUUFBbkIsRUFBNkIrQixHQUE3QixDQUFpQyxrQkFBakMsRUFBcURDLEtBQXJELENBQTJELCtEQUErRHpGLENBQS9ELEdBQW1FLFVBQTlIO0FBQ0QsQ0ExQkQsQyxDQTZCQTtBQUNBOzs7QUFDQTRFLFNBQVMsQ0FBQ3JCLEtBQVYsR0FBa0IsVUFBVXZELENBQVYsRUFBYTtBQUM3QkYsZ0RBQUMsQ0FBQ0UsQ0FBRCxDQUFELENBQUs2QixXQUFMLENBQWlCLFFBQWpCO0FBQ0EvQixnREFBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUI2RSxNQUF6QjtBQUNELENBSEQ7O0FBTUEsSUFBSVQsR0FBRyxHQUFHLEVBQVY7O0FBRUFBLEdBQUcsQ0FBQ2UsU0FBSixHQUFnQixVQUFVakYsQ0FBVixFQUFhO0FBQzNCLE1BQUlFLE1BQUo7O0FBQ0EsTUFBSUYsQ0FBQyxDQUFDeUMsV0FBRixDQUFjLFFBQWQsQ0FBSixFQUE2QjtBQUMzQnZDLFVBQU0sR0FBR0YsQ0FBQyxDQUFDMEMsSUFBRixDQUFPLFFBQVAsQ0FBVDtBQUNELEdBRkQsTUFFTztBQUNMeEMsVUFBTSxHQUFHRixDQUFDLENBQUNvRixJQUFGLENBQU8sTUFBUCxDQUFUO0FBQ0Q7O0FBRUQsTUFBSWxGLE1BQU0sSUFBSSxNQUFkLEVBQXNCO0FBQ3BCQSxVQUFNLEdBQUdKLDhDQUFDLENBQUNFLENBQUQsQ0FBRCxDQUFLYyxJQUFMLEVBQVQ7QUFDRCxHQUZELE1BRU8sSUFBSVosTUFBTSxJQUFJLE1BQWQsRUFBc0I7QUFDM0JBLFVBQU0sR0FBR0osOENBQUMsQ0FBQ0UsQ0FBRCxDQUFELENBQUswRixJQUFMLEVBQVQ7QUFDRDs7QUFFRCxNQUFJeEYsTUFBTSxJQUFJeUYsU0FBZCxFQUF5QjtBQUN2QixXQUFPLEtBQVA7QUFDRDs7QUFFRCxTQUFPekYsTUFBUDtBQUNELENBbkJELEM7Ozs7Ozs7Ozs7O0FDbllBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0FKLENBQUMsQ0FBQ1EsUUFBRCxDQUFELENBQVlQLEVBQVosQ0FBZSxPQUFmLEVBQXdCLDBEQUF4QixFQUFvRixZQUFZO0FBQzlGNkYsaUJBQWUsQ0FBQzlGLENBQUMsQ0FBQyxJQUFELENBQUYsQ0FBZjtBQUNELENBRkQ7QUFJQUEsQ0FBQyxDQUFDUSxRQUFELENBQUQsQ0FBWVAsRUFBWixDQUFlLFVBQWYsRUFBMkIsMERBQTNCLEVBQXVGLFlBQVk7QUFDakcsTUFBSUQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0YsR0FBUixPQUFrQixFQUF0QixFQUEwQjtBQUN4QkMsbUJBQWUsQ0FBQ2hHLENBQUMsQ0FBQyxJQUFELENBQUYsQ0FBZjtBQUNEO0FBQ0YsQ0FKRCxFLENBTUE7O0FBQ0E4RixlQUFlLENBQUM5RixDQUFDLENBQUMscURBQUQsQ0FBRixDQUFmOztBQUdBLFNBQVM4RixlQUFULENBQTBCNUYsQ0FBMUIsRUFBNkI7QUFDM0IsTUFBSUEsQ0FBQyxDQUFDK0YsTUFBRixDQUFTLG9CQUFULEVBQStCbkYsTUFBbkMsRUFBMkM7QUFDekNaLEtBQUMsQ0FBQytGLE1BQUYsQ0FBUyxvQkFBVCxFQUErQnRDLFFBQS9CLENBQXdDLFVBQXhDO0FBQ0QsR0FGRCxNQUVPO0FBQ0x6RCxLQUFDLENBQUNvQixPQUFGLENBQVUsYUFBVixFQUF5QnFDLFFBQXpCLENBQWtDLFVBQWxDO0FBQ0Q7QUFDRjs7QUFHRCxTQUFTcUMsZUFBVCxDQUEwQjlGLENBQTFCLEVBQTZCO0FBQzNCLE1BQUlBLENBQUMsQ0FBQytGLE1BQUYsQ0FBUyxvQkFBVCxFQUErQm5GLE1BQW5DLEVBQTJDO0FBQ3pDWixLQUFDLENBQUMrRixNQUFGLENBQVMsb0JBQVQsRUFBK0JsRSxXQUEvQixDQUEyQyxVQUEzQztBQUNELEdBRkQsTUFFTztBQUNMN0IsS0FBQyxDQUFDb0IsT0FBRixDQUFVLGFBQVYsRUFBeUJTLFdBQXpCLENBQXFDLFVBQXJDO0FBQ0Q7QUFDRjs7QUFFRC9CLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDeUMsSUFBdkMsQ0FBNEMsWUFBWTtBQUN0RCxNQUFJekMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0YsR0FBUixHQUFjakYsTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQWdGLG1CQUFlLENBQUM5RixDQUFDLENBQUMsSUFBRCxDQUFGLENBQWY7QUFDRDtBQUNGLENBUEQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsVUFBVUEsQ0FBVixFQUFhO0FBRVosTUFBSWtHLGFBQWEsR0FBRztBQUNsQmQsT0FBRyxFQUFFLEVBRGE7QUFFbEJlLFdBQU8sRUFBRSxLQUZTO0FBR2xCNUYsUUFBSSxFQUFFLEVBSFk7QUFJbEJILFVBQU0sRUFBRSxFQUpVO0FBS2xCZ0csUUFBSSxFQUFFLEVBTFk7QUFNbEI3RCxRQUFJLEVBQUUsRUFOWTtBQU9sQjhELFNBQUssRUFBRSxFQVBXO0FBUWxCQyxZQUFRLEVBQUUsSUFSUTtBQVNsQkMsaUJBQWEsRUFBRSxJQVRHO0FBVWxCQyxpQkFBYSxFQUFFLElBVkc7QUFXbEJDLGtCQUFjLEVBQUUsSUFYRTtBQVlsQkMsZUFBVyxFQUFFLElBWks7QUFhbEJDLGdCQUFZLEVBQUUsbUNBYkk7QUFjbEJDLGlCQUFhLEVBQUUsS0FkRztBQWVsQkMsY0FBVSxFQUFFLFFBZk07QUFnQmxCQyxlQUFXLEVBQUUscUNBaEJLO0FBaUJsQkMsa0JBQWMsRUFBRSxFQWpCRTtBQWtCbEJDLFdBQU8sRUFBRSxzSkFsQlM7QUFvQmxCQyxlQUFXLEVBQUUsSUFwQks7QUFzQmxCO0FBQ0FDLFVBQU0sRUFBRSxJQXZCVTtBQXdCbEJDLFdBQU8sRUFBRSxJQXhCUztBQXlCbEJDLFVBQU0sRUFBRSxJQXpCVTtBQTBCbEJDLFlBQVEsRUFBRSxJQTFCUTtBQTJCbEJDLGFBQVMsRUFBRSxJQTNCTztBQTRCbEJDLFlBQVEsRUFBRSxJQTVCUTtBQThCbEI7QUFDQUMsV0FBTyxFQUFFO0FBL0JTLEdBQXBCOztBQWtDQSxXQUFTQyxJQUFULENBQWVDLEdBQWYsRUFBb0I7QUFDbEIsUUFBSUEsR0FBRyxJQUFJN0IsU0FBWCxFQUFzQjtBQUNwQjZCLFNBQUcsR0FBRyxDQUFOO0FBQ0Q7O0FBQ0QsV0FBT0MsSUFBSSxDQUFDQyxNQUFMLEdBQWNDLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkJDLE9BQTNCLENBQW1DLFVBQW5DLEVBQStDLEVBQS9DLEVBQW1EQyxNQUFuRCxDQUEwRCxDQUExRCxFQUE2REwsR0FBN0QsQ0FBUDtBQUNEOztBQUdEekYsU0FBTyxHQUFHLGlCQUFVZ0IsT0FBVixFQUFtQjtBQUMzQixRQUFJK0UsT0FBTyxHQUFHaEksQ0FBQyxDQUFDaUksTUFBRixDQUFTLEVBQVQsRUFBYS9CLGFBQWIsRUFBNEJqRCxPQUE1QixDQUFkOztBQUVBLFFBQUkrRSxPQUFPLENBQUNSLE9BQVosRUFBcUI7QUFDbkJ4SCxPQUFDLENBQUMsTUFBTWdJLE9BQU8sQ0FBQ1IsT0FBZixDQUFELENBQXlCVSxLQUF6QixDQUErQixNQUEvQjtBQUNBO0FBQ0Q7O0FBR0QsUUFBSUMsRUFBRSxHQUFHLFdBQVdWLElBQUksRUFBeEI7O0FBR0EsUUFBSVcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFVRCxFQUFWLEVBQWM7QUFFakM7QUFDQTtBQUNBLFVBQUlILE9BQU8sQ0FBQ2QsTUFBWixFQUFvQjtBQUNsQmxILFNBQUMsQ0FBQyxNQUFNbUksRUFBUCxDQUFELENBQVlsSSxFQUFaLENBQWUsZUFBZixFQUFnQyxVQUFVQyxDQUFWLEVBQWEsQ0FDM0M7QUFDRCxTQUZEO0FBR0Q7O0FBRUQsVUFBSThILE9BQU8sQ0FBQ2IsT0FBWixFQUFxQjtBQUNuQm5ILFNBQUMsQ0FBQyxNQUFNbUksRUFBUCxDQUFELENBQVlsSSxFQUFaLENBQWUsZ0JBQWYsRUFBaUMsVUFBVUMsQ0FBVixFQUFhLENBQzVDO0FBQ0QsU0FGRDtBQUdEOztBQUVELFVBQUk4SCxPQUFPLENBQUNaLE1BQVosRUFBb0I7QUFDbEJwSCxTQUFDLENBQUMsTUFBTW1JLEVBQVAsQ0FBRCxDQUFZbEksRUFBWixDQUFlLGVBQWYsRUFBZ0MsVUFBVUMsQ0FBVixFQUFhO0FBQzNDOEgsaUJBQU8sQ0FBQ1osTUFBUjtBQUNELFNBRkQ7QUFHRDs7QUFFRCxVQUFJWSxPQUFPLENBQUNYLFFBQVosRUFBc0I7QUFDcEJySCxTQUFDLENBQUMsTUFBTW1JLEVBQVAsQ0FBRCxDQUFZbEksRUFBWixDQUFlLGlCQUFmLEVBQWtDLFVBQVVDLENBQVYsRUFBYTtBQUM3QzhILGlCQUFPLENBQUNYLFFBQVI7QUFDRCxTQUZEO0FBR0QsT0ExQmdDLENBNkJqQztBQUNBOzs7QUFDQXJILE9BQUMsQ0FBQyxNQUFNbUksRUFBUCxDQUFELENBQVk1RyxJQUFaLENBQWlCLDBCQUFqQixFQUE2Q3RCLEVBQTdDLENBQWdELE9BQWhELEVBQXlELFlBQVk7QUFFbkU7QUFDQSxZQUFJK0gsT0FBTyxDQUFDVixTQUFSLElBQXFCLElBQXpCLEVBQStCO0FBQzdCO0FBQ0QsU0FMa0UsQ0FPbkU7OztBQUNBLFlBQUl0SCxDQUFDLENBQUNxSSxVQUFGLENBQWFMLE9BQU8sQ0FBQ1YsU0FBckIsQ0FBSixFQUFxQztBQUNuQ1UsaUJBQU8sQ0FBQ1YsU0FBUixDQUFrQnRILENBQUMsQ0FBQyxNQUFNbUksRUFBUCxDQUFuQjtBQUNBO0FBQ0QsU0FYa0UsQ0FhbkU7OztBQUNBLFlBQUlILE9BQU8sQ0FBQ1YsU0FBUixDQUFrQmdCLFNBQXRCLEVBQWlDO0FBQy9CbEUsYUFBRyxDQUFDbUUsSUFBSixDQUFTUCxPQUFPLENBQUNWLFNBQWpCLEVBQTRCdEgsQ0FBQyxDQUFDLE1BQU1tSSxFQUFQLENBQTdCO0FBQ0Q7QUFFRixPQWxCRCxFQS9CaUMsQ0FvRGpDO0FBQ0E7O0FBQ0FuSSxPQUFDLENBQUMsTUFBTW1JLEVBQVAsQ0FBRCxDQUFZNUcsSUFBWixDQUFpQix5QkFBakIsRUFBNEN0QixFQUE1QyxDQUErQyxPQUEvQyxFQUF3RCxZQUFZO0FBRWxFO0FBQ0EsWUFBSStILE9BQU8sQ0FBQ1QsUUFBUixJQUFvQixJQUF4QixFQUE4QjtBQUM1QjtBQUNELFNBTGlFLENBT2xFOzs7QUFDQSxZQUFJdkgsQ0FBQyxDQUFDcUksVUFBRixDQUFhTCxPQUFPLENBQUNULFFBQXJCLENBQUosRUFBb0M7QUFDbENTLGlCQUFPLENBQUNULFFBQVIsQ0FBaUJ2SCxDQUFDLENBQUMsTUFBTW1JLEVBQVAsQ0FBbEI7QUFDQTtBQUNELFNBWGlFLENBYWxFOzs7QUFDQSxZQUFJSCxPQUFPLENBQUNULFFBQVIsQ0FBaUJlLFNBQXJCLEVBQWdDO0FBQzlCbEUsYUFBRyxDQUFDbUUsSUFBSixDQUFTUCxPQUFPLENBQUNULFFBQWpCLEVBQTJCdkgsQ0FBQyxDQUFDLE1BQU1tSSxFQUFQLENBQTVCO0FBQ0Q7QUFFRixPQWxCRDtBQW1CRCxLQXpFRCxDQVoyQixDQXdGM0I7QUFDQTtBQUNBOzs7QUFDQSxRQUFJSCxPQUFPLENBQUM3QixPQUFaLEVBQXFCO0FBRW5CbkcsT0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXdUYsSUFBWCxDQUFnQnlDLE9BQU8sQ0FBQzVDLEdBQXhCLEVBQTZCLFlBQVk7QUFDdkNwRixTQUFDLENBQUMsTUFBRCxDQUFELENBQVV3SSxNQUFWLENBQWlCeEksQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUIsSUFBUixDQUFhLFFBQWIsRUFBdUIrRCxJQUF2QixDQUE0QixJQUE1QixFQUFrQzZDLEVBQWxDLEVBQXNDTSxTQUF0QyxFQUFqQjtBQUVBekksU0FBQyxDQUFDLE1BQU1tSSxFQUFQLENBQUQsQ0FBWUQsS0FBWixDQUFrQixNQUFsQjtBQUNBbEksU0FBQyxDQUFDLE1BQU1tSSxFQUFQLENBQUQsQ0FBWU8sR0FBWixDQUFnQixnQkFBaEIsRUFBa0MsVUFBVXhJLENBQVYsRUFBYSxDQUM3QztBQUNELFNBRkQsRUFKdUMsQ0FTdkM7QUFDQTs7QUFDQSxZQUFJOEgsT0FBTyxDQUFDZixXQUFaLEVBQXlCO0FBQ3ZCakgsV0FBQyxDQUFDLE1BQU1tSSxFQUFQLENBQUQsQ0FBWWxJLEVBQVosQ0FBZSxpQkFBZixFQUFrQyxZQUFZO0FBQzVDRCxhQUFDLENBQUMsTUFBTW1JLEVBQVAsQ0FBRCxDQUFZdEQsTUFBWjtBQUNELFdBRkQ7QUFHRCxTQUpELE1BSU87QUFDTDdFLFdBQUMsQ0FBQ2dJLE9BQU8sUUFBUixDQUFELENBQWdCMUMsSUFBaEIsQ0FBcUIsZUFBckIsRUFBc0M2QyxFQUF0QztBQUNEOztBQUdEQyxzQkFBYyxDQUFDRCxFQUFELENBQWQ7QUFDRCxPQXJCRDtBQXNCRCxLQXhCRCxDQThCRTtBQUNBO0FBQ0Y7QUFoQ0EsU0FpQ0s7QUFFSCxnQkFBUUgsT0FBTyxDQUFDekYsSUFBaEI7QUFDRSxlQUFLLElBQUw7QUFDRXlGLG1CQUFPLENBQUN6RixJQUFSLEdBQWUsVUFBZjtBQUNBOztBQUVGLGVBQUssSUFBTDtBQUNFeUYsbUJBQU8sQ0FBQ3pGLElBQVIsR0FBZSxVQUFmO0FBQ0E7O0FBRUYsa0JBVEYsQ0FVRTs7QUFWRjs7QUFjQSxZQUFJeUYsT0FBTyxDQUFDNUIsSUFBWixFQUFrQjtBQUNoQjRCLGlCQUFPLENBQUM1QixJQUFSLEdBQWUsV0FBVzRCLE9BQU8sQ0FBQzVCLElBQWxDO0FBQ0QsU0FsQkUsQ0FxQkg7QUFDQTs7O0FBQ0EsWUFBSXVDLFdBQVcsR0FBRyxFQUFsQjs7QUFDQSxZQUFJWCxPQUFPLENBQUN6QixhQUFaLEVBQTJCO0FBQ3pCb0MscUJBQVcsSUFDVDtxQ0FBQSxHQUM4QlgsT0FBTyxDQUFDM0IsS0FEdEMsR0FDOEM7O2lCQUZoRDtBQUtELFNBOUJFLENBaUNIO0FBQ0E7OztBQUNBLFlBQUl1QyxXQUFXLEdBQUcsRUFBbEI7O0FBQ0EsWUFBSVosT0FBTyxDQUFDeEIsYUFBWixFQUEyQjtBQUN6Qm9DLHFCQUFXLElBQUksNEJBQWY7O0FBRUEsY0FBSVosT0FBTyxDQUFDcEIsYUFBWixFQUEyQjtBQUN6QmdDLHVCQUFXLElBQUksb0JBQW9CWixPQUFPLENBQUNsQixXQUE1QixHQUEwQywrQ0FBMUMsR0FBNEZrQixPQUFPLENBQUNuQixVQUFwRyxHQUFpSCxXQUFoSTtBQUNEOztBQUVELGNBQUltQixPQUFPLENBQUN2QixjQUFaLEVBQTRCO0FBQzFCbUMsdUJBQVcsSUFBSSxvQkFBb0JaLE9BQU8sQ0FBQ3JCLFlBQTVCLEdBQTJDLGdEQUEzQyxHQUE4RnFCLE9BQU8sQ0FBQ3RCLFdBQXRHLEdBQW9ILFdBQW5JO0FBQ0Q7O0FBRURrQyxxQkFBVyxJQUFJLFFBQWY7QUFDRCxTQWhERSxDQWtESDtBQUNBOzs7QUFDQSxZQUFJQyxVQUFVLEdBQ1osNEJBQTRCYixPQUFPLENBQUM1QixJQUFwQyxHQUEyQyxRQUEzQyxHQUFzRCtCLEVBQXRELEdBQTJELGlCQUEzRCxJQUFnRixDQUFDSCxPQUFPLENBQUMxQixRQUFULEdBQW9CLHdCQUFwQixHQUErQyxFQUEvSCxJQUFxSTtzQ0FBckksR0FDaUMwQixPQUFPLENBQUN6RixJQUR6QyxHQUNnRDs7aUJBRGhELEdBR1lvRyxXQUhaLEdBRzBCO3dDQUgxQixHQUltQ1gsT0FBTyxDQUFDakIsY0FKM0MsR0FJNEQ7bUJBSjVELEdBS2NpQixPQUFPLENBQUNoQixPQUx0QixHQUtnQzs7aUJBTGhDLEdBT1k0QixXQVBaLEdBTzBCOzs7aUJBUjVCLENBcERHLENBa0VIOztBQUNBNUksU0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVd0ksTUFBVixDQUFpQkssVUFBakI7QUFDQTdJLFNBQUMsQ0FBQyxNQUFNbUksRUFBUCxDQUFELENBQVlELEtBQVosQ0FBa0IsTUFBbEIsRUFwRUcsQ0F1RUg7QUFDQTs7QUFDQSxZQUFJRixPQUFPLENBQUNmLFdBQVosRUFBeUI7QUFDdkJqSCxXQUFDLENBQUMsTUFBTW1JLEVBQVAsQ0FBRCxDQUFZbEksRUFBWixDQUFlLGlCQUFmLEVBQWtDLFlBQVk7QUFDNUNELGFBQUMsQ0FBQyxNQUFNbUksRUFBUCxDQUFELENBQVl0RCxNQUFaO0FBQ0QsV0FGRDtBQUdELFNBSkQsTUFJTztBQUNMN0UsV0FBQyxDQUFDZ0ksT0FBTyxRQUFSLENBQUQsQ0FBZ0IxQyxJQUFoQixDQUFxQixlQUFyQixFQUFzQzZDLEVBQXRDO0FBQ0QsU0EvRUUsQ0FrRkg7QUFDQTs7O0FBQ0EsWUFBSUgsT0FBTyxDQUFDNUMsR0FBWixFQUFpQjtBQUNmcEYsV0FBQyxDQUFDLE1BQU1tSSxFQUFQLENBQUQsQ0FBWTVHLElBQVosQ0FBaUIsYUFBakIsRUFBZ0NnRSxJQUFoQyxDQUFxQ3lDLE9BQU8sQ0FBQzVDLEdBQTdDLEVBQWtELFlBQVk7QUFDNUQ7QUFDQWdELDBCQUFjLENBQUNELEVBQUQsQ0FBZDtBQUNELFdBSEQ7QUFJRCxTQUxELE1BS08sSUFBSUgsT0FBTyxDQUFDekgsSUFBWixFQUFrQjtBQUN2QlAsV0FBQyxDQUFDLE1BQU1tSSxFQUFQLENBQUQsQ0FBWTVHLElBQVosQ0FBaUIsYUFBakIsRUFBZ0NoQixJQUFoQyxDQUFxQ3lILE9BQU8sQ0FBQ3pILElBQTdDO0FBQ0E2SCx3QkFBYyxDQUFDRCxFQUFELENBQWQ7QUFDRCxTQUhNLE1BR0EsSUFBSUgsT0FBTyxDQUFDNUgsTUFBWixFQUFvQjtBQUN6QkosV0FBQyxDQUFDLE1BQU1tSSxFQUFQLENBQUQsQ0FBWTVHLElBQVosQ0FBaUIsYUFBakIsRUFBZ0NoQixJQUFoQyxDQUFxQ1AsQ0FBQyxDQUFDZ0ksT0FBTyxDQUFDNUgsTUFBVCxDQUFELENBQWtCRyxJQUFsQixFQUFyQztBQUNBNkgsd0JBQWMsQ0FBQ0QsRUFBRCxDQUFkO0FBQ0Q7QUFDRjtBQUNGLEdBN05EO0FBOE5ELENBMVFBLENBMFFDVyxNQTFRRCxDQUFELEM7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTlJLENBQUMsQ0FBQ1EsUUFBRCxDQUFELENBQVlQLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFNBQXhCLEVBQW1DLFVBQVVDLENBQVYsRUFBYTtBQUU5QyxNQUFNNkksT0FBTyxHQUFHL0ksQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0YsR0FBUixFQUFoQjtBQUNBLE1BQU1pRCx1QkFBdUIsR0FBR2hKLENBQUMsQ0FBQywwQkFBRCxDQUFqQztBQUNBLE1BQU1pSix3QkFBd0IsR0FBR2pKLENBQUMsQ0FBQywyQkFBRCxDQUFsQztBQUNBLE1BQU1rSixvQkFBb0IsR0FBR2xKLENBQUMsQ0FBQyx1QkFBRCxDQUE5Qjs7QUFFQSxNQUFJK0ksT0FBTyxDQUFDakksTUFBUixHQUFpQixDQUFyQixFQUF3QjtBQUN0QmQsS0FBQyxDQUFDbUosSUFBRixDQUFPO0FBQ0wvRCxTQUFHLEVBQUVJLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixXQUFqQixFQUE4QjtBQUFDc0QsZUFBTyxFQUFFQTtBQUFWLE9BQTlCLENBREE7QUFFTEssY0FBUSxFQUFFLE1BRkw7QUFHTEMsYUFBTyxFQUFFLGlCQUFVekcsSUFBVixFQUFnQjtBQUN2QixZQUFJckMsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsWUFBSXFDLElBQUksQ0FBQzBHLFNBQUwsQ0FBZXhJLE1BQWYsR0FBd0IsQ0FBNUIsRUFBK0I7QUFDN0JnSSxnQkFBTSxDQUFDckcsSUFBUCxDQUFZRyxJQUFJLENBQUMwRyxTQUFqQixFQUE0QixVQUFVQyxLQUFWLEVBQWlCQyxRQUFqQixFQUEyQjtBQUNyRGpKLGdCQUFJLEdBQUdBLElBQUksR0FBRyx5QkFBUCxHQUFtQ2lGLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixhQUFqQixFQUFnQztBQUN4RVcsa0JBQUksRUFBRSxVQURrRTtBQUV4RXFELGtCQUFJLEVBQUVELFFBQVEsQ0FBQ0M7QUFGeUQsYUFBaEMsQ0FBbkMsR0FHRixzQkFITDs7QUFJQSxnQkFBSUQsUUFBUSxDQUFDRSxLQUFULEtBQW1CLGFBQW5CLElBQW9DRixRQUFRLENBQUNFLEtBQVQsSUFBa0IsSUFBMUQsRUFBZ0U7QUFDOURuSixrQkFBSSxHQUFHQSxJQUFJLEdBQUcsa0NBQVAsR0FDTCw2QkFESyxHQUMyQmlKLFFBQVEsQ0FBQ0csZUFEcEMsR0FDc0QsV0FEdEQsR0FFTCxRQUZGO0FBR0QsYUFKRCxNQUlPO0FBQ0xwSixrQkFBSSxHQUFHQSxJQUFJLEdBQUcscUNBQVAsR0FBK0NxQyxJQUFJLENBQUNnSCxRQUFwRCxHQUErRCxZQUEvRCxHQUE4RUosUUFBUSxDQUFDRSxLQUF2RixHQUErRiw0QkFBL0YsR0FBOEhGLFFBQVEsQ0FBQ0ssU0FBdkksR0FBbUosTUFBMUo7QUFDRDs7QUFDRHRKLGdCQUFJLEdBQUdBLElBQUksR0FBRyxvREFBUCxHQUNMLHlDQURLLEdBQ3VDaUosUUFBUSxDQUFDSyxTQURoRCxHQUM0RCxJQUQ1RCxHQUNtRUwsUUFBUSxDQUFDTSxRQUQ1RSxHQUN1RixjQUR2RixHQUVMLDREQUZLLEdBRTBETixRQUFRLENBQUNPLE9BRm5FLEdBRTZFLFdBRjdFLEdBR0wsb0NBSEssR0FJTCxrQ0FKSyxHQUtMLDBCQUxGO0FBTUQsV0FsQkQ7QUFtQkQsU0FwQkQsTUFvQk87QUFDTHhKLGNBQUksR0FBRyxvRkFBb0Z3SSxPQUFwRixHQUE4RixrQkFBckc7QUFDRDs7QUFFREMsK0JBQXVCLENBQUNnQixLQUF4QixHQUFnQ3hCLE1BQWhDLENBQXVDakksSUFBdkM7QUFFQUEsWUFBSSxHQUFHLEVBQVA7O0FBQ0EsWUFBSXFDLElBQUksQ0FBQ3FILFVBQUwsQ0FBZ0JuSixNQUFoQixHQUF5QixDQUE3QixFQUFnQztBQUM5QmdJLGdCQUFNLENBQUNyRyxJQUFQLENBQVlHLElBQUksQ0FBQ3FILFVBQWpCLEVBQTZCLFVBQVVWLEtBQVYsRUFBaUJXLFNBQWpCLEVBQTRCO0FBQ3ZEM0osZ0JBQUksR0FBR0EsSUFBSSxHQUFHLHNDQUFQLEdBQWdEaUYsT0FBTyxDQUFDQyxRQUFSLENBQWlCLGFBQWpCLEVBQWdDO0FBQ3JGVyxrQkFBSSxFQUFFLFdBRCtFO0FBRXJGcUQsa0JBQUksRUFBRVMsU0FBUyxDQUFDVDtBQUZxRSxhQUFoQyxDQUFoRCxHQUdGLHNCQUhMOztBQUlBLGdCQUFJUyxTQUFTLENBQUNSLEtBQVYsS0FBb0IsYUFBcEIsSUFBcUNRLFNBQVMsQ0FBQ1IsS0FBVixJQUFtQixJQUE1RCxFQUFrRTtBQUNoRW5KLGtCQUFJLEdBQUdBLElBQUksR0FBRyxrQ0FBUCxHQUNMLDZCQURLLEdBQzJCMkosU0FBUyxDQUFDUCxlQURyQyxHQUN1RCxXQUR2RCxHQUVMLFFBRkY7QUFHRCxhQUpELE1BSU87QUFDTHBKLGtCQUFJLEdBQUdBLElBQUksR0FBRyxxQ0FBUCxHQUErQ3FDLElBQUksQ0FBQ2dILFFBQXBELEdBQStELGFBQS9ELEdBQStFTSxTQUFTLENBQUNSLEtBQXpGLEdBQWlHLDRCQUFqRyxHQUFnSVEsU0FBUyxDQUFDTCxTQUExSSxHQUFzSixNQUE3SjtBQUNEOztBQUNEdEosZ0JBQUksR0FBR0EsSUFBSSxHQUFHLDZCQUFQLEdBQXVDMkosU0FBUyxDQUFDTCxTQUFqRCxHQUE2RCxRQUE3RCxHQUNMLE1BREY7QUFFRCxXQWREO0FBZUQsU0FoQkQsTUFnQk87QUFDTHRKLGNBQUksR0FBRyxvRkFBb0Z3SSxPQUFwRixHQUE4RixrQkFBckc7QUFDRDs7QUFDREUsZ0NBQXdCLENBQUNlLEtBQXpCLEdBQWlDeEIsTUFBakMsQ0FBd0NqSSxJQUF4QztBQUVBQSxZQUFJLEdBQUcsRUFBUDs7QUFDQSxZQUFJcUMsSUFBSSxDQUFDdUgsTUFBTCxDQUFZckosTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUMxQmdJLGdCQUFNLENBQUNyRyxJQUFQLENBQVlHLElBQUksQ0FBQ3VILE1BQWpCLEVBQXlCLFVBQVVaLEtBQVYsRUFBaUJhLEtBQWpCLEVBQXdCO0FBQy9DN0osZ0JBQUksR0FBR0EsSUFBSSxHQUFHLDBDQUFQLEdBQ0wscUdBREssR0FFTCw2QkFGSyxHQUUyQjZKLEtBRjNCLEdBRW1DLFFBRm5DLEdBR0wsMEJBSEY7QUFJRCxXQUxEO0FBTUQsU0FQRCxNQU9PO0FBQ0w3SixjQUFJLEdBQUcsb0ZBQW9Gd0ksT0FBcEYsR0FBOEYsa0JBQXJHO0FBQ0Q7O0FBQ0RHLDRCQUFvQixDQUFDYyxLQUFyQixHQUE2QnhCLE1BQTdCLENBQW9DakksSUFBcEM7QUFDRDtBQWpFSSxLQUFQO0FBbUVELEdBcEVELE1Bb0VPO0FBQ0wsUUFBSUEsSUFBSSxHQUFHLGtFQUFYO0FBQ0EySSx3QkFBb0IsQ0FBQ2MsS0FBckIsR0FBNkJ4QixNQUE3QixDQUFvQ2pJLElBQXBDO0FBQ0EwSSw0QkFBd0IsQ0FBQ2UsS0FBekIsR0FBaUN4QixNQUFqQyxDQUF3Q2pJLElBQXhDO0FBQ0F5SSwyQkFBdUIsQ0FBQ2dCLEtBQXhCLEdBQWdDeEIsTUFBaEMsQ0FBdUNqSSxJQUF2QztBQUNEO0FBQ0YsQ0FqRkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTOEosV0FBVCxDQUFzQkMsSUFBdEIsRUFBNEI7QUFDMUIsTUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxHQUFYLENBQWI7QUFDQSxNQUFJQyxTQUFTLEdBQUcsQ0FBaEI7O0FBQ0EsTUFBSUYsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLFdBQWhCLEVBQTZCO0FBQzNCLFFBQUlBLElBQUksQ0FBQ3pKLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNuQjJKLGVBQVMsR0FBRyxDQUFaO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJRixJQUFJLENBQUNFLFNBQUQsQ0FBSixLQUFvQixzQkFBeEIsRUFBZ0Q7QUFDOUNBLGFBQVMsR0FBR0EsU0FBUyxHQUFHLENBQXhCO0FBQ0Q7O0FBRUQsTUFBSUYsSUFBSSxDQUFDQSxJQUFJLENBQUN6SixNQUFMLEdBQWMsQ0FBZixDQUFKLEtBQTBCLEVBQTlCLEVBQWtDO0FBQ2hDeUosUUFBSSxDQUFDRyxHQUFMO0FBQ0Q7O0FBRUQxSywrQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQitCLFdBQWhCLENBQTRCLFFBQTVCO0FBQ0EvQiwrQ0FBQyxDQUFDLFdBQVd1SyxJQUFJLENBQUNFLFNBQUQsQ0FBaEIsQ0FBRCxDQUE4QjlHLFFBQTlCLENBQXVDLFFBQXZDO0FBQ0QsQyxDQUVEOzs7QUFDQTBHLFdBQVcsQ0FBQ3JLLDZDQUFDLENBQUMySyxRQUFELENBQUQsQ0FBWXJGLElBQVosQ0FBaUIsVUFBakIsQ0FBRCxDQUFYO0FBRUFzRixrREFBSSxDQUFDQyxLQUFMLENBQVc7QUFDVEMsYUFBVyxFQUFFO0FBQ1hDLGlCQUFhLEVBQUUsaUJBREo7QUFFWEMsZ0JBQVksRUFBRTtBQUZILEdBREo7QUFLVEMsZ0JBQWMsRUFBRTtBQUxQLENBQVgsRSxDQU9BOztBQUNBakwsNkNBQUMsQ0FBQ1EsUUFBRCxDQUFELENBQVlQLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQXhCLEVBQXNDLFVBQVVDLENBQVYsRUFBYTtBQUNqREEsR0FBQyxDQUFDdUIsY0FBRjtBQUNBLE1BQU0yRCxHQUFHLEdBQUdwRiw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0YsSUFBUixDQUFhLE1BQWIsQ0FBWjtBQUNBLE1BQU00RixJQUFJLEdBQUdsTCw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsSUFBUixDQUFhLE1BQWIsQ0FBYjtBQUNBZ0ksb0RBQUksQ0FBQ08sSUFBTCxDQUFVO0FBQ1I5RSxTQUFLLEVBQUUsNEJBREM7QUFFUitFLFFBQUksRUFBRSwwQ0FGRTtBQUdSQyxRQUFJLEVBQUUsU0FIRTtBQUlSQyxvQkFBZ0IsRUFBRSxJQUpWO0FBS1JDLHNCQUFrQixFQUFFLFNBTFo7QUFNUkMscUJBQWlCLEVBQUUsTUFOWDtBQU9SQyxxQkFBaUIsRUFBRSxrQkFQWDtBQVFSQyxvQkFBZ0IsRUFBRSxjQVJWO0FBU1JaLGVBQVcsRUFBRTtBQUNYQyxtQkFBYSxFQUFFLGlCQURKO0FBRVhDLGtCQUFZLEVBQUU7QUFGSCxLQVRMO0FBYVJDLGtCQUFjLEVBQUU7QUFiUixHQUFWLEVBY0dVLElBZEgsQ0FjUSxVQUFVQyxNQUFWLEVBQWtCO0FBQ3hCLFFBQUlBLE1BQU0sQ0FBQ0MsS0FBWCxFQUFrQjtBQUNoQjdMLG1EQUFDLENBQUNtSixJQUFGLENBQU87QUFDTC9ELFdBQUcsRUFBRUEsR0FEQTtBQUVMZ0IsWUFBSSxFQUFFLFFBRkQ7QUFHTHhELFlBQUksRUFBRTtBQUNKa0osZ0JBQU0sRUFBRVo7QUFESixTQUhEO0FBTUw3QixlQUFPLEVBQUUsaUJBQVVsQixFQUFWLEVBQWM7QUFDckIsY0FBSUEsRUFBRSxDQUFDNEQsY0FBSCxDQUFrQixVQUFsQixLQUFpQzVELEVBQUUsQ0FBQzRELGNBQUgsQ0FBa0IsS0FBbEIsQ0FBckMsRUFBK0Q7QUFDN0R2TCxvQkFBUSxDQUFDbUssUUFBVCxDQUFrQnFCLElBQWxCLEdBQXlCN0QsRUFBRSxDQUFDL0MsR0FBNUI7QUFDRCxXQUZELE1BRU87QUFDTHBGLHlEQUFDLENBQUMsWUFBWW1JLEVBQWIsQ0FBRCxDQUFrQjdHLE9BQWxCLENBQTBCLElBQTFCLEVBQWdDdUQsTUFBaEM7QUFDQW9ILHNCQUFVLENBQUMsbUNBQUQsRUFBc0MsU0FBdEMsQ0FBVjtBQUNBckIsOERBQUksQ0FBQ08sSUFBTCxDQUFVO0FBQ1I5RSxtQkFBSyxFQUFFLFdBREM7QUFFUitFLGtCQUFJLEVBQUUsbUNBRkU7QUFHUkMsa0JBQUksRUFBRSxTQUhFO0FBSVJJLCtCQUFpQixFQUFFLElBSlg7QUFLUlgseUJBQVcsRUFBRTtBQUNYQyw2QkFBYSxFQUFFLGlCQURKO0FBRVhDLDRCQUFZLEVBQUU7QUFGSCxlQUxMO0FBU1JDLDRCQUFjLEVBQUU7QUFUUixhQUFWO0FBV0Q7QUFDRixTQXhCSTtBQXlCTGlCLGFBQUssRUFBRSxlQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEJDLFdBQTVCLEVBQXlDO0FBQzlDekIsNERBQUksQ0FBQ08sSUFBTCxDQUFVO0FBQ1I5RSxpQkFBSyxFQUFFLGdDQURDO0FBRVIrRSxnQkFBSSxFQUFFLGtDQUZFO0FBR1JDLGdCQUFJLEVBQUUsT0FIRTtBQUlSSSw2QkFBaUIsRUFBRSxJQUpYO0FBS1JYLHVCQUFXLEVBQUU7QUFDWEMsMkJBQWEsRUFBRSxpQkFESjtBQUVYQywwQkFBWSxFQUFFO0FBRkgsYUFMTDtBQVNSQywwQkFBYyxFQUFFO0FBVFIsV0FBVjtBQVdBZ0Isb0JBQVUsQ0FBQyw0Q0FBRCxFQUErQyxRQUEvQyxDQUFWO0FBQ0Q7QUF0Q0ksT0FBUDtBQXlDRCxLQTFDRCxNQTBDTyxLQUNMO0FBQ0FMLFVBQU0sQ0FBQ1UsT0FBUCxLQUFtQixRQUZkLEVBR0w7QUFDQTFCLHdEQUFJLENBQUNPLElBQUwsQ0FBVTtBQUNSOUUsYUFBSyxFQUFFLFdBREM7QUFFUitFLFlBQUksRUFBRSw0QkFGRTtBQUdSQyxZQUFJLEVBQUUsT0FIRTtBQUlSSSx5QkFBaUIsRUFBRSxJQUpYO0FBS1JYLG1CQUFXLEVBQUU7QUFDWEMsdUJBQWEsRUFBRSxpQkFESjtBQUVYQyxzQkFBWSxFQUFFO0FBRkgsU0FMTDtBQVNSQyxzQkFBYyxFQUFFO0FBVFIsT0FBVjtBQVdEO0FBQ0YsR0F6RUQ7QUEwRUQsQ0E5RUQ7QUFnRk8sU0FBU2dCLFVBQVQsQ0FBcUJNLE9BQXJCLEVBQThCQyxLQUE5QixFQUFxQztBQUMxQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBLE1BQUlDLFNBQVMsR0FBRyxJQUFJQyxLQUFKLEVBQWhCO0FBQ0FELFdBQVMsQ0FBQyxTQUFELENBQVQsR0FBdUIsUUFBdkI7QUFDQUEsV0FBUyxDQUFDLFFBQUQsQ0FBVCxHQUFzQixRQUF0QjtBQUNBQSxXQUFTLENBQUMsU0FBRCxDQUFULEdBQXVCLFdBQXZCO0FBRUEsTUFBTXBNLElBQUksR0FBRyxpQ0FBaUNpTSxLQUFqQyxHQUF5QyxtQkFBekMsR0FDWCxzR0FEVyxHQUVYLGdEQUZXLEdBR1gsaUNBSFcsR0FJWCwwQkFKVyxHQUlrQkcsU0FBUyxDQUFDSCxLQUFELENBSjNCLEdBSXFDLFNBSnJDLEdBS1gseUJBTFcsR0FLaUJELE9BTGpCLEdBSzJCLFFBTDNCLEdBTVgsd0JBTkY7QUFRQXZNLCtDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCNEUsT0FBbEIsQ0FBMEJyRSxJQUExQixFQUFnQ3NNLFNBQWhDLENBQTBDLE1BQTFDO0FBQ0E3TSwrQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjOE0sS0FBZCxDQUFvQixJQUFwQixFQUEwQjVJLE9BQTFCLENBQWtDLE1BQWxDO0FBQ0QsQyxDQUVEOztBQUNBLElBQUk2SSxvQkFBb0IsR0FBRyxFQUEzQjtBQUNBLElBQUkzRyxJQUFJLEdBQUcsTUFBWDtBQUNBLElBQUk0RyxVQUFVLEdBQUcsS0FBakI7QUFFQWhOLDZDQUFDLENBQUNRLFFBQUQsQ0FBRCxDQUFZUCxFQUFaLENBQWUsT0FBZixFQUF3QixTQUF4QixFQUFtQyxVQUFVQyxDQUFWLEVBQWE7QUFDOUNBLEdBQUMsQ0FBQ3VCLGNBQUY7QUFDQXNMLHNCQUFvQixHQUFHL00sNkNBQUMsQ0FBQyxJQUFELENBQXhCO0FBQ0EsTUFBSU8sSUFBSSxHQUFHLEVBQVg7QUFDQXlNLFlBQVUsR0FBRyxJQUFiOztBQUNBLE1BQUksT0FBUWhOLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxJQUFSLENBQWEsTUFBYixDQUFSLEtBQWtDLFdBQXRDLEVBQW1EO0FBQ2pEd0QsUUFBSSxHQUFHcEcsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLElBQVIsQ0FBYSxNQUFiLENBQVA7QUFDRDs7QUFFRCxNQUFJNUMsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLElBQVIsQ0FBYSxNQUFiLE1BQXlCLFFBQTdCLEVBQXVDLENBQ3JDO0FBQ0QsR0FGRCxNQUVPO0FBQ0xyQyxRQUFJLEdBQUcwTSxXQUFXLENBQUNqTiw2Q0FBQyxDQUFDLElBQUQsQ0FBRixDQUFsQjtBQUNEOztBQUNEQSwrQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa04sV0FBUixDQUFvQjNNLElBQXBCO0FBQ0FQLCtDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CNEQsS0FBbkI7QUFDRCxDQWhCRDtBQWtCQTVELDZDQUFDLENBQUNRLFFBQUQsQ0FBRCxDQUFZUCxFQUFaLENBQWUsT0FBZixFQUF3QixlQUF4QixFQUF5QyxVQUFVQyxDQUFWLEVBQWE7QUFDcEQsTUFBSUEsQ0FBQyxDQUFDaU4sT0FBRixLQUFjLEVBQWxCLEVBQXNCO0FBQ3BCQyxjQUFVO0FBQ1gsR0FGRCxNQUVPLElBQUlsTixDQUFDLENBQUNpTixPQUFGLEtBQWMsRUFBbEIsRUFBc0I7QUFDM0JuTixpREFBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmtOLFdBQWxCLENBQThCSCxvQkFBOUI7QUFDRDtBQUNGLENBTkQ7QUFRQS9NLDZDQUFDLENBQUNRLFFBQUQsQ0FBRCxDQUFZUCxFQUFaLENBQWUsT0FBZixFQUF3QixnQkFBeEIsRUFBMEMsVUFBVUMsQ0FBVixFQUFhO0FBQ3JEQSxHQUFDLENBQUN1QixjQUFGO0FBQ0EyTCxZQUFVO0FBQ1gsQ0FIRDtBQUtBcE4sNkNBQUMsQ0FBQ1EsUUFBRCxDQUFELENBQVlQLEVBQVosQ0FBZSxVQUFmLEVBQTJCLFVBQVVDLENBQVYsRUFBYTtBQUN0QyxNQUFJOE0sVUFBVSxLQUFLLElBQWYsSUFBdUI5TSxDQUFDLENBQUNtTixLQUFGLEtBQVksRUFBdkMsRUFBMkM7QUFDekNuTixLQUFDLENBQUN1QixjQUFGO0FBQ0EyTCxjQUFVO0FBQ1g7O0FBRUQsTUFBSUosVUFBVSxLQUFLLElBQWYsSUFBdUI5TSxDQUFDLENBQUNtTixLQUFGLEtBQVksRUFBdkMsRUFBMkM7QUFDekNuTixLQUFDLENBQUN1QixjQUFGO0FBQ0F6QixpREFBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmtOLFdBQWxCLENBQThCSCxvQkFBOUI7QUFDRDtBQUNGLENBVkQ7QUFZQS9NLDZDQUFDLENBQUNRLFFBQUQsQ0FBRCxDQUFZUCxFQUFaLENBQWUsT0FBZixFQUF3QixnQkFBeEIsRUFBMEMsVUFBVUMsQ0FBVixFQUFhO0FBQ3JEQSxHQUFDLENBQUN1QixjQUFGO0FBQ0F6QiwrQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmtOLFdBQWxCLENBQThCSCxvQkFBOUI7QUFDRCxDQUhEOztBQUtBLFNBQVNLLFVBQVQsR0FBdUI7QUFDckIsTUFBSXJILEdBQUcsR0FBRy9GLDZDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CK0YsR0FBbkIsRUFBVjtBQUNBL0YsK0NBQUMsQ0FBQ21KLElBQUYsQ0FBTztBQUNML0QsT0FBRyxFQUFFMkgsb0JBQW9CLENBQUN6SCxJQUFyQixDQUEwQixNQUExQixDQURBO0FBRUwxQyxRQUFJLEVBQUU7QUFDSjBLLFdBQUssRUFBRVAsb0JBQW9CLENBQUNuSyxJQUFyQixDQUEwQixPQUExQixDQURIO0FBRUppSixXQUFLLEVBQUU5RixHQUZIO0FBR0pLLFVBQUksRUFBRUE7QUFIRixLQUZEO0FBT0xtSCxVQUFNLEVBQUUsTUFQSDtBQVFMbEUsV0FBTyxFQUFFLG1CQUFZO0FBQ25CMEQsMEJBQW9CLENBQUN4TSxJQUFyQixDQUEwQndGLEdBQTFCO0FBQ0EvRixtREFBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmtOLFdBQWxCLENBQThCSCxvQkFBOUI7QUFDQUMsZ0JBQVUsR0FBRyxLQUFiO0FBQ0Q7QUFaSSxHQUFQO0FBY0Q7O0FBRUQsU0FBU0MsV0FBVCxDQUFzQk8sSUFBdEIsRUFBNEI7QUFDMUIsTUFBSUMsS0FBSyxHQUFHLHFEQUFxREQsSUFBSSxDQUFDak4sSUFBTCxHQUFZbU4sSUFBWixFQUFyRCxHQUEwRSx3QkFBdEY7QUFDQUQsT0FBSyxHQUFHQSxLQUFLLEdBQUcsd0hBQWhCO0FBQ0FBLE9BQUssR0FBR0EsS0FBSyxHQUFHLDZIQUFoQjtBQUNBLFNBQU9BLEtBQVA7QUFDRDs7QUFFRDNFLE1BQU0sQ0FBQzZFLEVBQVAsQ0FBVXZNLFFBQVYsR0FBcUIsVUFBVWQsSUFBVixFQUFnQnNOLEdBQWhCLEVBQXFCO0FBQ3hDLFNBQU81Tiw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLENBQVIsRUFBVzZOLFlBQVgsQ0FBd0IsVUFBVXZOLElBQWxDLEtBQTJDc04sR0FBbEQ7QUFDRCxDQUZEOztBQUlBOUUsTUFBTSxDQUFDNkUsRUFBUCxDQUFVaEwsV0FBVixHQUF3QixVQUFVckMsSUFBVixFQUFnQjtBQUN0QyxTQUFPTiw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLENBQVIsRUFBVzhOLFlBQVgsQ0FBd0IsVUFBVXhOLElBQWxDLENBQVA7QUFDRCxDQUZEOztBQUlBLFNBQVN5TixZQUFULENBQXVCek4sSUFBdkIsRUFBNkI7QUFDM0IsU0FBT0EsSUFBSSxDQUFDd0gsT0FBTCxDQUFhLFdBQWIsRUFBMEIsVUFBVWtHLENBQVYsRUFBYTtBQUM1QyxXQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtDLFdBQUwsRUFBUDtBQUNELEdBRk0sQ0FBUDtBQUdEOztBQUVNLFNBQVMvTCxjQUFULENBQXlCZ00sRUFBekIsRUFBNkJDLFFBQTdCLEVBQXVDO0FBQzVDLE1BQUlsTCxPQUFPLEdBQUcsRUFBZDtBQUNBakQsK0NBQUMsQ0FBQ3lDLElBQUYsQ0FBT3pDLDZDQUFDLENBQUNrTyxFQUFELENBQUQsQ0FBTXRMLElBQU4sRUFBUCxFQUFxQixVQUFVd0wsR0FBVixFQUFldkMsS0FBZixFQUFzQjtBQUV6Q3VDLE9BQUcsR0FBR0wsWUFBWSxDQUFDSyxHQUFELENBQWxCLENBRnlDLENBSXpDOztBQUNBLFFBQUlBLEdBQUcsSUFBSSxTQUFYLEVBQXNCO0FBQ3BCO0FBQ0Q7O0FBRUQsUUFBSUQsUUFBUSxJQUFJdEksU0FBaEIsRUFBMkI7QUFDekIsVUFBSU8sSUFBSSxHQUFHK0gsUUFBUSxDQUFDQyxHQUFELENBQW5COztBQUNBLGNBQVFoSSxJQUFSO0FBQ0UsYUFBSyxNQUFMO0FBQ0V5RixlQUFLLEdBQUd3QyxPQUFPLENBQUN4QyxLQUFELENBQWY7QUFDQTs7QUFFRixhQUFLLEtBQUw7QUFDRUEsZUFBSyxHQUFHeUMsTUFBTSxDQUFDekMsS0FBRCxDQUFkO0FBQ0E7O0FBRUYsYUFBSyxPQUFMO0FBQ0VBLGVBQUssR0FBR0EsS0FBSyxDQUFDckIsS0FBTixDQUFZLEdBQVosQ0FBUjtBQUNBOztBQUVGO0FBYkY7QUFnQkQ7O0FBRUR2SCxXQUFPLENBQUNtTCxHQUFELENBQVAsR0FBZXZDLEtBQWY7QUFDRCxHQTlCRDtBQWdDQSxTQUFPNUksT0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNRRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsQ0FBQyxVQUFVakQsQ0FBVixFQUFhO0FBQ1osZUFEWSxDQUdaO0FBQ0E7O0FBRUEsV0FBU3VPLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQXVCO0FBQ3JCLFdBQU9BLEdBQUcsQ0FBQ3ZLLEVBQUosQ0FBTyxtQkFBUCxJQUE4QnVLLEdBQUcsQ0FBQ25MLElBQUosQ0FBUyxTQUFULENBQTlCLEdBQ0FtTCxHQUFHLENBQUN2SyxFQUFKLENBQU8sZ0JBQVAsSUFBOEIsQ0FBQyxDQUFDakUsQ0FBQyxDQUFDLFlBQVl3TyxHQUFHLENBQUNsSixJQUFKLENBQVMsTUFBVCxDQUFaLEdBQStCLFlBQWhDLENBQUQsQ0FBK0N4RSxNQUEvRSxHQUNBME4sR0FBRyxDQUFDdkssRUFBSixDQUFPLGtCQUFQLElBQThCLENBQUN1SyxHQUFHLENBQUN6SSxHQUFKLE1BQWEsRUFBZCxFQUFrQmpGLE1BQWhELEdBQzhCME4sR0FBRyxDQUFDekksR0FBSixFQUhyQztBQUlEOztBQUVELE1BQUkwSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFVQyxPQUFWLEVBQW1CekwsT0FBbkIsRUFBNEI7QUFDMUMsU0FBS0EsT0FBTCxHQUFrQkEsT0FBbEI7QUFDQSxTQUFLMEwsVUFBTCxHQUFrQjNPLENBQUMsQ0FBQ2lJLE1BQUYsQ0FBUyxFQUFULEVBQWF3RyxTQUFTLENBQUNHLFVBQXZCLEVBQW1DM0wsT0FBTyxDQUFDNEwsTUFBM0MsQ0FBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWtCOU8sQ0FBQyxDQUFDME8sT0FBRCxDQUFuQjtBQUNBLFNBQUtLLElBQUwsR0FBa0IvTyxDQUFDLENBQUMsNkNBQUQsQ0FBRCxDQUNHZ1AsTUFESCxDQUNVLFlBQVksS0FBS0YsUUFBTCxDQUFjeEosSUFBZCxDQUFtQixJQUFuQixDQUFaLEdBQXVDLElBRGpELEVBRUcySixHQUZILENBRU8sS0FBS0gsUUFBTCxDQUFjdk4sSUFBZCxDQUFtQiw2Q0FBbkIsQ0FGUCxDQUFsQjtBQUlBLFNBQUt5RCxNQUFMO0FBRUEsU0FBSzhKLFFBQUwsQ0FBYzdPLEVBQWQsQ0FBaUIsOERBQWpCLEVBQWlGRCxDQUFDLENBQUNrUCxLQUFGLENBQVEsS0FBS0MsT0FBYixFQUFzQixJQUF0QixDQUFqRjtBQUNBLFNBQUtMLFFBQUwsQ0FBYzdPLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDRCxDQUFDLENBQUNrUCxLQUFGLENBQVEsS0FBS0UsUUFBYixFQUF1QixJQUF2QixDQUF4QztBQUNBLFNBQUtOLFFBQUwsQ0FBYzdPLEVBQWQsQ0FBaUIsb0JBQWpCLEVBQXVDRCxDQUFDLENBQUNrUCxLQUFGLENBQVEsS0FBS0csS0FBYixFQUFvQixJQUFwQixDQUF2QztBQUVBLFNBQUtQLFFBQUwsQ0FBY3ZOLElBQWQsQ0FBbUIsY0FBbkIsRUFBbUNrQixJQUFuQyxDQUF3QyxZQUFZO0FBQ2xELFVBQUk2TSxLQUFLLEdBQUl0UCxDQUFDLENBQUMsSUFBRCxDQUFkO0FBQ0EsVUFBSUksTUFBTSxHQUFHa1AsS0FBSyxDQUFDaEssSUFBTixDQUFXLFlBQVgsQ0FBYjtBQUVBdEYsT0FBQyxDQUFDSSxNQUFELENBQUQsQ0FBVUgsRUFBVixDQUFhLG9CQUFiLEVBQW1DLFVBQVVDLENBQVYsRUFBYTtBQUM5Q3FPLGdCQUFRLENBQUNlLEtBQUQsQ0FBUixJQUFtQkEsS0FBSyxDQUFDdk0sT0FBTixDQUFjLG9CQUFkLENBQW5CO0FBQ0QsT0FGRDtBQUdELEtBUEQsRUFkMEMsQ0F1QjFDOztBQUNBLFNBQUt3TSxPQUFMLENBQWFQLE1BQWIsQ0FBb0IsWUFBWTtBQUM5QixhQUFPVCxRQUFRLENBQUN2TyxDQUFDLENBQUMsSUFBRCxDQUFGLENBQVIsSUFBcUIsQ0FBQ0EsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0IsT0FBUixDQUFnQixZQUFoQixFQUE4QlIsTUFBM0Q7QUFDRCxLQUZELEVBRUdpQyxPQUZILENBRVcsVUFGWDtBQUlBLFNBQUsrTCxRQUFMLENBQWN4SixJQUFkLENBQW1CLFlBQW5CLEVBQWlDLElBQWpDLEVBNUIwQyxDQTRCSDtBQUN4QyxHQTdCRDs7QUErQkFtSixXQUFTLENBQUNlLE9BQVYsR0FBb0IsUUFBcEI7QUFFQWYsV0FBUyxDQUFDZ0IsY0FBVixHQUEyQixzRUFBM0I7QUFFQWhCLFdBQVMsQ0FBQ2lCLFlBQVYsR0FBeUIsRUFBekI7QUFFQWpCLFdBQVMsQ0FBQ2tCLFFBQVYsR0FBcUI7QUFDbkI3QyxTQUFLLEVBQUUsR0FEWTtBQUVuQnZNLFFBQUksRUFBRSxLQUZhO0FBR25CcVAsV0FBTyxFQUFFLElBSFU7QUFJbkJoTSxTQUFLLEVBQUUsSUFKWTtBQUtuQmlMLFVBQU0sRUFBRSxFQUxXO0FBTW5CZ0IsVUFBTSxFQUFFO0FBQ05DLFdBQUssRUFBRSxnQkFERDtBQUVOQyxlQUFTLEVBQUU7QUFGTCxLQU5XO0FBVW5CQyxZQUFRLEVBQUU7QUFDUjNHLGFBQU8sRUFBRSxjQUREO0FBRVI2QyxXQUFLLEVBQUU7QUFGQztBQVZTLEdBQXJCO0FBZ0JBdUMsV0FBUyxDQUFDRyxVQUFWLEdBQXVCO0FBQ3JCLGNBQVUsZ0JBQVVKLEdBQVYsRUFBZTtBQUN2QixVQUFJTixFQUFFLEdBQUdNLEdBQUcsQ0FBQyxDQUFELENBQVo7O0FBQ0EsVUFBSU4sRUFBRSxDQUFDK0IsYUFBUCxFQUFzQjtBQUNwQixlQUFPLENBQUMvQixFQUFFLENBQUMrQixhQUFILEVBQUQsSUFBdUIsQ0FBQy9CLEVBQUUsQ0FBQ2dDLFFBQUgsQ0FBWUMsS0FBcEMsS0FBOENqQyxFQUFFLENBQUNrQyxpQkFBSCxJQUF3QixRQUF0RSxDQUFQO0FBQ0Q7QUFDRixLQU5vQjtBQU9yQixhQUFTLGVBQVU1QixHQUFWLEVBQWU7QUFDdEIsVUFBSXBPLE1BQU0sR0FBR29PLEdBQUcsQ0FBQ2xKLElBQUosQ0FBUyxZQUFULENBQWI7QUFDQSxhQUFPa0osR0FBRyxDQUFDekksR0FBSixPQUFjL0YsQ0FBQyxDQUFDSSxNQUFELENBQUQsQ0FBVTJGLEdBQVYsRUFBZCxJQUFpQzBJLFNBQVMsQ0FBQ2tCLFFBQVYsQ0FBbUJFLE1BQW5CLENBQTBCQyxLQUFsRTtBQUNELEtBVm9CO0FBV3JCLGlCQUFhLG1CQUFVdEIsR0FBVixFQUFlO0FBQzFCLFVBQUl1QixTQUFTLEdBQUd2QixHQUFHLENBQUNsSixJQUFKLENBQVMsZ0JBQVQsQ0FBaEI7QUFDQSxhQUFPa0osR0FBRyxDQUFDekksR0FBSixHQUFVakYsTUFBVixHQUFtQmlQLFNBQW5CLElBQWdDdEIsU0FBUyxDQUFDa0IsUUFBVixDQUFtQkUsTUFBbkIsQ0FBMEJFLFNBQWpFO0FBQ0Q7QUFkb0IsR0FBdkI7O0FBaUJBdEIsV0FBUyxDQUFDNEIsU0FBVixDQUFvQnJMLE1BQXBCLEdBQTZCLFlBQVk7QUFDdkMsUUFBSXNMLElBQUksR0FBRyxJQUFYO0FBRUEsU0FBS2YsT0FBTCxHQUFlLEtBQUtULFFBQUwsQ0FBY3ZOLElBQWQsQ0FBbUJrTixTQUFTLENBQUNnQixjQUE3QixFQUNaUixHQURZLENBQ1IsS0FBS0gsUUFBTCxDQUFjdk4sSUFBZCxDQUFtQix3QkFBbkIsQ0FEUSxFQUVabUUsR0FGWSxDQUVSLEtBQUtvSixRQUFMLENBQWN2TixJQUFkLENBQW1CLHlCQUFuQixFQUNGa0IsSUFERSxDQUNHLFlBQVk7QUFBRTZOLFVBQUksQ0FBQ0MsV0FBTCxDQUFpQnZRLENBQUMsQ0FBQyxJQUFELENBQWxCO0FBQTJCLEtBRDVDLENBRlEsQ0FBZjtBQU1BLFNBQUt3USxZQUFMO0FBRUEsV0FBTyxJQUFQO0FBQ0QsR0FaRDs7QUFjQS9CLFdBQVMsQ0FBQzRCLFNBQVYsQ0FBb0JsQixPQUFwQixHQUE4QixVQUFValAsQ0FBVixFQUFhO0FBQ3pDLFFBQUlvUSxJQUFJLEdBQVUsSUFBbEI7QUFDQSxRQUFJOUIsR0FBRyxHQUFXeE8sQ0FBQyxDQUFDRSxDQUFDLENBQUNFLE1BQUgsQ0FBbkI7QUFDQSxRQUFJcVEsV0FBVyxHQUFHdlEsQ0FBQyxDQUFDa0csSUFBRixLQUFXLFVBQTdCO0FBRUEsUUFBSSxDQUFDLEtBQUttSixPQUFMLENBQWF0TCxFQUFiLENBQWdCdUssR0FBaEIsQ0FBTCxFQUEyQjtBQUUzQixTQUFLa0MsYUFBTCxDQUFtQmxDLEdBQW5CLEVBQXdCaUMsV0FBeEIsRUFBcUNFLElBQXJDLENBQTBDLFlBQVk7QUFDcERMLFVBQUksQ0FBQ0UsWUFBTDtBQUNELEtBRkQ7QUFHRCxHQVZEOztBQVlBL0IsV0FBUyxDQUFDNEIsU0FBVixDQUFvQkssYUFBcEIsR0FBb0MsVUFBVWxDLEdBQVYsRUFBZWlDLFdBQWYsRUFBNEI7QUFDOUQsUUFBSTVFLEtBQUssR0FBUTBDLFFBQVEsQ0FBQ0MsR0FBRCxDQUF6QjtBQUNBLFFBQUlvQyxVQUFVLEdBQUdwQyxHQUFHLENBQUM1TCxJQUFKLENBQVMscUJBQVQsQ0FBakI7QUFFQSxRQUFJNEwsR0FBRyxDQUFDdkssRUFBSixDQUFPLGdCQUFQLENBQUosRUFBOEJ1SyxHQUFHLEdBQUcsS0FBS00sUUFBTCxDQUFjdk4sSUFBZCxDQUFtQixpQkFBaUJpTixHQUFHLENBQUNsSixJQUFKLENBQVMsTUFBVCxDQUFqQixHQUFvQyxJQUF2RCxDQUFOO0FBRTlCLFFBQUlwRixDQUFDLEdBQUdGLENBQUMsQ0FBQzZRLEtBQUYsQ0FBUSx1QkFBUixFQUFpQztBQUFDQyxtQkFBYSxFQUFFdEMsR0FBRyxDQUFDLENBQUQ7QUFBbkIsS0FBakMsQ0FBUjtBQUNBLFNBQUtNLFFBQUwsQ0FBYy9MLE9BQWQsQ0FBc0I3QyxDQUF0QjtBQUNBLFFBQUlBLENBQUMsQ0FBQzZRLGtCQUFGLEVBQUosRUFBNEI7QUFFNUIsUUFBSVQsSUFBSSxHQUFHLElBQVg7QUFFQSxXQUFPLEtBQUtVLGFBQUwsQ0FBbUJ4QyxHQUFuQixFQUF3Qm1DLElBQXhCLENBQTZCLFVBQVVkLE1BQVYsRUFBa0I7QUFDcERyQixTQUFHLENBQUM1TCxJQUFKLENBQVMscUJBQVQsRUFBZ0NpTixNQUFoQztBQUVBQSxZQUFNLENBQUMvTyxNQUFQLEdBQ0kyUCxXQUFXLEdBQUdILElBQUksQ0FBQ1csS0FBTCxDQUFXekMsR0FBWCxFQUFnQjhCLElBQUksQ0FBQ1ksVUFBckIsQ0FBSCxHQUFzQ1osSUFBSSxDQUFDWSxVQUFMLENBQWdCMUMsR0FBaEIsQ0FEckQsR0FFSThCLElBQUksQ0FBQ0MsV0FBTCxDQUFpQi9CLEdBQWpCLENBRko7O0FBSUEsVUFBSSxDQUFDb0MsVUFBRCxJQUFlZixNQUFNLENBQUNoSSxRQUFQLE9BQXNCK0ksVUFBVSxDQUFDL0ksUUFBWCxFQUF6QyxFQUFnRTtBQUM5RDNILFNBQUMsR0FBRzJQLE1BQU0sQ0FBQy9PLE1BQVAsR0FDQWQsQ0FBQyxDQUFDNlEsS0FBRixDQUFRLHNCQUFSLEVBQWdDO0FBQUNDLHVCQUFhLEVBQUV0QyxHQUFHLENBQUMsQ0FBRCxDQUFuQjtBQUF3QjJDLGdCQUFNLEVBQUV0QjtBQUFoQyxTQUFoQyxDQURBLEdBRUE3UCxDQUFDLENBQUM2USxLQUFGLENBQVEsb0JBQVIsRUFBOEI7QUFBQ0MsdUJBQWEsRUFBRXRDLEdBQUcsQ0FBQyxDQUFELENBQW5CO0FBQXdCMkMsZ0JBQU0sRUFBRVA7QUFBaEMsU0FBOUIsQ0FGSjtBQUlBTixZQUFJLENBQUN4QixRQUFMLENBQWMvTCxPQUFkLENBQXNCN0MsQ0FBdEI7QUFDRDs7QUFFRG9RLFVBQUksQ0FBQ0UsWUFBTDtBQUVBRixVQUFJLENBQUN4QixRQUFMLENBQWMvTCxPQUFkLENBQXNCL0MsQ0FBQyxDQUFDNlEsS0FBRixDQUFRLHdCQUFSLEVBQWtDO0FBQUNDLHFCQUFhLEVBQUV0QyxHQUFHLENBQUMsQ0FBRDtBQUFuQixPQUFsQyxDQUF0QjtBQUNELEtBbEJNLENBQVA7QUFtQkQsR0EvQkQ7O0FBa0NBQyxXQUFTLENBQUM0QixTQUFWLENBQW9CVyxhQUFwQixHQUFvQyxVQUFVeEMsR0FBVixFQUFlO0FBQ2pELFFBQUlxQixNQUFNLEdBQUssRUFBZjtBQUNBLFFBQUl1QixRQUFRLEdBQUdwUixDQUFDLENBQUNxUixRQUFGLEVBQWY7QUFFQTdDLE9BQUcsQ0FBQzVMLElBQUosQ0FBUyx1QkFBVCxLQUFxQzRMLEdBQUcsQ0FBQzVMLElBQUosQ0FBUyx1QkFBVCxFQUFrQzBPLE1BQWxDLEVBQXJDO0FBQ0E5QyxPQUFHLENBQUM1TCxJQUFKLENBQVMsdUJBQVQsRUFBa0N3TyxRQUFsQzs7QUFFQSxhQUFTRyx5QkFBVCxDQUFtQ25ELEdBQW5DLEVBQXdDO0FBQ3RDLGFBQU9JLEdBQUcsQ0FBQ2xKLElBQUosQ0FBUyxVQUFVOEksR0FBVixHQUFnQixRQUF6QixDQUFQO0FBQ0Q7O0FBRUQsYUFBU29ELHFCQUFULEdBQWlDO0FBQy9CLFVBQUl0QixRQUFRLEdBQUcxQixHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8wQixRQUF0QjtBQUNBLGFBQU9BLFFBQVEsQ0FBQ3VCLFlBQVQsR0FBMkJqRCxHQUFHLENBQUNsSixJQUFKLENBQVMsaUJBQVQsQ0FBM0IsR0FDQTRLLFFBQVEsQ0FBQ3dCLGVBQVQsR0FBMkJsRCxHQUFHLENBQUNsSixJQUFKLENBQVMsb0JBQVQsQ0FBM0IsR0FDQTRLLFFBQVEsQ0FBQ3lCLFlBQVQsR0FBMkJuRCxHQUFHLENBQUNsSixJQUFKLENBQVMsaUJBQVQsQ0FBM0IsR0FDQTRLLFFBQVEsQ0FBQzBCLGFBQVQsR0FBMkJwRCxHQUFHLENBQUNsSixJQUFKLENBQVMsZ0JBQVQsQ0FBM0IsR0FDQTRLLFFBQVEsQ0FBQzJCLGNBQVQsR0FBMkJyRCxHQUFHLENBQUNsSixJQUFKLENBQVMsZ0JBQVQsQ0FBM0IsR0FDQTRLLFFBQVEsQ0FBQzRCLFlBQVQsR0FBMkJ0RCxHQUFHLENBQUNsSixJQUFKLENBQVMscUJBQVQsQ0FBM0IsR0FDMkIsSUFObEM7QUFPRDs7QUFFRCxhQUFTeU0sZUFBVCxHQUEyQjtBQUN6QixhQUFPdkQsR0FBRyxDQUFDbEosSUFBSixDQUFTLFlBQVQsQ0FBUDtBQUNEOztBQUVELGFBQVMwTSxlQUFULENBQXlCNUQsR0FBekIsRUFBOEI7QUFDNUIsYUFBT21ELHlCQUF5QixDQUFDbkQsR0FBRCxDQUF6QixJQUNBb0QscUJBQXFCLEVBRHJCLElBRUFPLGVBQWUsRUFGdEI7QUFHRDs7QUFFRC9SLEtBQUMsQ0FBQ3lDLElBQUYsQ0FBTyxLQUFLa00sVUFBWixFQUF3QjNPLENBQUMsQ0FBQ2tQLEtBQUYsQ0FBUSxVQUFVZCxHQUFWLEVBQWV4TSxTQUFmLEVBQTBCO0FBQ3hELFVBQUlzSyxLQUFLLEdBQUcsSUFBWjs7QUFDQSxVQUFJLENBQUNxQyxRQUFRLENBQUNDLEdBQUQsQ0FBUixJQUFpQkEsR0FBRyxDQUFDbEosSUFBSixDQUFTLFVBQVQsQ0FBbEIsTUFDQ2tKLEdBQUcsQ0FBQ2xKLElBQUosQ0FBUyxVQUFVOEksR0FBbkIsTUFBNEJ2SSxTQUE1QixJQUF5Q3VJLEdBQUcsSUFBSSxRQURqRCxNQUVDbEMsS0FBSyxHQUFHdEssU0FBUyxDQUFDMkcsSUFBVixDQUFlLElBQWYsRUFBcUJpRyxHQUFyQixDQUZULENBQUosRUFFeUM7QUFDdEN0QyxhQUFLLEdBQUc4RixlQUFlLENBQUM1RCxHQUFELENBQWYsSUFBd0JsQyxLQUFoQztBQUNELFNBQUMsQ0FBQzJELE1BQU0sQ0FBQ29DLE9BQVAsQ0FBZS9GLEtBQWYsQ0FBRixJQUEyQjJELE1BQU0sQ0FBQzlPLElBQVAsQ0FBWW1MLEtBQVosQ0FBM0I7QUFDRDtBQUNGLEtBUnVCLEVBUXJCLElBUnFCLENBQXhCOztBQVVBLFFBQUksQ0FBQzJELE1BQU0sQ0FBQy9PLE1BQVIsSUFBa0J5TixRQUFRLENBQUNDLEdBQUQsQ0FBMUIsSUFBbUNBLEdBQUcsQ0FBQ2xKLElBQUosQ0FBUyxhQUFULENBQXZDLEVBQWdFO0FBQzlELFdBQUsyTCxLQUFMLENBQVd6QyxHQUFYLEVBQWdCLFlBQVk7QUFDMUIsWUFBSTVMLElBQUksR0FBRyxFQUFYO0FBQ0FBLFlBQUksQ0FBQzRMLEdBQUcsQ0FBQ2xKLElBQUosQ0FBUyxNQUFULENBQUQsQ0FBSixHQUF5QmlKLFFBQVEsQ0FBQ0MsR0FBRCxDQUFqQztBQUNBeE8sU0FBQyxDQUFDa1MsR0FBRixDQUFNMUQsR0FBRyxDQUFDbEosSUFBSixDQUFTLGFBQVQsQ0FBTixFQUErQjFDLElBQS9CLEVBQ0d1UCxJQURILENBQ1EsVUFBVUMsS0FBVixFQUFpQkMsVUFBakIsRUFBNkJuRyxLQUE3QixFQUFvQztBQUFFMkQsZ0JBQU0sQ0FBQzlPLElBQVAsQ0FBWWlSLGVBQWUsQ0FBQyxRQUFELENBQWYsSUFBNkI5RixLQUF6QztBQUFpRCxTQUQvRixFQUVHb0csTUFGSCxDQUVVLFlBQVk7QUFBRWxCLGtCQUFRLENBQUNtQixPQUFULENBQWlCMUMsTUFBakI7QUFBeUIsU0FGakQ7QUFHRCxPQU5EO0FBT0QsS0FSRCxNQVFPdUIsUUFBUSxDQUFDbUIsT0FBVCxDQUFpQjFDLE1BQWpCOztBQUVQLFdBQU91QixRQUFRLENBQUNvQixPQUFULEVBQVA7QUFDRCxHQXJERDs7QUF1REEvRCxXQUFTLENBQUM0QixTQUFWLENBQW9Cb0MsUUFBcEIsR0FBK0IsWUFBWTtBQUN6QyxRQUFJbkMsSUFBSSxHQUFHLElBQVg7QUFFQXRRLEtBQUMsQ0FBQzBTLElBQUYsQ0FBTyxLQUFLbkQsT0FBTCxDQUFhb0QsR0FBYixDQUFpQixVQUFVekUsRUFBVixFQUFjO0FBQ3BDLGFBQU9vQyxJQUFJLENBQUNJLGFBQUwsQ0FBbUIxUSxDQUFDLENBQUMsSUFBRCxDQUFwQixFQUE0QixLQUE1QixDQUFQO0FBQ0QsS0FGTSxDQUFQLEVBRUkyTCxJQUZKLENBRVMsWUFBWTtBQUNuQjJFLFVBQUksQ0FBQ0UsWUFBTDtBQUNBRixVQUFJLENBQUNzQyxVQUFMO0FBQ0QsS0FMRDtBQU9BLFdBQU8sSUFBUDtBQUNELEdBWEQ7O0FBYUFuRSxXQUFTLENBQUM0QixTQUFWLENBQW9CdUMsVUFBcEIsR0FBaUMsWUFBWTtBQUMzQyxRQUFJLENBQUMsS0FBSzNQLE9BQUwsQ0FBYVcsS0FBbEIsRUFBeUI7QUFFekIsUUFBSWlQLE1BQU0sR0FBRyxLQUFLL0QsUUFBTCxDQUFjdk4sSUFBZCxDQUFtQix5QkFBbkIsQ0FBYjtBQUNBLFFBQUlzUixNQUFNLENBQUMvUixNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBRXpCZCxLQUFDLENBQUMsWUFBRCxDQUFELENBQWdCOFMsT0FBaEIsQ0FBd0I7QUFBQ0MsZUFBUyxFQUFFRixNQUFNLENBQUNHLE1BQVAsR0FBZ0JDLEdBQWhCLEdBQXNCeEUsU0FBUyxDQUFDaUI7QUFBNUMsS0FBeEIsRUFBbUYsR0FBbkY7QUFDQW1ELFVBQU0sQ0FBQ2pQLEtBQVA7QUFDRCxHQVJEOztBQVVBNkssV0FBUyxDQUFDNEIsU0FBVixDQUFvQmEsVUFBcEIsR0FBaUMsVUFBVTFDLEdBQVYsRUFBZTtBQUM5QyxRQUFJakIsTUFBTSxHQUFHLEtBQUt0SyxPQUFMLENBQWExQyxJQUFiLEdBQW9CLE1BQXBCLEdBQTZCLE1BQTFDO0FBQ0EsUUFBSXNQLE1BQU0sR0FBR3JCLEdBQUcsQ0FBQzVMLElBQUosQ0FBUyxxQkFBVCxDQUFiO0FBQ0EsUUFBSXNRLE1BQU0sR0FBRzFFLEdBQUcsQ0FBQ2xOLE9BQUosQ0FBWSxhQUFaLENBQWI7QUFDQSxRQUFJNlIsTUFBTSxHQUFHRCxNQUFNLENBQUMzUixJQUFQLENBQVksbUJBQVosQ0FBYjtBQUNBLFFBQUk2UixTQUFTLEdBQUdGLE1BQU0sQ0FBQzNSLElBQVAsQ0FBWSxtQkFBWixDQUFoQjtBQUVBLFFBQUksQ0FBQ3NPLE1BQU0sQ0FBQy9PLE1BQVosRUFBb0I7QUFFcEIwTixPQUFHLENBQUM3SyxRQUFKLENBQWEsWUFBYjtBQUVBa00sVUFBTSxHQUFHN1AsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUNOMkQsUUFETSxDQUNHLGVBREgsRUFFTjZFLE1BRk0sQ0FFQ3hJLENBQUMsQ0FBQzJTLEdBQUYsQ0FBTTlDLE1BQU4sRUFBYyxVQUFVM0QsS0FBVixFQUFpQjtBQUFFLGFBQU9sTSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVd1TixNQUFYLEVBQW1CckIsS0FBbkIsQ0FBUDtBQUFrQyxLQUFuRSxDQUZELENBQVQ7QUFJQWlILFVBQU0sQ0FBQ3ZRLElBQVAsQ0FBWSw4QkFBWixNQUFnRGlELFNBQWhELElBQTZEc04sTUFBTSxDQUFDdlEsSUFBUCxDQUFZLDhCQUFaLEVBQTRDdVEsTUFBTSxDQUFDNVMsSUFBUCxFQUE1QyxDQUE3RDtBQUNBNFMsVUFBTSxDQUFDbkosS0FBUCxHQUFleEIsTUFBZixDQUFzQnFILE1BQXRCO0FBQ0FxRCxVQUFNLENBQUN2UCxRQUFQLENBQWdCLHNCQUFoQjtBQUVBdVAsVUFBTSxDQUFDMVAsUUFBUCxDQUFnQixjQUFoQixLQUNLNFAsU0FBUyxDQUFDclIsV0FBVixDQUFzQixLQUFLa0IsT0FBTCxDQUFhK00sUUFBYixDQUFzQjNHLE9BQTVDLENBREwsSUFFSytKLFNBQVMsQ0FBQ3pQLFFBQVYsQ0FBbUIsS0FBS1YsT0FBTCxDQUFhK00sUUFBYixDQUFzQjlELEtBQXpDLENBRkwsSUFHS2dILE1BQU0sQ0FBQ25SLFdBQVAsQ0FBbUIsYUFBbkIsQ0FITDtBQUlELEdBdkJEOztBQXlCQTBNLFdBQVMsQ0FBQzRCLFNBQVYsQ0FBb0JFLFdBQXBCLEdBQWtDLFVBQVUvQixHQUFWLEVBQWU7QUFDL0MsUUFBSTBFLE1BQU0sR0FBRzFFLEdBQUcsQ0FBQ2xOLE9BQUosQ0FBWSxhQUFaLENBQWI7QUFDQSxRQUFJNlIsTUFBTSxHQUFHRCxNQUFNLENBQUMzUixJQUFQLENBQVksbUJBQVosQ0FBYjtBQUNBLFFBQUk2UixTQUFTLEdBQUdGLE1BQU0sQ0FBQzNSLElBQVAsQ0FBWSxtQkFBWixDQUFoQjtBQUVBaU4sT0FBRyxDQUFDek0sV0FBSixDQUFnQixZQUFoQjtBQUVBb1IsVUFBTSxDQUFDNVMsSUFBUCxDQUFZNFMsTUFBTSxDQUFDdlEsSUFBUCxDQUFZLDhCQUFaLENBQVo7QUFDQXNRLFVBQU0sQ0FBQ25SLFdBQVAsQ0FBbUIsa0NBQW5CO0FBRUFtUixVQUFNLENBQUMxUCxRQUFQLENBQWdCLGNBQWhCLEtBQ0s0UCxTQUFTLENBQUNyUixXQUFWLENBQXNCLEtBQUtrQixPQUFMLENBQWErTSxRQUFiLENBQXNCOUQsS0FBNUMsQ0FETCxJQUVLa0gsU0FBUyxDQUFDclIsV0FBVixDQUFzQixLQUFLa0IsT0FBTCxDQUFhK00sUUFBYixDQUFzQjNHLE9BQTVDLENBRkwsSUFHS2tGLFFBQVEsQ0FBQ0MsR0FBRCxDQUhiLElBSUs0RSxTQUFTLENBQUN6UCxRQUFWLENBQW1CLEtBQUtWLE9BQUwsQ0FBYStNLFFBQWIsQ0FBc0IzRyxPQUF6QyxDQUpMLElBS0s2SixNQUFNLENBQUN2UCxRQUFQLENBQWdCLGFBQWhCLENBTEw7QUFNRCxHQWhCRDs7QUFrQkE4SyxXQUFTLENBQUM0QixTQUFWLENBQW9CZ0QsU0FBcEIsR0FBZ0MsWUFBWTtBQUMxQyxhQUFTQyxXQUFULEdBQXVCO0FBQ3JCLGFBQU8sQ0FBQyxDQUFDLENBQUN0VCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxJQUFSLENBQWEscUJBQWIsS0FBdUMsRUFBeEMsRUFBNEM5QixNQUFyRDtBQUNEOztBQUVELFdBQU8sQ0FBQyxDQUFDLEtBQUt5TyxPQUFMLENBQWFQLE1BQWIsQ0FBb0JzRSxXQUFwQixFQUFpQ3hTLE1BQTFDO0FBQ0QsR0FORDs7QUFRQTJOLFdBQVMsQ0FBQzRCLFNBQVYsQ0FBb0JrRCxZQUFwQixHQUFtQyxZQUFZO0FBQzdDLGFBQVNDLGVBQVQsR0FBMkI7QUFDekIsVUFBSTNILEtBQUssR0FBRzBDLFFBQVEsQ0FBQ3ZPLENBQUMsQ0FBQyxJQUFELENBQUYsQ0FBcEI7QUFDQSxhQUFPLEVBQUUsT0FBTzZMLEtBQVAsSUFBZ0IsUUFBaEIsR0FBMkI3TCxDQUFDLENBQUMwTixJQUFGLENBQU83QixLQUFQLENBQTNCLEdBQTJDQSxLQUE3QyxDQUFQO0FBQ0Q7O0FBRUQsV0FBTyxDQUFDLENBQUMsS0FBSzBELE9BQUwsQ0FBYVAsTUFBYixDQUFvQixZQUFwQixFQUFrQ0EsTUFBbEMsQ0FBeUN3RSxlQUF6QyxFQUEwRDFTLE1BQW5FO0FBQ0QsR0FQRDs7QUFTQTJOLFdBQVMsQ0FBQzRCLFNBQVYsQ0FBb0JqQixRQUFwQixHQUErQixVQUFVbFAsQ0FBVixFQUFhO0FBQzFDLFNBQUt1UyxRQUFMO0FBQ0EsUUFBSSxLQUFLYyxZQUFMLE1BQXVCLEtBQUtGLFNBQUwsRUFBM0IsRUFBNkNuVCxDQUFDLENBQUN1QixjQUFGO0FBQzlDLEdBSEQ7O0FBS0FnTixXQUFTLENBQUM0QixTQUFWLENBQW9CRyxZQUFwQixHQUFtQyxZQUFZO0FBQzdDLFFBQUksQ0FBQyxLQUFLdk4sT0FBTCxDQUFhMk0sT0FBbEIsRUFBMkI7QUFDM0IsU0FBS2IsSUFBTCxDQUFVak4sV0FBVixDQUFzQixVQUF0QixFQUFrQyxLQUFLeVIsWUFBTCxNQUF1QixLQUFLRixTQUFMLEVBQXpEO0FBQ0QsR0FIRDs7QUFLQTVFLFdBQVMsQ0FBQzRCLFNBQVYsQ0FBb0JZLEtBQXBCLEdBQTRCLFVBQVV6QyxHQUFWLEVBQWVpRixRQUFmLEVBQXlCO0FBQ25EQSxZQUFRLEdBQUd6VCxDQUFDLENBQUNrUCxLQUFGLENBQVF1RSxRQUFSLEVBQWtCLElBQWxCLEVBQXdCakYsR0FBeEIsQ0FBWDtBQUNBLFFBQUksQ0FBQyxLQUFLdkwsT0FBTCxDQUFhNkosS0FBbEIsRUFBeUIsT0FBTzJHLFFBQVEsRUFBZjtBQUN6QkMsVUFBTSxDQUFDQyxZQUFQLENBQW9CbkYsR0FBRyxDQUFDNUwsSUFBSixDQUFTLHNCQUFULENBQXBCO0FBQ0E0TCxPQUFHLENBQUM1TCxJQUFKLENBQVMsc0JBQVQsRUFBaUM4USxNQUFNLENBQUNFLFVBQVAsQ0FBa0JILFFBQWxCLEVBQTRCLEtBQUt4USxPQUFMLENBQWE2SixLQUF6QyxDQUFqQztBQUNELEdBTEQ7O0FBT0EyQixXQUFTLENBQUM0QixTQUFWLENBQW9CaEIsS0FBcEIsR0FBNEIsWUFBWTtBQUN0QyxTQUFLUCxRQUFMLENBQWN2TixJQUFkLENBQW1CLG1CQUFuQixFQUNHUSxXQURILENBQ2UsS0FBS2tCLE9BQUwsQ0FBYStNLFFBQWIsQ0FBc0I5RCxLQURyQyxFQUVHbkssV0FGSCxDQUVlLEtBQUtrQixPQUFMLENBQWErTSxRQUFiLENBQXNCM0csT0FGckM7QUFJQSxTQUFLa0csT0FBTCxDQUNHc0UsVUFESCxDQUNjLENBQUMscUJBQUQsRUFBd0IsdUJBQXhCLENBRGQsRUFFRzlSLFdBRkgsQ0FFZSxZQUZmLEVBR0dVLElBSEgsQ0FHUSxZQUFZO0FBQ2hCLFVBQUk2TSxLQUFLLEdBQUd0UCxDQUFDLENBQUMsSUFBRCxDQUFiO0FBQ0EsVUFBSThULE9BQU8sR0FBR3hFLEtBQUssQ0FBQzFNLElBQU4sQ0FBVyxzQkFBWCxDQUFkO0FBQ0E4USxZQUFNLENBQUNDLFlBQVAsQ0FBb0JHLE9BQXBCLEtBQWdDeEUsS0FBSyxDQUFDdUUsVUFBTixDQUFpQixzQkFBakIsQ0FBaEM7QUFDRCxLQVBIO0FBU0EsU0FBSy9FLFFBQUwsQ0FBY3ZOLElBQWQsQ0FBbUIsbUJBQW5CLEVBQ0drQixJQURILENBQ1EsWUFBWTtBQUNoQixVQUFJNk0sS0FBSyxHQUFHdFAsQ0FBQyxDQUFDLElBQUQsQ0FBYjtBQUNBLFVBQUkrVCxlQUFlLEdBQUd6RSxLQUFLLENBQUMxTSxJQUFOLENBQVcsOEJBQVgsQ0FBdEI7QUFFQTBNLFdBQUssQ0FDRnVFLFVBREgsQ0FDYyw4QkFEZCxFQUVHdFQsSUFGSCxDQUVRd1QsZUFGUjtBQUdELEtBUkg7QUFVQSxTQUFLaEYsSUFBTCxDQUFVaE4sV0FBVixDQUFzQixVQUF0QjtBQUVBLFNBQUsrTSxRQUFMLENBQWN2TixJQUFkLENBQW1CLHVDQUFuQixFQUE0RFEsV0FBNUQsQ0FBd0Usa0NBQXhFO0FBRUEsV0FBTyxJQUFQO0FBQ0QsR0E3QkQ7O0FBK0JBME0sV0FBUyxDQUFDNEIsU0FBVixDQUFvQm5MLE9BQXBCLEdBQThCLFlBQVk7QUFDeEMsU0FBS21LLEtBQUw7QUFFQSxTQUFLUCxRQUFMLENBQ0drRixVQURILENBQ2MsWUFEZCxFQUVHSCxVQUZILENBRWMsY0FGZCxFQUdHSSxHQUhILENBR08sZUFIUDtBQUtBLFNBQUsxRSxPQUFMLENBQ0cwRSxHQURILENBQ08sZUFEUDtBQUdBLFNBQUtoUixPQUFMLEdBQWtCLElBQWxCO0FBQ0EsU0FBSzBMLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxTQUFLRyxRQUFMLEdBQWtCLElBQWxCO0FBQ0EsU0FBS0MsSUFBTCxHQUFrQixJQUFsQjtBQUNBLFNBQUtRLE9BQUwsR0FBa0IsSUFBbEI7QUFFQSxXQUFPLElBQVA7QUFDRCxHQWxCRCxDQXpVWSxDQTZWWjtBQUNBOzs7QUFHQSxXQUFTMkUsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDdEIsV0FBTyxLQUFLMVIsSUFBTCxDQUFVLFlBQVk7QUFDM0IsVUFBSTZNLEtBQUssR0FBS3RQLENBQUMsQ0FBQyxJQUFELENBQWY7QUFDQSxVQUFJaUQsT0FBTyxHQUFHakQsQ0FBQyxDQUFDaUksTUFBRixDQUFTLEVBQVQsRUFBYXdHLFNBQVMsQ0FBQ2tCLFFBQXZCLEVBQWlDTCxLQUFLLENBQUMxTSxJQUFOLEVBQWpDLEVBQStDLFFBQU91UixNQUFQLEtBQWlCLFFBQWpCLElBQTZCQSxNQUE1RSxDQUFkO0FBQ0EsVUFBSXZSLElBQUksR0FBTTBNLEtBQUssQ0FBQzFNLElBQU4sQ0FBVyxjQUFYLENBQWQ7QUFFQSxVQUFJLENBQUNBLElBQUQsSUFBU3VSLE1BQU0sSUFBSSxTQUF2QixFQUFrQztBQUNsQyxVQUFJLENBQUN2UixJQUFMLEVBQVcwTSxLQUFLLENBQUMxTSxJQUFOLENBQVcsY0FBWCxFQUE0QkEsSUFBSSxHQUFHLElBQUk2TCxTQUFKLENBQWMsSUFBZCxFQUFvQnhMLE9BQXBCLENBQW5DO0FBQ1gsVUFBSSxPQUFPa1IsTUFBUCxJQUFpQixRQUFyQixFQUErQnZSLElBQUksQ0FBQ3VSLE1BQUQsQ0FBSjtBQUNoQyxLQVJNLENBQVA7QUFTRDs7QUFFRCxNQUFJQyxHQUFHLEdBQUdwVSxDQUFDLENBQUMyTixFQUFGLENBQUsvTCxTQUFmO0FBRUE1QixHQUFDLENBQUMyTixFQUFGLENBQUsvTCxTQUFMLEdBQTZCc1MsTUFBN0I7QUFDQWxVLEdBQUMsQ0FBQzJOLEVBQUYsQ0FBSy9MLFNBQUwsQ0FBZXlTLFdBQWYsR0FBNkI1RixTQUE3QixDQWhYWSxDQW1YWjtBQUNBOztBQUVBek8sR0FBQyxDQUFDMk4sRUFBRixDQUFLL0wsU0FBTCxDQUFlMFMsVUFBZixHQUE0QixZQUFZO0FBQ3RDdFUsS0FBQyxDQUFDMk4sRUFBRixDQUFLL0wsU0FBTCxHQUFpQndTLEdBQWpCO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FIRCxDQXRYWSxDQTRYWjtBQUNBOzs7QUFFQXBVLEdBQUMsQ0FBQzBULE1BQUQsQ0FBRCxDQUFVelQsRUFBVixDQUFhLE1BQWIsRUFBcUIsWUFBWTtBQUMvQkQsS0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUN5QyxJQUFuQyxDQUF3QyxZQUFZO0FBQ2xELFVBQUk4UixLQUFLLEdBQUd2VSxDQUFDLENBQUMsSUFBRCxDQUFiO0FBQ0FrVSxZQUFNLENBQUMzTCxJQUFQLENBQVlnTSxLQUFaLEVBQW1CQSxLQUFLLENBQUMzUixJQUFOLEVBQW5CO0FBQ0QsS0FIRDtBQUlELEdBTEQ7QUFPRCxDQXRZQSxDQXNZQ2tHLE1BdFlELENBQUQsQzs7Ozs7Ozs7Ozs7O0FDTkEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQU1BLENBQUMsVUFBUzBMLENBQVQsRUFBVztBQUFDLFVBQXNDQyxpQ0FBTyxDQUFDLHlFQUFELENBQUQsb0NBQVlELENBQVo7QUFBQTtBQUFBO0FBQUEsb0dBQTVDLEdBQTJEQSxTQUEzRDtBQUFnSCxDQUE1SCxDQUE2SCxVQUFTQSxDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFdBQVNDLENBQVQsR0FBWTtBQUFDLFdBQU8sSUFBSUMsSUFBSixDQUFTQSxJQUFJLENBQUNDLEdBQUwsQ0FBU0MsS0FBVCxDQUFlRixJQUFmLEVBQW9CRyxTQUFwQixDQUFULENBQVA7QUFBZ0Q7O0FBQUEsV0FBU0MsQ0FBVCxHQUFZO0FBQUMsUUFBSVIsQ0FBQyxHQUFDLElBQUlJLElBQUosRUFBTjtBQUFlLFdBQU9ELENBQUMsQ0FBQ0gsQ0FBQyxDQUFDUyxXQUFGLEVBQUQsRUFBaUJULENBQUMsQ0FBQ1UsUUFBRixFQUFqQixFQUE4QlYsQ0FBQyxDQUFDVyxPQUFGLEVBQTlCLENBQVI7QUFBbUQ7O0FBQUEsV0FBU2pWLENBQVQsQ0FBV3NVLENBQVgsRUFBYUUsQ0FBYixFQUFlO0FBQUMsV0FBT0YsQ0FBQyxDQUFDWSxjQUFGLE9BQXFCVixDQUFDLENBQUNVLGNBQUYsRUFBckIsSUFBeUNaLENBQUMsQ0FBQ2EsV0FBRixPQUFrQlgsQ0FBQyxDQUFDVyxXQUFGLEVBQTNELElBQTRFYixDQUFDLENBQUNjLFVBQUYsT0FBaUJaLENBQUMsQ0FBQ1ksVUFBRixFQUFwRztBQUFtSDs7QUFBQSxXQUFTQyxDQUFULENBQVdaLENBQVgsRUFBYUssQ0FBYixFQUFlO0FBQUMsV0FBTyxZQUFVO0FBQUMsYUFBT0EsQ0FBQyxLQUFHTixDQUFKLElBQU9GLENBQUMsQ0FBQzdHLEVBQUYsQ0FBS3BLLFVBQUwsQ0FBZ0JpUyxVQUFoQixDQUEyQlIsQ0FBM0IsQ0FBUCxFQUFxQyxLQUFLTCxDQUFMLEVBQVFHLEtBQVIsQ0FBYyxJQUFkLEVBQW1CQyxTQUFuQixDQUE1QztBQUEwRSxLQUE1RjtBQUE2Rjs7QUFBQSxXQUFTVSxDQUFULENBQVdqQixDQUFYLEVBQWE7QUFBQyxXQUFPQSxDQUFDLElBQUUsQ0FBQ2tCLEtBQUssQ0FBQ2xCLENBQUMsQ0FBQ21CLE9BQUYsRUFBRCxDQUFoQjtBQUE4Qjs7QUFBQSxXQUFTQyxDQUFULENBQVdsQixDQUFYLEVBQWFDLENBQWIsRUFBZTtBQUFDLGFBQVNLLENBQVQsQ0FBV1IsQ0FBWCxFQUFhRSxDQUFiLEVBQWU7QUFBQyxhQUFPQSxDQUFDLENBQUNtQixXQUFGLEVBQVA7QUFBdUI7O0FBQUEsUUFBSTNWLENBQUo7QUFBQSxRQUFNcVYsQ0FBQyxHQUFDZixDQUFDLENBQUNFLENBQUQsQ0FBRCxDQUFLOVIsSUFBTCxFQUFSO0FBQUEsUUFBb0I2UyxDQUFDLEdBQUMsRUFBdEI7QUFBQSxRQUF5QkcsQ0FBQyxHQUFDLElBQUlFLE1BQUosQ0FBVyxNQUFJbkIsQ0FBQyxDQUFDa0IsV0FBRixFQUFKLEdBQW9CLFNBQS9CLENBQTNCO0FBQXFFbEIsS0FBQyxHQUFDLElBQUltQixNQUFKLENBQVcsTUFBSW5CLENBQUMsQ0FBQ2tCLFdBQUYsRUFBZixDQUFGOztBQUFrQyxTQUFJLElBQUloVixDQUFSLElBQWEwVSxDQUFiO0FBQWVaLE9BQUMsQ0FBQ29CLElBQUYsQ0FBT2xWLENBQVAsTUFBWVgsQ0FBQyxHQUFDVyxDQUFDLENBQUNpSCxPQUFGLENBQVU4TixDQUFWLEVBQVlaLENBQVosQ0FBRixFQUFpQlMsQ0FBQyxDQUFDdlYsQ0FBRCxDQUFELEdBQUtxVixDQUFDLENBQUMxVSxDQUFELENBQW5DO0FBQWY7O0FBQXVELFdBQU80VSxDQUFQO0FBQVM7O0FBQUEsV0FBUzVVLENBQVQsQ0FBVzZULENBQVgsRUFBYTtBQUFDLFFBQUlDLENBQUMsR0FBQyxFQUFOOztBQUFTLFFBQUdxQixDQUFDLENBQUN0QixDQUFELENBQUQsS0FBT0EsQ0FBQyxHQUFDQSxDQUFDLENBQUNsSyxLQUFGLENBQVEsR0FBUixFQUFhLENBQWIsQ0FBRixFQUFrQndMLENBQUMsQ0FBQ3RCLENBQUQsQ0FBMUIsQ0FBSCxFQUFrQztBQUFDLFVBQUlNLENBQUMsR0FBQ2dCLENBQUMsQ0FBQ3RCLENBQUQsQ0FBUDtBQUFXLGFBQU9GLENBQUMsQ0FBQy9SLElBQUYsQ0FBT3dULENBQVAsRUFBUyxVQUFTekIsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQ0EsU0FBQyxJQUFJTSxDQUFMLEtBQVNMLENBQUMsQ0FBQ0QsQ0FBRCxDQUFELEdBQUtNLENBQUMsQ0FBQ04sQ0FBRCxDQUFmO0FBQW9CLE9BQTNDLEdBQTZDQyxDQUFwRDtBQUFzRDtBQUFDOztBQUFBLE1BQUl1QixDQUFDLEdBQUMsWUFBVTtBQUFDLFFBQUl4QixDQUFDLEdBQUM7QUFBQ3hDLFNBQUcsRUFBQyxhQUFTc0MsQ0FBVCxFQUFXO0FBQUMsZUFBTyxLQUFLMkIsS0FBTCxDQUFXM0IsQ0FBWCxFQUFjLENBQWQsQ0FBUDtBQUF3QixPQUF6QztBQUEwQzRCLGNBQVEsRUFBQyxrQkFBUzVCLENBQVQsRUFBVztBQUFDLGFBQUksSUFBSUUsQ0FBQyxHQUFDRixDQUFDLElBQUVBLENBQUMsQ0FBQzZCLE9BQUYsRUFBVCxFQUFxQjFCLENBQUMsR0FBQyxDQUF2QixFQUF5QkssQ0FBQyxHQUFDLEtBQUtsVSxNQUFwQyxFQUEyQzZULENBQUMsR0FBQ0ssQ0FBN0MsRUFBK0NMLENBQUMsRUFBaEQ7QUFBbUQsY0FBRyxLQUFHLEtBQUtBLENBQUwsRUFBUTBCLE9BQVIsS0FBa0IzQixDQUFyQixJQUF3QixLQUFLQyxDQUFMLEVBQVEwQixPQUFSLEtBQWtCM0IsQ0FBbEIsR0FBb0IsS0FBL0MsRUFBcUQsT0FBT0MsQ0FBUDtBQUF4Rzs7QUFBaUgsZUFBTSxDQUFDLENBQVA7QUFBUyxPQUF6TDtBQUEwTDlQLFlBQU0sRUFBQyxnQkFBUzJQLENBQVQsRUFBVztBQUFDLGFBQUs4QixNQUFMLENBQVk5QixDQUFaLEVBQWMsQ0FBZDtBQUFpQixPQUE5TjtBQUErTjFNLGFBQU8sRUFBQyxpQkFBUzRNLENBQVQsRUFBVztBQUFDQSxTQUFDLEtBQUdGLENBQUMsQ0FBQytCLE9BQUYsQ0FBVTdCLENBQVYsTUFBZUEsQ0FBQyxHQUFDLENBQUNBLENBQUQsQ0FBakIsR0FBc0IsS0FBSzhCLEtBQUwsRUFBdEIsRUFBbUMsS0FBS3pWLElBQUwsQ0FBVStULEtBQVYsQ0FBZ0IsSUFBaEIsRUFBcUJKLENBQXJCLENBQXRDLENBQUQ7QUFBZ0UsT0FBblQ7QUFBb1Q4QixXQUFLLEVBQUMsaUJBQVU7QUFBQyxhQUFLMVYsTUFBTCxHQUFZLENBQVo7QUFBYyxPQUFuVjtBQUFvVjJWLFVBQUksRUFBQyxnQkFBVTtBQUFDLFlBQUlqQyxDQUFDLEdBQUMsSUFBSTBCLENBQUosRUFBTjtBQUFZLGVBQU8xQixDQUFDLENBQUMxTSxPQUFGLENBQVUsSUFBVixHQUFnQjBNLENBQXZCO0FBQXlCO0FBQXpZLEtBQU47QUFBaVosV0FBTyxZQUFVO0FBQUMsVUFBSUcsQ0FBQyxHQUFDLEVBQU47QUFBUyxhQUFPQSxDQUFDLENBQUM1VCxJQUFGLENBQU8rVCxLQUFQLENBQWFILENBQWIsRUFBZUksU0FBZixHQUEwQlAsQ0FBQyxDQUFDdk0sTUFBRixDQUFTME0sQ0FBVCxFQUFXRCxDQUFYLENBQTFCLEVBQXdDQyxDQUEvQztBQUFpRCxLQUE1RTtBQUE2RSxHQUF6ZSxFQUFOO0FBQUEsTUFBa2YrQixDQUFDLEdBQUMsU0FBRkEsQ0FBRSxDQUFTaEMsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQ0gsS0FBQyxDQUFDNVIsSUFBRixDQUFPOFIsQ0FBUCxFQUFTLFlBQVQsRUFBc0IsSUFBdEIsR0FBNEIsS0FBS2lDLGdCQUFMLENBQXNCaEMsQ0FBdEIsQ0FBNUIsRUFBcUQsS0FBS2lDLEtBQUwsR0FBVyxJQUFJVixDQUFKLEVBQWhFLEVBQXNFLEtBQUtXLFFBQUwsR0FBYyxLQUFLQyxDQUFMLENBQU9DLGVBQTNGLEVBQTJHLEtBQUtDLFNBQUwsR0FBZSxJQUExSCxFQUErSCxLQUFLdEksT0FBTCxHQUFhOEYsQ0FBQyxDQUFDRSxDQUFELENBQTdJLEVBQWlKLEtBQUt1QyxPQUFMLEdBQWEsS0FBS3ZJLE9BQUwsQ0FBYXpLLEVBQWIsQ0FBZ0IsT0FBaEIsQ0FBOUosRUFBdUwsS0FBS2lULFVBQUwsR0FBZ0IsS0FBS0QsT0FBTCxHQUFhLEtBQUt2SSxPQUFsQixHQUEwQixLQUFLQSxPQUFMLENBQWFuTixJQUFiLENBQWtCLE9BQWxCLENBQWpPLEVBQTRQLEtBQUs0VixTQUFMLEdBQWUsQ0FBQyxDQUFDLEtBQUt6SSxPQUFMLENBQWFsTCxRQUFiLENBQXNCLE1BQXRCLENBQUYsSUFBaUMsS0FBS2tMLE9BQUwsQ0FBYW5OLElBQWIsQ0FBa0IsbUNBQWxCLENBQTVTLEVBQW1XLEtBQUs0VixTQUFMLElBQWdCLE1BQUksS0FBS0EsU0FBTCxDQUFlclcsTUFBbkMsS0FBNEMsS0FBS3FXLFNBQUwsR0FBZSxDQUFDLENBQTVELENBQW5XLEVBQWthLEtBQUtDLFFBQUwsR0FBYyxDQUFDLEtBQUtELFNBQU4sSUFBaUIsS0FBS3pJLE9BQUwsQ0FBYXpLLEVBQWIsQ0FBZ0IsS0FBaEIsQ0FBamMsRUFBd2QsS0FBS29ULE1BQUwsR0FBWTdDLENBQUMsQ0FBQzhDLENBQUMsQ0FBQ3RVLFFBQUgsQ0FBcmUsRUFBa2YsS0FBS3VVLGVBQUwsQ0FBcUIsS0FBS1QsQ0FBTCxDQUFPVSxTQUFQLENBQWlCQyxTQUF0QyxLQUFrRCxLQUFLSixNQUFMLENBQVk5VixJQUFaLENBQWlCLE9BQWpCLEVBQTBCaEIsSUFBMUIsQ0FBK0IsS0FBS3VXLENBQUwsQ0FBT1UsU0FBUCxDQUFpQkMsU0FBaEQsQ0FBcGlCLEVBQStsQixLQUFLRixlQUFMLENBQXFCLEtBQUtULENBQUwsQ0FBT1UsU0FBUCxDQUFpQkUsVUFBdEMsS0FBbUQsS0FBS0wsTUFBTCxDQUFZOVYsSUFBWixDQUFpQixPQUFqQixFQUEwQmhCLElBQTFCLENBQStCLEtBQUt1VyxDQUFMLENBQU9VLFNBQVAsQ0FBaUJFLFVBQWhELENBQWxwQixFQUE4c0IsS0FBS0MsWUFBTCxFQUE5c0IsRUFBa3VCLEtBQUtDLGFBQUwsRUFBbHVCLEVBQXV2QixLQUFLUixRQUFMLEdBQWMsS0FBS0MsTUFBTCxDQUFZMVQsUUFBWixDQUFxQixtQkFBckIsRUFBMENrVSxRQUExQyxDQUFtRCxLQUFLbkosT0FBeEQsQ0FBZCxHQUErRSxLQUFLMkksTUFBTCxDQUFZMVQsUUFBWixDQUFxQixtQ0FBckIsQ0FBdDBCLEVBQWc0QixLQUFLbVQsQ0FBTCxDQUFPZ0IsR0FBUCxJQUFZLEtBQUtULE1BQUwsQ0FBWTFULFFBQVosQ0FBcUIsZ0JBQXJCLENBQTU0QixFQUFtN0IsS0FBS21ULENBQUwsQ0FBT2lCLGFBQVAsSUFBc0IsS0FBS1YsTUFBTCxDQUFZOVYsSUFBWixDQUFpQiwwRkFBakIsRUFBNkcrRCxJQUE3RyxDQUFrSCxTQUFsSCxFQUE0SCxVQUFTa1AsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxhQUFPcEcsTUFBTSxDQUFDb0csQ0FBRCxDQUFOLEdBQVUsQ0FBakI7QUFBbUIsS0FBN0osQ0FBejhCLEVBQXdtQyxLQUFLaUMsZ0JBQUwsQ0FBc0I7QUFBQ3FCLGVBQVMsRUFBQyxLQUFLQyxFQUFMLENBQVFELFNBQW5CO0FBQTZCRSxhQUFPLEVBQUMsS0FBS0QsRUFBTCxDQUFRQyxPQUE3QztBQUFxREMsd0JBQWtCLEVBQUMsS0FBS3JCLENBQUwsQ0FBT3FCLGtCQUEvRTtBQUFrRy9VLDJCQUFxQixFQUFDLEtBQUswVCxDQUFMLENBQU8xVCxxQkFBL0g7QUFBcUpnVixtQkFBYSxFQUFDLEtBQUt0QixDQUFMLENBQU9zQjtBQUExSyxLQUF0QixDQUF4bUMsRUFBd3pDLEtBQUtDLGFBQUwsR0FBbUIsQ0FBQyxDQUE1MEMsRUFBODBDLEtBQUtDLFdBQUwsQ0FBaUIsS0FBS3hCLENBQUwsQ0FBT3lCLFNBQXhCLENBQTkwQyxFQUFpM0MsS0FBS0YsYUFBTCxHQUFtQixDQUFDLENBQXI0QyxFQUF1NEMsS0FBS0csT0FBTCxFQUF2NEMsRUFBczVDLEtBQUtDLFVBQUwsRUFBdDVDLEVBQXc2QyxLQUFLelQsTUFBTCxFQUF4NkMsRUFBczdDLEtBQUtvUyxRQUFMLElBQWUsS0FBS3pTLElBQUwsRUFBcjhDO0FBQWk5QyxHQUFuOUQ7O0FBQW85RCtSLEdBQUMsQ0FBQ3JHLFNBQUYsR0FBWTtBQUFDcUksZUFBVyxFQUFDaEMsQ0FBYjtBQUFlaUMsb0JBQWdCLEVBQUMsMEJBQVNqRSxDQUFULEVBQVc7QUFBQyxhQUFPRixDQUFDLENBQUMvUixJQUFGLENBQU82VSxDQUFDLENBQUNzQixTQUFULEVBQW1CLFVBQVNqRSxDQUFULEVBQVdLLENBQVgsRUFBYTtBQUFDLFlBQUdOLENBQUMsS0FBR0MsQ0FBSixJQUFPSCxDQUFDLENBQUNxRSxPQUFGLENBQVVuRSxDQUFWLEVBQVlNLENBQUMsQ0FBQzhELEtBQWQsTUFBdUIsQ0FBQyxDQUFsQyxFQUFvQyxPQUFPcEUsQ0FBQyxHQUFDQyxDQUFGLEVBQUksQ0FBQyxDQUFaO0FBQWMsT0FBbkYsR0FBcUZELENBQTVGO0FBQThGLEtBQTFJO0FBQTJJcUUsc0JBQWtCLEVBQUMsNEJBQVNyRSxDQUFULEVBQVc7QUFBQyxhQUFPRixDQUFDLENBQUMrQixPQUFGLENBQVU3QixDQUFWLE1BQWVBLENBQUMsR0FBQ0EsQ0FBQyxDQUFDbEssS0FBRixDQUFRLFFBQVIsQ0FBakIsR0FBb0NnSyxDQUFDLENBQUM3QixHQUFGLENBQU0rQixDQUFOLEVBQVFwRyxNQUFSLENBQTNDO0FBQTJELEtBQXJPO0FBQXNPaUosbUJBQWUsRUFBQyx5QkFBUzVDLENBQVQsRUFBVztBQUFDLFVBQUc7QUFBQyxZQUFHQSxDQUFDLEtBQUdELENBQUosSUFBTyxPQUFLQyxDQUFmLEVBQWlCLE9BQU0sQ0FBQyxDQUFQO0FBQVMsWUFBRyxDQUFDQSxDQUFDLENBQUM3RSxLQUFGLENBQVEsT0FBUixLQUFrQixFQUFuQixFQUF1QmhQLE1BQXZCLElBQStCLENBQWxDLEVBQW9DLE9BQU0sQ0FBQyxDQUFQO0FBQVMsWUFBSWtVLENBQUMsR0FBQ1IsQ0FBQyxDQUFDRyxDQUFELENBQVA7QUFBVyxlQUFPSyxDQUFDLENBQUNsVSxNQUFGLEdBQVMsQ0FBaEI7QUFBa0IsT0FBeEcsQ0FBd0csT0FBTTBULENBQU4sRUFBUTtBQUFDLGVBQU0sQ0FBQyxDQUFQO0FBQVM7QUFBQyxLQUE3WDtBQUE4WG1DLG9CQUFnQixFQUFDLDBCQUFTakMsQ0FBVCxFQUFXO0FBQUMsV0FBS3VELEVBQUwsR0FBUXpELENBQUMsQ0FBQ3ZNLE1BQUYsQ0FBUyxFQUFULEVBQVksS0FBS2dRLEVBQWpCLEVBQW9CdkQsQ0FBcEIsQ0FBUjtBQUErQixVQUFJeFUsQ0FBQyxHQUFDLEtBQUs0VyxDQUFMLEdBQU90QyxDQUFDLENBQUN2TSxNQUFGLENBQVMsRUFBVCxFQUFZLEtBQUtnUSxFQUFqQixDQUFiO0FBQUEsVUFBa0MxQyxDQUFDLEdBQUNyVixDQUFDLENBQUNpRCxRQUF0QztBQUErQzZTLE9BQUMsQ0FBQ1QsQ0FBRCxDQUFELEtBQU9BLENBQUMsR0FBQ0EsQ0FBQyxDQUFDL0ssS0FBRixDQUFRLEdBQVIsRUFBYSxDQUFiLENBQUYsRUFBa0J3TCxDQUFDLENBQUNULENBQUQsQ0FBRCxLQUFPQSxDQUFDLEdBQUN1QixDQUFDLENBQUMzVCxRQUFYLENBQXpCLEdBQStDakQsQ0FBQyxDQUFDaUQsUUFBRixHQUFXb1MsQ0FBMUQsRUFBNERyVixDQUFDLENBQUNxWSxTQUFGLEdBQVksS0FBS0ksZ0JBQUwsQ0FBc0J6WSxDQUFDLENBQUNxWSxTQUF4QixDQUF4RSxFQUEyR3JZLENBQUMsQ0FBQzhZLFdBQUYsR0FBYyxLQUFLTCxnQkFBTCxDQUFzQnpZLENBQUMsQ0FBQzhZLFdBQXhCLENBQXpILEVBQThKOVksQ0FBQyxDQUFDK1ksV0FBRixHQUFjLEtBQUtOLGdCQUFMLENBQXNCelksQ0FBQyxDQUFDK1ksV0FBeEIsQ0FBNUssRUFBaU4vWSxDQUFDLENBQUNxWSxTQUFGLEdBQVk1USxJQUFJLENBQUN1UixHQUFMLENBQVMsS0FBS3BDLENBQUwsQ0FBT2tDLFdBQWhCLEVBQTRCclIsSUFBSSxDQUFDd1IsR0FBTCxDQUFTLEtBQUtyQyxDQUFMLENBQU9tQyxXQUFoQixFQUE0Qi9ZLENBQUMsQ0FBQ3FZLFNBQTlCLENBQTVCLENBQTdOLEVBQW1TclksQ0FBQyxDQUFDa1osU0FBRixLQUFjLENBQUMsQ0FBZixLQUFtQmxaLENBQUMsQ0FBQ2taLFNBQUYsR0FBWTlLLE1BQU0sQ0FBQ3BPLENBQUMsQ0FBQ2taLFNBQUgsQ0FBTixJQUFxQixDQUFDLENBQWxDLEVBQW9DbFosQ0FBQyxDQUFDa1osU0FBRixLQUFjLENBQUMsQ0FBZixLQUFtQmxaLENBQUMsQ0FBQ2taLFNBQUYsR0FBWXpSLElBQUksQ0FBQ3VSLEdBQUwsQ0FBUyxDQUFULEVBQVdoWixDQUFDLENBQUNrWixTQUFiLENBQS9CLENBQXZELENBQW5TLEVBQW1abFosQ0FBQyxDQUFDZ0Qsa0JBQUYsR0FBcUJtVyxNQUFNLENBQUNuWixDQUFDLENBQUNnRCxrQkFBSCxDQUE5YSxFQUFxY2hELENBQUMsQ0FBQ29aLFNBQUYsSUFBYSxDQUFsZCxFQUFvZHBaLENBQUMsQ0FBQ3FaLE9BQUYsR0FBVSxDQUFDclosQ0FBQyxDQUFDb1osU0FBRixHQUFZLENBQWIsSUFBZ0IsQ0FBOWU7QUFBZ2YsVUFBSTdELENBQUMsR0FBQzZCLENBQUMsQ0FBQ2tDLFdBQUYsQ0FBY3RaLENBQUMsQ0FBQ3VaLE1BQWhCLENBQU47QUFBOEJ2WixPQUFDLENBQUM4WCxTQUFGLEtBQWMsRUFBRSxJQUFFLENBQUosQ0FBZCxLQUF1QjlYLENBQUMsQ0FBQzhYLFNBQUYsR0FBWTlYLENBQUMsQ0FBQzhYLFNBQUYsWUFBdUJwRCxJQUF2QixHQUE0QjFVLENBQUMsQ0FBQzhYLFNBQUYsR0FBWSxLQUFLMEIsYUFBTCxDQUFtQixLQUFLQyxVQUFMLENBQWdCelosQ0FBQyxDQUFDOFgsU0FBbEIsQ0FBbkIsQ0FBeEMsR0FBeUY5WCxDQUFDLENBQUM4WCxTQUFGLEdBQVlWLENBQUMsQ0FBQ3NDLFNBQUYsQ0FBWTFaLENBQUMsQ0FBQzhYLFNBQWQsRUFBd0J2QyxDQUF4QixFQUEwQnZWLENBQUMsQ0FBQ2lELFFBQTVCLEVBQXFDakQsQ0FBQyxDQUFDMlosZ0JBQXZDLENBQWpILEdBQTBLM1osQ0FBQyxDQUFDOFgsU0FBRixHQUFZLEVBQUUsSUFBRSxDQUFKLENBQTdNLEdBQXFOOVgsQ0FBQyxDQUFDZ1ksT0FBRixLQUFZLElBQUUsQ0FBZCxLQUFrQmhZLENBQUMsQ0FBQ2dZLE9BQUYsR0FBVWhZLENBQUMsQ0FBQ2dZLE9BQUYsWUFBcUJ0RCxJQUFyQixHQUEwQjFVLENBQUMsQ0FBQ2dZLE9BQUYsR0FBVSxLQUFLd0IsYUFBTCxDQUFtQixLQUFLQyxVQUFMLENBQWdCelosQ0FBQyxDQUFDZ1ksT0FBbEIsQ0FBbkIsQ0FBcEMsR0FBbUZoWSxDQUFDLENBQUNnWSxPQUFGLEdBQVVaLENBQUMsQ0FBQ3NDLFNBQUYsQ0FBWTFaLENBQUMsQ0FBQ2dZLE9BQWQsRUFBc0J6QyxDQUF0QixFQUF3QnZWLENBQUMsQ0FBQ2lELFFBQTFCLEVBQW1DakQsQ0FBQyxDQUFDMlosZ0JBQXJDLENBQXZHLEdBQThKM1osQ0FBQyxDQUFDZ1ksT0FBRixHQUFVLElBQUUsQ0FBNUwsQ0FBck4sRUFBb1poWSxDQUFDLENBQUNpWSxrQkFBRixHQUFxQixLQUFLWSxrQkFBTCxDQUF3QjdZLENBQUMsQ0FBQ2lZLGtCQUFGLElBQXNCLEVBQTlDLENBQXphLEVBQTJkalksQ0FBQyxDQUFDa0QscUJBQUYsR0FBd0IsS0FBSzJWLGtCQUFMLENBQXdCN1ksQ0FBQyxDQUFDa0QscUJBQUYsSUFBeUIsRUFBakQsQ0FBbmYsRUFBd2lCbEQsQ0FBQyxDQUFDa1ksYUFBRixHQUFnQmxZLENBQUMsQ0FBQ2tZLGFBQUYsSUFBaUIsRUFBemtCLEVBQTRrQjVELENBQUMsQ0FBQytCLE9BQUYsQ0FBVXJXLENBQUMsQ0FBQ2tZLGFBQVosTUFBNkJsWSxDQUFDLENBQUNrWSxhQUFGLEdBQWdCbFksQ0FBQyxDQUFDa1ksYUFBRixDQUFnQjVOLEtBQWhCLENBQXNCLEdBQXRCLENBQTdDLENBQTVrQixFQUFxcEJ0SyxDQUFDLENBQUNrWSxhQUFGLEdBQWdCNUQsQ0FBQyxDQUFDN0IsR0FBRixDQUFNelMsQ0FBQyxDQUFDa1ksYUFBUixFQUFzQixVQUFTNUQsQ0FBVCxFQUFXO0FBQUMsZUFBTzhDLENBQUMsQ0FBQ3NDLFNBQUYsQ0FBWXBGLENBQVosRUFBY2lCLENBQWQsRUFBZ0J2VixDQUFDLENBQUNpRCxRQUFsQixFQUEyQmpELENBQUMsQ0FBQzJaLGdCQUE3QixDQUFQO0FBQXNELE9BQXhGLENBQXJxQjtBQUErdkIsVUFBSWpFLENBQUMsR0FBQ3lELE1BQU0sQ0FBQ25aLENBQUMsQ0FBQzRaLFdBQUgsQ0FBTixDQUFzQmpFLFdBQXRCLEdBQW9DckwsS0FBcEMsQ0FBMEMsTUFBMUMsQ0FBTjtBQUFBLFVBQXdEM0osQ0FBQyxHQUFDWCxDQUFDLENBQUM0WixXQUFGLENBQWNqRSxXQUFkLEVBQTFEO0FBQXNGLFVBQUdELENBQUMsR0FBQ3BCLENBQUMsQ0FBQ3VGLElBQUYsQ0FBT25FLENBQVAsRUFBUyxVQUFTcEIsQ0FBVCxFQUFXO0FBQUMsZUFBTSwrQkFBK0J1QixJQUEvQixDQUFvQ3ZCLENBQXBDLENBQU47QUFBNkMsT0FBbEUsQ0FBRixFQUFzRXRVLENBQUMsQ0FBQzRaLFdBQUYsR0FBYztBQUFDOUwsU0FBQyxFQUFDLE1BQUg7QUFBVWdNLFNBQUMsRUFBQztBQUFaLE9BQXBGLEVBQXdHblosQ0FBQyxJQUFFLFdBQVNBLENBQXZIO0FBQXlILFlBQUcsTUFBSStVLENBQUMsQ0FBQzlVLE1BQVQsRUFBZ0IsUUFBTzhVLENBQUMsQ0FBQyxDQUFELENBQVI7QUFBYSxlQUFJLEtBQUo7QUFBVSxlQUFJLFFBQUo7QUFBYTFWLGFBQUMsQ0FBQzRaLFdBQUYsQ0FBY0UsQ0FBZCxHQUFnQnBFLENBQUMsQ0FBQyxDQUFELENBQWpCO0FBQXFCOztBQUFNLGVBQUksTUFBSjtBQUFXLGVBQUksT0FBSjtBQUFZMVYsYUFBQyxDQUFDNFosV0FBRixDQUFjOUwsQ0FBZCxHQUFnQjRILENBQUMsQ0FBQyxDQUFELENBQWpCO0FBQXRGLFNBQWhCLE1BQWdJL1UsQ0FBQyxHQUFDMlQsQ0FBQyxDQUFDdUYsSUFBRixDQUFPbkUsQ0FBUCxFQUFTLFVBQVNwQixDQUFULEVBQVc7QUFBQyxpQkFBTSxlQUFldUIsSUFBZixDQUFvQnZCLENBQXBCLENBQU47QUFBNkIsU0FBbEQsQ0FBRixFQUFzRHRVLENBQUMsQ0FBQzRaLFdBQUYsQ0FBYzlMLENBQWQsR0FBZ0JuTixDQUFDLENBQUMsQ0FBRCxDQUFELElBQU0sTUFBNUUsRUFBbUZBLENBQUMsR0FBQzJULENBQUMsQ0FBQ3VGLElBQUYsQ0FBT25FLENBQVAsRUFBUyxVQUFTcEIsQ0FBVCxFQUFXO0FBQUMsaUJBQU0sZUFBZXVCLElBQWYsQ0FBb0J2QixDQUFwQixDQUFOO0FBQTZCLFNBQWxELENBQXJGLEVBQXlJdFUsQ0FBQyxDQUFDNFosV0FBRixDQUFjRSxDQUFkLEdBQWdCblosQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFNLE1BQS9KO0FBQXpQLGFBQW1hO0FBQUMsVUFBR1gsQ0FBQyxDQUFDNlcsZUFBRixZQUE2Qm5DLElBQTdCLElBQW1DLFlBQVUsT0FBTzFVLENBQUMsQ0FBQzZXLGVBQXpELEVBQXlFN1csQ0FBQyxDQUFDNlcsZUFBRixHQUFrQk8sQ0FBQyxDQUFDc0MsU0FBRixDQUFZMVosQ0FBQyxDQUFDNlcsZUFBZCxFQUE4QnRCLENBQTlCLEVBQWdDdlYsQ0FBQyxDQUFDaUQsUUFBbEMsRUFBMkNqRCxDQUFDLENBQUMyWixnQkFBN0MsQ0FBbEIsQ0FBekUsS0FBK0osSUFBRzNaLENBQUMsQ0FBQzZXLGVBQUwsRUFBcUI7QUFBQyxZQUFJYixDQUFDLEdBQUNoVyxDQUFDLENBQUM2VyxlQUFGLENBQWtCa0QsSUFBbEIsSUFBeUIsSUFBSXJGLElBQUosRUFBRCxDQUFXSyxXQUFYLEVBQTlCO0FBQUEsWUFBdUR5QixDQUFDLEdBQUN4VyxDQUFDLENBQUM2VyxlQUFGLENBQWtCbUQsS0FBbEIsSUFBeUIsQ0FBbEY7QUFBQSxZQUFvRkMsQ0FBQyxHQUFDamEsQ0FBQyxDQUFDNlcsZUFBRixDQUFrQnFELEdBQWxCLElBQXVCLENBQTdHO0FBQStHbGEsU0FBQyxDQUFDNlcsZUFBRixHQUFrQnBDLENBQUMsQ0FBQ3VCLENBQUQsRUFBR1EsQ0FBSCxFQUFLeUQsQ0FBTCxDQUFuQjtBQUEyQixPQUFoSyxNQUFxS2phLENBQUMsQ0FBQzZXLGVBQUYsR0FBa0IvQixDQUFDLEVBQW5CO0FBQXNCLEtBQTFrRjtBQUEya0ZxRixXQUFPLEVBQUMsRUFBbmxGO0FBQXNsRkMsb0JBQWdCLEVBQUMsRUFBdm1GO0FBQTBtRkMsZ0JBQVksRUFBQyxzQkFBUy9GLENBQVQsRUFBVztBQUFDLFdBQUksSUFBSUcsQ0FBSixFQUFNSyxDQUFOLEVBQVE5VSxDQUFSLEVBQVVxVixDQUFDLEdBQUMsQ0FBaEIsRUFBa0JBLENBQUMsR0FBQ2YsQ0FBQyxDQUFDMVQsTUFBdEIsRUFBNkJ5VSxDQUFDLEVBQTlCO0FBQWlDWixTQUFDLEdBQUNILENBQUMsQ0FBQ2UsQ0FBRCxDQUFELENBQUssQ0FBTCxDQUFGLEVBQVUsTUFBSWYsQ0FBQyxDQUFDZSxDQUFELENBQUQsQ0FBS3pVLE1BQVQsSUFBaUJrVSxDQUFDLEdBQUNOLENBQUYsRUFBSXhVLENBQUMsR0FBQ3NVLENBQUMsQ0FBQ2UsQ0FBRCxDQUFELENBQUssQ0FBTCxDQUF2QixJQUFnQyxNQUFJZixDQUFDLENBQUNlLENBQUQsQ0FBRCxDQUFLelUsTUFBVCxLQUFrQmtVLENBQUMsR0FBQ1IsQ0FBQyxDQUFDZSxDQUFELENBQUQsQ0FBSyxDQUFMLENBQUYsRUFBVXJWLENBQUMsR0FBQ3NVLENBQUMsQ0FBQ2UsQ0FBRCxDQUFELENBQUssQ0FBTCxDQUE5QixDQUExQyxFQUFpRlosQ0FBQyxDQUFDMVUsRUFBRixDQUFLQyxDQUFMLEVBQU84VSxDQUFQLENBQWpGO0FBQWpDO0FBQTRILEtBQS92RjtBQUFnd0Z3RixrQkFBYyxFQUFDLHdCQUFTaEcsQ0FBVCxFQUFXO0FBQUMsV0FBSSxJQUFJRyxDQUFKLEVBQU1LLENBQU4sRUFBUTlVLENBQVIsRUFBVXFWLENBQUMsR0FBQyxDQUFoQixFQUFrQkEsQ0FBQyxHQUFDZixDQUFDLENBQUMxVCxNQUF0QixFQUE2QnlVLENBQUMsRUFBOUI7QUFBaUNaLFNBQUMsR0FBQ0gsQ0FBQyxDQUFDZSxDQUFELENBQUQsQ0FBSyxDQUFMLENBQUYsRUFBVSxNQUFJZixDQUFDLENBQUNlLENBQUQsQ0FBRCxDQUFLelUsTUFBVCxJQUFpQlosQ0FBQyxHQUFDd1UsQ0FBRixFQUFJTSxDQUFDLEdBQUNSLENBQUMsQ0FBQ2UsQ0FBRCxDQUFELENBQUssQ0FBTCxDQUF2QixJQUFnQyxNQUFJZixDQUFDLENBQUNlLENBQUQsQ0FBRCxDQUFLelUsTUFBVCxLQUFrQlosQ0FBQyxHQUFDc1UsQ0FBQyxDQUFDZSxDQUFELENBQUQsQ0FBSyxDQUFMLENBQUYsRUFBVVAsQ0FBQyxHQUFDUixDQUFDLENBQUNlLENBQUQsQ0FBRCxDQUFLLENBQUwsQ0FBOUIsQ0FBMUMsRUFBaUZaLENBQUMsQ0FBQ1YsR0FBRixDQUFNZSxDQUFOLEVBQVE5VSxDQUFSLENBQWpGO0FBQWpDO0FBQTZILEtBQXg1RjtBQUF5NUZ5WCxnQkFBWSxFQUFDLHdCQUFVO0FBQUMsVUFBSWpELENBQUMsR0FBQztBQUFDK0YsYUFBSyxFQUFDakcsQ0FBQyxDQUFDdEYsS0FBRixDQUFRLFVBQVN3RixDQUFULEVBQVc7QUFBQ0YsV0FBQyxDQUFDcUUsT0FBRixDQUFVbkUsQ0FBQyxDQUFDdkgsT0FBWixFQUFvQixDQUFDLEVBQUQsRUFBSSxFQUFKLEVBQU8sRUFBUCxFQUFVLEVBQVYsRUFBYSxFQUFiLEVBQWdCLEVBQWhCLEVBQW1CLEVBQW5CLEVBQXNCLENBQXRCLENBQXBCLE1BQWdELENBQUMsQ0FBakQsSUFBb0QsS0FBS25JLE1BQUwsRUFBcEQ7QUFBa0UsU0FBdEYsRUFBdUYsSUFBdkYsQ0FBUDtBQUFvRzBWLGVBQU8sRUFBQ2xHLENBQUMsQ0FBQ3RGLEtBQUYsQ0FBUSxLQUFLd0wsT0FBYixFQUFxQixJQUFyQixDQUE1RztBQUF1SUMsYUFBSyxFQUFDbkcsQ0FBQyxDQUFDdEYsS0FBRixDQUFRLEtBQUt5TCxLQUFiLEVBQW1CLElBQW5CO0FBQTdJLE9BQU47QUFBNkssV0FBSzdELENBQUwsQ0FBTzhELFdBQVAsS0FBcUIsQ0FBQyxDQUF0QixLQUEwQmxHLENBQUMsQ0FBQzlRLEtBQUYsR0FBUTRRLENBQUMsQ0FBQ3RGLEtBQUYsQ0FBUSxLQUFLdkssSUFBYixFQUFrQixJQUFsQixDQUFsQyxHQUEyRCxLQUFLc1MsT0FBTCxHQUFhLEtBQUtvRCxPQUFMLEdBQWEsQ0FBQyxDQUFDLEtBQUszTCxPQUFOLEVBQWNnRyxDQUFkLENBQUQsQ0FBMUIsR0FBNkMsS0FBS3lDLFNBQUwsSUFBZ0IsS0FBS0QsVUFBTCxDQUFnQnBXLE1BQWhDLEdBQXVDLEtBQUt1WixPQUFMLEdBQWEsQ0FBQyxDQUFDLEtBQUtuRCxVQUFOLEVBQWlCeEMsQ0FBakIsQ0FBRCxFQUFxQixDQUFDLEtBQUt5QyxTQUFOLEVBQWdCO0FBQUMwRCxhQUFLLEVBQUNyRyxDQUFDLENBQUN0RixLQUFGLENBQVEsS0FBS3ZLLElBQWIsRUFBa0IsSUFBbEI7QUFBUCxPQUFoQixDQUFyQixDQUFwRCxHQUEySCxLQUFLMFYsT0FBTCxHQUFhLENBQUMsQ0FBQyxLQUFLM0wsT0FBTixFQUFjO0FBQUNtTSxhQUFLLEVBQUNyRyxDQUFDLENBQUN0RixLQUFGLENBQVEsS0FBS3ZLLElBQWIsRUFBa0IsSUFBbEIsQ0FBUDtBQUErQitWLGVBQU8sRUFBQ2xHLENBQUMsQ0FBQ3RGLEtBQUYsQ0FBUSxLQUFLd0wsT0FBYixFQUFxQixJQUFyQjtBQUF2QyxPQUFkLENBQUQsQ0FBaFAsRUFBb1UsS0FBS0wsT0FBTCxDQUFhdFosSUFBYixDQUFrQixDQUFDLEtBQUsyTixPQUFOLEVBQWMsR0FBZCxFQUFrQjtBQUFDb00sWUFBSSxFQUFDdEcsQ0FBQyxDQUFDdEYsS0FBRixDQUFRLFVBQVNzRixDQUFULEVBQVc7QUFBQyxlQUFLdUcsYUFBTCxHQUFtQnZHLENBQUMsQ0FBQ3BVLE1BQXJCO0FBQTRCLFNBQWhELEVBQWlELElBQWpEO0FBQU4sT0FBbEIsQ0FBbEIsRUFBbUcsQ0FBQyxLQUFLc08sT0FBTixFQUFjO0FBQUNvTSxZQUFJLEVBQUN0RyxDQUFDLENBQUN0RixLQUFGLENBQVEsVUFBU3NGLENBQVQsRUFBVztBQUFDLGVBQUt1RyxhQUFMLEdBQW1CdkcsQ0FBQyxDQUFDcFUsTUFBckI7QUFBNEIsU0FBaEQsRUFBaUQsSUFBakQ7QUFBTixPQUFkLENBQW5HLENBQXBVLEVBQXFmLEtBQUswVyxDQUFMLENBQU9rRSxnQkFBUCxJQUF5QixLQUFLWCxPQUFMLENBQWF0WixJQUFiLENBQWtCLENBQUMsS0FBSzJOLE9BQU4sRUFBYztBQUFDLGtDQUF5QjhGLENBQUMsQ0FBQ3RGLEtBQUYsQ0FBUSxVQUFTc0YsQ0FBVCxFQUFXO0FBQUMsZUFBS3hQLE1BQUwsQ0FBWXdQLENBQUMsQ0FBQ3lHLElBQWQ7QUFBb0IsU0FBeEMsRUFBeUMsSUFBekM7QUFBMUIsT0FBZCxDQUFsQixDQUE5Z0IsRUFBMG5CLEtBQUtYLGdCQUFMLEdBQXNCLENBQUMsQ0FBQyxLQUFLakQsTUFBTixFQUFhO0FBQUN3RCxhQUFLLEVBQUNyRyxDQUFDLENBQUN0RixLQUFGLENBQVEsS0FBSzJMLEtBQWIsRUFBbUIsSUFBbkI7QUFBUCxPQUFiLENBQUQsRUFBZ0QsQ0FBQyxLQUFLeEQsTUFBTixFQUFhLGNBQWIsRUFBNEI7QUFBQ3dELGFBQUssRUFBQ3JHLENBQUMsQ0FBQ3RGLEtBQUYsQ0FBUSxLQUFLZ00sY0FBYixFQUE0QixJQUE1QjtBQUFQLE9BQTVCLENBQWhELEVBQXVILENBQUMsS0FBSzdELE1BQU4sRUFBYSxxQkFBYixFQUFtQztBQUFDd0QsYUFBSyxFQUFDckcsQ0FBQyxDQUFDdEYsS0FBRixDQUFRLEtBQUtpTSxZQUFiLEVBQTBCLElBQTFCO0FBQVAsT0FBbkMsQ0FBdkgsRUFBbU0sQ0FBQzNHLENBQUMsQ0FBQ2QsTUFBRCxDQUFGLEVBQVc7QUFBQzBILGNBQU0sRUFBQzVHLENBQUMsQ0FBQ3RGLEtBQUYsQ0FBUSxLQUFLbU0sS0FBYixFQUFtQixJQUFuQjtBQUFSLE9BQVgsQ0FBbk0sRUFBaVAsQ0FBQzdHLENBQUMsQ0FBQ2hVLFFBQUQsQ0FBRixFQUFhO0FBQUMsZ0NBQXVCZ1UsQ0FBQyxDQUFDdEYsS0FBRixDQUFRLFVBQVNzRixDQUFULEVBQVc7QUFBQyxlQUFLOUYsT0FBTCxDQUFhekssRUFBYixDQUFnQnVRLENBQUMsQ0FBQ3BVLE1BQWxCLEtBQTJCLEtBQUtzTyxPQUFMLENBQWFuTixJQUFiLENBQWtCaVQsQ0FBQyxDQUFDcFUsTUFBcEIsRUFBNEJVLE1BQXZELElBQStELEtBQUt1VyxNQUFMLENBQVlwVCxFQUFaLENBQWV1USxDQUFDLENBQUNwVSxNQUFqQixDQUEvRCxJQUF5RixLQUFLaVgsTUFBTCxDQUFZOVYsSUFBWixDQUFpQmlULENBQUMsQ0FBQ3BVLE1BQW5CLEVBQTJCVSxNQUFwSCxJQUE0SCxLQUFLc1csUUFBakksSUFBMkksS0FBSzFTLElBQUwsRUFBM0k7QUFBdUosU0FBM0ssRUFBNEssSUFBNUs7QUFBeEIsT0FBYixDQUFqUCxDQUFocEI7QUFBMmxDLEtBQXpySTtBQUEwcklrVCxpQkFBYSxFQUFDLHlCQUFVO0FBQUMsV0FBSzBELGFBQUwsSUFBcUIsS0FBS2YsWUFBTCxDQUFrQixLQUFLRixPQUF2QixDQUFyQjtBQUFxRCxLQUF4d0k7QUFBeXdJaUIsaUJBQWEsRUFBQyx5QkFBVTtBQUFDLFdBQUtkLGNBQUwsQ0FBb0IsS0FBS0gsT0FBekI7QUFBa0MsS0FBcDBJO0FBQXEwSWtCLDBCQUFzQixFQUFDLGtDQUFVO0FBQUMsV0FBS0Msc0JBQUwsSUFBOEIsS0FBS2pCLFlBQUwsQ0FBa0IsS0FBS0QsZ0JBQXZCLENBQTlCO0FBQXVFLEtBQTk2STtBQUErNklrQiwwQkFBc0IsRUFBQyxrQ0FBVTtBQUFDLFdBQUtoQixjQUFMLENBQW9CLEtBQUtGLGdCQUF6QjtBQUEyQyxLQUE1L0k7QUFBNi9JbUIsWUFBUSxFQUFDLGtCQUFTL0csQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxVQUFJSyxDQUFDLEdBQUNMLENBQUMsSUFBRSxLQUFLaUMsS0FBTCxDQUFXMUUsR0FBWCxDQUFlLENBQUMsQ0FBaEIsQ0FBVDtBQUFBLFVBQTRCaFMsQ0FBQyxHQUFDLEtBQUt3YixhQUFMLENBQW1CMUcsQ0FBbkIsQ0FBOUI7O0FBQW9ELFdBQUt0RyxPQUFMLENBQWEzTCxPQUFiLENBQXFCO0FBQUNxRCxZQUFJLEVBQUNzTyxDQUFOO0FBQVF1RyxZQUFJLEVBQUMvYSxDQUFiO0FBQWV5YixnQkFBUSxFQUFDLEtBQUtBLFFBQTdCO0FBQXNDL0UsYUFBSyxFQUFDcEMsQ0FBQyxDQUFDN0IsR0FBRixDQUFNLEtBQUtpRSxLQUFYLEVBQWlCLEtBQUs4RSxhQUF0QixDQUE1QztBQUFpRmpDLGNBQU0sRUFBQ2pGLENBQUMsQ0FBQ3RGLEtBQUYsQ0FBUSxVQUFTc0YsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxnQkFBSUssU0FBUyxDQUFDalUsTUFBZCxJQUFzQjBULENBQUMsR0FBQyxLQUFLb0MsS0FBTCxDQUFXOVYsTUFBWCxHQUFrQixDQUFwQixFQUFzQjRULENBQUMsR0FBQyxLQUFLb0MsQ0FBTCxDQUFPMkMsTUFBckQsSUFBNkQsWUFBVSxPQUFPakYsQ0FBakIsS0FBcUJFLENBQUMsR0FBQ0YsQ0FBRixFQUFJQSxDQUFDLEdBQUMsS0FBS29DLEtBQUwsQ0FBVzlWLE1BQVgsR0FBa0IsQ0FBN0MsQ0FBN0QsRUFBNkc0VCxDQUFDLEdBQUNBLENBQUMsSUFBRSxLQUFLb0MsQ0FBTCxDQUFPMkMsTUFBekg7QUFBZ0ksY0FBSTlFLENBQUMsR0FBQyxLQUFLaUMsS0FBTCxDQUFXMUUsR0FBWCxDQUFlc0MsQ0FBZixDQUFOO0FBQXdCLGlCQUFPOEMsQ0FBQyxDQUFDc0UsVUFBRixDQUFhakgsQ0FBYixFQUFlRCxDQUFmLEVBQWlCLEtBQUtvQyxDQUFMLENBQU8zVCxRQUF4QixDQUFQO0FBQXlDLFNBQXZOLEVBQXdOLElBQXhOO0FBQXhGLE9BQXJCO0FBQTZVLEtBQXI1SjtBQUFzNUp3QixRQUFJLEVBQUMsZ0JBQVU7QUFBQyxVQUFHLEVBQUUsS0FBS3VTLFVBQUwsQ0FBZ0I3VCxJQUFoQixDQUFxQixVQUFyQixLQUFrQyxLQUFLNlQsVUFBTCxDQUFnQjdULElBQWhCLENBQXFCLFVBQXJCLEtBQWtDLEtBQUt5VCxDQUFMLENBQU8rRSxnQkFBUCxLQUEwQixDQUFDLENBQWpHLENBQUgsRUFBdUcsT0FBTyxLQUFLekUsUUFBTCxJQUFlLEtBQUtDLE1BQUwsQ0FBWVEsUUFBWixDQUFxQixLQUFLZixDQUFMLENBQU9oVSxTQUE1QixDQUFmLEVBQXNELEtBQUt1WSxLQUFMLEVBQXRELEVBQW1FLEtBQUtoRSxNQUFMLENBQVkxUyxJQUFaLEVBQW5FLEVBQXNGLEtBQUs0VyxzQkFBTCxFQUF0RixFQUFvSCxLQUFLRSxRQUFMLENBQWMsTUFBZCxDQUFwSCxFQUEwSSxDQUFDL0gsTUFBTSxDQUFDb0ksU0FBUCxDQUFpQkMsZ0JBQWpCLElBQW1DLGtCQUFpQnZiLFFBQXJELEtBQWdFLEtBQUtzVyxDQUFMLENBQU9rRixvQkFBdkUsSUFBNkZ4SCxDQUFDLENBQUMsS0FBSzlGLE9BQU4sQ0FBRCxDQUFnQm9NLElBQWhCLEVBQXZPLEVBQThQLElBQXJRO0FBQTBRLEtBQXZ4SztBQUF3eEtwVyxRQUFJLEVBQUMsZ0JBQVU7QUFBQyxhQUFPLEtBQUswUyxRQUFMLElBQWUsQ0FBQyxLQUFLQyxNQUFMLENBQVlwVCxFQUFaLENBQWUsVUFBZixDQUFoQixHQUEyQyxJQUEzQyxJQUFpRCxLQUFLK1MsU0FBTCxHQUFlLElBQWYsRUFBb0IsS0FBS0ssTUFBTCxDQUFZM1MsSUFBWixHQUFtQnVYLE1BQW5CLEVBQXBCLEVBQWdELEtBQUtULHNCQUFMLEVBQWhELEVBQThFLEtBQUtsRCxXQUFMLENBQWlCLEtBQUt4QixDQUFMLENBQU95QixTQUF4QixDQUE5RSxFQUFpSCxLQUFLekIsQ0FBTCxDQUFPb0YsVUFBUCxJQUFtQixLQUFLaEYsVUFBTCxDQUFnQm5SLEdBQWhCLEVBQW5CLElBQTBDLEtBQUtvVyxRQUFMLEVBQTNKLEVBQTJLLEtBQUtWLFFBQUwsQ0FBYyxNQUFkLENBQTNLLEVBQWlNLElBQWxQLENBQVA7QUFBK1AsS0FBdmlMO0FBQXdpTHZXLFdBQU8sRUFBQyxtQkFBVTtBQUFDLGFBQU8sS0FBS1IsSUFBTCxJQUFZLEtBQUs0VyxhQUFMLEVBQVosRUFBaUMsS0FBS0Usc0JBQUwsRUFBakMsRUFBK0QsS0FBS25FLE1BQUwsQ0FBWXhTLE1BQVosRUFBL0QsRUFBb0YsT0FBTyxLQUFLNkosT0FBTCxDQUFhOUwsSUFBYixHQUFvQlcsVUFBL0csRUFBMEgsS0FBSzBULE9BQUwsSUFBYyxPQUFPLEtBQUt2SSxPQUFMLENBQWE5TCxJQUFiLEdBQW9CcVksSUFBbkssRUFBd0ssSUFBL0s7QUFBb0wsS0FBL3VMO0FBQWd2TE4sU0FBSyxFQUFDLGVBQVNqRyxDQUFULEVBQVc7QUFBQyxVQUFJQyxDQUFKO0FBQU0sVUFBR0QsQ0FBQyxDQUFDMEgsYUFBRixDQUFnQkMsYUFBaEIsSUFBK0IzSCxDQUFDLENBQUMwSCxhQUFGLENBQWdCQyxhQUFoQixDQUE4QkMsS0FBN0QsSUFBb0U5SCxDQUFDLENBQUNxRSxPQUFGLENBQVUsWUFBVixFQUF1Qm5FLENBQUMsQ0FBQzBILGFBQUYsQ0FBZ0JDLGFBQWhCLENBQThCQyxLQUFyRCxNQUE4RCxDQUFDLENBQXRJLEVBQXdJM0gsQ0FBQyxHQUFDRCxDQUFDLENBQUMwSCxhQUFGLENBQWdCQyxhQUFoQixDQUE4QkUsT0FBOUIsQ0FBc0MsWUFBdEMsQ0FBRixDQUF4SSxLQUFrTTtBQUFDLFlBQUcsQ0FBQzdJLE1BQU0sQ0FBQzJJLGFBQVgsRUFBeUI7QUFBTzFILFNBQUMsR0FBQ2pCLE1BQU0sQ0FBQzJJLGFBQVAsQ0FBcUJFLE9BQXJCLENBQTZCLE1BQTdCLENBQUY7QUFBdUM7QUFBQSxXQUFLQyxPQUFMLENBQWE3SCxDQUFiLEdBQWdCLEtBQUszUCxNQUFMLEVBQWhCLEVBQThCMFAsQ0FBQyxDQUFDalQsY0FBRixFQUE5QjtBQUFpRCxLQUFua007QUFBb2tNaWEsaUJBQWEsRUFBQyx1QkFBU2xILENBQVQsRUFBVztBQUFDLFVBQUcsQ0FBQ0EsQ0FBSixFQUFNLE9BQU9BLENBQVA7QUFBUyxVQUFJRSxDQUFDLEdBQUMsSUFBSUUsSUFBSixDQUFTSixDQUFDLENBQUNtQixPQUFGLEtBQVksTUFBSW5CLENBQUMsQ0FBQ2lJLGlCQUFGLEVBQXpCLENBQU47QUFBc0QsYUFBTy9ILENBQUMsQ0FBQytILGlCQUFGLE9BQXdCakksQ0FBQyxDQUFDaUksaUJBQUYsRUFBeEIsS0FBZ0QvSCxDQUFDLEdBQUMsSUFBSUUsSUFBSixDQUFTSixDQUFDLENBQUNtQixPQUFGLEtBQVksTUFBSWpCLENBQUMsQ0FBQytILGlCQUFGLEVBQXpCLENBQWxELEdBQW1HL0gsQ0FBMUc7QUFBNEcsS0FBL3dNO0FBQWd4TWdGLGlCQUFhLEVBQUMsdUJBQVNsRixDQUFULEVBQVc7QUFBQyxhQUFPQSxDQUFDLElBQUUsSUFBSUksSUFBSixDQUFTSixDQUFDLENBQUNtQixPQUFGLEtBQVksTUFBSW5CLENBQUMsQ0FBQ2lJLGlCQUFGLEVBQXpCLENBQVY7QUFBMEQsS0FBcDJNO0FBQXEyTTlDLGNBQVUsRUFBQyxvQkFBU25GLENBQVQsRUFBVztBQUFDLGFBQU9BLENBQUMsSUFBRSxJQUFJSSxJQUFKLENBQVNKLENBQUMsQ0FBQ1MsV0FBRixFQUFULEVBQXlCVCxDQUFDLENBQUNVLFFBQUYsRUFBekIsRUFBc0NWLENBQUMsQ0FBQ1csT0FBRixFQUF0QyxDQUFWO0FBQTZELEtBQXo3TTtBQUEwN011SCxrQkFBYyxFQUFDLHdCQUFTbEksQ0FBVCxFQUFXO0FBQUMsYUFBT0EsQ0FBQyxJQUFFRyxDQUFDLENBQUNILENBQUMsQ0FBQ1ksY0FBRixFQUFELEVBQW9CWixDQUFDLENBQUNhLFdBQUYsRUFBcEIsRUFBb0NiLENBQUMsQ0FBQ2MsVUFBRixFQUFwQyxDQUFYO0FBQStELEtBQXBoTjtBQUFxaE5xSCxZQUFRLEVBQUMsb0JBQVU7QUFBQyxhQUFPbkksQ0FBQyxDQUFDN0IsR0FBRixDQUFNLEtBQUtpRSxLQUFYLEVBQWlCLEtBQUs4RSxhQUF0QixDQUFQO0FBQTRDLEtBQXJsTjtBQUFzbE5rQixlQUFXLEVBQUMsdUJBQVU7QUFBQyxhQUFPcEksQ0FBQyxDQUFDN0IsR0FBRixDQUFNLEtBQUtpRSxLQUFYLEVBQWlCLFVBQVNwQyxDQUFULEVBQVc7QUFBQyxlQUFPLElBQUlJLElBQUosQ0FBU0osQ0FBVCxDQUFQO0FBQW1CLE9BQWhELENBQVA7QUFBeUQsS0FBdHFOO0FBQXVxTlcsV0FBTyxFQUFDLG1CQUFVO0FBQUMsYUFBTyxLQUFLdUcsYUFBTCxDQUFtQixLQUFLcEcsVUFBTCxFQUFuQixDQUFQO0FBQTZDLEtBQXZ1TjtBQUF3dU5BLGNBQVUsRUFBQyxzQkFBVTtBQUFDLFVBQUlkLENBQUMsR0FBQyxLQUFLb0MsS0FBTCxDQUFXMUUsR0FBWCxDQUFlLENBQUMsQ0FBaEIsQ0FBTjtBQUF5QixhQUFPc0MsQ0FBQyxLQUFHRSxDQUFKLEdBQU0sSUFBSUUsSUFBSixDQUFTSixDQUFULENBQU4sR0FBa0IsSUFBekI7QUFBOEIsS0FBcnpOO0FBQXN6TnFJLGNBQVUsRUFBQyxzQkFBVTtBQUFDLFdBQUszRixVQUFMLENBQWdCblIsR0FBaEIsQ0FBb0IsRUFBcEIsR0FBd0IsS0FBS2YsTUFBTCxFQUF4QixFQUFzQyxLQUFLeVcsUUFBTCxDQUFjLFlBQWQsQ0FBdEMsRUFBa0UsS0FBSzNFLENBQUwsQ0FBT2dHLFNBQVAsSUFBa0IsS0FBS3BZLElBQUwsRUFBcEY7QUFBZ0csS0FBNTZOO0FBQTY2TnFZLFlBQVEsRUFBQyxvQkFBVTtBQUFDLFVBQUlySSxDQUFDLEdBQUNGLENBQUMsQ0FBQytCLE9BQUYsQ0FBVXhCLFNBQVMsQ0FBQyxDQUFELENBQW5CLElBQXdCQSxTQUFTLENBQUMsQ0FBRCxDQUFqQyxHQUFxQ0EsU0FBM0M7QUFBcUQsYUFBTyxLQUFLL1AsTUFBTCxDQUFZOFAsS0FBWixDQUFrQixJQUFsQixFQUF1QkosQ0FBdkIsR0FBMEIsS0FBSytHLFFBQUwsQ0FBYyxZQUFkLENBQTFCLEVBQXNELEtBQUtVLFFBQUwsRUFBdEQsRUFBc0UsSUFBN0U7QUFBa0YsS0FBeGtPO0FBQXlrT2EsZUFBVyxFQUFDLHVCQUFVO0FBQUMsVUFBSXRJLENBQUMsR0FBQ0YsQ0FBQyxDQUFDK0IsT0FBRixDQUFVeEIsU0FBUyxDQUFDLENBQUQsQ0FBbkIsSUFBd0JBLFNBQVMsQ0FBQyxDQUFELENBQWpDLEdBQXFDQSxTQUEzQztBQUFxRCxhQUFPLEtBQUtnSSxRQUFMLENBQWNqSSxLQUFkLENBQW9CLElBQXBCLEVBQXlCTixDQUFDLENBQUM3QixHQUFGLENBQU0rQixDQUFOLEVBQVEsS0FBS2dILGFBQWIsQ0FBekIsR0FBc0QsSUFBN0Q7QUFBa0UsS0FBdnRPO0FBQXd0T2MsV0FBTyxFQUFDakgsQ0FBQyxDQUFDLFVBQUQsQ0FBanVPO0FBQTh1TzBILGNBQVUsRUFBQzFILENBQUMsQ0FBQyxhQUFELENBQTF2TztBQUEwd08xUSxVQUFNLEVBQUMwUSxDQUFDLENBQUMsU0FBRCxFQUFXLHlGQUFYLENBQWx4TztBQUF3M080RyxZQUFRLEVBQUMsb0JBQVU7QUFBQyxVQUFJM0gsQ0FBQyxHQUFDLEtBQUswSSxnQkFBTCxFQUFOO0FBQThCLGFBQU8sS0FBS2hHLFVBQUwsQ0FBZ0JuUixHQUFoQixDQUFvQnlPLENBQXBCLEdBQXVCLElBQTlCO0FBQW1DLEtBQTc4TztBQUE4OE8wSSxvQkFBZ0IsRUFBQywwQkFBU3ZJLENBQVQsRUFBVztBQUFDQSxPQUFDLEtBQUdELENBQUosS0FBUUMsQ0FBQyxHQUFDLEtBQUttQyxDQUFMLENBQU8yQyxNQUFqQjtBQUF5QixVQUFJekUsQ0FBQyxHQUFDLEtBQUs4QixDQUFMLENBQU8zVCxRQUFiO0FBQXNCLGFBQU9xUixDQUFDLENBQUM3QixHQUFGLENBQU0sS0FBS2lFLEtBQVgsRUFBaUIsVUFBU3BDLENBQVQsRUFBVztBQUFDLGVBQU84QyxDQUFDLENBQUNzRSxVQUFGLENBQWFwSCxDQUFiLEVBQWVHLENBQWYsRUFBaUJLLENBQWpCLENBQVA7QUFBMkIsT0FBeEQsRUFBMEQvVCxJQUExRCxDQUErRCxLQUFLNlYsQ0FBTCxDQUFPNVQsa0JBQXRFLENBQVA7QUFBaUcsS0FBM25QO0FBQTRuUGlhLGdCQUFZLEVBQUMsd0JBQVU7QUFBQyxhQUFPLEtBQUtyRyxDQUFMLENBQU9rQixTQUFkO0FBQXdCLEtBQTVxUDtBQUE2cVBvRixnQkFBWSxFQUFDLHNCQUFTNUksQ0FBVCxFQUFXO0FBQUMsYUFBTyxLQUFLbUMsZ0JBQUwsQ0FBc0I7QUFBQ3FCLGlCQUFTLEVBQUN4RDtBQUFYLE9BQXRCLEdBQXFDLEtBQUt4UCxNQUFMLEVBQXJDLEVBQW1ELEtBQUtxWSxlQUFMLEVBQW5ELEVBQTBFLElBQWpGO0FBQXNGLEtBQTV4UDtBQUE2eFBDLGNBQVUsRUFBQyxzQkFBVTtBQUFDLGFBQU8sS0FBS3hHLENBQUwsQ0FBT29CLE9BQWQ7QUFBc0IsS0FBejBQO0FBQTAwUHFGLGNBQVUsRUFBQyxvQkFBUy9JLENBQVQsRUFBVztBQUFDLGFBQU8sS0FBS21DLGdCQUFMLENBQXNCO0FBQUN1QixlQUFPLEVBQUMxRDtBQUFULE9BQXRCLEdBQW1DLEtBQUt4UCxNQUFMLEVBQW5DLEVBQWlELEtBQUtxWSxlQUFMLEVBQWpELEVBQXdFLElBQS9FO0FBQW9GLEtBQXI3UDtBQUFzN1BHLHlCQUFxQixFQUFDLCtCQUFTaEosQ0FBVCxFQUFXO0FBQUMsYUFBTyxLQUFLbUMsZ0JBQUwsQ0FBc0I7QUFBQ3dCLDBCQUFrQixFQUFDM0Q7QUFBcEIsT0FBdEIsR0FBOEMsS0FBS3hQLE1BQUwsRUFBOUMsRUFBNEQsSUFBbkU7QUFBd0UsS0FBaGlRO0FBQWlpUXlZLDRCQUF3QixFQUFDLGtDQUFTakosQ0FBVCxFQUFXO0FBQUMsYUFBTyxLQUFLbUMsZ0JBQUwsQ0FBc0I7QUFBQ3ZULDZCQUFxQixFQUFDb1I7QUFBdkIsT0FBdEIsR0FBaUQsS0FBS3hQLE1BQUwsRUFBakQsRUFBK0QsSUFBdEU7QUFBMkUsS0FBanBRO0FBQWtwUTBZLG9CQUFnQixFQUFDLDBCQUFTbEosQ0FBVCxFQUFXO0FBQUMsYUFBTyxLQUFLbUMsZ0JBQUwsQ0FBc0I7QUFBQ3lCLHFCQUFhLEVBQUM1RDtBQUFmLE9BQXRCLEdBQXlDLEtBQUt4UCxNQUFMLEVBQXpDLEVBQXVELElBQTlEO0FBQW1FLEtBQWx2UTtBQUFtdlFxVyxTQUFLLEVBQUMsaUJBQVU7QUFBQyxVQUFHLEtBQUtqRSxRQUFSLEVBQWlCLE9BQU8sSUFBUDtBQUFZLFVBQUkxQyxDQUFDLEdBQUMsS0FBSzJDLE1BQUwsQ0FBWXNHLFVBQVosRUFBTjtBQUFBLFVBQStCaEosQ0FBQyxHQUFDLEtBQUswQyxNQUFMLENBQVl1RyxXQUFaLEVBQWpDO0FBQUEsVUFBMkQ1SSxDQUFDLEdBQUMsRUFBN0Q7QUFBQSxVQUFnRTlVLENBQUMsR0FBQ3NVLENBQUMsQ0FBQyxLQUFLc0MsQ0FBTCxDQUFPaFUsU0FBUixDQUFuRTtBQUFBLFVBQXNGeVMsQ0FBQyxHQUFDclYsQ0FBQyxDQUFDMmQsS0FBRixFQUF4RjtBQUFBLFVBQWtHcEksQ0FBQyxHQUFDLFdBQVMsS0FBS3FCLENBQUwsQ0FBT2hVLFNBQWhCLEdBQTBCMFIsQ0FBQyxDQUFDaFUsUUFBRCxDQUFELENBQVl1UyxTQUFaLEVBQTFCLEdBQWtEN1MsQ0FBQyxDQUFDNlMsU0FBRixFQUF0SjtBQUFBLFVBQW9LNkMsQ0FBQyxHQUFDMVYsQ0FBQyxDQUFDOFMsTUFBRixFQUF0SztBQUFBLFVBQWlMblMsQ0FBQyxHQUFDLENBQUMsQ0FBRCxDQUFuTDtBQUF1TCxXQUFLNk4sT0FBTCxDQUFhb1AsT0FBYixHQUF1QnJiLElBQXZCLENBQTRCLFlBQVU7QUFBQyxZQUFJaVMsQ0FBQyxHQUFDRixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFoVCxHQUFSLENBQVksU0FBWixDQUFOO0FBQTZCLG1CQUFTa1QsQ0FBVCxJQUFZLE1BQUlwRyxNQUFNLENBQUNvRyxDQUFELENBQXRCLElBQTJCN1QsQ0FBQyxDQUFDRSxJQUFGLENBQU91TixNQUFNLENBQUNvRyxDQUFELENBQWIsQ0FBM0I7QUFBNkMsT0FBakg7QUFBbUgsVUFBSXdCLENBQUMsR0FBQ3ZPLElBQUksQ0FBQ3VSLEdBQUwsQ0FBU3BFLEtBQVQsQ0FBZW5OLElBQWYsRUFBb0I5RyxDQUFwQixJQUF1QixLQUFLaVcsQ0FBTCxDQUFPaUgsWUFBcEM7QUFBQSxVQUFpRHJILENBQUMsR0FBQyxLQUFLUyxTQUFMLEdBQWUsS0FBS0EsU0FBTCxDQUFlbFIsTUFBZixHQUF3QitNLE1BQXhCLEVBQWYsR0FBZ0QsS0FBS3RFLE9BQUwsQ0FBYXNFLE1BQWIsRUFBbkc7QUFBQSxVQUF5SG1ILENBQUMsR0FBQyxLQUFLaEQsU0FBTCxHQUFlLEtBQUtBLFNBQUwsQ0FBZXlHLFdBQWYsQ0FBMkIsQ0FBQyxDQUE1QixDQUFmLEdBQThDLEtBQUtsUCxPQUFMLENBQWFrUCxXQUFiLENBQXlCLENBQUMsQ0FBMUIsQ0FBeks7QUFBQSxVQUFzTUksQ0FBQyxHQUFDLEtBQUs3RyxTQUFMLEdBQWUsS0FBS0EsU0FBTCxDQUFld0csVUFBZixDQUEwQixDQUFDLENBQTNCLENBQWYsR0FBNkMsS0FBS2pQLE9BQUwsQ0FBYWlQLFVBQWIsQ0FBd0IsQ0FBQyxDQUF6QixDQUFyUDtBQUFBLFVBQWlSTSxDQUFDLEdBQUN2SCxDQUFDLENBQUN3SCxJQUFGLEdBQU90SSxDQUFDLENBQUNzSSxJQUE1UjtBQUFBLFVBQWlTcEgsQ0FBQyxHQUFDSixDQUFDLENBQUN6RCxHQUFGLEdBQU0yQyxDQUFDLENBQUMzQyxHQUEzUztBQUErUyxpQkFBUyxLQUFLNkQsQ0FBTCxDQUFPaFUsU0FBaEIsS0FBNEJnVSxDQUFDLElBQUVyQixDQUEvQixHQUFrQyxLQUFLNEIsTUFBTCxDQUFZdFYsV0FBWixDQUF3QiwrRkFBeEIsQ0FBbEMsRUFBMkosV0FBUyxLQUFLK1UsQ0FBTCxDQUFPZ0QsV0FBUCxDQUFtQjlMLENBQTVCLElBQStCLEtBQUtxSixNQUFMLENBQVkxVCxRQUFaLENBQXFCLHVCQUFxQixLQUFLbVQsQ0FBTCxDQUFPZ0QsV0FBUCxDQUFtQjlMLENBQTdELEdBQWdFLFlBQVUsS0FBSzhJLENBQUwsQ0FBT2dELFdBQVAsQ0FBbUI5TCxDQUE3QixLQUFpQ2lRLENBQUMsSUFBRXZKLENBQUMsR0FBQ3NKLENBQXRDLENBQS9GLElBQXlJdEgsQ0FBQyxDQUFDd0gsSUFBRixHQUFPLENBQVAsSUFBVSxLQUFLN0csTUFBTCxDQUFZMVQsUUFBWixDQUFxQix3QkFBckIsR0FBK0NzYSxDQUFDLElBQUV2SCxDQUFDLENBQUN3SCxJQUFGLEdBQU9sSixDQUFuRSxJQUFzRWlKLENBQUMsR0FBQ3ZKLENBQUYsR0FBSWEsQ0FBSixJQUFPLEtBQUs4QixNQUFMLENBQVkxVCxRQUFaLENBQXFCLHlCQUFyQixHQUFnRHNhLENBQUMsSUFBRUQsQ0FBQyxHQUFDdEosQ0FBNUQsSUFBK0QsS0FBS29DLENBQUwsQ0FBT2dCLEdBQVAsR0FBVyxLQUFLVCxNQUFMLENBQVkxVCxRQUFaLENBQXFCLHlCQUFyQixDQUFYLEdBQTJELEtBQUswVCxNQUFMLENBQVkxVCxRQUFaLENBQXFCLHdCQUFyQixDQUFwZTtBQUFtaEIsVUFBSXNTLENBQUo7QUFBQSxVQUFNRCxDQUFDLEdBQUMsS0FBS2MsQ0FBTCxDQUFPZ0QsV0FBUCxDQUFtQkUsQ0FBM0I7O0FBQTZCLFVBQUcsV0FBU2hFLENBQVQsS0FBYUMsQ0FBQyxHQUFDLENBQUNSLENBQUQsR0FBR3FCLENBQUgsR0FBS25DLENBQVAsRUFBU3FCLENBQUMsR0FBQ0MsQ0FBQyxHQUFDLENBQUYsR0FBSSxRQUFKLEdBQWEsS0FBckMsR0FBNEMsS0FBS29CLE1BQUwsQ0FBWTFULFFBQVosQ0FBcUIsdUJBQXFCcVMsQ0FBMUMsQ0FBNUMsRUFBeUYsVUFBUUEsQ0FBUixHQUFVYyxDQUFDLElBQUVuQyxDQUFDLEdBQUN3SixRQUFRLENBQUMsS0FBSzlHLE1BQUwsQ0FBWTdWLEdBQVosQ0FBZ0IsYUFBaEIsQ0FBRCxDQUF2QixHQUF3RHNWLENBQUMsSUFBRXFELENBQXBKLEVBQXNKLEtBQUtyRCxDQUFMLENBQU9nQixHQUFoSyxFQUFvSztBQUFDLFlBQUlSLENBQUMsR0FBQy9CLENBQUMsSUFBRTBJLENBQUMsR0FBQ0QsQ0FBSixDQUFQO0FBQWMsYUFBSzNHLE1BQUwsQ0FBWTdWLEdBQVosQ0FBZ0I7QUFBQ3lSLGFBQUcsRUFBQzZELENBQUw7QUFBT3NILGVBQUssRUFBQzlHLENBQWI7QUFBZStHLGdCQUFNLEVBQUNuSTtBQUF0QixTQUFoQjtBQUEwQyxPQUE3TixNQUFrTyxLQUFLbUIsTUFBTCxDQUFZN1YsR0FBWixDQUFnQjtBQUFDeVIsV0FBRyxFQUFDNkQsQ0FBTDtBQUFPb0gsWUFBSSxFQUFDRCxDQUFaO0FBQWNJLGNBQU0sRUFBQ25JO0FBQXJCLE9BQWhCOztBQUF5QyxhQUFPLElBQVA7QUFBWSxLQUFqc1Q7QUFBa3NUbUMsaUJBQWEsRUFBQyxDQUFDLENBQWp0VDtBQUFtdFRyVCxVQUFNLEVBQUMsa0JBQVU7QUFBQyxVQUFHLENBQUMsS0FBS3FULGFBQVQsRUFBdUIsT0FBTyxJQUFQO0FBQVksVUFBSTNELENBQUMsR0FBQyxLQUFLa0MsS0FBTCxDQUFXSCxJQUFYLEVBQU47QUFBQSxVQUF3QjlCLENBQUMsR0FBQyxFQUExQjtBQUFBLFVBQTZCSyxDQUFDLEdBQUMsQ0FBQyxDQUFoQztBQUFrQyxhQUFPRCxTQUFTLENBQUNqVSxNQUFWLElBQWtCMFQsQ0FBQyxDQUFDL1IsSUFBRixDQUFPc1MsU0FBUCxFQUFpQlAsQ0FBQyxDQUFDdEYsS0FBRixDQUFRLFVBQVNzRixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDQSxTQUFDLFlBQVlFLElBQWIsS0FBb0JGLENBQUMsR0FBQyxLQUFLZ0YsYUFBTCxDQUFtQmhGLENBQW5CLENBQXRCLEdBQTZDQyxDQUFDLENBQUM1VCxJQUFGLENBQU8yVCxDQUFQLENBQTdDO0FBQXVELE9BQTdFLEVBQThFLElBQTlFLENBQWpCLEdBQXNHTSxDQUFDLEdBQUMsQ0FBQyxDQUEzSCxLQUErSEwsQ0FBQyxHQUFDLEtBQUtzQyxPQUFMLEdBQWEsS0FBS3ZJLE9BQUwsQ0FBYTNJLEdBQWIsRUFBYixHQUFnQyxLQUFLMkksT0FBTCxDQUFhOUwsSUFBYixDQUFrQixNQUFsQixLQUEyQixLQUFLc1UsVUFBTCxDQUFnQm5SLEdBQWhCLEVBQTdELEVBQW1GNE8sQ0FBQyxHQUFDQSxDQUFDLElBQUUsS0FBS21DLENBQUwsQ0FBT3NDLFNBQVYsR0FBb0J6RSxDQUFDLENBQUNuSyxLQUFGLENBQVEsS0FBS3NNLENBQUwsQ0FBTzVULGtCQUFmLENBQXBCLEdBQXVELENBQUN5UixDQUFELENBQTVJLEVBQWdKLE9BQU8sS0FBS2pHLE9BQUwsQ0FBYTlMLElBQWIsR0FBb0JxWSxJQUExUyxHQUFnVHRHLENBQUMsR0FBQ0gsQ0FBQyxDQUFDN0IsR0FBRixDQUFNZ0MsQ0FBTixFQUFRSCxDQUFDLENBQUN0RixLQUFGLENBQVEsVUFBU3NGLENBQVQsRUFBVztBQUFDLGVBQU84QyxDQUFDLENBQUNzQyxTQUFGLENBQVlwRixDQUFaLEVBQWMsS0FBS3NDLENBQUwsQ0FBTzJDLE1BQXJCLEVBQTRCLEtBQUszQyxDQUFMLENBQU8zVCxRQUFuQyxFQUE0QyxLQUFLMlQsQ0FBTCxDQUFPK0MsZ0JBQW5ELENBQVA7QUFBNEUsT0FBaEcsRUFBaUcsSUFBakcsQ0FBUixDQUFsVCxFQUFrYWxGLENBQUMsR0FBQ0gsQ0FBQyxDQUFDdUYsSUFBRixDQUFPcEYsQ0FBUCxFQUFTSCxDQUFDLENBQUN0RixLQUFGLENBQVEsVUFBU3NGLENBQVQsRUFBVztBQUFDLGVBQU0sQ0FBQyxLQUFLOEosZUFBTCxDQUFxQjlKLENBQXJCLENBQUQsSUFBMEIsQ0FBQ0EsQ0FBakM7QUFBbUMsT0FBdkQsRUFBd0QsSUFBeEQsQ0FBVCxFQUF1RSxDQUFDLENBQXhFLENBQXBhLEVBQStlLEtBQUtvQyxLQUFMLENBQVc5TyxPQUFYLENBQW1CNk0sQ0FBbkIsQ0FBL2UsRUFBcWdCLEtBQUttQyxDQUFMLENBQU95SCxjQUFQLEtBQXdCLEtBQUszSCxLQUFMLENBQVc5VixNQUFYLEdBQWtCLEtBQUsrVixRQUFMLEdBQWMsSUFBSWpDLElBQUosQ0FBUyxLQUFLZ0MsS0FBTCxDQUFXMUUsR0FBWCxDQUFlLENBQUMsQ0FBaEIsQ0FBVCxDQUFoQyxHQUE2RCxLQUFLMkUsUUFBTCxHQUFjLEtBQUtDLENBQUwsQ0FBT2tCLFNBQXJCLEdBQStCLEtBQUtuQixRQUFMLEdBQWMsSUFBSWpDLElBQUosQ0FBUyxLQUFLa0MsQ0FBTCxDQUFPa0IsU0FBaEIsQ0FBN0MsR0FBd0UsS0FBS25CLFFBQUwsR0FBYyxLQUFLQyxDQUFMLENBQU9vQixPQUFyQixHQUE2QixLQUFLckIsUUFBTCxHQUFjLElBQUlqQyxJQUFKLENBQVMsS0FBS2tDLENBQUwsQ0FBT29CLE9BQWhCLENBQTNDLEdBQW9FLEtBQUtyQixRQUFMLEdBQWMsS0FBS0MsQ0FBTCxDQUFPQyxlQUF0UCxDQUFyZ0IsRUFBNHdCL0IsQ0FBQyxJQUFFLEtBQUttSCxRQUFMLElBQWdCLEtBQUt6TixPQUFMLENBQWE5TixNQUFiLEVBQWxCLElBQXlDLEtBQUtnVyxLQUFMLENBQVc5VixNQUFYLElBQW1CdVksTUFBTSxDQUFDM0UsQ0FBRCxDQUFOLEtBQVkyRSxNQUFNLENBQUMsS0FBS3pDLEtBQU4sQ0FBckMsSUFBbUQ1QixDQUFuRCxLQUF1RCxLQUFLeUcsUUFBTCxDQUFjLFlBQWQsR0FBNEIsS0FBSy9NLE9BQUwsQ0FBYTlOLE1BQWIsRUFBbkYsQ0FBdHpCLEVBQWc2QixDQUFDLEtBQUtnVyxLQUFMLENBQVc5VixNQUFaLElBQW9CNFQsQ0FBQyxDQUFDNVQsTUFBdEIsS0FBK0IsS0FBSzJhLFFBQUwsQ0FBYyxXQUFkLEdBQTJCLEtBQUsvTSxPQUFMLENBQWE5TixNQUFiLEVBQTFELENBQWg2QixFQUFpL0IsS0FBSzRkLElBQUwsRUFBai9CLEVBQTYvQixJQUFwZ0M7QUFBeWdDLEtBQW56VjtBQUFvelZoRyxXQUFPLEVBQUMsbUJBQVU7QUFBQyxVQUFHLEtBQUsxQixDQUFMLENBQU8ySCxZQUFWLEVBQXVCO0FBQUMsWUFBSS9KLENBQUMsR0FBQyxLQUFLb0MsQ0FBTCxDQUFPd0MsU0FBYjtBQUFBLFlBQXVCM0UsQ0FBQyxHQUFDLE1BQXpCOztBQUFnQyxhQUFJLEtBQUttQyxDQUFMLENBQU9pQixhQUFQLEtBQXVCcEQsQ0FBQyxJQUFFLDRCQUExQixDQUFKLEVBQTRERCxDQUFDLEdBQUMsS0FBS29DLENBQUwsQ0FBT3dDLFNBQVAsR0FBaUIsQ0FBL0U7QUFBa0YzRSxXQUFDLElBQUUsZ0JBQUgsRUFBb0JILENBQUMsQ0FBQ3FFLE9BQUYsQ0FBVW5FLENBQVYsRUFBWSxLQUFLb0MsQ0FBTCxDQUFPcUIsa0JBQW5CLE1BQXlDLENBQUMsQ0FBMUMsS0FBOEN4RCxDQUFDLElBQUUsV0FBakQsQ0FBcEIsRUFBa0ZBLENBQUMsSUFBRSxPQUFLcUIsQ0FBQyxDQUFDLEtBQUtjLENBQUwsQ0FBTzNULFFBQVIsQ0FBRCxDQUFtQnViLE9BQW5CLENBQTJCaEssQ0FBQyxLQUFHLENBQS9CLENBQUwsR0FBdUMsT0FBNUg7QUFBbEY7O0FBQXNOQyxTQUFDLElBQUUsT0FBSCxFQUFXLEtBQUswQyxNQUFMLENBQVk5VixJQUFaLENBQWlCLHdCQUFqQixFQUEyQ2lILE1BQTNDLENBQWtEbU0sQ0FBbEQsQ0FBWDtBQUFnRTtBQUFDLEtBQXRwVztBQUF1cFc4RCxjQUFVLEVBQUMsc0JBQVU7QUFBQyxXQUFJLElBQUlqRSxDQUFKLEVBQU1FLENBQUMsR0FBQyxLQUFLZ0gsYUFBTCxDQUFtQixLQUFLN0UsUUFBeEIsQ0FBUixFQUEwQ2xDLENBQUMsR0FBQyxFQUE1QyxFQUErQ0ssQ0FBQyxHQUFDLENBQXJELEVBQXVEQSxDQUFDLEdBQUMsRUFBekQsRUFBNERBLENBQUMsRUFBN0Q7QUFBZ0VSLFNBQUMsR0FBQ0UsQ0FBQyxJQUFFQSxDQUFDLENBQUNRLFFBQUYsT0FBZUYsQ0FBbEIsR0FBb0IsVUFBcEIsR0FBK0IsRUFBakMsRUFBb0NMLENBQUMsSUFBRSx1QkFBcUJILENBQXJCLEdBQXVCLElBQXZCLEdBQTRCd0IsQ0FBQyxDQUFDLEtBQUtjLENBQUwsQ0FBTzNULFFBQVIsQ0FBRCxDQUFtQndiLFdBQW5CLENBQStCM0osQ0FBL0IsQ0FBNUIsR0FBOEQsU0FBckc7QUFBaEU7O0FBQStLLFdBQUtxQyxNQUFMLENBQVk5VixJQUFaLENBQWlCLHVCQUFqQixFQUEwQ2hCLElBQTFDLENBQStDb1UsQ0FBL0M7QUFBa0QsS0FBOTRXO0FBQSs0V2lLLFlBQVEsRUFBQyxrQkFBU2xLLENBQVQsRUFBVztBQUFDQSxPQUFDLElBQUVBLENBQUMsQ0FBQzVULE1BQUwsR0FBWSxLQUFLK2QsS0FBTCxHQUFXckssQ0FBQyxDQUFDN0IsR0FBRixDQUFNK0IsQ0FBTixFQUFRLFVBQVNGLENBQVQsRUFBVztBQUFDLGVBQU9BLENBQUMsQ0FBQzZCLE9BQUYsRUFBUDtBQUFtQixPQUF2QyxDQUF2QixHQUFnRSxPQUFPLEtBQUt3SSxLQUE1RSxFQUFrRixLQUFLTCxJQUFMLEVBQWxGO0FBQThGLEtBQWxnWDtBQUFtZ1hNLGlCQUFhLEVBQUMsdUJBQVNwSyxDQUFULEVBQVc7QUFBQyxVQUFJQyxDQUFDLEdBQUMsRUFBTjtBQUFBLFVBQVNZLENBQUMsR0FBQyxLQUFLc0IsUUFBTCxDQUFjekIsY0FBZCxFQUFYO0FBQUEsVUFBMENLLENBQUMsR0FBQyxLQUFLb0IsUUFBTCxDQUFjeEIsV0FBZCxFQUE1QztBQUFBLFVBQXdFTyxDQUFDLEdBQUNaLENBQUMsRUFBM0U7QUFBOEUsYUFBT04sQ0FBQyxDQUFDVSxjQUFGLEtBQW1CRyxDQUFuQixJQUFzQmIsQ0FBQyxDQUFDVSxjQUFGLE9BQXFCRyxDQUFyQixJQUF3QmIsQ0FBQyxDQUFDVyxXQUFGLEtBQWdCSSxDQUE5RCxHQUFnRWQsQ0FBQyxDQUFDNVQsSUFBRixDQUFPLEtBQVAsQ0FBaEUsR0FBOEUsQ0FBQzJULENBQUMsQ0FBQ1UsY0FBRixLQUFtQkcsQ0FBbkIsSUFBc0JiLENBQUMsQ0FBQ1UsY0FBRixPQUFxQkcsQ0FBckIsSUFBd0JiLENBQUMsQ0FBQ1csV0FBRixLQUFnQkksQ0FBL0QsS0FBbUVkLENBQUMsQ0FBQzVULElBQUYsQ0FBTyxLQUFQLENBQWpKLEVBQStKLEtBQUtpVyxTQUFMLElBQWdCdEMsQ0FBQyxDQUFDMkIsT0FBRixPQUFjLEtBQUtXLFNBQUwsQ0FBZVgsT0FBZixFQUE5QixJQUF3RDFCLENBQUMsQ0FBQzVULElBQUYsQ0FBTyxTQUFQLENBQXZOLEVBQXlPLEtBQUsrVixDQUFMLENBQU9pSSxjQUFQLElBQXVCN2UsQ0FBQyxDQUFDd1UsQ0FBRCxFQUFHa0IsQ0FBSCxDQUF4QixJQUErQmpCLENBQUMsQ0FBQzVULElBQUYsQ0FBTyxPQUFQLENBQXhRLEVBQXdSLEtBQUs2VixLQUFMLENBQVdSLFFBQVgsQ0FBb0IxQixDQUFwQixNQUF5QixDQUFDLENBQTFCLElBQTZCQyxDQUFDLENBQUM1VCxJQUFGLENBQU8sUUFBUCxDQUFyVCxFQUFzVSxLQUFLdWQsZUFBTCxDQUFxQjVKLENBQXJCLEtBQXlCQyxDQUFDLENBQUM1VCxJQUFGLENBQU8sVUFBUCxDQUEvVixFQUFrWCxLQUFLaWUsY0FBTCxDQUFvQnRLLENBQXBCLEtBQXdCQyxDQUFDLENBQUM1VCxJQUFGLENBQU8sVUFBUCxFQUFrQixlQUFsQixDQUExWSxFQUE2YXlULENBQUMsQ0FBQ3FFLE9BQUYsQ0FBVW5FLENBQUMsQ0FBQ3VLLFNBQUYsRUFBVixFQUF3QixLQUFLbkksQ0FBTCxDQUFPMVQscUJBQS9CLE1BQXdELENBQUMsQ0FBekQsSUFBNER1UixDQUFDLENBQUM1VCxJQUFGLENBQU8sYUFBUCxDQUF6ZSxFQUErZixLQUFLOGQsS0FBTCxLQUFhbkssQ0FBQyxHQUFDLEtBQUttSyxLQUFMLENBQVcsQ0FBWCxDQUFGLElBQWlCbkssQ0FBQyxHQUFDLEtBQUttSyxLQUFMLENBQVcsS0FBS0EsS0FBTCxDQUFXL2QsTUFBWCxHQUFrQixDQUE3QixDQUFuQixJQUFvRDZULENBQUMsQ0FBQzVULElBQUYsQ0FBTyxPQUFQLENBQXBELEVBQW9FeVQsQ0FBQyxDQUFDcUUsT0FBRixDQUFVbkUsQ0FBQyxDQUFDMkIsT0FBRixFQUFWLEVBQXNCLEtBQUt3SSxLQUEzQixNQUFvQyxDQUFDLENBQXJDLElBQXdDbEssQ0FBQyxDQUFDNVQsSUFBRixDQUFPLFVBQVAsQ0FBNUcsRUFBK0gyVCxDQUFDLENBQUMyQixPQUFGLE9BQWMsS0FBS3dJLEtBQUwsQ0FBVyxDQUFYLENBQWQsSUFBNkJsSyxDQUFDLENBQUM1VCxJQUFGLENBQU8sYUFBUCxDQUE1SixFQUFrTDJULENBQUMsQ0FBQzJCLE9BQUYsT0FBYyxLQUFLd0ksS0FBTCxDQUFXLEtBQUtBLEtBQUwsQ0FBVy9kLE1BQVgsR0FBa0IsQ0FBN0IsQ0FBZCxJQUErQzZULENBQUMsQ0FBQzVULElBQUYsQ0FBTyxXQUFQLENBQTlPLENBQS9mLEVBQWt3QjRULENBQXp3QjtBQUEyd0IsS0FBdDNZO0FBQXUzWXVLLG1CQUFlLEVBQUMseUJBQVN2SyxDQUFULEVBQVdLLENBQVgsRUFBYTlVLENBQWIsRUFBZXFWLENBQWYsRUFBaUJFLENBQWpCLEVBQW1CRyxDQUFuQixFQUFxQi9VLENBQXJCLEVBQXVCO0FBQUMsV0FBSSxJQUFJcVYsQ0FBSixFQUFNUSxDQUFOLEVBQVF5RCxDQUFSLEVBQVU2RCxDQUFDLEdBQUMsRUFBWixFQUFlQyxDQUFDLEdBQUMvZCxDQUFDLEdBQUMsRUFBbkIsRUFBc0I0VyxDQUFDLEdBQUMsS0FBS08sTUFBTCxDQUFZOVYsSUFBWixDQUFpQm9ULENBQWpCLENBQXhCLEVBQTRDc0IsQ0FBQyxHQUFDdE8sSUFBSSxDQUFDd1gsS0FBTCxDQUFXNUosQ0FBQyxHQUFDclYsQ0FBYixJQUFnQkEsQ0FBOUQsRUFBZ0U4VixDQUFDLEdBQUNDLENBQUMsR0FBQyxJQUFFZ0ksQ0FBdEUsRUFBd0UzRyxDQUFDLEdBQUMzUCxJQUFJLENBQUN3WCxLQUFMLENBQVcsS0FBS3RJLFFBQUwsQ0FBYzVCLFdBQWQsS0FBNEJnSixDQUF2QyxJQUEwQ0EsQ0FBcEgsRUFBc0htQixDQUFDLEdBQUM1SyxDQUFDLENBQUM3QixHQUFGLENBQU0sS0FBS2lFLEtBQVgsRUFBaUIsVUFBU3BDLENBQVQsRUFBVztBQUFDLGVBQU83TSxJQUFJLENBQUN3WCxLQUFMLENBQVczSyxDQUFDLENBQUNZLGNBQUYsS0FBbUI2SSxDQUE5QixJQUFpQ0EsQ0FBeEM7QUFBMEMsT0FBdkUsQ0FBeEgsRUFBaU1vQixDQUFDLEdBQUNwSixDQUFDLEdBQUNnSSxDQUF6TSxFQUEyTW9CLENBQUMsSUFBRXJKLENBQUMsR0FBQ2lJLENBQWhOLEVBQWtOb0IsQ0FBQyxJQUFFcEIsQ0FBck47QUFBdU4vSCxTQUFDLEdBQUMsQ0FBQ2xCLENBQUQsQ0FBRixFQUFNMEIsQ0FBQyxHQUFDLElBQVIsRUFBYTJJLENBQUMsS0FBR3BKLENBQUMsR0FBQ2dJLENBQU4sR0FBUS9ILENBQUMsQ0FBQ25WLElBQUYsQ0FBTyxLQUFQLENBQVIsR0FBc0JzZSxDQUFDLEtBQUdySixDQUFDLEdBQUNpSSxDQUFOLElBQVMvSCxDQUFDLENBQUNuVixJQUFGLENBQU8sS0FBUCxDQUE1QyxFQUEwRHlULENBQUMsQ0FBQ3FFLE9BQUYsQ0FBVXdHLENBQVYsRUFBWUQsQ0FBWixNQUFpQixDQUFDLENBQWxCLElBQXFCbEosQ0FBQyxDQUFDblYsSUFBRixDQUFPLFFBQVAsQ0FBL0UsRUFBZ0csQ0FBQ3NlLENBQUMsR0FBQzVKLENBQUYsSUFBSzRKLENBQUMsR0FBQ3pKLENBQVIsS0FBWU0sQ0FBQyxDQUFDblYsSUFBRixDQUFPLFVBQVAsQ0FBNUcsRUFBK0hzZSxDQUFDLEtBQUcvSCxDQUFKLElBQU9wQixDQUFDLENBQUNuVixJQUFGLENBQU8sU0FBUCxDQUF0SSxFQUF3SkYsQ0FBQyxLQUFHMlQsQ0FBQyxDQUFDOEssSUFBTixLQUFhbkYsQ0FBQyxHQUFDdFosQ0FBQyxDQUFDLElBQUkrVCxJQUFKLENBQVN5SyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsQ0FBRCxDQUFILEVBQXFCbEYsQ0FBQyxLQUFHekYsQ0FBSixHQUFNeUYsQ0FBQyxHQUFDLEVBQVIsR0FBVyxhQUFXLE9BQU9BLENBQWxCLEdBQW9CQSxDQUFDLEdBQUM7QUFBQ29GLGlCQUFPLEVBQUNwRjtBQUFULFNBQXRCLEdBQWtDLFlBQVUsT0FBT0EsQ0FBakIsS0FBcUJBLENBQUMsR0FBQztBQUFDcUYsaUJBQU8sRUFBQ3JGO0FBQVQsU0FBdkIsQ0FBbEUsRUFBc0dBLENBQUMsQ0FBQ29GLE9BQUYsS0FBWSxDQUFDLENBQWIsSUFBZ0JySixDQUFDLENBQUNuVixJQUFGLENBQU8sVUFBUCxDQUF0SCxFQUF5SW9aLENBQUMsQ0FBQ3FGLE9BQUYsS0FBWXRKLENBQUMsR0FBQ0EsQ0FBQyxDQUFDdUosTUFBRixDQUFTdEYsQ0FBQyxDQUFDcUYsT0FBRixDQUFVaFYsS0FBVixDQUFnQixLQUFoQixDQUFULENBQWQsQ0FBekksRUFBeUwyUCxDQUFDLENBQUN0WCxPQUFGLEtBQVk2VCxDQUFDLEdBQUN5RCxDQUFDLENBQUN0WCxPQUFoQixDQUF0TSxDQUF4SixFQUF3WG1iLENBQUMsSUFBRSxrQkFBZ0I5SCxDQUFDLENBQUNqVixJQUFGLENBQU8sR0FBUCxDQUFoQixHQUE0QixHQUE1QixJQUFpQ3lWLENBQUMsR0FBQyxhQUFXQSxDQUFYLEdBQWEsR0FBZCxHQUFrQixFQUFwRCxJQUF3RCxHQUF4RCxHQUE0RDJJLENBQTVELEdBQThELFNBQXpiO0FBQXZOOztBQUEwcEJ2SSxPQUFDLENBQUN2VixJQUFGLENBQU8sb0JBQVAsRUFBNkI2SixJQUE3QixDQUFrQzZLLENBQUMsR0FBQyxHQUFGLEdBQU1ELENBQXhDLEdBQTJDYyxDQUFDLENBQUN2VixJQUFGLENBQU8sSUFBUCxFQUFhaEIsSUFBYixDQUFrQnlkLENBQWxCLENBQTNDO0FBQWdFLEtBQXpuYTtBQUEwbmFRLFFBQUksRUFBQyxnQkFBVTtBQUFDLFVBQUl4SixDQUFKO0FBQUEsVUFBTTlVLENBQU47QUFBQSxVQUFRcVYsQ0FBQyxHQUFDLElBQUlYLElBQUosQ0FBUyxLQUFLaUMsUUFBZCxDQUFWO0FBQUEsVUFBa0NwQixDQUFDLEdBQUNGLENBQUMsQ0FBQ0gsY0FBRixFQUFwQztBQUFBLFVBQXVEUSxDQUFDLEdBQUNMLENBQUMsQ0FBQ0YsV0FBRixFQUF6RDtBQUFBLFVBQXlFeFUsQ0FBQyxHQUFDLEtBQUtpVyxDQUFMLENBQU9rQixTQUFQLEtBQW1CLEVBQUUsSUFBRSxDQUFKLENBQW5CLEdBQTBCLEtBQUtsQixDQUFMLENBQU9rQixTQUFQLENBQWlCNUMsY0FBakIsRUFBMUIsR0FBNEQsRUFBRSxJQUFFLENBQUosQ0FBdkk7QUFBQSxVQUE4SWMsQ0FBQyxHQUFDLEtBQUtZLENBQUwsQ0FBT2tCLFNBQVAsS0FBbUIsRUFBRSxJQUFFLENBQUosQ0FBbkIsR0FBMEIsS0FBS2xCLENBQUwsQ0FBT2tCLFNBQVAsQ0FBaUIzQyxXQUFqQixFQUExQixHQUF5RCxFQUFFLElBQUUsQ0FBSixDQUF6TTtBQUFBLFVBQWdOcUIsQ0FBQyxHQUFDLEtBQUtJLENBQUwsQ0FBT29CLE9BQVAsS0FBaUIsSUFBRSxDQUFuQixHQUFxQixLQUFLcEIsQ0FBTCxDQUFPb0IsT0FBUCxDQUFlOUMsY0FBZixFQUFyQixHQUFxRCxJQUFFLENBQXpRO0FBQUEsVUFBMlErRSxDQUFDLEdBQUMsS0FBS3JELENBQUwsQ0FBT29CLE9BQVAsS0FBaUIsSUFBRSxDQUFuQixHQUFxQixLQUFLcEIsQ0FBTCxDQUFPb0IsT0FBUCxDQUFlN0MsV0FBZixFQUFyQixHQUFrRCxJQUFFLENBQWpVO0FBQUEsVUFBbVUySSxDQUFDLEdBQUNoSSxDQUFDLENBQUMsS0FBS2MsQ0FBTCxDQUFPM1QsUUFBUixDQUFELENBQW1CdWMsS0FBbkIsSUFBMEIxSixDQUFDLENBQUMySixFQUFGLENBQUtELEtBQS9CLElBQXNDLEVBQTNXO0FBQUEsVUFBOFd6QixDQUFDLEdBQUNqSSxDQUFDLENBQUMsS0FBS2MsQ0FBTCxDQUFPM1QsUUFBUixDQUFELENBQW1CcVQsS0FBbkIsSUFBMEJSLENBQUMsQ0FBQzJKLEVBQUYsQ0FBS25KLEtBQS9CLElBQXNDLEVBQXRaO0FBQUEsVUFBeVpNLENBQUMsR0FBQ2QsQ0FBQyxDQUFDLEtBQUtjLENBQUwsQ0FBTzNULFFBQVIsQ0FBRCxDQUFtQnljLFdBQW5CLElBQWdDNUosQ0FBQyxDQUFDMkosRUFBRixDQUFLQyxXQUFoYzs7QUFBNGMsVUFBRyxDQUFDbEssS0FBSyxDQUFDRCxDQUFELENBQU4sSUFBVyxDQUFDQyxLQUFLLENBQUNFLENBQUQsQ0FBcEIsRUFBd0I7QUFBQyxhQUFLeUIsTUFBTCxDQUFZOVYsSUFBWixDQUFpQixxQ0FBakIsRUFBd0Q2SixJQUF4RCxDQUE2RGtNLENBQUMsQ0FBQ3NFLFVBQUYsQ0FBYXJHLENBQWIsRUFBZXVCLENBQWYsRUFBaUIsS0FBS0EsQ0FBTCxDQUFPM1QsUUFBeEIsQ0FBN0QsR0FBZ0csS0FBS2tVLE1BQUwsQ0FBWTlWLElBQVosQ0FBaUIsY0FBakIsRUFBaUM2SixJQUFqQyxDQUFzQzRTLENBQXRDLEVBQXlDeGMsR0FBekMsQ0FBNkMsU0FBN0MsRUFBdUQsS0FBS3NWLENBQUwsQ0FBTytJLFFBQVAsS0FBa0IsQ0FBQyxDQUFuQixJQUFzQixhQUFXLEtBQUsvSSxDQUFMLENBQU8rSSxRQUF4QyxHQUFpRCxZQUFqRCxHQUE4RCxNQUFySCxDQUFoRyxFQUE2TixLQUFLeEksTUFBTCxDQUFZOVYsSUFBWixDQUFpQixjQUFqQixFQUFpQzZKLElBQWpDLENBQXNDNlMsQ0FBdEMsRUFBeUN6YyxHQUF6QyxDQUE2QyxTQUE3QyxFQUF1RCxLQUFLc1YsQ0FBTCxDQUFPZ0osUUFBUCxLQUFrQixDQUFDLENBQW5CLEdBQXFCLFlBQXJCLEdBQWtDLE1BQXpGLENBQTdOLEVBQThULEtBQUt6SSxNQUFMLENBQVk5VixJQUFaLENBQWlCLHlCQUFqQixFQUE0QzZKLElBQTVDLENBQWlELEtBQUswTCxDQUFMLENBQU96USxLQUF4RCxFQUErRDdFLEdBQS9ELENBQW1FLFNBQW5FLEVBQTZFLFlBQVUsT0FBTyxLQUFLc1YsQ0FBTCxDQUFPelEsS0FBeEIsSUFBK0IsT0FBSyxLQUFLeVEsQ0FBTCxDQUFPelEsS0FBM0MsR0FBaUQsWUFBakQsR0FBOEQsTUFBM0ksQ0FBOVQsRUFBaWQsS0FBS2dYLGVBQUwsRUFBamQsRUFBd2UsS0FBSzVFLFVBQUwsRUFBeGU7QUFBMGYsWUFBSXhDLENBQUMsR0FBQ3RCLENBQUMsQ0FBQ2MsQ0FBRCxFQUFHRyxDQUFILEVBQUssQ0FBTCxDQUFQO0FBQUEsWUFBZXdKLENBQUMsR0FBQ25KLENBQUMsQ0FBQ1gsVUFBRixFQUFqQjtBQUFnQ1csU0FBQyxDQUFDZ0gsVUFBRixDQUFhbUMsQ0FBQyxHQUFDLENBQUNuSixDQUFDLENBQUNnSixTQUFGLEtBQWMsS0FBS25JLENBQUwsQ0FBT3dDLFNBQXJCLEdBQStCLENBQWhDLElBQW1DLENBQWxEO0FBQXFELFlBQUkrRixDQUFDLEdBQUMsSUFBSXpLLElBQUosQ0FBU3FCLENBQVQsQ0FBTjtBQUFrQkEsU0FBQyxDQUFDYixjQUFGLEtBQW1CLEdBQW5CLElBQXdCaUssQ0FBQyxDQUFDVSxjQUFGLENBQWlCOUosQ0FBQyxDQUFDYixjQUFGLEVBQWpCLENBQXhCLEVBQTZEaUssQ0FBQyxDQUFDcEMsVUFBRixDQUFhb0MsQ0FBQyxDQUFDL0osVUFBRixLQUFlLEVBQTVCLENBQTdELEVBQTZGK0osQ0FBQyxHQUFDQSxDQUFDLENBQUNoSixPQUFGLEVBQS9GOztBQUEyRyxhQUFJLElBQUkySixDQUFKLEVBQU1DLENBQU4sRUFBUUMsQ0FBQyxHQUFDLEVBQWQsRUFBaUJqSyxDQUFDLENBQUNJLE9BQUYsS0FBWWdKLENBQTdCLEdBQWdDO0FBQUMsY0FBR1csQ0FBQyxHQUFDL0osQ0FBQyxDQUFDZ0osU0FBRixFQUFGLEVBQWdCZSxDQUFDLEtBQUcsS0FBS2xKLENBQUwsQ0FBT3dDLFNBQVgsS0FBdUI0RyxDQUFDLENBQUNuZixJQUFGLENBQU8sTUFBUCxHQUFlLEtBQUsrVixDQUFMLENBQU9pQixhQUE3QyxDQUFuQixFQUErRTtBQUFDLGdCQUFJL0osQ0FBQyxHQUFDLElBQUk0RyxJQUFKLENBQVMsQ0FBQ3FCLENBQUQsR0FBRyxDQUFDLEtBQUthLENBQUwsQ0FBT3dDLFNBQVAsR0FBaUIwRyxDQUFqQixHQUFtQixDQUFwQixJQUF1QixDQUF2QixHQUF5QixLQUFyQyxDQUFOO0FBQUEsZ0JBQWtEaEcsQ0FBQyxHQUFDLElBQUlwRixJQUFKLENBQVN0RyxNQUFNLENBQUNOLENBQUQsQ0FBTixHQUFVLENBQUMsS0FBR0EsQ0FBQyxDQUFDaVIsU0FBRixFQUFKLElBQW1CLENBQW5CLEdBQXFCLEtBQXhDLENBQXBEO0FBQUEsZ0JBQW1Ha0IsQ0FBQyxHQUFDLElBQUl2TCxJQUFKLENBQVN0RyxNQUFNLENBQUM2UixDQUFDLEdBQUN4TCxDQUFDLENBQUNxRixDQUFDLENBQUM1RSxjQUFGLEVBQUQsRUFBb0IsQ0FBcEIsRUFBc0IsQ0FBdEIsQ0FBSixDQUFOLEdBQW9DLENBQUMsS0FBRytLLENBQUMsQ0FBQ2xCLFNBQUYsRUFBSixJQUFtQixDQUFuQixHQUFxQixLQUFsRSxDQUFyRztBQUFBLGdCQUE4S21CLENBQUMsR0FBQyxDQUFDcEcsQ0FBQyxHQUFDbUcsQ0FBSCxJQUFNLEtBQU4sR0FBWSxDQUFaLEdBQWMsQ0FBOUw7QUFBZ01ELGFBQUMsQ0FBQ25mLElBQUYsQ0FBTyxvQkFBa0JxZixDQUFsQixHQUFvQixPQUEzQjtBQUFvQzs7QUFBQUgsV0FBQyxHQUFDLEtBQUtuQixhQUFMLENBQW1CN0ksQ0FBbkIsQ0FBRixFQUF3QmdLLENBQUMsQ0FBQ2xmLElBQUYsQ0FBTyxLQUFQLENBQXhCO0FBQXNDLGNBQUlzZixDQUFDLEdBQUNwSyxDQUFDLENBQUNYLFVBQUYsRUFBTjtBQUFxQixlQUFLd0IsQ0FBTCxDQUFPd0osYUFBUCxLQUF1QjlMLENBQUMsQ0FBQzhLLElBQXpCLEtBQWdDcGYsQ0FBQyxHQUFDLEtBQUs0VyxDQUFMLENBQU93SixhQUFQLENBQXFCLEtBQUs1RSxhQUFMLENBQW1CekYsQ0FBbkIsQ0FBckIsQ0FBRixFQUE4Qy9WLENBQUMsS0FBR3dVLENBQUosR0FBTXhVLENBQUMsR0FBQyxFQUFSLEdBQVcsYUFBVyxPQUFPQSxDQUFsQixHQUFvQkEsQ0FBQyxHQUFDO0FBQUNxZixtQkFBTyxFQUFDcmY7QUFBVCxXQUF0QixHQUFrQyxZQUFVLE9BQU9BLENBQWpCLEtBQXFCQSxDQUFDLEdBQUM7QUFBQ3NmLG1CQUFPLEVBQUN0ZjtBQUFULFdBQXZCLENBQTNGLEVBQStIQSxDQUFDLENBQUNxZixPQUFGLEtBQVksQ0FBQyxDQUFiLElBQWdCVSxDQUFDLENBQUNsZixJQUFGLENBQU8sVUFBUCxDQUEvSSxFQUFrS2IsQ0FBQyxDQUFDc2YsT0FBRixLQUFZUyxDQUFDLEdBQUNBLENBQUMsQ0FBQ1IsTUFBRixDQUFTdmYsQ0FBQyxDQUFDc2YsT0FBRixDQUFVaFYsS0FBVixDQUFnQixLQUFoQixDQUFULENBQWQsQ0FBbEssRUFBa050SyxDQUFDLENBQUMyQyxPQUFGLEtBQVltUyxDQUFDLEdBQUM5VSxDQUFDLENBQUMyQyxPQUFoQixDQUFsTixFQUEyTzNDLENBQUMsQ0FBQ3FnQixPQUFGLEtBQVlGLENBQUMsR0FBQ25nQixDQUFDLENBQUNxZ0IsT0FBaEIsQ0FBM1EsR0FBcVNOLENBQUMsR0FBQ3pMLENBQUMsQ0FBQ25NLFVBQUYsQ0FBYW1NLENBQUMsQ0FBQ2dNLFVBQWYsSUFBMkJoTSxDQUFDLENBQUNnTSxVQUFGLENBQWFQLENBQWIsQ0FBM0IsR0FBMkN6TCxDQUFDLENBQUNpTSxNQUFGLENBQVNSLENBQVQsQ0FBbFYsRUFBOFZDLENBQUMsQ0FBQ25mLElBQUYsQ0FBTyxnQkFBY2tmLENBQUMsQ0FBQ2hmLElBQUYsQ0FBTyxHQUFQLENBQWQsR0FBMEIsR0FBMUIsSUFBK0IrVCxDQUFDLEdBQUMsYUFBV0EsQ0FBWCxHQUFhLEdBQWQsR0FBa0IsRUFBbEQsSUFBc0QsY0FBdEQsR0FBcUVpQixDQUFDLENBQUNOLE9BQUYsR0FBWTlOLFFBQVosRUFBckUsR0FBNEYsSUFBNUYsR0FBaUd3WSxDQUFqRyxHQUFtRyxPQUExRyxDQUE5VixFQUFpZHJMLENBQUMsR0FBQyxJQUFuZCxFQUF3ZGdMLENBQUMsS0FBRyxLQUFLbEosQ0FBTCxDQUFPeUMsT0FBWCxJQUFvQjJHLENBQUMsQ0FBQ25mLElBQUYsQ0FBTyxPQUFQLENBQTVlLEVBQTRma1YsQ0FBQyxDQUFDZ0gsVUFBRixDQUFhaEgsQ0FBQyxDQUFDWCxVQUFGLEtBQWUsQ0FBNUIsQ0FBNWY7QUFBMmhCOztBQUFBLGFBQUsrQixNQUFMLENBQVk5VixJQUFaLENBQWlCLHdCQUFqQixFQUEyQ2hCLElBQTNDLENBQWdEMmYsQ0FBQyxDQUFDamYsSUFBRixDQUFPLEVBQVAsQ0FBaEQ7QUFBNEQsWUFBSXlmLENBQUMsR0FBQzFLLENBQUMsQ0FBQyxLQUFLYyxDQUFMLENBQU8zVCxRQUFSLENBQUQsQ0FBbUJ3ZCxXQUFuQixJQUFnQzNLLENBQUMsQ0FBQzJKLEVBQUYsQ0FBS2dCLFdBQXJDLElBQWtELFFBQXhEO0FBQUEsWUFBaUVDLENBQUMsR0FBQyxLQUFLdkosTUFBTCxDQUFZOVYsSUFBWixDQUFpQixvQkFBakIsRUFBdUNBLElBQXZDLENBQTRDLG9CQUE1QyxFQUFrRTZKLElBQWxFLENBQXVFLEtBQUswTCxDQUFMLENBQU9tQyxXQUFQLEdBQW1CLENBQW5CLEdBQXFCeUgsQ0FBckIsR0FBdUJqTCxDQUE5RixFQUFpR29MLEdBQWpHLEdBQXVHdGYsSUFBdkcsQ0FBNEcsWUFBNUcsRUFBMEhRLFdBQTFILENBQXNJLFFBQXRJLENBQW5FOztBQUFtTixZQUFHeVMsQ0FBQyxDQUFDL1IsSUFBRixDQUFPLEtBQUttVSxLQUFaLEVBQWtCLFVBQVNwQyxDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDQSxXQUFDLENBQUNVLGNBQUYsT0FBcUJLLENBQXJCLElBQXdCbUwsQ0FBQyxDQUFDRSxFQUFGLENBQUtwTSxDQUFDLENBQUNXLFdBQUYsRUFBTCxFQUFzQjFSLFFBQXRCLENBQStCLFFBQS9CLENBQXhCO0FBQWlFLFNBQWpHLEdBQW1HLENBQUM4UixDQUFDLEdBQUM1VSxDQUFGLElBQUs0VSxDQUFDLEdBQUNpQixDQUFSLEtBQVlrSyxDQUFDLENBQUNqZCxRQUFGLENBQVcsVUFBWCxDQUEvRyxFQUFzSThSLENBQUMsS0FBRzVVLENBQUosSUFBTytmLENBQUMsQ0FBQ3pLLEtBQUYsQ0FBUSxDQUFSLEVBQVVELENBQVYsRUFBYXZTLFFBQWIsQ0FBc0IsVUFBdEIsQ0FBN0ksRUFBK0s4UixDQUFDLEtBQUdpQixDQUFKLElBQU9rSyxDQUFDLENBQUN6SyxLQUFGLENBQVFnRSxDQUFDLEdBQUMsQ0FBVixFQUFheFcsUUFBYixDQUFzQixVQUF0QixDQUF0TCxFQUF3TixLQUFLbVQsQ0FBTCxDQUFPaUssZUFBUCxLQUF5QnZNLENBQUMsQ0FBQzhLLElBQXRQLEVBQTJQO0FBQUMsY0FBSTBCLENBQUMsR0FBQyxJQUFOO0FBQVd4TSxXQUFDLENBQUMvUixJQUFGLENBQU9tZSxDQUFQLEVBQVMsVUFBU2pNLENBQVQsRUFBV0ssQ0FBWCxFQUFhO0FBQUMsZ0JBQUk5VSxDQUFDLEdBQUMsSUFBSTBVLElBQUosQ0FBU2EsQ0FBVCxFQUFXZCxDQUFYLEVBQWEsQ0FBYixDQUFOO0FBQUEsZ0JBQXNCWSxDQUFDLEdBQUN5TCxDQUFDLENBQUNsSyxDQUFGLENBQUlpSyxlQUFKLENBQW9CN2dCLENBQXBCLENBQXhCO0FBQStDcVYsYUFBQyxLQUFHYixDQUFKLEdBQU1hLENBQUMsR0FBQyxFQUFSLEdBQVcsYUFBVyxPQUFPQSxDQUFsQixHQUFvQkEsQ0FBQyxHQUFDO0FBQUNnSyxxQkFBTyxFQUFDaEs7QUFBVCxhQUF0QixHQUFrQyxZQUFVLE9BQU9BLENBQWpCLEtBQXFCQSxDQUFDLEdBQUM7QUFBQ2lLLHFCQUFPLEVBQUNqSztBQUFULGFBQXZCLENBQTdDLEVBQWlGQSxDQUFDLENBQUNnSyxPQUFGLEtBQVksQ0FBQyxDQUFiLElBQWdCL0ssQ0FBQyxDQUFDUSxDQUFELENBQUQsQ0FBS3hSLFFBQUwsQ0FBYyxVQUFkLENBQWhCLElBQTJDZ1IsQ0FBQyxDQUFDUSxDQUFELENBQUQsQ0FBS3JSLFFBQUwsQ0FBYyxVQUFkLENBQTVILEVBQXNKNFIsQ0FBQyxDQUFDaUssT0FBRixJQUFXaEwsQ0FBQyxDQUFDUSxDQUFELENBQUQsQ0FBS3JSLFFBQUwsQ0FBYzRSLENBQUMsQ0FBQ2lLLE9BQWhCLENBQWpLLEVBQTBMakssQ0FBQyxDQUFDMVMsT0FBRixJQUFXMlIsQ0FBQyxDQUFDUSxDQUFELENBQUQsQ0FBSzNSLElBQUwsQ0FBVSxPQUFWLEVBQWtCa1MsQ0FBQyxDQUFDMVMsT0FBcEIsQ0FBck07QUFBa08sV0FBeFM7QUFBMFM7O0FBQUEsYUFBS3FjLGVBQUwsQ0FBcUIsbUJBQXJCLEVBQXlDLE1BQXpDLEVBQWdELEVBQWhELEVBQW1EekosQ0FBbkQsRUFBcUQ1VSxDQUFyRCxFQUF1RDZWLENBQXZELEVBQXlELEtBQUtJLENBQUwsQ0FBT21LLGNBQWhFLEdBQWdGLEtBQUsvQixlQUFMLENBQXFCLHFCQUFyQixFQUEyQyxRQUEzQyxFQUFvRCxHQUFwRCxFQUF3RHpKLENBQXhELEVBQTBENVUsQ0FBMUQsRUFBNEQ2VixDQUE1RCxFQUE4RCxLQUFLSSxDQUFMLENBQU9vSyxnQkFBckUsQ0FBaEYsRUFBdUssS0FBS2hDLGVBQUwsQ0FBcUIsdUJBQXJCLEVBQTZDLFNBQTdDLEVBQXVELEdBQXZELEVBQTJEekosQ0FBM0QsRUFBNkQ1VSxDQUE3RCxFQUErRDZWLENBQS9ELEVBQWlFLEtBQUtJLENBQUwsQ0FBT3FLLGlCQUF4RSxDQUF2SztBQUFrUTtBQUFDLEtBQXp5Z0I7QUFBMHlnQjlELG1CQUFlLEVBQUMsMkJBQVU7QUFBQyxVQUFHLEtBQUtoRixhQUFSLEVBQXNCO0FBQUMsWUFBSTdELENBQUo7QUFBQSxZQUFNRSxDQUFOO0FBQUEsWUFBUUMsQ0FBQyxHQUFDLElBQUlDLElBQUosQ0FBUyxLQUFLaUMsUUFBZCxDQUFWO0FBQUEsWUFBa0M3QixDQUFDLEdBQUNMLENBQUMsQ0FBQ1MsY0FBRixFQUFwQztBQUFBLFlBQXVEbFYsQ0FBQyxHQUFDeVUsQ0FBQyxDQUFDVSxXQUFGLEVBQXpEO0FBQUEsWUFBeUVFLENBQUMsR0FBQyxLQUFLdUIsQ0FBTCxDQUFPa0IsU0FBUCxLQUFtQixFQUFFLElBQUUsQ0FBSixDQUFuQixHQUEwQixLQUFLbEIsQ0FBTCxDQUFPa0IsU0FBUCxDQUFpQjVDLGNBQWpCLEVBQTFCLEdBQTRELEVBQUUsSUFBRSxDQUFKLENBQXZJO0FBQUEsWUFBOElLLENBQUMsR0FBQyxLQUFLcUIsQ0FBTCxDQUFPa0IsU0FBUCxLQUFtQixFQUFFLElBQUUsQ0FBSixDQUFuQixHQUEwQixLQUFLbEIsQ0FBTCxDQUFPa0IsU0FBUCxDQUFpQjNDLFdBQWpCLEVBQTFCLEdBQXlELEVBQUUsSUFBRSxDQUFKLENBQXpNO0FBQUEsWUFBZ05PLENBQUMsR0FBQyxLQUFLa0IsQ0FBTCxDQUFPb0IsT0FBUCxLQUFpQixJQUFFLENBQW5CLEdBQXFCLEtBQUtwQixDQUFMLENBQU9vQixPQUFQLENBQWU5QyxjQUFmLEVBQXJCLEdBQXFELElBQUUsQ0FBelE7QUFBQSxZQUEyUXZVLENBQUMsR0FBQyxLQUFLaVcsQ0FBTCxDQUFPb0IsT0FBUCxLQUFpQixJQUFFLENBQW5CLEdBQXFCLEtBQUtwQixDQUFMLENBQU9vQixPQUFQLENBQWU3QyxXQUFmLEVBQXJCLEdBQWtELElBQUUsQ0FBalU7QUFBQSxZQUFtVWEsQ0FBQyxHQUFDLENBQXJVOztBQUF1VSxnQkFBTyxLQUFLeUYsUUFBWjtBQUFzQixlQUFLLENBQUw7QUFBT3pGLGFBQUMsSUFBRSxFQUFIOztBQUFNLGVBQUssQ0FBTDtBQUFPQSxhQUFDLElBQUUsRUFBSDs7QUFBTSxlQUFLLENBQUw7QUFBT0EsYUFBQyxJQUFFLEVBQUg7O0FBQU0sZUFBSyxDQUFMO0FBQU8xQixhQUFDLEdBQUM3TSxJQUFJLENBQUN3WCxLQUFMLENBQVduSyxDQUFDLEdBQUNrQixDQUFiLElBQWdCQSxDQUFoQixHQUFrQlgsQ0FBcEIsRUFBc0JiLENBQUMsR0FBQy9NLElBQUksQ0FBQ3dYLEtBQUwsQ0FBV25LLENBQUMsR0FBQ2tCLENBQWIsSUFBZ0JBLENBQWhCLEdBQWtCQSxDQUFsQixHQUFvQk4sQ0FBNUM7QUFBOEM7O0FBQU0sZUFBSyxDQUFMO0FBQU9wQixhQUFDLEdBQUNRLENBQUMsSUFBRU8sQ0FBSCxJQUFNclYsQ0FBQyxHQUFDdVYsQ0FBVixFQUFZZixDQUFDLEdBQUNNLENBQUMsSUFBRVksQ0FBSCxJQUFNMVYsQ0FBQyxHQUFDVyxDQUF0QjtBQUEvSDs7QUFBdUosYUFBS3dXLE1BQUwsQ0FBWTlWLElBQVosQ0FBaUIsT0FBakIsRUFBMEJPLFdBQTFCLENBQXNDLFVBQXRDLEVBQWlEMFMsQ0FBakQsR0FBb0QsS0FBSzZDLE1BQUwsQ0FBWTlWLElBQVosQ0FBaUIsT0FBakIsRUFBMEJPLFdBQTFCLENBQXNDLFVBQXRDLEVBQWlENFMsQ0FBakQsQ0FBcEQ7QUFBd0c7QUFBQyxLQUFuNmhCO0FBQW82aEJtRyxTQUFLLEVBQUMsZUFBU25HLENBQVQsRUFBVztBQUFDQSxPQUFDLENBQUNqVCxjQUFGLElBQW1CaVQsQ0FBQyxDQUFDME0sZUFBRixFQUFuQjtBQUF1QyxVQUFJbGhCLENBQUosRUFBTXFWLENBQU4sRUFBUUUsQ0FBUixFQUFVRyxDQUFWO0FBQVkxVixPQUFDLEdBQUNzVSxDQUFDLENBQUNFLENBQUMsQ0FBQ3RVLE1BQUgsQ0FBSCxFQUFjRixDQUFDLENBQUNzRCxRQUFGLENBQVcsbUJBQVgsS0FBaUMsS0FBS21ZLFFBQUwsS0FBZ0IsS0FBSzdFLENBQUwsQ0FBT21DLFdBQXhELElBQXFFLEtBQUtYLFdBQUwsQ0FBaUIsS0FBS3FELFFBQUwsR0FBYyxDQUEvQixDQUFuRixFQUFxSHpiLENBQUMsQ0FBQ3NELFFBQUYsQ0FBVyxPQUFYLEtBQXFCLENBQUN0RCxDQUFDLENBQUNzRCxRQUFGLENBQVcsS0FBWCxDQUF0QixLQUEwQyxLQUFLOFUsV0FBTCxDQUFpQixDQUFqQixHQUFvQixLQUFLK0ksUUFBTCxDQUFjck0sQ0FBQyxFQUFmLEVBQWtCLGFBQVcsS0FBSzhCLENBQUwsQ0FBTytJLFFBQWxCLEdBQTJCLElBQTNCLEdBQWdDLE1BQWxELENBQTlELENBQXJILEVBQThPM2YsQ0FBQyxDQUFDc0QsUUFBRixDQUFXLE9BQVgsS0FBcUIsS0FBS3FaLFVBQUwsRUFBblEsRUFBcVIzYyxDQUFDLENBQUNzRCxRQUFGLENBQVcsVUFBWCxLQUF3QixDQUFDdEQsQ0FBQyxDQUFDc0QsUUFBRixDQUFXLE9BQVgsS0FBcUJ0RCxDQUFDLENBQUNzRCxRQUFGLENBQVcsTUFBWCxDQUFyQixJQUF5Q3RELENBQUMsQ0FBQ3NELFFBQUYsQ0FBVyxRQUFYLENBQXpDLElBQStEdEQsQ0FBQyxDQUFDc0QsUUFBRixDQUFXLFNBQVgsQ0FBaEUsTUFBeUYsS0FBS3FULFFBQUwsQ0FBY29HLFVBQWQsQ0FBeUIsQ0FBekIsR0FBNEIxSCxDQUFDLEdBQUMsQ0FBOUIsRUFBZ0MsTUFBSSxLQUFLb0csUUFBVCxJQUFtQi9GLENBQUMsR0FBQzFWLENBQUMsQ0FBQytGLE1BQUYsR0FBVzFFLElBQVgsQ0FBZ0IsTUFBaEIsRUFBd0JnSSxLQUF4QixDQUE4QnJKLENBQTlCLENBQUYsRUFBbUN1VixDQUFDLEdBQUMsS0FBS29CLFFBQUwsQ0FBY3pCLGNBQWQsRUFBckMsRUFBb0UsS0FBS3lCLFFBQUwsQ0FBY3lLLFdBQWQsQ0FBMEIxTCxDQUExQixDQUF2RixLQUFzSEEsQ0FBQyxHQUFDLENBQUYsRUFBSUgsQ0FBQyxHQUFDbkgsTUFBTSxDQUFDcE8sQ0FBQyxDQUFDa0wsSUFBRixFQUFELENBQVosRUFBdUIsS0FBS3lMLFFBQUwsQ0FBY2tKLGNBQWQsQ0FBNkJ0SyxDQUE3QixDQUE3SSxDQUFoQyxFQUE4TSxLQUFLZ0csUUFBTCxDQUFjbkUsQ0FBQyxDQUFDc0IsU0FBRixDQUFZLEtBQUsrQyxRQUFMLEdBQWMsQ0FBMUIsRUFBNkJ6YixDQUEzQyxFQUE2QyxLQUFLMlcsUUFBbEQsQ0FBOU0sRUFBMFEsS0FBSzhFLFFBQUwsS0FBZ0IsS0FBSzdFLENBQUwsQ0FBT2tDLFdBQXZCLEdBQW1DLEtBQUtxSSxRQUFMLENBQWMxTSxDQUFDLENBQUNjLENBQUQsRUFBR0csQ0FBSCxFQUFLTCxDQUFMLENBQWYsQ0FBbkMsSUFBNEQsS0FBSytDLFdBQUwsQ0FBaUIsS0FBS3FELFFBQUwsR0FBYyxDQUEvQixHQUFrQyxLQUFLNkMsSUFBTCxFQUE5RixDQUFuVyxDQUE3UyxFQUE0dkIsS0FBS25ILE1BQUwsQ0FBWXBULEVBQVosQ0FBZSxVQUFmLEtBQTRCLEtBQUs4VyxhQUFqQyxJQUFnRCxLQUFLQSxhQUFMLENBQW1CblgsS0FBbkIsRUFBNXlCLEVBQXUwQixPQUFPLEtBQUttWCxhQUFuMUI7QUFBaTJCLEtBQTEwakI7QUFBMjBqQkksZ0JBQVksRUFBQyxzQkFBU3pHLENBQVQsRUFBVztBQUFDLFVBQUlDLENBQUMsR0FBQ0gsQ0FBQyxDQUFDRSxDQUFDLENBQUM2TSxhQUFILENBQVA7QUFBQSxVQUF5QnZNLENBQUMsR0FBQ0wsQ0FBQyxDQUFDL1IsSUFBRixDQUFPLE1BQVAsQ0FBM0I7QUFBQSxVQUEwQzFDLENBQUMsR0FBQyxJQUFJMFUsSUFBSixDQUFTSSxDQUFULENBQTVDO0FBQXdELFdBQUs4QixDQUFMLENBQU95SCxjQUFQLEtBQXdCcmUsQ0FBQyxDQUFDa1YsY0FBRixPQUFxQixLQUFLeUIsUUFBTCxDQUFjekIsY0FBZCxFQUFyQixJQUFxRCxLQUFLcUcsUUFBTCxDQUFjLFlBQWQsRUFBMkIsS0FBSzVFLFFBQWhDLENBQXJELEVBQStGM1csQ0FBQyxDQUFDbVYsV0FBRixPQUFrQixLQUFLd0IsUUFBTCxDQUFjeEIsV0FBZCxFQUFsQixJQUErQyxLQUFLb0csUUFBTCxDQUFjLGFBQWQsRUFBNEIsS0FBSzVFLFFBQWpDLENBQXRLLEdBQWtOLEtBQUt3SyxRQUFMLENBQWNuaEIsQ0FBZCxDQUFsTjtBQUFtTyxLQUEvbmtCO0FBQWdva0JnYixrQkFBYyxFQUFDLHdCQUFTeEcsQ0FBVCxFQUFXO0FBQUMsVUFBSUMsQ0FBQyxHQUFDSCxDQUFDLENBQUNFLENBQUMsQ0FBQzZNLGFBQUgsQ0FBUDtBQUFBLFVBQXlCdk0sQ0FBQyxHQUFDTCxDQUFDLENBQUNuUixRQUFGLENBQVcsTUFBWCxJQUFtQixDQUFDLENBQXBCLEdBQXNCLENBQWpEO0FBQW1ELFlBQUksS0FBS21ZLFFBQVQsS0FBb0IzRyxDQUFDLElBQUUsS0FBR3NDLENBQUMsQ0FBQ3NCLFNBQUYsQ0FBWSxLQUFLK0MsUUFBakIsRUFBMkI2RixPQUFyRCxHQUE4RCxLQUFLM0ssUUFBTCxHQUFjLEtBQUs0SyxTQUFMLENBQWUsS0FBSzVLLFFBQXBCLEVBQTZCN0IsQ0FBN0IsQ0FBNUUsRUFBNEcsS0FBS3lHLFFBQUwsQ0FBY25FLENBQUMsQ0FBQ3NCLFNBQUYsQ0FBWSxLQUFLK0MsUUFBakIsRUFBMkJ6YixDQUF6QyxFQUEyQyxLQUFLMlcsUUFBaEQsQ0FBNUcsRUFBc0ssS0FBSzJILElBQUwsRUFBdEs7QUFBa0wsS0FBaDRrQjtBQUFpNGtCa0QscUJBQWlCLEVBQUMsMkJBQVNsTixDQUFULEVBQVc7QUFBQyxVQUFJRSxDQUFDLEdBQUMsS0FBS2tDLEtBQUwsQ0FBV1IsUUFBWCxDQUFvQjVCLENBQXBCLENBQU47QUFBNkIsVUFBR0EsQ0FBQyxJQUFFLEtBQUtvQyxLQUFMLENBQVdKLEtBQVgsRUFBSCxFQUFzQjlCLENBQUMsS0FBRyxDQUFDLENBQUwsR0FBTyxDQUFDLEtBQUtvQyxDQUFMLENBQU9zQyxTQUFQLEtBQW1CLENBQUMsQ0FBcEIsSUFBdUIsS0FBS3RDLENBQUwsQ0FBT3NDLFNBQVAsR0FBaUIsQ0FBeEMsSUFBMkMsS0FBS3RDLENBQUwsQ0FBTzZLLFlBQW5ELEtBQWtFLEtBQUsvSyxLQUFMLENBQVcvUixNQUFYLENBQWtCNlAsQ0FBbEIsQ0FBekUsR0FBOEYsS0FBS29DLENBQUwsQ0FBT3NDLFNBQVAsS0FBbUIsQ0FBQyxDQUFwQixJQUF1QixLQUFLeEMsS0FBTCxDQUFXSixLQUFYLElBQW1CLEtBQUtJLEtBQUwsQ0FBVzdWLElBQVgsQ0FBZ0J5VCxDQUFoQixDQUExQyxJQUE4RCxLQUFLb0MsS0FBTCxDQUFXN1YsSUFBWCxDQUFnQnlULENBQWhCLENBQWxMLEVBQXFNLFlBQVUsT0FBTyxLQUFLc0MsQ0FBTCxDQUFPc0MsU0FBaE8sRUFBME8sT0FBSyxLQUFLeEMsS0FBTCxDQUFXOVYsTUFBWCxHQUFrQixLQUFLZ1csQ0FBTCxDQUFPc0MsU0FBOUI7QUFBeUMsYUFBS3hDLEtBQUwsQ0FBVy9SLE1BQVgsQ0FBa0IsQ0FBbEI7QUFBekM7QUFBOEQsS0FBcHVsQjtBQUFxdWxCd2MsWUFBUSxFQUFDLGtCQUFTN00sQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQ0EsT0FBQyxJQUFFLFdBQVNBLENBQVosSUFBZSxLQUFLZ04saUJBQUwsQ0FBdUJsTixDQUFDLElBQUUsSUFBSUksSUFBSixDQUFTSixDQUFULENBQTFCLENBQWYsRUFBc0QsQ0FBQyxDQUFDRSxDQUFELElBQUksS0FBS29DLENBQUwsQ0FBT3lILGNBQVgsSUFBMkIsV0FBUzdKLENBQXJDLE1BQTBDLEtBQUttQyxRQUFMLEdBQWNyQyxDQUFDLElBQUUsSUFBSUksSUFBSixDQUFTSixDQUFULENBQTNELENBQXRELEVBQThILEtBQUtnSyxJQUFMLEVBQTlILEVBQTBJLEtBQUtyQyxRQUFMLEVBQTFJLEVBQTBKekgsQ0FBQyxJQUFFLFdBQVNBLENBQVosSUFBZSxLQUFLK0csUUFBTCxDQUFjLFlBQWQsQ0FBekssRUFBcU0sS0FBS3ZFLFVBQUwsQ0FBZ0JuVSxPQUFoQixDQUF3QixRQUF4QixDQUFyTSxFQUF1TyxDQUFDLEtBQUsrVCxDQUFMLENBQU9nRyxTQUFSLElBQW1CcEksQ0FBQyxJQUFFLFdBQVNBLENBQS9CLElBQWtDLEtBQUtoUSxJQUFMLEVBQXpRO0FBQXFSLEtBQWpobUI7QUFBa2htQmtkLFdBQU8sRUFBQyxpQkFBU3BOLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUMsVUFBSUMsQ0FBQyxHQUFDLElBQUlDLElBQUosQ0FBU0osQ0FBVCxDQUFOO0FBQWtCLGFBQU9HLENBQUMsQ0FBQ3NJLFVBQUYsQ0FBYXpJLENBQUMsQ0FBQ2MsVUFBRixLQUFlWixDQUE1QixHQUErQkMsQ0FBdEM7QUFBd0MsS0FBbG1tQjtBQUFtbW1Ca04sWUFBUSxFQUFDLGtCQUFTck4sQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxhQUFPLEtBQUtrTixPQUFMLENBQWFwTixDQUFiLEVBQWUsSUFBRUUsQ0FBakIsQ0FBUDtBQUEyQixLQUFycG1CO0FBQXNwbUIrTSxhQUFTLEVBQUMsbUJBQVNqTixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFVBQUcsQ0FBQ2UsQ0FBQyxDQUFDakIsQ0FBRCxDQUFMLEVBQVMsT0FBTyxLQUFLc0MsQ0FBTCxDQUFPQyxlQUFkO0FBQThCLFVBQUcsQ0FBQ3JDLENBQUosRUFBTSxPQUFPRixDQUFQO0FBQVMsVUFBSUcsQ0FBSjtBQUFBLFVBQU1LLENBQU47QUFBQSxVQUFROVUsQ0FBQyxHQUFDLElBQUkwVSxJQUFKLENBQVNKLENBQUMsQ0FBQzZCLE9BQUYsRUFBVCxDQUFWO0FBQUEsVUFBZ0NkLENBQUMsR0FBQ3JWLENBQUMsQ0FBQ29WLFVBQUYsRUFBbEM7QUFBQSxVQUFpRE0sQ0FBQyxHQUFDMVYsQ0FBQyxDQUFDbVYsV0FBRixFQUFuRDtBQUFBLFVBQW1FeFUsQ0FBQyxHQUFDOEcsSUFBSSxDQUFDbWEsR0FBTCxDQUFTcE4sQ0FBVCxDQUFyRTtBQUFpRixVQUFHQSxDQUFDLEdBQUNBLENBQUMsR0FBQyxDQUFGLEdBQUksQ0FBSixHQUFNLENBQUMsQ0FBVCxFQUFXLE1BQUk3VCxDQUFsQixFQUFvQm1VLENBQUMsR0FBQ04sQ0FBQyxLQUFHLENBQUMsQ0FBTCxHQUFPLFlBQVU7QUFBQyxlQUFPeFUsQ0FBQyxDQUFDbVYsV0FBRixPQUFrQk8sQ0FBekI7QUFBMkIsT0FBN0MsR0FBOEMsWUFBVTtBQUFDLGVBQU8xVixDQUFDLENBQUNtVixXQUFGLE9BQWtCVixDQUF6QjtBQUEyQixPQUF0RixFQUF1RkEsQ0FBQyxHQUFDaUIsQ0FBQyxHQUFDbEIsQ0FBM0YsRUFBNkZ4VSxDQUFDLENBQUNvaEIsV0FBRixDQUFjM00sQ0FBZCxDQUE3RixFQUE4R0EsQ0FBQyxHQUFDLENBQUNBLENBQUMsR0FBQyxFQUFILElBQU8sRUFBdkgsQ0FBcEIsS0FBa0o7QUFBQyxhQUFJLElBQUl1QixDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNyVixDQUFkLEVBQWdCcVYsQ0FBQyxFQUFqQjtBQUFvQmhXLFdBQUMsR0FBQyxLQUFLdWhCLFNBQUwsQ0FBZXZoQixDQUFmLEVBQWlCd1UsQ0FBakIsQ0FBRjtBQUFwQjs7QUFBMENDLFNBQUMsR0FBQ3pVLENBQUMsQ0FBQ21WLFdBQUYsRUFBRixFQUFrQm5WLENBQUMsQ0FBQytjLFVBQUYsQ0FBYTFILENBQWIsQ0FBbEIsRUFBa0NQLENBQUMsR0FBQyxhQUFVO0FBQUMsaUJBQU9MLENBQUMsS0FBR3pVLENBQUMsQ0FBQ21WLFdBQUYsRUFBWDtBQUEyQixTQUExRTtBQUEyRTs7QUFBQSxhQUFLTCxDQUFDLEVBQU47QUFBVTlVLFNBQUMsQ0FBQytjLFVBQUYsQ0FBYSxFQUFFMUgsQ0FBZixHQUFrQnJWLENBQUMsQ0FBQ29oQixXQUFGLENBQWMzTSxDQUFkLENBQWxCO0FBQVY7O0FBQTZDLGFBQU96VSxDQUFQO0FBQVMsS0FBbm5uQjtBQUFvbm5CNmhCLFlBQVEsRUFBQyxrQkFBU3ZOLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUMsYUFBTyxLQUFLK00sU0FBTCxDQUFlak4sQ0FBZixFQUFpQixLQUFHRSxDQUFwQixDQUFQO0FBQThCLEtBQXpxbkI7QUFBMHFuQnNOLHFCQUFpQixFQUFDLDJCQUFTeE4sQ0FBVCxFQUFXRSxDQUFYLEVBQWFDLENBQWIsRUFBZTtBQUFDLFNBQUU7QUFBQyxZQUFHSCxDQUFDLEdBQUMsS0FBS0csQ0FBTCxFQUFRSCxDQUFSLEVBQVVFLENBQVYsQ0FBRixFQUFlLENBQUMsS0FBSzRKLGVBQUwsQ0FBcUI5SixDQUFyQixDQUFuQixFQUEyQyxPQUFNLENBQUMsQ0FBUDtBQUFTRyxTQUFDLEdBQUMsU0FBRjtBQUFZLE9BQW5FLFFBQXlFLEtBQUtxSyxjQUFMLENBQW9CeEssQ0FBcEIsQ0FBekU7O0FBQWlHLGFBQU9BLENBQVA7QUFBUyxLQUF0em5CO0FBQXV6bkJ5Tix3QkFBb0IsRUFBQyw4QkFBU3ZOLENBQVQsRUFBVztBQUFDLGFBQU9GLENBQUMsQ0FBQ3FFLE9BQUYsQ0FBVW5FLENBQUMsQ0FBQ3VLLFNBQUYsRUFBVixFQUF3QixLQUFLbkksQ0FBTCxDQUFPcUIsa0JBQS9CLE1BQXFELENBQUMsQ0FBN0Q7QUFBK0QsS0FBdjVuQjtBQUF3NW5CNkcsa0JBQWMsRUFBQyx3QkFBU3RLLENBQVQsRUFBVztBQUFDLGFBQU8sS0FBS3VOLG9CQUFMLENBQTBCdk4sQ0FBMUIsS0FBOEJGLENBQUMsQ0FBQ3VGLElBQUYsQ0FBTyxLQUFLakQsQ0FBTCxDQUFPc0IsYUFBZCxFQUE0QixVQUFTNUQsQ0FBVCxFQUFXO0FBQUMsZUFBT3RVLENBQUMsQ0FBQ3dVLENBQUQsRUFBR0YsQ0FBSCxDQUFSO0FBQWMsT0FBdEQsRUFBd0QxVCxNQUF4RCxHQUErRCxDQUFwRztBQUFzRyxLQUF6aG9CO0FBQTBob0J3ZCxtQkFBZSxFQUFDLHlCQUFTOUosQ0FBVCxFQUFXO0FBQUMsYUFBT0EsQ0FBQyxJQUFFLEtBQUtzQyxDQUFMLENBQU9rQixTQUFWLElBQXFCeEQsQ0FBQyxJQUFFLEtBQUtzQyxDQUFMLENBQU9vQixPQUF0QztBQUE4QyxLQUFwbW9CO0FBQXFtb0J3QyxXQUFPLEVBQUMsaUJBQVNsRyxDQUFULEVBQVc7QUFBQyxVQUFHLENBQUMsS0FBSzZDLE1BQUwsQ0FBWXBULEVBQVosQ0FBZSxVQUFmLENBQUosRUFBK0IsT0FBTyxNQUFLLE9BQUt1USxDQUFDLENBQUNySCxPQUFQLElBQWdCLE9BQUtxSCxDQUFDLENBQUNySCxPQUF2QixLQUFpQyxLQUFLeEksSUFBTCxJQUFZNlAsQ0FBQyxDQUFDNE0sZUFBRixFQUE3QyxDQUFMLENBQVA7QUFBK0UsVUFBSTFNLENBQUo7QUFBQSxVQUFNQyxDQUFOO0FBQUEsVUFBUUssQ0FBQyxHQUFDLENBQUMsQ0FBWDtBQUFBLFVBQWE5VSxDQUFDLEdBQUMsS0FBSzhXLFNBQUwsSUFBZ0IsS0FBS0gsUUFBcEM7O0FBQTZDLGNBQU9yQyxDQUFDLENBQUNySCxPQUFUO0FBQWtCLGFBQUssRUFBTDtBQUFRLGVBQUs2SixTQUFMLElBQWdCLEtBQUtBLFNBQUwsR0FBZSxJQUFmLEVBQW9CLEtBQUtILFFBQUwsR0FBYyxLQUFLRCxLQUFMLENBQVcxRSxHQUFYLENBQWUsQ0FBQyxDQUFoQixLQUFvQixLQUFLMkUsUUFBM0QsRUFBb0UsS0FBSzJILElBQUwsRUFBcEYsSUFBaUcsS0FBSzlaLElBQUwsRUFBakcsRUFBNkc4UCxDQUFDLENBQUMvUyxjQUFGLEVBQTdHLEVBQWdJK1MsQ0FBQyxDQUFDNE0sZUFBRixFQUFoSTtBQUFvSjs7QUFBTSxhQUFLLEVBQUw7QUFBUSxhQUFLLEVBQUw7QUFBUSxhQUFLLEVBQUw7QUFBUSxhQUFLLEVBQUw7QUFBUSxjQUFHLENBQUMsS0FBS3RLLENBQUwsQ0FBT29MLGtCQUFSLElBQTRCLE1BQUksS0FBS3BMLENBQUwsQ0FBT3FCLGtCQUFQLENBQTBCclgsTUFBN0QsRUFBb0U7QUFBTTRULFdBQUMsR0FBQyxPQUFLRixDQUFDLENBQUNySCxPQUFQLElBQWdCLE9BQUtxSCxDQUFDLENBQUNySCxPQUF2QixHQUErQixDQUFDLENBQWhDLEdBQWtDLENBQXBDLEVBQXNDLE1BQUksS0FBS3dPLFFBQVQsR0FBa0JuSCxDQUFDLENBQUMyTixPQUFGLElBQVd4TixDQUFDLEdBQUMsS0FBS3FOLGlCQUFMLENBQXVCOWhCLENBQXZCLEVBQXlCd1UsQ0FBekIsRUFBMkIsVUFBM0IsQ0FBRixFQUF5Q0MsQ0FBQyxJQUFFLEtBQUs4RyxRQUFMLENBQWMsWUFBZCxFQUEyQixLQUFLNUUsUUFBaEMsQ0FBdkQsSUFBa0dyQyxDQUFDLENBQUM0TixRQUFGLElBQVl6TixDQUFDLEdBQUMsS0FBS3FOLGlCQUFMLENBQXVCOWhCLENBQXZCLEVBQXlCd1UsQ0FBekIsRUFBMkIsV0FBM0IsQ0FBRixFQUEwQ0MsQ0FBQyxJQUFFLEtBQUs4RyxRQUFMLENBQWMsYUFBZCxFQUE0QixLQUFLNUUsUUFBakMsQ0FBekQsSUFBcUcsT0FBS3JDLENBQUMsQ0FBQ3JILE9BQVAsSUFBZ0IsT0FBS3FILENBQUMsQ0FBQ3JILE9BQXZCLEdBQStCd0gsQ0FBQyxHQUFDLEtBQUtxTixpQkFBTCxDQUF1QjloQixDQUF2QixFQUF5QndVLENBQXpCLEVBQTJCLFNBQTNCLENBQWpDLEdBQXVFLEtBQUt1TixvQkFBTCxDQUEwQi9oQixDQUExQixNQUErQnlVLENBQUMsR0FBQyxLQUFLcU4saUJBQUwsQ0FBdUI5aEIsQ0FBdkIsRUFBeUJ3VSxDQUF6QixFQUEyQixVQUEzQixDQUFqQyxDQUFoUyxHQUF5VyxNQUFJLEtBQUtpSCxRQUFULElBQW1CLE9BQUtuSCxDQUFDLENBQUNySCxPQUFQLElBQWdCLE9BQUtxSCxDQUFDLENBQUNySCxPQUF2QixLQUFpQ3VILENBQUMsSUFBRSxDQUFwQyxHQUF1Q0MsQ0FBQyxHQUFDLEtBQUtxTixpQkFBTCxDQUF1QjloQixDQUF2QixFQUF5QndVLENBQXpCLEVBQTJCLFdBQTNCLENBQTVELElBQXFHLE1BQUksS0FBS2lILFFBQVQsS0FBb0IsT0FBS25ILENBQUMsQ0FBQ3JILE9BQVAsSUFBZ0IsT0FBS3FILENBQUMsQ0FBQ3JILE9BQXZCLEtBQWlDdUgsQ0FBQyxJQUFFLENBQXBDLEdBQXVDQyxDQUFDLEdBQUMsS0FBS3FOLGlCQUFMLENBQXVCOWhCLENBQXZCLEVBQXlCd1UsQ0FBekIsRUFBMkIsVUFBM0IsQ0FBN0QsQ0FBcGYsRUFBeWxCQyxDQUFDLEtBQUcsS0FBS3FDLFNBQUwsR0FBZSxLQUFLSCxRQUFMLEdBQWNsQyxDQUE3QixFQUErQixLQUFLd0gsUUFBTCxFQUEvQixFQUErQyxLQUFLcUMsSUFBTCxFQUEvQyxFQUEyRGhLLENBQUMsQ0FBQy9TLGNBQUYsRUFBOUQsQ0FBMWxCO0FBQTRxQjs7QUFBTSxhQUFLLEVBQUw7QUFBUSxjQUFHLENBQUMsS0FBS3FWLENBQUwsQ0FBT29GLFVBQVgsRUFBc0I7QUFBTWhjLFdBQUMsR0FBQyxLQUFLOFcsU0FBTCxJQUFnQixLQUFLSixLQUFMLENBQVcxRSxHQUFYLENBQWUsQ0FBQyxDQUFoQixDQUFoQixJQUFvQyxLQUFLMkUsUUFBM0MsRUFBb0QsS0FBS0MsQ0FBTCxDQUFPb0wsa0JBQVAsS0FBNEIsS0FBS1IsaUJBQUwsQ0FBdUJ4aEIsQ0FBdkIsR0FBMEI4VSxDQUFDLEdBQUMsQ0FBQyxDQUF6RCxDQUFwRCxFQUFnSCxLQUFLZ0MsU0FBTCxHQUFlLElBQS9ILEVBQW9JLEtBQUtILFFBQUwsR0FBYyxLQUFLRCxLQUFMLENBQVcxRSxHQUFYLENBQWUsQ0FBQyxDQUFoQixLQUFvQixLQUFLMkUsUUFBM0ssRUFBb0wsS0FBS3NGLFFBQUwsRUFBcEwsRUFBb00sS0FBS3FDLElBQUwsRUFBcE0sRUFBZ04sS0FBS25ILE1BQUwsQ0FBWXBULEVBQVosQ0FBZSxVQUFmLE1BQTZCdVEsQ0FBQyxDQUFDL1MsY0FBRixJQUFtQitTLENBQUMsQ0FBQzRNLGVBQUYsRUFBbkIsRUFBdUMsS0FBS3RLLENBQUwsQ0FBT2dHLFNBQVAsSUFBa0IsS0FBS3BZLElBQUwsRUFBdEYsQ0FBaE47QUFBbVQ7O0FBQU0sYUFBSyxDQUFMO0FBQU8sZUFBS3NTLFNBQUwsR0FBZSxJQUFmLEVBQW9CLEtBQUtILFFBQUwsR0FBYyxLQUFLRCxLQUFMLENBQVcxRSxHQUFYLENBQWUsQ0FBQyxDQUFoQixLQUFvQixLQUFLMkUsUUFBM0QsRUFBb0UsS0FBSzJILElBQUwsRUFBcEUsRUFBZ0YsS0FBSzlaLElBQUwsRUFBaEY7QUFBcHpDOztBQUFnNUNzUSxPQUFDLEtBQUcsS0FBSzRCLEtBQUwsQ0FBVzlWLE1BQVgsR0FBa0IsS0FBSzJhLFFBQUwsQ0FBYyxZQUFkLENBQWxCLEdBQThDLEtBQUtBLFFBQUwsQ0FBYyxXQUFkLENBQTlDLEVBQXlFLEtBQUt2RSxVQUFMLENBQWdCblUsT0FBaEIsQ0FBd0IsUUFBeEIsQ0FBNUUsQ0FBRDtBQUFnSCxLQUFweHJCO0FBQXF4ckJ1VixlQUFXLEVBQUMscUJBQVM5RCxDQUFULEVBQVc7QUFBQyxXQUFLbUgsUUFBTCxHQUFjbkgsQ0FBZCxFQUFnQixLQUFLNkMsTUFBTCxDQUFZZ0wsUUFBWixDQUFxQixLQUFyQixFQUE0QjNkLElBQTVCLEdBQW1Dc0ssTUFBbkMsQ0FBMEMsaUJBQWVzSSxDQUFDLENBQUNzQixTQUFGLENBQVksS0FBSytDLFFBQWpCLEVBQTJCMkcsT0FBcEYsRUFBNkYzZCxJQUE3RixFQUFoQixFQUFvSCxLQUFLMFksZUFBTCxFQUFwSCxFQUEySSxLQUFLNUIsUUFBTCxDQUFjLGdCQUFkLEVBQStCLElBQUk3RyxJQUFKLENBQVMsS0FBS2lDLFFBQWQsQ0FBL0IsQ0FBM0k7QUFBbU07QUFBaC9yQixHQUFaOztBQUE4L3JCLE1BQUlzRCxDQUFDLEdBQUMsU0FBRkEsQ0FBRSxDQUFTekYsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQ0gsS0FBQyxDQUFDNVIsSUFBRixDQUFPOFIsQ0FBUCxFQUFTLFlBQVQsRUFBc0IsSUFBdEIsR0FBNEIsS0FBS2hHLE9BQUwsR0FBYThGLENBQUMsQ0FBQ0UsQ0FBRCxDQUExQyxFQUE4QyxLQUFLcFIsTUFBTCxHQUFZa1IsQ0FBQyxDQUFDN0IsR0FBRixDQUFNZ0MsQ0FBQyxDQUFDclIsTUFBUixFQUFlLFVBQVNrUixDQUFULEVBQVc7QUFBQyxhQUFPQSxDQUFDLENBQUMrTixNQUFGLEdBQVMvTixDQUFDLENBQUMsQ0FBRCxDQUFWLEdBQWNBLENBQXJCO0FBQXVCLEtBQWxELENBQTFELEVBQThHLE9BQU9HLENBQUMsQ0FBQ3JSLE1BQXZILEVBQThILEtBQUtrZixlQUFMLEdBQXFCN04sQ0FBQyxDQUFDNk4sZUFBckosRUFBcUssT0FBTzdOLENBQUMsQ0FBQzZOLGVBQTlLLEVBQThMdkUsQ0FBQyxDQUFDMVYsSUFBRixDQUFPaU0sQ0FBQyxDQUFDLEtBQUtsUixNQUFOLENBQVIsRUFBc0JxUixDQUF0QixFQUF5QjFVLEVBQXpCLENBQTRCLFlBQTVCLEVBQXlDdVUsQ0FBQyxDQUFDdEYsS0FBRixDQUFRLEtBQUt1VCxXQUFiLEVBQXlCLElBQXpCLENBQXpDLENBQTlMLEVBQXVRLEtBQUtDLE9BQUwsR0FBYWxPLENBQUMsQ0FBQzdCLEdBQUYsQ0FBTSxLQUFLclAsTUFBWCxFQUFrQixVQUFTb1IsQ0FBVCxFQUFXO0FBQUMsYUFBT0YsQ0FBQyxDQUFDNVIsSUFBRixDQUFPOFIsQ0FBUCxFQUFTLFlBQVQsQ0FBUDtBQUE4QixLQUE1RCxDQUFwUixFQUFrVixLQUFLaU8sV0FBTCxFQUFsVjtBQUFxVyxHQUF6WDs7QUFBMFh4SSxHQUFDLENBQUM5SixTQUFGLEdBQVk7QUFBQ3NTLGVBQVcsRUFBQyx1QkFBVTtBQUFDLFdBQUsvTCxLQUFMLEdBQVdwQyxDQUFDLENBQUM3QixHQUFGLENBQU0sS0FBSytQLE9BQVgsRUFBbUIsVUFBU2xPLENBQVQsRUFBVztBQUFDLGVBQU9BLENBQUMsQ0FBQ2MsVUFBRixFQUFQO0FBQXNCLE9BQXJELENBQVgsRUFBa0UsS0FBS3NOLFlBQUwsRUFBbEU7QUFBc0YsS0FBOUc7QUFBK0dBLGdCQUFZLEVBQUMsd0JBQVU7QUFBQyxVQUFJbE8sQ0FBQyxHQUFDRixDQUFDLENBQUM3QixHQUFGLENBQU0sS0FBS2lFLEtBQVgsRUFBaUIsVUFBU3BDLENBQVQsRUFBVztBQUFDLGVBQU9BLENBQUMsQ0FBQzZCLE9BQUYsRUFBUDtBQUFtQixPQUFoRCxDQUFOO0FBQXdEN0IsT0FBQyxDQUFDL1IsSUFBRixDQUFPLEtBQUtpZ0IsT0FBWixFQUFvQixVQUFTbE8sQ0FBVCxFQUFXRyxDQUFYLEVBQWE7QUFBQ0EsU0FBQyxDQUFDaUssUUFBRixDQUFXbEssQ0FBWDtBQUFjLE9BQWhEO0FBQWtELEtBQWpQO0FBQWtQbUksY0FBVSxFQUFDLHNCQUFVO0FBQUNySSxPQUFDLENBQUMvUixJQUFGLENBQU8sS0FBS2lnQixPQUFaLEVBQW9CLFVBQVNsTyxDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDQSxTQUFDLENBQUNtSSxVQUFGO0FBQWUsT0FBakQ7QUFBbUQsS0FBM1Q7QUFBNFQ0RixlQUFXLEVBQUMscUJBQVM5TixDQUFULEVBQVc7QUFBQyxVQUFHLENBQUMsS0FBS2tPLFFBQVQsRUFBa0I7QUFBQyxhQUFLQSxRQUFMLEdBQWMsQ0FBQyxDQUFmO0FBQWlCLFlBQUk3TixDQUFDLEdBQUNSLENBQUMsQ0FBQzVSLElBQUYsQ0FBTytSLENBQUMsQ0FBQ3ZVLE1BQVQsRUFBZ0IsWUFBaEIsQ0FBTjs7QUFBb0MsWUFBRzRVLENBQUMsS0FBR04sQ0FBUCxFQUFTO0FBQUMsY0FBSXhVLENBQUMsR0FBQzhVLENBQUMsQ0FBQ00sVUFBRixFQUFOO0FBQUEsY0FBcUJDLENBQUMsR0FBQyxLQUFLaU4sZUFBNUI7QUFBQSxjQUE0Qy9NLENBQUMsR0FBQ2pCLENBQUMsQ0FBQ3FFLE9BQUYsQ0FBVWxFLENBQUMsQ0FBQ3ZVLE1BQVosRUFBbUIsS0FBS2tELE1BQXhCLENBQTlDO0FBQUEsY0FBOEVzUyxDQUFDLEdBQUNILENBQUMsR0FBQyxDQUFsRjtBQUFBLGNBQW9GNVUsQ0FBQyxHQUFDNFUsQ0FBQyxHQUFDLENBQXhGO0FBQUEsY0FBMEZTLENBQUMsR0FBQyxLQUFLNVMsTUFBTCxDQUFZeEMsTUFBeEc7O0FBQStHLGNBQUcyVSxDQUFDLEtBQUcsQ0FBQyxDQUFSLEVBQVU7QUFBQyxnQkFBR2pCLENBQUMsQ0FBQy9SLElBQUYsQ0FBTyxLQUFLaWdCLE9BQVosRUFBb0IsVUFBU2xPLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUNBLGVBQUMsQ0FBQ1ksVUFBRixNQUFnQlosQ0FBQyxLQUFHTSxDQUFKLElBQU9PLENBQXZCLElBQTBCYixDQUFDLENBQUN1SSxVQUFGLENBQWEvYyxDQUFiLENBQTFCO0FBQTBDLGFBQTVFLEdBQThFQSxDQUFDLEdBQUMsS0FBSzBXLEtBQUwsQ0FBV2hCLENBQVgsQ0FBbkYsRUFBaUcsT0FBS0EsQ0FBQyxJQUFFLENBQUgsSUFBTTFWLENBQUMsR0FBQyxLQUFLMFcsS0FBTCxDQUFXaEIsQ0FBWCxDQUFiO0FBQTRCLG1CQUFLOE0sT0FBTCxDQUFhOU0sQ0FBQyxFQUFkLEVBQWtCcUgsVUFBbEIsQ0FBNkIvYyxDQUE3QjtBQUE1QixhQUFqRyxNQUFrSyxJQUFHQSxDQUFDLEdBQUMsS0FBSzBXLEtBQUwsQ0FBVy9WLENBQVgsQ0FBTCxFQUFtQixPQUFLQSxDQUFDLEdBQUNxVixDQUFGLElBQUtoVyxDQUFDLEdBQUMsS0FBSzBXLEtBQUwsQ0FBVy9WLENBQVgsQ0FBWjtBQUEyQixtQkFBSzZoQixPQUFMLENBQWE3aEIsQ0FBQyxFQUFkLEVBQWtCb2MsVUFBbEIsQ0FBNkIvYyxDQUE3QjtBQUEzQjtBQUEyRCxpQkFBS3lpQixXQUFMLElBQW1CLE9BQU8sS0FBS0UsUUFBL0I7QUFBd0M7QUFBQztBQUFDO0FBQUMsS0FBM3pCO0FBQTR6QjNkLFdBQU8sRUFBQyxtQkFBVTtBQUFDc1AsT0FBQyxDQUFDN0IsR0FBRixDQUFNLEtBQUsrUCxPQUFYLEVBQW1CLFVBQVNsTyxDQUFULEVBQVc7QUFBQ0EsU0FBQyxDQUFDdFAsT0FBRjtBQUFZLE9BQTNDLEdBQTZDc1AsQ0FBQyxDQUFDLEtBQUtsUixNQUFOLENBQUQsQ0FBZTJRLEdBQWYsQ0FBbUIsWUFBbkIsRUFBZ0MsS0FBS3dPLFdBQXJDLENBQTdDLEVBQStGLE9BQU8sS0FBSy9ULE9BQUwsQ0FBYTlMLElBQWIsR0FBb0JXLFVBQTFIO0FBQXFJLEtBQXA5QjtBQUFxOUJzQixVQUFNLEVBQUMwUSxDQUFDLENBQUMsU0FBRCxFQUFXLHlGQUFYO0FBQTc5QixHQUFaOztBQUFnbEMsTUFBSXlJLENBQUMsR0FBQ3hKLENBQUMsQ0FBQzdHLEVBQUYsQ0FBS3BLLFVBQVg7QUFBQSxNQUFzQjBhLENBQUMsR0FBQyxTQUFGQSxDQUFFLENBQVN0SixDQUFULEVBQVc7QUFBQyxRQUFJSyxDQUFDLEdBQUNwSSxLQUFLLENBQUNrSSxLQUFOLENBQVksSUFBWixFQUFpQkMsU0FBakIsQ0FBTjtBQUFrQ0MsS0FBQyxDQUFDOE4sS0FBRjtBQUFVLFFBQUk1aUIsQ0FBSjtBQUFNLFFBQUcsS0FBS3VDLElBQUwsQ0FBVSxZQUFVO0FBQUMsVUFBSWlTLENBQUMsR0FBQ0YsQ0FBQyxDQUFDLElBQUQsQ0FBUDtBQUFBLFVBQWNlLENBQUMsR0FBQ2IsQ0FBQyxDQUFDOVIsSUFBRixDQUFPLFlBQVAsQ0FBaEI7QUFBQSxVQUFxQzZTLENBQUMsR0FBQyxvQkFBaUJkLENBQWpCLEtBQW9CQSxDQUEzRDs7QUFBNkQsVUFBRyxDQUFDWSxDQUFKLEVBQU07QUFBQyxZQUFJVyxDQUFDLEdBQUNOLENBQUMsQ0FBQyxJQUFELEVBQU0sTUFBTixDQUFQO0FBQUEsWUFBcUJvSSxDQUFDLEdBQUN4SixDQUFDLENBQUN2TSxNQUFGLENBQVMsRUFBVCxFQUFZNk8sQ0FBWixFQUFjWixDQUFkLEVBQWdCVCxDQUFoQixDQUF2QjtBQUFBLFlBQTBDd0ksQ0FBQyxHQUFDcGQsQ0FBQyxDQUFDbWQsQ0FBQyxDQUFDN2EsUUFBSCxDQUE3QztBQUFBLFlBQTBEOFMsQ0FBQyxHQUFDekIsQ0FBQyxDQUFDdk0sTUFBRixDQUFTLEVBQVQsRUFBWTZPLENBQVosRUFBY21ILENBQWQsRUFBZ0IvSCxDQUFoQixFQUFrQlQsQ0FBbEIsQ0FBNUQ7QUFBaUZmLFNBQUMsQ0FBQ2xSLFFBQUYsQ0FBVyxpQkFBWCxLQUErQnlTLENBQUMsQ0FBQzNTLE1BQWpDLElBQXlDa1IsQ0FBQyxDQUFDdk0sTUFBRixDQUFTZ08sQ0FBVCxFQUFXO0FBQUMzUyxnQkFBTSxFQUFDMlMsQ0FBQyxDQUFDM1MsTUFBRixJQUFVb1IsQ0FBQyxDQUFDblQsSUFBRixDQUFPLE9BQVAsRUFBZ0J3aEIsT0FBaEI7QUFBbEIsU0FBWCxHQUF5RHhOLENBQUMsR0FBQyxJQUFJNEUsQ0FBSixDQUFNLElBQU4sRUFBV2xFLENBQVgsQ0FBcEcsSUFBbUhWLENBQUMsR0FBQyxJQUFJbUIsQ0FBSixDQUFNLElBQU4sRUFBV1QsQ0FBWCxDQUFySCxFQUFtSXZCLENBQUMsQ0FBQzlSLElBQUYsQ0FBTyxZQUFQLEVBQW9CMlMsQ0FBcEIsQ0FBbkk7QUFBMEo7O0FBQUEsa0JBQVUsT0FBT1osQ0FBakIsSUFBb0IsY0FBWSxPQUFPWSxDQUFDLENBQUNaLENBQUQsQ0FBeEMsS0FBOEN6VSxDQUFDLEdBQUNxVixDQUFDLENBQUNaLENBQUQsQ0FBRCxDQUFLRyxLQUFMLENBQVdTLENBQVgsRUFBYVAsQ0FBYixDQUFoRDtBQUFpRSxLQUFyWSxHQUF1WTlVLENBQUMsS0FBR3dVLENBQUosSUFBT3hVLENBQUMsWUFBWXdXLENBQXBCLElBQXVCeFcsQ0FBQyxZQUFZaWEsQ0FBOWEsRUFBZ2IsT0FBTyxJQUFQO0FBQVksUUFBRyxLQUFLclosTUFBTCxHQUFZLENBQWYsRUFBaUIsTUFBTSxJQUFJa2lCLEtBQUosQ0FBVSxnRUFBOERyTyxDQUE5RCxHQUFnRSxZQUExRSxDQUFOO0FBQThGLFdBQU96VSxDQUFQO0FBQVMsR0FBMW9COztBQUEyb0JzVSxHQUFDLENBQUM3RyxFQUFGLENBQUtwSyxVQUFMLEdBQWdCMGEsQ0FBaEI7QUFBa0IsTUFBSW5ILENBQUMsR0FBQ3RDLENBQUMsQ0FBQzdHLEVBQUYsQ0FBS3BLLFVBQUwsQ0FBZ0IwZixRQUFoQixHQUF5QjtBQUFDcEosb0JBQWdCLEVBQUMsQ0FBQyxDQUFuQjtBQUFxQmlELGFBQVMsRUFBQyxDQUFDLENBQWhDO0FBQWtDd0QsaUJBQWEsRUFBQzlMLENBQUMsQ0FBQzhLLElBQWxEO0FBQXVEeUIsbUJBQWUsRUFBQ3ZNLENBQUMsQ0FBQzhLLElBQXpFO0FBQThFMkIsa0JBQWMsRUFBQ3pNLENBQUMsQ0FBQzhLLElBQS9GO0FBQW9HNEIsb0JBQWdCLEVBQUMxTSxDQUFDLENBQUM4SyxJQUF2SDtBQUE0SDZCLHFCQUFpQixFQUFDM00sQ0FBQyxDQUFDOEssSUFBaEo7QUFBcUp2SCxpQkFBYSxFQUFDLENBQUMsQ0FBcEs7QUFBc0srSCxZQUFRLEVBQUMsQ0FBQyxDQUFoTDtBQUFrTDZCLGdCQUFZLEVBQUMsQ0FBQyxDQUFoTTtBQUFrTXhKLHNCQUFrQixFQUFDLEVBQXJOO0FBQXdOL1UseUJBQXFCLEVBQUMsRUFBOU87QUFBaVBnVixpQkFBYSxFQUFDLEVBQS9QO0FBQWtRRixXQUFPLEVBQUMsSUFBRSxDQUE1UTtBQUE4UWdFLGNBQVUsRUFBQyxDQUFDLENBQTFSO0FBQTRSekMsVUFBTSxFQUFDLFlBQW5TO0FBQWdUK0ksbUJBQWUsRUFBQyxDQUFDLENBQWpVO0FBQW1VTixzQkFBa0IsRUFBQyxDQUFDLENBQXZWO0FBQXlWL2UsWUFBUSxFQUFDLElBQWxXO0FBQXVXNlYsZUFBVyxFQUFDLENBQW5YO0FBQXFYQyxlQUFXLEVBQUMsQ0FBalk7QUFBbVlHLGFBQVMsRUFBQyxDQUFDLENBQTlZO0FBQWdabFcsc0JBQWtCLEVBQUMsR0FBbmE7QUFBdWE0VyxlQUFXLEVBQUMsTUFBbmI7QUFBMGJoQyxPQUFHLEVBQUMsQ0FBQyxDQUEvYjtBQUFpY0UsYUFBUyxFQUFDLEVBQUUsSUFBRSxDQUFKLENBQTNjO0FBQWtkTyxhQUFTLEVBQUMsQ0FBNWQ7QUFBOGRzSCxZQUFRLEVBQUMsQ0FBQyxDQUF4ZTtBQUEwZWQsa0JBQWMsRUFBQyxDQUFDLENBQTFmO0FBQTRmUixrQkFBYyxFQUFDLENBQUMsQ0FBNWdCO0FBQThnQmpGLGFBQVMsRUFBQyxDQUF4aEI7QUFBMGhCMEMsd0JBQW9CLEVBQUMsQ0FBQyxDQUFoakI7QUFBa2pCSCxvQkFBZ0IsRUFBQyxDQUFDLENBQXBrQjtBQUFza0JqQixlQUFXLEVBQUMsQ0FBQyxDQUFubEI7QUFBcWxCbUQsZ0JBQVksRUFBQyxFQUFsbUI7QUFBcW1CamIsYUFBUyxFQUFDLE1BQS9tQjtBQUFzbkJrWSxvQkFBZ0IsRUFBQyxDQUFDLENBQXhvQjtBQUEwb0IzVSxTQUFLLEVBQUMsRUFBaHBCO0FBQW1wQm1SLGFBQVMsRUFBQztBQUFDQyxlQUFTLEVBQUMsVUFBWDtBQUFzQkMsZ0JBQVUsRUFBQztBQUFqQyxLQUE3cEI7QUFBMHNCK0csZ0JBQVksRUFBQyxDQUFDO0FBQXh0QixHQUEvQjtBQUFBLE1BQTB2QnhJLENBQUMsR0FBQ3pCLENBQUMsQ0FBQzdHLEVBQUYsQ0FBS3BLLFVBQUwsQ0FBZ0IyZixXQUFoQixHQUE0QixDQUFDLFFBQUQsRUFBVSxLQUFWLEVBQWdCLFdBQWhCLENBQXh4QjtBQUFxekIxTyxHQUFDLENBQUM3RyxFQUFGLENBQUtwSyxVQUFMLENBQWdCOFEsV0FBaEIsR0FBNEJxQyxDQUE1QjtBQUE4QixNQUFJVixDQUFDLEdBQUN4QixDQUFDLENBQUM3RyxFQUFGLENBQUtwSyxVQUFMLENBQWdCcVQsS0FBaEIsR0FBc0I7QUFBQytJLE1BQUUsRUFBQztBQUFDd0QsVUFBSSxFQUFDLENBQUMsUUFBRCxFQUFVLFFBQVYsRUFBbUIsU0FBbkIsRUFBNkIsV0FBN0IsRUFBeUMsVUFBekMsRUFBb0QsUUFBcEQsRUFBNkQsVUFBN0QsQ0FBTjtBQUErRUMsZUFBUyxFQUFDLENBQUMsS0FBRCxFQUFPLEtBQVAsRUFBYSxLQUFiLEVBQW1CLEtBQW5CLEVBQXlCLEtBQXpCLEVBQStCLEtBQS9CLEVBQXFDLEtBQXJDLENBQXpGO0FBQXFJMUUsYUFBTyxFQUFDLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBVyxJQUFYLEVBQWdCLElBQWhCLEVBQXFCLElBQXJCLEVBQTBCLElBQTFCLEVBQStCLElBQS9CLENBQTdJO0FBQWtMMkUsWUFBTSxFQUFDLENBQUMsU0FBRCxFQUFXLFVBQVgsRUFBc0IsT0FBdEIsRUFBOEIsT0FBOUIsRUFBc0MsS0FBdEMsRUFBNEMsTUFBNUMsRUFBbUQsTUFBbkQsRUFBMEQsUUFBMUQsRUFBbUUsV0FBbkUsRUFBK0UsU0FBL0UsRUFBeUYsVUFBekYsRUFBb0csVUFBcEcsQ0FBekw7QUFBeVMxRSxpQkFBVyxFQUFDLENBQUMsS0FBRCxFQUFPLEtBQVAsRUFBYSxLQUFiLEVBQW1CLEtBQW5CLEVBQXlCLEtBQXpCLEVBQStCLEtBQS9CLEVBQXFDLEtBQXJDLEVBQTJDLEtBQTNDLEVBQWlELEtBQWpELEVBQXVELEtBQXZELEVBQTZELEtBQTdELEVBQW1FLEtBQW5FLENBQXJUO0FBQStYZSxXQUFLLEVBQUMsT0FBclk7QUFBNllsSixXQUFLLEVBQUMsT0FBblo7QUFBMlpvSixpQkFBVyxFQUFDO0FBQXZhO0FBQUosR0FBNUI7QUFBQSxNQUFtZHRJLENBQUMsR0FBQztBQUFDc0IsYUFBUyxFQUFDLENBQUM7QUFBQ0UsV0FBSyxFQUFDLENBQUMsTUFBRCxFQUFRLE9BQVIsQ0FBUDtBQUF3QndKLGFBQU8sRUFBQyxNQUFoQztBQUF1Q3BpQixPQUFDLEVBQUM7QUFBekMsS0FBRCxFQUF5RDtBQUFDNFksV0FBSyxFQUFDLENBQUMsUUFBRCxFQUFVLE1BQVYsQ0FBUDtBQUF5QndKLGFBQU8sRUFBQyxRQUFqQztBQUEwQ3BpQixPQUFDLEVBQUMsWUFBNUM7QUFBeURzaEIsYUFBTyxFQUFDO0FBQWpFLEtBQXpELEVBQTZIO0FBQUMxSSxXQUFLLEVBQUMsQ0FBQyxPQUFELEVBQVMsUUFBVCxDQUFQO0FBQTBCd0osYUFBTyxFQUFDLE9BQWxDO0FBQTBDcGlCLE9BQUMsRUFBQyxjQUE1QztBQUEyRHNoQixhQUFPLEVBQUM7QUFBbkUsS0FBN0gsRUFBb007QUFBQzFJLFdBQUssRUFBQyxDQUFDLFNBQUQsRUFBVyxTQUFYLENBQVA7QUFBNkJ3SixhQUFPLEVBQUMsU0FBckM7QUFBK0NwaUIsT0FBQyxFQUFDLGVBQWpEO0FBQWlFc2hCLGFBQU8sRUFBQztBQUF6RSxLQUFwTSxFQUFrUjtBQUFDMUksV0FBSyxFQUFDLENBQUMsV0FBRCxFQUFhLFlBQWIsQ0FBUDtBQUFrQ3dKLGFBQU8sRUFBQyxXQUExQztBQUFzRHBpQixPQUFDLEVBQUMsa0JBQXhEO0FBQTJFc2hCLGFBQU8sRUFBQztBQUFuRixLQUFsUixDQUFYO0FBQXNYOEIsY0FBVSxFQUFDLDRCQUFqWTtBQUE4WkMsa0JBQWMsRUFBQyw2Q0FBN2E7QUFBMmQvSixlQUFXLEVBQUMscUJBQVNoRixDQUFULEVBQVc7QUFBQyxVQUFHLGNBQVksT0FBT0EsQ0FBQyxDQUFDZ1AsT0FBckIsSUFBOEIsY0FBWSxPQUFPaFAsQ0FBQyxDQUFDaVAsU0FBdEQsRUFBZ0UsT0FBT2pQLENBQVA7QUFBUyxVQUFJRSxDQUFDLEdBQUNGLENBQUMsQ0FBQzFNLE9BQUYsQ0FBVSxLQUFLd2IsVUFBZixFQUEwQixJQUExQixFQUFnQzlZLEtBQWhDLENBQXNDLElBQXRDLENBQU47QUFBQSxVQUFrRG1LLENBQUMsR0FBQ0gsQ0FBQyxDQUFDMUUsS0FBRixDQUFRLEtBQUt3VCxVQUFiLENBQXBEO0FBQTZFLFVBQUcsQ0FBQzVPLENBQUQsSUFBSSxDQUFDQSxDQUFDLENBQUM1VCxNQUFQLElBQWUsQ0FBQzZULENBQWhCLElBQW1CLE1BQUlBLENBQUMsQ0FBQzdULE1BQTVCLEVBQW1DLE1BQU0sSUFBSWtpQixLQUFKLENBQVUsc0JBQVYsQ0FBTjtBQUF3QyxhQUFNO0FBQUNVLGtCQUFVLEVBQUNoUCxDQUFaO0FBQWNpUCxhQUFLLEVBQUNoUDtBQUFwQixPQUFOO0FBQTZCLEtBQWp2QjtBQUFrdkJpRixhQUFTLEVBQUMsbUJBQVNqRixDQUFULEVBQVd6VSxDQUFYLEVBQWFxVixDQUFiLEVBQWVFLENBQWYsRUFBaUI7QUFBQyxlQUFTRyxDQUFULENBQVdwQixDQUFYLEVBQWFFLENBQWIsRUFBZTtBQUFDLGVBQU9BLENBQUMsS0FBRyxDQUFDLENBQUwsS0FBU0EsQ0FBQyxHQUFDLEVBQVgsR0FBZUYsQ0FBQyxHQUFDLEdBQUYsS0FBUUEsQ0FBQyxJQUFFLEdBQUgsRUFBT0EsQ0FBQyxHQUFFLElBQUlJLElBQUosRUFBRCxDQUFXSyxXQUFYLEtBQXlCUCxDQUEzQixLQUErQkYsQ0FBQyxJQUFFLEdBQWxDLENBQWYsQ0FBZixFQUFzRUEsQ0FBN0U7QUFBK0U7O0FBQUEsZUFBUzNULENBQVQsR0FBWTtBQUFDLFlBQUkyVCxDQUFDLEdBQUMsS0FBSzJCLEtBQUwsQ0FBVyxDQUFYLEVBQWFELENBQUMsQ0FBQytILENBQUQsQ0FBRCxDQUFLbmQsTUFBbEIsQ0FBTjtBQUFBLFlBQWdDNFQsQ0FBQyxHQUFDd0IsQ0FBQyxDQUFDK0gsQ0FBRCxDQUFELENBQUs5SCxLQUFMLENBQVcsQ0FBWCxFQUFhM0IsQ0FBQyxDQUFDMVQsTUFBZixDQUFsQztBQUF5RCxlQUFPMFQsQ0FBQyxDQUFDcUIsV0FBRixPQUFrQm5CLENBQUMsQ0FBQ21CLFdBQUYsRUFBekI7QUFBeUM7O0FBQUEsVUFBRyxDQUFDbEIsQ0FBSixFQUFNLE9BQU9ELENBQVA7QUFBUyxVQUFHQyxDQUFDLFlBQVlDLElBQWhCLEVBQXFCLE9BQU9ELENBQVA7QUFBUyxVQUFHLFlBQVUsT0FBT3pVLENBQWpCLEtBQXFCQSxDQUFDLEdBQUNvWCxDQUFDLENBQUNrQyxXQUFGLENBQWN0WixDQUFkLENBQXZCLEdBQXlDQSxDQUFDLENBQUNzakIsT0FBOUMsRUFBc0QsT0FBT3RqQixDQUFDLENBQUNzakIsT0FBRixDQUFVN08sQ0FBVixFQUFZelUsQ0FBWixFQUFjcVYsQ0FBZCxDQUFQO0FBQXdCLFVBQUlXLENBQUo7QUFBQSxVQUFNaUUsQ0FBTjtBQUFBLFVBQVE2RCxDQUFSO0FBQUEsVUFBVUMsQ0FBVjtBQUFBLFVBQVluSCxDQUFaO0FBQUEsVUFBY2IsQ0FBQyxHQUFDO0FBQUNqQixTQUFDLEVBQUMsU0FBSDtBQUFhZ0osU0FBQyxFQUFDLFdBQWY7QUFBMkJrQyxTQUFDLEVBQUMsVUFBN0I7QUFBd0NsRyxTQUFDLEVBQUM7QUFBMUMsT0FBaEI7QUFBQSxVQUFzRW9GLENBQUMsR0FBQztBQUFDd0UsaUJBQVMsRUFBQyxLQUFYO0FBQWlCbEUsYUFBSyxFQUFDLEtBQXZCO0FBQTZCbUUsZ0JBQVEsRUFBQztBQUF0QyxPQUF4RTs7QUFBcUgsVUFBR2xQLENBQUMsSUFBSXlLLENBQUwsS0FBU3pLLENBQUMsR0FBQ3lLLENBQUMsQ0FBQ3pLLENBQUQsQ0FBWixHQUFpQiwyQ0FBMkNvQixJQUEzQyxDQUFnRHBCLENBQWhELENBQXBCLEVBQXVFO0FBQUMsYUFBSXVCLENBQUMsR0FBQ3ZCLENBQUMsQ0FBQzdFLEtBQUYsQ0FBUSxzQkFBUixDQUFGLEVBQWtDNkUsQ0FBQyxHQUFDLElBQUlDLElBQUosRUFBcEMsRUFBNkNxSixDQUFDLEdBQUMsQ0FBbkQsRUFBcURBLENBQUMsR0FBQy9ILENBQUMsQ0FBQ3BWLE1BQXpELEVBQWdFbWQsQ0FBQyxFQUFqRTtBQUFvRTlELFdBQUMsR0FBQ2pFLENBQUMsQ0FBQytILENBQUQsQ0FBRCxDQUFLbk8sS0FBTCxDQUFXLHFCQUFYLENBQUYsRUFBb0NrTyxDQUFDLEdBQUMxUCxNQUFNLENBQUM2TCxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQTVDLEVBQW1EckQsQ0FBQyxHQUFDYixDQUFDLENBQUNrRSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUt0RSxXQUFMLEVBQUQsQ0FBdEQsRUFBMkVsQixDQUFDLEdBQUMrQixDQUFDLENBQUNyRyxTQUFGLENBQVl5RyxDQUFaLEVBQWVuQyxDQUFmLEVBQWlCcUosQ0FBakIsQ0FBN0U7QUFBcEU7O0FBQXFLLGVBQU90SCxDQUFDLENBQUNyRyxTQUFGLENBQVlxTSxjQUFaLENBQTJCL0gsQ0FBM0IsQ0FBUDtBQUFxQzs7QUFBQXVCLE9BQUMsR0FBQ3ZCLENBQUMsSUFBRUEsQ0FBQyxDQUFDN0UsS0FBRixDQUFRLEtBQUt5VCxjQUFiLENBQUgsSUFBaUMsRUFBbkM7QUFBc0MsVUFBSWxFLENBQUo7QUFBQSxVQUFNVyxDQUFOO0FBQUEsVUFBUUMsQ0FBQyxHQUFDLEVBQVY7QUFBQSxVQUFhQyxDQUFDLEdBQUMsQ0FBQyxNQUFELEVBQVEsSUFBUixFQUFhLEdBQWIsRUFBaUIsSUFBakIsRUFBc0IsR0FBdEIsRUFBMEIsSUFBMUIsRUFBK0IsR0FBL0IsRUFBbUMsSUFBbkMsQ0FBZjtBQUFBLFVBQXdEbFMsQ0FBQyxHQUFDO0FBQUM4VixZQUFJLEVBQUMsY0FBU3RQLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUMsaUJBQU9GLENBQUMsQ0FBQ3VMLGNBQUYsQ0FBaUJ0SyxDQUFDLEdBQUNHLENBQUMsQ0FBQ2xCLENBQUQsRUFBR2UsQ0FBSCxDQUFGLEdBQVFmLENBQTFCLENBQVA7QUFBb0MsU0FBeEQ7QUFBeURzSixTQUFDLEVBQUMsV0FBU3hKLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUMsY0FBR2dCLEtBQUssQ0FBQ2xCLENBQUQsQ0FBUixFQUFZLE9BQU9BLENBQVA7O0FBQVMsZUFBSUUsQ0FBQyxJQUFFLENBQVAsRUFBU0EsQ0FBQyxHQUFDLENBQVg7QUFBY0EsYUFBQyxJQUFFLEVBQUg7QUFBZDs7QUFBb0IsZUFBSUEsQ0FBQyxJQUFFLEVBQUgsRUFBTUYsQ0FBQyxDQUFDOE0sV0FBRixDQUFjNU0sQ0FBZCxDQUFWLEVBQTJCRixDQUFDLENBQUNhLFdBQUYsT0FBa0JYLENBQTdDO0FBQWdERixhQUFDLENBQUN5SSxVQUFGLENBQWF6SSxDQUFDLENBQUNjLFVBQUYsS0FBZSxDQUE1QjtBQUFoRDs7QUFBK0UsaUJBQU9kLENBQVA7QUFBUyxTQUExTTtBQUEyTVEsU0FBQyxFQUFDLFdBQVNSLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUMsaUJBQU9GLENBQUMsQ0FBQ3lJLFVBQUYsQ0FBYXZJLENBQWIsQ0FBUDtBQUF1QjtBQUFsUCxPQUExRDtBQUE4UzFHLE9BQUMsQ0FBQytWLEVBQUYsR0FBSy9WLENBQUMsQ0FBQzhWLElBQVAsRUFBWTlWLENBQUMsQ0FBQ2dXLENBQUYsR0FBSWhXLENBQUMsQ0FBQ2lXLEVBQUYsR0FBS2pXLENBQUMsQ0FBQ2tXLEVBQUYsR0FBS2xXLENBQUMsQ0FBQ2dRLENBQTVCLEVBQThCaFEsQ0FBQyxDQUFDbVcsRUFBRixHQUFLblcsQ0FBQyxDQUFDZ0gsQ0FBckMsRUFBdUNMLENBQUMsR0FBQ0ssQ0FBQyxFQUExQztBQUE2QyxVQUFJZ0YsQ0FBQyxHQUFDOVosQ0FBQyxDQUFDeWpCLEtBQUYsQ0FBUXhOLEtBQVIsRUFBTjs7QUFBc0IsVUFBR0QsQ0FBQyxDQUFDcFYsTUFBRixLQUFXa1osQ0FBQyxDQUFDbFosTUFBYixLQUFzQmtaLENBQUMsR0FBQ3hGLENBQUMsQ0FBQ3dGLENBQUQsQ0FBRCxDQUFLaEwsTUFBTCxDQUFZLFVBQVMwRixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGVBQU9ILENBQUMsQ0FBQ3FFLE9BQUYsQ0FBVWxFLENBQVYsRUFBWXVMLENBQVosTUFBaUIsQ0FBQyxDQUF6QjtBQUEyQixPQUFyRCxFQUF1RDZDLE9BQXZELEVBQXhCLEdBQTBGN00sQ0FBQyxDQUFDcFYsTUFBRixLQUFXa1osQ0FBQyxDQUFDbFosTUFBMUcsRUFBaUg7QUFBQyxZQUFJcWYsQ0FBSjs7QUFBTSxhQUFJbEMsQ0FBQyxHQUFDLENBQUYsRUFBSWtDLENBQUMsR0FBQ25HLENBQUMsQ0FBQ2xaLE1BQVosRUFBbUJtZCxDQUFDLEdBQUNrQyxDQUFyQixFQUF1QmxDLENBQUMsRUFBeEIsRUFBMkI7QUFBQyxjQUFHb0IsQ0FBQyxHQUFDbEIsUUFBUSxDQUFDakksQ0FBQyxDQUFDK0gsQ0FBRCxDQUFGLEVBQU0sRUFBTixDQUFWLEVBQW9COUQsQ0FBQyxHQUFDSCxDQUFDLENBQUNpRSxDQUFELENBQXZCLEVBQTJCdkksS0FBSyxDQUFDMkosQ0FBRCxDQUFuQyxFQUF1QyxRQUFPbEYsQ0FBUDtBQUFVLGlCQUFJLElBQUo7QUFBUzZGLGVBQUMsR0FBQ3hMLENBQUMsQ0FBQ3dCLENBQUMsQ0FBQ1QsQ0FBRCxDQUFELENBQUs4TixNQUFOLENBQUQsQ0FBZXJVLE1BQWYsQ0FBc0JuTyxDQUF0QixDQUFGLEVBQTJCd2UsQ0FBQyxHQUFDN0ssQ0FBQyxDQUFDcUUsT0FBRixDQUFVbUgsQ0FBQyxDQUFDLENBQUQsQ0FBWCxFQUFlaEssQ0FBQyxDQUFDVCxDQUFELENBQUQsQ0FBSzhOLE1BQXBCLElBQTRCLENBQXpEO0FBQTJEOztBQUFNLGlCQUFJLEdBQUo7QUFBUXJELGVBQUMsR0FBQ3hMLENBQUMsQ0FBQ3dCLENBQUMsQ0FBQ1QsQ0FBRCxDQUFELENBQUtvSixXQUFOLENBQUQsQ0FBb0IzUCxNQUFwQixDQUEyQm5PLENBQTNCLENBQUYsRUFBZ0N3ZSxDQUFDLEdBQUM3SyxDQUFDLENBQUNxRSxPQUFGLENBQVVtSCxDQUFDLENBQUMsQ0FBRCxDQUFYLEVBQWVoSyxDQUFDLENBQUNULENBQUQsQ0FBRCxDQUFLb0osV0FBcEIsSUFBaUMsQ0FBbkU7QUFBNUY7QUFBaUtzQixXQUFDLENBQUM5RixDQUFELENBQUQsR0FBS2tGLENBQUw7QUFBTzs7QUFBQSxZQUFJZSxDQUFKLEVBQU1DLENBQU47O0FBQVEsYUFBSXBDLENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsR0FBQ2lDLENBQUMsQ0FBQ3BmLE1BQVosRUFBbUJtZCxDQUFDLEVBQXBCO0FBQXVCb0MsV0FBQyxHQUFDSCxDQUFDLENBQUNqQyxDQUFELENBQUgsRUFBT29DLENBQUMsSUFBSUosQ0FBTCxJQUFRLENBQUN2SyxLQUFLLENBQUN1SyxDQUFDLENBQUNJLENBQUQsQ0FBRixDQUFkLEtBQXVCRCxDQUFDLEdBQUMsSUFBSXhMLElBQUosQ0FBU0QsQ0FBVCxDQUFGLEVBQWMzRyxDQUFDLENBQUNxUyxDQUFELENBQUQsQ0FBS0QsQ0FBTCxFQUFPSCxDQUFDLENBQUNJLENBQUQsQ0FBUixDQUFkLEVBQTJCM0ssS0FBSyxDQUFDMEssQ0FBRCxDQUFMLEtBQVd6TCxDQUFDLEdBQUN5TCxDQUFiLENBQWxELENBQVA7QUFBdkI7QUFBaUc7O0FBQUEsYUFBT3pMLENBQVA7QUFBUyxLQUExMEU7QUFBMjBFaUgsY0FBVSxFQUFDLG9CQUFTbEgsQ0FBVCxFQUFXQyxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDLFVBQUcsQ0FBQ04sQ0FBSixFQUFNLE9BQU0sRUFBTjtBQUFTLFVBQUcsWUFBVSxPQUFPQyxDQUFqQixLQUFxQkEsQ0FBQyxHQUFDMkMsQ0FBQyxDQUFDa0MsV0FBRixDQUFjN0UsQ0FBZCxDQUF2QixHQUF5Q0EsQ0FBQyxDQUFDOE8sU0FBOUMsRUFBd0QsT0FBTzlPLENBQUMsQ0FBQzhPLFNBQUYsQ0FBWS9PLENBQVosRUFBY0MsQ0FBZCxFQUFnQkssQ0FBaEIsQ0FBUDtBQUEwQixVQUFJOVUsQ0FBQyxHQUFDO0FBQUM4VSxTQUFDLEVBQUNOLENBQUMsQ0FBQ1ksVUFBRixFQUFIO0FBQWtCc0wsU0FBQyxFQUFDNUssQ0FBQyxDQUFDaEIsQ0FBRCxDQUFELENBQUtvTyxTQUFMLENBQWUxTyxDQUFDLENBQUN1SyxTQUFGLEVBQWYsQ0FBcEI7QUFBa0RtRixVQUFFLEVBQUNwTyxDQUFDLENBQUNoQixDQUFELENBQUQsQ0FBS21PLElBQUwsQ0FBVXpPLENBQUMsQ0FBQ3VLLFNBQUYsRUFBVixDQUFyRDtBQUE4RWpCLFNBQUMsRUFBQ3RKLENBQUMsQ0FBQ1csV0FBRixLQUFnQixDQUFoRztBQUFrRzJPLFNBQUMsRUFBQ2hPLENBQUMsQ0FBQ2hCLENBQUQsQ0FBRCxDQUFLMkosV0FBTCxDQUFpQmpLLENBQUMsQ0FBQ1csV0FBRixFQUFqQixDQUFwRztBQUFzSTRPLFVBQUUsRUFBQ2pPLENBQUMsQ0FBQ2hCLENBQUQsQ0FBRCxDQUFLcU8sTUFBTCxDQUFZM08sQ0FBQyxDQUFDVyxXQUFGLEVBQVosQ0FBekk7QUFBc0swTyxVQUFFLEVBQUNyUCxDQUFDLENBQUNVLGNBQUYsR0FBbUJ2TixRQUFuQixHQUE4QlMsU0FBOUIsQ0FBd0MsQ0FBeEMsQ0FBeks7QUFBb053YixZQUFJLEVBQUNwUCxDQUFDLENBQUNVLGNBQUY7QUFBek4sT0FBTjtBQUFtUGxWLE9BQUMsQ0FBQ2lrQixFQUFGLEdBQUssQ0FBQ2prQixDQUFDLENBQUM4VSxDQUFGLEdBQUksRUFBSixHQUFPLEdBQVAsR0FBVyxFQUFaLElBQWdCOVUsQ0FBQyxDQUFDOFUsQ0FBdkIsRUFBeUI5VSxDQUFDLENBQUNna0IsRUFBRixHQUFLLENBQUNoa0IsQ0FBQyxDQUFDOGQsQ0FBRixHQUFJLEVBQUosR0FBTyxHQUFQLEdBQVcsRUFBWixJQUFnQjlkLENBQUMsQ0FBQzhkLENBQWhELEVBQWtEdEosQ0FBQyxHQUFDLEVBQXBEOztBQUF1RCxXQUFJLElBQUlhLENBQUMsR0FBQ2YsQ0FBQyxDQUFDdk0sTUFBRixDQUFTLEVBQVQsRUFBWTBNLENBQUMsQ0FBQytPLFVBQWQsQ0FBTixFQUFnQ2pPLENBQUMsR0FBQyxDQUFsQyxFQUFvQ0csQ0FBQyxHQUFDakIsQ0FBQyxDQUFDZ1AsS0FBRixDQUFRN2lCLE1BQWxELEVBQXlEMlUsQ0FBQyxJQUFFRyxDQUE1RCxFQUE4REgsQ0FBQyxFQUEvRDtBQUFrRUYsU0FBQyxDQUFDelUsTUFBRixJQUFVNFQsQ0FBQyxDQUFDM1QsSUFBRixDQUFPd1UsQ0FBQyxDQUFDdU4sS0FBRixFQUFQLENBQVYsRUFBNEJwTyxDQUFDLENBQUMzVCxJQUFGLENBQU9iLENBQUMsQ0FBQ3lVLENBQUMsQ0FBQ2dQLEtBQUYsQ0FBUWxPLENBQVIsQ0FBRCxDQUFSLENBQTVCO0FBQWxFOztBQUFvSCxhQUFPZixDQUFDLENBQUN6VCxJQUFGLENBQU8sRUFBUCxDQUFQO0FBQWtCLEtBQXYzRjtBQUF3M0ZvakIsZ0JBQVksRUFBQyx3RkFBc0Z2TixDQUFDLENBQUNVLFNBQUYsQ0FBWUMsU0FBbEcsR0FBNEcsdUVBQTVHLEdBQW9MWCxDQUFDLENBQUNVLFNBQUYsQ0FBWUUsVUFBaE0sR0FBMk0sb0JBQWhsRztBQUMvdTRCNE0sZ0JBQVksRUFBQywrQ0FEa3U0QjtBQUNscjRCQyxnQkFBWSxFQUFDO0FBRHFxNEIsR0FBcmQ7QUFDcm0zQmpOLEdBQUMsQ0FBQ3RVLFFBQUYsR0FBVyx5RkFBdUZzVSxDQUFDLENBQUMrTSxZQUF6RixHQUFzRyxpQkFBdEcsR0FBd0gvTSxDQUFDLENBQUNpTixZQUExSCxHQUF1SSw4RUFBdkksR0FBc05qTixDQUFDLENBQUMrTSxZQUF4TixHQUFxTy9NLENBQUMsQ0FBQ2dOLFlBQXZPLEdBQW9QaE4sQ0FBQyxDQUFDaU4sWUFBdFAsR0FBbVEsNkVBQW5RLEdBQWlWak4sQ0FBQyxDQUFDK00sWUFBblYsR0FBZ1cvTSxDQUFDLENBQUNnTixZQUFsVyxHQUErV2hOLENBQUMsQ0FBQ2lOLFlBQWpYLEdBQThYLCtFQUE5WCxHQUE4Y2pOLENBQUMsQ0FBQytNLFlBQWhkLEdBQTZkL00sQ0FBQyxDQUFDZ04sWUFBL2QsR0FBNGVoTixDQUFDLENBQUNpTixZQUE5ZSxHQUEyZixpRkFBM2YsR0FBNmtCak4sQ0FBQyxDQUFDK00sWUFBL2tCLEdBQTRsQi9NLENBQUMsQ0FBQ2dOLFlBQTlsQixHQUEybUJoTixDQUFDLENBQUNpTixZQUE3bUIsR0FBMG5CLHNCQUFyb0IsRUFBNHBCL1AsQ0FBQyxDQUFDN0csRUFBRixDQUFLcEssVUFBTCxDQUFnQmloQixRQUFoQixHQUF5QmxOLENBQXJyQixFQUF1ckI5QyxDQUFDLENBQUM3RyxFQUFGLENBQUtwSyxVQUFMLENBQWdCK1EsVUFBaEIsR0FBMkIsWUFBVTtBQUFDLFdBQU9FLENBQUMsQ0FBQzdHLEVBQUYsQ0FBS3BLLFVBQUwsR0FBZ0J5YSxDQUFoQixFQUFrQixJQUF6QjtBQUE4QixHQUEzdkIsRUFBNHZCeEosQ0FBQyxDQUFDN0csRUFBRixDQUFLcEssVUFBTCxDQUFnQmtoQixPQUFoQixHQUF3QixPQUFweEIsRUFBNHhCalEsQ0FBQyxDQUFDN0csRUFBRixDQUFLcEssVUFBTCxDQUFnQmlTLFVBQWhCLEdBQTJCLFVBQVNoQixDQUFULEVBQVc7QUFBQyxRQUFJRSxDQUFDLEdBQUNoQixNQUFNLENBQUNqSCxPQUFiO0FBQXFCaUksS0FBQyxJQUFFQSxDQUFDLENBQUNnUSxJQUFMLElBQVdoUSxDQUFDLENBQUNnUSxJQUFGLENBQU8saUJBQWVsUSxDQUF0QixDQUFYO0FBQW9DLEdBQTUzQixFQUE2M0JBLENBQUMsQ0FBQ2hVLFFBQUQsQ0FBRCxDQUFZUCxFQUFaLENBQWUscURBQWYsRUFBcUUsNkJBQXJFLEVBQW1HLFVBQVN5VSxDQUFULEVBQVc7QUFBQyxRQUFJQyxDQUFDLEdBQUNILENBQUMsQ0FBQyxJQUFELENBQVA7QUFBY0csS0FBQyxDQUFDL1IsSUFBRixDQUFPLFlBQVAsTUFBdUI4UixDQUFDLENBQUNqVCxjQUFGLElBQW1Cd2MsQ0FBQyxDQUFDMVYsSUFBRixDQUFPb00sQ0FBUCxFQUFTLE1BQVQsQ0FBMUM7QUFBNEQsR0FBekwsQ0FBNzNCLEVBQXdqQ0gsQ0FBQyxDQUFDLFlBQVU7QUFBQ3lKLEtBQUMsQ0FBQzFWLElBQUYsQ0FBT2lNLENBQUMsQ0FBQyxvQ0FBRCxDQUFSO0FBQWdELEdBQTVELENBQXpqQztBQUF1bkMsQ0FEM3lDLENBQUQsQzs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsQ0FBQyxVQUFTQSxDQUFULEVBQVc7QUFBQ0EsR0FBQyxDQUFDN0csRUFBRixDQUFLcEssVUFBTCxDQUFnQnFULEtBQWhCLENBQXNCK04sRUFBdEIsR0FBeUI7QUFBQ3hCLFFBQUksRUFBQyxDQUFDLFVBQUQsRUFBWSxPQUFaLEVBQW9CLE9BQXBCLEVBQTRCLFVBQTVCLEVBQXVDLE9BQXZDLEVBQStDLFVBQS9DLEVBQTBELFFBQTFELENBQU47QUFBMEVDLGFBQVMsRUFBQyxDQUFDLE1BQUQsRUFBUSxNQUFSLEVBQWUsTUFBZixFQUFzQixNQUF0QixFQUE2QixNQUE3QixFQUFvQyxNQUFwQyxFQUEyQyxNQUEzQyxDQUFwRjtBQUF1STFFLFdBQU8sRUFBQyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsSUFBVCxFQUFjLElBQWQsRUFBbUIsR0FBbkIsRUFBdUIsR0FBdkIsRUFBMkIsR0FBM0IsQ0FBL0k7QUFBK0syRSxVQUFNLEVBQUMsQ0FBQyxTQUFELEVBQVcsU0FBWCxFQUFxQixNQUFyQixFQUE0QixPQUE1QixFQUFvQyxLQUFwQyxFQUEwQyxNQUExQyxFQUFpRCxTQUFqRCxFQUEyRCxNQUEzRCxFQUFrRSxXQUFsRSxFQUE4RSxTQUE5RSxFQUF3RixVQUF4RixFQUFtRyxVQUFuRyxDQUF0TDtBQUFxUzFFLGVBQVcsRUFBQyxDQUFDLE9BQUQsRUFBUyxPQUFULEVBQWlCLE1BQWpCLEVBQXdCLE9BQXhCLEVBQWdDLEtBQWhDLEVBQXNDLE1BQXRDLEVBQTZDLE9BQTdDLEVBQXFELE1BQXJELEVBQTRELE9BQTVELEVBQW9FLE1BQXBFLEVBQTJFLE1BQTNFLEVBQWtGLE1BQWxGLENBQWpUO0FBQTJZZSxTQUFLLEVBQUMsYUFBalo7QUFBK1ppQixlQUFXLEVBQUMsTUFBM2E7QUFBa2JuSyxTQUFLLEVBQUMsU0FBeGI7QUFBa2M4QyxhQUFTLEVBQUMsQ0FBNWM7QUFBOGNHLFVBQU0sRUFBQztBQUFyZCxHQUF6QjtBQUE0ZixDQUF4Z0IsQ0FBeWdCM1EsTUFBemdCLENBQUQsQyIsImZpbGUiOiJhZ2VuZGF+YXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL2FwcC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDEyLzEwLzIwMjAgMTc6MTZcblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9zY3NzL2ZvbnRhd2Vzb21lLnNjc3MnXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3Njc3Mvc29saWQuc2NzcydcbmltcG9ydCAnYm9vdHN0cmFwLXNlbGVjdC9kaXN0L2Nzcy9ib290c3RyYXAtc2VsZWN0Lm1pbi5jc3MnXG5pbXBvcnQgJy4uL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9jc3MvYm9vdHN0cmFwLWRhdGVwaWNrZXIzLm1pbi5jc3MnXG5pbXBvcnQgJy4uL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9qcy9ib290c3RyYXAtZGF0ZXBpY2tlci5taW4uanMnXG5pbXBvcnQgJy4uL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9sb2NhbGVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmZyLm1pbidcblxuaW1wb3J0ICcuLi9jc3MvYXBwLnNjc3MnXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3BlcmZlY3Qtc2Nyb2xsYmFyJ1xuaW1wb3J0ICcuL3ZhbGlkYXRvci1iczQnXG5pbXBvcnQge2dldERhdGFPcHRpb25zfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgJy4vbWF0ZXJpYWwnXG5pbXBvcnQgJy4vc2VhcmNoJ1xuaW1wb3J0ICcuL21vZGFsZXInXG5cbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpXG5cbmxldCBsb29rdXAgPSB7fVxuXG5yZXF1aXJlKCdib290c3RyYXAtc2VsZWN0JylcblxuJCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgbGV0IGZpbGVuYW1lID0gZS50YXJnZXQuZmlsZXNbMF0ubmFtZVxuICAkKCcuY3VzdG9tLWZpbGUtbGFiZWwnKS5odG1sKGZpbGVuYW1lKVxufSlcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAvLyBjb3B5IGxpbmsgRURUXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjY29weUxpbmsnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnI2xpZW5JY2FsJykuc2VsZWN0KClcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXG4gIH0pXG5cbiAgLy8gc2NyaXB0IHBvdXIgYWZmaWNoZXIgbGUgZmljaGllciBzZWxlY3Rpb25uw6kgYXZlYyBib290c3RyYXA0XG4gICQoJy5jdXN0b20tZmlsZSBpbnB1dCcpLmNoYW5nZShmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IGZpbGVzID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICQodGhpcylbMF0uZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZpbGVzLnB1c2goJCh0aGlzKVswXS5maWxlc1tpXS5uYW1lKVxuICAgIH1cbiAgICAkKHRoaXMpLm5leHQoJy5jdXN0b20tZmlsZS1sYWJlbCcpLmh0bWwoZmlsZXMuam9pbignLCAnKSlcbiAgfSlcblxuICB2YXIgcHJlbG9hZGVyID0gJCgnLnByZWxvYWRlcicpXG4gIGlmIChwcmVsb2FkZXIubGVuZ3RoKSB7XG4gICAgdmFyIHNwZWVkID0gcHJlbG9hZGVyLmRhdGFBdHRyKCdoaWRlLXNwcGVkJywgNjAwKVxuICAgIHByZWxvYWRlci5mYWRlT3V0KHNwZWVkKVxuICB9XG5cbiAgJChkb2N1bWVudCkub24oJ2ZvY3VzJywgJy50b3BiYXItc2VhcmNoIGlucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnLnRvcGJhci1zZWFyY2gnKS5maW5kKCcubG9va3VwLXBsYWNlaG9sZGVyIHNwYW4nKS5jc3MoJ29wYWNpdHknLCAnMCcpXG4gIH0pXG5cbiAgJChkb2N1bWVudCkub24oJ2JsdXInLCAnLnRvcGJhci1zZWFyY2ggaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCcudG9wYmFyLXNlYXJjaCcpLmZpbmQoJy5sb29rdXAtcGxhY2Vob2xkZXIgc3BhbicpLmNzcygnb3BhY2l0eScsICcxJylcbiAgfSlcblxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2xvb2t1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdmFyIHRhcmdldCA9ICQoJyNsb29rdXAtZnVsbCcpXG5cbiAgICBpZiAodGFyZ2V0ICE9PSBmYWxzZSkge1xuICAgICAgbG9va3VwLnRvZ2dsZSh0YXJnZXQpXG4gICAgfVxuICB9KVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbG9va3VwLWNsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIGxvb2t1cC50b2dnbGUoJCgnI2xvb2t1cC1mdWxsJykpXG4gIH0pXG5cbiAgLy90b29sdGlwXG4gIHVwZGF0ZUludGVyZmFjZSgpXG5cbiAgJCgnW2RhdGEtcHJvdmlkZT1cInZhbGlkYXRpb25cIl0nKS52YWxpZGF0b3IoKVxufSlcblxuJChkb2N1bWVudCkuYWpheENvbXBsZXRlKGZ1bmN0aW9uICgpIHtcbiAgdXBkYXRlSW50ZXJmYWNlKClcbn0pXG5cbi8vIEZ1bGxzY3JlZW5cbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNhcmQtYnRuLWZ1bGxzY3JlZW4nLCBmdW5jdGlvbiAoKSB7XG4gICQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS50b2dnbGVDbGFzcygnY2FyZC1mdWxsc2NyZWVuJykucmVtb3ZlQ2xhc3MoJ2NhcmQtbWF4aW1pemUnKVxufSlcblxuLy8gU2xpZGUgdXAvZG93blxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jYXJkLWJ0bi1zbGlkZScsIGZ1bmN0aW9uICgpIHtcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygncm90YXRlLTE4MCcpLmNsb3Nlc3QoJy5jYXJkJykuZmluZCgnLmNhcmQtY29udGVudCcpLnNsaWRlVG9nZ2xlKClcbn0pXG5cbi8vbW9kYWxlclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXByb3ZpZGV+PVwibW9kYWxlclwiXScsIGZ1bmN0aW9uICgpIHtcbiAgbW9kYWxlcihnZXREYXRhT3B0aW9ucygkKHRoaXMpKSlcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZUludGVyZmFjZSAoKSB7XG4gIC8vc2VsZWN0cGlja2VyXG4gICQoJy5zZWxlY3RwaWNrZXInKS5zZWxlY3RwaWNrZXIoe1xuICAgIGljb25CYXNlOiAnJyxcbiAgICB0aWNrSWNvbjogJ2ZhcyBmYS1jaGVjaycsXG4gICAgc3R5bGU6ICdidG4tbGlnaHQnLFxuICAgIHNpemU6IDEwLFxuICAgIGxpdmVTZWFyY2g6IHRydWVcbiAgfSlcblxuICAvL3Rvb2x0aXBcbiAgJCgnW2RhdGEtcHJvdmlkZX49XCJ0b29sdGlwXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yID0gJydcblxuICAgIGlmICgkKHRoaXMpLmhhc0RhdGFBdHRyKCd0b29sdGlwLWNvbG9yJykpIHtcbiAgICAgIGNvbG9yID0gJyB0b29sdGlwLScgKyAkKHRoaXMpLmRhdGEoJ3Rvb2x0aXAtY29sb3InKVxuICAgIH1cblxuICAgICQodGhpcykudG9vbHRpcCh7XG4gICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwJyArIGNvbG9yICsgJ1wiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nXG4gICAgfSlcbiAgfSlcblxuICAkKCdbZGF0YS1wcm92aWRlfj1cImRhdGVwaWNrZXJcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIG11bHRpZGF0ZVNlcGFyYXRvcjogJywgJyxcbiAgICAgIGxhbmd1YWdlOiAnZnInLFxuICAgICAgZGF5c09mV2Vla0hpZ2hsaWdodGVkOiAnMDYnXG4gICAgfVxuXG4gICAgaWYgKCQodGhpcykucHJvcCgndGFnTmFtZScpICE9ICdJTlBVVCcpIHtcbiAgICAgIC8vc2kgY2Ugbidlc3QgcGFzIHVuIGlucHV0ID0+IGRvbmMgdW4gZGF0ZSByYW5nZVxuICAgICAgb3B0aW9ucy5pbnB1dHMgPSBbJCh0aGlzKS5maW5kKCdpbnB1dDpmaXJzdCcpLCAkKHRoaXMpLmZpbmQoJ2lucHV0Omxhc3QnKV1cbiAgICB9XG4gICAgJCh0aGlzKS5kYXRlcGlja2VyKG9wdGlvbnMpXG4gIH0pXG5cbn1cblxuLy8gT3BlbiBmdWxsc2NyZWVuIGxvb2t1cFxuLy9cbmxvb2t1cC50b2dnbGUgPSBmdW5jdGlvbiAoZSkge1xuICBpZiAoJChlKS5oYXNDbGFzcygncmV2ZWFsJykpIHtcbiAgICBsb29rdXAuY2xvc2UoZSlcbiAgfSBlbHNlIHtcbiAgICBsb29rdXAub3BlbihlKVxuICB9XG59XG5cbi8vIENsb3NlIGZ1bGxzY3JlZW4gbG9va3VwXG4vL1xubG9va3VwLmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgJChlKS5yZW1vdmVDbGFzcygncmV2ZWFsJylcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKVxufVxuXG5cbi8vIENsb3NlIGZ1bGxzY3JlZW4gbG9va3VwXG4vL1xubG9va3VwLm9wZW4gPSBmdW5jdGlvbiAoZSkge1xuICAkKGUpLmFkZENsYXNzKCdyZXZlYWwnKVxuICAkKGUpLmZpbmQoJy5sb29rdXAtZm9ybSBpbnB1dCcpLmZvY3VzKClcbiAgJCgnYm9keScpLmFkZENsYXNzKCduby1zY3JvbGwnKVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cbi8vIFNpZGViYXJcbi8vID09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgc2lkZWJhciA9IHt9XG5cbi8vIFNjcm9sbGFibGVcbi8vXG5jb25zdCBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuc2lkZWJhci1uYXZpZ2F0aW9uJylcblxuLy8gSGFuZGxlIHNpZGViYXIgb3Blbm5lclxuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2lkZWJhci10b2dnbGVyJywgZnVuY3Rpb24gKCkge1xuICBzaWRlYmFyLm9wZW4oKVxufSlcblxuXG4vLyBDbG9zZSBzaWRlYmFyIHdoZW4gYmFja2Ryb3AgdG91Y2hlc1xuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYmFja2Ryb3Atc2lkZWJhcicsIGZ1bmN0aW9uICgpIHtcbiAgc2lkZWJhci5jbG9zZSgpXG59KVxuXG5cbi8vIFNsaWRlIHVwL2Rvd24gbWVudSBpdGVtIG9uIGNsaWNrXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zaWRlYmFyIC5tZW51LWxpbmsnLCBmdW5jdGlvbiAoKSB7XG4gIHZhciAkc3VibWVudSA9ICQodGhpcykubmV4dCgnLm1lbnUtc3VibWVudScpXG4gIGlmICgkc3VibWVudS5sZW5ndGggPCAxKVxuICAgIHJldHVyblxuXG4gIGlmICgkc3VibWVudS5pcygnOnZpc2libGUnKSkge1xuICAgICRzdWJtZW51LnNsaWRlVXAoZnVuY3Rpb24gKCkge1xuICAgICAgJCgnLnNpZGViYXIgLm1lbnUtaXRlbS5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgIH0pXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgcmV0dXJuXG4gIH1cblxuICAkKCcuc2lkZWJhciAubWVudS1zdWJtZW51OnZpc2libGUnKS5zbGlkZVVwKClcbiAgJCgnLnNpZGViYXIgLm1lbnUtbGluaycpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgJHN1Ym1lbnUuc2xpZGVUb2dnbGUoZnVuY3Rpb24gKCkge1xuICAgICQoJy5zaWRlYmFyIC5tZW51LWl0ZW0ub3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgfSlcbiAgJCh0aGlzKS5hZGRDbGFzcygnb3BlbicpXG59KVxuXG4vLyBIYW5kbGUgZm9sZCB0b2dnbGVyXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zaWRlYmFyLXRvZ2dsZS1mb2xkJywgZnVuY3Rpb24gKCkge1xuICBzaWRlYmFyLnRvZ2dsZUZvbGQoKVxufSlcblxuLy99XG5cblxuc2lkZWJhci50b2dnbGVGb2xkID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3NpZGViYXItZm9sZGVkJylcbiAgYXBwLnRvZ2dsZVN0YXRlKCdzaWRlYmFyLmZvbGRlZCcpXG59XG5cbnNpZGViYXIuZm9sZCA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLmFkZENsYXNzKCdzaWRlYmFyLWZvbGRlZCcpXG4gIGFwcC5zdGF0ZSgnc2lkZWJhci5mb2xkZWQnLCB0cnVlKVxufVxuXG5cbnNpZGViYXIudW5mb2xkID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3NpZGViYXItZm9sZGVkJylcbiAgYXBwLnN0YXRlKCdzaWRlYmFyLmZvbGRlZCcsIGZhbHNlKVxufVxuXG5cbnNpZGViYXIudG9nZ2xlSGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzaWRlYmFyLWhpZGRlbicpXG4gIGFwcC50b2dnbGVTdGF0ZSgnc2lkZWJhci5oaWRkZW4nKVxufVxuXG5zaWRlYmFyLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1oaWRkZW4nKVxuICBhcHAuc3RhdGUoJ3NpZGViYXIuaGlkZGVuJywgdHJ1ZSlcbn1cblxuc2lkZWJhci5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3NpZGViYXItaGlkZGVuJylcbiAgYXBwLnN0YXRlKCdzaWRlYmFyLmhpZGRlbicsIGZhbHNlKVxufVxuXG5cbnNpZGViYXIub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLmFkZENsYXNzKCdzaWRlYmFyLW9wZW4nKS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwiYXBwLWJhY2tkcm9wIGJhY2tkcm9wLXNpZGViYXJcIj48L2Rpdj4nKVxufVxuXG5zaWRlYmFyLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3NpZGViYXItb3BlbicpXG4gICQoJy5iYWNrZHJvcC1zaWRlYmFyJykucmVtb3ZlKClcbn1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cbi8vIFF1aWNrdmlld1xuLy8gPT09PT09PT09PT09PT09PT09PT09XG4vL1xuXG5sZXQgcXVpY2t2aWV3ID0ge31cbmxldCBxcHMgPSBudWxsXG5cbi8vIFVwZGF0ZSBzY3JvbGxiYXIgb24gdGFiIGNoYW5nZVxuLy9cbiQoZG9jdW1lbnQpLm9uKCdzaG93bi5icy50YWInLCAnLnF1aWNrdmlldy1oZWFkZXIgYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScsIGZ1bmN0aW9uIChlKSB7XG4gIHFwcy51cGRhdGUoKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVsb2FkUXYoKVxue1xuICBxcHMuZGVzdHJveSgpXG4gIHFwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcucXVpY2t2aWV3Jylcbn1cblxuLy8gUXVpY2t2aWV3IGNsb3NlclxuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1kaXNtaXNzPVwicXVpY2t2aWV3XCJdJywgZnVuY3Rpb24gKCkge1xuICBxdWlja3ZpZXcuY2xvc2UoJCh0aGlzKS5jbG9zZXN0KCcucXVpY2t2aWV3JykpXG59KVxuXG5cbi8vIEhhbmRsZSBxdWlja3ZpZXcgb3Blbm5lclxuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS10b2dnbGU9XCJxdWlja3ZpZXdcIl0nLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbGV0IHRhcmdldCA9IGFwcC5nZXRUYXJnZXQoJCh0aGlzKSlcblxuICBpZiAodGFyZ2V0ID09IGZhbHNlKSB7XG4gICAgcXVpY2t2aWV3LmNsb3NlKCQodGhpcykuY2xvc2VzdCgnLnF1aWNrdmlldycpKVxuICB9IGVsc2Uge1xuICAgIGxldCB1cmwgPSAnJ1xuICAgIGlmICgkKHRoaXMpLmhhc0RhdGFBdHRyKCd1cmwnKSkge1xuICAgICAgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKVxuICAgIH1cbiAgICBxdWlja3ZpZXcudG9nZ2xlKHRhcmdldCwgdXJsKVxuICB9XG59KVxuXG5cbi8vIENsb3NlIHF1aWNrdmlldyB3aGVuIGJhY2tkcm9wIHRvdWNoZXNcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJhY2tkcm9wLXF1aWNrdmlldycsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IHF2ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRhcmdldCcpXG4gIGlmICghJChxdikuaXMoJ1tkYXRhLWRpc2FibGUtYmFja2Ryb3AtY2xpY2tdJykpIHtcbiAgICBxdWlja3ZpZXcuY2xvc2UocXYpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucXVpY2t2aWV3IC5jbG9zZSwgW2RhdGEtZGlzbWlzcz1cInF1aWNrdmlld1wiXScsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IHF2ID0gJCh0aGlzKS5jbG9zZXN0KCcucXVpY2t2aWV3JylcbiAgcXVpY2t2aWV3LmNsb3NlKHF2KVxufSlcblxuLy8gVG9nZ2xlIG9wZW4vY2xvc2Ugc3RhdGVcbi8vXG5xdWlja3ZpZXcudG9nZ2xlID0gZnVuY3Rpb24gKGUsIHVybCkge1xuICBpZiAoJChlKS5oYXNDbGFzcygncmV2ZWFsJykpIHtcbiAgICBxdWlja3ZpZXcuY2xvc2UoZSlcbiAgfSBlbHNlIHtcbiAgICBpZiAodXJsICE9PSAnJykge1xuICAgICAgJChlKS5odG1sKCc8ZGl2IGNsYXNzPVwic3Bpbm5lci1saW5lYXJcIj48ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PjwvZGl2PicpXG4gICAgICAkKGUpLmxvYWQodXJsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHFwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcucXVpY2t2aWV3JylcbiAgICAgIH0pXG4gICAgfVxuICAgIHF1aWNrdmlldy5vcGVuKGUpXG4gIH1cbn1cblxuXG4vLyBPcGVuIHF1aWNrdmlld1xuLy9cbnF1aWNrdmlldy5vcGVuID0gZnVuY3Rpb24gKGUpIHtcbiAgbGV0IHF1aWNrdmlldyA9ICQoZSlcbiAgbGV0IHVybCA9ICcnXG4gIC8vIExvYWQgY29udGVudCBmcm9tIFVSTCBpZiByZXF1aXJlZFxuICBpZiAocXVpY2t2aWV3Lmhhc0RhdGFBdHRyKCd1cmwnKSAmJiAndHJ1ZScgIT09IHF1aWNrdmlldy5kYXRhKCd1cmwtaGFzLWxvYWRlZCcpKSB7XG4gICAgaWYgKHF1aWNrdmlldy5kYXRhKCd1cmwnKSA9PT0gJ25vLXVybCcpIHtcbiAgICAgIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3F1aWNrX3ZpZXcnKVxuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSBxdWlja3ZpZXcuZGF0YSgndXJsJylcbiAgICB9XG5cbiAgICBxdWlja3ZpZXcubG9hZCh1cmwsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHFwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcucXVpY2t2aWV3JylcblxuICAgICAgLy8gRG9uJ3QgbG9hZCBpdCBuZXh0IHRpbWUsIGlmIGRvbid0IG5lZWQgdG9cbiAgICAgIGlmIChxdWlja3ZpZXcuaGFzRGF0YUF0dHIoJ2Fsd2F5cy1yZWxvYWQnKSAmJiAndHJ1ZScgPT09IHF1aWNrdmlldy5kYXRhKCdhbHdheXMtcmVsb2FkJykpIHtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVpY2t2aWV3LmRhdGEoJ3VybC1oYXMtbG9hZGVkJywgJ3RydWUnKVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4vLyBPcGVuIGl0XG4gIHF1aWNrdmlldy5hZGRDbGFzcygncmV2ZWFsJykubm90KCcuYmFja2Ryb3AtcmVtb3ZlJykuYWZ0ZXIoJzxkaXYgY2xhc3M9XCJhcHAtYmFja2Ryb3AgYmFja2Ryb3AtcXVpY2t2aWV3XCIgZGF0YS10YXJnZXQ9XCInICsgZSArICdcIj48L2Rpdj4nKVxufVxuXG5cbi8vIENsb3NlIHF1aWNrdmlld1xuLy9cbnF1aWNrdmlldy5jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICQoZSkucmVtb3ZlQ2xhc3MoJ3JldmVhbCcpXG4gICQoJy5iYWNrZHJvcC1xdWlja3ZpZXcnKS5yZW1vdmUoKVxufVxuXG5cbmxldCBhcHAgPSB7fVxuXG5hcHAuZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKGUpIHtcbiAgbGV0IHRhcmdldFxuICBpZiAoZS5oYXNEYXRhQXR0cigndGFyZ2V0JykpIHtcbiAgICB0YXJnZXQgPSBlLmRhdGEoJ3RhcmdldCcpXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZS5hdHRyKCdocmVmJylcbiAgfVxuXG4gIGlmICh0YXJnZXQgPT0gJ25leHQnKSB7XG4gICAgdGFyZ2V0ID0gJChlKS5uZXh0KClcbiAgfSBlbHNlIGlmICh0YXJnZXQgPT0gJ3ByZXYnKSB7XG4gICAgdGFyZ2V0ID0gJChlKS5wcmV2KClcbiAgfVxuXG4gIGlmICh0YXJnZXQgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdGFyZ2V0XG59XG5cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9tYXRlcmlhbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI4LzExLzIwMTkgMTk6NDBcblxuLy8gTWF0ZXJpYWwgaW5wdXRcbi8vXG4kKGRvY3VtZW50KS5vbignZm9jdXMnLCAnLmZvcm0tdHlwZS1tYXRlcmlhbCAuZm9ybS1jb250cm9sOm5vdCguYm9vdHN0cmFwLXNlbGVjdCknLCBmdW5jdGlvbiAoKSB7XG4gIG1hdGVyaWFsRG9GbG9hdCgkKHRoaXMpKVxufSlcblxuJChkb2N1bWVudCkub24oJ2ZvY3Vzb3V0JywgJy5mb3JtLXR5cGUtbWF0ZXJpYWwgLmZvcm0tY29udHJvbDpub3QoLmJvb3RzdHJhcC1zZWxlY3QpJywgZnVuY3Rpb24gKCkge1xuICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJycpIHtcbiAgICBtYXRlcmlhbE5vRmxvYXQoJCh0aGlzKSlcbiAgfVxufSlcblxuLy8gQXV0byBmb2N1cyBpbnB1dHNcbm1hdGVyaWFsRG9GbG9hdCgkKCcuZm9ybS10eXBlLW1hdGVyaWFsIC5mb3JtLWNvbnRyb2xbYXV0b2ZvY3VzPVwidHJ1ZVwiXScpKVxuXG5cbmZ1bmN0aW9uIG1hdGVyaWFsRG9GbG9hdCAoZSkge1xuICBpZiAoZS5wYXJlbnQoJy5pbnB1dC1ncm91cC1pbnB1dCcpLmxlbmd0aCkge1xuICAgIGUucGFyZW50KCcuaW5wdXQtZ3JvdXAtaW5wdXQnKS5hZGRDbGFzcygnZG8tZmxvYXQnKVxuICB9IGVsc2Uge1xuICAgIGUuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5hZGRDbGFzcygnZG8tZmxvYXQnKVxuICB9XG59XG5cblxuZnVuY3Rpb24gbWF0ZXJpYWxOb0Zsb2F0IChlKSB7XG4gIGlmIChlLnBhcmVudCgnLmlucHV0LWdyb3VwLWlucHV0JykubGVuZ3RoKSB7XG4gICAgZS5wYXJlbnQoJy5pbnB1dC1ncm91cC1pbnB1dCcpLnJlbW92ZUNsYXNzKCdkby1mbG9hdCcpXG4gIH0gZWxzZSB7XG4gICAgZS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdkby1mbG9hdCcpXG4gIH1cbn1cblxuJCgnLmZvcm0tdHlwZS1tYXRlcmlhbCAuZm9ybS1jb250cm9sJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gIGlmICgkKHRoaXMpLnZhbCgpLmxlbmd0aCA+IDApIHtcbiAgICAvL2lmICgkKHRoaXMpLmlzKCdbZGF0YS1wcm92aWRlfj1cInNlbGVjdHBpY2tlclwiXScpKSB7XG4gICAgLy8gIHJldHVyblxuICAgIC8vfVxuICAgIG1hdGVyaWFsRG9GbG9hdCgkKHRoaXMpKVxuICB9XG59KVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvbW9kYWxlci5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI3LzA3LzIwMjAgMTE6MjNcblxuLy8gPT09PT09PT09PT09PT09PT09PT09XG4vLyBNb2RhbGVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cbi8vXG4rZnVuY3Rpb24gKCQpIHtcblxuICBsZXQgY29uZmlnTW9kYWxlciA9IHtcbiAgICB1cmw6ICcnLFxuICAgIGlzTW9kYWw6IGZhbHNlLFxuICAgIGh0bWw6ICcnLFxuICAgIHRhcmdldDogJycsXG4gICAgdHlwZTogJycsXG4gICAgc2l6ZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgIGhlYWRlclZpc2libGU6IHRydWUsXG4gICAgZm9vdGVyVmlzaWJsZTogdHJ1ZSxcbiAgICBjb25maXJtVmlzaWJsZTogdHJ1ZSxcbiAgICBjb25maXJtVGV4dDogJ09rJyxcbiAgICBjb25maXJtQ2xhc3M6ICdidG4gYnRuLXctc20gYnRuLWZsYXQgYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbFZpc2libGU6IGZhbHNlLFxuICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnLFxuICAgIGNhbmNlbENsYXNzOiAnYnRuIGJ0bi13LXNtIGJ0bi1mbGF0IGJ0bi1zZWNvbmRhcnknLFxuICAgIGJvZHlFeHRyYUNsYXNzOiAnJyxcbiAgICBzcGlubmVyOiAnPGRpdiBjbGFzcz1cImgtMjAwIGNlbnRlci12aFwiPjxzdmcgY2xhc3M9XCJzcGlubmVyLWNpcmNsZS1tYXRlcmlhbC1zdmdcIiB2aWV3Qm94PVwiMCAwIDUwIDUwXCI+PGNpcmNsZSBjbGFzcz1cImNpcmNsZVwiIGN4PVwiMjVcIiBjeT1cIjI1XCIgcj1cIjIwXCI+PC9zdmc+PC9kaXY+JyxcblxuICAgIGF1dG9EZXN0cm95OiB0cnVlLFxuXG4gICAgLy8gRXZlbnRzXG4gICAgb25TaG93OiBudWxsLFxuICAgIG9uU2hvd246IG51bGwsXG4gICAgb25IaWRlOiBudWxsLFxuICAgIG9uSGlkZGVuOiBudWxsLFxuICAgIG9uQ29uZmlybTogbnVsbCxcbiAgICBvbkNhbmNlbDogbnVsbCxcblxuICAgIC8vIFByaXZhdGUgb3B0aW9uc1xuICAgIG1vZGFsSWQ6IG51bGxcbiAgfVxuXG4gIGZ1bmN0aW9uIGd1aWQgKGxlbikge1xuICAgIGlmIChsZW4gPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZW4gPSA1XG4gICAgfVxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKS5zdWJzdHIoMCwgbGVuKVxuICB9XG5cblxuICBtb2RhbGVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgc2V0dGluZyA9ICQuZXh0ZW5kKHt9LCBjb25maWdNb2RhbGVyLCBvcHRpb25zKVxuXG4gICAgaWYgKHNldHRpbmcubW9kYWxJZCkge1xuICAgICAgJCgnIycgKyBzZXR0aW5nLm1vZGFsSWQpLm1vZGFsKCdzaG93JylcbiAgICAgIHJldHVyblxuICAgIH1cblxuXG4gICAgdmFyIGlkID0gJ21vZGFsLScgKyBndWlkKClcblxuXG4gICAgdmFyIGhhbmRsZUNhbGxiYWNrID0gZnVuY3Rpb24gKGlkKSB7XG5cbiAgICAgIC8vIEJvb3RzdHJhcCBtb2RhbCBldmVudHNcbiAgICAgIC8vXG4gICAgICBpZiAoc2V0dGluZy5vblNob3cpIHtcbiAgICAgICAgJCgnIycgKyBpZCkub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vc2V0dGluZy5vblNob3coKTtcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNldHRpbmcub25TaG93bikge1xuICAgICAgICAkKCcjJyArIGlkKS5vbignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vc2V0dGluZy5vblNob3duKCk7XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5nLm9uSGlkZSkge1xuICAgICAgICAkKCcjJyArIGlkKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgc2V0dGluZy5vbkhpZGUoKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAoc2V0dGluZy5vbkhpZGRlbikge1xuICAgICAgICAkKCcjJyArIGlkKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBzZXR0aW5nLm9uSGlkZGVuKClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuXG4gICAgICAvLyBIYW5kbGUgY29uZmlybSBjYWxsYmFja1xuICAgICAgLy9cbiAgICAgICQoJyMnICsgaWQpLmZpbmQoJ1tkYXRhLXBlcmZvcm09XCJjb25maXJtXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vIEhhc24ndCBzZXRcbiAgICAgICAgaWYgKHNldHRpbmcub25Db25maXJtID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElzIGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5nLm9uQ29uZmlybSkpIHtcbiAgICAgICAgICBzZXR0aW5nLm9uQ29uZmlybSgkKCcjJyArIGlkKSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElzIHN0cmluZyB2YWx1ZSwgc28gY2FsbCBpdFxuICAgICAgICBpZiAoc2V0dGluZy5vbkNvbmZpcm0uc3Vic3RyaW5nKSB7XG4gICAgICAgICAgYXBwLmNhbGwoc2V0dGluZy5vbkNvbmZpcm0sICQoJyMnICsgaWQpKVxuICAgICAgICB9XG5cbiAgICAgIH0pXG5cblxuICAgICAgLy8gSGFuZGxlIGNhbmNlbCBjYWxsYmFja1xuICAgICAgLy9cbiAgICAgICQoJyMnICsgaWQpLmZpbmQoJ1tkYXRhLXBlcmZvcm09XCJjYW5jZWxcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gSGFzbid0IHNldFxuICAgICAgICBpZiAoc2V0dGluZy5vbkNhbmNlbCA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJcyBhIGZ1bmN0aW9uXG4gICAgICAgIGlmICgkLmlzRnVuY3Rpb24oc2V0dGluZy5vbkNhbmNlbCkpIHtcbiAgICAgICAgICBzZXR0aW5nLm9uQ2FuY2VsKCQoJyMnICsgaWQpKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXMgc3RyaW5nIHZhbHVlLCBzbyBjYWxsIGl0XG4gICAgICAgIGlmIChzZXR0aW5nLm9uQ2FuY2VsLnN1YnN0cmluZykge1xuICAgICAgICAgIGFwcC5jYWxsKHNldHRpbmcub25DYW5jZWwsICQoJyMnICsgaWQpKVxuICAgICAgICB9XG5cbiAgICAgIH0pXG4gICAgfVxuXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBXZSByZWNpZXZlIG1vZGFsIG1hcmt1cCBmcm9tIHVybFxuICAgIC8vXG4gICAgaWYgKHNldHRpbmcuaXNNb2RhbCkge1xuXG4gICAgICAkKCc8ZGl2PicpLmxvYWQoc2V0dGluZy51cmwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkKHRoaXMpLmZpbmQoJy5tb2RhbCcpLmF0dHIoJ2lkJywgaWQpLm91dGVySFRNTCgpKVxuXG4gICAgICAgICQoJyMnICsgaWQpLm1vZGFsKCdzaG93JylcbiAgICAgICAgJCgnIycgKyBpZCkub25lKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy90b2RvOiBhIGNvbmZpcm1lciAkKCcjJysgaWQpLmZpbmQoJy5tb2RhbC1ib2R5JykucGVyZmVjdFNjcm9sbGJhcigndXBkYXRlJyk7XG4gICAgICAgIH0pXG5cblxuICAgICAgICAvLyBEZXN0cm95IGFmdGVyIGNsb3NlXG4gICAgICAgIC8vXG4gICAgICAgIGlmIChzZXR0aW5nLmF1dG9EZXN0cm95KSB7XG4gICAgICAgICAgJCgnIycgKyBpZCkub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJyMnICsgaWQpLnJlbW92ZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKHNldHRpbmcudGhpcykuYXR0cignZGF0YS1tb2RhbC1pZCcsIGlkKVxuICAgICAgICB9XG5cblxuICAgICAgICBoYW5kbGVDYWxsYmFjayhpZClcbiAgICAgIH0pXG4gICAgfVxuXG5cblxuXG5cbiAgICAgIC8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBXZSBzaG91bGQgZGVzaWduIHRoZSBtb2RhbFxuICAgIC8vXG4gICAgZWxzZSB7XG5cbiAgICAgIHN3aXRjaCAoc2V0dGluZy5zaXplKSB7XG4gICAgICAgIGNhc2UgJ3NtJzpcbiAgICAgICAgICBzZXR0aW5nLnNpemUgPSAnbW9kYWwtc20nXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdsZyc6XG4gICAgICAgICAgc2V0dGluZy5zaXplID0gJ21vZGFsLWxnJ1xuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy9zZXR0aW5nLnNpemUgPSAnJztcbiAgICAgIH1cblxuXG4gICAgICBpZiAoc2V0dGluZy50eXBlKSB7XG4gICAgICAgIHNldHRpbmcudHlwZSA9ICdtb2RhbC0nICsgc2V0dGluZy50eXBlXG4gICAgICB9XG5cblxuICAgICAgLy8gSGVhZGVyIGNvZGVcbiAgICAgIC8vXG4gICAgICB2YXIgaHRtbF9oZWFkZXIgPSAnJ1xuICAgICAgaWYgKHNldHRpbmcuaGVhZGVyVmlzaWJsZSkge1xuICAgICAgICBodG1sX2hlYWRlciArPVxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+IFxcXG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPicgKyBzZXR0aW5nLnRpdGxlICsgJzwvaDU+IFxcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPiBcXFxuICAgICAgICAgIDwvZGl2PidcbiAgICAgIH1cblxuXG4gICAgICAvLyBGb290ZXIgY29kZVxuICAgICAgLy9cbiAgICAgIHZhciBodG1sX2Zvb3RlciA9ICcnXG4gICAgICBpZiAoc2V0dGluZy5mb290ZXJWaXNpYmxlKSB7XG4gICAgICAgIGh0bWxfZm9vdGVyICs9ICc8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+J1xuXG4gICAgICAgIGlmIChzZXR0aW5nLmNhbmNlbFZpc2libGUpIHtcbiAgICAgICAgICBodG1sX2Zvb3RlciArPSAnPGJ1dHRvbiBjbGFzcz1cIicgKyBzZXR0aW5nLmNhbmNlbENsYXNzICsgJ1wiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS1wZXJmb3JtPVwiY2FuY2VsXCI+JyArIHNldHRpbmcuY2FuY2VsVGV4dCArICc8L2J1dHRvbj4nXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2V0dGluZy5jb25maXJtVmlzaWJsZSkge1xuICAgICAgICAgIGh0bWxfZm9vdGVyICs9ICc8YnV0dG9uIGNsYXNzPVwiJyArIHNldHRpbmcuY29uZmlybUNsYXNzICsgJ1wiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS1wZXJmb3JtPVwiY29uZmlybVwiPicgKyBzZXR0aW5nLmNvbmZpcm1UZXh0ICsgJzwvYnV0dG9uPidcbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWxfZm9vdGVyICs9ICc8L2Rpdj4nXG4gICAgICB9XG5cbiAgICAgIC8vIE1vZGFsIGNvZGVcbiAgICAgIC8vXG4gICAgICB2YXIgbW9kYWxfaHRtbCA9XG4gICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZSAnICsgc2V0dGluZy50eXBlICsgJ1wiIGlkPVwiJyArIGlkICsgJ1wiIHRhYmluZGV4PVwiLTFcIicgKyAoIXNldHRpbmcuYmFja2Ryb3AgPyAnIGRhdGEtYmFja2Ryb3A9XCJmYWxzZVwiJyA6ICcnKSArICc+IFxcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nICcgKyBzZXR0aW5nLnNpemUgKyAnXCI+IFxcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+IFxcXG4gICAgICAgICAgICAgICAgJyArIGh0bWxfaGVhZGVyICsgJyBcXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5ICcgKyBzZXR0aW5nLmJvZHlFeHRyYUNsYXNzICsgJ1wiPiBcXFxuICAgICAgICAgICAgICAgICAgJyArIHNldHRpbmcuc3Bpbm5lciArICcgXFxcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXFxcbiAgICAgICAgICAgICAgICAnICsgaHRtbF9mb290ZXIgKyAnIFxcXG4gICAgICAgICAgICAgIDwvZGl2PiBcXFxuICAgICAgICAgICAgPC9kaXY+IFxcXG4gICAgICAgICAgPC9kaXY+J1xuXG5cbiAgICAgIC8vIFNob3cgbW9kYWxcbiAgICAgICQoJ2JvZHknKS5hcHBlbmQobW9kYWxfaHRtbClcbiAgICAgICQoJyMnICsgaWQpLm1vZGFsKCdzaG93JylcblxuXG4gICAgICAvLyBEZXN0cm95IGFmdGVyIGNsb3NlXG4gICAgICAvL1xuICAgICAgaWYgKHNldHRpbmcuYXV0b0Rlc3Ryb3kpIHtcbiAgICAgICAgJCgnIycgKyBpZCkub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkKCcjJyArIGlkKS5yZW1vdmUoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChzZXR0aW5nLnRoaXMpLmF0dHIoJ2RhdGEtbW9kYWwtaWQnLCBpZClcbiAgICAgIH1cblxuXG4gICAgICAvLyBMb2FkIGRhdGEgaW50byB0aGUgbW9kYWxcbiAgICAgIC8vXG4gICAgICBpZiAoc2V0dGluZy51cmwpIHtcbiAgICAgICAgJCgnIycgKyBpZCkuZmluZCgnLm1vZGFsLWJvZHknKS5sb2FkKHNldHRpbmcudXJsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy90b2RvOiBhIGNvbmZpcm1lciAkKHRoaXMpLnBlcmZlY3RTY3JvbGxiYXIoJ3VwZGF0ZScpO1xuICAgICAgICAgIGhhbmRsZUNhbGxiYWNrKGlkKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChzZXR0aW5nLmh0bWwpIHtcbiAgICAgICAgJCgnIycgKyBpZCkuZmluZCgnLm1vZGFsLWJvZHknKS5odG1sKHNldHRpbmcuaHRtbClcbiAgICAgICAgaGFuZGxlQ2FsbGJhY2soaWQpXG4gICAgICB9IGVsc2UgaWYgKHNldHRpbmcudGFyZ2V0KSB7XG4gICAgICAgICQoJyMnICsgaWQpLmZpbmQoJy5tb2RhbC1ib2R5JykuaHRtbCgkKHNldHRpbmcudGFyZ2V0KS5odG1sKCkpXG4gICAgICAgIGhhbmRsZUNhbGxiYWNrKGlkKVxuICAgICAgfVxuICAgIH1cbiAgfVxufShqUXVlcnkpXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvc2VhcmNoLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjYvMDkvMjAyMCAxODoxOFxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI3NlYXJjaCcsIGZ1bmN0aW9uIChlKSB7XG5cbiAgY29uc3Qga2V5d29yZCA9ICQodGhpcykudmFsKClcbiAgY29uc3Qgc2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQgPSAkKCcjc2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQnKVxuICBjb25zdCBzZWFyY2hfcmVwb25zZV9wZXJzb25uZWwgPSAkKCcjc2VhcmNoX3JlcG9uc2VfcGVyc29ubmVsJylcbiAgY29uc3Qgc2VhcmNoX3JlcG9uc2VfYXV0cmUgPSAkKCcjc2VhcmNoX3JlcG9uc2VfYXV0cmUnKVxuXG4gIGlmIChrZXl3b3JkLmxlbmd0aCA+IDIpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdyZWNoZXJjaGUnLCB7a2V5d29yZDoga2V5d29yZH0pLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGxldCBodG1sID0gJydcbiAgICAgICAgaWYgKGRhdGEuZXR1ZGlhbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBqUXVlcnkuZWFjaChkYXRhLmV0dWRpYW50cywgZnVuY3Rpb24gKGluZGV4LCBldHVkaWFudCkge1xuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGEgY2xhc3M9XCJtZWRpYVwiIGhyZWY9XCInICsgUm91dGluZy5nZW5lcmF0ZSgndXNlcl9wcm9maWwnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdldHVkaWFudCcsXG4gICAgICAgICAgICAgIHNsdWc6IGV0dWRpYW50LnNsdWdcbiAgICAgICAgICAgIH0pICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiPlxcbidcbiAgICAgICAgICAgIGlmIChldHVkaWFudC5waG90byA9PT0gJ25vaW1hZ2UucG5nJyB8fCBldHVkaWFudC5waG90byA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxkaXYgY2xhc3M9XCJhdmF0YXItY2lyY2xlLXNtXCI+XFxuJyArXG4gICAgICAgICAgICAgICAgJyAgICA8c3BhbiBjbGFzcz1cImluaXRpYWxzXCI+JyArIGV0dWRpYW50LmF2YXRhckluaXRpYWxlcyArICc8L3NwYW4+XFxuJyArXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxpbWcgY2xhc3M9XCJhdmF0YXIgYXZhdGFyLXNtXCIgc3JjPVwiJyArIGRhdGEuYmFzZXBhdGggKyAnZXR1ZGlhbnRzLycgKyBldHVkaWFudC5waG90byArICdcIiBhbHQ9XCJQaG90byBkZSBwcm9maWwgZGUgJyArIGV0dWRpYW50LmRpc3BsYXlQciArICdcIj5cXG4nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICcgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+JyArIGV0dWRpYW50LmRpc3BsYXlQciArICcgKCcgKyBldHVkaWFudC5zZW1lc3RyZSArICcpPC9zdHJvbmc+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj4nICsgZXR1ZGlhbnQuZ3JvdXBlcyArICc8L3RpbWU+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvYT4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+UGFzIGRlIHLDqXN1bHRhdCBwb3VyIHZvdHJlIHJlY2hlcmNoZSA8c3Ryb25nPlwiJyArIGtleXdvcmQgKyAnXCI8L3N0cm9uZz48L2Rpdj4nXG4gICAgICAgIH1cblxuICAgICAgICBzZWFyY2hfcmVwb25zZV9ldHVkaWFudC5lbXB0eSgpLmFwcGVuZChodG1sKVxuXG4gICAgICAgIGh0bWwgPSAnJ1xuICAgICAgICBpZiAoZGF0YS5wZXJzb25uZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBqUXVlcnkuZWFjaChkYXRhLnBlcnNvbm5lbHMsIGZ1bmN0aW9uIChpbmRleCwgcGVyc29ubmVsKSB7XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICc8YSBjbGFzcz1cIm1lZGlhIGl0ZW1zLWNlbnRlclwiIGhyZWY9XCInICsgUm91dGluZy5nZW5lcmF0ZSgndXNlcl9wcm9maWwnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdwZXJzb25uZWwnLFxuICAgICAgICAgICAgICBzbHVnOiBwZXJzb25uZWwuc2x1Z1xuICAgICAgICAgICAgfSkgKyAnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XFxuJ1xuICAgICAgICAgICAgaWYgKHBlcnNvbm5lbC5waG90byA9PT0gJ25vaW1hZ2UucG5nJyB8fCBwZXJzb25uZWwucGhvdG8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICBodG1sID0gaHRtbCArICc8ZGl2IGNsYXNzPVwiYXZhdGFyLWNpcmNsZS1zbVwiPlxcbicgK1xuICAgICAgICAgICAgICAgICcgICAgPHNwYW4gY2xhc3M9XCJpbml0aWFsc1wiPicgKyBwZXJzb25uZWwuYXZhdGFySW5pdGlhbGVzICsgJzwvc3Bhbj5cXG4nICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGltZyBjbGFzcz1cImF2YXRhciBhdmF0YXItc21cIiBzcmM9XCInICsgZGF0YS5iYXNlcGF0aCArICdwZXJzb25uZWxzLycgKyBwZXJzb25uZWwucGhvdG8gKyAnXCIgYWx0PVwiUGhvdG8gZGUgcHJvZmlsIGRlICcgKyBwZXJzb25uZWwuZGlzcGxheVByICsgJ1wiPlxcbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJyAgICAgICAgICAgICAgICAgICAgICAgIDxwPicgKyBwZXJzb25uZWwuZGlzcGxheVByICsgJzwvcD5cXG4nICtcbiAgICAgICAgICAgICAgJzwvYT4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+UGFzIGRlIHLDqXN1bHRhdCBwb3VyIHZvdHJlIHJlY2hlcmNoZSA8c3Ryb25nPlwiJyArIGtleXdvcmQgKyAnXCI8L3N0cm9uZz48L2Rpdj4nXG4gICAgICAgIH1cbiAgICAgICAgc2VhcmNoX3JlcG9uc2VfcGVyc29ubmVsLmVtcHR5KCkuYXBwZW5kKGh0bWwpXG5cbiAgICAgICAgaHRtbCA9ICcnXG4gICAgICAgIGlmIChkYXRhLmF1dHJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgalF1ZXJ5LmVhY2goZGF0YS5hdXRyZXMsIGZ1bmN0aW9uIChpbmRleCwgYXV0cmUpIHtcbiAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxhIGNsYXNzPVwibWVkaWEgaXRlbXMtY2VudGVyXCIgaHJlZj1cIlwiPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImF2YXRhciBhdmF0YXItc21cIiBzcmM9XCIuLi9hc3NldHMvaW1nL2F2YXRhci8xLmpwZ1wiIGFsdD1cIi4uLlwiPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHA+JyArIGF1dHJlICsgJzwvcD5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC9hPidcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGh0bWwgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5QYXMgZGUgcsOpc3VsdGF0IHBvdXIgdm90cmUgcmVjaGVyY2hlIDxzdHJvbmc+XCInICsga2V5d29yZCArICdcIjwvc3Ryb25nPjwvZGl2PidcbiAgICAgICAgfVxuICAgICAgICBzZWFyY2hfcmVwb25zZV9hdXRyZS5lbXB0eSgpLmFwcGVuZChodG1sKVxuICAgICAgfVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIj5TYWlzaXIgYXUgbW9pbnMgMyBjYXJhY3TDqHJlczwvZGl2PidcbiAgICBzZWFyY2hfcmVwb25zZV9hdXRyZS5lbXB0eSgpLmFwcGVuZChodG1sKVxuICAgIHNlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbC5lbXB0eSgpLmFwcGVuZChodG1sKVxuICAgIHNlYXJjaF9yZXBvbnNlX2V0dWRpYW50LmVtcHR5KCkuYXBwZW5kKGh0bWwpXG4gIH1cbn0pXG5cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy91dGlsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTEvMTAvMjAyMCAwODowNFxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxuZnVuY3Rpb24gcmVhZFVybE1lbnUgKCR1cmwpIHtcbiAgY29uc3QgJGVsdCA9ICR1cmwuc3BsaXQoJy8nKVxuICBsZXQgJGZpcnN0RWx0ID0gMlxuICBpZiAoJGVsdFsxXSA9PT0gJ2luZGV4LnBocCcpIHtcbiAgICBpZiAoJGVsdC5sZW5ndGggPiAxKSB7XG4gICAgICAkZmlyc3RFbHQgPSAzXG4gICAgfVxuICB9XG5cbiAgaWYgKCRlbHRbJGZpcnN0RWx0XSA9PT0gJ3N1cGVyLWFkbWluaXN0cmF0aW9uJykge1xuICAgICRmaXJzdEVsdCA9ICRmaXJzdEVsdCArIDFcbiAgfVxuXG4gIGlmICgkZWx0WyRlbHQubGVuZ3RoIC0gMV0gPT09ICcnKSB7XG4gICAgJGVsdC5wb3AoKVxuICB9XG5cbiAgJCgnLm1lbnUtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAkKCcjbWVudS0nICsgJGVsdFskZmlyc3RFbHRdKS5hZGRDbGFzcygnYWN0aXZlJylcbn1cblxuLy9jb2xvcmlzZSBsZSBib24gbWVudVxucmVhZFVybE1lbnUoJChsb2NhdGlvbikuYXR0cigncGF0aG5hbWUnKSlcblxuU3dhbC5taXhpbih7XG4gIGN1c3RvbUNsYXNzOiB7XG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gIH0sXG4gIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxufSlcbi8vcG9wIHVwIGRlIGNvbmZpcm1hdGlvbiBkZSBzdXBwcmVzc2lvblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdXBwcmltZXInLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJylcbiAgY29uc3QgY3NyZiA9ICQodGhpcykuZGF0YSgnY3NyZicpXG4gIFN3YWwuZmlyZSh7XG4gICAgdGl0bGU6ICdDb25maXJtZXIgbGEgc3VwcHJlc3Npb24gPycsXG4gICAgdGV4dDogJ0xcXCdvcMOpcmF0aW9uIG5lIHBvdXJyYSBwYXMgw6p0cmUgYW5udWzDqWUuJyxcbiAgICBpY29uOiAnd2FybmluZycsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBqZSBjb25maXJtZScsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlcicsXG4gICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgfSxcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgX3Rva2VuOiBjc3JmXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGlmIChpZC5oYXNPd25Qcm9wZXJ0eSgncmVkaXJlY3QnKSAmJiBpZC5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBpZC51cmxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI2xpZ25lXycgKyBpZCkuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgICAgICAgICAgYWRkQ2FsbG91dCgnU3VwcHJlc3Npb24gZWZmZWN0dcOpZSBhdmVjIHN1Y2PDqHMnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogJ1N1cHByaW3DqSEnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTFxcJ2VucmVnaXN0cmVtZW50IGEgw6l0w6kgc3VwcHJpbcOpLicsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiEnLFxuICAgICAgICAgICAgdGV4dDogJ01lcmNpIGRlIHJlbm91dmVsZXIgbFxcJ29ww6lyYXRpb24nLFxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgdGVudGF0aXZlIGRlIHN1cHByZXNzaW9uJywgJ2RhbmdlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcbiAgICAgIHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJ1xuICAgICkge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdDYW5jZWxsZWQnLFxuICAgICAgICB0ZXh0OiAnT0shIFRvdXQgZXN0IGNvbW1lIGF2YW50ICEnLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYWxsb3V0IChtZXNzYWdlLCBsYWJlbCkge1xuICBjb25zb2xlLmxvZygnY2FsbG91dCcpXG4gIHZhciB0cmFuc2xhdGUgPSBuZXcgQXJyYXkoKVxuICB0cmFuc2xhdGVbJ3N1Y2Nlc3MnXSA9ICdTdWNjw6hzJ1xuICB0cmFuc2xhdGVbJ2RhbmdlciddID0gJ0VycmV1cidcbiAgdHJhbnNsYXRlWyd3YXJuaW5nJ10gPSAnQXR0ZW50aW9uJ1xuXG4gIGNvbnN0IGh0bWwgPSAnPGRpdiBjbGFzcz1cImNhbGxvdXQgY2FsbG91dC0nICsgbGFiZWwgKyAnXCIgcm9sZT1cImFsZXJ0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImNhbGxvdXRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8aDU+JyArIHRyYW5zbGF0ZVtsYWJlbF0gKyAnPC9oNT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8cD4nICsgbWVzc2FnZSArICc8L3A+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4nXG5cbiAgJCgnI21haW5Db250ZW50JykucHJlcGVuZChodG1sKS5zbGlkZURvd24oJ3Nsb3cnKVxuICAkKCcuY2FsbG91dCcpLmRlbGF5KDUwMDApLnNsaWRlVXAoJ3Nsb3cnKVxufVxuXG4vL0VkaXRhYmxlXG5sZXQgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAnJ1xubGV0IHR5cGUgPSAndGV4dCdcbmxldCBFZGl0T25MaW5lID0gZmFsc2VcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5teWVkaXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbXlFZGl0SW5pdGlhbENvbnRlbnQgPSAkKHRoaXMpXG4gIGxldCBodG1sID0gJydcbiAgRWRpdE9uTGluZSA9IHRydWVcbiAgaWYgKHR5cGVvZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykpICE9PSAndW5kZWZpbmVkJykge1xuICAgIHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICB9XG5cbiAgaWYgKCQodGhpcykuZGF0YSgndHlwZScpID09PSAnc2VsZWN0Jykge1xuICAgIC8vdG9kbzogQSBmaW5hbGlzZXJcbiAgfSBlbHNlIHtcbiAgICBodG1sID0gZ2VuZXJlSW5wdXQoJCh0aGlzKSlcbiAgfVxuICAkKHRoaXMpLnJlcGxhY2VXaXRoKGh0bWwpXG4gICQoJyNteWVkaXQtaW5wdXQnKS5mb2N1cygpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI215ZWRpdC1pbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgdXBkYXRlRGF0YSgpXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC12YWxpZGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgdXBkYXRlRGF0YSgpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiBlLndoaWNoID09PSAxMykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHVwZGF0ZURhdGEoKVxuICB9XG5cbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgZS53aGljaCA9PT0gMjcpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtYW5udWxlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxufSlcblxuZnVuY3Rpb24gdXBkYXRlRGF0YSAoKSB7XG4gIGxldCB2YWwgPSAkKCcjbXllZGl0LWlucHV0JykudmFsKClcbiAgJC5hamF4KHtcbiAgICB1cmw6IG15RWRpdEluaXRpYWxDb250ZW50LmF0dHIoJ2hyZWYnKSxcbiAgICBkYXRhOiB7XG4gICAgICBmaWVsZDogbXlFZGl0SW5pdGlhbENvbnRlbnQuZGF0YSgnZmllbGQnKSxcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBteUVkaXRJbml0aWFsQ29udGVudC5odG1sKHZhbClcbiAgICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICAgICAgRWRpdE9uTGluZSA9IGZhbHNlXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZW5lcmVJbnB1dCAoJG9iaikge1xuICBsZXQgJGh0bWwgPSAnPGRpdiBpZD1cIm15RWRpdC16b25lXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCInICsgJG9iai5odG1sKCkudHJpbSgpICsgJ1wiIGlkPVwibXllZGl0LWlucHV0XCIgLz4nXG4gICRodG1sID0gJGh0bWwgKyAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3F1YXJlIGJ0bi1zbSBidG4tc3VjY2VzcyBidG4tb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPidcbiAgJGh0bWwgPSAkaHRtbCArICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLXNtIGJ0bi1kYW5nZXIgYnRuLW91dGxpbmVcIiBpZD1cIm15ZWRpdC1hbm51bGVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj48L2Rpdj4nXG4gIHJldHVybiAkaHRtbFxufVxuXG5qUXVlcnkuZm4uZGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSkgfHwgZGVmXG59XG5cbmpRdWVyeS5mbi5oYXNEYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmhhc0F0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSlcbn1cblxuZnVuY3Rpb24gZGF0YVRvT3B0aW9uIChuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHhbMV0udG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YU9wdGlvbnMgKGVsLCBjYXN0TGlzdCkge1xuICB2YXIgb3B0aW9ucyA9IHt9XG4gICQuZWFjaCgkKGVsKS5kYXRhKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cbiAgICBrZXkgPSBkYXRhVG9PcHRpb24oa2V5KVxuXG4gICAgLy8gRXNjYXBlIGRhdGEtcHJvdmlkZVxuICAgIGlmIChrZXkgPT0gJ3Byb3ZpZGUnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoY2FzdExpc3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgdHlwZSA9IGNhc3RMaXN0W2tleV1cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdib29sJzpcbiAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdudW0nOlxuICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJywnKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnNba2V5XSA9IHZhbHVlXG4gIH0pXG5cbiAgcmV0dXJuIG9wdGlvbnNcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy92YWxpZGF0b3ItYnM0LmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjgvMTEvMjAxOSAxOTo0MFxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFZBTElEQVRPUiBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gZ2V0VmFsdWUoJGVsKSB7XG4gICAgcmV0dXJuICRlbC5pcygnW3R5cGU9XCJjaGVja2JveFwiXScpID8gJGVsLnByb3AoJ2NoZWNrZWQnKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICRlbC5pcygnW3R5cGU9XCJyYWRpb1wiXScpICAgID8gISEkKCdbbmFtZT1cIicgKyAkZWwuYXR0cignbmFtZScpICsgJ1wiXTpjaGVja2VkJykubGVuZ3RoIDpcbiAgICAgICAgICAgJGVsLmlzKCdzZWxlY3RbbXVsdGlwbGVdJykgID8gKCRlbC52YWwoKSB8fCBbXSkubGVuZ3RoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbC52YWwoKVxuICB9XG5cbiAgdmFyIFZhbGlkYXRvciA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zICAgID0gb3B0aW9uc1xuICAgIHRoaXMudmFsaWRhdG9ycyA9ICQuZXh0ZW5kKHt9LCBWYWxpZGF0b3IuVkFMSURBVE9SUywgb3B0aW9ucy5jdXN0b20pXG4gICAgdGhpcy4kZWxlbWVudCAgID0gJChlbGVtZW50KVxuICAgIHRoaXMuJGJ0biAgICAgICA9ICQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoJ1tmb3JtPVwiJyArIHRoaXMuJGVsZW1lbnQuYXR0cignaWQnKSArICdcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLiRlbGVtZW50LmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0sIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdJykpXG5cbiAgICB0aGlzLnVwZGF0ZSgpXG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdpbnB1dC5icy52YWxpZGF0b3IgY2hhbmdlLmJzLnZhbGlkYXRvciBmb2N1c291dC5icy52YWxpZGF0b3InLCAkLnByb3h5KHRoaXMub25JbnB1dCwgdGhpcykpXG4gICAgdGhpcy4kZWxlbWVudC5vbignc3VibWl0LmJzLnZhbGlkYXRvcicsICQucHJveHkodGhpcy5vblN1Ym1pdCwgdGhpcykpXG4gICAgdGhpcy4kZWxlbWVudC5vbigncmVzZXQuYnMudmFsaWRhdG9yJywgJC5wcm94eSh0aGlzLnJlc2V0LCB0aGlzKSlcblxuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtbWF0Y2hdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgID0gJCh0aGlzKVxuICAgICAgdmFyIHRhcmdldCA9ICR0aGlzLmF0dHIoJ2RhdGEtbWF0Y2gnKVxuXG4gICAgICAkKHRhcmdldCkub24oJ2lucHV0LmJzLnZhbGlkYXRvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGdldFZhbHVlKCR0aGlzKSAmJiAkdGhpcy50cmlnZ2VyKCdpbnB1dC5icy52YWxpZGF0b3InKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gcnVuIHZhbGlkYXRvcnMgZm9yIGZpZWxkcyB3aXRoIHZhbHVlcywgYnV0IGRvbid0IGNsb2JiZXIgc2VydmVyLXNpZGUgZXJyb3JzXG4gICAgdGhpcy4kaW5wdXRzLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0VmFsdWUoJCh0aGlzKSkgJiYgISQodGhpcykuY2xvc2VzdCgnLmhhcy1lcnJvcicpLmxlbmd0aFxuICAgIH0pLnRyaWdnZXIoJ2ZvY3Vzb3V0JylcblxuICAgIHRoaXMuJGVsZW1lbnQuYXR0cignbm92YWxpZGF0ZScsIHRydWUpIC8vIGRpc2FibGUgYXV0b21hdGljIG5hdGl2ZSB2YWxpZGF0aW9uXG4gIH1cblxuICBWYWxpZGF0b3IuVkVSU0lPTiA9ICcwLjExLjknXG5cbiAgVmFsaWRhdG9yLklOUFVUX1NFTEVDVE9SID0gJzppbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0sIFt0eXBlPVwic3VibWl0XCJdLCBbdHlwZT1cInJlc2V0XCJdLCBidXR0b24pJ1xuXG4gIFZhbGlkYXRvci5GT0NVU19PRkZTRVQgPSAyMFxuXG4gIFZhbGlkYXRvci5ERUZBVUxUUyA9IHtcbiAgICBkZWxheTogNTAwLFxuICAgIGh0bWw6IGZhbHNlLFxuICAgIGRpc2FibGU6IHRydWUsXG4gICAgZm9jdXM6IHRydWUsXG4gICAgY3VzdG9tOiB7fSxcbiAgICBlcnJvcnM6IHtcbiAgICAgIG1hdGNoOiAnRG9lcyBub3QgbWF0Y2gnLFxuICAgICAgbWlubGVuZ3RoOiAnTm90IGxvbmcgZW5vdWdoJ1xuICAgIH0sXG4gICAgZmVlZGJhY2s6IHtcbiAgICAgIHN1Y2Nlc3M6ICdnbHlwaGljb24tb2snLFxuICAgICAgZXJyb3I6ICdnbHlwaGljb24tcmVtb3ZlJ1xuICAgIH1cbiAgfVxuXG4gIFZhbGlkYXRvci5WQUxJREFUT1JTID0ge1xuICAgICduYXRpdmUnOiBmdW5jdGlvbiAoJGVsKSB7XG4gICAgICB2YXIgZWwgPSAkZWxbMF1cbiAgICAgIGlmIChlbC5jaGVja1ZhbGlkaXR5KSB7XG4gICAgICAgIHJldHVybiAhZWwuY2hlY2tWYWxpZGl0eSgpICYmICFlbC52YWxpZGl0eS52YWxpZCAmJiAoZWwudmFsaWRhdGlvbk1lc3NhZ2UgfHwgXCJlcnJvciFcIilcbiAgICAgIH1cbiAgICB9LFxuICAgICdtYXRjaCc6IGZ1bmN0aW9uICgkZWwpIHtcbiAgICAgIHZhciB0YXJnZXQgPSAkZWwuYXR0cignZGF0YS1tYXRjaCcpXG4gICAgICByZXR1cm4gJGVsLnZhbCgpICE9PSAkKHRhcmdldCkudmFsKCkgJiYgVmFsaWRhdG9yLkRFRkFVTFRTLmVycm9ycy5tYXRjaFxuICAgIH0sXG4gICAgJ21pbmxlbmd0aCc6IGZ1bmN0aW9uICgkZWwpIHtcbiAgICAgIHZhciBtaW5sZW5ndGggPSAkZWwuYXR0cignZGF0YS1taW5sZW5ndGgnKVxuICAgICAgcmV0dXJuICRlbC52YWwoKS5sZW5ndGggPCBtaW5sZW5ndGggJiYgVmFsaWRhdG9yLkRFRkFVTFRTLmVycm9ycy5taW5sZW5ndGhcbiAgICB9XG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcblxuICAgIHRoaXMuJGlucHV0cyA9IHRoaXMuJGVsZW1lbnQuZmluZChWYWxpZGF0b3IuSU5QVVRfU0VMRUNUT1IpXG4gICAgICAuYWRkKHRoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtdmFsaWRhdGU9XCJ0cnVlXCJdJykpXG4gICAgICAubm90KHRoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtdmFsaWRhdGU9XCJmYWxzZVwiXScpXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHsgc2VsZi5jbGVhckVycm9ycygkKHRoaXMpKSB9KVxuICAgICAgKVxuXG4gICAgdGhpcy50b2dnbGVTdWJtaXQoKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUub25JbnB1dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHNlbGYgICAgICAgID0gdGhpc1xuICAgIHZhciAkZWwgICAgICAgICA9ICQoZS50YXJnZXQpXG4gICAgdmFyIGRlZmVyRXJyb3JzID0gZS50eXBlICE9PSAnZm9jdXNvdXQnXG5cbiAgICBpZiAoIXRoaXMuJGlucHV0cy5pcygkZWwpKSByZXR1cm5cblxuICAgIHRoaXMudmFsaWRhdGVJbnB1dCgkZWwsIGRlZmVyRXJyb3JzKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYudG9nZ2xlU3VibWl0KClcbiAgICB9KVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZUlucHV0ID0gZnVuY3Rpb24gKCRlbCwgZGVmZXJFcnJvcnMpIHtcbiAgICB2YXIgdmFsdWUgICAgICA9IGdldFZhbHVlKCRlbClcbiAgICB2YXIgcHJldkVycm9ycyA9ICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZXJyb3JzJylcblxuICAgIGlmICgkZWwuaXMoJ1t0eXBlPVwicmFkaW9cIl0nKSkgJGVsID0gdGhpcy4kZWxlbWVudC5maW5kKCdpbnB1dFtuYW1lPVwiJyArICRlbC5hdHRyKCduYW1lJykgKyAnXCJdJylcblxuICAgIHZhciBlID0gJC5FdmVudCgndmFsaWRhdGUuYnMudmFsaWRhdG9yJywge3JlbGF0ZWRUYXJnZXQ6ICRlbFswXX0pXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpXG4gICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgICByZXR1cm4gdGhpcy5ydW5WYWxpZGF0b3JzKCRlbCkuZG9uZShmdW5jdGlvbiAoZXJyb3JzKSB7XG4gICAgICAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmVycm9ycycsIGVycm9ycylcblxuICAgICAgZXJyb3JzLmxlbmd0aFxuICAgICAgICA/IGRlZmVyRXJyb3JzID8gc2VsZi5kZWZlcigkZWwsIHNlbGYuc2hvd0Vycm9ycykgOiBzZWxmLnNob3dFcnJvcnMoJGVsKVxuICAgICAgICA6IHNlbGYuY2xlYXJFcnJvcnMoJGVsKVxuXG4gICAgICBpZiAoIXByZXZFcnJvcnMgfHwgZXJyb3JzLnRvU3RyaW5nKCkgIT09IHByZXZFcnJvcnMudG9TdHJpbmcoKSkge1xuICAgICAgICBlID0gZXJyb3JzLmxlbmd0aFxuICAgICAgICAgID8gJC5FdmVudCgnaW52YWxpZC5icy52YWxpZGF0b3InLCB7cmVsYXRlZFRhcmdldDogJGVsWzBdLCBkZXRhaWw6IGVycm9yc30pXG4gICAgICAgICAgOiAkLkV2ZW50KCd2YWxpZC5icy52YWxpZGF0b3InLCB7cmVsYXRlZFRhcmdldDogJGVsWzBdLCBkZXRhaWw6IHByZXZFcnJvcnN9KVxuXG4gICAgICAgIHNlbGYuJGVsZW1lbnQudHJpZ2dlcihlKVxuICAgICAgfVxuXG4gICAgICBzZWxmLnRvZ2dsZVN1Ym1pdCgpXG5cbiAgICAgIHNlbGYuJGVsZW1lbnQudHJpZ2dlcigkLkV2ZW50KCd2YWxpZGF0ZWQuYnMudmFsaWRhdG9yJywge3JlbGF0ZWRUYXJnZXQ6ICRlbFswXX0pKVxuICAgIH0pXG4gIH1cblxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUucnVuVmFsaWRhdG9ycyA9IGZ1bmN0aW9uICgkZWwpIHtcbiAgICB2YXIgZXJyb3JzICAgPSBbXVxuICAgIHZhciBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKVxuXG4gICAgJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5kZWZlcnJlZCcpICYmICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZGVmZXJyZWQnKS5yZWplY3QoKVxuICAgICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZGVmZXJyZWQnLCBkZWZlcnJlZClcblxuICAgIGZ1bmN0aW9uIGdldFZhbGlkYXRvclNwZWNpZmljRXJyb3Ioa2V5KSB7XG4gICAgICByZXR1cm4gJGVsLmF0dHIoJ2RhdGEtJyArIGtleSArICctZXJyb3InKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZhbGlkaXR5U3RhdGVFcnJvcigpIHtcbiAgICAgIHZhciB2YWxpZGl0eSA9ICRlbFswXS52YWxpZGl0eVxuICAgICAgcmV0dXJuIHZhbGlkaXR5LnR5cGVNaXNtYXRjaCAgICA/ICRlbC5hdHRyKCdkYXRhLXR5cGUtZXJyb3InKVxuICAgICAgICAgICA6IHZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCA/ICRlbC5hdHRyKCdkYXRhLXBhdHRlcm4tZXJyb3InKVxuICAgICAgICAgICA6IHZhbGlkaXR5LnN0ZXBNaXNtYXRjaCAgICA/ICRlbC5hdHRyKCdkYXRhLXN0ZXAtZXJyb3InKVxuICAgICAgICAgICA6IHZhbGlkaXR5LnJhbmdlT3ZlcmZsb3cgICA/ICRlbC5hdHRyKCdkYXRhLW1heC1lcnJvcicpXG4gICAgICAgICAgIDogdmFsaWRpdHkucmFuZ2VVbmRlcmZsb3cgID8gJGVsLmF0dHIoJ2RhdGEtbWluLWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS52YWx1ZU1pc3NpbmcgICAgPyAkZWwuYXR0cignZGF0YS1yZXF1aXJlZC1lcnJvcicpXG4gICAgICAgICAgIDogICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEdlbmVyaWNFcnJvcigpIHtcbiAgICAgIHJldHVybiAkZWwuYXR0cignZGF0YS1lcnJvcicpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKGtleSkge1xuICAgICAgcmV0dXJuIGdldFZhbGlkYXRvclNwZWNpZmljRXJyb3Ioa2V5KVxuICAgICAgICAgIHx8IGdldFZhbGlkaXR5U3RhdGVFcnJvcigpXG4gICAgICAgICAgfHwgZ2V0R2VuZXJpY0Vycm9yKClcbiAgICB9XG5cbiAgICAkLmVhY2godGhpcy52YWxpZGF0b3JzLCAkLnByb3h5KGZ1bmN0aW9uIChrZXksIHZhbGlkYXRvcikge1xuICAgICAgdmFyIGVycm9yID0gbnVsbFxuICAgICAgaWYgKChnZXRWYWx1ZSgkZWwpIHx8ICRlbC5hdHRyKCdyZXF1aXJlZCcpKSAmJlxuICAgICAgICAgICgkZWwuYXR0cignZGF0YS0nICsga2V5KSAhPT0gdW5kZWZpbmVkIHx8IGtleSA9PSAnbmF0aXZlJykgJiZcbiAgICAgICAgICAoZXJyb3IgPSB2YWxpZGF0b3IuY2FsbCh0aGlzLCAkZWwpKSkge1xuICAgICAgICAgZXJyb3IgPSBnZXRFcnJvck1lc3NhZ2Uoa2V5KSB8fCBlcnJvclxuICAgICAgICAhfmVycm9ycy5pbmRleE9mKGVycm9yKSAmJiBlcnJvcnMucHVzaChlcnJvcilcbiAgICAgIH1cbiAgICB9LCB0aGlzKSlcblxuICAgIGlmICghZXJyb3JzLmxlbmd0aCAmJiBnZXRWYWx1ZSgkZWwpICYmICRlbC5hdHRyKCdkYXRhLXJlbW90ZScpKSB7XG4gICAgICB0aGlzLmRlZmVyKCRlbCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHt9XG4gICAgICAgIGRhdGFbJGVsLmF0dHIoJ25hbWUnKV0gPSBnZXRWYWx1ZSgkZWwpXG4gICAgICAgICQuZ2V0KCRlbC5hdHRyKCdkYXRhLXJlbW90ZScpLCBkYXRhKVxuICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3IpIHsgZXJyb3JzLnB1c2goZ2V0RXJyb3JNZXNzYWdlKCdyZW1vdGUnKSB8fCBlcnJvcikgfSlcbiAgICAgICAgICAuYWx3YXlzKGZ1bmN0aW9uICgpIHsgZGVmZXJyZWQucmVzb2x2ZShlcnJvcnMpfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGRlZmVycmVkLnJlc29sdmUoZXJyb3JzKVxuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2UoKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcblxuICAgICQud2hlbih0aGlzLiRpbnB1dHMubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIHNlbGYudmFsaWRhdGVJbnB1dCgkKHRoaXMpLCBmYWxzZSlcbiAgICB9KSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLnRvZ2dsZVN1Ym1pdCgpXG4gICAgICBzZWxmLmZvY3VzRXJyb3IoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5mb2N1c0Vycm9yID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmZvY3VzKSByZXR1cm5cblxuICAgIHZhciAkaW5wdXQgPSB0aGlzLiRlbGVtZW50LmZpbmQoXCIuaGFzLWVycm9yOmZpcnN0IDppbnB1dFwiKVxuICAgIGlmICgkaW5wdXQubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICRpbnB1dC5vZmZzZXQoKS50b3AgLSBWYWxpZGF0b3IuRk9DVVNfT0ZGU0VUfSwgMjUwKVxuICAgICRpbnB1dC5mb2N1cygpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnNob3dFcnJvcnMgPSBmdW5jdGlvbiAoJGVsKSB7XG4gICAgdmFyIG1ldGhvZCA9IHRoaXMub3B0aW9ucy5odG1sID8gJ2h0bWwnIDogJ3RleHQnXG4gICAgdmFyIGVycm9ycyA9ICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZXJyb3JzJylcbiAgICB2YXIgJGdyb3VwID0gJGVsLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJylcbiAgICB2YXIgJGJsb2NrID0gJGdyb3VwLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcbiAgICB2YXIgJGZlZWRiYWNrID0gJGdyb3VwLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcblxuICAgIGlmICghZXJyb3JzLmxlbmd0aCkgcmV0dXJuXG5cbiAgICAkZWwuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcblxuICAgIGVycm9ycyA9ICQoJzx1bC8+JylcbiAgICAgIC5hZGRDbGFzcygnbGlzdC11bnN0eWxlZCcpXG4gICAgICAuYXBwZW5kKCQubWFwKGVycm9ycywgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiAkKCc8bGkvPicpW21ldGhvZF0oZXJyb3IpIH0pKVxuXG4gICAgJGJsb2NrLmRhdGEoJ2JzLnZhbGlkYXRvci5vcmlnaW5hbENvbnRlbnQnKSA9PT0gdW5kZWZpbmVkICYmICRibG9jay5kYXRhKCdicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50JywgJGJsb2NrLmh0bWwoKSlcbiAgICAkYmxvY2suZW1wdHkoKS5hcHBlbmQoZXJyb3JzKVxuICAgICRncm91cC5hZGRDbGFzcygnaGFzLWVycm9yIGhhcy1kYW5nZXInKVxuXG4gICAgJGdyb3VwLmhhc0NsYXNzKCdoYXMtZmVlZGJhY2snKVxuICAgICAgJiYgJGZlZWRiYWNrLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5zdWNjZXNzKVxuICAgICAgJiYgJGZlZWRiYWNrLmFkZENsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5lcnJvcilcbiAgICAgICYmICRncm91cC5yZW1vdmVDbGFzcygnaGFzLXN1Y2Nlc3MnKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5jbGVhckVycm9ycyA9IGZ1bmN0aW9uICgkZWwpIHtcbiAgICB2YXIgJGdyb3VwID0gJGVsLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJylcbiAgICB2YXIgJGJsb2NrID0gJGdyb3VwLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcbiAgICB2YXIgJGZlZWRiYWNrID0gJGdyb3VwLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcblxuICAgICRlbC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuXG4gICAgJGJsb2NrLmh0bWwoJGJsb2NrLmRhdGEoJ2JzLnZhbGlkYXRvci5vcmlnaW5hbENvbnRlbnQnKSlcbiAgICAkZ3JvdXAucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZGFuZ2VyIGhhcy1zdWNjZXNzJylcblxuICAgICRncm91cC5oYXNDbGFzcygnaGFzLWZlZWRiYWNrJylcbiAgICAgICYmICRmZWVkYmFjay5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suZXJyb3IpXG4gICAgICAmJiAkZmVlZGJhY2sucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLnN1Y2Nlc3MpXG4gICAgICAmJiBnZXRWYWx1ZSgkZWwpXG4gICAgICAmJiAkZmVlZGJhY2suYWRkQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLnN1Y2Nlc3MpXG4gICAgICAmJiAkZ3JvdXAuYWRkQ2xhc3MoJ2hhcy1zdWNjZXNzJylcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuaGFzRXJyb3JzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGZpZWxkRXJyb3JzKCkge1xuICAgICAgcmV0dXJuICEhKCQodGhpcykuZGF0YSgnYnMudmFsaWRhdG9yLmVycm9ycycpIHx8IFtdKS5sZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gISF0aGlzLiRpbnB1dHMuZmlsdGVyKGZpZWxkRXJyb3JzKS5sZW5ndGhcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuaXNJbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGZpZWxkSW5jb21wbGV0ZSgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldFZhbHVlKCQodGhpcykpXG4gICAgICByZXR1cm4gISh0eXBlb2YgdmFsdWUgPT0gXCJzdHJpbmdcIiA/ICQudHJpbSh2YWx1ZSkgOiB2YWx1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gISF0aGlzLiRpbnB1dHMuZmlsdGVyKCdbcmVxdWlyZWRdJykuZmlsdGVyKGZpZWxkSW5jb21wbGV0ZSkubGVuZ3RoXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICB0aGlzLnZhbGlkYXRlKClcbiAgICBpZiAodGhpcy5pc0luY29tcGxldGUoKSB8fCB0aGlzLmhhc0Vycm9ycygpKSBlLnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUudG9nZ2xlU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmRpc2FibGUpIHJldHVyblxuICAgIHRoaXMuJGJ0bi50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCB0aGlzLmlzSW5jb21wbGV0ZSgpIHx8IHRoaXMuaGFzRXJyb3JzKCkpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmRlZmVyID0gZnVuY3Rpb24gKCRlbCwgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9ICQucHJveHkoY2FsbGJhY2ssIHRoaXMsICRlbClcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kZWxheSkgcmV0dXJuIGNhbGxiYWNrKClcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KCRlbC5kYXRhKCdicy52YWxpZGF0b3IudGltZW91dCcpKVxuICAgICRlbC5kYXRhKCdicy52YWxpZGF0b3IudGltZW91dCcsIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCB0aGlzLm9wdGlvbnMuZGVsYXkpKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcbiAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suZXJyb3IpXG4gICAgICAucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLnN1Y2Nlc3MpXG5cbiAgICB0aGlzLiRpbnB1dHNcbiAgICAgIC5yZW1vdmVEYXRhKFsnYnMudmFsaWRhdG9yLmVycm9ycycsICdicy52YWxpZGF0b3IuZGVmZXJyZWQnXSlcbiAgICAgIC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpXG4gICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgICAgdmFyIHRpbWVvdXQgPSAkdGhpcy5kYXRhKCdicy52YWxpZGF0b3IudGltZW91dCcpXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dCkgJiYgJHRoaXMucmVtb3ZlRGF0YSgnYnMudmFsaWRhdG9yLnRpbWVvdXQnKVxuICAgICAgfSlcblxuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgIHZhciBvcmlnaW5hbENvbnRlbnQgPSAkdGhpcy5kYXRhKCdicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50JylcblxuICAgICAgICAkdGhpc1xuICAgICAgICAgIC5yZW1vdmVEYXRhKCdicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50JylcbiAgICAgICAgICAuaHRtbChvcmlnaW5hbENvbnRlbnQpXG4gICAgICB9KVxuXG4gICAgdGhpcy4kYnRuLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpXG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5oYXMtZXJyb3IsIC5oYXMtZGFuZ2VyLCAuaGFzLXN1Y2Nlc3MnKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yIGhhcy1kYW5nZXIgaGFzLXN1Y2Nlc3MnKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc2V0KClcblxuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5yZW1vdmVBdHRyKCdub3ZhbGlkYXRlJylcbiAgICAgIC5yZW1vdmVEYXRhKCdicy52YWxpZGF0b3InKVxuICAgICAgLm9mZignLmJzLnZhbGlkYXRvcicpXG5cbiAgICB0aGlzLiRpbnB1dHNcbiAgICAgIC5vZmYoJy5icy52YWxpZGF0b3InKVxuXG4gICAgdGhpcy5vcHRpb25zICAgID0gbnVsbFxuICAgIHRoaXMudmFsaWRhdG9ycyA9IG51bGxcbiAgICB0aGlzLiRlbGVtZW50ICAgPSBudWxsXG4gICAgdGhpcy4kYnRuICAgICAgID0gbnVsbFxuICAgIHRoaXMuJGlucHV0cyAgICA9IG51bGxcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBWQUxJREFUT1IgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sIFZhbGlkYXRvci5ERUZBVUxUUywgJHRoaXMuZGF0YSgpLCB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvbilcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMudmFsaWRhdG9yJylcblxuICAgICAgaWYgKCFkYXRhICYmIG9wdGlvbiA9PSAnZGVzdHJveScpIHJldHVyblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy52YWxpZGF0b3InLCAoZGF0YSA9IG5ldyBWYWxpZGF0b3IodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXSgpXG4gICAgfSlcbiAgfVxuXG4gIHZhciBvbGQgPSAkLmZuLnZhbGlkYXRvclxuXG4gICQuZm4udmFsaWRhdG9yICAgICAgICAgICAgID0gUGx1Z2luXG4gICQuZm4udmFsaWRhdG9yLkNvbnN0cnVjdG9yID0gVmFsaWRhdG9yXG5cblxuICAvLyBWQUxJREFUT1IgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi52YWxpZGF0b3Iubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLnZhbGlkYXRvciA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIFZBTElEQVRPUiBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PT09PT1cblxuICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnZm9ybVtkYXRhLXRvZ2dsZT1cInZhbGlkYXRvclwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRmb3JtID0gJCh0aGlzKVxuICAgICAgUGx1Z2luLmNhbGwoJGZvcm0sICRmb3JtLmRhdGEoKSlcbiAgICB9KVxuICB9KVxuXG59KGpRdWVyeSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2pzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLm1pbi5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE3LzA4LzIwMjAgMTQ6MjBcblxuLyohXG4gKiBEYXRlcGlja2VyIGZvciBCb290c3RyYXAgdjEuOC4wIChodHRwczovL2dpdGh1Yi5jb20vdXhzb2x1dGlvbnMvYm9vdHN0cmFwLWRhdGVwaWNrZXIpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlIHYyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMClcbiAqL1xuXG4hZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sYSk6YShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwianF1ZXJ5XCIpOmpRdWVyeSl9KGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYygpe3JldHVybiBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShEYXRlLGFyZ3VtZW50cykpfWZ1bmN0aW9uIGQoKXt2YXIgYT1uZXcgRGF0ZTtyZXR1cm4gYyhhLmdldEZ1bGxZZWFyKCksYS5nZXRNb250aCgpLGEuZ2V0RGF0ZSgpKX1mdW5jdGlvbiBlKGEsYil7cmV0dXJuIGEuZ2V0VVRDRnVsbFllYXIoKT09PWIuZ2V0VVRDRnVsbFllYXIoKSYmYS5nZXRVVENNb250aCgpPT09Yi5nZXRVVENNb250aCgpJiZhLmdldFVUQ0RhdGUoKT09PWIuZ2V0VVRDRGF0ZSgpfWZ1bmN0aW9uIGYoYyxkKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZCE9PWImJmEuZm4uZGF0ZXBpY2tlci5kZXByZWNhdGVkKGQpLHRoaXNbY10uYXBwbHkodGhpcyxhcmd1bWVudHMpfX1mdW5jdGlvbiBnKGEpe3JldHVybiBhJiYhaXNOYU4oYS5nZXRUaW1lKCkpfWZ1bmN0aW9uIGgoYixjKXtmdW5jdGlvbiBkKGEsYil7cmV0dXJuIGIudG9Mb3dlckNhc2UoKX12YXIgZSxmPWEoYikuZGF0YSgpLGc9e30saD1uZXcgUmVnRXhwKFwiXlwiK2MudG9Mb3dlckNhc2UoKStcIihbQS1aXSlcIik7Yz1uZXcgUmVnRXhwKFwiXlwiK2MudG9Mb3dlckNhc2UoKSk7Zm9yKHZhciBpIGluIGYpYy50ZXN0KGkpJiYoZT1pLnJlcGxhY2UoaCxkKSxnW2VdPWZbaV0pO3JldHVybiBnfWZ1bmN0aW9uIGkoYil7dmFyIGM9e307aWYocVtiXXx8KGI9Yi5zcGxpdChcIi1cIilbMF0scVtiXSkpe3ZhciBkPXFbYl07cmV0dXJuIGEuZWFjaChwLGZ1bmN0aW9uKGEsYil7YiBpbiBkJiYoY1tiXT1kW2JdKX0pLGN9fXZhciBqPWZ1bmN0aW9uKCl7dmFyIGI9e2dldDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5zbGljZShhKVswXX0sY29udGFpbnM6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPWEmJmEudmFsdWVPZigpLGM9MCxkPXRoaXMubGVuZ3RoO2M8ZDtjKyspaWYoMDw9dGhpc1tjXS52YWx1ZU9mKCktYiYmdGhpc1tjXS52YWx1ZU9mKCktYjw4NjRlNSlyZXR1cm4gYztyZXR1cm4tMX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3RoaXMuc3BsaWNlKGEsMSl9LHJlcGxhY2U6ZnVuY3Rpb24oYil7YiYmKGEuaXNBcnJheShiKXx8KGI9W2JdKSx0aGlzLmNsZWFyKCksdGhpcy5wdXNoLmFwcGx5KHRoaXMsYikpfSxjbGVhcjpmdW5jdGlvbigpe3RoaXMubGVuZ3RoPTB9LGNvcHk6ZnVuY3Rpb24oKXt2YXIgYT1uZXcgajtyZXR1cm4gYS5yZXBsYWNlKHRoaXMpLGF9fTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1bXTtyZXR1cm4gYy5wdXNoLmFwcGx5KGMsYXJndW1lbnRzKSxhLmV4dGVuZChjLGIpLGN9fSgpLGs9ZnVuY3Rpb24oYixjKXthLmRhdGEoYixcImRhdGVwaWNrZXJcIix0aGlzKSx0aGlzLl9wcm9jZXNzX29wdGlvbnMoYyksdGhpcy5kYXRlcz1uZXcgaix0aGlzLnZpZXdEYXRlPXRoaXMuby5kZWZhdWx0Vmlld0RhdGUsdGhpcy5mb2N1c0RhdGU9bnVsbCx0aGlzLmVsZW1lbnQ9YShiKSx0aGlzLmlzSW5wdXQ9dGhpcy5lbGVtZW50LmlzKFwiaW5wdXRcIiksdGhpcy5pbnB1dEZpZWxkPXRoaXMuaXNJbnB1dD90aGlzLmVsZW1lbnQ6dGhpcy5lbGVtZW50LmZpbmQoXCJpbnB1dFwiKSx0aGlzLmNvbXBvbmVudD0hIXRoaXMuZWxlbWVudC5oYXNDbGFzcyhcImRhdGVcIikmJnRoaXMuZWxlbWVudC5maW5kKFwiLmFkZC1vbiwgLmlucHV0LWdyb3VwLWFkZG9uLCAuYnRuXCIpLHRoaXMuY29tcG9uZW50JiYwPT09dGhpcy5jb21wb25lbnQubGVuZ3RoJiYodGhpcy5jb21wb25lbnQ9ITEpLHRoaXMuaXNJbmxpbmU9IXRoaXMuY29tcG9uZW50JiZ0aGlzLmVsZW1lbnQuaXMoXCJkaXZcIiksdGhpcy5waWNrZXI9YShyLnRlbXBsYXRlKSx0aGlzLl9jaGVja190ZW1wbGF0ZSh0aGlzLm8udGVtcGxhdGVzLmxlZnRBcnJvdykmJnRoaXMucGlja2VyLmZpbmQoXCIucHJldlwiKS5odG1sKHRoaXMuby50ZW1wbGF0ZXMubGVmdEFycm93KSx0aGlzLl9jaGVja190ZW1wbGF0ZSh0aGlzLm8udGVtcGxhdGVzLnJpZ2h0QXJyb3cpJiZ0aGlzLnBpY2tlci5maW5kKFwiLm5leHRcIikuaHRtbCh0aGlzLm8udGVtcGxhdGVzLnJpZ2h0QXJyb3cpLHRoaXMuX2J1aWxkRXZlbnRzKCksdGhpcy5fYXR0YWNoRXZlbnRzKCksdGhpcy5pc0lubGluZT90aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItaW5saW5lXCIpLmFwcGVuZFRvKHRoaXMuZWxlbWVudCk6dGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLWRyb3Bkb3duIGRyb3Bkb3duLW1lbnVcIiksdGhpcy5vLnJ0bCYmdGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLXJ0bFwiKSx0aGlzLm8uY2FsZW5kYXJXZWVrcyYmdGhpcy5waWNrZXIuZmluZChcIi5kYXRlcGlja2VyLWRheXMgLmRhdGVwaWNrZXItc3dpdGNoLCB0aGVhZCAuZGF0ZXBpY2tlci10aXRsZSwgdGZvb3QgLnRvZGF5LCB0Zm9vdCAuY2xlYXJcIikuYXR0cihcImNvbHNwYW5cIixmdW5jdGlvbihhLGIpe3JldHVybiBOdW1iZXIoYikrMX0pLHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7c3RhcnREYXRlOnRoaXMuX28uc3RhcnREYXRlLGVuZERhdGU6dGhpcy5fby5lbmREYXRlLGRheXNPZldlZWtEaXNhYmxlZDp0aGlzLm8uZGF5c09mV2Vla0Rpc2FibGVkLGRheXNPZldlZWtIaWdobGlnaHRlZDp0aGlzLm8uZGF5c09mV2Vla0hpZ2hsaWdodGVkLGRhdGVzRGlzYWJsZWQ6dGhpcy5vLmRhdGVzRGlzYWJsZWR9KSx0aGlzLl9hbGxvd191cGRhdGU9ITEsdGhpcy5zZXRWaWV3TW9kZSh0aGlzLm8uc3RhcnRWaWV3KSx0aGlzLl9hbGxvd191cGRhdGU9ITAsdGhpcy5maWxsRG93KCksdGhpcy5maWxsTW9udGhzKCksdGhpcy51cGRhdGUoKSx0aGlzLmlzSW5saW5lJiZ0aGlzLnNob3coKX07ay5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmssX3Jlc29sdmVWaWV3TmFtZTpmdW5jdGlvbihiKXtyZXR1cm4gYS5lYWNoKHIudmlld01vZGVzLGZ1bmN0aW9uKGMsZCl7aWYoYj09PWN8fGEuaW5BcnJheShiLGQubmFtZXMpIT09LTEpcmV0dXJuIGI9YywhMX0pLGJ9LF9yZXNvbHZlRGF5c09mV2VlazpmdW5jdGlvbihiKXtyZXR1cm4gYS5pc0FycmF5KGIpfHwoYj1iLnNwbGl0KC9bLFxcc10qLykpLGEubWFwKGIsTnVtYmVyKX0sX2NoZWNrX3RlbXBsYXRlOmZ1bmN0aW9uKGMpe3RyeXtpZihjPT09Ynx8XCJcIj09PWMpcmV0dXJuITE7aWYoKGMubWF0Y2goL1s8Pl0vZyl8fFtdKS5sZW5ndGg8PTApcmV0dXJuITA7dmFyIGQ9YShjKTtyZXR1cm4gZC5sZW5ndGg+MH1jYXRjaChhKXtyZXR1cm4hMX19LF9wcm9jZXNzX29wdGlvbnM6ZnVuY3Rpb24oYil7dGhpcy5fbz1hLmV4dGVuZCh7fSx0aGlzLl9vLGIpO3ZhciBlPXRoaXMubz1hLmV4dGVuZCh7fSx0aGlzLl9vKSxmPWUubGFuZ3VhZ2U7cVtmXXx8KGY9Zi5zcGxpdChcIi1cIilbMF0scVtmXXx8KGY9by5sYW5ndWFnZSkpLGUubGFuZ3VhZ2U9ZixlLnN0YXJ0Vmlldz10aGlzLl9yZXNvbHZlVmlld05hbWUoZS5zdGFydFZpZXcpLGUubWluVmlld01vZGU9dGhpcy5fcmVzb2x2ZVZpZXdOYW1lKGUubWluVmlld01vZGUpLGUubWF4Vmlld01vZGU9dGhpcy5fcmVzb2x2ZVZpZXdOYW1lKGUubWF4Vmlld01vZGUpLGUuc3RhcnRWaWV3PU1hdGgubWF4KHRoaXMuby5taW5WaWV3TW9kZSxNYXRoLm1pbih0aGlzLm8ubWF4Vmlld01vZGUsZS5zdGFydFZpZXcpKSxlLm11bHRpZGF0ZSE9PSEwJiYoZS5tdWx0aWRhdGU9TnVtYmVyKGUubXVsdGlkYXRlKXx8ITEsZS5tdWx0aWRhdGUhPT0hMSYmKGUubXVsdGlkYXRlPU1hdGgubWF4KDAsZS5tdWx0aWRhdGUpKSksZS5tdWx0aWRhdGVTZXBhcmF0b3I9U3RyaW5nKGUubXVsdGlkYXRlU2VwYXJhdG9yKSxlLndlZWtTdGFydCU9NyxlLndlZWtFbmQ9KGUud2Vla1N0YXJ0KzYpJTc7dmFyIGc9ci5wYXJzZUZvcm1hdChlLmZvcm1hdCk7ZS5zdGFydERhdGUhPT0tKDEvMCkmJihlLnN0YXJ0RGF0ZT9lLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIERhdGU/ZS5zdGFydERhdGU9dGhpcy5fbG9jYWxfdG9fdXRjKHRoaXMuX3plcm9fdGltZShlLnN0YXJ0RGF0ZSkpOmUuc3RhcnREYXRlPXIucGFyc2VEYXRlKGUuc3RhcnREYXRlLGcsZS5sYW5ndWFnZSxlLmFzc3VtZU5lYXJieVllYXIpOmUuc3RhcnREYXRlPS0oMS8wKSksZS5lbmREYXRlIT09MS8wJiYoZS5lbmREYXRlP2UuZW5kRGF0ZSBpbnN0YW5jZW9mIERhdGU/ZS5lbmREYXRlPXRoaXMuX2xvY2FsX3RvX3V0Yyh0aGlzLl96ZXJvX3RpbWUoZS5lbmREYXRlKSk6ZS5lbmREYXRlPXIucGFyc2VEYXRlKGUuZW5kRGF0ZSxnLGUubGFuZ3VhZ2UsZS5hc3N1bWVOZWFyYnlZZWFyKTplLmVuZERhdGU9MS8wKSxlLmRheXNPZldlZWtEaXNhYmxlZD10aGlzLl9yZXNvbHZlRGF5c09mV2VlayhlLmRheXNPZldlZWtEaXNhYmxlZHx8W10pLGUuZGF5c09mV2Vla0hpZ2hsaWdodGVkPXRoaXMuX3Jlc29sdmVEYXlzT2ZXZWVrKGUuZGF5c09mV2Vla0hpZ2hsaWdodGVkfHxbXSksZS5kYXRlc0Rpc2FibGVkPWUuZGF0ZXNEaXNhYmxlZHx8W10sYS5pc0FycmF5KGUuZGF0ZXNEaXNhYmxlZCl8fChlLmRhdGVzRGlzYWJsZWQ9ZS5kYXRlc0Rpc2FibGVkLnNwbGl0KFwiLFwiKSksZS5kYXRlc0Rpc2FibGVkPWEubWFwKGUuZGF0ZXNEaXNhYmxlZCxmdW5jdGlvbihhKXtyZXR1cm4gci5wYXJzZURhdGUoYSxnLGUubGFuZ3VhZ2UsZS5hc3N1bWVOZWFyYnlZZWFyKX0pO3ZhciBoPVN0cmluZyhlLm9yaWVudGF0aW9uKS50b0xvd2VyQ2FzZSgpLnNwbGl0KC9cXHMrL2cpLGk9ZS5vcmllbnRhdGlvbi50b0xvd2VyQ2FzZSgpO2lmKGg9YS5ncmVwKGgsZnVuY3Rpb24oYSl7cmV0dXJuL15hdXRvfGxlZnR8cmlnaHR8dG9wfGJvdHRvbSQvLnRlc3QoYSl9KSxlLm9yaWVudGF0aW9uPXt4OlwiYXV0b1wiLHk6XCJhdXRvXCJ9LGkmJlwiYXV0b1wiIT09aSlpZigxPT09aC5sZW5ndGgpc3dpdGNoKGhbMF0pe2Nhc2VcInRvcFwiOmNhc2VcImJvdHRvbVwiOmUub3JpZW50YXRpb24ueT1oWzBdO2JyZWFrO2Nhc2VcImxlZnRcIjpjYXNlXCJyaWdodFwiOmUub3JpZW50YXRpb24ueD1oWzBdfWVsc2UgaT1hLmdyZXAoaCxmdW5jdGlvbihhKXtyZXR1cm4vXmxlZnR8cmlnaHQkLy50ZXN0KGEpfSksZS5vcmllbnRhdGlvbi54PWlbMF18fFwiYXV0b1wiLGk9YS5ncmVwKGgsZnVuY3Rpb24oYSl7cmV0dXJuL150b3B8Ym90dG9tJC8udGVzdChhKX0pLGUub3JpZW50YXRpb24ueT1pWzBdfHxcImF1dG9cIjtlbHNlO2lmKGUuZGVmYXVsdFZpZXdEYXRlIGluc3RhbmNlb2YgRGF0ZXx8XCJzdHJpbmdcIj09dHlwZW9mIGUuZGVmYXVsdFZpZXdEYXRlKWUuZGVmYXVsdFZpZXdEYXRlPXIucGFyc2VEYXRlKGUuZGVmYXVsdFZpZXdEYXRlLGcsZS5sYW5ndWFnZSxlLmFzc3VtZU5lYXJieVllYXIpO2Vsc2UgaWYoZS5kZWZhdWx0Vmlld0RhdGUpe3ZhciBqPWUuZGVmYXVsdFZpZXdEYXRlLnllYXJ8fChuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKSxrPWUuZGVmYXVsdFZpZXdEYXRlLm1vbnRofHwwLGw9ZS5kZWZhdWx0Vmlld0RhdGUuZGF5fHwxO2UuZGVmYXVsdFZpZXdEYXRlPWMoaixrLGwpfWVsc2UgZS5kZWZhdWx0Vmlld0RhdGU9ZCgpfSxfZXZlbnRzOltdLF9zZWNvbmRhcnlFdmVudHM6W10sX2FwcGx5RXZlbnRzOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkLGUsZj0wO2Y8YS5sZW5ndGg7ZisrKWM9YVtmXVswXSwyPT09YVtmXS5sZW5ndGg/KGQ9YixlPWFbZl1bMV0pOjM9PT1hW2ZdLmxlbmd0aCYmKGQ9YVtmXVsxXSxlPWFbZl1bMl0pLGMub24oZSxkKX0sX3VuYXBwbHlFdmVudHM6ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQsZSxmPTA7ZjxhLmxlbmd0aDtmKyspYz1hW2ZdWzBdLDI9PT1hW2ZdLmxlbmd0aD8oZT1iLGQ9YVtmXVsxXSk6Mz09PWFbZl0ubGVuZ3RoJiYoZT1hW2ZdWzFdLGQ9YVtmXVsyXSksYy5vZmYoZCxlKX0sX2J1aWxkRXZlbnRzOmZ1bmN0aW9uKCl7dmFyIGI9e2tleXVwOmEucHJveHkoZnVuY3Rpb24oYil7YS5pbkFycmF5KGIua2V5Q29kZSxbMjcsMzcsMzksMzgsNDAsMzIsMTMsOV0pPT09LTEmJnRoaXMudXBkYXRlKCl9LHRoaXMpLGtleWRvd246YS5wcm94eSh0aGlzLmtleWRvd24sdGhpcykscGFzdGU6YS5wcm94eSh0aGlzLnBhc3RlLHRoaXMpfTt0aGlzLm8uc2hvd09uRm9jdXM9PT0hMCYmKGIuZm9jdXM9YS5wcm94eSh0aGlzLnNob3csdGhpcykpLHRoaXMuaXNJbnB1dD90aGlzLl9ldmVudHM9W1t0aGlzLmVsZW1lbnQsYl1dOnRoaXMuY29tcG9uZW50JiZ0aGlzLmlucHV0RmllbGQubGVuZ3RoP3RoaXMuX2V2ZW50cz1bW3RoaXMuaW5wdXRGaWVsZCxiXSxbdGhpcy5jb21wb25lbnQse2NsaWNrOmEucHJveHkodGhpcy5zaG93LHRoaXMpfV1dOnRoaXMuX2V2ZW50cz1bW3RoaXMuZWxlbWVudCx7Y2xpY2s6YS5wcm94eSh0aGlzLnNob3csdGhpcyksa2V5ZG93bjphLnByb3h5KHRoaXMua2V5ZG93bix0aGlzKX1dXSx0aGlzLl9ldmVudHMucHVzaChbdGhpcy5lbGVtZW50LFwiKlwiLHtibHVyOmEucHJveHkoZnVuY3Rpb24oYSl7dGhpcy5fZm9jdXNlZF9mcm9tPWEudGFyZ2V0fSx0aGlzKX1dLFt0aGlzLmVsZW1lbnQse2JsdXI6YS5wcm94eShmdW5jdGlvbihhKXt0aGlzLl9mb2N1c2VkX2Zyb209YS50YXJnZXR9LHRoaXMpfV0pLHRoaXMuby5pbW1lZGlhdGVVcGRhdGVzJiZ0aGlzLl9ldmVudHMucHVzaChbdGhpcy5lbGVtZW50LHtcImNoYW5nZVllYXIgY2hhbmdlTW9udGhcIjphLnByb3h5KGZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlKGEuZGF0ZSl9LHRoaXMpfV0pLHRoaXMuX3NlY29uZGFyeUV2ZW50cz1bW3RoaXMucGlja2VyLHtjbGljazphLnByb3h5KHRoaXMuY2xpY2ssdGhpcyl9XSxbdGhpcy5waWNrZXIsXCIucHJldiwgLm5leHRcIix7Y2xpY2s6YS5wcm94eSh0aGlzLm5hdkFycm93c0NsaWNrLHRoaXMpfV0sW3RoaXMucGlja2VyLFwiLmRheTpub3QoLmRpc2FibGVkKVwiLHtjbGljazphLnByb3h5KHRoaXMuZGF5Q2VsbENsaWNrLHRoaXMpfV0sW2Eod2luZG93KSx7cmVzaXplOmEucHJveHkodGhpcy5wbGFjZSx0aGlzKX1dLFthKGRvY3VtZW50KSx7XCJtb3VzZWRvd24gdG91Y2hzdGFydFwiOmEucHJveHkoZnVuY3Rpb24oYSl7dGhpcy5lbGVtZW50LmlzKGEudGFyZ2V0KXx8dGhpcy5lbGVtZW50LmZpbmQoYS50YXJnZXQpLmxlbmd0aHx8dGhpcy5waWNrZXIuaXMoYS50YXJnZXQpfHx0aGlzLnBpY2tlci5maW5kKGEudGFyZ2V0KS5sZW5ndGh8fHRoaXMuaXNJbmxpbmV8fHRoaXMuaGlkZSgpfSx0aGlzKX1dXX0sX2F0dGFjaEV2ZW50czpmdW5jdGlvbigpe3RoaXMuX2RldGFjaEV2ZW50cygpLHRoaXMuX2FwcGx5RXZlbnRzKHRoaXMuX2V2ZW50cyl9LF9kZXRhY2hFdmVudHM6ZnVuY3Rpb24oKXt0aGlzLl91bmFwcGx5RXZlbnRzKHRoaXMuX2V2ZW50cyl9LF9hdHRhY2hTZWNvbmRhcnlFdmVudHM6ZnVuY3Rpb24oKXt0aGlzLl9kZXRhY2hTZWNvbmRhcnlFdmVudHMoKSx0aGlzLl9hcHBseUV2ZW50cyh0aGlzLl9zZWNvbmRhcnlFdmVudHMpfSxfZGV0YWNoU2Vjb25kYXJ5RXZlbnRzOmZ1bmN0aW9uKCl7dGhpcy5fdW5hcHBseUV2ZW50cyh0aGlzLl9zZWNvbmRhcnlFdmVudHMpfSxfdHJpZ2dlcjpmdW5jdGlvbihiLGMpe3ZhciBkPWN8fHRoaXMuZGF0ZXMuZ2V0KC0xKSxlPXRoaXMuX3V0Y190b19sb2NhbChkKTt0aGlzLmVsZW1lbnQudHJpZ2dlcih7dHlwZTpiLGRhdGU6ZSx2aWV3TW9kZTp0aGlzLnZpZXdNb2RlLGRhdGVzOmEubWFwKHRoaXMuZGF0ZXMsdGhpcy5fdXRjX3RvX2xvY2FsKSxmb3JtYXQ6YS5wcm94eShmdW5jdGlvbihhLGIpezA9PT1hcmd1bWVudHMubGVuZ3RoPyhhPXRoaXMuZGF0ZXMubGVuZ3RoLTEsYj10aGlzLm8uZm9ybWF0KTpcInN0cmluZ1wiPT10eXBlb2YgYSYmKGI9YSxhPXRoaXMuZGF0ZXMubGVuZ3RoLTEpLGI9Ynx8dGhpcy5vLmZvcm1hdDt2YXIgYz10aGlzLmRhdGVzLmdldChhKTtyZXR1cm4gci5mb3JtYXREYXRlKGMsYix0aGlzLm8ubGFuZ3VhZ2UpfSx0aGlzKX0pfSxzaG93OmZ1bmN0aW9uKCl7aWYoISh0aGlzLmlucHV0RmllbGQucHJvcChcImRpc2FibGVkXCIpfHx0aGlzLmlucHV0RmllbGQucHJvcChcInJlYWRvbmx5XCIpJiZ0aGlzLm8uZW5hYmxlT25SZWFkb25seT09PSExKSlyZXR1cm4gdGhpcy5pc0lubGluZXx8dGhpcy5waWNrZXIuYXBwZW5kVG8odGhpcy5vLmNvbnRhaW5lciksdGhpcy5wbGFjZSgpLHRoaXMucGlja2VyLnNob3coKSx0aGlzLl9hdHRhY2hTZWNvbmRhcnlFdmVudHMoKSx0aGlzLl90cmlnZ2VyKFwic2hvd1wiKSwod2luZG93Lm5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzfHxcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQpJiZ0aGlzLm8uZGlzYWJsZVRvdWNoS2V5Ym9hcmQmJmEodGhpcy5lbGVtZW50KS5ibHVyKCksdGhpc30saGlkZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmlzSW5saW5lfHwhdGhpcy5waWNrZXIuaXMoXCI6dmlzaWJsZVwiKT90aGlzOih0aGlzLmZvY3VzRGF0ZT1udWxsLHRoaXMucGlja2VyLmhpZGUoKS5kZXRhY2goKSx0aGlzLl9kZXRhY2hTZWNvbmRhcnlFdmVudHMoKSx0aGlzLnNldFZpZXdNb2RlKHRoaXMuby5zdGFydFZpZXcpLHRoaXMuby5mb3JjZVBhcnNlJiZ0aGlzLmlucHV0RmllbGQudmFsKCkmJnRoaXMuc2V0VmFsdWUoKSx0aGlzLl90cmlnZ2VyKFwiaGlkZVwiKSx0aGlzKX0sZGVzdHJveTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmhpZGUoKSx0aGlzLl9kZXRhY2hFdmVudHMoKSx0aGlzLl9kZXRhY2hTZWNvbmRhcnlFdmVudHMoKSx0aGlzLnBpY2tlci5yZW1vdmUoKSxkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlcGlja2VyLHRoaXMuaXNJbnB1dHx8ZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZSx0aGlzfSxwYXN0ZTpmdW5jdGlvbihiKXt2YXIgYztpZihiLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YSYmYi5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEudHlwZXMmJmEuaW5BcnJheShcInRleHQvcGxhaW5cIixiLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YS50eXBlcykhPT0tMSljPWIub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO2Vsc2V7aWYoIXdpbmRvdy5jbGlwYm9hcmREYXRhKXJldHVybjtjPXdpbmRvdy5jbGlwYm9hcmREYXRhLmdldERhdGEoXCJUZXh0XCIpfXRoaXMuc2V0RGF0ZShjKSx0aGlzLnVwZGF0ZSgpLGIucHJldmVudERlZmF1bHQoKX0sX3V0Y190b19sb2NhbDpmdW5jdGlvbihhKXtpZighYSlyZXR1cm4gYTt2YXIgYj1uZXcgRGF0ZShhLmdldFRpbWUoKSs2ZTQqYS5nZXRUaW1lem9uZU9mZnNldCgpKTtyZXR1cm4gYi5nZXRUaW1lem9uZU9mZnNldCgpIT09YS5nZXRUaW1lem9uZU9mZnNldCgpJiYoYj1uZXcgRGF0ZShhLmdldFRpbWUoKSs2ZTQqYi5nZXRUaW1lem9uZU9mZnNldCgpKSksYn0sX2xvY2FsX3RvX3V0YzpmdW5jdGlvbihhKXtyZXR1cm4gYSYmbmV3IERhdGUoYS5nZXRUaW1lKCktNmU0KmEuZ2V0VGltZXpvbmVPZmZzZXQoKSl9LF96ZXJvX3RpbWU6ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJm5ldyBEYXRlKGEuZ2V0RnVsbFllYXIoKSxhLmdldE1vbnRoKCksYS5nZXREYXRlKCkpfSxfemVyb191dGNfdGltZTpmdW5jdGlvbihhKXtyZXR1cm4gYSYmYyhhLmdldFVUQ0Z1bGxZZWFyKCksYS5nZXRVVENNb250aCgpLGEuZ2V0VVRDRGF0ZSgpKX0sZ2V0RGF0ZXM6ZnVuY3Rpb24oKXtyZXR1cm4gYS5tYXAodGhpcy5kYXRlcyx0aGlzLl91dGNfdG9fbG9jYWwpfSxnZXRVVENEYXRlczpmdW5jdGlvbigpe3JldHVybiBhLm1hcCh0aGlzLmRhdGVzLGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgRGF0ZShhKX0pfSxnZXREYXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3V0Y190b19sb2NhbCh0aGlzLmdldFVUQ0RhdGUoKSl9LGdldFVUQ0RhdGU6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmRhdGVzLmdldCgtMSk7cmV0dXJuIGEhPT1iP25ldyBEYXRlKGEpOm51bGx9LGNsZWFyRGF0ZXM6ZnVuY3Rpb24oKXt0aGlzLmlucHV0RmllbGQudmFsKFwiXCIpLHRoaXMudXBkYXRlKCksdGhpcy5fdHJpZ2dlcihcImNoYW5nZURhdGVcIiksdGhpcy5vLmF1dG9jbG9zZSYmdGhpcy5oaWRlKCl9LHNldERhdGVzOmZ1bmN0aW9uKCl7dmFyIGI9YS5pc0FycmF5KGFyZ3VtZW50c1swXSk/YXJndW1lbnRzWzBdOmFyZ3VtZW50cztyZXR1cm4gdGhpcy51cGRhdGUuYXBwbHkodGhpcyxiKSx0aGlzLl90cmlnZ2VyKFwiY2hhbmdlRGF0ZVwiKSx0aGlzLnNldFZhbHVlKCksdGhpc30sc2V0VVRDRGF0ZXM6ZnVuY3Rpb24oKXt2YXIgYj1hLmlzQXJyYXkoYXJndW1lbnRzWzBdKT9hcmd1bWVudHNbMF06YXJndW1lbnRzO3JldHVybiB0aGlzLnNldERhdGVzLmFwcGx5KHRoaXMsYS5tYXAoYix0aGlzLl91dGNfdG9fbG9jYWwpKSx0aGlzfSxzZXREYXRlOmYoXCJzZXREYXRlc1wiKSxzZXRVVENEYXRlOmYoXCJzZXRVVENEYXRlc1wiKSxyZW1vdmU6ZihcImRlc3Ryb3lcIixcIk1ldGhvZCBgcmVtb3ZlYCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiAyLjAuIFVzZSBgZGVzdHJveWAgaW5zdGVhZFwiKSxzZXRWYWx1ZTpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZSgpO3JldHVybiB0aGlzLmlucHV0RmllbGQudmFsKGEpLHRoaXN9LGdldEZvcm1hdHRlZERhdGU6ZnVuY3Rpb24oYyl7Yz09PWImJihjPXRoaXMuby5mb3JtYXQpO3ZhciBkPXRoaXMuby5sYW5ndWFnZTtyZXR1cm4gYS5tYXAodGhpcy5kYXRlcyxmdW5jdGlvbihhKXtyZXR1cm4gci5mb3JtYXREYXRlKGEsYyxkKX0pLmpvaW4odGhpcy5vLm11bHRpZGF0ZVNlcGFyYXRvcil9LGdldFN0YXJ0RGF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm8uc3RhcnREYXRlfSxzZXRTdGFydERhdGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7c3RhcnREYXRlOmF9KSx0aGlzLnVwZGF0ZSgpLHRoaXMudXBkYXRlTmF2QXJyb3dzKCksdGhpc30sZ2V0RW5kRGF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm8uZW5kRGF0ZX0sc2V0RW5kRGF0ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fcHJvY2Vzc19vcHRpb25zKHtlbmREYXRlOmF9KSx0aGlzLnVwZGF0ZSgpLHRoaXMudXBkYXRlTmF2QXJyb3dzKCksdGhpc30sc2V0RGF5c09mV2Vla0Rpc2FibGVkOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9wcm9jZXNzX29wdGlvbnMoe2RheXNPZldlZWtEaXNhYmxlZDphfSksdGhpcy51cGRhdGUoKSx0aGlzfSxzZXREYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7ZGF5c09mV2Vla0hpZ2hsaWdodGVkOmF9KSx0aGlzLnVwZGF0ZSgpLHRoaXN9LHNldERhdGVzRGlzYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7ZGF0ZXNEaXNhYmxlZDphfSksdGhpcy51cGRhdGUoKSx0aGlzfSxwbGFjZTpmdW5jdGlvbigpe2lmKHRoaXMuaXNJbmxpbmUpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5waWNrZXIub3V0ZXJXaWR0aCgpLGM9dGhpcy5waWNrZXIub3V0ZXJIZWlnaHQoKSxkPTEwLGU9YSh0aGlzLm8uY29udGFpbmVyKSxmPWUud2lkdGgoKSxnPVwiYm9keVwiPT09dGhpcy5vLmNvbnRhaW5lcj9hKGRvY3VtZW50KS5zY3JvbGxUb3AoKTplLnNjcm9sbFRvcCgpLGg9ZS5vZmZzZXQoKSxpPVswXTt0aGlzLmVsZW1lbnQucGFyZW50cygpLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLmNzcyhcInotaW5kZXhcIik7XCJhdXRvXCIhPT1iJiYwIT09TnVtYmVyKGIpJiZpLnB1c2goTnVtYmVyKGIpKX0pO3ZhciBqPU1hdGgubWF4LmFwcGx5KE1hdGgsaSkrdGhpcy5vLnpJbmRleE9mZnNldCxrPXRoaXMuY29tcG9uZW50P3RoaXMuY29tcG9uZW50LnBhcmVudCgpLm9mZnNldCgpOnRoaXMuZWxlbWVudC5vZmZzZXQoKSxsPXRoaXMuY29tcG9uZW50P3RoaXMuY29tcG9uZW50Lm91dGVySGVpZ2h0KCEwKTp0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoITEpLG09dGhpcy5jb21wb25lbnQ/dGhpcy5jb21wb25lbnQub3V0ZXJXaWR0aCghMCk6dGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoITEpLG49ay5sZWZ0LWgubGVmdCxvPWsudG9wLWgudG9wO1wiYm9keVwiIT09dGhpcy5vLmNvbnRhaW5lciYmKG8rPWcpLHRoaXMucGlja2VyLnJlbW92ZUNsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtdG9wIGRhdGVwaWNrZXItb3JpZW50LWJvdHRvbSBkYXRlcGlja2VyLW9yaWVudC1yaWdodCBkYXRlcGlja2VyLW9yaWVudC1sZWZ0XCIpLFwiYXV0b1wiIT09dGhpcy5vLm9yaWVudGF0aW9uLng/KHRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtXCIrdGhpcy5vLm9yaWVudGF0aW9uLngpLFwicmlnaHRcIj09PXRoaXMuby5vcmllbnRhdGlvbi54JiYobi09Yi1tKSk6ay5sZWZ0PDA/KHRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtbGVmdFwiKSxuLT1rLmxlZnQtZCk6bitiPmY/KHRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtcmlnaHRcIiksbis9bS1iKTp0aGlzLm8ucnRsP3RoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtcmlnaHRcIik6dGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC1sZWZ0XCIpO3ZhciBwLHE9dGhpcy5vLm9yaWVudGF0aW9uLnk7aWYoXCJhdXRvXCI9PT1xJiYocD0tZytvLWMscT1wPDA/XCJib3R0b21cIjpcInRvcFwiKSx0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItb3JpZW50LVwiK3EpLFwidG9wXCI9PT1xP28tPWMrcGFyc2VJbnQodGhpcy5waWNrZXIuY3NzKFwicGFkZGluZy10b3BcIikpOm8rPWwsdGhpcy5vLnJ0bCl7dmFyIHI9Zi0obittKTt0aGlzLnBpY2tlci5jc3Moe3RvcDpvLHJpZ2h0OnIsekluZGV4Omp9KX1lbHNlIHRoaXMucGlja2VyLmNzcyh7dG9wOm8sbGVmdDpuLHpJbmRleDpqfSk7cmV0dXJuIHRoaXN9LF9hbGxvd191cGRhdGU6ITAsdXBkYXRlOmZ1bmN0aW9uKCl7aWYoIXRoaXMuX2FsbG93X3VwZGF0ZSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLmRhdGVzLmNvcHkoKSxjPVtdLGQ9ITE7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGEuZWFjaChhcmd1bWVudHMsYS5wcm94eShmdW5jdGlvbihhLGIpe2IgaW5zdGFuY2VvZiBEYXRlJiYoYj10aGlzLl9sb2NhbF90b191dGMoYikpLGMucHVzaChiKX0sdGhpcykpLGQ9ITApOihjPXRoaXMuaXNJbnB1dD90aGlzLmVsZW1lbnQudmFsKCk6dGhpcy5lbGVtZW50LmRhdGEoXCJkYXRlXCIpfHx0aGlzLmlucHV0RmllbGQudmFsKCksYz1jJiZ0aGlzLm8ubXVsdGlkYXRlP2Muc3BsaXQodGhpcy5vLm11bHRpZGF0ZVNlcGFyYXRvcik6W2NdLGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGUpLGM9YS5tYXAoYyxhLnByb3h5KGZ1bmN0aW9uKGEpe3JldHVybiByLnBhcnNlRGF0ZShhLHRoaXMuby5mb3JtYXQsdGhpcy5vLmxhbmd1YWdlLHRoaXMuby5hc3N1bWVOZWFyYnlZZWFyKX0sdGhpcykpLGM9YS5ncmVwKGMsYS5wcm94eShmdW5jdGlvbihhKXtyZXR1cm4hdGhpcy5kYXRlV2l0aGluUmFuZ2UoYSl8fCFhfSx0aGlzKSwhMCksdGhpcy5kYXRlcy5yZXBsYWNlKGMpLHRoaXMuby51cGRhdGVWaWV3RGF0ZSYmKHRoaXMuZGF0ZXMubGVuZ3RoP3RoaXMudmlld0RhdGU9bmV3IERhdGUodGhpcy5kYXRlcy5nZXQoLTEpKTp0aGlzLnZpZXdEYXRlPHRoaXMuby5zdGFydERhdGU/dGhpcy52aWV3RGF0ZT1uZXcgRGF0ZSh0aGlzLm8uc3RhcnREYXRlKTp0aGlzLnZpZXdEYXRlPnRoaXMuby5lbmREYXRlP3RoaXMudmlld0RhdGU9bmV3IERhdGUodGhpcy5vLmVuZERhdGUpOnRoaXMudmlld0RhdGU9dGhpcy5vLmRlZmF1bHRWaWV3RGF0ZSksZD8odGhpcy5zZXRWYWx1ZSgpLHRoaXMuZWxlbWVudC5jaGFuZ2UoKSk6dGhpcy5kYXRlcy5sZW5ndGgmJlN0cmluZyhiKSE9PVN0cmluZyh0aGlzLmRhdGVzKSYmZCYmKHRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VEYXRlXCIpLHRoaXMuZWxlbWVudC5jaGFuZ2UoKSksIXRoaXMuZGF0ZXMubGVuZ3RoJiZiLmxlbmd0aCYmKHRoaXMuX3RyaWdnZXIoXCJjbGVhckRhdGVcIiksdGhpcy5lbGVtZW50LmNoYW5nZSgpKSx0aGlzLmZpbGwoKSx0aGlzfSxmaWxsRG93OmZ1bmN0aW9uKCl7aWYodGhpcy5vLnNob3dXZWVrRGF5cyl7dmFyIGI9dGhpcy5vLndlZWtTdGFydCxjPVwiPHRyPlwiO2Zvcih0aGlzLm8uY2FsZW5kYXJXZWVrcyYmKGMrPSc8dGggY2xhc3M9XCJjd1wiPiYjMTYwOzwvdGg+Jyk7Yjx0aGlzLm8ud2Vla1N0YXJ0Kzc7KWMrPSc8dGggY2xhc3M9XCJkb3cnLGEuaW5BcnJheShiLHRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQpIT09LTEmJihjKz1cIiBkaXNhYmxlZFwiKSxjKz0nXCI+JytxW3RoaXMuby5sYW5ndWFnZV0uZGF5c01pbltiKyslN10rXCI8L3RoPlwiO2MrPVwiPC90cj5cIix0aGlzLnBpY2tlci5maW5kKFwiLmRhdGVwaWNrZXItZGF5cyB0aGVhZFwiKS5hcHBlbmQoYyl9fSxmaWxsTW9udGhzOmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9dGhpcy5fdXRjX3RvX2xvY2FsKHRoaXMudmlld0RhdGUpLGM9XCJcIixkPTA7ZDwxMjtkKyspYT1iJiZiLmdldE1vbnRoKCk9PT1kP1wiIGZvY3VzZWRcIjpcIlwiLGMrPSc8c3BhbiBjbGFzcz1cIm1vbnRoJythKydcIj4nK3FbdGhpcy5vLmxhbmd1YWdlXS5tb250aHNTaG9ydFtkXStcIjwvc3Bhbj5cIjt0aGlzLnBpY2tlci5maW5kKFwiLmRhdGVwaWNrZXItbW9udGhzIHRkXCIpLmh0bWwoYyl9LHNldFJhbmdlOmZ1bmN0aW9uKGIpe2ImJmIubGVuZ3RoP3RoaXMucmFuZ2U9YS5tYXAoYixmdW5jdGlvbihhKXtyZXR1cm4gYS52YWx1ZU9mKCl9KTpkZWxldGUgdGhpcy5yYW5nZSx0aGlzLmZpbGwoKX0sZ2V0Q2xhc3NOYW1lczpmdW5jdGlvbihiKXt2YXIgYz1bXSxmPXRoaXMudmlld0RhdGUuZ2V0VVRDRnVsbFllYXIoKSxnPXRoaXMudmlld0RhdGUuZ2V0VVRDTW9udGgoKSxoPWQoKTtyZXR1cm4gYi5nZXRVVENGdWxsWWVhcigpPGZ8fGIuZ2V0VVRDRnVsbFllYXIoKT09PWYmJmIuZ2V0VVRDTW9udGgoKTxnP2MucHVzaChcIm9sZFwiKTooYi5nZXRVVENGdWxsWWVhcigpPmZ8fGIuZ2V0VVRDRnVsbFllYXIoKT09PWYmJmIuZ2V0VVRDTW9udGgoKT5nKSYmYy5wdXNoKFwibmV3XCIpLHRoaXMuZm9jdXNEYXRlJiZiLnZhbHVlT2YoKT09PXRoaXMuZm9jdXNEYXRlLnZhbHVlT2YoKSYmYy5wdXNoKFwiZm9jdXNlZFwiKSx0aGlzLm8udG9kYXlIaWdobGlnaHQmJmUoYixoKSYmYy5wdXNoKFwidG9kYXlcIiksdGhpcy5kYXRlcy5jb250YWlucyhiKSE9PS0xJiZjLnB1c2goXCJhY3RpdmVcIiksdGhpcy5kYXRlV2l0aGluUmFuZ2UoYil8fGMucHVzaChcImRpc2FibGVkXCIpLHRoaXMuZGF0ZUlzRGlzYWJsZWQoYikmJmMucHVzaChcImRpc2FibGVkXCIsXCJkaXNhYmxlZC1kYXRlXCIpLGEuaW5BcnJheShiLmdldFVUQ0RheSgpLHRoaXMuby5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQpIT09LTEmJmMucHVzaChcImhpZ2hsaWdodGVkXCIpLHRoaXMucmFuZ2UmJihiPnRoaXMucmFuZ2VbMF0mJmI8dGhpcy5yYW5nZVt0aGlzLnJhbmdlLmxlbmd0aC0xXSYmYy5wdXNoKFwicmFuZ2VcIiksYS5pbkFycmF5KGIudmFsdWVPZigpLHRoaXMucmFuZ2UpIT09LTEmJmMucHVzaChcInNlbGVjdGVkXCIpLGIudmFsdWVPZigpPT09dGhpcy5yYW5nZVswXSYmYy5wdXNoKFwicmFuZ2Utc3RhcnRcIiksYi52YWx1ZU9mKCk9PT10aGlzLnJhbmdlW3RoaXMucmFuZ2UubGVuZ3RoLTFdJiZjLnB1c2goXCJyYW5nZS1lbmRcIikpLGN9LF9maWxsX3llYXJzVmlldzpmdW5jdGlvbihjLGQsZSxmLGcsaCxpKXtmb3IodmFyIGosayxsLG09XCJcIixuPWUvMTAsbz10aGlzLnBpY2tlci5maW5kKGMpLHA9TWF0aC5mbG9vcihmL2UpKmUscT1wKzkqbixyPU1hdGguZmxvb3IodGhpcy52aWV3RGF0ZS5nZXRGdWxsWWVhcigpL24pKm4scz1hLm1hcCh0aGlzLmRhdGVzLGZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLmZsb29yKGEuZ2V0VVRDRnVsbFllYXIoKS9uKSpufSksdD1wLW47dDw9cStuO3QrPW4paj1bZF0saz1udWxsLHQ9PT1wLW4/ai5wdXNoKFwib2xkXCIpOnQ9PT1xK24mJmoucHVzaChcIm5ld1wiKSxhLmluQXJyYXkodCxzKSE9PS0xJiZqLnB1c2goXCJhY3RpdmVcIiksKHQ8Z3x8dD5oKSYmai5wdXNoKFwiZGlzYWJsZWRcIiksdD09PXImJmoucHVzaChcImZvY3VzZWRcIiksaSE9PWEubm9vcCYmKGw9aShuZXcgRGF0ZSh0LDAsMSkpLGw9PT1iP2w9e306XCJib29sZWFuXCI9PXR5cGVvZiBsP2w9e2VuYWJsZWQ6bH06XCJzdHJpbmdcIj09dHlwZW9mIGwmJihsPXtjbGFzc2VzOmx9KSxsLmVuYWJsZWQ9PT0hMSYmai5wdXNoKFwiZGlzYWJsZWRcIiksbC5jbGFzc2VzJiYoaj1qLmNvbmNhdChsLmNsYXNzZXMuc3BsaXQoL1xccysvKSkpLGwudG9vbHRpcCYmKGs9bC50b29sdGlwKSksbSs9JzxzcGFuIGNsYXNzPVwiJytqLmpvaW4oXCIgXCIpKydcIicrKGs/JyB0aXRsZT1cIicraysnXCInOlwiXCIpK1wiPlwiK3QrXCI8L3NwYW4+XCI7by5maW5kKFwiLmRhdGVwaWNrZXItc3dpdGNoXCIpLnRleHQocCtcIi1cIitxKSxvLmZpbmQoXCJ0ZFwiKS5odG1sKG0pfSxmaWxsOmZ1bmN0aW9uKCl7dmFyIGQsZSxmPW5ldyBEYXRlKHRoaXMudmlld0RhdGUpLGc9Zi5nZXRVVENGdWxsWWVhcigpLGg9Zi5nZXRVVENNb250aCgpLGk9dGhpcy5vLnN0YXJ0RGF0ZSE9PS0oMS8wKT90aGlzLm8uc3RhcnREYXRlLmdldFVUQ0Z1bGxZZWFyKCk6LSgxLzApLGo9dGhpcy5vLnN0YXJ0RGF0ZSE9PS0oMS8wKT90aGlzLm8uc3RhcnREYXRlLmdldFVUQ01vbnRoKCk6LSgxLzApLGs9dGhpcy5vLmVuZERhdGUhPT0xLzA/dGhpcy5vLmVuZERhdGUuZ2V0VVRDRnVsbFllYXIoKToxLzAsbD10aGlzLm8uZW5kRGF0ZSE9PTEvMD90aGlzLm8uZW5kRGF0ZS5nZXRVVENNb250aCgpOjEvMCxtPXFbdGhpcy5vLmxhbmd1YWdlXS50b2RheXx8cS5lbi50b2RheXx8XCJcIixuPXFbdGhpcy5vLmxhbmd1YWdlXS5jbGVhcnx8cS5lbi5jbGVhcnx8XCJcIixvPXFbdGhpcy5vLmxhbmd1YWdlXS50aXRsZUZvcm1hdHx8cS5lbi50aXRsZUZvcm1hdDtpZighaXNOYU4oZykmJiFpc05hTihoKSl7dGhpcy5waWNrZXIuZmluZChcIi5kYXRlcGlja2VyLWRheXMgLmRhdGVwaWNrZXItc3dpdGNoXCIpLnRleHQoci5mb3JtYXREYXRlKGYsbyx0aGlzLm8ubGFuZ3VhZ2UpKSx0aGlzLnBpY2tlci5maW5kKFwidGZvb3QgLnRvZGF5XCIpLnRleHQobSkuY3NzKFwiZGlzcGxheVwiLHRoaXMuby50b2RheUJ0bj09PSEwfHxcImxpbmtlZFwiPT09dGhpcy5vLnRvZGF5QnRuP1widGFibGUtY2VsbFwiOlwibm9uZVwiKSx0aGlzLnBpY2tlci5maW5kKFwidGZvb3QgLmNsZWFyXCIpLnRleHQobikuY3NzKFwiZGlzcGxheVwiLHRoaXMuby5jbGVhckJ0bj09PSEwP1widGFibGUtY2VsbFwiOlwibm9uZVwiKSx0aGlzLnBpY2tlci5maW5kKFwidGhlYWQgLmRhdGVwaWNrZXItdGl0bGVcIikudGV4dCh0aGlzLm8udGl0bGUpLmNzcyhcImRpc3BsYXlcIixcInN0cmluZ1wiPT10eXBlb2YgdGhpcy5vLnRpdGxlJiZcIlwiIT09dGhpcy5vLnRpdGxlP1widGFibGUtY2VsbFwiOlwibm9uZVwiKSx0aGlzLnVwZGF0ZU5hdkFycm93cygpLHRoaXMuZmlsbE1vbnRocygpO3ZhciBwPWMoZyxoLDApLHM9cC5nZXRVVENEYXRlKCk7cC5zZXRVVENEYXRlKHMtKHAuZ2V0VVRDRGF5KCktdGhpcy5vLndlZWtTdGFydCs3KSU3KTt2YXIgdD1uZXcgRGF0ZShwKTtwLmdldFVUQ0Z1bGxZZWFyKCk8MTAwJiZ0LnNldFVUQ0Z1bGxZZWFyKHAuZ2V0VVRDRnVsbFllYXIoKSksdC5zZXRVVENEYXRlKHQuZ2V0VVRDRGF0ZSgpKzQyKSx0PXQudmFsdWVPZigpO2Zvcih2YXIgdSx2LHc9W107cC52YWx1ZU9mKCk8dDspe2lmKHU9cC5nZXRVVENEYXkoKSx1PT09dGhpcy5vLndlZWtTdGFydCYmKHcucHVzaChcIjx0cj5cIiksdGhpcy5vLmNhbGVuZGFyV2Vla3MpKXt2YXIgeD1uZXcgRGF0ZSgrcCsodGhpcy5vLndlZWtTdGFydC11LTcpJTcqODY0ZTUpLHk9bmV3IERhdGUoTnVtYmVyKHgpKygxMS14LmdldFVUQ0RheSgpKSU3Kjg2NGU1KSx6PW5ldyBEYXRlKE51bWJlcih6PWMoeS5nZXRVVENGdWxsWWVhcigpLDAsMSkpKygxMS16LmdldFVUQ0RheSgpKSU3Kjg2NGU1KSxBPSh5LXopLzg2NGU1LzcrMTt3LnB1c2goJzx0ZCBjbGFzcz1cImN3XCI+JytBK1wiPC90ZD5cIil9dj10aGlzLmdldENsYXNzTmFtZXMocCksdi5wdXNoKFwiZGF5XCIpO3ZhciBCPXAuZ2V0VVRDRGF0ZSgpO3RoaXMuby5iZWZvcmVTaG93RGF5IT09YS5ub29wJiYoZT10aGlzLm8uYmVmb3JlU2hvd0RheSh0aGlzLl91dGNfdG9fbG9jYWwocCkpLGU9PT1iP2U9e306XCJib29sZWFuXCI9PXR5cGVvZiBlP2U9e2VuYWJsZWQ6ZX06XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPXtjbGFzc2VzOmV9KSxlLmVuYWJsZWQ9PT0hMSYmdi5wdXNoKFwiZGlzYWJsZWRcIiksZS5jbGFzc2VzJiYodj12LmNvbmNhdChlLmNsYXNzZXMuc3BsaXQoL1xccysvKSkpLGUudG9vbHRpcCYmKGQ9ZS50b29sdGlwKSxlLmNvbnRlbnQmJihCPWUuY29udGVudCkpLHY9YS5pc0Z1bmN0aW9uKGEudW5pcXVlU29ydCk/YS51bmlxdWVTb3J0KHYpOmEudW5pcXVlKHYpLHcucHVzaCgnPHRkIGNsYXNzPVwiJyt2LmpvaW4oXCIgXCIpKydcIicrKGQ/JyB0aXRsZT1cIicrZCsnXCInOlwiXCIpKycgZGF0YS1kYXRlPVwiJytwLmdldFRpbWUoKS50b1N0cmluZygpKydcIj4nK0IrXCI8L3RkPlwiKSxkPW51bGwsdT09PXRoaXMuby53ZWVrRW5kJiZ3LnB1c2goXCI8L3RyPlwiKSxwLnNldFVUQ0RhdGUocC5nZXRVVENEYXRlKCkrMSl9dGhpcy5waWNrZXIuZmluZChcIi5kYXRlcGlja2VyLWRheXMgdGJvZHlcIikuaHRtbCh3LmpvaW4oXCJcIikpO3ZhciBDPXFbdGhpcy5vLmxhbmd1YWdlXS5tb250aHNUaXRsZXx8cS5lbi5tb250aHNUaXRsZXx8XCJNb250aHNcIixEPXRoaXMucGlja2VyLmZpbmQoXCIuZGF0ZXBpY2tlci1tb250aHNcIikuZmluZChcIi5kYXRlcGlja2VyLXN3aXRjaFwiKS50ZXh0KHRoaXMuby5tYXhWaWV3TW9kZTwyP0M6ZykuZW5kKCkuZmluZChcInRib2R5IHNwYW5cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7aWYoYS5lYWNoKHRoaXMuZGF0ZXMsZnVuY3Rpb24oYSxiKXtiLmdldFVUQ0Z1bGxZZWFyKCk9PT1nJiZELmVxKGIuZ2V0VVRDTW9udGgoKSkuYWRkQ2xhc3MoXCJhY3RpdmVcIil9KSwoZzxpfHxnPmspJiZELmFkZENsYXNzKFwiZGlzYWJsZWRcIiksZz09PWkmJkQuc2xpY2UoMCxqKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpLGc9PT1rJiZELnNsaWNlKGwrMSkuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSx0aGlzLm8uYmVmb3JlU2hvd01vbnRoIT09YS5ub29wKXt2YXIgRT10aGlzO2EuZWFjaChELGZ1bmN0aW9uKGMsZCl7dmFyIGU9bmV3IERhdGUoZyxjLDEpLGY9RS5vLmJlZm9yZVNob3dNb250aChlKTtmPT09Yj9mPXt9OlwiYm9vbGVhblwiPT10eXBlb2YgZj9mPXtlbmFibGVkOmZ9Olwic3RyaW5nXCI9PXR5cGVvZiBmJiYoZj17Y2xhc3NlczpmfSksZi5lbmFibGVkIT09ITF8fGEoZCkuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKXx8YShkKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpLGYuY2xhc3NlcyYmYShkKS5hZGRDbGFzcyhmLmNsYXNzZXMpLGYudG9vbHRpcCYmYShkKS5wcm9wKFwidGl0bGVcIixmLnRvb2x0aXApfSl9dGhpcy5fZmlsbF95ZWFyc1ZpZXcoXCIuZGF0ZXBpY2tlci15ZWFyc1wiLFwieWVhclwiLDEwLGcsaSxrLHRoaXMuby5iZWZvcmVTaG93WWVhciksdGhpcy5fZmlsbF95ZWFyc1ZpZXcoXCIuZGF0ZXBpY2tlci1kZWNhZGVzXCIsXCJkZWNhZGVcIiwxMDAsZyxpLGssdGhpcy5vLmJlZm9yZVNob3dEZWNhZGUpLHRoaXMuX2ZpbGxfeWVhcnNWaWV3KFwiLmRhdGVwaWNrZXItY2VudHVyaWVzXCIsXCJjZW50dXJ5XCIsMWUzLGcsaSxrLHRoaXMuby5iZWZvcmVTaG93Q2VudHVyeSl9fSx1cGRhdGVOYXZBcnJvd3M6ZnVuY3Rpb24oKXtpZih0aGlzLl9hbGxvd191cGRhdGUpe3ZhciBhLGIsYz1uZXcgRGF0ZSh0aGlzLnZpZXdEYXRlKSxkPWMuZ2V0VVRDRnVsbFllYXIoKSxlPWMuZ2V0VVRDTW9udGgoKSxmPXRoaXMuby5zdGFydERhdGUhPT0tKDEvMCk/dGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENGdWxsWWVhcigpOi0oMS8wKSxnPXRoaXMuby5zdGFydERhdGUhPT0tKDEvMCk/dGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENNb250aCgpOi0oMS8wKSxoPXRoaXMuby5lbmREYXRlIT09MS8wP3RoaXMuby5lbmREYXRlLmdldFVUQ0Z1bGxZZWFyKCk6MS8wLGk9dGhpcy5vLmVuZERhdGUhPT0xLzA/dGhpcy5vLmVuZERhdGUuZ2V0VVRDTW9udGgoKToxLzAsaj0xO3N3aXRjaCh0aGlzLnZpZXdNb2RlKXtjYXNlIDQ6aio9MTA7Y2FzZSAzOmoqPTEwO2Nhc2UgMjpqKj0xMDtjYXNlIDE6YT1NYXRoLmZsb29yKGQvaikqajxmLGI9TWF0aC5mbG9vcihkL2opKmoraj5oO2JyZWFrO2Nhc2UgMDphPWQ8PWYmJmU8ZyxiPWQ+PWgmJmU+aX10aGlzLnBpY2tlci5maW5kKFwiLnByZXZcIikudG9nZ2xlQ2xhc3MoXCJkaXNhYmxlZFwiLGEpLHRoaXMucGlja2VyLmZpbmQoXCIubmV4dFwiKS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsYil9fSxjbGljazpmdW5jdGlvbihiKXtiLnByZXZlbnREZWZhdWx0KCksYi5zdG9wUHJvcGFnYXRpb24oKTt2YXIgZSxmLGcsaDtlPWEoYi50YXJnZXQpLGUuaGFzQ2xhc3MoXCJkYXRlcGlja2VyLXN3aXRjaFwiKSYmdGhpcy52aWV3TW9kZSE9PXRoaXMuby5tYXhWaWV3TW9kZSYmdGhpcy5zZXRWaWV3TW9kZSh0aGlzLnZpZXdNb2RlKzEpLGUuaGFzQ2xhc3MoXCJ0b2RheVwiKSYmIWUuaGFzQ2xhc3MoXCJkYXlcIikmJih0aGlzLnNldFZpZXdNb2RlKDApLHRoaXMuX3NldERhdGUoZCgpLFwibGlua2VkXCI9PT10aGlzLm8udG9kYXlCdG4/bnVsbDpcInZpZXdcIikpLGUuaGFzQ2xhc3MoXCJjbGVhclwiKSYmdGhpcy5jbGVhckRhdGVzKCksZS5oYXNDbGFzcyhcImRpc2FibGVkXCIpfHwoZS5oYXNDbGFzcyhcIm1vbnRoXCIpfHxlLmhhc0NsYXNzKFwieWVhclwiKXx8ZS5oYXNDbGFzcyhcImRlY2FkZVwiKXx8ZS5oYXNDbGFzcyhcImNlbnR1cnlcIikpJiYodGhpcy52aWV3RGF0ZS5zZXRVVENEYXRlKDEpLGY9MSwxPT09dGhpcy52aWV3TW9kZT8oaD1lLnBhcmVudCgpLmZpbmQoXCJzcGFuXCIpLmluZGV4KGUpLGc9dGhpcy52aWV3RGF0ZS5nZXRVVENGdWxsWWVhcigpLHRoaXMudmlld0RhdGUuc2V0VVRDTW9udGgoaCkpOihoPTAsZz1OdW1iZXIoZS50ZXh0KCkpLHRoaXMudmlld0RhdGUuc2V0VVRDRnVsbFllYXIoZykpLHRoaXMuX3RyaWdnZXIoci52aWV3TW9kZXNbdGhpcy52aWV3TW9kZS0xXS5lLHRoaXMudmlld0RhdGUpLHRoaXMudmlld01vZGU9PT10aGlzLm8ubWluVmlld01vZGU/dGhpcy5fc2V0RGF0ZShjKGcsaCxmKSk6KHRoaXMuc2V0Vmlld01vZGUodGhpcy52aWV3TW9kZS0xKSx0aGlzLmZpbGwoKSkpLHRoaXMucGlja2VyLmlzKFwiOnZpc2libGVcIikmJnRoaXMuX2ZvY3VzZWRfZnJvbSYmdGhpcy5fZm9jdXNlZF9mcm9tLmZvY3VzKCksZGVsZXRlIHRoaXMuX2ZvY3VzZWRfZnJvbX0sZGF5Q2VsbENsaWNrOmZ1bmN0aW9uKGIpe3ZhciBjPWEoYi5jdXJyZW50VGFyZ2V0KSxkPWMuZGF0YShcImRhdGVcIiksZT1uZXcgRGF0ZShkKTt0aGlzLm8udXBkYXRlVmlld0RhdGUmJihlLmdldFVUQ0Z1bGxZZWFyKCkhPT10aGlzLnZpZXdEYXRlLmdldFVUQ0Z1bGxZZWFyKCkmJnRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VZZWFyXCIsdGhpcy52aWV3RGF0ZSksZS5nZXRVVENNb250aCgpIT09dGhpcy52aWV3RGF0ZS5nZXRVVENNb250aCgpJiZ0aGlzLl90cmlnZ2VyKFwiY2hhbmdlTW9udGhcIix0aGlzLnZpZXdEYXRlKSksdGhpcy5fc2V0RGF0ZShlKX0sbmF2QXJyb3dzQ2xpY2s6ZnVuY3Rpb24oYil7dmFyIGM9YShiLmN1cnJlbnRUYXJnZXQpLGQ9Yy5oYXNDbGFzcyhcInByZXZcIik/LTE6MTswIT09dGhpcy52aWV3TW9kZSYmKGQqPTEyKnIudmlld01vZGVzW3RoaXMudmlld01vZGVdLm5hdlN0ZXApLHRoaXMudmlld0RhdGU9dGhpcy5tb3ZlTW9udGgodGhpcy52aWV3RGF0ZSxkKSx0aGlzLl90cmlnZ2VyKHIudmlld01vZGVzW3RoaXMudmlld01vZGVdLmUsdGhpcy52aWV3RGF0ZSksdGhpcy5maWxsKCl9LF90b2dnbGVfbXVsdGlkYXRlOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZGF0ZXMuY29udGFpbnMoYSk7aWYoYXx8dGhpcy5kYXRlcy5jbGVhcigpLGIhPT0tMT8odGhpcy5vLm11bHRpZGF0ZT09PSEwfHx0aGlzLm8ubXVsdGlkYXRlPjF8fHRoaXMuby50b2dnbGVBY3RpdmUpJiZ0aGlzLmRhdGVzLnJlbW92ZShiKTp0aGlzLm8ubXVsdGlkYXRlPT09ITE/KHRoaXMuZGF0ZXMuY2xlYXIoKSx0aGlzLmRhdGVzLnB1c2goYSkpOnRoaXMuZGF0ZXMucHVzaChhKSxcIm51bWJlclwiPT10eXBlb2YgdGhpcy5vLm11bHRpZGF0ZSlmb3IoO3RoaXMuZGF0ZXMubGVuZ3RoPnRoaXMuby5tdWx0aWRhdGU7KXRoaXMuZGF0ZXMucmVtb3ZlKDApfSxfc2V0RGF0ZTpmdW5jdGlvbihhLGIpe2ImJlwiZGF0ZVwiIT09Ynx8dGhpcy5fdG9nZ2xlX211bHRpZGF0ZShhJiZuZXcgRGF0ZShhKSksKCFiJiZ0aGlzLm8udXBkYXRlVmlld0RhdGV8fFwidmlld1wiPT09YikmJih0aGlzLnZpZXdEYXRlPWEmJm5ldyBEYXRlKGEpKSx0aGlzLmZpbGwoKSx0aGlzLnNldFZhbHVlKCksYiYmXCJ2aWV3XCI9PT1ifHx0aGlzLl90cmlnZ2VyKFwiY2hhbmdlRGF0ZVwiKSx0aGlzLmlucHV0RmllbGQudHJpZ2dlcihcImNoYW5nZVwiKSwhdGhpcy5vLmF1dG9jbG9zZXx8YiYmXCJkYXRlXCIhPT1ifHx0aGlzLmhpZGUoKX0sbW92ZURheTpmdW5jdGlvbihhLGIpe3ZhciBjPW5ldyBEYXRlKGEpO3JldHVybiBjLnNldFVUQ0RhdGUoYS5nZXRVVENEYXRlKCkrYiksY30sbW92ZVdlZWs6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3ZlRGF5KGEsNypiKX0sbW92ZU1vbnRoOmZ1bmN0aW9uKGEsYil7aWYoIWcoYSkpcmV0dXJuIHRoaXMuby5kZWZhdWx0Vmlld0RhdGU7aWYoIWIpcmV0dXJuIGE7dmFyIGMsZCxlPW5ldyBEYXRlKGEudmFsdWVPZigpKSxmPWUuZ2V0VVRDRGF0ZSgpLGg9ZS5nZXRVVENNb250aCgpLGk9TWF0aC5hYnMoYik7aWYoYj1iPjA/MTotMSwxPT09aSlkPWI9PT0tMT9mdW5jdGlvbigpe3JldHVybiBlLmdldFVUQ01vbnRoKCk9PT1ofTpmdW5jdGlvbigpe3JldHVybiBlLmdldFVUQ01vbnRoKCkhPT1jfSxjPWgrYixlLnNldFVUQ01vbnRoKGMpLGM9KGMrMTIpJTEyO2Vsc2V7Zm9yKHZhciBqPTA7ajxpO2orKyllPXRoaXMubW92ZU1vbnRoKGUsYik7Yz1lLmdldFVUQ01vbnRoKCksZS5zZXRVVENEYXRlKGYpLGQ9ZnVuY3Rpb24oKXtyZXR1cm4gYyE9PWUuZ2V0VVRDTW9udGgoKX19Zm9yKDtkKCk7KWUuc2V0VVRDRGF0ZSgtLWYpLGUuc2V0VVRDTW9udGgoYyk7cmV0dXJuIGV9LG1vdmVZZWFyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW92ZU1vbnRoKGEsMTIqYil9LG1vdmVBdmFpbGFibGVEYXRlOmZ1bmN0aW9uKGEsYixjKXtkb3tpZihhPXRoaXNbY10oYSxiKSwhdGhpcy5kYXRlV2l0aGluUmFuZ2UoYSkpcmV0dXJuITE7Yz1cIm1vdmVEYXlcIn13aGlsZSh0aGlzLmRhdGVJc0Rpc2FibGVkKGEpKTtyZXR1cm4gYX0sd2Vla09mRGF0ZUlzRGlzYWJsZWQ6ZnVuY3Rpb24oYil7cmV0dXJuIGEuaW5BcnJheShiLmdldFVUQ0RheSgpLHRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQpIT09LTF9LGRhdGVJc0Rpc2FibGVkOmZ1bmN0aW9uKGIpe3JldHVybiB0aGlzLndlZWtPZkRhdGVJc0Rpc2FibGVkKGIpfHxhLmdyZXAodGhpcy5vLmRhdGVzRGlzYWJsZWQsZnVuY3Rpb24oYSl7cmV0dXJuIGUoYixhKX0pLmxlbmd0aD4wfSxkYXRlV2l0aGluUmFuZ2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGE+PXRoaXMuby5zdGFydERhdGUmJmE8PXRoaXMuby5lbmREYXRlfSxrZXlkb3duOmZ1bmN0aW9uKGEpe2lmKCF0aGlzLnBpY2tlci5pcyhcIjp2aXNpYmxlXCIpKXJldHVybiB2b2lkKDQwIT09YS5rZXlDb2RlJiYyNyE9PWEua2V5Q29kZXx8KHRoaXMuc2hvdygpLGEuc3RvcFByb3BhZ2F0aW9uKCkpKTt2YXIgYixjLGQ9ITEsZT10aGlzLmZvY3VzRGF0ZXx8dGhpcy52aWV3RGF0ZTtzd2l0Y2goYS5rZXlDb2RlKXtjYXNlIDI3OnRoaXMuZm9jdXNEYXRlPyh0aGlzLmZvY3VzRGF0ZT1udWxsLHRoaXMudmlld0RhdGU9dGhpcy5kYXRlcy5nZXQoLTEpfHx0aGlzLnZpZXdEYXRlLHRoaXMuZmlsbCgpKTp0aGlzLmhpZGUoKSxhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKTticmVhaztjYXNlIDM3OmNhc2UgMzg6Y2FzZSAzOTpjYXNlIDQwOmlmKCF0aGlzLm8ua2V5Ym9hcmROYXZpZ2F0aW9ufHw3PT09dGhpcy5vLmRheXNPZldlZWtEaXNhYmxlZC5sZW5ndGgpYnJlYWs7Yj0zNz09PWEua2V5Q29kZXx8Mzg9PT1hLmtleUNvZGU/LTE6MSwwPT09dGhpcy52aWV3TW9kZT9hLmN0cmxLZXk/KGM9dGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShlLGIsXCJtb3ZlWWVhclwiKSxjJiZ0aGlzLl90cmlnZ2VyKFwiY2hhbmdlWWVhclwiLHRoaXMudmlld0RhdGUpKTphLnNoaWZ0S2V5PyhjPXRoaXMubW92ZUF2YWlsYWJsZURhdGUoZSxiLFwibW92ZU1vbnRoXCIpLGMmJnRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VNb250aFwiLHRoaXMudmlld0RhdGUpKTozNz09PWEua2V5Q29kZXx8Mzk9PT1hLmtleUNvZGU/Yz10aGlzLm1vdmVBdmFpbGFibGVEYXRlKGUsYixcIm1vdmVEYXlcIik6dGhpcy53ZWVrT2ZEYXRlSXNEaXNhYmxlZChlKXx8KGM9dGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShlLGIsXCJtb3ZlV2Vla1wiKSk6MT09PXRoaXMudmlld01vZGU/KDM4IT09YS5rZXlDb2RlJiY0MCE9PWEua2V5Q29kZXx8KGIqPTQpLGM9dGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShlLGIsXCJtb3ZlTW9udGhcIikpOjI9PT10aGlzLnZpZXdNb2RlJiYoMzghPT1hLmtleUNvZGUmJjQwIT09YS5rZXlDb2RlfHwoYio9NCksYz10aGlzLm1vdmVBdmFpbGFibGVEYXRlKGUsYixcIm1vdmVZZWFyXCIpKSxjJiYodGhpcy5mb2N1c0RhdGU9dGhpcy52aWV3RGF0ZT1jLHRoaXMuc2V0VmFsdWUoKSx0aGlzLmZpbGwoKSxhLnByZXZlbnREZWZhdWx0KCkpO2JyZWFrO2Nhc2UgMTM6aWYoIXRoaXMuby5mb3JjZVBhcnNlKWJyZWFrO2U9dGhpcy5mb2N1c0RhdGV8fHRoaXMuZGF0ZXMuZ2V0KC0xKXx8dGhpcy52aWV3RGF0ZSx0aGlzLm8ua2V5Ym9hcmROYXZpZ2F0aW9uJiYodGhpcy5fdG9nZ2xlX211bHRpZGF0ZShlKSxkPSEwKSx0aGlzLmZvY3VzRGF0ZT1udWxsLHRoaXMudmlld0RhdGU9dGhpcy5kYXRlcy5nZXQoLTEpfHx0aGlzLnZpZXdEYXRlLHRoaXMuc2V0VmFsdWUoKSx0aGlzLmZpbGwoKSx0aGlzLnBpY2tlci5pcyhcIjp2aXNpYmxlXCIpJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5vLmF1dG9jbG9zZSYmdGhpcy5oaWRlKCkpO2JyZWFrO2Nhc2UgOTp0aGlzLmZvY3VzRGF0ZT1udWxsLHRoaXMudmlld0RhdGU9dGhpcy5kYXRlcy5nZXQoLTEpfHx0aGlzLnZpZXdEYXRlLHRoaXMuZmlsbCgpLHRoaXMuaGlkZSgpfWQmJih0aGlzLmRhdGVzLmxlbmd0aD90aGlzLl90cmlnZ2VyKFwiY2hhbmdlRGF0ZVwiKTp0aGlzLl90cmlnZ2VyKFwiY2xlYXJEYXRlXCIpLHRoaXMuaW5wdXRGaWVsZC50cmlnZ2VyKFwiY2hhbmdlXCIpKX0sc2V0Vmlld01vZGU6ZnVuY3Rpb24oYSl7dGhpcy52aWV3TW9kZT1hLHRoaXMucGlja2VyLmNoaWxkcmVuKFwiZGl2XCIpLmhpZGUoKS5maWx0ZXIoXCIuZGF0ZXBpY2tlci1cIityLnZpZXdNb2Rlc1t0aGlzLnZpZXdNb2RlXS5jbHNOYW1lKS5zaG93KCksdGhpcy51cGRhdGVOYXZBcnJvd3MoKSx0aGlzLl90cmlnZ2VyKFwiY2hhbmdlVmlld01vZGVcIixuZXcgRGF0ZSh0aGlzLnZpZXdEYXRlKSl9fTt2YXIgbD1mdW5jdGlvbihiLGMpe2EuZGF0YShiLFwiZGF0ZXBpY2tlclwiLHRoaXMpLHRoaXMuZWxlbWVudD1hKGIpLHRoaXMuaW5wdXRzPWEubWFwKGMuaW5wdXRzLGZ1bmN0aW9uKGEpe3JldHVybiBhLmpxdWVyeT9hWzBdOmF9KSxkZWxldGUgYy5pbnB1dHMsdGhpcy5rZWVwRW1wdHlWYWx1ZXM9Yy5rZWVwRW1wdHlWYWx1ZXMsZGVsZXRlIGMua2VlcEVtcHR5VmFsdWVzLG4uY2FsbChhKHRoaXMuaW5wdXRzKSxjKS5vbihcImNoYW5nZURhdGVcIixhLnByb3h5KHRoaXMuZGF0ZVVwZGF0ZWQsdGhpcykpLHRoaXMucGlja2Vycz1hLm1hcCh0aGlzLmlucHV0cyxmdW5jdGlvbihiKXtyZXR1cm4gYS5kYXRhKGIsXCJkYXRlcGlja2VyXCIpfSksdGhpcy51cGRhdGVEYXRlcygpfTtsLnByb3RvdHlwZT17dXBkYXRlRGF0ZXM6ZnVuY3Rpb24oKXt0aGlzLmRhdGVzPWEubWFwKHRoaXMucGlja2VycyxmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRVVENEYXRlKCl9KSx0aGlzLnVwZGF0ZVJhbmdlcygpfSx1cGRhdGVSYW5nZXM6ZnVuY3Rpb24oKXt2YXIgYj1hLm1hcCh0aGlzLmRhdGVzLGZ1bmN0aW9uKGEpe3JldHVybiBhLnZhbHVlT2YoKX0pO2EuZWFjaCh0aGlzLnBpY2tlcnMsZnVuY3Rpb24oYSxjKXtjLnNldFJhbmdlKGIpfSl9LGNsZWFyRGF0ZXM6ZnVuY3Rpb24oKXthLmVhY2godGhpcy5waWNrZXJzLGZ1bmN0aW9uKGEsYil7Yi5jbGVhckRhdGVzKCl9KX0sZGF0ZVVwZGF0ZWQ6ZnVuY3Rpb24oYyl7aWYoIXRoaXMudXBkYXRpbmcpe3RoaXMudXBkYXRpbmc9ITA7dmFyIGQ9YS5kYXRhKGMudGFyZ2V0LFwiZGF0ZXBpY2tlclwiKTtpZihkIT09Yil7dmFyIGU9ZC5nZXRVVENEYXRlKCksZj10aGlzLmtlZXBFbXB0eVZhbHVlcyxnPWEuaW5BcnJheShjLnRhcmdldCx0aGlzLmlucHV0cyksaD1nLTEsaT1nKzEsaj10aGlzLmlucHV0cy5sZW5ndGg7aWYoZyE9PS0xKXtpZihhLmVhY2godGhpcy5waWNrZXJzLGZ1bmN0aW9uKGEsYil7Yi5nZXRVVENEYXRlKCl8fGIhPT1kJiZmfHxiLnNldFVUQ0RhdGUoZSl9KSxlPHRoaXMuZGF0ZXNbaF0pZm9yKDtoPj0wJiZlPHRoaXMuZGF0ZXNbaF07KXRoaXMucGlja2Vyc1toLS1dLnNldFVUQ0RhdGUoZSk7ZWxzZSBpZihlPnRoaXMuZGF0ZXNbaV0pZm9yKDtpPGomJmU+dGhpcy5kYXRlc1tpXTspdGhpcy5waWNrZXJzW2krK10uc2V0VVRDRGF0ZShlKTt0aGlzLnVwZGF0ZURhdGVzKCksZGVsZXRlIHRoaXMudXBkYXRpbmd9fX19LGRlc3Ryb3k6ZnVuY3Rpb24oKXthLm1hcCh0aGlzLnBpY2tlcnMsZnVuY3Rpb24oYSl7YS5kZXN0cm95KCl9KSxhKHRoaXMuaW5wdXRzKS5vZmYoXCJjaGFuZ2VEYXRlXCIsdGhpcy5kYXRlVXBkYXRlZCksZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZXBpY2tlcn0scmVtb3ZlOmYoXCJkZXN0cm95XCIsXCJNZXRob2QgYHJlbW92ZWAgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gMi4wLiBVc2UgYGRlc3Ryb3lgIGluc3RlYWRcIil9O3ZhciBtPWEuZm4uZGF0ZXBpY2tlcixuPWZ1bmN0aW9uKGMpe3ZhciBkPUFycmF5LmFwcGx5KG51bGwsYXJndW1lbnRzKTtkLnNoaWZ0KCk7dmFyIGU7aWYodGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxmPWIuZGF0YShcImRhdGVwaWNrZXJcIiksZz1cIm9iamVjdFwiPT10eXBlb2YgYyYmYztpZighZil7dmFyIGo9aCh0aGlzLFwiZGF0ZVwiKSxtPWEuZXh0ZW5kKHt9LG8saixnKSxuPWkobS5sYW5ndWFnZSkscD1hLmV4dGVuZCh7fSxvLG4saixnKTtiLmhhc0NsYXNzKFwiaW5wdXQtZGF0ZXJhbmdlXCIpfHxwLmlucHV0cz8oYS5leHRlbmQocCx7aW5wdXRzOnAuaW5wdXRzfHxiLmZpbmQoXCJpbnB1dFwiKS50b0FycmF5KCl9KSxmPW5ldyBsKHRoaXMscCkpOmY9bmV3IGsodGhpcyxwKSxiLmRhdGEoXCJkYXRlcGlja2VyXCIsZil9XCJzdHJpbmdcIj09dHlwZW9mIGMmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGZbY10mJihlPWZbY10uYXBwbHkoZixkKSl9KSxlPT09Ynx8ZSBpbnN0YW5jZW9mIGt8fGUgaW5zdGFuY2VvZiBsKXJldHVybiB0aGlzO2lmKHRoaXMubGVuZ3RoPjEpdGhyb3cgbmV3IEVycm9yKFwiVXNpbmcgb25seSBhbGxvd2VkIGZvciB0aGUgY29sbGVjdGlvbiBvZiBhIHNpbmdsZSBlbGVtZW50IChcIitjK1wiIGZ1bmN0aW9uKVwiKTtyZXR1cm4gZX07YS5mbi5kYXRlcGlja2VyPW47dmFyIG89YS5mbi5kYXRlcGlja2VyLmRlZmF1bHRzPXthc3N1bWVOZWFyYnlZZWFyOiExLGF1dG9jbG9zZTohMSxiZWZvcmVTaG93RGF5OmEubm9vcCxiZWZvcmVTaG93TW9udGg6YS5ub29wLGJlZm9yZVNob3dZZWFyOmEubm9vcCxiZWZvcmVTaG93RGVjYWRlOmEubm9vcCxiZWZvcmVTaG93Q2VudHVyeTphLm5vb3AsY2FsZW5kYXJXZWVrczohMSxjbGVhckJ0bjohMSx0b2dnbGVBY3RpdmU6ITEsZGF5c09mV2Vla0Rpc2FibGVkOltdLGRheXNPZldlZWtIaWdobGlnaHRlZDpbXSxkYXRlc0Rpc2FibGVkOltdLGVuZERhdGU6MS8wLGZvcmNlUGFyc2U6ITAsZm9ybWF0OlwibW0vZGQveXl5eVwiLGtlZXBFbXB0eVZhbHVlczohMSxrZXlib2FyZE5hdmlnYXRpb246ITAsbGFuZ3VhZ2U6XCJlblwiLG1pblZpZXdNb2RlOjAsbWF4Vmlld01vZGU6NCxtdWx0aWRhdGU6ITEsbXVsdGlkYXRlU2VwYXJhdG9yOlwiLFwiLG9yaWVudGF0aW9uOlwiYXV0b1wiLHJ0bDohMSxzdGFydERhdGU6LSgxLzApLHN0YXJ0VmlldzowLHRvZGF5QnRuOiExLHRvZGF5SGlnaGxpZ2h0OiExLHVwZGF0ZVZpZXdEYXRlOiEwLHdlZWtTdGFydDowLGRpc2FibGVUb3VjaEtleWJvYXJkOiExLGVuYWJsZU9uUmVhZG9ubHk6ITAsc2hvd09uRm9jdXM6ITAsekluZGV4T2Zmc2V0OjEwLGNvbnRhaW5lcjpcImJvZHlcIixpbW1lZGlhdGVVcGRhdGVzOiExLHRpdGxlOlwiXCIsdGVtcGxhdGVzOntsZWZ0QXJyb3c6XCImI3gwMEFCO1wiLHJpZ2h0QXJyb3c6XCImI3gwMEJCO1wifSxzaG93V2Vla0RheXM6ITB9LHA9YS5mbi5kYXRlcGlja2VyLmxvY2FsZV9vcHRzPVtcImZvcm1hdFwiLFwicnRsXCIsXCJ3ZWVrU3RhcnRcIl07YS5mbi5kYXRlcGlja2VyLkNvbnN0cnVjdG9yPWs7dmFyIHE9YS5mbi5kYXRlcGlja2VyLmRhdGVzPXtlbjp7ZGF5czpbXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXSxkYXlzU2hvcnQ6W1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdLGRheXNNaW46W1wiU3VcIixcIk1vXCIsXCJUdVwiLFwiV2VcIixcIlRoXCIsXCJGclwiLFwiU2FcIl0sbW9udGhzOltcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXSxtb250aHNTaG9ydDpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCJdLHRvZGF5OlwiVG9kYXlcIixjbGVhcjpcIkNsZWFyXCIsdGl0bGVGb3JtYXQ6XCJNTSB5eXl5XCJ9fSxyPXt2aWV3TW9kZXM6W3tuYW1lczpbXCJkYXlzXCIsXCJtb250aFwiXSxjbHNOYW1lOlwiZGF5c1wiLGU6XCJjaGFuZ2VNb250aFwifSx7bmFtZXM6W1wibW9udGhzXCIsXCJ5ZWFyXCJdLGNsc05hbWU6XCJtb250aHNcIixlOlwiY2hhbmdlWWVhclwiLG5hdlN0ZXA6MX0se25hbWVzOltcInllYXJzXCIsXCJkZWNhZGVcIl0sY2xzTmFtZTpcInllYXJzXCIsZTpcImNoYW5nZURlY2FkZVwiLG5hdlN0ZXA6MTB9LHtuYW1lczpbXCJkZWNhZGVzXCIsXCJjZW50dXJ5XCJdLGNsc05hbWU6XCJkZWNhZGVzXCIsZTpcImNoYW5nZUNlbnR1cnlcIixuYXZTdGVwOjEwMH0se25hbWVzOltcImNlbnR1cmllc1wiLFwibWlsbGVubml1bVwiXSxjbHNOYW1lOlwiY2VudHVyaWVzXCIsZTpcImNoYW5nZU1pbGxlbm5pdW1cIixuYXZTdGVwOjFlM31dLHZhbGlkUGFydHM6L2RkP3xERD98bW0/fE1NP3x5eSg/Onl5KT8vZyxub25wdW5jdHVhdGlvbjovW14gLVxcLzotQFxcdTVlNzRcXHU2NzA4XFx1NjVlNVxcWy1gey1+XFx0XFxuXFxyXSsvZyxwYXJzZUZvcm1hdDpmdW5jdGlvbihhKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnRvVmFsdWUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEudG9EaXNwbGF5KXJldHVybiBhO3ZhciBiPWEucmVwbGFjZSh0aGlzLnZhbGlkUGFydHMsXCJcXDBcIikuc3BsaXQoXCJcXDBcIiksYz1hLm1hdGNoKHRoaXMudmFsaWRQYXJ0cyk7aWYoIWJ8fCFiLmxlbmd0aHx8IWN8fDA9PT1jLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGUgZm9ybWF0LlwiKTtyZXR1cm57c2VwYXJhdG9yczpiLHBhcnRzOmN9fSxwYXJzZURhdGU6ZnVuY3Rpb24oYyxlLGYsZyl7ZnVuY3Rpb24gaChhLGIpe3JldHVybiBiPT09ITAmJihiPTEwKSxhPDEwMCYmKGErPTJlMyxhPihuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKStiJiYoYS09MTAwKSksYX1mdW5jdGlvbiBpKCl7dmFyIGE9dGhpcy5zbGljZSgwLGpbbl0ubGVuZ3RoKSxiPWpbbl0uc2xpY2UoMCxhLmxlbmd0aCk7cmV0dXJuIGEudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX1pZighYylyZXR1cm4gYjtpZihjIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gYztpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9ci5wYXJzZUZvcm1hdChlKSksZS50b1ZhbHVlKXJldHVybiBlLnRvVmFsdWUoYyxlLGYpO3ZhciBqLGwsbSxuLG8scD17ZDpcIm1vdmVEYXlcIixtOlwibW92ZU1vbnRoXCIsdzpcIm1vdmVXZWVrXCIseTpcIm1vdmVZZWFyXCJ9LHM9e3llc3RlcmRheTpcIi0xZFwiLHRvZGF5OlwiKzBkXCIsdG9tb3Jyb3c6XCIrMWRcIn07aWYoYyBpbiBzJiYoYz1zW2NdKSwvXltcXC0rXVxcZCtbZG13eV0oW1xccyxdK1tcXC0rXVxcZCtbZG13eV0pKiQvaS50ZXN0KGMpKXtmb3Ioaj1jLm1hdGNoKC8oW1xcLStdXFxkKykoW2Rtd3ldKS9naSksYz1uZXcgRGF0ZSxuPTA7bjxqLmxlbmd0aDtuKyspbD1qW25dLm1hdGNoKC8oW1xcLStdXFxkKykoW2Rtd3ldKS9pKSxtPU51bWJlcihsWzFdKSxvPXBbbFsyXS50b0xvd2VyQ2FzZSgpXSxjPWsucHJvdG90eXBlW29dKGMsbSk7cmV0dXJuIGsucHJvdG90eXBlLl96ZXJvX3V0Y190aW1lKGMpfWo9YyYmYy5tYXRjaCh0aGlzLm5vbnB1bmN0dWF0aW9uKXx8W107dmFyIHQsdSx2PXt9LHc9W1wieXl5eVwiLFwieXlcIixcIk1cIixcIk1NXCIsXCJtXCIsXCJtbVwiLFwiZFwiLFwiZGRcIl0seD17eXl5eTpmdW5jdGlvbihhLGIpe3JldHVybiBhLnNldFVUQ0Z1bGxZZWFyKGc/aChiLGcpOmIpfSxtOmZ1bmN0aW9uKGEsYil7aWYoaXNOYU4oYSkpcmV0dXJuIGE7Zm9yKGItPTE7YjwwOyliKz0xMjtmb3IoYiU9MTIsYS5zZXRVVENNb250aChiKTthLmdldFVUQ01vbnRoKCkhPT1iOylhLnNldFVUQ0RhdGUoYS5nZXRVVENEYXRlKCktMSk7cmV0dXJuIGF9LGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5zZXRVVENEYXRlKGIpfX07eC55eT14Lnl5eXkseC5NPXguTU09eC5tbT14Lm0seC5kZD14LmQsYz1kKCk7dmFyIHk9ZS5wYXJ0cy5zbGljZSgpO2lmKGoubGVuZ3RoIT09eS5sZW5ndGgmJih5PWEoeSkuZmlsdGVyKGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuaW5BcnJheShjLHcpIT09LTF9KS50b0FycmF5KCkpLGoubGVuZ3RoPT09eS5sZW5ndGgpe3ZhciB6O2ZvcihuPTAsej15Lmxlbmd0aDtuPHo7bisrKXtpZih0PXBhcnNlSW50KGpbbl0sMTApLGw9eVtuXSxpc05hTih0KSlzd2l0Y2gobCl7Y2FzZVwiTU1cIjp1PWEocVtmXS5tb250aHMpLmZpbHRlcihpKSx0PWEuaW5BcnJheSh1WzBdLHFbZl0ubW9udGhzKSsxO2JyZWFrO2Nhc2VcIk1cIjp1PWEocVtmXS5tb250aHNTaG9ydCkuZmlsdGVyKGkpLHQ9YS5pbkFycmF5KHVbMF0scVtmXS5tb250aHNTaG9ydCkrMX12W2xdPXR9dmFyIEEsQjtmb3Iobj0wO248dy5sZW5ndGg7bisrKUI9d1tuXSxCIGluIHYmJiFpc05hTih2W0JdKSYmKEE9bmV3IERhdGUoYykseFtCXShBLHZbQl0pLGlzTmFOKEEpfHwoYz1BKSl9cmV0dXJuIGN9LGZvcm1hdERhdGU6ZnVuY3Rpb24oYixjLGQpe2lmKCFiKXJldHVyblwiXCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGMmJihjPXIucGFyc2VGb3JtYXQoYykpLGMudG9EaXNwbGF5KXJldHVybiBjLnRvRGlzcGxheShiLGMsZCk7dmFyIGU9e2Q6Yi5nZXRVVENEYXRlKCksRDpxW2RdLmRheXNTaG9ydFtiLmdldFVUQ0RheSgpXSxERDpxW2RdLmRheXNbYi5nZXRVVENEYXkoKV0sbTpiLmdldFVUQ01vbnRoKCkrMSxNOnFbZF0ubW9udGhzU2hvcnRbYi5nZXRVVENNb250aCgpXSxNTTpxW2RdLm1vbnRoc1tiLmdldFVUQ01vbnRoKCldLHl5OmIuZ2V0VVRDRnVsbFllYXIoKS50b1N0cmluZygpLnN1YnN0cmluZygyKSx5eXl5OmIuZ2V0VVRDRnVsbFllYXIoKX07ZS5kZD0oZS5kPDEwP1wiMFwiOlwiXCIpK2UuZCxlLm1tPShlLm08MTA/XCIwXCI6XCJcIikrZS5tLGI9W107Zm9yKHZhciBmPWEuZXh0ZW5kKFtdLGMuc2VwYXJhdG9ycyksZz0wLGg9Yy5wYXJ0cy5sZW5ndGg7Zzw9aDtnKyspZi5sZW5ndGgmJmIucHVzaChmLnNoaWZ0KCkpLGIucHVzaChlW2MucGFydHNbZ11dKTtyZXR1cm4gYi5qb2luKFwiXCIpfSxoZWFkVGVtcGxhdGU6Jzx0aGVhZD48dHI+PHRoIGNvbHNwYW49XCI3XCIgY2xhc3M9XCJkYXRlcGlja2VyLXRpdGxlXCI+PC90aD48L3RyPjx0cj48dGggY2xhc3M9XCJwcmV2XCI+JytvLnRlbXBsYXRlcy5sZWZ0QXJyb3crJzwvdGg+PHRoIGNvbHNwYW49XCI1XCIgY2xhc3M9XCJkYXRlcGlja2VyLXN3aXRjaFwiPjwvdGg+PHRoIGNsYXNzPVwibmV4dFwiPicrby50ZW1wbGF0ZXMucmlnaHRBcnJvdytcIjwvdGg+PC90cj48L3RoZWFkPlwiLFxuY29udFRlbXBsYXRlOic8dGJvZHk+PHRyPjx0ZCBjb2xzcGFuPVwiN1wiPjwvdGQ+PC90cj48L3Rib2R5PicsZm9vdFRlbXBsYXRlOic8dGZvb3Q+PHRyPjx0aCBjb2xzcGFuPVwiN1wiIGNsYXNzPVwidG9kYXlcIj48L3RoPjwvdHI+PHRyPjx0aCBjb2xzcGFuPVwiN1wiIGNsYXNzPVwiY2xlYXJcIj48L3RoPjwvdHI+PC90Zm9vdD4nfTtyLnRlbXBsYXRlPSc8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlclwiPjxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWRheXNcIj48dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK3IuaGVhZFRlbXBsYXRlK1wiPHRib2R5PjwvdGJvZHk+XCIrci5mb290VGVtcGxhdGUrJzwvdGFibGU+PC9kaXY+PGRpdiBjbGFzcz1cImRhdGVwaWNrZXItbW9udGhzXCI+PHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+JytyLmhlYWRUZW1wbGF0ZStyLmNvbnRUZW1wbGF0ZStyLmZvb3RUZW1wbGF0ZSsnPC90YWJsZT48L2Rpdj48ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci15ZWFyc1wiPjx0YWJsZSBjbGFzcz1cInRhYmxlLWNvbmRlbnNlZFwiPicrci5oZWFkVGVtcGxhdGUrci5jb250VGVtcGxhdGUrci5mb290VGVtcGxhdGUrJzwvdGFibGU+PC9kaXY+PGRpdiBjbGFzcz1cImRhdGVwaWNrZXItZGVjYWRlc1wiPjx0YWJsZSBjbGFzcz1cInRhYmxlLWNvbmRlbnNlZFwiPicrci5oZWFkVGVtcGxhdGUrci5jb250VGVtcGxhdGUrci5mb290VGVtcGxhdGUrJzwvdGFibGU+PC9kaXY+PGRpdiBjbGFzcz1cImRhdGVwaWNrZXItY2VudHVyaWVzXCI+PHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+JytyLmhlYWRUZW1wbGF0ZStyLmNvbnRUZW1wbGF0ZStyLmZvb3RUZW1wbGF0ZStcIjwvdGFibGU+PC9kaXY+PC9kaXY+XCIsYS5mbi5kYXRlcGlja2VyLkRQR2xvYmFsPXIsYS5mbi5kYXRlcGlja2VyLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5kYXRlcGlja2VyPW0sdGhpc30sYS5mbi5kYXRlcGlja2VyLnZlcnNpb249XCIxLjguMFwiLGEuZm4uZGF0ZXBpY2tlci5kZXByZWNhdGVkPWZ1bmN0aW9uKGEpe3ZhciBiPXdpbmRvdy5jb25zb2xlO2ImJmIud2FybiYmYi53YXJuKFwiREVQUkVDQVRFRDogXCIrYSl9LGEoZG9jdW1lbnQpLm9uKFwiZm9jdXMuZGF0ZXBpY2tlci5kYXRhLWFwaSBjbGljay5kYXRlcGlja2VyLmRhdGEtYXBpXCIsJ1tkYXRhLXByb3ZpZGU9XCJkYXRlcGlja2VyXCJdJyxmdW5jdGlvbihiKXt2YXIgYz1hKHRoaXMpO2MuZGF0YShcImRhdGVwaWNrZXJcIil8fChiLnByZXZlbnREZWZhdWx0KCksbi5jYWxsKGMsXCJzaG93XCIpKX0pLGEoZnVuY3Rpb24oKXtuLmNhbGwoYSgnW2RhdGEtcHJvdmlkZT1cImRhdGVwaWNrZXItaW5saW5lXCJdJykpfSl9KTtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy92ZW5kb3IvYm9vdHN0cmFwLWRhdGVwaWNrZXIvbG9jYWxlcy9ib290c3RyYXAtZGF0ZXBpY2tlci5mci5taW4uanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxNy8wOC8yMDIwIDE0OjIwXG5cbiFmdW5jdGlvbihhKXthLmZuLmRhdGVwaWNrZXIuZGF0ZXMuZnI9e2RheXM6W1wiZGltYW5jaGVcIixcImx1bmRpXCIsXCJtYXJkaVwiLFwibWVyY3JlZGlcIixcImpldWRpXCIsXCJ2ZW5kcmVkaVwiLFwic2FtZWRpXCJdLGRheXNTaG9ydDpbXCJkaW0uXCIsXCJsdW4uXCIsXCJtYXIuXCIsXCJtZXIuXCIsXCJqZXUuXCIsXCJ2ZW4uXCIsXCJzYW0uXCJdLGRheXNNaW46W1wiZFwiLFwibFwiLFwibWFcIixcIm1lXCIsXCJqXCIsXCJ2XCIsXCJzXCJdLG1vbnRoczpbXCJqYW52aWVyXCIsXCJmw6l2cmllclwiLFwibWFyc1wiLFwiYXZyaWxcIixcIm1haVwiLFwianVpblwiLFwianVpbGxldFwiLFwiYW/Du3RcIixcInNlcHRlbWJyZVwiLFwib2N0b2JyZVwiLFwibm92ZW1icmVcIixcImTDqWNlbWJyZVwiXSxtb250aHNTaG9ydDpbXCJqYW52LlwiLFwiZsOpdnIuXCIsXCJtYXJzXCIsXCJhdnJpbFwiLFwibWFpXCIsXCJqdWluXCIsXCJqdWlsLlwiLFwiYW/Du3RcIixcInNlcHQuXCIsXCJvY3QuXCIsXCJub3YuXCIsXCJkw6ljLlwiXSx0b2RheTpcIkF1am91cmQnaHVpXCIsbW9udGhzVGl0bGU6XCJNb2lzXCIsY2xlYXI6XCJFZmZhY2VyXCIsd2Vla1N0YXJ0OjEsZm9ybWF0OlwiZGQvbW0veXl5eVwifX0oalF1ZXJ5KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
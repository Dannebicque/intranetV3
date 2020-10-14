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
// @lastUpdate 14/10/2020 10:25
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21hdGVyaWFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2RhbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3ZhbGlkYXRvci1iczQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9jc3MvYm9vdHN0cmFwLWRhdGVwaWNrZXIzLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9qcy9ib290c3RyYXAtZGF0ZXBpY2tlci5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9sb2NhbGVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmZyLm1pbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwibG9va3VwIiwiJCIsIm9uIiwiZSIsImZpbGVuYW1lIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwiaHRtbCIsImRvY3VtZW50IiwicmVhZHkiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImNoYW5nZSIsImkiLCJsZW5ndGgiLCJwdXNoIiwibmV4dCIsImpvaW4iLCJwcmVsb2FkZXIiLCJzcGVlZCIsImRhdGFBdHRyIiwiZmFkZU91dCIsImNsb3Nlc3QiLCJmaW5kIiwiY3NzIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGUiLCJ1cGRhdGVJbnRlcmZhY2UiLCJ2YWxpZGF0b3IiLCJhamF4Q29tcGxldGUiLCJ0b2dnbGVDbGFzcyIsInJlbW92ZUNsYXNzIiwic2xpZGVUb2dnbGUiLCJtb2RhbGVyIiwiZ2V0RGF0YU9wdGlvbnMiLCJzZWxlY3RwaWNrZXIiLCJpY29uQmFzZSIsInRpY2tJY29uIiwic3R5bGUiLCJzaXplIiwibGl2ZVNlYXJjaCIsImVhY2giLCJjb2xvciIsImhhc0RhdGFBdHRyIiwiZGF0YSIsInRvb2x0aXAiLCJjb250YWluZXIiLCJ0cmlnZ2VyIiwidGVtcGxhdGUiLCJvcHRpb25zIiwibXVsdGlkYXRlU2VwYXJhdG9yIiwibGFuZ3VhZ2UiLCJkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQiLCJwcm9wIiwiaW5wdXRzIiwiZGF0ZXBpY2tlciIsImhhc0NsYXNzIiwiY2xvc2UiLCJvcGVuIiwiYWRkQ2xhc3MiLCJmb2N1cyIsInNpZGViYXIiLCJwcyIsIlBlcmZlY3RTY3JvbGxiYXIiLCIkc3VibWVudSIsImlzIiwic2xpZGVVcCIsInRvZ2dsZUZvbGQiLCJhcHAiLCJ0b2dnbGVTdGF0ZSIsImZvbGQiLCJzdGF0ZSIsInVuZm9sZCIsInRvZ2dsZUhpZGUiLCJoaWRlIiwic2hvdyIsInByZXBlbmQiLCJyZW1vdmUiLCJxdWlja3ZpZXciLCJxcHMiLCJ1cGRhdGUiLCJyZWxvYWRRdiIsImRlc3Ryb3kiLCJnZXRUYXJnZXQiLCJ1cmwiLCJxdiIsImF0dHIiLCJsb2FkIiwiUm91dGluZyIsImdlbmVyYXRlIiwibm90IiwiYWZ0ZXIiLCJwcmV2IiwidW5kZWZpbmVkIiwibWF0ZXJpYWxEb0Zsb2F0IiwidmFsIiwibWF0ZXJpYWxOb0Zsb2F0IiwicGFyZW50IiwiY29uZmlnTW9kYWxlciIsImlzTW9kYWwiLCJ0eXBlIiwidGl0bGUiLCJiYWNrZHJvcCIsImhlYWRlclZpc2libGUiLCJmb290ZXJWaXNpYmxlIiwiY29uZmlybVZpc2libGUiLCJjb25maXJtVGV4dCIsImNvbmZpcm1DbGFzcyIsImNhbmNlbFZpc2libGUiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ2xhc3MiLCJib2R5RXh0cmFDbGFzcyIsInNwaW5uZXIiLCJhdXRvRGVzdHJveSIsIm9uU2hvdyIsIm9uU2hvd24iLCJvbkhpZGUiLCJvbkhpZGRlbiIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwibW9kYWxJZCIsImd1aWQiLCJsZW4iLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJyZXBsYWNlIiwic3Vic3RyIiwic2V0dGluZyIsImV4dGVuZCIsIm1vZGFsIiwiaWQiLCJoYW5kbGVDYWxsYmFjayIsImlzRnVuY3Rpb24iLCJzdWJzdHJpbmciLCJjYWxsIiwiYXBwZW5kIiwib3V0ZXJIVE1MIiwib25lIiwiaHRtbF9oZWFkZXIiLCJodG1sX2Zvb3RlciIsIm1vZGFsX2h0bWwiLCJqUXVlcnkiLCJrZXl3b3JkIiwic2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQiLCJzZWFyY2hfcmVwb25zZV9wZXJzb25uZWwiLCJzZWFyY2hfcmVwb25zZV9hdXRyZSIsImFqYXgiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJldHVkaWFudHMiLCJpbmRleCIsImV0dWRpYW50Iiwic2x1ZyIsInBob3RvIiwiYXZhdGFySW5pdGlhbGVzIiwiYmFzZXBhdGgiLCJkaXNwbGF5UHIiLCJzZW1lc3RyZSIsImdyb3VwZXMiLCJlbXB0eSIsInBlcnNvbm5lbHMiLCJwZXJzb25uZWwiLCJhdXRyZXMiLCJhdXRyZSIsInJlYWRVcmxNZW51IiwiJHVybCIsIiRlbHQiLCJzcGxpdCIsIiRmaXJzdEVsdCIsInBvcCIsImxvY2F0aW9uIiwiU3dhbCIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJjc3JmIiwiZmlyZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiX3Rva2VuIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiYWRkQ2FsbG91dCIsImVycm9yIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJzbGlkZURvd24iLCJkZWxheSIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZUlucHV0IiwicmVwbGFjZVdpdGgiLCJrZXlDb2RlIiwidXBkYXRlRGF0YSIsIndoaWNoIiwiZmllbGQiLCJtZXRob2QiLCIkb2JqIiwiJGh0bWwiLCJ0cmltIiwiZm4iLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiLCJkYXRhVG9PcHRpb24iLCJ4IiwidG9VcHBlckNhc2UiLCJlbCIsImNhc3RMaXN0Iiwia2V5IiwiQm9vbGVhbiIsIk51bWJlciIsImdldFZhbHVlIiwiJGVsIiwiVmFsaWRhdG9yIiwiZWxlbWVudCIsInZhbGlkYXRvcnMiLCJWQUxJREFUT1JTIiwiY3VzdG9tIiwiJGVsZW1lbnQiLCIkYnRuIiwiZmlsdGVyIiwiYWRkIiwicHJveHkiLCJvbklucHV0Iiwib25TdWJtaXQiLCJyZXNldCIsIiR0aGlzIiwiJGlucHV0cyIsIlZFUlNJT04iLCJJTlBVVF9TRUxFQ1RPUiIsIkZPQ1VTX09GRlNFVCIsIkRFRkFVTFRTIiwiZGlzYWJsZSIsImVycm9ycyIsIm1hdGNoIiwibWlubGVuZ3RoIiwiZmVlZGJhY2siLCJjaGVja1ZhbGlkaXR5IiwidmFsaWRpdHkiLCJ2YWxpZCIsInZhbGlkYXRpb25NZXNzYWdlIiwicHJvdG90eXBlIiwic2VsZiIsImNsZWFyRXJyb3JzIiwidG9nZ2xlU3VibWl0IiwiZGVmZXJFcnJvcnMiLCJ2YWxpZGF0ZUlucHV0IiwiZG9uZSIsInByZXZFcnJvcnMiLCJFdmVudCIsInJlbGF0ZWRUYXJnZXQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJydW5WYWxpZGF0b3JzIiwiZGVmZXIiLCJzaG93RXJyb3JzIiwiZGV0YWlsIiwiZGVmZXJyZWQiLCJEZWZlcnJlZCIsInJlamVjdCIsImdldFZhbGlkYXRvclNwZWNpZmljRXJyb3IiLCJnZXRWYWxpZGl0eVN0YXRlRXJyb3IiLCJ0eXBlTWlzbWF0Y2giLCJwYXR0ZXJuTWlzbWF0Y2giLCJzdGVwTWlzbWF0Y2giLCJyYW5nZU92ZXJmbG93IiwicmFuZ2VVbmRlcmZsb3ciLCJ2YWx1ZU1pc3NpbmciLCJnZXRHZW5lcmljRXJyb3IiLCJnZXRFcnJvck1lc3NhZ2UiLCJpbmRleE9mIiwiZ2V0IiwiZmFpbCIsImpxWEhSIiwidGV4dFN0YXR1cyIsImFsd2F5cyIsInJlc29sdmUiLCJwcm9taXNlIiwidmFsaWRhdGUiLCJ3aGVuIiwibWFwIiwiZm9jdXNFcnJvciIsIiRpbnB1dCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCIkZ3JvdXAiLCIkYmxvY2siLCIkZmVlZGJhY2siLCJoYXNFcnJvcnMiLCJmaWVsZEVycm9ycyIsImlzSW5jb21wbGV0ZSIsImZpZWxkSW5jb21wbGV0ZSIsImNhbGxiYWNrIiwid2luZG93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbW92ZURhdGEiLCJ0aW1lb3V0Iiwib3JpZ2luYWxDb250ZW50IiwicmVtb3ZlQXR0ciIsIm9mZiIsIlBsdWdpbiIsIm9wdGlvbiIsIm9sZCIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsIiRmb3JtIiwiYSIsImRlZmluZSIsImIiLCJjIiwiRGF0ZSIsIlVUQyIsImFwcGx5IiwiYXJndW1lbnRzIiwiZCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJmIiwiZGVwcmVjYXRlZCIsImciLCJpc05hTiIsImdldFRpbWUiLCJoIiwidG9Mb3dlckNhc2UiLCJSZWdFeHAiLCJ0ZXN0IiwicSIsInAiLCJqIiwic2xpY2UiLCJjb250YWlucyIsInZhbHVlT2YiLCJzcGxpY2UiLCJpc0FycmF5IiwiY2xlYXIiLCJjb3B5IiwiayIsIl9wcm9jZXNzX29wdGlvbnMiLCJkYXRlcyIsInZpZXdEYXRlIiwibyIsImRlZmF1bHRWaWV3RGF0ZSIsImZvY3VzRGF0ZSIsImlzSW5wdXQiLCJpbnB1dEZpZWxkIiwiY29tcG9uZW50IiwiaXNJbmxpbmUiLCJwaWNrZXIiLCJyIiwiX2NoZWNrX3RlbXBsYXRlIiwidGVtcGxhdGVzIiwibGVmdEFycm93IiwicmlnaHRBcnJvdyIsIl9idWlsZEV2ZW50cyIsIl9hdHRhY2hFdmVudHMiLCJhcHBlbmRUbyIsInJ0bCIsImNhbGVuZGFyV2Vla3MiLCJzdGFydERhdGUiLCJfbyIsImVuZERhdGUiLCJkYXlzT2ZXZWVrRGlzYWJsZWQiLCJkYXRlc0Rpc2FibGVkIiwiX2FsbG93X3VwZGF0ZSIsInNldFZpZXdNb2RlIiwic3RhcnRWaWV3IiwiZmlsbERvdyIsImZpbGxNb250aHMiLCJjb25zdHJ1Y3RvciIsIl9yZXNvbHZlVmlld05hbWUiLCJ2aWV3TW9kZXMiLCJpbkFycmF5IiwibmFtZXMiLCJfcmVzb2x2ZURheXNPZldlZWsiLCJtaW5WaWV3TW9kZSIsIm1heFZpZXdNb2RlIiwibWF4IiwibWluIiwibXVsdGlkYXRlIiwiU3RyaW5nIiwid2Vla1N0YXJ0Iiwid2Vla0VuZCIsInBhcnNlRm9ybWF0IiwiZm9ybWF0IiwiX2xvY2FsX3RvX3V0YyIsIl96ZXJvX3RpbWUiLCJwYXJzZURhdGUiLCJhc3N1bWVOZWFyYnlZZWFyIiwib3JpZW50YXRpb24iLCJncmVwIiwieSIsInllYXIiLCJtb250aCIsImwiLCJkYXkiLCJfZXZlbnRzIiwiX3NlY29uZGFyeUV2ZW50cyIsIl9hcHBseUV2ZW50cyIsIl91bmFwcGx5RXZlbnRzIiwia2V5dXAiLCJrZXlkb3duIiwicGFzdGUiLCJzaG93T25Gb2N1cyIsImNsaWNrIiwiYmx1ciIsIl9mb2N1c2VkX2Zyb20iLCJpbW1lZGlhdGVVcGRhdGVzIiwiZGF0ZSIsIm5hdkFycm93c0NsaWNrIiwiZGF5Q2VsbENsaWNrIiwicmVzaXplIiwicGxhY2UiLCJfZGV0YWNoRXZlbnRzIiwiX2F0dGFjaFNlY29uZGFyeUV2ZW50cyIsIl9kZXRhY2hTZWNvbmRhcnlFdmVudHMiLCJfdHJpZ2dlciIsIl91dGNfdG9fbG9jYWwiLCJ2aWV3TW9kZSIsImZvcm1hdERhdGUiLCJlbmFibGVPblJlYWRvbmx5IiwibmF2aWdhdG9yIiwibXNNYXhUb3VjaFBvaW50cyIsImRpc2FibGVUb3VjaEtleWJvYXJkIiwiZGV0YWNoIiwiZm9yY2VQYXJzZSIsInNldFZhbHVlIiwib3JpZ2luYWxFdmVudCIsImNsaXBib2FyZERhdGEiLCJ0eXBlcyIsImdldERhdGEiLCJzZXREYXRlIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJfemVyb191dGNfdGltZSIsImdldERhdGVzIiwiZ2V0VVRDRGF0ZXMiLCJjbGVhckRhdGVzIiwiYXV0b2Nsb3NlIiwic2V0RGF0ZXMiLCJzZXRVVENEYXRlcyIsInNldFVUQ0RhdGUiLCJnZXRGb3JtYXR0ZWREYXRlIiwiZ2V0U3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwidXBkYXRlTmF2QXJyb3dzIiwiZ2V0RW5kRGF0ZSIsInNldEVuZERhdGUiLCJzZXREYXlzT2ZXZWVrRGlzYWJsZWQiLCJzZXREYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQiLCJzZXREYXRlc0Rpc2FibGVkIiwib3V0ZXJXaWR0aCIsIm91dGVySGVpZ2h0Iiwid2lkdGgiLCJwYXJlbnRzIiwiekluZGV4T2Zmc2V0IiwibSIsIm4iLCJsZWZ0IiwicGFyc2VJbnQiLCJyaWdodCIsInpJbmRleCIsImRhdGVXaXRoaW5SYW5nZSIsInVwZGF0ZVZpZXdEYXRlIiwiZmlsbCIsInNob3dXZWVrRGF5cyIsImRheXNNaW4iLCJtb250aHNTaG9ydCIsInNldFJhbmdlIiwicmFuZ2UiLCJnZXRDbGFzc05hbWVzIiwidG9kYXlIaWdobGlnaHQiLCJkYXRlSXNEaXNhYmxlZCIsImdldFVUQ0RheSIsIl9maWxsX3llYXJzVmlldyIsImZsb29yIiwicyIsInQiLCJub29wIiwiZW5hYmxlZCIsImNsYXNzZXMiLCJjb25jYXQiLCJ0b2RheSIsImVuIiwidGl0bGVGb3JtYXQiLCJ0b2RheUJ0biIsImNsZWFyQnRuIiwic2V0VVRDRnVsbFllYXIiLCJ1IiwidiIsInciLCJ6IiwiQSIsIkIiLCJiZWZvcmVTaG93RGF5IiwiY29udGVudCIsInVuaXF1ZVNvcnQiLCJ1bmlxdWUiLCJDIiwibW9udGhzVGl0bGUiLCJEIiwiZW5kIiwiZXEiLCJiZWZvcmVTaG93TW9udGgiLCJFIiwiYmVmb3JlU2hvd1llYXIiLCJiZWZvcmVTaG93RGVjYWRlIiwiYmVmb3JlU2hvd0NlbnR1cnkiLCJzdG9wUHJvcGFnYXRpb24iLCJfc2V0RGF0ZSIsInNldFVUQ01vbnRoIiwiY3VycmVudFRhcmdldCIsIm5hdlN0ZXAiLCJtb3ZlTW9udGgiLCJfdG9nZ2xlX211bHRpZGF0ZSIsInRvZ2dsZUFjdGl2ZSIsIm1vdmVEYXkiLCJtb3ZlV2VlayIsImFicyIsIm1vdmVZZWFyIiwibW92ZUF2YWlsYWJsZURhdGUiLCJ3ZWVrT2ZEYXRlSXNEaXNhYmxlZCIsImtleWJvYXJkTmF2aWdhdGlvbiIsImN0cmxLZXkiLCJzaGlmdEtleSIsImNoaWxkcmVuIiwiY2xzTmFtZSIsImpxdWVyeSIsImtlZXBFbXB0eVZhbHVlcyIsImRhdGVVcGRhdGVkIiwicGlja2VycyIsInVwZGF0ZURhdGVzIiwidXBkYXRlUmFuZ2VzIiwidXBkYXRpbmciLCJzaGlmdCIsInRvQXJyYXkiLCJFcnJvciIsImRlZmF1bHRzIiwibG9jYWxlX29wdHMiLCJkYXlzIiwiZGF5c1Nob3J0IiwibW9udGhzIiwidmFsaWRQYXJ0cyIsIm5vbnB1bmN0dWF0aW9uIiwidG9WYWx1ZSIsInRvRGlzcGxheSIsInNlcGFyYXRvcnMiLCJwYXJ0cyIsInllc3RlcmRheSIsInRvbW9ycm93IiwieXl5eSIsInl5IiwiTSIsIk1NIiwibW0iLCJkZCIsIkREIiwiaGVhZFRlbXBsYXRlIiwiY29udFRlbXBsYXRlIiwiZm9vdFRlbXBsYXRlIiwiRFBHbG9iYWwiLCJ2ZXJzaW9uIiwid2FybiIsImZyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUMsR0FBRCxFQUFLLEdBQUwsRUFBUyxJQUFULEVBQWMsSUFBZCxFQUFtQixHQUFuQixFQUF1QixHQUF2QixFQUEyQixHQUEzQixDQUEvSTtBQUErSzJFLFVBQU0sRUFBQyxDQUFDLFNBQUQsRUFBVyxTQUFYLEVBQXFCLE1BQXJCLEVBQTRCLE9BQTVCLEVBQW9DLEtBQXBDLEVBQTBDLE1BQTFDLEVBQWlELFNBQWpELEVBQTJELE1BQTNELEVBQWtFLFdBQWxFLEVBQThFLFNBQTlFLEVBQXdGLFVBQXhGLEVBQW1HLFVBQW5HLENBQXRMO0FBQXFTMUUsZUFBVyxFQUFDLENBQUMsT0FBRCxFQUFTLE9BQVQsRUFBaUIsTUFBakIsRUFBd0IsT0FBeEIsRUFBZ0MsS0FBaEMsRUFBc0MsTUFBdEMsRUFBNkMsT0FBN0MsRUFBcUQsTUFBckQsRUFBNEQsT0FBNUQsRUFBb0UsTUFBcEUsRUFBMkUsTUFBM0UsRUFBa0YsTUFBbEYsQ0FBalQ7QUFBMlllLFNBQUssRUFBQyxhQUFqWjtBQUErWmlCLGVBQVcsRUFBQyxNQUEzYTtBQUFrYm5LLFNBQUssRUFBQyxTQUF4YjtBQUFrYzhDLGFBQVMsRUFBQyxDQUE1YztBQUE4Y0csVUFBTSxFQUFDO0FBQXJkLEdBQXpCO0FBQTRmLENBQXhnQixDQUF5Z0IzUSxNQUF6Z0IsQ0FBRCxDIiwiZmlsZSI6ImFnZW5kYX5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvYXBwLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTQvMTAvMjAyMCAxMDoyNVxuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3Njc3MvZm9udGF3ZXNvbWUuc2NzcydcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvc2Nzcy9zb2xpZC5zY3NzJ1xuaW1wb3J0ICdib290c3RyYXAtc2VsZWN0L2Rpc3QvY3NzL2Jvb3RzdHJhcC1zZWxlY3QubWluLmNzcydcbmltcG9ydCAnLi4vdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2Nzcy9ib290c3RyYXAtZGF0ZXBpY2tlcjMubWluLmNzcydcbmltcG9ydCAnLi4vdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2pzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLm1pbi5qcydcbmltcG9ydCAnLi4vdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2xvY2FsZXMvYm9vdHN0cmFwLWRhdGVwaWNrZXIuZnIubWluJ1xuXG5pbXBvcnQgJy4uL2Nzcy9hcHAuc2NzcydcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncGVyZmVjdC1zY3JvbGxiYXInXG5pbXBvcnQgJy4vdmFsaWRhdG9yLWJzNCdcbmltcG9ydCB7Z2V0RGF0YU9wdGlvbnN9IGZyb20gJy4vdXRpbCdcbmltcG9ydCAnLi9tYXRlcmlhbCdcbmltcG9ydCAnLi9zZWFyY2gnXG5pbXBvcnQgJy4vbW9kYWxlcidcblxucmVxdWlyZSgnYm9vdHN0cmFwJylcblxubGV0IGxvb2t1cCA9IHt9XG5cbnJlcXVpcmUoJ2Jvb3RzdHJhcC1zZWxlY3QnKVxuXG4kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICBsZXQgZmlsZW5hbWUgPSBlLnRhcmdldC5maWxlc1swXS5uYW1lXG4gICQoJy5jdXN0b20tZmlsZS1sYWJlbCcpLmh0bWwoZmlsZW5hbWUpXG59KVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIC8vIGNvcHkgbGluayBFRFRcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNjb3B5TGluaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjbGllbkljYWwnKS5zZWxlY3QoKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcbiAgfSlcblxuICAvLyBzY3JpcHQgcG91ciBhZmZpY2hlciBsZSBmaWNoaWVyIHNlbGVjdGlvbm7DqSBhdmVjIGJvb3RzdHJhcDRcbiAgJCgnLmN1c3RvbS1maWxlIGlucHV0JykuY2hhbmdlKGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgZmlsZXMgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJCh0aGlzKVswXS5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsZXMucHVzaCgkKHRoaXMpWzBdLmZpbGVzW2ldLm5hbWUpXG4gICAgfVxuICAgICQodGhpcykubmV4dCgnLmN1c3RvbS1maWxlLWxhYmVsJykuaHRtbChmaWxlcy5qb2luKCcsICcpKVxuICB9KVxuXG4gIHZhciBwcmVsb2FkZXIgPSAkKCcucHJlbG9hZGVyJylcbiAgaWYgKHByZWxvYWRlci5sZW5ndGgpIHtcbiAgICB2YXIgc3BlZWQgPSBwcmVsb2FkZXIuZGF0YUF0dHIoJ2hpZGUtc3BwZWQnLCA2MDApXG4gICAgcHJlbG9hZGVyLmZhZGVPdXQoc3BlZWQpXG4gIH1cblxuICAkKGRvY3VtZW50KS5vbignZm9jdXMnLCAnLnRvcGJhci1zZWFyY2ggaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCcudG9wYmFyLXNlYXJjaCcpLmZpbmQoJy5sb29rdXAtcGxhY2Vob2xkZXIgc3BhbicpLmNzcygnb3BhY2l0eScsICcwJylcbiAgfSlcblxuICAkKGRvY3VtZW50KS5vbignYmx1cicsICcudG9wYmFyLXNlYXJjaCBpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJy50b3BiYXItc2VhcmNoJykuZmluZCgnLmxvb2t1cC1wbGFjZWhvbGRlciBzcGFuJykuY3NzKCdvcGFjaXR5JywgJzEnKVxuICB9KVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbG9va3VwJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB2YXIgdGFyZ2V0ID0gJCgnI2xvb2t1cC1mdWxsJylcblxuICAgIGlmICh0YXJnZXQgIT09IGZhbHNlKSB7XG4gICAgICBsb29rdXAudG9nZ2xlKHRhcmdldClcbiAgICB9XG4gIH0pXG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNsb29rdXAtY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgbG9va3VwLnRvZ2dsZSgkKCcjbG9va3VwLWZ1bGwnKSlcbiAgfSlcblxuICAvL3Rvb2x0aXBcbiAgdXBkYXRlSW50ZXJmYWNlKClcblxuICAkKCdbZGF0YS1wcm92aWRlPVwidmFsaWRhdGlvblwiXScpLnZhbGlkYXRvcigpXG59KVxuXG4kKGRvY3VtZW50KS5hamF4Q29tcGxldGUoZnVuY3Rpb24gKCkge1xuICB1cGRhdGVJbnRlcmZhY2UoKVxufSlcblxuLy8gRnVsbHNjcmVlblxuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2FyZC1idG4tZnVsbHNjcmVlbicsIGZ1bmN0aW9uICgpIHtcbiAgJCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLnRvZ2dsZUNsYXNzKCdjYXJkLWZ1bGxzY3JlZW4nKS5yZW1vdmVDbGFzcygnY2FyZC1tYXhpbWl6ZScpXG59KVxuXG4vLyBTbGlkZSB1cC9kb3duXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNhcmQtYnRuLXNsaWRlJywgZnVuY3Rpb24gKCkge1xuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdyb3RhdGUtMTgwJykuY2xvc2VzdCgnLmNhcmQnKS5maW5kKCcuY2FyZC1jb250ZW50Jykuc2xpZGVUb2dnbGUoKVxufSlcblxuLy9tb2RhbGVyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtcHJvdmlkZX49XCJtb2RhbGVyXCJdJywgZnVuY3Rpb24gKCkge1xuICBtb2RhbGVyKGdldERhdGFPcHRpb25zKCQodGhpcykpKVxufSlcblxuZnVuY3Rpb24gdXBkYXRlSW50ZXJmYWNlICgpIHtcbiAgLy9zZWxlY3RwaWNrZXJcbiAgJCgnLnNlbGVjdHBpY2tlcicpLnNlbGVjdHBpY2tlcih7XG4gICAgaWNvbkJhc2U6ICcnLFxuICAgIHRpY2tJY29uOiAnZmFzIGZhLWNoZWNrJyxcbiAgICBzdHlsZTogJ2J0bi1saWdodCcsXG4gICAgc2l6ZTogMTAsXG4gICAgbGl2ZVNlYXJjaDogdHJ1ZVxuICB9KVxuXG4gIC8vdG9vbHRpcFxuICAkKCdbZGF0YS1wcm92aWRlfj1cInRvb2x0aXBcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3IgPSAnJ1xuXG4gICAgaWYgKCQodGhpcykuaGFzRGF0YUF0dHIoJ3Rvb2x0aXAtY29sb3InKSkge1xuICAgICAgY29sb3IgPSAnIHRvb2x0aXAtJyArICQodGhpcykuZGF0YSgndG9vbHRpcC1jb2xvcicpXG4gICAgfVxuXG4gICAgJCh0aGlzKS50b29sdGlwKHtcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXAnICsgY29sb3IgKyAnXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PidcbiAgICB9KVxuICB9KVxuXG4gICQoJ1tkYXRhLXByb3ZpZGV+PVwiZGF0ZXBpY2tlclwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgbXVsdGlkYXRlU2VwYXJhdG9yOiAnLCAnLFxuICAgICAgbGFuZ3VhZ2U6ICdmcicsXG4gICAgICBkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6ICcwNidcbiAgICB9XG5cbiAgICBpZiAoJCh0aGlzKS5wcm9wKCd0YWdOYW1lJykgIT0gJ0lOUFVUJykge1xuICAgICAgLy9zaSBjZSBuJ2VzdCBwYXMgdW4gaW5wdXQgPT4gZG9uYyB1biBkYXRlIHJhbmdlXG4gICAgICBvcHRpb25zLmlucHV0cyA9IFskKHRoaXMpLmZpbmQoJ2lucHV0OmZpcnN0JyksICQodGhpcykuZmluZCgnaW5wdXQ6bGFzdCcpXVxuICAgIH1cbiAgICAkKHRoaXMpLmRhdGVwaWNrZXIob3B0aW9ucylcbiAgfSlcblxufVxuXG4vLyBPcGVuIGZ1bGxzY3JlZW4gbG9va3VwXG4vL1xubG9va3VwLnRvZ2dsZSA9IGZ1bmN0aW9uIChlKSB7XG4gIGlmICgkKGUpLmhhc0NsYXNzKCdyZXZlYWwnKSkge1xuICAgIGxvb2t1cC5jbG9zZShlKVxuICB9IGVsc2Uge1xuICAgIGxvb2t1cC5vcGVuKGUpXG4gIH1cbn1cblxuLy8gQ2xvc2UgZnVsbHNjcmVlbiBsb29rdXBcbi8vXG5sb29rdXAuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAkKGUpLnJlbW92ZUNsYXNzKCdyZXZlYWwnKVxuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpXG59XG5cblxuLy8gQ2xvc2UgZnVsbHNjcmVlbiBsb29rdXBcbi8vXG5sb29rdXAub3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gICQoZSkuYWRkQ2xhc3MoJ3JldmVhbCcpXG4gICQoZSkuZmluZCgnLmxvb2t1cC1mb3JtIGlucHV0JykuZm9jdXMoKVxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpXG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy8gU2lkZWJhclxuLy8gPT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBzaWRlYmFyID0ge31cblxuLy8gU2Nyb2xsYWJsZVxuLy9cbmNvbnN0IHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5zaWRlYmFyLW5hdmlnYXRpb24nKVxuXG4vLyBIYW5kbGUgc2lkZWJhciBvcGVubmVyXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zaWRlYmFyLXRvZ2dsZXInLCBmdW5jdGlvbiAoKSB7XG4gIHNpZGViYXIub3BlbigpXG59KVxuXG5cbi8vIENsb3NlIHNpZGViYXIgd2hlbiBiYWNrZHJvcCB0b3VjaGVzXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5iYWNrZHJvcC1zaWRlYmFyJywgZnVuY3Rpb24gKCkge1xuICBzaWRlYmFyLmNsb3NlKClcbn0pXG5cblxuLy8gU2xpZGUgdXAvZG93biBtZW51IGl0ZW0gb24gY2xpY2tcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNpZGViYXIgLm1lbnUtbGluaycsIGZ1bmN0aW9uICgpIHtcbiAgdmFyICRzdWJtZW51ID0gJCh0aGlzKS5uZXh0KCcubWVudS1zdWJtZW51JylcbiAgaWYgKCRzdWJtZW51Lmxlbmd0aCA8IDEpXG4gICAgcmV0dXJuXG5cbiAgaWYgKCRzdWJtZW51LmlzKCc6dmlzaWJsZScpKSB7XG4gICAgJHN1Ym1lbnUuc2xpZGVVcChmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcuc2lkZWJhciAubWVudS1pdGVtLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgfSlcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICByZXR1cm5cbiAgfVxuXG4gICQoJy5zaWRlYmFyIC5tZW51LXN1Ym1lbnU6dmlzaWJsZScpLnNsaWRlVXAoKVxuICAkKCcuc2lkZWJhciAubWVudS1saW5rJykucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAkc3VibWVudS5zbGlkZVRvZ2dsZShmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnNpZGViYXIgLm1lbnUtaXRlbS5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICB9KVxuICAkKHRoaXMpLmFkZENsYXNzKCdvcGVuJylcbn0pXG5cbi8vIEhhbmRsZSBmb2xkIHRvZ2dsZXJcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNpZGViYXItdG9nZ2xlLWZvbGQnLCBmdW5jdGlvbiAoKSB7XG4gIHNpZGViYXIudG9nZ2xlRm9sZCgpXG59KVxuXG4vL31cblxuXG5zaWRlYmFyLnRvZ2dsZUZvbGQgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS50b2dnbGVDbGFzcygnc2lkZWJhci1mb2xkZWQnKVxuICBhcHAudG9nZ2xlU3RhdGUoJ3NpZGViYXIuZm9sZGVkJylcbn1cblxuc2lkZWJhci5mb2xkID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykuYWRkQ2xhc3MoJ3NpZGViYXItZm9sZGVkJylcbiAgYXBwLnN0YXRlKCdzaWRlYmFyLmZvbGRlZCcsIHRydWUpXG59XG5cblxuc2lkZWJhci51bmZvbGQgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2lkZWJhci1mb2xkZWQnKVxuICBhcHAuc3RhdGUoJ3NpZGViYXIuZm9sZGVkJywgZmFsc2UpXG59XG5cblxuc2lkZWJhci50b2dnbGVIaWRlID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3NpZGViYXItaGlkZGVuJylcbiAgYXBwLnRvZ2dsZVN0YXRlKCdzaWRlYmFyLmhpZGRlbicpXG59XG5cbnNpZGViYXIuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLmFkZENsYXNzKCdzaWRlYmFyLWhpZGRlbicpXG4gIGFwcC5zdGF0ZSgnc2lkZWJhci5oaWRkZW4nLCB0cnVlKVxufVxuXG5zaWRlYmFyLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2lkZWJhci1oaWRkZW4nKVxuICBhcHAuc3RhdGUoJ3NpZGViYXIuaGlkZGVuJywgZmFsc2UpXG59XG5cblxuc2lkZWJhci5vcGVuID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykuYWRkQ2xhc3MoJ3NpZGViYXItb3BlbicpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJhcHAtYmFja2Ryb3AgYmFja2Ryb3Atc2lkZWJhclwiPjwvZGl2PicpXG59XG5cbnNpZGViYXIuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2lkZWJhci1vcGVuJylcbiAgJCgnLmJhY2tkcm9wLXNpZGViYXInKS5yZW1vdmUoKVxufVxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy8gUXVpY2t2aWV3XG4vLyA9PT09PT09PT09PT09PT09PT09PT1cbi8vXG5cbmxldCBxdWlja3ZpZXcgPSB7fVxubGV0IHFwcyA9IG51bGxcblxuLy8gVXBkYXRlIHNjcm9sbGJhciBvbiB0YWIgY2hhbmdlXG4vL1xuJChkb2N1bWVudCkub24oJ3Nob3duLmJzLnRhYicsICcucXVpY2t2aWV3LWhlYWRlciBhW2RhdGEtdG9nZ2xlPVwidGFiXCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgcXBzLnVwZGF0ZSgpXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWxvYWRRdiAoKSB7XG4gIHFwcy5kZXN0cm95KClcbiAgcXBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5xdWlja3ZpZXcnKVxufVxuXG4vLyBRdWlja3ZpZXcgY2xvc2VyXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWRpc21pc3M9XCJxdWlja3ZpZXdcIl0nLCBmdW5jdGlvbiAoKSB7XG4gIHF1aWNrdmlldy5jbG9zZSgkKHRoaXMpLmNsb3Nlc3QoJy5xdWlja3ZpZXcnKSlcbn0pXG5cblxuLy8gSGFuZGxlIHF1aWNrdmlldyBvcGVubmVyXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXRvZ2dsZT1cInF1aWNrdmlld1wiXScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBsZXQgdGFyZ2V0ID0gYXBwLmdldFRhcmdldCgkKHRoaXMpKVxuXG4gIGlmICh0YXJnZXQgPT0gZmFsc2UpIHtcbiAgICBxdWlja3ZpZXcuY2xvc2UoJCh0aGlzKS5jbG9zZXN0KCcucXVpY2t2aWV3JykpXG4gIH0gZWxzZSB7XG4gICAgbGV0IHVybCA9ICcnXG4gICAgaWYgKCQodGhpcykuaGFzRGF0YUF0dHIoJ3VybCcpKSB7XG4gICAgICB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpXG4gICAgfVxuICAgIHF1aWNrdmlldy50b2dnbGUodGFyZ2V0LCB1cmwpXG4gIH1cbn0pXG5cblxuLy8gQ2xvc2UgcXVpY2t2aWV3IHdoZW4gYmFja2Ryb3AgdG91Y2hlc1xuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYmFja2Ryb3AtcXVpY2t2aWV3JywgZnVuY3Rpb24gKCkge1xuICBsZXQgcXYgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGFyZ2V0JylcbiAgaWYgKCEkKHF2KS5pcygnW2RhdGEtZGlzYWJsZS1iYWNrZHJvcC1jbGlja10nKSkge1xuICAgIHF1aWNrdmlldy5jbG9zZShxdilcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5xdWlja3ZpZXcgLmNsb3NlLCBbZGF0YS1kaXNtaXNzPVwicXVpY2t2aWV3XCJdJywgZnVuY3Rpb24gKCkge1xuICBsZXQgcXYgPSAkKHRoaXMpLmNsb3Nlc3QoJy5xdWlja3ZpZXcnKVxuICBxdWlja3ZpZXcuY2xvc2UocXYpXG59KVxuXG4vLyBUb2dnbGUgb3Blbi9jbG9zZSBzdGF0ZVxuLy9cbnF1aWNrdmlldy50b2dnbGUgPSBmdW5jdGlvbiAoZSwgdXJsKSB7XG4gIGlmICgkKGUpLmhhc0NsYXNzKCdyZXZlYWwnKSkge1xuICAgIHF1aWNrdmlldy5jbG9zZShlKVxuICB9IGVsc2Uge1xuICAgIGlmICh1cmwgIT09ICcnKSB7XG4gICAgICAkKGUpLmh0bWwoJzxkaXYgY2xhc3M9XCJzcGlubmVyLWxpbmVhclwiPjxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+PC9kaXY+JylcbiAgICAgICQoZSkubG9hZCh1cmwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcXBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5xdWlja3ZpZXcnKVxuICAgICAgfSlcbiAgICB9XG4gICAgcXVpY2t2aWV3Lm9wZW4oZSlcbiAgfVxufVxuXG5cbi8vIE9wZW4gcXVpY2t2aWV3XG4vL1xucXVpY2t2aWV3Lm9wZW4gPSBmdW5jdGlvbiAoZSkge1xuICBsZXQgcXVpY2t2aWV3ID0gJChlKVxuICBsZXQgdXJsID0gJydcbiAgLy8gTG9hZCBjb250ZW50IGZyb20gVVJMIGlmIHJlcXVpcmVkXG4gIGlmIChxdWlja3ZpZXcuaGFzRGF0YUF0dHIoJ3VybCcpICYmICd0cnVlJyAhPT0gcXVpY2t2aWV3LmRhdGEoJ3VybC1oYXMtbG9hZGVkJykpIHtcbiAgICBpZiAocXVpY2t2aWV3LmRhdGEoJ3VybCcpID09PSAnbm8tdXJsJykge1xuICAgICAgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgncXVpY2tfdmlldycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IHF1aWNrdmlldy5kYXRhKCd1cmwnKVxuICAgIH1cblxuICAgIHF1aWNrdmlldy5sb2FkKHVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgcXBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5xdWlja3ZpZXcnKVxuXG4gICAgICAvLyBEb24ndCBsb2FkIGl0IG5leHQgdGltZSwgaWYgZG9uJ3QgbmVlZCB0b1xuICAgICAgaWYgKHF1aWNrdmlldy5oYXNEYXRhQXR0cignYWx3YXlzLXJlbG9hZCcpICYmICd0cnVlJyA9PT0gcXVpY2t2aWV3LmRhdGEoJ2Fsd2F5cy1yZWxvYWQnKSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWlja3ZpZXcuZGF0YSgndXJsLWhhcy1sb2FkZWQnLCAndHJ1ZScpXG4gICAgICB9XG4gICAgfSlcblxuICB9XG5cbi8vIE9wZW4gaXRcbiAgcXVpY2t2aWV3LmFkZENsYXNzKCdyZXZlYWwnKS5ub3QoJy5iYWNrZHJvcC1yZW1vdmUnKS5hZnRlcignPGRpdiBjbGFzcz1cImFwcC1iYWNrZHJvcCBiYWNrZHJvcC1xdWlja3ZpZXdcIiBkYXRhLXRhcmdldD1cIicgKyBlICsgJ1wiPjwvZGl2PicpXG59XG5cblxuLy8gQ2xvc2UgcXVpY2t2aWV3XG4vL1xucXVpY2t2aWV3LmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgJChlKS5yZW1vdmVDbGFzcygncmV2ZWFsJylcbiAgJCgnLmJhY2tkcm9wLXF1aWNrdmlldycpLnJlbW92ZSgpXG59XG5cblxubGV0IGFwcCA9IHt9XG5cbmFwcC5nZXRUYXJnZXQgPSBmdW5jdGlvbiAoZSkge1xuICBsZXQgdGFyZ2V0XG4gIGlmIChlLmhhc0RhdGFBdHRyKCd0YXJnZXQnKSkge1xuICAgIHRhcmdldCA9IGUuZGF0YSgndGFyZ2V0JylcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBlLmF0dHIoJ2hyZWYnKVxuICB9XG5cbiAgaWYgKHRhcmdldCA9PSAnbmV4dCcpIHtcbiAgICB0YXJnZXQgPSAkKGUpLm5leHQoKVxuICB9IGVsc2UgaWYgKHRhcmdldCA9PSAncHJldicpIHtcbiAgICB0YXJnZXQgPSAkKGUpLnByZXYoKVxuICB9XG5cbiAgaWYgKHRhcmdldCA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0YXJnZXRcbn1cblxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL21hdGVyaWFsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjgvMTEvMjAxOSAxOTo0MFxuXG4vLyBNYXRlcmlhbCBpbnB1dFxuLy9cbiQoZG9jdW1lbnQpLm9uKCdmb2N1cycsICcuZm9ybS10eXBlLW1hdGVyaWFsIC5mb3JtLWNvbnRyb2w6bm90KC5ib290c3RyYXAtc2VsZWN0KScsIGZ1bmN0aW9uICgpIHtcbiAgbWF0ZXJpYWxEb0Zsb2F0KCQodGhpcykpXG59KVxuXG4kKGRvY3VtZW50KS5vbignZm9jdXNvdXQnLCAnLmZvcm0tdHlwZS1tYXRlcmlhbCAuZm9ybS1jb250cm9sOm5vdCguYm9vdHN0cmFwLXNlbGVjdCknLCBmdW5jdGlvbiAoKSB7XG4gIGlmICgkKHRoaXMpLnZhbCgpID09PSAnJykge1xuICAgIG1hdGVyaWFsTm9GbG9hdCgkKHRoaXMpKVxuICB9XG59KVxuXG4vLyBBdXRvIGZvY3VzIGlucHV0c1xubWF0ZXJpYWxEb0Zsb2F0KCQoJy5mb3JtLXR5cGUtbWF0ZXJpYWwgLmZvcm0tY29udHJvbFthdXRvZm9jdXM9XCJ0cnVlXCJdJykpXG5cblxuZnVuY3Rpb24gbWF0ZXJpYWxEb0Zsb2F0IChlKSB7XG4gIGlmIChlLnBhcmVudCgnLmlucHV0LWdyb3VwLWlucHV0JykubGVuZ3RoKSB7XG4gICAgZS5wYXJlbnQoJy5pbnB1dC1ncm91cC1pbnB1dCcpLmFkZENsYXNzKCdkby1mbG9hdCcpXG4gIH0gZWxzZSB7XG4gICAgZS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmFkZENsYXNzKCdkby1mbG9hdCcpXG4gIH1cbn1cblxuXG5mdW5jdGlvbiBtYXRlcmlhbE5vRmxvYXQgKGUpIHtcbiAgaWYgKGUucGFyZW50KCcuaW5wdXQtZ3JvdXAtaW5wdXQnKS5sZW5ndGgpIHtcbiAgICBlLnBhcmVudCgnLmlucHV0LWdyb3VwLWlucHV0JykucmVtb3ZlQ2xhc3MoJ2RvLWZsb2F0JylcbiAgfSBlbHNlIHtcbiAgICBlLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2RvLWZsb2F0JylcbiAgfVxufVxuXG4kKCcuZm9ybS10eXBlLW1hdGVyaWFsIC5mb3JtLWNvbnRyb2wnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgaWYgKCQodGhpcykudmFsKCkubGVuZ3RoID4gMCkge1xuICAgIC8vaWYgKCQodGhpcykuaXMoJ1tkYXRhLXByb3ZpZGV+PVwic2VsZWN0cGlja2VyXCJdJykpIHtcbiAgICAvLyAgcmV0dXJuXG4gICAgLy99XG4gICAgbWF0ZXJpYWxEb0Zsb2F0KCQodGhpcykpXG4gIH1cbn0pXG5cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9tb2RhbGVyLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjcvMDcvMjAyMCAxMToyM1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cbi8vIE1vZGFsZXJcbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy9cbitmdW5jdGlvbiAoJCkge1xuXG4gIGxldCBjb25maWdNb2RhbGVyID0ge1xuICAgIHVybDogJycsXG4gICAgaXNNb2RhbDogZmFsc2UsXG4gICAgaHRtbDogJycsXG4gICAgdGFyZ2V0OiAnJyxcbiAgICB0eXBlOiAnJyxcbiAgICBzaXplOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgYmFja2Ryb3A6IHRydWUsXG4gICAgaGVhZGVyVmlzaWJsZTogdHJ1ZSxcbiAgICBmb290ZXJWaXNpYmxlOiB0cnVlLFxuICAgIGNvbmZpcm1WaXNpYmxlOiB0cnVlLFxuICAgIGNvbmZpcm1UZXh0OiAnT2snLFxuICAgIGNvbmZpcm1DbGFzczogJ2J0biBidG4tdy1zbSBidG4tZmxhdCBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsVmlzaWJsZTogZmFsc2UsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbCcsXG4gICAgY2FuY2VsQ2xhc3M6ICdidG4gYnRuLXctc20gYnRuLWZsYXQgYnRuLXNlY29uZGFyeScsXG4gICAgYm9keUV4dHJhQ2xhc3M6ICcnLFxuICAgIHNwaW5uZXI6ICc8ZGl2IGNsYXNzPVwiaC0yMDAgY2VudGVyLXZoXCI+PHN2ZyBjbGFzcz1cInNwaW5uZXItY2lyY2xlLW1hdGVyaWFsLXN2Z1wiIHZpZXdCb3g9XCIwIDAgNTAgNTBcIj48Y2lyY2xlIGNsYXNzPVwiY2lyY2xlXCIgY3g9XCIyNVwiIGN5PVwiMjVcIiByPVwiMjBcIj48L3N2Zz48L2Rpdj4nLFxuXG4gICAgYXV0b0Rlc3Ryb3k6IHRydWUsXG5cbiAgICAvLyBFdmVudHNcbiAgICBvblNob3c6IG51bGwsXG4gICAgb25TaG93bjogbnVsbCxcbiAgICBvbkhpZGU6IG51bGwsXG4gICAgb25IaWRkZW46IG51bGwsXG4gICAgb25Db25maXJtOiBudWxsLFxuICAgIG9uQ2FuY2VsOiBudWxsLFxuXG4gICAgLy8gUHJpdmF0ZSBvcHRpb25zXG4gICAgbW9kYWxJZDogbnVsbFxuICB9XG5cbiAgZnVuY3Rpb24gZ3VpZCAobGVuKSB7XG4gICAgaWYgKGxlbiA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxlbiA9IDVcbiAgICB9XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnJlcGxhY2UoL1teYS16XSsvZywgJycpLnN1YnN0cigwLCBsZW4pXG4gIH1cblxuXG4gIG1vZGFsZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBzZXR0aW5nID0gJC5leHRlbmQoe30sIGNvbmZpZ01vZGFsZXIsIG9wdGlvbnMpXG5cbiAgICBpZiAoc2V0dGluZy5tb2RhbElkKSB7XG4gICAgICAkKCcjJyArIHNldHRpbmcubW9kYWxJZCkubW9kYWwoJ3Nob3cnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG5cbiAgICB2YXIgaWQgPSAnbW9kYWwtJyArIGd1aWQoKVxuXG5cbiAgICB2YXIgaGFuZGxlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoaWQpIHtcblxuICAgICAgLy8gQm9vdHN0cmFwIG1vZGFsIGV2ZW50c1xuICAgICAgLy9cbiAgICAgIGlmIChzZXR0aW5nLm9uU2hvdykge1xuICAgICAgICAkKCcjJyArIGlkKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy9zZXR0aW5nLm9uU2hvdygpO1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAoc2V0dGluZy5vblNob3duKSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy9zZXR0aW5nLm9uU2hvd24oKTtcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNldHRpbmcub25IaWRlKSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBzZXR0aW5nLm9uSGlkZSgpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5nLm9uSGlkZGVuKSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHNldHRpbmcub25IaWRkZW4oKVxuICAgICAgICB9KVxuICAgICAgfVxuXG5cbiAgICAgIC8vIEhhbmRsZSBjb25maXJtIGNhbGxiYWNrXG4gICAgICAvL1xuICAgICAgJCgnIycgKyBpZCkuZmluZCgnW2RhdGEtcGVyZm9ybT1cImNvbmZpcm1cIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gSGFzbid0IHNldFxuICAgICAgICBpZiAoc2V0dGluZy5vbkNvbmZpcm0gPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXMgYSBmdW5jdGlvblxuICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmcub25Db25maXJtKSkge1xuICAgICAgICAgIHNldHRpbmcub25Db25maXJtKCQoJyMnICsgaWQpKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXMgc3RyaW5nIHZhbHVlLCBzbyBjYWxsIGl0XG4gICAgICAgIGlmIChzZXR0aW5nLm9uQ29uZmlybS5zdWJzdHJpbmcpIHtcbiAgICAgICAgICBhcHAuY2FsbChzZXR0aW5nLm9uQ29uZmlybSwgJCgnIycgKyBpZCkpXG4gICAgICAgIH1cblxuICAgICAgfSlcblxuXG4gICAgICAvLyBIYW5kbGUgY2FuY2VsIGNhbGxiYWNrXG4gICAgICAvL1xuICAgICAgJCgnIycgKyBpZCkuZmluZCgnW2RhdGEtcGVyZm9ybT1cImNhbmNlbFwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBIYXNuJ3Qgc2V0XG4gICAgICAgIGlmIChzZXR0aW5nLm9uQ2FuY2VsID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElzIGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5nLm9uQ2FuY2VsKSkge1xuICAgICAgICAgIHNldHRpbmcub25DYW5jZWwoJCgnIycgKyBpZCkpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJcyBzdHJpbmcgdmFsdWUsIHNvIGNhbGwgaXRcbiAgICAgICAgaWYgKHNldHRpbmcub25DYW5jZWwuc3Vic3RyaW5nKSB7XG4gICAgICAgICAgYXBwLmNhbGwoc2V0dGluZy5vbkNhbmNlbCwgJCgnIycgKyBpZCkpXG4gICAgICAgIH1cblxuICAgICAgfSlcbiAgICB9XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFdlIHJlY2lldmUgbW9kYWwgbWFya3VwIGZyb20gdXJsXG4gICAgLy9cbiAgICBpZiAoc2V0dGluZy5pc01vZGFsKSB7XG5cbiAgICAgICQoJzxkaXY+JykubG9hZChzZXR0aW5nLnVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCQodGhpcykuZmluZCgnLm1vZGFsJykuYXR0cignaWQnLCBpZCkub3V0ZXJIVE1MKCkpXG5cbiAgICAgICAgJCgnIycgKyBpZCkubW9kYWwoJ3Nob3cnKVxuICAgICAgICAkKCcjJyArIGlkKS5vbmUoJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvL3RvZG86IGEgY29uZmlybWVyICQoJyMnKyBpZCkuZmluZCgnLm1vZGFsLWJvZHknKS5wZXJmZWN0U2Nyb2xsYmFyKCd1cGRhdGUnKTtcbiAgICAgICAgfSlcblxuXG4gICAgICAgIC8vIERlc3Ryb3kgYWZ0ZXIgY2xvc2VcbiAgICAgICAgLy9cbiAgICAgICAgaWYgKHNldHRpbmcuYXV0b0Rlc3Ryb3kpIHtcbiAgICAgICAgICAkKCcjJyArIGlkKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnIycgKyBpZCkucmVtb3ZlKClcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoc2V0dGluZy50aGlzKS5hdHRyKCdkYXRhLW1vZGFsLWlkJywgaWQpXG4gICAgICAgIH1cblxuXG4gICAgICAgIGhhbmRsZUNhbGxiYWNrKGlkKVxuICAgICAgfSlcbiAgICB9XG5cblxuXG5cblxuICAgICAgLy8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIFdlIHNob3VsZCBkZXNpZ24gdGhlIG1vZGFsXG4gICAgLy9cbiAgICBlbHNlIHtcblxuICAgICAgc3dpdGNoIChzZXR0aW5nLnNpemUpIHtcbiAgICAgICAgY2FzZSAnc20nOlxuICAgICAgICAgIHNldHRpbmcuc2l6ZSA9ICdtb2RhbC1zbSdcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2xnJzpcbiAgICAgICAgICBzZXR0aW5nLnNpemUgPSAnbW9kYWwtbGcnXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAvL3NldHRpbmcuc2l6ZSA9ICcnO1xuICAgICAgfVxuXG5cbiAgICAgIGlmIChzZXR0aW5nLnR5cGUpIHtcbiAgICAgICAgc2V0dGluZy50eXBlID0gJ21vZGFsLScgKyBzZXR0aW5nLnR5cGVcbiAgICAgIH1cblxuXG4gICAgICAvLyBIZWFkZXIgY29kZVxuICAgICAgLy9cbiAgICAgIHZhciBodG1sX2hlYWRlciA9ICcnXG4gICAgICBpZiAoc2V0dGluZy5oZWFkZXJWaXNpYmxlKSB7XG4gICAgICAgIGh0bWxfaGVhZGVyICs9XG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj4gXFxcbiAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+JyArIHNldHRpbmcudGl0bGUgKyAnPC9oNT4gXFxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+PC9idXR0b24+IFxcXG4gICAgICAgICAgPC9kaXY+J1xuICAgICAgfVxuXG5cbiAgICAgIC8vIEZvb3RlciBjb2RlXG4gICAgICAvL1xuICAgICAgdmFyIGh0bWxfZm9vdGVyID0gJydcbiAgICAgIGlmIChzZXR0aW5nLmZvb3RlclZpc2libGUpIHtcbiAgICAgICAgaHRtbF9mb290ZXIgKz0gJzxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj4nXG5cbiAgICAgICAgaWYgKHNldHRpbmcuY2FuY2VsVmlzaWJsZSkge1xuICAgICAgICAgIGh0bWxfZm9vdGVyICs9ICc8YnV0dG9uIGNsYXNzPVwiJyArIHNldHRpbmcuY2FuY2VsQ2xhc3MgKyAnXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXBlcmZvcm09XCJjYW5jZWxcIj4nICsgc2V0dGluZy5jYW5jZWxUZXh0ICsgJzwvYnV0dG9uPidcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXR0aW5nLmNvbmZpcm1WaXNpYmxlKSB7XG4gICAgICAgICAgaHRtbF9mb290ZXIgKz0gJzxidXR0b24gY2xhc3M9XCInICsgc2V0dGluZy5jb25maXJtQ2xhc3MgKyAnXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXBlcmZvcm09XCJjb25maXJtXCI+JyArIHNldHRpbmcuY29uZmlybVRleHQgKyAnPC9idXR0b24+J1xuICAgICAgICB9XG5cbiAgICAgICAgaHRtbF9mb290ZXIgKz0gJzwvZGl2PidcbiAgICAgIH1cblxuICAgICAgLy8gTW9kYWwgY29kZVxuICAgICAgLy9cbiAgICAgIHZhciBtb2RhbF9odG1sID1cbiAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlICcgKyBzZXR0aW5nLnR5cGUgKyAnXCIgaWQ9XCInICsgaWQgKyAnXCIgdGFiaW5kZXg9XCItMVwiJyArICghc2V0dGluZy5iYWNrZHJvcCA/ICcgZGF0YS1iYWNrZHJvcD1cImZhbHNlXCInIDogJycpICsgJz4gXFxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgJyArIHNldHRpbmcuc2l6ZSArICdcIj4gXFxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj4gXFxcbiAgICAgICAgICAgICAgICAnICsgaHRtbF9oZWFkZXIgKyAnIFxcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHkgJyArIHNldHRpbmcuYm9keUV4dHJhQ2xhc3MgKyAnXCI+IFxcXG4gICAgICAgICAgICAgICAgICAnICsgc2V0dGluZy5zcGlubmVyICsgJyBcXFxuICAgICAgICAgICAgICAgIDwvZGl2PiBcXFxuICAgICAgICAgICAgICAgICcgKyBodG1sX2Zvb3RlciArICcgXFxcbiAgICAgICAgICAgICAgPC9kaXY+IFxcXG4gICAgICAgICAgICA8L2Rpdj4gXFxcbiAgICAgICAgICA8L2Rpdj4nXG5cblxuICAgICAgLy8gU2hvdyBtb2RhbFxuICAgICAgJCgnYm9keScpLmFwcGVuZChtb2RhbF9odG1sKVxuICAgICAgJCgnIycgKyBpZCkubW9kYWwoJ3Nob3cnKVxuXG5cbiAgICAgIC8vIERlc3Ryb3kgYWZ0ZXIgY2xvc2VcbiAgICAgIC8vXG4gICAgICBpZiAoc2V0dGluZy5hdXRvRGVzdHJveSkge1xuICAgICAgICAkKCcjJyArIGlkKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQoJyMnICsgaWQpLnJlbW92ZSgpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHNldHRpbmcudGhpcykuYXR0cignZGF0YS1tb2RhbC1pZCcsIGlkKVxuICAgICAgfVxuXG5cbiAgICAgIC8vIExvYWQgZGF0YSBpbnRvIHRoZSBtb2RhbFxuICAgICAgLy9cbiAgICAgIGlmIChzZXR0aW5nLnVybCkge1xuICAgICAgICAkKCcjJyArIGlkKS5maW5kKCcubW9kYWwtYm9keScpLmxvYWQoc2V0dGluZy51cmwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvL3RvZG86IGEgY29uZmlybWVyICQodGhpcykucGVyZmVjdFNjcm9sbGJhcigndXBkYXRlJyk7XG4gICAgICAgICAgaGFuZGxlQ2FsbGJhY2soaWQpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHNldHRpbmcuaHRtbCkge1xuICAgICAgICAkKCcjJyArIGlkKS5maW5kKCcubW9kYWwtYm9keScpLmh0bWwoc2V0dGluZy5odG1sKVxuICAgICAgICBoYW5kbGVDYWxsYmFjayhpZClcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGluZy50YXJnZXQpIHtcbiAgICAgICAgJCgnIycgKyBpZCkuZmluZCgnLm1vZGFsLWJvZHknKS5odG1sKCQoc2V0dGluZy50YXJnZXQpLmh0bWwoKSlcbiAgICAgICAgaGFuZGxlQ2FsbGJhY2soaWQpXG4gICAgICB9XG4gICAgfVxuICB9XG59KGpRdWVyeSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9zZWFyY2guanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyNi8wOS8yMDIwIDE4OjE4XG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjc2VhcmNoJywgZnVuY3Rpb24gKGUpIHtcblxuICBjb25zdCBrZXl3b3JkID0gJCh0aGlzKS52YWwoKVxuICBjb25zdCBzZWFyY2hfcmVwb25zZV9ldHVkaWFudCA9ICQoJyNzZWFyY2hfcmVwb25zZV9ldHVkaWFudCcpXG4gIGNvbnN0IHNlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbCA9ICQoJyNzZWFyY2hfcmVwb25zZV9wZXJzb25uZWwnKVxuICBjb25zdCBzZWFyY2hfcmVwb25zZV9hdXRyZSA9ICQoJyNzZWFyY2hfcmVwb25zZV9hdXRyZScpXG5cbiAgaWYgKGtleXdvcmQubGVuZ3RoID4gMikge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3JlY2hlcmNoZScsIHtrZXl3b3JkOiBrZXl3b3JkfSksXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgbGV0IGh0bWwgPSAnJ1xuICAgICAgICBpZiAoZGF0YS5ldHVkaWFudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGpRdWVyeS5lYWNoKGRhdGEuZXR1ZGlhbnRzLCBmdW5jdGlvbiAoaW5kZXgsIGV0dWRpYW50KSB7XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICc8YSBjbGFzcz1cIm1lZGlhXCIgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCd1c2VyX3Byb2ZpbCcsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2V0dWRpYW50JyxcbiAgICAgICAgICAgICAgc2x1ZzogZXR1ZGlhbnQuc2x1Z1xuICAgICAgICAgICAgfSkgKyAnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XFxuJ1xuICAgICAgICAgICAgaWYgKGV0dWRpYW50LnBob3RvID09PSAnbm9pbWFnZS5wbmcnIHx8IGV0dWRpYW50LnBob3RvID09IG51bGwpIHtcbiAgICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGRpdiBjbGFzcz1cImF2YXRhci1jaXJjbGUtc21cIj5cXG4nICtcbiAgICAgICAgICAgICAgICAnICAgIDxzcGFuIGNsYXNzPVwiaW5pdGlhbHNcIj4nICsgZXR1ZGlhbnQuYXZhdGFySW5pdGlhbGVzICsgJzwvc3Bhbj5cXG4nICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGltZyBjbGFzcz1cImF2YXRhciBhdmF0YXItc21cIiBzcmM9XCInICsgZGF0YS5iYXNlcGF0aCArICdldHVkaWFudHMvJyArIGV0dWRpYW50LnBob3RvICsgJ1wiIGFsdD1cIlBob3RvIGRlIHByb2ZpbCBkZSAnICsgZXR1ZGlhbnQuZGlzcGxheVByICsgJ1wiPlxcbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJyAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz4nICsgZXR1ZGlhbnQuZGlzcGxheVByICsgJyAoJyArIGV0dWRpYW50LnNlbWVzdHJlICsgJyk8L3N0cm9uZz5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgY2xhc3M9XCJmbG9hdC1yaWdodFwiPicgKyBldHVkaWFudC5ncm91cGVzICsgJzwvdGltZT5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC9hPidcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGh0bWwgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5QYXMgZGUgcsOpc3VsdGF0IHBvdXIgdm90cmUgcmVjaGVyY2hlIDxzdHJvbmc+XCInICsga2V5d29yZCArICdcIjwvc3Ryb25nPjwvZGl2PidcbiAgICAgICAgfVxuXG4gICAgICAgIHNlYXJjaF9yZXBvbnNlX2V0dWRpYW50LmVtcHR5KCkuYXBwZW5kKGh0bWwpXG5cbiAgICAgICAgaHRtbCA9ICcnXG4gICAgICAgIGlmIChkYXRhLnBlcnNvbm5lbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGpRdWVyeS5lYWNoKGRhdGEucGVyc29ubmVscywgZnVuY3Rpb24gKGluZGV4LCBwZXJzb25uZWwpIHtcbiAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxhIGNsYXNzPVwibWVkaWEgaXRlbXMtY2VudGVyXCIgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCd1c2VyX3Byb2ZpbCcsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3BlcnNvbm5lbCcsXG4gICAgICAgICAgICAgIHNsdWc6IHBlcnNvbm5lbC5zbHVnXG4gICAgICAgICAgICB9KSArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cXG4nXG4gICAgICAgICAgICBpZiAocGVyc29ubmVsLnBob3RvID09PSAnbm9pbWFnZS5wbmcnIHx8IHBlcnNvbm5lbC5waG90byA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxkaXYgY2xhc3M9XCJhdmF0YXItY2lyY2xlLXNtXCI+XFxuJyArXG4gICAgICAgICAgICAgICAgJyAgICA8c3BhbiBjbGFzcz1cImluaXRpYWxzXCI+JyArIHBlcnNvbm5lbC5hdmF0YXJJbml0aWFsZXMgKyAnPC9zcGFuPlxcbicgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBodG1sID0gaHRtbCArICc8aW1nIGNsYXNzPVwiYXZhdGFyIGF2YXRhci1zbVwiIHNyYz1cIicgKyBkYXRhLmJhc2VwYXRoICsgJ3BlcnNvbm5lbHMvJyArIHBlcnNvbm5lbC5waG90byArICdcIiBhbHQ9XCJQaG90byBkZSBwcm9maWwgZGUgJyArIHBlcnNvbm5lbC5kaXNwbGF5UHIgKyAnXCI+XFxuJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnICAgICAgICAgICAgICAgICAgICAgICAgPHA+JyArIHBlcnNvbm5lbC5kaXNwbGF5UHIgKyAnPC9wPlxcbicgK1xuICAgICAgICAgICAgICAnPC9hPidcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGh0bWwgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5QYXMgZGUgcsOpc3VsdGF0IHBvdXIgdm90cmUgcmVjaGVyY2hlIDxzdHJvbmc+XCInICsga2V5d29yZCArICdcIjwvc3Ryb25nPjwvZGl2PidcbiAgICAgICAgfVxuICAgICAgICBzZWFyY2hfcmVwb25zZV9wZXJzb25uZWwuZW1wdHkoKS5hcHBlbmQoaHRtbClcblxuICAgICAgICBodG1sID0gJydcbiAgICAgICAgaWYgKGRhdGEuYXV0cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBqUXVlcnkuZWFjaChkYXRhLmF1dHJlcywgZnVuY3Rpb24gKGluZGV4LCBhdXRyZSkge1xuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGEgY2xhc3M9XCJtZWRpYSBpdGVtcy1jZW50ZXJcIiBocmVmPVwiXCI+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyIGF2YXRhci1zbVwiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvYXZhdGFyLzEuanBnXCIgYWx0PVwiLi4uXCI+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8cD4nICsgYXV0cmUgKyAnPC9wPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2E+J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPlBhcyBkZSByw6lzdWx0YXQgcG91ciB2b3RyZSByZWNoZXJjaGUgPHN0cm9uZz5cIicgKyBrZXl3b3JkICsgJ1wiPC9zdHJvbmc+PC9kaXY+J1xuICAgICAgICB9XG4gICAgICAgIHNlYXJjaF9yZXBvbnNlX2F1dHJlLmVtcHR5KCkuYXBwZW5kKGh0bWwpXG4gICAgICB9XG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiPlNhaXNpciBhdSBtb2lucyAzIGNhcmFjdMOocmVzPC9kaXY+J1xuICAgIHNlYXJjaF9yZXBvbnNlX2F1dHJlLmVtcHR5KCkuYXBwZW5kKGh0bWwpXG4gICAgc2VhcmNoX3JlcG9uc2VfcGVyc29ubmVsLmVtcHR5KCkuYXBwZW5kKGh0bWwpXG4gICAgc2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQuZW1wdHkoKS5hcHBlbmQoaHRtbClcbiAgfVxufSlcblxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3V0aWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxMS8xMC8yMDIwIDA4OjA0XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2Uge1xuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiBlLndoaWNoID09PSAyNykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG15RWRpdEluaXRpYWxDb250ZW50Lmh0bWwodmFsKVxuICAgICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gICAgICBFZGl0T25MaW5lID0gZmFsc2VcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG4gIGxldCAkaHRtbCA9ICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiAvPidcbiAgJGh0bWwgPSAkaHRtbCArICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLXNtIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLWRhbmdlciBidG4tb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPjwvZGl2PidcbiAgcmV0dXJuICRodG1sXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3ZhbGlkYXRvci1iczQuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyOC8xMS8yMDE5IDE5OjQwXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gVkFMSURBVE9SIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBnZXRWYWx1ZSgkZWwpIHtcbiAgICByZXR1cm4gJGVsLmlzKCdbdHlwZT1cImNoZWNrYm94XCJdJykgPyAkZWwucHJvcCgnY2hlY2tlZCcpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgJGVsLmlzKCdbdHlwZT1cInJhZGlvXCJdJykgICAgPyAhISQoJ1tuYW1lPVwiJyArICRlbC5hdHRyKCduYW1lJykgKyAnXCJdOmNoZWNrZWQnKS5sZW5ndGggOlxuICAgICAgICAgICAkZWwuaXMoJ3NlbGVjdFttdWx0aXBsZV0nKSAgPyAoJGVsLnZhbCgpIHx8IFtdKS5sZW5ndGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVsLnZhbCgpXG4gIH1cblxuICB2YXIgVmFsaWRhdG9yID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgICAgPSBvcHRpb25zXG4gICAgdGhpcy52YWxpZGF0b3JzID0gJC5leHRlbmQoe30sIFZhbGlkYXRvci5WQUxJREFUT1JTLCBvcHRpb25zLmN1c3RvbSlcbiAgICB0aGlzLiRlbGVtZW50ICAgPSAkKGVsZW1lbnQpXG4gICAgdGhpcy4kYnRuICAgICAgID0gJCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcignW2Zvcm09XCInICsgdGhpcy4kZWxlbWVudC5hdHRyKCdpZCcpICsgJ1wiXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuJGVsZW1lbnQuZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKSlcblxuICAgIHRoaXMudXBkYXRlKClcblxuICAgIHRoaXMuJGVsZW1lbnQub24oJ2lucHV0LmJzLnZhbGlkYXRvciBjaGFuZ2UuYnMudmFsaWRhdG9yIGZvY3Vzb3V0LmJzLnZhbGlkYXRvcicsICQucHJveHkodGhpcy5vbklucHV0LCB0aGlzKSlcbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdzdWJtaXQuYnMudmFsaWRhdG9yJywgJC5wcm94eSh0aGlzLm9uU3VibWl0LCB0aGlzKSlcbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdyZXNldC5icy52YWxpZGF0b3InLCAkLnByb3h5KHRoaXMucmVzZXQsIHRoaXMpKVxuXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS1tYXRjaF0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgPSAkKHRoaXMpXG4gICAgICB2YXIgdGFyZ2V0ID0gJHRoaXMuYXR0cignZGF0YS1tYXRjaCcpXG5cbiAgICAgICQodGFyZ2V0KS5vbignaW5wdXQuYnMudmFsaWRhdG9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZ2V0VmFsdWUoJHRoaXMpICYmICR0aGlzLnRyaWdnZXIoJ2lucHV0LmJzLnZhbGlkYXRvcicpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBydW4gdmFsaWRhdG9ycyBmb3IgZmllbGRzIHdpdGggdmFsdWVzLCBidXQgZG9uJ3QgY2xvYmJlciBzZXJ2ZXItc2lkZSBlcnJvcnNcbiAgICB0aGlzLiRpbnB1dHMuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRWYWx1ZSgkKHRoaXMpKSAmJiAhJCh0aGlzKS5jbG9zZXN0KCcuaGFzLWVycm9yJykubGVuZ3RoXG4gICAgfSkudHJpZ2dlcignZm9jdXNvdXQnKVxuXG4gICAgdGhpcy4kZWxlbWVudC5hdHRyKCdub3ZhbGlkYXRlJywgdHJ1ZSkgLy8gZGlzYWJsZSBhdXRvbWF0aWMgbmF0aXZlIHZhbGlkYXRpb25cbiAgfVxuXG4gIFZhbGlkYXRvci5WRVJTSU9OID0gJzAuMTEuOSdcblxuICBWYWxpZGF0b3IuSU5QVVRfU0VMRUNUT1IgPSAnOmlucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSwgW3R5cGU9XCJzdWJtaXRcIl0sIFt0eXBlPVwicmVzZXRcIl0sIGJ1dHRvbiknXG5cbiAgVmFsaWRhdG9yLkZPQ1VTX09GRlNFVCA9IDIwXG5cbiAgVmFsaWRhdG9yLkRFRkFVTFRTID0ge1xuICAgIGRlbGF5OiA1MDAsXG4gICAgaHRtbDogZmFsc2UsXG4gICAgZGlzYWJsZTogdHJ1ZSxcbiAgICBmb2N1czogdHJ1ZSxcbiAgICBjdXN0b206IHt9LFxuICAgIGVycm9yczoge1xuICAgICAgbWF0Y2g6ICdEb2VzIG5vdCBtYXRjaCcsXG4gICAgICBtaW5sZW5ndGg6ICdOb3QgbG9uZyBlbm91Z2gnXG4gICAgfSxcbiAgICBmZWVkYmFjazoge1xuICAgICAgc3VjY2VzczogJ2dseXBoaWNvbi1vaycsXG4gICAgICBlcnJvcjogJ2dseXBoaWNvbi1yZW1vdmUnXG4gICAgfVxuICB9XG5cbiAgVmFsaWRhdG9yLlZBTElEQVRPUlMgPSB7XG4gICAgJ25hdGl2ZSc6IGZ1bmN0aW9uICgkZWwpIHtcbiAgICAgIHZhciBlbCA9ICRlbFswXVxuICAgICAgaWYgKGVsLmNoZWNrVmFsaWRpdHkpIHtcbiAgICAgICAgcmV0dXJuICFlbC5jaGVja1ZhbGlkaXR5KCkgJiYgIWVsLnZhbGlkaXR5LnZhbGlkICYmIChlbC52YWxpZGF0aW9uTWVzc2FnZSB8fCBcImVycm9yIVwiKVxuICAgICAgfVxuICAgIH0sXG4gICAgJ21hdGNoJzogZnVuY3Rpb24gKCRlbCkge1xuICAgICAgdmFyIHRhcmdldCA9ICRlbC5hdHRyKCdkYXRhLW1hdGNoJylcbiAgICAgIHJldHVybiAkZWwudmFsKCkgIT09ICQodGFyZ2V0KS52YWwoKSAmJiBWYWxpZGF0b3IuREVGQVVMVFMuZXJyb3JzLm1hdGNoXG4gICAgfSxcbiAgICAnbWlubGVuZ3RoJzogZnVuY3Rpb24gKCRlbCkge1xuICAgICAgdmFyIG1pbmxlbmd0aCA9ICRlbC5hdHRyKCdkYXRhLW1pbmxlbmd0aCcpXG4gICAgICByZXR1cm4gJGVsLnZhbCgpLmxlbmd0aCA8IG1pbmxlbmd0aCAmJiBWYWxpZGF0b3IuREVGQVVMVFMuZXJyb3JzLm1pbmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuXG4gICAgdGhpcy4kaW5wdXRzID0gdGhpcy4kZWxlbWVudC5maW5kKFZhbGlkYXRvci5JTlBVVF9TRUxFQ1RPUilcbiAgICAgIC5hZGQodGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS12YWxpZGF0ZT1cInRydWVcIl0nKSlcbiAgICAgIC5ub3QodGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS12YWxpZGF0ZT1cImZhbHNlXCJdJylcbiAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkgeyBzZWxmLmNsZWFyRXJyb3JzKCQodGhpcykpIH0pXG4gICAgICApXG5cbiAgICB0aGlzLnRvZ2dsZVN1Ym1pdCgpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5vbklucHV0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzXG4gICAgdmFyICRlbCAgICAgICAgID0gJChlLnRhcmdldClcbiAgICB2YXIgZGVmZXJFcnJvcnMgPSBlLnR5cGUgIT09ICdmb2N1c291dCdcblxuICAgIGlmICghdGhpcy4kaW5wdXRzLmlzKCRlbCkpIHJldHVyblxuXG4gICAgdGhpcy52YWxpZGF0ZUlucHV0KCRlbCwgZGVmZXJFcnJvcnMpLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi50b2dnbGVTdWJtaXQoKVxuICAgIH0pXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlSW5wdXQgPSBmdW5jdGlvbiAoJGVsLCBkZWZlckVycm9ycykge1xuICAgIHZhciB2YWx1ZSAgICAgID0gZ2V0VmFsdWUoJGVsKVxuICAgIHZhciBwcmV2RXJyb3JzID0gJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5lcnJvcnMnKVxuXG4gICAgaWYgKCRlbC5pcygnW3R5cGU9XCJyYWRpb1wiXScpKSAkZWwgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ2lucHV0W25hbWU9XCInICsgJGVsLmF0dHIoJ25hbWUnKSArICdcIl0nKVxuXG4gICAgdmFyIGUgPSAkLkV2ZW50KCd2YWxpZGF0ZS5icy52YWxpZGF0b3InLCB7cmVsYXRlZFRhcmdldDogJGVsWzBdfSlcbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSlcbiAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICB2YXIgc2VsZiA9IHRoaXNcblxuICAgIHJldHVybiB0aGlzLnJ1blZhbGlkYXRvcnMoJGVsKS5kb25lKGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgICAgICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZXJyb3JzJywgZXJyb3JzKVxuXG4gICAgICBlcnJvcnMubGVuZ3RoXG4gICAgICAgID8gZGVmZXJFcnJvcnMgPyBzZWxmLmRlZmVyKCRlbCwgc2VsZi5zaG93RXJyb3JzKSA6IHNlbGYuc2hvd0Vycm9ycygkZWwpXG4gICAgICAgIDogc2VsZi5jbGVhckVycm9ycygkZWwpXG5cbiAgICAgIGlmICghcHJldkVycm9ycyB8fCBlcnJvcnMudG9TdHJpbmcoKSAhPT0gcHJldkVycm9ycy50b1N0cmluZygpKSB7XG4gICAgICAgIGUgPSBlcnJvcnMubGVuZ3RoXG4gICAgICAgICAgPyAkLkV2ZW50KCdpbnZhbGlkLmJzLnZhbGlkYXRvcicsIHtyZWxhdGVkVGFyZ2V0OiAkZWxbMF0sIGRldGFpbDogZXJyb3JzfSlcbiAgICAgICAgICA6ICQuRXZlbnQoJ3ZhbGlkLmJzLnZhbGlkYXRvcicsIHtyZWxhdGVkVGFyZ2V0OiAkZWxbMF0sIGRldGFpbDogcHJldkVycm9yc30pXG5cbiAgICAgICAgc2VsZi4kZWxlbWVudC50cmlnZ2VyKGUpXG4gICAgICB9XG5cbiAgICAgIHNlbGYudG9nZ2xlU3VibWl0KClcblxuICAgICAgc2VsZi4kZWxlbWVudC50cmlnZ2VyKCQuRXZlbnQoJ3ZhbGlkYXRlZC5icy52YWxpZGF0b3InLCB7cmVsYXRlZFRhcmdldDogJGVsWzBdfSkpXG4gICAgfSlcbiAgfVxuXG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5ydW5WYWxpZGF0b3JzID0gZnVuY3Rpb24gKCRlbCkge1xuICAgIHZhciBlcnJvcnMgICA9IFtdXG4gICAgdmFyIGRlZmVycmVkID0gJC5EZWZlcnJlZCgpXG5cbiAgICAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmRlZmVycmVkJykgJiYgJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5kZWZlcnJlZCcpLnJlamVjdCgpXG4gICAgJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5kZWZlcnJlZCcsIGRlZmVycmVkKVxuXG4gICAgZnVuY3Rpb24gZ2V0VmFsaWRhdG9yU3BlY2lmaWNFcnJvcihrZXkpIHtcbiAgICAgIHJldHVybiAkZWwuYXR0cignZGF0YS0nICsga2V5ICsgJy1lcnJvcicpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmFsaWRpdHlTdGF0ZUVycm9yKCkge1xuICAgICAgdmFyIHZhbGlkaXR5ID0gJGVsWzBdLnZhbGlkaXR5XG4gICAgICByZXR1cm4gdmFsaWRpdHkudHlwZU1pc21hdGNoICAgID8gJGVsLmF0dHIoJ2RhdGEtdHlwZS1lcnJvcicpXG4gICAgICAgICAgIDogdmFsaWRpdHkucGF0dGVybk1pc21hdGNoID8gJGVsLmF0dHIoJ2RhdGEtcGF0dGVybi1lcnJvcicpXG4gICAgICAgICAgIDogdmFsaWRpdHkuc3RlcE1pc21hdGNoICAgID8gJGVsLmF0dHIoJ2RhdGEtc3RlcC1lcnJvcicpXG4gICAgICAgICAgIDogdmFsaWRpdHkucmFuZ2VPdmVyZmxvdyAgID8gJGVsLmF0dHIoJ2RhdGEtbWF4LWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS5yYW5nZVVuZGVyZmxvdyAgPyAkZWwuYXR0cignZGF0YS1taW4tZXJyb3InKVxuICAgICAgICAgICA6IHZhbGlkaXR5LnZhbHVlTWlzc2luZyAgICA/ICRlbC5hdHRyKCdkYXRhLXJlcXVpcmVkLWVycm9yJylcbiAgICAgICAgICAgOiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R2VuZXJpY0Vycm9yKCkge1xuICAgICAgcmV0dXJuICRlbC5hdHRyKCdkYXRhLWVycm9yJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFcnJvck1lc3NhZ2Uoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0VmFsaWRhdG9yU3BlY2lmaWNFcnJvcihrZXkpXG4gICAgICAgICAgfHwgZ2V0VmFsaWRpdHlTdGF0ZUVycm9yKClcbiAgICAgICAgICB8fCBnZXRHZW5lcmljRXJyb3IoKVxuICAgIH1cblxuICAgICQuZWFjaCh0aGlzLnZhbGlkYXRvcnMsICQucHJveHkoZnVuY3Rpb24gKGtleSwgdmFsaWRhdG9yKSB7XG4gICAgICB2YXIgZXJyb3IgPSBudWxsXG4gICAgICBpZiAoKGdldFZhbHVlKCRlbCkgfHwgJGVsLmF0dHIoJ3JlcXVpcmVkJykpICYmXG4gICAgICAgICAgKCRlbC5hdHRyKCdkYXRhLScgKyBrZXkpICE9PSB1bmRlZmluZWQgfHwga2V5ID09ICduYXRpdmUnKSAmJlxuICAgICAgICAgIChlcnJvciA9IHZhbGlkYXRvci5jYWxsKHRoaXMsICRlbCkpKSB7XG4gICAgICAgICBlcnJvciA9IGdldEVycm9yTWVzc2FnZShrZXkpIHx8IGVycm9yXG4gICAgICAgICF+ZXJyb3JzLmluZGV4T2YoZXJyb3IpICYmIGVycm9ycy5wdXNoKGVycm9yKVxuICAgICAgfVxuICAgIH0sIHRoaXMpKVxuXG4gICAgaWYgKCFlcnJvcnMubGVuZ3RoICYmIGdldFZhbHVlKCRlbCkgJiYgJGVsLmF0dHIoJ2RhdGEtcmVtb3RlJykpIHtcbiAgICAgIHRoaXMuZGVmZXIoJGVsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0ge31cbiAgICAgICAgZGF0YVskZWwuYXR0cignbmFtZScpXSA9IGdldFZhbHVlKCRlbClcbiAgICAgICAgJC5nZXQoJGVsLmF0dHIoJ2RhdGEtcmVtb3RlJyksIGRhdGEpXG4gICAgICAgICAgLmZhaWwoZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvcikgeyBlcnJvcnMucHVzaChnZXRFcnJvck1lc3NhZ2UoJ3JlbW90ZScpIHx8IGVycm9yKSB9KVxuICAgICAgICAgIC5hbHdheXMoZnVuY3Rpb24gKCkgeyBkZWZlcnJlZC5yZXNvbHZlKGVycm9ycyl9KVxuICAgICAgfSlcbiAgICB9IGVsc2UgZGVmZXJyZWQucmVzb2x2ZShlcnJvcnMpXG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuXG4gICAgJC53aGVuKHRoaXMuJGlucHV0cy5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgICByZXR1cm4gc2VsZi52YWxpZGF0ZUlucHV0KCQodGhpcyksIGZhbHNlKVxuICAgIH0pKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYudG9nZ2xlU3VibWl0KClcbiAgICAgIHNlbGYuZm9jdXNFcnJvcigpXG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmZvY3VzRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZm9jdXMpIHJldHVyblxuXG4gICAgdmFyICRpbnB1dCA9IHRoaXMuJGVsZW1lbnQuZmluZChcIi5oYXMtZXJyb3I6Zmlyc3QgOmlucHV0XCIpXG4gICAgaWYgKCRpbnB1dC5sZW5ndGggPT09IDApIHJldHVyblxuXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJGlucHV0Lm9mZnNldCgpLnRvcCAtIFZhbGlkYXRvci5GT0NVU19PRkZTRVR9LCAyNTApXG4gICAgJGlucHV0LmZvY3VzKClcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuc2hvd0Vycm9ycyA9IGZ1bmN0aW9uICgkZWwpIHtcbiAgICB2YXIgbWV0aG9kID0gdGhpcy5vcHRpb25zLmh0bWwgPyAnaHRtbCcgOiAndGV4dCdcbiAgICB2YXIgZXJyb3JzID0gJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5lcnJvcnMnKVxuICAgIHZhciAkZ3JvdXAgPSAkZWwuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKVxuICAgIHZhciAkYmxvY2sgPSAkZ3JvdXAuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuICAgIHZhciAkZmVlZGJhY2sgPSAkZ3JvdXAuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuXG4gICAgaWYgKCFlcnJvcnMubGVuZ3RoKSByZXR1cm5cblxuICAgICRlbC5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuXG4gICAgZXJyb3JzID0gJCgnPHVsLz4nKVxuICAgICAgLmFkZENsYXNzKCdsaXN0LXVuc3R5bGVkJylcbiAgICAgIC5hcHBlbmQoJC5tYXAoZXJyb3JzLCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuICQoJzxsaS8+JylbbWV0aG9kXShlcnJvcikgfSkpXG5cbiAgICAkYmxvY2suZGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcpID09PSB1bmRlZmluZWQgJiYgJGJsb2NrLmRhdGEoJ2JzLnZhbGlkYXRvci5vcmlnaW5hbENvbnRlbnQnLCAkYmxvY2suaHRtbCgpKVxuICAgICRibG9jay5lbXB0eSgpLmFwcGVuZChlcnJvcnMpXG4gICAgJGdyb3VwLmFkZENsYXNzKCdoYXMtZXJyb3IgaGFzLWRhbmdlcicpXG5cbiAgICAkZ3JvdXAuaGFzQ2xhc3MoJ2hhcy1mZWVkYmFjaycpXG4gICAgICAmJiAkZmVlZGJhY2sucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLnN1Y2Nlc3MpXG4gICAgICAmJiAkZmVlZGJhY2suYWRkQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLmVycm9yKVxuICAgICAgJiYgJGdyb3VwLnJlbW92ZUNsYXNzKCdoYXMtc3VjY2VzcycpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmNsZWFyRXJyb3JzID0gZnVuY3Rpb24gKCRlbCkge1xuICAgIHZhciAkZ3JvdXAgPSAkZWwuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKVxuICAgIHZhciAkYmxvY2sgPSAkZ3JvdXAuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuICAgIHZhciAkZmVlZGJhY2sgPSAkZ3JvdXAuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuXG4gICAgJGVsLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG5cbiAgICAkYmxvY2suaHRtbCgkYmxvY2suZGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcpKVxuICAgICRncm91cC5yZW1vdmVDbGFzcygnaGFzLWVycm9yIGhhcy1kYW5nZXIgaGFzLXN1Y2Nlc3MnKVxuXG4gICAgJGdyb3VwLmhhc0NsYXNzKCdoYXMtZmVlZGJhY2snKVxuICAgICAgJiYgJGZlZWRiYWNrLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5lcnJvcilcbiAgICAgICYmICRmZWVkYmFjay5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suc3VjY2VzcylcbiAgICAgICYmIGdldFZhbHVlKCRlbClcbiAgICAgICYmICRmZWVkYmFjay5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suc3VjY2VzcylcbiAgICAgICYmICRncm91cC5hZGRDbGFzcygnaGFzLXN1Y2Nlc3MnKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5oYXNFcnJvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZmllbGRFcnJvcnMoKSB7XG4gICAgICByZXR1cm4gISEoJCh0aGlzKS5kYXRhKCdicy52YWxpZGF0b3IuZXJyb3JzJykgfHwgW10pLmxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiAhIXRoaXMuJGlucHV0cy5maWx0ZXIoZmllbGRFcnJvcnMpLmxlbmd0aFxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5pc0luY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZmllbGRJbmNvbXBsZXRlKCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0VmFsdWUoJCh0aGlzKSlcbiAgICAgIHJldHVybiAhKHR5cGVvZiB2YWx1ZSA9PSBcInN0cmluZ1wiID8gJC50cmltKHZhbHVlKSA6IHZhbHVlKVxuICAgIH1cblxuICAgIHJldHVybiAhIXRoaXMuJGlucHV0cy5maWx0ZXIoJ1tyZXF1aXJlZF0nKS5maWx0ZXIoZmllbGRJbmNvbXBsZXRlKS5sZW5ndGhcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMudmFsaWRhdGUoKVxuICAgIGlmICh0aGlzLmlzSW5jb21wbGV0ZSgpIHx8IHRoaXMuaGFzRXJyb3JzKCkpIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS50b2dnbGVTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGlzYWJsZSkgcmV0dXJuXG4gICAgdGhpcy4kYnRuLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHRoaXMuaXNJbmNvbXBsZXRlKCkgfHwgdGhpcy5oYXNFcnJvcnMoKSlcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuZGVmZXIgPSBmdW5jdGlvbiAoJGVsLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gJC5wcm94eShjYWxsYmFjaywgdGhpcywgJGVsKVxuICAgIGlmICghdGhpcy5vcHRpb25zLmRlbGF5KSByZXR1cm4gY2FsbGJhY2soKVxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci50aW1lb3V0JykpXG4gICAgJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci50aW1lb3V0Jywgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIHRoaXMub3B0aW9ucy5kZWxheSkpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5lcnJvcilcbiAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suc3VjY2VzcylcblxuICAgIHRoaXMuJGlucHV0c1xuICAgICAgLnJlbW92ZURhdGEoWydicy52YWxpZGF0b3IuZXJyb3JzJywgJ2JzLnZhbGlkYXRvci5kZWZlcnJlZCddKVxuICAgICAgLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJylcbiAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgICB2YXIgdGltZW91dCA9ICR0aGlzLmRhdGEoJ2JzLnZhbGlkYXRvci50aW1lb3V0JylcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KSAmJiAkdGhpcy5yZW1vdmVEYXRhKCdicy52YWxpZGF0b3IudGltZW91dCcpXG4gICAgICB9KVxuXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG4gICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgICAgdmFyIG9yaWdpbmFsQ29udGVudCA9ICR0aGlzLmRhdGEoJ2JzLnZhbGlkYXRvci5vcmlnaW5hbENvbnRlbnQnKVxuXG4gICAgICAgICR0aGlzXG4gICAgICAgICAgLnJlbW92ZURhdGEoJ2JzLnZhbGlkYXRvci5vcmlnaW5hbENvbnRlbnQnKVxuICAgICAgICAgIC5odG1sKG9yaWdpbmFsQ29udGVudClcbiAgICAgIH0pXG5cbiAgICB0aGlzLiRidG4ucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJylcblxuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnLmhhcy1lcnJvciwgLmhhcy1kYW5nZXIsIC5oYXMtc3VjY2VzcycpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3IgaGFzLWRhbmdlciBoYXMtc3VjY2VzcycpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzZXQoKVxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLnJlbW92ZUF0dHIoJ25vdmFsaWRhdGUnKVxuICAgICAgLnJlbW92ZURhdGEoJ2JzLnZhbGlkYXRvcicpXG4gICAgICAub2ZmKCcuYnMudmFsaWRhdG9yJylcblxuICAgIHRoaXMuJGlucHV0c1xuICAgICAgLm9mZignLmJzLnZhbGlkYXRvcicpXG5cbiAgICB0aGlzLm9wdGlvbnMgICAgPSBudWxsXG4gICAgdGhpcy52YWxpZGF0b3JzID0gbnVsbFxuICAgIHRoaXMuJGVsZW1lbnQgICA9IG51bGxcbiAgICB0aGlzLiRidG4gICAgICAgPSBudWxsXG4gICAgdGhpcy4kaW5wdXRzICAgID0gbnVsbFxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIFZBTElEQVRPUiBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIGZ1bmN0aW9uIFBsdWdpbihvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgVmFsaWRhdG9yLkRFRkFVTFRTLCAkdGhpcy5kYXRhKCksIHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy52YWxpZGF0b3InKVxuXG4gICAgICBpZiAoIWRhdGEgJiYgb3B0aW9uID09ICdkZXN0cm95JykgcmV0dXJuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLnZhbGlkYXRvcicsIChkYXRhID0gbmV3IFZhbGlkYXRvcih0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4udmFsaWRhdG9yXG5cbiAgJC5mbi52YWxpZGF0b3IgICAgICAgICAgICAgPSBQbHVnaW5cbiAgJC5mbi52YWxpZGF0b3IuQ29uc3RydWN0b3IgPSBWYWxpZGF0b3JcblxuXG4gIC8vIFZBTElEQVRPUiBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLnZhbGlkYXRvci5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4udmFsaWRhdG9yID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gVkFMSURBVE9SIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09PT09PVxuXG4gICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCdmb3JtW2RhdGEtdG9nZ2xlPVwidmFsaWRhdG9yXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGZvcm0gPSAkKHRoaXMpXG4gICAgICBQbHVnaW4uY2FsbCgkZm9ybSwgJGZvcm0uZGF0YSgpKVxuICAgIH0pXG4gIH0pXG5cbn0oalF1ZXJ5KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy92ZW5kb3IvYm9vdHN0cmFwLWRhdGVwaWNrZXIvanMvYm9vdHN0cmFwLWRhdGVwaWNrZXIubWluLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTcvMDgvMjAyMCAxNDoyMFxuXG4vKiFcbiAqIERhdGVwaWNrZXIgZm9yIEJvb3RzdHJhcCB2MS44LjAgKGh0dHBzOi8vZ2l0aHViLmNvbS91eHNvbHV0aW9ucy9ib290c3RyYXAtZGF0ZXBpY2tlcilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgdjIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKVxuICovXG5cbiFmdW5jdGlvbihhKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxhKTphKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP3JlcXVpcmUoXCJqcXVlcnlcIik6alF1ZXJ5KX0oZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKCl7cmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KERhdGUsYXJndW1lbnRzKSl9ZnVuY3Rpb24gZCgpe3ZhciBhPW5ldyBEYXRlO3JldHVybiBjKGEuZ2V0RnVsbFllYXIoKSxhLmdldE1vbnRoKCksYS5nZXREYXRlKCkpfWZ1bmN0aW9uIGUoYSxiKXtyZXR1cm4gYS5nZXRVVENGdWxsWWVhcigpPT09Yi5nZXRVVENGdWxsWWVhcigpJiZhLmdldFVUQ01vbnRoKCk9PT1iLmdldFVUQ01vbnRoKCkmJmEuZ2V0VVRDRGF0ZSgpPT09Yi5nZXRVVENEYXRlKCl9ZnVuY3Rpb24gZihjLGQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBkIT09YiYmYS5mbi5kYXRlcGlja2VyLmRlcHJlY2F0ZWQoZCksdGhpc1tjXS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGcoYSl7cmV0dXJuIGEmJiFpc05hTihhLmdldFRpbWUoKSl9ZnVuY3Rpb24gaChiLGMpe2Z1bmN0aW9uIGQoYSxiKXtyZXR1cm4gYi50b0xvd2VyQ2FzZSgpfXZhciBlLGY9YShiKS5kYXRhKCksZz17fSxoPW5ldyBSZWdFeHAoXCJeXCIrYy50b0xvd2VyQ2FzZSgpK1wiKFtBLVpdKVwiKTtjPW5ldyBSZWdFeHAoXCJeXCIrYy50b0xvd2VyQ2FzZSgpKTtmb3IodmFyIGkgaW4gZiljLnRlc3QoaSkmJihlPWkucmVwbGFjZShoLGQpLGdbZV09ZltpXSk7cmV0dXJuIGd9ZnVuY3Rpb24gaShiKXt2YXIgYz17fTtpZihxW2JdfHwoYj1iLnNwbGl0KFwiLVwiKVswXSxxW2JdKSl7dmFyIGQ9cVtiXTtyZXR1cm4gYS5lYWNoKHAsZnVuY3Rpb24oYSxiKXtiIGluIGQmJihjW2JdPWRbYl0pfSksY319dmFyIGo9ZnVuY3Rpb24oKXt2YXIgYj17Z2V0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnNsaWNlKGEpWzBdfSxjb250YWluczpmdW5jdGlvbihhKXtmb3IodmFyIGI9YSYmYS52YWx1ZU9mKCksYz0wLGQ9dGhpcy5sZW5ndGg7YzxkO2MrKylpZigwPD10aGlzW2NdLnZhbHVlT2YoKS1iJiZ0aGlzW2NdLnZhbHVlT2YoKS1iPDg2NGU1KXJldHVybiBjO3JldHVybi0xfSxyZW1vdmU6ZnVuY3Rpb24oYSl7dGhpcy5zcGxpY2UoYSwxKX0scmVwbGFjZTpmdW5jdGlvbihiKXtiJiYoYS5pc0FycmF5KGIpfHwoYj1bYl0pLHRoaXMuY2xlYXIoKSx0aGlzLnB1c2guYXBwbHkodGhpcyxiKSl9LGNsZWFyOmZ1bmN0aW9uKCl7dGhpcy5sZW5ndGg9MH0sY29weTpmdW5jdGlvbigpe3ZhciBhPW5ldyBqO3JldHVybiBhLnJlcGxhY2UodGhpcyksYX19O3JldHVybiBmdW5jdGlvbigpe3ZhciBjPVtdO3JldHVybiBjLnB1c2guYXBwbHkoYyxhcmd1bWVudHMpLGEuZXh0ZW5kKGMsYiksY319KCksaz1mdW5jdGlvbihiLGMpe2EuZGF0YShiLFwiZGF0ZXBpY2tlclwiLHRoaXMpLHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyhjKSx0aGlzLmRhdGVzPW5ldyBqLHRoaXMudmlld0RhdGU9dGhpcy5vLmRlZmF1bHRWaWV3RGF0ZSx0aGlzLmZvY3VzRGF0ZT1udWxsLHRoaXMuZWxlbWVudD1hKGIpLHRoaXMuaXNJbnB1dD10aGlzLmVsZW1lbnQuaXMoXCJpbnB1dFwiKSx0aGlzLmlucHV0RmllbGQ9dGhpcy5pc0lucHV0P3RoaXMuZWxlbWVudDp0aGlzLmVsZW1lbnQuZmluZChcImlucHV0XCIpLHRoaXMuY29tcG9uZW50PSEhdGhpcy5lbGVtZW50Lmhhc0NsYXNzKFwiZGF0ZVwiKSYmdGhpcy5lbGVtZW50LmZpbmQoXCIuYWRkLW9uLCAuaW5wdXQtZ3JvdXAtYWRkb24sIC5idG5cIiksdGhpcy5jb21wb25lbnQmJjA9PT10aGlzLmNvbXBvbmVudC5sZW5ndGgmJih0aGlzLmNvbXBvbmVudD0hMSksdGhpcy5pc0lubGluZT0hdGhpcy5jb21wb25lbnQmJnRoaXMuZWxlbWVudC5pcyhcImRpdlwiKSx0aGlzLnBpY2tlcj1hKHIudGVtcGxhdGUpLHRoaXMuX2NoZWNrX3RlbXBsYXRlKHRoaXMuby50ZW1wbGF0ZXMubGVmdEFycm93KSYmdGhpcy5waWNrZXIuZmluZChcIi5wcmV2XCIpLmh0bWwodGhpcy5vLnRlbXBsYXRlcy5sZWZ0QXJyb3cpLHRoaXMuX2NoZWNrX3RlbXBsYXRlKHRoaXMuby50ZW1wbGF0ZXMucmlnaHRBcnJvdykmJnRoaXMucGlja2VyLmZpbmQoXCIubmV4dFwiKS5odG1sKHRoaXMuby50ZW1wbGF0ZXMucmlnaHRBcnJvdyksdGhpcy5fYnVpbGRFdmVudHMoKSx0aGlzLl9hdHRhY2hFdmVudHMoKSx0aGlzLmlzSW5saW5lP3RoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1pbmxpbmVcIikuYXBwZW5kVG8odGhpcy5lbGVtZW50KTp0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItZHJvcGRvd24gZHJvcGRvd24tbWVudVwiKSx0aGlzLm8ucnRsJiZ0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItcnRsXCIpLHRoaXMuby5jYWxlbmRhcldlZWtzJiZ0aGlzLnBpY2tlci5maW5kKFwiLmRhdGVwaWNrZXItZGF5cyAuZGF0ZXBpY2tlci1zd2l0Y2gsIHRoZWFkIC5kYXRlcGlja2VyLXRpdGxlLCB0Zm9vdCAudG9kYXksIHRmb290IC5jbGVhclwiKS5hdHRyKFwiY29sc3BhblwiLGZ1bmN0aW9uKGEsYil7cmV0dXJuIE51bWJlcihiKSsxfSksdGhpcy5fcHJvY2Vzc19vcHRpb25zKHtzdGFydERhdGU6dGhpcy5fby5zdGFydERhdGUsZW5kRGF0ZTp0aGlzLl9vLmVuZERhdGUsZGF5c09mV2Vla0Rpc2FibGVkOnRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQsZGF5c09mV2Vla0hpZ2hsaWdodGVkOnRoaXMuby5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQsZGF0ZXNEaXNhYmxlZDp0aGlzLm8uZGF0ZXNEaXNhYmxlZH0pLHRoaXMuX2FsbG93X3VwZGF0ZT0hMSx0aGlzLnNldFZpZXdNb2RlKHRoaXMuby5zdGFydFZpZXcpLHRoaXMuX2FsbG93X3VwZGF0ZT0hMCx0aGlzLmZpbGxEb3coKSx0aGlzLmZpbGxNb250aHMoKSx0aGlzLnVwZGF0ZSgpLHRoaXMuaXNJbmxpbmUmJnRoaXMuc2hvdygpfTtrLnByb3RvdHlwZT17Y29uc3RydWN0b3I6ayxfcmVzb2x2ZVZpZXdOYW1lOmZ1bmN0aW9uKGIpe3JldHVybiBhLmVhY2goci52aWV3TW9kZXMsZnVuY3Rpb24oYyxkKXtpZihiPT09Y3x8YS5pbkFycmF5KGIsZC5uYW1lcykhPT0tMSlyZXR1cm4gYj1jLCExfSksYn0sX3Jlc29sdmVEYXlzT2ZXZWVrOmZ1bmN0aW9uKGIpe3JldHVybiBhLmlzQXJyYXkoYil8fChiPWIuc3BsaXQoL1ssXFxzXSovKSksYS5tYXAoYixOdW1iZXIpfSxfY2hlY2tfdGVtcGxhdGU6ZnVuY3Rpb24oYyl7dHJ5e2lmKGM9PT1ifHxcIlwiPT09YylyZXR1cm4hMTtpZigoYy5tYXRjaCgvWzw+XS9nKXx8W10pLmxlbmd0aDw9MClyZXR1cm4hMDt2YXIgZD1hKGMpO3JldHVybiBkLmxlbmd0aD4wfWNhdGNoKGEpe3JldHVybiExfX0sX3Byb2Nlc3Nfb3B0aW9uczpmdW5jdGlvbihiKXt0aGlzLl9vPWEuZXh0ZW5kKHt9LHRoaXMuX28sYik7dmFyIGU9dGhpcy5vPWEuZXh0ZW5kKHt9LHRoaXMuX28pLGY9ZS5sYW5ndWFnZTtxW2ZdfHwoZj1mLnNwbGl0KFwiLVwiKVswXSxxW2ZdfHwoZj1vLmxhbmd1YWdlKSksZS5sYW5ndWFnZT1mLGUuc3RhcnRWaWV3PXRoaXMuX3Jlc29sdmVWaWV3TmFtZShlLnN0YXJ0VmlldyksZS5taW5WaWV3TW9kZT10aGlzLl9yZXNvbHZlVmlld05hbWUoZS5taW5WaWV3TW9kZSksZS5tYXhWaWV3TW9kZT10aGlzLl9yZXNvbHZlVmlld05hbWUoZS5tYXhWaWV3TW9kZSksZS5zdGFydFZpZXc9TWF0aC5tYXgodGhpcy5vLm1pblZpZXdNb2RlLE1hdGgubWluKHRoaXMuby5tYXhWaWV3TW9kZSxlLnN0YXJ0VmlldykpLGUubXVsdGlkYXRlIT09ITAmJihlLm11bHRpZGF0ZT1OdW1iZXIoZS5tdWx0aWRhdGUpfHwhMSxlLm11bHRpZGF0ZSE9PSExJiYoZS5tdWx0aWRhdGU9TWF0aC5tYXgoMCxlLm11bHRpZGF0ZSkpKSxlLm11bHRpZGF0ZVNlcGFyYXRvcj1TdHJpbmcoZS5tdWx0aWRhdGVTZXBhcmF0b3IpLGUud2Vla1N0YXJ0JT03LGUud2Vla0VuZD0oZS53ZWVrU3RhcnQrNiklNzt2YXIgZz1yLnBhcnNlRm9ybWF0KGUuZm9ybWF0KTtlLnN0YXJ0RGF0ZSE9PS0oMS8wKSYmKGUuc3RhcnREYXRlP2Uuc3RhcnREYXRlIGluc3RhbmNlb2YgRGF0ZT9lLnN0YXJ0RGF0ZT10aGlzLl9sb2NhbF90b191dGModGhpcy5femVyb190aW1lKGUuc3RhcnREYXRlKSk6ZS5zdGFydERhdGU9ci5wYXJzZURhdGUoZS5zdGFydERhdGUsZyxlLmxhbmd1YWdlLGUuYXNzdW1lTmVhcmJ5WWVhcik6ZS5zdGFydERhdGU9LSgxLzApKSxlLmVuZERhdGUhPT0xLzAmJihlLmVuZERhdGU/ZS5lbmREYXRlIGluc3RhbmNlb2YgRGF0ZT9lLmVuZERhdGU9dGhpcy5fbG9jYWxfdG9fdXRjKHRoaXMuX3plcm9fdGltZShlLmVuZERhdGUpKTplLmVuZERhdGU9ci5wYXJzZURhdGUoZS5lbmREYXRlLGcsZS5sYW5ndWFnZSxlLmFzc3VtZU5lYXJieVllYXIpOmUuZW5kRGF0ZT0xLzApLGUuZGF5c09mV2Vla0Rpc2FibGVkPXRoaXMuX3Jlc29sdmVEYXlzT2ZXZWVrKGUuZGF5c09mV2Vla0Rpc2FibGVkfHxbXSksZS5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ9dGhpcy5fcmVzb2x2ZURheXNPZldlZWsoZS5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWR8fFtdKSxlLmRhdGVzRGlzYWJsZWQ9ZS5kYXRlc0Rpc2FibGVkfHxbXSxhLmlzQXJyYXkoZS5kYXRlc0Rpc2FibGVkKXx8KGUuZGF0ZXNEaXNhYmxlZD1lLmRhdGVzRGlzYWJsZWQuc3BsaXQoXCIsXCIpKSxlLmRhdGVzRGlzYWJsZWQ9YS5tYXAoZS5kYXRlc0Rpc2FibGVkLGZ1bmN0aW9uKGEpe3JldHVybiByLnBhcnNlRGF0ZShhLGcsZS5sYW5ndWFnZSxlLmFzc3VtZU5lYXJieVllYXIpfSk7dmFyIGg9U3RyaW5nKGUub3JpZW50YXRpb24pLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1xccysvZyksaT1lLm9yaWVudGF0aW9uLnRvTG93ZXJDYXNlKCk7aWYoaD1hLmdyZXAoaCxmdW5jdGlvbihhKXtyZXR1cm4vXmF1dG98bGVmdHxyaWdodHx0b3B8Ym90dG9tJC8udGVzdChhKX0pLGUub3JpZW50YXRpb249e3g6XCJhdXRvXCIseTpcImF1dG9cIn0saSYmXCJhdXRvXCIhPT1pKWlmKDE9PT1oLmxlbmd0aClzd2l0Y2goaFswXSl7Y2FzZVwidG9wXCI6Y2FzZVwiYm90dG9tXCI6ZS5vcmllbnRhdGlvbi55PWhbMF07YnJlYWs7Y2FzZVwibGVmdFwiOmNhc2VcInJpZ2h0XCI6ZS5vcmllbnRhdGlvbi54PWhbMF19ZWxzZSBpPWEuZ3JlcChoLGZ1bmN0aW9uKGEpe3JldHVybi9ebGVmdHxyaWdodCQvLnRlc3QoYSl9KSxlLm9yaWVudGF0aW9uLng9aVswXXx8XCJhdXRvXCIsaT1hLmdyZXAoaCxmdW5jdGlvbihhKXtyZXR1cm4vXnRvcHxib3R0b20kLy50ZXN0KGEpfSksZS5vcmllbnRhdGlvbi55PWlbMF18fFwiYXV0b1wiO2Vsc2U7aWYoZS5kZWZhdWx0Vmlld0RhdGUgaW5zdGFuY2VvZiBEYXRlfHxcInN0cmluZ1wiPT10eXBlb2YgZS5kZWZhdWx0Vmlld0RhdGUpZS5kZWZhdWx0Vmlld0RhdGU9ci5wYXJzZURhdGUoZS5kZWZhdWx0Vmlld0RhdGUsZyxlLmxhbmd1YWdlLGUuYXNzdW1lTmVhcmJ5WWVhcik7ZWxzZSBpZihlLmRlZmF1bHRWaWV3RGF0ZSl7dmFyIGo9ZS5kZWZhdWx0Vmlld0RhdGUueWVhcnx8KG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpLGs9ZS5kZWZhdWx0Vmlld0RhdGUubW9udGh8fDAsbD1lLmRlZmF1bHRWaWV3RGF0ZS5kYXl8fDE7ZS5kZWZhdWx0Vmlld0RhdGU9YyhqLGssbCl9ZWxzZSBlLmRlZmF1bHRWaWV3RGF0ZT1kKCl9LF9ldmVudHM6W10sX3NlY29uZGFyeUV2ZW50czpbXSxfYXBwbHlFdmVudHM6ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQsZSxmPTA7ZjxhLmxlbmd0aDtmKyspYz1hW2ZdWzBdLDI9PT1hW2ZdLmxlbmd0aD8oZD1iLGU9YVtmXVsxXSk6Mz09PWFbZl0ubGVuZ3RoJiYoZD1hW2ZdWzFdLGU9YVtmXVsyXSksYy5vbihlLGQpfSxfdW5hcHBseUV2ZW50czpmdW5jdGlvbihhKXtmb3IodmFyIGMsZCxlLGY9MDtmPGEubGVuZ3RoO2YrKyljPWFbZl1bMF0sMj09PWFbZl0ubGVuZ3RoPyhlPWIsZD1hW2ZdWzFdKTozPT09YVtmXS5sZW5ndGgmJihlPWFbZl1bMV0sZD1hW2ZdWzJdKSxjLm9mZihkLGUpfSxfYnVpbGRFdmVudHM6ZnVuY3Rpb24oKXt2YXIgYj17a2V5dXA6YS5wcm94eShmdW5jdGlvbihiKXthLmluQXJyYXkoYi5rZXlDb2RlLFsyNywzNywzOSwzOCw0MCwzMiwxMyw5XSk9PT0tMSYmdGhpcy51cGRhdGUoKX0sdGhpcyksa2V5ZG93bjphLnByb3h5KHRoaXMua2V5ZG93bix0aGlzKSxwYXN0ZTphLnByb3h5KHRoaXMucGFzdGUsdGhpcyl9O3RoaXMuby5zaG93T25Gb2N1cz09PSEwJiYoYi5mb2N1cz1hLnByb3h5KHRoaXMuc2hvdyx0aGlzKSksdGhpcy5pc0lucHV0P3RoaXMuX2V2ZW50cz1bW3RoaXMuZWxlbWVudCxiXV06dGhpcy5jb21wb25lbnQmJnRoaXMuaW5wdXRGaWVsZC5sZW5ndGg/dGhpcy5fZXZlbnRzPVtbdGhpcy5pbnB1dEZpZWxkLGJdLFt0aGlzLmNvbXBvbmVudCx7Y2xpY2s6YS5wcm94eSh0aGlzLnNob3csdGhpcyl9XV06dGhpcy5fZXZlbnRzPVtbdGhpcy5lbGVtZW50LHtjbGljazphLnByb3h5KHRoaXMuc2hvdyx0aGlzKSxrZXlkb3duOmEucHJveHkodGhpcy5rZXlkb3duLHRoaXMpfV1dLHRoaXMuX2V2ZW50cy5wdXNoKFt0aGlzLmVsZW1lbnQsXCIqXCIse2JsdXI6YS5wcm94eShmdW5jdGlvbihhKXt0aGlzLl9mb2N1c2VkX2Zyb209YS50YXJnZXR9LHRoaXMpfV0sW3RoaXMuZWxlbWVudCx7Ymx1cjphLnByb3h5KGZ1bmN0aW9uKGEpe3RoaXMuX2ZvY3VzZWRfZnJvbT1hLnRhcmdldH0sdGhpcyl9XSksdGhpcy5vLmltbWVkaWF0ZVVwZGF0ZXMmJnRoaXMuX2V2ZW50cy5wdXNoKFt0aGlzLmVsZW1lbnQse1wiY2hhbmdlWWVhciBjaGFuZ2VNb250aFwiOmEucHJveHkoZnVuY3Rpb24oYSl7dGhpcy51cGRhdGUoYS5kYXRlKX0sdGhpcyl9XSksdGhpcy5fc2Vjb25kYXJ5RXZlbnRzPVtbdGhpcy5waWNrZXIse2NsaWNrOmEucHJveHkodGhpcy5jbGljayx0aGlzKX1dLFt0aGlzLnBpY2tlcixcIi5wcmV2LCAubmV4dFwiLHtjbGljazphLnByb3h5KHRoaXMubmF2QXJyb3dzQ2xpY2ssdGhpcyl9XSxbdGhpcy5waWNrZXIsXCIuZGF5Om5vdCguZGlzYWJsZWQpXCIse2NsaWNrOmEucHJveHkodGhpcy5kYXlDZWxsQ2xpY2ssdGhpcyl9XSxbYSh3aW5kb3cpLHtyZXNpemU6YS5wcm94eSh0aGlzLnBsYWNlLHRoaXMpfV0sW2EoZG9jdW1lbnQpLHtcIm1vdXNlZG93biB0b3VjaHN0YXJ0XCI6YS5wcm94eShmdW5jdGlvbihhKXt0aGlzLmVsZW1lbnQuaXMoYS50YXJnZXQpfHx0aGlzLmVsZW1lbnQuZmluZChhLnRhcmdldCkubGVuZ3RofHx0aGlzLnBpY2tlci5pcyhhLnRhcmdldCl8fHRoaXMucGlja2VyLmZpbmQoYS50YXJnZXQpLmxlbmd0aHx8dGhpcy5pc0lubGluZXx8dGhpcy5oaWRlKCl9LHRoaXMpfV1dfSxfYXR0YWNoRXZlbnRzOmZ1bmN0aW9uKCl7dGhpcy5fZGV0YWNoRXZlbnRzKCksdGhpcy5fYXBwbHlFdmVudHModGhpcy5fZXZlbnRzKX0sX2RldGFjaEV2ZW50czpmdW5jdGlvbigpe3RoaXMuX3VuYXBwbHlFdmVudHModGhpcy5fZXZlbnRzKX0sX2F0dGFjaFNlY29uZGFyeUV2ZW50czpmdW5jdGlvbigpe3RoaXMuX2RldGFjaFNlY29uZGFyeUV2ZW50cygpLHRoaXMuX2FwcGx5RXZlbnRzKHRoaXMuX3NlY29uZGFyeUV2ZW50cyl9LF9kZXRhY2hTZWNvbmRhcnlFdmVudHM6ZnVuY3Rpb24oKXt0aGlzLl91bmFwcGx5RXZlbnRzKHRoaXMuX3NlY29uZGFyeUV2ZW50cyl9LF90cmlnZ2VyOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9Y3x8dGhpcy5kYXRlcy5nZXQoLTEpLGU9dGhpcy5fdXRjX3RvX2xvY2FsKGQpO3RoaXMuZWxlbWVudC50cmlnZ2VyKHt0eXBlOmIsZGF0ZTplLHZpZXdNb2RlOnRoaXMudmlld01vZGUsZGF0ZXM6YS5tYXAodGhpcy5kYXRlcyx0aGlzLl91dGNfdG9fbG9jYWwpLGZvcm1hdDphLnByb3h5KGZ1bmN0aW9uKGEsYil7MD09PWFyZ3VtZW50cy5sZW5ndGg/KGE9dGhpcy5kYXRlcy5sZW5ndGgtMSxiPXRoaXMuby5mb3JtYXQpOlwic3RyaW5nXCI9PXR5cGVvZiBhJiYoYj1hLGE9dGhpcy5kYXRlcy5sZW5ndGgtMSksYj1ifHx0aGlzLm8uZm9ybWF0O3ZhciBjPXRoaXMuZGF0ZXMuZ2V0KGEpO3JldHVybiByLmZvcm1hdERhdGUoYyxiLHRoaXMuby5sYW5ndWFnZSl9LHRoaXMpfSl9LHNob3c6ZnVuY3Rpb24oKXtpZighKHRoaXMuaW5wdXRGaWVsZC5wcm9wKFwiZGlzYWJsZWRcIil8fHRoaXMuaW5wdXRGaWVsZC5wcm9wKFwicmVhZG9ubHlcIikmJnRoaXMuby5lbmFibGVPblJlYWRvbmx5PT09ITEpKXJldHVybiB0aGlzLmlzSW5saW5lfHx0aGlzLnBpY2tlci5hcHBlbmRUbyh0aGlzLm8uY29udGFpbmVyKSx0aGlzLnBsYWNlKCksdGhpcy5waWNrZXIuc2hvdygpLHRoaXMuX2F0dGFjaFNlY29uZGFyeUV2ZW50cygpLHRoaXMuX3RyaWdnZXIoXCJzaG93XCIpLCh3aW5kb3cubmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHN8fFwib250b3VjaHN0YXJ0XCJpbiBkb2N1bWVudCkmJnRoaXMuby5kaXNhYmxlVG91Y2hLZXlib2FyZCYmYSh0aGlzLmVsZW1lbnQpLmJsdXIoKSx0aGlzfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNJbmxpbmV8fCF0aGlzLnBpY2tlci5pcyhcIjp2aXNpYmxlXCIpP3RoaXM6KHRoaXMuZm9jdXNEYXRlPW51bGwsdGhpcy5waWNrZXIuaGlkZSgpLmRldGFjaCgpLHRoaXMuX2RldGFjaFNlY29uZGFyeUV2ZW50cygpLHRoaXMuc2V0Vmlld01vZGUodGhpcy5vLnN0YXJ0VmlldyksdGhpcy5vLmZvcmNlUGFyc2UmJnRoaXMuaW5wdXRGaWVsZC52YWwoKSYmdGhpcy5zZXRWYWx1ZSgpLHRoaXMuX3RyaWdnZXIoXCJoaWRlXCIpLHRoaXMpfSxkZXN0cm95OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaGlkZSgpLHRoaXMuX2RldGFjaEV2ZW50cygpLHRoaXMuX2RldGFjaFNlY29uZGFyeUV2ZW50cygpLHRoaXMucGlja2VyLnJlbW92ZSgpLGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGVwaWNrZXIsdGhpcy5pc0lucHV0fHxkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlLHRoaXN9LHBhc3RlOmZ1bmN0aW9uKGIpe3ZhciBjO2lmKGIub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhJiZiLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YS50eXBlcyYmYS5pbkFycmF5KFwidGV4dC9wbGFpblwiLGIub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhLnR5cGVzKSE9PS0xKWM9Yi5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7ZWxzZXtpZighd2luZG93LmNsaXBib2FyZERhdGEpcmV0dXJuO2M9d2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcIlRleHRcIil9dGhpcy5zZXREYXRlKGMpLHRoaXMudXBkYXRlKCksYi5wcmV2ZW50RGVmYXVsdCgpfSxfdXRjX3RvX2xvY2FsOmZ1bmN0aW9uKGEpe2lmKCFhKXJldHVybiBhO3ZhciBiPW5ldyBEYXRlKGEuZ2V0VGltZSgpKzZlNCphLmdldFRpbWV6b25lT2Zmc2V0KCkpO3JldHVybiBiLmdldFRpbWV6b25lT2Zmc2V0KCkhPT1hLmdldFRpbWV6b25lT2Zmc2V0KCkmJihiPW5ldyBEYXRlKGEuZ2V0VGltZSgpKzZlNCpiLmdldFRpbWV6b25lT2Zmc2V0KCkpKSxifSxfbG9jYWxfdG9fdXRjOmZ1bmN0aW9uKGEpe3JldHVybiBhJiZuZXcgRGF0ZShhLmdldFRpbWUoKS02ZTQqYS5nZXRUaW1lem9uZU9mZnNldCgpKX0sX3plcm9fdGltZTpmdW5jdGlvbihhKXtyZXR1cm4gYSYmbmV3IERhdGUoYS5nZXRGdWxsWWVhcigpLGEuZ2V0TW9udGgoKSxhLmdldERhdGUoKSl9LF96ZXJvX3V0Y190aW1lOmZ1bmN0aW9uKGEpe3JldHVybiBhJiZjKGEuZ2V0VVRDRnVsbFllYXIoKSxhLmdldFVUQ01vbnRoKCksYS5nZXRVVENEYXRlKCkpfSxnZXREYXRlczpmdW5jdGlvbigpe3JldHVybiBhLm1hcCh0aGlzLmRhdGVzLHRoaXMuX3V0Y190b19sb2NhbCl9LGdldFVUQ0RhdGVzOmZ1bmN0aW9uKCl7cmV0dXJuIGEubWFwKHRoaXMuZGF0ZXMsZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBEYXRlKGEpfSl9LGdldERhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdXRjX3RvX2xvY2FsKHRoaXMuZ2V0VVRDRGF0ZSgpKX0sZ2V0VVRDRGF0ZTpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZGF0ZXMuZ2V0KC0xKTtyZXR1cm4gYSE9PWI/bmV3IERhdGUoYSk6bnVsbH0sY2xlYXJEYXRlczpmdW5jdGlvbigpe3RoaXMuaW5wdXRGaWVsZC52YWwoXCJcIiksdGhpcy51cGRhdGUoKSx0aGlzLl90cmlnZ2VyKFwiY2hhbmdlRGF0ZVwiKSx0aGlzLm8uYXV0b2Nsb3NlJiZ0aGlzLmhpZGUoKX0sc2V0RGF0ZXM6ZnVuY3Rpb24oKXt2YXIgYj1hLmlzQXJyYXkoYXJndW1lbnRzWzBdKT9hcmd1bWVudHNbMF06YXJndW1lbnRzO3JldHVybiB0aGlzLnVwZGF0ZS5hcHBseSh0aGlzLGIpLHRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VEYXRlXCIpLHRoaXMuc2V0VmFsdWUoKSx0aGlzfSxzZXRVVENEYXRlczpmdW5jdGlvbigpe3ZhciBiPWEuaXNBcnJheShhcmd1bWVudHNbMF0pP2FyZ3VtZW50c1swXTphcmd1bWVudHM7cmV0dXJuIHRoaXMuc2V0RGF0ZXMuYXBwbHkodGhpcyxhLm1hcChiLHRoaXMuX3V0Y190b19sb2NhbCkpLHRoaXN9LHNldERhdGU6ZihcInNldERhdGVzXCIpLHNldFVUQ0RhdGU6ZihcInNldFVUQ0RhdGVzXCIpLHJlbW92ZTpmKFwiZGVzdHJveVwiLFwiTWV0aG9kIGByZW1vdmVgIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDIuMC4gVXNlIGBkZXN0cm95YCBpbnN0ZWFkXCIpLHNldFZhbHVlOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5nZXRGb3JtYXR0ZWREYXRlKCk7cmV0dXJuIHRoaXMuaW5wdXRGaWVsZC52YWwoYSksdGhpc30sZ2V0Rm9ybWF0dGVkRGF0ZTpmdW5jdGlvbihjKXtjPT09YiYmKGM9dGhpcy5vLmZvcm1hdCk7dmFyIGQ9dGhpcy5vLmxhbmd1YWdlO3JldHVybiBhLm1hcCh0aGlzLmRhdGVzLGZ1bmN0aW9uKGEpe3JldHVybiByLmZvcm1hdERhdGUoYSxjLGQpfSkuam9pbih0aGlzLm8ubXVsdGlkYXRlU2VwYXJhdG9yKX0sZ2V0U3RhcnREYXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuby5zdGFydERhdGV9LHNldFN0YXJ0RGF0ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fcHJvY2Vzc19vcHRpb25zKHtzdGFydERhdGU6YX0pLHRoaXMudXBkYXRlKCksdGhpcy51cGRhdGVOYXZBcnJvd3MoKSx0aGlzfSxnZXRFbmREYXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuby5lbmREYXRlfSxzZXRFbmREYXRlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9wcm9jZXNzX29wdGlvbnMoe2VuZERhdGU6YX0pLHRoaXMudXBkYXRlKCksdGhpcy51cGRhdGVOYXZBcnJvd3MoKSx0aGlzfSxzZXREYXlzT2ZXZWVrRGlzYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7ZGF5c09mV2Vla0Rpc2FibGVkOmF9KSx0aGlzLnVwZGF0ZSgpLHRoaXN9LHNldERheXNPZldlZWtIaWdobGlnaHRlZDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fcHJvY2Vzc19vcHRpb25zKHtkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6YX0pLHRoaXMudXBkYXRlKCksdGhpc30sc2V0RGF0ZXNEaXNhYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fcHJvY2Vzc19vcHRpb25zKHtkYXRlc0Rpc2FibGVkOmF9KSx0aGlzLnVwZGF0ZSgpLHRoaXN9LHBsYWNlOmZ1bmN0aW9uKCl7aWYodGhpcy5pc0lubGluZSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnBpY2tlci5vdXRlcldpZHRoKCksYz10aGlzLnBpY2tlci5vdXRlckhlaWdodCgpLGQ9MTAsZT1hKHRoaXMuby5jb250YWluZXIpLGY9ZS53aWR0aCgpLGc9XCJib2R5XCI9PT10aGlzLm8uY29udGFpbmVyP2EoZG9jdW1lbnQpLnNjcm9sbFRvcCgpOmUuc2Nyb2xsVG9wKCksaD1lLm9mZnNldCgpLGk9WzBdO3RoaXMuZWxlbWVudC5wYXJlbnRzKCkuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcykuY3NzKFwiei1pbmRleFwiKTtcImF1dG9cIiE9PWImJjAhPT1OdW1iZXIoYikmJmkucHVzaChOdW1iZXIoYikpfSk7dmFyIGo9TWF0aC5tYXguYXBwbHkoTWF0aCxpKSt0aGlzLm8uekluZGV4T2Zmc2V0LGs9dGhpcy5jb21wb25lbnQ/dGhpcy5jb21wb25lbnQucGFyZW50KCkub2Zmc2V0KCk6dGhpcy5lbGVtZW50Lm9mZnNldCgpLGw9dGhpcy5jb21wb25lbnQ/dGhpcy5jb21wb25lbnQub3V0ZXJIZWlnaHQoITApOnRoaXMuZWxlbWVudC5vdXRlckhlaWdodCghMSksbT10aGlzLmNvbXBvbmVudD90aGlzLmNvbXBvbmVudC5vdXRlcldpZHRoKCEwKTp0aGlzLmVsZW1lbnQub3V0ZXJXaWR0aCghMSksbj1rLmxlZnQtaC5sZWZ0LG89ay50b3AtaC50b3A7XCJib2R5XCIhPT10aGlzLm8uY29udGFpbmVyJiYobys9ZyksdGhpcy5waWNrZXIucmVtb3ZlQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC10b3AgZGF0ZXBpY2tlci1vcmllbnQtYm90dG9tIGRhdGVwaWNrZXItb3JpZW50LXJpZ2h0IGRhdGVwaWNrZXItb3JpZW50LWxlZnRcIiksXCJhdXRvXCIhPT10aGlzLm8ub3JpZW50YXRpb24ueD8odGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC1cIit0aGlzLm8ub3JpZW50YXRpb24ueCksXCJyaWdodFwiPT09dGhpcy5vLm9yaWVudGF0aW9uLngmJihuLT1iLW0pKTprLmxlZnQ8MD8odGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC1sZWZ0XCIpLG4tPWsubGVmdC1kKTpuK2I+Zj8odGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC1yaWdodFwiKSxuKz1tLWIpOnRoaXMuby5ydGw/dGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC1yaWdodFwiKTp0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItb3JpZW50LWxlZnRcIik7dmFyIHAscT10aGlzLm8ub3JpZW50YXRpb24ueTtpZihcImF1dG9cIj09PXEmJihwPS1nK28tYyxxPXA8MD9cImJvdHRvbVwiOlwidG9wXCIpLHRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtXCIrcSksXCJ0b3BcIj09PXE/by09YytwYXJzZUludCh0aGlzLnBpY2tlci5jc3MoXCJwYWRkaW5nLXRvcFwiKSk6bys9bCx0aGlzLm8ucnRsKXt2YXIgcj1mLShuK20pO3RoaXMucGlja2VyLmNzcyh7dG9wOm8scmlnaHQ6cix6SW5kZXg6an0pfWVsc2UgdGhpcy5waWNrZXIuY3NzKHt0b3A6byxsZWZ0Om4sekluZGV4Omp9KTtyZXR1cm4gdGhpc30sX2FsbG93X3VwZGF0ZTohMCx1cGRhdGU6ZnVuY3Rpb24oKXtpZighdGhpcy5fYWxsb3dfdXBkYXRlKXJldHVybiB0aGlzO3ZhciBiPXRoaXMuZGF0ZXMuY29weSgpLGM9W10sZD0hMTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oYS5lYWNoKGFyZ3VtZW50cyxhLnByb3h5KGZ1bmN0aW9uKGEsYil7YiBpbnN0YW5jZW9mIERhdGUmJihiPXRoaXMuX2xvY2FsX3RvX3V0YyhiKSksYy5wdXNoKGIpfSx0aGlzKSksZD0hMCk6KGM9dGhpcy5pc0lucHV0P3RoaXMuZWxlbWVudC52YWwoKTp0aGlzLmVsZW1lbnQuZGF0YShcImRhdGVcIil8fHRoaXMuaW5wdXRGaWVsZC52YWwoKSxjPWMmJnRoaXMuby5tdWx0aWRhdGU/Yy5zcGxpdCh0aGlzLm8ubXVsdGlkYXRlU2VwYXJhdG9yKTpbY10sZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZSksYz1hLm1hcChjLGEucHJveHkoZnVuY3Rpb24oYSl7cmV0dXJuIHIucGFyc2VEYXRlKGEsdGhpcy5vLmZvcm1hdCx0aGlzLm8ubGFuZ3VhZ2UsdGhpcy5vLmFzc3VtZU5lYXJieVllYXIpfSx0aGlzKSksYz1hLmdyZXAoYyxhLnByb3h5KGZ1bmN0aW9uKGEpe3JldHVybiF0aGlzLmRhdGVXaXRoaW5SYW5nZShhKXx8IWF9LHRoaXMpLCEwKSx0aGlzLmRhdGVzLnJlcGxhY2UoYyksdGhpcy5vLnVwZGF0ZVZpZXdEYXRlJiYodGhpcy5kYXRlcy5sZW5ndGg/dGhpcy52aWV3RGF0ZT1uZXcgRGF0ZSh0aGlzLmRhdGVzLmdldCgtMSkpOnRoaXMudmlld0RhdGU8dGhpcy5vLnN0YXJ0RGF0ZT90aGlzLnZpZXdEYXRlPW5ldyBEYXRlKHRoaXMuby5zdGFydERhdGUpOnRoaXMudmlld0RhdGU+dGhpcy5vLmVuZERhdGU/dGhpcy52aWV3RGF0ZT1uZXcgRGF0ZSh0aGlzLm8uZW5kRGF0ZSk6dGhpcy52aWV3RGF0ZT10aGlzLm8uZGVmYXVsdFZpZXdEYXRlKSxkPyh0aGlzLnNldFZhbHVlKCksdGhpcy5lbGVtZW50LmNoYW5nZSgpKTp0aGlzLmRhdGVzLmxlbmd0aCYmU3RyaW5nKGIpIT09U3RyaW5nKHRoaXMuZGF0ZXMpJiZkJiYodGhpcy5fdHJpZ2dlcihcImNoYW5nZURhdGVcIiksdGhpcy5lbGVtZW50LmNoYW5nZSgpKSwhdGhpcy5kYXRlcy5sZW5ndGgmJmIubGVuZ3RoJiYodGhpcy5fdHJpZ2dlcihcImNsZWFyRGF0ZVwiKSx0aGlzLmVsZW1lbnQuY2hhbmdlKCkpLHRoaXMuZmlsbCgpLHRoaXN9LGZpbGxEb3c6ZnVuY3Rpb24oKXtpZih0aGlzLm8uc2hvd1dlZWtEYXlzKXt2YXIgYj10aGlzLm8ud2Vla1N0YXJ0LGM9XCI8dHI+XCI7Zm9yKHRoaXMuby5jYWxlbmRhcldlZWtzJiYoYys9Jzx0aCBjbGFzcz1cImN3XCI+JiMxNjA7PC90aD4nKTtiPHRoaXMuby53ZWVrU3RhcnQrNzspYys9Jzx0aCBjbGFzcz1cImRvdycsYS5pbkFycmF5KGIsdGhpcy5vLmRheXNPZldlZWtEaXNhYmxlZCkhPT0tMSYmKGMrPVwiIGRpc2FibGVkXCIpLGMrPSdcIj4nK3FbdGhpcy5vLmxhbmd1YWdlXS5kYXlzTWluW2IrKyU3XStcIjwvdGg+XCI7Yys9XCI8L3RyPlwiLHRoaXMucGlja2VyLmZpbmQoXCIuZGF0ZXBpY2tlci1kYXlzIHRoZWFkXCIpLmFwcGVuZChjKX19LGZpbGxNb250aHM6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj10aGlzLl91dGNfdG9fbG9jYWwodGhpcy52aWV3RGF0ZSksYz1cIlwiLGQ9MDtkPDEyO2QrKylhPWImJmIuZ2V0TW9udGgoKT09PWQ/XCIgZm9jdXNlZFwiOlwiXCIsYys9JzxzcGFuIGNsYXNzPVwibW9udGgnK2ErJ1wiPicrcVt0aGlzLm8ubGFuZ3VhZ2VdLm1vbnRoc1Nob3J0W2RdK1wiPC9zcGFuPlwiO3RoaXMucGlja2VyLmZpbmQoXCIuZGF0ZXBpY2tlci1tb250aHMgdGRcIikuaHRtbChjKX0sc2V0UmFuZ2U6ZnVuY3Rpb24oYil7YiYmYi5sZW5ndGg/dGhpcy5yYW5nZT1hLm1hcChiLGZ1bmN0aW9uKGEpe3JldHVybiBhLnZhbHVlT2YoKX0pOmRlbGV0ZSB0aGlzLnJhbmdlLHRoaXMuZmlsbCgpfSxnZXRDbGFzc05hbWVzOmZ1bmN0aW9uKGIpe3ZhciBjPVtdLGY9dGhpcy52aWV3RGF0ZS5nZXRVVENGdWxsWWVhcigpLGc9dGhpcy52aWV3RGF0ZS5nZXRVVENNb250aCgpLGg9ZCgpO3JldHVybiBiLmdldFVUQ0Z1bGxZZWFyKCk8Znx8Yi5nZXRVVENGdWxsWWVhcigpPT09ZiYmYi5nZXRVVENNb250aCgpPGc/Yy5wdXNoKFwib2xkXCIpOihiLmdldFVUQ0Z1bGxZZWFyKCk+Znx8Yi5nZXRVVENGdWxsWWVhcigpPT09ZiYmYi5nZXRVVENNb250aCgpPmcpJiZjLnB1c2goXCJuZXdcIiksdGhpcy5mb2N1c0RhdGUmJmIudmFsdWVPZigpPT09dGhpcy5mb2N1c0RhdGUudmFsdWVPZigpJiZjLnB1c2goXCJmb2N1c2VkXCIpLHRoaXMuby50b2RheUhpZ2hsaWdodCYmZShiLGgpJiZjLnB1c2goXCJ0b2RheVwiKSx0aGlzLmRhdGVzLmNvbnRhaW5zKGIpIT09LTEmJmMucHVzaChcImFjdGl2ZVwiKSx0aGlzLmRhdGVXaXRoaW5SYW5nZShiKXx8Yy5wdXNoKFwiZGlzYWJsZWRcIiksdGhpcy5kYXRlSXNEaXNhYmxlZChiKSYmYy5wdXNoKFwiZGlzYWJsZWRcIixcImRpc2FibGVkLWRhdGVcIiksYS5pbkFycmF5KGIuZ2V0VVRDRGF5KCksdGhpcy5vLmRheXNPZldlZWtIaWdobGlnaHRlZCkhPT0tMSYmYy5wdXNoKFwiaGlnaGxpZ2h0ZWRcIiksdGhpcy5yYW5nZSYmKGI+dGhpcy5yYW5nZVswXSYmYjx0aGlzLnJhbmdlW3RoaXMucmFuZ2UubGVuZ3RoLTFdJiZjLnB1c2goXCJyYW5nZVwiKSxhLmluQXJyYXkoYi52YWx1ZU9mKCksdGhpcy5yYW5nZSkhPT0tMSYmYy5wdXNoKFwic2VsZWN0ZWRcIiksYi52YWx1ZU9mKCk9PT10aGlzLnJhbmdlWzBdJiZjLnB1c2goXCJyYW5nZS1zdGFydFwiKSxiLnZhbHVlT2YoKT09PXRoaXMucmFuZ2VbdGhpcy5yYW5nZS5sZW5ndGgtMV0mJmMucHVzaChcInJhbmdlLWVuZFwiKSksY30sX2ZpbGxfeWVhcnNWaWV3OmZ1bmN0aW9uKGMsZCxlLGYsZyxoLGkpe2Zvcih2YXIgaixrLGwsbT1cIlwiLG49ZS8xMCxvPXRoaXMucGlja2VyLmZpbmQoYykscD1NYXRoLmZsb29yKGYvZSkqZSxxPXArOSpuLHI9TWF0aC5mbG9vcih0aGlzLnZpZXdEYXRlLmdldEZ1bGxZZWFyKCkvbikqbixzPWEubWFwKHRoaXMuZGF0ZXMsZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGguZmxvb3IoYS5nZXRVVENGdWxsWWVhcigpL24pKm59KSx0PXAtbjt0PD1xK247dCs9bilqPVtkXSxrPW51bGwsdD09PXAtbj9qLnB1c2goXCJvbGRcIik6dD09PXErbiYmai5wdXNoKFwibmV3XCIpLGEuaW5BcnJheSh0LHMpIT09LTEmJmoucHVzaChcImFjdGl2ZVwiKSwodDxnfHx0PmgpJiZqLnB1c2goXCJkaXNhYmxlZFwiKSx0PT09ciYmai5wdXNoKFwiZm9jdXNlZFwiKSxpIT09YS5ub29wJiYobD1pKG5ldyBEYXRlKHQsMCwxKSksbD09PWI/bD17fTpcImJvb2xlYW5cIj09dHlwZW9mIGw/bD17ZW5hYmxlZDpsfTpcInN0cmluZ1wiPT10eXBlb2YgbCYmKGw9e2NsYXNzZXM6bH0pLGwuZW5hYmxlZD09PSExJiZqLnB1c2goXCJkaXNhYmxlZFwiKSxsLmNsYXNzZXMmJihqPWouY29uY2F0KGwuY2xhc3Nlcy5zcGxpdCgvXFxzKy8pKSksbC50b29sdGlwJiYoaz1sLnRvb2x0aXApKSxtKz0nPHNwYW4gY2xhc3M9XCInK2ouam9pbihcIiBcIikrJ1wiJysoaz8nIHRpdGxlPVwiJytrKydcIic6XCJcIikrXCI+XCIrdCtcIjwvc3Bhbj5cIjtvLmZpbmQoXCIuZGF0ZXBpY2tlci1zd2l0Y2hcIikudGV4dChwK1wiLVwiK3EpLG8uZmluZChcInRkXCIpLmh0bWwobSl9LGZpbGw6ZnVuY3Rpb24oKXt2YXIgZCxlLGY9bmV3IERhdGUodGhpcy52aWV3RGF0ZSksZz1mLmdldFVUQ0Z1bGxZZWFyKCksaD1mLmdldFVUQ01vbnRoKCksaT10aGlzLm8uc3RhcnREYXRlIT09LSgxLzApP3RoaXMuby5zdGFydERhdGUuZ2V0VVRDRnVsbFllYXIoKTotKDEvMCksaj10aGlzLm8uc3RhcnREYXRlIT09LSgxLzApP3RoaXMuby5zdGFydERhdGUuZ2V0VVRDTW9udGgoKTotKDEvMCksaz10aGlzLm8uZW5kRGF0ZSE9PTEvMD90aGlzLm8uZW5kRGF0ZS5nZXRVVENGdWxsWWVhcigpOjEvMCxsPXRoaXMuby5lbmREYXRlIT09MS8wP3RoaXMuby5lbmREYXRlLmdldFVUQ01vbnRoKCk6MS8wLG09cVt0aGlzLm8ubGFuZ3VhZ2VdLnRvZGF5fHxxLmVuLnRvZGF5fHxcIlwiLG49cVt0aGlzLm8ubGFuZ3VhZ2VdLmNsZWFyfHxxLmVuLmNsZWFyfHxcIlwiLG89cVt0aGlzLm8ubGFuZ3VhZ2VdLnRpdGxlRm9ybWF0fHxxLmVuLnRpdGxlRm9ybWF0O2lmKCFpc05hTihnKSYmIWlzTmFOKGgpKXt0aGlzLnBpY2tlci5maW5kKFwiLmRhdGVwaWNrZXItZGF5cyAuZGF0ZXBpY2tlci1zd2l0Y2hcIikudGV4dChyLmZvcm1hdERhdGUoZixvLHRoaXMuby5sYW5ndWFnZSkpLHRoaXMucGlja2VyLmZpbmQoXCJ0Zm9vdCAudG9kYXlcIikudGV4dChtKS5jc3MoXCJkaXNwbGF5XCIsdGhpcy5vLnRvZGF5QnRuPT09ITB8fFwibGlua2VkXCI9PT10aGlzLm8udG9kYXlCdG4/XCJ0YWJsZS1jZWxsXCI6XCJub25lXCIpLHRoaXMucGlja2VyLmZpbmQoXCJ0Zm9vdCAuY2xlYXJcIikudGV4dChuKS5jc3MoXCJkaXNwbGF5XCIsdGhpcy5vLmNsZWFyQnRuPT09ITA/XCJ0YWJsZS1jZWxsXCI6XCJub25lXCIpLHRoaXMucGlja2VyLmZpbmQoXCJ0aGVhZCAuZGF0ZXBpY2tlci10aXRsZVwiKS50ZXh0KHRoaXMuby50aXRsZSkuY3NzKFwiZGlzcGxheVwiLFwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLm8udGl0bGUmJlwiXCIhPT10aGlzLm8udGl0bGU/XCJ0YWJsZS1jZWxsXCI6XCJub25lXCIpLHRoaXMudXBkYXRlTmF2QXJyb3dzKCksdGhpcy5maWxsTW9udGhzKCk7dmFyIHA9YyhnLGgsMCkscz1wLmdldFVUQ0RhdGUoKTtwLnNldFVUQ0RhdGUocy0ocC5nZXRVVENEYXkoKS10aGlzLm8ud2Vla1N0YXJ0KzcpJTcpO3ZhciB0PW5ldyBEYXRlKHApO3AuZ2V0VVRDRnVsbFllYXIoKTwxMDAmJnQuc2V0VVRDRnVsbFllYXIocC5nZXRVVENGdWxsWWVhcigpKSx0LnNldFVUQ0RhdGUodC5nZXRVVENEYXRlKCkrNDIpLHQ9dC52YWx1ZU9mKCk7Zm9yKHZhciB1LHYsdz1bXTtwLnZhbHVlT2YoKTx0Oyl7aWYodT1wLmdldFVUQ0RheSgpLHU9PT10aGlzLm8ud2Vla1N0YXJ0JiYody5wdXNoKFwiPHRyPlwiKSx0aGlzLm8uY2FsZW5kYXJXZWVrcykpe3ZhciB4PW5ldyBEYXRlKCtwKyh0aGlzLm8ud2Vla1N0YXJ0LXUtNyklNyo4NjRlNSkseT1uZXcgRGF0ZShOdW1iZXIoeCkrKDExLXguZ2V0VVRDRGF5KCkpJTcqODY0ZTUpLHo9bmV3IERhdGUoTnVtYmVyKHo9Yyh5LmdldFVUQ0Z1bGxZZWFyKCksMCwxKSkrKDExLXouZ2V0VVRDRGF5KCkpJTcqODY0ZTUpLEE9KHkteikvODY0ZTUvNysxO3cucHVzaCgnPHRkIGNsYXNzPVwiY3dcIj4nK0ErXCI8L3RkPlwiKX12PXRoaXMuZ2V0Q2xhc3NOYW1lcyhwKSx2LnB1c2goXCJkYXlcIik7dmFyIEI9cC5nZXRVVENEYXRlKCk7dGhpcy5vLmJlZm9yZVNob3dEYXkhPT1hLm5vb3AmJihlPXRoaXMuby5iZWZvcmVTaG93RGF5KHRoaXMuX3V0Y190b19sb2NhbChwKSksZT09PWI/ZT17fTpcImJvb2xlYW5cIj09dHlwZW9mIGU/ZT17ZW5hYmxlZDplfTpcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9e2NsYXNzZXM6ZX0pLGUuZW5hYmxlZD09PSExJiZ2LnB1c2goXCJkaXNhYmxlZFwiKSxlLmNsYXNzZXMmJih2PXYuY29uY2F0KGUuY2xhc3Nlcy5zcGxpdCgvXFxzKy8pKSksZS50b29sdGlwJiYoZD1lLnRvb2x0aXApLGUuY29udGVudCYmKEI9ZS5jb250ZW50KSksdj1hLmlzRnVuY3Rpb24oYS51bmlxdWVTb3J0KT9hLnVuaXF1ZVNvcnQodik6YS51bmlxdWUodiksdy5wdXNoKCc8dGQgY2xhc3M9XCInK3Yuam9pbihcIiBcIikrJ1wiJysoZD8nIHRpdGxlPVwiJytkKydcIic6XCJcIikrJyBkYXRhLWRhdGU9XCInK3AuZ2V0VGltZSgpLnRvU3RyaW5nKCkrJ1wiPicrQitcIjwvdGQ+XCIpLGQ9bnVsbCx1PT09dGhpcy5vLndlZWtFbmQmJncucHVzaChcIjwvdHI+XCIpLHAuc2V0VVRDRGF0ZShwLmdldFVUQ0RhdGUoKSsxKX10aGlzLnBpY2tlci5maW5kKFwiLmRhdGVwaWNrZXItZGF5cyB0Ym9keVwiKS5odG1sKHcuam9pbihcIlwiKSk7dmFyIEM9cVt0aGlzLm8ubGFuZ3VhZ2VdLm1vbnRoc1RpdGxlfHxxLmVuLm1vbnRoc1RpdGxlfHxcIk1vbnRoc1wiLEQ9dGhpcy5waWNrZXIuZmluZChcIi5kYXRlcGlja2VyLW1vbnRoc1wiKS5maW5kKFwiLmRhdGVwaWNrZXItc3dpdGNoXCIpLnRleHQodGhpcy5vLm1heFZpZXdNb2RlPDI/QzpnKS5lbmQoKS5maW5kKFwidGJvZHkgc3BhblwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtpZihhLmVhY2godGhpcy5kYXRlcyxmdW5jdGlvbihhLGIpe2IuZ2V0VVRDRnVsbFllYXIoKT09PWcmJkQuZXEoYi5nZXRVVENNb250aCgpKS5hZGRDbGFzcyhcImFjdGl2ZVwiKX0pLChnPGl8fGc+aykmJkQuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSxnPT09aSYmRC5zbGljZSgwLGopLmFkZENsYXNzKFwiZGlzYWJsZWRcIiksZz09PWsmJkQuc2xpY2UobCsxKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpLHRoaXMuby5iZWZvcmVTaG93TW9udGghPT1hLm5vb3Ape3ZhciBFPXRoaXM7YS5lYWNoKEQsZnVuY3Rpb24oYyxkKXt2YXIgZT1uZXcgRGF0ZShnLGMsMSksZj1FLm8uYmVmb3JlU2hvd01vbnRoKGUpO2Y9PT1iP2Y9e306XCJib29sZWFuXCI9PXR5cGVvZiBmP2Y9e2VuYWJsZWQ6Zn06XCJzdHJpbmdcIj09dHlwZW9mIGYmJihmPXtjbGFzc2VzOmZ9KSxmLmVuYWJsZWQhPT0hMXx8YShkKS5oYXNDbGFzcyhcImRpc2FibGVkXCIpfHxhKGQpLmFkZENsYXNzKFwiZGlzYWJsZWRcIiksZi5jbGFzc2VzJiZhKGQpLmFkZENsYXNzKGYuY2xhc3NlcyksZi50b29sdGlwJiZhKGQpLnByb3AoXCJ0aXRsZVwiLGYudG9vbHRpcCl9KX10aGlzLl9maWxsX3llYXJzVmlldyhcIi5kYXRlcGlja2VyLXllYXJzXCIsXCJ5ZWFyXCIsMTAsZyxpLGssdGhpcy5vLmJlZm9yZVNob3dZZWFyKSx0aGlzLl9maWxsX3llYXJzVmlldyhcIi5kYXRlcGlja2VyLWRlY2FkZXNcIixcImRlY2FkZVwiLDEwMCxnLGksayx0aGlzLm8uYmVmb3JlU2hvd0RlY2FkZSksdGhpcy5fZmlsbF95ZWFyc1ZpZXcoXCIuZGF0ZXBpY2tlci1jZW50dXJpZXNcIixcImNlbnR1cnlcIiwxZTMsZyxpLGssdGhpcy5vLmJlZm9yZVNob3dDZW50dXJ5KX19LHVwZGF0ZU5hdkFycm93czpmdW5jdGlvbigpe2lmKHRoaXMuX2FsbG93X3VwZGF0ZSl7dmFyIGEsYixjPW5ldyBEYXRlKHRoaXMudmlld0RhdGUpLGQ9Yy5nZXRVVENGdWxsWWVhcigpLGU9Yy5nZXRVVENNb250aCgpLGY9dGhpcy5vLnN0YXJ0RGF0ZSE9PS0oMS8wKT90aGlzLm8uc3RhcnREYXRlLmdldFVUQ0Z1bGxZZWFyKCk6LSgxLzApLGc9dGhpcy5vLnN0YXJ0RGF0ZSE9PS0oMS8wKT90aGlzLm8uc3RhcnREYXRlLmdldFVUQ01vbnRoKCk6LSgxLzApLGg9dGhpcy5vLmVuZERhdGUhPT0xLzA/dGhpcy5vLmVuZERhdGUuZ2V0VVRDRnVsbFllYXIoKToxLzAsaT10aGlzLm8uZW5kRGF0ZSE9PTEvMD90aGlzLm8uZW5kRGF0ZS5nZXRVVENNb250aCgpOjEvMCxqPTE7c3dpdGNoKHRoaXMudmlld01vZGUpe2Nhc2UgNDpqKj0xMDtjYXNlIDM6aio9MTA7Y2FzZSAyOmoqPTEwO2Nhc2UgMTphPU1hdGguZmxvb3IoZC9qKSpqPGYsYj1NYXRoLmZsb29yKGQvaikqaitqPmg7YnJlYWs7Y2FzZSAwOmE9ZDw9ZiYmZTxnLGI9ZD49aCYmZT5pfXRoaXMucGlja2VyLmZpbmQoXCIucHJldlwiKS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsYSksdGhpcy5waWNrZXIuZmluZChcIi5uZXh0XCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIixiKX19LGNsaWNrOmZ1bmN0aW9uKGIpe2IucHJldmVudERlZmF1bHQoKSxiLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBlLGYsZyxoO2U9YShiLnRhcmdldCksZS5oYXNDbGFzcyhcImRhdGVwaWNrZXItc3dpdGNoXCIpJiZ0aGlzLnZpZXdNb2RlIT09dGhpcy5vLm1heFZpZXdNb2RlJiZ0aGlzLnNldFZpZXdNb2RlKHRoaXMudmlld01vZGUrMSksZS5oYXNDbGFzcyhcInRvZGF5XCIpJiYhZS5oYXNDbGFzcyhcImRheVwiKSYmKHRoaXMuc2V0Vmlld01vZGUoMCksdGhpcy5fc2V0RGF0ZShkKCksXCJsaW5rZWRcIj09PXRoaXMuby50b2RheUJ0bj9udWxsOlwidmlld1wiKSksZS5oYXNDbGFzcyhcImNsZWFyXCIpJiZ0aGlzLmNsZWFyRGF0ZXMoKSxlLmhhc0NsYXNzKFwiZGlzYWJsZWRcIil8fChlLmhhc0NsYXNzKFwibW9udGhcIil8fGUuaGFzQ2xhc3MoXCJ5ZWFyXCIpfHxlLmhhc0NsYXNzKFwiZGVjYWRlXCIpfHxlLmhhc0NsYXNzKFwiY2VudHVyeVwiKSkmJih0aGlzLnZpZXdEYXRlLnNldFVUQ0RhdGUoMSksZj0xLDE9PT10aGlzLnZpZXdNb2RlPyhoPWUucGFyZW50KCkuZmluZChcInNwYW5cIikuaW5kZXgoZSksZz10aGlzLnZpZXdEYXRlLmdldFVUQ0Z1bGxZZWFyKCksdGhpcy52aWV3RGF0ZS5zZXRVVENNb250aChoKSk6KGg9MCxnPU51bWJlcihlLnRleHQoKSksdGhpcy52aWV3RGF0ZS5zZXRVVENGdWxsWWVhcihnKSksdGhpcy5fdHJpZ2dlcihyLnZpZXdNb2Rlc1t0aGlzLnZpZXdNb2RlLTFdLmUsdGhpcy52aWV3RGF0ZSksdGhpcy52aWV3TW9kZT09PXRoaXMuby5taW5WaWV3TW9kZT90aGlzLl9zZXREYXRlKGMoZyxoLGYpKToodGhpcy5zZXRWaWV3TW9kZSh0aGlzLnZpZXdNb2RlLTEpLHRoaXMuZmlsbCgpKSksdGhpcy5waWNrZXIuaXMoXCI6dmlzaWJsZVwiKSYmdGhpcy5fZm9jdXNlZF9mcm9tJiZ0aGlzLl9mb2N1c2VkX2Zyb20uZm9jdXMoKSxkZWxldGUgdGhpcy5fZm9jdXNlZF9mcm9tfSxkYXlDZWxsQ2xpY2s6ZnVuY3Rpb24oYil7dmFyIGM9YShiLmN1cnJlbnRUYXJnZXQpLGQ9Yy5kYXRhKFwiZGF0ZVwiKSxlPW5ldyBEYXRlKGQpO3RoaXMuby51cGRhdGVWaWV3RGF0ZSYmKGUuZ2V0VVRDRnVsbFllYXIoKSE9PXRoaXMudmlld0RhdGUuZ2V0VVRDRnVsbFllYXIoKSYmdGhpcy5fdHJpZ2dlcihcImNoYW5nZVllYXJcIix0aGlzLnZpZXdEYXRlKSxlLmdldFVUQ01vbnRoKCkhPT10aGlzLnZpZXdEYXRlLmdldFVUQ01vbnRoKCkmJnRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VNb250aFwiLHRoaXMudmlld0RhdGUpKSx0aGlzLl9zZXREYXRlKGUpfSxuYXZBcnJvd3NDbGljazpmdW5jdGlvbihiKXt2YXIgYz1hKGIuY3VycmVudFRhcmdldCksZD1jLmhhc0NsYXNzKFwicHJldlwiKT8tMToxOzAhPT10aGlzLnZpZXdNb2RlJiYoZCo9MTIqci52aWV3TW9kZXNbdGhpcy52aWV3TW9kZV0ubmF2U3RlcCksdGhpcy52aWV3RGF0ZT10aGlzLm1vdmVNb250aCh0aGlzLnZpZXdEYXRlLGQpLHRoaXMuX3RyaWdnZXIoci52aWV3TW9kZXNbdGhpcy52aWV3TW9kZV0uZSx0aGlzLnZpZXdEYXRlKSx0aGlzLmZpbGwoKX0sX3RvZ2dsZV9tdWx0aWRhdGU6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5kYXRlcy5jb250YWlucyhhKTtpZihhfHx0aGlzLmRhdGVzLmNsZWFyKCksYiE9PS0xPyh0aGlzLm8ubXVsdGlkYXRlPT09ITB8fHRoaXMuby5tdWx0aWRhdGU+MXx8dGhpcy5vLnRvZ2dsZUFjdGl2ZSkmJnRoaXMuZGF0ZXMucmVtb3ZlKGIpOnRoaXMuby5tdWx0aWRhdGU9PT0hMT8odGhpcy5kYXRlcy5jbGVhcigpLHRoaXMuZGF0ZXMucHVzaChhKSk6dGhpcy5kYXRlcy5wdXNoKGEpLFwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLm8ubXVsdGlkYXRlKWZvcig7dGhpcy5kYXRlcy5sZW5ndGg+dGhpcy5vLm11bHRpZGF0ZTspdGhpcy5kYXRlcy5yZW1vdmUoMCl9LF9zZXREYXRlOmZ1bmN0aW9uKGEsYil7YiYmXCJkYXRlXCIhPT1ifHx0aGlzLl90b2dnbGVfbXVsdGlkYXRlKGEmJm5ldyBEYXRlKGEpKSwoIWImJnRoaXMuby51cGRhdGVWaWV3RGF0ZXx8XCJ2aWV3XCI9PT1iKSYmKHRoaXMudmlld0RhdGU9YSYmbmV3IERhdGUoYSkpLHRoaXMuZmlsbCgpLHRoaXMuc2V0VmFsdWUoKSxiJiZcInZpZXdcIj09PWJ8fHRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VEYXRlXCIpLHRoaXMuaW5wdXRGaWVsZC50cmlnZ2VyKFwiY2hhbmdlXCIpLCF0aGlzLm8uYXV0b2Nsb3NlfHxiJiZcImRhdGVcIiE9PWJ8fHRoaXMuaGlkZSgpfSxtb3ZlRGF5OmZ1bmN0aW9uKGEsYil7dmFyIGM9bmV3IERhdGUoYSk7cmV0dXJuIGMuc2V0VVRDRGF0ZShhLmdldFVUQ0RhdGUoKStiKSxjfSxtb3ZlV2VlazpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdmVEYXkoYSw3KmIpfSxtb3ZlTW9udGg6ZnVuY3Rpb24oYSxiKXtpZighZyhhKSlyZXR1cm4gdGhpcy5vLmRlZmF1bHRWaWV3RGF0ZTtpZighYilyZXR1cm4gYTt2YXIgYyxkLGU9bmV3IERhdGUoYS52YWx1ZU9mKCkpLGY9ZS5nZXRVVENEYXRlKCksaD1lLmdldFVUQ01vbnRoKCksaT1NYXRoLmFicyhiKTtpZihiPWI+MD8xOi0xLDE9PT1pKWQ9Yj09PS0xP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZ2V0VVRDTW9udGgoKT09PWh9OmZ1bmN0aW9uKCl7cmV0dXJuIGUuZ2V0VVRDTW9udGgoKSE9PWN9LGM9aCtiLGUuc2V0VVRDTW9udGgoYyksYz0oYysxMiklMTI7ZWxzZXtmb3IodmFyIGo9MDtqPGk7aisrKWU9dGhpcy5tb3ZlTW9udGgoZSxiKTtjPWUuZ2V0VVRDTW9udGgoKSxlLnNldFVUQ0RhdGUoZiksZD1mdW5jdGlvbigpe3JldHVybiBjIT09ZS5nZXRVVENNb250aCgpfX1mb3IoO2QoKTspZS5zZXRVVENEYXRlKC0tZiksZS5zZXRVVENNb250aChjKTtyZXR1cm4gZX0sbW92ZVllYXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3ZlTW9udGgoYSwxMipiKX0sbW92ZUF2YWlsYWJsZURhdGU6ZnVuY3Rpb24oYSxiLGMpe2Rve2lmKGE9dGhpc1tjXShhLGIpLCF0aGlzLmRhdGVXaXRoaW5SYW5nZShhKSlyZXR1cm4hMTtjPVwibW92ZURheVwifXdoaWxlKHRoaXMuZGF0ZUlzRGlzYWJsZWQoYSkpO3JldHVybiBhfSx3ZWVrT2ZEYXRlSXNEaXNhYmxlZDpmdW5jdGlvbihiKXtyZXR1cm4gYS5pbkFycmF5KGIuZ2V0VVRDRGF5KCksdGhpcy5vLmRheXNPZldlZWtEaXNhYmxlZCkhPT0tMX0sZGF0ZUlzRGlzYWJsZWQ6ZnVuY3Rpb24oYil7cmV0dXJuIHRoaXMud2Vla09mRGF0ZUlzRGlzYWJsZWQoYil8fGEuZ3JlcCh0aGlzLm8uZGF0ZXNEaXNhYmxlZCxmdW5jdGlvbihhKXtyZXR1cm4gZShiLGEpfSkubGVuZ3RoPjB9LGRhdGVXaXRoaW5SYW5nZTpmdW5jdGlvbihhKXtyZXR1cm4gYT49dGhpcy5vLnN0YXJ0RGF0ZSYmYTw9dGhpcy5vLmVuZERhdGV9LGtleWRvd246ZnVuY3Rpb24oYSl7aWYoIXRoaXMucGlja2VyLmlzKFwiOnZpc2libGVcIikpcmV0dXJuIHZvaWQoNDAhPT1hLmtleUNvZGUmJjI3IT09YS5rZXlDb2RlfHwodGhpcy5zaG93KCksYS5zdG9wUHJvcGFnYXRpb24oKSkpO3ZhciBiLGMsZD0hMSxlPXRoaXMuZm9jdXNEYXRlfHx0aGlzLnZpZXdEYXRlO3N3aXRjaChhLmtleUNvZGUpe2Nhc2UgMjc6dGhpcy5mb2N1c0RhdGU/KHRoaXMuZm9jdXNEYXRlPW51bGwsdGhpcy52aWV3RGF0ZT10aGlzLmRhdGVzLmdldCgtMSl8fHRoaXMudmlld0RhdGUsdGhpcy5maWxsKCkpOnRoaXMuaGlkZSgpLGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpO2JyZWFrO2Nhc2UgMzc6Y2FzZSAzODpjYXNlIDM5OmNhc2UgNDA6aWYoIXRoaXMuby5rZXlib2FyZE5hdmlnYXRpb258fDc9PT10aGlzLm8uZGF5c09mV2Vla0Rpc2FibGVkLmxlbmd0aClicmVhaztiPTM3PT09YS5rZXlDb2RlfHwzOD09PWEua2V5Q29kZT8tMToxLDA9PT10aGlzLnZpZXdNb2RlP2EuY3RybEtleT8oYz10aGlzLm1vdmVBdmFpbGFibGVEYXRlKGUsYixcIm1vdmVZZWFyXCIpLGMmJnRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VZZWFyXCIsdGhpcy52aWV3RGF0ZSkpOmEuc2hpZnRLZXk/KGM9dGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShlLGIsXCJtb3ZlTW9udGhcIiksYyYmdGhpcy5fdHJpZ2dlcihcImNoYW5nZU1vbnRoXCIsdGhpcy52aWV3RGF0ZSkpOjM3PT09YS5rZXlDb2RlfHwzOT09PWEua2V5Q29kZT9jPXRoaXMubW92ZUF2YWlsYWJsZURhdGUoZSxiLFwibW92ZURheVwiKTp0aGlzLndlZWtPZkRhdGVJc0Rpc2FibGVkKGUpfHwoYz10aGlzLm1vdmVBdmFpbGFibGVEYXRlKGUsYixcIm1vdmVXZWVrXCIpKToxPT09dGhpcy52aWV3TW9kZT8oMzghPT1hLmtleUNvZGUmJjQwIT09YS5rZXlDb2RlfHwoYio9NCksYz10aGlzLm1vdmVBdmFpbGFibGVEYXRlKGUsYixcIm1vdmVNb250aFwiKSk6Mj09PXRoaXMudmlld01vZGUmJigzOCE9PWEua2V5Q29kZSYmNDAhPT1hLmtleUNvZGV8fChiKj00KSxjPXRoaXMubW92ZUF2YWlsYWJsZURhdGUoZSxiLFwibW92ZVllYXJcIikpLGMmJih0aGlzLmZvY3VzRGF0ZT10aGlzLnZpZXdEYXRlPWMsdGhpcy5zZXRWYWx1ZSgpLHRoaXMuZmlsbCgpLGEucHJldmVudERlZmF1bHQoKSk7YnJlYWs7Y2FzZSAxMzppZighdGhpcy5vLmZvcmNlUGFyc2UpYnJlYWs7ZT10aGlzLmZvY3VzRGF0ZXx8dGhpcy5kYXRlcy5nZXQoLTEpfHx0aGlzLnZpZXdEYXRlLHRoaXMuby5rZXlib2FyZE5hdmlnYXRpb24mJih0aGlzLl90b2dnbGVfbXVsdGlkYXRlKGUpLGQ9ITApLHRoaXMuZm9jdXNEYXRlPW51bGwsdGhpcy52aWV3RGF0ZT10aGlzLmRhdGVzLmdldCgtMSl8fHRoaXMudmlld0RhdGUsdGhpcy5zZXRWYWx1ZSgpLHRoaXMuZmlsbCgpLHRoaXMucGlja2VyLmlzKFwiOnZpc2libGVcIikmJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLm8uYXV0b2Nsb3NlJiZ0aGlzLmhpZGUoKSk7YnJlYWs7Y2FzZSA5OnRoaXMuZm9jdXNEYXRlPW51bGwsdGhpcy52aWV3RGF0ZT10aGlzLmRhdGVzLmdldCgtMSl8fHRoaXMudmlld0RhdGUsdGhpcy5maWxsKCksdGhpcy5oaWRlKCl9ZCYmKHRoaXMuZGF0ZXMubGVuZ3RoP3RoaXMuX3RyaWdnZXIoXCJjaGFuZ2VEYXRlXCIpOnRoaXMuX3RyaWdnZXIoXCJjbGVhckRhdGVcIiksdGhpcy5pbnB1dEZpZWxkLnRyaWdnZXIoXCJjaGFuZ2VcIikpfSxzZXRWaWV3TW9kZTpmdW5jdGlvbihhKXt0aGlzLnZpZXdNb2RlPWEsdGhpcy5waWNrZXIuY2hpbGRyZW4oXCJkaXZcIikuaGlkZSgpLmZpbHRlcihcIi5kYXRlcGlja2VyLVwiK3Iudmlld01vZGVzW3RoaXMudmlld01vZGVdLmNsc05hbWUpLnNob3coKSx0aGlzLnVwZGF0ZU5hdkFycm93cygpLHRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VWaWV3TW9kZVwiLG5ldyBEYXRlKHRoaXMudmlld0RhdGUpKX19O3ZhciBsPWZ1bmN0aW9uKGIsYyl7YS5kYXRhKGIsXCJkYXRlcGlja2VyXCIsdGhpcyksdGhpcy5lbGVtZW50PWEoYiksdGhpcy5pbnB1dHM9YS5tYXAoYy5pbnB1dHMsZnVuY3Rpb24oYSl7cmV0dXJuIGEuanF1ZXJ5P2FbMF06YX0pLGRlbGV0ZSBjLmlucHV0cyx0aGlzLmtlZXBFbXB0eVZhbHVlcz1jLmtlZXBFbXB0eVZhbHVlcyxkZWxldGUgYy5rZWVwRW1wdHlWYWx1ZXMsbi5jYWxsKGEodGhpcy5pbnB1dHMpLGMpLm9uKFwiY2hhbmdlRGF0ZVwiLGEucHJveHkodGhpcy5kYXRlVXBkYXRlZCx0aGlzKSksdGhpcy5waWNrZXJzPWEubWFwKHRoaXMuaW5wdXRzLGZ1bmN0aW9uKGIpe3JldHVybiBhLmRhdGEoYixcImRhdGVwaWNrZXJcIil9KSx0aGlzLnVwZGF0ZURhdGVzKCl9O2wucHJvdG90eXBlPXt1cGRhdGVEYXRlczpmdW5jdGlvbigpe3RoaXMuZGF0ZXM9YS5tYXAodGhpcy5waWNrZXJzLGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldFVUQ0RhdGUoKX0pLHRoaXMudXBkYXRlUmFuZ2VzKCl9LHVwZGF0ZVJhbmdlczpmdW5jdGlvbigpe3ZhciBiPWEubWFwKHRoaXMuZGF0ZXMsZnVuY3Rpb24oYSl7cmV0dXJuIGEudmFsdWVPZigpfSk7YS5lYWNoKHRoaXMucGlja2VycyxmdW5jdGlvbihhLGMpe2Muc2V0UmFuZ2UoYil9KX0sY2xlYXJEYXRlczpmdW5jdGlvbigpe2EuZWFjaCh0aGlzLnBpY2tlcnMsZnVuY3Rpb24oYSxiKXtiLmNsZWFyRGF0ZXMoKX0pfSxkYXRlVXBkYXRlZDpmdW5jdGlvbihjKXtpZighdGhpcy51cGRhdGluZyl7dGhpcy51cGRhdGluZz0hMDt2YXIgZD1hLmRhdGEoYy50YXJnZXQsXCJkYXRlcGlja2VyXCIpO2lmKGQhPT1iKXt2YXIgZT1kLmdldFVUQ0RhdGUoKSxmPXRoaXMua2VlcEVtcHR5VmFsdWVzLGc9YS5pbkFycmF5KGMudGFyZ2V0LHRoaXMuaW5wdXRzKSxoPWctMSxpPWcrMSxqPXRoaXMuaW5wdXRzLmxlbmd0aDtpZihnIT09LTEpe2lmKGEuZWFjaCh0aGlzLnBpY2tlcnMsZnVuY3Rpb24oYSxiKXtiLmdldFVUQ0RhdGUoKXx8YiE9PWQmJmZ8fGIuc2V0VVRDRGF0ZShlKX0pLGU8dGhpcy5kYXRlc1toXSlmb3IoO2g+PTAmJmU8dGhpcy5kYXRlc1toXTspdGhpcy5waWNrZXJzW2gtLV0uc2V0VVRDRGF0ZShlKTtlbHNlIGlmKGU+dGhpcy5kYXRlc1tpXSlmb3IoO2k8aiYmZT50aGlzLmRhdGVzW2ldOyl0aGlzLnBpY2tlcnNbaSsrXS5zZXRVVENEYXRlKGUpO3RoaXMudXBkYXRlRGF0ZXMoKSxkZWxldGUgdGhpcy51cGRhdGluZ319fX0sZGVzdHJveTpmdW5jdGlvbigpe2EubWFwKHRoaXMucGlja2VycyxmdW5jdGlvbihhKXthLmRlc3Ryb3koKX0pLGEodGhpcy5pbnB1dHMpLm9mZihcImNoYW5nZURhdGVcIix0aGlzLmRhdGVVcGRhdGVkKSxkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlcGlja2VyfSxyZW1vdmU6ZihcImRlc3Ryb3lcIixcIk1ldGhvZCBgcmVtb3ZlYCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiAyLjAuIFVzZSBgZGVzdHJveWAgaW5zdGVhZFwiKX07dmFyIG09YS5mbi5kYXRlcGlja2VyLG49ZnVuY3Rpb24oYyl7dmFyIGQ9QXJyYXkuYXBwbHkobnVsbCxhcmd1bWVudHMpO2Quc2hpZnQoKTt2YXIgZTtpZih0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLGY9Yi5kYXRhKFwiZGF0ZXBpY2tlclwiKSxnPVwib2JqZWN0XCI9PXR5cGVvZiBjJiZjO2lmKCFmKXt2YXIgaj1oKHRoaXMsXCJkYXRlXCIpLG09YS5leHRlbmQoe30sbyxqLGcpLG49aShtLmxhbmd1YWdlKSxwPWEuZXh0ZW5kKHt9LG8sbixqLGcpO2IuaGFzQ2xhc3MoXCJpbnB1dC1kYXRlcmFuZ2VcIil8fHAuaW5wdXRzPyhhLmV4dGVuZChwLHtpbnB1dHM6cC5pbnB1dHN8fGIuZmluZChcImlucHV0XCIpLnRvQXJyYXkoKX0pLGY9bmV3IGwodGhpcyxwKSk6Zj1uZXcgayh0aGlzLHApLGIuZGF0YShcImRhdGVwaWNrZXJcIixmKX1cInN0cmluZ1wiPT10eXBlb2YgYyYmXCJmdW5jdGlvblwiPT10eXBlb2YgZltjXSYmKGU9ZltjXS5hcHBseShmLGQpKX0pLGU9PT1ifHxlIGluc3RhbmNlb2Yga3x8ZSBpbnN0YW5jZW9mIGwpcmV0dXJuIHRoaXM7aWYodGhpcy5sZW5ndGg+MSl0aHJvdyBuZXcgRXJyb3IoXCJVc2luZyBvbmx5IGFsbG93ZWQgZm9yIHRoZSBjb2xsZWN0aW9uIG9mIGEgc2luZ2xlIGVsZW1lbnQgKFwiK2MrXCIgZnVuY3Rpb24pXCIpO3JldHVybiBlfTthLmZuLmRhdGVwaWNrZXI9bjt2YXIgbz1hLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHM9e2Fzc3VtZU5lYXJieVllYXI6ITEsYXV0b2Nsb3NlOiExLGJlZm9yZVNob3dEYXk6YS5ub29wLGJlZm9yZVNob3dNb250aDphLm5vb3AsYmVmb3JlU2hvd1llYXI6YS5ub29wLGJlZm9yZVNob3dEZWNhZGU6YS5ub29wLGJlZm9yZVNob3dDZW50dXJ5OmEubm9vcCxjYWxlbmRhcldlZWtzOiExLGNsZWFyQnRuOiExLHRvZ2dsZUFjdGl2ZTohMSxkYXlzT2ZXZWVrRGlzYWJsZWQ6W10sZGF5c09mV2Vla0hpZ2hsaWdodGVkOltdLGRhdGVzRGlzYWJsZWQ6W10sZW5kRGF0ZToxLzAsZm9yY2VQYXJzZTohMCxmb3JtYXQ6XCJtbS9kZC95eXl5XCIsa2VlcEVtcHR5VmFsdWVzOiExLGtleWJvYXJkTmF2aWdhdGlvbjohMCxsYW5ndWFnZTpcImVuXCIsbWluVmlld01vZGU6MCxtYXhWaWV3TW9kZTo0LG11bHRpZGF0ZTohMSxtdWx0aWRhdGVTZXBhcmF0b3I6XCIsXCIsb3JpZW50YXRpb246XCJhdXRvXCIscnRsOiExLHN0YXJ0RGF0ZTotKDEvMCksc3RhcnRWaWV3OjAsdG9kYXlCdG46ITEsdG9kYXlIaWdobGlnaHQ6ITEsdXBkYXRlVmlld0RhdGU6ITAsd2Vla1N0YXJ0OjAsZGlzYWJsZVRvdWNoS2V5Ym9hcmQ6ITEsZW5hYmxlT25SZWFkb25seTohMCxzaG93T25Gb2N1czohMCx6SW5kZXhPZmZzZXQ6MTAsY29udGFpbmVyOlwiYm9keVwiLGltbWVkaWF0ZVVwZGF0ZXM6ITEsdGl0bGU6XCJcIix0ZW1wbGF0ZXM6e2xlZnRBcnJvdzpcIiYjeDAwQUI7XCIscmlnaHRBcnJvdzpcIiYjeDAwQkI7XCJ9LHNob3dXZWVrRGF5czohMH0scD1hLmZuLmRhdGVwaWNrZXIubG9jYWxlX29wdHM9W1wiZm9ybWF0XCIsXCJydGxcIixcIndlZWtTdGFydFwiXTthLmZuLmRhdGVwaWNrZXIuQ29uc3RydWN0b3I9azt2YXIgcT1hLmZuLmRhdGVwaWNrZXIuZGF0ZXM9e2VuOntkYXlzOltcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdLGRheXNTaG9ydDpbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0sZGF5c01pbjpbXCJTdVwiLFwiTW9cIixcIlR1XCIsXCJXZVwiLFwiVGhcIixcIkZyXCIsXCJTYVwiXSxtb250aHM6W1wiSmFudWFyeVwiLFwiRmVicnVhcnlcIixcIk1hcmNoXCIsXCJBcHJpbFwiLFwiTWF5XCIsXCJKdW5lXCIsXCJKdWx5XCIsXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2N0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlY2VtYmVyXCJdLG1vbnRoc1Nob3J0OltcIkphblwiLFwiRmViXCIsXCJNYXJcIixcIkFwclwiLFwiTWF5XCIsXCJKdW5cIixcIkp1bFwiLFwiQXVnXCIsXCJTZXBcIixcIk9jdFwiLFwiTm92XCIsXCJEZWNcIl0sdG9kYXk6XCJUb2RheVwiLGNsZWFyOlwiQ2xlYXJcIix0aXRsZUZvcm1hdDpcIk1NIHl5eXlcIn19LHI9e3ZpZXdNb2Rlczpbe25hbWVzOltcImRheXNcIixcIm1vbnRoXCJdLGNsc05hbWU6XCJkYXlzXCIsZTpcImNoYW5nZU1vbnRoXCJ9LHtuYW1lczpbXCJtb250aHNcIixcInllYXJcIl0sY2xzTmFtZTpcIm1vbnRoc1wiLGU6XCJjaGFuZ2VZZWFyXCIsbmF2U3RlcDoxfSx7bmFtZXM6W1wieWVhcnNcIixcImRlY2FkZVwiXSxjbHNOYW1lOlwieWVhcnNcIixlOlwiY2hhbmdlRGVjYWRlXCIsbmF2U3RlcDoxMH0se25hbWVzOltcImRlY2FkZXNcIixcImNlbnR1cnlcIl0sY2xzTmFtZTpcImRlY2FkZXNcIixlOlwiY2hhbmdlQ2VudHVyeVwiLG5hdlN0ZXA6MTAwfSx7bmFtZXM6W1wiY2VudHVyaWVzXCIsXCJtaWxsZW5uaXVtXCJdLGNsc05hbWU6XCJjZW50dXJpZXNcIixlOlwiY2hhbmdlTWlsbGVubml1bVwiLG5hdlN0ZXA6MWUzfV0sdmFsaWRQYXJ0czovZGQ/fEREP3xtbT98TU0/fHl5KD86eXkpPy9nLG5vbnB1bmN0dWF0aW9uOi9bXiAtXFwvOi1AXFx1NWU3NFxcdTY3MDhcXHU2NWU1XFxbLWB7LX5cXHRcXG5cXHJdKy9nLHBhcnNlRm9ybWF0OmZ1bmN0aW9uKGEpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGEudG9WYWx1ZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYS50b0Rpc3BsYXkpcmV0dXJuIGE7dmFyIGI9YS5yZXBsYWNlKHRoaXMudmFsaWRQYXJ0cyxcIlxcMFwiKS5zcGxpdChcIlxcMFwiKSxjPWEubWF0Y2godGhpcy52YWxpZFBhcnRzKTtpZighYnx8IWIubGVuZ3RofHwhY3x8MD09PWMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGF0ZSBmb3JtYXQuXCIpO3JldHVybntzZXBhcmF0b3JzOmIscGFydHM6Y319LHBhcnNlRGF0ZTpmdW5jdGlvbihjLGUsZixnKXtmdW5jdGlvbiBoKGEsYil7cmV0dXJuIGI9PT0hMCYmKGI9MTApLGE8MTAwJiYoYSs9MmUzLGE+KG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpK2ImJihhLT0xMDApKSxhfWZ1bmN0aW9uIGkoKXt2YXIgYT10aGlzLnNsaWNlKDAsaltuXS5sZW5ndGgpLGI9altuXS5zbGljZSgwLGEubGVuZ3RoKTtyZXR1cm4gYS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfWlmKCFjKXJldHVybiBiO2lmKGMgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBjO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1yLnBhcnNlRm9ybWF0KGUpKSxlLnRvVmFsdWUpcmV0dXJuIGUudG9WYWx1ZShjLGUsZik7dmFyIGosbCxtLG4sbyxwPXtkOlwibW92ZURheVwiLG06XCJtb3ZlTW9udGhcIix3OlwibW92ZVdlZWtcIix5OlwibW92ZVllYXJcIn0scz17eWVzdGVyZGF5OlwiLTFkXCIsdG9kYXk6XCIrMGRcIix0b21vcnJvdzpcIisxZFwifTtpZihjIGluIHMmJihjPXNbY10pLC9eW1xcLStdXFxkK1tkbXd5XShbXFxzLF0rW1xcLStdXFxkK1tkbXd5XSkqJC9pLnRlc3QoYykpe2ZvcihqPWMubWF0Y2goLyhbXFwtK11cXGQrKShbZG13eV0pL2dpKSxjPW5ldyBEYXRlLG49MDtuPGoubGVuZ3RoO24rKylsPWpbbl0ubWF0Y2goLyhbXFwtK11cXGQrKShbZG13eV0pL2kpLG09TnVtYmVyKGxbMV0pLG89cFtsWzJdLnRvTG93ZXJDYXNlKCldLGM9ay5wcm90b3R5cGVbb10oYyxtKTtyZXR1cm4gay5wcm90b3R5cGUuX3plcm9fdXRjX3RpbWUoYyl9aj1jJiZjLm1hdGNoKHRoaXMubm9ucHVuY3R1YXRpb24pfHxbXTt2YXIgdCx1LHY9e30sdz1bXCJ5eXl5XCIsXCJ5eVwiLFwiTVwiLFwiTU1cIixcIm1cIixcIm1tXCIsXCJkXCIsXCJkZFwiXSx4PXt5eXl5OmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuc2V0VVRDRnVsbFllYXIoZz9oKGIsZyk6Yil9LG06ZnVuY3Rpb24oYSxiKXtpZihpc05hTihhKSlyZXR1cm4gYTtmb3IoYi09MTtiPDA7KWIrPTEyO2ZvcihiJT0xMixhLnNldFVUQ01vbnRoKGIpO2EuZ2V0VVRDTW9udGgoKSE9PWI7KWEuc2V0VVRDRGF0ZShhLmdldFVUQ0RhdGUoKS0xKTtyZXR1cm4gYX0sZDpmdW5jdGlvbihhLGIpe3JldHVybiBhLnNldFVUQ0RhdGUoYil9fTt4Lnl5PXgueXl5eSx4Lk09eC5NTT14Lm1tPXgubSx4LmRkPXguZCxjPWQoKTt2YXIgeT1lLnBhcnRzLnNsaWNlKCk7aWYoai5sZW5ndGghPT15Lmxlbmd0aCYmKHk9YSh5KS5maWx0ZXIoZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5pbkFycmF5KGMsdykhPT0tMX0pLnRvQXJyYXkoKSksai5sZW5ndGg9PT15Lmxlbmd0aCl7dmFyIHo7Zm9yKG49MCx6PXkubGVuZ3RoO248ejtuKyspe2lmKHQ9cGFyc2VJbnQoaltuXSwxMCksbD15W25dLGlzTmFOKHQpKXN3aXRjaChsKXtjYXNlXCJNTVwiOnU9YShxW2ZdLm1vbnRocykuZmlsdGVyKGkpLHQ9YS5pbkFycmF5KHVbMF0scVtmXS5tb250aHMpKzE7YnJlYWs7Y2FzZVwiTVwiOnU9YShxW2ZdLm1vbnRoc1Nob3J0KS5maWx0ZXIoaSksdD1hLmluQXJyYXkodVswXSxxW2ZdLm1vbnRoc1Nob3J0KSsxfXZbbF09dH12YXIgQSxCO2ZvcihuPTA7bjx3Lmxlbmd0aDtuKyspQj13W25dLEIgaW4gdiYmIWlzTmFOKHZbQl0pJiYoQT1uZXcgRGF0ZShjKSx4W0JdKEEsdltCXSksaXNOYU4oQSl8fChjPUEpKX1yZXR1cm4gY30sZm9ybWF0RGF0ZTpmdW5jdGlvbihiLGMsZCl7aWYoIWIpcmV0dXJuXCJcIjtpZihcInN0cmluZ1wiPT10eXBlb2YgYyYmKGM9ci5wYXJzZUZvcm1hdChjKSksYy50b0Rpc3BsYXkpcmV0dXJuIGMudG9EaXNwbGF5KGIsYyxkKTt2YXIgZT17ZDpiLmdldFVUQ0RhdGUoKSxEOnFbZF0uZGF5c1Nob3J0W2IuZ2V0VVRDRGF5KCldLEREOnFbZF0uZGF5c1tiLmdldFVUQ0RheSgpXSxtOmIuZ2V0VVRDTW9udGgoKSsxLE06cVtkXS5tb250aHNTaG9ydFtiLmdldFVUQ01vbnRoKCldLE1NOnFbZF0ubW9udGhzW2IuZ2V0VVRDTW9udGgoKV0seXk6Yi5nZXRVVENGdWxsWWVhcigpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIpLHl5eXk6Yi5nZXRVVENGdWxsWWVhcigpfTtlLmRkPShlLmQ8MTA/XCIwXCI6XCJcIikrZS5kLGUubW09KGUubTwxMD9cIjBcIjpcIlwiKStlLm0sYj1bXTtmb3IodmFyIGY9YS5leHRlbmQoW10sYy5zZXBhcmF0b3JzKSxnPTAsaD1jLnBhcnRzLmxlbmd0aDtnPD1oO2crKylmLmxlbmd0aCYmYi5wdXNoKGYuc2hpZnQoKSksYi5wdXNoKGVbYy5wYXJ0c1tnXV0pO3JldHVybiBiLmpvaW4oXCJcIil9LGhlYWRUZW1wbGF0ZTonPHRoZWFkPjx0cj48dGggY29sc3Bhbj1cIjdcIiBjbGFzcz1cImRhdGVwaWNrZXItdGl0bGVcIj48L3RoPjwvdHI+PHRyPjx0aCBjbGFzcz1cInByZXZcIj4nK28udGVtcGxhdGVzLmxlZnRBcnJvdysnPC90aD48dGggY29sc3Bhbj1cIjVcIiBjbGFzcz1cImRhdGVwaWNrZXItc3dpdGNoXCI+PC90aD48dGggY2xhc3M9XCJuZXh0XCI+JytvLnRlbXBsYXRlcy5yaWdodEFycm93K1wiPC90aD48L3RyPjwvdGhlYWQ+XCIsXG5jb250VGVtcGxhdGU6Jzx0Ym9keT48dHI+PHRkIGNvbHNwYW49XCI3XCI+PC90ZD48L3RyPjwvdGJvZHk+Jyxmb290VGVtcGxhdGU6Jzx0Zm9vdD48dHI+PHRoIGNvbHNwYW49XCI3XCIgY2xhc3M9XCJ0b2RheVwiPjwvdGg+PC90cj48dHI+PHRoIGNvbHNwYW49XCI3XCIgY2xhc3M9XCJjbGVhclwiPjwvdGg+PC90cj48L3Rmb290Pid9O3IudGVtcGxhdGU9JzxkaXYgY2xhc3M9XCJkYXRlcGlja2VyXCI+PGRpdiBjbGFzcz1cImRhdGVwaWNrZXItZGF5c1wiPjx0YWJsZSBjbGFzcz1cInRhYmxlLWNvbmRlbnNlZFwiPicrci5oZWFkVGVtcGxhdGUrXCI8dGJvZHk+PC90Ym9keT5cIityLmZvb3RUZW1wbGF0ZSsnPC90YWJsZT48L2Rpdj48ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1tb250aHNcIj48dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK3IuaGVhZFRlbXBsYXRlK3IuY29udFRlbXBsYXRlK3IuZm9vdFRlbXBsYXRlKyc8L3RhYmxlPjwvZGl2PjxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLXllYXJzXCI+PHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+JytyLmhlYWRUZW1wbGF0ZStyLmNvbnRUZW1wbGF0ZStyLmZvb3RUZW1wbGF0ZSsnPC90YWJsZT48L2Rpdj48ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1kZWNhZGVzXCI+PHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+JytyLmhlYWRUZW1wbGF0ZStyLmNvbnRUZW1wbGF0ZStyLmZvb3RUZW1wbGF0ZSsnPC90YWJsZT48L2Rpdj48ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1jZW50dXJpZXNcIj48dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK3IuaGVhZFRlbXBsYXRlK3IuY29udFRlbXBsYXRlK3IuZm9vdFRlbXBsYXRlK1wiPC90YWJsZT48L2Rpdj48L2Rpdj5cIixhLmZuLmRhdGVwaWNrZXIuRFBHbG9iYWw9cixhLmZuLmRhdGVwaWNrZXIubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmRhdGVwaWNrZXI9bSx0aGlzfSxhLmZuLmRhdGVwaWNrZXIudmVyc2lvbj1cIjEuOC4wXCIsYS5mbi5kYXRlcGlja2VyLmRlcHJlY2F0ZWQ9ZnVuY3Rpb24oYSl7dmFyIGI9d2luZG93LmNvbnNvbGU7YiYmYi53YXJuJiZiLndhcm4oXCJERVBSRUNBVEVEOiBcIithKX0sYShkb2N1bWVudCkub24oXCJmb2N1cy5kYXRlcGlja2VyLmRhdGEtYXBpIGNsaWNrLmRhdGVwaWNrZXIuZGF0YS1hcGlcIiwnW2RhdGEtcHJvdmlkZT1cImRhdGVwaWNrZXJcIl0nLGZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcyk7Yy5kYXRhKFwiZGF0ZXBpY2tlclwiKXx8KGIucHJldmVudERlZmF1bHQoKSxuLmNhbGwoYyxcInNob3dcIikpfSksYShmdW5jdGlvbigpe24uY2FsbChhKCdbZGF0YS1wcm92aWRlPVwiZGF0ZXBpY2tlci1pbmxpbmVcIl0nKSl9KX0pO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9sb2NhbGVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmZyLm1pbi5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE3LzA4LzIwMjAgMTQ6MjBcblxuIWZ1bmN0aW9uKGEpe2EuZm4uZGF0ZXBpY2tlci5kYXRlcy5mcj17ZGF5czpbXCJkaW1hbmNoZVwiLFwibHVuZGlcIixcIm1hcmRpXCIsXCJtZXJjcmVkaVwiLFwiamV1ZGlcIixcInZlbmRyZWRpXCIsXCJzYW1lZGlcIl0sZGF5c1Nob3J0OltcImRpbS5cIixcImx1bi5cIixcIm1hci5cIixcIm1lci5cIixcImpldS5cIixcInZlbi5cIixcInNhbS5cIl0sZGF5c01pbjpbXCJkXCIsXCJsXCIsXCJtYVwiLFwibWVcIixcImpcIixcInZcIixcInNcIl0sbW9udGhzOltcImphbnZpZXJcIixcImbDqXZyaWVyXCIsXCJtYXJzXCIsXCJhdnJpbFwiLFwibWFpXCIsXCJqdWluXCIsXCJqdWlsbGV0XCIsXCJhb8O7dFwiLFwic2VwdGVtYnJlXCIsXCJvY3RvYnJlXCIsXCJub3ZlbWJyZVwiLFwiZMOpY2VtYnJlXCJdLG1vbnRoc1Nob3J0OltcImphbnYuXCIsXCJmw6l2ci5cIixcIm1hcnNcIixcImF2cmlsXCIsXCJtYWlcIixcImp1aW5cIixcImp1aWwuXCIsXCJhb8O7dFwiLFwic2VwdC5cIixcIm9jdC5cIixcIm5vdi5cIixcImTDqWMuXCJdLHRvZGF5OlwiQXVqb3VyZCdodWlcIixtb250aHNUaXRsZTpcIk1vaXNcIixjbGVhcjpcIkVmZmFjZXJcIix3ZWVrU3RhcnQ6MSxmb3JtYXQ6XCJkZC9tbS95eXl5XCJ9fShqUXVlcnkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
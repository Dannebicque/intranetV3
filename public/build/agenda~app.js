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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21hdGVyaWFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2RhbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3ZhbGlkYXRvci1iczQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9jc3MvYm9vdHN0cmFwLWRhdGVwaWNrZXIzLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9qcy9ib290c3RyYXAtZGF0ZXBpY2tlci5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9sb2NhbGVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmZyLm1pbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwibG9va3VwIiwiJCIsIm9uIiwiZSIsImZpbGVuYW1lIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwiaHRtbCIsImRvY3VtZW50IiwicmVhZHkiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImNoYW5nZSIsImkiLCJsZW5ndGgiLCJwdXNoIiwibmV4dCIsImpvaW4iLCJwcmVsb2FkZXIiLCJzcGVlZCIsImRhdGFBdHRyIiwiZmFkZU91dCIsImNsb3Nlc3QiLCJmaW5kIiwiY3NzIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGUiLCJ1cGRhdGVJbnRlcmZhY2UiLCJ2YWxpZGF0b3IiLCJhamF4Q29tcGxldGUiLCJ0b2dnbGVDbGFzcyIsInJlbW92ZUNsYXNzIiwic2xpZGVUb2dnbGUiLCJtb2RhbGVyIiwiZ2V0RGF0YU9wdGlvbnMiLCJzZWxlY3RwaWNrZXIiLCJpY29uQmFzZSIsInRpY2tJY29uIiwic3R5bGUiLCJzaXplIiwibGl2ZVNlYXJjaCIsImVhY2giLCJjb2xvciIsImhhc0RhdGFBdHRyIiwiZGF0YSIsInRvb2x0aXAiLCJjb250YWluZXIiLCJ0cmlnZ2VyIiwidGVtcGxhdGUiLCJvcHRpb25zIiwibXVsdGlkYXRlU2VwYXJhdG9yIiwibGFuZ3VhZ2UiLCJkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQiLCJwcm9wIiwiaW5wdXRzIiwiZGF0ZXBpY2tlciIsImhhc0NsYXNzIiwiY2xvc2UiLCJvcGVuIiwiYWRkQ2xhc3MiLCJmb2N1cyIsInNpZGViYXIiLCJwcyIsIlBlcmZlY3RTY3JvbGxiYXIiLCIkc3VibWVudSIsImlzIiwic2xpZGVVcCIsInRvZ2dsZUZvbGQiLCJhcHAiLCJ0b2dnbGVTdGF0ZSIsImZvbGQiLCJzdGF0ZSIsInVuZm9sZCIsInRvZ2dsZUhpZGUiLCJoaWRlIiwic2hvdyIsInByZXBlbmQiLCJyZW1vdmUiLCJxdWlja3ZpZXciLCJxcHMiLCJ1cGRhdGUiLCJyZWxvYWRRdiIsImRlc3Ryb3kiLCJnZXRUYXJnZXQiLCJ1cmwiLCJxdiIsImF0dHIiLCJsb2FkIiwiUm91dGluZyIsImdlbmVyYXRlIiwibm90IiwiYWZ0ZXIiLCJwcmV2IiwidW5kZWZpbmVkIiwibWF0ZXJpYWxEb0Zsb2F0IiwidmFsIiwibWF0ZXJpYWxOb0Zsb2F0IiwicGFyZW50IiwiY29uZmlnTW9kYWxlciIsImlzTW9kYWwiLCJ0eXBlIiwidGl0bGUiLCJiYWNrZHJvcCIsImhlYWRlclZpc2libGUiLCJmb290ZXJWaXNpYmxlIiwiY29uZmlybVZpc2libGUiLCJjb25maXJtVGV4dCIsImNvbmZpcm1DbGFzcyIsImNhbmNlbFZpc2libGUiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ2xhc3MiLCJib2R5RXh0cmFDbGFzcyIsInNwaW5uZXIiLCJhdXRvRGVzdHJveSIsIm9uU2hvdyIsIm9uU2hvd24iLCJvbkhpZGUiLCJvbkhpZGRlbiIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwibW9kYWxJZCIsImd1aWQiLCJsZW4iLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJyZXBsYWNlIiwic3Vic3RyIiwic2V0dGluZyIsImV4dGVuZCIsIm1vZGFsIiwiaWQiLCJoYW5kbGVDYWxsYmFjayIsImlzRnVuY3Rpb24iLCJzdWJzdHJpbmciLCJjYWxsIiwiYXBwZW5kIiwib3V0ZXJIVE1MIiwib25lIiwiaHRtbF9oZWFkZXIiLCJodG1sX2Zvb3RlciIsIm1vZGFsX2h0bWwiLCJqUXVlcnkiLCJrZXl3b3JkIiwic2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQiLCJzZWFyY2hfcmVwb25zZV9wZXJzb25uZWwiLCJzZWFyY2hfcmVwb25zZV9hdXRyZSIsImFqYXgiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJldHVkaWFudHMiLCJpbmRleCIsImV0dWRpYW50Iiwic2x1ZyIsInBob3RvIiwiYXZhdGFySW5pdGlhbGVzIiwiYmFzZXBhdGgiLCJkaXNwbGF5UHIiLCJzZW1lc3RyZSIsImdyb3VwZXMiLCJlbXB0eSIsInBlcnNvbm5lbHMiLCJwZXJzb25uZWwiLCJhdXRyZXMiLCJhdXRyZSIsInJlYWRVcmxNZW51IiwiJHVybCIsIiRlbHQiLCJzcGxpdCIsIiRmaXJzdEVsdCIsInBvcCIsImxvY2F0aW9uIiwiU3dhbCIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJjc3JmIiwiZmlyZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiX3Rva2VuIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiYWRkQ2FsbG91dCIsImVycm9yIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJzbGlkZURvd24iLCJkZWxheSIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZUlucHV0IiwicmVwbGFjZVdpdGgiLCJrZXlDb2RlIiwidXBkYXRlRGF0YSIsIndoaWNoIiwiZmllbGQiLCJtZXRob2QiLCIkb2JqIiwiJGh0bWwiLCJ0cmltIiwiZm4iLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiLCJkYXRhVG9PcHRpb24iLCJ4IiwidG9VcHBlckNhc2UiLCJlbCIsImNhc3RMaXN0Iiwia2V5IiwiQm9vbGVhbiIsIk51bWJlciIsImdldFZhbHVlIiwiJGVsIiwiVmFsaWRhdG9yIiwiZWxlbWVudCIsInZhbGlkYXRvcnMiLCJWQUxJREFUT1JTIiwiY3VzdG9tIiwiJGVsZW1lbnQiLCIkYnRuIiwiZmlsdGVyIiwiYWRkIiwicHJveHkiLCJvbklucHV0Iiwib25TdWJtaXQiLCJyZXNldCIsIiR0aGlzIiwiJGlucHV0cyIsIlZFUlNJT04iLCJJTlBVVF9TRUxFQ1RPUiIsIkZPQ1VTX09GRlNFVCIsIkRFRkFVTFRTIiwiZGlzYWJsZSIsImVycm9ycyIsIm1hdGNoIiwibWlubGVuZ3RoIiwiZmVlZGJhY2siLCJjaGVja1ZhbGlkaXR5IiwidmFsaWRpdHkiLCJ2YWxpZCIsInZhbGlkYXRpb25NZXNzYWdlIiwicHJvdG90eXBlIiwic2VsZiIsImNsZWFyRXJyb3JzIiwidG9nZ2xlU3VibWl0IiwiZGVmZXJFcnJvcnMiLCJ2YWxpZGF0ZUlucHV0IiwiZG9uZSIsInByZXZFcnJvcnMiLCJFdmVudCIsInJlbGF0ZWRUYXJnZXQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJydW5WYWxpZGF0b3JzIiwiZGVmZXIiLCJzaG93RXJyb3JzIiwiZGV0YWlsIiwiZGVmZXJyZWQiLCJEZWZlcnJlZCIsInJlamVjdCIsImdldFZhbGlkYXRvclNwZWNpZmljRXJyb3IiLCJnZXRWYWxpZGl0eVN0YXRlRXJyb3IiLCJ0eXBlTWlzbWF0Y2giLCJwYXR0ZXJuTWlzbWF0Y2giLCJzdGVwTWlzbWF0Y2giLCJyYW5nZU92ZXJmbG93IiwicmFuZ2VVbmRlcmZsb3ciLCJ2YWx1ZU1pc3NpbmciLCJnZXRHZW5lcmljRXJyb3IiLCJnZXRFcnJvck1lc3NhZ2UiLCJpbmRleE9mIiwiZ2V0IiwiZmFpbCIsImpxWEhSIiwidGV4dFN0YXR1cyIsImFsd2F5cyIsInJlc29sdmUiLCJwcm9taXNlIiwidmFsaWRhdGUiLCJ3aGVuIiwibWFwIiwiZm9jdXNFcnJvciIsIiRpbnB1dCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCIkZ3JvdXAiLCIkYmxvY2siLCIkZmVlZGJhY2siLCJoYXNFcnJvcnMiLCJmaWVsZEVycm9ycyIsImlzSW5jb21wbGV0ZSIsImZpZWxkSW5jb21wbGV0ZSIsImNhbGxiYWNrIiwid2luZG93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbW92ZURhdGEiLCJ0aW1lb3V0Iiwib3JpZ2luYWxDb250ZW50IiwicmVtb3ZlQXR0ciIsIm9mZiIsIlBsdWdpbiIsIm9wdGlvbiIsIm9sZCIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsIiRmb3JtIiwiYSIsImRlZmluZSIsImIiLCJjIiwiRGF0ZSIsIlVUQyIsImFwcGx5IiwiYXJndW1lbnRzIiwiZCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJmIiwiZGVwcmVjYXRlZCIsImciLCJpc05hTiIsImdldFRpbWUiLCJoIiwidG9Mb3dlckNhc2UiLCJSZWdFeHAiLCJ0ZXN0IiwicSIsInAiLCJqIiwic2xpY2UiLCJjb250YWlucyIsInZhbHVlT2YiLCJzcGxpY2UiLCJpc0FycmF5IiwiY2xlYXIiLCJjb3B5IiwiayIsIl9wcm9jZXNzX29wdGlvbnMiLCJkYXRlcyIsInZpZXdEYXRlIiwibyIsImRlZmF1bHRWaWV3RGF0ZSIsImZvY3VzRGF0ZSIsImlzSW5wdXQiLCJpbnB1dEZpZWxkIiwiY29tcG9uZW50IiwiaXNJbmxpbmUiLCJwaWNrZXIiLCJyIiwiX2NoZWNrX3RlbXBsYXRlIiwidGVtcGxhdGVzIiwibGVmdEFycm93IiwicmlnaHRBcnJvdyIsIl9idWlsZEV2ZW50cyIsIl9hdHRhY2hFdmVudHMiLCJhcHBlbmRUbyIsInJ0bCIsImNhbGVuZGFyV2Vla3MiLCJzdGFydERhdGUiLCJfbyIsImVuZERhdGUiLCJkYXlzT2ZXZWVrRGlzYWJsZWQiLCJkYXRlc0Rpc2FibGVkIiwiX2FsbG93X3VwZGF0ZSIsInNldFZpZXdNb2RlIiwic3RhcnRWaWV3IiwiZmlsbERvdyIsImZpbGxNb250aHMiLCJjb25zdHJ1Y3RvciIsIl9yZXNvbHZlVmlld05hbWUiLCJ2aWV3TW9kZXMiLCJpbkFycmF5IiwibmFtZXMiLCJfcmVzb2x2ZURheXNPZldlZWsiLCJtaW5WaWV3TW9kZSIsIm1heFZpZXdNb2RlIiwibWF4IiwibWluIiwibXVsdGlkYXRlIiwiU3RyaW5nIiwid2Vla1N0YXJ0Iiwid2Vla0VuZCIsInBhcnNlRm9ybWF0IiwiZm9ybWF0IiwiX2xvY2FsX3RvX3V0YyIsIl96ZXJvX3RpbWUiLCJwYXJzZURhdGUiLCJhc3N1bWVOZWFyYnlZZWFyIiwib3JpZW50YXRpb24iLCJncmVwIiwieSIsInllYXIiLCJtb250aCIsImwiLCJkYXkiLCJfZXZlbnRzIiwiX3NlY29uZGFyeUV2ZW50cyIsIl9hcHBseUV2ZW50cyIsIl91bmFwcGx5RXZlbnRzIiwia2V5dXAiLCJrZXlkb3duIiwicGFzdGUiLCJzaG93T25Gb2N1cyIsImNsaWNrIiwiYmx1ciIsIl9mb2N1c2VkX2Zyb20iLCJpbW1lZGlhdGVVcGRhdGVzIiwiZGF0ZSIsIm5hdkFycm93c0NsaWNrIiwiZGF5Q2VsbENsaWNrIiwicmVzaXplIiwicGxhY2UiLCJfZGV0YWNoRXZlbnRzIiwiX2F0dGFjaFNlY29uZGFyeUV2ZW50cyIsIl9kZXRhY2hTZWNvbmRhcnlFdmVudHMiLCJfdHJpZ2dlciIsIl91dGNfdG9fbG9jYWwiLCJ2aWV3TW9kZSIsImZvcm1hdERhdGUiLCJlbmFibGVPblJlYWRvbmx5IiwibmF2aWdhdG9yIiwibXNNYXhUb3VjaFBvaW50cyIsImRpc2FibGVUb3VjaEtleWJvYXJkIiwiZGV0YWNoIiwiZm9yY2VQYXJzZSIsInNldFZhbHVlIiwib3JpZ2luYWxFdmVudCIsImNsaXBib2FyZERhdGEiLCJ0eXBlcyIsImdldERhdGEiLCJzZXREYXRlIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJfemVyb191dGNfdGltZSIsImdldERhdGVzIiwiZ2V0VVRDRGF0ZXMiLCJjbGVhckRhdGVzIiwiYXV0b2Nsb3NlIiwic2V0RGF0ZXMiLCJzZXRVVENEYXRlcyIsInNldFVUQ0RhdGUiLCJnZXRGb3JtYXR0ZWREYXRlIiwiZ2V0U3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwidXBkYXRlTmF2QXJyb3dzIiwiZ2V0RW5kRGF0ZSIsInNldEVuZERhdGUiLCJzZXREYXlzT2ZXZWVrRGlzYWJsZWQiLCJzZXREYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQiLCJzZXREYXRlc0Rpc2FibGVkIiwib3V0ZXJXaWR0aCIsIm91dGVySGVpZ2h0Iiwid2lkdGgiLCJwYXJlbnRzIiwiekluZGV4T2Zmc2V0IiwibSIsIm4iLCJsZWZ0IiwicGFyc2VJbnQiLCJyaWdodCIsInpJbmRleCIsImRhdGVXaXRoaW5SYW5nZSIsInVwZGF0ZVZpZXdEYXRlIiwiZmlsbCIsInNob3dXZWVrRGF5cyIsImRheXNNaW4iLCJtb250aHNTaG9ydCIsInNldFJhbmdlIiwicmFuZ2UiLCJnZXRDbGFzc05hbWVzIiwidG9kYXlIaWdobGlnaHQiLCJkYXRlSXNEaXNhYmxlZCIsImdldFVUQ0RheSIsIl9maWxsX3llYXJzVmlldyIsImZsb29yIiwicyIsInQiLCJub29wIiwiZW5hYmxlZCIsImNsYXNzZXMiLCJjb25jYXQiLCJ0b2RheSIsImVuIiwidGl0bGVGb3JtYXQiLCJ0b2RheUJ0biIsImNsZWFyQnRuIiwic2V0VVRDRnVsbFllYXIiLCJ1IiwidiIsInciLCJ6IiwiQSIsIkIiLCJiZWZvcmVTaG93RGF5IiwiY29udGVudCIsInVuaXF1ZVNvcnQiLCJ1bmlxdWUiLCJDIiwibW9udGhzVGl0bGUiLCJEIiwiZW5kIiwiZXEiLCJiZWZvcmVTaG93TW9udGgiLCJFIiwiYmVmb3JlU2hvd1llYXIiLCJiZWZvcmVTaG93RGVjYWRlIiwiYmVmb3JlU2hvd0NlbnR1cnkiLCJzdG9wUHJvcGFnYXRpb24iLCJfc2V0RGF0ZSIsInNldFVUQ01vbnRoIiwiY3VycmVudFRhcmdldCIsIm5hdlN0ZXAiLCJtb3ZlTW9udGgiLCJfdG9nZ2xlX211bHRpZGF0ZSIsInRvZ2dsZUFjdGl2ZSIsIm1vdmVEYXkiLCJtb3ZlV2VlayIsImFicyIsIm1vdmVZZWFyIiwibW92ZUF2YWlsYWJsZURhdGUiLCJ3ZWVrT2ZEYXRlSXNEaXNhYmxlZCIsImtleWJvYXJkTmF2aWdhdGlvbiIsImN0cmxLZXkiLCJzaGlmdEtleSIsImNoaWxkcmVuIiwiY2xzTmFtZSIsImpxdWVyeSIsImtlZXBFbXB0eVZhbHVlcyIsImRhdGVVcGRhdGVkIiwicGlja2VycyIsInVwZGF0ZURhdGVzIiwidXBkYXRlUmFuZ2VzIiwidXBkYXRpbmciLCJzaGlmdCIsInRvQXJyYXkiLCJFcnJvciIsImRlZmF1bHRzIiwibG9jYWxlX29wdHMiLCJkYXlzIiwiZGF5c1Nob3J0IiwibW9udGhzIiwidmFsaWRQYXJ0cyIsIm5vbnB1bmN0dWF0aW9uIiwidG9WYWx1ZSIsInRvRGlzcGxheSIsInNlcGFyYXRvcnMiLCJwYXJ0cyIsInllc3RlcmRheSIsInRvbW9ycm93IiwieXl5eSIsInl5IiwiTSIsIk1NIiwibW0iLCJkZCIsIkREIiwiaGVhZFRlbXBsYXRlIiwiY29udFRlbXBsYXRlIiwiZm9vdFRlbXBsYXRlIiwiRFBHbG9iYWwiLCJ2ZXJzaW9uIiwid2FybiIsImZyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUMsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLElBQVQsRUFBYyxJQUFkLEVBQW1CLEdBQW5CLEVBQXVCLEdBQXZCLEVBQTJCLEdBQTNCLENBQS9JO0FBQStLMkUsVUFBTSxFQUFDLENBQUMsU0FBRCxFQUFXLFNBQVgsRUFBcUIsTUFBckIsRUFBNEIsT0FBNUIsRUFBb0MsS0FBcEMsRUFBMEMsTUFBMUMsRUFBaUQsU0FBakQsRUFBMkQsTUFBM0QsRUFBa0UsV0FBbEUsRUFBOEUsU0FBOUUsRUFBd0YsVUFBeEYsRUFBbUcsVUFBbkcsQ0FBdEw7QUFBcVMxRSxlQUFXLEVBQUMsQ0FBQyxPQUFELEVBQVMsT0FBVCxFQUFpQixNQUFqQixFQUF3QixPQUF4QixFQUFnQyxLQUFoQyxFQUFzQyxNQUF0QyxFQUE2QyxPQUE3QyxFQUFxRCxNQUFyRCxFQUE0RCxPQUE1RCxFQUFvRSxNQUFwRSxFQUEyRSxNQUEzRSxFQUFrRixNQUFsRixDQUFqVDtBQUEyWWUsU0FBSyxFQUFDLGFBQWpaO0FBQStaaUIsZUFBVyxFQUFDLE1BQTNhO0FBQWtibkssU0FBSyxFQUFDLFNBQXhiO0FBQWtjOEMsYUFBUyxFQUFDLENBQTVjO0FBQThjRyxVQUFNLEVBQUM7QUFBcmQsR0FBekI7QUFBNGYsQ0FBeGdCLENBQXlnQjNRLE1BQXpnQixDQUFELEMiLCJmaWxlIjoiYWdlbmRhfmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9hcHAuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxNC8xMC8yMDIwIDEwOjI1XG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvc2Nzcy9mb250YXdlc29tZS5zY3NzJ1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9zY3NzL3NvbGlkLnNjc3MnXG5pbXBvcnQgJ2Jvb3RzdHJhcC1zZWxlY3QvZGlzdC9jc3MvYm9vdHN0cmFwLXNlbGVjdC5taW4uY3NzJ1xuaW1wb3J0ICcuLi92ZW5kb3IvYm9vdHN0cmFwLWRhdGVwaWNrZXIvY3NzL2Jvb3RzdHJhcC1kYXRlcGlja2VyMy5taW4uY3NzJ1xuaW1wb3J0ICcuLi92ZW5kb3IvYm9vdHN0cmFwLWRhdGVwaWNrZXIvanMvYm9vdHN0cmFwLWRhdGVwaWNrZXIubWluLmpzJ1xuaW1wb3J0ICcuLi92ZW5kb3IvYm9vdHN0cmFwLWRhdGVwaWNrZXIvbG9jYWxlcy9ib290c3RyYXAtZGF0ZXBpY2tlci5mci5taW4nXG5cbmltcG9ydCAnLi4vY3NzL2FwcC5zY3NzJ1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdwZXJmZWN0LXNjcm9sbGJhcidcbmltcG9ydCAnLi92YWxpZGF0b3ItYnM0J1xuaW1wb3J0IHtnZXREYXRhT3B0aW9uc30gZnJvbSAnLi91dGlsJ1xuaW1wb3J0ICcuL21hdGVyaWFsJ1xuaW1wb3J0ICcuL3NlYXJjaCdcbmltcG9ydCAnLi9tb2RhbGVyJ1xuXG5yZXF1aXJlKCdib290c3RyYXAnKVxuXG5sZXQgbG9va3VwID0ge31cblxucmVxdWlyZSgnYm9vdHN0cmFwLXNlbGVjdCcpXG5cbiQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gIGxldCBmaWxlbmFtZSA9IGUudGFyZ2V0LmZpbGVzWzBdLm5hbWVcbiAgJCgnLmN1c3RvbS1maWxlLWxhYmVsJykuaHRtbChmaWxlbmFtZSlcbn0pXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgLy8gY29weSBsaW5rIEVEVFxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2NvcHlMaW5rJywgZnVuY3Rpb24gKCkge1xuICAgICQoJyNsaWVuSWNhbCcpLnNlbGVjdCgpXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxuICB9KVxuXG4gIC8vIHNjcmlwdCBwb3VyIGFmZmljaGVyIGxlIGZpY2hpZXIgc2VsZWN0aW9ubsOpIGF2ZWMgYm9vdHN0cmFwNFxuICAkKCcuY3VzdG9tLWZpbGUgaW5wdXQnKS5jaGFuZ2UoZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBmaWxlcyA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkKHRoaXMpWzBdLmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWxlcy5wdXNoKCQodGhpcylbMF0uZmlsZXNbaV0ubmFtZSlcbiAgICB9XG4gICAgJCh0aGlzKS5uZXh0KCcuY3VzdG9tLWZpbGUtbGFiZWwnKS5odG1sKGZpbGVzLmpvaW4oJywgJykpXG4gIH0pXG5cbiAgdmFyIHByZWxvYWRlciA9ICQoJy5wcmVsb2FkZXInKVxuICBpZiAocHJlbG9hZGVyLmxlbmd0aCkge1xuICAgIHZhciBzcGVlZCA9IHByZWxvYWRlci5kYXRhQXR0cignaGlkZS1zcHBlZCcsIDYwMClcbiAgICBwcmVsb2FkZXIuZmFkZU91dChzcGVlZClcbiAgfVxuXG4gICQoZG9jdW1lbnQpLm9uKCdmb2N1cycsICcudG9wYmFyLXNlYXJjaCBpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJy50b3BiYXItc2VhcmNoJykuZmluZCgnLmxvb2t1cC1wbGFjZWhvbGRlciBzcGFuJykuY3NzKCdvcGFjaXR5JywgJzAnKVxuICB9KVxuXG4gICQoZG9jdW1lbnQpLm9uKCdibHVyJywgJy50b3BiYXItc2VhcmNoIGlucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnLnRvcGJhci1zZWFyY2gnKS5maW5kKCcubG9va3VwLXBsYWNlaG9sZGVyIHNwYW4nKS5jc3MoJ29wYWNpdHknLCAnMScpXG4gIH0pXG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNsb29rdXAnLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHZhciB0YXJnZXQgPSAkKCcjbG9va3VwLWZ1bGwnKVxuXG4gICAgaWYgKHRhcmdldCAhPT0gZmFsc2UpIHtcbiAgICAgIGxvb2t1cC50b2dnbGUodGFyZ2V0KVxuICAgIH1cbiAgfSlcblxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2xvb2t1cC1jbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICBsb29rdXAudG9nZ2xlKCQoJyNsb29rdXAtZnVsbCcpKVxuICB9KVxuXG4gIC8vdG9vbHRpcFxuICB1cGRhdGVJbnRlcmZhY2UoKVxuXG4gICQoJ1tkYXRhLXByb3ZpZGU9XCJ2YWxpZGF0aW9uXCJdJykudmFsaWRhdG9yKClcbn0pXG5cbiQoZG9jdW1lbnQpLmFqYXhDb21wbGV0ZShmdW5jdGlvbiAoKSB7XG4gIHVwZGF0ZUludGVyZmFjZSgpXG59KVxuXG4vLyBGdWxsc2NyZWVuXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jYXJkLWJ0bi1mdWxsc2NyZWVuJywgZnVuY3Rpb24gKCkge1xuICAkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykudG9nZ2xlQ2xhc3MoJ2NhcmQtZnVsbHNjcmVlbicpLnJlbW92ZUNsYXNzKCdjYXJkLW1heGltaXplJylcbn0pXG5cbi8vIFNsaWRlIHVwL2Rvd25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2FyZC1idG4tc2xpZGUnLCBmdW5jdGlvbiAoKSB7XG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ3JvdGF0ZS0xODAnKS5jbG9zZXN0KCcuY2FyZCcpLmZpbmQoJy5jYXJkLWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpXG59KVxuXG4vL21vZGFsZXJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1wcm92aWRlfj1cIm1vZGFsZXJcIl0nLCBmdW5jdGlvbiAoKSB7XG4gIG1vZGFsZXIoZ2V0RGF0YU9wdGlvbnMoJCh0aGlzKSkpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVJbnRlcmZhY2UgKCkge1xuICAvL3NlbGVjdHBpY2tlclxuICAkKCcuc2VsZWN0cGlja2VyJykuc2VsZWN0cGlja2VyKHtcbiAgICBpY29uQmFzZTogJycsXG4gICAgdGlja0ljb246ICdmYXMgZmEtY2hlY2snLFxuICAgIHN0eWxlOiAnYnRuLWxpZ2h0JyxcbiAgICBzaXplOiAxMCxcbiAgICBsaXZlU2VhcmNoOiB0cnVlXG4gIH0pXG5cbiAgLy90b29sdGlwXG4gICQoJ1tkYXRhLXByb3ZpZGV+PVwidG9vbHRpcFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb2xvciA9ICcnXG5cbiAgICBpZiAoJCh0aGlzKS5oYXNEYXRhQXR0cigndG9vbHRpcC1jb2xvcicpKSB7XG4gICAgICBjb2xvciA9ICcgdG9vbHRpcC0nICsgJCh0aGlzKS5kYXRhKCd0b29sdGlwLWNvbG9yJylcbiAgICB9XG5cbiAgICAkKHRoaXMpLnRvb2x0aXAoe1xuICAgICAgY29udGFpbmVyOiAnYm9keScsXG4gICAgICB0cmlnZ2VyOiAnaG92ZXInLFxuICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcCcgKyBjb2xvciArICdcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+J1xuICAgIH0pXG4gIH0pXG5cbiAgJCgnW2RhdGEtcHJvdmlkZX49XCJkYXRlcGlja2VyXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBtdWx0aWRhdGVTZXBhcmF0b3I6ICcsICcsXG4gICAgICBsYW5ndWFnZTogJ2ZyJyxcbiAgICAgIGRheXNPZldlZWtIaWdobGlnaHRlZDogJzA2J1xuICAgIH1cblxuICAgIGlmICgkKHRoaXMpLnByb3AoJ3RhZ05hbWUnKSAhPSAnSU5QVVQnKSB7XG4gICAgICAvL3NpIGNlIG4nZXN0IHBhcyB1biBpbnB1dCA9PiBkb25jIHVuIGRhdGUgcmFuZ2VcbiAgICAgIG9wdGlvbnMuaW5wdXRzID0gWyQodGhpcykuZmluZCgnaW5wdXQ6Zmlyc3QnKSwgJCh0aGlzKS5maW5kKCdpbnB1dDpsYXN0JyldXG4gICAgfVxuICAgICQodGhpcykuZGF0ZXBpY2tlcihvcHRpb25zKVxuICB9KVxuXG59XG5cbi8vIE9wZW4gZnVsbHNjcmVlbiBsb29rdXBcbi8vXG5sb29rdXAudG9nZ2xlID0gZnVuY3Rpb24gKGUpIHtcbiAgaWYgKCQoZSkuaGFzQ2xhc3MoJ3JldmVhbCcpKSB7XG4gICAgbG9va3VwLmNsb3NlKGUpXG4gIH0gZWxzZSB7XG4gICAgbG9va3VwLm9wZW4oZSlcbiAgfVxufVxuXG4vLyBDbG9zZSBmdWxsc2NyZWVuIGxvb2t1cFxuLy9cbmxvb2t1cC5jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICQoZSkucmVtb3ZlQ2xhc3MoJ3JldmVhbCcpXG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJylcbn1cblxuXG4vLyBDbG9zZSBmdWxsc2NyZWVuIGxvb2t1cFxuLy9cbmxvb2t1cC5vcGVuID0gZnVuY3Rpb24gKGUpIHtcbiAgJChlKS5hZGRDbGFzcygncmV2ZWFsJylcbiAgJChlKS5maW5kKCcubG9va3VwLWZvcm0gaW5wdXQnKS5mb2N1cygpXG4gICQoJ2JvZHknKS5hZGRDbGFzcygnbm8tc2Nyb2xsJylcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09XG4vLyBTaWRlYmFyXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cblxudmFyIHNpZGViYXIgPSB7fVxuXG4vLyBTY3JvbGxhYmxlXG4vL1xuY29uc3QgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnNpZGViYXItbmF2aWdhdGlvbicpXG5cbi8vIEhhbmRsZSBzaWRlYmFyIG9wZW5uZXJcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNpZGViYXItdG9nZ2xlcicsIGZ1bmN0aW9uICgpIHtcbiAgc2lkZWJhci5vcGVuKClcbn0pXG5cblxuLy8gQ2xvc2Ugc2lkZWJhciB3aGVuIGJhY2tkcm9wIHRvdWNoZXNcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJhY2tkcm9wLXNpZGViYXInLCBmdW5jdGlvbiAoKSB7XG4gIHNpZGViYXIuY2xvc2UoKVxufSlcblxuXG4vLyBTbGlkZSB1cC9kb3duIG1lbnUgaXRlbSBvbiBjbGlja1xuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2lkZWJhciAubWVudS1saW5rJywgZnVuY3Rpb24gKCkge1xuICB2YXIgJHN1Ym1lbnUgPSAkKHRoaXMpLm5leHQoJy5tZW51LXN1Ym1lbnUnKVxuICBpZiAoJHN1Ym1lbnUubGVuZ3RoIDwgMSlcbiAgICByZXR1cm5cblxuICBpZiAoJHN1Ym1lbnUuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAkc3VibWVudS5zbGlkZVVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5zaWRlYmFyIC5tZW51LWl0ZW0ub3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICB9KVxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgIHJldHVyblxuICB9XG5cbiAgJCgnLnNpZGViYXIgLm1lbnUtc3VibWVudTp2aXNpYmxlJykuc2xpZGVVcCgpXG4gICQoJy5zaWRlYmFyIC5tZW51LWxpbmsnKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gICRzdWJtZW51LnNsaWRlVG9nZ2xlKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc2lkZWJhciAubWVudS1pdGVtLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gIH0pXG4gICQodGhpcykuYWRkQ2xhc3MoJ29wZW4nKVxufSlcblxuLy8gSGFuZGxlIGZvbGQgdG9nZ2xlclxuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2lkZWJhci10b2dnbGUtZm9sZCcsIGZ1bmN0aW9uICgpIHtcbiAgc2lkZWJhci50b2dnbGVGb2xkKClcbn0pXG5cbi8vfVxuXG5cbnNpZGViYXIudG9nZ2xlRm9sZCA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzaWRlYmFyLWZvbGRlZCcpXG4gIGFwcC50b2dnbGVTdGF0ZSgnc2lkZWJhci5mb2xkZWQnKVxufVxuXG5zaWRlYmFyLmZvbGQgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1mb2xkZWQnKVxuICBhcHAuc3RhdGUoJ3NpZGViYXIuZm9sZGVkJywgdHJ1ZSlcbn1cblxuXG5zaWRlYmFyLnVuZm9sZCA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLWZvbGRlZCcpXG4gIGFwcC5zdGF0ZSgnc2lkZWJhci5mb2xkZWQnLCBmYWxzZSlcbn1cblxuXG5zaWRlYmFyLnRvZ2dsZUhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS50b2dnbGVDbGFzcygnc2lkZWJhci1oaWRkZW4nKVxuICBhcHAudG9nZ2xlU3RhdGUoJ3NpZGViYXIuaGlkZGVuJylcbn1cblxuc2lkZWJhci5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykuYWRkQ2xhc3MoJ3NpZGViYXItaGlkZGVuJylcbiAgYXBwLnN0YXRlKCdzaWRlYmFyLmhpZGRlbicsIHRydWUpXG59XG5cbnNpZGViYXIuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLWhpZGRlbicpXG4gIGFwcC5zdGF0ZSgnc2lkZWJhci5oaWRkZW4nLCBmYWxzZSlcbn1cblxuXG5zaWRlYmFyLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1vcGVuJykucHJlcGVuZCgnPGRpdiBjbGFzcz1cImFwcC1iYWNrZHJvcCBiYWNrZHJvcC1zaWRlYmFyXCI+PC9kaXY+Jylcbn1cblxuc2lkZWJhci5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLW9wZW4nKVxuICAkKCcuYmFja2Ryb3Atc2lkZWJhcicpLnJlbW92ZSgpXG59XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09XG4vLyBRdWlja3ZpZXdcbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy9cblxubGV0IHF1aWNrdmlldyA9IHt9XG5sZXQgcXBzID0gbnVsbFxuXG4vLyBVcGRhdGUgc2Nyb2xsYmFyIG9uIHRhYiBjaGFuZ2Vcbi8vXG4kKGRvY3VtZW50KS5vbignc2hvd24uYnMudGFiJywgJy5xdWlja3ZpZXctaGVhZGVyIGFbZGF0YS10b2dnbGU9XCJ0YWJcIl0nLCBmdW5jdGlvbiAoZSkge1xuICBxcHMudXBkYXRlKClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbG9hZFF2ICgpIHtcbiAgcXBzLmRlc3Ryb3koKVxuICBxcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnF1aWNrdmlldycpXG59XG5cbi8vIFF1aWNrdmlldyBjbG9zZXJcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtZGlzbWlzcz1cInF1aWNrdmlld1wiXScsIGZ1bmN0aW9uICgpIHtcbiAgcXVpY2t2aWV3LmNsb3NlKCQodGhpcykuY2xvc2VzdCgnLnF1aWNrdmlldycpKVxufSlcblxuXG4vLyBIYW5kbGUgcXVpY2t2aWV3IG9wZW5uZXJcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtdG9nZ2xlPVwicXVpY2t2aWV3XCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGxldCB0YXJnZXQgPSBhcHAuZ2V0VGFyZ2V0KCQodGhpcykpXG5cbiAgaWYgKHRhcmdldCA9PSBmYWxzZSkge1xuICAgIHF1aWNrdmlldy5jbG9zZSgkKHRoaXMpLmNsb3Nlc3QoJy5xdWlja3ZpZXcnKSlcbiAgfSBlbHNlIHtcbiAgICBsZXQgdXJsID0gJydcbiAgICBpZiAoJCh0aGlzKS5oYXNEYXRhQXR0cigndXJsJykpIHtcbiAgICAgIHVybCA9ICQodGhpcykuZGF0YSgndXJsJylcbiAgICB9XG4gICAgcXVpY2t2aWV3LnRvZ2dsZSh0YXJnZXQsIHVybClcbiAgfVxufSlcblxuXG4vLyBDbG9zZSBxdWlja3ZpZXcgd2hlbiBiYWNrZHJvcCB0b3VjaGVzXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5iYWNrZHJvcC1xdWlja3ZpZXcnLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBxdiA9ICQodGhpcykuYXR0cignZGF0YS10YXJnZXQnKVxuICBpZiAoISQocXYpLmlzKCdbZGF0YS1kaXNhYmxlLWJhY2tkcm9wLWNsaWNrXScpKSB7XG4gICAgcXVpY2t2aWV3LmNsb3NlKHF2KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnF1aWNrdmlldyAuY2xvc2UsIFtkYXRhLWRpc21pc3M9XCJxdWlja3ZpZXdcIl0nLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBxdiA9ICQodGhpcykuY2xvc2VzdCgnLnF1aWNrdmlldycpXG4gIHF1aWNrdmlldy5jbG9zZShxdilcbn0pXG5cbi8vIFRvZ2dsZSBvcGVuL2Nsb3NlIHN0YXRlXG4vL1xucXVpY2t2aWV3LnRvZ2dsZSA9IGZ1bmN0aW9uIChlLCB1cmwpIHtcbiAgaWYgKCQoZSkuaGFzQ2xhc3MoJ3JldmVhbCcpKSB7XG4gICAgcXVpY2t2aWV3LmNsb3NlKGUpXG4gIH0gZWxzZSB7XG4gICAgaWYgKHVybCAhPT0gJycpIHtcbiAgICAgICQoZSkuaHRtbCgnPGRpdiBjbGFzcz1cInNwaW5uZXItbGluZWFyXCI+PGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj48L2Rpdj4nKVxuICAgICAgJChlKS5sb2FkKHVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBxcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnF1aWNrdmlldycpXG4gICAgICB9KVxuICAgIH1cbiAgICBxdWlja3ZpZXcub3BlbihlKVxuICB9XG59XG5cblxuLy8gT3BlbiBxdWlja3ZpZXdcbi8vXG5xdWlja3ZpZXcub3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gIGxldCBxdWlja3ZpZXcgPSAkKGUpXG4gIGxldCB1cmwgPSAnJ1xuICAvLyBMb2FkIGNvbnRlbnQgZnJvbSBVUkwgaWYgcmVxdWlyZWRcbiAgaWYgKHF1aWNrdmlldy5oYXNEYXRhQXR0cigndXJsJykgJiYgJ3RydWUnICE9PSBxdWlja3ZpZXcuZGF0YSgndXJsLWhhcy1sb2FkZWQnKSkge1xuICAgIGlmIChxdWlja3ZpZXcuZGF0YSgndXJsJykgPT09ICduby11cmwnKSB7XG4gICAgICB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdxdWlja192aWV3JylcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gcXVpY2t2aWV3LmRhdGEoJ3VybCcpXG4gICAgfVxuXG4gICAgcXVpY2t2aWV3LmxvYWQodXJsLCBmdW5jdGlvbiAoKSB7XG4gICAgICBxcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnF1aWNrdmlldycpXG5cbiAgICAgIC8vIERvbid0IGxvYWQgaXQgbmV4dCB0aW1lLCBpZiBkb24ndCBuZWVkIHRvXG4gICAgICBpZiAocXVpY2t2aWV3Lmhhc0RhdGFBdHRyKCdhbHdheXMtcmVsb2FkJykgJiYgJ3RydWUnID09PSBxdWlja3ZpZXcuZGF0YSgnYWx3YXlzLXJlbG9hZCcpKSB7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1aWNrdmlldy5kYXRhKCd1cmwtaGFzLWxvYWRlZCcsICd0cnVlJylcbiAgICAgIH1cbiAgICB9KVxuXG4gIH1cblxuLy8gT3BlbiBpdFxuICBxdWlja3ZpZXcuYWRkQ2xhc3MoJ3JldmVhbCcpLm5vdCgnLmJhY2tkcm9wLXJlbW92ZScpLmFmdGVyKCc8ZGl2IGNsYXNzPVwiYXBwLWJhY2tkcm9wIGJhY2tkcm9wLXF1aWNrdmlld1wiIGRhdGEtdGFyZ2V0PVwiJyArIGUgKyAnXCI+PC9kaXY+Jylcbn1cblxuXG4vLyBDbG9zZSBxdWlja3ZpZXdcbi8vXG5xdWlja3ZpZXcuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAkKGUpLnJlbW92ZUNsYXNzKCdyZXZlYWwnKVxuICAkKCcuYmFja2Ryb3AtcXVpY2t2aWV3JykucmVtb3ZlKClcbn1cblxuXG5sZXQgYXBwID0ge31cblxuYXBwLmdldFRhcmdldCA9IGZ1bmN0aW9uIChlKSB7XG4gIGxldCB0YXJnZXRcbiAgaWYgKGUuaGFzRGF0YUF0dHIoJ3RhcmdldCcpKSB7XG4gICAgdGFyZ2V0ID0gZS5kYXRhKCd0YXJnZXQnKVxuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGUuYXR0cignaHJlZicpXG4gIH1cblxuICBpZiAodGFyZ2V0ID09ICduZXh0Jykge1xuICAgIHRhcmdldCA9ICQoZSkubmV4dCgpXG4gIH0gZWxzZSBpZiAodGFyZ2V0ID09ICdwcmV2Jykge1xuICAgIHRhcmdldCA9ICQoZSkucHJldigpXG4gIH1cblxuICBpZiAodGFyZ2V0ID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldFxufVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvbWF0ZXJpYWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyOC8xMS8yMDE5IDE5OjQwXG5cbi8vIE1hdGVyaWFsIGlucHV0XG4vL1xuJChkb2N1bWVudCkub24oJ2ZvY3VzJywgJy5mb3JtLXR5cGUtbWF0ZXJpYWwgLmZvcm0tY29udHJvbDpub3QoLmJvb3RzdHJhcC1zZWxlY3QpJywgZnVuY3Rpb24gKCkge1xuICBtYXRlcmlhbERvRmxvYXQoJCh0aGlzKSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdmb2N1c291dCcsICcuZm9ybS10eXBlLW1hdGVyaWFsIC5mb3JtLWNvbnRyb2w6bm90KC5ib290c3RyYXAtc2VsZWN0KScsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKCQodGhpcykudmFsKCkgPT09ICcnKSB7XG4gICAgbWF0ZXJpYWxOb0Zsb2F0KCQodGhpcykpXG4gIH1cbn0pXG5cbi8vIEF1dG8gZm9jdXMgaW5wdXRzXG5tYXRlcmlhbERvRmxvYXQoJCgnLmZvcm0tdHlwZS1tYXRlcmlhbCAuZm9ybS1jb250cm9sW2F1dG9mb2N1cz1cInRydWVcIl0nKSlcblxuXG5mdW5jdGlvbiBtYXRlcmlhbERvRmxvYXQgKGUpIHtcbiAgaWYgKGUucGFyZW50KCcuaW5wdXQtZ3JvdXAtaW5wdXQnKS5sZW5ndGgpIHtcbiAgICBlLnBhcmVudCgnLmlucHV0LWdyb3VwLWlucHV0JykuYWRkQ2xhc3MoJ2RvLWZsb2F0JylcbiAgfSBlbHNlIHtcbiAgICBlLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykuYWRkQ2xhc3MoJ2RvLWZsb2F0JylcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIG1hdGVyaWFsTm9GbG9hdCAoZSkge1xuICBpZiAoZS5wYXJlbnQoJy5pbnB1dC1ncm91cC1pbnB1dCcpLmxlbmd0aCkge1xuICAgIGUucGFyZW50KCcuaW5wdXQtZ3JvdXAtaW5wdXQnKS5yZW1vdmVDbGFzcygnZG8tZmxvYXQnKVxuICB9IGVsc2Uge1xuICAgIGUuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmVDbGFzcygnZG8tZmxvYXQnKVxuICB9XG59XG5cbiQoJy5mb3JtLXR5cGUtbWF0ZXJpYWwgLmZvcm0tY29udHJvbCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICBpZiAoJCh0aGlzKS52YWwoKS5sZW5ndGggPiAwKSB7XG4gICAgLy9pZiAoJCh0aGlzKS5pcygnW2RhdGEtcHJvdmlkZX49XCJzZWxlY3RwaWNrZXJcIl0nKSkge1xuICAgIC8vICByZXR1cm5cbiAgICAvL31cbiAgICBtYXRlcmlhbERvRmxvYXQoJCh0aGlzKSlcbiAgfVxufSlcblxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL21vZGFsZXIuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyNy8wNy8yMDIwIDExOjIzXG5cbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy8gTW9kYWxlclxuLy8gPT09PT09PT09PT09PT09PT09PT09XG4vL1xuK2Z1bmN0aW9uICgkKSB7XG5cbiAgbGV0IGNvbmZpZ01vZGFsZXIgPSB7XG4gICAgdXJsOiAnJyxcbiAgICBpc01vZGFsOiBmYWxzZSxcbiAgICBodG1sOiAnJyxcbiAgICB0YXJnZXQ6ICcnLFxuICAgIHR5cGU6ICcnLFxuICAgIHNpemU6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBoZWFkZXJWaXNpYmxlOiB0cnVlLFxuICAgIGZvb3RlclZpc2libGU6IHRydWUsXG4gICAgY29uZmlybVZpc2libGU6IHRydWUsXG4gICAgY29uZmlybVRleHQ6ICdPaycsXG4gICAgY29uZmlybUNsYXNzOiAnYnRuIGJ0bi13LXNtIGJ0bi1mbGF0IGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxWaXNpYmxlOiBmYWxzZSxcbiAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJyxcbiAgICBjYW5jZWxDbGFzczogJ2J0biBidG4tdy1zbSBidG4tZmxhdCBidG4tc2Vjb25kYXJ5JyxcbiAgICBib2R5RXh0cmFDbGFzczogJycsXG4gICAgc3Bpbm5lcjogJzxkaXYgY2xhc3M9XCJoLTIwMCBjZW50ZXItdmhcIj48c3ZnIGNsYXNzPVwic3Bpbm5lci1jaXJjbGUtbWF0ZXJpYWwtc3ZnXCIgdmlld0JveD1cIjAgMCA1MCA1MFwiPjxjaXJjbGUgY2xhc3M9XCJjaXJjbGVcIiBjeD1cIjI1XCIgY3k9XCIyNVwiIHI9XCIyMFwiPjwvc3ZnPjwvZGl2PicsXG5cbiAgICBhdXRvRGVzdHJveTogdHJ1ZSxcblxuICAgIC8vIEV2ZW50c1xuICAgIG9uU2hvdzogbnVsbCxcbiAgICBvblNob3duOiBudWxsLFxuICAgIG9uSGlkZTogbnVsbCxcbiAgICBvbkhpZGRlbjogbnVsbCxcbiAgICBvbkNvbmZpcm06IG51bGwsXG4gICAgb25DYW5jZWw6IG51bGwsXG5cbiAgICAvLyBQcml2YXRlIG9wdGlvbnNcbiAgICBtb2RhbElkOiBudWxsXG4gIH1cblxuICBmdW5jdGlvbiBndWlkIChsZW4pIHtcbiAgICBpZiAobGVuID09IHVuZGVmaW5lZCkge1xuICAgICAgbGVuID0gNVxuICAgIH1cbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikucmVwbGFjZSgvW15hLXpdKy9nLCAnJykuc3Vic3RyKDAsIGxlbilcbiAgfVxuXG5cbiAgbW9kYWxlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIHNldHRpbmcgPSAkLmV4dGVuZCh7fSwgY29uZmlnTW9kYWxlciwgb3B0aW9ucylcblxuICAgIGlmIChzZXR0aW5nLm1vZGFsSWQpIHtcbiAgICAgICQoJyMnICsgc2V0dGluZy5tb2RhbElkKS5tb2RhbCgnc2hvdycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cblxuICAgIHZhciBpZCA9ICdtb2RhbC0nICsgZ3VpZCgpXG5cblxuICAgIHZhciBoYW5kbGVDYWxsYmFjayA9IGZ1bmN0aW9uIChpZCkge1xuXG4gICAgICAvLyBCb290c3RyYXAgbW9kYWwgZXZlbnRzXG4gICAgICAvL1xuICAgICAgaWYgKHNldHRpbmcub25TaG93KSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvL3NldHRpbmcub25TaG93KCk7XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5nLm9uU2hvd24pIHtcbiAgICAgICAgJCgnIycgKyBpZCkub24oJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvL3NldHRpbmcub25TaG93bigpO1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAoc2V0dGluZy5vbkhpZGUpIHtcbiAgICAgICAgJCgnIycgKyBpZCkub24oJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHNldHRpbmcub25IaWRlKClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNldHRpbmcub25IaWRkZW4pIHtcbiAgICAgICAgJCgnIycgKyBpZCkub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgc2V0dGluZy5vbkhpZGRlbigpXG4gICAgICAgIH0pXG4gICAgICB9XG5cblxuICAgICAgLy8gSGFuZGxlIGNvbmZpcm0gY2FsbGJhY2tcbiAgICAgIC8vXG4gICAgICAkKCcjJyArIGlkKS5maW5kKCdbZGF0YS1wZXJmb3JtPVwiY29uZmlybVwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBIYXNuJ3Qgc2V0XG4gICAgICAgIGlmIChzZXR0aW5nLm9uQ29uZmlybSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJcyBhIGZ1bmN0aW9uXG4gICAgICAgIGlmICgkLmlzRnVuY3Rpb24oc2V0dGluZy5vbkNvbmZpcm0pKSB7XG4gICAgICAgICAgc2V0dGluZy5vbkNvbmZpcm0oJCgnIycgKyBpZCkpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJcyBzdHJpbmcgdmFsdWUsIHNvIGNhbGwgaXRcbiAgICAgICAgaWYgKHNldHRpbmcub25Db25maXJtLnN1YnN0cmluZykge1xuICAgICAgICAgIGFwcC5jYWxsKHNldHRpbmcub25Db25maXJtLCAkKCcjJyArIGlkKSlcbiAgICAgICAgfVxuXG4gICAgICB9KVxuXG5cbiAgICAgIC8vIEhhbmRsZSBjYW5jZWwgY2FsbGJhY2tcbiAgICAgIC8vXG4gICAgICAkKCcjJyArIGlkKS5maW5kKCdbZGF0YS1wZXJmb3JtPVwiY2FuY2VsXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vIEhhc24ndCBzZXRcbiAgICAgICAgaWYgKHNldHRpbmcub25DYW5jZWwgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXMgYSBmdW5jdGlvblxuICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmcub25DYW5jZWwpKSB7XG4gICAgICAgICAgc2V0dGluZy5vbkNhbmNlbCgkKCcjJyArIGlkKSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElzIHN0cmluZyB2YWx1ZSwgc28gY2FsbCBpdFxuICAgICAgICBpZiAoc2V0dGluZy5vbkNhbmNlbC5zdWJzdHJpbmcpIHtcbiAgICAgICAgICBhcHAuY2FsbChzZXR0aW5nLm9uQ2FuY2VsLCAkKCcjJyArIGlkKSlcbiAgICAgICAgfVxuXG4gICAgICB9KVxuICAgIH1cblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gV2UgcmVjaWV2ZSBtb2RhbCBtYXJrdXAgZnJvbSB1cmxcbiAgICAvL1xuICAgIGlmIChzZXR0aW5nLmlzTW9kYWwpIHtcblxuICAgICAgJCgnPGRpdj4nKS5sb2FkKHNldHRpbmcudXJsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJCh0aGlzKS5maW5kKCcubW9kYWwnKS5hdHRyKCdpZCcsIGlkKS5vdXRlckhUTUwoKSlcblxuICAgICAgICAkKCcjJyArIGlkKS5tb2RhbCgnc2hvdycpXG4gICAgICAgICQoJyMnICsgaWQpLm9uZSgnc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vdG9kbzogYSBjb25maXJtZXIgJCgnIycrIGlkKS5maW5kKCcubW9kYWwtYm9keScpLnBlcmZlY3RTY3JvbGxiYXIoJ3VwZGF0ZScpO1xuICAgICAgICB9KVxuXG5cbiAgICAgICAgLy8gRGVzdHJveSBhZnRlciBjbG9zZVxuICAgICAgICAvL1xuICAgICAgICBpZiAoc2V0dGluZy5hdXRvRGVzdHJveSkge1xuICAgICAgICAgICQoJyMnICsgaWQpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcjJyArIGlkKS5yZW1vdmUoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJChzZXR0aW5nLnRoaXMpLmF0dHIoJ2RhdGEtbW9kYWwtaWQnLCBpZClcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaGFuZGxlQ2FsbGJhY2soaWQpXG4gICAgICB9KVxuICAgIH1cblxuXG5cblxuXG4gICAgICAvLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gV2Ugc2hvdWxkIGRlc2lnbiB0aGUgbW9kYWxcbiAgICAvL1xuICAgIGVsc2Uge1xuXG4gICAgICBzd2l0Y2ggKHNldHRpbmcuc2l6ZSkge1xuICAgICAgICBjYXNlICdzbSc6XG4gICAgICAgICAgc2V0dGluZy5zaXplID0gJ21vZGFsLXNtJ1xuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbGcnOlxuICAgICAgICAgIHNldHRpbmcuc2l6ZSA9ICdtb2RhbC1sZydcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vc2V0dGluZy5zaXplID0gJyc7XG4gICAgICB9XG5cblxuICAgICAgaWYgKHNldHRpbmcudHlwZSkge1xuICAgICAgICBzZXR0aW5nLnR5cGUgPSAnbW9kYWwtJyArIHNldHRpbmcudHlwZVxuICAgICAgfVxuXG5cbiAgICAgIC8vIEhlYWRlciBjb2RlXG4gICAgICAvL1xuICAgICAgdmFyIGh0bWxfaGVhZGVyID0gJydcbiAgICAgIGlmIChzZXR0aW5nLmhlYWRlclZpc2libGUpIHtcbiAgICAgICAgaHRtbF9oZWFkZXIgKz1cbiAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPiBcXFxuICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj4nICsgc2V0dGluZy50aXRsZSArICc8L2g1PiBcXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj4gXFxcbiAgICAgICAgICA8L2Rpdj4nXG4gICAgICB9XG5cblxuICAgICAgLy8gRm9vdGVyIGNvZGVcbiAgICAgIC8vXG4gICAgICB2YXIgaHRtbF9mb290ZXIgPSAnJ1xuICAgICAgaWYgKHNldHRpbmcuZm9vdGVyVmlzaWJsZSkge1xuICAgICAgICBodG1sX2Zvb3RlciArPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPidcblxuICAgICAgICBpZiAoc2V0dGluZy5jYW5jZWxWaXNpYmxlKSB7XG4gICAgICAgICAgaHRtbF9mb290ZXIgKz0gJzxidXR0b24gY2xhc3M9XCInICsgc2V0dGluZy5jYW5jZWxDbGFzcyArICdcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtcGVyZm9ybT1cImNhbmNlbFwiPicgKyBzZXR0aW5nLmNhbmNlbFRleHQgKyAnPC9idXR0b24+J1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNldHRpbmcuY29uZmlybVZpc2libGUpIHtcbiAgICAgICAgICBodG1sX2Zvb3RlciArPSAnPGJ1dHRvbiBjbGFzcz1cIicgKyBzZXR0aW5nLmNvbmZpcm1DbGFzcyArICdcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtcGVyZm9ybT1cImNvbmZpcm1cIj4nICsgc2V0dGluZy5jb25maXJtVGV4dCArICc8L2J1dHRvbj4nXG4gICAgICAgIH1cblxuICAgICAgICBodG1sX2Zvb3RlciArPSAnPC9kaXY+J1xuICAgICAgfVxuXG4gICAgICAvLyBNb2RhbCBjb2RlXG4gICAgICAvL1xuICAgICAgdmFyIG1vZGFsX2h0bWwgPVxuICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGUgJyArIHNldHRpbmcudHlwZSArICdcIiBpZD1cIicgKyBpZCArICdcIiB0YWJpbmRleD1cIi0xXCInICsgKCFzZXR0aW5nLmJhY2tkcm9wID8gJyBkYXRhLWJhY2tkcm9wPVwiZmFsc2VcIicgOiAnJykgKyAnPiBcXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyAnICsgc2V0dGluZy5zaXplICsgJ1wiPiBcXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPiBcXFxuICAgICAgICAgICAgICAgICcgKyBodG1sX2hlYWRlciArICcgXFxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSAnICsgc2V0dGluZy5ib2R5RXh0cmFDbGFzcyArICdcIj4gXFxcbiAgICAgICAgICAgICAgICAgICcgKyBzZXR0aW5nLnNwaW5uZXIgKyAnIFxcXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxcXG4gICAgICAgICAgICAgICAgJyArIGh0bWxfZm9vdGVyICsgJyBcXFxuICAgICAgICAgICAgICA8L2Rpdj4gXFxcbiAgICAgICAgICAgIDwvZGl2PiBcXFxuICAgICAgICAgIDwvZGl2PidcblxuXG4gICAgICAvLyBTaG93IG1vZGFsXG4gICAgICAkKCdib2R5JykuYXBwZW5kKG1vZGFsX2h0bWwpXG4gICAgICAkKCcjJyArIGlkKS5tb2RhbCgnc2hvdycpXG5cblxuICAgICAgLy8gRGVzdHJveSBhZnRlciBjbG9zZVxuICAgICAgLy9cbiAgICAgIGlmIChzZXR0aW5nLmF1dG9EZXN0cm95KSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJCgnIycgKyBpZCkucmVtb3ZlKClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoc2V0dGluZy50aGlzKS5hdHRyKCdkYXRhLW1vZGFsLWlkJywgaWQpXG4gICAgICB9XG5cblxuICAgICAgLy8gTG9hZCBkYXRhIGludG8gdGhlIG1vZGFsXG4gICAgICAvL1xuICAgICAgaWYgKHNldHRpbmcudXJsKSB7XG4gICAgICAgICQoJyMnICsgaWQpLmZpbmQoJy5tb2RhbC1ib2R5JykubG9hZChzZXR0aW5nLnVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vdG9kbzogYSBjb25maXJtZXIgJCh0aGlzKS5wZXJmZWN0U2Nyb2xsYmFyKCd1cGRhdGUnKTtcbiAgICAgICAgICBoYW5kbGVDYWxsYmFjayhpZClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGluZy5odG1sKSB7XG4gICAgICAgICQoJyMnICsgaWQpLmZpbmQoJy5tb2RhbC1ib2R5JykuaHRtbChzZXR0aW5nLmh0bWwpXG4gICAgICAgIGhhbmRsZUNhbGxiYWNrKGlkKVxuICAgICAgfSBlbHNlIGlmIChzZXR0aW5nLnRhcmdldCkge1xuICAgICAgICAkKCcjJyArIGlkKS5maW5kKCcubW9kYWwtYm9keScpLmh0bWwoJChzZXR0aW5nLnRhcmdldCkuaHRtbCgpKVxuICAgICAgICBoYW5kbGVDYWxsYmFjayhpZClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0oalF1ZXJ5KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3NlYXJjaC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI2LzA5LzIwMjAgMTg6MThcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNzZWFyY2gnLCBmdW5jdGlvbiAoZSkge1xuXG4gIGNvbnN0IGtleXdvcmQgPSAkKHRoaXMpLnZhbCgpXG4gIGNvbnN0IHNlYXJjaF9yZXBvbnNlX2V0dWRpYW50ID0gJCgnI3NlYXJjaF9yZXBvbnNlX2V0dWRpYW50JylcbiAgY29uc3Qgc2VhcmNoX3JlcG9uc2VfcGVyc29ubmVsID0gJCgnI3NlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbCcpXG4gIGNvbnN0IHNlYXJjaF9yZXBvbnNlX2F1dHJlID0gJCgnI3NlYXJjaF9yZXBvbnNlX2F1dHJlJylcblxuICBpZiAoa2V5d29yZC5sZW5ndGggPiAyKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgncmVjaGVyY2hlJywge2tleXdvcmQ6IGtleXdvcmR9KSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBsZXQgaHRtbCA9ICcnXG4gICAgICAgIGlmIChkYXRhLmV0dWRpYW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgalF1ZXJ5LmVhY2goZGF0YS5ldHVkaWFudHMsIGZ1bmN0aW9uIChpbmRleCwgZXR1ZGlhbnQpIHtcbiAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxhIGNsYXNzPVwibWVkaWFcIiBocmVmPVwiJyArIFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfcHJvZmlsJywge1xuICAgICAgICAgICAgICB0eXBlOiAnZXR1ZGlhbnQnLFxuICAgICAgICAgICAgICBzbHVnOiBldHVkaWFudC5zbHVnXG4gICAgICAgICAgICB9KSArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cXG4nXG4gICAgICAgICAgICBpZiAoZXR1ZGlhbnQucGhvdG8gPT09ICdub2ltYWdlLnBuZycgfHwgZXR1ZGlhbnQucGhvdG8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICBodG1sID0gaHRtbCArICc8ZGl2IGNsYXNzPVwiYXZhdGFyLWNpcmNsZS1zbVwiPlxcbicgK1xuICAgICAgICAgICAgICAgICcgICAgPHNwYW4gY2xhc3M9XCJpbml0aWFsc1wiPicgKyBldHVkaWFudC5hdmF0YXJJbml0aWFsZXMgKyAnPC9zcGFuPlxcbicgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBodG1sID0gaHRtbCArICc8aW1nIGNsYXNzPVwiYXZhdGFyIGF2YXRhci1zbVwiIHNyYz1cIicgKyBkYXRhLmJhc2VwYXRoICsgJ2V0dWRpYW50cy8nICsgZXR1ZGlhbnQucGhvdG8gKyAnXCIgYWx0PVwiUGhvdG8gZGUgcHJvZmlsIGRlICcgKyBldHVkaWFudC5kaXNwbGF5UHIgKyAnXCI+XFxuJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPicgKyBldHVkaWFudC5kaXNwbGF5UHIgKyAnICgnICsgZXR1ZGlhbnQuc2VtZXN0cmUgKyAnKTwvc3Ryb25nPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZSBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+JyArIGV0dWRpYW50Lmdyb3VwZXMgKyAnPC90aW1lPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2E+J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPlBhcyBkZSByw6lzdWx0YXQgcG91ciB2b3RyZSByZWNoZXJjaGUgPHN0cm9uZz5cIicgKyBrZXl3b3JkICsgJ1wiPC9zdHJvbmc+PC9kaXY+J1xuICAgICAgICB9XG5cbiAgICAgICAgc2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQuZW1wdHkoKS5hcHBlbmQoaHRtbClcblxuICAgICAgICBodG1sID0gJydcbiAgICAgICAgaWYgKGRhdGEucGVyc29ubmVscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgalF1ZXJ5LmVhY2goZGF0YS5wZXJzb25uZWxzLCBmdW5jdGlvbiAoaW5kZXgsIHBlcnNvbm5lbCkge1xuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGEgY2xhc3M9XCJtZWRpYSBpdGVtcy1jZW50ZXJcIiBocmVmPVwiJyArIFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfcHJvZmlsJywge1xuICAgICAgICAgICAgICB0eXBlOiAncGVyc29ubmVsJyxcbiAgICAgICAgICAgICAgc2x1ZzogcGVyc29ubmVsLnNsdWdcbiAgICAgICAgICAgIH0pICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiPlxcbidcbiAgICAgICAgICAgIGlmIChwZXJzb25uZWwucGhvdG8gPT09ICdub2ltYWdlLnBuZycgfHwgcGVyc29ubmVsLnBob3RvID09IG51bGwpIHtcbiAgICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGRpdiBjbGFzcz1cImF2YXRhci1jaXJjbGUtc21cIj5cXG4nICtcbiAgICAgICAgICAgICAgICAnICAgIDxzcGFuIGNsYXNzPVwiaW5pdGlhbHNcIj4nICsgcGVyc29ubmVsLmF2YXRhckluaXRpYWxlcyArICc8L3NwYW4+XFxuJyArXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxpbWcgY2xhc3M9XCJhdmF0YXIgYXZhdGFyLXNtXCIgc3JjPVwiJyArIGRhdGEuYmFzZXBhdGggKyAncGVyc29ubmVscy8nICsgcGVyc29ubmVsLnBob3RvICsgJ1wiIGFsdD1cIlBob3RvIGRlIHByb2ZpbCBkZSAnICsgcGVyc29ubmVsLmRpc3BsYXlQciArICdcIj5cXG4nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICcgICAgICAgICAgICAgICAgICAgICAgICA8cD4nICsgcGVyc29ubmVsLmRpc3BsYXlQciArICc8L3A+XFxuJyArXG4gICAgICAgICAgICAgICc8L2E+J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPlBhcyBkZSByw6lzdWx0YXQgcG91ciB2b3RyZSByZWNoZXJjaGUgPHN0cm9uZz5cIicgKyBrZXl3b3JkICsgJ1wiPC9zdHJvbmc+PC9kaXY+J1xuICAgICAgICB9XG4gICAgICAgIHNlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbC5lbXB0eSgpLmFwcGVuZChodG1sKVxuXG4gICAgICAgIGh0bWwgPSAnJ1xuICAgICAgICBpZiAoZGF0YS5hdXRyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGpRdWVyeS5lYWNoKGRhdGEuYXV0cmVzLCBmdW5jdGlvbiAoaW5kZXgsIGF1dHJlKSB7XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICc8YSBjbGFzcz1cIm1lZGlhIGl0ZW1zLWNlbnRlclwiIGhyZWY9XCJcIj5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXIgYXZhdGFyLXNtXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9hdmF0YXIvMS5qcGdcIiBhbHQ9XCIuLi5cIj5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxwPicgKyBhdXRyZSArICc8L3A+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvYT4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+UGFzIGRlIHLDqXN1bHRhdCBwb3VyIHZvdHJlIHJlY2hlcmNoZSA8c3Ryb25nPlwiJyArIGtleXdvcmQgKyAnXCI8L3N0cm9uZz48L2Rpdj4nXG4gICAgICAgIH1cbiAgICAgICAgc2VhcmNoX3JlcG9uc2VfYXV0cmUuZW1wdHkoKS5hcHBlbmQoaHRtbClcbiAgICAgIH1cbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCI+U2Fpc2lyIGF1IG1vaW5zIDMgY2FyYWN0w6hyZXM8L2Rpdj4nXG4gICAgc2VhcmNoX3JlcG9uc2VfYXV0cmUuZW1wdHkoKS5hcHBlbmQoaHRtbClcbiAgICBzZWFyY2hfcmVwb25zZV9wZXJzb25uZWwuZW1wdHkoKS5hcHBlbmQoaHRtbClcbiAgICBzZWFyY2hfcmVwb25zZV9ldHVkaWFudC5lbXB0eSgpLmFwcGVuZChodG1sKVxuICB9XG59KVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdXRpbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE2LzEwLzIwMjAgMTE6NTBcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbmZ1bmN0aW9uIHJlYWRVcmxNZW51ICgkdXJsKSB7XG4gIGNvbnN0ICRlbHQgPSAkdXJsLnNwbGl0KCcvJylcbiAgbGV0ICRmaXJzdEVsdCA9IDJcbiAgaWYgKCRlbHRbMV0gPT09ICdpbmRleC5waHAnKSB7XG4gICAgaWYgKCRlbHQubGVuZ3RoID4gMSkge1xuICAgICAgJGZpcnN0RWx0ID0gM1xuICAgIH1cbiAgfVxuXG4gIGlmICgkZWx0WyRmaXJzdEVsdF0gPT09ICdzdXBlci1hZG1pbmlzdHJhdGlvbicpIHtcbiAgICAkZmlyc3RFbHQgPSAkZmlyc3RFbHQgKyAxXG4gIH1cblxuICBpZiAoJGVsdFskZWx0Lmxlbmd0aCAtIDFdID09PSAnJykge1xuICAgICRlbHQucG9wKClcbiAgfVxuXG4gICQoJy5tZW51LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lbnUtJyArICRlbHRbJGZpcnN0RWx0XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59XG5cbi8vY29sb3Jpc2UgbGUgYm9uIG1lbnVcbnJlYWRVcmxNZW51KCQobG9jYXRpb24pLmF0dHIoJ3BhdGhuYW1lJykpXG5cblN3YWwubWl4aW4oe1xuICBjdXN0b21DbGFzczoge1xuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICB9LFxuICBidXR0b25zU3R5bGluZzogZmFsc2Vcbn0pXG4vL3BvcCB1cCBkZSBjb25maXJtYXRpb24gZGUgc3VwcHJlc3Npb25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3VwcHJpbWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gIGNvbnN0IGNzcmYgPSAkKHRoaXMpLmRhdGEoJ2NzcmYnKVxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIF90b2tlbjogY3NyZlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0JykgJiYgaWQuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gaWQudXJsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vdC5yb3coXCIjbGlnbmVfXCIraWQpLnJlbW92ZSgpLmRyYXcoKTsgPTwgZGF0YXR0YWJsZSB0b2RvOiByZW1vdmUgbGlnbmUgc2kgZGF0YXRhYmxlID8/IHByb2Jsw6htZSBkYW5zIGFkbT5wZXJzb25uZWxcbiAgICAgICAgICAgICQoJyNsaWduZV8nICsgaWQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdTdXBwcmltw6khJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0xcXCdlbnJlZ2lzdHJlbWVudCBhIMOpdMOpIHN1cHByaW3DqS4nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24hJyxcbiAgICAgICAgICAgIHRleHQ6ICdNZXJjaSBkZSByZW5vdXZlbGVyIGxcXCdvcMOpcmF0aW9uJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXG4gICAgICByZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCdcbiAgICApIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQ2FuY2VsbGVkJyxcbiAgICAgICAgdGV4dDogJ09LISBUb3V0IGVzdCBjb21tZSBhdmFudCAhJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbG91dCAobWVzc2FnZSwgbGFiZWwpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxvdXQnKVxuICB2YXIgdHJhbnNsYXRlID0gbmV3IEFycmF5KClcbiAgdHJhbnNsYXRlWydzdWNjZXNzJ10gPSAnU3VjY8OocydcbiAgdHJhbnNsYXRlWydkYW5nZXInXSA9ICdFcnJldXInXG4gIHRyYW5zbGF0ZVsnd2FybmluZyddID0gJ0F0dGVudGlvbidcblxuICBjb25zdCBodG1sID0gJzxkaXYgY2xhc3M9XCJjYWxsb3V0IGNhbGxvdXQtJyArIGxhYmVsICsgJ1wiIHJvbGU9XCJhbGVydFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJjYWxsb3V0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGg1PicgKyB0cmFuc2xhdGVbbGFiZWxdICsgJzwvaDU+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPHA+JyArIG1lc3NhZ2UgKyAnPC9wPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9kaXY+J1xuXG4gICQoJyNtYWluQ29udGVudCcpLnByZXBlbmQoaHRtbCkuc2xpZGVEb3duKCdzbG93JylcbiAgJCgnLmNhbGxvdXQnKS5kZWxheSg1MDAwKS5zbGlkZVVwKCdzbG93Jylcbn1cblxuLy9FZGl0YWJsZVxubGV0IG15RWRpdEluaXRpYWxDb250ZW50ID0gJydcbmxldCB0eXBlID0gJ3RleHQnXG5sZXQgRWRpdE9uTGluZSA9IGZhbHNlXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubXllZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG15RWRpdEluaXRpYWxDb250ZW50ID0gJCh0aGlzKVxuICBsZXQgaHRtbCA9ICcnXG4gIEVkaXRPbkxpbmUgPSB0cnVlXG4gIGlmICh0eXBlb2YgKCQodGhpcykuZGF0YSgndHlwZScpKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0eXBlID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgfVxuXG4gIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvL3RvZG86IEEgZmluYWxpc2VyXG4gIH0gZWxzZSB7XG4gICAgaHRtbCA9IGdlbmVyZUlucHV0KCQodGhpcykpXG4gIH1cbiAgJCh0aGlzKS5yZXBsYWNlV2l0aChodG1sKVxuICAkKCcjbXllZGl0LWlucHV0JykuZm9jdXMoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNteWVkaXQtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgIHVwZGF0ZURhdGEoKVxuICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtdmFsaWRlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHVwZGF0ZURhdGEoKVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKEVkaXRPbkxpbmUgPT09IHRydWUgJiYgZS53aGljaCA9PT0gMTMpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB1cGRhdGVEYXRhKClcbiAgfVxuXG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmIGUud2hpY2ggPT09IDI3KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LWFubnVsZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEgKCkge1xuICBsZXQgdmFsID0gJCgnI215ZWRpdC1pbnB1dCcpLnZhbCgpXG4gICQuYWpheCh7XG4gICAgdXJsOiBteUVkaXRJbml0aWFsQ29udGVudC5hdHRyKCdocmVmJyksXG4gICAgZGF0YToge1xuICAgICAgZmllbGQ6IG15RWRpdEluaXRpYWxDb250ZW50LmRhdGEoJ2ZpZWxkJyksXG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgbXlFZGl0SW5pdGlhbENvbnRlbnQuaHRtbCh2YWwpXG4gICAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgICAgIEVkaXRPbkxpbmUgPSBmYWxzZVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuZXJlSW5wdXQgKCRvYmopIHtcbiAgbGV0ICRodG1sID0gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJyArICRvYmouaHRtbCgpLnRyaW0oKSArICdcIiBpZD1cIm15ZWRpdC1pbnB1dFwiIC8+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLXN1Y2Nlc3MgYnRuLW91dGxpbmVcIiBpZD1cIm15ZWRpdC12YWxpZGVcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L2J1dHRvbj4nXG4gICRodG1sID0gJGh0bWwgKyAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3F1YXJlIGJ0bi1zbSBidG4tZGFuZ2VyIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtYW5udWxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+PC9kaXY+J1xuICByZXR1cm4gJGh0bWxcbn1cblxualF1ZXJ5LmZuLmRhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICByZXR1cm4gJCh0aGlzKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpIHx8IGRlZlxufVxuXG5qUXVlcnkuZm4uaGFzRGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJCh0aGlzKVswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFUb09wdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4WzFdLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFPcHRpb25zIChlbCwgY2FzdExpc3QpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fVxuICAkLmVhY2goJChlbCkuZGF0YSgpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXG4gICAga2V5ID0gZGF0YVRvT3B0aW9uKGtleSlcblxuICAgIC8vIEVzY2FwZSBkYXRhLXByb3ZpZGVcbiAgICBpZiAoa2V5ID09ICdwcm92aWRlJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNhc3RMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHR5cGUgPSBjYXN0TGlzdFtrZXldXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiBvcHRpb25zXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvdmFsaWRhdG9yLWJzNC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI4LzExLzIwMTkgMTk6NDBcblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBWQUxJREFUT1IgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIGdldFZhbHVlKCRlbCkge1xuICAgIHJldHVybiAkZWwuaXMoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKSA/ICRlbC5wcm9wKCdjaGVja2VkJykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAkZWwuaXMoJ1t0eXBlPVwicmFkaW9cIl0nKSAgICA/ICEhJCgnW25hbWU9XCInICsgJGVsLmF0dHIoJ25hbWUnKSArICdcIl06Y2hlY2tlZCcpLmxlbmd0aCA6XG4gICAgICAgICAgICRlbC5pcygnc2VsZWN0W211bHRpcGxlXScpICA/ICgkZWwudmFsKCkgfHwgW10pLmxlbmd0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZWwudmFsKClcbiAgfVxuXG4gIHZhciBWYWxpZGF0b3IgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyAgICA9IG9wdGlvbnNcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSAkLmV4dGVuZCh7fSwgVmFsaWRhdG9yLlZBTElEQVRPUlMsIG9wdGlvbnMuY3VzdG9tKVxuICAgIHRoaXMuJGVsZW1lbnQgICA9ICQoZWxlbWVudClcbiAgICB0aGlzLiRidG4gICAgICAgPSAkKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCdbZm9ybT1cIicgKyB0aGlzLiRlbGVtZW50LmF0dHIoJ2lkJykgKyAnXCJdJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy4kZWxlbWVudC5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpKVxuXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gICAgdGhpcy4kZWxlbWVudC5vbignaW5wdXQuYnMudmFsaWRhdG9yIGNoYW5nZS5icy52YWxpZGF0b3IgZm9jdXNvdXQuYnMudmFsaWRhdG9yJywgJC5wcm94eSh0aGlzLm9uSW5wdXQsIHRoaXMpKVxuICAgIHRoaXMuJGVsZW1lbnQub24oJ3N1Ym1pdC5icy52YWxpZGF0b3InLCAkLnByb3h5KHRoaXMub25TdWJtaXQsIHRoaXMpKVxuICAgIHRoaXMuJGVsZW1lbnQub24oJ3Jlc2V0LmJzLnZhbGlkYXRvcicsICQucHJveHkodGhpcy5yZXNldCwgdGhpcykpXG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLW1hdGNoXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICA9ICQodGhpcylcbiAgICAgIHZhciB0YXJnZXQgPSAkdGhpcy5hdHRyKCdkYXRhLW1hdGNoJylcblxuICAgICAgJCh0YXJnZXQpLm9uKCdpbnB1dC5icy52YWxpZGF0b3InLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBnZXRWYWx1ZSgkdGhpcykgJiYgJHRoaXMudHJpZ2dlcignaW5wdXQuYnMudmFsaWRhdG9yJylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIHJ1biB2YWxpZGF0b3JzIGZvciBmaWVsZHMgd2l0aCB2YWx1ZXMsIGJ1dCBkb24ndCBjbG9iYmVyIHNlcnZlci1zaWRlIGVycm9yc1xuICAgIHRoaXMuJGlucHV0cy5maWx0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldFZhbHVlKCQodGhpcykpICYmICEkKHRoaXMpLmNsb3Nlc3QoJy5oYXMtZXJyb3InKS5sZW5ndGhcbiAgICB9KS50cmlnZ2VyKCdmb2N1c291dCcpXG5cbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ25vdmFsaWRhdGUnLCB0cnVlKSAvLyBkaXNhYmxlIGF1dG9tYXRpYyBuYXRpdmUgdmFsaWRhdGlvblxuICB9XG5cbiAgVmFsaWRhdG9yLlZFUlNJT04gPSAnMC4xMS45J1xuXG4gIFZhbGlkYXRvci5JTlBVVF9TRUxFQ1RPUiA9ICc6aW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdLCBbdHlwZT1cInN1Ym1pdFwiXSwgW3R5cGU9XCJyZXNldFwiXSwgYnV0dG9uKSdcblxuICBWYWxpZGF0b3IuRk9DVVNfT0ZGU0VUID0gMjBcblxuICBWYWxpZGF0b3IuREVGQVVMVFMgPSB7XG4gICAgZGVsYXk6IDUwMCxcbiAgICBodG1sOiBmYWxzZSxcbiAgICBkaXNhYmxlOiB0cnVlLFxuICAgIGZvY3VzOiB0cnVlLFxuICAgIGN1c3RvbToge30sXG4gICAgZXJyb3JzOiB7XG4gICAgICBtYXRjaDogJ0RvZXMgbm90IG1hdGNoJyxcbiAgICAgIG1pbmxlbmd0aDogJ05vdCBsb25nIGVub3VnaCdcbiAgICB9LFxuICAgIGZlZWRiYWNrOiB7XG4gICAgICBzdWNjZXNzOiAnZ2x5cGhpY29uLW9rJyxcbiAgICAgIGVycm9yOiAnZ2x5cGhpY29uLXJlbW92ZSdcbiAgICB9XG4gIH1cblxuICBWYWxpZGF0b3IuVkFMSURBVE9SUyA9IHtcbiAgICAnbmF0aXZlJzogZnVuY3Rpb24gKCRlbCkge1xuICAgICAgdmFyIGVsID0gJGVsWzBdXG4gICAgICBpZiAoZWwuY2hlY2tWYWxpZGl0eSkge1xuICAgICAgICByZXR1cm4gIWVsLmNoZWNrVmFsaWRpdHkoKSAmJiAhZWwudmFsaWRpdHkudmFsaWQgJiYgKGVsLnZhbGlkYXRpb25NZXNzYWdlIHx8IFwiZXJyb3IhXCIpXG4gICAgICB9XG4gICAgfSxcbiAgICAnbWF0Y2gnOiBmdW5jdGlvbiAoJGVsKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gJGVsLmF0dHIoJ2RhdGEtbWF0Y2gnKVxuICAgICAgcmV0dXJuICRlbC52YWwoKSAhPT0gJCh0YXJnZXQpLnZhbCgpICYmIFZhbGlkYXRvci5ERUZBVUxUUy5lcnJvcnMubWF0Y2hcbiAgICB9LFxuICAgICdtaW5sZW5ndGgnOiBmdW5jdGlvbiAoJGVsKSB7XG4gICAgICB2YXIgbWlubGVuZ3RoID0gJGVsLmF0dHIoJ2RhdGEtbWlubGVuZ3RoJylcbiAgICAgIHJldHVybiAkZWwudmFsKCkubGVuZ3RoIDwgbWlubGVuZ3RoICYmIFZhbGlkYXRvci5ERUZBVUxUUy5lcnJvcnMubWlubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgICB0aGlzLiRpbnB1dHMgPSB0aGlzLiRlbGVtZW50LmZpbmQoVmFsaWRhdG9yLklOUFVUX1NFTEVDVE9SKVxuICAgICAgLmFkZCh0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLXZhbGlkYXRlPVwidHJ1ZVwiXScpKVxuICAgICAgLm5vdCh0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLXZhbGlkYXRlPVwiZmFsc2VcIl0nKVxuICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7IHNlbGYuY2xlYXJFcnJvcnMoJCh0aGlzKSkgfSlcbiAgICAgIClcblxuICAgIHRoaXMudG9nZ2xlU3VibWl0KClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLm9uSW5wdXQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBzZWxmICAgICAgICA9IHRoaXNcbiAgICB2YXIgJGVsICAgICAgICAgPSAkKGUudGFyZ2V0KVxuICAgIHZhciBkZWZlckVycm9ycyA9IGUudHlwZSAhPT0gJ2ZvY3Vzb3V0J1xuXG4gICAgaWYgKCF0aGlzLiRpbnB1dHMuaXMoJGVsKSkgcmV0dXJuXG5cbiAgICB0aGlzLnZhbGlkYXRlSW5wdXQoJGVsLCBkZWZlckVycm9ycykuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLnRvZ2dsZVN1Ym1pdCgpXG4gICAgfSlcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGVJbnB1dCA9IGZ1bmN0aW9uICgkZWwsIGRlZmVyRXJyb3JzKSB7XG4gICAgdmFyIHZhbHVlICAgICAgPSBnZXRWYWx1ZSgkZWwpXG4gICAgdmFyIHByZXZFcnJvcnMgPSAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmVycm9ycycpXG5cbiAgICBpZiAoJGVsLmlzKCdbdHlwZT1cInJhZGlvXCJdJykpICRlbCA9IHRoaXMuJGVsZW1lbnQuZmluZCgnaW5wdXRbbmFtZT1cIicgKyAkZWwuYXR0cignbmFtZScpICsgJ1wiXScpXG5cbiAgICB2YXIgZSA9ICQuRXZlbnQoJ3ZhbGlkYXRlLmJzLnZhbGlkYXRvcicsIHtyZWxhdGVkVGFyZ2V0OiAkZWxbMF19KVxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIHZhciBzZWxmID0gdGhpc1xuXG4gICAgcmV0dXJuIHRoaXMucnVuVmFsaWRhdG9ycygkZWwpLmRvbmUoZnVuY3Rpb24gKGVycm9ycykge1xuICAgICAgJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5lcnJvcnMnLCBlcnJvcnMpXG5cbiAgICAgIGVycm9ycy5sZW5ndGhcbiAgICAgICAgPyBkZWZlckVycm9ycyA/IHNlbGYuZGVmZXIoJGVsLCBzZWxmLnNob3dFcnJvcnMpIDogc2VsZi5zaG93RXJyb3JzKCRlbClcbiAgICAgICAgOiBzZWxmLmNsZWFyRXJyb3JzKCRlbClcblxuICAgICAgaWYgKCFwcmV2RXJyb3JzIHx8IGVycm9ycy50b1N0cmluZygpICE9PSBwcmV2RXJyb3JzLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgZSA9IGVycm9ycy5sZW5ndGhcbiAgICAgICAgICA/ICQuRXZlbnQoJ2ludmFsaWQuYnMudmFsaWRhdG9yJywge3JlbGF0ZWRUYXJnZXQ6ICRlbFswXSwgZGV0YWlsOiBlcnJvcnN9KVxuICAgICAgICAgIDogJC5FdmVudCgndmFsaWQuYnMudmFsaWRhdG9yJywge3JlbGF0ZWRUYXJnZXQ6ICRlbFswXSwgZGV0YWlsOiBwcmV2RXJyb3JzfSlcblxuICAgICAgICBzZWxmLiRlbGVtZW50LnRyaWdnZXIoZSlcbiAgICAgIH1cblxuICAgICAgc2VsZi50b2dnbGVTdWJtaXQoKVxuXG4gICAgICBzZWxmLiRlbGVtZW50LnRyaWdnZXIoJC5FdmVudCgndmFsaWRhdGVkLmJzLnZhbGlkYXRvcicsIHtyZWxhdGVkVGFyZ2V0OiAkZWxbMF19KSlcbiAgICB9KVxuICB9XG5cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnJ1blZhbGlkYXRvcnMgPSBmdW5jdGlvbiAoJGVsKSB7XG4gICAgdmFyIGVycm9ycyAgID0gW11cbiAgICB2YXIgZGVmZXJyZWQgPSAkLkRlZmVycmVkKClcblxuICAgICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZGVmZXJyZWQnKSAmJiAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmRlZmVycmVkJykucmVqZWN0KClcbiAgICAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmRlZmVycmVkJywgZGVmZXJyZWQpXG5cbiAgICBmdW5jdGlvbiBnZXRWYWxpZGF0b3JTcGVjaWZpY0Vycm9yKGtleSkge1xuICAgICAgcmV0dXJuICRlbC5hdHRyKCdkYXRhLScgKyBrZXkgKyAnLWVycm9yJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWYWxpZGl0eVN0YXRlRXJyb3IoKSB7XG4gICAgICB2YXIgdmFsaWRpdHkgPSAkZWxbMF0udmFsaWRpdHlcbiAgICAgIHJldHVybiB2YWxpZGl0eS50eXBlTWlzbWF0Y2ggICAgPyAkZWwuYXR0cignZGF0YS10eXBlLWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2ggPyAkZWwuYXR0cignZGF0YS1wYXR0ZXJuLWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS5zdGVwTWlzbWF0Y2ggICAgPyAkZWwuYXR0cignZGF0YS1zdGVwLWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS5yYW5nZU92ZXJmbG93ICAgPyAkZWwuYXR0cignZGF0YS1tYXgtZXJyb3InKVxuICAgICAgICAgICA6IHZhbGlkaXR5LnJhbmdlVW5kZXJmbG93ICA/ICRlbC5hdHRyKCdkYXRhLW1pbi1lcnJvcicpXG4gICAgICAgICAgIDogdmFsaWRpdHkudmFsdWVNaXNzaW5nICAgID8gJGVsLmF0dHIoJ2RhdGEtcmVxdWlyZWQtZXJyb3InKVxuICAgICAgICAgICA6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHZW5lcmljRXJyb3IoKSB7XG4gICAgICByZXR1cm4gJGVsLmF0dHIoJ2RhdGEtZXJyb3InKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShrZXkpIHtcbiAgICAgIHJldHVybiBnZXRWYWxpZGF0b3JTcGVjaWZpY0Vycm9yKGtleSlcbiAgICAgICAgICB8fCBnZXRWYWxpZGl0eVN0YXRlRXJyb3IoKVxuICAgICAgICAgIHx8IGdldEdlbmVyaWNFcnJvcigpXG4gICAgfVxuXG4gICAgJC5lYWNoKHRoaXMudmFsaWRhdG9ycywgJC5wcm94eShmdW5jdGlvbiAoa2V5LCB2YWxpZGF0b3IpIHtcbiAgICAgIHZhciBlcnJvciA9IG51bGxcbiAgICAgIGlmICgoZ2V0VmFsdWUoJGVsKSB8fCAkZWwuYXR0cigncmVxdWlyZWQnKSkgJiZcbiAgICAgICAgICAoJGVsLmF0dHIoJ2RhdGEtJyArIGtleSkgIT09IHVuZGVmaW5lZCB8fCBrZXkgPT0gJ25hdGl2ZScpICYmXG4gICAgICAgICAgKGVycm9yID0gdmFsaWRhdG9yLmNhbGwodGhpcywgJGVsKSkpIHtcbiAgICAgICAgIGVycm9yID0gZ2V0RXJyb3JNZXNzYWdlKGtleSkgfHwgZXJyb3JcbiAgICAgICAgIX5lcnJvcnMuaW5kZXhPZihlcnJvcikgJiYgZXJyb3JzLnB1c2goZXJyb3IpXG4gICAgICB9XG4gICAgfSwgdGhpcykpXG5cbiAgICBpZiAoIWVycm9ycy5sZW5ndGggJiYgZ2V0VmFsdWUoJGVsKSAmJiAkZWwuYXR0cignZGF0YS1yZW1vdGUnKSkge1xuICAgICAgdGhpcy5kZWZlcigkZWwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB7fVxuICAgICAgICBkYXRhWyRlbC5hdHRyKCduYW1lJyldID0gZ2V0VmFsdWUoJGVsKVxuICAgICAgICAkLmdldCgkZWwuYXR0cignZGF0YS1yZW1vdGUnKSwgZGF0YSlcbiAgICAgICAgICAuZmFpbChmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yKSB7IGVycm9ycy5wdXNoKGdldEVycm9yTWVzc2FnZSgncmVtb3RlJykgfHwgZXJyb3IpIH0pXG4gICAgICAgICAgLmFsd2F5cyhmdW5jdGlvbiAoKSB7IGRlZmVycmVkLnJlc29sdmUoZXJyb3JzKX0pXG4gICAgICB9KVxuICAgIH0gZWxzZSBkZWZlcnJlZC5yZXNvbHZlKGVycm9ycylcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlKClcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgICAkLndoZW4odGhpcy4kaW5wdXRzLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiBzZWxmLnZhbGlkYXRlSW5wdXQoJCh0aGlzKSwgZmFsc2UpXG4gICAgfSkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi50b2dnbGVTdWJtaXQoKVxuICAgICAgc2VsZi5mb2N1c0Vycm9yKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuZm9jdXNFcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5mb2N1cykgcmV0dXJuXG5cbiAgICB2YXIgJGlucHV0ID0gdGhpcy4kZWxlbWVudC5maW5kKFwiLmhhcy1lcnJvcjpmaXJzdCA6aW5wdXRcIilcbiAgICBpZiAoJGlucHV0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkaW5wdXQub2Zmc2V0KCkudG9wIC0gVmFsaWRhdG9yLkZPQ1VTX09GRlNFVH0sIDI1MClcbiAgICAkaW5wdXQuZm9jdXMoKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5zaG93RXJyb3JzID0gZnVuY3Rpb24gKCRlbCkge1xuICAgIHZhciBtZXRob2QgPSB0aGlzLm9wdGlvbnMuaHRtbCA/ICdodG1sJyA6ICd0ZXh0J1xuICAgIHZhciBlcnJvcnMgPSAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmVycm9ycycpXG4gICAgdmFyICRncm91cCA9ICRlbC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpXG4gICAgdmFyICRibG9jayA9ICRncm91cC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG4gICAgdmFyICRmZWVkYmFjayA9ICRncm91cC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG5cbiAgICBpZiAoIWVycm9ycy5sZW5ndGgpIHJldHVyblxuXG4gICAgJGVsLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XG5cbiAgICBlcnJvcnMgPSAkKCc8dWwvPicpXG4gICAgICAuYWRkQ2xhc3MoJ2xpc3QtdW5zdHlsZWQnKVxuICAgICAgLmFwcGVuZCgkLm1hcChlcnJvcnMsIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gJCgnPGxpLz4nKVttZXRob2RdKGVycm9yKSB9KSlcblxuICAgICRibG9jay5kYXRhKCdicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50JykgPT09IHVuZGVmaW5lZCAmJiAkYmxvY2suZGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcsICRibG9jay5odG1sKCkpXG4gICAgJGJsb2NrLmVtcHR5KCkuYXBwZW5kKGVycm9ycylcbiAgICAkZ3JvdXAuYWRkQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZGFuZ2VyJylcblxuICAgICRncm91cC5oYXNDbGFzcygnaGFzLWZlZWRiYWNrJylcbiAgICAgICYmICRmZWVkYmFjay5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suc3VjY2VzcylcbiAgICAgICYmICRmZWVkYmFjay5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suZXJyb3IpXG4gICAgICAmJiAkZ3JvdXAucmVtb3ZlQ2xhc3MoJ2hhcy1zdWNjZXNzJylcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuY2xlYXJFcnJvcnMgPSBmdW5jdGlvbiAoJGVsKSB7XG4gICAgdmFyICRncm91cCA9ICRlbC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpXG4gICAgdmFyICRibG9jayA9ICRncm91cC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG4gICAgdmFyICRmZWVkYmFjayA9ICRncm91cC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG5cbiAgICAkZWwucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcblxuICAgICRibG9jay5odG1sKCRibG9jay5kYXRhKCdicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50JykpXG4gICAgJGdyb3VwLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3IgaGFzLWRhbmdlciBoYXMtc3VjY2VzcycpXG5cbiAgICAkZ3JvdXAuaGFzQ2xhc3MoJ2hhcy1mZWVkYmFjaycpXG4gICAgICAmJiAkZmVlZGJhY2sucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLmVycm9yKVxuICAgICAgJiYgJGZlZWRiYWNrLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5zdWNjZXNzKVxuICAgICAgJiYgZ2V0VmFsdWUoJGVsKVxuICAgICAgJiYgJGZlZWRiYWNrLmFkZENsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5zdWNjZXNzKVxuICAgICAgJiYgJGdyb3VwLmFkZENsYXNzKCdoYXMtc3VjY2VzcycpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmhhc0Vycm9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBmaWVsZEVycm9ycygpIHtcbiAgICAgIHJldHVybiAhISgkKHRoaXMpLmRhdGEoJ2JzLnZhbGlkYXRvci5lcnJvcnMnKSB8fCBbXSkubGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuICEhdGhpcy4kaW5wdXRzLmZpbHRlcihmaWVsZEVycm9ycykubGVuZ3RoXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmlzSW5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBmaWVsZEluY29tcGxldGUoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXRWYWx1ZSgkKHRoaXMpKVxuICAgICAgcmV0dXJuICEodHlwZW9mIHZhbHVlID09IFwic3RyaW5nXCIgPyAkLnRyaW0odmFsdWUpIDogdmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuICEhdGhpcy4kaW5wdXRzLmZpbHRlcignW3JlcXVpcmVkXScpLmZpbHRlcihmaWVsZEluY29tcGxldGUpLmxlbmd0aFxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdGhpcy52YWxpZGF0ZSgpXG4gICAgaWYgKHRoaXMuaXNJbmNvbXBsZXRlKCkgfHwgdGhpcy5oYXNFcnJvcnMoKSkgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnRvZ2dsZVN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kaXNhYmxlKSByZXR1cm5cbiAgICB0aGlzLiRidG4udG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgdGhpcy5pc0luY29tcGxldGUoKSB8fCB0aGlzLmhhc0Vycm9ycygpKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5kZWZlciA9IGZ1bmN0aW9uICgkZWwsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSAkLnByb3h5KGNhbGxiYWNrLCB0aGlzLCAkZWwpXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGVsYXkpIHJldHVybiBjYWxsYmFjaygpXG4gICAgd2luZG93LmNsZWFyVGltZW91dCgkZWwuZGF0YSgnYnMudmFsaWRhdG9yLnRpbWVvdXQnKSlcbiAgICAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLnRpbWVvdXQnLCB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgdGhpcy5vcHRpb25zLmRlbGF5KSlcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG4gICAgICAucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLmVycm9yKVxuICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5zdWNjZXNzKVxuXG4gICAgdGhpcy4kaW5wdXRzXG4gICAgICAucmVtb3ZlRGF0YShbJ2JzLnZhbGlkYXRvci5lcnJvcnMnLCAnYnMudmFsaWRhdG9yLmRlZmVycmVkJ10pXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKVxuICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgIHZhciB0aW1lb3V0ID0gJHRoaXMuZGF0YSgnYnMudmFsaWRhdG9yLnRpbWVvdXQnKVxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpICYmICR0aGlzLnJlbW92ZURhdGEoJ2JzLnZhbGlkYXRvci50aW1lb3V0JylcbiAgICAgIH0pXG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcbiAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgICB2YXIgb3JpZ2luYWxDb250ZW50ID0gJHRoaXMuZGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcpXG5cbiAgICAgICAgJHRoaXNcbiAgICAgICAgICAucmVtb3ZlRGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcpXG4gICAgICAgICAgLmh0bWwob3JpZ2luYWxDb250ZW50KVxuICAgICAgfSlcblxuICAgIHRoaXMuJGJ0bi5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKVxuXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCcuaGFzLWVycm9yLCAuaGFzLWRhbmdlciwgLmhhcy1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZGFuZ2VyIGhhcy1zdWNjZXNzJylcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAucmVtb3ZlQXR0cignbm92YWxpZGF0ZScpXG4gICAgICAucmVtb3ZlRGF0YSgnYnMudmFsaWRhdG9yJylcbiAgICAgIC5vZmYoJy5icy52YWxpZGF0b3InKVxuXG4gICAgdGhpcy4kaW5wdXRzXG4gICAgICAub2ZmKCcuYnMudmFsaWRhdG9yJylcblxuICAgIHRoaXMub3B0aW9ucyAgICA9IG51bGxcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSBudWxsXG4gICAgdGhpcy4kZWxlbWVudCAgID0gbnVsbFxuICAgIHRoaXMuJGJ0biAgICAgICA9IG51bGxcbiAgICB0aGlzLiRpbnB1dHMgICAgPSBudWxsXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gVkFMSURBVE9SIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgZnVuY3Rpb24gUGx1Z2luKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBWYWxpZGF0b3IuREVGQVVMVFMsICR0aGlzLmRhdGEoKSwgdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb24pXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLnZhbGlkYXRvcicpXG5cbiAgICAgIGlmICghZGF0YSAmJiBvcHRpb24gPT0gJ2Rlc3Ryb3knKSByZXR1cm5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMudmFsaWRhdG9yJywgKGRhdGEgPSBuZXcgVmFsaWRhdG9yKHRoaXMsIG9wdGlvbnMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0oKVxuICAgIH0pXG4gIH1cblxuICB2YXIgb2xkID0gJC5mbi52YWxpZGF0b3JcblxuICAkLmZuLnZhbGlkYXRvciAgICAgICAgICAgICA9IFBsdWdpblxuICAkLmZuLnZhbGlkYXRvci5Db25zdHJ1Y3RvciA9IFZhbGlkYXRvclxuXG5cbiAgLy8gVkFMSURBVE9SIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09PT09PVxuXG4gICQuZm4udmFsaWRhdG9yLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi52YWxpZGF0b3IgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBWQUxJREFUT1IgREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09PT09PT09XG5cbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICQoJ2Zvcm1bZGF0YS10b2dnbGU9XCJ2YWxpZGF0b3JcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkZm9ybSA9ICQodGhpcylcbiAgICAgIFBsdWdpbi5jYWxsKCRmb3JtLCAkZm9ybS5kYXRhKCkpXG4gICAgfSlcbiAgfSlcblxufShqUXVlcnkpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9qcy9ib290c3RyYXAtZGF0ZXBpY2tlci5taW4uanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxNy8wOC8yMDIwIDE0OjIwXG5cbi8qIVxuICogRGF0ZXBpY2tlciBmb3IgQm9vdHN0cmFwIHYxLjguMCAoaHR0cHM6Ly9naXRodWIuY29tL3V4c29sdXRpb25zL2Jvb3RzdHJhcC1kYXRlcGlja2VyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSB2Mi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApXG4gKi9cblxuIWZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGEpOmEoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/cmVxdWlyZShcImpxdWVyeVwiKTpqUXVlcnkpfShmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoKXtyZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkoRGF0ZSxhcmd1bWVudHMpKX1mdW5jdGlvbiBkKCl7dmFyIGE9bmV3IERhdGU7cmV0dXJuIGMoYS5nZXRGdWxsWWVhcigpLGEuZ2V0TW9udGgoKSxhLmdldERhdGUoKSl9ZnVuY3Rpb24gZShhLGIpe3JldHVybiBhLmdldFVUQ0Z1bGxZZWFyKCk9PT1iLmdldFVUQ0Z1bGxZZWFyKCkmJmEuZ2V0VVRDTW9udGgoKT09PWIuZ2V0VVRDTW9udGgoKSYmYS5nZXRVVENEYXRlKCk9PT1iLmdldFVUQ0RhdGUoKX1mdW5jdGlvbiBmKGMsZCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGQhPT1iJiZhLmZuLmRhdGVwaWNrZXIuZGVwcmVjYXRlZChkKSx0aGlzW2NdLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19ZnVuY3Rpb24gZyhhKXtyZXR1cm4gYSYmIWlzTmFOKGEuZ2V0VGltZSgpKX1mdW5jdGlvbiBoKGIsYyl7ZnVuY3Rpb24gZChhLGIpe3JldHVybiBiLnRvTG93ZXJDYXNlKCl9dmFyIGUsZj1hKGIpLmRhdGEoKSxnPXt9LGg9bmV3IFJlZ0V4cChcIl5cIitjLnRvTG93ZXJDYXNlKCkrXCIoW0EtWl0pXCIpO2M9bmV3IFJlZ0V4cChcIl5cIitjLnRvTG93ZXJDYXNlKCkpO2Zvcih2YXIgaSBpbiBmKWMudGVzdChpKSYmKGU9aS5yZXBsYWNlKGgsZCksZ1tlXT1mW2ldKTtyZXR1cm4gZ31mdW5jdGlvbiBpKGIpe3ZhciBjPXt9O2lmKHFbYl18fChiPWIuc3BsaXQoXCItXCIpWzBdLHFbYl0pKXt2YXIgZD1xW2JdO3JldHVybiBhLmVhY2gocCxmdW5jdGlvbihhLGIpe2IgaW4gZCYmKGNbYl09ZFtiXSl9KSxjfX12YXIgaj1mdW5jdGlvbigpe3ZhciBiPXtnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuc2xpY2UoYSlbMF19LGNvbnRhaW5zOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1hJiZhLnZhbHVlT2YoKSxjPTAsZD10aGlzLmxlbmd0aDtjPGQ7YysrKWlmKDA8PXRoaXNbY10udmFsdWVPZigpLWImJnRoaXNbY10udmFsdWVPZigpLWI8ODY0ZTUpcmV0dXJuIGM7cmV0dXJuLTF9LHJlbW92ZTpmdW5jdGlvbihhKXt0aGlzLnNwbGljZShhLDEpfSxyZXBsYWNlOmZ1bmN0aW9uKGIpe2ImJihhLmlzQXJyYXkoYil8fChiPVtiXSksdGhpcy5jbGVhcigpLHRoaXMucHVzaC5hcHBseSh0aGlzLGIpKX0sY2xlYXI6ZnVuY3Rpb24oKXt0aGlzLmxlbmd0aD0wfSxjb3B5OmZ1bmN0aW9uKCl7dmFyIGE9bmV3IGo7cmV0dXJuIGEucmVwbGFjZSh0aGlzKSxhfX07cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9W107cmV0dXJuIGMucHVzaC5hcHBseShjLGFyZ3VtZW50cyksYS5leHRlbmQoYyxiKSxjfX0oKSxrPWZ1bmN0aW9uKGIsYyl7YS5kYXRhKGIsXCJkYXRlcGlja2VyXCIsdGhpcyksdGhpcy5fcHJvY2Vzc19vcHRpb25zKGMpLHRoaXMuZGF0ZXM9bmV3IGosdGhpcy52aWV3RGF0ZT10aGlzLm8uZGVmYXVsdFZpZXdEYXRlLHRoaXMuZm9jdXNEYXRlPW51bGwsdGhpcy5lbGVtZW50PWEoYiksdGhpcy5pc0lucHV0PXRoaXMuZWxlbWVudC5pcyhcImlucHV0XCIpLHRoaXMuaW5wdXRGaWVsZD10aGlzLmlzSW5wdXQ/dGhpcy5lbGVtZW50OnRoaXMuZWxlbWVudC5maW5kKFwiaW5wdXRcIiksdGhpcy5jb21wb25lbnQ9ISF0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoXCJkYXRlXCIpJiZ0aGlzLmVsZW1lbnQuZmluZChcIi5hZGQtb24sIC5pbnB1dC1ncm91cC1hZGRvbiwgLmJ0blwiKSx0aGlzLmNvbXBvbmVudCYmMD09PXRoaXMuY29tcG9uZW50Lmxlbmd0aCYmKHRoaXMuY29tcG9uZW50PSExKSx0aGlzLmlzSW5saW5lPSF0aGlzLmNvbXBvbmVudCYmdGhpcy5lbGVtZW50LmlzKFwiZGl2XCIpLHRoaXMucGlja2VyPWEoci50ZW1wbGF0ZSksdGhpcy5fY2hlY2tfdGVtcGxhdGUodGhpcy5vLnRlbXBsYXRlcy5sZWZ0QXJyb3cpJiZ0aGlzLnBpY2tlci5maW5kKFwiLnByZXZcIikuaHRtbCh0aGlzLm8udGVtcGxhdGVzLmxlZnRBcnJvdyksdGhpcy5fY2hlY2tfdGVtcGxhdGUodGhpcy5vLnRlbXBsYXRlcy5yaWdodEFycm93KSYmdGhpcy5waWNrZXIuZmluZChcIi5uZXh0XCIpLmh0bWwodGhpcy5vLnRlbXBsYXRlcy5yaWdodEFycm93KSx0aGlzLl9idWlsZEV2ZW50cygpLHRoaXMuX2F0dGFjaEV2ZW50cygpLHRoaXMuaXNJbmxpbmU/dGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLWlubGluZVwiKS5hcHBlbmRUbyh0aGlzLmVsZW1lbnQpOnRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1kcm9wZG93biBkcm9wZG93bi1tZW51XCIpLHRoaXMuby5ydGwmJnRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1ydGxcIiksdGhpcy5vLmNhbGVuZGFyV2Vla3MmJnRoaXMucGlja2VyLmZpbmQoXCIuZGF0ZXBpY2tlci1kYXlzIC5kYXRlcGlja2VyLXN3aXRjaCwgdGhlYWQgLmRhdGVwaWNrZXItdGl0bGUsIHRmb290IC50b2RheSwgdGZvb3QgLmNsZWFyXCIpLmF0dHIoXCJjb2xzcGFuXCIsZnVuY3Rpb24oYSxiKXtyZXR1cm4gTnVtYmVyKGIpKzF9KSx0aGlzLl9wcm9jZXNzX29wdGlvbnMoe3N0YXJ0RGF0ZTp0aGlzLl9vLnN0YXJ0RGF0ZSxlbmREYXRlOnRoaXMuX28uZW5kRGF0ZSxkYXlzT2ZXZWVrRGlzYWJsZWQ6dGhpcy5vLmRheXNPZldlZWtEaXNhYmxlZCxkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6dGhpcy5vLmRheXNPZldlZWtIaWdobGlnaHRlZCxkYXRlc0Rpc2FibGVkOnRoaXMuby5kYXRlc0Rpc2FibGVkfSksdGhpcy5fYWxsb3dfdXBkYXRlPSExLHRoaXMuc2V0Vmlld01vZGUodGhpcy5vLnN0YXJ0VmlldyksdGhpcy5fYWxsb3dfdXBkYXRlPSEwLHRoaXMuZmlsbERvdygpLHRoaXMuZmlsbE1vbnRocygpLHRoaXMudXBkYXRlKCksdGhpcy5pc0lubGluZSYmdGhpcy5zaG93KCl9O2sucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjprLF9yZXNvbHZlVmlld05hbWU6ZnVuY3Rpb24oYil7cmV0dXJuIGEuZWFjaChyLnZpZXdNb2RlcyxmdW5jdGlvbihjLGQpe2lmKGI9PT1jfHxhLmluQXJyYXkoYixkLm5hbWVzKSE9PS0xKXJldHVybiBiPWMsITF9KSxifSxfcmVzb2x2ZURheXNPZldlZWs6ZnVuY3Rpb24oYil7cmV0dXJuIGEuaXNBcnJheShiKXx8KGI9Yi5zcGxpdCgvWyxcXHNdKi8pKSxhLm1hcChiLE51bWJlcil9LF9jaGVja190ZW1wbGF0ZTpmdW5jdGlvbihjKXt0cnl7aWYoYz09PWJ8fFwiXCI9PT1jKXJldHVybiExO2lmKChjLm1hdGNoKC9bPD5dL2cpfHxbXSkubGVuZ3RoPD0wKXJldHVybiEwO3ZhciBkPWEoYyk7cmV0dXJuIGQubGVuZ3RoPjB9Y2F0Y2goYSl7cmV0dXJuITF9fSxfcHJvY2Vzc19vcHRpb25zOmZ1bmN0aW9uKGIpe3RoaXMuX289YS5leHRlbmQoe30sdGhpcy5fbyxiKTt2YXIgZT10aGlzLm89YS5leHRlbmQoe30sdGhpcy5fbyksZj1lLmxhbmd1YWdlO3FbZl18fChmPWYuc3BsaXQoXCItXCIpWzBdLHFbZl18fChmPW8ubGFuZ3VhZ2UpKSxlLmxhbmd1YWdlPWYsZS5zdGFydFZpZXc9dGhpcy5fcmVzb2x2ZVZpZXdOYW1lKGUuc3RhcnRWaWV3KSxlLm1pblZpZXdNb2RlPXRoaXMuX3Jlc29sdmVWaWV3TmFtZShlLm1pblZpZXdNb2RlKSxlLm1heFZpZXdNb2RlPXRoaXMuX3Jlc29sdmVWaWV3TmFtZShlLm1heFZpZXdNb2RlKSxlLnN0YXJ0Vmlldz1NYXRoLm1heCh0aGlzLm8ubWluVmlld01vZGUsTWF0aC5taW4odGhpcy5vLm1heFZpZXdNb2RlLGUuc3RhcnRWaWV3KSksZS5tdWx0aWRhdGUhPT0hMCYmKGUubXVsdGlkYXRlPU51bWJlcihlLm11bHRpZGF0ZSl8fCExLGUubXVsdGlkYXRlIT09ITEmJihlLm11bHRpZGF0ZT1NYXRoLm1heCgwLGUubXVsdGlkYXRlKSkpLGUubXVsdGlkYXRlU2VwYXJhdG9yPVN0cmluZyhlLm11bHRpZGF0ZVNlcGFyYXRvciksZS53ZWVrU3RhcnQlPTcsZS53ZWVrRW5kPShlLndlZWtTdGFydCs2KSU3O3ZhciBnPXIucGFyc2VGb3JtYXQoZS5mb3JtYXQpO2Uuc3RhcnREYXRlIT09LSgxLzApJiYoZS5zdGFydERhdGU/ZS5zdGFydERhdGUgaW5zdGFuY2VvZiBEYXRlP2Uuc3RhcnREYXRlPXRoaXMuX2xvY2FsX3RvX3V0Yyh0aGlzLl96ZXJvX3RpbWUoZS5zdGFydERhdGUpKTplLnN0YXJ0RGF0ZT1yLnBhcnNlRGF0ZShlLnN0YXJ0RGF0ZSxnLGUubGFuZ3VhZ2UsZS5hc3N1bWVOZWFyYnlZZWFyKTplLnN0YXJ0RGF0ZT0tKDEvMCkpLGUuZW5kRGF0ZSE9PTEvMCYmKGUuZW5kRGF0ZT9lLmVuZERhdGUgaW5zdGFuY2VvZiBEYXRlP2UuZW5kRGF0ZT10aGlzLl9sb2NhbF90b191dGModGhpcy5femVyb190aW1lKGUuZW5kRGF0ZSkpOmUuZW5kRGF0ZT1yLnBhcnNlRGF0ZShlLmVuZERhdGUsZyxlLmxhbmd1YWdlLGUuYXNzdW1lTmVhcmJ5WWVhcik6ZS5lbmREYXRlPTEvMCksZS5kYXlzT2ZXZWVrRGlzYWJsZWQ9dGhpcy5fcmVzb2x2ZURheXNPZldlZWsoZS5kYXlzT2ZXZWVrRGlzYWJsZWR8fFtdKSxlLmRheXNPZldlZWtIaWdobGlnaHRlZD10aGlzLl9yZXNvbHZlRGF5c09mV2VlayhlLmRheXNPZldlZWtIaWdobGlnaHRlZHx8W10pLGUuZGF0ZXNEaXNhYmxlZD1lLmRhdGVzRGlzYWJsZWR8fFtdLGEuaXNBcnJheShlLmRhdGVzRGlzYWJsZWQpfHwoZS5kYXRlc0Rpc2FibGVkPWUuZGF0ZXNEaXNhYmxlZC5zcGxpdChcIixcIikpLGUuZGF0ZXNEaXNhYmxlZD1hLm1hcChlLmRhdGVzRGlzYWJsZWQsZnVuY3Rpb24oYSl7cmV0dXJuIHIucGFyc2VEYXRlKGEsZyxlLmxhbmd1YWdlLGUuYXNzdW1lTmVhcmJ5WWVhcil9KTt2YXIgaD1TdHJpbmcoZS5vcmllbnRhdGlvbikudG9Mb3dlckNhc2UoKS5zcGxpdCgvXFxzKy9nKSxpPWUub3JpZW50YXRpb24udG9Mb3dlckNhc2UoKTtpZihoPWEuZ3JlcChoLGZ1bmN0aW9uKGEpe3JldHVybi9eYXV0b3xsZWZ0fHJpZ2h0fHRvcHxib3R0b20kLy50ZXN0KGEpfSksZS5vcmllbnRhdGlvbj17eDpcImF1dG9cIix5OlwiYXV0b1wifSxpJiZcImF1dG9cIiE9PWkpaWYoMT09PWgubGVuZ3RoKXN3aXRjaChoWzBdKXtjYXNlXCJ0b3BcIjpjYXNlXCJib3R0b21cIjplLm9yaWVudGF0aW9uLnk9aFswXTticmVhaztjYXNlXCJsZWZ0XCI6Y2FzZVwicmlnaHRcIjplLm9yaWVudGF0aW9uLng9aFswXX1lbHNlIGk9YS5ncmVwKGgsZnVuY3Rpb24oYSl7cmV0dXJuL15sZWZ0fHJpZ2h0JC8udGVzdChhKX0pLGUub3JpZW50YXRpb24ueD1pWzBdfHxcImF1dG9cIixpPWEuZ3JlcChoLGZ1bmN0aW9uKGEpe3JldHVybi9edG9wfGJvdHRvbSQvLnRlc3QoYSl9KSxlLm9yaWVudGF0aW9uLnk9aVswXXx8XCJhdXRvXCI7ZWxzZTtpZihlLmRlZmF1bHRWaWV3RGF0ZSBpbnN0YW5jZW9mIERhdGV8fFwic3RyaW5nXCI9PXR5cGVvZiBlLmRlZmF1bHRWaWV3RGF0ZSllLmRlZmF1bHRWaWV3RGF0ZT1yLnBhcnNlRGF0ZShlLmRlZmF1bHRWaWV3RGF0ZSxnLGUubGFuZ3VhZ2UsZS5hc3N1bWVOZWFyYnlZZWFyKTtlbHNlIGlmKGUuZGVmYXVsdFZpZXdEYXRlKXt2YXIgaj1lLmRlZmF1bHRWaWV3RGF0ZS55ZWFyfHwobmV3IERhdGUpLmdldEZ1bGxZZWFyKCksaz1lLmRlZmF1bHRWaWV3RGF0ZS5tb250aHx8MCxsPWUuZGVmYXVsdFZpZXdEYXRlLmRheXx8MTtlLmRlZmF1bHRWaWV3RGF0ZT1jKGosayxsKX1lbHNlIGUuZGVmYXVsdFZpZXdEYXRlPWQoKX0sX2V2ZW50czpbXSxfc2Vjb25kYXJ5RXZlbnRzOltdLF9hcHBseUV2ZW50czpmdW5jdGlvbihhKXtmb3IodmFyIGMsZCxlLGY9MDtmPGEubGVuZ3RoO2YrKyljPWFbZl1bMF0sMj09PWFbZl0ubGVuZ3RoPyhkPWIsZT1hW2ZdWzFdKTozPT09YVtmXS5sZW5ndGgmJihkPWFbZl1bMV0sZT1hW2ZdWzJdKSxjLm9uKGUsZCl9LF91bmFwcGx5RXZlbnRzOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkLGUsZj0wO2Y8YS5sZW5ndGg7ZisrKWM9YVtmXVswXSwyPT09YVtmXS5sZW5ndGg/KGU9YixkPWFbZl1bMV0pOjM9PT1hW2ZdLmxlbmd0aCYmKGU9YVtmXVsxXSxkPWFbZl1bMl0pLGMub2ZmKGQsZSl9LF9idWlsZEV2ZW50czpmdW5jdGlvbigpe3ZhciBiPXtrZXl1cDphLnByb3h5KGZ1bmN0aW9uKGIpe2EuaW5BcnJheShiLmtleUNvZGUsWzI3LDM3LDM5LDM4LDQwLDMyLDEzLDldKT09PS0xJiZ0aGlzLnVwZGF0ZSgpfSx0aGlzKSxrZXlkb3duOmEucHJveHkodGhpcy5rZXlkb3duLHRoaXMpLHBhc3RlOmEucHJveHkodGhpcy5wYXN0ZSx0aGlzKX07dGhpcy5vLnNob3dPbkZvY3VzPT09ITAmJihiLmZvY3VzPWEucHJveHkodGhpcy5zaG93LHRoaXMpKSx0aGlzLmlzSW5wdXQ/dGhpcy5fZXZlbnRzPVtbdGhpcy5lbGVtZW50LGJdXTp0aGlzLmNvbXBvbmVudCYmdGhpcy5pbnB1dEZpZWxkLmxlbmd0aD90aGlzLl9ldmVudHM9W1t0aGlzLmlucHV0RmllbGQsYl0sW3RoaXMuY29tcG9uZW50LHtjbGljazphLnByb3h5KHRoaXMuc2hvdyx0aGlzKX1dXTp0aGlzLl9ldmVudHM9W1t0aGlzLmVsZW1lbnQse2NsaWNrOmEucHJveHkodGhpcy5zaG93LHRoaXMpLGtleWRvd246YS5wcm94eSh0aGlzLmtleWRvd24sdGhpcyl9XV0sdGhpcy5fZXZlbnRzLnB1c2goW3RoaXMuZWxlbWVudCxcIipcIix7Ymx1cjphLnByb3h5KGZ1bmN0aW9uKGEpe3RoaXMuX2ZvY3VzZWRfZnJvbT1hLnRhcmdldH0sdGhpcyl9XSxbdGhpcy5lbGVtZW50LHtibHVyOmEucHJveHkoZnVuY3Rpb24oYSl7dGhpcy5fZm9jdXNlZF9mcm9tPWEudGFyZ2V0fSx0aGlzKX1dKSx0aGlzLm8uaW1tZWRpYXRlVXBkYXRlcyYmdGhpcy5fZXZlbnRzLnB1c2goW3RoaXMuZWxlbWVudCx7XCJjaGFuZ2VZZWFyIGNoYW5nZU1vbnRoXCI6YS5wcm94eShmdW5jdGlvbihhKXt0aGlzLnVwZGF0ZShhLmRhdGUpfSx0aGlzKX1dKSx0aGlzLl9zZWNvbmRhcnlFdmVudHM9W1t0aGlzLnBpY2tlcix7Y2xpY2s6YS5wcm94eSh0aGlzLmNsaWNrLHRoaXMpfV0sW3RoaXMucGlja2VyLFwiLnByZXYsIC5uZXh0XCIse2NsaWNrOmEucHJveHkodGhpcy5uYXZBcnJvd3NDbGljayx0aGlzKX1dLFt0aGlzLnBpY2tlcixcIi5kYXk6bm90KC5kaXNhYmxlZClcIix7Y2xpY2s6YS5wcm94eSh0aGlzLmRheUNlbGxDbGljayx0aGlzKX1dLFthKHdpbmRvdykse3Jlc2l6ZTphLnByb3h5KHRoaXMucGxhY2UsdGhpcyl9XSxbYShkb2N1bWVudCkse1wibW91c2Vkb3duIHRvdWNoc3RhcnRcIjphLnByb3h5KGZ1bmN0aW9uKGEpe3RoaXMuZWxlbWVudC5pcyhhLnRhcmdldCl8fHRoaXMuZWxlbWVudC5maW5kKGEudGFyZ2V0KS5sZW5ndGh8fHRoaXMucGlja2VyLmlzKGEudGFyZ2V0KXx8dGhpcy5waWNrZXIuZmluZChhLnRhcmdldCkubGVuZ3RofHx0aGlzLmlzSW5saW5lfHx0aGlzLmhpZGUoKX0sdGhpcyl9XV19LF9hdHRhY2hFdmVudHM6ZnVuY3Rpb24oKXt0aGlzLl9kZXRhY2hFdmVudHMoKSx0aGlzLl9hcHBseUV2ZW50cyh0aGlzLl9ldmVudHMpfSxfZGV0YWNoRXZlbnRzOmZ1bmN0aW9uKCl7dGhpcy5fdW5hcHBseUV2ZW50cyh0aGlzLl9ldmVudHMpfSxfYXR0YWNoU2Vjb25kYXJ5RXZlbnRzOmZ1bmN0aW9uKCl7dGhpcy5fZGV0YWNoU2Vjb25kYXJ5RXZlbnRzKCksdGhpcy5fYXBwbHlFdmVudHModGhpcy5fc2Vjb25kYXJ5RXZlbnRzKX0sX2RldGFjaFNlY29uZGFyeUV2ZW50czpmdW5jdGlvbigpe3RoaXMuX3VuYXBwbHlFdmVudHModGhpcy5fc2Vjb25kYXJ5RXZlbnRzKX0sX3RyaWdnZXI6ZnVuY3Rpb24oYixjKXt2YXIgZD1jfHx0aGlzLmRhdGVzLmdldCgtMSksZT10aGlzLl91dGNfdG9fbG9jYWwoZCk7dGhpcy5lbGVtZW50LnRyaWdnZXIoe3R5cGU6YixkYXRlOmUsdmlld01vZGU6dGhpcy52aWV3TW9kZSxkYXRlczphLm1hcCh0aGlzLmRhdGVzLHRoaXMuX3V0Y190b19sb2NhbCksZm9ybWF0OmEucHJveHkoZnVuY3Rpb24oYSxiKXswPT09YXJndW1lbnRzLmxlbmd0aD8oYT10aGlzLmRhdGVzLmxlbmd0aC0xLGI9dGhpcy5vLmZvcm1hdCk6XCJzdHJpbmdcIj09dHlwZW9mIGEmJihiPWEsYT10aGlzLmRhdGVzLmxlbmd0aC0xKSxiPWJ8fHRoaXMuby5mb3JtYXQ7dmFyIGM9dGhpcy5kYXRlcy5nZXQoYSk7cmV0dXJuIHIuZm9ybWF0RGF0ZShjLGIsdGhpcy5vLmxhbmd1YWdlKX0sdGhpcyl9KX0sc2hvdzpmdW5jdGlvbigpe2lmKCEodGhpcy5pbnB1dEZpZWxkLnByb3AoXCJkaXNhYmxlZFwiKXx8dGhpcy5pbnB1dEZpZWxkLnByb3AoXCJyZWFkb25seVwiKSYmdGhpcy5vLmVuYWJsZU9uUmVhZG9ubHk9PT0hMSkpcmV0dXJuIHRoaXMuaXNJbmxpbmV8fHRoaXMucGlja2VyLmFwcGVuZFRvKHRoaXMuby5jb250YWluZXIpLHRoaXMucGxhY2UoKSx0aGlzLnBpY2tlci5zaG93KCksdGhpcy5fYXR0YWNoU2Vjb25kYXJ5RXZlbnRzKCksdGhpcy5fdHJpZ2dlcihcInNob3dcIiksKHdpbmRvdy5uYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50c3x8XCJvbnRvdWNoc3RhcnRcImluIGRvY3VtZW50KSYmdGhpcy5vLmRpc2FibGVUb3VjaEtleWJvYXJkJiZhKHRoaXMuZWxlbWVudCkuYmx1cigpLHRoaXN9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc0lubGluZXx8IXRoaXMucGlja2VyLmlzKFwiOnZpc2libGVcIik/dGhpczoodGhpcy5mb2N1c0RhdGU9bnVsbCx0aGlzLnBpY2tlci5oaWRlKCkuZGV0YWNoKCksdGhpcy5fZGV0YWNoU2Vjb25kYXJ5RXZlbnRzKCksdGhpcy5zZXRWaWV3TW9kZSh0aGlzLm8uc3RhcnRWaWV3KSx0aGlzLm8uZm9yY2VQYXJzZSYmdGhpcy5pbnB1dEZpZWxkLnZhbCgpJiZ0aGlzLnNldFZhbHVlKCksdGhpcy5fdHJpZ2dlcihcImhpZGVcIiksdGhpcyl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oaWRlKCksdGhpcy5fZGV0YWNoRXZlbnRzKCksdGhpcy5fZGV0YWNoU2Vjb25kYXJ5RXZlbnRzKCksdGhpcy5waWNrZXIucmVtb3ZlKCksZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZXBpY2tlcix0aGlzLmlzSW5wdXR8fGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGUsdGhpc30scGFzdGU6ZnVuY3Rpb24oYil7dmFyIGM7aWYoYi5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEmJmIub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhLnR5cGVzJiZhLmluQXJyYXkoXCJ0ZXh0L3BsYWluXCIsYi5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEudHlwZXMpIT09LTEpYz1iLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtlbHNle2lmKCF3aW5kb3cuY2xpcGJvYXJkRGF0YSlyZXR1cm47Yz13aW5kb3cuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwiVGV4dFwiKX10aGlzLnNldERhdGUoYyksdGhpcy51cGRhdGUoKSxiLnByZXZlbnREZWZhdWx0KCl9LF91dGNfdG9fbG9jYWw6ZnVuY3Rpb24oYSl7aWYoIWEpcmV0dXJuIGE7dmFyIGI9bmV3IERhdGUoYS5nZXRUaW1lKCkrNmU0KmEuZ2V0VGltZXpvbmVPZmZzZXQoKSk7cmV0dXJuIGIuZ2V0VGltZXpvbmVPZmZzZXQoKSE9PWEuZ2V0VGltZXpvbmVPZmZzZXQoKSYmKGI9bmV3IERhdGUoYS5nZXRUaW1lKCkrNmU0KmIuZ2V0VGltZXpvbmVPZmZzZXQoKSkpLGJ9LF9sb2NhbF90b191dGM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJm5ldyBEYXRlKGEuZ2V0VGltZSgpLTZlNCphLmdldFRpbWV6b25lT2Zmc2V0KCkpfSxfemVyb190aW1lOmZ1bmN0aW9uKGEpe3JldHVybiBhJiZuZXcgRGF0ZShhLmdldEZ1bGxZZWFyKCksYS5nZXRNb250aCgpLGEuZ2V0RGF0ZSgpKX0sX3plcm9fdXRjX3RpbWU6ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJmMoYS5nZXRVVENGdWxsWWVhcigpLGEuZ2V0VVRDTW9udGgoKSxhLmdldFVUQ0RhdGUoKSl9LGdldERhdGVzOmZ1bmN0aW9uKCl7cmV0dXJuIGEubWFwKHRoaXMuZGF0ZXMsdGhpcy5fdXRjX3RvX2xvY2FsKX0sZ2V0VVRDRGF0ZXM6ZnVuY3Rpb24oKXtyZXR1cm4gYS5tYXAodGhpcy5kYXRlcyxmdW5jdGlvbihhKXtyZXR1cm4gbmV3IERhdGUoYSl9KX0sZ2V0RGF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl91dGNfdG9fbG9jYWwodGhpcy5nZXRVVENEYXRlKCkpfSxnZXRVVENEYXRlOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5kYXRlcy5nZXQoLTEpO3JldHVybiBhIT09Yj9uZXcgRGF0ZShhKTpudWxsfSxjbGVhckRhdGVzOmZ1bmN0aW9uKCl7dGhpcy5pbnB1dEZpZWxkLnZhbChcIlwiKSx0aGlzLnVwZGF0ZSgpLHRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VEYXRlXCIpLHRoaXMuby5hdXRvY2xvc2UmJnRoaXMuaGlkZSgpfSxzZXREYXRlczpmdW5jdGlvbigpe3ZhciBiPWEuaXNBcnJheShhcmd1bWVudHNbMF0pP2FyZ3VtZW50c1swXTphcmd1bWVudHM7cmV0dXJuIHRoaXMudXBkYXRlLmFwcGx5KHRoaXMsYiksdGhpcy5fdHJpZ2dlcihcImNoYW5nZURhdGVcIiksdGhpcy5zZXRWYWx1ZSgpLHRoaXN9LHNldFVUQ0RhdGVzOmZ1bmN0aW9uKCl7dmFyIGI9YS5pc0FycmF5KGFyZ3VtZW50c1swXSk/YXJndW1lbnRzWzBdOmFyZ3VtZW50cztyZXR1cm4gdGhpcy5zZXREYXRlcy5hcHBseSh0aGlzLGEubWFwKGIsdGhpcy5fdXRjX3RvX2xvY2FsKSksdGhpc30sc2V0RGF0ZTpmKFwic2V0RGF0ZXNcIiksc2V0VVRDRGF0ZTpmKFwic2V0VVRDRGF0ZXNcIikscmVtb3ZlOmYoXCJkZXN0cm95XCIsXCJNZXRob2QgYHJlbW92ZWAgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gMi4wLiBVc2UgYGRlc3Ryb3lgIGluc3RlYWRcIiksc2V0VmFsdWU6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmdldEZvcm1hdHRlZERhdGUoKTtyZXR1cm4gdGhpcy5pbnB1dEZpZWxkLnZhbChhKSx0aGlzfSxnZXRGb3JtYXR0ZWREYXRlOmZ1bmN0aW9uKGMpe2M9PT1iJiYoYz10aGlzLm8uZm9ybWF0KTt2YXIgZD10aGlzLm8ubGFuZ3VhZ2U7cmV0dXJuIGEubWFwKHRoaXMuZGF0ZXMsZnVuY3Rpb24oYSl7cmV0dXJuIHIuZm9ybWF0RGF0ZShhLGMsZCl9KS5qb2luKHRoaXMuby5tdWx0aWRhdGVTZXBhcmF0b3IpfSxnZXRTdGFydERhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vLnN0YXJ0RGF0ZX0sc2V0U3RhcnREYXRlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9wcm9jZXNzX29wdGlvbnMoe3N0YXJ0RGF0ZTphfSksdGhpcy51cGRhdGUoKSx0aGlzLnVwZGF0ZU5hdkFycm93cygpLHRoaXN9LGdldEVuZERhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vLmVuZERhdGV9LHNldEVuZERhdGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7ZW5kRGF0ZTphfSksdGhpcy51cGRhdGUoKSx0aGlzLnVwZGF0ZU5hdkFycm93cygpLHRoaXN9LHNldERheXNPZldlZWtEaXNhYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fcHJvY2Vzc19vcHRpb25zKHtkYXlzT2ZXZWVrRGlzYWJsZWQ6YX0pLHRoaXMudXBkYXRlKCksdGhpc30sc2V0RGF5c09mV2Vla0hpZ2hsaWdodGVkOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9wcm9jZXNzX29wdGlvbnMoe2RheXNPZldlZWtIaWdobGlnaHRlZDphfSksdGhpcy51cGRhdGUoKSx0aGlzfSxzZXREYXRlc0Rpc2FibGVkOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9wcm9jZXNzX29wdGlvbnMoe2RhdGVzRGlzYWJsZWQ6YX0pLHRoaXMudXBkYXRlKCksdGhpc30scGxhY2U6ZnVuY3Rpb24oKXtpZih0aGlzLmlzSW5saW5lKXJldHVybiB0aGlzO3ZhciBiPXRoaXMucGlja2VyLm91dGVyV2lkdGgoKSxjPXRoaXMucGlja2VyLm91dGVySGVpZ2h0KCksZD0xMCxlPWEodGhpcy5vLmNvbnRhaW5lciksZj1lLndpZHRoKCksZz1cImJvZHlcIj09PXRoaXMuby5jb250YWluZXI/YShkb2N1bWVudCkuc2Nyb2xsVG9wKCk6ZS5zY3JvbGxUb3AoKSxoPWUub2Zmc2V0KCksaT1bMF07dGhpcy5lbGVtZW50LnBhcmVudHMoKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKS5jc3MoXCJ6LWluZGV4XCIpO1wiYXV0b1wiIT09YiYmMCE9PU51bWJlcihiKSYmaS5wdXNoKE51bWJlcihiKSl9KTt2YXIgaj1NYXRoLm1heC5hcHBseShNYXRoLGkpK3RoaXMuby56SW5kZXhPZmZzZXQsaz10aGlzLmNvbXBvbmVudD90aGlzLmNvbXBvbmVudC5wYXJlbnQoKS5vZmZzZXQoKTp0aGlzLmVsZW1lbnQub2Zmc2V0KCksbD10aGlzLmNvbXBvbmVudD90aGlzLmNvbXBvbmVudC5vdXRlckhlaWdodCghMCk6dGhpcy5lbGVtZW50Lm91dGVySGVpZ2h0KCExKSxtPXRoaXMuY29tcG9uZW50P3RoaXMuY29tcG9uZW50Lm91dGVyV2lkdGgoITApOnRoaXMuZWxlbWVudC5vdXRlcldpZHRoKCExKSxuPWsubGVmdC1oLmxlZnQsbz1rLnRvcC1oLnRvcDtcImJvZHlcIiE9PXRoaXMuby5jb250YWluZXImJihvKz1nKSx0aGlzLnBpY2tlci5yZW1vdmVDbGFzcyhcImRhdGVwaWNrZXItb3JpZW50LXRvcCBkYXRlcGlja2VyLW9yaWVudC1ib3R0b20gZGF0ZXBpY2tlci1vcmllbnQtcmlnaHQgZGF0ZXBpY2tlci1vcmllbnQtbGVmdFwiKSxcImF1dG9cIiE9PXRoaXMuby5vcmllbnRhdGlvbi54Pyh0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItb3JpZW50LVwiK3RoaXMuby5vcmllbnRhdGlvbi54KSxcInJpZ2h0XCI9PT10aGlzLm8ub3JpZW50YXRpb24ueCYmKG4tPWItbSkpOmsubGVmdDwwPyh0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItb3JpZW50LWxlZnRcIiksbi09ay5sZWZ0LWQpOm4rYj5mPyh0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItb3JpZW50LXJpZ2h0XCIpLG4rPW0tYik6dGhpcy5vLnJ0bD90aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItb3JpZW50LXJpZ2h0XCIpOnRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtbGVmdFwiKTt2YXIgcCxxPXRoaXMuby5vcmllbnRhdGlvbi55O2lmKFwiYXV0b1wiPT09cSYmKHA9LWcrby1jLHE9cDwwP1wiYm90dG9tXCI6XCJ0b3BcIiksdGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC1cIitxKSxcInRvcFwiPT09cT9vLT1jK3BhcnNlSW50KHRoaXMucGlja2VyLmNzcyhcInBhZGRpbmctdG9wXCIpKTpvKz1sLHRoaXMuby5ydGwpe3ZhciByPWYtKG4rbSk7dGhpcy5waWNrZXIuY3NzKHt0b3A6byxyaWdodDpyLHpJbmRleDpqfSl9ZWxzZSB0aGlzLnBpY2tlci5jc3Moe3RvcDpvLGxlZnQ6bix6SW5kZXg6an0pO3JldHVybiB0aGlzfSxfYWxsb3dfdXBkYXRlOiEwLHVwZGF0ZTpmdW5jdGlvbigpe2lmKCF0aGlzLl9hbGxvd191cGRhdGUpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5kYXRlcy5jb3B5KCksYz1bXSxkPSExO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhhLmVhY2goYXJndW1lbnRzLGEucHJveHkoZnVuY3Rpb24oYSxiKXtiIGluc3RhbmNlb2YgRGF0ZSYmKGI9dGhpcy5fbG9jYWxfdG9fdXRjKGIpKSxjLnB1c2goYil9LHRoaXMpKSxkPSEwKTooYz10aGlzLmlzSW5wdXQ/dGhpcy5lbGVtZW50LnZhbCgpOnRoaXMuZWxlbWVudC5kYXRhKFwiZGF0ZVwiKXx8dGhpcy5pbnB1dEZpZWxkLnZhbCgpLGM9YyYmdGhpcy5vLm11bHRpZGF0ZT9jLnNwbGl0KHRoaXMuby5tdWx0aWRhdGVTZXBhcmF0b3IpOltjXSxkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlKSxjPWEubWFwKGMsYS5wcm94eShmdW5jdGlvbihhKXtyZXR1cm4gci5wYXJzZURhdGUoYSx0aGlzLm8uZm9ybWF0LHRoaXMuby5sYW5ndWFnZSx0aGlzLm8uYXNzdW1lTmVhcmJ5WWVhcil9LHRoaXMpKSxjPWEuZ3JlcChjLGEucHJveHkoZnVuY3Rpb24oYSl7cmV0dXJuIXRoaXMuZGF0ZVdpdGhpblJhbmdlKGEpfHwhYX0sdGhpcyksITApLHRoaXMuZGF0ZXMucmVwbGFjZShjKSx0aGlzLm8udXBkYXRlVmlld0RhdGUmJih0aGlzLmRhdGVzLmxlbmd0aD90aGlzLnZpZXdEYXRlPW5ldyBEYXRlKHRoaXMuZGF0ZXMuZ2V0KC0xKSk6dGhpcy52aWV3RGF0ZTx0aGlzLm8uc3RhcnREYXRlP3RoaXMudmlld0RhdGU9bmV3IERhdGUodGhpcy5vLnN0YXJ0RGF0ZSk6dGhpcy52aWV3RGF0ZT50aGlzLm8uZW5kRGF0ZT90aGlzLnZpZXdEYXRlPW5ldyBEYXRlKHRoaXMuby5lbmREYXRlKTp0aGlzLnZpZXdEYXRlPXRoaXMuby5kZWZhdWx0Vmlld0RhdGUpLGQ/KHRoaXMuc2V0VmFsdWUoKSx0aGlzLmVsZW1lbnQuY2hhbmdlKCkpOnRoaXMuZGF0ZXMubGVuZ3RoJiZTdHJpbmcoYikhPT1TdHJpbmcodGhpcy5kYXRlcykmJmQmJih0aGlzLl90cmlnZ2VyKFwiY2hhbmdlRGF0ZVwiKSx0aGlzLmVsZW1lbnQuY2hhbmdlKCkpLCF0aGlzLmRhdGVzLmxlbmd0aCYmYi5sZW5ndGgmJih0aGlzLl90cmlnZ2VyKFwiY2xlYXJEYXRlXCIpLHRoaXMuZWxlbWVudC5jaGFuZ2UoKSksdGhpcy5maWxsKCksdGhpc30sZmlsbERvdzpmdW5jdGlvbigpe2lmKHRoaXMuby5zaG93V2Vla0RheXMpe3ZhciBiPXRoaXMuby53ZWVrU3RhcnQsYz1cIjx0cj5cIjtmb3IodGhpcy5vLmNhbGVuZGFyV2Vla3MmJihjKz0nPHRoIGNsYXNzPVwiY3dcIj4mIzE2MDs8L3RoPicpO2I8dGhpcy5vLndlZWtTdGFydCs3OyljKz0nPHRoIGNsYXNzPVwiZG93JyxhLmluQXJyYXkoYix0aGlzLm8uZGF5c09mV2Vla0Rpc2FibGVkKSE9PS0xJiYoYys9XCIgZGlzYWJsZWRcIiksYys9J1wiPicrcVt0aGlzLm8ubGFuZ3VhZ2VdLmRheXNNaW5bYisrJTddK1wiPC90aD5cIjtjKz1cIjwvdHI+XCIsdGhpcy5waWNrZXIuZmluZChcIi5kYXRlcGlja2VyLWRheXMgdGhlYWRcIikuYXBwZW5kKGMpfX0sZmlsbE1vbnRoczpmdW5jdGlvbigpe2Zvcih2YXIgYSxiPXRoaXMuX3V0Y190b19sb2NhbCh0aGlzLnZpZXdEYXRlKSxjPVwiXCIsZD0wO2Q8MTI7ZCsrKWE9YiYmYi5nZXRNb250aCgpPT09ZD9cIiBmb2N1c2VkXCI6XCJcIixjKz0nPHNwYW4gY2xhc3M9XCJtb250aCcrYSsnXCI+JytxW3RoaXMuby5sYW5ndWFnZV0ubW9udGhzU2hvcnRbZF0rXCI8L3NwYW4+XCI7dGhpcy5waWNrZXIuZmluZChcIi5kYXRlcGlja2VyLW1vbnRocyB0ZFwiKS5odG1sKGMpfSxzZXRSYW5nZTpmdW5jdGlvbihiKXtiJiZiLmxlbmd0aD90aGlzLnJhbmdlPWEubWFwKGIsZnVuY3Rpb24oYSl7cmV0dXJuIGEudmFsdWVPZigpfSk6ZGVsZXRlIHRoaXMucmFuZ2UsdGhpcy5maWxsKCl9LGdldENsYXNzTmFtZXM6ZnVuY3Rpb24oYil7dmFyIGM9W10sZj10aGlzLnZpZXdEYXRlLmdldFVUQ0Z1bGxZZWFyKCksZz10aGlzLnZpZXdEYXRlLmdldFVUQ01vbnRoKCksaD1kKCk7cmV0dXJuIGIuZ2V0VVRDRnVsbFllYXIoKTxmfHxiLmdldFVUQ0Z1bGxZZWFyKCk9PT1mJiZiLmdldFVUQ01vbnRoKCk8Zz9jLnB1c2goXCJvbGRcIik6KGIuZ2V0VVRDRnVsbFllYXIoKT5mfHxiLmdldFVUQ0Z1bGxZZWFyKCk9PT1mJiZiLmdldFVUQ01vbnRoKCk+ZykmJmMucHVzaChcIm5ld1wiKSx0aGlzLmZvY3VzRGF0ZSYmYi52YWx1ZU9mKCk9PT10aGlzLmZvY3VzRGF0ZS52YWx1ZU9mKCkmJmMucHVzaChcImZvY3VzZWRcIiksdGhpcy5vLnRvZGF5SGlnaGxpZ2h0JiZlKGIsaCkmJmMucHVzaChcInRvZGF5XCIpLHRoaXMuZGF0ZXMuY29udGFpbnMoYikhPT0tMSYmYy5wdXNoKFwiYWN0aXZlXCIpLHRoaXMuZGF0ZVdpdGhpblJhbmdlKGIpfHxjLnB1c2goXCJkaXNhYmxlZFwiKSx0aGlzLmRhdGVJc0Rpc2FibGVkKGIpJiZjLnB1c2goXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWQtZGF0ZVwiKSxhLmluQXJyYXkoYi5nZXRVVENEYXkoKSx0aGlzLm8uZGF5c09mV2Vla0hpZ2hsaWdodGVkKSE9PS0xJiZjLnB1c2goXCJoaWdobGlnaHRlZFwiKSx0aGlzLnJhbmdlJiYoYj50aGlzLnJhbmdlWzBdJiZiPHRoaXMucmFuZ2VbdGhpcy5yYW5nZS5sZW5ndGgtMV0mJmMucHVzaChcInJhbmdlXCIpLGEuaW5BcnJheShiLnZhbHVlT2YoKSx0aGlzLnJhbmdlKSE9PS0xJiZjLnB1c2goXCJzZWxlY3RlZFwiKSxiLnZhbHVlT2YoKT09PXRoaXMucmFuZ2VbMF0mJmMucHVzaChcInJhbmdlLXN0YXJ0XCIpLGIudmFsdWVPZigpPT09dGhpcy5yYW5nZVt0aGlzLnJhbmdlLmxlbmd0aC0xXSYmYy5wdXNoKFwicmFuZ2UtZW5kXCIpKSxjfSxfZmlsbF95ZWFyc1ZpZXc6ZnVuY3Rpb24oYyxkLGUsZixnLGgsaSl7Zm9yKHZhciBqLGssbCxtPVwiXCIsbj1lLzEwLG89dGhpcy5waWNrZXIuZmluZChjKSxwPU1hdGguZmxvb3IoZi9lKSplLHE9cCs5Km4scj1NYXRoLmZsb29yKHRoaXMudmlld0RhdGUuZ2V0RnVsbFllYXIoKS9uKSpuLHM9YS5tYXAodGhpcy5kYXRlcyxmdW5jdGlvbihhKXtyZXR1cm4gTWF0aC5mbG9vcihhLmdldFVUQ0Z1bGxZZWFyKCkvbikqbn0pLHQ9cC1uO3Q8PXErbjt0Kz1uKWo9W2RdLGs9bnVsbCx0PT09cC1uP2oucHVzaChcIm9sZFwiKTp0PT09cStuJiZqLnB1c2goXCJuZXdcIiksYS5pbkFycmF5KHQscykhPT0tMSYmai5wdXNoKFwiYWN0aXZlXCIpLCh0PGd8fHQ+aCkmJmoucHVzaChcImRpc2FibGVkXCIpLHQ9PT1yJiZqLnB1c2goXCJmb2N1c2VkXCIpLGkhPT1hLm5vb3AmJihsPWkobmV3IERhdGUodCwwLDEpKSxsPT09Yj9sPXt9OlwiYm9vbGVhblwiPT10eXBlb2YgbD9sPXtlbmFibGVkOmx9Olwic3RyaW5nXCI9PXR5cGVvZiBsJiYobD17Y2xhc3NlczpsfSksbC5lbmFibGVkPT09ITEmJmoucHVzaChcImRpc2FibGVkXCIpLGwuY2xhc3NlcyYmKGo9ai5jb25jYXQobC5jbGFzc2VzLnNwbGl0KC9cXHMrLykpKSxsLnRvb2x0aXAmJihrPWwudG9vbHRpcCkpLG0rPSc8c3BhbiBjbGFzcz1cIicrai5qb2luKFwiIFwiKSsnXCInKyhrPycgdGl0bGU9XCInK2srJ1wiJzpcIlwiKStcIj5cIit0K1wiPC9zcGFuPlwiO28uZmluZChcIi5kYXRlcGlja2VyLXN3aXRjaFwiKS50ZXh0KHArXCItXCIrcSksby5maW5kKFwidGRcIikuaHRtbChtKX0sZmlsbDpmdW5jdGlvbigpe3ZhciBkLGUsZj1uZXcgRGF0ZSh0aGlzLnZpZXdEYXRlKSxnPWYuZ2V0VVRDRnVsbFllYXIoKSxoPWYuZ2V0VVRDTW9udGgoKSxpPXRoaXMuby5zdGFydERhdGUhPT0tKDEvMCk/dGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENGdWxsWWVhcigpOi0oMS8wKSxqPXRoaXMuby5zdGFydERhdGUhPT0tKDEvMCk/dGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENNb250aCgpOi0oMS8wKSxrPXRoaXMuby5lbmREYXRlIT09MS8wP3RoaXMuby5lbmREYXRlLmdldFVUQ0Z1bGxZZWFyKCk6MS8wLGw9dGhpcy5vLmVuZERhdGUhPT0xLzA/dGhpcy5vLmVuZERhdGUuZ2V0VVRDTW9udGgoKToxLzAsbT1xW3RoaXMuby5sYW5ndWFnZV0udG9kYXl8fHEuZW4udG9kYXl8fFwiXCIsbj1xW3RoaXMuby5sYW5ndWFnZV0uY2xlYXJ8fHEuZW4uY2xlYXJ8fFwiXCIsbz1xW3RoaXMuby5sYW5ndWFnZV0udGl0bGVGb3JtYXR8fHEuZW4udGl0bGVGb3JtYXQ7aWYoIWlzTmFOKGcpJiYhaXNOYU4oaCkpe3RoaXMucGlja2VyLmZpbmQoXCIuZGF0ZXBpY2tlci1kYXlzIC5kYXRlcGlja2VyLXN3aXRjaFwiKS50ZXh0KHIuZm9ybWF0RGF0ZShmLG8sdGhpcy5vLmxhbmd1YWdlKSksdGhpcy5waWNrZXIuZmluZChcInRmb290IC50b2RheVwiKS50ZXh0KG0pLmNzcyhcImRpc3BsYXlcIix0aGlzLm8udG9kYXlCdG49PT0hMHx8XCJsaW5rZWRcIj09PXRoaXMuby50b2RheUJ0bj9cInRhYmxlLWNlbGxcIjpcIm5vbmVcIiksdGhpcy5waWNrZXIuZmluZChcInRmb290IC5jbGVhclwiKS50ZXh0KG4pLmNzcyhcImRpc3BsYXlcIix0aGlzLm8uY2xlYXJCdG49PT0hMD9cInRhYmxlLWNlbGxcIjpcIm5vbmVcIiksdGhpcy5waWNrZXIuZmluZChcInRoZWFkIC5kYXRlcGlja2VyLXRpdGxlXCIpLnRleHQodGhpcy5vLnRpdGxlKS5jc3MoXCJkaXNwbGF5XCIsXCJzdHJpbmdcIj09dHlwZW9mIHRoaXMuby50aXRsZSYmXCJcIiE9PXRoaXMuby50aXRsZT9cInRhYmxlLWNlbGxcIjpcIm5vbmVcIiksdGhpcy51cGRhdGVOYXZBcnJvd3MoKSx0aGlzLmZpbGxNb250aHMoKTt2YXIgcD1jKGcsaCwwKSxzPXAuZ2V0VVRDRGF0ZSgpO3Auc2V0VVRDRGF0ZShzLShwLmdldFVUQ0RheSgpLXRoaXMuby53ZWVrU3RhcnQrNyklNyk7dmFyIHQ9bmV3IERhdGUocCk7cC5nZXRVVENGdWxsWWVhcigpPDEwMCYmdC5zZXRVVENGdWxsWWVhcihwLmdldFVUQ0Z1bGxZZWFyKCkpLHQuc2V0VVRDRGF0ZSh0LmdldFVUQ0RhdGUoKSs0MiksdD10LnZhbHVlT2YoKTtmb3IodmFyIHUsdix3PVtdO3AudmFsdWVPZigpPHQ7KXtpZih1PXAuZ2V0VVRDRGF5KCksdT09PXRoaXMuby53ZWVrU3RhcnQmJih3LnB1c2goXCI8dHI+XCIpLHRoaXMuby5jYWxlbmRhcldlZWtzKSl7dmFyIHg9bmV3IERhdGUoK3ArKHRoaXMuby53ZWVrU3RhcnQtdS03KSU3Kjg2NGU1KSx5PW5ldyBEYXRlKE51bWJlcih4KSsoMTEteC5nZXRVVENEYXkoKSklNyo4NjRlNSksej1uZXcgRGF0ZShOdW1iZXIoej1jKHkuZ2V0VVRDRnVsbFllYXIoKSwwLDEpKSsoMTEtei5nZXRVVENEYXkoKSklNyo4NjRlNSksQT0oeS16KS84NjRlNS83KzE7dy5wdXNoKCc8dGQgY2xhc3M9XCJjd1wiPicrQStcIjwvdGQ+XCIpfXY9dGhpcy5nZXRDbGFzc05hbWVzKHApLHYucHVzaChcImRheVwiKTt2YXIgQj1wLmdldFVUQ0RhdGUoKTt0aGlzLm8uYmVmb3JlU2hvd0RheSE9PWEubm9vcCYmKGU9dGhpcy5vLmJlZm9yZVNob3dEYXkodGhpcy5fdXRjX3RvX2xvY2FsKHApKSxlPT09Yj9lPXt9OlwiYm9vbGVhblwiPT10eXBlb2YgZT9lPXtlbmFibGVkOmV9Olwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT17Y2xhc3NlczplfSksZS5lbmFibGVkPT09ITEmJnYucHVzaChcImRpc2FibGVkXCIpLGUuY2xhc3NlcyYmKHY9di5jb25jYXQoZS5jbGFzc2VzLnNwbGl0KC9cXHMrLykpKSxlLnRvb2x0aXAmJihkPWUudG9vbHRpcCksZS5jb250ZW50JiYoQj1lLmNvbnRlbnQpKSx2PWEuaXNGdW5jdGlvbihhLnVuaXF1ZVNvcnQpP2EudW5pcXVlU29ydCh2KTphLnVuaXF1ZSh2KSx3LnB1c2goJzx0ZCBjbGFzcz1cIicrdi5qb2luKFwiIFwiKSsnXCInKyhkPycgdGl0bGU9XCInK2QrJ1wiJzpcIlwiKSsnIGRhdGEtZGF0ZT1cIicrcC5nZXRUaW1lKCkudG9TdHJpbmcoKSsnXCI+JytCK1wiPC90ZD5cIiksZD1udWxsLHU9PT10aGlzLm8ud2Vla0VuZCYmdy5wdXNoKFwiPC90cj5cIikscC5zZXRVVENEYXRlKHAuZ2V0VVRDRGF0ZSgpKzEpfXRoaXMucGlja2VyLmZpbmQoXCIuZGF0ZXBpY2tlci1kYXlzIHRib2R5XCIpLmh0bWwody5qb2luKFwiXCIpKTt2YXIgQz1xW3RoaXMuby5sYW5ndWFnZV0ubW9udGhzVGl0bGV8fHEuZW4ubW9udGhzVGl0bGV8fFwiTW9udGhzXCIsRD10aGlzLnBpY2tlci5maW5kKFwiLmRhdGVwaWNrZXItbW9udGhzXCIpLmZpbmQoXCIuZGF0ZXBpY2tlci1zd2l0Y2hcIikudGV4dCh0aGlzLm8ubWF4Vmlld01vZGU8Mj9DOmcpLmVuZCgpLmZpbmQoXCJ0Ym9keSBzcGFuXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO2lmKGEuZWFjaCh0aGlzLmRhdGVzLGZ1bmN0aW9uKGEsYil7Yi5nZXRVVENGdWxsWWVhcigpPT09ZyYmRC5lcShiLmdldFVUQ01vbnRoKCkpLmFkZENsYXNzKFwiYWN0aXZlXCIpfSksKGc8aXx8Zz5rKSYmRC5hZGRDbGFzcyhcImRpc2FibGVkXCIpLGc9PT1pJiZELnNsaWNlKDAsaikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSxnPT09ayYmRC5zbGljZShsKzEpLmFkZENsYXNzKFwiZGlzYWJsZWRcIiksdGhpcy5vLmJlZm9yZVNob3dNb250aCE9PWEubm9vcCl7dmFyIEU9dGhpczthLmVhY2goRCxmdW5jdGlvbihjLGQpe3ZhciBlPW5ldyBEYXRlKGcsYywxKSxmPUUuby5iZWZvcmVTaG93TW9udGgoZSk7Zj09PWI/Zj17fTpcImJvb2xlYW5cIj09dHlwZW9mIGY/Zj17ZW5hYmxlZDpmfTpcInN0cmluZ1wiPT10eXBlb2YgZiYmKGY9e2NsYXNzZXM6Zn0pLGYuZW5hYmxlZCE9PSExfHxhKGQpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIil8fGEoZCkuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSxmLmNsYXNzZXMmJmEoZCkuYWRkQ2xhc3MoZi5jbGFzc2VzKSxmLnRvb2x0aXAmJmEoZCkucHJvcChcInRpdGxlXCIsZi50b29sdGlwKX0pfXRoaXMuX2ZpbGxfeWVhcnNWaWV3KFwiLmRhdGVwaWNrZXIteWVhcnNcIixcInllYXJcIiwxMCxnLGksayx0aGlzLm8uYmVmb3JlU2hvd1llYXIpLHRoaXMuX2ZpbGxfeWVhcnNWaWV3KFwiLmRhdGVwaWNrZXItZGVjYWRlc1wiLFwiZGVjYWRlXCIsMTAwLGcsaSxrLHRoaXMuby5iZWZvcmVTaG93RGVjYWRlKSx0aGlzLl9maWxsX3llYXJzVmlldyhcIi5kYXRlcGlja2VyLWNlbnR1cmllc1wiLFwiY2VudHVyeVwiLDFlMyxnLGksayx0aGlzLm8uYmVmb3JlU2hvd0NlbnR1cnkpfX0sdXBkYXRlTmF2QXJyb3dzOmZ1bmN0aW9uKCl7aWYodGhpcy5fYWxsb3dfdXBkYXRlKXt2YXIgYSxiLGM9bmV3IERhdGUodGhpcy52aWV3RGF0ZSksZD1jLmdldFVUQ0Z1bGxZZWFyKCksZT1jLmdldFVUQ01vbnRoKCksZj10aGlzLm8uc3RhcnREYXRlIT09LSgxLzApP3RoaXMuby5zdGFydERhdGUuZ2V0VVRDRnVsbFllYXIoKTotKDEvMCksZz10aGlzLm8uc3RhcnREYXRlIT09LSgxLzApP3RoaXMuby5zdGFydERhdGUuZ2V0VVRDTW9udGgoKTotKDEvMCksaD10aGlzLm8uZW5kRGF0ZSE9PTEvMD90aGlzLm8uZW5kRGF0ZS5nZXRVVENGdWxsWWVhcigpOjEvMCxpPXRoaXMuby5lbmREYXRlIT09MS8wP3RoaXMuby5lbmREYXRlLmdldFVUQ01vbnRoKCk6MS8wLGo9MTtzd2l0Y2godGhpcy52aWV3TW9kZSl7Y2FzZSA0OmoqPTEwO2Nhc2UgMzpqKj0xMDtjYXNlIDI6aio9MTA7Y2FzZSAxOmE9TWF0aC5mbG9vcihkL2opKmo8ZixiPU1hdGguZmxvb3IoZC9qKSpqK2o+aDticmVhaztjYXNlIDA6YT1kPD1mJiZlPGcsYj1kPj1oJiZlPml9dGhpcy5waWNrZXIuZmluZChcIi5wcmV2XCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIixhKSx0aGlzLnBpY2tlci5maW5kKFwiLm5leHRcIikudG9nZ2xlQ2xhc3MoXCJkaXNhYmxlZFwiLGIpfX0sY2xpY2s6ZnVuY3Rpb24oYil7Yi5wcmV2ZW50RGVmYXVsdCgpLGIuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGUsZixnLGg7ZT1hKGIudGFyZ2V0KSxlLmhhc0NsYXNzKFwiZGF0ZXBpY2tlci1zd2l0Y2hcIikmJnRoaXMudmlld01vZGUhPT10aGlzLm8ubWF4Vmlld01vZGUmJnRoaXMuc2V0Vmlld01vZGUodGhpcy52aWV3TW9kZSsxKSxlLmhhc0NsYXNzKFwidG9kYXlcIikmJiFlLmhhc0NsYXNzKFwiZGF5XCIpJiYodGhpcy5zZXRWaWV3TW9kZSgwKSx0aGlzLl9zZXREYXRlKGQoKSxcImxpbmtlZFwiPT09dGhpcy5vLnRvZGF5QnRuP251bGw6XCJ2aWV3XCIpKSxlLmhhc0NsYXNzKFwiY2xlYXJcIikmJnRoaXMuY2xlYXJEYXRlcygpLGUuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKXx8KGUuaGFzQ2xhc3MoXCJtb250aFwiKXx8ZS5oYXNDbGFzcyhcInllYXJcIil8fGUuaGFzQ2xhc3MoXCJkZWNhZGVcIil8fGUuaGFzQ2xhc3MoXCJjZW50dXJ5XCIpKSYmKHRoaXMudmlld0RhdGUuc2V0VVRDRGF0ZSgxKSxmPTEsMT09PXRoaXMudmlld01vZGU/KGg9ZS5wYXJlbnQoKS5maW5kKFwic3BhblwiKS5pbmRleChlKSxnPXRoaXMudmlld0RhdGUuZ2V0VVRDRnVsbFllYXIoKSx0aGlzLnZpZXdEYXRlLnNldFVUQ01vbnRoKGgpKTooaD0wLGc9TnVtYmVyKGUudGV4dCgpKSx0aGlzLnZpZXdEYXRlLnNldFVUQ0Z1bGxZZWFyKGcpKSx0aGlzLl90cmlnZ2VyKHIudmlld01vZGVzW3RoaXMudmlld01vZGUtMV0uZSx0aGlzLnZpZXdEYXRlKSx0aGlzLnZpZXdNb2RlPT09dGhpcy5vLm1pblZpZXdNb2RlP3RoaXMuX3NldERhdGUoYyhnLGgsZikpOih0aGlzLnNldFZpZXdNb2RlKHRoaXMudmlld01vZGUtMSksdGhpcy5maWxsKCkpKSx0aGlzLnBpY2tlci5pcyhcIjp2aXNpYmxlXCIpJiZ0aGlzLl9mb2N1c2VkX2Zyb20mJnRoaXMuX2ZvY3VzZWRfZnJvbS5mb2N1cygpLGRlbGV0ZSB0aGlzLl9mb2N1c2VkX2Zyb219LGRheUNlbGxDbGljazpmdW5jdGlvbihiKXt2YXIgYz1hKGIuY3VycmVudFRhcmdldCksZD1jLmRhdGEoXCJkYXRlXCIpLGU9bmV3IERhdGUoZCk7dGhpcy5vLnVwZGF0ZVZpZXdEYXRlJiYoZS5nZXRVVENGdWxsWWVhcigpIT09dGhpcy52aWV3RGF0ZS5nZXRVVENGdWxsWWVhcigpJiZ0aGlzLl90cmlnZ2VyKFwiY2hhbmdlWWVhclwiLHRoaXMudmlld0RhdGUpLGUuZ2V0VVRDTW9udGgoKSE9PXRoaXMudmlld0RhdGUuZ2V0VVRDTW9udGgoKSYmdGhpcy5fdHJpZ2dlcihcImNoYW5nZU1vbnRoXCIsdGhpcy52aWV3RGF0ZSkpLHRoaXMuX3NldERhdGUoZSl9LG5hdkFycm93c0NsaWNrOmZ1bmN0aW9uKGIpe3ZhciBjPWEoYi5jdXJyZW50VGFyZ2V0KSxkPWMuaGFzQ2xhc3MoXCJwcmV2XCIpPy0xOjE7MCE9PXRoaXMudmlld01vZGUmJihkKj0xMipyLnZpZXdNb2Rlc1t0aGlzLnZpZXdNb2RlXS5uYXZTdGVwKSx0aGlzLnZpZXdEYXRlPXRoaXMubW92ZU1vbnRoKHRoaXMudmlld0RhdGUsZCksdGhpcy5fdHJpZ2dlcihyLnZpZXdNb2Rlc1t0aGlzLnZpZXdNb2RlXS5lLHRoaXMudmlld0RhdGUpLHRoaXMuZmlsbCgpfSxfdG9nZ2xlX211bHRpZGF0ZTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmRhdGVzLmNvbnRhaW5zKGEpO2lmKGF8fHRoaXMuZGF0ZXMuY2xlYXIoKSxiIT09LTE/KHRoaXMuby5tdWx0aWRhdGU9PT0hMHx8dGhpcy5vLm11bHRpZGF0ZT4xfHx0aGlzLm8udG9nZ2xlQWN0aXZlKSYmdGhpcy5kYXRlcy5yZW1vdmUoYik6dGhpcy5vLm11bHRpZGF0ZT09PSExPyh0aGlzLmRhdGVzLmNsZWFyKCksdGhpcy5kYXRlcy5wdXNoKGEpKTp0aGlzLmRhdGVzLnB1c2goYSksXCJudW1iZXJcIj09dHlwZW9mIHRoaXMuby5tdWx0aWRhdGUpZm9yKDt0aGlzLmRhdGVzLmxlbmd0aD50aGlzLm8ubXVsdGlkYXRlOyl0aGlzLmRhdGVzLnJlbW92ZSgwKX0sX3NldERhdGU6ZnVuY3Rpb24oYSxiKXtiJiZcImRhdGVcIiE9PWJ8fHRoaXMuX3RvZ2dsZV9tdWx0aWRhdGUoYSYmbmV3IERhdGUoYSkpLCghYiYmdGhpcy5vLnVwZGF0ZVZpZXdEYXRlfHxcInZpZXdcIj09PWIpJiYodGhpcy52aWV3RGF0ZT1hJiZuZXcgRGF0ZShhKSksdGhpcy5maWxsKCksdGhpcy5zZXRWYWx1ZSgpLGImJlwidmlld1wiPT09Ynx8dGhpcy5fdHJpZ2dlcihcImNoYW5nZURhdGVcIiksdGhpcy5pbnB1dEZpZWxkLnRyaWdnZXIoXCJjaGFuZ2VcIiksIXRoaXMuby5hdXRvY2xvc2V8fGImJlwiZGF0ZVwiIT09Ynx8dGhpcy5oaWRlKCl9LG1vdmVEYXk6ZnVuY3Rpb24oYSxiKXt2YXIgYz1uZXcgRGF0ZShhKTtyZXR1cm4gYy5zZXRVVENEYXRlKGEuZ2V0VVRDRGF0ZSgpK2IpLGN9LG1vdmVXZWVrOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW92ZURheShhLDcqYil9LG1vdmVNb250aDpmdW5jdGlvbihhLGIpe2lmKCFnKGEpKXJldHVybiB0aGlzLm8uZGVmYXVsdFZpZXdEYXRlO2lmKCFiKXJldHVybiBhO3ZhciBjLGQsZT1uZXcgRGF0ZShhLnZhbHVlT2YoKSksZj1lLmdldFVUQ0RhdGUoKSxoPWUuZ2V0VVRDTW9udGgoKSxpPU1hdGguYWJzKGIpO2lmKGI9Yj4wPzE6LTEsMT09PWkpZD1iPT09LTE/ZnVuY3Rpb24oKXtyZXR1cm4gZS5nZXRVVENNb250aCgpPT09aH06ZnVuY3Rpb24oKXtyZXR1cm4gZS5nZXRVVENNb250aCgpIT09Y30sYz1oK2IsZS5zZXRVVENNb250aChjKSxjPShjKzEyKSUxMjtlbHNle2Zvcih2YXIgaj0wO2o8aTtqKyspZT10aGlzLm1vdmVNb250aChlLGIpO2M9ZS5nZXRVVENNb250aCgpLGUuc2V0VVRDRGF0ZShmKSxkPWZ1bmN0aW9uKCl7cmV0dXJuIGMhPT1lLmdldFVUQ01vbnRoKCl9fWZvcig7ZCgpOyllLnNldFVUQ0RhdGUoLS1mKSxlLnNldFVUQ01vbnRoKGMpO3JldHVybiBlfSxtb3ZlWWVhcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdmVNb250aChhLDEyKmIpfSxtb3ZlQXZhaWxhYmxlRGF0ZTpmdW5jdGlvbihhLGIsYyl7ZG97aWYoYT10aGlzW2NdKGEsYiksIXRoaXMuZGF0ZVdpdGhpblJhbmdlKGEpKXJldHVybiExO2M9XCJtb3ZlRGF5XCJ9d2hpbGUodGhpcy5kYXRlSXNEaXNhYmxlZChhKSk7cmV0dXJuIGF9LHdlZWtPZkRhdGVJc0Rpc2FibGVkOmZ1bmN0aW9uKGIpe3JldHVybiBhLmluQXJyYXkoYi5nZXRVVENEYXkoKSx0aGlzLm8uZGF5c09mV2Vla0Rpc2FibGVkKSE9PS0xfSxkYXRlSXNEaXNhYmxlZDpmdW5jdGlvbihiKXtyZXR1cm4gdGhpcy53ZWVrT2ZEYXRlSXNEaXNhYmxlZChiKXx8YS5ncmVwKHRoaXMuby5kYXRlc0Rpc2FibGVkLGZ1bmN0aW9uKGEpe3JldHVybiBlKGIsYSl9KS5sZW5ndGg+MH0sZGF0ZVdpdGhpblJhbmdlOmZ1bmN0aW9uKGEpe3JldHVybiBhPj10aGlzLm8uc3RhcnREYXRlJiZhPD10aGlzLm8uZW5kRGF0ZX0sa2V5ZG93bjpmdW5jdGlvbihhKXtpZighdGhpcy5waWNrZXIuaXMoXCI6dmlzaWJsZVwiKSlyZXR1cm4gdm9pZCg0MCE9PWEua2V5Q29kZSYmMjchPT1hLmtleUNvZGV8fCh0aGlzLnNob3coKSxhLnN0b3BQcm9wYWdhdGlvbigpKSk7dmFyIGIsYyxkPSExLGU9dGhpcy5mb2N1c0RhdGV8fHRoaXMudmlld0RhdGU7c3dpdGNoKGEua2V5Q29kZSl7Y2FzZSAyNzp0aGlzLmZvY3VzRGF0ZT8odGhpcy5mb2N1c0RhdGU9bnVsbCx0aGlzLnZpZXdEYXRlPXRoaXMuZGF0ZXMuZ2V0KC0xKXx8dGhpcy52aWV3RGF0ZSx0aGlzLmZpbGwoKSk6dGhpcy5oaWRlKCksYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCk7YnJlYWs7Y2FzZSAzNzpjYXNlIDM4OmNhc2UgMzk6Y2FzZSA0MDppZighdGhpcy5vLmtleWJvYXJkTmF2aWdhdGlvbnx8Nz09PXRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQubGVuZ3RoKWJyZWFrO2I9Mzc9PT1hLmtleUNvZGV8fDM4PT09YS5rZXlDb2RlPy0xOjEsMD09PXRoaXMudmlld01vZGU/YS5jdHJsS2V5PyhjPXRoaXMubW92ZUF2YWlsYWJsZURhdGUoZSxiLFwibW92ZVllYXJcIiksYyYmdGhpcy5fdHJpZ2dlcihcImNoYW5nZVllYXJcIix0aGlzLnZpZXdEYXRlKSk6YS5zaGlmdEtleT8oYz10aGlzLm1vdmVBdmFpbGFibGVEYXRlKGUsYixcIm1vdmVNb250aFwiKSxjJiZ0aGlzLl90cmlnZ2VyKFwiY2hhbmdlTW9udGhcIix0aGlzLnZpZXdEYXRlKSk6Mzc9PT1hLmtleUNvZGV8fDM5PT09YS5rZXlDb2RlP2M9dGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShlLGIsXCJtb3ZlRGF5XCIpOnRoaXMud2Vla09mRGF0ZUlzRGlzYWJsZWQoZSl8fChjPXRoaXMubW92ZUF2YWlsYWJsZURhdGUoZSxiLFwibW92ZVdlZWtcIikpOjE9PT10aGlzLnZpZXdNb2RlPygzOCE9PWEua2V5Q29kZSYmNDAhPT1hLmtleUNvZGV8fChiKj00KSxjPXRoaXMubW92ZUF2YWlsYWJsZURhdGUoZSxiLFwibW92ZU1vbnRoXCIpKToyPT09dGhpcy52aWV3TW9kZSYmKDM4IT09YS5rZXlDb2RlJiY0MCE9PWEua2V5Q29kZXx8KGIqPTQpLGM9dGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShlLGIsXCJtb3ZlWWVhclwiKSksYyYmKHRoaXMuZm9jdXNEYXRlPXRoaXMudmlld0RhdGU9Yyx0aGlzLnNldFZhbHVlKCksdGhpcy5maWxsKCksYS5wcmV2ZW50RGVmYXVsdCgpKTticmVhaztjYXNlIDEzOmlmKCF0aGlzLm8uZm9yY2VQYXJzZSlicmVhaztlPXRoaXMuZm9jdXNEYXRlfHx0aGlzLmRhdGVzLmdldCgtMSl8fHRoaXMudmlld0RhdGUsdGhpcy5vLmtleWJvYXJkTmF2aWdhdGlvbiYmKHRoaXMuX3RvZ2dsZV9tdWx0aWRhdGUoZSksZD0hMCksdGhpcy5mb2N1c0RhdGU9bnVsbCx0aGlzLnZpZXdEYXRlPXRoaXMuZGF0ZXMuZ2V0KC0xKXx8dGhpcy52aWV3RGF0ZSx0aGlzLnNldFZhbHVlKCksdGhpcy5maWxsKCksdGhpcy5waWNrZXIuaXMoXCI6dmlzaWJsZVwiKSYmKGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMuby5hdXRvY2xvc2UmJnRoaXMuaGlkZSgpKTticmVhaztjYXNlIDk6dGhpcy5mb2N1c0RhdGU9bnVsbCx0aGlzLnZpZXdEYXRlPXRoaXMuZGF0ZXMuZ2V0KC0xKXx8dGhpcy52aWV3RGF0ZSx0aGlzLmZpbGwoKSx0aGlzLmhpZGUoKX1kJiYodGhpcy5kYXRlcy5sZW5ndGg/dGhpcy5fdHJpZ2dlcihcImNoYW5nZURhdGVcIik6dGhpcy5fdHJpZ2dlcihcImNsZWFyRGF0ZVwiKSx0aGlzLmlucHV0RmllbGQudHJpZ2dlcihcImNoYW5nZVwiKSl9LHNldFZpZXdNb2RlOmZ1bmN0aW9uKGEpe3RoaXMudmlld01vZGU9YSx0aGlzLnBpY2tlci5jaGlsZHJlbihcImRpdlwiKS5oaWRlKCkuZmlsdGVyKFwiLmRhdGVwaWNrZXItXCIrci52aWV3TW9kZXNbdGhpcy52aWV3TW9kZV0uY2xzTmFtZSkuc2hvdygpLHRoaXMudXBkYXRlTmF2QXJyb3dzKCksdGhpcy5fdHJpZ2dlcihcImNoYW5nZVZpZXdNb2RlXCIsbmV3IERhdGUodGhpcy52aWV3RGF0ZSkpfX07dmFyIGw9ZnVuY3Rpb24oYixjKXthLmRhdGEoYixcImRhdGVwaWNrZXJcIix0aGlzKSx0aGlzLmVsZW1lbnQ9YShiKSx0aGlzLmlucHV0cz1hLm1hcChjLmlucHV0cyxmdW5jdGlvbihhKXtyZXR1cm4gYS5qcXVlcnk/YVswXTphfSksZGVsZXRlIGMuaW5wdXRzLHRoaXMua2VlcEVtcHR5VmFsdWVzPWMua2VlcEVtcHR5VmFsdWVzLGRlbGV0ZSBjLmtlZXBFbXB0eVZhbHVlcyxuLmNhbGwoYSh0aGlzLmlucHV0cyksYykub24oXCJjaGFuZ2VEYXRlXCIsYS5wcm94eSh0aGlzLmRhdGVVcGRhdGVkLHRoaXMpKSx0aGlzLnBpY2tlcnM9YS5tYXAodGhpcy5pbnB1dHMsZnVuY3Rpb24oYil7cmV0dXJuIGEuZGF0YShiLFwiZGF0ZXBpY2tlclwiKX0pLHRoaXMudXBkYXRlRGF0ZXMoKX07bC5wcm90b3R5cGU9e3VwZGF0ZURhdGVzOmZ1bmN0aW9uKCl7dGhpcy5kYXRlcz1hLm1hcCh0aGlzLnBpY2tlcnMsZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0VVRDRGF0ZSgpfSksdGhpcy51cGRhdGVSYW5nZXMoKX0sdXBkYXRlUmFuZ2VzOmZ1bmN0aW9uKCl7dmFyIGI9YS5tYXAodGhpcy5kYXRlcyxmdW5jdGlvbihhKXtyZXR1cm4gYS52YWx1ZU9mKCl9KTthLmVhY2godGhpcy5waWNrZXJzLGZ1bmN0aW9uKGEsYyl7Yy5zZXRSYW5nZShiKX0pfSxjbGVhckRhdGVzOmZ1bmN0aW9uKCl7YS5lYWNoKHRoaXMucGlja2VycyxmdW5jdGlvbihhLGIpe2IuY2xlYXJEYXRlcygpfSl9LGRhdGVVcGRhdGVkOmZ1bmN0aW9uKGMpe2lmKCF0aGlzLnVwZGF0aW5nKXt0aGlzLnVwZGF0aW5nPSEwO3ZhciBkPWEuZGF0YShjLnRhcmdldCxcImRhdGVwaWNrZXJcIik7aWYoZCE9PWIpe3ZhciBlPWQuZ2V0VVRDRGF0ZSgpLGY9dGhpcy5rZWVwRW1wdHlWYWx1ZXMsZz1hLmluQXJyYXkoYy50YXJnZXQsdGhpcy5pbnB1dHMpLGg9Zy0xLGk9ZysxLGo9dGhpcy5pbnB1dHMubGVuZ3RoO2lmKGchPT0tMSl7aWYoYS5lYWNoKHRoaXMucGlja2VycyxmdW5jdGlvbihhLGIpe2IuZ2V0VVRDRGF0ZSgpfHxiIT09ZCYmZnx8Yi5zZXRVVENEYXRlKGUpfSksZTx0aGlzLmRhdGVzW2hdKWZvcig7aD49MCYmZTx0aGlzLmRhdGVzW2hdOyl0aGlzLnBpY2tlcnNbaC0tXS5zZXRVVENEYXRlKGUpO2Vsc2UgaWYoZT50aGlzLmRhdGVzW2ldKWZvcig7aTxqJiZlPnRoaXMuZGF0ZXNbaV07KXRoaXMucGlja2Vyc1tpKytdLnNldFVUQ0RhdGUoZSk7dGhpcy51cGRhdGVEYXRlcygpLGRlbGV0ZSB0aGlzLnVwZGF0aW5nfX19fSxkZXN0cm95OmZ1bmN0aW9uKCl7YS5tYXAodGhpcy5waWNrZXJzLGZ1bmN0aW9uKGEpe2EuZGVzdHJveSgpfSksYSh0aGlzLmlucHV0cykub2ZmKFwiY2hhbmdlRGF0ZVwiLHRoaXMuZGF0ZVVwZGF0ZWQpLGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGVwaWNrZXJ9LHJlbW92ZTpmKFwiZGVzdHJveVwiLFwiTWV0aG9kIGByZW1vdmVgIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDIuMC4gVXNlIGBkZXN0cm95YCBpbnN0ZWFkXCIpfTt2YXIgbT1hLmZuLmRhdGVwaWNrZXIsbj1mdW5jdGlvbihjKXt2YXIgZD1BcnJheS5hcHBseShudWxsLGFyZ3VtZW50cyk7ZC5zaGlmdCgpO3ZhciBlO2lmKHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyksZj1iLmRhdGEoXCJkYXRlcGlja2VyXCIpLGc9XCJvYmplY3RcIj09dHlwZW9mIGMmJmM7aWYoIWYpe3ZhciBqPWgodGhpcyxcImRhdGVcIiksbT1hLmV4dGVuZCh7fSxvLGosZyksbj1pKG0ubGFuZ3VhZ2UpLHA9YS5leHRlbmQoe30sbyxuLGosZyk7Yi5oYXNDbGFzcyhcImlucHV0LWRhdGVyYW5nZVwiKXx8cC5pbnB1dHM/KGEuZXh0ZW5kKHAse2lucHV0czpwLmlucHV0c3x8Yi5maW5kKFwiaW5wdXRcIikudG9BcnJheSgpfSksZj1uZXcgbCh0aGlzLHApKTpmPW5ldyBrKHRoaXMscCksYi5kYXRhKFwiZGF0ZXBpY2tlclwiLGYpfVwic3RyaW5nXCI9PXR5cGVvZiBjJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBmW2NdJiYoZT1mW2NdLmFwcGx5KGYsZCkpfSksZT09PWJ8fGUgaW5zdGFuY2VvZiBrfHxlIGluc3RhbmNlb2YgbClyZXR1cm4gdGhpcztpZih0aGlzLmxlbmd0aD4xKXRocm93IG5ldyBFcnJvcihcIlVzaW5nIG9ubHkgYWxsb3dlZCBmb3IgdGhlIGNvbGxlY3Rpb24gb2YgYSBzaW5nbGUgZWxlbWVudCAoXCIrYytcIiBmdW5jdGlvbilcIik7cmV0dXJuIGV9O2EuZm4uZGF0ZXBpY2tlcj1uO3ZhciBvPWEuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cz17YXNzdW1lTmVhcmJ5WWVhcjohMSxhdXRvY2xvc2U6ITEsYmVmb3JlU2hvd0RheTphLm5vb3AsYmVmb3JlU2hvd01vbnRoOmEubm9vcCxiZWZvcmVTaG93WWVhcjphLm5vb3AsYmVmb3JlU2hvd0RlY2FkZTphLm5vb3AsYmVmb3JlU2hvd0NlbnR1cnk6YS5ub29wLGNhbGVuZGFyV2Vla3M6ITEsY2xlYXJCdG46ITEsdG9nZ2xlQWN0aXZlOiExLGRheXNPZldlZWtEaXNhYmxlZDpbXSxkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6W10sZGF0ZXNEaXNhYmxlZDpbXSxlbmREYXRlOjEvMCxmb3JjZVBhcnNlOiEwLGZvcm1hdDpcIm1tL2RkL3l5eXlcIixrZWVwRW1wdHlWYWx1ZXM6ITEsa2V5Ym9hcmROYXZpZ2F0aW9uOiEwLGxhbmd1YWdlOlwiZW5cIixtaW5WaWV3TW9kZTowLG1heFZpZXdNb2RlOjQsbXVsdGlkYXRlOiExLG11bHRpZGF0ZVNlcGFyYXRvcjpcIixcIixvcmllbnRhdGlvbjpcImF1dG9cIixydGw6ITEsc3RhcnREYXRlOi0oMS8wKSxzdGFydFZpZXc6MCx0b2RheUJ0bjohMSx0b2RheUhpZ2hsaWdodDohMSx1cGRhdGVWaWV3RGF0ZTohMCx3ZWVrU3RhcnQ6MCxkaXNhYmxlVG91Y2hLZXlib2FyZDohMSxlbmFibGVPblJlYWRvbmx5OiEwLHNob3dPbkZvY3VzOiEwLHpJbmRleE9mZnNldDoxMCxjb250YWluZXI6XCJib2R5XCIsaW1tZWRpYXRlVXBkYXRlczohMSx0aXRsZTpcIlwiLHRlbXBsYXRlczp7bGVmdEFycm93OlwiJiN4MDBBQjtcIixyaWdodEFycm93OlwiJiN4MDBCQjtcIn0sc2hvd1dlZWtEYXlzOiEwfSxwPWEuZm4uZGF0ZXBpY2tlci5sb2NhbGVfb3B0cz1bXCJmb3JtYXRcIixcInJ0bFwiLFwid2Vla1N0YXJ0XCJdO2EuZm4uZGF0ZXBpY2tlci5Db25zdHJ1Y3Rvcj1rO3ZhciBxPWEuZm4uZGF0ZXBpY2tlci5kYXRlcz17ZW46e2RheXM6W1wiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl0sZGF5c1Nob3J0OltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSxkYXlzTWluOltcIlN1XCIsXCJNb1wiLFwiVHVcIixcIldlXCIsXCJUaFwiLFwiRnJcIixcIlNhXCJdLG1vbnRoczpbXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl0sbW9udGhzU2hvcnQ6W1wiSmFuXCIsXCJGZWJcIixcIk1hclwiLFwiQXByXCIsXCJNYXlcIixcIkp1blwiLFwiSnVsXCIsXCJBdWdcIixcIlNlcFwiLFwiT2N0XCIsXCJOb3ZcIixcIkRlY1wiXSx0b2RheTpcIlRvZGF5XCIsY2xlYXI6XCJDbGVhclwiLHRpdGxlRm9ybWF0OlwiTU0geXl5eVwifX0scj17dmlld01vZGVzOlt7bmFtZXM6W1wiZGF5c1wiLFwibW9udGhcIl0sY2xzTmFtZTpcImRheXNcIixlOlwiY2hhbmdlTW9udGhcIn0se25hbWVzOltcIm1vbnRoc1wiLFwieWVhclwiXSxjbHNOYW1lOlwibW9udGhzXCIsZTpcImNoYW5nZVllYXJcIixuYXZTdGVwOjF9LHtuYW1lczpbXCJ5ZWFyc1wiLFwiZGVjYWRlXCJdLGNsc05hbWU6XCJ5ZWFyc1wiLGU6XCJjaGFuZ2VEZWNhZGVcIixuYXZTdGVwOjEwfSx7bmFtZXM6W1wiZGVjYWRlc1wiLFwiY2VudHVyeVwiXSxjbHNOYW1lOlwiZGVjYWRlc1wiLGU6XCJjaGFuZ2VDZW50dXJ5XCIsbmF2U3RlcDoxMDB9LHtuYW1lczpbXCJjZW50dXJpZXNcIixcIm1pbGxlbm5pdW1cIl0sY2xzTmFtZTpcImNlbnR1cmllc1wiLGU6XCJjaGFuZ2VNaWxsZW5uaXVtXCIsbmF2U3RlcDoxZTN9XSx2YWxpZFBhcnRzOi9kZD98REQ/fG1tP3xNTT98eXkoPzp5eSk/L2csbm9ucHVuY3R1YXRpb246L1teIC1cXC86LUBcXHU1ZTc0XFx1NjcwOFxcdTY1ZTVcXFstYHstflxcdFxcblxccl0rL2cscGFyc2VGb3JtYXQ6ZnVuY3Rpb24oYSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgYS50b1ZhbHVlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnRvRGlzcGxheSlyZXR1cm4gYTt2YXIgYj1hLnJlcGxhY2UodGhpcy52YWxpZFBhcnRzLFwiXFwwXCIpLnNwbGl0KFwiXFwwXCIpLGM9YS5tYXRjaCh0aGlzLnZhbGlkUGFydHMpO2lmKCFifHwhYi5sZW5ndGh8fCFjfHwwPT09Yy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkYXRlIGZvcm1hdC5cIik7cmV0dXJue3NlcGFyYXRvcnM6YixwYXJ0czpjfX0scGFyc2VEYXRlOmZ1bmN0aW9uKGMsZSxmLGcpe2Z1bmN0aW9uIGgoYSxiKXtyZXR1cm4gYj09PSEwJiYoYj0xMCksYTwxMDAmJihhKz0yZTMsYT4obmV3IERhdGUpLmdldEZ1bGxZZWFyKCkrYiYmKGEtPTEwMCkpLGF9ZnVuY3Rpb24gaSgpe3ZhciBhPXRoaXMuc2xpY2UoMCxqW25dLmxlbmd0aCksYj1qW25dLnNsaWNlKDAsYS5sZW5ndGgpO3JldHVybiBhLnRvTG93ZXJDYXNlKCk9PT1iLnRvTG93ZXJDYXNlKCl9aWYoIWMpcmV0dXJuIGI7aWYoYyBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIGM7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPXIucGFyc2VGb3JtYXQoZSkpLGUudG9WYWx1ZSlyZXR1cm4gZS50b1ZhbHVlKGMsZSxmKTt2YXIgaixsLG0sbixvLHA9e2Q6XCJtb3ZlRGF5XCIsbTpcIm1vdmVNb250aFwiLHc6XCJtb3ZlV2Vla1wiLHk6XCJtb3ZlWWVhclwifSxzPXt5ZXN0ZXJkYXk6XCItMWRcIix0b2RheTpcIiswZFwiLHRvbW9ycm93OlwiKzFkXCJ9O2lmKGMgaW4gcyYmKGM9c1tjXSksL15bXFwtK11cXGQrW2Rtd3ldKFtcXHMsXStbXFwtK11cXGQrW2Rtd3ldKSokL2kudGVzdChjKSl7Zm9yKGo9Yy5tYXRjaCgvKFtcXC0rXVxcZCspKFtkbXd5XSkvZ2kpLGM9bmV3IERhdGUsbj0wO248ai5sZW5ndGg7bisrKWw9altuXS5tYXRjaCgvKFtcXC0rXVxcZCspKFtkbXd5XSkvaSksbT1OdW1iZXIobFsxXSksbz1wW2xbMl0udG9Mb3dlckNhc2UoKV0sYz1rLnByb3RvdHlwZVtvXShjLG0pO3JldHVybiBrLnByb3RvdHlwZS5femVyb191dGNfdGltZShjKX1qPWMmJmMubWF0Y2godGhpcy5ub25wdW5jdHVhdGlvbil8fFtdO3ZhciB0LHUsdj17fSx3PVtcInl5eXlcIixcInl5XCIsXCJNXCIsXCJNTVwiLFwibVwiLFwibW1cIixcImRcIixcImRkXCJdLHg9e3l5eXk6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5zZXRVVENGdWxsWWVhcihnP2goYixnKTpiKX0sbTpmdW5jdGlvbihhLGIpe2lmKGlzTmFOKGEpKXJldHVybiBhO2ZvcihiLT0xO2I8MDspYis9MTI7Zm9yKGIlPTEyLGEuc2V0VVRDTW9udGgoYik7YS5nZXRVVENNb250aCgpIT09YjspYS5zZXRVVENEYXRlKGEuZ2V0VVRDRGF0ZSgpLTEpO3JldHVybiBhfSxkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuc2V0VVRDRGF0ZShiKX19O3gueXk9eC55eXl5LHguTT14Lk1NPXgubW09eC5tLHguZGQ9eC5kLGM9ZCgpO3ZhciB5PWUucGFydHMuc2xpY2UoKTtpZihqLmxlbmd0aCE9PXkubGVuZ3RoJiYoeT1hKHkpLmZpbHRlcihmdW5jdGlvbihiLGMpe3JldHVybiBhLmluQXJyYXkoYyx3KSE9PS0xfSkudG9BcnJheSgpKSxqLmxlbmd0aD09PXkubGVuZ3RoKXt2YXIgejtmb3Iobj0wLHo9eS5sZW5ndGg7bjx6O24rKyl7aWYodD1wYXJzZUludChqW25dLDEwKSxsPXlbbl0saXNOYU4odCkpc3dpdGNoKGwpe2Nhc2VcIk1NXCI6dT1hKHFbZl0ubW9udGhzKS5maWx0ZXIoaSksdD1hLmluQXJyYXkodVswXSxxW2ZdLm1vbnRocykrMTticmVhaztjYXNlXCJNXCI6dT1hKHFbZl0ubW9udGhzU2hvcnQpLmZpbHRlcihpKSx0PWEuaW5BcnJheSh1WzBdLHFbZl0ubW9udGhzU2hvcnQpKzF9dltsXT10fXZhciBBLEI7Zm9yKG49MDtuPHcubGVuZ3RoO24rKylCPXdbbl0sQiBpbiB2JiYhaXNOYU4odltCXSkmJihBPW5ldyBEYXRlKGMpLHhbQl0oQSx2W0JdKSxpc05hTihBKXx8KGM9QSkpfXJldHVybiBjfSxmb3JtYXREYXRlOmZ1bmN0aW9uKGIsYyxkKXtpZighYilyZXR1cm5cIlwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBjJiYoYz1yLnBhcnNlRm9ybWF0KGMpKSxjLnRvRGlzcGxheSlyZXR1cm4gYy50b0Rpc3BsYXkoYixjLGQpO3ZhciBlPXtkOmIuZ2V0VVRDRGF0ZSgpLEQ6cVtkXS5kYXlzU2hvcnRbYi5nZXRVVENEYXkoKV0sREQ6cVtkXS5kYXlzW2IuZ2V0VVRDRGF5KCldLG06Yi5nZXRVVENNb250aCgpKzEsTTpxW2RdLm1vbnRoc1Nob3J0W2IuZ2V0VVRDTW9udGgoKV0sTU06cVtkXS5tb250aHNbYi5nZXRVVENNb250aCgpXSx5eTpiLmdldFVUQ0Z1bGxZZWFyKCkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMikseXl5eTpiLmdldFVUQ0Z1bGxZZWFyKCl9O2UuZGQ9KGUuZDwxMD9cIjBcIjpcIlwiKStlLmQsZS5tbT0oZS5tPDEwP1wiMFwiOlwiXCIpK2UubSxiPVtdO2Zvcih2YXIgZj1hLmV4dGVuZChbXSxjLnNlcGFyYXRvcnMpLGc9MCxoPWMucGFydHMubGVuZ3RoO2c8PWg7ZysrKWYubGVuZ3RoJiZiLnB1c2goZi5zaGlmdCgpKSxiLnB1c2goZVtjLnBhcnRzW2ddXSk7cmV0dXJuIGIuam9pbihcIlwiKX0saGVhZFRlbXBsYXRlOic8dGhlYWQ+PHRyPjx0aCBjb2xzcGFuPVwiN1wiIGNsYXNzPVwiZGF0ZXBpY2tlci10aXRsZVwiPjwvdGg+PC90cj48dHI+PHRoIGNsYXNzPVwicHJldlwiPicrby50ZW1wbGF0ZXMubGVmdEFycm93Kyc8L3RoPjx0aCBjb2xzcGFuPVwiNVwiIGNsYXNzPVwiZGF0ZXBpY2tlci1zd2l0Y2hcIj48L3RoPjx0aCBjbGFzcz1cIm5leHRcIj4nK28udGVtcGxhdGVzLnJpZ2h0QXJyb3crXCI8L3RoPjwvdHI+PC90aGVhZD5cIixcbmNvbnRUZW1wbGF0ZTonPHRib2R5Pjx0cj48dGQgY29sc3Bhbj1cIjdcIj48L3RkPjwvdHI+PC90Ym9keT4nLGZvb3RUZW1wbGF0ZTonPHRmb290Pjx0cj48dGggY29sc3Bhbj1cIjdcIiBjbGFzcz1cInRvZGF5XCI+PC90aD48L3RyPjx0cj48dGggY29sc3Bhbj1cIjdcIiBjbGFzcz1cImNsZWFyXCI+PC90aD48L3RyPjwvdGZvb3Q+J307ci50ZW1wbGF0ZT0nPGRpdiBjbGFzcz1cImRhdGVwaWNrZXJcIj48ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1kYXlzXCI+PHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+JytyLmhlYWRUZW1wbGF0ZStcIjx0Ym9keT48L3Rib2R5PlwiK3IuZm9vdFRlbXBsYXRlKyc8L3RhYmxlPjwvZGl2PjxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLW1vbnRoc1wiPjx0YWJsZSBjbGFzcz1cInRhYmxlLWNvbmRlbnNlZFwiPicrci5oZWFkVGVtcGxhdGUrci5jb250VGVtcGxhdGUrci5mb290VGVtcGxhdGUrJzwvdGFibGU+PC9kaXY+PGRpdiBjbGFzcz1cImRhdGVwaWNrZXIteWVhcnNcIj48dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK3IuaGVhZFRlbXBsYXRlK3IuY29udFRlbXBsYXRlK3IuZm9vdFRlbXBsYXRlKyc8L3RhYmxlPjwvZGl2PjxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWRlY2FkZXNcIj48dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK3IuaGVhZFRlbXBsYXRlK3IuY29udFRlbXBsYXRlK3IuZm9vdFRlbXBsYXRlKyc8L3RhYmxlPjwvZGl2PjxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWNlbnR1cmllc1wiPjx0YWJsZSBjbGFzcz1cInRhYmxlLWNvbmRlbnNlZFwiPicrci5oZWFkVGVtcGxhdGUrci5jb250VGVtcGxhdGUrci5mb290VGVtcGxhdGUrXCI8L3RhYmxlPjwvZGl2PjwvZGl2PlwiLGEuZm4uZGF0ZXBpY2tlci5EUEdsb2JhbD1yLGEuZm4uZGF0ZXBpY2tlci5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uZGF0ZXBpY2tlcj1tLHRoaXN9LGEuZm4uZGF0ZXBpY2tlci52ZXJzaW9uPVwiMS44LjBcIixhLmZuLmRhdGVwaWNrZXIuZGVwcmVjYXRlZD1mdW5jdGlvbihhKXt2YXIgYj13aW5kb3cuY29uc29sZTtiJiZiLndhcm4mJmIud2FybihcIkRFUFJFQ0FURUQ6IFwiK2EpfSxhKGRvY3VtZW50KS5vbihcImZvY3VzLmRhdGVwaWNrZXIuZGF0YS1hcGkgY2xpY2suZGF0ZXBpY2tlci5kYXRhLWFwaVwiLCdbZGF0YS1wcm92aWRlPVwiZGF0ZXBpY2tlclwiXScsZnVuY3Rpb24oYil7dmFyIGM9YSh0aGlzKTtjLmRhdGEoXCJkYXRlcGlja2VyXCIpfHwoYi5wcmV2ZW50RGVmYXVsdCgpLG4uY2FsbChjLFwic2hvd1wiKSl9KSxhKGZ1bmN0aW9uKCl7bi5jYWxsKGEoJ1tkYXRhLXByb3ZpZGU9XCJkYXRlcGlja2VyLWlubGluZVwiXScpKX0pfSk7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2xvY2FsZXMvYm9vdHN0cmFwLWRhdGVwaWNrZXIuZnIubWluLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTcvMDgvMjAyMCAxNDoyMFxuXG4hZnVuY3Rpb24oYSl7YS5mbi5kYXRlcGlja2VyLmRhdGVzLmZyPXtkYXlzOltcImRpbWFuY2hlXCIsXCJsdW5kaVwiLFwibWFyZGlcIixcIm1lcmNyZWRpXCIsXCJqZXVkaVwiLFwidmVuZHJlZGlcIixcInNhbWVkaVwiXSxkYXlzU2hvcnQ6W1wiZGltLlwiLFwibHVuLlwiLFwibWFyLlwiLFwibWVyLlwiLFwiamV1LlwiLFwidmVuLlwiLFwic2FtLlwiXSxkYXlzTWluOltcImRcIixcImxcIixcIm1hXCIsXCJtZVwiLFwialwiLFwidlwiLFwic1wiXSxtb250aHM6W1wiamFudmllclwiLFwiZsOpdnJpZXJcIixcIm1hcnNcIixcImF2cmlsXCIsXCJtYWlcIixcImp1aW5cIixcImp1aWxsZXRcIixcImFvw7t0XCIsXCJzZXB0ZW1icmVcIixcIm9jdG9icmVcIixcIm5vdmVtYnJlXCIsXCJkw6ljZW1icmVcIl0sbW9udGhzU2hvcnQ6W1wiamFudi5cIixcImbDqXZyLlwiLFwibWFyc1wiLFwiYXZyaWxcIixcIm1haVwiLFwianVpblwiLFwianVpbC5cIixcImFvw7t0XCIsXCJzZXB0LlwiLFwib2N0LlwiLFwibm92LlwiLFwiZMOpYy5cIl0sdG9kYXk6XCJBdWpvdXJkJ2h1aVwiLG1vbnRoc1RpdGxlOlwiTW9pc1wiLGNsZWFyOlwiRWZmYWNlclwiLHdlZWtTdGFydDoxLGZvcm1hdDpcImRkL21tL3l5eXlcIn19KGpRdWVyeSk7XG4iXSwic291cmNlUm9vdCI6IiJ9
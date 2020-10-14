(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

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

},[["./assets/js/app.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~08e24351","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7c3f1a6f","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~a14823c0","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~38bcb1f7","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.groupe~adm.justificat~31cc1171","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~app~datatable~sadm.personnels","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~app~datatable~sadm.personnels","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21hdGVyaWFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2RhbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3ZhbGlkYXRvci1iczQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9jc3MvYm9vdHN0cmFwLWRhdGVwaWNrZXIzLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9qcy9ib290c3RyYXAtZGF0ZXBpY2tlci5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9sb2NhbGVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmZyLm1pbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwibG9va3VwIiwiJCIsIm9uIiwiZSIsImZpbGVuYW1lIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwiaHRtbCIsImRvY3VtZW50IiwicmVhZHkiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImNoYW5nZSIsImkiLCJsZW5ndGgiLCJwdXNoIiwibmV4dCIsImpvaW4iLCJwcmVsb2FkZXIiLCJzcGVlZCIsImRhdGFBdHRyIiwiZmFkZU91dCIsImNsb3Nlc3QiLCJmaW5kIiwiY3NzIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGUiLCJ1cGRhdGVJbnRlcmZhY2UiLCJ2YWxpZGF0b3IiLCJhamF4Q29tcGxldGUiLCJ0b2dnbGVDbGFzcyIsInJlbW92ZUNsYXNzIiwic2xpZGVUb2dnbGUiLCJtb2RhbGVyIiwiZ2V0RGF0YU9wdGlvbnMiLCJzZWxlY3RwaWNrZXIiLCJpY29uQmFzZSIsInRpY2tJY29uIiwic3R5bGUiLCJzaXplIiwibGl2ZVNlYXJjaCIsImVhY2giLCJjb2xvciIsImhhc0RhdGFBdHRyIiwiZGF0YSIsInRvb2x0aXAiLCJjb250YWluZXIiLCJ0cmlnZ2VyIiwidGVtcGxhdGUiLCJvcHRpb25zIiwibXVsdGlkYXRlU2VwYXJhdG9yIiwibGFuZ3VhZ2UiLCJkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQiLCJwcm9wIiwiaW5wdXRzIiwiZGF0ZXBpY2tlciIsImhhc0NsYXNzIiwiY2xvc2UiLCJvcGVuIiwiYWRkQ2xhc3MiLCJmb2N1cyIsInNpZGViYXIiLCJwcyIsIlBlcmZlY3RTY3JvbGxiYXIiLCIkc3VibWVudSIsImlzIiwic2xpZGVVcCIsInRvZ2dsZUZvbGQiLCJhcHAiLCJ0b2dnbGVTdGF0ZSIsImZvbGQiLCJzdGF0ZSIsInVuZm9sZCIsInRvZ2dsZUhpZGUiLCJoaWRlIiwic2hvdyIsInByZXBlbmQiLCJyZW1vdmUiLCJxdWlja3ZpZXciLCJxcHMiLCJ1cGRhdGUiLCJyZWxvYWRRdiIsImRlc3Ryb3kiLCJnZXRUYXJnZXQiLCJ1cmwiLCJxdiIsImF0dHIiLCJsb2FkIiwiUm91dGluZyIsImdlbmVyYXRlIiwibm90IiwiYWZ0ZXIiLCJwcmV2IiwidW5kZWZpbmVkIiwibWF0ZXJpYWxEb0Zsb2F0IiwidmFsIiwibWF0ZXJpYWxOb0Zsb2F0IiwicGFyZW50IiwiY29uZmlnTW9kYWxlciIsImlzTW9kYWwiLCJ0eXBlIiwidGl0bGUiLCJiYWNrZHJvcCIsImhlYWRlclZpc2libGUiLCJmb290ZXJWaXNpYmxlIiwiY29uZmlybVZpc2libGUiLCJjb25maXJtVGV4dCIsImNvbmZpcm1DbGFzcyIsImNhbmNlbFZpc2libGUiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ2xhc3MiLCJib2R5RXh0cmFDbGFzcyIsInNwaW5uZXIiLCJhdXRvRGVzdHJveSIsIm9uU2hvdyIsIm9uU2hvd24iLCJvbkhpZGUiLCJvbkhpZGRlbiIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwibW9kYWxJZCIsImd1aWQiLCJsZW4iLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJyZXBsYWNlIiwic3Vic3RyIiwic2V0dGluZyIsImV4dGVuZCIsIm1vZGFsIiwiaWQiLCJoYW5kbGVDYWxsYmFjayIsImlzRnVuY3Rpb24iLCJzdWJzdHJpbmciLCJjYWxsIiwiYXBwZW5kIiwib3V0ZXJIVE1MIiwib25lIiwiaHRtbF9oZWFkZXIiLCJodG1sX2Zvb3RlciIsIm1vZGFsX2h0bWwiLCJqUXVlcnkiLCJrZXl3b3JkIiwic2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQiLCJzZWFyY2hfcmVwb25zZV9wZXJzb25uZWwiLCJzZWFyY2hfcmVwb25zZV9hdXRyZSIsImFqYXgiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJldHVkaWFudHMiLCJpbmRleCIsImV0dWRpYW50Iiwic2x1ZyIsInBob3RvIiwiYXZhdGFySW5pdGlhbGVzIiwiYmFzZXBhdGgiLCJkaXNwbGF5UHIiLCJzZW1lc3RyZSIsImdyb3VwZXMiLCJlbXB0eSIsInBlcnNvbm5lbHMiLCJwZXJzb25uZWwiLCJhdXRyZXMiLCJhdXRyZSIsInJlYWRVcmxNZW51IiwiJHVybCIsIiRlbHQiLCJzcGxpdCIsIiRmaXJzdEVsdCIsInBvcCIsImxvY2F0aW9uIiwiU3dhbCIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJjc3JmIiwiZmlyZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiX3Rva2VuIiwiaGFzT3duUHJvcGVydHkiLCJocmVmIiwiYWRkQ2FsbG91dCIsImVycm9yIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsImRpc21pc3MiLCJtZXNzYWdlIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNsYXRlIiwiQXJyYXkiLCJzbGlkZURvd24iLCJkZWxheSIsIm15RWRpdEluaXRpYWxDb250ZW50IiwiRWRpdE9uTGluZSIsImdlbmVyZUlucHV0IiwicmVwbGFjZVdpdGgiLCJrZXlDb2RlIiwidXBkYXRlRGF0YSIsIndoaWNoIiwiZmllbGQiLCJtZXRob2QiLCIkb2JqIiwiJGh0bWwiLCJ0cmltIiwiZm4iLCJkZWYiLCJnZXRBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiLCJkYXRhVG9PcHRpb24iLCJ4IiwidG9VcHBlckNhc2UiLCJlbCIsImNhc3RMaXN0Iiwia2V5IiwiQm9vbGVhbiIsIk51bWJlciIsImdldFZhbHVlIiwiJGVsIiwiVmFsaWRhdG9yIiwiZWxlbWVudCIsInZhbGlkYXRvcnMiLCJWQUxJREFUT1JTIiwiY3VzdG9tIiwiJGVsZW1lbnQiLCIkYnRuIiwiZmlsdGVyIiwiYWRkIiwicHJveHkiLCJvbklucHV0Iiwib25TdWJtaXQiLCJyZXNldCIsIiR0aGlzIiwiJGlucHV0cyIsIlZFUlNJT04iLCJJTlBVVF9TRUxFQ1RPUiIsIkZPQ1VTX09GRlNFVCIsIkRFRkFVTFRTIiwiZGlzYWJsZSIsImVycm9ycyIsIm1hdGNoIiwibWlubGVuZ3RoIiwiZmVlZGJhY2siLCJjaGVja1ZhbGlkaXR5IiwidmFsaWRpdHkiLCJ2YWxpZCIsInZhbGlkYXRpb25NZXNzYWdlIiwicHJvdG90eXBlIiwic2VsZiIsImNsZWFyRXJyb3JzIiwidG9nZ2xlU3VibWl0IiwiZGVmZXJFcnJvcnMiLCJ2YWxpZGF0ZUlucHV0IiwiZG9uZSIsInByZXZFcnJvcnMiLCJFdmVudCIsInJlbGF0ZWRUYXJnZXQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJydW5WYWxpZGF0b3JzIiwiZGVmZXIiLCJzaG93RXJyb3JzIiwiZGV0YWlsIiwiZGVmZXJyZWQiLCJEZWZlcnJlZCIsInJlamVjdCIsImdldFZhbGlkYXRvclNwZWNpZmljRXJyb3IiLCJnZXRWYWxpZGl0eVN0YXRlRXJyb3IiLCJ0eXBlTWlzbWF0Y2giLCJwYXR0ZXJuTWlzbWF0Y2giLCJzdGVwTWlzbWF0Y2giLCJyYW5nZU92ZXJmbG93IiwicmFuZ2VVbmRlcmZsb3ciLCJ2YWx1ZU1pc3NpbmciLCJnZXRHZW5lcmljRXJyb3IiLCJnZXRFcnJvck1lc3NhZ2UiLCJpbmRleE9mIiwiZ2V0IiwiZmFpbCIsImpxWEhSIiwidGV4dFN0YXR1cyIsImFsd2F5cyIsInJlc29sdmUiLCJwcm9taXNlIiwidmFsaWRhdGUiLCJ3aGVuIiwibWFwIiwiZm9jdXNFcnJvciIsIiRpbnB1dCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCIkZ3JvdXAiLCIkYmxvY2siLCIkZmVlZGJhY2siLCJoYXNFcnJvcnMiLCJmaWVsZEVycm9ycyIsImlzSW5jb21wbGV0ZSIsImZpZWxkSW5jb21wbGV0ZSIsImNhbGxiYWNrIiwid2luZG93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbW92ZURhdGEiLCJ0aW1lb3V0Iiwib3JpZ2luYWxDb250ZW50IiwicmVtb3ZlQXR0ciIsIm9mZiIsIlBsdWdpbiIsIm9wdGlvbiIsIm9sZCIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsIiRmb3JtIiwiYSIsImRlZmluZSIsImIiLCJjIiwiRGF0ZSIsIlVUQyIsImFwcGx5IiwiYXJndW1lbnRzIiwiZCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJmIiwiZGVwcmVjYXRlZCIsImciLCJpc05hTiIsImdldFRpbWUiLCJoIiwidG9Mb3dlckNhc2UiLCJSZWdFeHAiLCJ0ZXN0IiwicSIsInAiLCJqIiwic2xpY2UiLCJjb250YWlucyIsInZhbHVlT2YiLCJzcGxpY2UiLCJpc0FycmF5IiwiY2xlYXIiLCJjb3B5IiwiayIsIl9wcm9jZXNzX29wdGlvbnMiLCJkYXRlcyIsInZpZXdEYXRlIiwibyIsImRlZmF1bHRWaWV3RGF0ZSIsImZvY3VzRGF0ZSIsImlzSW5wdXQiLCJpbnB1dEZpZWxkIiwiY29tcG9uZW50IiwiaXNJbmxpbmUiLCJwaWNrZXIiLCJyIiwiX2NoZWNrX3RlbXBsYXRlIiwidGVtcGxhdGVzIiwibGVmdEFycm93IiwicmlnaHRBcnJvdyIsIl9idWlsZEV2ZW50cyIsIl9hdHRhY2hFdmVudHMiLCJhcHBlbmRUbyIsInJ0bCIsImNhbGVuZGFyV2Vla3MiLCJzdGFydERhdGUiLCJfbyIsImVuZERhdGUiLCJkYXlzT2ZXZWVrRGlzYWJsZWQiLCJkYXRlc0Rpc2FibGVkIiwiX2FsbG93X3VwZGF0ZSIsInNldFZpZXdNb2RlIiwic3RhcnRWaWV3IiwiZmlsbERvdyIsImZpbGxNb250aHMiLCJjb25zdHJ1Y3RvciIsIl9yZXNvbHZlVmlld05hbWUiLCJ2aWV3TW9kZXMiLCJpbkFycmF5IiwibmFtZXMiLCJfcmVzb2x2ZURheXNPZldlZWsiLCJtaW5WaWV3TW9kZSIsIm1heFZpZXdNb2RlIiwibWF4IiwibWluIiwibXVsdGlkYXRlIiwiU3RyaW5nIiwid2Vla1N0YXJ0Iiwid2Vla0VuZCIsInBhcnNlRm9ybWF0IiwiZm9ybWF0IiwiX2xvY2FsX3RvX3V0YyIsIl96ZXJvX3RpbWUiLCJwYXJzZURhdGUiLCJhc3N1bWVOZWFyYnlZZWFyIiwib3JpZW50YXRpb24iLCJncmVwIiwieSIsInllYXIiLCJtb250aCIsImwiLCJkYXkiLCJfZXZlbnRzIiwiX3NlY29uZGFyeUV2ZW50cyIsIl9hcHBseUV2ZW50cyIsIl91bmFwcGx5RXZlbnRzIiwia2V5dXAiLCJrZXlkb3duIiwicGFzdGUiLCJzaG93T25Gb2N1cyIsImNsaWNrIiwiYmx1ciIsIl9mb2N1c2VkX2Zyb20iLCJpbW1lZGlhdGVVcGRhdGVzIiwiZGF0ZSIsIm5hdkFycm93c0NsaWNrIiwiZGF5Q2VsbENsaWNrIiwicmVzaXplIiwicGxhY2UiLCJfZGV0YWNoRXZlbnRzIiwiX2F0dGFjaFNlY29uZGFyeUV2ZW50cyIsIl9kZXRhY2hTZWNvbmRhcnlFdmVudHMiLCJfdHJpZ2dlciIsIl91dGNfdG9fbG9jYWwiLCJ2aWV3TW9kZSIsImZvcm1hdERhdGUiLCJlbmFibGVPblJlYWRvbmx5IiwibmF2aWdhdG9yIiwibXNNYXhUb3VjaFBvaW50cyIsImRpc2FibGVUb3VjaEtleWJvYXJkIiwiZGV0YWNoIiwiZm9yY2VQYXJzZSIsInNldFZhbHVlIiwib3JpZ2luYWxFdmVudCIsImNsaXBib2FyZERhdGEiLCJ0eXBlcyIsImdldERhdGEiLCJzZXREYXRlIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJfemVyb191dGNfdGltZSIsImdldERhdGVzIiwiZ2V0VVRDRGF0ZXMiLCJjbGVhckRhdGVzIiwiYXV0b2Nsb3NlIiwic2V0RGF0ZXMiLCJzZXRVVENEYXRlcyIsInNldFVUQ0RhdGUiLCJnZXRGb3JtYXR0ZWREYXRlIiwiZ2V0U3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwidXBkYXRlTmF2QXJyb3dzIiwiZ2V0RW5kRGF0ZSIsInNldEVuZERhdGUiLCJzZXREYXlzT2ZXZWVrRGlzYWJsZWQiLCJzZXREYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQiLCJzZXREYXRlc0Rpc2FibGVkIiwib3V0ZXJXaWR0aCIsIm91dGVySGVpZ2h0Iiwid2lkdGgiLCJwYXJlbnRzIiwiekluZGV4T2Zmc2V0IiwibSIsIm4iLCJsZWZ0IiwicGFyc2VJbnQiLCJyaWdodCIsInpJbmRleCIsImRhdGVXaXRoaW5SYW5nZSIsInVwZGF0ZVZpZXdEYXRlIiwiZmlsbCIsInNob3dXZWVrRGF5cyIsImRheXNNaW4iLCJtb250aHNTaG9ydCIsInNldFJhbmdlIiwicmFuZ2UiLCJnZXRDbGFzc05hbWVzIiwidG9kYXlIaWdobGlnaHQiLCJkYXRlSXNEaXNhYmxlZCIsImdldFVUQ0RheSIsIl9maWxsX3llYXJzVmlldyIsImZsb29yIiwicyIsInQiLCJub29wIiwiZW5hYmxlZCIsImNsYXNzZXMiLCJjb25jYXQiLCJ0b2RheSIsImVuIiwidGl0bGVGb3JtYXQiLCJ0b2RheUJ0biIsImNsZWFyQnRuIiwic2V0VVRDRnVsbFllYXIiLCJ1IiwidiIsInciLCJ6IiwiQSIsIkIiLCJiZWZvcmVTaG93RGF5IiwiY29udGVudCIsInVuaXF1ZVNvcnQiLCJ1bmlxdWUiLCJDIiwibW9udGhzVGl0bGUiLCJEIiwiZW5kIiwiZXEiLCJiZWZvcmVTaG93TW9udGgiLCJFIiwiYmVmb3JlU2hvd1llYXIiLCJiZWZvcmVTaG93RGVjYWRlIiwiYmVmb3JlU2hvd0NlbnR1cnkiLCJzdG9wUHJvcGFnYXRpb24iLCJfc2V0RGF0ZSIsInNldFVUQ01vbnRoIiwiY3VycmVudFRhcmdldCIsIm5hdlN0ZXAiLCJtb3ZlTW9udGgiLCJfdG9nZ2xlX211bHRpZGF0ZSIsInRvZ2dsZUFjdGl2ZSIsIm1vdmVEYXkiLCJtb3ZlV2VlayIsImFicyIsIm1vdmVZZWFyIiwibW92ZUF2YWlsYWJsZURhdGUiLCJ3ZWVrT2ZEYXRlSXNEaXNhYmxlZCIsImtleWJvYXJkTmF2aWdhdGlvbiIsImN0cmxLZXkiLCJzaGlmdEtleSIsImNoaWxkcmVuIiwiY2xzTmFtZSIsImpxdWVyeSIsImtlZXBFbXB0eVZhbHVlcyIsImRhdGVVcGRhdGVkIiwicGlja2VycyIsInVwZGF0ZURhdGVzIiwidXBkYXRlUmFuZ2VzIiwidXBkYXRpbmciLCJzaGlmdCIsInRvQXJyYXkiLCJFcnJvciIsImRlZmF1bHRzIiwibG9jYWxlX29wdHMiLCJkYXlzIiwiZGF5c1Nob3J0IiwibW9udGhzIiwidmFsaWRQYXJ0cyIsIm5vbnB1bmN0dWF0aW9uIiwidG9WYWx1ZSIsInRvRGlzcGxheSIsInNlcGFyYXRvcnMiLCJwYXJ0cyIsInllc3RlcmRheSIsInRvbW9ycm93IiwieXl5eSIsInl5IiwiTSIsIk1NIiwibW0iLCJkZCIsIkREIiwiaGVhZFRlbXBsYXRlIiwiY29udFRlbXBsYXRlIiwiZm9vdFRlbXBsYXRlIiwiRFBHbG9iYWwiLCJ2ZXJzaW9uIiwid2FybiIsImZyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEdBQUQsRUFBSyxHQUFMLEVBQVMsSUFBVCxFQUFjLElBQWQsRUFBbUIsR0FBbkIsRUFBdUIsR0FBdkIsRUFBMkIsR0FBM0IsQ0FBL0k7QUFBK0syRSxVQUFNLEVBQUMsQ0FBQyxTQUFELEVBQVcsU0FBWCxFQUFxQixNQUFyQixFQUE0QixPQUE1QixFQUFvQyxLQUFwQyxFQUEwQyxNQUExQyxFQUFpRCxTQUFqRCxFQUEyRCxNQUEzRCxFQUFrRSxXQUFsRSxFQUE4RSxTQUE5RSxFQUF3RixVQUF4RixFQUFtRyxVQUFuRyxDQUF0TDtBQUFxUzFFLGVBQVcsRUFBQyxDQUFDLE9BQUQsRUFBUyxPQUFULEVBQWlCLE1BQWpCLEVBQXdCLE9BQXhCLEVBQWdDLEtBQWhDLEVBQXNDLE1BQXRDLEVBQTZDLE9BQTdDLEVBQXFELE1BQXJELEVBQTRELE9BQTVELEVBQW9FLE1BQXBFLEVBQTJFLE1BQTNFLEVBQWtGLE1BQWxGLENBQWpUO0FBQTJZZSxTQUFLLEVBQUMsYUFBalo7QUFBK1ppQixlQUFXLEVBQUMsTUFBM2E7QUFBa2JuSyxTQUFLLEVBQUMsU0FBeGI7QUFBa2M4QyxhQUFTLEVBQUMsQ0FBNWM7QUFBOGNHLFVBQU0sRUFBQztBQUFyZCxHQUF6QjtBQUE0ZixDQUF4Z0IsQ0FBeWdCM1EsTUFBemdCLENBQUQsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvYXBwLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTIvMTAvMjAyMCAxNzoxNlxuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3Njc3MvZm9udGF3ZXNvbWUuc2NzcydcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvc2Nzcy9zb2xpZC5zY3NzJ1xuaW1wb3J0ICdib290c3RyYXAtc2VsZWN0L2Rpc3QvY3NzL2Jvb3RzdHJhcC1zZWxlY3QubWluLmNzcydcbmltcG9ydCAnLi4vdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2Nzcy9ib290c3RyYXAtZGF0ZXBpY2tlcjMubWluLmNzcydcbmltcG9ydCAnLi4vdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2pzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLm1pbi5qcydcbmltcG9ydCAnLi4vdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2xvY2FsZXMvYm9vdHN0cmFwLWRhdGVwaWNrZXIuZnIubWluJ1xuXG5pbXBvcnQgJy4uL2Nzcy9hcHAuc2NzcydcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncGVyZmVjdC1zY3JvbGxiYXInXG5pbXBvcnQgJy4vdmFsaWRhdG9yLWJzNCdcbmltcG9ydCB7Z2V0RGF0YU9wdGlvbnN9IGZyb20gJy4vdXRpbCdcbmltcG9ydCAnLi9tYXRlcmlhbCdcbmltcG9ydCAnLi9zZWFyY2gnXG5pbXBvcnQgJy4vbW9kYWxlcidcblxucmVxdWlyZSgnYm9vdHN0cmFwJylcblxubGV0IGxvb2t1cCA9IHt9XG5cbnJlcXVpcmUoJ2Jvb3RzdHJhcC1zZWxlY3QnKVxuXG4kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICBsZXQgZmlsZW5hbWUgPSBlLnRhcmdldC5maWxlc1swXS5uYW1lXG4gICQoJy5jdXN0b20tZmlsZS1sYWJlbCcpLmh0bWwoZmlsZW5hbWUpXG59KVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIC8vIGNvcHkgbGluayBFRFRcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNjb3B5TGluaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjbGllbkljYWwnKS5zZWxlY3QoKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcbiAgfSlcblxuICAvLyBzY3JpcHQgcG91ciBhZmZpY2hlciBsZSBmaWNoaWVyIHNlbGVjdGlvbm7DqSBhdmVjIGJvb3RzdHJhcDRcbiAgJCgnLmN1c3RvbS1maWxlIGlucHV0JykuY2hhbmdlKGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgZmlsZXMgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJCh0aGlzKVswXS5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsZXMucHVzaCgkKHRoaXMpWzBdLmZpbGVzW2ldLm5hbWUpXG4gICAgfVxuICAgICQodGhpcykubmV4dCgnLmN1c3RvbS1maWxlLWxhYmVsJykuaHRtbChmaWxlcy5qb2luKCcsICcpKVxuICB9KVxuXG4gIHZhciBwcmVsb2FkZXIgPSAkKCcucHJlbG9hZGVyJylcbiAgaWYgKHByZWxvYWRlci5sZW5ndGgpIHtcbiAgICB2YXIgc3BlZWQgPSBwcmVsb2FkZXIuZGF0YUF0dHIoJ2hpZGUtc3BwZWQnLCA2MDApXG4gICAgcHJlbG9hZGVyLmZhZGVPdXQoc3BlZWQpXG4gIH1cblxuICAkKGRvY3VtZW50KS5vbignZm9jdXMnLCAnLnRvcGJhci1zZWFyY2ggaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCcudG9wYmFyLXNlYXJjaCcpLmZpbmQoJy5sb29rdXAtcGxhY2Vob2xkZXIgc3BhbicpLmNzcygnb3BhY2l0eScsICcwJylcbiAgfSlcblxuICAkKGRvY3VtZW50KS5vbignYmx1cicsICcudG9wYmFyLXNlYXJjaCBpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJy50b3BiYXItc2VhcmNoJykuZmluZCgnLmxvb2t1cC1wbGFjZWhvbGRlciBzcGFuJykuY3NzKCdvcGFjaXR5JywgJzEnKVxuICB9KVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbG9va3VwJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB2YXIgdGFyZ2V0ID0gJCgnI2xvb2t1cC1mdWxsJylcblxuICAgIGlmICh0YXJnZXQgIT09IGZhbHNlKSB7XG4gICAgICBsb29rdXAudG9nZ2xlKHRhcmdldClcbiAgICB9XG4gIH0pXG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNsb29rdXAtY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgbG9va3VwLnRvZ2dsZSgkKCcjbG9va3VwLWZ1bGwnKSlcbiAgfSlcblxuICAvL3Rvb2x0aXBcbiAgdXBkYXRlSW50ZXJmYWNlKClcblxuICAkKCdbZGF0YS1wcm92aWRlPVwidmFsaWRhdGlvblwiXScpLnZhbGlkYXRvcigpXG59KVxuXG4kKGRvY3VtZW50KS5hamF4Q29tcGxldGUoZnVuY3Rpb24gKCkge1xuICB1cGRhdGVJbnRlcmZhY2UoKVxufSlcblxuLy8gRnVsbHNjcmVlblxuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2FyZC1idG4tZnVsbHNjcmVlbicsIGZ1bmN0aW9uICgpIHtcbiAgJCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLnRvZ2dsZUNsYXNzKCdjYXJkLWZ1bGxzY3JlZW4nKS5yZW1vdmVDbGFzcygnY2FyZC1tYXhpbWl6ZScpXG59KVxuXG4vLyBTbGlkZSB1cC9kb3duXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNhcmQtYnRuLXNsaWRlJywgZnVuY3Rpb24gKCkge1xuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdyb3RhdGUtMTgwJykuY2xvc2VzdCgnLmNhcmQnKS5maW5kKCcuY2FyZC1jb250ZW50Jykuc2xpZGVUb2dnbGUoKVxufSlcblxuLy9tb2RhbGVyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtcHJvdmlkZX49XCJtb2RhbGVyXCJdJywgZnVuY3Rpb24gKCkge1xuICBtb2RhbGVyKGdldERhdGFPcHRpb25zKCQodGhpcykpKVxufSlcblxuZnVuY3Rpb24gdXBkYXRlSW50ZXJmYWNlICgpIHtcbiAgLy9zZWxlY3RwaWNrZXJcbiAgJCgnLnNlbGVjdHBpY2tlcicpLnNlbGVjdHBpY2tlcih7XG4gICAgaWNvbkJhc2U6ICcnLFxuICAgIHRpY2tJY29uOiAnZmFzIGZhLWNoZWNrJyxcbiAgICBzdHlsZTogJ2J0bi1saWdodCcsXG4gICAgc2l6ZTogMTAsXG4gICAgbGl2ZVNlYXJjaDogdHJ1ZVxuICB9KVxuXG4gIC8vdG9vbHRpcFxuICAkKCdbZGF0YS1wcm92aWRlfj1cInRvb2x0aXBcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3IgPSAnJ1xuXG4gICAgaWYgKCQodGhpcykuaGFzRGF0YUF0dHIoJ3Rvb2x0aXAtY29sb3InKSkge1xuICAgICAgY29sb3IgPSAnIHRvb2x0aXAtJyArICQodGhpcykuZGF0YSgndG9vbHRpcC1jb2xvcicpXG4gICAgfVxuXG4gICAgJCh0aGlzKS50b29sdGlwKHtcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXAnICsgY29sb3IgKyAnXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PidcbiAgICB9KVxuICB9KVxuXG4gICQoJ1tkYXRhLXByb3ZpZGV+PVwiZGF0ZXBpY2tlclwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgbXVsdGlkYXRlU2VwYXJhdG9yOiAnLCAnLFxuICAgICAgbGFuZ3VhZ2U6ICdmcicsXG4gICAgICBkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6ICcwNidcbiAgICB9XG5cbiAgICBpZiAoJCh0aGlzKS5wcm9wKCd0YWdOYW1lJykgIT0gJ0lOUFVUJykge1xuICAgICAgLy9zaSBjZSBuJ2VzdCBwYXMgdW4gaW5wdXQgPT4gZG9uYyB1biBkYXRlIHJhbmdlXG4gICAgICBvcHRpb25zLmlucHV0cyA9IFskKHRoaXMpLmZpbmQoJ2lucHV0OmZpcnN0JyksICQodGhpcykuZmluZCgnaW5wdXQ6bGFzdCcpXVxuICAgIH1cbiAgICAkKHRoaXMpLmRhdGVwaWNrZXIob3B0aW9ucylcbiAgfSlcblxufVxuXG4vLyBPcGVuIGZ1bGxzY3JlZW4gbG9va3VwXG4vL1xubG9va3VwLnRvZ2dsZSA9IGZ1bmN0aW9uIChlKSB7XG4gIGlmICgkKGUpLmhhc0NsYXNzKCdyZXZlYWwnKSkge1xuICAgIGxvb2t1cC5jbG9zZShlKVxuICB9IGVsc2Uge1xuICAgIGxvb2t1cC5vcGVuKGUpXG4gIH1cbn1cblxuLy8gQ2xvc2UgZnVsbHNjcmVlbiBsb29rdXBcbi8vXG5sb29rdXAuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAkKGUpLnJlbW92ZUNsYXNzKCdyZXZlYWwnKVxuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpXG59XG5cblxuLy8gQ2xvc2UgZnVsbHNjcmVlbiBsb29rdXBcbi8vXG5sb29rdXAub3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gICQoZSkuYWRkQ2xhc3MoJ3JldmVhbCcpXG4gICQoZSkuZmluZCgnLmxvb2t1cC1mb3JtIGlucHV0JykuZm9jdXMoKVxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpXG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy8gU2lkZWJhclxuLy8gPT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBzaWRlYmFyID0ge31cblxuLy8gU2Nyb2xsYWJsZVxuLy9cbmNvbnN0IHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5zaWRlYmFyLW5hdmlnYXRpb24nKVxuXG4vLyBIYW5kbGUgc2lkZWJhciBvcGVubmVyXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zaWRlYmFyLXRvZ2dsZXInLCBmdW5jdGlvbiAoKSB7XG4gIHNpZGViYXIub3BlbigpXG59KVxuXG5cbi8vIENsb3NlIHNpZGViYXIgd2hlbiBiYWNrZHJvcCB0b3VjaGVzXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5iYWNrZHJvcC1zaWRlYmFyJywgZnVuY3Rpb24gKCkge1xuICBzaWRlYmFyLmNsb3NlKClcbn0pXG5cblxuLy8gU2xpZGUgdXAvZG93biBtZW51IGl0ZW0gb24gY2xpY2tcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNpZGViYXIgLm1lbnUtbGluaycsIGZ1bmN0aW9uICgpIHtcbiAgdmFyICRzdWJtZW51ID0gJCh0aGlzKS5uZXh0KCcubWVudS1zdWJtZW51JylcbiAgaWYgKCRzdWJtZW51Lmxlbmd0aCA8IDEpXG4gICAgcmV0dXJuXG5cbiAgaWYgKCRzdWJtZW51LmlzKCc6dmlzaWJsZScpKSB7XG4gICAgJHN1Ym1lbnUuc2xpZGVVcChmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcuc2lkZWJhciAubWVudS1pdGVtLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgfSlcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICByZXR1cm5cbiAgfVxuXG4gICQoJy5zaWRlYmFyIC5tZW51LXN1Ym1lbnU6dmlzaWJsZScpLnNsaWRlVXAoKVxuICAkKCcuc2lkZWJhciAubWVudS1saW5rJykucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAkc3VibWVudS5zbGlkZVRvZ2dsZShmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnNpZGViYXIgLm1lbnUtaXRlbS5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICB9KVxuICAkKHRoaXMpLmFkZENsYXNzKCdvcGVuJylcbn0pXG5cbi8vIEhhbmRsZSBmb2xkIHRvZ2dsZXJcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNpZGViYXItdG9nZ2xlLWZvbGQnLCBmdW5jdGlvbiAoKSB7XG4gIHNpZGViYXIudG9nZ2xlRm9sZCgpXG59KVxuXG4vL31cblxuXG5zaWRlYmFyLnRvZ2dsZUZvbGQgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS50b2dnbGVDbGFzcygnc2lkZWJhci1mb2xkZWQnKVxuICBhcHAudG9nZ2xlU3RhdGUoJ3NpZGViYXIuZm9sZGVkJylcbn1cblxuc2lkZWJhci5mb2xkID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykuYWRkQ2xhc3MoJ3NpZGViYXItZm9sZGVkJylcbiAgYXBwLnN0YXRlKCdzaWRlYmFyLmZvbGRlZCcsIHRydWUpXG59XG5cblxuc2lkZWJhci51bmZvbGQgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2lkZWJhci1mb2xkZWQnKVxuICBhcHAuc3RhdGUoJ3NpZGViYXIuZm9sZGVkJywgZmFsc2UpXG59XG5cblxuc2lkZWJhci50b2dnbGVIaWRlID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3NpZGViYXItaGlkZGVuJylcbiAgYXBwLnRvZ2dsZVN0YXRlKCdzaWRlYmFyLmhpZGRlbicpXG59XG5cbnNpZGViYXIuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLmFkZENsYXNzKCdzaWRlYmFyLWhpZGRlbicpXG4gIGFwcC5zdGF0ZSgnc2lkZWJhci5oaWRkZW4nLCB0cnVlKVxufVxuXG5zaWRlYmFyLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2lkZWJhci1oaWRkZW4nKVxuICBhcHAuc3RhdGUoJ3NpZGViYXIuaGlkZGVuJywgZmFsc2UpXG59XG5cblxuc2lkZWJhci5vcGVuID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykuYWRkQ2xhc3MoJ3NpZGViYXItb3BlbicpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJhcHAtYmFja2Ryb3AgYmFja2Ryb3Atc2lkZWJhclwiPjwvZGl2PicpXG59XG5cbnNpZGViYXIuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2lkZWJhci1vcGVuJylcbiAgJCgnLmJhY2tkcm9wLXNpZGViYXInKS5yZW1vdmUoKVxufVxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy8gUXVpY2t2aWV3XG4vLyA9PT09PT09PT09PT09PT09PT09PT1cbi8vXG5cbmxldCBxdWlja3ZpZXcgPSB7fVxubGV0IHFwcyA9IG51bGxcblxuLy8gVXBkYXRlIHNjcm9sbGJhciBvbiB0YWIgY2hhbmdlXG4vL1xuJChkb2N1bWVudCkub24oJ3Nob3duLmJzLnRhYicsICcucXVpY2t2aWV3LWhlYWRlciBhW2RhdGEtdG9nZ2xlPVwidGFiXCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgcXBzLnVwZGF0ZSgpXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWxvYWRRdigpXG57XG4gIHFwcy5kZXN0cm95KClcbiAgcXBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5xdWlja3ZpZXcnKVxufVxuXG4vLyBRdWlja3ZpZXcgY2xvc2VyXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWRpc21pc3M9XCJxdWlja3ZpZXdcIl0nLCBmdW5jdGlvbiAoKSB7XG4gIHF1aWNrdmlldy5jbG9zZSgkKHRoaXMpLmNsb3Nlc3QoJy5xdWlja3ZpZXcnKSlcbn0pXG5cblxuLy8gSGFuZGxlIHF1aWNrdmlldyBvcGVubmVyXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXRvZ2dsZT1cInF1aWNrdmlld1wiXScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBsZXQgdGFyZ2V0ID0gYXBwLmdldFRhcmdldCgkKHRoaXMpKVxuXG4gIGlmICh0YXJnZXQgPT0gZmFsc2UpIHtcbiAgICBxdWlja3ZpZXcuY2xvc2UoJCh0aGlzKS5jbG9zZXN0KCcucXVpY2t2aWV3JykpXG4gIH0gZWxzZSB7XG4gICAgbGV0IHVybCA9ICcnXG4gICAgaWYgKCQodGhpcykuaGFzRGF0YUF0dHIoJ3VybCcpKSB7XG4gICAgICB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpXG4gICAgfVxuICAgIHF1aWNrdmlldy50b2dnbGUodGFyZ2V0LCB1cmwpXG4gIH1cbn0pXG5cblxuLy8gQ2xvc2UgcXVpY2t2aWV3IHdoZW4gYmFja2Ryb3AgdG91Y2hlc1xuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYmFja2Ryb3AtcXVpY2t2aWV3JywgZnVuY3Rpb24gKCkge1xuICBsZXQgcXYgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGFyZ2V0JylcbiAgaWYgKCEkKHF2KS5pcygnW2RhdGEtZGlzYWJsZS1iYWNrZHJvcC1jbGlja10nKSkge1xuICAgIHF1aWNrdmlldy5jbG9zZShxdilcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5xdWlja3ZpZXcgLmNsb3NlLCBbZGF0YS1kaXNtaXNzPVwicXVpY2t2aWV3XCJdJywgZnVuY3Rpb24gKCkge1xuICBsZXQgcXYgPSAkKHRoaXMpLmNsb3Nlc3QoJy5xdWlja3ZpZXcnKVxuICBxdWlja3ZpZXcuY2xvc2UocXYpXG59KVxuXG4vLyBUb2dnbGUgb3Blbi9jbG9zZSBzdGF0ZVxuLy9cbnF1aWNrdmlldy50b2dnbGUgPSBmdW5jdGlvbiAoZSwgdXJsKSB7XG4gIGlmICgkKGUpLmhhc0NsYXNzKCdyZXZlYWwnKSkge1xuICAgIHF1aWNrdmlldy5jbG9zZShlKVxuICB9IGVsc2Uge1xuICAgIGlmICh1cmwgIT09ICcnKSB7XG4gICAgICAkKGUpLmh0bWwoJzxkaXYgY2xhc3M9XCJzcGlubmVyLWxpbmVhclwiPjxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+PC9kaXY+JylcbiAgICAgICQoZSkubG9hZCh1cmwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcXBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5xdWlja3ZpZXcnKVxuICAgICAgfSlcbiAgICB9XG4gICAgcXVpY2t2aWV3Lm9wZW4oZSlcbiAgfVxufVxuXG5cbi8vIE9wZW4gcXVpY2t2aWV3XG4vL1xucXVpY2t2aWV3Lm9wZW4gPSBmdW5jdGlvbiAoZSkge1xuICBsZXQgcXVpY2t2aWV3ID0gJChlKVxuICBsZXQgdXJsID0gJydcbiAgLy8gTG9hZCBjb250ZW50IGZyb20gVVJMIGlmIHJlcXVpcmVkXG4gIGlmIChxdWlja3ZpZXcuaGFzRGF0YUF0dHIoJ3VybCcpICYmICd0cnVlJyAhPT0gcXVpY2t2aWV3LmRhdGEoJ3VybC1oYXMtbG9hZGVkJykpIHtcbiAgICBpZiAocXVpY2t2aWV3LmRhdGEoJ3VybCcpID09PSAnbm8tdXJsJykge1xuICAgICAgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgncXVpY2tfdmlldycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IHF1aWNrdmlldy5kYXRhKCd1cmwnKVxuICAgIH1cblxuICAgIHF1aWNrdmlldy5sb2FkKHVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgcXBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5xdWlja3ZpZXcnKVxuXG4gICAgICAvLyBEb24ndCBsb2FkIGl0IG5leHQgdGltZSwgaWYgZG9uJ3QgbmVlZCB0b1xuICAgICAgaWYgKHF1aWNrdmlldy5oYXNEYXRhQXR0cignYWx3YXlzLXJlbG9hZCcpICYmICd0cnVlJyA9PT0gcXVpY2t2aWV3LmRhdGEoJ2Fsd2F5cy1yZWxvYWQnKSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWlja3ZpZXcuZGF0YSgndXJsLWhhcy1sb2FkZWQnLCAndHJ1ZScpXG4gICAgICB9XG4gICAgfSlcblxuICB9XG5cbi8vIE9wZW4gaXRcbiAgcXVpY2t2aWV3LmFkZENsYXNzKCdyZXZlYWwnKS5ub3QoJy5iYWNrZHJvcC1yZW1vdmUnKS5hZnRlcignPGRpdiBjbGFzcz1cImFwcC1iYWNrZHJvcCBiYWNrZHJvcC1xdWlja3ZpZXdcIiBkYXRhLXRhcmdldD1cIicgKyBlICsgJ1wiPjwvZGl2PicpXG59XG5cblxuLy8gQ2xvc2UgcXVpY2t2aWV3XG4vL1xucXVpY2t2aWV3LmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgJChlKS5yZW1vdmVDbGFzcygncmV2ZWFsJylcbiAgJCgnLmJhY2tkcm9wLXF1aWNrdmlldycpLnJlbW92ZSgpXG59XG5cblxubGV0IGFwcCA9IHt9XG5cbmFwcC5nZXRUYXJnZXQgPSBmdW5jdGlvbiAoZSkge1xuICBsZXQgdGFyZ2V0XG4gIGlmIChlLmhhc0RhdGFBdHRyKCd0YXJnZXQnKSkge1xuICAgIHRhcmdldCA9IGUuZGF0YSgndGFyZ2V0JylcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBlLmF0dHIoJ2hyZWYnKVxuICB9XG5cbiAgaWYgKHRhcmdldCA9PSAnbmV4dCcpIHtcbiAgICB0YXJnZXQgPSAkKGUpLm5leHQoKVxuICB9IGVsc2UgaWYgKHRhcmdldCA9PSAncHJldicpIHtcbiAgICB0YXJnZXQgPSAkKGUpLnByZXYoKVxuICB9XG5cbiAgaWYgKHRhcmdldCA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0YXJnZXRcbn1cblxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL21hdGVyaWFsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjgvMTEvMjAxOSAxOTo0MFxuXG4vLyBNYXRlcmlhbCBpbnB1dFxuLy9cbiQoZG9jdW1lbnQpLm9uKCdmb2N1cycsICcuZm9ybS10eXBlLW1hdGVyaWFsIC5mb3JtLWNvbnRyb2w6bm90KC5ib290c3RyYXAtc2VsZWN0KScsIGZ1bmN0aW9uICgpIHtcbiAgbWF0ZXJpYWxEb0Zsb2F0KCQodGhpcykpXG59KVxuXG4kKGRvY3VtZW50KS5vbignZm9jdXNvdXQnLCAnLmZvcm0tdHlwZS1tYXRlcmlhbCAuZm9ybS1jb250cm9sOm5vdCguYm9vdHN0cmFwLXNlbGVjdCknLCBmdW5jdGlvbiAoKSB7XG4gIGlmICgkKHRoaXMpLnZhbCgpID09PSAnJykge1xuICAgIG1hdGVyaWFsTm9GbG9hdCgkKHRoaXMpKVxuICB9XG59KVxuXG4vLyBBdXRvIGZvY3VzIGlucHV0c1xubWF0ZXJpYWxEb0Zsb2F0KCQoJy5mb3JtLXR5cGUtbWF0ZXJpYWwgLmZvcm0tY29udHJvbFthdXRvZm9jdXM9XCJ0cnVlXCJdJykpXG5cblxuZnVuY3Rpb24gbWF0ZXJpYWxEb0Zsb2F0IChlKSB7XG4gIGlmIChlLnBhcmVudCgnLmlucHV0LWdyb3VwLWlucHV0JykubGVuZ3RoKSB7XG4gICAgZS5wYXJlbnQoJy5pbnB1dC1ncm91cC1pbnB1dCcpLmFkZENsYXNzKCdkby1mbG9hdCcpXG4gIH0gZWxzZSB7XG4gICAgZS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmFkZENsYXNzKCdkby1mbG9hdCcpXG4gIH1cbn1cblxuXG5mdW5jdGlvbiBtYXRlcmlhbE5vRmxvYXQgKGUpIHtcbiAgaWYgKGUucGFyZW50KCcuaW5wdXQtZ3JvdXAtaW5wdXQnKS5sZW5ndGgpIHtcbiAgICBlLnBhcmVudCgnLmlucHV0LWdyb3VwLWlucHV0JykucmVtb3ZlQ2xhc3MoJ2RvLWZsb2F0JylcbiAgfSBlbHNlIHtcbiAgICBlLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2RvLWZsb2F0JylcbiAgfVxufVxuXG4kKCcuZm9ybS10eXBlLW1hdGVyaWFsIC5mb3JtLWNvbnRyb2wnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgaWYgKCQodGhpcykudmFsKCkubGVuZ3RoID4gMCkge1xuICAgIC8vaWYgKCQodGhpcykuaXMoJ1tkYXRhLXByb3ZpZGV+PVwic2VsZWN0cGlja2VyXCJdJykpIHtcbiAgICAvLyAgcmV0dXJuXG4gICAgLy99XG4gICAgbWF0ZXJpYWxEb0Zsb2F0KCQodGhpcykpXG4gIH1cbn0pXG5cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9tb2RhbGVyLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjcvMDcvMjAyMCAxMToyM1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cbi8vIE1vZGFsZXJcbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy9cbitmdW5jdGlvbiAoJCkge1xuXG4gIGxldCBjb25maWdNb2RhbGVyID0ge1xuICAgIHVybDogJycsXG4gICAgaXNNb2RhbDogZmFsc2UsXG4gICAgaHRtbDogJycsXG4gICAgdGFyZ2V0OiAnJyxcbiAgICB0eXBlOiAnJyxcbiAgICBzaXplOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgYmFja2Ryb3A6IHRydWUsXG4gICAgaGVhZGVyVmlzaWJsZTogdHJ1ZSxcbiAgICBmb290ZXJWaXNpYmxlOiB0cnVlLFxuICAgIGNvbmZpcm1WaXNpYmxlOiB0cnVlLFxuICAgIGNvbmZpcm1UZXh0OiAnT2snLFxuICAgIGNvbmZpcm1DbGFzczogJ2J0biBidG4tdy1zbSBidG4tZmxhdCBidG4tcHJpbWFyeScsXG4gICAgY2FuY2VsVmlzaWJsZTogZmFsc2UsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbCcsXG4gICAgY2FuY2VsQ2xhc3M6ICdidG4gYnRuLXctc20gYnRuLWZsYXQgYnRuLXNlY29uZGFyeScsXG4gICAgYm9keUV4dHJhQ2xhc3M6ICcnLFxuICAgIHNwaW5uZXI6ICc8ZGl2IGNsYXNzPVwiaC0yMDAgY2VudGVyLXZoXCI+PHN2ZyBjbGFzcz1cInNwaW5uZXItY2lyY2xlLW1hdGVyaWFsLXN2Z1wiIHZpZXdCb3g9XCIwIDAgNTAgNTBcIj48Y2lyY2xlIGNsYXNzPVwiY2lyY2xlXCIgY3g9XCIyNVwiIGN5PVwiMjVcIiByPVwiMjBcIj48L3N2Zz48L2Rpdj4nLFxuXG4gICAgYXV0b0Rlc3Ryb3k6IHRydWUsXG5cbiAgICAvLyBFdmVudHNcbiAgICBvblNob3c6IG51bGwsXG4gICAgb25TaG93bjogbnVsbCxcbiAgICBvbkhpZGU6IG51bGwsXG4gICAgb25IaWRkZW46IG51bGwsXG4gICAgb25Db25maXJtOiBudWxsLFxuICAgIG9uQ2FuY2VsOiBudWxsLFxuXG4gICAgLy8gUHJpdmF0ZSBvcHRpb25zXG4gICAgbW9kYWxJZDogbnVsbFxuICB9XG5cbiAgZnVuY3Rpb24gZ3VpZCAobGVuKSB7XG4gICAgaWYgKGxlbiA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxlbiA9IDVcbiAgICB9XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnJlcGxhY2UoL1teYS16XSsvZywgJycpLnN1YnN0cigwLCBsZW4pXG4gIH1cblxuXG4gIG1vZGFsZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBzZXR0aW5nID0gJC5leHRlbmQoe30sIGNvbmZpZ01vZGFsZXIsIG9wdGlvbnMpXG5cbiAgICBpZiAoc2V0dGluZy5tb2RhbElkKSB7XG4gICAgICAkKCcjJyArIHNldHRpbmcubW9kYWxJZCkubW9kYWwoJ3Nob3cnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG5cbiAgICB2YXIgaWQgPSAnbW9kYWwtJyArIGd1aWQoKVxuXG5cbiAgICB2YXIgaGFuZGxlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoaWQpIHtcblxuICAgICAgLy8gQm9vdHN0cmFwIG1vZGFsIGV2ZW50c1xuICAgICAgLy9cbiAgICAgIGlmIChzZXR0aW5nLm9uU2hvdykge1xuICAgICAgICAkKCcjJyArIGlkKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy9zZXR0aW5nLm9uU2hvdygpO1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAoc2V0dGluZy5vblNob3duKSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy9zZXR0aW5nLm9uU2hvd24oKTtcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNldHRpbmcub25IaWRlKSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBzZXR0aW5nLm9uSGlkZSgpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5nLm9uSGlkZGVuKSB7XG4gICAgICAgICQoJyMnICsgaWQpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHNldHRpbmcub25IaWRkZW4oKVxuICAgICAgICB9KVxuICAgICAgfVxuXG5cbiAgICAgIC8vIEhhbmRsZSBjb25maXJtIGNhbGxiYWNrXG4gICAgICAvL1xuICAgICAgJCgnIycgKyBpZCkuZmluZCgnW2RhdGEtcGVyZm9ybT1cImNvbmZpcm1cIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gSGFzbid0IHNldFxuICAgICAgICBpZiAoc2V0dGluZy5vbkNvbmZpcm0gPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXMgYSBmdW5jdGlvblxuICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHNldHRpbmcub25Db25maXJtKSkge1xuICAgICAgICAgIHNldHRpbmcub25Db25maXJtKCQoJyMnICsgaWQpKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXMgc3RyaW5nIHZhbHVlLCBzbyBjYWxsIGl0XG4gICAgICAgIGlmIChzZXR0aW5nLm9uQ29uZmlybS5zdWJzdHJpbmcpIHtcbiAgICAgICAgICBhcHAuY2FsbChzZXR0aW5nLm9uQ29uZmlybSwgJCgnIycgKyBpZCkpXG4gICAgICAgIH1cblxuICAgICAgfSlcblxuXG4gICAgICAvLyBIYW5kbGUgY2FuY2VsIGNhbGxiYWNrXG4gICAgICAvL1xuICAgICAgJCgnIycgKyBpZCkuZmluZCgnW2RhdGEtcGVyZm9ybT1cImNhbmNlbFwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBIYXNuJ3Qgc2V0XG4gICAgICAgIGlmIChzZXR0aW5nLm9uQ2FuY2VsID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElzIGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5nLm9uQ2FuY2VsKSkge1xuICAgICAgICAgIHNldHRpbmcub25DYW5jZWwoJCgnIycgKyBpZCkpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJcyBzdHJpbmcgdmFsdWUsIHNvIGNhbGwgaXRcbiAgICAgICAgaWYgKHNldHRpbmcub25DYW5jZWwuc3Vic3RyaW5nKSB7XG4gICAgICAgICAgYXBwLmNhbGwoc2V0dGluZy5vbkNhbmNlbCwgJCgnIycgKyBpZCkpXG4gICAgICAgIH1cblxuICAgICAgfSlcbiAgICB9XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFdlIHJlY2lldmUgbW9kYWwgbWFya3VwIGZyb20gdXJsXG4gICAgLy9cbiAgICBpZiAoc2V0dGluZy5pc01vZGFsKSB7XG5cbiAgICAgICQoJzxkaXY+JykubG9hZChzZXR0aW5nLnVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCQodGhpcykuZmluZCgnLm1vZGFsJykuYXR0cignaWQnLCBpZCkub3V0ZXJIVE1MKCkpXG5cbiAgICAgICAgJCgnIycgKyBpZCkubW9kYWwoJ3Nob3cnKVxuICAgICAgICAkKCcjJyArIGlkKS5vbmUoJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvL3RvZG86IGEgY29uZmlybWVyICQoJyMnKyBpZCkuZmluZCgnLm1vZGFsLWJvZHknKS5wZXJmZWN0U2Nyb2xsYmFyKCd1cGRhdGUnKTtcbiAgICAgICAgfSlcblxuXG4gICAgICAgIC8vIERlc3Ryb3kgYWZ0ZXIgY2xvc2VcbiAgICAgICAgLy9cbiAgICAgICAgaWYgKHNldHRpbmcuYXV0b0Rlc3Ryb3kpIHtcbiAgICAgICAgICAkKCcjJyArIGlkKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnIycgKyBpZCkucmVtb3ZlKClcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoc2V0dGluZy50aGlzKS5hdHRyKCdkYXRhLW1vZGFsLWlkJywgaWQpXG4gICAgICAgIH1cblxuXG4gICAgICAgIGhhbmRsZUNhbGxiYWNrKGlkKVxuICAgICAgfSlcbiAgICB9XG5cblxuXG5cblxuICAgICAgLy8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIFdlIHNob3VsZCBkZXNpZ24gdGhlIG1vZGFsXG4gICAgLy9cbiAgICBlbHNlIHtcblxuICAgICAgc3dpdGNoIChzZXR0aW5nLnNpemUpIHtcbiAgICAgICAgY2FzZSAnc20nOlxuICAgICAgICAgIHNldHRpbmcuc2l6ZSA9ICdtb2RhbC1zbSdcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2xnJzpcbiAgICAgICAgICBzZXR0aW5nLnNpemUgPSAnbW9kYWwtbGcnXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAvL3NldHRpbmcuc2l6ZSA9ICcnO1xuICAgICAgfVxuXG5cbiAgICAgIGlmIChzZXR0aW5nLnR5cGUpIHtcbiAgICAgICAgc2V0dGluZy50eXBlID0gJ21vZGFsLScgKyBzZXR0aW5nLnR5cGVcbiAgICAgIH1cblxuXG4gICAgICAvLyBIZWFkZXIgY29kZVxuICAgICAgLy9cbiAgICAgIHZhciBodG1sX2hlYWRlciA9ICcnXG4gICAgICBpZiAoc2V0dGluZy5oZWFkZXJWaXNpYmxlKSB7XG4gICAgICAgIGh0bWxfaGVhZGVyICs9XG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj4gXFxcbiAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+JyArIHNldHRpbmcudGl0bGUgKyAnPC9oNT4gXFxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+PC9idXR0b24+IFxcXG4gICAgICAgICAgPC9kaXY+J1xuICAgICAgfVxuXG5cbiAgICAgIC8vIEZvb3RlciBjb2RlXG4gICAgICAvL1xuICAgICAgdmFyIGh0bWxfZm9vdGVyID0gJydcbiAgICAgIGlmIChzZXR0aW5nLmZvb3RlclZpc2libGUpIHtcbiAgICAgICAgaHRtbF9mb290ZXIgKz0gJzxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj4nXG5cbiAgICAgICAgaWYgKHNldHRpbmcuY2FuY2VsVmlzaWJsZSkge1xuICAgICAgICAgIGh0bWxfZm9vdGVyICs9ICc8YnV0dG9uIGNsYXNzPVwiJyArIHNldHRpbmcuY2FuY2VsQ2xhc3MgKyAnXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXBlcmZvcm09XCJjYW5jZWxcIj4nICsgc2V0dGluZy5jYW5jZWxUZXh0ICsgJzwvYnV0dG9uPidcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXR0aW5nLmNvbmZpcm1WaXNpYmxlKSB7XG4gICAgICAgICAgaHRtbF9mb290ZXIgKz0gJzxidXR0b24gY2xhc3M9XCInICsgc2V0dGluZy5jb25maXJtQ2xhc3MgKyAnXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXBlcmZvcm09XCJjb25maXJtXCI+JyArIHNldHRpbmcuY29uZmlybVRleHQgKyAnPC9idXR0b24+J1xuICAgICAgICB9XG5cbiAgICAgICAgaHRtbF9mb290ZXIgKz0gJzwvZGl2PidcbiAgICAgIH1cblxuICAgICAgLy8gTW9kYWwgY29kZVxuICAgICAgLy9cbiAgICAgIHZhciBtb2RhbF9odG1sID1cbiAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlICcgKyBzZXR0aW5nLnR5cGUgKyAnXCIgaWQ9XCInICsgaWQgKyAnXCIgdGFiaW5kZXg9XCItMVwiJyArICghc2V0dGluZy5iYWNrZHJvcCA/ICcgZGF0YS1iYWNrZHJvcD1cImZhbHNlXCInIDogJycpICsgJz4gXFxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgJyArIHNldHRpbmcuc2l6ZSArICdcIj4gXFxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj4gXFxcbiAgICAgICAgICAgICAgICAnICsgaHRtbF9oZWFkZXIgKyAnIFxcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHkgJyArIHNldHRpbmcuYm9keUV4dHJhQ2xhc3MgKyAnXCI+IFxcXG4gICAgICAgICAgICAgICAgICAnICsgc2V0dGluZy5zcGlubmVyICsgJyBcXFxuICAgICAgICAgICAgICAgIDwvZGl2PiBcXFxuICAgICAgICAgICAgICAgICcgKyBodG1sX2Zvb3RlciArICcgXFxcbiAgICAgICAgICAgICAgPC9kaXY+IFxcXG4gICAgICAgICAgICA8L2Rpdj4gXFxcbiAgICAgICAgICA8L2Rpdj4nXG5cblxuICAgICAgLy8gU2hvdyBtb2RhbFxuICAgICAgJCgnYm9keScpLmFwcGVuZChtb2RhbF9odG1sKVxuICAgICAgJCgnIycgKyBpZCkubW9kYWwoJ3Nob3cnKVxuXG5cbiAgICAgIC8vIERlc3Ryb3kgYWZ0ZXIgY2xvc2VcbiAgICAgIC8vXG4gICAgICBpZiAoc2V0dGluZy5hdXRvRGVzdHJveSkge1xuICAgICAgICAkKCcjJyArIGlkKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQoJyMnICsgaWQpLnJlbW92ZSgpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHNldHRpbmcudGhpcykuYXR0cignZGF0YS1tb2RhbC1pZCcsIGlkKVxuICAgICAgfVxuXG5cbiAgICAgIC8vIExvYWQgZGF0YSBpbnRvIHRoZSBtb2RhbFxuICAgICAgLy9cbiAgICAgIGlmIChzZXR0aW5nLnVybCkge1xuICAgICAgICAkKCcjJyArIGlkKS5maW5kKCcubW9kYWwtYm9keScpLmxvYWQoc2V0dGluZy51cmwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvL3RvZG86IGEgY29uZmlybWVyICQodGhpcykucGVyZmVjdFNjcm9sbGJhcigndXBkYXRlJyk7XG4gICAgICAgICAgaGFuZGxlQ2FsbGJhY2soaWQpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHNldHRpbmcuaHRtbCkge1xuICAgICAgICAkKCcjJyArIGlkKS5maW5kKCcubW9kYWwtYm9keScpLmh0bWwoc2V0dGluZy5odG1sKVxuICAgICAgICBoYW5kbGVDYWxsYmFjayhpZClcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGluZy50YXJnZXQpIHtcbiAgICAgICAgJCgnIycgKyBpZCkuZmluZCgnLm1vZGFsLWJvZHknKS5odG1sKCQoc2V0dGluZy50YXJnZXQpLmh0bWwoKSlcbiAgICAgICAgaGFuZGxlQ2FsbGJhY2soaWQpXG4gICAgICB9XG4gICAgfVxuICB9XG59KGpRdWVyeSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9zZWFyY2guanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyNi8wOS8yMDIwIDE4OjE4XG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjc2VhcmNoJywgZnVuY3Rpb24gKGUpIHtcblxuICBjb25zdCBrZXl3b3JkID0gJCh0aGlzKS52YWwoKVxuICBjb25zdCBzZWFyY2hfcmVwb25zZV9ldHVkaWFudCA9ICQoJyNzZWFyY2hfcmVwb25zZV9ldHVkaWFudCcpXG4gIGNvbnN0IHNlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbCA9ICQoJyNzZWFyY2hfcmVwb25zZV9wZXJzb25uZWwnKVxuICBjb25zdCBzZWFyY2hfcmVwb25zZV9hdXRyZSA9ICQoJyNzZWFyY2hfcmVwb25zZV9hdXRyZScpXG5cbiAgaWYgKGtleXdvcmQubGVuZ3RoID4gMikge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3JlY2hlcmNoZScsIHtrZXl3b3JkOiBrZXl3b3JkfSksXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgbGV0IGh0bWwgPSAnJ1xuICAgICAgICBpZiAoZGF0YS5ldHVkaWFudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGpRdWVyeS5lYWNoKGRhdGEuZXR1ZGlhbnRzLCBmdW5jdGlvbiAoaW5kZXgsIGV0dWRpYW50KSB7XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICc8YSBjbGFzcz1cIm1lZGlhXCIgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCd1c2VyX3Byb2ZpbCcsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2V0dWRpYW50JyxcbiAgICAgICAgICAgICAgc2x1ZzogZXR1ZGlhbnQuc2x1Z1xuICAgICAgICAgICAgfSkgKyAnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XFxuJ1xuICAgICAgICAgICAgaWYgKGV0dWRpYW50LnBob3RvID09PSAnbm9pbWFnZS5wbmcnIHx8IGV0dWRpYW50LnBob3RvID09IG51bGwpIHtcbiAgICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGRpdiBjbGFzcz1cImF2YXRhci1jaXJjbGUtc21cIj5cXG4nICtcbiAgICAgICAgICAgICAgICAnICAgIDxzcGFuIGNsYXNzPVwiaW5pdGlhbHNcIj4nICsgZXR1ZGlhbnQuYXZhdGFySW5pdGlhbGVzICsgJzwvc3Bhbj5cXG4nICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGltZyBjbGFzcz1cImF2YXRhciBhdmF0YXItc21cIiBzcmM9XCInICsgZGF0YS5iYXNlcGF0aCArICdldHVkaWFudHMvJyArIGV0dWRpYW50LnBob3RvICsgJ1wiIGFsdD1cIlBob3RvIGRlIHByb2ZpbCBkZSAnICsgZXR1ZGlhbnQuZGlzcGxheVByICsgJ1wiPlxcbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJyAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz4nICsgZXR1ZGlhbnQuZGlzcGxheVByICsgJyAoJyArIGV0dWRpYW50LnNlbWVzdHJlICsgJyk8L3N0cm9uZz5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgY2xhc3M9XCJmbG9hdC1yaWdodFwiPicgKyBldHVkaWFudC5ncm91cGVzICsgJzwvdGltZT5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC9hPidcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGh0bWwgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5QYXMgZGUgcsOpc3VsdGF0IHBvdXIgdm90cmUgcmVjaGVyY2hlIDxzdHJvbmc+XCInICsga2V5d29yZCArICdcIjwvc3Ryb25nPjwvZGl2PidcbiAgICAgICAgfVxuXG4gICAgICAgIHNlYXJjaF9yZXBvbnNlX2V0dWRpYW50LmVtcHR5KCkuYXBwZW5kKGh0bWwpXG5cbiAgICAgICAgaHRtbCA9ICcnXG4gICAgICAgIGlmIChkYXRhLnBlcnNvbm5lbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGpRdWVyeS5lYWNoKGRhdGEucGVyc29ubmVscywgZnVuY3Rpb24gKGluZGV4LCBwZXJzb25uZWwpIHtcbiAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxhIGNsYXNzPVwibWVkaWEgaXRlbXMtY2VudGVyXCIgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCd1c2VyX3Byb2ZpbCcsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3BlcnNvbm5lbCcsXG4gICAgICAgICAgICAgIHNsdWc6IHBlcnNvbm5lbC5zbHVnXG4gICAgICAgICAgICB9KSArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cXG4nXG4gICAgICAgICAgICBpZiAocGVyc29ubmVsLnBob3RvID09PSAnbm9pbWFnZS5wbmcnIHx8IHBlcnNvbm5lbC5waG90byA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxkaXYgY2xhc3M9XCJhdmF0YXItY2lyY2xlLXNtXCI+XFxuJyArXG4gICAgICAgICAgICAgICAgJyAgICA8c3BhbiBjbGFzcz1cImluaXRpYWxzXCI+JyArIHBlcnNvbm5lbC5hdmF0YXJJbml0aWFsZXMgKyAnPC9zcGFuPlxcbicgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBodG1sID0gaHRtbCArICc8aW1nIGNsYXNzPVwiYXZhdGFyIGF2YXRhci1zbVwiIHNyYz1cIicgKyBkYXRhLmJhc2VwYXRoICsgJ3BlcnNvbm5lbHMvJyArIHBlcnNvbm5lbC5waG90byArICdcIiBhbHQ9XCJQaG90byBkZSBwcm9maWwgZGUgJyArIHBlcnNvbm5lbC5kaXNwbGF5UHIgKyAnXCI+XFxuJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnICAgICAgICAgICAgICAgICAgICAgICAgPHA+JyArIHBlcnNvbm5lbC5kaXNwbGF5UHIgKyAnPC9wPlxcbicgK1xuICAgICAgICAgICAgICAnPC9hPidcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGh0bWwgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5QYXMgZGUgcsOpc3VsdGF0IHBvdXIgdm90cmUgcmVjaGVyY2hlIDxzdHJvbmc+XCInICsga2V5d29yZCArICdcIjwvc3Ryb25nPjwvZGl2PidcbiAgICAgICAgfVxuICAgICAgICBzZWFyY2hfcmVwb25zZV9wZXJzb25uZWwuZW1wdHkoKS5hcHBlbmQoaHRtbClcblxuICAgICAgICBodG1sID0gJydcbiAgICAgICAgaWYgKGRhdGEuYXV0cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBqUXVlcnkuZWFjaChkYXRhLmF1dHJlcywgZnVuY3Rpb24gKGluZGV4LCBhdXRyZSkge1xuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGEgY2xhc3M9XCJtZWRpYSBpdGVtcy1jZW50ZXJcIiBocmVmPVwiXCI+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyIGF2YXRhci1zbVwiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvYXZhdGFyLzEuanBnXCIgYWx0PVwiLi4uXCI+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8cD4nICsgYXV0cmUgKyAnPC9wPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2E+J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPlBhcyBkZSByw6lzdWx0YXQgcG91ciB2b3RyZSByZWNoZXJjaGUgPHN0cm9uZz5cIicgKyBrZXl3b3JkICsgJ1wiPC9zdHJvbmc+PC9kaXY+J1xuICAgICAgICB9XG4gICAgICAgIHNlYXJjaF9yZXBvbnNlX2F1dHJlLmVtcHR5KCkuYXBwZW5kKGh0bWwpXG4gICAgICB9XG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiPlNhaXNpciBhdSBtb2lucyAzIGNhcmFjdMOocmVzPC9kaXY+J1xuICAgIHNlYXJjaF9yZXBvbnNlX2F1dHJlLmVtcHR5KCkuYXBwZW5kKGh0bWwpXG4gICAgc2VhcmNoX3JlcG9uc2VfcGVyc29ubmVsLmVtcHR5KCkuYXBwZW5kKGh0bWwpXG4gICAgc2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQuZW1wdHkoKS5hcHBlbmQoaHRtbClcbiAgfVxufSlcblxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3V0aWwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxMS8xMC8yMDIwIDA4OjA0XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG5mdW5jdGlvbiByZWFkVXJsTWVudSAoJHVybCkge1xuICBjb25zdCAkZWx0ID0gJHVybC5zcGxpdCgnLycpXG4gIGxldCAkZmlyc3RFbHQgPSAyXG4gIGlmICgkZWx0WzFdID09PSAnaW5kZXgucGhwJykge1xuICAgIGlmICgkZWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICRmaXJzdEVsdCA9IDNcbiAgICB9XG4gIH1cblxuICBpZiAoJGVsdFskZmlyc3RFbHRdID09PSAnc3VwZXItYWRtaW5pc3RyYXRpb24nKSB7XG4gICAgJGZpcnN0RWx0ID0gJGZpcnN0RWx0ICsgMVxuICB9XG5cbiAgaWYgKCRlbHRbJGVsdC5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAkZWx0LnBvcCgpXG4gIH1cblxuICAkKCcubWVudS1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICQoJyNtZW51LScgKyAkZWx0WyRmaXJzdEVsdF0pLmFkZENsYXNzKCdhY3RpdmUnKVxufVxuXG4vL2NvbG9yaXNlIGxlIGJvbiBtZW51XG5yZWFkVXJsTWVudSgkKGxvY2F0aW9uKS5hdHRyKCdwYXRobmFtZScpKVxuXG5Td2FsLm1peGluKHtcbiAgY3VzdG9tQ2xhc3M6IHtcbiAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgfSxcbiAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG59KVxuLy9wb3AgdXAgZGUgY29uZmlybWF0aW9uIGRlIHN1cHByZXNzaW9uXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnN1cHByaW1lcicsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxuICBjb25zdCBjc3JmID0gJCh0aGlzKS5kYXRhKCdjc3JmJylcbiAgU3dhbC5maXJlKHtcbiAgICB0aXRsZTogJ0NvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiA/JyxcbiAgICB0ZXh0OiAnTFxcJ29ww6lyYXRpb24gbmUgcG91cnJhIHBhcyDDqnRyZSBhbm51bMOpZS4nLFxuICAgIGljb246ICd3YXJuaW5nJyxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIGplIGNvbmZpcm1lJyxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyJyxcbiAgICBjdXN0b21DbGFzczoge1xuICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICB9LFxuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdG9rZW46IGNzcmZcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmhhc093blByb3BlcnR5KCdyZWRpcmVjdCcpICYmIGlkLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGlkLnVybFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjbGlnbmVfJyArIGlkKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTdXBwcmVzc2lvbiBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbcOpIScsXG4gICAgICAgICAgICAgIHRleHQ6ICdMXFwnZW5yZWdpc3RyZW1lbnQgYSDDqXTDqSBzdXBwcmltw6kuJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIScsXG4gICAgICAgICAgICB0ZXh0OiAnTWVyY2kgZGUgcmVub3V2ZWxlciBsXFwnb3DDqXJhdGlvbicsXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSB0ZW50YXRpdmUgZGUgc3VwcHJlc3Npb24nLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xuICAgICAgcmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnXG4gICAgKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXG4gICAgICAgIHRleHQ6ICdPSyEgVG91dCBlc3QgY29tbWUgYXZhbnQgIScsXG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxvdXQgKG1lc3NhZ2UsIGxhYmVsKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxsb3V0JylcbiAgdmFyIHRyYW5zbGF0ZSA9IG5ldyBBcnJheSgpXG4gIHRyYW5zbGF0ZVsnc3VjY2VzcyddID0gJ1N1Y2PDqHMnXG4gIHRyYW5zbGF0ZVsnZGFuZ2VyJ10gPSAnRXJyZXVyJ1xuICB0cmFuc2xhdGVbJ3dhcm5pbmcnXSA9ICdBdHRlbnRpb24nXG5cbiAgY29uc3QgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY2FsbG91dCBjYWxsb3V0LScgKyBsYWJlbCArICdcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiY2FsbG91dFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxoNT4nICsgdHJhbnNsYXRlW2xhYmVsXSArICc8L2g1PlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxwPicgKyBtZXNzYWdlICsgJzwvcD5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgIDwvZGl2PidcblxuICAkKCcjbWFpbkNvbnRlbnQnKS5wcmVwZW5kKGh0bWwpLnNsaWRlRG93bignc2xvdycpXG4gICQoJy5jYWxsb3V0JykuZGVsYXkoNTAwMCkuc2xpZGVVcCgnc2xvdycpXG59XG5cbi8vRWRpdGFibGVcbmxldCBteUVkaXRJbml0aWFsQ29udGVudCA9ICcnXG5sZXQgdHlwZSA9ICd0ZXh0J1xubGV0IEVkaXRPbkxpbmUgPSBmYWxzZVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm15ZWRpdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBteUVkaXRJbml0aWFsQ29udGVudCA9ICQodGhpcylcbiAgbGV0IGh0bWwgPSAnJ1xuICBFZGl0T25MaW5lID0gdHJ1ZVxuICBpZiAodHlwZW9mICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gIH1cblxuICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICdzZWxlY3QnKSB7XG4gICAgLy90b2RvOiBBIGZpbmFsaXNlclxuICB9IGVsc2Uge1xuICAgIGh0bWwgPSBnZW5lcmVJbnB1dCgkKHRoaXMpKVxuICB9XG4gICQodGhpcykucmVwbGFjZVdpdGgoaHRtbClcbiAgJCgnI215ZWRpdC1pbnB1dCcpLmZvY3VzKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbXllZGl0LWlucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmIGUud2hpY2ggPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRGF0YSgpXG4gIH1cblxuICBpZiAoRWRpdE9uTGluZSA9PT0gdHJ1ZSAmJiBlLndoaWNoID09PSAyNykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI215ZWRpdC1hbm51bGUnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhICgpIHtcbiAgbGV0IHZhbCA9ICQoJyNteWVkaXQtaW5wdXQnKS52YWwoKVxuICAkLmFqYXgoe1xuICAgIHVybDogbXlFZGl0SW5pdGlhbENvbnRlbnQuYXR0cignaHJlZicpLFxuICAgIGRhdGE6IHtcbiAgICAgIGZpZWxkOiBteUVkaXRJbml0aWFsQ29udGVudC5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6IHZhbCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG15RWRpdEluaXRpYWxDb250ZW50Lmh0bWwodmFsKVxuICAgICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gICAgICBFZGl0T25MaW5lID0gZmFsc2VcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdlbmVyZUlucHV0ICgkb2JqKSB7XG4gIGxldCAkaHRtbCA9ICc8ZGl2IGlkPVwibXlFZGl0LXpvbmVcIj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiAvPidcbiAgJGh0bWwgPSAkaHRtbCArICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zcXVhcmUgYnRuLXNtIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lXCIgaWQ9XCJteWVkaXQtdmFsaWRlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+PC9idXR0b24+J1xuICAkaHRtbCA9ICRodG1sICsgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNxdWFyZSBidG4tc20gYnRuLWRhbmdlciBidG4tb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPjwvZGl2PidcbiAgcmV0dXJuICRodG1sXG59XG5cbmpRdWVyeS5mbi5kYXRhQXR0ciA9IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSB8fCBkZWZcbn1cblxualF1ZXJ5LmZuLmhhc0RhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuICQodGhpcylbMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKVxufVxuXG5mdW5jdGlvbiBkYXRhVG9PcHRpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geFsxXS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhT3B0aW9ucyAoZWwsIGNhc3RMaXN0KSB7XG4gIHZhciBvcHRpb25zID0ge31cbiAgJC5lYWNoKCQoZWwpLmRhdGEoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgIGtleSA9IGRhdGFUb09wdGlvbihrZXkpXG5cbiAgICAvLyBFc2NhcGUgZGF0YS1wcm92aWRlXG4gICAgaWYgKGtleSA9PSAncHJvdmlkZScpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChjYXN0TGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB0eXBlID0gY2FzdExpc3Rba2V5XVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ251bSc6XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uc1trZXldID0gdmFsdWVcbiAgfSlcblxuICByZXR1cm4gb3B0aW9uc1xufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3ZhbGlkYXRvci1iczQuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyOC8xMS8yMDE5IDE5OjQwXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gVkFMSURBVE9SIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBnZXRWYWx1ZSgkZWwpIHtcbiAgICByZXR1cm4gJGVsLmlzKCdbdHlwZT1cImNoZWNrYm94XCJdJykgPyAkZWwucHJvcCgnY2hlY2tlZCcpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgJGVsLmlzKCdbdHlwZT1cInJhZGlvXCJdJykgICAgPyAhISQoJ1tuYW1lPVwiJyArICRlbC5hdHRyKCduYW1lJykgKyAnXCJdOmNoZWNrZWQnKS5sZW5ndGggOlxuICAgICAgICAgICAkZWwuaXMoJ3NlbGVjdFttdWx0aXBsZV0nKSAgPyAoJGVsLnZhbCgpIHx8IFtdKS5sZW5ndGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVsLnZhbCgpXG4gIH1cblxuICB2YXIgVmFsaWRhdG9yID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgICAgPSBvcHRpb25zXG4gICAgdGhpcy52YWxpZGF0b3JzID0gJC5leHRlbmQoe30sIFZhbGlkYXRvci5WQUxJREFUT1JTLCBvcHRpb25zLmN1c3RvbSlcbiAgICB0aGlzLiRlbGVtZW50ICAgPSAkKGVsZW1lbnQpXG4gICAgdGhpcy4kYnRuICAgICAgID0gJCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcignW2Zvcm09XCInICsgdGhpcy4kZWxlbWVudC5hdHRyKCdpZCcpICsgJ1wiXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuJGVsZW1lbnQuZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKSlcblxuICAgIHRoaXMudXBkYXRlKClcblxuICAgIHRoaXMuJGVsZW1lbnQub24oJ2lucHV0LmJzLnZhbGlkYXRvciBjaGFuZ2UuYnMudmFsaWRhdG9yIGZvY3Vzb3V0LmJzLnZhbGlkYXRvcicsICQucHJveHkodGhpcy5vbklucHV0LCB0aGlzKSlcbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdzdWJtaXQuYnMudmFsaWRhdG9yJywgJC5wcm94eSh0aGlzLm9uU3VibWl0LCB0aGlzKSlcbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdyZXNldC5icy52YWxpZGF0b3InLCAkLnByb3h5KHRoaXMucmVzZXQsIHRoaXMpKVxuXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS1tYXRjaF0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgPSAkKHRoaXMpXG4gICAgICB2YXIgdGFyZ2V0ID0gJHRoaXMuYXR0cignZGF0YS1tYXRjaCcpXG5cbiAgICAgICQodGFyZ2V0KS5vbignaW5wdXQuYnMudmFsaWRhdG9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZ2V0VmFsdWUoJHRoaXMpICYmICR0aGlzLnRyaWdnZXIoJ2lucHV0LmJzLnZhbGlkYXRvcicpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBydW4gdmFsaWRhdG9ycyBmb3IgZmllbGRzIHdpdGggdmFsdWVzLCBidXQgZG9uJ3QgY2xvYmJlciBzZXJ2ZXItc2lkZSBlcnJvcnNcbiAgICB0aGlzLiRpbnB1dHMuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRWYWx1ZSgkKHRoaXMpKSAmJiAhJCh0aGlzKS5jbG9zZXN0KCcuaGFzLWVycm9yJykubGVuZ3RoXG4gICAgfSkudHJpZ2dlcignZm9jdXNvdXQnKVxuXG4gICAgdGhpcy4kZWxlbWVudC5hdHRyKCdub3ZhbGlkYXRlJywgdHJ1ZSkgLy8gZGlzYWJsZSBhdXRvbWF0aWMgbmF0aXZlIHZhbGlkYXRpb25cbiAgfVxuXG4gIFZhbGlkYXRvci5WRVJTSU9OID0gJzAuMTEuOSdcblxuICBWYWxpZGF0b3IuSU5QVVRfU0VMRUNUT1IgPSAnOmlucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSwgW3R5cGU9XCJzdWJtaXRcIl0sIFt0eXBlPVwicmVzZXRcIl0sIGJ1dHRvbiknXG5cbiAgVmFsaWRhdG9yLkZPQ1VTX09GRlNFVCA9IDIwXG5cbiAgVmFsaWRhdG9yLkRFRkFVTFRTID0ge1xuICAgIGRlbGF5OiA1MDAsXG4gICAgaHRtbDogZmFsc2UsXG4gICAgZGlzYWJsZTogdHJ1ZSxcbiAgICBmb2N1czogdHJ1ZSxcbiAgICBjdXN0b206IHt9LFxuICAgIGVycm9yczoge1xuICAgICAgbWF0Y2g6ICdEb2VzIG5vdCBtYXRjaCcsXG4gICAgICBtaW5sZW5ndGg6ICdOb3QgbG9uZyBlbm91Z2gnXG4gICAgfSxcbiAgICBmZWVkYmFjazoge1xuICAgICAgc3VjY2VzczogJ2dseXBoaWNvbi1vaycsXG4gICAgICBlcnJvcjogJ2dseXBoaWNvbi1yZW1vdmUnXG4gICAgfVxuICB9XG5cbiAgVmFsaWRhdG9yLlZBTElEQVRPUlMgPSB7XG4gICAgJ25hdGl2ZSc6IGZ1bmN0aW9uICgkZWwpIHtcbiAgICAgIHZhciBlbCA9ICRlbFswXVxuICAgICAgaWYgKGVsLmNoZWNrVmFsaWRpdHkpIHtcbiAgICAgICAgcmV0dXJuICFlbC5jaGVja1ZhbGlkaXR5KCkgJiYgIWVsLnZhbGlkaXR5LnZhbGlkICYmIChlbC52YWxpZGF0aW9uTWVzc2FnZSB8fCBcImVycm9yIVwiKVxuICAgICAgfVxuICAgIH0sXG4gICAgJ21hdGNoJzogZnVuY3Rpb24gKCRlbCkge1xuICAgICAgdmFyIHRhcmdldCA9ICRlbC5hdHRyKCdkYXRhLW1hdGNoJylcbiAgICAgIHJldHVybiAkZWwudmFsKCkgIT09ICQodGFyZ2V0KS52YWwoKSAmJiBWYWxpZGF0b3IuREVGQVVMVFMuZXJyb3JzLm1hdGNoXG4gICAgfSxcbiAgICAnbWlubGVuZ3RoJzogZnVuY3Rpb24gKCRlbCkge1xuICAgICAgdmFyIG1pbmxlbmd0aCA9ICRlbC5hdHRyKCdkYXRhLW1pbmxlbmd0aCcpXG4gICAgICByZXR1cm4gJGVsLnZhbCgpLmxlbmd0aCA8IG1pbmxlbmd0aCAmJiBWYWxpZGF0b3IuREVGQVVMVFMuZXJyb3JzLm1pbmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuXG4gICAgdGhpcy4kaW5wdXRzID0gdGhpcy4kZWxlbWVudC5maW5kKFZhbGlkYXRvci5JTlBVVF9TRUxFQ1RPUilcbiAgICAgIC5hZGQodGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS12YWxpZGF0ZT1cInRydWVcIl0nKSlcbiAgICAgIC5ub3QodGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS12YWxpZGF0ZT1cImZhbHNlXCJdJylcbiAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkgeyBzZWxmLmNsZWFyRXJyb3JzKCQodGhpcykpIH0pXG4gICAgICApXG5cbiAgICB0aGlzLnRvZ2dsZVN1Ym1pdCgpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5vbklucHV0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzXG4gICAgdmFyICRlbCAgICAgICAgID0gJChlLnRhcmdldClcbiAgICB2YXIgZGVmZXJFcnJvcnMgPSBlLnR5cGUgIT09ICdmb2N1c291dCdcblxuICAgIGlmICghdGhpcy4kaW5wdXRzLmlzKCRlbCkpIHJldHVyblxuXG4gICAgdGhpcy52YWxpZGF0ZUlucHV0KCRlbCwgZGVmZXJFcnJvcnMpLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi50b2dnbGVTdWJtaXQoKVxuICAgIH0pXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlSW5wdXQgPSBmdW5jdGlvbiAoJGVsLCBkZWZlckVycm9ycykge1xuICAgIHZhciB2YWx1ZSAgICAgID0gZ2V0VmFsdWUoJGVsKVxuICAgIHZhciBwcmV2RXJyb3JzID0gJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5lcnJvcnMnKVxuXG4gICAgaWYgKCRlbC5pcygnW3R5cGU9XCJyYWRpb1wiXScpKSAkZWwgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ2lucHV0W25hbWU9XCInICsgJGVsLmF0dHIoJ25hbWUnKSArICdcIl0nKVxuXG4gICAgdmFyIGUgPSAkLkV2ZW50KCd2YWxpZGF0ZS5icy52YWxpZGF0b3InLCB7cmVsYXRlZFRhcmdldDogJGVsWzBdfSlcbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSlcbiAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICB2YXIgc2VsZiA9IHRoaXNcblxuICAgIHJldHVybiB0aGlzLnJ1blZhbGlkYXRvcnMoJGVsKS5kb25lKGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgICAgICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZXJyb3JzJywgZXJyb3JzKVxuXG4gICAgICBlcnJvcnMubGVuZ3RoXG4gICAgICAgID8gZGVmZXJFcnJvcnMgPyBzZWxmLmRlZmVyKCRlbCwgc2VsZi5zaG93RXJyb3JzKSA6IHNlbGYuc2hvd0Vycm9ycygkZWwpXG4gICAgICAgIDogc2VsZi5jbGVhckVycm9ycygkZWwpXG5cbiAgICAgIGlmICghcHJldkVycm9ycyB8fCBlcnJvcnMudG9TdHJpbmcoKSAhPT0gcHJldkVycm9ycy50b1N0cmluZygpKSB7XG4gICAgICAgIGUgPSBlcnJvcnMubGVuZ3RoXG4gICAgICAgICAgPyAkLkV2ZW50KCdpbnZhbGlkLmJzLnZhbGlkYXRvcicsIHtyZWxhdGVkVGFyZ2V0OiAkZWxbMF0sIGRldGFpbDogZXJyb3JzfSlcbiAgICAgICAgICA6ICQuRXZlbnQoJ3ZhbGlkLmJzLnZhbGlkYXRvcicsIHtyZWxhdGVkVGFyZ2V0OiAkZWxbMF0sIGRldGFpbDogcHJldkVycm9yc30pXG5cbiAgICAgICAgc2VsZi4kZWxlbWVudC50cmlnZ2VyKGUpXG4gICAgICB9XG5cbiAgICAgIHNlbGYudG9nZ2xlU3VibWl0KClcblxuICAgICAgc2VsZi4kZWxlbWVudC50cmlnZ2VyKCQuRXZlbnQoJ3ZhbGlkYXRlZC5icy52YWxpZGF0b3InLCB7cmVsYXRlZFRhcmdldDogJGVsWzBdfSkpXG4gICAgfSlcbiAgfVxuXG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5ydW5WYWxpZGF0b3JzID0gZnVuY3Rpb24gKCRlbCkge1xuICAgIHZhciBlcnJvcnMgICA9IFtdXG4gICAgdmFyIGRlZmVycmVkID0gJC5EZWZlcnJlZCgpXG5cbiAgICAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmRlZmVycmVkJykgJiYgJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5kZWZlcnJlZCcpLnJlamVjdCgpXG4gICAgJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5kZWZlcnJlZCcsIGRlZmVycmVkKVxuXG4gICAgZnVuY3Rpb24gZ2V0VmFsaWRhdG9yU3BlY2lmaWNFcnJvcihrZXkpIHtcbiAgICAgIHJldHVybiAkZWwuYXR0cignZGF0YS0nICsga2V5ICsgJy1lcnJvcicpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmFsaWRpdHlTdGF0ZUVycm9yKCkge1xuICAgICAgdmFyIHZhbGlkaXR5ID0gJGVsWzBdLnZhbGlkaXR5XG4gICAgICByZXR1cm4gdmFsaWRpdHkudHlwZU1pc21hdGNoICAgID8gJGVsLmF0dHIoJ2RhdGEtdHlwZS1lcnJvcicpXG4gICAgICAgICAgIDogdmFsaWRpdHkucGF0dGVybk1pc21hdGNoID8gJGVsLmF0dHIoJ2RhdGEtcGF0dGVybi1lcnJvcicpXG4gICAgICAgICAgIDogdmFsaWRpdHkuc3RlcE1pc21hdGNoICAgID8gJGVsLmF0dHIoJ2RhdGEtc3RlcC1lcnJvcicpXG4gICAgICAgICAgIDogdmFsaWRpdHkucmFuZ2VPdmVyZmxvdyAgID8gJGVsLmF0dHIoJ2RhdGEtbWF4LWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS5yYW5nZVVuZGVyZmxvdyAgPyAkZWwuYXR0cignZGF0YS1taW4tZXJyb3InKVxuICAgICAgICAgICA6IHZhbGlkaXR5LnZhbHVlTWlzc2luZyAgICA/ICRlbC5hdHRyKCdkYXRhLXJlcXVpcmVkLWVycm9yJylcbiAgICAgICAgICAgOiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R2VuZXJpY0Vycm9yKCkge1xuICAgICAgcmV0dXJuICRlbC5hdHRyKCdkYXRhLWVycm9yJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFcnJvck1lc3NhZ2Uoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0VmFsaWRhdG9yU3BlY2lmaWNFcnJvcihrZXkpXG4gICAgICAgICAgfHwgZ2V0VmFsaWRpdHlTdGF0ZUVycm9yKClcbiAgICAgICAgICB8fCBnZXRHZW5lcmljRXJyb3IoKVxuICAgIH1cblxuICAgICQuZWFjaCh0aGlzLnZhbGlkYXRvcnMsICQucHJveHkoZnVuY3Rpb24gKGtleSwgdmFsaWRhdG9yKSB7XG4gICAgICB2YXIgZXJyb3IgPSBudWxsXG4gICAgICBpZiAoKGdldFZhbHVlKCRlbCkgfHwgJGVsLmF0dHIoJ3JlcXVpcmVkJykpICYmXG4gICAgICAgICAgKCRlbC5hdHRyKCdkYXRhLScgKyBrZXkpICE9PSB1bmRlZmluZWQgfHwga2V5ID09ICduYXRpdmUnKSAmJlxuICAgICAgICAgIChlcnJvciA9IHZhbGlkYXRvci5jYWxsKHRoaXMsICRlbCkpKSB7XG4gICAgICAgICBlcnJvciA9IGdldEVycm9yTWVzc2FnZShrZXkpIHx8IGVycm9yXG4gICAgICAgICF+ZXJyb3JzLmluZGV4T2YoZXJyb3IpICYmIGVycm9ycy5wdXNoKGVycm9yKVxuICAgICAgfVxuICAgIH0sIHRoaXMpKVxuXG4gICAgaWYgKCFlcnJvcnMubGVuZ3RoICYmIGdldFZhbHVlKCRlbCkgJiYgJGVsLmF0dHIoJ2RhdGEtcmVtb3RlJykpIHtcbiAgICAgIHRoaXMuZGVmZXIoJGVsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0ge31cbiAgICAgICAgZGF0YVskZWwuYXR0cignbmFtZScpXSA9IGdldFZhbHVlKCRlbClcbiAgICAgICAgJC5nZXQoJGVsLmF0dHIoJ2RhdGEtcmVtb3RlJyksIGRhdGEpXG4gICAgICAgICAgLmZhaWwoZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvcikgeyBlcnJvcnMucHVzaChnZXRFcnJvck1lc3NhZ2UoJ3JlbW90ZScpIHx8IGVycm9yKSB9KVxuICAgICAgICAgIC5hbHdheXMoZnVuY3Rpb24gKCkgeyBkZWZlcnJlZC5yZXNvbHZlKGVycm9ycyl9KVxuICAgICAgfSlcbiAgICB9IGVsc2UgZGVmZXJyZWQucmVzb2x2ZShlcnJvcnMpXG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuXG4gICAgJC53aGVuKHRoaXMuJGlucHV0cy5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgICByZXR1cm4gc2VsZi52YWxpZGF0ZUlucHV0KCQodGhpcyksIGZhbHNlKVxuICAgIH0pKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYudG9nZ2xlU3VibWl0KClcbiAgICAgIHNlbGYuZm9jdXNFcnJvcigpXG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmZvY3VzRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZm9jdXMpIHJldHVyblxuXG4gICAgdmFyICRpbnB1dCA9IHRoaXMuJGVsZW1lbnQuZmluZChcIi5oYXMtZXJyb3I6Zmlyc3QgOmlucHV0XCIpXG4gICAgaWYgKCRpbnB1dC5sZW5ndGggPT09IDApIHJldHVyblxuXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJGlucHV0Lm9mZnNldCgpLnRvcCAtIFZhbGlkYXRvci5GT0NVU19PRkZTRVR9LCAyNTApXG4gICAgJGlucHV0LmZvY3VzKClcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuc2hvd0Vycm9ycyA9IGZ1bmN0aW9uICgkZWwpIHtcbiAgICB2YXIgbWV0aG9kID0gdGhpcy5vcHRpb25zLmh0bWwgPyAnaHRtbCcgOiAndGV4dCdcbiAgICB2YXIgZXJyb3JzID0gJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5lcnJvcnMnKVxuICAgIHZhciAkZ3JvdXAgPSAkZWwuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKVxuICAgIHZhciAkYmxvY2sgPSAkZ3JvdXAuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuICAgIHZhciAkZmVlZGJhY2sgPSAkZ3JvdXAuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuXG4gICAgaWYgKCFlcnJvcnMubGVuZ3RoKSByZXR1cm5cblxuICAgICRlbC5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xuXG4gICAgZXJyb3JzID0gJCgnPHVsLz4nKVxuICAgICAgLmFkZENsYXNzKCdsaXN0LXVuc3R5bGVkJylcbiAgICAgIC5hcHBlbmQoJC5tYXAoZXJyb3JzLCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuICQoJzxsaS8+JylbbWV0aG9kXShlcnJvcikgfSkpXG5cbiAgICAkYmxvY2suZGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcpID09PSB1bmRlZmluZWQgJiYgJGJsb2NrLmRhdGEoJ2JzLnZhbGlkYXRvci5vcmlnaW5hbENvbnRlbnQnLCAkYmxvY2suaHRtbCgpKVxuICAgICRibG9jay5lbXB0eSgpLmFwcGVuZChlcnJvcnMpXG4gICAgJGdyb3VwLmFkZENsYXNzKCdoYXMtZXJyb3IgaGFzLWRhbmdlcicpXG5cbiAgICAkZ3JvdXAuaGFzQ2xhc3MoJ2hhcy1mZWVkYmFjaycpXG4gICAgICAmJiAkZmVlZGJhY2sucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLnN1Y2Nlc3MpXG4gICAgICAmJiAkZmVlZGJhY2suYWRkQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLmVycm9yKVxuICAgICAgJiYgJGdyb3VwLnJlbW92ZUNsYXNzKCdoYXMtc3VjY2VzcycpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmNsZWFyRXJyb3JzID0gZnVuY3Rpb24gKCRlbCkge1xuICAgIHZhciAkZ3JvdXAgPSAkZWwuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKVxuICAgIHZhciAkYmxvY2sgPSAkZ3JvdXAuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuICAgIHZhciAkZmVlZGJhY2sgPSAkZ3JvdXAuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuXG4gICAgJGVsLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJyk7XG5cbiAgICAkYmxvY2suaHRtbCgkYmxvY2suZGF0YSgnYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudCcpKVxuICAgICRncm91cC5yZW1vdmVDbGFzcygnaGFzLWVycm9yIGhhcy1kYW5nZXIgaGFzLXN1Y2Nlc3MnKVxuXG4gICAgJGdyb3VwLmhhc0NsYXNzKCdoYXMtZmVlZGJhY2snKVxuICAgICAgJiYgJGZlZWRiYWNrLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5lcnJvcilcbiAgICAgICYmICRmZWVkYmFjay5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suc3VjY2VzcylcbiAgICAgICYmIGdldFZhbHVlKCRlbClcbiAgICAgICYmICRmZWVkYmFjay5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suc3VjY2VzcylcbiAgICAgICYmICRncm91cC5hZGRDbGFzcygnaGFzLXN1Y2Nlc3MnKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5oYXNFcnJvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZmllbGRFcnJvcnMoKSB7XG4gICAgICByZXR1cm4gISEoJCh0aGlzKS5kYXRhKCdicy52YWxpZGF0b3IuZXJyb3JzJykgfHwgW10pLmxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiAhIXRoaXMuJGlucHV0cy5maWx0ZXIoZmllbGRFcnJvcnMpLmxlbmd0aFxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5pc0luY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZmllbGRJbmNvbXBsZXRlKCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0VmFsdWUoJCh0aGlzKSlcbiAgICAgIHJldHVybiAhKHR5cGVvZiB2YWx1ZSA9PSBcInN0cmluZ1wiID8gJC50cmltKHZhbHVlKSA6IHZhbHVlKVxuICAgIH1cblxuICAgIHJldHVybiAhIXRoaXMuJGlucHV0cy5maWx0ZXIoJ1tyZXF1aXJlZF0nKS5maWx0ZXIoZmllbGRJbmNvbXBsZXRlKS5sZW5ndGhcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMudmFsaWRhdGUoKVxuICAgIGlmICh0aGlzLmlzSW5jb21wbGV0ZSgpIHx8IHRoaXMuaGFzRXJyb3JzKCkpIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS50b2dnbGVTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGlzYWJsZSkgcmV0dXJuXG4gICAgdGhpcy4kYnRuLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHRoaXMuaXNJbmNvbXBsZXRlKCkgfHwgdGhpcy5oYXNFcnJvcnMoKSlcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuZGVmZXIgPSBmdW5jdGlvbiAoJGVsLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gJC5wcm94eShjYWxsYmFjaywgdGhpcywgJGVsKVxuICAgIGlmICghdGhpcy5vcHRpb25zLmRlbGF5KSByZXR1cm4gY2FsbGJhY2soKVxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci50aW1lb3V0JykpXG4gICAgJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci50aW1lb3V0Jywgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIHRoaXMub3B0aW9ucy5kZWxheSkpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5lcnJvcilcbiAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suc3VjY2VzcylcblxuICAgIHRoaXMuJGlucHV0c1xuICAgICAgLnJlbW92ZURhdGEoWydicy52YWxpZGF0b3IuZXJyb3JzJywgJ2JzLnZhbGlkYXRvci5kZWZlcnJlZCddKVxuICAgICAgLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJylcbiAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgICB2YXIgdGltZW91dCA9ICR0aGlzLmRhdGEoJ2JzLnZhbGlkYXRvci50aW1lb3V0JylcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KSAmJiAkdGhpcy5yZW1vdmVEYXRhKCdicy52YWxpZGF0b3IudGltZW91dCcpXG4gICAgICB9KVxuXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCcuaW52YWxpZC1mZWVkYmFjaycpXG4gICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgICAgdmFyIG9yaWdpbmFsQ29udGVudCA9ICR0aGlzLmRhdGEoJ2JzLnZhbGlkYXRvci5vcmlnaW5hbENvbnRlbnQnKVxuXG4gICAgICAgICR0aGlzXG4gICAgICAgICAgLnJlbW92ZURhdGEoJ2JzLnZhbGlkYXRvci5vcmlnaW5hbENvbnRlbnQnKVxuICAgICAgICAgIC5odG1sKG9yaWdpbmFsQ29udGVudClcbiAgICAgIH0pXG5cbiAgICB0aGlzLiRidG4ucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJylcblxuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnLmhhcy1lcnJvciwgLmhhcy1kYW5nZXIsIC5oYXMtc3VjY2VzcycpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3IgaGFzLWRhbmdlciBoYXMtc3VjY2VzcycpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzZXQoKVxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLnJlbW92ZUF0dHIoJ25vdmFsaWRhdGUnKVxuICAgICAgLnJlbW92ZURhdGEoJ2JzLnZhbGlkYXRvcicpXG4gICAgICAub2ZmKCcuYnMudmFsaWRhdG9yJylcblxuICAgIHRoaXMuJGlucHV0c1xuICAgICAgLm9mZignLmJzLnZhbGlkYXRvcicpXG5cbiAgICB0aGlzLm9wdGlvbnMgICAgPSBudWxsXG4gICAgdGhpcy52YWxpZGF0b3JzID0gbnVsbFxuICAgIHRoaXMuJGVsZW1lbnQgICA9IG51bGxcbiAgICB0aGlzLiRidG4gICAgICAgPSBudWxsXG4gICAgdGhpcy4kaW5wdXRzICAgID0gbnVsbFxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIFZBTElEQVRPUiBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIGZ1bmN0aW9uIFBsdWdpbihvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgVmFsaWRhdG9yLkRFRkFVTFRTLCAkdGhpcy5kYXRhKCksIHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy52YWxpZGF0b3InKVxuXG4gICAgICBpZiAoIWRhdGEgJiYgb3B0aW9uID09ICdkZXN0cm95JykgcmV0dXJuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLnZhbGlkYXRvcicsIChkYXRhID0gbmV3IFZhbGlkYXRvcih0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4udmFsaWRhdG9yXG5cbiAgJC5mbi52YWxpZGF0b3IgICAgICAgICAgICAgPSBQbHVnaW5cbiAgJC5mbi52YWxpZGF0b3IuQ29uc3RydWN0b3IgPSBWYWxpZGF0b3JcblxuXG4gIC8vIFZBTElEQVRPUiBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLnZhbGlkYXRvci5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4udmFsaWRhdG9yID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gVkFMSURBVE9SIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09PT09PVxuXG4gICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCdmb3JtW2RhdGEtdG9nZ2xlPVwidmFsaWRhdG9yXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGZvcm0gPSAkKHRoaXMpXG4gICAgICBQbHVnaW4uY2FsbCgkZm9ybSwgJGZvcm0uZGF0YSgpKVxuICAgIH0pXG4gIH0pXG5cbn0oalF1ZXJ5KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy92ZW5kb3IvYm9vdHN0cmFwLWRhdGVwaWNrZXIvanMvYm9vdHN0cmFwLWRhdGVwaWNrZXIubWluLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTcvMDgvMjAyMCAxNDoyMFxuXG4vKiFcbiAqIERhdGVwaWNrZXIgZm9yIEJvb3RzdHJhcCB2MS44LjAgKGh0dHBzOi8vZ2l0aHViLmNvbS91eHNvbHV0aW9ucy9ib290c3RyYXAtZGF0ZXBpY2tlcilcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgdjIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKVxuICovXG5cbiFmdW5jdGlvbihhKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxhKTphKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP3JlcXVpcmUoXCJqcXVlcnlcIik6alF1ZXJ5KX0oZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKCl7cmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KERhdGUsYXJndW1lbnRzKSl9ZnVuY3Rpb24gZCgpe3ZhciBhPW5ldyBEYXRlO3JldHVybiBjKGEuZ2V0RnVsbFllYXIoKSxhLmdldE1vbnRoKCksYS5nZXREYXRlKCkpfWZ1bmN0aW9uIGUoYSxiKXtyZXR1cm4gYS5nZXRVVENGdWxsWWVhcigpPT09Yi5nZXRVVENGdWxsWWVhcigpJiZhLmdldFVUQ01vbnRoKCk9PT1iLmdldFVUQ01vbnRoKCkmJmEuZ2V0VVRDRGF0ZSgpPT09Yi5nZXRVVENEYXRlKCl9ZnVuY3Rpb24gZihjLGQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBkIT09YiYmYS5mbi5kYXRlcGlja2VyLmRlcHJlY2F0ZWQoZCksdGhpc1tjXS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGcoYSl7cmV0dXJuIGEmJiFpc05hTihhLmdldFRpbWUoKSl9ZnVuY3Rpb24gaChiLGMpe2Z1bmN0aW9uIGQoYSxiKXtyZXR1cm4gYi50b0xvd2VyQ2FzZSgpfXZhciBlLGY9YShiKS5kYXRhKCksZz17fSxoPW5ldyBSZWdFeHAoXCJeXCIrYy50b0xvd2VyQ2FzZSgpK1wiKFtBLVpdKVwiKTtjPW5ldyBSZWdFeHAoXCJeXCIrYy50b0xvd2VyQ2FzZSgpKTtmb3IodmFyIGkgaW4gZiljLnRlc3QoaSkmJihlPWkucmVwbGFjZShoLGQpLGdbZV09ZltpXSk7cmV0dXJuIGd9ZnVuY3Rpb24gaShiKXt2YXIgYz17fTtpZihxW2JdfHwoYj1iLnNwbGl0KFwiLVwiKVswXSxxW2JdKSl7dmFyIGQ9cVtiXTtyZXR1cm4gYS5lYWNoKHAsZnVuY3Rpb24oYSxiKXtiIGluIGQmJihjW2JdPWRbYl0pfSksY319dmFyIGo9ZnVuY3Rpb24oKXt2YXIgYj17Z2V0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnNsaWNlKGEpWzBdfSxjb250YWluczpmdW5jdGlvbihhKXtmb3IodmFyIGI9YSYmYS52YWx1ZU9mKCksYz0wLGQ9dGhpcy5sZW5ndGg7YzxkO2MrKylpZigwPD10aGlzW2NdLnZhbHVlT2YoKS1iJiZ0aGlzW2NdLnZhbHVlT2YoKS1iPDg2NGU1KXJldHVybiBjO3JldHVybi0xfSxyZW1vdmU6ZnVuY3Rpb24oYSl7dGhpcy5zcGxpY2UoYSwxKX0scmVwbGFjZTpmdW5jdGlvbihiKXtiJiYoYS5pc0FycmF5KGIpfHwoYj1bYl0pLHRoaXMuY2xlYXIoKSx0aGlzLnB1c2guYXBwbHkodGhpcyxiKSl9LGNsZWFyOmZ1bmN0aW9uKCl7dGhpcy5sZW5ndGg9MH0sY29weTpmdW5jdGlvbigpe3ZhciBhPW5ldyBqO3JldHVybiBhLnJlcGxhY2UodGhpcyksYX19O3JldHVybiBmdW5jdGlvbigpe3ZhciBjPVtdO3JldHVybiBjLnB1c2guYXBwbHkoYyxhcmd1bWVudHMpLGEuZXh0ZW5kKGMsYiksY319KCksaz1mdW5jdGlvbihiLGMpe2EuZGF0YShiLFwiZGF0ZXBpY2tlclwiLHRoaXMpLHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyhjKSx0aGlzLmRhdGVzPW5ldyBqLHRoaXMudmlld0RhdGU9dGhpcy5vLmRlZmF1bHRWaWV3RGF0ZSx0aGlzLmZvY3VzRGF0ZT1udWxsLHRoaXMuZWxlbWVudD1hKGIpLHRoaXMuaXNJbnB1dD10aGlzLmVsZW1lbnQuaXMoXCJpbnB1dFwiKSx0aGlzLmlucHV0RmllbGQ9dGhpcy5pc0lucHV0P3RoaXMuZWxlbWVudDp0aGlzLmVsZW1lbnQuZmluZChcImlucHV0XCIpLHRoaXMuY29tcG9uZW50PSEhdGhpcy5lbGVtZW50Lmhhc0NsYXNzKFwiZGF0ZVwiKSYmdGhpcy5lbGVtZW50LmZpbmQoXCIuYWRkLW9uLCAuaW5wdXQtZ3JvdXAtYWRkb24sIC5idG5cIiksdGhpcy5jb21wb25lbnQmJjA9PT10aGlzLmNvbXBvbmVudC5sZW5ndGgmJih0aGlzLmNvbXBvbmVudD0hMSksdGhpcy5pc0lubGluZT0hdGhpcy5jb21wb25lbnQmJnRoaXMuZWxlbWVudC5pcyhcImRpdlwiKSx0aGlzLnBpY2tlcj1hKHIudGVtcGxhdGUpLHRoaXMuX2NoZWNrX3RlbXBsYXRlKHRoaXMuby50ZW1wbGF0ZXMubGVmdEFycm93KSYmdGhpcy5waWNrZXIuZmluZChcIi5wcmV2XCIpLmh0bWwodGhpcy5vLnRlbXBsYXRlcy5sZWZ0QXJyb3cpLHRoaXMuX2NoZWNrX3RlbXBsYXRlKHRoaXMuby50ZW1wbGF0ZXMucmlnaHRBcnJvdykmJnRoaXMucGlja2VyLmZpbmQoXCIubmV4dFwiKS5odG1sKHRoaXMuby50ZW1wbGF0ZXMucmlnaHRBcnJvdyksdGhpcy5fYnVpbGRFdmVudHMoKSx0aGlzLl9hdHRhY2hFdmVudHMoKSx0aGlzLmlzSW5saW5lP3RoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1pbmxpbmVcIikuYXBwZW5kVG8odGhpcy5lbGVtZW50KTp0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItZHJvcGRvd24gZHJvcGRvd24tbWVudVwiKSx0aGlzLm8ucnRsJiZ0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItcnRsXCIpLHRoaXMuby5jYWxlbmRhcldlZWtzJiZ0aGlzLnBpY2tlci5maW5kKFwiLmRhdGVwaWNrZXItZGF5cyAuZGF0ZXBpY2tlci1zd2l0Y2gsIHRoZWFkIC5kYXRlcGlja2VyLXRpdGxlLCB0Zm9vdCAudG9kYXksIHRmb290IC5jbGVhclwiKS5hdHRyKFwiY29sc3BhblwiLGZ1bmN0aW9uKGEsYil7cmV0dXJuIE51bWJlcihiKSsxfSksdGhpcy5fcHJvY2Vzc19vcHRpb25zKHtzdGFydERhdGU6dGhpcy5fby5zdGFydERhdGUsZW5kRGF0ZTp0aGlzLl9vLmVuZERhdGUsZGF5c09mV2Vla0Rpc2FibGVkOnRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQsZGF5c09mV2Vla0hpZ2hsaWdodGVkOnRoaXMuby5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQsZGF0ZXNEaXNhYmxlZDp0aGlzLm8uZGF0ZXNEaXNhYmxlZH0pLHRoaXMuX2FsbG93X3VwZGF0ZT0hMSx0aGlzLnNldFZpZXdNb2RlKHRoaXMuby5zdGFydFZpZXcpLHRoaXMuX2FsbG93X3VwZGF0ZT0hMCx0aGlzLmZpbGxEb3coKSx0aGlzLmZpbGxNb250aHMoKSx0aGlzLnVwZGF0ZSgpLHRoaXMuaXNJbmxpbmUmJnRoaXMuc2hvdygpfTtrLnByb3RvdHlwZT17Y29uc3RydWN0b3I6ayxfcmVzb2x2ZVZpZXdOYW1lOmZ1bmN0aW9uKGIpe3JldHVybiBhLmVhY2goci52aWV3TW9kZXMsZnVuY3Rpb24oYyxkKXtpZihiPT09Y3x8YS5pbkFycmF5KGIsZC5uYW1lcykhPT0tMSlyZXR1cm4gYj1jLCExfSksYn0sX3Jlc29sdmVEYXlzT2ZXZWVrOmZ1bmN0aW9uKGIpe3JldHVybiBhLmlzQXJyYXkoYil8fChiPWIuc3BsaXQoL1ssXFxzXSovKSksYS5tYXAoYixOdW1iZXIpfSxfY2hlY2tfdGVtcGxhdGU6ZnVuY3Rpb24oYyl7dHJ5e2lmKGM9PT1ifHxcIlwiPT09YylyZXR1cm4hMTtpZigoYy5tYXRjaCgvWzw+XS9nKXx8W10pLmxlbmd0aDw9MClyZXR1cm4hMDt2YXIgZD1hKGMpO3JldHVybiBkLmxlbmd0aD4wfWNhdGNoKGEpe3JldHVybiExfX0sX3Byb2Nlc3Nfb3B0aW9uczpmdW5jdGlvbihiKXt0aGlzLl9vPWEuZXh0ZW5kKHt9LHRoaXMuX28sYik7dmFyIGU9dGhpcy5vPWEuZXh0ZW5kKHt9LHRoaXMuX28pLGY9ZS5sYW5ndWFnZTtxW2ZdfHwoZj1mLnNwbGl0KFwiLVwiKVswXSxxW2ZdfHwoZj1vLmxhbmd1YWdlKSksZS5sYW5ndWFnZT1mLGUuc3RhcnRWaWV3PXRoaXMuX3Jlc29sdmVWaWV3TmFtZShlLnN0YXJ0VmlldyksZS5taW5WaWV3TW9kZT10aGlzLl9yZXNvbHZlVmlld05hbWUoZS5taW5WaWV3TW9kZSksZS5tYXhWaWV3TW9kZT10aGlzLl9yZXNvbHZlVmlld05hbWUoZS5tYXhWaWV3TW9kZSksZS5zdGFydFZpZXc9TWF0aC5tYXgodGhpcy5vLm1pblZpZXdNb2RlLE1hdGgubWluKHRoaXMuby5tYXhWaWV3TW9kZSxlLnN0YXJ0VmlldykpLGUubXVsdGlkYXRlIT09ITAmJihlLm11bHRpZGF0ZT1OdW1iZXIoZS5tdWx0aWRhdGUpfHwhMSxlLm11bHRpZGF0ZSE9PSExJiYoZS5tdWx0aWRhdGU9TWF0aC5tYXgoMCxlLm11bHRpZGF0ZSkpKSxlLm11bHRpZGF0ZVNlcGFyYXRvcj1TdHJpbmcoZS5tdWx0aWRhdGVTZXBhcmF0b3IpLGUud2Vla1N0YXJ0JT03LGUud2Vla0VuZD0oZS53ZWVrU3RhcnQrNiklNzt2YXIgZz1yLnBhcnNlRm9ybWF0KGUuZm9ybWF0KTtlLnN0YXJ0RGF0ZSE9PS0oMS8wKSYmKGUuc3RhcnREYXRlP2Uuc3RhcnREYXRlIGluc3RhbmNlb2YgRGF0ZT9lLnN0YXJ0RGF0ZT10aGlzLl9sb2NhbF90b191dGModGhpcy5femVyb190aW1lKGUuc3RhcnREYXRlKSk6ZS5zdGFydERhdGU9ci5wYXJzZURhdGUoZS5zdGFydERhdGUsZyxlLmxhbmd1YWdlLGUuYXNzdW1lTmVhcmJ5WWVhcik6ZS5zdGFydERhdGU9LSgxLzApKSxlLmVuZERhdGUhPT0xLzAmJihlLmVuZERhdGU/ZS5lbmREYXRlIGluc3RhbmNlb2YgRGF0ZT9lLmVuZERhdGU9dGhpcy5fbG9jYWxfdG9fdXRjKHRoaXMuX3plcm9fdGltZShlLmVuZERhdGUpKTplLmVuZERhdGU9ci5wYXJzZURhdGUoZS5lbmREYXRlLGcsZS5sYW5ndWFnZSxlLmFzc3VtZU5lYXJieVllYXIpOmUuZW5kRGF0ZT0xLzApLGUuZGF5c09mV2Vla0Rpc2FibGVkPXRoaXMuX3Jlc29sdmVEYXlzT2ZXZWVrKGUuZGF5c09mV2Vla0Rpc2FibGVkfHxbXSksZS5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ9dGhpcy5fcmVzb2x2ZURheXNPZldlZWsoZS5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWR8fFtdKSxlLmRhdGVzRGlzYWJsZWQ9ZS5kYXRlc0Rpc2FibGVkfHxbXSxhLmlzQXJyYXkoZS5kYXRlc0Rpc2FibGVkKXx8KGUuZGF0ZXNEaXNhYmxlZD1lLmRhdGVzRGlzYWJsZWQuc3BsaXQoXCIsXCIpKSxlLmRhdGVzRGlzYWJsZWQ9YS5tYXAoZS5kYXRlc0Rpc2FibGVkLGZ1bmN0aW9uKGEpe3JldHVybiByLnBhcnNlRGF0ZShhLGcsZS5sYW5ndWFnZSxlLmFzc3VtZU5lYXJieVllYXIpfSk7dmFyIGg9U3RyaW5nKGUub3JpZW50YXRpb24pLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1xccysvZyksaT1lLm9yaWVudGF0aW9uLnRvTG93ZXJDYXNlKCk7aWYoaD1hLmdyZXAoaCxmdW5jdGlvbihhKXtyZXR1cm4vXmF1dG98bGVmdHxyaWdodHx0b3B8Ym90dG9tJC8udGVzdChhKX0pLGUub3JpZW50YXRpb249e3g6XCJhdXRvXCIseTpcImF1dG9cIn0saSYmXCJhdXRvXCIhPT1pKWlmKDE9PT1oLmxlbmd0aClzd2l0Y2goaFswXSl7Y2FzZVwidG9wXCI6Y2FzZVwiYm90dG9tXCI6ZS5vcmllbnRhdGlvbi55PWhbMF07YnJlYWs7Y2FzZVwibGVmdFwiOmNhc2VcInJpZ2h0XCI6ZS5vcmllbnRhdGlvbi54PWhbMF19ZWxzZSBpPWEuZ3JlcChoLGZ1bmN0aW9uKGEpe3JldHVybi9ebGVmdHxyaWdodCQvLnRlc3QoYSl9KSxlLm9yaWVudGF0aW9uLng9aVswXXx8XCJhdXRvXCIsaT1hLmdyZXAoaCxmdW5jdGlvbihhKXtyZXR1cm4vXnRvcHxib3R0b20kLy50ZXN0KGEpfSksZS5vcmllbnRhdGlvbi55PWlbMF18fFwiYXV0b1wiO2Vsc2U7aWYoZS5kZWZhdWx0Vmlld0RhdGUgaW5zdGFuY2VvZiBEYXRlfHxcInN0cmluZ1wiPT10eXBlb2YgZS5kZWZhdWx0Vmlld0RhdGUpZS5kZWZhdWx0Vmlld0RhdGU9ci5wYXJzZURhdGUoZS5kZWZhdWx0Vmlld0RhdGUsZyxlLmxhbmd1YWdlLGUuYXNzdW1lTmVhcmJ5WWVhcik7ZWxzZSBpZihlLmRlZmF1bHRWaWV3RGF0ZSl7dmFyIGo9ZS5kZWZhdWx0Vmlld0RhdGUueWVhcnx8KG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpLGs9ZS5kZWZhdWx0Vmlld0RhdGUubW9udGh8fDAsbD1lLmRlZmF1bHRWaWV3RGF0ZS5kYXl8fDE7ZS5kZWZhdWx0Vmlld0RhdGU9YyhqLGssbCl9ZWxzZSBlLmRlZmF1bHRWaWV3RGF0ZT1kKCl9LF9ldmVudHM6W10sX3NlY29uZGFyeUV2ZW50czpbXSxfYXBwbHlFdmVudHM6ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQsZSxmPTA7ZjxhLmxlbmd0aDtmKyspYz1hW2ZdWzBdLDI9PT1hW2ZdLmxlbmd0aD8oZD1iLGU9YVtmXVsxXSk6Mz09PWFbZl0ubGVuZ3RoJiYoZD1hW2ZdWzFdLGU9YVtmXVsyXSksYy5vbihlLGQpfSxfdW5hcHBseUV2ZW50czpmdW5jdGlvbihhKXtmb3IodmFyIGMsZCxlLGY9MDtmPGEubGVuZ3RoO2YrKyljPWFbZl1bMF0sMj09PWFbZl0ubGVuZ3RoPyhlPWIsZD1hW2ZdWzFdKTozPT09YVtmXS5sZW5ndGgmJihlPWFbZl1bMV0sZD1hW2ZdWzJdKSxjLm9mZihkLGUpfSxfYnVpbGRFdmVudHM6ZnVuY3Rpb24oKXt2YXIgYj17a2V5dXA6YS5wcm94eShmdW5jdGlvbihiKXthLmluQXJyYXkoYi5rZXlDb2RlLFsyNywzNywzOSwzOCw0MCwzMiwxMyw5XSk9PT0tMSYmdGhpcy51cGRhdGUoKX0sdGhpcyksa2V5ZG93bjphLnByb3h5KHRoaXMua2V5ZG93bix0aGlzKSxwYXN0ZTphLnByb3h5KHRoaXMucGFzdGUsdGhpcyl9O3RoaXMuby5zaG93T25Gb2N1cz09PSEwJiYoYi5mb2N1cz1hLnByb3h5KHRoaXMuc2hvdyx0aGlzKSksdGhpcy5pc0lucHV0P3RoaXMuX2V2ZW50cz1bW3RoaXMuZWxlbWVudCxiXV06dGhpcy5jb21wb25lbnQmJnRoaXMuaW5wdXRGaWVsZC5sZW5ndGg/dGhpcy5fZXZlbnRzPVtbdGhpcy5pbnB1dEZpZWxkLGJdLFt0aGlzLmNvbXBvbmVudCx7Y2xpY2s6YS5wcm94eSh0aGlzLnNob3csdGhpcyl9XV06dGhpcy5fZXZlbnRzPVtbdGhpcy5lbGVtZW50LHtjbGljazphLnByb3h5KHRoaXMuc2hvdyx0aGlzKSxrZXlkb3duOmEucHJveHkodGhpcy5rZXlkb3duLHRoaXMpfV1dLHRoaXMuX2V2ZW50cy5wdXNoKFt0aGlzLmVsZW1lbnQsXCIqXCIse2JsdXI6YS5wcm94eShmdW5jdGlvbihhKXt0aGlzLl9mb2N1c2VkX2Zyb209YS50YXJnZXR9LHRoaXMpfV0sW3RoaXMuZWxlbWVudCx7Ymx1cjphLnByb3h5KGZ1bmN0aW9uKGEpe3RoaXMuX2ZvY3VzZWRfZnJvbT1hLnRhcmdldH0sdGhpcyl9XSksdGhpcy5vLmltbWVkaWF0ZVVwZGF0ZXMmJnRoaXMuX2V2ZW50cy5wdXNoKFt0aGlzLmVsZW1lbnQse1wiY2hhbmdlWWVhciBjaGFuZ2VNb250aFwiOmEucHJveHkoZnVuY3Rpb24oYSl7dGhpcy51cGRhdGUoYS5kYXRlKX0sdGhpcyl9XSksdGhpcy5fc2Vjb25kYXJ5RXZlbnRzPVtbdGhpcy5waWNrZXIse2NsaWNrOmEucHJveHkodGhpcy5jbGljayx0aGlzKX1dLFt0aGlzLnBpY2tlcixcIi5wcmV2LCAubmV4dFwiLHtjbGljazphLnByb3h5KHRoaXMubmF2QXJyb3dzQ2xpY2ssdGhpcyl9XSxbdGhpcy5waWNrZXIsXCIuZGF5Om5vdCguZGlzYWJsZWQpXCIse2NsaWNrOmEucHJveHkodGhpcy5kYXlDZWxsQ2xpY2ssdGhpcyl9XSxbYSh3aW5kb3cpLHtyZXNpemU6YS5wcm94eSh0aGlzLnBsYWNlLHRoaXMpfV0sW2EoZG9jdW1lbnQpLHtcIm1vdXNlZG93biB0b3VjaHN0YXJ0XCI6YS5wcm94eShmdW5jdGlvbihhKXt0aGlzLmVsZW1lbnQuaXMoYS50YXJnZXQpfHx0aGlzLmVsZW1lbnQuZmluZChhLnRhcmdldCkubGVuZ3RofHx0aGlzLnBpY2tlci5pcyhhLnRhcmdldCl8fHRoaXMucGlja2VyLmZpbmQoYS50YXJnZXQpLmxlbmd0aHx8dGhpcy5pc0lubGluZXx8dGhpcy5oaWRlKCl9LHRoaXMpfV1dfSxfYXR0YWNoRXZlbnRzOmZ1bmN0aW9uKCl7dGhpcy5fZGV0YWNoRXZlbnRzKCksdGhpcy5fYXBwbHlFdmVudHModGhpcy5fZXZlbnRzKX0sX2RldGFjaEV2ZW50czpmdW5jdGlvbigpe3RoaXMuX3VuYXBwbHlFdmVudHModGhpcy5fZXZlbnRzKX0sX2F0dGFjaFNlY29uZGFyeUV2ZW50czpmdW5jdGlvbigpe3RoaXMuX2RldGFjaFNlY29uZGFyeUV2ZW50cygpLHRoaXMuX2FwcGx5RXZlbnRzKHRoaXMuX3NlY29uZGFyeUV2ZW50cyl9LF9kZXRhY2hTZWNvbmRhcnlFdmVudHM6ZnVuY3Rpb24oKXt0aGlzLl91bmFwcGx5RXZlbnRzKHRoaXMuX3NlY29uZGFyeUV2ZW50cyl9LF90cmlnZ2VyOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9Y3x8dGhpcy5kYXRlcy5nZXQoLTEpLGU9dGhpcy5fdXRjX3RvX2xvY2FsKGQpO3RoaXMuZWxlbWVudC50cmlnZ2VyKHt0eXBlOmIsZGF0ZTplLHZpZXdNb2RlOnRoaXMudmlld01vZGUsZGF0ZXM6YS5tYXAodGhpcy5kYXRlcyx0aGlzLl91dGNfdG9fbG9jYWwpLGZvcm1hdDphLnByb3h5KGZ1bmN0aW9uKGEsYil7MD09PWFyZ3VtZW50cy5sZW5ndGg/KGE9dGhpcy5kYXRlcy5sZW5ndGgtMSxiPXRoaXMuby5mb3JtYXQpOlwic3RyaW5nXCI9PXR5cGVvZiBhJiYoYj1hLGE9dGhpcy5kYXRlcy5sZW5ndGgtMSksYj1ifHx0aGlzLm8uZm9ybWF0O3ZhciBjPXRoaXMuZGF0ZXMuZ2V0KGEpO3JldHVybiByLmZvcm1hdERhdGUoYyxiLHRoaXMuby5sYW5ndWFnZSl9LHRoaXMpfSl9LHNob3c6ZnVuY3Rpb24oKXtpZighKHRoaXMuaW5wdXRGaWVsZC5wcm9wKFwiZGlzYWJsZWRcIil8fHRoaXMuaW5wdXRGaWVsZC5wcm9wKFwicmVhZG9ubHlcIikmJnRoaXMuby5lbmFibGVPblJlYWRvbmx5PT09ITEpKXJldHVybiB0aGlzLmlzSW5saW5lfHx0aGlzLnBpY2tlci5hcHBlbmRUbyh0aGlzLm8uY29udGFpbmVyKSx0aGlzLnBsYWNlKCksdGhpcy5waWNrZXIuc2hvdygpLHRoaXMuX2F0dGFjaFNlY29uZGFyeUV2ZW50cygpLHRoaXMuX3RyaWdnZXIoXCJzaG93XCIpLCh3aW5kb3cubmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHN8fFwib250b3VjaHN0YXJ0XCJpbiBkb2N1bWVudCkmJnRoaXMuby5kaXNhYmxlVG91Y2hLZXlib2FyZCYmYSh0aGlzLmVsZW1lbnQpLmJsdXIoKSx0aGlzfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNJbmxpbmV8fCF0aGlzLnBpY2tlci5pcyhcIjp2aXNpYmxlXCIpP3RoaXM6KHRoaXMuZm9jdXNEYXRlPW51bGwsdGhpcy5waWNrZXIuaGlkZSgpLmRldGFjaCgpLHRoaXMuX2RldGFjaFNlY29uZGFyeUV2ZW50cygpLHRoaXMuc2V0Vmlld01vZGUodGhpcy5vLnN0YXJ0VmlldyksdGhpcy5vLmZvcmNlUGFyc2UmJnRoaXMuaW5wdXRGaWVsZC52YWwoKSYmdGhpcy5zZXRWYWx1ZSgpLHRoaXMuX3RyaWdnZXIoXCJoaWRlXCIpLHRoaXMpfSxkZXN0cm95OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaGlkZSgpLHRoaXMuX2RldGFjaEV2ZW50cygpLHRoaXMuX2RldGFjaFNlY29uZGFyeUV2ZW50cygpLHRoaXMucGlja2VyLnJlbW92ZSgpLGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGVwaWNrZXIsdGhpcy5pc0lucHV0fHxkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlLHRoaXN9LHBhc3RlOmZ1bmN0aW9uKGIpe3ZhciBjO2lmKGIub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhJiZiLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YS50eXBlcyYmYS5pbkFycmF5KFwidGV4dC9wbGFpblwiLGIub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhLnR5cGVzKSE9PS0xKWM9Yi5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7ZWxzZXtpZighd2luZG93LmNsaXBib2FyZERhdGEpcmV0dXJuO2M9d2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcIlRleHRcIil9dGhpcy5zZXREYXRlKGMpLHRoaXMudXBkYXRlKCksYi5wcmV2ZW50RGVmYXVsdCgpfSxfdXRjX3RvX2xvY2FsOmZ1bmN0aW9uKGEpe2lmKCFhKXJldHVybiBhO3ZhciBiPW5ldyBEYXRlKGEuZ2V0VGltZSgpKzZlNCphLmdldFRpbWV6b25lT2Zmc2V0KCkpO3JldHVybiBiLmdldFRpbWV6b25lT2Zmc2V0KCkhPT1hLmdldFRpbWV6b25lT2Zmc2V0KCkmJihiPW5ldyBEYXRlKGEuZ2V0VGltZSgpKzZlNCpiLmdldFRpbWV6b25lT2Zmc2V0KCkpKSxifSxfbG9jYWxfdG9fdXRjOmZ1bmN0aW9uKGEpe3JldHVybiBhJiZuZXcgRGF0ZShhLmdldFRpbWUoKS02ZTQqYS5nZXRUaW1lem9uZU9mZnNldCgpKX0sX3plcm9fdGltZTpmdW5jdGlvbihhKXtyZXR1cm4gYSYmbmV3IERhdGUoYS5nZXRGdWxsWWVhcigpLGEuZ2V0TW9udGgoKSxhLmdldERhdGUoKSl9LF96ZXJvX3V0Y190aW1lOmZ1bmN0aW9uKGEpe3JldHVybiBhJiZjKGEuZ2V0VVRDRnVsbFllYXIoKSxhLmdldFVUQ01vbnRoKCksYS5nZXRVVENEYXRlKCkpfSxnZXREYXRlczpmdW5jdGlvbigpe3JldHVybiBhLm1hcCh0aGlzLmRhdGVzLHRoaXMuX3V0Y190b19sb2NhbCl9LGdldFVUQ0RhdGVzOmZ1bmN0aW9uKCl7cmV0dXJuIGEubWFwKHRoaXMuZGF0ZXMsZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBEYXRlKGEpfSl9LGdldERhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdXRjX3RvX2xvY2FsKHRoaXMuZ2V0VVRDRGF0ZSgpKX0sZ2V0VVRDRGF0ZTpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZGF0ZXMuZ2V0KC0xKTtyZXR1cm4gYSE9PWI/bmV3IERhdGUoYSk6bnVsbH0sY2xlYXJEYXRlczpmdW5jdGlvbigpe3RoaXMuaW5wdXRGaWVsZC52YWwoXCJcIiksdGhpcy51cGRhdGUoKSx0aGlzLl90cmlnZ2VyKFwiY2hhbmdlRGF0ZVwiKSx0aGlzLm8uYXV0b2Nsb3NlJiZ0aGlzLmhpZGUoKX0sc2V0RGF0ZXM6ZnVuY3Rpb24oKXt2YXIgYj1hLmlzQXJyYXkoYXJndW1lbnRzWzBdKT9hcmd1bWVudHNbMF06YXJndW1lbnRzO3JldHVybiB0aGlzLnVwZGF0ZS5hcHBseSh0aGlzLGIpLHRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VEYXRlXCIpLHRoaXMuc2V0VmFsdWUoKSx0aGlzfSxzZXRVVENEYXRlczpmdW5jdGlvbigpe3ZhciBiPWEuaXNBcnJheShhcmd1bWVudHNbMF0pP2FyZ3VtZW50c1swXTphcmd1bWVudHM7cmV0dXJuIHRoaXMuc2V0RGF0ZXMuYXBwbHkodGhpcyxhLm1hcChiLHRoaXMuX3V0Y190b19sb2NhbCkpLHRoaXN9LHNldERhdGU6ZihcInNldERhdGVzXCIpLHNldFVUQ0RhdGU6ZihcInNldFVUQ0RhdGVzXCIpLHJlbW92ZTpmKFwiZGVzdHJveVwiLFwiTWV0aG9kIGByZW1vdmVgIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDIuMC4gVXNlIGBkZXN0cm95YCBpbnN0ZWFkXCIpLHNldFZhbHVlOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5nZXRGb3JtYXR0ZWREYXRlKCk7cmV0dXJuIHRoaXMuaW5wdXRGaWVsZC52YWwoYSksdGhpc30sZ2V0Rm9ybWF0dGVkRGF0ZTpmdW5jdGlvbihjKXtjPT09YiYmKGM9dGhpcy5vLmZvcm1hdCk7dmFyIGQ9dGhpcy5vLmxhbmd1YWdlO3JldHVybiBhLm1hcCh0aGlzLmRhdGVzLGZ1bmN0aW9uKGEpe3JldHVybiByLmZvcm1hdERhdGUoYSxjLGQpfSkuam9pbih0aGlzLm8ubXVsdGlkYXRlU2VwYXJhdG9yKX0sZ2V0U3RhcnREYXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuby5zdGFydERhdGV9LHNldFN0YXJ0RGF0ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fcHJvY2Vzc19vcHRpb25zKHtzdGFydERhdGU6YX0pLHRoaXMudXBkYXRlKCksdGhpcy51cGRhdGVOYXZBcnJvd3MoKSx0aGlzfSxnZXRFbmREYXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuby5lbmREYXRlfSxzZXRFbmREYXRlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9wcm9jZXNzX29wdGlvbnMoe2VuZERhdGU6YX0pLHRoaXMudXBkYXRlKCksdGhpcy51cGRhdGVOYXZBcnJvd3MoKSx0aGlzfSxzZXREYXlzT2ZXZWVrRGlzYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7ZGF5c09mV2Vla0Rpc2FibGVkOmF9KSx0aGlzLnVwZGF0ZSgpLHRoaXN9LHNldERheXNPZldlZWtIaWdobGlnaHRlZDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fcHJvY2Vzc19vcHRpb25zKHtkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6YX0pLHRoaXMudXBkYXRlKCksdGhpc30sc2V0RGF0ZXNEaXNhYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fcHJvY2Vzc19vcHRpb25zKHtkYXRlc0Rpc2FibGVkOmF9KSx0aGlzLnVwZGF0ZSgpLHRoaXN9LHBsYWNlOmZ1bmN0aW9uKCl7aWYodGhpcy5pc0lubGluZSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnBpY2tlci5vdXRlcldpZHRoKCksYz10aGlzLnBpY2tlci5vdXRlckhlaWdodCgpLGQ9MTAsZT1hKHRoaXMuby5jb250YWluZXIpLGY9ZS53aWR0aCgpLGc9XCJib2R5XCI9PT10aGlzLm8uY29udGFpbmVyP2EoZG9jdW1lbnQpLnNjcm9sbFRvcCgpOmUuc2Nyb2xsVG9wKCksaD1lLm9mZnNldCgpLGk9WzBdO3RoaXMuZWxlbWVudC5wYXJlbnRzKCkuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcykuY3NzKFwiei1pbmRleFwiKTtcImF1dG9cIiE9PWImJjAhPT1OdW1iZXIoYikmJmkucHVzaChOdW1iZXIoYikpfSk7dmFyIGo9TWF0aC5tYXguYXBwbHkoTWF0aCxpKSt0aGlzLm8uekluZGV4T2Zmc2V0LGs9dGhpcy5jb21wb25lbnQ/dGhpcy5jb21wb25lbnQucGFyZW50KCkub2Zmc2V0KCk6dGhpcy5lbGVtZW50Lm9mZnNldCgpLGw9dGhpcy5jb21wb25lbnQ/dGhpcy5jb21wb25lbnQub3V0ZXJIZWlnaHQoITApOnRoaXMuZWxlbWVudC5vdXRlckhlaWdodCghMSksbT10aGlzLmNvbXBvbmVudD90aGlzLmNvbXBvbmVudC5vdXRlcldpZHRoKCEwKTp0aGlzLmVsZW1lbnQub3V0ZXJXaWR0aCghMSksbj1rLmxlZnQtaC5sZWZ0LG89ay50b3AtaC50b3A7XCJib2R5XCIhPT10aGlzLm8uY29udGFpbmVyJiYobys9ZyksdGhpcy5waWNrZXIucmVtb3ZlQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC10b3AgZGF0ZXBpY2tlci1vcmllbnQtYm90dG9tIGRhdGVwaWNrZXItb3JpZW50LXJpZ2h0IGRhdGVwaWNrZXItb3JpZW50LWxlZnRcIiksXCJhdXRvXCIhPT10aGlzLm8ub3JpZW50YXRpb24ueD8odGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC1cIit0aGlzLm8ub3JpZW50YXRpb24ueCksXCJyaWdodFwiPT09dGhpcy5vLm9yaWVudGF0aW9uLngmJihuLT1iLW0pKTprLmxlZnQ8MD8odGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC1sZWZ0XCIpLG4tPWsubGVmdC1kKTpuK2I+Zj8odGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC1yaWdodFwiKSxuKz1tLWIpOnRoaXMuby5ydGw/dGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC1yaWdodFwiKTp0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItb3JpZW50LWxlZnRcIik7dmFyIHAscT10aGlzLm8ub3JpZW50YXRpb24ueTtpZihcImF1dG9cIj09PXEmJihwPS1nK28tYyxxPXA8MD9cImJvdHRvbVwiOlwidG9wXCIpLHRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtXCIrcSksXCJ0b3BcIj09PXE/by09YytwYXJzZUludCh0aGlzLnBpY2tlci5jc3MoXCJwYWRkaW5nLXRvcFwiKSk6bys9bCx0aGlzLm8ucnRsKXt2YXIgcj1mLShuK20pO3RoaXMucGlja2VyLmNzcyh7dG9wOm8scmlnaHQ6cix6SW5kZXg6an0pfWVsc2UgdGhpcy5waWNrZXIuY3NzKHt0b3A6byxsZWZ0Om4sekluZGV4Omp9KTtyZXR1cm4gdGhpc30sX2FsbG93X3VwZGF0ZTohMCx1cGRhdGU6ZnVuY3Rpb24oKXtpZighdGhpcy5fYWxsb3dfdXBkYXRlKXJldHVybiB0aGlzO3ZhciBiPXRoaXMuZGF0ZXMuY29weSgpLGM9W10sZD0hMTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oYS5lYWNoKGFyZ3VtZW50cyxhLnByb3h5KGZ1bmN0aW9uKGEsYil7YiBpbnN0YW5jZW9mIERhdGUmJihiPXRoaXMuX2xvY2FsX3RvX3V0YyhiKSksYy5wdXNoKGIpfSx0aGlzKSksZD0hMCk6KGM9dGhpcy5pc0lucHV0P3RoaXMuZWxlbWVudC52YWwoKTp0aGlzLmVsZW1lbnQuZGF0YShcImRhdGVcIil8fHRoaXMuaW5wdXRGaWVsZC52YWwoKSxjPWMmJnRoaXMuby5tdWx0aWRhdGU/Yy5zcGxpdCh0aGlzLm8ubXVsdGlkYXRlU2VwYXJhdG9yKTpbY10sZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZSksYz1hLm1hcChjLGEucHJveHkoZnVuY3Rpb24oYSl7cmV0dXJuIHIucGFyc2VEYXRlKGEsdGhpcy5vLmZvcm1hdCx0aGlzLm8ubGFuZ3VhZ2UsdGhpcy5vLmFzc3VtZU5lYXJieVllYXIpfSx0aGlzKSksYz1hLmdyZXAoYyxhLnByb3h5KGZ1bmN0aW9uKGEpe3JldHVybiF0aGlzLmRhdGVXaXRoaW5SYW5nZShhKXx8IWF9LHRoaXMpLCEwKSx0aGlzLmRhdGVzLnJlcGxhY2UoYyksdGhpcy5vLnVwZGF0ZVZpZXdEYXRlJiYodGhpcy5kYXRlcy5sZW5ndGg/dGhpcy52aWV3RGF0ZT1uZXcgRGF0ZSh0aGlzLmRhdGVzLmdldCgtMSkpOnRoaXMudmlld0RhdGU8dGhpcy5vLnN0YXJ0RGF0ZT90aGlzLnZpZXdEYXRlPW5ldyBEYXRlKHRoaXMuby5zdGFydERhdGUpOnRoaXMudmlld0RhdGU+dGhpcy5vLmVuZERhdGU/dGhpcy52aWV3RGF0ZT1uZXcgRGF0ZSh0aGlzLm8uZW5kRGF0ZSk6dGhpcy52aWV3RGF0ZT10aGlzLm8uZGVmYXVsdFZpZXdEYXRlKSxkPyh0aGlzLnNldFZhbHVlKCksdGhpcy5lbGVtZW50LmNoYW5nZSgpKTp0aGlzLmRhdGVzLmxlbmd0aCYmU3RyaW5nKGIpIT09U3RyaW5nKHRoaXMuZGF0ZXMpJiZkJiYodGhpcy5fdHJpZ2dlcihcImNoYW5nZURhdGVcIiksdGhpcy5lbGVtZW50LmNoYW5nZSgpKSwhdGhpcy5kYXRlcy5sZW5ndGgmJmIubGVuZ3RoJiYodGhpcy5fdHJpZ2dlcihcImNsZWFyRGF0ZVwiKSx0aGlzLmVsZW1lbnQuY2hhbmdlKCkpLHRoaXMuZmlsbCgpLHRoaXN9LGZpbGxEb3c6ZnVuY3Rpb24oKXtpZih0aGlzLm8uc2hvd1dlZWtEYXlzKXt2YXIgYj10aGlzLm8ud2Vla1N0YXJ0LGM9XCI8dHI+XCI7Zm9yKHRoaXMuby5jYWxlbmRhcldlZWtzJiYoYys9Jzx0aCBjbGFzcz1cImN3XCI+JiMxNjA7PC90aD4nKTtiPHRoaXMuby53ZWVrU3RhcnQrNzspYys9Jzx0aCBjbGFzcz1cImRvdycsYS5pbkFycmF5KGIsdGhpcy5vLmRheXNPZldlZWtEaXNhYmxlZCkhPT0tMSYmKGMrPVwiIGRpc2FibGVkXCIpLGMrPSdcIj4nK3FbdGhpcy5vLmxhbmd1YWdlXS5kYXlzTWluW2IrKyU3XStcIjwvdGg+XCI7Yys9XCI8L3RyPlwiLHRoaXMucGlja2VyLmZpbmQoXCIuZGF0ZXBpY2tlci1kYXlzIHRoZWFkXCIpLmFwcGVuZChjKX19LGZpbGxNb250aHM6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj10aGlzLl91dGNfdG9fbG9jYWwodGhpcy52aWV3RGF0ZSksYz1cIlwiLGQ9MDtkPDEyO2QrKylhPWImJmIuZ2V0TW9udGgoKT09PWQ/XCIgZm9jdXNlZFwiOlwiXCIsYys9JzxzcGFuIGNsYXNzPVwibW9udGgnK2ErJ1wiPicrcVt0aGlzLm8ubGFuZ3VhZ2VdLm1vbnRoc1Nob3J0W2RdK1wiPC9zcGFuPlwiO3RoaXMucGlja2VyLmZpbmQoXCIuZGF0ZXBpY2tlci1tb250aHMgdGRcIikuaHRtbChjKX0sc2V0UmFuZ2U6ZnVuY3Rpb24oYil7YiYmYi5sZW5ndGg/dGhpcy5yYW5nZT1hLm1hcChiLGZ1bmN0aW9uKGEpe3JldHVybiBhLnZhbHVlT2YoKX0pOmRlbGV0ZSB0aGlzLnJhbmdlLHRoaXMuZmlsbCgpfSxnZXRDbGFzc05hbWVzOmZ1bmN0aW9uKGIpe3ZhciBjPVtdLGY9dGhpcy52aWV3RGF0ZS5nZXRVVENGdWxsWWVhcigpLGc9dGhpcy52aWV3RGF0ZS5nZXRVVENNb250aCgpLGg9ZCgpO3JldHVybiBiLmdldFVUQ0Z1bGxZZWFyKCk8Znx8Yi5nZXRVVENGdWxsWWVhcigpPT09ZiYmYi5nZXRVVENNb250aCgpPGc/Yy5wdXNoKFwib2xkXCIpOihiLmdldFVUQ0Z1bGxZZWFyKCk+Znx8Yi5nZXRVVENGdWxsWWVhcigpPT09ZiYmYi5nZXRVVENNb250aCgpPmcpJiZjLnB1c2goXCJuZXdcIiksdGhpcy5mb2N1c0RhdGUmJmIudmFsdWVPZigpPT09dGhpcy5mb2N1c0RhdGUudmFsdWVPZigpJiZjLnB1c2goXCJmb2N1c2VkXCIpLHRoaXMuby50b2RheUhpZ2hsaWdodCYmZShiLGgpJiZjLnB1c2goXCJ0b2RheVwiKSx0aGlzLmRhdGVzLmNvbnRhaW5zKGIpIT09LTEmJmMucHVzaChcImFjdGl2ZVwiKSx0aGlzLmRhdGVXaXRoaW5SYW5nZShiKXx8Yy5wdXNoKFwiZGlzYWJsZWRcIiksdGhpcy5kYXRlSXNEaXNhYmxlZChiKSYmYy5wdXNoKFwiZGlzYWJsZWRcIixcImRpc2FibGVkLWRhdGVcIiksYS5pbkFycmF5KGIuZ2V0VVRDRGF5KCksdGhpcy5vLmRheXNPZldlZWtIaWdobGlnaHRlZCkhPT0tMSYmYy5wdXNoKFwiaGlnaGxpZ2h0ZWRcIiksdGhpcy5yYW5nZSYmKGI+dGhpcy5yYW5nZVswXSYmYjx0aGlzLnJhbmdlW3RoaXMucmFuZ2UubGVuZ3RoLTFdJiZjLnB1c2goXCJyYW5nZVwiKSxhLmluQXJyYXkoYi52YWx1ZU9mKCksdGhpcy5yYW5nZSkhPT0tMSYmYy5wdXNoKFwic2VsZWN0ZWRcIiksYi52YWx1ZU9mKCk9PT10aGlzLnJhbmdlWzBdJiZjLnB1c2goXCJyYW5nZS1zdGFydFwiKSxiLnZhbHVlT2YoKT09PXRoaXMucmFuZ2VbdGhpcy5yYW5nZS5sZW5ndGgtMV0mJmMucHVzaChcInJhbmdlLWVuZFwiKSksY30sX2ZpbGxfeWVhcnNWaWV3OmZ1bmN0aW9uKGMsZCxlLGYsZyxoLGkpe2Zvcih2YXIgaixrLGwsbT1cIlwiLG49ZS8xMCxvPXRoaXMucGlja2VyLmZpbmQoYykscD1NYXRoLmZsb29yKGYvZSkqZSxxPXArOSpuLHI9TWF0aC5mbG9vcih0aGlzLnZpZXdEYXRlLmdldEZ1bGxZZWFyKCkvbikqbixzPWEubWFwKHRoaXMuZGF0ZXMsZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGguZmxvb3IoYS5nZXRVVENGdWxsWWVhcigpL24pKm59KSx0PXAtbjt0PD1xK247dCs9bilqPVtkXSxrPW51bGwsdD09PXAtbj9qLnB1c2goXCJvbGRcIik6dD09PXErbiYmai5wdXNoKFwibmV3XCIpLGEuaW5BcnJheSh0LHMpIT09LTEmJmoucHVzaChcImFjdGl2ZVwiKSwodDxnfHx0PmgpJiZqLnB1c2goXCJkaXNhYmxlZFwiKSx0PT09ciYmai5wdXNoKFwiZm9jdXNlZFwiKSxpIT09YS5ub29wJiYobD1pKG5ldyBEYXRlKHQsMCwxKSksbD09PWI/bD17fTpcImJvb2xlYW5cIj09dHlwZW9mIGw/bD17ZW5hYmxlZDpsfTpcInN0cmluZ1wiPT10eXBlb2YgbCYmKGw9e2NsYXNzZXM6bH0pLGwuZW5hYmxlZD09PSExJiZqLnB1c2goXCJkaXNhYmxlZFwiKSxsLmNsYXNzZXMmJihqPWouY29uY2F0KGwuY2xhc3Nlcy5zcGxpdCgvXFxzKy8pKSksbC50b29sdGlwJiYoaz1sLnRvb2x0aXApKSxtKz0nPHNwYW4gY2xhc3M9XCInK2ouam9pbihcIiBcIikrJ1wiJysoaz8nIHRpdGxlPVwiJytrKydcIic6XCJcIikrXCI+XCIrdCtcIjwvc3Bhbj5cIjtvLmZpbmQoXCIuZGF0ZXBpY2tlci1zd2l0Y2hcIikudGV4dChwK1wiLVwiK3EpLG8uZmluZChcInRkXCIpLmh0bWwobSl9LGZpbGw6ZnVuY3Rpb24oKXt2YXIgZCxlLGY9bmV3IERhdGUodGhpcy52aWV3RGF0ZSksZz1mLmdldFVUQ0Z1bGxZZWFyKCksaD1mLmdldFVUQ01vbnRoKCksaT10aGlzLm8uc3RhcnREYXRlIT09LSgxLzApP3RoaXMuby5zdGFydERhdGUuZ2V0VVRDRnVsbFllYXIoKTotKDEvMCksaj10aGlzLm8uc3RhcnREYXRlIT09LSgxLzApP3RoaXMuby5zdGFydERhdGUuZ2V0VVRDTW9udGgoKTotKDEvMCksaz10aGlzLm8uZW5kRGF0ZSE9PTEvMD90aGlzLm8uZW5kRGF0ZS5nZXRVVENGdWxsWWVhcigpOjEvMCxsPXRoaXMuby5lbmREYXRlIT09MS8wP3RoaXMuby5lbmREYXRlLmdldFVUQ01vbnRoKCk6MS8wLG09cVt0aGlzLm8ubGFuZ3VhZ2VdLnRvZGF5fHxxLmVuLnRvZGF5fHxcIlwiLG49cVt0aGlzLm8ubGFuZ3VhZ2VdLmNsZWFyfHxxLmVuLmNsZWFyfHxcIlwiLG89cVt0aGlzLm8ubGFuZ3VhZ2VdLnRpdGxlRm9ybWF0fHxxLmVuLnRpdGxlRm9ybWF0O2lmKCFpc05hTihnKSYmIWlzTmFOKGgpKXt0aGlzLnBpY2tlci5maW5kKFwiLmRhdGVwaWNrZXItZGF5cyAuZGF0ZXBpY2tlci1zd2l0Y2hcIikudGV4dChyLmZvcm1hdERhdGUoZixvLHRoaXMuby5sYW5ndWFnZSkpLHRoaXMucGlja2VyLmZpbmQoXCJ0Zm9vdCAudG9kYXlcIikudGV4dChtKS5jc3MoXCJkaXNwbGF5XCIsdGhpcy5vLnRvZGF5QnRuPT09ITB8fFwibGlua2VkXCI9PT10aGlzLm8udG9kYXlCdG4/XCJ0YWJsZS1jZWxsXCI6XCJub25lXCIpLHRoaXMucGlja2VyLmZpbmQoXCJ0Zm9vdCAuY2xlYXJcIikudGV4dChuKS5jc3MoXCJkaXNwbGF5XCIsdGhpcy5vLmNsZWFyQnRuPT09ITA/XCJ0YWJsZS1jZWxsXCI6XCJub25lXCIpLHRoaXMucGlja2VyLmZpbmQoXCJ0aGVhZCAuZGF0ZXBpY2tlci10aXRsZVwiKS50ZXh0KHRoaXMuby50aXRsZSkuY3NzKFwiZGlzcGxheVwiLFwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLm8udGl0bGUmJlwiXCIhPT10aGlzLm8udGl0bGU/XCJ0YWJsZS1jZWxsXCI6XCJub25lXCIpLHRoaXMudXBkYXRlTmF2QXJyb3dzKCksdGhpcy5maWxsTW9udGhzKCk7dmFyIHA9YyhnLGgsMCkscz1wLmdldFVUQ0RhdGUoKTtwLnNldFVUQ0RhdGUocy0ocC5nZXRVVENEYXkoKS10aGlzLm8ud2Vla1N0YXJ0KzcpJTcpO3ZhciB0PW5ldyBEYXRlKHApO3AuZ2V0VVRDRnVsbFllYXIoKTwxMDAmJnQuc2V0VVRDRnVsbFllYXIocC5nZXRVVENGdWxsWWVhcigpKSx0LnNldFVUQ0RhdGUodC5nZXRVVENEYXRlKCkrNDIpLHQ9dC52YWx1ZU9mKCk7Zm9yKHZhciB1LHYsdz1bXTtwLnZhbHVlT2YoKTx0Oyl7aWYodT1wLmdldFVUQ0RheSgpLHU9PT10aGlzLm8ud2Vla1N0YXJ0JiYody5wdXNoKFwiPHRyPlwiKSx0aGlzLm8uY2FsZW5kYXJXZWVrcykpe3ZhciB4PW5ldyBEYXRlKCtwKyh0aGlzLm8ud2Vla1N0YXJ0LXUtNyklNyo4NjRlNSkseT1uZXcgRGF0ZShOdW1iZXIoeCkrKDExLXguZ2V0VVRDRGF5KCkpJTcqODY0ZTUpLHo9bmV3IERhdGUoTnVtYmVyKHo9Yyh5LmdldFVUQ0Z1bGxZZWFyKCksMCwxKSkrKDExLXouZ2V0VVRDRGF5KCkpJTcqODY0ZTUpLEE9KHkteikvODY0ZTUvNysxO3cucHVzaCgnPHRkIGNsYXNzPVwiY3dcIj4nK0ErXCI8L3RkPlwiKX12PXRoaXMuZ2V0Q2xhc3NOYW1lcyhwKSx2LnB1c2goXCJkYXlcIik7dmFyIEI9cC5nZXRVVENEYXRlKCk7dGhpcy5vLmJlZm9yZVNob3dEYXkhPT1hLm5vb3AmJihlPXRoaXMuby5iZWZvcmVTaG93RGF5KHRoaXMuX3V0Y190b19sb2NhbChwKSksZT09PWI/ZT17fTpcImJvb2xlYW5cIj09dHlwZW9mIGU/ZT17ZW5hYmxlZDplfTpcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9e2NsYXNzZXM6ZX0pLGUuZW5hYmxlZD09PSExJiZ2LnB1c2goXCJkaXNhYmxlZFwiKSxlLmNsYXNzZXMmJih2PXYuY29uY2F0KGUuY2xhc3Nlcy5zcGxpdCgvXFxzKy8pKSksZS50b29sdGlwJiYoZD1lLnRvb2x0aXApLGUuY29udGVudCYmKEI9ZS5jb250ZW50KSksdj1hLmlzRnVuY3Rpb24oYS51bmlxdWVTb3J0KT9hLnVuaXF1ZVNvcnQodik6YS51bmlxdWUodiksdy5wdXNoKCc8dGQgY2xhc3M9XCInK3Yuam9pbihcIiBcIikrJ1wiJysoZD8nIHRpdGxlPVwiJytkKydcIic6XCJcIikrJyBkYXRhLWRhdGU9XCInK3AuZ2V0VGltZSgpLnRvU3RyaW5nKCkrJ1wiPicrQitcIjwvdGQ+XCIpLGQ9bnVsbCx1PT09dGhpcy5vLndlZWtFbmQmJncucHVzaChcIjwvdHI+XCIpLHAuc2V0VVRDRGF0ZShwLmdldFVUQ0RhdGUoKSsxKX10aGlzLnBpY2tlci5maW5kKFwiLmRhdGVwaWNrZXItZGF5cyB0Ym9keVwiKS5odG1sKHcuam9pbihcIlwiKSk7dmFyIEM9cVt0aGlzLm8ubGFuZ3VhZ2VdLm1vbnRoc1RpdGxlfHxxLmVuLm1vbnRoc1RpdGxlfHxcIk1vbnRoc1wiLEQ9dGhpcy5waWNrZXIuZmluZChcIi5kYXRlcGlja2VyLW1vbnRoc1wiKS5maW5kKFwiLmRhdGVwaWNrZXItc3dpdGNoXCIpLnRleHQodGhpcy5vLm1heFZpZXdNb2RlPDI/QzpnKS5lbmQoKS5maW5kKFwidGJvZHkgc3BhblwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtpZihhLmVhY2godGhpcy5kYXRlcyxmdW5jdGlvbihhLGIpe2IuZ2V0VVRDRnVsbFllYXIoKT09PWcmJkQuZXEoYi5nZXRVVENNb250aCgpKS5hZGRDbGFzcyhcImFjdGl2ZVwiKX0pLChnPGl8fGc+aykmJkQuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSxnPT09aSYmRC5zbGljZSgwLGopLmFkZENsYXNzKFwiZGlzYWJsZWRcIiksZz09PWsmJkQuc2xpY2UobCsxKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpLHRoaXMuby5iZWZvcmVTaG93TW9udGghPT1hLm5vb3Ape3ZhciBFPXRoaXM7YS5lYWNoKEQsZnVuY3Rpb24oYyxkKXt2YXIgZT1uZXcgRGF0ZShnLGMsMSksZj1FLm8uYmVmb3JlU2hvd01vbnRoKGUpO2Y9PT1iP2Y9e306XCJib29sZWFuXCI9PXR5cGVvZiBmP2Y9e2VuYWJsZWQ6Zn06XCJzdHJpbmdcIj09dHlwZW9mIGYmJihmPXtjbGFzc2VzOmZ9KSxmLmVuYWJsZWQhPT0hMXx8YShkKS5oYXNDbGFzcyhcImRpc2FibGVkXCIpfHxhKGQpLmFkZENsYXNzKFwiZGlzYWJsZWRcIiksZi5jbGFzc2VzJiZhKGQpLmFkZENsYXNzKGYuY2xhc3NlcyksZi50b29sdGlwJiZhKGQpLnByb3AoXCJ0aXRsZVwiLGYudG9vbHRpcCl9KX10aGlzLl9maWxsX3llYXJzVmlldyhcIi5kYXRlcGlja2VyLXllYXJzXCIsXCJ5ZWFyXCIsMTAsZyxpLGssdGhpcy5vLmJlZm9yZVNob3dZZWFyKSx0aGlzLl9maWxsX3llYXJzVmlldyhcIi5kYXRlcGlja2VyLWRlY2FkZXNcIixcImRlY2FkZVwiLDEwMCxnLGksayx0aGlzLm8uYmVmb3JlU2hvd0RlY2FkZSksdGhpcy5fZmlsbF95ZWFyc1ZpZXcoXCIuZGF0ZXBpY2tlci1jZW50dXJpZXNcIixcImNlbnR1cnlcIiwxZTMsZyxpLGssdGhpcy5vLmJlZm9yZVNob3dDZW50dXJ5KX19LHVwZGF0ZU5hdkFycm93czpmdW5jdGlvbigpe2lmKHRoaXMuX2FsbG93X3VwZGF0ZSl7dmFyIGEsYixjPW5ldyBEYXRlKHRoaXMudmlld0RhdGUpLGQ9Yy5nZXRVVENGdWxsWWVhcigpLGU9Yy5nZXRVVENNb250aCgpLGY9dGhpcy5vLnN0YXJ0RGF0ZSE9PS0oMS8wKT90aGlzLm8uc3RhcnREYXRlLmdldFVUQ0Z1bGxZZWFyKCk6LSgxLzApLGc9dGhpcy5vLnN0YXJ0RGF0ZSE9PS0oMS8wKT90aGlzLm8uc3RhcnREYXRlLmdldFVUQ01vbnRoKCk6LSgxLzApLGg9dGhpcy5vLmVuZERhdGUhPT0xLzA/dGhpcy5vLmVuZERhdGUuZ2V0VVRDRnVsbFllYXIoKToxLzAsaT10aGlzLm8uZW5kRGF0ZSE9PTEvMD90aGlzLm8uZW5kRGF0ZS5nZXRVVENNb250aCgpOjEvMCxqPTE7c3dpdGNoKHRoaXMudmlld01vZGUpe2Nhc2UgNDpqKj0xMDtjYXNlIDM6aio9MTA7Y2FzZSAyOmoqPTEwO2Nhc2UgMTphPU1hdGguZmxvb3IoZC9qKSpqPGYsYj1NYXRoLmZsb29yKGQvaikqaitqPmg7YnJlYWs7Y2FzZSAwOmE9ZDw9ZiYmZTxnLGI9ZD49aCYmZT5pfXRoaXMucGlja2VyLmZpbmQoXCIucHJldlwiKS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsYSksdGhpcy5waWNrZXIuZmluZChcIi5uZXh0XCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIixiKX19LGNsaWNrOmZ1bmN0aW9uKGIpe2IucHJldmVudERlZmF1bHQoKSxiLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBlLGYsZyxoO2U9YShiLnRhcmdldCksZS5oYXNDbGFzcyhcImRhdGVwaWNrZXItc3dpdGNoXCIpJiZ0aGlzLnZpZXdNb2RlIT09dGhpcy5vLm1heFZpZXdNb2RlJiZ0aGlzLnNldFZpZXdNb2RlKHRoaXMudmlld01vZGUrMSksZS5oYXNDbGFzcyhcInRvZGF5XCIpJiYhZS5oYXNDbGFzcyhcImRheVwiKSYmKHRoaXMuc2V0Vmlld01vZGUoMCksdGhpcy5fc2V0RGF0ZShkKCksXCJsaW5rZWRcIj09PXRoaXMuby50b2RheUJ0bj9udWxsOlwidmlld1wiKSksZS5oYXNDbGFzcyhcImNsZWFyXCIpJiZ0aGlzLmNsZWFyRGF0ZXMoKSxlLmhhc0NsYXNzKFwiZGlzYWJsZWRcIil8fChlLmhhc0NsYXNzKFwibW9udGhcIil8fGUuaGFzQ2xhc3MoXCJ5ZWFyXCIpfHxlLmhhc0NsYXNzKFwiZGVjYWRlXCIpfHxlLmhhc0NsYXNzKFwiY2VudHVyeVwiKSkmJih0aGlzLnZpZXdEYXRlLnNldFVUQ0RhdGUoMSksZj0xLDE9PT10aGlzLnZpZXdNb2RlPyhoPWUucGFyZW50KCkuZmluZChcInNwYW5cIikuaW5kZXgoZSksZz10aGlzLnZpZXdEYXRlLmdldFVUQ0Z1bGxZZWFyKCksdGhpcy52aWV3RGF0ZS5zZXRVVENNb250aChoKSk6KGg9MCxnPU51bWJlcihlLnRleHQoKSksdGhpcy52aWV3RGF0ZS5zZXRVVENGdWxsWWVhcihnKSksdGhpcy5fdHJpZ2dlcihyLnZpZXdNb2Rlc1t0aGlzLnZpZXdNb2RlLTFdLmUsdGhpcy52aWV3RGF0ZSksdGhpcy52aWV3TW9kZT09PXRoaXMuby5taW5WaWV3TW9kZT90aGlzLl9zZXREYXRlKGMoZyxoLGYpKToodGhpcy5zZXRWaWV3TW9kZSh0aGlzLnZpZXdNb2RlLTEpLHRoaXMuZmlsbCgpKSksdGhpcy5waWNrZXIuaXMoXCI6dmlzaWJsZVwiKSYmdGhpcy5fZm9jdXNlZF9mcm9tJiZ0aGlzLl9mb2N1c2VkX2Zyb20uZm9jdXMoKSxkZWxldGUgdGhpcy5fZm9jdXNlZF9mcm9tfSxkYXlDZWxsQ2xpY2s6ZnVuY3Rpb24oYil7dmFyIGM9YShiLmN1cnJlbnRUYXJnZXQpLGQ9Yy5kYXRhKFwiZGF0ZVwiKSxlPW5ldyBEYXRlKGQpO3RoaXMuby51cGRhdGVWaWV3RGF0ZSYmKGUuZ2V0VVRDRnVsbFllYXIoKSE9PXRoaXMudmlld0RhdGUuZ2V0VVRDRnVsbFllYXIoKSYmdGhpcy5fdHJpZ2dlcihcImNoYW5nZVllYXJcIix0aGlzLnZpZXdEYXRlKSxlLmdldFVUQ01vbnRoKCkhPT10aGlzLnZpZXdEYXRlLmdldFVUQ01vbnRoKCkmJnRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VNb250aFwiLHRoaXMudmlld0RhdGUpKSx0aGlzLl9zZXREYXRlKGUpfSxuYXZBcnJvd3NDbGljazpmdW5jdGlvbihiKXt2YXIgYz1hKGIuY3VycmVudFRhcmdldCksZD1jLmhhc0NsYXNzKFwicHJldlwiKT8tMToxOzAhPT10aGlzLnZpZXdNb2RlJiYoZCo9MTIqci52aWV3TW9kZXNbdGhpcy52aWV3TW9kZV0ubmF2U3RlcCksdGhpcy52aWV3RGF0ZT10aGlzLm1vdmVNb250aCh0aGlzLnZpZXdEYXRlLGQpLHRoaXMuX3RyaWdnZXIoci52aWV3TW9kZXNbdGhpcy52aWV3TW9kZV0uZSx0aGlzLnZpZXdEYXRlKSx0aGlzLmZpbGwoKX0sX3RvZ2dsZV9tdWx0aWRhdGU6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5kYXRlcy5jb250YWlucyhhKTtpZihhfHx0aGlzLmRhdGVzLmNsZWFyKCksYiE9PS0xPyh0aGlzLm8ubXVsdGlkYXRlPT09ITB8fHRoaXMuby5tdWx0aWRhdGU+MXx8dGhpcy5vLnRvZ2dsZUFjdGl2ZSkmJnRoaXMuZGF0ZXMucmVtb3ZlKGIpOnRoaXMuby5tdWx0aWRhdGU9PT0hMT8odGhpcy5kYXRlcy5jbGVhcigpLHRoaXMuZGF0ZXMucHVzaChhKSk6dGhpcy5kYXRlcy5wdXNoKGEpLFwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLm8ubXVsdGlkYXRlKWZvcig7dGhpcy5kYXRlcy5sZW5ndGg+dGhpcy5vLm11bHRpZGF0ZTspdGhpcy5kYXRlcy5yZW1vdmUoMCl9LF9zZXREYXRlOmZ1bmN0aW9uKGEsYil7YiYmXCJkYXRlXCIhPT1ifHx0aGlzLl90b2dnbGVfbXVsdGlkYXRlKGEmJm5ldyBEYXRlKGEpKSwoIWImJnRoaXMuby51cGRhdGVWaWV3RGF0ZXx8XCJ2aWV3XCI9PT1iKSYmKHRoaXMudmlld0RhdGU9YSYmbmV3IERhdGUoYSkpLHRoaXMuZmlsbCgpLHRoaXMuc2V0VmFsdWUoKSxiJiZcInZpZXdcIj09PWJ8fHRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VEYXRlXCIpLHRoaXMuaW5wdXRGaWVsZC50cmlnZ2VyKFwiY2hhbmdlXCIpLCF0aGlzLm8uYXV0b2Nsb3NlfHxiJiZcImRhdGVcIiE9PWJ8fHRoaXMuaGlkZSgpfSxtb3ZlRGF5OmZ1bmN0aW9uKGEsYil7dmFyIGM9bmV3IERhdGUoYSk7cmV0dXJuIGMuc2V0VVRDRGF0ZShhLmdldFVUQ0RhdGUoKStiKSxjfSxtb3ZlV2VlazpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdmVEYXkoYSw3KmIpfSxtb3ZlTW9udGg6ZnVuY3Rpb24oYSxiKXtpZighZyhhKSlyZXR1cm4gdGhpcy5vLmRlZmF1bHRWaWV3RGF0ZTtpZighYilyZXR1cm4gYTt2YXIgYyxkLGU9bmV3IERhdGUoYS52YWx1ZU9mKCkpLGY9ZS5nZXRVVENEYXRlKCksaD1lLmdldFVUQ01vbnRoKCksaT1NYXRoLmFicyhiKTtpZihiPWI+MD8xOi0xLDE9PT1pKWQ9Yj09PS0xP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZ2V0VVRDTW9udGgoKT09PWh9OmZ1bmN0aW9uKCl7cmV0dXJuIGUuZ2V0VVRDTW9udGgoKSE9PWN9LGM9aCtiLGUuc2V0VVRDTW9udGgoYyksYz0oYysxMiklMTI7ZWxzZXtmb3IodmFyIGo9MDtqPGk7aisrKWU9dGhpcy5tb3ZlTW9udGgoZSxiKTtjPWUuZ2V0VVRDTW9udGgoKSxlLnNldFVUQ0RhdGUoZiksZD1mdW5jdGlvbigpe3JldHVybiBjIT09ZS5nZXRVVENNb250aCgpfX1mb3IoO2QoKTspZS5zZXRVVENEYXRlKC0tZiksZS5zZXRVVENNb250aChjKTtyZXR1cm4gZX0sbW92ZVllYXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3ZlTW9udGgoYSwxMipiKX0sbW92ZUF2YWlsYWJsZURhdGU6ZnVuY3Rpb24oYSxiLGMpe2Rve2lmKGE9dGhpc1tjXShhLGIpLCF0aGlzLmRhdGVXaXRoaW5SYW5nZShhKSlyZXR1cm4hMTtjPVwibW92ZURheVwifXdoaWxlKHRoaXMuZGF0ZUlzRGlzYWJsZWQoYSkpO3JldHVybiBhfSx3ZWVrT2ZEYXRlSXNEaXNhYmxlZDpmdW5jdGlvbihiKXtyZXR1cm4gYS5pbkFycmF5KGIuZ2V0VVRDRGF5KCksdGhpcy5vLmRheXNPZldlZWtEaXNhYmxlZCkhPT0tMX0sZGF0ZUlzRGlzYWJsZWQ6ZnVuY3Rpb24oYil7cmV0dXJuIHRoaXMud2Vla09mRGF0ZUlzRGlzYWJsZWQoYil8fGEuZ3JlcCh0aGlzLm8uZGF0ZXNEaXNhYmxlZCxmdW5jdGlvbihhKXtyZXR1cm4gZShiLGEpfSkubGVuZ3RoPjB9LGRhdGVXaXRoaW5SYW5nZTpmdW5jdGlvbihhKXtyZXR1cm4gYT49dGhpcy5vLnN0YXJ0RGF0ZSYmYTw9dGhpcy5vLmVuZERhdGV9LGtleWRvd246ZnVuY3Rpb24oYSl7aWYoIXRoaXMucGlja2VyLmlzKFwiOnZpc2libGVcIikpcmV0dXJuIHZvaWQoNDAhPT1hLmtleUNvZGUmJjI3IT09YS5rZXlDb2RlfHwodGhpcy5zaG93KCksYS5zdG9wUHJvcGFnYXRpb24oKSkpO3ZhciBiLGMsZD0hMSxlPXRoaXMuZm9jdXNEYXRlfHx0aGlzLnZpZXdEYXRlO3N3aXRjaChhLmtleUNvZGUpe2Nhc2UgMjc6dGhpcy5mb2N1c0RhdGU/KHRoaXMuZm9jdXNEYXRlPW51bGwsdGhpcy52aWV3RGF0ZT10aGlzLmRhdGVzLmdldCgtMSl8fHRoaXMudmlld0RhdGUsdGhpcy5maWxsKCkpOnRoaXMuaGlkZSgpLGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpO2JyZWFrO2Nhc2UgMzc6Y2FzZSAzODpjYXNlIDM5OmNhc2UgNDA6aWYoIXRoaXMuby5rZXlib2FyZE5hdmlnYXRpb258fDc9PT10aGlzLm8uZGF5c09mV2Vla0Rpc2FibGVkLmxlbmd0aClicmVhaztiPTM3PT09YS5rZXlDb2RlfHwzOD09PWEua2V5Q29kZT8tMToxLDA9PT10aGlzLnZpZXdNb2RlP2EuY3RybEtleT8oYz10aGlzLm1vdmVBdmFpbGFibGVEYXRlKGUsYixcIm1vdmVZZWFyXCIpLGMmJnRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VZZWFyXCIsdGhpcy52aWV3RGF0ZSkpOmEuc2hpZnRLZXk/KGM9dGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShlLGIsXCJtb3ZlTW9udGhcIiksYyYmdGhpcy5fdHJpZ2dlcihcImNoYW5nZU1vbnRoXCIsdGhpcy52aWV3RGF0ZSkpOjM3PT09YS5rZXlDb2RlfHwzOT09PWEua2V5Q29kZT9jPXRoaXMubW92ZUF2YWlsYWJsZURhdGUoZSxiLFwibW92ZURheVwiKTp0aGlzLndlZWtPZkRhdGVJc0Rpc2FibGVkKGUpfHwoYz10aGlzLm1vdmVBdmFpbGFibGVEYXRlKGUsYixcIm1vdmVXZWVrXCIpKToxPT09dGhpcy52aWV3TW9kZT8oMzghPT1hLmtleUNvZGUmJjQwIT09YS5rZXlDb2RlfHwoYio9NCksYz10aGlzLm1vdmVBdmFpbGFibGVEYXRlKGUsYixcIm1vdmVNb250aFwiKSk6Mj09PXRoaXMudmlld01vZGUmJigzOCE9PWEua2V5Q29kZSYmNDAhPT1hLmtleUNvZGV8fChiKj00KSxjPXRoaXMubW92ZUF2YWlsYWJsZURhdGUoZSxiLFwibW92ZVllYXJcIikpLGMmJih0aGlzLmZvY3VzRGF0ZT10aGlzLnZpZXdEYXRlPWMsdGhpcy5zZXRWYWx1ZSgpLHRoaXMuZmlsbCgpLGEucHJldmVudERlZmF1bHQoKSk7YnJlYWs7Y2FzZSAxMzppZighdGhpcy5vLmZvcmNlUGFyc2UpYnJlYWs7ZT10aGlzLmZvY3VzRGF0ZXx8dGhpcy5kYXRlcy5nZXQoLTEpfHx0aGlzLnZpZXdEYXRlLHRoaXMuby5rZXlib2FyZE5hdmlnYXRpb24mJih0aGlzLl90b2dnbGVfbXVsdGlkYXRlKGUpLGQ9ITApLHRoaXMuZm9jdXNEYXRlPW51bGwsdGhpcy52aWV3RGF0ZT10aGlzLmRhdGVzLmdldCgtMSl8fHRoaXMudmlld0RhdGUsdGhpcy5zZXRWYWx1ZSgpLHRoaXMuZmlsbCgpLHRoaXMucGlja2VyLmlzKFwiOnZpc2libGVcIikmJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLm8uYXV0b2Nsb3NlJiZ0aGlzLmhpZGUoKSk7YnJlYWs7Y2FzZSA5OnRoaXMuZm9jdXNEYXRlPW51bGwsdGhpcy52aWV3RGF0ZT10aGlzLmRhdGVzLmdldCgtMSl8fHRoaXMudmlld0RhdGUsdGhpcy5maWxsKCksdGhpcy5oaWRlKCl9ZCYmKHRoaXMuZGF0ZXMubGVuZ3RoP3RoaXMuX3RyaWdnZXIoXCJjaGFuZ2VEYXRlXCIpOnRoaXMuX3RyaWdnZXIoXCJjbGVhckRhdGVcIiksdGhpcy5pbnB1dEZpZWxkLnRyaWdnZXIoXCJjaGFuZ2VcIikpfSxzZXRWaWV3TW9kZTpmdW5jdGlvbihhKXt0aGlzLnZpZXdNb2RlPWEsdGhpcy5waWNrZXIuY2hpbGRyZW4oXCJkaXZcIikuaGlkZSgpLmZpbHRlcihcIi5kYXRlcGlja2VyLVwiK3Iudmlld01vZGVzW3RoaXMudmlld01vZGVdLmNsc05hbWUpLnNob3coKSx0aGlzLnVwZGF0ZU5hdkFycm93cygpLHRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VWaWV3TW9kZVwiLG5ldyBEYXRlKHRoaXMudmlld0RhdGUpKX19O3ZhciBsPWZ1bmN0aW9uKGIsYyl7YS5kYXRhKGIsXCJkYXRlcGlja2VyXCIsdGhpcyksdGhpcy5lbGVtZW50PWEoYiksdGhpcy5pbnB1dHM9YS5tYXAoYy5pbnB1dHMsZnVuY3Rpb24oYSl7cmV0dXJuIGEuanF1ZXJ5P2FbMF06YX0pLGRlbGV0ZSBjLmlucHV0cyx0aGlzLmtlZXBFbXB0eVZhbHVlcz1jLmtlZXBFbXB0eVZhbHVlcyxkZWxldGUgYy5rZWVwRW1wdHlWYWx1ZXMsbi5jYWxsKGEodGhpcy5pbnB1dHMpLGMpLm9uKFwiY2hhbmdlRGF0ZVwiLGEucHJveHkodGhpcy5kYXRlVXBkYXRlZCx0aGlzKSksdGhpcy5waWNrZXJzPWEubWFwKHRoaXMuaW5wdXRzLGZ1bmN0aW9uKGIpe3JldHVybiBhLmRhdGEoYixcImRhdGVwaWNrZXJcIil9KSx0aGlzLnVwZGF0ZURhdGVzKCl9O2wucHJvdG90eXBlPXt1cGRhdGVEYXRlczpmdW5jdGlvbigpe3RoaXMuZGF0ZXM9YS5tYXAodGhpcy5waWNrZXJzLGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldFVUQ0RhdGUoKX0pLHRoaXMudXBkYXRlUmFuZ2VzKCl9LHVwZGF0ZVJhbmdlczpmdW5jdGlvbigpe3ZhciBiPWEubWFwKHRoaXMuZGF0ZXMsZnVuY3Rpb24oYSl7cmV0dXJuIGEudmFsdWVPZigpfSk7YS5lYWNoKHRoaXMucGlja2VycyxmdW5jdGlvbihhLGMpe2Muc2V0UmFuZ2UoYil9KX0sY2xlYXJEYXRlczpmdW5jdGlvbigpe2EuZWFjaCh0aGlzLnBpY2tlcnMsZnVuY3Rpb24oYSxiKXtiLmNsZWFyRGF0ZXMoKX0pfSxkYXRlVXBkYXRlZDpmdW5jdGlvbihjKXtpZighdGhpcy51cGRhdGluZyl7dGhpcy51cGRhdGluZz0hMDt2YXIgZD1hLmRhdGEoYy50YXJnZXQsXCJkYXRlcGlja2VyXCIpO2lmKGQhPT1iKXt2YXIgZT1kLmdldFVUQ0RhdGUoKSxmPXRoaXMua2VlcEVtcHR5VmFsdWVzLGc9YS5pbkFycmF5KGMudGFyZ2V0LHRoaXMuaW5wdXRzKSxoPWctMSxpPWcrMSxqPXRoaXMuaW5wdXRzLmxlbmd0aDtpZihnIT09LTEpe2lmKGEuZWFjaCh0aGlzLnBpY2tlcnMsZnVuY3Rpb24oYSxiKXtiLmdldFVUQ0RhdGUoKXx8YiE9PWQmJmZ8fGIuc2V0VVRDRGF0ZShlKX0pLGU8dGhpcy5kYXRlc1toXSlmb3IoO2g+PTAmJmU8dGhpcy5kYXRlc1toXTspdGhpcy5waWNrZXJzW2gtLV0uc2V0VVRDRGF0ZShlKTtlbHNlIGlmKGU+dGhpcy5kYXRlc1tpXSlmb3IoO2k8aiYmZT50aGlzLmRhdGVzW2ldOyl0aGlzLnBpY2tlcnNbaSsrXS5zZXRVVENEYXRlKGUpO3RoaXMudXBkYXRlRGF0ZXMoKSxkZWxldGUgdGhpcy51cGRhdGluZ319fX0sZGVzdHJveTpmdW5jdGlvbigpe2EubWFwKHRoaXMucGlja2VycyxmdW5jdGlvbihhKXthLmRlc3Ryb3koKX0pLGEodGhpcy5pbnB1dHMpLm9mZihcImNoYW5nZURhdGVcIix0aGlzLmRhdGVVcGRhdGVkKSxkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlcGlja2VyfSxyZW1vdmU6ZihcImRlc3Ryb3lcIixcIk1ldGhvZCBgcmVtb3ZlYCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiAyLjAuIFVzZSBgZGVzdHJveWAgaW5zdGVhZFwiKX07dmFyIG09YS5mbi5kYXRlcGlja2VyLG49ZnVuY3Rpb24oYyl7dmFyIGQ9QXJyYXkuYXBwbHkobnVsbCxhcmd1bWVudHMpO2Quc2hpZnQoKTt2YXIgZTtpZih0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLGY9Yi5kYXRhKFwiZGF0ZXBpY2tlclwiKSxnPVwib2JqZWN0XCI9PXR5cGVvZiBjJiZjO2lmKCFmKXt2YXIgaj1oKHRoaXMsXCJkYXRlXCIpLG09YS5leHRlbmQoe30sbyxqLGcpLG49aShtLmxhbmd1YWdlKSxwPWEuZXh0ZW5kKHt9LG8sbixqLGcpO2IuaGFzQ2xhc3MoXCJpbnB1dC1kYXRlcmFuZ2VcIil8fHAuaW5wdXRzPyhhLmV4dGVuZChwLHtpbnB1dHM6cC5pbnB1dHN8fGIuZmluZChcImlucHV0XCIpLnRvQXJyYXkoKX0pLGY9bmV3IGwodGhpcyxwKSk6Zj1uZXcgayh0aGlzLHApLGIuZGF0YShcImRhdGVwaWNrZXJcIixmKX1cInN0cmluZ1wiPT10eXBlb2YgYyYmXCJmdW5jdGlvblwiPT10eXBlb2YgZltjXSYmKGU9ZltjXS5hcHBseShmLGQpKX0pLGU9PT1ifHxlIGluc3RhbmNlb2Yga3x8ZSBpbnN0YW5jZW9mIGwpcmV0dXJuIHRoaXM7aWYodGhpcy5sZW5ndGg+MSl0aHJvdyBuZXcgRXJyb3IoXCJVc2luZyBvbmx5IGFsbG93ZWQgZm9yIHRoZSBjb2xsZWN0aW9uIG9mIGEgc2luZ2xlIGVsZW1lbnQgKFwiK2MrXCIgZnVuY3Rpb24pXCIpO3JldHVybiBlfTthLmZuLmRhdGVwaWNrZXI9bjt2YXIgbz1hLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHM9e2Fzc3VtZU5lYXJieVllYXI6ITEsYXV0b2Nsb3NlOiExLGJlZm9yZVNob3dEYXk6YS5ub29wLGJlZm9yZVNob3dNb250aDphLm5vb3AsYmVmb3JlU2hvd1llYXI6YS5ub29wLGJlZm9yZVNob3dEZWNhZGU6YS5ub29wLGJlZm9yZVNob3dDZW50dXJ5OmEubm9vcCxjYWxlbmRhcldlZWtzOiExLGNsZWFyQnRuOiExLHRvZ2dsZUFjdGl2ZTohMSxkYXlzT2ZXZWVrRGlzYWJsZWQ6W10sZGF5c09mV2Vla0hpZ2hsaWdodGVkOltdLGRhdGVzRGlzYWJsZWQ6W10sZW5kRGF0ZToxLzAsZm9yY2VQYXJzZTohMCxmb3JtYXQ6XCJtbS9kZC95eXl5XCIsa2VlcEVtcHR5VmFsdWVzOiExLGtleWJvYXJkTmF2aWdhdGlvbjohMCxsYW5ndWFnZTpcImVuXCIsbWluVmlld01vZGU6MCxtYXhWaWV3TW9kZTo0LG11bHRpZGF0ZTohMSxtdWx0aWRhdGVTZXBhcmF0b3I6XCIsXCIsb3JpZW50YXRpb246XCJhdXRvXCIscnRsOiExLHN0YXJ0RGF0ZTotKDEvMCksc3RhcnRWaWV3OjAsdG9kYXlCdG46ITEsdG9kYXlIaWdobGlnaHQ6ITEsdXBkYXRlVmlld0RhdGU6ITAsd2Vla1N0YXJ0OjAsZGlzYWJsZVRvdWNoS2V5Ym9hcmQ6ITEsZW5hYmxlT25SZWFkb25seTohMCxzaG93T25Gb2N1czohMCx6SW5kZXhPZmZzZXQ6MTAsY29udGFpbmVyOlwiYm9keVwiLGltbWVkaWF0ZVVwZGF0ZXM6ITEsdGl0bGU6XCJcIix0ZW1wbGF0ZXM6e2xlZnRBcnJvdzpcIiYjeDAwQUI7XCIscmlnaHRBcnJvdzpcIiYjeDAwQkI7XCJ9LHNob3dXZWVrRGF5czohMH0scD1hLmZuLmRhdGVwaWNrZXIubG9jYWxlX29wdHM9W1wiZm9ybWF0XCIsXCJydGxcIixcIndlZWtTdGFydFwiXTthLmZuLmRhdGVwaWNrZXIuQ29uc3RydWN0b3I9azt2YXIgcT1hLmZuLmRhdGVwaWNrZXIuZGF0ZXM9e2VuOntkYXlzOltcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdLGRheXNTaG9ydDpbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0sZGF5c01pbjpbXCJTdVwiLFwiTW9cIixcIlR1XCIsXCJXZVwiLFwiVGhcIixcIkZyXCIsXCJTYVwiXSxtb250aHM6W1wiSmFudWFyeVwiLFwiRmVicnVhcnlcIixcIk1hcmNoXCIsXCJBcHJpbFwiLFwiTWF5XCIsXCJKdW5lXCIsXCJKdWx5XCIsXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2N0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlY2VtYmVyXCJdLG1vbnRoc1Nob3J0OltcIkphblwiLFwiRmViXCIsXCJNYXJcIixcIkFwclwiLFwiTWF5XCIsXCJKdW5cIixcIkp1bFwiLFwiQXVnXCIsXCJTZXBcIixcIk9jdFwiLFwiTm92XCIsXCJEZWNcIl0sdG9kYXk6XCJUb2RheVwiLGNsZWFyOlwiQ2xlYXJcIix0aXRsZUZvcm1hdDpcIk1NIHl5eXlcIn19LHI9e3ZpZXdNb2Rlczpbe25hbWVzOltcImRheXNcIixcIm1vbnRoXCJdLGNsc05hbWU6XCJkYXlzXCIsZTpcImNoYW5nZU1vbnRoXCJ9LHtuYW1lczpbXCJtb250aHNcIixcInllYXJcIl0sY2xzTmFtZTpcIm1vbnRoc1wiLGU6XCJjaGFuZ2VZZWFyXCIsbmF2U3RlcDoxfSx7bmFtZXM6W1wieWVhcnNcIixcImRlY2FkZVwiXSxjbHNOYW1lOlwieWVhcnNcIixlOlwiY2hhbmdlRGVjYWRlXCIsbmF2U3RlcDoxMH0se25hbWVzOltcImRlY2FkZXNcIixcImNlbnR1cnlcIl0sY2xzTmFtZTpcImRlY2FkZXNcIixlOlwiY2hhbmdlQ2VudHVyeVwiLG5hdlN0ZXA6MTAwfSx7bmFtZXM6W1wiY2VudHVyaWVzXCIsXCJtaWxsZW5uaXVtXCJdLGNsc05hbWU6XCJjZW50dXJpZXNcIixlOlwiY2hhbmdlTWlsbGVubml1bVwiLG5hdlN0ZXA6MWUzfV0sdmFsaWRQYXJ0czovZGQ/fEREP3xtbT98TU0/fHl5KD86eXkpPy9nLG5vbnB1bmN0dWF0aW9uOi9bXiAtXFwvOi1AXFx1NWU3NFxcdTY3MDhcXHU2NWU1XFxbLWB7LX5cXHRcXG5cXHJdKy9nLHBhcnNlRm9ybWF0OmZ1bmN0aW9uKGEpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGEudG9WYWx1ZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYS50b0Rpc3BsYXkpcmV0dXJuIGE7dmFyIGI9YS5yZXBsYWNlKHRoaXMudmFsaWRQYXJ0cyxcIlxcMFwiKS5zcGxpdChcIlxcMFwiKSxjPWEubWF0Y2godGhpcy52YWxpZFBhcnRzKTtpZighYnx8IWIubGVuZ3RofHwhY3x8MD09PWMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGF0ZSBmb3JtYXQuXCIpO3JldHVybntzZXBhcmF0b3JzOmIscGFydHM6Y319LHBhcnNlRGF0ZTpmdW5jdGlvbihjLGUsZixnKXtmdW5jdGlvbiBoKGEsYil7cmV0dXJuIGI9PT0hMCYmKGI9MTApLGE8MTAwJiYoYSs9MmUzLGE+KG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpK2ImJihhLT0xMDApKSxhfWZ1bmN0aW9uIGkoKXt2YXIgYT10aGlzLnNsaWNlKDAsaltuXS5sZW5ndGgpLGI9altuXS5zbGljZSgwLGEubGVuZ3RoKTtyZXR1cm4gYS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfWlmKCFjKXJldHVybiBiO2lmKGMgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBjO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1yLnBhcnNlRm9ybWF0KGUpKSxlLnRvVmFsdWUpcmV0dXJuIGUudG9WYWx1ZShjLGUsZik7dmFyIGosbCxtLG4sbyxwPXtkOlwibW92ZURheVwiLG06XCJtb3ZlTW9udGhcIix3OlwibW92ZVdlZWtcIix5OlwibW92ZVllYXJcIn0scz17eWVzdGVyZGF5OlwiLTFkXCIsdG9kYXk6XCIrMGRcIix0b21vcnJvdzpcIisxZFwifTtpZihjIGluIHMmJihjPXNbY10pLC9eW1xcLStdXFxkK1tkbXd5XShbXFxzLF0rW1xcLStdXFxkK1tkbXd5XSkqJC9pLnRlc3QoYykpe2ZvcihqPWMubWF0Y2goLyhbXFwtK11cXGQrKShbZG13eV0pL2dpKSxjPW5ldyBEYXRlLG49MDtuPGoubGVuZ3RoO24rKylsPWpbbl0ubWF0Y2goLyhbXFwtK11cXGQrKShbZG13eV0pL2kpLG09TnVtYmVyKGxbMV0pLG89cFtsWzJdLnRvTG93ZXJDYXNlKCldLGM9ay5wcm90b3R5cGVbb10oYyxtKTtyZXR1cm4gay5wcm90b3R5cGUuX3plcm9fdXRjX3RpbWUoYyl9aj1jJiZjLm1hdGNoKHRoaXMubm9ucHVuY3R1YXRpb24pfHxbXTt2YXIgdCx1LHY9e30sdz1bXCJ5eXl5XCIsXCJ5eVwiLFwiTVwiLFwiTU1cIixcIm1cIixcIm1tXCIsXCJkXCIsXCJkZFwiXSx4PXt5eXl5OmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuc2V0VVRDRnVsbFllYXIoZz9oKGIsZyk6Yil9LG06ZnVuY3Rpb24oYSxiKXtpZihpc05hTihhKSlyZXR1cm4gYTtmb3IoYi09MTtiPDA7KWIrPTEyO2ZvcihiJT0xMixhLnNldFVUQ01vbnRoKGIpO2EuZ2V0VVRDTW9udGgoKSE9PWI7KWEuc2V0VVRDRGF0ZShhLmdldFVUQ0RhdGUoKS0xKTtyZXR1cm4gYX0sZDpmdW5jdGlvbihhLGIpe3JldHVybiBhLnNldFVUQ0RhdGUoYil9fTt4Lnl5PXgueXl5eSx4Lk09eC5NTT14Lm1tPXgubSx4LmRkPXguZCxjPWQoKTt2YXIgeT1lLnBhcnRzLnNsaWNlKCk7aWYoai5sZW5ndGghPT15Lmxlbmd0aCYmKHk9YSh5KS5maWx0ZXIoZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5pbkFycmF5KGMsdykhPT0tMX0pLnRvQXJyYXkoKSksai5sZW5ndGg9PT15Lmxlbmd0aCl7dmFyIHo7Zm9yKG49MCx6PXkubGVuZ3RoO248ejtuKyspe2lmKHQ9cGFyc2VJbnQoaltuXSwxMCksbD15W25dLGlzTmFOKHQpKXN3aXRjaChsKXtjYXNlXCJNTVwiOnU9YShxW2ZdLm1vbnRocykuZmlsdGVyKGkpLHQ9YS5pbkFycmF5KHVbMF0scVtmXS5tb250aHMpKzE7YnJlYWs7Y2FzZVwiTVwiOnU9YShxW2ZdLm1vbnRoc1Nob3J0KS5maWx0ZXIoaSksdD1hLmluQXJyYXkodVswXSxxW2ZdLm1vbnRoc1Nob3J0KSsxfXZbbF09dH12YXIgQSxCO2ZvcihuPTA7bjx3Lmxlbmd0aDtuKyspQj13W25dLEIgaW4gdiYmIWlzTmFOKHZbQl0pJiYoQT1uZXcgRGF0ZShjKSx4W0JdKEEsdltCXSksaXNOYU4oQSl8fChjPUEpKX1yZXR1cm4gY30sZm9ybWF0RGF0ZTpmdW5jdGlvbihiLGMsZCl7aWYoIWIpcmV0dXJuXCJcIjtpZihcInN0cmluZ1wiPT10eXBlb2YgYyYmKGM9ci5wYXJzZUZvcm1hdChjKSksYy50b0Rpc3BsYXkpcmV0dXJuIGMudG9EaXNwbGF5KGIsYyxkKTt2YXIgZT17ZDpiLmdldFVUQ0RhdGUoKSxEOnFbZF0uZGF5c1Nob3J0W2IuZ2V0VVRDRGF5KCldLEREOnFbZF0uZGF5c1tiLmdldFVUQ0RheSgpXSxtOmIuZ2V0VVRDTW9udGgoKSsxLE06cVtkXS5tb250aHNTaG9ydFtiLmdldFVUQ01vbnRoKCldLE1NOnFbZF0ubW9udGhzW2IuZ2V0VVRDTW9udGgoKV0seXk6Yi5nZXRVVENGdWxsWWVhcigpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIpLHl5eXk6Yi5nZXRVVENGdWxsWWVhcigpfTtlLmRkPShlLmQ8MTA/XCIwXCI6XCJcIikrZS5kLGUubW09KGUubTwxMD9cIjBcIjpcIlwiKStlLm0sYj1bXTtmb3IodmFyIGY9YS5leHRlbmQoW10sYy5zZXBhcmF0b3JzKSxnPTAsaD1jLnBhcnRzLmxlbmd0aDtnPD1oO2crKylmLmxlbmd0aCYmYi5wdXNoKGYuc2hpZnQoKSksYi5wdXNoKGVbYy5wYXJ0c1tnXV0pO3JldHVybiBiLmpvaW4oXCJcIil9LGhlYWRUZW1wbGF0ZTonPHRoZWFkPjx0cj48dGggY29sc3Bhbj1cIjdcIiBjbGFzcz1cImRhdGVwaWNrZXItdGl0bGVcIj48L3RoPjwvdHI+PHRyPjx0aCBjbGFzcz1cInByZXZcIj4nK28udGVtcGxhdGVzLmxlZnRBcnJvdysnPC90aD48dGggY29sc3Bhbj1cIjVcIiBjbGFzcz1cImRhdGVwaWNrZXItc3dpdGNoXCI+PC90aD48dGggY2xhc3M9XCJuZXh0XCI+JytvLnRlbXBsYXRlcy5yaWdodEFycm93K1wiPC90aD48L3RyPjwvdGhlYWQ+XCIsXG5jb250VGVtcGxhdGU6Jzx0Ym9keT48dHI+PHRkIGNvbHNwYW49XCI3XCI+PC90ZD48L3RyPjwvdGJvZHk+Jyxmb290VGVtcGxhdGU6Jzx0Zm9vdD48dHI+PHRoIGNvbHNwYW49XCI3XCIgY2xhc3M9XCJ0b2RheVwiPjwvdGg+PC90cj48dHI+PHRoIGNvbHNwYW49XCI3XCIgY2xhc3M9XCJjbGVhclwiPjwvdGg+PC90cj48L3Rmb290Pid9O3IudGVtcGxhdGU9JzxkaXYgY2xhc3M9XCJkYXRlcGlja2VyXCI+PGRpdiBjbGFzcz1cImRhdGVwaWNrZXItZGF5c1wiPjx0YWJsZSBjbGFzcz1cInRhYmxlLWNvbmRlbnNlZFwiPicrci5oZWFkVGVtcGxhdGUrXCI8dGJvZHk+PC90Ym9keT5cIityLmZvb3RUZW1wbGF0ZSsnPC90YWJsZT48L2Rpdj48ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1tb250aHNcIj48dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK3IuaGVhZFRlbXBsYXRlK3IuY29udFRlbXBsYXRlK3IuZm9vdFRlbXBsYXRlKyc8L3RhYmxlPjwvZGl2PjxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLXllYXJzXCI+PHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+JytyLmhlYWRUZW1wbGF0ZStyLmNvbnRUZW1wbGF0ZStyLmZvb3RUZW1wbGF0ZSsnPC90YWJsZT48L2Rpdj48ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1kZWNhZGVzXCI+PHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+JytyLmhlYWRUZW1wbGF0ZStyLmNvbnRUZW1wbGF0ZStyLmZvb3RUZW1wbGF0ZSsnPC90YWJsZT48L2Rpdj48ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1jZW50dXJpZXNcIj48dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK3IuaGVhZFRlbXBsYXRlK3IuY29udFRlbXBsYXRlK3IuZm9vdFRlbXBsYXRlK1wiPC90YWJsZT48L2Rpdj48L2Rpdj5cIixhLmZuLmRhdGVwaWNrZXIuRFBHbG9iYWw9cixhLmZuLmRhdGVwaWNrZXIubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmRhdGVwaWNrZXI9bSx0aGlzfSxhLmZuLmRhdGVwaWNrZXIudmVyc2lvbj1cIjEuOC4wXCIsYS5mbi5kYXRlcGlja2VyLmRlcHJlY2F0ZWQ9ZnVuY3Rpb24oYSl7dmFyIGI9d2luZG93LmNvbnNvbGU7YiYmYi53YXJuJiZiLndhcm4oXCJERVBSRUNBVEVEOiBcIithKX0sYShkb2N1bWVudCkub24oXCJmb2N1cy5kYXRlcGlja2VyLmRhdGEtYXBpIGNsaWNrLmRhdGVwaWNrZXIuZGF0YS1hcGlcIiwnW2RhdGEtcHJvdmlkZT1cImRhdGVwaWNrZXJcIl0nLGZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcyk7Yy5kYXRhKFwiZGF0ZXBpY2tlclwiKXx8KGIucHJldmVudERlZmF1bHQoKSxuLmNhbGwoYyxcInNob3dcIikpfSksYShmdW5jdGlvbigpe24uY2FsbChhKCdbZGF0YS1wcm92aWRlPVwiZGF0ZXBpY2tlci1pbmxpbmVcIl0nKSl9KX0pO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtZGF0ZXBpY2tlci9sb2NhbGVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmZyLm1pbi5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE3LzA4LzIwMjAgMTQ6MjBcblxuIWZ1bmN0aW9uKGEpe2EuZm4uZGF0ZXBpY2tlci5kYXRlcy5mcj17ZGF5czpbXCJkaW1hbmNoZVwiLFwibHVuZGlcIixcIm1hcmRpXCIsXCJtZXJjcmVkaVwiLFwiamV1ZGlcIixcInZlbmRyZWRpXCIsXCJzYW1lZGlcIl0sZGF5c1Nob3J0OltcImRpbS5cIixcImx1bi5cIixcIm1hci5cIixcIm1lci5cIixcImpldS5cIixcInZlbi5cIixcInNhbS5cIl0sZGF5c01pbjpbXCJkXCIsXCJsXCIsXCJtYVwiLFwibWVcIixcImpcIixcInZcIixcInNcIl0sbW9udGhzOltcImphbnZpZXJcIixcImbDqXZyaWVyXCIsXCJtYXJzXCIsXCJhdnJpbFwiLFwibWFpXCIsXCJqdWluXCIsXCJqdWlsbGV0XCIsXCJhb8O7dFwiLFwic2VwdGVtYnJlXCIsXCJvY3RvYnJlXCIsXCJub3ZlbWJyZVwiLFwiZMOpY2VtYnJlXCJdLG1vbnRoc1Nob3J0OltcImphbnYuXCIsXCJmw6l2ci5cIixcIm1hcnNcIixcImF2cmlsXCIsXCJtYWlcIixcImp1aW5cIixcImp1aWwuXCIsXCJhb8O7dFwiLFwic2VwdC5cIixcIm9jdC5cIixcIm5vdi5cIixcImTDqWMuXCJdLHRvZGF5OlwiQXVqb3VyZCdodWlcIixtb250aHNUaXRsZTpcIk1vaXNcIixjbGVhcjpcIkVmZmFjZXJcIix3ZWVrU3RhcnQ6MSxmb3JtYXQ6XCJkZC9tbS95eXl5XCJ9fShqUXVlcnkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
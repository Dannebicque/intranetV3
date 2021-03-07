(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_js_app_js"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reloadQv)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_free_scss_fontawesome_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/scss/fontawesome.scss */ "./node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss");
/* harmony import */ var _fortawesome_fontawesome_free_scss_solid_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/scss/solid.scss */ "./node_modules/@fortawesome/fontawesome-free/scss/solid.scss");
/* harmony import */ var bootstrap_select_dist_css_bootstrap_select_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-select/dist/css/bootstrap-select.min.css */ "./node_modules/bootstrap-select/dist/css/bootstrap-select.min.css");
/* harmony import */ var _vendor_bootstrap_datepicker_css_bootstrap_datepicker3_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css */ "./assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css");
/* harmony import */ var _vendor_bootstrap_datepicker_js_bootstrap_datepicker_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js */ "./assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js");
/* harmony import */ var _vendor_bootstrap_datepicker_js_bootstrap_datepicker_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_datepicker_js_bootstrap_datepicker_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vendor_bootstrap_datepicker_locales_bootstrap_datepicker_fr_min__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min */ "./assets/vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min.js");
/* harmony import */ var _vendor_bootstrap_datepicker_locales_bootstrap_datepicker_fr_min__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_datepicker_locales_bootstrap_datepicker_fr_min__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");
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
/* harmony import */ var tinymce_tinymce__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tinymce/tinymce */ "./node_modules/tinymce/tinymce.js");
/* harmony import */ var tinymce_tinymce__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(tinymce_tinymce__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var tinymce_icons_default__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tinymce/icons/default */ "./node_modules/tinymce/icons/default/index.js");
/* harmony import */ var tinymce_icons_default__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(tinymce_icons_default__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tinymce/themes/silver */ "./node_modules/tinymce/themes/silver/index.js");
/* harmony import */ var tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _vendor_tinyMceLang_fr_FR__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../vendor/tinyMceLang/fr_FR */ "./assets/vendor/tinyMceLang/fr_FR.js");
/* harmony import */ var _vendor_tinyMceLang_fr_FR__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_vendor_tinyMceLang_fr_FR__WEBPACK_IMPORTED_MODULE_20__);



// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/app.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/03/2021 11:11















 // A theme is also required




__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

var lookup = {};

__webpack_require__(/*! bootstrap-select */ "./node_modules/bootstrap-select/dist/js/bootstrap-select.js");

jquery__WEBPACK_IMPORTED_MODULE_10___default()('input[type="file"]').on('change', function (e) {
  var filename = e.target.files[0].name;
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('.custom-file-label').html(filename);
});
jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).ready(function () {
  //dark mode
  var currentTheme = localStorage.getItem('theme'); // If the current theme in localStorage is "dark"...

  if (currentTheme === 'dark') {
    // ...then use the .dark-theme class
    document.body.classList.add('dark-theme');
    jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).html('<i class="fas fa-adjust"></i> Dark Mode Off');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).html('<i class="fas fa-adjust"></i> Dark Mode On');
  }

  jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).on('click', '#darkMode', function () {
    // Toggle the .dark-theme class on each click
    document.body.classList.toggle('dark-theme'); // Let's say the theme is equal to light

    var theme = 'light'; // If the body contains the .dark-theme class...

    if (document.body.classList.contains('dark-theme')) {
      // ...then let's make the theme dark
      theme = 'dark';
      jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).html('<i class="fas fa-adjust"></i> Dark Mode Off');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_10___default()(this).html('<i class="fas fa-adjust"></i> Dark Mode On');
    } // Then save the choice in localStorage


    localStorage.setItem('theme', theme);
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
  modaler((0,_util__WEBPACK_IMPORTED_MODULE_13__.getDataOptions)(jquery__WEBPACK_IMPORTED_MODULE_10___default()(this)));
});

function updateInterface() {
  jquery__WEBPACK_IMPORTED_MODULE_10___default()('.callout').delay(5000).slideUp('slow');
  tinymce_tinymce__WEBPACK_IMPORTED_MODULE_17___default().init({
    selector: '.tinyMce',
    height: 300,
    menubar: false,
    language: 'fr_FR',
    content_css: 'default',
    toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent '
  }); //selectpicker

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
      daysOfWeekHighlighted: '06',
      format: 'dd/mm/yyyy'
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
  var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.default('.sidebar-navigation');
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
  qps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.default('.quickview');
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
        qps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.default('.quickview');
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
      qps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.default('.quickview'); // Don't load it next time, if don't need to

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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
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

/***/ }),

/***/ "./assets/js/modaler.js":
/*!******************************!*\
  !*** ./assets/js/modaler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/modaler.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/03/2021 16:31
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
    confirmClass: 'btn btn-w-sm btn-primary',
    cancelVisible: false,
    cancelText: 'Cancel',
    cancelClass: 'btn btn-w-sm btn-secondary',
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

/***/ }),

/***/ "./assets/js/search.js":
/*!*****************************!*\
  !*** ./assets/js/search.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
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

/***/ }),

/***/ "./assets/js/util.js":
/*!***************************!*\
  !*** ./assets/js/util.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCallout": () => (/* binding */ addCallout),
/* harmony export */   "getDataOptions": () => (/* binding */ getDataOptions),
/* harmony export */   "invalidChamps": () => (/* binding */ invalidChamps),
/* harmony export */   "validChamps": () => (/* binding */ validChamps),
/* harmony export */   "completeChamps": () => (/* binding */ completeChamps)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





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
sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().mixin({
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
  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
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
      jquery__WEBPACK_IMPORTED_MODULE_5___default().ajax({
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
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
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
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
      sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
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
  jquery__WEBPACK_IMPORTED_MODULE_5___default().ajax({
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
  jquery__WEBPACK_IMPORTED_MODULE_5___default().each(jquery__WEBPACK_IMPORTED_MODULE_5___default()(el).data(), function (key, value) {
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

/***/ }),

/***/ "./assets/js/validator-bs4.js":
/*!************************************!*\
  !*** ./assets/js/validator-bs4.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

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

/***/ }),

/***/ "./assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js":
/*!***************************************************************************!*\
  !*** ./assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js ***!
  \***************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.fill.js */ "./node_modules/core-js/modules/es.array.fill.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

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
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
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

/***/ }),

/***/ "./assets/vendor/tinyMceLang/fr_FR.js":
/*!********************************************!*\
  !*** ./assets/vendor/tinyMceLang/fr_FR.js ***!
  \********************************************/
/***/ (() => {

// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/vendor/tinyMceLang/fr_FR.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/02/2021 18:22
tinymce.addI18n('fr_FR', {
  'Redo': "R\xE9tablir",
  'Undo': 'Annuler',
  'Cut': 'Couper',
  'Copy': 'Copier',
  'Paste': 'Coller',
  'Select all': "S\xE9lectionner tout",
  'New document': 'Nouveau document',
  'Ok': 'OK',
  'Cancel': 'Annuler',
  'Visual aids': 'Aides visuelles',
  'Bold': 'Gras',
  'Italic': 'Italique',
  'Underline': "Soulign\xE9",
  'Strikethrough': "Barr\xE9",
  'Superscript': 'Exposant',
  'Subscript': 'Indice',
  'Clear formatting': 'Effacer la mise en forme',
  'Align left': "Aligner \xE0 gauche",
  'Align center': 'Centrer',
  'Align right': "Aligner \xE0 droite",
  'Justify': 'Justifier',
  'Bullet list': "Liste \xE0 puces",
  'Numbered list': "Liste num\xE9rot\xE9e",
  'Decrease indent': "R\xE9duire le retrait",
  'Increase indent': 'Augmenter le retrait',
  'Close': 'Fermer',
  'Formats': 'Formats',
  'Your browser doesn\'t support direct access to the clipboard. Please use the Ctrl+X\/C\/V keyboard shortcuts instead.': "Votre navigateur ne supporte pas l\u2019acc\xE8s direct au presse-papiers. Merci d'utiliser les raccourcis clavier Ctrl+X/C/V.",
  'Headers': "En-t\xEAtes",
  'Header 1': "En-t\xEAte 1",
  'Header 2': "En-t\xEAte 2",
  'Header 3': "En-t\xEAte 3",
  'Header 4': "En-t\xEAte 4",
  'Header 5': "En-t\xEAte 5",
  'Header 6': "En-t\xEAte 6",
  'Headings': 'Titres',
  'Heading 1': "Titre\xA01",
  'Heading 2': "Titre\xA02",
  'Heading 3': "Titre\xA03",
  'Heading 4': "Titre\xA04",
  'Heading 5': "Titre\xA05",
  'Heading 6': "Titre\xA06",
  'Preformatted': "Pr\xE9format\xE9",
  'Div': 'Div',
  'Pre': 'Pre',
  'Code': 'Code',
  'Paragraph': 'Paragraphe',
  'Blockquote': 'Blockquote',
  'Inline': 'En ligne',
  'Blocks': 'Blocs',
  'Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.': "Le presse-papiers est maintenant en mode \"texte plein\". Les contenus seront coll\xE9s sans retenir les formatages jusqu'\xE0 ce que vous d\xE9sactiviez cette option.",
  'Fonts': 'Polices',
  'Font Sizes': 'Tailles de police',
  'Class': 'Classe',
  'Browse for an image': 'Rechercher une image',
  'OR': 'OU',
  'Drop an image here': "D\xE9poser une image ici",
  'Upload': "T\xE9l\xE9charger",
  'Block': 'Bloc',
  'Align': 'Aligner',
  'Default': "Par d\xE9faut",
  'Circle': 'Cercle',
  'Disc': 'Disque',
  'Square': "Carr\xE9",
  'Lower Alpha': 'Alpha minuscule',
  'Lower Greek': 'Grec minuscule',
  'Lower Roman': 'Romain minuscule',
  'Upper Alpha': 'Alpha majuscule',
  'Upper Roman': 'Romain majuscule',
  'Anchor...': 'Ancre...',
  'Name': 'Nom',
  'Id': 'Id',
  'Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.': 'L\'Id doit commencer par une lettre suivi par des lettres, nombres, tirets, points, deux-points ou underscores',
  'You have unsaved changes are you sure you want to navigate away?': "Vous avez des modifications non enregistr\xE9es, \xEAtes-vous s\xFBr de quitter la page?",
  'Restore last draft': 'Restaurer le dernier brouillon',
  'Special character...': "Caract\xE8re sp\xE9cial...",
  'Source code': 'Code source',
  'Insert\/Edit code sample': "Ins\xE9rer / modifier une exemple de code",
  'Language': 'Langue',
  'Code sample...': 'Exemple de code...',
  'Color Picker': "S\xE9lecteur de couleurs",
  'R': 'R',
  'G': 'V',
  'B': 'B',
  'Left to right': "Gauche \xE0 droite",
  'Right to left': "Droite \xE0 gauche",
  'Emoticons...': "\xC9motic\xF4nes...",
  'Metadata and Document Properties': "M\xE9tadonn\xE9es et propri\xE9t\xE9s du document",
  'Title': 'Titre',
  'Keywords': "Mots-cl\xE9s",
  'Description': 'Description',
  'Robots': 'Robots',
  'Author': 'Auteur',
  'Encoding': 'Encodage',
  'Fullscreen': "Plein \xE9cran",
  'Action': 'Action',
  'Shortcut': 'Raccourci',
  'Help': 'Aide',
  'Address': 'Adresse',
  'Focus to menubar': 'Cibler la barre de menu',
  'Focus to toolbar': 'Cibler la barre d\'outils',
  'Focus to element path': "Cibler le chemin vers l'\xE9l\xE9ment",
  'Focus to contextual toolbar': 'Cibler la barre d\'outils contextuelle',
  'Insert link (if link plugin activated)': "Ins\xE9rer un lien (si le module link est activ\xE9)",
  'Save (if save plugin activated)': "Enregistrer (si le module save est activ\xE9)",
  'Find (if searchreplace plugin activated)': "Rechercher (si le module searchreplace est activ\xE9)",
  'Plugins installed ({0}):': "Modules install\xE9s ({0}) : ",
  'Premium plugins:': 'Modules premium :',
  'Learn more...': 'En savoir plus...',
  'You are using {0}': 'Vous utilisez {0}',
  'Plugins': 'Plugins',
  'Handy Shortcuts': 'Raccourcis utiles',
  'Horizontal line': 'Ligne horizontale',
  'Insert\/edit image': "Ins\xE9rer/modifier une image",
  'Image description': 'Description de l\'image',
  'Source': 'Source',
  'Dimensions': 'Dimensions',
  'Constrain proportions': 'Conserver les proportions',
  'General': "G\xE9n\xE9ral",
  'Advanced': "Avanc\xE9",
  'Style': 'Style',
  'Vertical space': 'Espacement vertical',
  'Horizontal space': 'Espacement horizontal',
  'Border': 'Bordure',
  'Insert image': "Ins\xE9rer une image",
  'Image...': 'Image...',
  'Image list': 'Liste d\'images',
  'Rotate counterclockwise': 'Rotation anti-horaire',
  'Rotate clockwise': 'Rotation horaire',
  'Flip vertically': 'Retournement vertical',
  'Flip horizontally': 'Retournement horizontal',
  'Edit image': 'Modifier l\'image',
  'Image options': 'Options de l\'image',
  'Zoom in': 'Zoomer',
  'Zoom out': "D\xE9zoomer",
  'Crop': 'Rogner',
  'Resize': 'Redimensionner',
  'Orientation': 'Orientation',
  'Brightness': "Luminosit\xE9",
  'Sharpen': 'Affiner',
  'Contrast': 'Contraste',
  'Color levels': 'Niveaux de couleur',
  'Gamma': 'Gamma',
  'Invert': 'Inverser',
  'Apply': 'Appliquer',
  'Back': 'Retour',
  'Insert date\/time': "Ins\xE9rer date/heure",
  'Date\/time': 'Date\/heure',
  'Insert\/Edit Link': "Ins\xE9rer/Modifier lien",
  'Insert\/edit link': "Ins\xE9rer/modifier un lien",
  'Text to display': "Texte \xE0 afficher",
  'Url': 'Url',
  'Open link in...': 'Ouvrir le lien dans...',
  'Current window': "Fen\xEAtre active",
  'None': 'n\/a',
  'New window': "Nouvelle fen\xEAtre",
  'Remove link': 'Enlever le lien',
  'Anchors': 'Ancres',
  'Link...': 'Lien...',
  'Paste or type a link': 'Coller ou taper un lien',
  'The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?': "L'URL que vous avez entr\xE9e semble \xEAtre une adresse e-mail. Voulez-vous ajouter le pr\xE9fixe mailto: n\xE9cessaire?",
  'The URL you entered seems to be an external link. Do you want to add the required http:\/\/ prefix?': "L'URL que vous avez entr\xE9e semble \xEAtre un lien externe. Voulez-vous ajouter le pr\xE9fixe http:// n\xE9cessaire?",
  'Link list': 'Liste de liens',
  'Insert video': "Ins\xE9rer une vid\xE9o",
  'Insert\/edit video': "Ins\xE9rer/modifier une vid\xE9o",
  'Insert\/edit media': "Ins\xE9rer/modifier un m\xE9dia",
  'Alternative source': 'Source alternative',
  'Alternative source URL': 'URL de la source alternative',
  'Media poster (Image URL)': "Affiche de m\xE9dia (URL de l'image)",
  'Paste your embed code below:': "Collez votre code d'int\xE9gration ci-dessous :",
  'Embed': "Int\xE9grer",
  'Media...': "M\xE9dia...",
  'Nonbreaking space': "Espace ins\xE9cable",
  'Page break': 'Saut de page',
  'Paste as text': 'Coller comme texte',
  'Preview': "Pr\xE9visualiser",
  'Print...': 'Imprimer...',
  'Save': 'Enregistrer',
  'Find': 'Chercher',
  'Replace with': 'Remplacer par',
  'Replace': 'Remplacer',
  'Replace all': 'Tout remplacer',
  'Previous': "Pr\xE9c\xE9dente",
  'Next': 'Suiv',
  'Find and replace...': 'Trouver et remplacer...',
  'Could not find the specified string.': "Impossible de trouver la cha\xEEne sp\xE9cifi\xE9e.",
  'Match case': 'Respecter la casse',
  'Find whole words only': 'Mot entier',
  'Spell check': "V\xE9rification de l'orthographe",
  'Ignore': 'Ignorer',
  'Ignore all': 'Tout ignorer',
  'Finish': 'Finie',
  'Add to Dictionary': 'Ajouter au dictionnaire',
  'Insert table': "Ins\xE9rer un tableau",
  'Table properties': "Propri\xE9t\xE9s du tableau",
  'Delete table': 'Supprimer le tableau',
  'Cell': 'Cellule',
  'Row': 'Ligne',
  'Column': 'Colonne',
  'Cell properties': "Propri\xE9t\xE9s de la cellule",
  'Merge cells': 'Fusionner les cellules',
  'Split cell': 'Diviser la cellule',
  'Insert row before': "Ins\xE9rer une ligne avant",
  'Insert row after': "Ins\xE9rer une ligne apr\xE8s",
  'Delete row': 'Effacer la ligne',
  'Row properties': "Propri\xE9t\xE9s de la ligne",
  'Cut row': 'Couper la ligne',
  'Copy row': 'Copier la ligne',
  'Paste row before': 'Coller la ligne avant',
  'Paste row after': "Coller la ligne apr\xE8s",
  'Insert column before': "Ins\xE9rer une colonne avant",
  'Insert column after': "Ins\xE9rer une colonne apr\xE8s",
  'Delete column': 'Effacer la colonne',
  'Cols': 'Colonnes',
  'Rows': 'Lignes',
  'Width': 'Largeur',
  'Height': 'Hauteur',
  'Cell spacing': 'Espacement inter-cellulles',
  'Cell padding': 'Espacement interne cellule',
  'Show caption': 'Afficher le sous-titrage',
  'Left': 'Gauche',
  'Center': "Centr\xE9",
  'Right': 'Droite',
  'Cell type': 'Type de cellule',
  'Scope': 'Etendue',
  'Alignment': 'Alignement',
  'H Align': 'Alignement H',
  'V Align': 'Alignement V',
  'Top': 'Haut',
  'Middle': 'Milieu',
  'Bottom': 'Bas',
  'Header cell': "Cellule d'en-t\xEAte",
  'Row group': 'Groupe de lignes',
  'Column group': 'Groupe de colonnes',
  'Row type': 'Type de ligne',
  'Header': "En-t\xEAte",
  'Body': 'Corps',
  'Footer': 'Pied',
  'Border color': 'Couleur de la bordure',
  'Insert template...': "Ins\xE9rer un mod\xE8le...",
  'Templates': "Th\xE8mes",
  'Template': "Mod\xE8le",
  'Text color': 'Couleur du texte',
  'Background color': "Couleur d'arri\xE8re-plan",
  'Custom...': "Personnalis\xE9...",
  'Custom color': "Couleur personnalis\xE9e",
  'No color': 'Aucune couleur',
  'Remove color': 'Supprimer la couleur',
  'Table of Contents': "Table des mati\xE8res",
  'Show blocks': 'Afficher les blocs',
  'Show invisible characters': "Afficher les caract\xE8res invisibles",
  'Word count': 'Nombre de mots',
  'Count': 'Total',
  'Document': 'Document',
  'Selection': "S\xE9lection",
  'Words': 'Mots',
  'Words: {0}': 'Mots : {0}',
  '{0} words': '{0} mots',
  'File': 'Fichier',
  'Edit': 'Editer',
  'Insert': "Ins\xE9rer",
  'View': 'Voir',
  'Format': 'Format',
  'Table': 'Tableau',
  'Tools': 'Outils',
  'Powered by {0}': "Propuls\xE9 par {0}",
  'Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help': 'Zone Texte Riche. Appuyer sur ALT-F9 pour le menu. Appuyer sur ALT-F10 pour la barre d\'outils. Appuyer sur ALT-0 pour de l\'aide.',
  'Image title': 'Titre d\'image',
  'Border width': "\xC9paisseur de la bordure",
  'Border style': 'Style de la bordure',
  'Error': 'Erreur',
  'Warn': 'Avertir',
  'Valid': 'Valide',
  'To open the popup, press Shift+Enter': "Pour ouvrir la popup, appuyez sur Maj+Entr\xE9e",
  'Rich Text Area. Press ALT-0 for help.': 'Zone de texte riche. Appuyez sur ALT-0 pour l\'aide.',
  'System Font': "Police syst\xE8me",
  'Failed to upload image: {0}': "\xC9chec d'envoi de l'image\xA0: {0}",
  'Failed to load plugin: {0} from url {1}': "\xC9chec de chargement du plug-in\xA0: {0} \xE0 partir de l\u2019URL {1}",
  'Failed to load plugin url: {0}': "\xC9chec de chargement de l'URL du plug-in\xA0: {0}",
  'Failed to initialize plugin: {0}': "\xC9chec d'initialisation du plug-in\xA0: {0}",
  'example': 'exemple',
  'Search': 'Rechercher',
  'All': 'Tout',
  'Currency': 'Devise',
  'Text': 'Texte',
  'Quotations': 'Citations',
  'Mathematical': "Op\xE9rateurs math\xE9matiques",
  'Extended Latin': "Latin \xE9tendu",
  'Symbols': 'Symboles',
  'Arrows': "Fl\xE8ches",
  'User Defined': "D\xE9fini par l'utilisateur",
  'dollar sign': 'Symbole dollar',
  'currency sign': 'Symbole devise',
  'euro-currency sign': 'Symbole euro',
  'colon sign': "Symbole col\xF3n",
  'cruzeiro sign': 'Symbole cruzeiro',
  'french franc sign': "Symbole franc fran\xE7ais",
  'lira sign': 'Symbole lire',
  'mill sign': "Symbole milli\xE8me",
  'naira sign': 'Symbole naira',
  'peseta sign': 'Symbole peseta',
  'rupee sign': 'Symbole roupie',
  'won sign': 'Symbole won',
  'new sheqel sign': "Symbole nouveau ch\xE9kel",
  'dong sign': 'Symbole dong',
  'kip sign': 'Symbole kip',
  'tugrik sign': 'Symbole tougrik',
  'drachma sign': 'Symbole drachme',
  'german penny symbol': 'Symbole pfennig',
  'peso sign': 'Symbole peso',
  'guarani sign': 'Symbole guarani',
  'austral sign': 'Symbole austral',
  'hryvnia sign': 'Symbole hryvnia',
  'cedi sign': 'Symbole cedi',
  'livre tournois sign': 'Symbole livre tournois',
  'spesmilo sign': 'Symbole spesmilo',
  'tenge sign': 'Symbole tenge',
  'indian rupee sign': 'Symbole roupie indienne',
  'turkish lira sign': 'Symbole lire turque',
  'nordic mark sign': 'Symbole du mark nordique',
  'manat sign': 'Symbole manat',
  'ruble sign': 'Symbole rouble',
  'yen character': 'Sinogramme Yen',
  'yuan character': 'Sinogramme Yuan',
  'yuan character, in hong kong and taiwan': 'Sinogramme Yuan, Hong Kong et Taiwan',
  'yen\/yuan character variant one': "Sinogramme Yen/Yuan, premi\xE8re variante",
  'Loading emoticons...': "Chargement des \xE9motic\xF4nes en cours...",
  'Could not load emoticons': "\xC9chec de chargement des \xE9motic\xF4nes",
  'People': 'Personnes',
  'Animals and Nature': 'Animaux & nature',
  'Food and Drink': 'Nourriture & boissons',
  'Activity': "Activit\xE9",
  'Travel and Places': 'Voyages & lieux',
  'Objects': 'Objets',
  'Flags': 'Drapeaux',
  'Characters': "Caract\xE8res",
  'Characters (no spaces)': "Caract\xE8res (espaces non compris)",
  '{0} characters': "{0}\xA0caract\xE8res",
  'Error: Form submit field collision.': "Erreur\xA0: conflit de champs lors de la soumission du formulaire.",
  'Error: No form element found.': "Erreur : aucun \xE9l\xE9ment de formulaire trouv\xE9.",
  'Update': "Mettre \xE0 jour",
  'Color swatch': "\xC9chantillon de couleurs",
  'Turquoise': 'Turquoise',
  'Green': 'Vert',
  'Blue': 'Bleu',
  'Purple': 'Violet',
  'Navy Blue': 'Bleu marine',
  'Dark Turquoise': "Turquoise fonc\xE9",
  'Dark Green': "Vert fonc\xE9",
  'Medium Blue': 'Bleu moyen',
  'Medium Purple': 'Violet moyen',
  'Midnight Blue': 'Bleu de minuit',
  'Yellow': 'Jaune',
  'Orange': 'Orange',
  'Red': 'Rouge',
  'Light Gray': 'Gris clair',
  'Gray': 'Gris',
  'Dark Yellow': "Jaune fonc\xE9",
  'Dark Orange': "Orange fonc\xE9",
  'Dark Red': "Rouge fonc\xE9",
  'Medium Gray': 'Gris moyen',
  'Dark Gray': "Gris fonc\xE9",
  'Light Green': 'Vert clair',
  'Light Yellow': 'Jaune clair',
  'Light Red': 'Rouge clair',
  'Light Purple': 'Violet clair',
  'Light Blue': 'Bleu clair',
  'Dark Purple': "Violet fonc\xE9",
  'Dark Blue': "Bleu fonc\xE9",
  'Black': 'Noir',
  'White': 'Blanc',
  'Switch to or from fullscreen mode': "Passer en ou quitter le mode plein \xE9cran",
  'Open help dialog': "Ouvrir la bo\xEEte de dialogue d'aide",
  'history': 'historique',
  'styles': 'styles',
  'formatting': 'mise en forme',
  'alignment': 'alignement',
  'indentation': 'retrait',
  'permanent pen': "feutre ind\xE9l\xE9bile",
  'comments': 'commentaires',
  'Format Painter': 'Reproduire la mise en forme',
  'Insert\/edit iframe': "Ins\xE9rer/modifier iframe",
  'Capitalization': 'Mise en majuscules',
  'lowercase': 'minuscule',
  'UPPERCASE': 'MAJUSCULE',
  'Title Case': 'Casse du titre',
  'Permanent Pen Properties': "Propri\xE9t\xE9s du feutre ind\xE9l\xE9bile",
  'Permanent pen properties...': "Propri\xE9t\xE9s du feutre ind\xE9l\xE9bile...",
  'Font': 'Police',
  'Size': 'Taille',
  'More...': 'Plus...',
  'Spellcheck Language': 'Langue du correcteur orthographique',
  'Select...': "S\xE9lectionner...",
  'Preferences': "Pr\xE9f\xE9rences",
  'Yes': 'Oui',
  'No': 'Non',
  'Keyboard Navigation': 'Navigation au clavier',
  'Version': 'Version',
  'Anchor': 'Ancre',
  'Special character': "Caract\xE8res sp\xE9ciaux",
  'Code sample': 'Extrait de code',
  'Color': 'Couleur',
  'Emoticons': "Emotic\xF4nes",
  'Document properties': "Propri\xE9t\xE9 du document",
  'Image': 'Image',
  'Insert link': "Ins\xE9rer un lien",
  'Target': 'Cible',
  'Link': 'Lien',
  'Poster': 'Publier',
  'Media': "M\xE9dia",
  'Print': 'Imprimer',
  'Prev': "Pr\xE9c ",
  'Find and replace': 'Trouver et remplacer',
  'Whole words': 'Mots entiers',
  'Spellcheck': "V\xE9rification orthographique",
  'Caption': 'Titre',
  'Insert template': "Ajouter un th\xE8me"
});

/***/ }),

/***/ "./assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css":
/*!******************************************************************************!*\
  !*** ./assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYXRlcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kYWxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy92YWxpZGF0b3ItYnM0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy92ZW5kb3IvYm9vdHN0cmFwLWRhdGVwaWNrZXIvanMvYm9vdHN0cmFwLWRhdGVwaWNrZXIubWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy92ZW5kb3IvYm9vdHN0cmFwLWRhdGVwaWNrZXIvbG9jYWxlcy9ib290c3RyYXAtZGF0ZXBpY2tlci5mci5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci90aW55TWNlTGFuZy9mcl9GUi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2Nzcy9ib290c3RyYXAtZGF0ZXBpY2tlcjMubWluLmNzcz81OGYyIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvYXBwLnNjc3MiXSwibmFtZXMiOlsicmVxdWlyZSIsImxvb2t1cCIsIiQiLCJvbiIsImUiLCJmaWxlbmFtZSIsInRhcmdldCIsImZpbGVzIiwibmFtZSIsImh0bWwiLCJkb2N1bWVudCIsInJlYWR5IiwiY3VycmVudFRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0b2dnbGUiLCJ0aGVtZSIsImNvbnRhaW5zIiwic2V0SXRlbSIsImNoYW5nZSIsImkiLCJsZW5ndGgiLCJwdXNoIiwibmV4dCIsImpvaW4iLCJwcmVsb2FkZXIiLCJzcGVlZCIsImRhdGFBdHRyIiwiZmFkZU91dCIsImNsb3Nlc3QiLCJmaW5kIiwiY3NzIiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVJbnRlcmZhY2UiLCJ2YWxpZGF0b3IiLCJhamF4Q29tcGxldGUiLCJ0b2dnbGVDbGFzcyIsInJlbW92ZUNsYXNzIiwic2xpZGVUb2dnbGUiLCJtb2RhbGVyIiwiZ2V0RGF0YU9wdGlvbnMiLCJkZWxheSIsInNsaWRlVXAiLCJ0aW55bWNlIiwic2VsZWN0b3IiLCJoZWlnaHQiLCJtZW51YmFyIiwibGFuZ3VhZ2UiLCJjb250ZW50X2NzcyIsInRvb2xiYXIiLCJzZWxlY3RwaWNrZXIiLCJpY29uQmFzZSIsInRpY2tJY29uIiwic3R5bGUiLCJzaXplIiwibGl2ZVNlYXJjaCIsImVhY2giLCJjb2xvciIsImhhc0RhdGFBdHRyIiwiZGF0YSIsInRvb2x0aXAiLCJjb250YWluZXIiLCJ0cmlnZ2VyIiwidGVtcGxhdGUiLCJvcHRpb25zIiwibXVsdGlkYXRlU2VwYXJhdG9yIiwiZGF5c09mV2Vla0hpZ2hsaWdodGVkIiwiZm9ybWF0IiwicHJvcCIsImlucHV0cyIsImRhdGVwaWNrZXIiLCJoYXNDbGFzcyIsImNsb3NlIiwib3BlbiIsImFkZENsYXNzIiwiZm9jdXMiLCJzaWRlYmFyIiwiY29uc29sZSIsImxvZyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwcyIsIlBlcmZlY3RTY3JvbGxiYXIiLCIkc3VibWVudSIsImlzIiwidG9nZ2xlRm9sZCIsImFwcCIsInRvZ2dsZVN0YXRlIiwiZm9sZCIsInN0YXRlIiwidW5mb2xkIiwidG9nZ2xlSGlkZSIsImhpZGUiLCJzaG93IiwicHJlcGVuZCIsInJlbW92ZSIsInF1aWNrdmlldyIsInFwcyIsInVwZGF0ZSIsInJlbG9hZFF2IiwiZGVzdHJveSIsImdldFRhcmdldCIsInVybCIsInF2IiwiYXR0ciIsImxvYWQiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJub3QiLCJhZnRlciIsInByZXYiLCJ1bmRlZmluZWQiLCJtYXRlcmlhbERvRmxvYXQiLCJ2YWwiLCJtYXRlcmlhbE5vRmxvYXQiLCJwYXJlbnQiLCJjb25maWdNb2RhbGVyIiwiaXNNb2RhbCIsInR5cGUiLCJ0aXRsZSIsImJhY2tkcm9wIiwiaGVhZGVyVmlzaWJsZSIsImZvb3RlclZpc2libGUiLCJjb25maXJtVmlzaWJsZSIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNsYXNzIiwiY2FuY2VsVmlzaWJsZSIsImNhbmNlbFRleHQiLCJjYW5jZWxDbGFzcyIsImJvZHlFeHRyYUNsYXNzIiwic3Bpbm5lciIsImF1dG9EZXN0cm95Iiwib25TaG93Iiwib25TaG93biIsIm9uSGlkZSIsIm9uSGlkZGVuIiwib25Db25maXJtIiwib25DYW5jZWwiLCJtb2RhbElkIiwiZ3VpZCIsImxlbiIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJzdWJzdHIiLCJzZXR0aW5nIiwiZXh0ZW5kIiwibW9kYWwiLCJpZCIsImhhbmRsZUNhbGxiYWNrIiwiaXNGdW5jdGlvbiIsInN1YnN0cmluZyIsImNhbGwiLCJhcHBlbmQiLCJvdXRlckhUTUwiLCJvbmUiLCJodG1sX2hlYWRlciIsImh0bWxfZm9vdGVyIiwibW9kYWxfaHRtbCIsImpRdWVyeSIsImtleXdvcmQiLCJzZWFyY2hfcmVwb25zZV9ldHVkaWFudCIsInNlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbCIsInNlYXJjaF9yZXBvbnNlX2F1dHJlIiwiYWpheCIsImRhdGFUeXBlIiwic3VjY2VzcyIsImV0dWRpYW50cyIsImluZGV4IiwiZXR1ZGlhbnQiLCJzbHVnIiwicGhvdG8iLCJhdmF0YXJJbml0aWFsZXMiLCJiYXNlcGF0aCIsImRpc3BsYXlQciIsInNlbWVzdHJlIiwiZ3JvdXBlcyIsImVtcHR5IiwicGVyc29ubmVscyIsInBlcnNvbm5lbCIsImF1dHJlcyIsImF1dHJlIiwiJHN0b3BDYXRjaEVudGVyIiwicmVhZFVybE1lbnUiLCIkdXJsIiwiJGVsdCIsInNwbGl0IiwiJGZpcnN0RWx0IiwicG9wIiwibG9jYXRpb24iLCJTd2FsIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJjc3JmIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJfdG9rZW4iLCJoYXNPd25Qcm9wZXJ0eSIsImhyZWYiLCJhZGRDYWxsb3V0IiwiZXJyb3IiLCJ4aHIiLCJhamF4T3B0aW9ucyIsInRocm93bkVycm9yIiwiZGlzbWlzcyIsIm1lc3NhZ2UiLCJsYWJlbCIsInRyYW5zbGF0ZSIsIkFycmF5Iiwic2xpZGVEb3duIiwibXlFZGl0SW5pdGlhbENvbnRlbnQiLCJFZGl0T25MaW5lIiwiZ2VuZXJlVGV4dEFyZWEiLCJnZW5lcmVJbnB1dCIsInJlcGxhY2VXaXRoIiwia2V5Q29kZSIsInVwZGF0ZURhdGEiLCJ3aGljaCIsImZpZWxkIiwibWV0aG9kIiwiJG9iaiIsInRyaW0iLCJmbiIsImRlZiIsImdldEF0dHJpYnV0ZSIsImhhc0F0dHJpYnV0ZSIsImRhdGFUb09wdGlvbiIsIngiLCJ0b1VwcGVyQ2FzZSIsImVsIiwiY2FzdExpc3QiLCJrZXkiLCJCb29sZWFuIiwiTnVtYmVyIiwiaW52YWxpZENoYW1wcyIsInZhbGlkQ2hhbXBzIiwiY29tcGxldGVDaGFtcHMiLCJnZXRWYWx1ZSIsIiRlbCIsIlZhbGlkYXRvciIsImVsZW1lbnQiLCJ2YWxpZGF0b3JzIiwiVkFMSURBVE9SUyIsImN1c3RvbSIsIiRlbGVtZW50IiwiJGJ0biIsImZpbHRlciIsInByb3h5Iiwib25JbnB1dCIsIm9uU3VibWl0IiwicmVzZXQiLCIkdGhpcyIsIiRpbnB1dHMiLCJWRVJTSU9OIiwiSU5QVVRfU0VMRUNUT1IiLCJGT0NVU19PRkZTRVQiLCJERUZBVUxUUyIsImRpc2FibGUiLCJlcnJvcnMiLCJtYXRjaCIsIm1pbmxlbmd0aCIsImZlZWRiYWNrIiwiY2hlY2tWYWxpZGl0eSIsInZhbGlkaXR5IiwidmFsaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInByb3RvdHlwZSIsInNlbGYiLCJjbGVhckVycm9ycyIsInRvZ2dsZVN1Ym1pdCIsImRlZmVyRXJyb3JzIiwidmFsaWRhdGVJbnB1dCIsImRvbmUiLCJwcmV2RXJyb3JzIiwiRXZlbnQiLCJyZWxhdGVkVGFyZ2V0IiwiaXNEZWZhdWx0UHJldmVudGVkIiwicnVuVmFsaWRhdG9ycyIsImRlZmVyIiwic2hvd0Vycm9ycyIsImRldGFpbCIsImRlZmVycmVkIiwiRGVmZXJyZWQiLCJyZWplY3QiLCJnZXRWYWxpZGF0b3JTcGVjaWZpY0Vycm9yIiwiZ2V0VmFsaWRpdHlTdGF0ZUVycm9yIiwidHlwZU1pc21hdGNoIiwicGF0dGVybk1pc21hdGNoIiwic3RlcE1pc21hdGNoIiwicmFuZ2VPdmVyZmxvdyIsInJhbmdlVW5kZXJmbG93IiwidmFsdWVNaXNzaW5nIiwiZ2V0R2VuZXJpY0Vycm9yIiwiZ2V0RXJyb3JNZXNzYWdlIiwiaW5kZXhPZiIsImdldCIsImZhaWwiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJhbHdheXMiLCJyZXNvbHZlIiwicHJvbWlzZSIsInZhbGlkYXRlIiwid2hlbiIsIm1hcCIsImZvY3VzRXJyb3IiLCIkaW5wdXQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiJGdyb3VwIiwiJGJsb2NrIiwiJGZlZWRiYWNrIiwiaGFzRXJyb3JzIiwiZmllbGRFcnJvcnMiLCJpc0luY29tcGxldGUiLCJmaWVsZEluY29tcGxldGUiLCJjYWxsYmFjayIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJyZW1vdmVEYXRhIiwidGltZW91dCIsIm9yaWdpbmFsQ29udGVudCIsInJlbW92ZUF0dHIiLCJvZmYiLCJQbHVnaW4iLCJvcHRpb24iLCJvbGQiLCJDb25zdHJ1Y3RvciIsIm5vQ29uZmxpY3QiLCIkZm9ybSIsImEiLCJkZWZpbmUiLCJiIiwiYyIsIkRhdGUiLCJVVEMiLCJhcHBseSIsImFyZ3VtZW50cyIsImQiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiZiIsImRlcHJlY2F0ZWQiLCJnIiwiaXNOYU4iLCJnZXRUaW1lIiwiaCIsInRvTG93ZXJDYXNlIiwiUmVnRXhwIiwidGVzdCIsInEiLCJwIiwiaiIsInNsaWNlIiwidmFsdWVPZiIsInNwbGljZSIsImlzQXJyYXkiLCJjbGVhciIsImNvcHkiLCJrIiwiX3Byb2Nlc3Nfb3B0aW9ucyIsImRhdGVzIiwidmlld0RhdGUiLCJvIiwiZGVmYXVsdFZpZXdEYXRlIiwiZm9jdXNEYXRlIiwiaXNJbnB1dCIsImlucHV0RmllbGQiLCJjb21wb25lbnQiLCJpc0lubGluZSIsInBpY2tlciIsInIiLCJfY2hlY2tfdGVtcGxhdGUiLCJ0ZW1wbGF0ZXMiLCJsZWZ0QXJyb3ciLCJyaWdodEFycm93IiwiX2J1aWxkRXZlbnRzIiwiX2F0dGFjaEV2ZW50cyIsImFwcGVuZFRvIiwicnRsIiwiY2FsZW5kYXJXZWVrcyIsInN0YXJ0RGF0ZSIsIl9vIiwiZW5kRGF0ZSIsImRheXNPZldlZWtEaXNhYmxlZCIsImRhdGVzRGlzYWJsZWQiLCJfYWxsb3dfdXBkYXRlIiwic2V0Vmlld01vZGUiLCJzdGFydFZpZXciLCJmaWxsRG93IiwiZmlsbE1vbnRocyIsImNvbnN0cnVjdG9yIiwiX3Jlc29sdmVWaWV3TmFtZSIsInZpZXdNb2RlcyIsImluQXJyYXkiLCJuYW1lcyIsIl9yZXNvbHZlRGF5c09mV2VlayIsIm1pblZpZXdNb2RlIiwibWF4Vmlld01vZGUiLCJtYXgiLCJtaW4iLCJtdWx0aWRhdGUiLCJTdHJpbmciLCJ3ZWVrU3RhcnQiLCJ3ZWVrRW5kIiwicGFyc2VGb3JtYXQiLCJfbG9jYWxfdG9fdXRjIiwiX3plcm9fdGltZSIsInBhcnNlRGF0ZSIsImFzc3VtZU5lYXJieVllYXIiLCJvcmllbnRhdGlvbiIsImdyZXAiLCJ5IiwieWVhciIsIm1vbnRoIiwibCIsImRheSIsIl9ldmVudHMiLCJfc2Vjb25kYXJ5RXZlbnRzIiwiX2FwcGx5RXZlbnRzIiwiX3VuYXBwbHlFdmVudHMiLCJrZXl1cCIsImtleWRvd24iLCJwYXN0ZSIsInNob3dPbkZvY3VzIiwiY2xpY2siLCJibHVyIiwiX2ZvY3VzZWRfZnJvbSIsImltbWVkaWF0ZVVwZGF0ZXMiLCJkYXRlIiwibmF2QXJyb3dzQ2xpY2siLCJkYXlDZWxsQ2xpY2siLCJyZXNpemUiLCJwbGFjZSIsIl9kZXRhY2hFdmVudHMiLCJfYXR0YWNoU2Vjb25kYXJ5RXZlbnRzIiwiX2RldGFjaFNlY29uZGFyeUV2ZW50cyIsIl90cmlnZ2VyIiwiX3V0Y190b19sb2NhbCIsInZpZXdNb2RlIiwiZm9ybWF0RGF0ZSIsImVuYWJsZU9uUmVhZG9ubHkiLCJuYXZpZ2F0b3IiLCJtc01heFRvdWNoUG9pbnRzIiwiZGlzYWJsZVRvdWNoS2V5Ym9hcmQiLCJkZXRhY2giLCJmb3JjZVBhcnNlIiwic2V0VmFsdWUiLCJvcmlnaW5hbEV2ZW50IiwiY2xpcGJvYXJkRGF0YSIsInR5cGVzIiwiZ2V0RGF0YSIsInNldERhdGUiLCJnZXRUaW1lem9uZU9mZnNldCIsIl96ZXJvX3V0Y190aW1lIiwiZ2V0RGF0ZXMiLCJnZXRVVENEYXRlcyIsImNsZWFyRGF0ZXMiLCJhdXRvY2xvc2UiLCJzZXREYXRlcyIsInNldFVUQ0RhdGVzIiwic2V0VVRDRGF0ZSIsImdldEZvcm1hdHRlZERhdGUiLCJnZXRTdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJ1cGRhdGVOYXZBcnJvd3MiLCJnZXRFbmREYXRlIiwic2V0RW5kRGF0ZSIsInNldERheXNPZldlZWtEaXNhYmxlZCIsInNldERheXNPZldlZWtIaWdobGlnaHRlZCIsInNldERhdGVzRGlzYWJsZWQiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJ3aWR0aCIsInBhcmVudHMiLCJ6SW5kZXhPZmZzZXQiLCJtIiwibiIsImxlZnQiLCJwYXJzZUludCIsInJpZ2h0IiwiekluZGV4IiwiZGF0ZVdpdGhpblJhbmdlIiwidXBkYXRlVmlld0RhdGUiLCJmaWxsIiwic2hvd1dlZWtEYXlzIiwiZGF5c01pbiIsIm1vbnRoc1Nob3J0Iiwic2V0UmFuZ2UiLCJyYW5nZSIsImdldENsYXNzTmFtZXMiLCJ0b2RheUhpZ2hsaWdodCIsImRhdGVJc0Rpc2FibGVkIiwiZ2V0VVRDRGF5IiwiX2ZpbGxfeWVhcnNWaWV3IiwiZmxvb3IiLCJzIiwidCIsIm5vb3AiLCJlbmFibGVkIiwiY2xhc3NlcyIsImNvbmNhdCIsInRvZGF5IiwiZW4iLCJ0aXRsZUZvcm1hdCIsInRvZGF5QnRuIiwiY2xlYXJCdG4iLCJzZXRVVENGdWxsWWVhciIsInUiLCJ2IiwidyIsInoiLCJBIiwiQiIsImJlZm9yZVNob3dEYXkiLCJjb250ZW50IiwidW5pcXVlU29ydCIsInVuaXF1ZSIsIkMiLCJtb250aHNUaXRsZSIsIkQiLCJlbmQiLCJlcSIsImJlZm9yZVNob3dNb250aCIsIkUiLCJiZWZvcmVTaG93WWVhciIsImJlZm9yZVNob3dEZWNhZGUiLCJiZWZvcmVTaG93Q2VudHVyeSIsInN0b3BQcm9wYWdhdGlvbiIsIl9zZXREYXRlIiwic2V0VVRDTW9udGgiLCJjdXJyZW50VGFyZ2V0IiwibmF2U3RlcCIsIm1vdmVNb250aCIsIl90b2dnbGVfbXVsdGlkYXRlIiwidG9nZ2xlQWN0aXZlIiwibW92ZURheSIsIm1vdmVXZWVrIiwiYWJzIiwibW92ZVllYXIiLCJtb3ZlQXZhaWxhYmxlRGF0ZSIsIndlZWtPZkRhdGVJc0Rpc2FibGVkIiwia2V5Ym9hcmROYXZpZ2F0aW9uIiwiY3RybEtleSIsInNoaWZ0S2V5IiwiY2hpbGRyZW4iLCJjbHNOYW1lIiwianF1ZXJ5Iiwia2VlcEVtcHR5VmFsdWVzIiwiZGF0ZVVwZGF0ZWQiLCJwaWNrZXJzIiwidXBkYXRlRGF0ZXMiLCJ1cGRhdGVSYW5nZXMiLCJ1cGRhdGluZyIsInNoaWZ0IiwidG9BcnJheSIsIkVycm9yIiwiZGVmYXVsdHMiLCJsb2NhbGVfb3B0cyIsImRheXMiLCJkYXlzU2hvcnQiLCJtb250aHMiLCJ2YWxpZFBhcnRzIiwibm9ucHVuY3R1YXRpb24iLCJ0b1ZhbHVlIiwidG9EaXNwbGF5Iiwic2VwYXJhdG9ycyIsInBhcnRzIiwieWVzdGVyZGF5IiwidG9tb3Jyb3ciLCJ5eXl5IiwieXkiLCJNIiwiTU0iLCJtbSIsImRkIiwiREQiLCJoZWFkVGVtcGxhdGUiLCJjb250VGVtcGxhdGUiLCJmb290VGVtcGxhdGUiLCJEUEdsb2JhbCIsInZlcnNpb24iLCJ3YXJuIiwiZnIiLCJhZGRJMThuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBRUE7O0FBQ0E7QUFDQTs7QUFFQUEsbUJBQU8sQ0FBQyxnRUFBRCxDQUFQOztBQUVBLElBQUlDLE1BQU0sR0FBRyxFQUFiOztBQUVBRCxtQkFBTyxDQUFDLHFGQUFELENBQVA7O0FBRUFFLDhDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QkMsRUFBeEIsQ0FBMkIsUUFBM0IsRUFBcUMsVUFBVUMsQ0FBVixFQUFhO0FBQ2hELE1BQUlDLFFBQVEsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVQsQ0FBZSxDQUFmLEVBQWtCQyxJQUFqQztBQUNBTixnREFBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JPLElBQXhCLENBQTZCSixRQUE3QjtBQUNELENBSEQ7QUFLQUgsOENBQUMsQ0FBQ1EsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUM1QjtBQUNBLE1BQU1DLFlBQVksR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQXJCLENBRjRCLENBSTVCOztBQUNBLE1BQUlGLFlBQVksS0FBSyxNQUFyQixFQUE2QjtBQUMzQjtBQUNBRixZQUFRLENBQUNLLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsWUFBNUI7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O0FDQUEiLCJmaWxlIjoiYXNzZXRzX2pzX2FwcF9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9hcHAuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwNS8wMy8yMDIxIDExOjExXG5cbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvc2Nzcy9mb250YXdlc29tZS5zY3NzJ1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9zY3NzL3NvbGlkLnNjc3MnXG5pbXBvcnQgJ2Jvb3RzdHJhcC1zZWxlY3QvZGlzdC9jc3MvYm9vdHN0cmFwLXNlbGVjdC5taW4uY3NzJ1xuaW1wb3J0ICcuLi92ZW5kb3IvYm9vdHN0cmFwLWRhdGVwaWNrZXIvY3NzL2Jvb3RzdHJhcC1kYXRlcGlja2VyMy5taW4uY3NzJ1xuaW1wb3J0ICcuLi92ZW5kb3IvYm9vdHN0cmFwLWRhdGVwaWNrZXIvanMvYm9vdHN0cmFwLWRhdGVwaWNrZXIubWluLmpzJ1xuaW1wb3J0ICcuLi92ZW5kb3IvYm9vdHN0cmFwLWRhdGVwaWNrZXIvbG9jYWxlcy9ib290c3RyYXAtZGF0ZXBpY2tlci5mci5taW4nXG5cbmltcG9ydCAnLi4vY3NzL2FwcC5zY3NzJ1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdwZXJmZWN0LXNjcm9sbGJhcidcbmltcG9ydCAnLi92YWxpZGF0b3ItYnM0J1xuaW1wb3J0IHtnZXREYXRhT3B0aW9uc30gZnJvbSAnLi91dGlsJ1xuaW1wb3J0ICcuL21hdGVyaWFsJ1xuaW1wb3J0ICcuL3NlYXJjaCdcbmltcG9ydCAnLi9tb2RhbGVyJ1xuXG5pbXBvcnQgdGlueW1jZSBmcm9tICd0aW55bWNlL3RpbnltY2UnXG5pbXBvcnQgJ3RpbnltY2UvaWNvbnMvZGVmYXVsdCdcbi8vIEEgdGhlbWUgaXMgYWxzbyByZXF1aXJlZFxuaW1wb3J0ICd0aW55bWNlL3RoZW1lcy9zaWx2ZXInXG5pbXBvcnQgJy4uL3ZlbmRvci90aW55TWNlTGFuZy9mcl9GUidcblxucmVxdWlyZSgnYm9vdHN0cmFwJylcblxubGV0IGxvb2t1cCA9IHt9XG5cbnJlcXVpcmUoJ2Jvb3RzdHJhcC1zZWxlY3QnKVxuXG4kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICBsZXQgZmlsZW5hbWUgPSBlLnRhcmdldC5maWxlc1swXS5uYW1lXG4gICQoJy5jdXN0b20tZmlsZS1sYWJlbCcpLmh0bWwoZmlsZW5hbWUpXG59KVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIC8vZGFyayBtb2RlXG4gIGNvbnN0IGN1cnJlbnRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpXG5cbiAgLy8gSWYgdGhlIGN1cnJlbnQgdGhlbWUgaW4gbG9jYWxTdG9yYWdlIGlzIFwiZGFya1wiLi4uXG4gIGlmIChjdXJyZW50VGhlbWUgPT09ICdkYXJrJykge1xuICAgIC8vIC4uLnRoZW4gdXNlIHRoZSAuZGFyay10aGVtZSBjbGFzc1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyay10aGVtZScpXG4gICAgJCh0aGlzKS5odG1sKCc8aSBjbGFzcz1cImZhcyBmYS1hZGp1c3RcIj48L2k+IERhcmsgTW9kZSBPZmYnKVxuICB9IGVsc2Uge1xuICAgICQodGhpcykuaHRtbCgnPGkgY2xhc3M9XCJmYXMgZmEtYWRqdXN0XCI+PC9pPiBEYXJrIE1vZGUgT24nKVxuICB9XG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNkYXJrTW9kZScsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUb2dnbGUgdGhlIC5kYXJrLXRoZW1lIGNsYXNzIG9uIGVhY2ggY2xpY2tcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmstdGhlbWUnKVxuXG4gICAgLy8gTGV0J3Mgc2F5IHRoZSB0aGVtZSBpcyBlcXVhbCB0byBsaWdodFxuICAgIGxldCB0aGVtZSA9ICdsaWdodCdcbiAgICAvLyBJZiB0aGUgYm9keSBjb250YWlucyB0aGUgLmRhcmstdGhlbWUgY2xhc3MuLi5cbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstdGhlbWUnKSkge1xuICAgICAgLy8gLi4udGhlbiBsZXQncyBtYWtlIHRoZSB0aGVtZSBkYXJrXG4gICAgICB0aGVtZSA9ICdkYXJrJ1xuICAgICAgJCh0aGlzKS5odG1sKCc8aSBjbGFzcz1cImZhcyBmYS1hZGp1c3RcIj48L2k+IERhcmsgTW9kZSBPZmYnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLmh0bWwoJzxpIGNsYXNzPVwiZmFzIGZhLWFkanVzdFwiPjwvaT4gRGFyayBNb2RlIE9uJylcbiAgICB9XG4gICAgLy8gVGhlbiBzYXZlIHRoZSBjaG9pY2UgaW4gbG9jYWxTdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdGhlbWUpXG4gIH0pXG5cblxuICAvLyBzY3JpcHQgcG91ciBhZmZpY2hlciBsZSBmaWNoaWVyIHNlbGVjdGlvbm7DqSBhdmVjIGJvb3RzdHJhcDRcbiAgJCgnLmN1c3RvbS1maWxlIGlucHV0JykuY2hhbmdlKGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgZmlsZXMgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJCh0aGlzKVswXS5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsZXMucHVzaCgkKHRoaXMpWzBdLmZpbGVzW2ldLm5hbWUpXG4gICAgfVxuICAgICQodGhpcykubmV4dCgnLmN1c3RvbS1maWxlLWxhYmVsJykuaHRtbChmaWxlcy5qb2luKCcsICcpKVxuICB9KVxuXG4gIHZhciBwcmVsb2FkZXIgPSAkKCcucHJlbG9hZGVyJylcbiAgaWYgKHByZWxvYWRlci5sZW5ndGgpIHtcbiAgICB2YXIgc3BlZWQgPSBwcmVsb2FkZXIuZGF0YUF0dHIoJ2hpZGUtc3BwZWQnLCA2MDApXG4gICAgcHJlbG9hZGVyLmZhZGVPdXQoc3BlZWQpXG4gIH1cblxuICAkKGRvY3VtZW50KS5vbignZm9jdXMnLCAnLnRvcGJhci1zZWFyY2ggaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCcudG9wYmFyLXNlYXJjaCcpLmZpbmQoJy5sb29rdXAtcGxhY2Vob2xkZXIgc3BhbicpLmNzcygnb3BhY2l0eScsICcwJylcbiAgfSlcblxuICAkKGRvY3VtZW50KS5vbignYmx1cicsICcudG9wYmFyLXNlYXJjaCBpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJy50b3BiYXItc2VhcmNoJykuZmluZCgnLmxvb2t1cC1wbGFjZWhvbGRlciBzcGFuJykuY3NzKCdvcGFjaXR5JywgJzEnKVxuICB9KVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbG9va3VwJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB2YXIgdGFyZ2V0ID0gJCgnI2xvb2t1cC1mdWxsJylcblxuICAgIGlmICh0YXJnZXQgIT09IGZhbHNlKSB7XG4gICAgICBsb29rdXAudG9nZ2xlKHRhcmdldClcbiAgICB9XG4gIH0pXG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNsb29rdXAtY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgbG9va3VwLnRvZ2dsZSgkKCcjbG9va3VwLWZ1bGwnKSlcbiAgfSlcblxuICAvL3Rvb2x0aXBcbiAgdXBkYXRlSW50ZXJmYWNlKClcblxuICAkKCdbZGF0YS1wcm92aWRlPVwidmFsaWRhdGlvblwiXScpLnZhbGlkYXRvcigpXG59KVxuXG4kKGRvY3VtZW50KS5hamF4Q29tcGxldGUoZnVuY3Rpb24gKCkge1xuICB1cGRhdGVJbnRlcmZhY2UoKVxufSlcblxuLy8gRnVsbHNjcmVlblxuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2FyZC1idG4tZnVsbHNjcmVlbicsIGZ1bmN0aW9uICgpIHtcbiAgJCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLnRvZ2dsZUNsYXNzKCdjYXJkLWZ1bGxzY3JlZW4nKS5yZW1vdmVDbGFzcygnY2FyZC1tYXhpbWl6ZScpXG59KVxuXG4vLyBTbGlkZSB1cC9kb3duXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNhcmQtYnRuLXNsaWRlJywgZnVuY3Rpb24gKCkge1xuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdyb3RhdGUtMTgwJykuY2xvc2VzdCgnLmNhcmQnKS5maW5kKCcuY2FyZC1jb250ZW50Jykuc2xpZGVUb2dnbGUoKVxufSlcblxuLy9tb2RhbGVyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtcHJvdmlkZX49XCJtb2RhbGVyXCJdJywgZnVuY3Rpb24gKCkge1xuICBtb2RhbGVyKGdldERhdGFPcHRpb25zKCQodGhpcykpKVxufSlcblxuZnVuY3Rpb24gdXBkYXRlSW50ZXJmYWNlICgpIHtcbiAgJCgnLmNhbGxvdXQnKS5kZWxheSg1MDAwKS5zbGlkZVVwKCdzbG93JylcblxuICB0aW55bWNlLmluaXQoe1xuICAgIHNlbGVjdG9yOiAnLnRpbnlNY2UnLFxuICAgIGhlaWdodDogMzAwLFxuICAgIG1lbnViYXI6IGZhbHNlLFxuICAgIGxhbmd1YWdlOiAnZnJfRlInLFxuICAgIGNvbnRlbnRfY3NzOiAnZGVmYXVsdCcsXG4gICAgdG9vbGJhcjogJ3VuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgJ1xuICB9KVxuXG4gIC8vc2VsZWN0cGlja2VyXG4gICQoJy5zZWxlY3RwaWNrZXInKS5zZWxlY3RwaWNrZXIoe1xuICAgIGljb25CYXNlOiAnJyxcbiAgICB0aWNrSWNvbjogJ2ZhcyBmYS1jaGVjaycsXG4gICAgc3R5bGU6ICdidG4tbGlnaHQnLFxuICAgIHNpemU6IDEwLFxuICAgIGxpdmVTZWFyY2g6IHRydWVcbiAgfSlcblxuICAvL3Rvb2x0aXBcbiAgJCgnW2RhdGEtcHJvdmlkZX49XCJ0b29sdGlwXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yID0gJydcblxuICAgIGlmICgkKHRoaXMpLmhhc0RhdGFBdHRyKCd0b29sdGlwLWNvbG9yJykpIHtcbiAgICAgIGNvbG9yID0gJyB0b29sdGlwLScgKyAkKHRoaXMpLmRhdGEoJ3Rvb2x0aXAtY29sb3InKVxuICAgIH1cblxuICAgICQodGhpcykudG9vbHRpcCh7XG4gICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwJyArIGNvbG9yICsgJ1wiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nXG4gICAgfSlcbiAgfSlcblxuICAkKCdbZGF0YS1wcm92aWRlfj1cImRhdGVwaWNrZXJcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIG11bHRpZGF0ZVNlcGFyYXRvcjogJywgJyxcbiAgICAgIGxhbmd1YWdlOiAnZnInLFxuICAgICAgZGF5c09mV2Vla0hpZ2hsaWdodGVkOiAnMDYnLFxuICAgICAgZm9ybWF0OiAnZGQvbW0veXl5eSdcbiAgICB9XG5cbiAgICBpZiAoJCh0aGlzKS5wcm9wKCd0YWdOYW1lJykgIT0gJ0lOUFVUJykge1xuICAgICAgLy9zaSBjZSBuJ2VzdCBwYXMgdW4gaW5wdXQgPT4gZG9uYyB1biBkYXRlIHJhbmdlXG4gICAgICBvcHRpb25zLmlucHV0cyA9IFskKHRoaXMpLmZpbmQoJ2lucHV0OmZpcnN0JyksICQodGhpcykuZmluZCgnaW5wdXQ6bGFzdCcpXVxuICAgIH1cbiAgICAkKHRoaXMpLmRhdGVwaWNrZXIob3B0aW9ucylcbiAgfSlcblxufVxuXG4vLyBPcGVuIGZ1bGxzY3JlZW4gbG9va3VwXG4vL1xubG9va3VwLnRvZ2dsZSA9IGZ1bmN0aW9uIChlKSB7XG4gIGlmICgkKGUpLmhhc0NsYXNzKCdyZXZlYWwnKSkge1xuICAgIGxvb2t1cC5jbG9zZShlKVxuICB9IGVsc2Uge1xuICAgIGxvb2t1cC5vcGVuKGUpXG4gIH1cbn1cblxuLy8gQ2xvc2UgZnVsbHNjcmVlbiBsb29rdXBcbi8vXG5sb29rdXAuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAkKGUpLnJlbW92ZUNsYXNzKCdyZXZlYWwnKVxuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpXG59XG5cblxuLy8gQ2xvc2UgZnVsbHNjcmVlbiBsb29rdXBcbi8vXG5sb29rdXAub3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gICQoZSkuYWRkQ2xhc3MoJ3JldmVhbCcpXG4gICQoZSkuZmluZCgnLmxvb2t1cC1mb3JtIGlucHV0JykuZm9jdXMoKVxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpXG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy8gU2lkZWJhclxuLy8gPT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBzaWRlYmFyID0ge31cblxuLy8gU2Nyb2xsYWJsZVxuY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2lkZWJhci1uYXZpZ2F0aW9uJykpXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2lkZWJhci1uYXZpZ2F0aW9uJykubGVuZ3RoID4gMCkge1xuICBjb25zdCBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuc2lkZWJhci1uYXZpZ2F0aW9uJylcbn1cblxuLy8gSGFuZGxlIHNpZGViYXIgb3Blbm5lclxuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2lkZWJhci10b2dnbGVyJywgZnVuY3Rpb24gKCkge1xuICBzaWRlYmFyLm9wZW4oKVxufSlcblxuXG4vLyBDbG9zZSBzaWRlYmFyIHdoZW4gYmFja2Ryb3AgdG91Y2hlc1xuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYmFja2Ryb3Atc2lkZWJhcicsIGZ1bmN0aW9uICgpIHtcbiAgc2lkZWJhci5jbG9zZSgpXG59KVxuXG5cbi8vIFNsaWRlIHVwL2Rvd24gbWVudSBpdGVtIG9uIGNsaWNrXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zaWRlYmFyIC5tZW51LWxpbmsnLCBmdW5jdGlvbiAoKSB7XG4gIHZhciAkc3VibWVudSA9ICQodGhpcykubmV4dCgnLm1lbnUtc3VibWVudScpXG4gIGlmICgkc3VibWVudS5sZW5ndGggPCAxKVxuICAgIHJldHVyblxuXG4gIGlmICgkc3VibWVudS5pcygnOnZpc2libGUnKSkge1xuICAgICRzdWJtZW51LnNsaWRlVXAoZnVuY3Rpb24gKCkge1xuICAgICAgJCgnLnNpZGViYXIgLm1lbnUtaXRlbS5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgIH0pXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgcmV0dXJuXG4gIH1cblxuICAkKCcuc2lkZWJhciAubWVudS1zdWJtZW51OnZpc2libGUnKS5zbGlkZVVwKClcbiAgJCgnLnNpZGViYXIgLm1lbnUtbGluaycpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgJHN1Ym1lbnUuc2xpZGVUb2dnbGUoZnVuY3Rpb24gKCkge1xuICAgICQoJy5zaWRlYmFyIC5tZW51LWl0ZW0ub3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgfSlcbiAgJCh0aGlzKS5hZGRDbGFzcygnb3BlbicpXG59KVxuXG4vLyBIYW5kbGUgZm9sZCB0b2dnbGVyXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zaWRlYmFyLXRvZ2dsZS1mb2xkJywgZnVuY3Rpb24gKCkge1xuICBzaWRlYmFyLnRvZ2dsZUZvbGQoKVxufSlcblxuLy99XG5cblxuc2lkZWJhci50b2dnbGVGb2xkID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3NpZGViYXItZm9sZGVkJylcbiAgYXBwLnRvZ2dsZVN0YXRlKCdzaWRlYmFyLmZvbGRlZCcpXG59XG5cbnNpZGViYXIuZm9sZCA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLmFkZENsYXNzKCdzaWRlYmFyLWZvbGRlZCcpXG4gIGFwcC5zdGF0ZSgnc2lkZWJhci5mb2xkZWQnLCB0cnVlKVxufVxuXG5cbnNpZGViYXIudW5mb2xkID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3NpZGViYXItZm9sZGVkJylcbiAgYXBwLnN0YXRlKCdzaWRlYmFyLmZvbGRlZCcsIGZhbHNlKVxufVxuXG5cbnNpZGViYXIudG9nZ2xlSGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzaWRlYmFyLWhpZGRlbicpXG4gIGFwcC50b2dnbGVTdGF0ZSgnc2lkZWJhci5oaWRkZW4nKVxufVxuXG5zaWRlYmFyLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1oaWRkZW4nKVxuICBhcHAuc3RhdGUoJ3NpZGViYXIuaGlkZGVuJywgdHJ1ZSlcbn1cblxuc2lkZWJhci5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3NpZGViYXItaGlkZGVuJylcbiAgYXBwLnN0YXRlKCdzaWRlYmFyLmhpZGRlbicsIGZhbHNlKVxufVxuXG5cbnNpZGViYXIub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLmFkZENsYXNzKCdzaWRlYmFyLW9wZW4nKS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwiYXBwLWJhY2tkcm9wIGJhY2tkcm9wLXNpZGViYXJcIj48L2Rpdj4nKVxufVxuXG5zaWRlYmFyLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3NpZGViYXItb3BlbicpXG4gICQoJy5iYWNrZHJvcC1zaWRlYmFyJykucmVtb3ZlKClcbn1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cbi8vIFF1aWNrdmlld1xuLy8gPT09PT09PT09PT09PT09PT09PT09XG4vL1xuXG5sZXQgcXVpY2t2aWV3ID0ge31cbmxldCBxcHMgPSBudWxsXG5cbi8vIFVwZGF0ZSBzY3JvbGxiYXIgb24gdGFiIGNoYW5nZVxuLy9cbiQoZG9jdW1lbnQpLm9uKCdzaG93bi5icy50YWInLCAnLnF1aWNrdmlldy1oZWFkZXIgYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScsIGZ1bmN0aW9uIChlKSB7XG4gIHFwcy51cGRhdGUoKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVsb2FkUXYgKCkge1xuICBxcHMuZGVzdHJveSgpXG4gIHFwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcucXVpY2t2aWV3Jylcbn1cblxuLy8gUXVpY2t2aWV3IGNsb3NlclxuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1kaXNtaXNzPVwicXVpY2t2aWV3XCJdJywgZnVuY3Rpb24gKCkge1xuICBxdWlja3ZpZXcuY2xvc2UoJCh0aGlzKS5jbG9zZXN0KCcucXVpY2t2aWV3JykpXG59KVxuXG5cbi8vIEhhbmRsZSBxdWlja3ZpZXcgb3Blbm5lclxuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS10b2dnbGU9XCJxdWlja3ZpZXdcIl0nLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbGV0IHRhcmdldCA9IGFwcC5nZXRUYXJnZXQoJCh0aGlzKSlcblxuICBpZiAodGFyZ2V0ID09IGZhbHNlKSB7XG4gICAgcXVpY2t2aWV3LmNsb3NlKCQodGhpcykuY2xvc2VzdCgnLnF1aWNrdmlldycpKVxuICB9IGVsc2Uge1xuICAgIGxldCB1cmwgPSAnJ1xuICAgIGlmICgkKHRoaXMpLmhhc0RhdGFBdHRyKCd1cmwnKSkge1xuICAgICAgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKVxuICAgIH1cbiAgICBxdWlja3ZpZXcudG9nZ2xlKHRhcmdldCwgdXJsKVxuICB9XG59KVxuXG5cbi8vIENsb3NlIHF1aWNrdmlldyB3aGVuIGJhY2tkcm9wIHRvdWNoZXNcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJhY2tkcm9wLXF1aWNrdmlldycsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IHF2ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRhcmdldCcpXG4gIGlmICghJChxdikuaXMoJ1tkYXRhLWRpc2FibGUtYmFja2Ryb3AtY2xpY2tdJykpIHtcbiAgICBxdWlja3ZpZXcuY2xvc2UocXYpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucXVpY2t2aWV3IC5jbG9zZSwgW2RhdGEtZGlzbWlzcz1cInF1aWNrdmlld1wiXScsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IHF2ID0gJCh0aGlzKS5jbG9zZXN0KCcucXVpY2t2aWV3JylcbiAgcXVpY2t2aWV3LmNsb3NlKHF2KVxufSlcblxuLy8gVG9nZ2xlIG9wZW4vY2xvc2Ugc3RhdGVcbi8vXG5xdWlja3ZpZXcudG9nZ2xlID0gZnVuY3Rpb24gKGUsIHVybCkge1xuICBpZiAoJChlKS5oYXNDbGFzcygncmV2ZWFsJykpIHtcbiAgICBxdWlja3ZpZXcuY2xvc2UoZSlcbiAgfSBlbHNlIHtcbiAgICBpZiAodXJsICE9PSAnJykge1xuICAgICAgJChlKS5odG1sKCc8ZGl2IGNsYXNzPVwic3Bpbm5lci1saW5lYXJcIj48ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PjwvZGl2PicpXG4gICAgICAkKGUpLmxvYWQodXJsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHFwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcucXVpY2t2aWV3JylcbiAgICAgIH0pXG4gICAgfVxuICAgIHF1aWNrdmlldy5vcGVuKGUpXG4gIH1cbn1cblxuXG4vLyBPcGVuIHF1aWNrdmlld1xuLy9cbnF1aWNrdmlldy5vcGVuID0gZnVuY3Rpb24gKGUpIHtcbiAgbGV0IHF1aWNrdmlldyA9ICQoZSlcbiAgbGV0IHVybCA9ICcnXG4gIC8vIExvYWQgY29udGVudCBmcm9tIFVSTCBpZiByZXF1aXJlZFxuICBpZiAocXVpY2t2aWV3Lmhhc0RhdGFBdHRyKCd1cmwnKSAmJiAndHJ1ZScgIT09IHF1aWNrdmlldy5kYXRhKCd1cmwtaGFzLWxvYWRlZCcpKSB7XG4gICAgaWYgKHF1aWNrdmlldy5kYXRhKCd1cmwnKSA9PT0gJ25vLXVybCcpIHtcbiAgICAgIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3F1aWNrX3ZpZXcnKVxuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSBxdWlja3ZpZXcuZGF0YSgndXJsJylcbiAgICB9XG5cbiAgICBxdWlja3ZpZXcubG9hZCh1cmwsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHFwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcucXVpY2t2aWV3JylcblxuICAgICAgLy8gRG9uJ3QgbG9hZCBpdCBuZXh0IHRpbWUsIGlmIGRvbid0IG5lZWQgdG9cbiAgICAgIGlmIChxdWlja3ZpZXcuaGFzRGF0YUF0dHIoJ2Fsd2F5cy1yZWxvYWQnKSAmJiAndHJ1ZScgPT09IHF1aWNrdmlldy5kYXRhKCdhbHdheXMtcmVsb2FkJykpIHtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVpY2t2aWV3LmRhdGEoJ3VybC1oYXMtbG9hZGVkJywgJ3RydWUnKVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4vLyBPcGVuIGl0XG4gIHF1aWNrdmlldy5hZGRDbGFzcygncmV2ZWFsJykubm90KCcuYmFja2Ryb3AtcmVtb3ZlJykuYWZ0ZXIoJzxkaXYgY2xhc3M9XCJhcHAtYmFja2Ryb3AgYmFja2Ryb3AtcXVpY2t2aWV3XCIgZGF0YS10YXJnZXQ9XCInICsgZSArICdcIj48L2Rpdj4nKVxufVxuXG5cbi8vIENsb3NlIHF1aWNrdmlld1xuLy9cbnF1aWNrdmlldy5jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICQoZSkucmVtb3ZlQ2xhc3MoJ3JldmVhbCcpXG4gICQoJy5iYWNrZHJvcC1xdWlja3ZpZXcnKS5yZW1vdmUoKVxufVxuXG5cbmxldCBhcHAgPSB7fVxuXG5hcHAuZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKGUpIHtcbiAgbGV0IHRhcmdldFxuICBpZiAoZS5oYXNEYXRhQXR0cigndGFyZ2V0JykpIHtcbiAgICB0YXJnZXQgPSBlLmRhdGEoJ3RhcmdldCcpXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZS5hdHRyKCdocmVmJylcbiAgfVxuXG4gIGlmICh0YXJnZXQgPT0gJ25leHQnKSB7XG4gICAgdGFyZ2V0ID0gJChlKS5uZXh0KClcbiAgfSBlbHNlIGlmICh0YXJnZXQgPT0gJ3ByZXYnKSB7XG4gICAgdGFyZ2V0ID0gJChlKS5wcmV2KClcbiAgfVxuXG4gIGlmICh0YXJnZXQgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdGFyZ2V0XG59XG5cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9tYXRlcmlhbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI4LzExLzIwMTkgMTk6NDBcblxuLy8gTWF0ZXJpYWwgaW5wdXRcbi8vXG4kKGRvY3VtZW50KS5vbignZm9jdXMnLCAnLmZvcm0tdHlwZS1tYXRlcmlhbCAuZm9ybS1jb250cm9sOm5vdCguYm9vdHN0cmFwLXNlbGVjdCknLCBmdW5jdGlvbiAoKSB7XG4gIG1hdGVyaWFsRG9GbG9hdCgkKHRoaXMpKVxufSlcblxuJChkb2N1bWVudCkub24oJ2ZvY3Vzb3V0JywgJy5mb3JtLXR5cGUtbWF0ZXJpYWwgLmZvcm0tY29udHJvbDpub3QoLmJvb3RzdHJhcC1zZWxlY3QpJywgZnVuY3Rpb24gKCkge1xuICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJycpIHtcbiAgICBtYXRlcmlhbE5vRmxvYXQoJCh0aGlzKSlcbiAgfVxufSlcblxuLy8gQXV0byBmb2N1cyBpbnB1dHNcbm1hdGVyaWFsRG9GbG9hdCgkKCcuZm9ybS10eXBlLW1hdGVyaWFsIC5mb3JtLWNvbnRyb2xbYXV0b2ZvY3VzPVwidHJ1ZVwiXScpKVxuXG5cbmZ1bmN0aW9uIG1hdGVyaWFsRG9GbG9hdCAoZSkge1xuICBpZiAoZS5wYXJlbnQoJy5pbnB1dC1ncm91cC1pbnB1dCcpLmxlbmd0aCkge1xuICAgIGUucGFyZW50KCcuaW5wdXQtZ3JvdXAtaW5wdXQnKS5hZGRDbGFzcygnZG8tZmxvYXQnKVxuICB9IGVsc2Uge1xuICAgIGUuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5hZGRDbGFzcygnZG8tZmxvYXQnKVxuICB9XG59XG5cblxuZnVuY3Rpb24gbWF0ZXJpYWxOb0Zsb2F0IChlKSB7XG4gIGlmIChlLnBhcmVudCgnLmlucHV0LWdyb3VwLWlucHV0JykubGVuZ3RoKSB7XG4gICAgZS5wYXJlbnQoJy5pbnB1dC1ncm91cC1pbnB1dCcpLnJlbW92ZUNsYXNzKCdkby1mbG9hdCcpXG4gIH0gZWxzZSB7XG4gICAgZS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdkby1mbG9hdCcpXG4gIH1cbn1cblxuJCgnLmZvcm0tdHlwZS1tYXRlcmlhbCAuZm9ybS1jb250cm9sJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gIGlmICgkKHRoaXMpLnZhbCgpLmxlbmd0aCA+IDApIHtcbiAgICAvL2lmICgkKHRoaXMpLmlzKCdbZGF0YS1wcm92aWRlfj1cInNlbGVjdHBpY2tlclwiXScpKSB7XG4gICAgLy8gIHJldHVyblxuICAgIC8vfVxuICAgIG1hdGVyaWFsRG9GbG9hdCgkKHRoaXMpKVxuICB9XG59KVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvbW9kYWxlci5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDA1LzAzLzIwMjEgMTY6MzFcblxuLy8gPT09PT09PT09PT09PT09PT09PT09XG4vLyBNb2RhbGVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cbi8vXG4rZnVuY3Rpb24gKCQpIHtcblxuICBsZXQgY29uZmlnTW9kYWxlciA9IHtcbiAgICB1cmw6ICcnLFxuICAgIGlzTW9kYWw6IGZhbHNlLFxuICAgIGh0bWw6ICcnLFxuICAgIHRhcmdldDogJycsXG4gICAgdHlwZTogJycsXG4gICAgc2l6ZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgIGhlYWRlclZpc2libGU6IHRydWUsXG4gICAgZm9vdGVyVmlzaWJsZTogdHJ1ZSxcbiAgICBjb25maXJtVmlzaWJsZTogdHJ1ZSxcbiAgICBjb25maXJtVGV4dDogJ09rJyxcbiAgICBjb25maXJtQ2xhc3M6ICdidG4gYnRuLXctc20gYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbFZpc2libGU6IGZhbHNlLFxuICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnLFxuICAgIGNhbmNlbENsYXNzOiAnYnRuIGJ0bi13LXNtIGJ0bi1zZWNvbmRhcnknLFxuICAgIGJvZHlFeHRyYUNsYXNzOiAnJyxcbiAgICBzcGlubmVyOiAnPGRpdiBjbGFzcz1cImgtMjAwIGNlbnRlci12aFwiPjxzdmcgY2xhc3M9XCJzcGlubmVyLWNpcmNsZS1tYXRlcmlhbC1zdmdcIiB2aWV3Qm94PVwiMCAwIDUwIDUwXCI+PGNpcmNsZSBjbGFzcz1cImNpcmNsZVwiIGN4PVwiMjVcIiBjeT1cIjI1XCIgcj1cIjIwXCI+PC9zdmc+PC9kaXY+JyxcblxuICAgIGF1dG9EZXN0cm95OiB0cnVlLFxuXG4gICAgLy8gRXZlbnRzXG4gICAgb25TaG93OiBudWxsLFxuICAgIG9uU2hvd246IG51bGwsXG4gICAgb25IaWRlOiBudWxsLFxuICAgIG9uSGlkZGVuOiBudWxsLFxuICAgIG9uQ29uZmlybTogbnVsbCxcbiAgICBvbkNhbmNlbDogbnVsbCxcblxuICAgIC8vIFByaXZhdGUgb3B0aW9uc1xuICAgIG1vZGFsSWQ6IG51bGxcbiAgfVxuXG4gIGZ1bmN0aW9uIGd1aWQgKGxlbikge1xuICAgIGlmIChsZW4gPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZW4gPSA1XG4gICAgfVxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKS5zdWJzdHIoMCwgbGVuKVxuICB9XG5cblxuICBtb2RhbGVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgc2V0dGluZyA9ICQuZXh0ZW5kKHt9LCBjb25maWdNb2RhbGVyLCBvcHRpb25zKVxuXG4gICAgaWYgKHNldHRpbmcubW9kYWxJZCkge1xuICAgICAgJCgnIycgKyBzZXR0aW5nLm1vZGFsSWQpLm1vZGFsKCdzaG93JylcbiAgICAgIHJldHVyblxuICAgIH1cblxuXG4gICAgdmFyIGlkID0gJ21vZGFsLScgKyBndWlkKClcblxuXG4gICAgdmFyIGhhbmRsZUNhbGxiYWNrID0gZnVuY3Rpb24gKGlkKSB7XG5cbiAgICAgIC8vIEJvb3RzdHJhcCBtb2RhbCBldmVudHNcbiAgICAgIC8vXG4gICAgICBpZiAoc2V0dGluZy5vblNob3cpIHtcbiAgICAgICAgJCgnIycgKyBpZCkub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vc2V0dGluZy5vblNob3coKTtcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNldHRpbmcub25TaG93bikge1xuICAgICAgICAkKCcjJyArIGlkKS5vbignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vc2V0dGluZy5vblNob3duKCk7XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5nLm9uSGlkZSkge1xuICAgICAgICAkKCcjJyArIGlkKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgc2V0dGluZy5vbkhpZGUoKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAoc2V0dGluZy5vbkhpZGRlbikge1xuICAgICAgICAkKCcjJyArIGlkKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBzZXR0aW5nLm9uSGlkZGVuKClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuXG4gICAgICAvLyBIYW5kbGUgY29uZmlybSBjYWxsYmFja1xuICAgICAgLy9cbiAgICAgICQoJyMnICsgaWQpLmZpbmQoJ1tkYXRhLXBlcmZvcm09XCJjb25maXJtXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vIEhhc24ndCBzZXRcbiAgICAgICAgaWYgKHNldHRpbmcub25Db25maXJtID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElzIGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5nLm9uQ29uZmlybSkpIHtcbiAgICAgICAgICBzZXR0aW5nLm9uQ29uZmlybSgkKCcjJyArIGlkKSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElzIHN0cmluZyB2YWx1ZSwgc28gY2FsbCBpdFxuICAgICAgICBpZiAoc2V0dGluZy5vbkNvbmZpcm0uc3Vic3RyaW5nKSB7XG4gICAgICAgICAgYXBwLmNhbGwoc2V0dGluZy5vbkNvbmZpcm0sICQoJyMnICsgaWQpKVxuICAgICAgICB9XG5cbiAgICAgIH0pXG5cblxuICAgICAgLy8gSGFuZGxlIGNhbmNlbCBjYWxsYmFja1xuICAgICAgLy9cbiAgICAgICQoJyMnICsgaWQpLmZpbmQoJ1tkYXRhLXBlcmZvcm09XCJjYW5jZWxcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gSGFzbid0IHNldFxuICAgICAgICBpZiAoc2V0dGluZy5vbkNhbmNlbCA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJcyBhIGZ1bmN0aW9uXG4gICAgICAgIGlmICgkLmlzRnVuY3Rpb24oc2V0dGluZy5vbkNhbmNlbCkpIHtcbiAgICAgICAgICBzZXR0aW5nLm9uQ2FuY2VsKCQoJyMnICsgaWQpKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXMgc3RyaW5nIHZhbHVlLCBzbyBjYWxsIGl0XG4gICAgICAgIGlmIChzZXR0aW5nLm9uQ2FuY2VsLnN1YnN0cmluZykge1xuICAgICAgICAgIGFwcC5jYWxsKHNldHRpbmcub25DYW5jZWwsICQoJyMnICsgaWQpKVxuICAgICAgICB9XG5cbiAgICAgIH0pXG4gICAgfVxuXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBXZSByZWNpZXZlIG1vZGFsIG1hcmt1cCBmcm9tIHVybFxuICAgIC8vXG4gICAgaWYgKHNldHRpbmcuaXNNb2RhbCkge1xuXG4gICAgICAkKCc8ZGl2PicpLmxvYWQoc2V0dGluZy51cmwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkKHRoaXMpLmZpbmQoJy5tb2RhbCcpLmF0dHIoJ2lkJywgaWQpLm91dGVySFRNTCgpKVxuXG4gICAgICAgICQoJyMnICsgaWQpLm1vZGFsKCdzaG93JylcbiAgICAgICAgJCgnIycgKyBpZCkub25lKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy90b2RvOiBhIGNvbmZpcm1lciAkKCcjJysgaWQpLmZpbmQoJy5tb2RhbC1ib2R5JykucGVyZmVjdFNjcm9sbGJhcigndXBkYXRlJyk7XG4gICAgICAgIH0pXG5cblxuICAgICAgICAvLyBEZXN0cm95IGFmdGVyIGNsb3NlXG4gICAgICAgIC8vXG4gICAgICAgIGlmIChzZXR0aW5nLmF1dG9EZXN0cm95KSB7XG4gICAgICAgICAgJCgnIycgKyBpZCkub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJyMnICsgaWQpLnJlbW92ZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKHNldHRpbmcudGhpcykuYXR0cignZGF0YS1tb2RhbC1pZCcsIGlkKVxuICAgICAgICB9XG5cblxuICAgICAgICBoYW5kbGVDYWxsYmFjayhpZClcbiAgICAgIH0pXG4gICAgfVxuXG5cblxuXG5cbiAgICAgIC8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBXZSBzaG91bGQgZGVzaWduIHRoZSBtb2RhbFxuICAgIC8vXG4gICAgZWxzZSB7XG5cbiAgICAgIHN3aXRjaCAoc2V0dGluZy5zaXplKSB7XG4gICAgICAgIGNhc2UgJ3NtJzpcbiAgICAgICAgICBzZXR0aW5nLnNpemUgPSAnbW9kYWwtc20nXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdsZyc6XG4gICAgICAgICAgc2V0dGluZy5zaXplID0gJ21vZGFsLWxnJ1xuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy9zZXR0aW5nLnNpemUgPSAnJztcbiAgICAgIH1cblxuXG4gICAgICBpZiAoc2V0dGluZy50eXBlKSB7XG4gICAgICAgIHNldHRpbmcudHlwZSA9ICdtb2RhbC0nICsgc2V0dGluZy50eXBlXG4gICAgICB9XG5cblxuICAgICAgLy8gSGVhZGVyIGNvZGVcbiAgICAgIC8vXG4gICAgICB2YXIgaHRtbF9oZWFkZXIgPSAnJ1xuICAgICAgaWYgKHNldHRpbmcuaGVhZGVyVmlzaWJsZSkge1xuICAgICAgICBodG1sX2hlYWRlciArPVxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+IFxcXG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPicgKyBzZXR0aW5nLnRpdGxlICsgJzwvaDU+IFxcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPiBcXFxuICAgICAgICAgIDwvZGl2PidcbiAgICAgIH1cblxuXG4gICAgICAvLyBGb290ZXIgY29kZVxuICAgICAgLy9cbiAgICAgIHZhciBodG1sX2Zvb3RlciA9ICcnXG4gICAgICBpZiAoc2V0dGluZy5mb290ZXJWaXNpYmxlKSB7XG4gICAgICAgIGh0bWxfZm9vdGVyICs9ICc8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+J1xuXG4gICAgICAgIGlmIChzZXR0aW5nLmNhbmNlbFZpc2libGUpIHtcbiAgICAgICAgICBodG1sX2Zvb3RlciArPSAnPGJ1dHRvbiBjbGFzcz1cIicgKyBzZXR0aW5nLmNhbmNlbENsYXNzICsgJ1wiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS1wZXJmb3JtPVwiY2FuY2VsXCI+JyArIHNldHRpbmcuY2FuY2VsVGV4dCArICc8L2J1dHRvbj4nXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2V0dGluZy5jb25maXJtVmlzaWJsZSkge1xuICAgICAgICAgIGh0bWxfZm9vdGVyICs9ICc8YnV0dG9uIGNsYXNzPVwiJyArIHNldHRpbmcuY29uZmlybUNsYXNzICsgJ1wiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS1wZXJmb3JtPVwiY29uZmlybVwiPicgKyBzZXR0aW5nLmNvbmZpcm1UZXh0ICsgJzwvYnV0dG9uPidcbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWxfZm9vdGVyICs9ICc8L2Rpdj4nXG4gICAgICB9XG5cbiAgICAgIC8vIE1vZGFsIGNvZGVcbiAgICAgIC8vXG4gICAgICB2YXIgbW9kYWxfaHRtbCA9XG4gICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZSAnICsgc2V0dGluZy50eXBlICsgJ1wiIGlkPVwiJyArIGlkICsgJ1wiIHRhYmluZGV4PVwiLTFcIicgKyAoIXNldHRpbmcuYmFja2Ryb3AgPyAnIGRhdGEtYmFja2Ryb3A9XCJmYWxzZVwiJyA6ICcnKSArICc+IFxcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nICcgKyBzZXR0aW5nLnNpemUgKyAnXCI+IFxcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+IFxcXG4gICAgICAgICAgICAgICAgJyArIGh0bWxfaGVhZGVyICsgJyBcXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5ICcgKyBzZXR0aW5nLmJvZHlFeHRyYUNsYXNzICsgJ1wiPiBcXFxuICAgICAgICAgICAgICAgICAgJyArIHNldHRpbmcuc3Bpbm5lciArICcgXFxcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXFxcbiAgICAgICAgICAgICAgICAnICsgaHRtbF9mb290ZXIgKyAnIFxcXG4gICAgICAgICAgICAgIDwvZGl2PiBcXFxuICAgICAgICAgICAgPC9kaXY+IFxcXG4gICAgICAgICAgPC9kaXY+J1xuXG5cbiAgICAgIC8vIFNob3cgbW9kYWxcbiAgICAgICQoJ2JvZHknKS5hcHBlbmQobW9kYWxfaHRtbClcbiAgICAgICQoJyMnICsgaWQpLm1vZGFsKCdzaG93JylcblxuXG4gICAgICAvLyBEZXN0cm95IGFmdGVyIGNsb3NlXG4gICAgICAvL1xuICAgICAgaWYgKHNldHRpbmcuYXV0b0Rlc3Ryb3kpIHtcbiAgICAgICAgJCgnIycgKyBpZCkub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkKCcjJyArIGlkKS5yZW1vdmUoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChzZXR0aW5nLnRoaXMpLmF0dHIoJ2RhdGEtbW9kYWwtaWQnLCBpZClcbiAgICAgIH1cblxuXG4gICAgICAvLyBMb2FkIGRhdGEgaW50byB0aGUgbW9kYWxcbiAgICAgIC8vXG4gICAgICBpZiAoc2V0dGluZy51cmwpIHtcbiAgICAgICAgJCgnIycgKyBpZCkuZmluZCgnLm1vZGFsLWJvZHknKS5sb2FkKHNldHRpbmcudXJsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy90b2RvOiBhIGNvbmZpcm1lciAkKHRoaXMpLnBlcmZlY3RTY3JvbGxiYXIoJ3VwZGF0ZScpO1xuICAgICAgICAgIGhhbmRsZUNhbGxiYWNrKGlkKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChzZXR0aW5nLmh0bWwpIHtcbiAgICAgICAgJCgnIycgKyBpZCkuZmluZCgnLm1vZGFsLWJvZHknKS5odG1sKHNldHRpbmcuaHRtbClcbiAgICAgICAgaGFuZGxlQ2FsbGJhY2soaWQpXG4gICAgICB9IGVsc2UgaWYgKHNldHRpbmcudGFyZ2V0KSB7XG4gICAgICAgICQoJyMnICsgaWQpLmZpbmQoJy5tb2RhbC1ib2R5JykuaHRtbCgkKHNldHRpbmcudGFyZ2V0KS5odG1sKCkpXG4gICAgICAgIGhhbmRsZUNhbGxiYWNrKGlkKVxuICAgICAgfVxuICAgIH1cbiAgfVxufShqUXVlcnkpXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvc2VhcmNoLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjYvMDkvMjAyMCAxODoxOFxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI3NlYXJjaCcsIGZ1bmN0aW9uIChlKSB7XG5cbiAgY29uc3Qga2V5d29yZCA9ICQodGhpcykudmFsKClcbiAgY29uc3Qgc2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQgPSAkKCcjc2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQnKVxuICBjb25zdCBzZWFyY2hfcmVwb25zZV9wZXJzb25uZWwgPSAkKCcjc2VhcmNoX3JlcG9uc2VfcGVyc29ubmVsJylcbiAgY29uc3Qgc2VhcmNoX3JlcG9uc2VfYXV0cmUgPSAkKCcjc2VhcmNoX3JlcG9uc2VfYXV0cmUnKVxuXG4gIGlmIChrZXl3b3JkLmxlbmd0aCA+IDIpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdyZWNoZXJjaGUnLCB7a2V5d29yZDoga2V5d29yZH0pLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGxldCBodG1sID0gJydcbiAgICAgICAgaWYgKGRhdGEuZXR1ZGlhbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBqUXVlcnkuZWFjaChkYXRhLmV0dWRpYW50cywgZnVuY3Rpb24gKGluZGV4LCBldHVkaWFudCkge1xuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGEgY2xhc3M9XCJtZWRpYVwiIGhyZWY9XCInICsgUm91dGluZy5nZW5lcmF0ZSgndXNlcl9wcm9maWwnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdldHVkaWFudCcsXG4gICAgICAgICAgICAgIHNsdWc6IGV0dWRpYW50LnNsdWdcbiAgICAgICAgICAgIH0pICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiPlxcbidcbiAgICAgICAgICAgIGlmIChldHVkaWFudC5waG90byA9PT0gJ25vaW1hZ2UucG5nJyB8fCBldHVkaWFudC5waG90byA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxkaXYgY2xhc3M9XCJhdmF0YXItY2lyY2xlLXNtXCI+XFxuJyArXG4gICAgICAgICAgICAgICAgJyAgICA8c3BhbiBjbGFzcz1cImluaXRpYWxzXCI+JyArIGV0dWRpYW50LmF2YXRhckluaXRpYWxlcyArICc8L3NwYW4+XFxuJyArXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxpbWcgY2xhc3M9XCJhdmF0YXIgYXZhdGFyLXNtXCIgc3JjPVwiJyArIGRhdGEuYmFzZXBhdGggKyAnZXR1ZGlhbnRzLycgKyBldHVkaWFudC5waG90byArICdcIiBhbHQ9XCJQaG90byBkZSBwcm9maWwgZGUgJyArIGV0dWRpYW50LmRpc3BsYXlQciArICdcIj5cXG4nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICcgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+JyArIGV0dWRpYW50LmRpc3BsYXlQciArICcgKCcgKyBldHVkaWFudC5zZW1lc3RyZSArICcpPC9zdHJvbmc+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj4nICsgZXR1ZGlhbnQuZ3JvdXBlcyArICc8L3RpbWU+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvYT4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+UGFzIGRlIHLDqXN1bHRhdCBwb3VyIHZvdHJlIHJlY2hlcmNoZSA8c3Ryb25nPlwiJyArIGtleXdvcmQgKyAnXCI8L3N0cm9uZz48L2Rpdj4nXG4gICAgICAgIH1cblxuICAgICAgICBzZWFyY2hfcmVwb25zZV9ldHVkaWFudC5lbXB0eSgpLmFwcGVuZChodG1sKVxuXG4gICAgICAgIGh0bWwgPSAnJ1xuICAgICAgICBpZiAoZGF0YS5wZXJzb25uZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBqUXVlcnkuZWFjaChkYXRhLnBlcnNvbm5lbHMsIGZ1bmN0aW9uIChpbmRleCwgcGVyc29ubmVsKSB7XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICc8YSBjbGFzcz1cIm1lZGlhIGl0ZW1zLWNlbnRlclwiIGhyZWY9XCInICsgUm91dGluZy5nZW5lcmF0ZSgndXNlcl9wcm9maWwnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdwZXJzb25uZWwnLFxuICAgICAgICAgICAgICBzbHVnOiBwZXJzb25uZWwuc2x1Z1xuICAgICAgICAgICAgfSkgKyAnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XFxuJ1xuICAgICAgICAgICAgaWYgKHBlcnNvbm5lbC5waG90byA9PT0gJ25vaW1hZ2UucG5nJyB8fCBwZXJzb25uZWwucGhvdG8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICBodG1sID0gaHRtbCArICc8ZGl2IGNsYXNzPVwiYXZhdGFyLWNpcmNsZS1zbVwiPlxcbicgK1xuICAgICAgICAgICAgICAgICcgICAgPHNwYW4gY2xhc3M9XCJpbml0aWFsc1wiPicgKyBwZXJzb25uZWwuYXZhdGFySW5pdGlhbGVzICsgJzwvc3Bhbj5cXG4nICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGltZyBjbGFzcz1cImF2YXRhciBhdmF0YXItc21cIiBzcmM9XCInICsgZGF0YS5iYXNlcGF0aCArICdwZXJzb25uZWxzLycgKyBwZXJzb25uZWwucGhvdG8gKyAnXCIgYWx0PVwiUGhvdG8gZGUgcHJvZmlsIGRlICcgKyBwZXJzb25uZWwuZGlzcGxheVByICsgJ1wiPlxcbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJyAgICAgICAgICAgICAgICAgICAgICAgIDxwPicgKyBwZXJzb25uZWwuZGlzcGxheVByICsgJzwvcD5cXG4nICtcbiAgICAgICAgICAgICAgJzwvYT4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+UGFzIGRlIHLDqXN1bHRhdCBwb3VyIHZvdHJlIHJlY2hlcmNoZSA8c3Ryb25nPlwiJyArIGtleXdvcmQgKyAnXCI8L3N0cm9uZz48L2Rpdj4nXG4gICAgICAgIH1cbiAgICAgICAgc2VhcmNoX3JlcG9uc2VfcGVyc29ubmVsLmVtcHR5KCkuYXBwZW5kKGh0bWwpXG5cbiAgICAgICAgaHRtbCA9ICcnXG4gICAgICAgIGlmIChkYXRhLmF1dHJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgalF1ZXJ5LmVhY2goZGF0YS5hdXRyZXMsIGZ1bmN0aW9uIChpbmRleCwgYXV0cmUpIHtcbiAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxhIGNsYXNzPVwibWVkaWEgaXRlbXMtY2VudGVyXCIgaHJlZj1cIlwiPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImF2YXRhciBhdmF0YXItc21cIiBzcmM9XCIuLi9hc3NldHMvaW1nL2F2YXRhci8xLmpwZ1wiIGFsdD1cIi4uLlwiPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHA+JyArIGF1dHJlICsgJzwvcD5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC9hPidcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGh0bWwgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5QYXMgZGUgcsOpc3VsdGF0IHBvdXIgdm90cmUgcmVjaGVyY2hlIDxzdHJvbmc+XCInICsga2V5d29yZCArICdcIjwvc3Ryb25nPjwvZGl2PidcbiAgICAgICAgfVxuICAgICAgICBzZWFyY2hfcmVwb25zZV9hdXRyZS5lbXB0eSgpLmFwcGVuZChodG1sKVxuICAgICAgfVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIj5TYWlzaXIgYXUgbW9pbnMgMyBjYXJhY3TDqHJlczwvZGl2PidcbiAgICBzZWFyY2hfcmVwb25zZV9hdXRyZS5lbXB0eSgpLmFwcGVuZChodG1sKVxuICAgIHNlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbC5lbXB0eSgpLmFwcGVuZChodG1sKVxuICAgIHNlYXJjaF9yZXBvbnNlX2V0dWRpYW50LmVtcHR5KCkuYXBwZW5kKGh0bWwpXG4gIH1cbn0pXG5cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy91dGlsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDEvMTIvMjAyMCAyMjowNFxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxubGV0ICRzdG9wQ2F0Y2hFbnRlciA9IGZhbHNlXG5cbmZ1bmN0aW9uIHJlYWRVcmxNZW51ICgkdXJsKSB7XG4gIGNvbnN0ICRlbHQgPSAkdXJsLnNwbGl0KCcvJylcbiAgbGV0ICRmaXJzdEVsdCA9IDJcbiAgaWYgKCRlbHRbMV0gPT09ICdpbmRleC5waHAnKSB7XG4gICAgaWYgKCRlbHQubGVuZ3RoID4gMSkge1xuICAgICAgJGZpcnN0RWx0ID0gM1xuICAgIH1cbiAgfVxuXG4gIGlmICgkZWx0WyRmaXJzdEVsdF0gPT09ICdzdXBlci1hZG1pbmlzdHJhdGlvbicpIHtcbiAgICAkZmlyc3RFbHQgPSAkZmlyc3RFbHQgKyAxXG4gIH1cblxuICBpZiAoJGVsdFskZWx0Lmxlbmd0aCAtIDFdID09PSAnJykge1xuICAgICRlbHQucG9wKClcbiAgfVxuXG4gICQoJy5tZW51LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgJCgnI21lbnUtJyArICRlbHRbJGZpcnN0RWx0XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG59XG5cbi8vY29sb3Jpc2UgbGUgYm9uIG1lbnVcbnJlYWRVcmxNZW51KCQobG9jYXRpb24pLmF0dHIoJ3BhdGhuYW1lJykpXG5cblN3YWwubWl4aW4oe1xuICBjdXN0b21DbGFzczoge1xuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICB9LFxuICBidXR0b25zU3R5bGluZzogZmFsc2Vcbn0pXG4vL3BvcCB1cCBkZSBjb25maXJtYXRpb24gZGUgc3VwcHJlc3Npb25cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc3VwcHJpbWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gIGNvbnN0IGNzcmYgPSAkKHRoaXMpLmRhdGEoJ2NzcmYnKVxuICBTd2FsLmZpcmUoe1xuICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uID8nLFxuICAgIHRleHQ6ICdMXFwnb3DDqXJhdGlvbiBuZSBwb3VycmEgcGFzIMOqdHJlIGFubnVsw6llLicsXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgamUgY29uZmlybWUnLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXInLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgIH0sXG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIF90b2tlbjogY3NyZlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0JykgJiYgaWQuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gaWQudXJsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vdC5yb3coXCIjbGlnbmVfXCIraWQpLnJlbW92ZSgpLmRyYXcoKTsgPTwgZGF0YXR0YWJsZSB0b2RvOiByZW1vdmUgbGlnbmUgc2kgZGF0YXRhYmxlID8/IHByb2Jsw6htZSBkYW5zIGFkbT5wZXJzb25uZWxcbiAgICAgICAgICAgICQoJyNsaWduZV8nICsgaWQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICAgICAgICAgIGFkZENhbGxvdXQoJ1N1cHByZXNzaW9uIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdTdXBwcmltw6khJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0xcXCdlbnJlZ2lzdHJlbWVudCBhIMOpdMOpIHN1cHByaW3DqS4nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24hJyxcbiAgICAgICAgICAgIHRleHQ6ICdNZXJjaSBkZSByZW5vdXZlbGVyIGxcXCdvcMOpcmF0aW9uJyxcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXG4gICAgICByZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCdcbiAgICApIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQ2FuY2VsbGVkJyxcbiAgICAgICAgdGV4dDogJ09LISBUb3V0IGVzdCBjb21tZSBhdmFudCAhJyxcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnknXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbG91dCAobWVzc2FnZSwgbGFiZWwpIHtcbiAgY29uc29sZS5sb2coJ2NhbGxvdXQnKVxuICB2YXIgdHJhbnNsYXRlID0gbmV3IEFycmF5KClcbiAgdHJhbnNsYXRlWydzdWNjZXNzJ10gPSAnU3VjY8OocydcbiAgdHJhbnNsYXRlWydkYW5nZXInXSA9ICdFcnJldXInXG4gIHRyYW5zbGF0ZVsnd2FybmluZyddID0gJ0F0dGVudGlvbidcblxuICBjb25zdCBodG1sID0gJzxkaXYgY2xhc3M9XCJjYWxsb3V0IGNhbGxvdXQtJyArIGxhYmVsICsgJ1wiIHJvbGU9XCJhbGVydFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJjYWxsb3V0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPGg1PicgKyB0cmFuc2xhdGVbbGFiZWxdICsgJzwvaDU+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgPHA+JyArIG1lc3NhZ2UgKyAnPC9wPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgPC9kaXY+J1xuXG4gICQoJyNtYWluQ29udGVudCcpLnByZXBlbmQoaHRtbCkuc2xpZGVEb3duKCdzbG93JylcbiAgJCgnLmNhbGxvdXQnKS5kZWxheSg1MDAwKS5zbGlkZVVwKCdzbG93Jylcbn1cblxuLy9FZGl0YWJsZVxubGV0IG15RWRpdEluaXRpYWxDb250ZW50ID0gJydcbmxldCB0eXBlID0gJ3RleHQnXG5sZXQgRWRpdE9uTGluZSA9IGZhbHNlXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubXllZGl0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG15RWRpdEluaXRpYWxDb250ZW50ID0gJCh0aGlzKVxuICBsZXQgaHRtbCA9ICcnXG4gIEVkaXRPbkxpbmUgPSB0cnVlXG4gIGlmICh0eXBlb2YgKCQodGhpcykuZGF0YSgndHlwZScpKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0eXBlID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgfVxuXG4gIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvL3RvZG86IEEgZmluYWxpc2VyXG4gIH0gZWxzZSBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT09ICd0ZXh0YXJlYScpIHtcbiAgICBodG1sID0gZ2VuZXJlVGV4dEFyZWEoJCh0aGlzKSlcbiAgfSBlbHNlIHtcbiAgICBodG1sID0gZ2VuZXJlSW5wdXQoJCh0aGlzKSlcbiAgfVxuICAkKHRoaXMpLnJlcGxhY2VXaXRoKGh0bWwpXG4gICQoJyNteWVkaXQtaW5wdXQnKS5mb2N1cygpXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI215ZWRpdC1pbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UpIHtcbiAgICB1cGRhdGVEYXRhKClcbiAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgJCgnI215RWRpdC16b25lJykucmVwbGFjZVdpdGgobXlFZGl0SW5pdGlhbENvbnRlbnQpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbXllZGl0LXZhbGlkZScsIGZ1bmN0aW9uIChlKSB7XG4gICRzdG9wQ2F0Y2hFbnRlciA9IGZhbHNlXG4gIGUucHJldmVudERlZmF1bHQoKVxuICB1cGRhdGVEYXRhKClcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UgJiYgZS53aGljaCA9PT0gMTMpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB1cGRhdGVEYXRhKClcbiAgfVxuXG4gIGlmIChFZGl0T25MaW5lID09PSB0cnVlICYmICRzdG9wQ2F0Y2hFbnRlciA9PT0gZmFsc2UgJiYgZS53aGljaCA9PT0gMjcpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAkKCcjbXlFZGl0LXpvbmUnKS5yZXBsYWNlV2l0aChteUVkaXRJbml0aWFsQ29udGVudClcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNteWVkaXQtYW5udWxlJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxufSlcblxuZnVuY3Rpb24gdXBkYXRlRGF0YSAoKSB7XG4gIGxldCB2YWwgPSAkKCcjbXllZGl0LWlucHV0JykudmFsKClcbiAgJC5hamF4KHtcbiAgICB1cmw6IG15RWRpdEluaXRpYWxDb250ZW50LmF0dHIoJ2hyZWYnKSxcbiAgICBkYXRhOiB7XG4gICAgICBmaWVsZDogbXlFZGl0SW5pdGlhbENvbnRlbnQuZGF0YSgnZmllbGQnKSxcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBteUVkaXRJbml0aWFsQ29udGVudC5odG1sKHZhbClcbiAgICAgICQoJyNteUVkaXQtem9uZScpLnJlcGxhY2VXaXRoKG15RWRpdEluaXRpYWxDb250ZW50KVxuICAgICAgRWRpdE9uTGluZSA9IGZhbHNlXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZW5lcmVUZXh0QXJlYSAoJG9iaikge1xuICAkc3RvcENhdGNoRW50ZXIgPSB0cnVlXG4gIHJldHVybiAnPGRpdiBpZD1cIm15RWRpdC16b25lXCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibXllZGl0LWlucHV0XCI+JyArICRvYmouaHRtbCgpLnRyaW0oKSArICc8L3RleHRhcmVhPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cXG4nICtcbiAgICAnIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mtb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXItb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2Pidcbn1cblxuZnVuY3Rpb24gZ2VuZXJlSW5wdXQgKCRvYmopIHtcblxuICByZXR1cm4gJzxkaXYgaWQ9XCJteUVkaXQtem9uZVwiIGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJteWVkaXQtaW5wdXRcIiB2YWx1ZT1cIicgKyAkb2JqLmh0bWwoKS50cmltKCkgKyAnXCIgPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cXG4nICtcbiAgICAnIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mtb3V0bGluZVwiIGlkPVwibXllZGl0LXZhbGlkZVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXItb3V0bGluZVwiIGlkPVwibXllZGl0LWFubnVsZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2Pidcbn1cblxualF1ZXJ5LmZuLmRhdGFBdHRyID0gZnVuY3Rpb24gKG5hbWUsIGRlZikge1xuICByZXR1cm4gJCh0aGlzKVswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpIHx8IGRlZlxufVxuXG5qUXVlcnkuZm4uaGFzRGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJCh0aGlzKVswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpXG59XG5cbmZ1bmN0aW9uIGRhdGFUb09wdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4WzFdLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFPcHRpb25zIChlbCwgY2FzdExpc3QpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fVxuICAkLmVhY2goJChlbCkuZGF0YSgpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXG4gICAga2V5ID0gZGF0YVRvT3B0aW9uKGtleSlcblxuICAgIC8vIEVzY2FwZSBkYXRhLXByb3ZpZGVcbiAgICBpZiAoa2V5ID09ICdwcm92aWRlJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNhc3RMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHR5cGUgPSBjYXN0TGlzdFtrZXldXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zW2tleV0gPSB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiBvcHRpb25zXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkQ2hhbXBzICgkb2JqKSB7XG4gICRvYmoucmVtb3ZlQ2xhc3MoJ2lzLXZhbGlkJykuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRDaGFtcHMgKCRvYmopIHtcbiAgJG9iai5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLmFkZENsYXNzKCdpcy12YWxpZCcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0ZUNoYW1wcyAoJG9iaikge1xuICAkb2JqLnJlbW92ZUNsYXNzKCdpcy1pbnZhbGlkJykucmVtb3ZlQ2xhc3MoJ2lzLXZhbGlkJylcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy92YWxpZGF0b3ItYnM0LmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjgvMTEvMjAxOSAxOTo0MFxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFZBTElEQVRPUiBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gZ2V0VmFsdWUoJGVsKSB7XG4gICAgcmV0dXJuICRlbC5pcygnW3R5cGU9XCJjaGVja2JveFwiXScpID8gJGVsLnByb3AoJ2NoZWNrZWQnKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICRlbC5pcygnW3R5cGU9XCJyYWRpb1wiXScpICAgID8gISEkKCdbbmFtZT1cIicgKyAkZWwuYXR0cignbmFtZScpICsgJ1wiXTpjaGVja2VkJykubGVuZ3RoIDpcbiAgICAgICAgICAgJGVsLmlzKCdzZWxlY3RbbXVsdGlwbGVdJykgID8gKCRlbC52YWwoKSB8fCBbXSkubGVuZ3RoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbC52YWwoKVxuICB9XG5cbiAgdmFyIFZhbGlkYXRvciA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zICAgID0gb3B0aW9uc1xuICAgIHRoaXMudmFsaWRhdG9ycyA9ICQuZXh0ZW5kKHt9LCBWYWxpZGF0b3IuVkFMSURBVE9SUywgb3B0aW9ucy5jdXN0b20pXG4gICAgdGhpcy4kZWxlbWVudCAgID0gJChlbGVtZW50KVxuICAgIHRoaXMuJGJ0biAgICAgICA9ICQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoJ1tmb3JtPVwiJyArIHRoaXMuJGVsZW1lbnQuYXR0cignaWQnKSArICdcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLiRlbGVtZW50LmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0sIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdJykpXG5cbiAgICB0aGlzLnVwZGF0ZSgpXG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdpbnB1dC5icy52YWxpZGF0b3IgY2hhbmdlLmJzLnZhbGlkYXRvciBmb2N1c291dC5icy52YWxpZGF0b3InLCAkLnByb3h5KHRoaXMub25JbnB1dCwgdGhpcykpXG4gICAgdGhpcy4kZWxlbWVudC5vbignc3VibWl0LmJzLnZhbGlkYXRvcicsICQucHJveHkodGhpcy5vblN1Ym1pdCwgdGhpcykpXG4gICAgdGhpcy4kZWxlbWVudC5vbigncmVzZXQuYnMudmFsaWRhdG9yJywgJC5wcm94eSh0aGlzLnJlc2V0LCB0aGlzKSlcblxuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtbWF0Y2hdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgID0gJCh0aGlzKVxuICAgICAgdmFyIHRhcmdldCA9ICR0aGlzLmF0dHIoJ2RhdGEtbWF0Y2gnKVxuXG4gICAgICAkKHRhcmdldCkub24oJ2lucHV0LmJzLnZhbGlkYXRvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGdldFZhbHVlKCR0aGlzKSAmJiAkdGhpcy50cmlnZ2VyKCdpbnB1dC5icy52YWxpZGF0b3InKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gcnVuIHZhbGlkYXRvcnMgZm9yIGZpZWxkcyB3aXRoIHZhbHVlcywgYnV0IGRvbid0IGNsb2JiZXIgc2VydmVyLXNpZGUgZXJyb3JzXG4gICAgdGhpcy4kaW5wdXRzLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0VmFsdWUoJCh0aGlzKSkgJiYgISQodGhpcykuY2xvc2VzdCgnLmhhcy1lcnJvcicpLmxlbmd0aFxuICAgIH0pLnRyaWdnZXIoJ2ZvY3Vzb3V0JylcblxuICAgIHRoaXMuJGVsZW1lbnQuYXR0cignbm92YWxpZGF0ZScsIHRydWUpIC8vIGRpc2FibGUgYXV0b21hdGljIG5hdGl2ZSB2YWxpZGF0aW9uXG4gIH1cblxuICBWYWxpZGF0b3IuVkVSU0lPTiA9ICcwLjExLjknXG5cbiAgVmFsaWRhdG9yLklOUFVUX1NFTEVDVE9SID0gJzppbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0sIFt0eXBlPVwic3VibWl0XCJdLCBbdHlwZT1cInJlc2V0XCJdLCBidXR0b24pJ1xuXG4gIFZhbGlkYXRvci5GT0NVU19PRkZTRVQgPSAyMFxuXG4gIFZhbGlkYXRvci5ERUZBVUxUUyA9IHtcbiAgICBkZWxheTogNTAwLFxuICAgIGh0bWw6IGZhbHNlLFxuICAgIGRpc2FibGU6IHRydWUsXG4gICAgZm9jdXM6IHRydWUsXG4gICAgY3VzdG9tOiB7fSxcbiAgICBlcnJvcnM6IHtcbiAgICAgIG1hdGNoOiAnRG9lcyBub3QgbWF0Y2gnLFxuICAgICAgbWlubGVuZ3RoOiAnTm90IGxvbmcgZW5vdWdoJ1xuICAgIH0sXG4gICAgZmVlZGJhY2s6IHtcbiAgICAgIHN1Y2Nlc3M6ICdnbHlwaGljb24tb2snLFxuICAgICAgZXJyb3I6ICdnbHlwaGljb24tcmVtb3ZlJ1xuICAgIH1cbiAgfVxuXG4gIFZhbGlkYXRvci5WQUxJREFUT1JTID0ge1xuICAgICduYXRpdmUnOiBmdW5jdGlvbiAoJGVsKSB7XG4gICAgICB2YXIgZWwgPSAkZWxbMF1cbiAgICAgIGlmIChlbC5jaGVja1ZhbGlkaXR5KSB7XG4gICAgICAgIHJldHVybiAhZWwuY2hlY2tWYWxpZGl0eSgpICYmICFlbC52YWxpZGl0eS52YWxpZCAmJiAoZWwudmFsaWRhdGlvbk1lc3NhZ2UgfHwgXCJlcnJvciFcIilcbiAgICAgIH1cbiAgICB9LFxuICAgICdtYXRjaCc6IGZ1bmN0aW9uICgkZWwpIHtcbiAgICAgIHZhciB0YXJnZXQgPSAkZWwuYXR0cignZGF0YS1tYXRjaCcpXG4gICAgICByZXR1cm4gJGVsLnZhbCgpICE9PSAkKHRhcmdldCkudmFsKCkgJiYgVmFsaWRhdG9yLkRFRkFVTFRTLmVycm9ycy5tYXRjaFxuICAgIH0sXG4gICAgJ21pbmxlbmd0aCc6IGZ1bmN0aW9uICgkZWwpIHtcbiAgICAgIHZhciBtaW5sZW5ndGggPSAkZWwuYXR0cignZGF0YS1taW5sZW5ndGgnKVxuICAgICAgcmV0dXJuICRlbC52YWwoKS5sZW5ndGggPCBtaW5sZW5ndGggJiYgVmFsaWRhdG9yLkRFRkFVTFRTLmVycm9ycy5taW5sZW5ndGhcbiAgICB9XG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcblxuICAgIHRoaXMuJGlucHV0cyA9IHRoaXMuJGVsZW1lbnQuZmluZChWYWxpZGF0b3IuSU5QVVRfU0VMRUNUT1IpXG4gICAgICAuYWRkKHRoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtdmFsaWRhdGU9XCJ0cnVlXCJdJykpXG4gICAgICAubm90KHRoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtdmFsaWRhdGU9XCJmYWxzZVwiXScpXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHsgc2VsZi5jbGVhckVycm9ycygkKHRoaXMpKSB9KVxuICAgICAgKVxuXG4gICAgdGhpcy50b2dnbGVTdWJtaXQoKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUub25JbnB1dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHNlbGYgICAgICAgID0gdGhpc1xuICAgIHZhciAkZWwgICAgICAgICA9ICQoZS50YXJnZXQpXG4gICAgdmFyIGRlZmVyRXJyb3JzID0gZS50eXBlICE9PSAnZm9jdXNvdXQnXG5cbiAgICBpZiAoIXRoaXMuJGlucHV0cy5pcygkZWwpKSByZXR1cm5cblxuICAgIHRoaXMudmFsaWRhdGVJbnB1dCgkZWwsIGRlZmVyRXJyb3JzKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYudG9nZ2xlU3VibWl0KClcbiAgICB9KVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZUlucHV0ID0gZnVuY3Rpb24gKCRlbCwgZGVmZXJFcnJvcnMpIHtcbiAgICB2YXIgdmFsdWUgICAgICA9IGdldFZhbHVlKCRlbClcbiAgICB2YXIgcHJldkVycm9ycyA9ICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZXJyb3JzJylcblxuICAgIGlmICgkZWwuaXMoJ1t0eXBlPVwicmFkaW9cIl0nKSkgJGVsID0gdGhpcy4kZWxlbWVudC5maW5kKCdpbnB1dFtuYW1lPVwiJyArICRlbC5hdHRyKCduYW1lJykgKyAnXCJdJylcblxuICAgIHZhciBlID0gJC5FdmVudCgndmFsaWRhdGUuYnMudmFsaWRhdG9yJywge3JlbGF0ZWRUYXJnZXQ6ICRlbFswXX0pXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpXG4gICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgICByZXR1cm4gdGhpcy5ydW5WYWxpZGF0b3JzKCRlbCkuZG9uZShmdW5jdGlvbiAoZXJyb3JzKSB7XG4gICAgICAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmVycm9ycycsIGVycm9ycylcblxuICAgICAgZXJyb3JzLmxlbmd0aFxuICAgICAgICA/IGRlZmVyRXJyb3JzID8gc2VsZi5kZWZlcigkZWwsIHNlbGYuc2hvd0Vycm9ycykgOiBzZWxmLnNob3dFcnJvcnMoJGVsKVxuICAgICAgICA6IHNlbGYuY2xlYXJFcnJvcnMoJGVsKVxuXG4gICAgICBpZiAoIXByZXZFcnJvcnMgfHwgZXJyb3JzLnRvU3RyaW5nKCkgIT09IHByZXZFcnJvcnMudG9TdHJpbmcoKSkge1xuICAgICAgICBlID0gZXJyb3JzLmxlbmd0aFxuICAgICAgICAgID8gJC5FdmVudCgnaW52YWxpZC5icy52YWxpZGF0b3InLCB7cmVsYXRlZFRhcmdldDogJGVsWzBdLCBkZXRhaWw6IGVycm9yc30pXG4gICAgICAgICAgOiAkLkV2ZW50KCd2YWxpZC5icy52YWxpZGF0b3InLCB7cmVsYXRlZFRhcmdldDogJGVsWzBdLCBkZXRhaWw6IHByZXZFcnJvcnN9KVxuXG4gICAgICAgIHNlbGYuJGVsZW1lbnQudHJpZ2dlcihlKVxuICAgICAgfVxuXG4gICAgICBzZWxmLnRvZ2dsZVN1Ym1pdCgpXG5cbiAgICAgIHNlbGYuJGVsZW1lbnQudHJpZ2dlcigkLkV2ZW50KCd2YWxpZGF0ZWQuYnMudmFsaWRhdG9yJywge3JlbGF0ZWRUYXJnZXQ6ICRlbFswXX0pKVxuICAgIH0pXG4gIH1cblxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUucnVuVmFsaWRhdG9ycyA9IGZ1bmN0aW9uICgkZWwpIHtcbiAgICB2YXIgZXJyb3JzICAgPSBbXVxuICAgIHZhciBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKVxuXG4gICAgJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5kZWZlcnJlZCcpICYmICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZGVmZXJyZWQnKS5yZWplY3QoKVxuICAgICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZGVmZXJyZWQnLCBkZWZlcnJlZClcblxuICAgIGZ1bmN0aW9uIGdldFZhbGlkYXRvclNwZWNpZmljRXJyb3Ioa2V5KSB7XG4gICAgICByZXR1cm4gJGVsLmF0dHIoJ2RhdGEtJyArIGtleSArICctZXJyb3InKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZhbGlkaXR5U3RhdGVFcnJvcigpIHtcbiAgICAgIHZhciB2YWxpZGl0eSA9ICRlbFswXS52YWxpZGl0eVxuICAgICAgcmV0dXJuIHZhbGlkaXR5LnR5cGVNaXNtYXRjaCAgICA/ICRlbC5hdHRyKCdkYXRhLXR5cGUtZXJyb3InKVxuICAgICAgICAgICA6IHZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCA/ICRlbC5hdHRyKCdkYXRhLXBhdHRlcm4tZXJyb3InKVxuICAgICAgICAgICA6IHZhbGlkaXR5LnN0ZXBNaXNtYXRjaCAgICA/ICRlbC5hdHRyKCdkYXRhLXN0ZXAtZXJyb3InKVxuICAgICAgICAgICA6IHZhbGlkaXR5LnJhbmdlT3ZlcmZsb3cgICA/ICRlbC5hdHRyKCdkYXRhLW1heC1lcnJvcicpXG4gICAgICAgICAgIDogdmFsaWRpdHkucmFuZ2VVbmRlcmZsb3cgID8gJGVsLmF0dHIoJ2RhdGEtbWluLWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS52YWx1ZU1pc3NpbmcgICAgPyAkZWwuYXR0cignZGF0YS1yZXF1aXJlZC1lcnJvcicpXG4gICAgICAgICAgIDogICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEdlbmVyaWNFcnJvcigpIHtcbiAgICAgIHJldHVybiAkZWwuYXR0cignZGF0YS1lcnJvcicpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKGtleSkge1xuICAgICAgcmV0dXJuIGdldFZhbGlkYXRvclNwZWNpZmljRXJyb3Ioa2V5KVxuICAgICAgICAgIHx8IGdldFZhbGlkaXR5U3RhdGVFcnJvcigpXG4gICAgICAgICAgfHwgZ2V0R2VuZXJpY0Vycm9yKClcbiAgICB9XG5cbiAgICAkLmVhY2godGhpcy52YWxpZGF0b3JzLCAkLnByb3h5KGZ1bmN0aW9uIChrZXksIHZhbGlkYXRvcikge1xuICAgICAgdmFyIGVycm9yID0gbnVsbFxuICAgICAgaWYgKChnZXRWYWx1ZSgkZWwpIHx8ICRlbC5hdHRyKCdyZXF1aXJlZCcpKSAmJlxuICAgICAgICAgICgkZWwuYXR0cignZGF0YS0nICsga2V5KSAhPT0gdW5kZWZpbmVkIHx8IGtleSA9PSAnbmF0aXZlJykgJiZcbiAgICAgICAgICAoZXJyb3IgPSB2YWxpZGF0b3IuY2FsbCh0aGlzLCAkZWwpKSkge1xuICAgICAgICAgZXJyb3IgPSBnZXRFcnJvck1lc3NhZ2Uoa2V5KSB8fCBlcnJvclxuICAgICAgICAhfmVycm9ycy5pbmRleE9mKGVycm9yKSAmJiBlcnJvcnMucHVzaChlcnJvcilcbiAgICAgIH1cbiAgICB9LCB0aGlzKSlcblxuICAgIGlmICghZXJyb3JzLmxlbmd0aCAmJiBnZXRWYWx1ZSgkZWwpICYmICRlbC5hdHRyKCdkYXRhLXJlbW90ZScpKSB7XG4gICAgICB0aGlzLmRlZmVyKCRlbCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHt9XG4gICAgICAgIGRhdGFbJGVsLmF0dHIoJ25hbWUnKV0gPSBnZXRWYWx1ZSgkZWwpXG4gICAgICAgICQuZ2V0KCRlbC5hdHRyKCdkYXRhLXJlbW90ZScpLCBkYXRhKVxuICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3IpIHsgZXJyb3JzLnB1c2goZ2V0RXJyb3JNZXNzYWdlKCdyZW1vdGUnKSB8fCBlcnJvcikgfSlcbiAgICAgICAgICAuYWx3YXlzKGZ1bmN0aW9uICgpIHsgZGVmZXJyZWQucmVzb2x2ZShlcnJvcnMpfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGRlZmVycmVkLnJlc29sdmUoZXJyb3JzKVxuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2UoKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcblxuICAgICQud2hlbih0aGlzLiRpbnB1dHMubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIHNlbGYudmFsaWRhdGVJbnB1dCgkKHRoaXMpLCBmYWxzZSlcbiAgICB9KSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLnRvZ2dsZVN1Ym1pdCgpXG4gICAgICBzZWxmLmZvY3VzRXJyb3IoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5mb2N1c0Vycm9yID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmZvY3VzKSByZXR1cm5cblxuICAgIHZhciAkaW5wdXQgPSB0aGlzLiRlbGVtZW50LmZpbmQoXCIuaGFzLWVycm9yOmZpcnN0IDppbnB1dFwiKVxuICAgIGlmICgkaW5wdXQubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICRpbnB1dC5vZmZzZXQoKS50b3AgLSBWYWxpZGF0b3IuRk9DVVNfT0ZGU0VUfSwgMjUwKVxuICAgICRpbnB1dC5mb2N1cygpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnNob3dFcnJvcnMgPSBmdW5jdGlvbiAoJGVsKSB7XG4gICAgdmFyIG1ldGhvZCA9IHRoaXMub3B0aW9ucy5odG1sID8gJ2h0bWwnIDogJ3RleHQnXG4gICAgdmFyIGVycm9ycyA9ICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZXJyb3JzJylcbiAgICB2YXIgJGdyb3VwID0gJGVsLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJylcbiAgICB2YXIgJGJsb2NrID0gJGdyb3VwLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcbiAgICB2YXIgJGZlZWRiYWNrID0gJGdyb3VwLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcblxuICAgIGlmICghZXJyb3JzLmxlbmd0aCkgcmV0dXJuXG5cbiAgICAkZWwuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcblxuICAgIGVycm9ycyA9ICQoJzx1bC8+JylcbiAgICAgIC5hZGRDbGFzcygnbGlzdC11bnN0eWxlZCcpXG4gICAgICAuYXBwZW5kKCQubWFwKGVycm9ycywgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiAkKCc8bGkvPicpW21ldGhvZF0oZXJyb3IpIH0pKVxuXG4gICAgJGJsb2NrLmRhdGEoJ2JzLnZhbGlkYXRvci5vcmlnaW5hbENvbnRlbnQnKSA9PT0gdW5kZWZpbmVkICYmICRibG9jay5kYXRhKCdicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50JywgJGJsb2NrLmh0bWwoKSlcbiAgICAkYmxvY2suZW1wdHkoKS5hcHBlbmQoZXJyb3JzKVxuICAgICRncm91cC5hZGRDbGFzcygnaGFzLWVycm9yIGhhcy1kYW5nZXInKVxuXG4gICAgJGdyb3VwLmhhc0NsYXNzKCdoYXMtZmVlZGJhY2snKVxuICAgICAgJiYgJGZlZWRiYWNrLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5zdWNjZXNzKVxuICAgICAgJiYgJGZlZWRiYWNrLmFkZENsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5lcnJvcilcbiAgICAgICYmICRncm91cC5yZW1vdmVDbGFzcygnaGFzLXN1Y2Nlc3MnKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5jbGVhckVycm9ycyA9IGZ1bmN0aW9uICgkZWwpIHtcbiAgICB2YXIgJGdyb3VwID0gJGVsLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJylcbiAgICB2YXIgJGJsb2NrID0gJGdyb3VwLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcbiAgICB2YXIgJGZlZWRiYWNrID0gJGdyb3VwLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcblxuICAgICRlbC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuXG4gICAgJGJsb2NrLmh0bWwoJGJsb2NrLmRhdGEoJ2JzLnZhbGlkYXRvci5vcmlnaW5hbENvbnRlbnQnKSlcbiAgICAkZ3JvdXAucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZGFuZ2VyIGhhcy1zdWNjZXNzJylcblxuICAgICRncm91cC5oYXNDbGFzcygnaGFzLWZlZWRiYWNrJylcbiAgICAgICYmICRmZWVkYmFjay5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suZXJyb3IpXG4gICAgICAmJiAkZmVlZGJhY2sucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLnN1Y2Nlc3MpXG4gICAgICAmJiBnZXRWYWx1ZSgkZWwpXG4gICAgICAmJiAkZmVlZGJhY2suYWRkQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLnN1Y2Nlc3MpXG4gICAgICAmJiAkZ3JvdXAuYWRkQ2xhc3MoJ2hhcy1zdWNjZXNzJylcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuaGFzRXJyb3JzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGZpZWxkRXJyb3JzKCkge1xuICAgICAgcmV0dXJuICEhKCQodGhpcykuZGF0YSgnYnMudmFsaWRhdG9yLmVycm9ycycpIHx8IFtdKS5sZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gISF0aGlzLiRpbnB1dHMuZmlsdGVyKGZpZWxkRXJyb3JzKS5sZW5ndGhcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuaXNJbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGZpZWxkSW5jb21wbGV0ZSgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldFZhbHVlKCQodGhpcykpXG4gICAgICByZXR1cm4gISh0eXBlb2YgdmFsdWUgPT0gXCJzdHJpbmdcIiA/ICQudHJpbSh2YWx1ZSkgOiB2YWx1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gISF0aGlzLiRpbnB1dHMuZmlsdGVyKCdbcmVxdWlyZWRdJykuZmlsdGVyKGZpZWxkSW5jb21wbGV0ZSkubGVuZ3RoXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICB0aGlzLnZhbGlkYXRlKClcbiAgICBpZiAodGhpcy5pc0luY29tcGxldGUoKSB8fCB0aGlzLmhhc0Vycm9ycygpKSBlLnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUudG9nZ2xlU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmRpc2FibGUpIHJldHVyblxuICAgIHRoaXMuJGJ0bi50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCB0aGlzLmlzSW5jb21wbGV0ZSgpIHx8IHRoaXMuaGFzRXJyb3JzKCkpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmRlZmVyID0gZnVuY3Rpb24gKCRlbCwgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9ICQucHJveHkoY2FsbGJhY2ssIHRoaXMsICRlbClcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kZWxheSkgcmV0dXJuIGNhbGxiYWNrKClcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KCRlbC5kYXRhKCdicy52YWxpZGF0b3IudGltZW91dCcpKVxuICAgICRlbC5kYXRhKCdicy52YWxpZGF0b3IudGltZW91dCcsIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCB0aGlzLm9wdGlvbnMuZGVsYXkpKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcbiAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suZXJyb3IpXG4gICAgICAucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLnN1Y2Nlc3MpXG5cbiAgICB0aGlzLiRpbnB1dHNcbiAgICAgIC5yZW1vdmVEYXRhKFsnYnMudmFsaWRhdG9yLmVycm9ycycsICdicy52YWxpZGF0b3IuZGVmZXJyZWQnXSlcbiAgICAgIC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpXG4gICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgICAgdmFyIHRpbWVvdXQgPSAkdGhpcy5kYXRhKCdicy52YWxpZGF0b3IudGltZW91dCcpXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dCkgJiYgJHRoaXMucmVtb3ZlRGF0YSgnYnMudmFsaWRhdG9yLnRpbWVvdXQnKVxuICAgICAgfSlcblxuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgIHZhciBvcmlnaW5hbENvbnRlbnQgPSAkdGhpcy5kYXRhKCdicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50JylcblxuICAgICAgICAkdGhpc1xuICAgICAgICAgIC5yZW1vdmVEYXRhKCdicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50JylcbiAgICAgICAgICAuaHRtbChvcmlnaW5hbENvbnRlbnQpXG4gICAgICB9KVxuXG4gICAgdGhpcy4kYnRuLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpXG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5oYXMtZXJyb3IsIC5oYXMtZGFuZ2VyLCAuaGFzLXN1Y2Nlc3MnKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yIGhhcy1kYW5nZXIgaGFzLXN1Y2Nlc3MnKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc2V0KClcblxuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5yZW1vdmVBdHRyKCdub3ZhbGlkYXRlJylcbiAgICAgIC5yZW1vdmVEYXRhKCdicy52YWxpZGF0b3InKVxuICAgICAgLm9mZignLmJzLnZhbGlkYXRvcicpXG5cbiAgICB0aGlzLiRpbnB1dHNcbiAgICAgIC5vZmYoJy5icy52YWxpZGF0b3InKVxuXG4gICAgdGhpcy5vcHRpb25zICAgID0gbnVsbFxuICAgIHRoaXMudmFsaWRhdG9ycyA9IG51bGxcbiAgICB0aGlzLiRlbGVtZW50ICAgPSBudWxsXG4gICAgdGhpcy4kYnRuICAgICAgID0gbnVsbFxuICAgIHRoaXMuJGlucHV0cyAgICA9IG51bGxcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBWQUxJREFUT1IgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sIFZhbGlkYXRvci5ERUZBVUxUUywgJHRoaXMuZGF0YSgpLCB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvbilcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMudmFsaWRhdG9yJylcblxuICAgICAgaWYgKCFkYXRhICYmIG9wdGlvbiA9PSAnZGVzdHJveScpIHJldHVyblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy52YWxpZGF0b3InLCAoZGF0YSA9IG5ldyBWYWxpZGF0b3IodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXSgpXG4gICAgfSlcbiAgfVxuXG4gIHZhciBvbGQgPSAkLmZuLnZhbGlkYXRvclxuXG4gICQuZm4udmFsaWRhdG9yICAgICAgICAgICAgID0gUGx1Z2luXG4gICQuZm4udmFsaWRhdG9yLkNvbnN0cnVjdG9yID0gVmFsaWRhdG9yXG5cblxuICAvLyBWQUxJREFUT1IgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi52YWxpZGF0b3Iubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLnZhbGlkYXRvciA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIFZBTElEQVRPUiBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PT09PT1cblxuICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnZm9ybVtkYXRhLXRvZ2dsZT1cInZhbGlkYXRvclwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRmb3JtID0gJCh0aGlzKVxuICAgICAgUGx1Z2luLmNhbGwoJGZvcm0sICRmb3JtLmRhdGEoKSlcbiAgICB9KVxuICB9KVxuXG59KGpRdWVyeSk7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2pzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLm1pbi5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE3LzA4LzIwMjAgMTQ6MjBcblxuLyohXG4gKiBEYXRlcGlja2VyIGZvciBCb290c3RyYXAgdjEuOC4wIChodHRwczovL2dpdGh1Yi5jb20vdXhzb2x1dGlvbnMvYm9vdHN0cmFwLWRhdGVwaWNrZXIpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlIHYyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMClcbiAqL1xuXG4hZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sYSk6YShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwianF1ZXJ5XCIpOmpRdWVyeSl9KGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYygpe3JldHVybiBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShEYXRlLGFyZ3VtZW50cykpfWZ1bmN0aW9uIGQoKXt2YXIgYT1uZXcgRGF0ZTtyZXR1cm4gYyhhLmdldEZ1bGxZZWFyKCksYS5nZXRNb250aCgpLGEuZ2V0RGF0ZSgpKX1mdW5jdGlvbiBlKGEsYil7cmV0dXJuIGEuZ2V0VVRDRnVsbFllYXIoKT09PWIuZ2V0VVRDRnVsbFllYXIoKSYmYS5nZXRVVENNb250aCgpPT09Yi5nZXRVVENNb250aCgpJiZhLmdldFVUQ0RhdGUoKT09PWIuZ2V0VVRDRGF0ZSgpfWZ1bmN0aW9uIGYoYyxkKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZCE9PWImJmEuZm4uZGF0ZXBpY2tlci5kZXByZWNhdGVkKGQpLHRoaXNbY10uYXBwbHkodGhpcyxhcmd1bWVudHMpfX1mdW5jdGlvbiBnKGEpe3JldHVybiBhJiYhaXNOYU4oYS5nZXRUaW1lKCkpfWZ1bmN0aW9uIGgoYixjKXtmdW5jdGlvbiBkKGEsYil7cmV0dXJuIGIudG9Mb3dlckNhc2UoKX12YXIgZSxmPWEoYikuZGF0YSgpLGc9e30saD1uZXcgUmVnRXhwKFwiXlwiK2MudG9Mb3dlckNhc2UoKStcIihbQS1aXSlcIik7Yz1uZXcgUmVnRXhwKFwiXlwiK2MudG9Mb3dlckNhc2UoKSk7Zm9yKHZhciBpIGluIGYpYy50ZXN0KGkpJiYoZT1pLnJlcGxhY2UoaCxkKSxnW2VdPWZbaV0pO3JldHVybiBnfWZ1bmN0aW9uIGkoYil7dmFyIGM9e307aWYocVtiXXx8KGI9Yi5zcGxpdChcIi1cIilbMF0scVtiXSkpe3ZhciBkPXFbYl07cmV0dXJuIGEuZWFjaChwLGZ1bmN0aW9uKGEsYil7YiBpbiBkJiYoY1tiXT1kW2JdKX0pLGN9fXZhciBqPWZ1bmN0aW9uKCl7dmFyIGI9e2dldDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5zbGljZShhKVswXX0sY29udGFpbnM6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPWEmJmEudmFsdWVPZigpLGM9MCxkPXRoaXMubGVuZ3RoO2M8ZDtjKyspaWYoMDw9dGhpc1tjXS52YWx1ZU9mKCktYiYmdGhpc1tjXS52YWx1ZU9mKCktYjw4NjRlNSlyZXR1cm4gYztyZXR1cm4tMX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3RoaXMuc3BsaWNlKGEsMSl9LHJlcGxhY2U6ZnVuY3Rpb24oYil7YiYmKGEuaXNBcnJheShiKXx8KGI9W2JdKSx0aGlzLmNsZWFyKCksdGhpcy5wdXNoLmFwcGx5KHRoaXMsYikpfSxjbGVhcjpmdW5jdGlvbigpe3RoaXMubGVuZ3RoPTB9LGNvcHk6ZnVuY3Rpb24oKXt2YXIgYT1uZXcgajtyZXR1cm4gYS5yZXBsYWNlKHRoaXMpLGF9fTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1bXTtyZXR1cm4gYy5wdXNoLmFwcGx5KGMsYXJndW1lbnRzKSxhLmV4dGVuZChjLGIpLGN9fSgpLGs9ZnVuY3Rpb24oYixjKXthLmRhdGEoYixcImRhdGVwaWNrZXJcIix0aGlzKSx0aGlzLl9wcm9jZXNzX29wdGlvbnMoYyksdGhpcy5kYXRlcz1uZXcgaix0aGlzLnZpZXdEYXRlPXRoaXMuby5kZWZhdWx0Vmlld0RhdGUsdGhpcy5mb2N1c0RhdGU9bnVsbCx0aGlzLmVsZW1lbnQ9YShiKSx0aGlzLmlzSW5wdXQ9dGhpcy5lbGVtZW50LmlzKFwiaW5wdXRcIiksdGhpcy5pbnB1dEZpZWxkPXRoaXMuaXNJbnB1dD90aGlzLmVsZW1lbnQ6dGhpcy5lbGVtZW50LmZpbmQoXCJpbnB1dFwiKSx0aGlzLmNvbXBvbmVudD0hIXRoaXMuZWxlbWVudC5oYXNDbGFzcyhcImRhdGVcIikmJnRoaXMuZWxlbWVudC5maW5kKFwiLmFkZC1vbiwgLmlucHV0LWdyb3VwLWFkZG9uLCAuYnRuXCIpLHRoaXMuY29tcG9uZW50JiYwPT09dGhpcy5jb21wb25lbnQubGVuZ3RoJiYodGhpcy5jb21wb25lbnQ9ITEpLHRoaXMuaXNJbmxpbmU9IXRoaXMuY29tcG9uZW50JiZ0aGlzLmVsZW1lbnQuaXMoXCJkaXZcIiksdGhpcy5waWNrZXI9YShyLnRlbXBsYXRlKSx0aGlzLl9jaGVja190ZW1wbGF0ZSh0aGlzLm8udGVtcGxhdGVzLmxlZnRBcnJvdykmJnRoaXMucGlja2VyLmZpbmQoXCIucHJldlwiKS5odG1sKHRoaXMuby50ZW1wbGF0ZXMubGVmdEFycm93KSx0aGlzLl9jaGVja190ZW1wbGF0ZSh0aGlzLm8udGVtcGxhdGVzLnJpZ2h0QXJyb3cpJiZ0aGlzLnBpY2tlci5maW5kKFwiLm5leHRcIikuaHRtbCh0aGlzLm8udGVtcGxhdGVzLnJpZ2h0QXJyb3cpLHRoaXMuX2J1aWxkRXZlbnRzKCksdGhpcy5fYXR0YWNoRXZlbnRzKCksdGhpcy5pc0lubGluZT90aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItaW5saW5lXCIpLmFwcGVuZFRvKHRoaXMuZWxlbWVudCk6dGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLWRyb3Bkb3duIGRyb3Bkb3duLW1lbnVcIiksdGhpcy5vLnJ0bCYmdGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLXJ0bFwiKSx0aGlzLm8uY2FsZW5kYXJXZWVrcyYmdGhpcy5waWNrZXIuZmluZChcIi5kYXRlcGlja2VyLWRheXMgLmRhdGVwaWNrZXItc3dpdGNoLCB0aGVhZCAuZGF0ZXBpY2tlci10aXRsZSwgdGZvb3QgLnRvZGF5LCB0Zm9vdCAuY2xlYXJcIikuYXR0cihcImNvbHNwYW5cIixmdW5jdGlvbihhLGIpe3JldHVybiBOdW1iZXIoYikrMX0pLHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7c3RhcnREYXRlOnRoaXMuX28uc3RhcnREYXRlLGVuZERhdGU6dGhpcy5fby5lbmREYXRlLGRheXNPZldlZWtEaXNhYmxlZDp0aGlzLm8uZGF5c09mV2Vla0Rpc2FibGVkLGRheXNPZldlZWtIaWdobGlnaHRlZDp0aGlzLm8uZGF5c09mV2Vla0hpZ2hsaWdodGVkLGRhdGVzRGlzYWJsZWQ6dGhpcy5vLmRhdGVzRGlzYWJsZWR9KSx0aGlzLl9hbGxvd191cGRhdGU9ITEsdGhpcy5zZXRWaWV3TW9kZSh0aGlzLm8uc3RhcnRWaWV3KSx0aGlzLl9hbGxvd191cGRhdGU9ITAsdGhpcy5maWxsRG93KCksdGhpcy5maWxsTW9udGhzKCksdGhpcy51cGRhdGUoKSx0aGlzLmlzSW5saW5lJiZ0aGlzLnNob3coKX07ay5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmssX3Jlc29sdmVWaWV3TmFtZTpmdW5jdGlvbihiKXtyZXR1cm4gYS5lYWNoKHIudmlld01vZGVzLGZ1bmN0aW9uKGMsZCl7aWYoYj09PWN8fGEuaW5BcnJheShiLGQubmFtZXMpIT09LTEpcmV0dXJuIGI9YywhMX0pLGJ9LF9yZXNvbHZlRGF5c09mV2VlazpmdW5jdGlvbihiKXtyZXR1cm4gYS5pc0FycmF5KGIpfHwoYj1iLnNwbGl0KC9bLFxcc10qLykpLGEubWFwKGIsTnVtYmVyKX0sX2NoZWNrX3RlbXBsYXRlOmZ1bmN0aW9uKGMpe3RyeXtpZihjPT09Ynx8XCJcIj09PWMpcmV0dXJuITE7aWYoKGMubWF0Y2goL1s8Pl0vZyl8fFtdKS5sZW5ndGg8PTApcmV0dXJuITA7dmFyIGQ9YShjKTtyZXR1cm4gZC5sZW5ndGg+MH1jYXRjaChhKXtyZXR1cm4hMX19LF9wcm9jZXNzX29wdGlvbnM6ZnVuY3Rpb24oYil7dGhpcy5fbz1hLmV4dGVuZCh7fSx0aGlzLl9vLGIpO3ZhciBlPXRoaXMubz1hLmV4dGVuZCh7fSx0aGlzLl9vKSxmPWUubGFuZ3VhZ2U7cVtmXXx8KGY9Zi5zcGxpdChcIi1cIilbMF0scVtmXXx8KGY9by5sYW5ndWFnZSkpLGUubGFuZ3VhZ2U9ZixlLnN0YXJ0Vmlldz10aGlzLl9yZXNvbHZlVmlld05hbWUoZS5zdGFydFZpZXcpLGUubWluVmlld01vZGU9dGhpcy5fcmVzb2x2ZVZpZXdOYW1lKGUubWluVmlld01vZGUpLGUubWF4Vmlld01vZGU9dGhpcy5fcmVzb2x2ZVZpZXdOYW1lKGUubWF4Vmlld01vZGUpLGUuc3RhcnRWaWV3PU1hdGgubWF4KHRoaXMuby5taW5WaWV3TW9kZSxNYXRoLm1pbih0aGlzLm8ubWF4Vmlld01vZGUsZS5zdGFydFZpZXcpKSxlLm11bHRpZGF0ZSE9PSEwJiYoZS5tdWx0aWRhdGU9TnVtYmVyKGUubXVsdGlkYXRlKXx8ITEsZS5tdWx0aWRhdGUhPT0hMSYmKGUubXVsdGlkYXRlPU1hdGgubWF4KDAsZS5tdWx0aWRhdGUpKSksZS5tdWx0aWRhdGVTZXBhcmF0b3I9U3RyaW5nKGUubXVsdGlkYXRlU2VwYXJhdG9yKSxlLndlZWtTdGFydCU9NyxlLndlZWtFbmQ9KGUud2Vla1N0YXJ0KzYpJTc7dmFyIGc9ci5wYXJzZUZvcm1hdChlLmZvcm1hdCk7ZS5zdGFydERhdGUhPT0tKDEvMCkmJihlLnN0YXJ0RGF0ZT9lLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIERhdGU/ZS5zdGFydERhdGU9dGhpcy5fbG9jYWxfdG9fdXRjKHRoaXMuX3plcm9fdGltZShlLnN0YXJ0RGF0ZSkpOmUuc3RhcnREYXRlPXIucGFyc2VEYXRlKGUuc3RhcnREYXRlLGcsZS5sYW5ndWFnZSxlLmFzc3VtZU5lYXJieVllYXIpOmUuc3RhcnREYXRlPS0oMS8wKSksZS5lbmREYXRlIT09MS8wJiYoZS5lbmREYXRlP2UuZW5kRGF0ZSBpbnN0YW5jZW9mIERhdGU/ZS5lbmREYXRlPXRoaXMuX2xvY2FsX3RvX3V0Yyh0aGlzLl96ZXJvX3RpbWUoZS5lbmREYXRlKSk6ZS5lbmREYXRlPXIucGFyc2VEYXRlKGUuZW5kRGF0ZSxnLGUubGFuZ3VhZ2UsZS5hc3N1bWVOZWFyYnlZZWFyKTplLmVuZERhdGU9MS8wKSxlLmRheXNPZldlZWtEaXNhYmxlZD10aGlzLl9yZXNvbHZlRGF5c09mV2VlayhlLmRheXNPZldlZWtEaXNhYmxlZHx8W10pLGUuZGF5c09mV2Vla0hpZ2hsaWdodGVkPXRoaXMuX3Jlc29sdmVEYXlzT2ZXZWVrKGUuZGF5c09mV2Vla0hpZ2hsaWdodGVkfHxbXSksZS5kYXRlc0Rpc2FibGVkPWUuZGF0ZXNEaXNhYmxlZHx8W10sYS5pc0FycmF5KGUuZGF0ZXNEaXNhYmxlZCl8fChlLmRhdGVzRGlzYWJsZWQ9ZS5kYXRlc0Rpc2FibGVkLnNwbGl0KFwiLFwiKSksZS5kYXRlc0Rpc2FibGVkPWEubWFwKGUuZGF0ZXNEaXNhYmxlZCxmdW5jdGlvbihhKXtyZXR1cm4gci5wYXJzZURhdGUoYSxnLGUubGFuZ3VhZ2UsZS5hc3N1bWVOZWFyYnlZZWFyKX0pO3ZhciBoPVN0cmluZyhlLm9yaWVudGF0aW9uKS50b0xvd2VyQ2FzZSgpLnNwbGl0KC9cXHMrL2cpLGk9ZS5vcmllbnRhdGlvbi50b0xvd2VyQ2FzZSgpO2lmKGg9YS5ncmVwKGgsZnVuY3Rpb24oYSl7cmV0dXJuL15hdXRvfGxlZnR8cmlnaHR8dG9wfGJvdHRvbSQvLnRlc3QoYSl9KSxlLm9yaWVudGF0aW9uPXt4OlwiYXV0b1wiLHk6XCJhdXRvXCJ9LGkmJlwiYXV0b1wiIT09aSlpZigxPT09aC5sZW5ndGgpc3dpdGNoKGhbMF0pe2Nhc2VcInRvcFwiOmNhc2VcImJvdHRvbVwiOmUub3JpZW50YXRpb24ueT1oWzBdO2JyZWFrO2Nhc2VcImxlZnRcIjpjYXNlXCJyaWdodFwiOmUub3JpZW50YXRpb24ueD1oWzBdfWVsc2UgaT1hLmdyZXAoaCxmdW5jdGlvbihhKXtyZXR1cm4vXmxlZnR8cmlnaHQkLy50ZXN0KGEpfSksZS5vcmllbnRhdGlvbi54PWlbMF18fFwiYXV0b1wiLGk9YS5ncmVwKGgsZnVuY3Rpb24oYSl7cmV0dXJuL150b3B8Ym90dG9tJC8udGVzdChhKX0pLGUub3JpZW50YXRpb24ueT1pWzBdfHxcImF1dG9cIjtlbHNlO2lmKGUuZGVmYXVsdFZpZXdEYXRlIGluc3RhbmNlb2YgRGF0ZXx8XCJzdHJpbmdcIj09dHlwZW9mIGUuZGVmYXVsdFZpZXdEYXRlKWUuZGVmYXVsdFZpZXdEYXRlPXIucGFyc2VEYXRlKGUuZGVmYXVsdFZpZXdEYXRlLGcsZS5sYW5ndWFnZSxlLmFzc3VtZU5lYXJieVllYXIpO2Vsc2UgaWYoZS5kZWZhdWx0Vmlld0RhdGUpe3ZhciBqPWUuZGVmYXVsdFZpZXdEYXRlLnllYXJ8fChuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKSxrPWUuZGVmYXVsdFZpZXdEYXRlLm1vbnRofHwwLGw9ZS5kZWZhdWx0Vmlld0RhdGUuZGF5fHwxO2UuZGVmYXVsdFZpZXdEYXRlPWMoaixrLGwpfWVsc2UgZS5kZWZhdWx0Vmlld0RhdGU9ZCgpfSxfZXZlbnRzOltdLF9zZWNvbmRhcnlFdmVudHM6W10sX2FwcGx5RXZlbnRzOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkLGUsZj0wO2Y8YS5sZW5ndGg7ZisrKWM9YVtmXVswXSwyPT09YVtmXS5sZW5ndGg/KGQ9YixlPWFbZl1bMV0pOjM9PT1hW2ZdLmxlbmd0aCYmKGQ9YVtmXVsxXSxlPWFbZl1bMl0pLGMub24oZSxkKX0sX3VuYXBwbHlFdmVudHM6ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQsZSxmPTA7ZjxhLmxlbmd0aDtmKyspYz1hW2ZdWzBdLDI9PT1hW2ZdLmxlbmd0aD8oZT1iLGQ9YVtmXVsxXSk6Mz09PWFbZl0ubGVuZ3RoJiYoZT1hW2ZdWzFdLGQ9YVtmXVsyXSksYy5vZmYoZCxlKX0sX2J1aWxkRXZlbnRzOmZ1bmN0aW9uKCl7dmFyIGI9e2tleXVwOmEucHJveHkoZnVuY3Rpb24oYil7YS5pbkFycmF5KGIua2V5Q29kZSxbMjcsMzcsMzksMzgsNDAsMzIsMTMsOV0pPT09LTEmJnRoaXMudXBkYXRlKCl9LHRoaXMpLGtleWRvd246YS5wcm94eSh0aGlzLmtleWRvd24sdGhpcykscGFzdGU6YS5wcm94eSh0aGlzLnBhc3RlLHRoaXMpfTt0aGlzLm8uc2hvd09uRm9jdXM9PT0hMCYmKGIuZm9jdXM9YS5wcm94eSh0aGlzLnNob3csdGhpcykpLHRoaXMuaXNJbnB1dD90aGlzLl9ldmVudHM9W1t0aGlzLmVsZW1lbnQsYl1dOnRoaXMuY29tcG9uZW50JiZ0aGlzLmlucHV0RmllbGQubGVuZ3RoP3RoaXMuX2V2ZW50cz1bW3RoaXMuaW5wdXRGaWVsZCxiXSxbdGhpcy5jb21wb25lbnQse2NsaWNrOmEucHJveHkodGhpcy5zaG93LHRoaXMpfV1dOnRoaXMuX2V2ZW50cz1bW3RoaXMuZWxlbWVudCx7Y2xpY2s6YS5wcm94eSh0aGlzLnNob3csdGhpcyksa2V5ZG93bjphLnByb3h5KHRoaXMua2V5ZG93bix0aGlzKX1dXSx0aGlzLl9ldmVudHMucHVzaChbdGhpcy5lbGVtZW50LFwiKlwiLHtibHVyOmEucHJveHkoZnVuY3Rpb24oYSl7dGhpcy5fZm9jdXNlZF9mcm9tPWEudGFyZ2V0fSx0aGlzKX1dLFt0aGlzLmVsZW1lbnQse2JsdXI6YS5wcm94eShmdW5jdGlvbihhKXt0aGlzLl9mb2N1c2VkX2Zyb209YS50YXJnZXR9LHRoaXMpfV0pLHRoaXMuby5pbW1lZGlhdGVVcGRhdGVzJiZ0aGlzLl9ldmVudHMucHVzaChbdGhpcy5lbGVtZW50LHtcImNoYW5nZVllYXIgY2hhbmdlTW9udGhcIjphLnByb3h5KGZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlKGEuZGF0ZSl9LHRoaXMpfV0pLHRoaXMuX3NlY29uZGFyeUV2ZW50cz1bW3RoaXMucGlja2VyLHtjbGljazphLnByb3h5KHRoaXMuY2xpY2ssdGhpcyl9XSxbdGhpcy5waWNrZXIsXCIucHJldiwgLm5leHRcIix7Y2xpY2s6YS5wcm94eSh0aGlzLm5hdkFycm93c0NsaWNrLHRoaXMpfV0sW3RoaXMucGlja2VyLFwiLmRheTpub3QoLmRpc2FibGVkKVwiLHtjbGljazphLnByb3h5KHRoaXMuZGF5Q2VsbENsaWNrLHRoaXMpfV0sW2Eod2luZG93KSx7cmVzaXplOmEucHJveHkodGhpcy5wbGFjZSx0aGlzKX1dLFthKGRvY3VtZW50KSx7XCJtb3VzZWRvd24gdG91Y2hzdGFydFwiOmEucHJveHkoZnVuY3Rpb24oYSl7dGhpcy5lbGVtZW50LmlzKGEudGFyZ2V0KXx8dGhpcy5lbGVtZW50LmZpbmQoYS50YXJnZXQpLmxlbmd0aHx8dGhpcy5waWNrZXIuaXMoYS50YXJnZXQpfHx0aGlzLnBpY2tlci5maW5kKGEudGFyZ2V0KS5sZW5ndGh8fHRoaXMuaXNJbmxpbmV8fHRoaXMuaGlkZSgpfSx0aGlzKX1dXX0sX2F0dGFjaEV2ZW50czpmdW5jdGlvbigpe3RoaXMuX2RldGFjaEV2ZW50cygpLHRoaXMuX2FwcGx5RXZlbnRzKHRoaXMuX2V2ZW50cyl9LF9kZXRhY2hFdmVudHM6ZnVuY3Rpb24oKXt0aGlzLl91bmFwcGx5RXZlbnRzKHRoaXMuX2V2ZW50cyl9LF9hdHRhY2hTZWNvbmRhcnlFdmVudHM6ZnVuY3Rpb24oKXt0aGlzLl9kZXRhY2hTZWNvbmRhcnlFdmVudHMoKSx0aGlzLl9hcHBseUV2ZW50cyh0aGlzLl9zZWNvbmRhcnlFdmVudHMpfSxfZGV0YWNoU2Vjb25kYXJ5RXZlbnRzOmZ1bmN0aW9uKCl7dGhpcy5fdW5hcHBseUV2ZW50cyh0aGlzLl9zZWNvbmRhcnlFdmVudHMpfSxfdHJpZ2dlcjpmdW5jdGlvbihiLGMpe3ZhciBkPWN8fHRoaXMuZGF0ZXMuZ2V0KC0xKSxlPXRoaXMuX3V0Y190b19sb2NhbChkKTt0aGlzLmVsZW1lbnQudHJpZ2dlcih7dHlwZTpiLGRhdGU6ZSx2aWV3TW9kZTp0aGlzLnZpZXdNb2RlLGRhdGVzOmEubWFwKHRoaXMuZGF0ZXMsdGhpcy5fdXRjX3RvX2xvY2FsKSxmb3JtYXQ6YS5wcm94eShmdW5jdGlvbihhLGIpezA9PT1hcmd1bWVudHMubGVuZ3RoPyhhPXRoaXMuZGF0ZXMubGVuZ3RoLTEsYj10aGlzLm8uZm9ybWF0KTpcInN0cmluZ1wiPT10eXBlb2YgYSYmKGI9YSxhPXRoaXMuZGF0ZXMubGVuZ3RoLTEpLGI9Ynx8dGhpcy5vLmZvcm1hdDt2YXIgYz10aGlzLmRhdGVzLmdldChhKTtyZXR1cm4gci5mb3JtYXREYXRlKGMsYix0aGlzLm8ubGFuZ3VhZ2UpfSx0aGlzKX0pfSxzaG93OmZ1bmN0aW9uKCl7aWYoISh0aGlzLmlucHV0RmllbGQucHJvcChcImRpc2FibGVkXCIpfHx0aGlzLmlucHV0RmllbGQucHJvcChcInJlYWRvbmx5XCIpJiZ0aGlzLm8uZW5hYmxlT25SZWFkb25seT09PSExKSlyZXR1cm4gdGhpcy5pc0lubGluZXx8dGhpcy5waWNrZXIuYXBwZW5kVG8odGhpcy5vLmNvbnRhaW5lciksdGhpcy5wbGFjZSgpLHRoaXMucGlja2VyLnNob3coKSx0aGlzLl9hdHRhY2hTZWNvbmRhcnlFdmVudHMoKSx0aGlzLl90cmlnZ2VyKFwic2hvd1wiKSwod2luZG93Lm5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzfHxcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQpJiZ0aGlzLm8uZGlzYWJsZVRvdWNoS2V5Ym9hcmQmJmEodGhpcy5lbGVtZW50KS5ibHVyKCksdGhpc30saGlkZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmlzSW5saW5lfHwhdGhpcy5waWNrZXIuaXMoXCI6dmlzaWJsZVwiKT90aGlzOih0aGlzLmZvY3VzRGF0ZT1udWxsLHRoaXMucGlja2VyLmhpZGUoKS5kZXRhY2goKSx0aGlzLl9kZXRhY2hTZWNvbmRhcnlFdmVudHMoKSx0aGlzLnNldFZpZXdNb2RlKHRoaXMuby5zdGFydFZpZXcpLHRoaXMuby5mb3JjZVBhcnNlJiZ0aGlzLmlucHV0RmllbGQudmFsKCkmJnRoaXMuc2V0VmFsdWUoKSx0aGlzLl90cmlnZ2VyKFwiaGlkZVwiKSx0aGlzKX0sZGVzdHJveTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmhpZGUoKSx0aGlzLl9kZXRhY2hFdmVudHMoKSx0aGlzLl9kZXRhY2hTZWNvbmRhcnlFdmVudHMoKSx0aGlzLnBpY2tlci5yZW1vdmUoKSxkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlcGlja2VyLHRoaXMuaXNJbnB1dHx8ZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZSx0aGlzfSxwYXN0ZTpmdW5jdGlvbihiKXt2YXIgYztpZihiLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YSYmYi5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEudHlwZXMmJmEuaW5BcnJheShcInRleHQvcGxhaW5cIixiLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YS50eXBlcykhPT0tMSljPWIub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO2Vsc2V7aWYoIXdpbmRvdy5jbGlwYm9hcmREYXRhKXJldHVybjtjPXdpbmRvdy5jbGlwYm9hcmREYXRhLmdldERhdGEoXCJUZXh0XCIpfXRoaXMuc2V0RGF0ZShjKSx0aGlzLnVwZGF0ZSgpLGIucHJldmVudERlZmF1bHQoKX0sX3V0Y190b19sb2NhbDpmdW5jdGlvbihhKXtpZighYSlyZXR1cm4gYTt2YXIgYj1uZXcgRGF0ZShhLmdldFRpbWUoKSs2ZTQqYS5nZXRUaW1lem9uZU9mZnNldCgpKTtyZXR1cm4gYi5nZXRUaW1lem9uZU9mZnNldCgpIT09YS5nZXRUaW1lem9uZU9mZnNldCgpJiYoYj1uZXcgRGF0ZShhLmdldFRpbWUoKSs2ZTQqYi5nZXRUaW1lem9uZU9mZnNldCgpKSksYn0sX2xvY2FsX3RvX3V0YzpmdW5jdGlvbihhKXtyZXR1cm4gYSYmbmV3IERhdGUoYS5nZXRUaW1lKCktNmU0KmEuZ2V0VGltZXpvbmVPZmZzZXQoKSl9LF96ZXJvX3RpbWU6ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJm5ldyBEYXRlKGEuZ2V0RnVsbFllYXIoKSxhLmdldE1vbnRoKCksYS5nZXREYXRlKCkpfSxfemVyb191dGNfdGltZTpmdW5jdGlvbihhKXtyZXR1cm4gYSYmYyhhLmdldFVUQ0Z1bGxZZWFyKCksYS5nZXRVVENNb250aCgpLGEuZ2V0VVRDRGF0ZSgpKX0sZ2V0RGF0ZXM6ZnVuY3Rpb24oKXtyZXR1cm4gYS5tYXAodGhpcy5kYXRlcyx0aGlzLl91dGNfdG9fbG9jYWwpfSxnZXRVVENEYXRlczpmdW5jdGlvbigpe3JldHVybiBhLm1hcCh0aGlzLmRhdGVzLGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgRGF0ZShhKX0pfSxnZXREYXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3V0Y190b19sb2NhbCh0aGlzLmdldFVUQ0RhdGUoKSl9LGdldFVUQ0RhdGU6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmRhdGVzLmdldCgtMSk7cmV0dXJuIGEhPT1iP25ldyBEYXRlKGEpOm51bGx9LGNsZWFyRGF0ZXM6ZnVuY3Rpb24oKXt0aGlzLmlucHV0RmllbGQudmFsKFwiXCIpLHRoaXMudXBkYXRlKCksdGhpcy5fdHJpZ2dlcihcImNoYW5nZURhdGVcIiksdGhpcy5vLmF1dG9jbG9zZSYmdGhpcy5oaWRlKCl9LHNldERhdGVzOmZ1bmN0aW9uKCl7dmFyIGI9YS5pc0FycmF5KGFyZ3VtZW50c1swXSk/YXJndW1lbnRzWzBdOmFyZ3VtZW50cztyZXR1cm4gdGhpcy51cGRhdGUuYXBwbHkodGhpcyxiKSx0aGlzLl90cmlnZ2VyKFwiY2hhbmdlRGF0ZVwiKSx0aGlzLnNldFZhbHVlKCksdGhpc30sc2V0VVRDRGF0ZXM6ZnVuY3Rpb24oKXt2YXIgYj1hLmlzQXJyYXkoYXJndW1lbnRzWzBdKT9hcmd1bWVudHNbMF06YXJndW1lbnRzO3JldHVybiB0aGlzLnNldERhdGVzLmFwcGx5KHRoaXMsYS5tYXAoYix0aGlzLl91dGNfdG9fbG9jYWwpKSx0aGlzfSxzZXREYXRlOmYoXCJzZXREYXRlc1wiKSxzZXRVVENEYXRlOmYoXCJzZXRVVENEYXRlc1wiKSxyZW1vdmU6ZihcImRlc3Ryb3lcIixcIk1ldGhvZCBgcmVtb3ZlYCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiAyLjAuIFVzZSBgZGVzdHJveWAgaW5zdGVhZFwiKSxzZXRWYWx1ZTpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZSgpO3JldHVybiB0aGlzLmlucHV0RmllbGQudmFsKGEpLHRoaXN9LGdldEZvcm1hdHRlZERhdGU6ZnVuY3Rpb24oYyl7Yz09PWImJihjPXRoaXMuby5mb3JtYXQpO3ZhciBkPXRoaXMuby5sYW5ndWFnZTtyZXR1cm4gYS5tYXAodGhpcy5kYXRlcyxmdW5jdGlvbihhKXtyZXR1cm4gci5mb3JtYXREYXRlKGEsYyxkKX0pLmpvaW4odGhpcy5vLm11bHRpZGF0ZVNlcGFyYXRvcil9LGdldFN0YXJ0RGF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm8uc3RhcnREYXRlfSxzZXRTdGFydERhdGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7c3RhcnREYXRlOmF9KSx0aGlzLnVwZGF0ZSgpLHRoaXMudXBkYXRlTmF2QXJyb3dzKCksdGhpc30sZ2V0RW5kRGF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm8uZW5kRGF0ZX0sc2V0RW5kRGF0ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fcHJvY2Vzc19vcHRpb25zKHtlbmREYXRlOmF9KSx0aGlzLnVwZGF0ZSgpLHRoaXMudXBkYXRlTmF2QXJyb3dzKCksdGhpc30sc2V0RGF5c09mV2Vla0Rpc2FibGVkOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9wcm9jZXNzX29wdGlvbnMoe2RheXNPZldlZWtEaXNhYmxlZDphfSksdGhpcy51cGRhdGUoKSx0aGlzfSxzZXREYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7ZGF5c09mV2Vla0hpZ2hsaWdodGVkOmF9KSx0aGlzLnVwZGF0ZSgpLHRoaXN9LHNldERhdGVzRGlzYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7ZGF0ZXNEaXNhYmxlZDphfSksdGhpcy51cGRhdGUoKSx0aGlzfSxwbGFjZTpmdW5jdGlvbigpe2lmKHRoaXMuaXNJbmxpbmUpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5waWNrZXIub3V0ZXJXaWR0aCgpLGM9dGhpcy5waWNrZXIub3V0ZXJIZWlnaHQoKSxkPTEwLGU9YSh0aGlzLm8uY29udGFpbmVyKSxmPWUud2lkdGgoKSxnPVwiYm9keVwiPT09dGhpcy5vLmNvbnRhaW5lcj9hKGRvY3VtZW50KS5zY3JvbGxUb3AoKTplLnNjcm9sbFRvcCgpLGg9ZS5vZmZzZXQoKSxpPVswXTt0aGlzLmVsZW1lbnQucGFyZW50cygpLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLmNzcyhcInotaW5kZXhcIik7XCJhdXRvXCIhPT1iJiYwIT09TnVtYmVyKGIpJiZpLnB1c2goTnVtYmVyKGIpKX0pO3ZhciBqPU1hdGgubWF4LmFwcGx5KE1hdGgsaSkrdGhpcy5vLnpJbmRleE9mZnNldCxrPXRoaXMuY29tcG9uZW50P3RoaXMuY29tcG9uZW50LnBhcmVudCgpLm9mZnNldCgpOnRoaXMuZWxlbWVudC5vZmZzZXQoKSxsPXRoaXMuY29tcG9uZW50P3RoaXMuY29tcG9uZW50Lm91dGVySGVpZ2h0KCEwKTp0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoITEpLG09dGhpcy5jb21wb25lbnQ/dGhpcy5jb21wb25lbnQub3V0ZXJXaWR0aCghMCk6dGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoITEpLG49ay5sZWZ0LWgubGVmdCxvPWsudG9wLWgudG9wO1wiYm9keVwiIT09dGhpcy5vLmNvbnRhaW5lciYmKG8rPWcpLHRoaXMucGlja2VyLnJlbW92ZUNsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtdG9wIGRhdGVwaWNrZXItb3JpZW50LWJvdHRvbSBkYXRlcGlja2VyLW9yaWVudC1yaWdodCBkYXRlcGlja2VyLW9yaWVudC1sZWZ0XCIpLFwiYXV0b1wiIT09dGhpcy5vLm9yaWVudGF0aW9uLng/KHRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtXCIrdGhpcy5vLm9yaWVudGF0aW9uLngpLFwicmlnaHRcIj09PXRoaXMuby5vcmllbnRhdGlvbi54JiYobi09Yi1tKSk6ay5sZWZ0PDA/KHRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtbGVmdFwiKSxuLT1rLmxlZnQtZCk6bitiPmY/KHRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtcmlnaHRcIiksbis9bS1iKTp0aGlzLm8ucnRsP3RoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtcmlnaHRcIik6dGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC1sZWZ0XCIpO3ZhciBwLHE9dGhpcy5vLm9yaWVudGF0aW9uLnk7aWYoXCJhdXRvXCI9PT1xJiYocD0tZytvLWMscT1wPDA/XCJib3R0b21cIjpcInRvcFwiKSx0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItb3JpZW50LVwiK3EpLFwidG9wXCI9PT1xP28tPWMrcGFyc2VJbnQodGhpcy5waWNrZXIuY3NzKFwicGFkZGluZy10b3BcIikpOm8rPWwsdGhpcy5vLnJ0bCl7dmFyIHI9Zi0obittKTt0aGlzLnBpY2tlci5jc3Moe3RvcDpvLHJpZ2h0OnIsekluZGV4Omp9KX1lbHNlIHRoaXMucGlja2VyLmNzcyh7dG9wOm8sbGVmdDpuLHpJbmRleDpqfSk7cmV0dXJuIHRoaXN9LF9hbGxvd191cGRhdGU6ITAsdXBkYXRlOmZ1bmN0aW9uKCl7aWYoIXRoaXMuX2FsbG93X3VwZGF0ZSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLmRhdGVzLmNvcHkoKSxjPVtdLGQ9ITE7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGEuZWFjaChhcmd1bWVudHMsYS5wcm94eShmdW5jdGlvbihhLGIpe2IgaW5zdGFuY2VvZiBEYXRlJiYoYj10aGlzLl9sb2NhbF90b191dGMoYikpLGMucHVzaChiKX0sdGhpcykpLGQ9ITApOihjPXRoaXMuaXNJbnB1dD90aGlzLmVsZW1lbnQudmFsKCk6dGhpcy5lbGVtZW50LmRhdGEoXCJkYXRlXCIpfHx0aGlzLmlucHV0RmllbGQudmFsKCksYz1jJiZ0aGlzLm8ubXVsdGlkYXRlP2Muc3BsaXQodGhpcy5vLm11bHRpZGF0ZVNlcGFyYXRvcik6W2NdLGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGUpLGM9YS5tYXAoYyxhLnByb3h5KGZ1bmN0aW9uKGEpe3JldHVybiByLnBhcnNlRGF0ZShhLHRoaXMuby5mb3JtYXQsdGhpcy5vLmxhbmd1YWdlLHRoaXMuby5hc3N1bWVOZWFyYnlZZWFyKX0sdGhpcykpLGM9YS5ncmVwKGMsYS5wcm94eShmdW5jdGlvbihhKXtyZXR1cm4hdGhpcy5kYXRlV2l0aGluUmFuZ2UoYSl8fCFhfSx0aGlzKSwhMCksdGhpcy5kYXRlcy5yZXBsYWNlKGMpLHRoaXMuby51cGRhdGVWaWV3RGF0ZSYmKHRoaXMuZGF0ZXMubGVuZ3RoP3RoaXMudmlld0RhdGU9bmV3IERhdGUodGhpcy5kYXRlcy5nZXQoLTEpKTp0aGlzLnZpZXdEYXRlPHRoaXMuby5zdGFydERhdGU/dGhpcy52aWV3RGF0ZT1uZXcgRGF0ZSh0aGlzLm8uc3RhcnREYXRlKTp0aGlzLnZpZXdEYXRlPnRoaXMuby5lbmREYXRlP3RoaXMudmlld0RhdGU9bmV3IERhdGUodGhpcy5vLmVuZERhdGUpOnRoaXMudmlld0RhdGU9dGhpcy5vLmRlZmF1bHRWaWV3RGF0ZSksZD8odGhpcy5zZXRWYWx1ZSgpLHRoaXMuZWxlbWVudC5jaGFuZ2UoKSk6dGhpcy5kYXRlcy5sZW5ndGgmJlN0cmluZyhiKSE9PVN0cmluZyh0aGlzLmRhdGVzKSYmZCYmKHRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VEYXRlXCIpLHRoaXMuZWxlbWVudC5jaGFuZ2UoKSksIXRoaXMuZGF0ZXMubGVuZ3RoJiZiLmxlbmd0aCYmKHRoaXMuX3RyaWdnZXIoXCJjbGVhckRhdGVcIiksdGhpcy5lbGVtZW50LmNoYW5nZSgpKSx0aGlzLmZpbGwoKSx0aGlzfSxmaWxsRG93OmZ1bmN0aW9uKCl7aWYodGhpcy5vLnNob3dXZWVrRGF5cyl7dmFyIGI9dGhpcy5vLndlZWtTdGFydCxjPVwiPHRyPlwiO2Zvcih0aGlzLm8uY2FsZW5kYXJXZWVrcyYmKGMrPSc8dGggY2xhc3M9XCJjd1wiPiYjMTYwOzwvdGg+Jyk7Yjx0aGlzLm8ud2Vla1N0YXJ0Kzc7KWMrPSc8dGggY2xhc3M9XCJkb3cnLGEuaW5BcnJheShiLHRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQpIT09LTEmJihjKz1cIiBkaXNhYmxlZFwiKSxjKz0nXCI+JytxW3RoaXMuby5sYW5ndWFnZV0uZGF5c01pbltiKyslN10rXCI8L3RoPlwiO2MrPVwiPC90cj5cIix0aGlzLnBpY2tlci5maW5kKFwiLmRhdGVwaWNrZXItZGF5cyB0aGVhZFwiKS5hcHBlbmQoYyl9fSxmaWxsTW9udGhzOmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9dGhpcy5fdXRjX3RvX2xvY2FsKHRoaXMudmlld0RhdGUpLGM9XCJcIixkPTA7ZDwxMjtkKyspYT1iJiZiLmdldE1vbnRoKCk9PT1kP1wiIGZvY3VzZWRcIjpcIlwiLGMrPSc8c3BhbiBjbGFzcz1cIm1vbnRoJythKydcIj4nK3FbdGhpcy5vLmxhbmd1YWdlXS5tb250aHNTaG9ydFtkXStcIjwvc3Bhbj5cIjt0aGlzLnBpY2tlci5maW5kKFwiLmRhdGVwaWNrZXItbW9udGhzIHRkXCIpLmh0bWwoYyl9LHNldFJhbmdlOmZ1bmN0aW9uKGIpe2ImJmIubGVuZ3RoP3RoaXMucmFuZ2U9YS5tYXAoYixmdW5jdGlvbihhKXtyZXR1cm4gYS52YWx1ZU9mKCl9KTpkZWxldGUgdGhpcy5yYW5nZSx0aGlzLmZpbGwoKX0sZ2V0Q2xhc3NOYW1lczpmdW5jdGlvbihiKXt2YXIgYz1bXSxmPXRoaXMudmlld0RhdGUuZ2V0VVRDRnVsbFllYXIoKSxnPXRoaXMudmlld0RhdGUuZ2V0VVRDTW9udGgoKSxoPWQoKTtyZXR1cm4gYi5nZXRVVENGdWxsWWVhcigpPGZ8fGIuZ2V0VVRDRnVsbFllYXIoKT09PWYmJmIuZ2V0VVRDTW9udGgoKTxnP2MucHVzaChcIm9sZFwiKTooYi5nZXRVVENGdWxsWWVhcigpPmZ8fGIuZ2V0VVRDRnVsbFllYXIoKT09PWYmJmIuZ2V0VVRDTW9udGgoKT5nKSYmYy5wdXNoKFwibmV3XCIpLHRoaXMuZm9jdXNEYXRlJiZiLnZhbHVlT2YoKT09PXRoaXMuZm9jdXNEYXRlLnZhbHVlT2YoKSYmYy5wdXNoKFwiZm9jdXNlZFwiKSx0aGlzLm8udG9kYXlIaWdobGlnaHQmJmUoYixoKSYmYy5wdXNoKFwidG9kYXlcIiksdGhpcy5kYXRlcy5jb250YWlucyhiKSE9PS0xJiZjLnB1c2goXCJhY3RpdmVcIiksdGhpcy5kYXRlV2l0aGluUmFuZ2UoYil8fGMucHVzaChcImRpc2FibGVkXCIpLHRoaXMuZGF0ZUlzRGlzYWJsZWQoYikmJmMucHVzaChcImRpc2FibGVkXCIsXCJkaXNhYmxlZC1kYXRlXCIpLGEuaW5BcnJheShiLmdldFVUQ0RheSgpLHRoaXMuby5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQpIT09LTEmJmMucHVzaChcImhpZ2hsaWdodGVkXCIpLHRoaXMucmFuZ2UmJihiPnRoaXMucmFuZ2VbMF0mJmI8dGhpcy5yYW5nZVt0aGlzLnJhbmdlLmxlbmd0aC0xXSYmYy5wdXNoKFwicmFuZ2VcIiksYS5pbkFycmF5KGIudmFsdWVPZigpLHRoaXMucmFuZ2UpIT09LTEmJmMucHVzaChcInNlbGVjdGVkXCIpLGIudmFsdWVPZigpPT09dGhpcy5yYW5nZVswXSYmYy5wdXNoKFwicmFuZ2Utc3RhcnRcIiksYi52YWx1ZU9mKCk9PT10aGlzLnJhbmdlW3RoaXMucmFuZ2UubGVuZ3RoLTFdJiZjLnB1c2goXCJyYW5nZS1lbmRcIikpLGN9LF9maWxsX3llYXJzVmlldzpmdW5jdGlvbihjLGQsZSxmLGcsaCxpKXtmb3IodmFyIGosayxsLG09XCJcIixuPWUvMTAsbz10aGlzLnBpY2tlci5maW5kKGMpLHA9TWF0aC5mbG9vcihmL2UpKmUscT1wKzkqbixyPU1hdGguZmxvb3IodGhpcy52aWV3RGF0ZS5nZXRGdWxsWWVhcigpL24pKm4scz1hLm1hcCh0aGlzLmRhdGVzLGZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLmZsb29yKGEuZ2V0VVRDRnVsbFllYXIoKS9uKSpufSksdD1wLW47dDw9cStuO3QrPW4paj1bZF0saz1udWxsLHQ9PT1wLW4/ai5wdXNoKFwib2xkXCIpOnQ9PT1xK24mJmoucHVzaChcIm5ld1wiKSxhLmluQXJyYXkodCxzKSE9PS0xJiZqLnB1c2goXCJhY3RpdmVcIiksKHQ8Z3x8dD5oKSYmai5wdXNoKFwiZGlzYWJsZWRcIiksdD09PXImJmoucHVzaChcImZvY3VzZWRcIiksaSE9PWEubm9vcCYmKGw9aShuZXcgRGF0ZSh0LDAsMSkpLGw9PT1iP2w9e306XCJib29sZWFuXCI9PXR5cGVvZiBsP2w9e2VuYWJsZWQ6bH06XCJzdHJpbmdcIj09dHlwZW9mIGwmJihsPXtjbGFzc2VzOmx9KSxsLmVuYWJsZWQ9PT0hMSYmai5wdXNoKFwiZGlzYWJsZWRcIiksbC5jbGFzc2VzJiYoaj1qLmNvbmNhdChsLmNsYXNzZXMuc3BsaXQoL1xccysvKSkpLGwudG9vbHRpcCYmKGs9bC50b29sdGlwKSksbSs9JzxzcGFuIGNsYXNzPVwiJytqLmpvaW4oXCIgXCIpKydcIicrKGs/JyB0aXRsZT1cIicraysnXCInOlwiXCIpK1wiPlwiK3QrXCI8L3NwYW4+XCI7by5maW5kKFwiLmRhdGVwaWNrZXItc3dpdGNoXCIpLnRleHQocCtcIi1cIitxKSxvLmZpbmQoXCJ0ZFwiKS5odG1sKG0pfSxmaWxsOmZ1bmN0aW9uKCl7dmFyIGQsZSxmPW5ldyBEYXRlKHRoaXMudmlld0RhdGUpLGc9Zi5nZXRVVENGdWxsWWVhcigpLGg9Zi5nZXRVVENNb250aCgpLGk9dGhpcy5vLnN0YXJ0RGF0ZSE9PS0oMS8wKT90aGlzLm8uc3RhcnREYXRlLmdldFVUQ0Z1bGxZZWFyKCk6LSgxLzApLGo9dGhpcy5vLnN0YXJ0RGF0ZSE9PS0oMS8wKT90aGlzLm8uc3RhcnREYXRlLmdldFVUQ01vbnRoKCk6LSgxLzApLGs9dGhpcy5vLmVuZERhdGUhPT0xLzA/dGhpcy5vLmVuZERhdGUuZ2V0VVRDRnVsbFllYXIoKToxLzAsbD10aGlzLm8uZW5kRGF0ZSE9PTEvMD90aGlzLm8uZW5kRGF0ZS5nZXRVVENNb250aCgpOjEvMCxtPXFbdGhpcy5vLmxhbmd1YWdlXS50b2RheXx8cS5lbi50b2RheXx8XCJcIixuPXFbdGhpcy5vLmxhbmd1YWdlXS5jbGVhcnx8cS5lbi5jbGVhcnx8XCJcIixvPXFbdGhpcy5vLmxhbmd1YWdlXS50aXRsZUZvcm1hdHx8cS5lbi50aXRsZUZvcm1hdDtpZighaXNOYU4oZykmJiFpc05hTihoKSl7dGhpcy5waWNrZXIuZmluZChcIi5kYXRlcGlja2VyLWRheXMgLmRhdGVwaWNrZXItc3dpdGNoXCIpLnRleHQoci5mb3JtYXREYXRlKGYsbyx0aGlzLm8ubGFuZ3VhZ2UpKSx0aGlzLnBpY2tlci5maW5kKFwidGZvb3QgLnRvZGF5XCIpLnRleHQobSkuY3NzKFwiZGlzcGxheVwiLHRoaXMuby50b2RheUJ0bj09PSEwfHxcImxpbmtlZFwiPT09dGhpcy5vLnRvZGF5QnRuP1widGFibGUtY2VsbFwiOlwibm9uZVwiKSx0aGlzLnBpY2tlci5maW5kKFwidGZvb3QgLmNsZWFyXCIpLnRleHQobikuY3NzKFwiZGlzcGxheVwiLHRoaXMuby5jbGVhckJ0bj09PSEwP1widGFibGUtY2VsbFwiOlwibm9uZVwiKSx0aGlzLnBpY2tlci5maW5kKFwidGhlYWQgLmRhdGVwaWNrZXItdGl0bGVcIikudGV4dCh0aGlzLm8udGl0bGUpLmNzcyhcImRpc3BsYXlcIixcInN0cmluZ1wiPT10eXBlb2YgdGhpcy5vLnRpdGxlJiZcIlwiIT09dGhpcy5vLnRpdGxlP1widGFibGUtY2VsbFwiOlwibm9uZVwiKSx0aGlzLnVwZGF0ZU5hdkFycm93cygpLHRoaXMuZmlsbE1vbnRocygpO3ZhciBwPWMoZyxoLDApLHM9cC5nZXRVVENEYXRlKCk7cC5zZXRVVENEYXRlKHMtKHAuZ2V0VVRDRGF5KCktdGhpcy5vLndlZWtTdGFydCs3KSU3KTt2YXIgdD1uZXcgRGF0ZShwKTtwLmdldFVUQ0Z1bGxZZWFyKCk8MTAwJiZ0LnNldFVUQ0Z1bGxZZWFyKHAuZ2V0VVRDRnVsbFllYXIoKSksdC5zZXRVVENEYXRlKHQuZ2V0VVRDRGF0ZSgpKzQyKSx0PXQudmFsdWVPZigpO2Zvcih2YXIgdSx2LHc9W107cC52YWx1ZU9mKCk8dDspe2lmKHU9cC5nZXRVVENEYXkoKSx1PT09dGhpcy5vLndlZWtTdGFydCYmKHcucHVzaChcIjx0cj5cIiksdGhpcy5vLmNhbGVuZGFyV2Vla3MpKXt2YXIgeD1uZXcgRGF0ZSgrcCsodGhpcy5vLndlZWtTdGFydC11LTcpJTcqODY0ZTUpLHk9bmV3IERhdGUoTnVtYmVyKHgpKygxMS14LmdldFVUQ0RheSgpKSU3Kjg2NGU1KSx6PW5ldyBEYXRlKE51bWJlcih6PWMoeS5nZXRVVENGdWxsWWVhcigpLDAsMSkpKygxMS16LmdldFVUQ0RheSgpKSU3Kjg2NGU1KSxBPSh5LXopLzg2NGU1LzcrMTt3LnB1c2goJzx0ZCBjbGFzcz1cImN3XCI+JytBK1wiPC90ZD5cIil9dj10aGlzLmdldENsYXNzTmFtZXMocCksdi5wdXNoKFwiZGF5XCIpO3ZhciBCPXAuZ2V0VVRDRGF0ZSgpO3RoaXMuby5iZWZvcmVTaG93RGF5IT09YS5ub29wJiYoZT10aGlzLm8uYmVmb3JlU2hvd0RheSh0aGlzLl91dGNfdG9fbG9jYWwocCkpLGU9PT1iP2U9e306XCJib29sZWFuXCI9PXR5cGVvZiBlP2U9e2VuYWJsZWQ6ZX06XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPXtjbGFzc2VzOmV9KSxlLmVuYWJsZWQ9PT0hMSYmdi5wdXNoKFwiZGlzYWJsZWRcIiksZS5jbGFzc2VzJiYodj12LmNvbmNhdChlLmNsYXNzZXMuc3BsaXQoL1xccysvKSkpLGUudG9vbHRpcCYmKGQ9ZS50b29sdGlwKSxlLmNvbnRlbnQmJihCPWUuY29udGVudCkpLHY9YS5pc0Z1bmN0aW9uKGEudW5pcXVlU29ydCk/YS51bmlxdWVTb3J0KHYpOmEudW5pcXVlKHYpLHcucHVzaCgnPHRkIGNsYXNzPVwiJyt2LmpvaW4oXCIgXCIpKydcIicrKGQ/JyB0aXRsZT1cIicrZCsnXCInOlwiXCIpKycgZGF0YS1kYXRlPVwiJytwLmdldFRpbWUoKS50b1N0cmluZygpKydcIj4nK0IrXCI8L3RkPlwiKSxkPW51bGwsdT09PXRoaXMuby53ZWVrRW5kJiZ3LnB1c2goXCI8L3RyPlwiKSxwLnNldFVUQ0RhdGUocC5nZXRVVENEYXRlKCkrMSl9dGhpcy5waWNrZXIuZmluZChcIi5kYXRlcGlja2VyLWRheXMgdGJvZHlcIikuaHRtbCh3LmpvaW4oXCJcIikpO3ZhciBDPXFbdGhpcy5vLmxhbmd1YWdlXS5tb250aHNUaXRsZXx8cS5lbi5tb250aHNUaXRsZXx8XCJNb250aHNcIixEPXRoaXMucGlja2VyLmZpbmQoXCIuZGF0ZXBpY2tlci1tb250aHNcIikuZmluZChcIi5kYXRlcGlja2VyLXN3aXRjaFwiKS50ZXh0KHRoaXMuby5tYXhWaWV3TW9kZTwyP0M6ZykuZW5kKCkuZmluZChcInRib2R5IHNwYW5cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7aWYoYS5lYWNoKHRoaXMuZGF0ZXMsZnVuY3Rpb24oYSxiKXtiLmdldFVUQ0Z1bGxZZWFyKCk9PT1nJiZELmVxKGIuZ2V0VVRDTW9udGgoKSkuYWRkQ2xhc3MoXCJhY3RpdmVcIil9KSwoZzxpfHxnPmspJiZELmFkZENsYXNzKFwiZGlzYWJsZWRcIiksZz09PWkmJkQuc2xpY2UoMCxqKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpLGc9PT1rJiZELnNsaWNlKGwrMSkuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSx0aGlzLm8uYmVmb3JlU2hvd01vbnRoIT09YS5ub29wKXt2YXIgRT10aGlzO2EuZWFjaChELGZ1bmN0aW9uKGMsZCl7dmFyIGU9bmV3IERhdGUoZyxjLDEpLGY9RS5vLmJlZm9yZVNob3dNb250aChlKTtmPT09Yj9mPXt9OlwiYm9vbGVhblwiPT10eXBlb2YgZj9mPXtlbmFibGVkOmZ9Olwic3RyaW5nXCI9PXR5cGVvZiBmJiYoZj17Y2xhc3NlczpmfSksZi5lbmFibGVkIT09ITF8fGEoZCkuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKXx8YShkKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpLGYuY2xhc3NlcyYmYShkKS5hZGRDbGFzcyhmLmNsYXNzZXMpLGYudG9vbHRpcCYmYShkKS5wcm9wKFwidGl0bGVcIixmLnRvb2x0aXApfSl9dGhpcy5fZmlsbF95ZWFyc1ZpZXcoXCIuZGF0ZXBpY2tlci15ZWFyc1wiLFwieWVhclwiLDEwLGcsaSxrLHRoaXMuby5iZWZvcmVTaG93WWVhciksdGhpcy5fZmlsbF95ZWFyc1ZpZXcoXCIuZGF0ZXBpY2tlci1kZWNhZGVzXCIsXCJkZWNhZGVcIiwxMDAsZyxpLGssdGhpcy5vLmJlZm9yZVNob3dEZWNhZGUpLHRoaXMuX2ZpbGxfeWVhcnNWaWV3KFwiLmRhdGVwaWNrZXItY2VudHVyaWVzXCIsXCJjZW50dXJ5XCIsMWUzLGcsaSxrLHRoaXMuby5iZWZvcmVTaG93Q2VudHVyeSl9fSx1cGRhdGVOYXZBcnJvd3M6ZnVuY3Rpb24oKXtpZih0aGlzLl9hbGxvd191cGRhdGUpe3ZhciBhLGIsYz1uZXcgRGF0ZSh0aGlzLnZpZXdEYXRlKSxkPWMuZ2V0VVRDRnVsbFllYXIoKSxlPWMuZ2V0VVRDTW9udGgoKSxmPXRoaXMuby5zdGFydERhdGUhPT0tKDEvMCk/dGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENGdWxsWWVhcigpOi0oMS8wKSxnPXRoaXMuby5zdGFydERhdGUhPT0tKDEvMCk/dGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENNb250aCgpOi0oMS8wKSxoPXRoaXMuby5lbmREYXRlIT09MS8wP3RoaXMuby5lbmREYXRlLmdldFVUQ0Z1bGxZZWFyKCk6MS8wLGk9dGhpcy5vLmVuZERhdGUhPT0xLzA/dGhpcy5vLmVuZERhdGUuZ2V0VVRDTW9udGgoKToxLzAsaj0xO3N3aXRjaCh0aGlzLnZpZXdNb2RlKXtjYXNlIDQ6aio9MTA7Y2FzZSAzOmoqPTEwO2Nhc2UgMjpqKj0xMDtjYXNlIDE6YT1NYXRoLmZsb29yKGQvaikqajxmLGI9TWF0aC5mbG9vcihkL2opKmoraj5oO2JyZWFrO2Nhc2UgMDphPWQ8PWYmJmU8ZyxiPWQ+PWgmJmU+aX10aGlzLnBpY2tlci5maW5kKFwiLnByZXZcIikudG9nZ2xlQ2xhc3MoXCJkaXNhYmxlZFwiLGEpLHRoaXMucGlja2VyLmZpbmQoXCIubmV4dFwiKS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsYil9fSxjbGljazpmdW5jdGlvbihiKXtiLnByZXZlbnREZWZhdWx0KCksYi5zdG9wUHJvcGFnYXRpb24oKTt2YXIgZSxmLGcsaDtlPWEoYi50YXJnZXQpLGUuaGFzQ2xhc3MoXCJkYXRlcGlja2VyLXN3aXRjaFwiKSYmdGhpcy52aWV3TW9kZSE9PXRoaXMuby5tYXhWaWV3TW9kZSYmdGhpcy5zZXRWaWV3TW9kZSh0aGlzLnZpZXdNb2RlKzEpLGUuaGFzQ2xhc3MoXCJ0b2RheVwiKSYmIWUuaGFzQ2xhc3MoXCJkYXlcIikmJih0aGlzLnNldFZpZXdNb2RlKDApLHRoaXMuX3NldERhdGUoZCgpLFwibGlua2VkXCI9PT10aGlzLm8udG9kYXlCdG4/bnVsbDpcInZpZXdcIikpLGUuaGFzQ2xhc3MoXCJjbGVhclwiKSYmdGhpcy5jbGVhckRhdGVzKCksZS5oYXNDbGFzcyhcImRpc2FibGVkXCIpfHwoZS5oYXNDbGFzcyhcIm1vbnRoXCIpfHxlLmhhc0NsYXNzKFwieWVhclwiKXx8ZS5oYXNDbGFzcyhcImRlY2FkZVwiKXx8ZS5oYXNDbGFzcyhcImNlbnR1cnlcIikpJiYodGhpcy52aWV3RGF0ZS5zZXRVVENEYXRlKDEpLGY9MSwxPT09dGhpcy52aWV3TW9kZT8oaD1lLnBhcmVudCgpLmZpbmQoXCJzcGFuXCIpLmluZGV4KGUpLGc9dGhpcy52aWV3RGF0ZS5nZXRVVENGdWxsWWVhcigpLHRoaXMudmlld0RhdGUuc2V0VVRDTW9udGgoaCkpOihoPTAsZz1OdW1iZXIoZS50ZXh0KCkpLHRoaXMudmlld0RhdGUuc2V0VVRDRnVsbFllYXIoZykpLHRoaXMuX3RyaWdnZXIoci52aWV3TW9kZXNbdGhpcy52aWV3TW9kZS0xXS5lLHRoaXMudmlld0RhdGUpLHRoaXMudmlld01vZGU9PT10aGlzLm8ubWluVmlld01vZGU/dGhpcy5fc2V0RGF0ZShjKGcsaCxmKSk6KHRoaXMuc2V0Vmlld01vZGUodGhpcy52aWV3TW9kZS0xKSx0aGlzLmZpbGwoKSkpLHRoaXMucGlja2VyLmlzKFwiOnZpc2libGVcIikmJnRoaXMuX2ZvY3VzZWRfZnJvbSYmdGhpcy5fZm9jdXNlZF9mcm9tLmZvY3VzKCksZGVsZXRlIHRoaXMuX2ZvY3VzZWRfZnJvbX0sZGF5Q2VsbENsaWNrOmZ1bmN0aW9uKGIpe3ZhciBjPWEoYi5jdXJyZW50VGFyZ2V0KSxkPWMuZGF0YShcImRhdGVcIiksZT1uZXcgRGF0ZShkKTt0aGlzLm8udXBkYXRlVmlld0RhdGUmJihlLmdldFVUQ0Z1bGxZZWFyKCkhPT10aGlzLnZpZXdEYXRlLmdldFVUQ0Z1bGxZZWFyKCkmJnRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VZZWFyXCIsdGhpcy52aWV3RGF0ZSksZS5nZXRVVENNb250aCgpIT09dGhpcy52aWV3RGF0ZS5nZXRVVENNb250aCgpJiZ0aGlzLl90cmlnZ2VyKFwiY2hhbmdlTW9udGhcIix0aGlzLnZpZXdEYXRlKSksdGhpcy5fc2V0RGF0ZShlKX0sbmF2QXJyb3dzQ2xpY2s6ZnVuY3Rpb24oYil7dmFyIGM9YShiLmN1cnJlbnRUYXJnZXQpLGQ9Yy5oYXNDbGFzcyhcInByZXZcIik/LTE6MTswIT09dGhpcy52aWV3TW9kZSYmKGQqPTEyKnIudmlld01vZGVzW3RoaXMudmlld01vZGVdLm5hdlN0ZXApLHRoaXMudmlld0RhdGU9dGhpcy5tb3ZlTW9udGgodGhpcy52aWV3RGF0ZSxkKSx0aGlzLl90cmlnZ2VyKHIudmlld01vZGVzW3RoaXMudmlld01vZGVdLmUsdGhpcy52aWV3RGF0ZSksdGhpcy5maWxsKCl9LF90b2dnbGVfbXVsdGlkYXRlOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZGF0ZXMuY29udGFpbnMoYSk7aWYoYXx8dGhpcy5kYXRlcy5jbGVhcigpLGIhPT0tMT8odGhpcy5vLm11bHRpZGF0ZT09PSEwfHx0aGlzLm8ubXVsdGlkYXRlPjF8fHRoaXMuby50b2dnbGVBY3RpdmUpJiZ0aGlzLmRhdGVzLnJlbW92ZShiKTp0aGlzLm8ubXVsdGlkYXRlPT09ITE/KHRoaXMuZGF0ZXMuY2xlYXIoKSx0aGlzLmRhdGVzLnB1c2goYSkpOnRoaXMuZGF0ZXMucHVzaChhKSxcIm51bWJlclwiPT10eXBlb2YgdGhpcy5vLm11bHRpZGF0ZSlmb3IoO3RoaXMuZGF0ZXMubGVuZ3RoPnRoaXMuby5tdWx0aWRhdGU7KXRoaXMuZGF0ZXMucmVtb3ZlKDApfSxfc2V0RGF0ZTpmdW5jdGlvbihhLGIpe2ImJlwiZGF0ZVwiIT09Ynx8dGhpcy5fdG9nZ2xlX211bHRpZGF0ZShhJiZuZXcgRGF0ZShhKSksKCFiJiZ0aGlzLm8udXBkYXRlVmlld0RhdGV8fFwidmlld1wiPT09YikmJih0aGlzLnZpZXdEYXRlPWEmJm5ldyBEYXRlKGEpKSx0aGlzLmZpbGwoKSx0aGlzLnNldFZhbHVlKCksYiYmXCJ2aWV3XCI9PT1ifHx0aGlzLl90cmlnZ2VyKFwiY2hhbmdlRGF0ZVwiKSx0aGlzLmlucHV0RmllbGQudHJpZ2dlcihcImNoYW5nZVwiKSwhdGhpcy5vLmF1dG9jbG9zZXx8YiYmXCJkYXRlXCIhPT1ifHx0aGlzLmhpZGUoKX0sbW92ZURheTpmdW5jdGlvbihhLGIpe3ZhciBjPW5ldyBEYXRlKGEpO3JldHVybiBjLnNldFVUQ0RhdGUoYS5nZXRVVENEYXRlKCkrYiksY30sbW92ZVdlZWs6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3ZlRGF5KGEsNypiKX0sbW92ZU1vbnRoOmZ1bmN0aW9uKGEsYil7aWYoIWcoYSkpcmV0dXJuIHRoaXMuby5kZWZhdWx0Vmlld0RhdGU7aWYoIWIpcmV0dXJuIGE7dmFyIGMsZCxlPW5ldyBEYXRlKGEudmFsdWVPZigpKSxmPWUuZ2V0VVRDRGF0ZSgpLGg9ZS5nZXRVVENNb250aCgpLGk9TWF0aC5hYnMoYik7aWYoYj1iPjA/MTotMSwxPT09aSlkPWI9PT0tMT9mdW5jdGlvbigpe3JldHVybiBlLmdldFVUQ01vbnRoKCk9PT1ofTpmdW5jdGlvbigpe3JldHVybiBlLmdldFVUQ01vbnRoKCkhPT1jfSxjPWgrYixlLnNldFVUQ01vbnRoKGMpLGM9KGMrMTIpJTEyO2Vsc2V7Zm9yKHZhciBqPTA7ajxpO2orKyllPXRoaXMubW92ZU1vbnRoKGUsYik7Yz1lLmdldFVUQ01vbnRoKCksZS5zZXRVVENEYXRlKGYpLGQ9ZnVuY3Rpb24oKXtyZXR1cm4gYyE9PWUuZ2V0VVRDTW9udGgoKX19Zm9yKDtkKCk7KWUuc2V0VVRDRGF0ZSgtLWYpLGUuc2V0VVRDTW9udGgoYyk7cmV0dXJuIGV9LG1vdmVZZWFyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW92ZU1vbnRoKGEsMTIqYil9LG1vdmVBdmFpbGFibGVEYXRlOmZ1bmN0aW9uKGEsYixjKXtkb3tpZihhPXRoaXNbY10oYSxiKSwhdGhpcy5kYXRlV2l0aGluUmFuZ2UoYSkpcmV0dXJuITE7Yz1cIm1vdmVEYXlcIn13aGlsZSh0aGlzLmRhdGVJc0Rpc2FibGVkKGEpKTtyZXR1cm4gYX0sd2Vla09mRGF0ZUlzRGlzYWJsZWQ6ZnVuY3Rpb24oYil7cmV0dXJuIGEuaW5BcnJheShiLmdldFVUQ0RheSgpLHRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQpIT09LTF9LGRhdGVJc0Rpc2FibGVkOmZ1bmN0aW9uKGIpe3JldHVybiB0aGlzLndlZWtPZkRhdGVJc0Rpc2FibGVkKGIpfHxhLmdyZXAodGhpcy5vLmRhdGVzRGlzYWJsZWQsZnVuY3Rpb24oYSl7cmV0dXJuIGUoYixhKX0pLmxlbmd0aD4wfSxkYXRlV2l0aGluUmFuZ2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGE+PXRoaXMuby5zdGFydERhdGUmJmE8PXRoaXMuby5lbmREYXRlfSxrZXlkb3duOmZ1bmN0aW9uKGEpe2lmKCF0aGlzLnBpY2tlci5pcyhcIjp2aXNpYmxlXCIpKXJldHVybiB2b2lkKDQwIT09YS5rZXlDb2RlJiYyNyE9PWEua2V5Q29kZXx8KHRoaXMuc2hvdygpLGEuc3RvcFByb3BhZ2F0aW9uKCkpKTt2YXIgYixjLGQ9ITEsZT10aGlzLmZvY3VzRGF0ZXx8dGhpcy52aWV3RGF0ZTtzd2l0Y2goYS5rZXlDb2RlKXtjYXNlIDI3OnRoaXMuZm9jdXNEYXRlPyh0aGlzLmZvY3VzRGF0ZT1udWxsLHRoaXMudmlld0RhdGU9dGhpcy5kYXRlcy5nZXQoLTEpfHx0aGlzLnZpZXdEYXRlLHRoaXMuZmlsbCgpKTp0aGlzLmhpZGUoKSxhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKTticmVhaztjYXNlIDM3OmNhc2UgMzg6Y2FzZSAzOTpjYXNlIDQwOmlmKCF0aGlzLm8ua2V5Ym9hcmROYXZpZ2F0aW9ufHw3PT09dGhpcy5vLmRheXNPZldlZWtEaXNhYmxlZC5sZW5ndGgpYnJlYWs7Yj0zNz09PWEua2V5Q29kZXx8Mzg9PT1hLmtleUNvZGU/LTE6MSwwPT09dGhpcy52aWV3TW9kZT9hLmN0cmxLZXk/KGM9dGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShlLGIsXCJtb3ZlWWVhclwiKSxjJiZ0aGlzLl90cmlnZ2VyKFwiY2hhbmdlWWVhclwiLHRoaXMudmlld0RhdGUpKTphLnNoaWZ0S2V5PyhjPXRoaXMubW92ZUF2YWlsYWJsZURhdGUoZSxiLFwibW92ZU1vbnRoXCIpLGMmJnRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VNb250aFwiLHRoaXMudmlld0RhdGUpKTozNz09PWEua2V5Q29kZXx8Mzk9PT1hLmtleUNvZGU/Yz10aGlzLm1vdmVBdmFpbGFibGVEYXRlKGUsYixcIm1vdmVEYXlcIik6dGhpcy53ZWVrT2ZEYXRlSXNEaXNhYmxlZChlKXx8KGM9dGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShlLGIsXCJtb3ZlV2Vla1wiKSk6MT09PXRoaXMudmlld01vZGU/KDM4IT09YS5rZXlDb2RlJiY0MCE9PWEua2V5Q29kZXx8KGIqPTQpLGM9dGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShlLGIsXCJtb3ZlTW9udGhcIikpOjI9PT10aGlzLnZpZXdNb2RlJiYoMzghPT1hLmtleUNvZGUmJjQwIT09YS5rZXlDb2RlfHwoYio9NCksYz10aGlzLm1vdmVBdmFpbGFibGVEYXRlKGUsYixcIm1vdmVZZWFyXCIpKSxjJiYodGhpcy5mb2N1c0RhdGU9dGhpcy52aWV3RGF0ZT1jLHRoaXMuc2V0VmFsdWUoKSx0aGlzLmZpbGwoKSxhLnByZXZlbnREZWZhdWx0KCkpO2JyZWFrO2Nhc2UgMTM6aWYoIXRoaXMuby5mb3JjZVBhcnNlKWJyZWFrO2U9dGhpcy5mb2N1c0RhdGV8fHRoaXMuZGF0ZXMuZ2V0KC0xKXx8dGhpcy52aWV3RGF0ZSx0aGlzLm8ua2V5Ym9hcmROYXZpZ2F0aW9uJiYodGhpcy5fdG9nZ2xlX211bHRpZGF0ZShlKSxkPSEwKSx0aGlzLmZvY3VzRGF0ZT1udWxsLHRoaXMudmlld0RhdGU9dGhpcy5kYXRlcy5nZXQoLTEpfHx0aGlzLnZpZXdEYXRlLHRoaXMuc2V0VmFsdWUoKSx0aGlzLmZpbGwoKSx0aGlzLnBpY2tlci5pcyhcIjp2aXNpYmxlXCIpJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5vLmF1dG9jbG9zZSYmdGhpcy5oaWRlKCkpO2JyZWFrO2Nhc2UgOTp0aGlzLmZvY3VzRGF0ZT1udWxsLHRoaXMudmlld0RhdGU9dGhpcy5kYXRlcy5nZXQoLTEpfHx0aGlzLnZpZXdEYXRlLHRoaXMuZmlsbCgpLHRoaXMuaGlkZSgpfWQmJih0aGlzLmRhdGVzLmxlbmd0aD90aGlzLl90cmlnZ2VyKFwiY2hhbmdlRGF0ZVwiKTp0aGlzLl90cmlnZ2VyKFwiY2xlYXJEYXRlXCIpLHRoaXMuaW5wdXRGaWVsZC50cmlnZ2VyKFwiY2hhbmdlXCIpKX0sc2V0Vmlld01vZGU6ZnVuY3Rpb24oYSl7dGhpcy52aWV3TW9kZT1hLHRoaXMucGlja2VyLmNoaWxkcmVuKFwiZGl2XCIpLmhpZGUoKS5maWx0ZXIoXCIuZGF0ZXBpY2tlci1cIityLnZpZXdNb2Rlc1t0aGlzLnZpZXdNb2RlXS5jbHNOYW1lKS5zaG93KCksdGhpcy51cGRhdGVOYXZBcnJvd3MoKSx0aGlzLl90cmlnZ2VyKFwiY2hhbmdlVmlld01vZGVcIixuZXcgRGF0ZSh0aGlzLnZpZXdEYXRlKSl9fTt2YXIgbD1mdW5jdGlvbihiLGMpe2EuZGF0YShiLFwiZGF0ZXBpY2tlclwiLHRoaXMpLHRoaXMuZWxlbWVudD1hKGIpLHRoaXMuaW5wdXRzPWEubWFwKGMuaW5wdXRzLGZ1bmN0aW9uKGEpe3JldHVybiBhLmpxdWVyeT9hWzBdOmF9KSxkZWxldGUgYy5pbnB1dHMsdGhpcy5rZWVwRW1wdHlWYWx1ZXM9Yy5rZWVwRW1wdHlWYWx1ZXMsZGVsZXRlIGMua2VlcEVtcHR5VmFsdWVzLG4uY2FsbChhKHRoaXMuaW5wdXRzKSxjKS5vbihcImNoYW5nZURhdGVcIixhLnByb3h5KHRoaXMuZGF0ZVVwZGF0ZWQsdGhpcykpLHRoaXMucGlja2Vycz1hLm1hcCh0aGlzLmlucHV0cyxmdW5jdGlvbihiKXtyZXR1cm4gYS5kYXRhKGIsXCJkYXRlcGlja2VyXCIpfSksdGhpcy51cGRhdGVEYXRlcygpfTtsLnByb3RvdHlwZT17dXBkYXRlRGF0ZXM6ZnVuY3Rpb24oKXt0aGlzLmRhdGVzPWEubWFwKHRoaXMucGlja2VycyxmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRVVENEYXRlKCl9KSx0aGlzLnVwZGF0ZVJhbmdlcygpfSx1cGRhdGVSYW5nZXM6ZnVuY3Rpb24oKXt2YXIgYj1hLm1hcCh0aGlzLmRhdGVzLGZ1bmN0aW9uKGEpe3JldHVybiBhLnZhbHVlT2YoKX0pO2EuZWFjaCh0aGlzLnBpY2tlcnMsZnVuY3Rpb24oYSxjKXtjLnNldFJhbmdlKGIpfSl9LGNsZWFyRGF0ZXM6ZnVuY3Rpb24oKXthLmVhY2godGhpcy5waWNrZXJzLGZ1bmN0aW9uKGEsYil7Yi5jbGVhckRhdGVzKCl9KX0sZGF0ZVVwZGF0ZWQ6ZnVuY3Rpb24oYyl7aWYoIXRoaXMudXBkYXRpbmcpe3RoaXMudXBkYXRpbmc9ITA7dmFyIGQ9YS5kYXRhKGMudGFyZ2V0LFwiZGF0ZXBpY2tlclwiKTtpZihkIT09Yil7dmFyIGU9ZC5nZXRVVENEYXRlKCksZj10aGlzLmtlZXBFbXB0eVZhbHVlcyxnPWEuaW5BcnJheShjLnRhcmdldCx0aGlzLmlucHV0cyksaD1nLTEsaT1nKzEsaj10aGlzLmlucHV0cy5sZW5ndGg7aWYoZyE9PS0xKXtpZihhLmVhY2godGhpcy5waWNrZXJzLGZ1bmN0aW9uKGEsYil7Yi5nZXRVVENEYXRlKCl8fGIhPT1kJiZmfHxiLnNldFVUQ0RhdGUoZSl9KSxlPHRoaXMuZGF0ZXNbaF0pZm9yKDtoPj0wJiZlPHRoaXMuZGF0ZXNbaF07KXRoaXMucGlja2Vyc1toLS1dLnNldFVUQ0RhdGUoZSk7ZWxzZSBpZihlPnRoaXMuZGF0ZXNbaV0pZm9yKDtpPGomJmU+dGhpcy5kYXRlc1tpXTspdGhpcy5waWNrZXJzW2krK10uc2V0VVRDRGF0ZShlKTt0aGlzLnVwZGF0ZURhdGVzKCksZGVsZXRlIHRoaXMudXBkYXRpbmd9fX19LGRlc3Ryb3k6ZnVuY3Rpb24oKXthLm1hcCh0aGlzLnBpY2tlcnMsZnVuY3Rpb24oYSl7YS5kZXN0cm95KCl9KSxhKHRoaXMuaW5wdXRzKS5vZmYoXCJjaGFuZ2VEYXRlXCIsdGhpcy5kYXRlVXBkYXRlZCksZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZXBpY2tlcn0scmVtb3ZlOmYoXCJkZXN0cm95XCIsXCJNZXRob2QgYHJlbW92ZWAgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gMi4wLiBVc2UgYGRlc3Ryb3lgIGluc3RlYWRcIil9O3ZhciBtPWEuZm4uZGF0ZXBpY2tlcixuPWZ1bmN0aW9uKGMpe3ZhciBkPUFycmF5LmFwcGx5KG51bGwsYXJndW1lbnRzKTtkLnNoaWZ0KCk7dmFyIGU7aWYodGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxmPWIuZGF0YShcImRhdGVwaWNrZXJcIiksZz1cIm9iamVjdFwiPT10eXBlb2YgYyYmYztpZighZil7dmFyIGo9aCh0aGlzLFwiZGF0ZVwiKSxtPWEuZXh0ZW5kKHt9LG8saixnKSxuPWkobS5sYW5ndWFnZSkscD1hLmV4dGVuZCh7fSxvLG4saixnKTtiLmhhc0NsYXNzKFwiaW5wdXQtZGF0ZXJhbmdlXCIpfHxwLmlucHV0cz8oYS5leHRlbmQocCx7aW5wdXRzOnAuaW5wdXRzfHxiLmZpbmQoXCJpbnB1dFwiKS50b0FycmF5KCl9KSxmPW5ldyBsKHRoaXMscCkpOmY9bmV3IGsodGhpcyxwKSxiLmRhdGEoXCJkYXRlcGlja2VyXCIsZil9XCJzdHJpbmdcIj09dHlwZW9mIGMmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGZbY10mJihlPWZbY10uYXBwbHkoZixkKSl9KSxlPT09Ynx8ZSBpbnN0YW5jZW9mIGt8fGUgaW5zdGFuY2VvZiBsKXJldHVybiB0aGlzO2lmKHRoaXMubGVuZ3RoPjEpdGhyb3cgbmV3IEVycm9yKFwiVXNpbmcgb25seSBhbGxvd2VkIGZvciB0aGUgY29sbGVjdGlvbiBvZiBhIHNpbmdsZSBlbGVtZW50IChcIitjK1wiIGZ1bmN0aW9uKVwiKTtyZXR1cm4gZX07YS5mbi5kYXRlcGlja2VyPW47dmFyIG89YS5mbi5kYXRlcGlja2VyLmRlZmF1bHRzPXthc3N1bWVOZWFyYnlZZWFyOiExLGF1dG9jbG9zZTohMSxiZWZvcmVTaG93RGF5OmEubm9vcCxiZWZvcmVTaG93TW9udGg6YS5ub29wLGJlZm9yZVNob3dZZWFyOmEubm9vcCxiZWZvcmVTaG93RGVjYWRlOmEubm9vcCxiZWZvcmVTaG93Q2VudHVyeTphLm5vb3AsY2FsZW5kYXJXZWVrczohMSxjbGVhckJ0bjohMSx0b2dnbGVBY3RpdmU6ITEsZGF5c09mV2Vla0Rpc2FibGVkOltdLGRheXNPZldlZWtIaWdobGlnaHRlZDpbXSxkYXRlc0Rpc2FibGVkOltdLGVuZERhdGU6MS8wLGZvcmNlUGFyc2U6ITAsZm9ybWF0OlwibW0vZGQveXl5eVwiLGtlZXBFbXB0eVZhbHVlczohMSxrZXlib2FyZE5hdmlnYXRpb246ITAsbGFuZ3VhZ2U6XCJlblwiLG1pblZpZXdNb2RlOjAsbWF4Vmlld01vZGU6NCxtdWx0aWRhdGU6ITEsbXVsdGlkYXRlU2VwYXJhdG9yOlwiLFwiLG9yaWVudGF0aW9uOlwiYXV0b1wiLHJ0bDohMSxzdGFydERhdGU6LSgxLzApLHN0YXJ0VmlldzowLHRvZGF5QnRuOiExLHRvZGF5SGlnaGxpZ2h0OiExLHVwZGF0ZVZpZXdEYXRlOiEwLHdlZWtTdGFydDowLGRpc2FibGVUb3VjaEtleWJvYXJkOiExLGVuYWJsZU9uUmVhZG9ubHk6ITAsc2hvd09uRm9jdXM6ITAsekluZGV4T2Zmc2V0OjEwLGNvbnRhaW5lcjpcImJvZHlcIixpbW1lZGlhdGVVcGRhdGVzOiExLHRpdGxlOlwiXCIsdGVtcGxhdGVzOntsZWZ0QXJyb3c6XCImI3gwMEFCO1wiLHJpZ2h0QXJyb3c6XCImI3gwMEJCO1wifSxzaG93V2Vla0RheXM6ITB9LHA9YS5mbi5kYXRlcGlja2VyLmxvY2FsZV9vcHRzPVtcImZvcm1hdFwiLFwicnRsXCIsXCJ3ZWVrU3RhcnRcIl07YS5mbi5kYXRlcGlja2VyLkNvbnN0cnVjdG9yPWs7dmFyIHE9YS5mbi5kYXRlcGlja2VyLmRhdGVzPXtlbjp7ZGF5czpbXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXSxkYXlzU2hvcnQ6W1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdLGRheXNNaW46W1wiU3VcIixcIk1vXCIsXCJUdVwiLFwiV2VcIixcIlRoXCIsXCJGclwiLFwiU2FcIl0sbW9udGhzOltcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXSxtb250aHNTaG9ydDpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCJdLHRvZGF5OlwiVG9kYXlcIixjbGVhcjpcIkNsZWFyXCIsdGl0bGVGb3JtYXQ6XCJNTSB5eXl5XCJ9fSxyPXt2aWV3TW9kZXM6W3tuYW1lczpbXCJkYXlzXCIsXCJtb250aFwiXSxjbHNOYW1lOlwiZGF5c1wiLGU6XCJjaGFuZ2VNb250aFwifSx7bmFtZXM6W1wibW9udGhzXCIsXCJ5ZWFyXCJdLGNsc05hbWU6XCJtb250aHNcIixlOlwiY2hhbmdlWWVhclwiLG5hdlN0ZXA6MX0se25hbWVzOltcInllYXJzXCIsXCJkZWNhZGVcIl0sY2xzTmFtZTpcInllYXJzXCIsZTpcImNoYW5nZURlY2FkZVwiLG5hdlN0ZXA6MTB9LHtuYW1lczpbXCJkZWNhZGVzXCIsXCJjZW50dXJ5XCJdLGNsc05hbWU6XCJkZWNhZGVzXCIsZTpcImNoYW5nZUNlbnR1cnlcIixuYXZTdGVwOjEwMH0se25hbWVzOltcImNlbnR1cmllc1wiLFwibWlsbGVubml1bVwiXSxjbHNOYW1lOlwiY2VudHVyaWVzXCIsZTpcImNoYW5nZU1pbGxlbm5pdW1cIixuYXZTdGVwOjFlM31dLHZhbGlkUGFydHM6L2RkP3xERD98bW0/fE1NP3x5eSg/Onl5KT8vZyxub25wdW5jdHVhdGlvbjovW14gLVxcLzotQFxcdTVlNzRcXHU2NzA4XFx1NjVlNVxcWy1gey1+XFx0XFxuXFxyXSsvZyxwYXJzZUZvcm1hdDpmdW5jdGlvbihhKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnRvVmFsdWUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEudG9EaXNwbGF5KXJldHVybiBhO3ZhciBiPWEucmVwbGFjZSh0aGlzLnZhbGlkUGFydHMsXCJcXDBcIikuc3BsaXQoXCJcXDBcIiksYz1hLm1hdGNoKHRoaXMudmFsaWRQYXJ0cyk7aWYoIWJ8fCFiLmxlbmd0aHx8IWN8fDA9PT1jLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGUgZm9ybWF0LlwiKTtyZXR1cm57c2VwYXJhdG9yczpiLHBhcnRzOmN9fSxwYXJzZURhdGU6ZnVuY3Rpb24oYyxlLGYsZyl7ZnVuY3Rpb24gaChhLGIpe3JldHVybiBiPT09ITAmJihiPTEwKSxhPDEwMCYmKGErPTJlMyxhPihuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKStiJiYoYS09MTAwKSksYX1mdW5jdGlvbiBpKCl7dmFyIGE9dGhpcy5zbGljZSgwLGpbbl0ubGVuZ3RoKSxiPWpbbl0uc2xpY2UoMCxhLmxlbmd0aCk7cmV0dXJuIGEudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX1pZighYylyZXR1cm4gYjtpZihjIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gYztpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9ci5wYXJzZUZvcm1hdChlKSksZS50b1ZhbHVlKXJldHVybiBlLnRvVmFsdWUoYyxlLGYpO3ZhciBqLGwsbSxuLG8scD17ZDpcIm1vdmVEYXlcIixtOlwibW92ZU1vbnRoXCIsdzpcIm1vdmVXZWVrXCIseTpcIm1vdmVZZWFyXCJ9LHM9e3llc3RlcmRheTpcIi0xZFwiLHRvZGF5OlwiKzBkXCIsdG9tb3Jyb3c6XCIrMWRcIn07aWYoYyBpbiBzJiYoYz1zW2NdKSwvXltcXC0rXVxcZCtbZG13eV0oW1xccyxdK1tcXC0rXVxcZCtbZG13eV0pKiQvaS50ZXN0KGMpKXtmb3Ioaj1jLm1hdGNoKC8oW1xcLStdXFxkKykoW2Rtd3ldKS9naSksYz1uZXcgRGF0ZSxuPTA7bjxqLmxlbmd0aDtuKyspbD1qW25dLm1hdGNoKC8oW1xcLStdXFxkKykoW2Rtd3ldKS9pKSxtPU51bWJlcihsWzFdKSxvPXBbbFsyXS50b0xvd2VyQ2FzZSgpXSxjPWsucHJvdG90eXBlW29dKGMsbSk7cmV0dXJuIGsucHJvdG90eXBlLl96ZXJvX3V0Y190aW1lKGMpfWo9YyYmYy5tYXRjaCh0aGlzLm5vbnB1bmN0dWF0aW9uKXx8W107dmFyIHQsdSx2PXt9LHc9W1wieXl5eVwiLFwieXlcIixcIk1cIixcIk1NXCIsXCJtXCIsXCJtbVwiLFwiZFwiLFwiZGRcIl0seD17eXl5eTpmdW5jdGlvbihhLGIpe3JldHVybiBhLnNldFVUQ0Z1bGxZZWFyKGc/aChiLGcpOmIpfSxtOmZ1bmN0aW9uKGEsYil7aWYoaXNOYU4oYSkpcmV0dXJuIGE7Zm9yKGItPTE7YjwwOyliKz0xMjtmb3IoYiU9MTIsYS5zZXRVVENNb250aChiKTthLmdldFVUQ01vbnRoKCkhPT1iOylhLnNldFVUQ0RhdGUoYS5nZXRVVENEYXRlKCktMSk7cmV0dXJuIGF9LGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5zZXRVVENEYXRlKGIpfX07eC55eT14Lnl5eXkseC5NPXguTU09eC5tbT14Lm0seC5kZD14LmQsYz1kKCk7dmFyIHk9ZS5wYXJ0cy5zbGljZSgpO2lmKGoubGVuZ3RoIT09eS5sZW5ndGgmJih5PWEoeSkuZmlsdGVyKGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuaW5BcnJheShjLHcpIT09LTF9KS50b0FycmF5KCkpLGoubGVuZ3RoPT09eS5sZW5ndGgpe3ZhciB6O2ZvcihuPTAsej15Lmxlbmd0aDtuPHo7bisrKXtpZih0PXBhcnNlSW50KGpbbl0sMTApLGw9eVtuXSxpc05hTih0KSlzd2l0Y2gobCl7Y2FzZVwiTU1cIjp1PWEocVtmXS5tb250aHMpLmZpbHRlcihpKSx0PWEuaW5BcnJheSh1WzBdLHFbZl0ubW9udGhzKSsxO2JyZWFrO2Nhc2VcIk1cIjp1PWEocVtmXS5tb250aHNTaG9ydCkuZmlsdGVyKGkpLHQ9YS5pbkFycmF5KHVbMF0scVtmXS5tb250aHNTaG9ydCkrMX12W2xdPXR9dmFyIEEsQjtmb3Iobj0wO248dy5sZW5ndGg7bisrKUI9d1tuXSxCIGluIHYmJiFpc05hTih2W0JdKSYmKEE9bmV3IERhdGUoYykseFtCXShBLHZbQl0pLGlzTmFOKEEpfHwoYz1BKSl9cmV0dXJuIGN9LGZvcm1hdERhdGU6ZnVuY3Rpb24oYixjLGQpe2lmKCFiKXJldHVyblwiXCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGMmJihjPXIucGFyc2VGb3JtYXQoYykpLGMudG9EaXNwbGF5KXJldHVybiBjLnRvRGlzcGxheShiLGMsZCk7dmFyIGU9e2Q6Yi5nZXRVVENEYXRlKCksRDpxW2RdLmRheXNTaG9ydFtiLmdldFVUQ0RheSgpXSxERDpxW2RdLmRheXNbYi5nZXRVVENEYXkoKV0sbTpiLmdldFVUQ01vbnRoKCkrMSxNOnFbZF0ubW9udGhzU2hvcnRbYi5nZXRVVENNb250aCgpXSxNTTpxW2RdLm1vbnRoc1tiLmdldFVUQ01vbnRoKCldLHl5OmIuZ2V0VVRDRnVsbFllYXIoKS50b1N0cmluZygpLnN1YnN0cmluZygyKSx5eXl5OmIuZ2V0VVRDRnVsbFllYXIoKX07ZS5kZD0oZS5kPDEwP1wiMFwiOlwiXCIpK2UuZCxlLm1tPShlLm08MTA/XCIwXCI6XCJcIikrZS5tLGI9W107Zm9yKHZhciBmPWEuZXh0ZW5kKFtdLGMuc2VwYXJhdG9ycyksZz0wLGg9Yy5wYXJ0cy5sZW5ndGg7Zzw9aDtnKyspZi5sZW5ndGgmJmIucHVzaChmLnNoaWZ0KCkpLGIucHVzaChlW2MucGFydHNbZ11dKTtyZXR1cm4gYi5qb2luKFwiXCIpfSxoZWFkVGVtcGxhdGU6Jzx0aGVhZD48dHI+PHRoIGNvbHNwYW49XCI3XCIgY2xhc3M9XCJkYXRlcGlja2VyLXRpdGxlXCI+PC90aD48L3RyPjx0cj48dGggY2xhc3M9XCJwcmV2XCI+JytvLnRlbXBsYXRlcy5sZWZ0QXJyb3crJzwvdGg+PHRoIGNvbHNwYW49XCI1XCIgY2xhc3M9XCJkYXRlcGlja2VyLXN3aXRjaFwiPjwvdGg+PHRoIGNsYXNzPVwibmV4dFwiPicrby50ZW1wbGF0ZXMucmlnaHRBcnJvdytcIjwvdGg+PC90cj48L3RoZWFkPlwiLFxuY29udFRlbXBsYXRlOic8dGJvZHk+PHRyPjx0ZCBjb2xzcGFuPVwiN1wiPjwvdGQ+PC90cj48L3Rib2R5PicsZm9vdFRlbXBsYXRlOic8dGZvb3Q+PHRyPjx0aCBjb2xzcGFuPVwiN1wiIGNsYXNzPVwidG9kYXlcIj48L3RoPjwvdHI+PHRyPjx0aCBjb2xzcGFuPVwiN1wiIGNsYXNzPVwiY2xlYXJcIj48L3RoPjwvdHI+PC90Zm9vdD4nfTtyLnRlbXBsYXRlPSc8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlclwiPjxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWRheXNcIj48dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK3IuaGVhZFRlbXBsYXRlK1wiPHRib2R5PjwvdGJvZHk+XCIrci5mb290VGVtcGxhdGUrJzwvdGFibGU+PC9kaXY+PGRpdiBjbGFzcz1cImRhdGVwaWNrZXItbW9udGhzXCI+PHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+JytyLmhlYWRUZW1wbGF0ZStyLmNvbnRUZW1wbGF0ZStyLmZvb3RUZW1wbGF0ZSsnPC90YWJsZT48L2Rpdj48ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci15ZWFyc1wiPjx0YWJsZSBjbGFzcz1cInRhYmxlLWNvbmRlbnNlZFwiPicrci5oZWFkVGVtcGxhdGUrci5jb250VGVtcGxhdGUrci5mb290VGVtcGxhdGUrJzwvdGFibGU+PC9kaXY+PGRpdiBjbGFzcz1cImRhdGVwaWNrZXItZGVjYWRlc1wiPjx0YWJsZSBjbGFzcz1cInRhYmxlLWNvbmRlbnNlZFwiPicrci5oZWFkVGVtcGxhdGUrci5jb250VGVtcGxhdGUrci5mb290VGVtcGxhdGUrJzwvdGFibGU+PC9kaXY+PGRpdiBjbGFzcz1cImRhdGVwaWNrZXItY2VudHVyaWVzXCI+PHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+JytyLmhlYWRUZW1wbGF0ZStyLmNvbnRUZW1wbGF0ZStyLmZvb3RUZW1wbGF0ZStcIjwvdGFibGU+PC9kaXY+PC9kaXY+XCIsYS5mbi5kYXRlcGlja2VyLkRQR2xvYmFsPXIsYS5mbi5kYXRlcGlja2VyLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5kYXRlcGlja2VyPW0sdGhpc30sYS5mbi5kYXRlcGlja2VyLnZlcnNpb249XCIxLjguMFwiLGEuZm4uZGF0ZXBpY2tlci5kZXByZWNhdGVkPWZ1bmN0aW9uKGEpe3ZhciBiPXdpbmRvdy5jb25zb2xlO2ImJmIud2FybiYmYi53YXJuKFwiREVQUkVDQVRFRDogXCIrYSl9LGEoZG9jdW1lbnQpLm9uKFwiZm9jdXMuZGF0ZXBpY2tlci5kYXRhLWFwaSBjbGljay5kYXRlcGlja2VyLmRhdGEtYXBpXCIsJ1tkYXRhLXByb3ZpZGU9XCJkYXRlcGlja2VyXCJdJyxmdW5jdGlvbihiKXt2YXIgYz1hKHRoaXMpO2MuZGF0YShcImRhdGVwaWNrZXJcIil8fChiLnByZXZlbnREZWZhdWx0KCksbi5jYWxsKGMsXCJzaG93XCIpKX0pLGEoZnVuY3Rpb24oKXtuLmNhbGwoYSgnW2RhdGEtcHJvdmlkZT1cImRhdGVwaWNrZXItaW5saW5lXCJdJykpfSl9KTtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy92ZW5kb3IvYm9vdHN0cmFwLWRhdGVwaWNrZXIvbG9jYWxlcy9ib290c3RyYXAtZGF0ZXBpY2tlci5mci5taW4uanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxNy8wOC8yMDIwIDE0OjIwXG5cbiFmdW5jdGlvbihhKXthLmZuLmRhdGVwaWNrZXIuZGF0ZXMuZnI9e2RheXM6W1wiZGltYW5jaGVcIixcImx1bmRpXCIsXCJtYXJkaVwiLFwibWVyY3JlZGlcIixcImpldWRpXCIsXCJ2ZW5kcmVkaVwiLFwic2FtZWRpXCJdLGRheXNTaG9ydDpbXCJkaW0uXCIsXCJsdW4uXCIsXCJtYXIuXCIsXCJtZXIuXCIsXCJqZXUuXCIsXCJ2ZW4uXCIsXCJzYW0uXCJdLGRheXNNaW46W1wiZFwiLFwibFwiLFwibWFcIixcIm1lXCIsXCJqXCIsXCJ2XCIsXCJzXCJdLG1vbnRoczpbXCJqYW52aWVyXCIsXCJmw6l2cmllclwiLFwibWFyc1wiLFwiYXZyaWxcIixcIm1haVwiLFwianVpblwiLFwianVpbGxldFwiLFwiYW/Du3RcIixcInNlcHRlbWJyZVwiLFwib2N0b2JyZVwiLFwibm92ZW1icmVcIixcImTDqWNlbWJyZVwiXSxtb250aHNTaG9ydDpbXCJqYW52LlwiLFwiZsOpdnIuXCIsXCJtYXJzXCIsXCJhdnJpbFwiLFwibWFpXCIsXCJqdWluXCIsXCJqdWlsLlwiLFwiYW/Du3RcIixcInNlcHQuXCIsXCJvY3QuXCIsXCJub3YuXCIsXCJkw6ljLlwiXSx0b2RheTpcIkF1am91cmQnaHVpXCIsbW9udGhzVGl0bGU6XCJNb2lzXCIsY2xlYXI6XCJFZmZhY2VyXCIsd2Vla1N0YXJ0OjEsZm9ybWF0OlwiZGQvbW0veXl5eVwifX0oalF1ZXJ5KTtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy92ZW5kb3IvdGlueU1jZUxhbmcvZnJfRlIuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxOS8wMi8yMDIxIDE4OjIyXG5cbnRpbnltY2UuYWRkSTE4bignZnJfRlInLCB7XG4gICdSZWRvJzogJ1JcXHUwMGU5dGFibGlyJyxcbiAgJ1VuZG8nOiAnQW5udWxlcicsXG4gICdDdXQnOiAnQ291cGVyJyxcbiAgJ0NvcHknOiAnQ29waWVyJyxcbiAgJ1Bhc3RlJzogJ0NvbGxlcicsXG4gICdTZWxlY3QgYWxsJzogJ1NcXHUwMGU5bGVjdGlvbm5lciB0b3V0JyxcbiAgJ05ldyBkb2N1bWVudCc6ICdOb3V2ZWF1IGRvY3VtZW50JyxcbiAgJ09rJzogJ09LJyxcbiAgJ0NhbmNlbCc6ICdBbm51bGVyJyxcbiAgJ1Zpc3VhbCBhaWRzJzogJ0FpZGVzIHZpc3VlbGxlcycsXG4gICdCb2xkJzogJ0dyYXMnLFxuICAnSXRhbGljJzogJ0l0YWxpcXVlJyxcbiAgJ1VuZGVybGluZSc6ICdTb3VsaWduXFx1MDBlOScsXG4gICdTdHJpa2V0aHJvdWdoJzogJ0JhcnJcXHUwMGU5JyxcbiAgJ1N1cGVyc2NyaXB0JzogJ0V4cG9zYW50JyxcbiAgJ1N1YnNjcmlwdCc6ICdJbmRpY2UnLFxuICAnQ2xlYXIgZm9ybWF0dGluZyc6ICdFZmZhY2VyIGxhIG1pc2UgZW4gZm9ybWUnLFxuICAnQWxpZ24gbGVmdCc6ICdBbGlnbmVyIFxcdTAwZTAgZ2F1Y2hlJyxcbiAgJ0FsaWduIGNlbnRlcic6ICdDZW50cmVyJyxcbiAgJ0FsaWduIHJpZ2h0JzogJ0FsaWduZXIgXFx1MDBlMCBkcm9pdGUnLFxuICAnSnVzdGlmeSc6ICdKdXN0aWZpZXInLFxuICAnQnVsbGV0IGxpc3QnOiAnTGlzdGUgXFx1MDBlMCBwdWNlcycsXG4gICdOdW1iZXJlZCBsaXN0JzogJ0xpc3RlIG51bVxcdTAwZTlyb3RcXHUwMGU5ZScsXG4gICdEZWNyZWFzZSBpbmRlbnQnOiAnUlxcdTAwZTlkdWlyZSBsZSByZXRyYWl0JyxcbiAgJ0luY3JlYXNlIGluZGVudCc6ICdBdWdtZW50ZXIgbGUgcmV0cmFpdCcsXG4gICdDbG9zZSc6ICdGZXJtZXInLFxuICAnRm9ybWF0cyc6ICdGb3JtYXRzJyxcbiAgJ1lvdXIgYnJvd3NlciBkb2VzblxcJ3Qgc3VwcG9ydCBkaXJlY3QgYWNjZXNzIHRvIHRoZSBjbGlwYm9hcmQuIFBsZWFzZSB1c2UgdGhlIEN0cmwrWFxcL0NcXC9WIGtleWJvYXJkIHNob3J0Y3V0cyBpbnN0ZWFkLic6ICdWb3RyZSBuYXZpZ2F0ZXVyIG5lIHN1cHBvcnRlIHBhcyBsXFx1MjAxOWFjY1xcdTAwZThzIGRpcmVjdCBhdSBwcmVzc2UtcGFwaWVycy4gTWVyY2kgZFxcJ3V0aWxpc2VyIGxlcyByYWNjb3VyY2lzIGNsYXZpZXIgQ3RybCtYXFwvQ1xcL1YuJyxcbiAgJ0hlYWRlcnMnOiAnRW4tdFxcdTAwZWF0ZXMnLFxuICAnSGVhZGVyIDEnOiAnRW4tdFxcdTAwZWF0ZSAxJyxcbiAgJ0hlYWRlciAyJzogJ0VuLXRcXHUwMGVhdGUgMicsXG4gICdIZWFkZXIgMyc6ICdFbi10XFx1MDBlYXRlIDMnLFxuICAnSGVhZGVyIDQnOiAnRW4tdFxcdTAwZWF0ZSA0JyxcbiAgJ0hlYWRlciA1JzogJ0VuLXRcXHUwMGVhdGUgNScsXG4gICdIZWFkZXIgNic6ICdFbi10XFx1MDBlYXRlIDYnLFxuICAnSGVhZGluZ3MnOiAnVGl0cmVzJyxcbiAgJ0hlYWRpbmcgMSc6ICdUaXRyZVxcdTAwYTAxJyxcbiAgJ0hlYWRpbmcgMic6ICdUaXRyZVxcdTAwYTAyJyxcbiAgJ0hlYWRpbmcgMyc6ICdUaXRyZVxcdTAwYTAzJyxcbiAgJ0hlYWRpbmcgNCc6ICdUaXRyZVxcdTAwYTA0JyxcbiAgJ0hlYWRpbmcgNSc6ICdUaXRyZVxcdTAwYTA1JyxcbiAgJ0hlYWRpbmcgNic6ICdUaXRyZVxcdTAwYTA2JyxcbiAgJ1ByZWZvcm1hdHRlZCc6ICdQclxcdTAwZTlmb3JtYXRcXHUwMGU5JyxcbiAgJ0Rpdic6ICdEaXYnLFxuICAnUHJlJzogJ1ByZScsXG4gICdDb2RlJzogJ0NvZGUnLFxuICAnUGFyYWdyYXBoJzogJ1BhcmFncmFwaGUnLFxuICAnQmxvY2txdW90ZSc6ICdCbG9ja3F1b3RlJyxcbiAgJ0lubGluZSc6ICdFbiBsaWduZScsXG4gICdCbG9ja3MnOiAnQmxvY3MnLFxuICAnUGFzdGUgaXMgbm93IGluIHBsYWluIHRleHQgbW9kZS4gQ29udGVudHMgd2lsbCBub3cgYmUgcGFzdGVkIGFzIHBsYWluIHRleHQgdW50aWwgeW91IHRvZ2dsZSB0aGlzIG9wdGlvbiBvZmYuJzogJ0xlIHByZXNzZS1wYXBpZXJzIGVzdCBtYWludGVuYW50IGVuIG1vZGUgXCJ0ZXh0ZSBwbGVpblwiLiBMZXMgY29udGVudXMgc2Vyb250IGNvbGxcXHUwMGU5cyBzYW5zIHJldGVuaXIgbGVzIGZvcm1hdGFnZXMganVzcXVcXCdcXHUwMGUwIGNlIHF1ZSB2b3VzIGRcXHUwMGU5c2FjdGl2aWV6IGNldHRlIG9wdGlvbi4nLFxuICAnRm9udHMnOiAnUG9saWNlcycsXG4gICdGb250IFNpemVzJzogJ1RhaWxsZXMgZGUgcG9saWNlJyxcbiAgJ0NsYXNzJzogJ0NsYXNzZScsXG4gICdCcm93c2UgZm9yIGFuIGltYWdlJzogJ1JlY2hlcmNoZXIgdW5lIGltYWdlJyxcbiAgJ09SJzogJ09VJyxcbiAgJ0Ryb3AgYW4gaW1hZ2UgaGVyZSc6ICdEXFx1MDBlOXBvc2VyIHVuZSBpbWFnZSBpY2knLFxuICAnVXBsb2FkJzogJ1RcXHUwMGU5bFxcdTAwZTljaGFyZ2VyJyxcbiAgJ0Jsb2NrJzogJ0Jsb2MnLFxuICAnQWxpZ24nOiAnQWxpZ25lcicsXG4gICdEZWZhdWx0JzogJ1BhciBkXFx1MDBlOWZhdXQnLFxuICAnQ2lyY2xlJzogJ0NlcmNsZScsXG4gICdEaXNjJzogJ0Rpc3F1ZScsXG4gICdTcXVhcmUnOiAnQ2FyclxcdTAwZTknLFxuICAnTG93ZXIgQWxwaGEnOiAnQWxwaGEgbWludXNjdWxlJyxcbiAgJ0xvd2VyIEdyZWVrJzogJ0dyZWMgbWludXNjdWxlJyxcbiAgJ0xvd2VyIFJvbWFuJzogJ1JvbWFpbiBtaW51c2N1bGUnLFxuICAnVXBwZXIgQWxwaGEnOiAnQWxwaGEgbWFqdXNjdWxlJyxcbiAgJ1VwcGVyIFJvbWFuJzogJ1JvbWFpbiBtYWp1c2N1bGUnLFxuICAnQW5jaG9yLi4uJzogJ0FuY3JlLi4uJyxcbiAgJ05hbWUnOiAnTm9tJyxcbiAgJ0lkJzogJ0lkJyxcbiAgJ0lkIHNob3VsZCBzdGFydCB3aXRoIGEgbGV0dGVyLCBmb2xsb3dlZCBvbmx5IGJ5IGxldHRlcnMsIG51bWJlcnMsIGRhc2hlcywgZG90cywgY29sb25zIG9yIHVuZGVyc2NvcmVzLic6ICdMXFwnSWQgZG9pdCBjb21tZW5jZXIgcGFyIHVuZSBsZXR0cmUgc3VpdmkgcGFyIGRlcyBsZXR0cmVzLCBub21icmVzLCB0aXJldHMsIHBvaW50cywgZGV1eC1wb2ludHMgb3UgdW5kZXJzY29yZXMnLFxuICAnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzIGFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBuYXZpZ2F0ZSBhd2F5Pyc6ICdWb3VzIGF2ZXogZGVzIG1vZGlmaWNhdGlvbnMgbm9uIGVucmVnaXN0clxcdTAwZTllcywgXFx1MDBlYXRlcy12b3VzIHNcXHUwMGZiciBkZSBxdWl0dGVyIGxhIHBhZ2U/JyxcbiAgJ1Jlc3RvcmUgbGFzdCBkcmFmdCc6ICdSZXN0YXVyZXIgbGUgZGVybmllciBicm91aWxsb24nLFxuICAnU3BlY2lhbCBjaGFyYWN0ZXIuLi4nOiAnQ2FyYWN0XFx1MDBlOHJlIHNwXFx1MDBlOWNpYWwuLi4nLFxuICAnU291cmNlIGNvZGUnOiAnQ29kZSBzb3VyY2UnLFxuICAnSW5zZXJ0XFwvRWRpdCBjb2RlIHNhbXBsZSc6ICdJbnNcXHUwMGU5cmVyIFxcLyBtb2RpZmllciB1bmUgZXhlbXBsZSBkZSBjb2RlJyxcbiAgJ0xhbmd1YWdlJzogJ0xhbmd1ZScsXG4gICdDb2RlIHNhbXBsZS4uLic6ICdFeGVtcGxlIGRlIGNvZGUuLi4nLFxuICAnQ29sb3IgUGlja2VyJzogJ1NcXHUwMGU5bGVjdGV1ciBkZSBjb3VsZXVycycsXG4gICdSJzogJ1InLFxuICAnRyc6ICdWJyxcbiAgJ0InOiAnQicsXG4gICdMZWZ0IHRvIHJpZ2h0JzogJ0dhdWNoZSBcXHUwMGUwIGRyb2l0ZScsXG4gICdSaWdodCB0byBsZWZ0JzogJ0Ryb2l0ZSBcXHUwMGUwIGdhdWNoZScsXG4gICdFbW90aWNvbnMuLi4nOiAnXFx1MDBjOW1vdGljXFx1MDBmNG5lcy4uLicsXG4gICdNZXRhZGF0YSBhbmQgRG9jdW1lbnQgUHJvcGVydGllcyc6ICdNXFx1MDBlOXRhZG9ublxcdTAwZTllcyBldCBwcm9wcmlcXHUwMGU5dFxcdTAwZTlzIGR1IGRvY3VtZW50JyxcbiAgJ1RpdGxlJzogJ1RpdHJlJyxcbiAgJ0tleXdvcmRzJzogJ01vdHMtY2xcXHUwMGU5cycsXG4gICdEZXNjcmlwdGlvbic6ICdEZXNjcmlwdGlvbicsXG4gICdSb2JvdHMnOiAnUm9ib3RzJyxcbiAgJ0F1dGhvcic6ICdBdXRldXInLFxuICAnRW5jb2RpbmcnOiAnRW5jb2RhZ2UnLFxuICAnRnVsbHNjcmVlbic6ICdQbGVpbiBcXHUwMGU5Y3JhbicsXG4gICdBY3Rpb24nOiAnQWN0aW9uJyxcbiAgJ1Nob3J0Y3V0JzogJ1JhY2NvdXJjaScsXG4gICdIZWxwJzogJ0FpZGUnLFxuICAnQWRkcmVzcyc6ICdBZHJlc3NlJyxcbiAgJ0ZvY3VzIHRvIG1lbnViYXInOiAnQ2libGVyIGxhIGJhcnJlIGRlIG1lbnUnLFxuICAnRm9jdXMgdG8gdG9vbGJhcic6ICdDaWJsZXIgbGEgYmFycmUgZFxcJ291dGlscycsXG4gICdGb2N1cyB0byBlbGVtZW50IHBhdGgnOiAnQ2libGVyIGxlIGNoZW1pbiB2ZXJzIGxcXCdcXHUwMGU5bFxcdTAwZTltZW50JyxcbiAgJ0ZvY3VzIHRvIGNvbnRleHR1YWwgdG9vbGJhcic6ICdDaWJsZXIgbGEgYmFycmUgZFxcJ291dGlscyBjb250ZXh0dWVsbGUnLFxuICAnSW5zZXJ0IGxpbmsgKGlmIGxpbmsgcGx1Z2luIGFjdGl2YXRlZCknOiAnSW5zXFx1MDBlOXJlciB1biBsaWVuIChzaSBsZSBtb2R1bGUgbGluayBlc3QgYWN0aXZcXHUwMGU5KScsXG4gICdTYXZlIChpZiBzYXZlIHBsdWdpbiBhY3RpdmF0ZWQpJzogJ0VucmVnaXN0cmVyIChzaSBsZSBtb2R1bGUgc2F2ZSBlc3QgYWN0aXZcXHUwMGU5KScsXG4gICdGaW5kIChpZiBzZWFyY2hyZXBsYWNlIHBsdWdpbiBhY3RpdmF0ZWQpJzogJ1JlY2hlcmNoZXIgKHNpIGxlIG1vZHVsZSBzZWFyY2hyZXBsYWNlIGVzdCBhY3RpdlxcdTAwZTkpJyxcbiAgJ1BsdWdpbnMgaW5zdGFsbGVkICh7MH0pOic6ICdNb2R1bGVzIGluc3RhbGxcXHUwMGU5cyAoezB9KSA6ICcsXG4gICdQcmVtaXVtIHBsdWdpbnM6JzogJ01vZHVsZXMgcHJlbWl1bSA6JyxcbiAgJ0xlYXJuIG1vcmUuLi4nOiAnRW4gc2F2b2lyIHBsdXMuLi4nLFxuICAnWW91IGFyZSB1c2luZyB7MH0nOiAnVm91cyB1dGlsaXNleiB7MH0nLFxuICAnUGx1Z2lucyc6ICdQbHVnaW5zJyxcbiAgJ0hhbmR5IFNob3J0Y3V0cyc6ICdSYWNjb3VyY2lzIHV0aWxlcycsXG4gICdIb3Jpem9udGFsIGxpbmUnOiAnTGlnbmUgaG9yaXpvbnRhbGUnLFxuICAnSW5zZXJ0XFwvZWRpdCBpbWFnZSc6ICdJbnNcXHUwMGU5cmVyXFwvbW9kaWZpZXIgdW5lIGltYWdlJyxcbiAgJ0ltYWdlIGRlc2NyaXB0aW9uJzogJ0Rlc2NyaXB0aW9uIGRlIGxcXCdpbWFnZScsXG4gICdTb3VyY2UnOiAnU291cmNlJyxcbiAgJ0RpbWVuc2lvbnMnOiAnRGltZW5zaW9ucycsXG4gICdDb25zdHJhaW4gcHJvcG9ydGlvbnMnOiAnQ29uc2VydmVyIGxlcyBwcm9wb3J0aW9ucycsXG4gICdHZW5lcmFsJzogJ0dcXHUwMGU5blxcdTAwZTlyYWwnLFxuICAnQWR2YW5jZWQnOiAnQXZhbmNcXHUwMGU5JyxcbiAgJ1N0eWxlJzogJ1N0eWxlJyxcbiAgJ1ZlcnRpY2FsIHNwYWNlJzogJ0VzcGFjZW1lbnQgdmVydGljYWwnLFxuICAnSG9yaXpvbnRhbCBzcGFjZSc6ICdFc3BhY2VtZW50IGhvcml6b250YWwnLFxuICAnQm9yZGVyJzogJ0JvcmR1cmUnLFxuICAnSW5zZXJ0IGltYWdlJzogJ0luc1xcdTAwZTlyZXIgdW5lIGltYWdlJyxcbiAgJ0ltYWdlLi4uJzogJ0ltYWdlLi4uJyxcbiAgJ0ltYWdlIGxpc3QnOiAnTGlzdGUgZFxcJ2ltYWdlcycsXG4gICdSb3RhdGUgY291bnRlcmNsb2Nrd2lzZSc6ICdSb3RhdGlvbiBhbnRpLWhvcmFpcmUnLFxuICAnUm90YXRlIGNsb2Nrd2lzZSc6ICdSb3RhdGlvbiBob3JhaXJlJyxcbiAgJ0ZsaXAgdmVydGljYWxseSc6ICdSZXRvdXJuZW1lbnQgdmVydGljYWwnLFxuICAnRmxpcCBob3Jpem9udGFsbHknOiAnUmV0b3VybmVtZW50IGhvcml6b250YWwnLFxuICAnRWRpdCBpbWFnZSc6ICdNb2RpZmllciBsXFwnaW1hZ2UnLFxuICAnSW1hZ2Ugb3B0aW9ucyc6ICdPcHRpb25zIGRlIGxcXCdpbWFnZScsXG4gICdab29tIGluJzogJ1pvb21lcicsXG4gICdab29tIG91dCc6ICdEXFx1MDBlOXpvb21lcicsXG4gICdDcm9wJzogJ1JvZ25lcicsXG4gICdSZXNpemUnOiAnUmVkaW1lbnNpb25uZXInLFxuICAnT3JpZW50YXRpb24nOiAnT3JpZW50YXRpb24nLFxuICAnQnJpZ2h0bmVzcyc6ICdMdW1pbm9zaXRcXHUwMGU5JyxcbiAgJ1NoYXJwZW4nOiAnQWZmaW5lcicsXG4gICdDb250cmFzdCc6ICdDb250cmFzdGUnLFxuICAnQ29sb3IgbGV2ZWxzJzogJ05pdmVhdXggZGUgY291bGV1cicsXG4gICdHYW1tYSc6ICdHYW1tYScsXG4gICdJbnZlcnQnOiAnSW52ZXJzZXInLFxuICAnQXBwbHknOiAnQXBwbGlxdWVyJyxcbiAgJ0JhY2snOiAnUmV0b3VyJyxcbiAgJ0luc2VydCBkYXRlXFwvdGltZSc6ICdJbnNcXHUwMGU5cmVyIGRhdGVcXC9oZXVyZScsXG4gICdEYXRlXFwvdGltZSc6ICdEYXRlXFwvaGV1cmUnLFxuICAnSW5zZXJ0XFwvRWRpdCBMaW5rJzogJ0luc1xcdTAwZTlyZXJcXC9Nb2RpZmllciBsaWVuJyxcbiAgJ0luc2VydFxcL2VkaXQgbGluayc6ICdJbnNcXHUwMGU5cmVyXFwvbW9kaWZpZXIgdW4gbGllbicsXG4gICdUZXh0IHRvIGRpc3BsYXknOiAnVGV4dGUgXFx1MDBlMCBhZmZpY2hlcicsXG4gICdVcmwnOiAnVXJsJyxcbiAgJ09wZW4gbGluayBpbi4uLic6ICdPdXZyaXIgbGUgbGllbiBkYW5zLi4uJyxcbiAgJ0N1cnJlbnQgd2luZG93JzogJ0ZlblxcdTAwZWF0cmUgYWN0aXZlJyxcbiAgJ05vbmUnOiAnblxcL2EnLFxuICAnTmV3IHdpbmRvdyc6ICdOb3V2ZWxsZSBmZW5cXHUwMGVhdHJlJyxcbiAgJ1JlbW92ZSBsaW5rJzogJ0VubGV2ZXIgbGUgbGllbicsXG4gICdBbmNob3JzJzogJ0FuY3JlcycsXG4gICdMaW5rLi4uJzogJ0xpZW4uLi4nLFxuICAnUGFzdGUgb3IgdHlwZSBhIGxpbmsnOiAnQ29sbGVyIG91IHRhcGVyIHVuIGxpZW4nLFxuICAnVGhlIFVSTCB5b3UgZW50ZXJlZCBzZWVtcyB0byBiZSBhbiBlbWFpbCBhZGRyZXNzLiBEbyB5b3Ugd2FudCB0byBhZGQgdGhlIHJlcXVpcmVkIG1haWx0bzogcHJlZml4Pyc6ICdMXFwnVVJMIHF1ZSB2b3VzIGF2ZXogZW50clxcdTAwZTllIHNlbWJsZSBcXHUwMGVhdHJlIHVuZSBhZHJlc3NlIGUtbWFpbC4gVm91bGV6LXZvdXMgYWpvdXRlciBsZSBwclxcdTAwZTlmaXhlIG1haWx0bzogblxcdTAwZTljZXNzYWlyZT8nLFxuICAnVGhlIFVSTCB5b3UgZW50ZXJlZCBzZWVtcyB0byBiZSBhbiBleHRlcm5hbCBsaW5rLiBEbyB5b3Ugd2FudCB0byBhZGQgdGhlIHJlcXVpcmVkIGh0dHA6XFwvXFwvIHByZWZpeD8nOiAnTFxcJ1VSTCBxdWUgdm91cyBhdmV6IGVudHJcXHUwMGU5ZSBzZW1ibGUgXFx1MDBlYXRyZSB1biBsaWVuIGV4dGVybmUuIFZvdWxlei12b3VzIGFqb3V0ZXIgbGUgcHJcXHUwMGU5Zml4ZSBodHRwOlxcL1xcLyBuXFx1MDBlOWNlc3NhaXJlPycsXG4gICdMaW5rIGxpc3QnOiAnTGlzdGUgZGUgbGllbnMnLFxuICAnSW5zZXJ0IHZpZGVvJzogJ0luc1xcdTAwZTlyZXIgdW5lIHZpZFxcdTAwZTlvJyxcbiAgJ0luc2VydFxcL2VkaXQgdmlkZW8nOiAnSW5zXFx1MDBlOXJlclxcL21vZGlmaWVyIHVuZSB2aWRcXHUwMGU5bycsXG4gICdJbnNlcnRcXC9lZGl0IG1lZGlhJzogJ0luc1xcdTAwZTlyZXJcXC9tb2RpZmllciB1biBtXFx1MDBlOWRpYScsXG4gICdBbHRlcm5hdGl2ZSBzb3VyY2UnOiAnU291cmNlIGFsdGVybmF0aXZlJyxcbiAgJ0FsdGVybmF0aXZlIHNvdXJjZSBVUkwnOiAnVVJMIGRlIGxhIHNvdXJjZSBhbHRlcm5hdGl2ZScsXG4gICdNZWRpYSBwb3N0ZXIgKEltYWdlIFVSTCknOiAnQWZmaWNoZSBkZSBtXFx1MDBlOWRpYSAoVVJMIGRlIGxcXCdpbWFnZSknLFxuICAnUGFzdGUgeW91ciBlbWJlZCBjb2RlIGJlbG93Oic6ICdDb2xsZXogdm90cmUgY29kZSBkXFwnaW50XFx1MDBlOWdyYXRpb24gY2ktZGVzc291cyA6JyxcbiAgJ0VtYmVkJzogJ0ludFxcdTAwZTlncmVyJyxcbiAgJ01lZGlhLi4uJzogJ01cXHUwMGU5ZGlhLi4uJyxcbiAgJ05vbmJyZWFraW5nIHNwYWNlJzogJ0VzcGFjZSBpbnNcXHUwMGU5Y2FibGUnLFxuICAnUGFnZSBicmVhayc6ICdTYXV0IGRlIHBhZ2UnLFxuICAnUGFzdGUgYXMgdGV4dCc6ICdDb2xsZXIgY29tbWUgdGV4dGUnLFxuICAnUHJldmlldyc6ICdQclxcdTAwZTl2aXN1YWxpc2VyJyxcbiAgJ1ByaW50Li4uJzogJ0ltcHJpbWVyLi4uJyxcbiAgJ1NhdmUnOiAnRW5yZWdpc3RyZXInLFxuICAnRmluZCc6ICdDaGVyY2hlcicsXG4gICdSZXBsYWNlIHdpdGgnOiAnUmVtcGxhY2VyIHBhcicsXG4gICdSZXBsYWNlJzogJ1JlbXBsYWNlcicsXG4gICdSZXBsYWNlIGFsbCc6ICdUb3V0IHJlbXBsYWNlcicsXG4gICdQcmV2aW91cyc6ICdQclxcdTAwZTljXFx1MDBlOWRlbnRlJyxcbiAgJ05leHQnOiAnU3VpdicsXG4gICdGaW5kIGFuZCByZXBsYWNlLi4uJzogJ1Ryb3V2ZXIgZXQgcmVtcGxhY2VyLi4uJyxcbiAgJ0NvdWxkIG5vdCBmaW5kIHRoZSBzcGVjaWZpZWQgc3RyaW5nLic6ICdJbXBvc3NpYmxlIGRlIHRyb3V2ZXIgbGEgY2hhXFx1MDBlZW5lIHNwXFx1MDBlOWNpZmlcXHUwMGU5ZS4nLFxuICAnTWF0Y2ggY2FzZSc6ICdSZXNwZWN0ZXIgbGEgY2Fzc2UnLFxuICAnRmluZCB3aG9sZSB3b3JkcyBvbmx5JzogJ01vdCBlbnRpZXInLFxuICAnU3BlbGwgY2hlY2snOiAnVlxcdTAwZTlyaWZpY2F0aW9uIGRlIGxcXCdvcnRob2dyYXBoZScsXG4gICdJZ25vcmUnOiAnSWdub3JlcicsXG4gICdJZ25vcmUgYWxsJzogJ1RvdXQgaWdub3JlcicsXG4gICdGaW5pc2gnOiAnRmluaWUnLFxuICAnQWRkIHRvIERpY3Rpb25hcnknOiAnQWpvdXRlciBhdSBkaWN0aW9ubmFpcmUnLFxuICAnSW5zZXJ0IHRhYmxlJzogJ0luc1xcdTAwZTlyZXIgdW4gdGFibGVhdScsXG4gICdUYWJsZSBwcm9wZXJ0aWVzJzogJ1Byb3ByaVxcdTAwZTl0XFx1MDBlOXMgZHUgdGFibGVhdScsXG4gICdEZWxldGUgdGFibGUnOiAnU3VwcHJpbWVyIGxlIHRhYmxlYXUnLFxuICAnQ2VsbCc6ICdDZWxsdWxlJyxcbiAgJ1Jvdyc6ICdMaWduZScsXG4gICdDb2x1bW4nOiAnQ29sb25uZScsXG4gICdDZWxsIHByb3BlcnRpZXMnOiAnUHJvcHJpXFx1MDBlOXRcXHUwMGU5cyBkZSBsYSBjZWxsdWxlJyxcbiAgJ01lcmdlIGNlbGxzJzogJ0Z1c2lvbm5lciBsZXMgY2VsbHVsZXMnLFxuICAnU3BsaXQgY2VsbCc6ICdEaXZpc2VyIGxhIGNlbGx1bGUnLFxuICAnSW5zZXJ0IHJvdyBiZWZvcmUnOiAnSW5zXFx1MDBlOXJlciB1bmUgbGlnbmUgYXZhbnQnLFxuICAnSW5zZXJ0IHJvdyBhZnRlcic6ICdJbnNcXHUwMGU5cmVyIHVuZSBsaWduZSBhcHJcXHUwMGU4cycsXG4gICdEZWxldGUgcm93JzogJ0VmZmFjZXIgbGEgbGlnbmUnLFxuICAnUm93IHByb3BlcnRpZXMnOiAnUHJvcHJpXFx1MDBlOXRcXHUwMGU5cyBkZSBsYSBsaWduZScsXG4gICdDdXQgcm93JzogJ0NvdXBlciBsYSBsaWduZScsXG4gICdDb3B5IHJvdyc6ICdDb3BpZXIgbGEgbGlnbmUnLFxuICAnUGFzdGUgcm93IGJlZm9yZSc6ICdDb2xsZXIgbGEgbGlnbmUgYXZhbnQnLFxuICAnUGFzdGUgcm93IGFmdGVyJzogJ0NvbGxlciBsYSBsaWduZSBhcHJcXHUwMGU4cycsXG4gICdJbnNlcnQgY29sdW1uIGJlZm9yZSc6ICdJbnNcXHUwMGU5cmVyIHVuZSBjb2xvbm5lIGF2YW50JyxcbiAgJ0luc2VydCBjb2x1bW4gYWZ0ZXInOiAnSW5zXFx1MDBlOXJlciB1bmUgY29sb25uZSBhcHJcXHUwMGU4cycsXG4gICdEZWxldGUgY29sdW1uJzogJ0VmZmFjZXIgbGEgY29sb25uZScsXG4gICdDb2xzJzogJ0NvbG9ubmVzJyxcbiAgJ1Jvd3MnOiAnTGlnbmVzJyxcbiAgJ1dpZHRoJzogJ0xhcmdldXInLFxuICAnSGVpZ2h0JzogJ0hhdXRldXInLFxuICAnQ2VsbCBzcGFjaW5nJzogJ0VzcGFjZW1lbnQgaW50ZXItY2VsbHVsbGVzJyxcbiAgJ0NlbGwgcGFkZGluZyc6ICdFc3BhY2VtZW50IGludGVybmUgY2VsbHVsZScsXG4gICdTaG93IGNhcHRpb24nOiAnQWZmaWNoZXIgbGUgc291cy10aXRyYWdlJyxcbiAgJ0xlZnQnOiAnR2F1Y2hlJyxcbiAgJ0NlbnRlcic6ICdDZW50clxcdTAwZTknLFxuICAnUmlnaHQnOiAnRHJvaXRlJyxcbiAgJ0NlbGwgdHlwZSc6ICdUeXBlIGRlIGNlbGx1bGUnLFxuICAnU2NvcGUnOiAnRXRlbmR1ZScsXG4gICdBbGlnbm1lbnQnOiAnQWxpZ25lbWVudCcsXG4gICdIIEFsaWduJzogJ0FsaWduZW1lbnQgSCcsXG4gICdWIEFsaWduJzogJ0FsaWduZW1lbnQgVicsXG4gICdUb3AnOiAnSGF1dCcsXG4gICdNaWRkbGUnOiAnTWlsaWV1JyxcbiAgJ0JvdHRvbSc6ICdCYXMnLFxuICAnSGVhZGVyIGNlbGwnOiAnQ2VsbHVsZSBkXFwnZW4tdFxcdTAwZWF0ZScsXG4gICdSb3cgZ3JvdXAnOiAnR3JvdXBlIGRlIGxpZ25lcycsXG4gICdDb2x1bW4gZ3JvdXAnOiAnR3JvdXBlIGRlIGNvbG9ubmVzJyxcbiAgJ1JvdyB0eXBlJzogJ1R5cGUgZGUgbGlnbmUnLFxuICAnSGVhZGVyJzogJ0VuLXRcXHUwMGVhdGUnLFxuICAnQm9keSc6ICdDb3JwcycsXG4gICdGb290ZXInOiAnUGllZCcsXG4gICdCb3JkZXIgY29sb3InOiAnQ291bGV1ciBkZSBsYSBib3JkdXJlJyxcbiAgJ0luc2VydCB0ZW1wbGF0ZS4uLic6ICdJbnNcXHUwMGU5cmVyIHVuIG1vZFxcdTAwZThsZS4uLicsXG4gICdUZW1wbGF0ZXMnOiAnVGhcXHUwMGU4bWVzJyxcbiAgJ1RlbXBsYXRlJzogJ01vZFxcdTAwZThsZScsXG4gICdUZXh0IGNvbG9yJzogJ0NvdWxldXIgZHUgdGV4dGUnLFxuICAnQmFja2dyb3VuZCBjb2xvcic6ICdDb3VsZXVyIGRcXCdhcnJpXFx1MDBlOHJlLXBsYW4nLFxuICAnQ3VzdG9tLi4uJzogJ1BlcnNvbm5hbGlzXFx1MDBlOS4uLicsXG4gICdDdXN0b20gY29sb3InOiAnQ291bGV1ciBwZXJzb25uYWxpc1xcdTAwZTllJyxcbiAgJ05vIGNvbG9yJzogJ0F1Y3VuZSBjb3VsZXVyJyxcbiAgJ1JlbW92ZSBjb2xvcic6ICdTdXBwcmltZXIgbGEgY291bGV1cicsXG4gICdUYWJsZSBvZiBDb250ZW50cyc6ICdUYWJsZSBkZXMgbWF0aVxcdTAwZThyZXMnLFxuICAnU2hvdyBibG9ja3MnOiAnQWZmaWNoZXIgbGVzIGJsb2NzJyxcbiAgJ1Nob3cgaW52aXNpYmxlIGNoYXJhY3RlcnMnOiAnQWZmaWNoZXIgbGVzIGNhcmFjdFxcdTAwZThyZXMgaW52aXNpYmxlcycsXG4gICdXb3JkIGNvdW50JzogJ05vbWJyZSBkZSBtb3RzJyxcbiAgJ0NvdW50JzogJ1RvdGFsJyxcbiAgJ0RvY3VtZW50JzogJ0RvY3VtZW50JyxcbiAgJ1NlbGVjdGlvbic6ICdTXFx1MDBlOWxlY3Rpb24nLFxuICAnV29yZHMnOiAnTW90cycsXG4gICdXb3JkczogezB9JzogJ01vdHMgOiB7MH0nLFxuICAnezB9IHdvcmRzJzogJ3swfSBtb3RzJyxcbiAgJ0ZpbGUnOiAnRmljaGllcicsXG4gICdFZGl0JzogJ0VkaXRlcicsXG4gICdJbnNlcnQnOiAnSW5zXFx1MDBlOXJlcicsXG4gICdWaWV3JzogJ1ZvaXInLFxuICAnRm9ybWF0JzogJ0Zvcm1hdCcsXG4gICdUYWJsZSc6ICdUYWJsZWF1JyxcbiAgJ1Rvb2xzJzogJ091dGlscycsXG4gICdQb3dlcmVkIGJ5IHswfSc6ICdQcm9wdWxzXFx1MDBlOSBwYXIgezB9JyxcbiAgJ1JpY2ggVGV4dCBBcmVhLiBQcmVzcyBBTFQtRjkgZm9yIG1lbnUuIFByZXNzIEFMVC1GMTAgZm9yIHRvb2xiYXIuIFByZXNzIEFMVC0wIGZvciBoZWxwJzogJ1pvbmUgVGV4dGUgUmljaGUuIEFwcHV5ZXIgc3VyIEFMVC1GOSBwb3VyIGxlIG1lbnUuIEFwcHV5ZXIgc3VyIEFMVC1GMTAgcG91ciBsYSBiYXJyZSBkXFwnb3V0aWxzLiBBcHB1eWVyIHN1ciBBTFQtMCBwb3VyIGRlIGxcXCdhaWRlLicsXG4gICdJbWFnZSB0aXRsZSc6ICdUaXRyZSBkXFwnaW1hZ2UnLFxuICAnQm9yZGVyIHdpZHRoJzogJ1xcdTAwYzlwYWlzc2V1ciBkZSBsYSBib3JkdXJlJyxcbiAgJ0JvcmRlciBzdHlsZSc6ICdTdHlsZSBkZSBsYSBib3JkdXJlJyxcbiAgJ0Vycm9yJzogJ0VycmV1cicsXG4gICdXYXJuJzogJ0F2ZXJ0aXInLFxuICAnVmFsaWQnOiAnVmFsaWRlJyxcbiAgJ1RvIG9wZW4gdGhlIHBvcHVwLCBwcmVzcyBTaGlmdCtFbnRlcic6ICdQb3VyIG91dnJpciBsYSBwb3B1cCwgYXBwdXlleiBzdXIgTWFqK0VudHJcXHUwMGU5ZScsXG4gICdSaWNoIFRleHQgQXJlYS4gUHJlc3MgQUxULTAgZm9yIGhlbHAuJzogJ1pvbmUgZGUgdGV4dGUgcmljaGUuIEFwcHV5ZXogc3VyIEFMVC0wIHBvdXIgbFxcJ2FpZGUuJyxcbiAgJ1N5c3RlbSBGb250JzogJ1BvbGljZSBzeXN0XFx1MDBlOG1lJyxcbiAgJ0ZhaWxlZCB0byB1cGxvYWQgaW1hZ2U6IHswfSc6ICdcXHUwMGM5Y2hlYyBkXFwnZW52b2kgZGUgbFxcJ2ltYWdlXFx1MDBhMDogezB9JyxcbiAgJ0ZhaWxlZCB0byBsb2FkIHBsdWdpbjogezB9IGZyb20gdXJsIHsxfSc6ICdcXHUwMGM5Y2hlYyBkZSBjaGFyZ2VtZW50IGR1IHBsdWctaW5cXHUwMGEwOiB7MH0gXFx1MDBlMCBwYXJ0aXIgZGUgbFxcdTIwMTlVUkwgezF9JyxcbiAgJ0ZhaWxlZCB0byBsb2FkIHBsdWdpbiB1cmw6IHswfSc6ICdcXHUwMGM5Y2hlYyBkZSBjaGFyZ2VtZW50IGRlIGxcXCdVUkwgZHUgcGx1Zy1pblxcdTAwYTA6IHswfScsXG4gICdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBwbHVnaW46IHswfSc6ICdcXHUwMGM5Y2hlYyBkXFwnaW5pdGlhbGlzYXRpb24gZHUgcGx1Zy1pblxcdTAwYTA6IHswfScsXG4gICdleGFtcGxlJzogJ2V4ZW1wbGUnLFxuICAnU2VhcmNoJzogJ1JlY2hlcmNoZXInLFxuICAnQWxsJzogJ1RvdXQnLFxuICAnQ3VycmVuY3knOiAnRGV2aXNlJyxcbiAgJ1RleHQnOiAnVGV4dGUnLFxuICAnUXVvdGF0aW9ucyc6ICdDaXRhdGlvbnMnLFxuICAnTWF0aGVtYXRpY2FsJzogJ09wXFx1MDBlOXJhdGV1cnMgbWF0aFxcdTAwZTltYXRpcXVlcycsXG4gICdFeHRlbmRlZCBMYXRpbic6ICdMYXRpbiBcXHUwMGU5dGVuZHUnLFxuICAnU3ltYm9scyc6ICdTeW1ib2xlcycsXG4gICdBcnJvd3MnOiAnRmxcXHUwMGU4Y2hlcycsXG4gICdVc2VyIERlZmluZWQnOiAnRFxcdTAwZTlmaW5pIHBhciBsXFwndXRpbGlzYXRldXInLFxuICAnZG9sbGFyIHNpZ24nOiAnU3ltYm9sZSBkb2xsYXInLFxuICAnY3VycmVuY3kgc2lnbic6ICdTeW1ib2xlIGRldmlzZScsXG4gICdldXJvLWN1cnJlbmN5IHNpZ24nOiAnU3ltYm9sZSBldXJvJyxcbiAgJ2NvbG9uIHNpZ24nOiAnU3ltYm9sZSBjb2xcXHUwMGYzbicsXG4gICdjcnV6ZWlybyBzaWduJzogJ1N5bWJvbGUgY3J1emVpcm8nLFxuICAnZnJlbmNoIGZyYW5jIHNpZ24nOiAnU3ltYm9sZSBmcmFuYyBmcmFuXFx1MDBlN2FpcycsXG4gICdsaXJhIHNpZ24nOiAnU3ltYm9sZSBsaXJlJyxcbiAgJ21pbGwgc2lnbic6ICdTeW1ib2xlIG1pbGxpXFx1MDBlOG1lJyxcbiAgJ25haXJhIHNpZ24nOiAnU3ltYm9sZSBuYWlyYScsXG4gICdwZXNldGEgc2lnbic6ICdTeW1ib2xlIHBlc2V0YScsXG4gICdydXBlZSBzaWduJzogJ1N5bWJvbGUgcm91cGllJyxcbiAgJ3dvbiBzaWduJzogJ1N5bWJvbGUgd29uJyxcbiAgJ25ldyBzaGVxZWwgc2lnbic6ICdTeW1ib2xlIG5vdXZlYXUgY2hcXHUwMGU5a2VsJyxcbiAgJ2Rvbmcgc2lnbic6ICdTeW1ib2xlIGRvbmcnLFxuICAna2lwIHNpZ24nOiAnU3ltYm9sZSBraXAnLFxuICAndHVncmlrIHNpZ24nOiAnU3ltYm9sZSB0b3VncmlrJyxcbiAgJ2RyYWNobWEgc2lnbic6ICdTeW1ib2xlIGRyYWNobWUnLFxuICAnZ2VybWFuIHBlbm55IHN5bWJvbCc6ICdTeW1ib2xlIHBmZW5uaWcnLFxuICAncGVzbyBzaWduJzogJ1N5bWJvbGUgcGVzbycsXG4gICdndWFyYW5pIHNpZ24nOiAnU3ltYm9sZSBndWFyYW5pJyxcbiAgJ2F1c3RyYWwgc2lnbic6ICdTeW1ib2xlIGF1c3RyYWwnLFxuICAnaHJ5dm5pYSBzaWduJzogJ1N5bWJvbGUgaHJ5dm5pYScsXG4gICdjZWRpIHNpZ24nOiAnU3ltYm9sZSBjZWRpJyxcbiAgJ2xpdnJlIHRvdXJub2lzIHNpZ24nOiAnU3ltYm9sZSBsaXZyZSB0b3Vybm9pcycsXG4gICdzcGVzbWlsbyBzaWduJzogJ1N5bWJvbGUgc3Blc21pbG8nLFxuICAndGVuZ2Ugc2lnbic6ICdTeW1ib2xlIHRlbmdlJyxcbiAgJ2luZGlhbiBydXBlZSBzaWduJzogJ1N5bWJvbGUgcm91cGllIGluZGllbm5lJyxcbiAgJ3R1cmtpc2ggbGlyYSBzaWduJzogJ1N5bWJvbGUgbGlyZSB0dXJxdWUnLFxuICAnbm9yZGljIG1hcmsgc2lnbic6ICdTeW1ib2xlIGR1IG1hcmsgbm9yZGlxdWUnLFxuICAnbWFuYXQgc2lnbic6ICdTeW1ib2xlIG1hbmF0JyxcbiAgJ3J1YmxlIHNpZ24nOiAnU3ltYm9sZSByb3VibGUnLFxuICAneWVuIGNoYXJhY3Rlcic6ICdTaW5vZ3JhbW1lIFllbicsXG4gICd5dWFuIGNoYXJhY3Rlcic6ICdTaW5vZ3JhbW1lIFl1YW4nLFxuICAneXVhbiBjaGFyYWN0ZXIsIGluIGhvbmcga29uZyBhbmQgdGFpd2FuJzogJ1Npbm9ncmFtbWUgWXVhbiwgSG9uZyBLb25nIGV0IFRhaXdhbicsXG4gICd5ZW5cXC95dWFuIGNoYXJhY3RlciB2YXJpYW50IG9uZSc6ICdTaW5vZ3JhbW1lIFllblxcL1l1YW4sIHByZW1pXFx1MDBlOHJlIHZhcmlhbnRlJyxcbiAgJ0xvYWRpbmcgZW1vdGljb25zLi4uJzogJ0NoYXJnZW1lbnQgZGVzIFxcdTAwZTltb3RpY1xcdTAwZjRuZXMgZW4gY291cnMuLi4nLFxuICAnQ291bGQgbm90IGxvYWQgZW1vdGljb25zJzogJ1xcdTAwYzljaGVjIGRlIGNoYXJnZW1lbnQgZGVzIFxcdTAwZTltb3RpY1xcdTAwZjRuZXMnLFxuICAnUGVvcGxlJzogJ1BlcnNvbm5lcycsXG4gICdBbmltYWxzIGFuZCBOYXR1cmUnOiAnQW5pbWF1eCAmIG5hdHVyZScsXG4gICdGb29kIGFuZCBEcmluayc6ICdOb3Vycml0dXJlICYgYm9pc3NvbnMnLFxuICAnQWN0aXZpdHknOiAnQWN0aXZpdFxcdTAwZTknLFxuICAnVHJhdmVsIGFuZCBQbGFjZXMnOiAnVm95YWdlcyAmIGxpZXV4JyxcbiAgJ09iamVjdHMnOiAnT2JqZXRzJyxcbiAgJ0ZsYWdzJzogJ0RyYXBlYXV4JyxcbiAgJ0NoYXJhY3RlcnMnOiAnQ2FyYWN0XFx1MDBlOHJlcycsXG4gICdDaGFyYWN0ZXJzIChubyBzcGFjZXMpJzogJ0NhcmFjdFxcdTAwZThyZXMgKGVzcGFjZXMgbm9uIGNvbXByaXMpJyxcbiAgJ3swfSBjaGFyYWN0ZXJzJzogJ3swfVxcdTAwYTBjYXJhY3RcXHUwMGU4cmVzJyxcbiAgJ0Vycm9yOiBGb3JtIHN1Ym1pdCBmaWVsZCBjb2xsaXNpb24uJzogJ0VycmV1clxcdTAwYTA6IGNvbmZsaXQgZGUgY2hhbXBzIGxvcnMgZGUgbGEgc291bWlzc2lvbiBkdSBmb3JtdWxhaXJlLicsXG4gICdFcnJvcjogTm8gZm9ybSBlbGVtZW50IGZvdW5kLic6ICdFcnJldXIgOiBhdWN1biBcXHUwMGU5bFxcdTAwZTltZW50IGRlIGZvcm11bGFpcmUgdHJvdXZcXHUwMGU5LicsXG4gICdVcGRhdGUnOiAnTWV0dHJlIFxcdTAwZTAgam91cicsXG4gICdDb2xvciBzd2F0Y2gnOiAnXFx1MDBjOWNoYW50aWxsb24gZGUgY291bGV1cnMnLFxuICAnVHVycXVvaXNlJzogJ1R1cnF1b2lzZScsXG4gICdHcmVlbic6ICdWZXJ0JyxcbiAgJ0JsdWUnOiAnQmxldScsXG4gICdQdXJwbGUnOiAnVmlvbGV0JyxcbiAgJ05hdnkgQmx1ZSc6ICdCbGV1IG1hcmluZScsXG4gICdEYXJrIFR1cnF1b2lzZSc6ICdUdXJxdW9pc2UgZm9uY1xcdTAwZTknLFxuICAnRGFyayBHcmVlbic6ICdWZXJ0IGZvbmNcXHUwMGU5JyxcbiAgJ01lZGl1bSBCbHVlJzogJ0JsZXUgbW95ZW4nLFxuICAnTWVkaXVtIFB1cnBsZSc6ICdWaW9sZXQgbW95ZW4nLFxuICAnTWlkbmlnaHQgQmx1ZSc6ICdCbGV1IGRlIG1pbnVpdCcsXG4gICdZZWxsb3cnOiAnSmF1bmUnLFxuICAnT3JhbmdlJzogJ09yYW5nZScsXG4gICdSZWQnOiAnUm91Z2UnLFxuICAnTGlnaHQgR3JheSc6ICdHcmlzIGNsYWlyJyxcbiAgJ0dyYXknOiAnR3JpcycsXG4gICdEYXJrIFllbGxvdyc6ICdKYXVuZSBmb25jXFx1MDBlOScsXG4gICdEYXJrIE9yYW5nZSc6ICdPcmFuZ2UgZm9uY1xcdTAwZTknLFxuICAnRGFyayBSZWQnOiAnUm91Z2UgZm9uY1xcdTAwZTknLFxuICAnTWVkaXVtIEdyYXknOiAnR3JpcyBtb3llbicsXG4gICdEYXJrIEdyYXknOiAnR3JpcyBmb25jXFx1MDBlOScsXG4gICdMaWdodCBHcmVlbic6ICdWZXJ0IGNsYWlyJyxcbiAgJ0xpZ2h0IFllbGxvdyc6ICdKYXVuZSBjbGFpcicsXG4gICdMaWdodCBSZWQnOiAnUm91Z2UgY2xhaXInLFxuICAnTGlnaHQgUHVycGxlJzogJ1Zpb2xldCBjbGFpcicsXG4gICdMaWdodCBCbHVlJzogJ0JsZXUgY2xhaXInLFxuICAnRGFyayBQdXJwbGUnOiAnVmlvbGV0IGZvbmNcXHUwMGU5JyxcbiAgJ0RhcmsgQmx1ZSc6ICdCbGV1IGZvbmNcXHUwMGU5JyxcbiAgJ0JsYWNrJzogJ05vaXInLFxuICAnV2hpdGUnOiAnQmxhbmMnLFxuICAnU3dpdGNoIHRvIG9yIGZyb20gZnVsbHNjcmVlbiBtb2RlJzogJ1Bhc3NlciBlbiBvdSBxdWl0dGVyIGxlIG1vZGUgcGxlaW4gXFx1MDBlOWNyYW4nLFxuICAnT3BlbiBoZWxwIGRpYWxvZyc6ICdPdXZyaXIgbGEgYm9cXHUwMGVldGUgZGUgZGlhbG9ndWUgZFxcJ2FpZGUnLFxuICAnaGlzdG9yeSc6ICdoaXN0b3JpcXVlJyxcbiAgJ3N0eWxlcyc6ICdzdHlsZXMnLFxuICAnZm9ybWF0dGluZyc6ICdtaXNlIGVuIGZvcm1lJyxcbiAgJ2FsaWdubWVudCc6ICdhbGlnbmVtZW50JyxcbiAgJ2luZGVudGF0aW9uJzogJ3JldHJhaXQnLFxuICAncGVybWFuZW50IHBlbic6ICdmZXV0cmUgaW5kXFx1MDBlOWxcXHUwMGU5YmlsZScsXG4gICdjb21tZW50cyc6ICdjb21tZW50YWlyZXMnLFxuICAnRm9ybWF0IFBhaW50ZXInOiAnUmVwcm9kdWlyZSBsYSBtaXNlIGVuIGZvcm1lJyxcbiAgJ0luc2VydFxcL2VkaXQgaWZyYW1lJzogJ0luc1xcdTAwZTlyZXJcXC9tb2RpZmllciBpZnJhbWUnLFxuICAnQ2FwaXRhbGl6YXRpb24nOiAnTWlzZSBlbiBtYWp1c2N1bGVzJyxcbiAgJ2xvd2VyY2FzZSc6ICdtaW51c2N1bGUnLFxuICAnVVBQRVJDQVNFJzogJ01BSlVTQ1VMRScsXG4gICdUaXRsZSBDYXNlJzogJ0Nhc3NlIGR1IHRpdHJlJyxcbiAgJ1Blcm1hbmVudCBQZW4gUHJvcGVydGllcyc6ICdQcm9wcmlcXHUwMGU5dFxcdTAwZTlzIGR1IGZldXRyZSBpbmRcXHUwMGU5bFxcdTAwZTliaWxlJyxcbiAgJ1Blcm1hbmVudCBwZW4gcHJvcGVydGllcy4uLic6ICdQcm9wcmlcXHUwMGU5dFxcdTAwZTlzIGR1IGZldXRyZSBpbmRcXHUwMGU5bFxcdTAwZTliaWxlLi4uJyxcbiAgJ0ZvbnQnOiAnUG9saWNlJyxcbiAgJ1NpemUnOiAnVGFpbGxlJyxcbiAgJ01vcmUuLi4nOiAnUGx1cy4uLicsXG4gICdTcGVsbGNoZWNrIExhbmd1YWdlJzogJ0xhbmd1ZSBkdSBjb3JyZWN0ZXVyIG9ydGhvZ3JhcGhpcXVlJyxcbiAgJ1NlbGVjdC4uLic6ICdTXFx1MDBlOWxlY3Rpb25uZXIuLi4nLFxuICAnUHJlZmVyZW5jZXMnOiAnUHJcXHUwMGU5ZlxcdTAwZTlyZW5jZXMnLFxuICAnWWVzJzogJ091aScsXG4gICdObyc6ICdOb24nLFxuICAnS2V5Ym9hcmQgTmF2aWdhdGlvbic6ICdOYXZpZ2F0aW9uIGF1IGNsYXZpZXInLFxuICAnVmVyc2lvbic6ICdWZXJzaW9uJyxcbiAgJ0FuY2hvcic6ICdBbmNyZScsXG4gICdTcGVjaWFsIGNoYXJhY3Rlcic6ICdDYXJhY3RcXHUwMGU4cmVzIHNwXFx1MDBlOWNpYXV4JyxcbiAgJ0NvZGUgc2FtcGxlJzogJ0V4dHJhaXQgZGUgY29kZScsXG4gICdDb2xvcic6ICdDb3VsZXVyJyxcbiAgJ0Vtb3RpY29ucyc6ICdFbW90aWNcXHUwMGY0bmVzJyxcbiAgJ0RvY3VtZW50IHByb3BlcnRpZXMnOiAnUHJvcHJpXFx1MDBlOXRcXHUwMGU5IGR1IGRvY3VtZW50JyxcbiAgJ0ltYWdlJzogJ0ltYWdlJyxcbiAgJ0luc2VydCBsaW5rJzogJ0luc1xcdTAwZTlyZXIgdW4gbGllbicsXG4gICdUYXJnZXQnOiAnQ2libGUnLFxuICAnTGluayc6ICdMaWVuJyxcbiAgJ1Bvc3Rlcic6ICdQdWJsaWVyJyxcbiAgJ01lZGlhJzogJ01cXHUwMGU5ZGlhJyxcbiAgJ1ByaW50JzogJ0ltcHJpbWVyJyxcbiAgJ1ByZXYnOiAnUHJcXHUwMGU5YyAnLFxuICAnRmluZCBhbmQgcmVwbGFjZSc6ICdUcm91dmVyIGV0IHJlbXBsYWNlcicsXG4gICdXaG9sZSB3b3Jkcyc6ICdNb3RzIGVudGllcnMnLFxuICAnU3BlbGxjaGVjayc6ICdWXFx1MDBlOXJpZmljYXRpb24gb3J0aG9ncmFwaGlxdWUnLFxuICAnQ2FwdGlvbic6ICdUaXRyZScsXG4gICdJbnNlcnQgdGVtcGxhdGUnOiAnQWpvdXRlciB1biB0aFxcdTAwZThtZSdcbn0pXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9
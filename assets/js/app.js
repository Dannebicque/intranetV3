// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/app.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/09/2021 12:08

import '@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '@fortawesome/fontawesome-free/scss/solid.scss'

import $ from 'jquery'

import PerfectScrollbar from 'perfect-scrollbar'
import './validator-bs4'
import {getDataOptions} from './util'
import './material'
import './search'
import './modaler'

require('bootstrap')

import tinymce from 'tinymce/tinymce.min'
import 'tinymce/plugins/lists/plugin.min'
import 'tinymce/icons/default/icons.min'
// A theme is also required
import 'tinymce/themes/silver/theme.min'
import '../vendor/tinyMceLang/fr_FR'

import '../css/app.scss'

let lookup = {}

import Table from '../components/table'
import SelectComplete from '../components/SelectComplete'
import DatePicker from '../components/DatePicker'

export const LANG = document.querySelector('html').getAttribute('lang')

window.da = {
  LANG: LANG
}

customElements.define('my-table', Table)
customElements.define('select-complete', SelectComplete, {extends: 'select'})
customElements.define('my-datepicker', DatePicker, {extends: 'input'})

$('input[type="file"]').on('change', function (e) {
  let filename = e.target.files[0].name
  $('.custom-file-label').html(filename)
})

window.addEventListener('load', function () { //le dom est chargé
  const currentTheme = localStorage.getItem('theme')
  const menuDarkTheme = document.getElementById('darkMode')

  menuDarkTheme.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')
    // Let's say the theme is equal to light
    let theme = 'light'
    // If the body contains the .dark-theme class...
    if (document.body.classList.contains('dark-theme')) {
      // ...then let's make the theme dark
      theme = 'dark'
      menuDarkTheme.innerHTML = '<i class="fas fa-adjust"></i> Dark Mode Off'
    } else {
      menuDarkTheme.innerHTML = '<i class="fas fa-adjust"></i> Dark Mode On'
    }
    // Then save the choice in localStorage
    localStorage.setItem('theme', theme)
  })

  // If the current theme in localStorage is "dark"...
  if (currentTheme === 'dark') {
    // ...then use the .dark-theme class
    document.body.classList.add('dark-theme')
    menuDarkTheme.innerHTML = '<i class="fas fa-adjust"></i> Dark Mode Off'
  } else {
    menuDarkTheme.innerHTML = '<i class="fas fa-adjust"></i> Dark Mode On'
  }


}, false)

$(document).ready(function () {
  // script pour afficher le fichier selectionné avec bootstrap4
  $('.custom-file input').change(function () {
    const files = []
    for (let i = 0; i < $(this)[0].files.length; i++) {
      files.push($(this)[0].files[i].name)
    }
    $(this).next('.custom-file-label').html(files.join(', '))
  })

  var preloader = $('.preloader')
  if (preloader.length) {
    var speed = preloader.dataAttr('hide-spped', 600)
    preloader.fadeOut(speed)
  }

  $(document).on('focus', '.topbar-search input', function () {
    $(this).closest('.topbar-search').find('.lookup-placeholder span').css('opacity', '0')
  })

  $(document).on('blur', '.topbar-search input', function () {
    $(this).closest('.topbar-search').find('.lookup-placeholder span').css('opacity', '1')
  })

  $(document).on('click', '#lookup', function (e) {
    e.preventDefault()
    var target = $('#lookup-full')

    if (target !== false) {
      lookup.toggle(target)
    }
  })

  $(document).on('click', '#lookup-close', function () {
    lookup.toggle($('#lookup-full'))
  })

  //tooltip
  updateInterface()

  $('[data-provide="validation"]').validator()
})

$(document).ajaxComplete(function () {
  updateInterface()
})

// Fullscreen
//
$(document).on('click', '.card-btn-fullscreen', function () {
  $(this).closest('.card').toggleClass('card-fullscreen').removeClass('card-maximize')
})

// Slide up/down
$(document).on('click', '.card-btn-slide', function () {
  $(this).toggleClass('rotate-180').closest('.card').find('.card-content').slideToggle()
})

$(document).on('click', '.card-btn-slide-text', function () {
  $(this).closest('.card').find('.card-content').slideToggle()
})

//modaler
$(document).on('click', '[data-provide~="modaler"]', function () {
  modaler(getDataOptions($(this)))
})

function updateInterface () {
  // $('.callout').delay(5000).slideUp('slow')

  if (document.getElementsByClassName('datepicker-range').length > 0) {
    $('.datepicker-range').flatpickr({
      mode: 'range',
      'locale': 'fr',
      format: 'd/M/Y'
    })
  }

  if (document.getElementsByClassName('tinyMce').length > 0) {
    tinymce.init({
      selector: '.tinyMce',
      height: 300,
      menubar: false,
      plugins: 'lists',
      entity_encoding: 'raw',
      encoding: 'UTF-8',
      language: 'fr_FR',
      content_css: 'default',
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat'
    })
  }

  //notifications
  $(document).on('click', '#marquerNotificationsRead', function (e) {
    e.preventDefault()
    e.stopPropagation()
    $.ajax({
      url: Routing.generate('notification_marquer_lu'),
      success: function () {
        $('.notification').removeClass('media-new')
      }
    })
  })

  //tooltip
  $('[data-provide~="tooltip"]').each(function () {
    var color = ''

    if ($(this).hasDataAttr('tooltip-color')) {
      color = ' tooltip-' + $(this).data('tooltip-color')
    }

    $(this).tooltip({
      container: 'body',
      trigger: 'hover',
      template: '<div class="tooltip' + color + '" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    })
  })
}

// Open fullscreen lookup
//
lookup.toggle = function (e) {
  if ($(e).hasClass('reveal')) {
    lookup.close(e)
  } else {
    lookup.open(e)
  }
}

// Close fullscreen lookup
//
lookup.close = function (e) {
  $(e).removeClass('reveal')
  $('body').removeClass('no-scroll')
}


// Close fullscreen lookup
//
lookup.open = function (e) {
  $(e).addClass('reveal')
  $(e).find('.lookup-form input').focus()
  $('body').addClass('no-scroll')
}

// =====================
// Sidebar
// =====================

var sidebar = {}

// Scrollable
if (document.getElementsByClassName('sidebar-navigation').length > 0) {
  const ps = new PerfectScrollbar('.sidebar-navigation')
}

// Handle sidebar openner
//
$(document).on('click', '.sidebar-toggler', function () {
  sidebar.open()
})


// Close sidebar when backdrop touches
//
$(document).on('click', '.backdrop-sidebar', function () {
  sidebar.close()
})


// Slide up/down menu item on click
//
$(document).on('click', '.sidebar .menu-link', function () {
  var $submenu = $(this).next('.menu-submenu')
  if ($submenu.length < 1)
    return

  if ($submenu.is(':visible')) {
    $submenu.slideUp(function () {
      $('.sidebar .menu-item.open').removeClass('open')
    })
    $(this).removeClass('open')
    return
  }

  $('.sidebar .menu-submenu:visible').slideUp()
  $('.sidebar .menu-link').removeClass('open')
  $submenu.slideToggle(function () {
    $('.sidebar .menu-item.open').removeClass('open')
  })
  $(this).addClass('open')
})

// Handle fold toggler
//
$(document).on('click', '.sidebar-toggle-fold', function () {
  sidebar.toggleFold()
})

//}


sidebar.toggleFold = function () {
  $('body').toggleClass('sidebar-folded')
  app.toggleState('sidebar.folded')
}

sidebar.fold = function () {
  $('body').addClass('sidebar-folded')
  app.state('sidebar.folded', true)
}


sidebar.unfold = function () {
  $('body').removeClass('sidebar-folded')
  app.state('sidebar.folded', false)
}


sidebar.toggleHide = function () {
  $('body').toggleClass('sidebar-hidden')
  app.toggleState('sidebar.hidden')
}

sidebar.hide = function () {
  $('body').addClass('sidebar-hidden')
  app.state('sidebar.hidden', true)
}

sidebar.show = function () {
  $('body').removeClass('sidebar-hidden')
  app.state('sidebar.hidden', false)
}


sidebar.open = function () {
  $('body').addClass('sidebar-open').prepend('<div class="app-backdrop backdrop-sidebar"></div>')
}

sidebar.close = function () {
  $('body').removeClass('sidebar-open')
  $('.backdrop-sidebar').remove()
}


// =====================
// Quickview
// =====================
// todo: déplacer dans une classe seule... pour l'import.

let quickview = {}
let qps = null

// Update scrollbar on tab change
//
$(document).on('shown.bs.tab', '.quickview-header a[data-toggle="tab"]', function () {
  qps.update()
})

export default function reloadQv () {
  qps.destroy()
  qps = new PerfectScrollbar('.quickview')
}

// Quickview closer
//
$(document).on('click', '[data-dismiss="quickview"]', function () {
  quickview.close($(this).closest('.quickview'))
})


// Handle quickview openner
//
$(document).on('click', '[data-toggle="quickview"]', function (e) {
  e.preventDefault()
  let target = app.getTarget($(this))

  if (target === false) {
    quickview.close($(this).closest('.quickview'))
  } else {
    let url = ''
    if ($(this).hasDataAttr('url')) {
      url = $(this).data('url')
    }

    if (url !== 'no-url' && url !== '') {
      quickview.toggle(target, url)
    } else {
      quickview.toggle(target, Routing.generate('quick_view'))
    }
  }
})


// Close quickview when backdrop touches
//
$(document).on('click', '.backdrop-quickview', function () {
  let qv = $(this).attr('data-target')
  if (!$(qv).is('[data-disable-backdrop-click]')) {
    quickview.close(qv)
  }
})

$(document).on('click', '.quickview .close, [data-dismiss="quickview"]', function () {
  let qv = $(this).closest('.quickview')
  quickview.close(qv)
})

// Toggle open/close state
//
quickview.toggle = function (e, url) {
  if ($(e).hasClass('reveal')) {
    quickview.close(e)
  } else {

    if (url !== '') {
      $(e).html('<div class="spinner-linear"><div class="line"></div></div>')
      $(e).load(url, function () {
        qps = new PerfectScrollbar('.quickview')
      })
    }
    $(e).addClass('reveal').not('.backdrop-remove').after('<div class="app-backdrop backdrop-quickview" data-target="' + e + '"></div>')
  }
}


// Open quickview
//
quickview.open = function (e) {
  let quickview = $(e)
  let url = ''
  // Load content from URL if required
  if (quickview.hasDataAttr('url') && 'true' !== quickview.data('url-has-loaded')) {
    if (quickview.data('url') === 'no-url') {
      url = Routing.generate('quick_view')
    } else {
      url = quickview.data('url')
    }
    quickview.load(url, function () {
      qps = new PerfectScrollbar('.quickview')

      // Don't load it next time, if don't need to
      if (quickview.hasDataAttr('always-reload') && 'true' === quickview.data('always-reload')) {

      } else {
        quickview.data('url-has-loaded', 'true')
      }
    })

  }

// Open it
  quickview.addClass('reveal').not('.backdrop-remove').after('<div class="app-backdrop backdrop-quickview" data-target="' + e + '"></div>')
}


// Close quickview
//
quickview.close = function (e) {
  $(e).removeClass('reveal')
  $('.backdrop-quickview').remove()
}


let app = {}

app.getTarget = function (e) {
  let target
  if (e.hasDataAttr('target')) {
    target = e.data('target')
  } else {
    target = e.attr('href')
  }

  if (target === 'next') {
    target = $(e).next()
  } else if (target === 'prev') {
    target = $(e).prev()
  }

  if (target === undefined) {
    return false
  }

  return target
}

function getColonneActive (colonnes) {
  let index = -1

  $.each(colonnes, function (key, colonne) {
    if (!$(colonne).hasClass('col-edt-hide')) {
      index = key
    }
  })

  return index
}

//navigation EDT
$(document).on('click', '#jourPrecedent', function (e) {
  e.stopPropagation()
  e.preventDefault()
  let colonnes = $('.jour')
  let index = getColonneActive(colonnes)
  if (index > 0) {
    $(colonnes[index]).addClass('col-edt-hide')
    $(colonnes[index - 1]).removeClass('col-edt-hide')
    $('.edt-jour-' + index).addClass('col-edt-hide')
    $('.edt-jour-' + (index - 1)).removeClass('col-edt-hide')

  } else {
    $(colonnes[index]).addClass('col-edt-hide')
    $(colonnes[4]).removeClass('col-edt-hide')
    $('.edt-jour-' + index).addClass('col-edt-hide')
    $('.edt-jour-4').removeClass('col-edt-hide')
  }
})

$(document).on('click', '#jourSuivant', function (e) {
  e.stopPropagation()
  e.preventDefault()
  let colonnes = $('.jour')
  let index = getColonneActive(colonnes)
  if (index < 4) {
    $(colonnes[index]).addClass('col-edt-hide')
    $(colonnes[index + 1]).removeClass('col-edt-hide')
    $('.edt-jour-' + index).addClass('col-edt-hide')
    $('.edt-jour-' + (index + 1)).removeClass('col-edt-hide')
  } else {
    $(colonnes[index]).addClass('col-edt-hide')
    $(colonnes[0]).removeClass('col-edt-hide')
    $('.edt-jour-' + index).addClass('col-edt-hide')
    $('.edt-jour-0').removeClass('col-edt-hide')
  }
})

$(document).on('click', '#jourCourant', function (e) {
  e.stopPropagation()
  e.preventDefault()
  let now = new Date()
  let colonnes = $('.jour')
  let index = getColonneActive(colonnes)
  $(colonnes[index]).addClass('col-edt-hide')
  $(colonnes[now.getDay() - 1]).removeClass('col-edt-hide')
})

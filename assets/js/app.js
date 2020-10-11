// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/app.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/10/2020 08:10

// any CSS you import will output into a single css file (app.css in this case)
import '@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '@fortawesome/fontawesome-free/scss/solid.scss'
import 'bootstrap-select/dist/css/bootstrap-select.min.css'
import '../vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css'
import '../vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js'
import '../vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min'

import '../css/app.scss'

import $ from 'jquery'

require('bootstrap')

let lookup = {}

import PerfectScrollbar from 'perfect-scrollbar'
import './validator-bs4'
import {getDataOptions} from './util'
import './material'
import './search'
import './modaler'

require('bootstrap-select')

$('input[type="file"]').on('change', function (e) {
  console.log('toto')
  let filename = e.target.files[0].name
  $('.custom-file-label').html(filename)
})

$(document).ready(function () {
  // copy link EDT
  $(document).on('click', '#copyLink', function () {
    $('#lienIcal').select()
    document.execCommand('copy')
  })

  // script pour afficher le fichier selectionné avec bootstrap4
  $('.custom-file input').change(function (e) {
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
  console.log('toto')
  $(this).toggleClass('rotate-180').closest('.card').find('.card-content').slideToggle()
})

//modaler
$(document).on('click', '[data-provide~="modaler"]', function () {
  modaler(getDataOptions($(this)))
})

function updateInterface () {
  //selectpicker
  $('.selectpicker').selectpicker({
    iconBase: '',
    tickIcon: 'fas fa-check',
    style: 'btn-light',
    size: 10,
    liveSearch: true
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

  $('[data-provide~="datepicker"]').each(function () {
    var options = {
      multidateSeparator: ', ',
      language: 'fr',
      daysOfWeekHighlighted: '06',
      /*templates: {
        leftArrow: '>',
        rightArrow: '<'
      }*/
    }

    if ($(this).prop('tagName') != 'INPUT') {
      console.log('daterange')
      //si ce n'est pas un input => donc un date range
      options.inputs = [$(this).find('input:first'), $(this).find('input:last')]
    }
    $(this).datepicker(options)
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
//
const ps = new PerfectScrollbar('.sidebar-navigation')

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


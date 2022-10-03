// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/app.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/09/2022 14:58
import '@fortawesome/fontawesome-pro/scss/fontawesome.scss'
import '@fortawesome/fontawesome-pro/scss/brands.scss'
import '@fortawesome/fontawesome-pro/scss/solid.scss'
import $ from 'jquery'
import PerfectScrollbar from 'perfect-scrollbar'
import * as bootstrap from 'bootstrap'
import TomSelect from 'tom-select'
import InPlaceEdit from './inPlaceEdit'
import flatpickr from 'flatpickr'
import Routing from 'fos-router'

import { getDataOptions, getParentByTagName } from './util'

import '../css/app.scss'

import 'flatpickr/dist/l10n/fr.js'

import Table from '../components/table'
import SelectComplete from '../components/SelectComplete'
import SelectChangeWidget from '../components/SelectChangeWidget'
import { get, post } from './fetch'

export const LANG = document.querySelector('html').getAttribute('lang')

window.da = {
  LANG,
  loaderStimulus: '<div class="loader-stimulus text-center">... Chargement en cours ...</div>',
  loader: document.getElementById('loader'),
}

customElements.define('my-table', Table)
customElements.define('select-complete', SelectComplete, { extends: 'select' })
customElements.define('select-live-update', SelectChangeWidget, { extends: 'select' })

$('input[type="file"]').on('change', (e) => {
  const filename = e.target.files[0].name
  $('.custom-file-label').html(filename)
})

window.addEventListener('load', () => { // le dom est chargé
  const currentTheme = localStorage.getItem('theme')
  const menuDarkTheme = document.getElementById('darkMode')

  // menu changement de département
  if (document.getElementById('changeDepartement')) {
    document.getElementById('changeDepartement').addEventListener('click', async (e) => {
      const zone = document.getElementById('listeChangeDepartement')
      zone.innerHtml = `<a href="#" class="dropdown-item col-12">${window.da.loaderStimulus}</a>`// todo: ne s'affiche pas ? faire tout le header avec stimulus ? Avec Turbo?

      await get(Routing.generate('user_get_departements'), {}).then((data) => {
        let html = ''
        data.forEach((departement) => {
          let isDefault = ''
          if (departement.defaut === true) {
            isDefault = 'is-default'
          }
          html += `<a class="dropdown-item ${isDefault} col-4"\n`
            + `href="${Routing.generate('security_change_departement', { departement: departement.uuid })}">\n`
            + '<div class="avatar-departement"\n'
            + `style="background-color: ${departement.couleur}">\n`
            + `<span class="initials">${departement.libelleInitiales}</span>\n`
            + '</div>\n'
            + '</a>'
        })
        zone.innerHTML = html
      })
    })
  }

  if (menuDarkTheme !== null) {
    menuDarkTheme.addEventListener('click', () => {
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
  }

  document.querySelectorAll('.changeAnneeUniversitaire').forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault()
      const el = getParentByTagName(e.target, 'a')
      post(Routing.generate('settings_change_annee_universitaire'), { annee_universitaire: el.dataset.annee }).then(() => {
        document.location.reload(true)
      })
    })
  })
}, false)

$(document).ready(() => {
  const preloader = $('.preloader')
  if (preloader.length) {
    const speed = preloader.dataAttr('hide-spped', 600)
    preloader.fadeOut(speed)
  }

  // tooltip
  updateInterface()
})

$(document).ajaxComplete(() => {
  updateInterface()
})

// Fullscreen
//
$(document).on('click', '.card-btn-fullscreen', function () {
  $(this).closest('.card').toggleClass('card-fullscreen').removeClass('card-maximize')
})

// Slide up/down
$(document).on('click', '.card-btn-slide', function () {
  $(this).toggleClass('rotate-180').closest('.card').find('.card-content')
    .slideToggle()
})

$(document).on('click', '.card-btn-slide-text', function () {
  $(this).closest('.card').find('.card-content').slideToggle()
})

function updateInterface() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))

  // document.querySelectorAll('.selectpicker').forEach((el) => {
  //   if (!el.classList.contains('tomselected') && !el.classList.contains('ts-wrapper')) {
  //     new TomSelect(el, {
  //      // maxOptions: null,
  //     })
  //   }
  // })

  document.querySelectorAll('.editable').forEach((el) => {
    if (!el.classList.contains('editable-active')) {
      new InPlaceEdit(el, {})
    }
  })

  if (document.querySelectorAll('.flatdatepicker').length > 0) {
    document.querySelectorAll('.flatdatepicker').forEach((elem) => {
      let options
      if (elem.dataset.options) {
        options = JSON.parse(elem.dataset.options)
      } else {
        options = []
        options.dateFormat = 'd/m/Y'
      }
      options.locale = da.LANG
      flatpickr(elem, options)
    })
  }

  if (document.getElementsByClassName('datepicker-range').length > 0) {
    $('.datepicker-range').flatpickr({
      mode: 'range',
      locale: da.LANG,
      dateFormat: 'd/m/Y',
    })
  }

  // notifications
  $(document).on('click', '#marquerNotificationsRead', (e) => {
    e.preventDefault()
    e.stopPropagation()
    $.ajax({
      url: Routing.generate('notification_marquer_lu'),
      success() {
        $('.notification').removeClass('media-new')
      },
    })
  })
}

// =====================
// Sidebar
// =====================

const sidebar = {}

// Scrollable
if (document.getElementsByClassName('sidebar-navigation').length > 0) {
  const ps = new PerfectScrollbar('.sidebar-navigation')
}

// Handle sidebar openner
//
$(document).on('click', '.sidebar-toggler', () => {
  sidebar.open()
})

// Close sidebar when backdrop touches
//
$(document).on('click', '.backdrop-sidebar', () => {
  sidebar.close()
})

// Slide up/down menu item on click
//
$(document).on('click', '.sidebar .menu-link', function () {
  const $submenu = $(this).next('.menu-submenu')
  if ($submenu.length < 1) return

  if ($submenu.is(':visible')) {
    $submenu.slideUp(() => {
      $('.sidebar .menu-item.open').removeClass('open')
    })
    $(this).removeClass('open')
    return
  }

  $('.sidebar .menu-submenu:visible').slideUp()
  $('.sidebar .menu-link').removeClass('open')
  $submenu.slideToggle(() => {
    $('.sidebar .menu-item.open').removeClass('open')
  })
  $(this).addClass('open')
})

// Handle fold toggler
//
$(document).on('click', '.sidebar-toggle-fold', () => {
  sidebar.toggleFold()
})

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

const quickview = {}
let qps = null

// Update scrollbar on tab change
//
$(document).on('shown.bs.tab', '.quickview-header a[data-toggle="tab"]', () => {
  qps.update()
})

export default function reloadQv() {
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
  const target = app.getTarget($(this))

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
  const qv = $(this).attr('data-target')
  if (!$(qv).is('[data-disable-backdrop-click]')) {
    quickview.close(qv)
  }
})

$(document).on('click', '.quickview .close, [data-dismiss="quickview"]', function () {
  const qv = $(this).closest('.quickview')
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
      $(e).load(url, () => {
        qps = new PerfectScrollbar('.quickview')
      })
    }
    $(e).addClass('reveal').not('.backdrop-remove').after(`<div class="app-backdrop backdrop-quickview" data-target="${e}"></div>`)
  }
}

// Open quickview
//
quickview.open = function (e) {
  const quickview = $(e)
  let url = ''
  // Load content from URL if required
  if (quickview.hasDataAttr('url') && quickview.data('url-has-loaded') !== 'true') {
    if (quickview.data('url') === 'no-url') {
      url = Routing.generate('quick_view')
    } else {
      url = quickview.data('url')
    }
    quickview.load(url, () => {
      qps = new PerfectScrollbar('.quickview')

      // Don't load it next time, if don't need to
      if (quickview.hasDataAttr('always-reload') && quickview.data('always-reload') === 'true') {

      } else {
        quickview.data('url-has-loaded', 'true')
      }
    })
  }

  // Open it
  quickview.addClass('reveal').not('.backdrop-remove').after(`<div class="app-backdrop backdrop-quickview" data-target="${e}"></div>`)
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

function getColonneActive(colonnes) {
  let index = -1

  $.each(colonnes, (key, colonne) => {
    if (!$(colonne).hasClass('col-edt-hide')) {
      index = key
    }
  })

  return index
}

// navigation EDT
$(document).on('click', '#jourPrecedent', (e) => {
  e.stopPropagation()
  e.preventDefault()
  const colonnes = $('.jour')
  const index = getColonneActive(colonnes)
  if (index > 0) {
    $(colonnes[index]).addClass('col-edt-hide')
    $(colonnes[index - 1]).removeClass('col-edt-hide')
    $(`.edt-jour-${index}`).addClass('col-edt-hide')
    $(`.edt-jour-${index - 1}`).removeClass('col-edt-hide')
  } else {
    $(colonnes[index]).addClass('col-edt-hide')
    $(colonnes[4]).removeClass('col-edt-hide')
    $(`.edt-jour-${index}`).addClass('col-edt-hide')
    $('.edt-jour-4').removeClass('col-edt-hide')
  }
})

$(document).on('click', '#jourSuivant', (e) => {
  e.stopPropagation()
  e.preventDefault()
  const colonnes = $('.jour')
  const index = getColonneActive(colonnes)
  if (index < 4) {
    $(colonnes[index]).addClass('col-edt-hide')
    $(colonnes[index + 1]).removeClass('col-edt-hide')
    $(`.edt-jour-${index}`).addClass('col-edt-hide')
    $(`.edt-jour-${index + 1}`).removeClass('col-edt-hide')
  } else {
    $(colonnes[index]).addClass('col-edt-hide')
    $(colonnes[0]).removeClass('col-edt-hide')
    $(`.edt-jour-${index}`).addClass('col-edt-hide')
    $('.edt-jour-0').removeClass('col-edt-hide')
  }
})

$(document).on('click', '#jourCourant', (e) => {
  e.stopPropagation()
  e.preventDefault()
  const now = new Date()
  const colonnes = $('.jour')
  const index = getColonneActive(colonnes)
  $(colonnes[index]).addClass('col-edt-hide')
  $(colonnes[now.getDay() - 1]).removeClass('col-edt-hide')
})

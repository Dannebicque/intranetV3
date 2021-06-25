// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/trombinoscope.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 10/06/2021 17:30

import {load} from '../fetch'

// $(document).on('click', '.semestretrombi', function (e) {
//   e.preventDefault()
//
//   $('.semestretrombi').removeClass('active show')
//   $('.enseignanttrombi').removeClass('active show')
//   $(this).addClass('active show')
//   $('#trombi').slideUp().empty().load(Routing.generate('trombinoscope_etudiant_semestre', {semestre: $(this).data('sem')})).slideDown()
// })

document.querySelectorAll('.semestretrombi').forEach((elem) => {
  elem.addEventListener('click', (e) => {
    const element = e.target
    const trombi = document.querySelector('#trombi')
    e.preventDefault()
    document.querySelectorAll('.semestretrombi').forEach(semestretrombi => {
      semestretrombi.classList.remove('active', 'show')
    })
    document.querySelectorAll('.enseignanttrombi').forEach(enseignanttrombi => {
      enseignanttrombi.classList.remove('active', 'show')
    })
    load('trombinoscope_etudiant_semestre', {semestre: element.dataset.sem}, trombi)
  })
})


$(document).on('click', '.changeTypeGroupe', function (e) {
  e.preventDefault()

  $('#trombi').slideUp().empty().load(Routing.generate('trombinoscope_etudiant_semestre_type_groupe', {
    semestre: $(this).data('semestre'),
    typegroupe: $(this).data('typegroupe')
  })).slideDown()
})

document.querySelectorAll('.enseignanttrombi').forEach((elem) => {
  elem.addEventListener('click', (e) => {
    const element = e.target
    const trombi = document.querySelector('#trombi')
    e.preventDefault()
    document.querySelectorAll('.semestretrombi').forEach(semestretrombi => {
      semestretrombi.classList.remove('active', 'show')
    })
    document.querySelectorAll('.enseignanttrombi').forEach(enseignanttrombi => {
      enseignanttrombi.classList.remove('active', 'show')
    })
    load('trombinoscope_personnel', {type: element.dataset.type}, trombi)
  })
})

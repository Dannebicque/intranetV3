// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/planning.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2020 16:44

$(document).on('click', '.filtreTypeDate', function (e) {
  const btn = $(this)
  const type = btn.data('type')
  if (btn.hasClass('btn-outline')) {
    afficheType(type)
    btn.removeClass('btn-outline')
  } else {
    btn.addClass('btn-outline')
    removeType(type)

  }
})

$(document).on('click', '.filtreUtilisateurDate', function (e) {
  const btn = $(this)
  const type = btn.data('type')
  if (btn.hasClass('btn-outline')) {
    afficheUtilisateur(type)
    btn.removeClass('btn-outline')
  } else {
    btn.addClass('btn-outline')
    removeUtilisateur(type)

  }
})

//todo: croiser les filtres.
function removeType (type) {
  $('.event').each(function (e) {
    if ($(this).data('type-event') === type) {
      $(this).hide()
    }
  })
}

function afficheType (type) {
  $('.event').each(function (e) {
    if ($(this).data('type-event') === type) {
      $(this).show()
    }
  })
}

function removeUtilisateur (type) {
  if (type === 'E') {
    $('.event').each(function (e) {
      if ($(this).data('qui-event') === type) {
        $(this).hide()
      }
    })
  } else {
    $('.event').each(function (e) {
      if ($(this).hasClass(type)) {
        $(this).hide()
      }
    })
  }
}

function afficheUtilisateur (type) {
  if (type === 'E') {
    $('.event').each(function (e) {
      if ($(this).data('qui-event') === type) {
        $(this).show()
      }
    })
  } else {
    $('.event').each(function (e) {
      if ($(this).hasClass(type)) {
        $(this).show()
      }
    })
  }
}

$(document).on('change', '#semaine', function(e){
  e.preventDefault()
  //{{ edt.filtre }}_{{ edt.valeur }}_{{ sem.semaineReelle}}
  let tab = $(this).val().split('_')
  location.href = Routing.generate('agenda_index', {semaine: tab[2] ,valeur: tab[1],  filtre: tab[0]});
})

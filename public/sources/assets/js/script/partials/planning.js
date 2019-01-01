$(document).on('click', '.filtreTypeDate', function (e) {
  var btn = $(this)
  var type = btn.data('type')
  if (btn.hasClass('btn-outline')) {
    afficheType(type)
    btn.removeClass('btn-outline')
  } else {
    btn.addClass('btn-outline')
    removeType(type)

  }
})

$(document).on('click', '.filtreUtilisateurDate', function (e) {
  var btn = $(this)
  var type = btn.data('type')
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
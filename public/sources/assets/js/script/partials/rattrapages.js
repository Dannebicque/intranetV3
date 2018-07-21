$(document).on('click', '.rattrapage-accepte', function (e) {
  var rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_change_etat.fr', {id: rattrapage, etat: 'A'}),
    success: function (e) {
      var bx = $('.bx_' + rattrapage)
      var parent = bx.parent()
      bx.remove()
      parent.prepend('<a href="#" class="btn btn-success btn-outline"><i class="ti-check"></i>Acceptée</a>')
      addCallout('Demande de rattrapge validée !', 'success')
    },
    error: function (e) {
      addCallout('Une erreur est survenue !', 'error')
    }
  })
})

$(document).on('click', '.rattrapage-refuse', function (e) {
  var rattrapage = $(this).data('rattrapage')
  $.ajax({
    url: Routing.generate('administration_rattrapage_change_etat.fr', {id: rattrapage, etat: 'R'}),
    success: function (e) {
      var bx = $('.bx_' + rattrapage)
      var parent = bx.parent()
      bx.remove()
      parent.prepend('<a href="#" class="btn btn-warning btn-outline"><i class="ti-na"></i>Refusée</a>')
      addCallout('Demande de rattrapge refusée !', 'success')
    },
    error: function (e) {
      addCallout('Une erreur est survenue !', 'error')
    }
  })
})
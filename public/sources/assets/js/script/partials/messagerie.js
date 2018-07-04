$(document).on('click', '.messagerie-filtre', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('#messages-liste').empty().load(Routing.generate('messagerie_filtre', {'filtre': $(this).data('filtre')}));
});

$(document).on('click', '.message-read', function (e) {
  e.preventDefault();
  e.stopPropagation();

  $('#messages-liste').empty().load(Routing.generate('messagerie_message', {message: $(this).data('message')}));
})

$(document).on('click', '#message-new', function (e) {
  e.preventDefault();
  e.stopPropagation();

  $('#zone-messagerie').empty().load(Routing.generate('messagerie_new'));
})

$(document).on('click', '#marquerNotificationsRead', function (e) {
  e.preventDefault();
  e.stopPropagation();

  $.ajax({
    url: Routing.generate('notification_marquer_lu'),
    success: function (e) {

      $('.notification').removeClass('media-new')
    }
  })
})


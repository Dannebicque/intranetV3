$(document).on('click', '.messagerie-filtre', function (e) {
  e.preventDefault();
  e.stopPropagation();

  $.ajax({
    url: Routing.generate('messagerie_filtre', {'filtre': $(this).data('filtre')}),
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      $('#messages-liste').empty();
      var html = '';
      jQuery.each(data, function (index, pers) {
        html = html + '<div class="media align-items-center">\n' +
          '                        <div class="custom-control custom-checkbox">\n' +
          '                            <input type="checkbox" class="custom-control-input">\n' +
          '                            <label class="custom-control-label"></label>\n' +
          '                        </div>\n' +
          '                        <label class="toggler ml-20 fs-16">\n' +
          '                            <input type="checkbox">\n' +
          '                            <i class="fa fa-star"></i>\n' +
          '                        </label>\n' +
          '                        <span class="badge badge-dot badge-danger"></span>\n' +
          '                        <a href="#"><img class="avatar" src="../assets/img/avatar/1.jpg" alt="..."></a>\n' +
          '                        <a class="media-body text-truncate" href="mailbox-single.html">\n' +
          '                            <h6>Maryam Amiri</h6>\n' +
          '                            <small>\n' +
          '                                <strong>Happy Christmas!</strong>\n' +
          '                                <span class="fw-300 opacity-80">Conveniently parallel task wireless convergence before goal-oriented human capital.</span>\n' +
          '                            </small>\n' +
          '                        </a>\n' +
          '                        <a class="text-lighter fs-18 opacity-0" href="#"><i class="ti-clip"></i></a>\n' +
          '                        <time datetime="2018">12:35 AM</time>\n' +
          '                    </div>'
      });
    }

  })
});

$(document).on('click', '.message-read', function (e) {
  e.preventDefault();
  e.stopPropagation();

  $('#messages-liste').empty().load(Routing.generate('messagerie_message', {message: 1}));
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


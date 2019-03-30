$(document).on('click', '.articleLike', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var elt = $(this);

  $.ajax({
    url: Routing.generate('article_like', {slug: $(this).data('article')}),
    success: function (data) {
      elt.html('<i class="ti-heart text-danger fs-11"></i> ' + data);
    }
  })
})
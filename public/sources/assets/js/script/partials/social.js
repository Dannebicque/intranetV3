$(document).on('click', '.articleLike', function (e) {
  e.preventDefault();
  e.stopPropagation();

  $.ajax({
    url: Routing.generate('article_like.fr', {slug: $(this).data('article')}),
    success: function (data) {
      console.log('ok');
    }
  })
})
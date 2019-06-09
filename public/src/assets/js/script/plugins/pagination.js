$(document).on('click', '.page-link', function (e) {
  e.preventDefault();
  e.stopPropagation();
  const zone = $('#zone-pagination')
  zone.empty();
  zone.load($(this).attr('href'));
});

$(document).on('click', '.changeinformation', function(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log($(this).text());
  $('#header-title').empty().append($(this).text());
  $('.changeinformation').removeClass('active show');
  $(this).addClass('active show');
  $('#mainContent').empty().load($(this).attr('href'));
});

$('.edit').editable('fichier.php', {
  type: 'text',
  cancel: 'Cancel',
  cancelcssclass: 'btn btn-danger',
  submitcssclass: 'btn btn-success',
  submit: 'Save',
  tooltip: 'Click to edit...'
})

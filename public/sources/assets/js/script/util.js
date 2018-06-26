function readUrlMenu($url) {
  if ($url !== '/' && $url !== '/index.php/') {
    var $elt = $url.split('/');
    var $firstElt = 0;
    console.log($elt);

    if ($elt[1] === 'index.php') {
      if ($elt.length > 1) {
        $firstElt = 2;
      }
    }
    $('.menu-item').removeClass('active');
    $('#menu-' + $elt[$firstElt]).addClass('active');
  } else {
    $('#menu-dashboard').addClass('active');
  }
}

//pop up de confirmation de suppression
$(document).on('click', '.supprimer', function (e) {
  e.preventDefault();
  var url = $(this).attr('href');
  var csrf = $(this).data('csrf');
  swal({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    confirmButtonClass: 'btn btn-primary',
    cancelButtonClass: 'btn btn-secondary',
    buttonsStyling: false
  }).then(function (result) {
    console.log(result)
    if (result.value) {
      console.log(url);
      $.ajax({
        url: url,
        type: "DELETE",
        data: {
          _token: csrf
        },
        success: function (id) {
          $("#ligne_" + id).closest('tr').remove();
          //table.row( $(this).parents('tr') )
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        },
        error: function (xhr, ajaxOptions, thrownError) {
          swal("Error deleting!", "Please try again", "error");
          //todo: gérer le callout
        }
      });

    } else if (
      // Read more about handling dismissals
      result.dismiss === 'cancel'
    ) {
      swal(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
});


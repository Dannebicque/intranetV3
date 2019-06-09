function readUrlMenu($url) {
  const $elt = $url.split('/')
  let $firstElt = 2
  console.log($elt);
    if ($elt[1] === 'index.php') {
      if ($elt.length > 1) {
        $firstElt = 3;
      }
    }

    if ($elt[$firstElt] === 'super-administration') {
        $firstElt = $firstElt+1;
    }

  if ($elt[$elt.length-1] === "") {
    $elt.pop();
  }

  $('.menu-item').removeClass('active');
  $('#menu-' + $elt[$firstElt]).addClass('active');
}

//colorise le bon menu
readUrlMenu($(location).attr('pathname'))

function updateAffichage (date, heure) {
  console.log('aff')
  $.ajax({
    type: 'GET',
    url: Routing.generate('application_personnel_absence_get_ajax', {matiere: $('#absence-matiere').val()}),
    dataType: 'json',
    success: function (data) {

      const tabsences = data
      console.log(date)
      const t = date.split('/')
      const ddate = t[2].trim() + '-' + t[1].trim() + '-' + t[0].trim()
      console.log(ddate)
      console.log(tabsences[ddate])
      if (typeof tabsences[ddate] !== 'undefined') {
        if (typeof tabsences[ddate][heure] !== 'undefined') {
          for (let i = 0; i < tabsences[ddate][heure].length; i++) {
            console.log(tabsences[ddate][heure][i])
            $('#etu_' + tabsences[ddate][heure][i]).addClass('absent')
          }
        }
      }
    }
  })
}

//pop up de confirmation de suppression
$(document).on('click', '.supprimer', function (e) {
  e.preventDefault();
  const url = $(this).attr('href')
  const csrf = $(this).data('csrf')
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
          addCallout('Suppression effectuée avec succès', 'success')
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        },
        error: function (xhr, ajaxOptions, thrownError) {
          swal("Error deleting!", "Please try again", "error");
          addCallout('Erreur lors de la tentative de suppression', 'danger')
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

function addCallout (message, label) {
  const html = '<div class="callout callout-' + label + '" role="alert">\n' +
    '                    <button type="button" class="close" data-dismiss="callout" aria-label="Close">\n' +
    '                        <span>&times;</span>\n' +
    '                    </button>\n' +
    '                    <h5>' + label + '</h5>\n' +
    '                    <p>' + message + '</p>\n' +
    '                </div>'

  $('#mainContent').prepend(html).slideDown('slow')
  $('.callout').delay(5000).slideUp('slow')
}


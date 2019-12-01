// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/public/src/assets/js/script/util.js
// @author     David Annebicque
// @project intranetv3
// @date 14/11/2019 14:57
// @lastUpdate 14/11/2019 14:56

function readUrlMenu($url) {
  const $elt = $url.split('/')
  let $firstElt = 2
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
  $.ajax({
    type: 'GET',
    url: Routing.generate('application_personnel_absence_get_ajax', {matiere: $('#absence-matiere').val()}),
    dataType: 'json',
    success: function (data) {
      const t = date.split('/')
      const ddate = t[2].trim() + '-' + t[1].trim() + '-' + t[0].trim()
      if (heure.length === 4) {
        heure = '0' + heure
      }

      for (let d in data) {
        if (d == ddate) {
          if (typeof data[d][heure] !== 'undefined') {
            for (let i = 0; i < data[d][heure].length; i++) {
              $('#etu_' + data[d][heure][i]).addClass('absent')
            }
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

//Editable
let myEditInitialContent = ''

$(document).on('click', '.myedit', function () {
  myEditInitialContent = $(this).outerHTML()
  let html = genereInput($(this))
  $(this).replaceWith(html)
})


$(document).on('click', '#myedit-valide', function () {
  $(this).replaceWith(html)
})

$(document).on('click', '#myedit-annule', function () {
  $(this).parent().replaceWith(myEditInitialContent)
})

function genereInput ($obj) {
  let $html = '<div><input type="text" value="' + $obj.html() + '" class="myedit-input" />'
  $html = $html + '<button class="btn btn-square btn-sm btn-success btn-outline" id="myedit-valide"><i class="ti-check"></i></button>'
  $html = $html + '<button class="btn btn-square btn-sm btn-danger btn-outline" id="myedit-annule"><i class="ti-close"></i></button></div>'
  return $html
}

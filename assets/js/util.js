// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/util.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/07/2020 15:44

import $ from 'jquery'
import Swal from 'sweetalert2'

function readUrlMenu ($url) {
  const $elt = $url.split('/')
  let $firstElt = 2
  if ($elt[1] === 'index.php') {
    if ($elt.length > 1) {
      $firstElt = 3
    }
  }

  if ($elt[$firstElt] === 'super-administration') {
    $firstElt = $firstElt + 1
  }

  if ($elt[$elt.length - 1] === '') {
    $elt.pop()
  }

  $('.menu-item').removeClass('active')
  $('#menu-' + $elt[$firstElt]).addClass('active')
}

//colorise le bon menu
readUrlMenu($(location).attr('pathname'))

Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-primary',
    cancelButton: 'btn btn-secondary'
  },
  buttonsStyling: false
})
//pop up de confirmation de suppression
$(document).on('click', '.supprimer', function (e) {
  e.preventDefault()
  const url = $(this).attr('href')
  const csrf = $(this).data('csrf')
  Swal.fire({
    title: 'Confirmer la suppression ?',
    text: 'L\'opération ne pourra pas être annulée.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, je confirme',
    cancelButtonText: 'Non, Annuler',
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-secondary'
    },
    buttonsStyling: false
  }).then(function (result) {
    if (result.value) {
      $.ajax({
        url: url,
        type: 'DELETE',
        data: {
          _token: csrf
        },
        success: function (id) {
          if (id.hasOwnProperty('redirect') && id.hasOwnProperty('url')) {
            document.location.href = id.url
          } else {
            $('#ligne_' + id).closest('tr').remove()
            addCallout('Suppression effectuée avec succès', 'success')
            Swal.fire({
              title: 'Supprimé!',
              text: 'L\'enregistrement a été supprimé.',
              icon: 'success',
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-secondary'
              },
              buttonsStyling: false
            })
          }
        },
        error: function (xhr, ajaxOptions, thrownError) {
          Swal.fire({
            title: 'Erreur lors de la suppression!',
            text: 'Merci de renouveler l\'opération',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary',
              cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
          })
          addCallout('Erreur lors de la tentative de suppression', 'danger')
        }
      })

    } else if (
      // Read more about handling dismissals
      result.dismiss === 'cancel'
    ) {
      Swal.fire({
        title: 'Cancelled',
        text: 'OK! Tout est comme avant !',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-secondary'
        },
        buttonsStyling: false
      })
    }
  })
})

export function addCallout (message, label) {
  console.log('callout')
  var translate = new Array()
  translate['success'] = 'Succès'
  translate['error'] = 'Erreur'

  const html = '<div class="callout callout-' + label + '" role="alert">\n' +
    '                    <button type="button" class="close" data-dismiss="callout" aria-label="Close">\n' +
    '                        <span>&times;</span>\n' +
    '                    </button>\n' +
    '                    <h5>' + translate[label] + '</h5>\n' +
    '                    <p>' + message + '</p>\n' +
    '                </div>'

  $('#mainContent').prepend(html).slideDown('slow')
  $('.callout').delay(5000).slideUp('slow')
}

//Editable
let myEditInitialContent = ''


$(document).on('click', '.myedit', function (e) {
  e.preventDefault()
  myEditInitialContent = $(this)
  let html = ''
  if ($(this).data('type') === 'select') {
    //todo: A finaliser
  } else {
    console.log('toto')
    html = genereInput($(this))
  }
  $(this).replaceWith(html)
  $('#myedit-input').focus()
})

$(document).on('keyup', '#myedit-input', function (e) {
  if (e.keyCode === 13) {
    updateData()
  } else if (e.keyCode === 27) {
    $('#myEdit-zone').replaceWith(myEditInitialContent)
  }
})

$(document).on('click', '#myedit-valide', function (e) {
  e.preventDefault()
  updateData()
})

$(document).on('click', '#myedit-annule', function (e) {
  e.preventDefault()
  $('#myEdit-zone').replaceWith(myEditInitialContent)
})

function updateData () {
  let val = $('#myedit-input').val()
  $.ajax({
    url: myEditInitialContent.attr('href'),
    data: {
      field: myEditInitialContent.data('field'),
      value: val
    },
    method: 'POST',
    success: function () {
      myEditInitialContent.html(val)
      $('#myEdit-zone').replaceWith(myEditInitialContent)
    }
  })
}

function genereInput ($obj) {
  let $html = '<div id="myEdit-zone"><input type="text" value="' + $obj.html().trim() + '" id="myedit-input" />'
  $html = $html + '<button class="btn btn-square btn-sm btn-success btn-outline" id="myedit-valide"><i class="fas fa-check"></i></button>'
  $html = $html + '<button class="btn btn-square btn-sm btn-danger btn-outline" id="myedit-annule"><i class="fas fa-times"></i></button></div>'
  return $html
}

jQuery.fn.dataAttr = function (name, def) {
  return $(this)[0].getAttribute('data-' + name) || def
}

jQuery.fn.hasDataAttr = function (name) {
  return $(this)[0].hasAttribute('data-' + name)
}

function dataToOption (name) {
  return name.replace(/-([a-z])/g, function (x) {
    return x[1].toUpperCase()
  })
}

export function getDataOptions (el, castList) {
  var options = {}

  $.each($(el).data(), function (key, value) {

    key = dataToOption(key)

    // Escape data-provide
    if (key == 'provide') {
      return
    }

    if (castList != undefined) {
      var type = castList[key]
      switch (type) {
        case 'bool':
          value = Boolean(value)
          break

        case 'num':
          value = Number(value)
          break

        case 'array':
          value = value.split(',')
          break

        default:

      }
    }

    options[key] = value
  })

  return options
}

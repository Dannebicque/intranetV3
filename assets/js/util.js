// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/util.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/09/2021 12:08

import Swal from 'sweetalert2'
import Toast from '../components/Toast'

let $stopCatchEnter = false

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
            const ligne = getParentByTagName(e.target, 'tr')
            ligne.parentNode.removeChild(ligne)

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


export function getParentByTagName (el, tag) {
  tag = tag.toLowerCase()
  while (el && el.nodeName.toLowerCase() != tag) {
    el = el.parentNode
  }
  return el || null
}

export function addCallout (message, label) {
  switch (label) {
    case 'success':
      Toast.success(message)
      break
    case 'danger':
      Toast.error(message)
      break
    case 'warning':
      Toast.warning(message)
      break
    case 'info':
      Toast.info(message)
      break
  }
}

// //Editable
let myEditInitialContent = ''
let type = 'text'
let EditOnLine = false

$(document).on('click', '.myedit', function (e) {
  e.preventDefault()
  myEditInitialContent = $(this)
  let html = ''
  EditOnLine = true
  if (typeof ($(this).data('type')) !== 'undefined') {
    type = $(this).data('type')
  }

  if ($(this).data('type') === 'select') {
    //todo: A finaliser
  } else if ($(this).data('type') === 'textarea') {
    html = genereTextArea($(this))
  } else {
    html = genereInput($(this))
  }
  $(this).replaceWith(html)
  $('#myedit-input').focus()
})

$(document).on('keyup', '#myedit-input', function (e) {
  if (e.keyCode === 13 && $stopCatchEnter === false) {
    updateData()
  } else if (e.keyCode === 27) {
    $('#myEdit-zone').replaceWith(myEditInitialContent)
  }
})

$(document).on('click', '.myedit-valide', function (e) {
  $stopCatchEnter = false
  e.preventDefault()
  updateData($(this).data('key'))
})

$(document).on('keypress', function (e) {
  if (EditOnLine === true && $stopCatchEnter === false && e.which === 13) {
    e.preventDefault()
    updateData($(this).data('key'))
  }

  if (EditOnLine === true && $stopCatchEnter === false && e.which === 27) {
    e.preventDefault()
    $('#myEdit-zone-' + $(this).data('key')).replaceWith(myEditInitialContent)
  }
})

$(document).on('click', '.myedit-annule', function (e) {
  e.preventDefault()
  $('#myEdit-zone-' + $(this).data('key')).replaceWith(myEditInitialContent)
})

function updateData (key) {
  let val = $('#myedit-input-' + key).val()
  $.ajax({
    url: myEditInitialContent.attr('href'),
    data: {
      field: myEditInitialContent.data('field'),
      value: val,
      type: type
    },
    method: 'POST',
    success: function () {
      myEditInitialContent.html(val)
      $('#myEdit-zone-' + key).replaceWith(myEditInitialContent)
      EditOnLine = false
    }
  })
}

function genereTextArea ($obj) {
  const key = Date.now()
  $stopCatchEnter = true
  return '<div id="myEdit-zone-' + key + '">\n' +
    '                      <textarea rows="5" class="form-control" id="myedit-input-' + key + '">' + $obj.html().trim() + '</textarea>\n' +
    '                      <span class="input-group-append">\n' +
    ' <button class="btn btn-success-outline myedit-valide" data-key="' + key + '"><i class="fas fa-check"></i></button>\n' +
    '                        <button class="btn btn-danger-outline myedit-annule"  data-key="' + key + '"><i class="fas fa-times"></i></button>\n' +
    '                      </span>\n' +
    '                    </div>'
}

function genereInput ($obj) {
  const key = Date.now()
  return '<div id="myEdit-zone-' + key + '" class="input-group">\n' +
    '                      <input type="text" class="form-control" id="myedit-input-' + key + '" value="' + $obj.html().trim() + '" >\n' +
    '                      <span class="input-group-append">\n' +
    ' <button class="btn btn-success-outline myedit-valide"  data-key="' + key + '"><i class="fas fa-check"></i></button>\n' +
    '                        <button class="btn btn-danger-outline myedit-annule"  data-key="' + key + '"><i class="fas fa-times"></i></button>\n' +
    '                      </span>\n' +
    '                    </div>'
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

export function invalidChamps ($obj) {
  $obj.removeClass('is-valid').addClass('is-invalid')
}

export function validChamps ($obj) {
  $obj.removeClass('is-invalid').addClass('is-valid')
}

export function completeChamps ($obj) {
  $obj.removeClass('is-invalid').removeClass('is-valid')
}

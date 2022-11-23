// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/util.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/11/2022 07:01

import Swal from 'sweetalert2'
import $ from 'jquery'
import Toast from '../components/Toast'

function readUrlMenu($url) {
  const $elt = $url.split('/')
  let $firstElt = 2
  if ($elt[1] === 'index.php') {
    if ($elt.length > 1) {
      $firstElt = 3
    }
  }

  if ($elt[$firstElt] === 'super-administration') {
    $firstElt += 1
  }

  if ($elt[$elt.length - 1] === '') {
    $elt.pop()
  }

  $('.menu-item').removeClass('active')
  $(`#menu-${$elt[$firstElt]}`).addClass('active')
}

// colorise le bon menu
readUrlMenu($(location).attr('pathname'))

Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-primary',
    cancelButton: 'btn btn-secondary',
  },
  buttonsStyling: false,
})
// pop up de confirmation de suppression
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
      cancelButton: 'btn btn-secondary',
    },
    buttonsStyling: false,
  }).then((result) => {
    if (result.value) {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'X-CSRF-TOKEN': csrf,
        },
      }).then((response) => {
        if (response.status === 200) {
          return response.json().then((body) => {
            console.log(body)
            if (body.hasOwnProperty('redirect') && body.hasOwnProperty('url')) {
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
                  cancelButton: 'btn btn-secondary',
                },
                buttonsStyling: false,
              })
            }
          })
        } else {
          Swal.fire({
            title: 'Erreur lors de la suppression!',
            text: 'Merci de renouveler l\'opération',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary',
              cancelButton: 'btn btn-secondary',
            },
            buttonsStyling: false,
          })
          addCallout('Erreur lors de la tentative de suppression', 'danger')
        }
      })

      // $.ajax({
      //   url,
      //   type: 'DELETE',
      //   data: {
      //     _token: csrf,
      //   },
      //   success(id) {
      //     if (id.hasOwnProperty('redirect') && id.hasOwnProperty('url')) {
      //       document.location.href = id.url
      //     } else {
      //       const ligne = getParentByTagName(e.target, 'tr')
      //       ligne.parentNode.removeChild(ligne)
      //
      //       addCallout('Suppression effectuée avec succès', 'success')
      //       Swal.fire({
      //         title: 'Supprimé!',
      //         text: 'L\'enregistrement a été supprimé.',
      //         icon: 'success',
      //         confirmButtonText: 'OK',
      //         customClass: {
      //           confirmButton: 'btn btn-primary',
      //           cancelButton: 'btn btn-secondary',
      //         },
      //         buttonsStyling: false,
      //       })
      //     }
      //   },
      //   error() {
      //     Swal.fire({
      //       title: 'Erreur lors de la suppression!',
      //       text: 'Merci de renouveler l\'opération',
      //       icon: 'error',
      //       confirmButtonText: 'OK',
      //       customClass: {
      //         confirmButton: 'btn btn-primary',
      //         cancelButton: 'btn btn-secondary',
      //       },
      //       buttonsStyling: false,
      //     })
      //     addCallout('Erreur lors de la tentative de suppression', 'danger')
      //   },
      // })
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
          cancelButton: 'btn btn-secondary',
        },
        buttonsStyling: false,
      })
    }
  })
})

export function getParentByTagName(el, _tag) {
  const tag = _tag.toLowerCase()
  while (el && el.nodeName.toLowerCase() != tag) {
    el = el.parentNode
  }
  return el || null
}

export function addCallout(message, label) {
  switch (label) {
    case 'success':
      Toast.success(message)
      break
    case 'danger':
    case 'error':
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

jQuery.fn.dataAttr = function (name, def) {
  return $(this)[0].getAttribute(`data-${name}`) || def
}

jQuery.fn.hasDataAttr = function (name) {
  return $(this)[0].hasAttribute(`data-${name}`)
}

function dataToOption(name) {
  return name.replace(/-([a-z])/g, (x) => x[1].toUpperCase())
}

export function getDataOptions(el, castList) {
  const options = {}
  $.each($(el).data(), (key, value) => {
    key = dataToOption(key)

    // Escape data-provide
    if (key == 'provide') {
      return
    }

    if (castList != undefined) {
      const type = castList[key]
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

export function invalidChamps($obj) {
  $obj.removeClass('is-valid').addClass('is-invalid')
}

export function validChamps($obj) {
  $obj.removeClass('is-invalid').addClass('is-valid')
}

export function completeChamps($obj) {
  $obj.removeClass('is-invalid').removeClass('is-valid')
}

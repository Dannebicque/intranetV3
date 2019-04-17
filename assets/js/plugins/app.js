/*
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/assets/js/plugins/app.js
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/2/19 10:46 AM
 *  * @lastUpdate 4/2/19 10:46 AM
 *  *
 *
 */

// Material input
//
$(document).on('focus', '.form-type-material .form-control:not(.bootstrap-select)', function () {
  materialDoFloat($(this))
})

$(document).on('focusout', '.form-type-material .form-control:not(.bootstrap-select)', function () {
  if ($(this).val() === '') {
    materialNoFloat($(this))
  }
})

// Auto focus inputs
materialDoFloat($('.form-type-material .form-control[autofocus="true"]'))


function materialDoFloat (e) {
  if (e.parent('.input-group-input').length) {
    e.parent('.input-group-input').addClass('do-float')
  } else {
    e.closest('.form-group').addClass('do-float')
  }
}


function materialNoFloat (e) {
  if (e.parent('.input-group-input').length) {
    e.parent('.input-group-input').removeClass('do-float')
  } else {
    e.closest('.form-group').removeClass('do-float')
  }
}

$('.form-type-material .form-control').each(function () {
  if ($(this).val().length > 0) {
    //if ($(this).is('[data-provide~="selectpicker"]')) {
    //  return
    //}
    materialDoFloat($(this))
  }
})


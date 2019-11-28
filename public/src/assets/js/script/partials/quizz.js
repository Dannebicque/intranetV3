// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/public/src/assets/js/script/partials/quizz.js
// @author     David Annebicque
// @project intranetv3
// @date 28/11/2019 14:27
// @lastUpdate 27/11/2019 12:39

$(document).on('change', 'input[type=radio][name="quizz_question[type]"]', function () {
  let $type = $('input[type=radio][name="quizz_question[type]"]:checked').val()
  let $div = $('#reponses')
  let $html = ''

  if ($type === 'qcu') {
    $html = $html + addChampQcu(1)
    $html = $html + '<a href="#" id="addreponseqcu" class="btn btn-success" data-nb="1"><i class="fa fa-plus"></i>Ajouter une réponse</a>'
  } else if ($type === 'qcm') {
    $html = $html + addChampQcm(1)
    $html = $html + '<a href="#" id="addreponseqcm" class="btn btn-success" data-nb="1"><i class="fa fa-plus"></i>Ajouter une réponse</a>'
  } else if ($type === 'yesno') {
    $html = '<div class="form-group">'
    $html = $html + '<label for="question_yesno" class="required">Texte d\'aide pour la réponse Oui/Non</label>'
    $html = $html + '<input type="text" id="question_yesno" name="question_yesno" class="form-control">'
    $html = $html + '</div>'
    $html = $html + '<div class="form-group">'
    $html = $html + '<label for="question_libre_oui" class="required">Texte pour le "oui"</label>'
    $html = $html + '<input type="text" id="question_libre_oui" name="question_libre_oui" required="required" class="form-control" value="Oui">'
    $html = $html + '</div>'
    $html = $html + '<div class="form-group">'
    $html = $html + '<label for="question_libre_non" class="required">Texte pour le "non"</label>'
    $html = $html + '<input type="text" id="question_libre_non" name="question_libre_non" required="required" class="form-control" value="Non">'
    $html = $html + '</div>'
  } else if ($type === 'echelle') {
    $html = '<div class="form-group">'
    $html = $html + '<label for="question_min" class="required">Question à échelle. Indiquer la valeur minimale</label>'
    $html = $html + '<input type="text" id="question_min" name="question_min" required="required" class="form-control" value="1">'
    $html = $html + '</div>'
    $html = $html + '<div class="form-group">'
    $html = $html + '<label for="question_min_sens" class="required">Signification valeur minimale</label>'
    $html = $html + '<input type="text" id="question_min_sens" name="question_min_sens" required="required" class="form-control">'
    $html = $html + '</div>'
    $html = $html + '<div class="form-group">'
    $html = $html + '<label for="question_max" class="required">Question à échelle. Indiquer la valeur maximale</label>'
    $html = $html + '<input type="text" id="question_max" name="question_max" required="required" class="form-control" value="10">'
    $html = $html + '</div>'
    $html = $html + '<div class="form-group">'
    $html = $html + '<label for="question_max_sens" class="required">Signification valeur maximale</label>'
    $html = $html + '<input type="text" id="question_max_sens" name="question_max_sens" required="required" class="form-control">'
    $html = $html + '</div>'

  } else if ($type === 'libre') {
    $html = '<div class="form-group">'
    $html = $html + '<label for="question_libre">Texte d\'aide pour la réponse libre</label>'
    $html = $html + '<input type="text" id="question_libre" name="question_libre" class="form-control">'
    $html = $html + '</div>'
  } else {
    $html = '<div class="alert alert-info">Choisir d\'abord le type de question</div>'
  }
  $div.empty().append($html)
})

$(document).on('click', '#addreponseqcu', function () {
  let $nb = parseInt($(this).data('nb')) + 1
  $(this).before(addChampQcu($nb))
  $(this).data('nb', $nb)
})

$(document).on('click', '#addreponseqcm', function () {
  let $nb = parseInt($(this).data('nb')) + 1
  $(this).before(addChampQcm($nb))
  $(this).data('nb', $nb)
})

function addChampQcu ($nb) {
  let $html = '<div class="form-group">'
  $html = $html + '<label for="question_qcu[' + $nb + ']" class="required">Libellé réponse ' + $nb + '</label>'
  $html = $html + '<input type="text" id="question_qcu[' + $nb + ']" name="question_qcu[' + $nb + ']" required="required" class="form-control">'
  $html = $html + '</div>'
  $html = $html + '<div class="form-group">'
  $html = $html + '<label for="question_qcu_valeur[' + $nb + ']" class="required">Valeur pour la réponse ' + $nb + '</label>'
  $html = $html + '<input type="text" id="question_qcu_valeur[' + $nb + ']" name="question_qcu_valeur[' + $nb + ']" required="required" class="form-control">'
  $html = $html + '</div>'

  return $html
}

function addChampQcm ($nb) {
  let $html = '<div class="form-group">'
  $html = $html + '<label for="question_qcm[' + $nb + ']" class="required">Libellé réponse ' + $nb + '</label>'
  $html = $html + '<input type="text" id="question_qcm[' + $nb + ']" name="question_qcm[' + $nb + ']" required="required" class="form-control">'
  $html = $html + '</div>'
  $html = $html + '<div class="form-group">'
  $html = $html + '<label for="question_qcm_valeur[' + $nb + ']" class="required">Valeur pour la réponse ' + $nb + '</label>'
  $html = $html + '<input type="text" id="question_qcm_valeur[' + $nb + ']" name="question_qcm_valeur[' + $nb + ']" required="required" class="form-control">'
  $html = $html + '</div>'

  return $html
}

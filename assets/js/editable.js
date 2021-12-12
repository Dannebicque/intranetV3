// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/editable.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/12/2021 15:16

let elementIsEditable = false
let elementEdite = null
let initialContent = null

document.querySelectorAll('.myedit').forEach((elem) => {
  elem.addEventListener('click', (e)=> {
    e.preventDefault()
    if (elementIsEditable) {
      closeElementInEdit()
    }
    elementIsEditable = true
    elementEdite = e.currentTarget
    initialContent = e.currentTarget.innerHTML
    let html = genereInput()
    e.currentTarget.innerHTML = html

  })
})

function genereInput() {
  console.log('edit')
  const key = Date.now()
  return '<div id="myEdit-zone-' + key + '" class="input-group">\n' +
    '                      <input type="text" class="form-control" id="myedit-input-' + key + '" value="' + elementEdite.innerText + '" >\n' +
    '                      <span class="input-group-append">\n' +
    ' <button class="btn btn-success-outline myedit-valide"  data-key="' + key + '"><i class="fas fa-check"></i></button>\n' +
    '                        <button class="btn btn-danger-outline myedit-annule"  data-key="' + key + '"><i class="fas fa-times"></i></button>\n' +
    '                      </span>\n' +
    '                    </div>'

}

function updateData () {
  let val = elementEdite.value
  console.log(elementEdite)
  $.ajax({
    url: elementEdite.href,
    data: {
      field: elementEdite.dataset.field,
      value: val,
      type: elementEdite.type
    },
    method: 'POST',
    success: function () {
      // myEditInitialContent.html(val)
      // $('#myEdit-zone-' + key).replaceWith(myEditInitialContent)
      // EditOnLine = false
    }
  })
}

function closeElementInEdit() {
  console.log('close previsous')
  //sauvegarde des données, puis remplacement, puis fermeture
  updateData()
  elementEdite.innerHTML = initialContent
  elementIsEditable = false

}

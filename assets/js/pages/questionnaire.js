// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/questionnaire.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 03/11/2021 17:37

document.querySelectorAll('input[name="questionnaire_section[typeSection]"]').forEach((elem) => {
  elem.addEventListener('change', (event) => {
    console.log(event.target.value)
    if (event.target.value === 'App\\Components\\Questionnaire\\Section\\ConfigurableSection') {
      document.querySelector('#fieldset_questionnaire_section_sectionAdapter').style.display = 'block'
    } else {
      document.querySelector('#fieldset_questionnaire_section_sectionAdapter').style.display = 'none'
    }
  })
})

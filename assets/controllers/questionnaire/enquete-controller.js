// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/questionnaire/enquete-controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/11/2022 13:30
import { Controller } from '@hotwired/stimulus'
import { useDebounce, useDispatch } from 'stimulus-use'
import { post } from '../../js/fetch'

export default class extends Controller {
  static values = {
    parametres: Array,
    idQuestion: String,
    typeQuestionnaire: String,
    questionnaireId: String
  }

  static debounces = ['sauvegardeReponseLibre']

  connect () {
    useDebounce(this)
    useDispatch(this, {debug: true})
  }

  change (event) {
    let value = event.target.value
    this.sauvegardeReponseChoix(event)

    if (this.idQuestionValue === event.target.dataset.fieldset) {
      for (let i = 0; i < this.parametresValue.length; i++) {
        if (this.parametresValue[i].type === 'masquage') {
          if (this.parametresValue[i].criteres.includes(value)) {
            for (let j = 0; j < this.parametresValue[i].questions.length; j++) {
              document.getElementById('field_' + this.parametresValue[i].questions[j]).style.display = 'none'
            }
          }
        }
      }
    }
    this.dispatch('change-value', {
      value: value,
      source: event.target.name,
      fieldset: event.target.dataset.fieldset
    })
  }

  updateQuestion (event) {
    let parametres = this.parametresValue
    const value = event.detail.value
    for (let i = 0; i < parametres.length; i++) {
      if (parametres[i].type === 'condition' && parametres[i].declenchement == event.detail.fieldset) {
        if (parametres[i].criteres.includes(value)) {
          document.getElementById('field_' + this.idQuestionValue).style.display = 'block'
        } else {
          document.getElementById('field_' + this.idQuestionValue).style.display = 'none'
        }
      }

    }
  }

  sauvegardeReponseChoix (event) {
    post(Routing.generate('app_etudiant_qualite_ajax_reponse', {
      questionnaire: this.questionnaireIdValue,
      typeQuestionnaire: this.typeQuestionnaireValue
    }), {
      cleReponse: event.target.id,
      cleQuestion: event.target.name,
      etudiant: event.target.dataset.etudiant
    })
  }

  onTextAreaChange (event) {
    this.sauvegardeReponseLibre(event)
  }

  async sauvegardeReponseLibre (event) {
    await post(Routing.generate('app_etudiant_qualite_ajax_reponse_txt', {
      questionnaire: this.questionnaireIdValue,
      typeQuestionnaire: this.typeQuestionnaireValue
    }), {
      cleQuestion: event.target.id,
      value: event.target.value,
      etudiant: event.target.dataset.etudiant
    })
  }
}

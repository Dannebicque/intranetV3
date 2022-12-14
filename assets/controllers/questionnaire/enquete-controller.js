// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/questionnaire/enquete-controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 14/12/2022 21:25
import { Controller } from '@hotwired/stimulus'
import { useDebounce, useDispatch } from 'stimulus-use'
import Routing from 'fos-router'
import { post } from '../../js/fetch'

export default class extends Controller {
  static values = {
    parametres: Object,
    idQuestion: String,
    questionnaireUuid: String,
    choixUserUuid: String,
  }

  static debounces = ['sauvegardeReponseLibre']

  connect() {
    useDebounce(this)
    useDispatch(this, { debug: true })
  }

  change(event) {
    const { value } = event.target
    this.sauvegardeReponseChoix(event)
    console.log(this.parametresValue)
    if (this.idQuestionValue === event.target.dataset.fieldset) {
      if (this.parametresValue.conditions) {
        for (const condition of this.parametresValue.conditions) {
          if (condition.type === 'masquage') {
            if (condition.criteres.includes(value)) {
              for (let j = 0; j < condition.questions.length; j++) {
                document.getElementById(`field_${condition.questions[j]}`).style.display = 'none'
              }
            }
          }
        }
      }
    }

    this.dispatch('change-value', {
      value, source: event.target.name, fieldset: event.target.dataset.fieldset,
    })
  }

  updateQuestion(event) {
    const parametres = this.parametresValue
    const { value } = event.detail
    if (parametres.conditions) {
      for (const condition of parametres.conditions) {
        if (condition.type === 'condition' && condition.declenchement == event.detail.fieldset) {
          if (condition.criteres.includes(parseInt(value))) {
            document.getElementById(`field_${this.idQuestionValue}`).style.display = 'block'
          } else {
            document.getElementById(`field_${this.idQuestionValue}`).style.display = 'none'
          }
        }
      }
    }
  }

  sauvegardeReponseChoix(event) {
    post(Routing.generate('api_questionnaire_qualite_ajax_reponse', {
      uuidQuestionnaire: this.questionnaireUuidValue,
      uuid: this.choixUserUuidValue,
    }), {
      cleReponse: event.target.id,
      cleQuestion: event.target.name,
    })
  }

  onTextAreaChange(event) {
    this.sauvegardeReponseLibre(event)
  }

  async sauvegardeReponseLibre(event) {
    await post(Routing.generate('api_questionnaire_qualite_ajax_reponse_txt', {
      uuidQuestionnaire: this.questionnaireUuidValue,
      uuid: this.choixUserUuidValue,
    }), {
      cleQuestion: event.target.id,
      value: event.target.value,
    })
  }
}

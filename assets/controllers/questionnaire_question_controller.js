// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/questionnaire_question_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/05/2022 22:10
import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['reponses']
  static values = {
    url: String
  }

  /*todo:
  - Ajouter le champ question parent dans la création d'une question.
  - Une liste de type de question btn sur col-2, qui affiche tout le formulaire par type (libelle, texte complémentaire, texte d'aide, réponses...)
  - Un formulaire par Type de Question, référencé dans une constante (comme le label), et construction du chemin avec une constante à la récine du composant ? Ou reconsruction si possibble de récupérer le namespace dans une class.
  - Top si possibilité d'avoir un aperçu de la question... en utilisant le composant ?
  - validation de formulaire
  - Structurer le projet en Domain ? Avec questionnaire => Renommer "Qualité"
  --- Controller
  -- Admin
  -- SA
  -- etudiant
  -- Common
  --- Entity
  --- Form
  --- Repository
  --- Classes (ou Services)

  -- Et les composants pour les outils communs (tableau, widget, pas forcément questionnaire ? a voir, peut servir dans Quizz aussi <> de qualité peut être

  Et idem dans templates/Domaine/Qualité/Admin, SA, Etudiant, Commun (regarder Grafkart pour exemple ?)
   */

  connect () {
  }

  async changeTypeQuestion (event) {
    this.reponsesTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      q: event.target.dataset.value
    })
    const response = await fetch(`${this.urlValue}?${params.toString()}`)
    this.reponsesTarget.innerHTML = await response.text()
  }
}

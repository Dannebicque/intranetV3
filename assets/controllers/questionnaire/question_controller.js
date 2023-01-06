// Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/questionnaire/question_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/01/2023 19:25
import { Controller } from '@hotwired/stimulus'
import { useDispatch } from 'stimulus-use'
import { addCallout } from '../../js/util'

export default class extends Controller {
  static targets = ['question', 'reponses']

  static values = {
    urlQuestion: String,
  }

  /* todo:
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

  connect() {
    useDispatch(this, { debug: true })
  }

  async changeTypeQuestion(event) {
    this.questionTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      action: 'edit',
      typeQuestion: event.currentTarget.value,
    })
    const response = await fetch(`${this.urlQuestionValue}?${params.toString()}`)
    this.questionTarget.innerHTML = await response.text()
  }

  async delete(event) {
    if (confirm('Voulez-vous vraiment supprimer cette question et toutes les réponses associées ?')) {
      const params = new URLSearchParams({
        action: 'delete',
      })
      await fetch(`${this.urlQuestionValue}?${params.toString()}`)
      this.dispatch('updateListe', { section: event.params.section })
      addCallout('Question supprimée', 'success')
    }
  }

  async edit() {
    this.questionTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      action: 'edit',
    })
    const response = await fetch(`${this.urlQuestionValue}?${params.toString()}`)
    this.questionTarget.innerHTML = await response.text()
  }

  async duplicate(event) {
    const params = new URLSearchParams({
      action: 'duplicate',
    })
    await fetch(`${this.urlQuestionValue}?${params.toString()}`)
    this.dispatch('updateListe', { section: event.params.section })
    addCallout('Question dupliquée', 'success')
  }

  async sauvegarde() {
    const form = document.querySelectorAll('form')
    const dataForm = new FormData(form[0])

    const body = {
      method: 'POST',
      body: dataForm,
    }

    this.questionTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      action: 'sauvegarde',
    })

    const response = await fetch(`${this.urlQuestionValue}?${params.toString()}`, body)
    addCallout('Question enregistrée', 'success')
    this.questionTarget.innerHTML = await response.text()
  }

  async up(event) {
    const params = new URLSearchParams({
      action: 'up',
    })
    await fetch(`${this.urlQuestionValue}?${params.toString()}`)
    this.dispatch('updateListe', { section: event.params.section })
  }

  async down(event) {
    const params = new URLSearchParams({
      action: 'down',
    })
    await fetch(`${this.urlQuestionValue}?${params.toString()}`)
    this.dispatch('updateListe', { section: event.params.section })
  }
}

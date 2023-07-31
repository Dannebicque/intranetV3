// Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/application/messagerie_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 31/07/2023 16:34

import { Controller } from '@hotwired/stimulus'
import tinymce from 'tinymce/tinymce.min'
import $ from 'jquery'
import { addCallout } from '../../js/util'

export default class extends Controller {
  static targets = ['content', 'contentTypeDestinataire']

  static values = {
    urlNouveauMessage: String,
    urlFiltreMessage: String,
    urlTypeDestinataire: String,
  }

  connect() {
    this._loadMessage('all')
  }

  async envoyer(e) {
    e.preventDefault()
    e.stopPropagation()

    const formData = new FormData($('form')[0])
    const content = tinymce.activeEditor.getContent({ format: 'html' })
    formData.append('messageMessage', content)

    // vérifie si tous les éléments sont présents.
    if (document.getElementById('messageSubject').value === '') {
      alert('Le sujet du message est vide.')
      return
    }
    console.log(content)
    if (content.trim() === '') {
      alert('Le texte du message est vide.')
      return
    }

    const typeDestinataire = document.querySelector('input[name="messageDestinataireType"]:checked')
    if (typeDestinataire === null) {
      alert('Veuillez indiquer un type de destinataire')
      return
    }

    switch (typeDestinataire.value) {
      case 'g':
        if (document.getElementById('messageToGroupe').value === '') {
          alert('Veuillez indiquer au moins un groupe.')
          return
        }
        break
      case 's':
        if (document.getElementById('messageToSemestre').value === '') {
          alert('Veuillez indiquer au moins un semestre.')
          return
        }
        break
      case 'e':
        if (document.getElementById('messageToLibreEtudiant').value === '') {
          alert('Veuillez indiquer au moins un étudiant.')
          return
        }
        break
      case 'p':
        const personnelDestinataire = document.querySelector('input[name="messageToPersonnel[]"]:checked')
        if (personnelDestinataire === null && document.getElementById('messageToLibrePersonnel').value === null) {
          alert('Veuillez choisir entre permanents et/ou vacataires, ou dans la liste des intervenants.')
          return
        }
        break
      case 'm':
        if (document.getElementById('messageToMatiere').value === null) {
          alert('Veuillez choisir une matière, ressource ou SAE.')
          return
        }
        break
    }

    e.currentTarget.disabled = true
    e.currentTarget.innerText = 'Envoi en cours...'

    this._sendMessage(formData)
  }

  async saveDraft(e) {
    e.preventDefault()
    e.stopPropagation()
    const formData = new FormData($('form')[0])
    const content = tinymce.activeEditor.getContent({ format: 'html' })
    formData.append('messageMessage', content)
    const response = await fetch(e.params.url, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      addCallout('Une erreur est survenue.', 'danger')
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    addCallout('Brouillon enregistré.', 'success')
  }

  async _sendMessage(formData) {
    const formAction = document.getElementById('formNewMessage').action
    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      this.contentTarget.innerHTML = window.da.loaderStimulus
      const reponse = await fetch(data.url)
      this.contentTarget.innerHTML = await reponse.text()
    } catch (error) {
      document.getElementById('messageSent').disabled = false
      document.getElementById('messageSent').textContent = 'Envoyer'
      alert(`Une erreur est survenue lors de l'envoi du message (tentative à : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()})`)
    }
  }

  addPj(e) {
    e.preventDefault()
    e.stopPropagation()
    $('#blocPj').toggle()
  }

  addFile(e) {
    e.preventDefault()
    e.stopPropagation()
    const $id = parseInt(e.currentTarget.dataset.file, 10) + 1
    const html = `<div class="row mt-1" id="file${$id}">
                 <div class="col-10">
                      <input type="file" name="pj${$id}" id="pj${$id}" class="form-control" 
                      data-action="change->application--messagerie#pjFile"
                      placeholder="Ajouter une pièce jointe">
                  </div>
                  <div class="col-2 d-grid">
                      <button class="btn d-block btn-danger-outline" data-file="${$id}"
                      data-bs-placement="bottom"
                            data-controller="interface--tooltip"
                            title="Supprimer le fichier"
                      data-action="application--messagerie#removeFile"
                      ><i class="fa fa-minus-circle"></i></button>
                  </div>
              </div>`

    document.getElementById('blocFiles').insertAdjacentHTML('beforeend', html)
    e.currentTarget.dataset.file = $id
  }

  removeFile(e) {
    e.preventDefault()
    e.stopPropagation()
    const $id = e.currentTarget.dataset.file
    document.getElementById(`file${$id}`).remove()
    this._poidsPj()
  }

  pjFile() {
    this._poidsPj()
  }

  _poidsPj() {
    let tailleTotale = 0
    document.querySelectorAll('input[type="file"]').forEach((file, element) => {
      if (file !== 'undefined') {
        tailleTotale += file.files[0].size
      }
    })
    tailleTotale /= 1024
    tailleTotale /= 1024
    document.getElementById('poidPj').innerHTML = `Le poids des pièces jointes est de ${tailleTotale.toFixed(3)} Mo`
  }

  async messageReadAuteur(event) {
    event.preventDefault()
    this.contentTarget.innerHTML = window.da.loaderStimulus
    const reponse = await fetch(event.params.url)
    this.contentTarget.innerHTML = await reponse.text()
  }

  async nouveauMessage() {
    this.contentTarget.innerHTML = window.da.loaderStimulus
    const reponse = await fetch(`${this.urlNouveauMessageValue}`)
    this.contentTarget.innerHTML = await reponse.text()
    tinymce.remove('#messageMessage')
    tinymce.init({
      selector: '#messageMessage',
      height: 300,
      menubar: false,
      language: 'fr_FR',
      content_css: 'default',
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent',
    })
  }

  async editDraft(e) {
    this.contentTarget.innerHTML = window.da.loaderStimulus
    const { message } = e.currentTarget.dataset
    const reponse = await fetch(`${e.params.url}`)
    this.contentTarget.innerHTML = await reponse.text()
    tinymce.remove('#messageMessage')
    tinymce.init({
      selector: '#messageMessage',
      height: 300,
      menubar: false,
      language: 'fr_FR',
      content_css: 'default',
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent',
    })

    // regarder le type de destinataire coché et afficher le bloc
    const typeDestinataire = document.querySelector('input[name="messageDestinataireType"]:checked')
    if (typeDestinataire !== null) {
      this.contentTypeDestinataireTarget.innerHTML = window.da.loaderStimulus
      const params = new URLSearchParams({
        typeDestinataire: typeDestinataire.value,
        message,
      })

      const rep = await fetch(`${this.urlTypeDestinataireValue}?${params.toString()}`)
      this.contentTypeDestinataireTarget.innerHTML = await rep.text()
    }
  }

  async filtreMessage(event) {
    this._loadMessage(event.params.filtre)
  }

  async _loadMessage(_filtre) {
    this.contentTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      filtre: _filtre,
    })

    const reponse = await fetch(`${this.urlFiltreMessageValue}?${params.toString()}`)
    this.contentTarget.innerHTML = await reponse.text()
  }

  async changeTypeDestinataire(event) {
    this.contentTypeDestinataireTarget.innerHTML = window.da.loaderStimulus
    const params = new URLSearchParams({
      typeDestinataire: event.currentTarget.value,
      message: event.currentTarget.dataset.message,
    })

    const reponse = await fetch(`${this.urlTypeDestinataireValue}?${params.toString()}`)
    this.contentTypeDestinataireTarget.innerHTML = await reponse.text()
  }

  deleteAll(event) {
    event.preventDefault()
    event.stopPropagation()

    const liste = []
    document.querySelectorAll('.selectMessage:checked').forEach((element) => {
      liste.push(element.value)
    })

    if (liste.length > 0) {
      if (confirm('Voulez-vous vraiment supprimer les messages sélectionnés ? Si vous en êtes l\'auteur, ils ne seront plus accessible pour les étudiants dans l\'intranet.')) {
        fetch(event.currentTarget.href, {
          method: 'DELETE',
          body: JSON.stringify(liste),
        }).then((response) => {
          if (response.ok) {
            addCallout('Les messages ont été supprimés.', 'success')
            this._loadMessage('all')
          } else {
            addCallout('Une erreur est survenue.', 'danger')
          }
        })
      }
    } else {
      addCallout('Aucun message sélectionné.', 'danger')
    }
  }

  selectAll(event) {
    document.querySelectorAll('.selectMessage').forEach((element) => {
      element.checked = event.currentTarget.checked
    })
  }

  selectMessage(event) {
    if (event.currentTarget.checked === false) {
      document.getElementById('selectAll').checked = false
    }

    if (document.querySelectorAll('.selectMessage:checked').length === document.querySelectorAll('.selectMessage').length) {
      document.getElementById('selectAll').checked = true
    }
  }
}

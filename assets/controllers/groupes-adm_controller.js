// Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/controllers/groupes-adm_controller.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/11/2023 18:15

import { Controller } from '@hotwired/stimulus'
import Routing from 'fos-router'
import $ from 'jquery'
import { get, post } from '../js/fetch'
import { addCallout } from '../js/util'

export default class extends Controller {
  static targets = ['contentGroupe', 'contentTypeGroupe']

  static values = {
    urlListeGroupes: String,
    urlListeTypeGroupes: String,
  }

  connect() {
    this._listeGroupe()
    this._listeTypeGroupe()
  }

  async _listeGroupe() {
    this.contentGroupeTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(`${this.urlListeGroupesValue}`)
    this.contentGroupeTarget.innerHTML = await response.text()
  }

  async _listeTypeGroupe() {
    this.contentTypeGroupeTarget.innerHTML = window.da.loaderStimulus
    const response = await fetch(`${this.urlListeTypeGroupesValue}`)
    this.contentTypeGroupeTarget.innerHTML = await response.text()
  }

  async changeParent(e) {
    post(Routing.generate('administration_groupe_change_parent'), {
      groupe: e.currentTarget.dataset.groupe,
      parent: e.currentTarget.value,
    }).then(() => {
      addCallout('Mise à jour du parent', 'success')
      this._listeGroupe()
    })
  }

  async changeTypeGroupe(e) {
    post(Routing.generate('administration_groupe_change_typegroupe'), {
      groupe: e.currentTarget.dataset.groupe,
      typegroupe: e.currentTarget.value,
    }).then(() => {
      addCallout('Mise à jour du type de groupe', 'success')
      this._listeGroupe()
    })
  }

  async changeParcours(e) {
    post(Routing.generate('administration_groupe_change_parcours'), {
      groupe: e.currentTarget.dataset.groupe,
      parcours: e.currentTarget.value,
    }).then(() => {
      addCallout('Mise à jour du parcours associé au groupe', 'success')
      this._listeGroupe()
    })
  }

  async updateGroupe(e) {
    post(Routing.generate('administration_groupe_ajax_edit', { id: e.params.id }), {
      field: e.params.field,
      value: e.currentTarget.value,
    }).then(() => {
      addCallout('Mise à jour des informations du groupe', 'success')
      if (e.params.field === 'ordre') {
        this._listeGroupe()
      }
    })
  }

  async duplicateGroupe(e) {
    e.preventDefault()
    get(Routing.generate('administration_groupe_duplicate', { groupe: e.currentTarget.dataset.groupe })).then(() => {
      this._listeGroupe()
      addCallout('Groupe dupliqué', 'success')
    })
  }

  addGroupe(e) {
    e.preventDefault()
    if (document.getElementById('groupe_libelle').value.trim() !== ''
      && document.getElementById('groupe_ordre').value.trim() !== '') {
      const { semestre } = e.currentTarget.dataset
      const data = new FormData($('#form_groupe')[0])

      $.ajax({
        url: Routing.generate('administration_groupe_new', { semestre }),
        data,
        processData: false,
        contentType: false,
        method: 'POST',
      }).done(() => {
        addCallout('Mise à jour du parcours associé au groupe', 'success')
        this._listeGroupe()
      })
    } else {
      addCallout('Veuillez remplir tous les champs obligatoires', 'danger')
      if (document.getElementById('groupe_libelle').value.trim() === '') {
        document.getElementById('groupe_libelle').classList.add('is-invalid')
        document.getElementById('error_groupe_libelle').display = 'block'
      } else {
        document.getElementById('groupe_libelle').classList.remove('is-invalid')
        document.getElementById('error_groupe_libelle').display = 'none'
      }
      if (document.getElementById('groupe_ordre').value.trim() === '') {
        document.getElementById('groupe_ordre').classList.add('is-invalid')
        document.getElementById('error_groupe_ordre').display = 'block'
      } else {
        document.getElementById('groupe_ordre').classList.remove('is-invalid')
        document.getElementById('error_groupe_ordre').display = 'none'
      }
    }
  }

  changeTypeTypeGroupe(e) {
    post(Routing.generate('administration_typegroupe_change_type', { typeGroupe: e.currentTarget.dataset.typegroupe }), {
      type: e.currentTarget.value,
    }).then(() => {
      addCallout('Mise à jour du type de type de groupe', 'success')
    })
  }

  addTypeGroupe(e) {
    e.preventDefault()
    if (document.getElementById('typegroupe_libelle').value.trim() !== ''
      && document.getElementById('typegroupe_type').value.trim() !== '') {
      const { semestre } = e.currentTarget.dataset
      post(
        Routing.generate('administration_type_groupe_new', { semestre }),
        {
          libelle: document.getElementById('typegroupe_libelle').value.trim(),
          type: document.getElementById('typegroupe_type').value.trim(),
          defaut: document.getElementById('typegroupe_defaut').checked,
          mutualise: document.getElementById('typegroupe_mutualise').checked,
        },
      ).then(() => {
        this._listeGroupe()
        this._listeTypeGroupe()
        addCallout('Ajout d\'un type de groupe', 'success')
      })
    } else {
      addCallout('Veuillez remplir tous les champs obligatoires', 'danger')
      if (document.getElementById('typegroupe_libelle').value.trim() === '') {
        document.getElementById('typegroupe_libelle').classList.add('is-invalid')
        document.getElementById('error_typegroupe_libelle').display = 'block'
      } else {
        document.getElementById('typegroupe_libelle').classList.remove('is-invalid')
        document.getElementById('error_typegroupe_libelle').display = 'none'
      }
      if (document.getElementById('typegroupe_type').value.trim() === '') {
        document.getElementById('typegroupe_type').classList.add('is-invalid')
        document.getElementById('error_typegroupe_type').display = 'block'
      } else {
        document.getElementById('typegroupe_type').classList.remove('is-invalid')
        document.getElementById('error_typegroupe_type').display = 'none'
      }
    }
  }

  changeDefaut(e) {
    const { semestre } = e.currentTarget.dataset
    e.preventDefault()
    e.stopPropagation()

    post(Routing.generate('administration_type_groupe_defaut', {
      semestre,
      typegroupe: e.currentTarget.dataset.type_groupe,
    }), { defaut: e.currentTarget.value }).then(() => {
      addCallout('Type de groupe par défaut enregistrée', 'success')
      this._listeTypeGroupe()
    }).catch(() => {
      addCallout('Erreur lors de l\'enregistrement', 'danger')
    })
  }

  changeMutualise(e) {
    const { semestre } = e.currentTarget.dataset
    e.preventDefault()
    e.stopPropagation()

    post(Routing.generate('administration_type_groupe_mutualise', {
      semestre,
      typegroupe: e.currentTarget.dataset.type_groupe,
    }), { mutualise: e.currentTarget.value }).then(() => {
      addCallout('Type de groupe mutualisé enregistrée', 'success')
    }).catch(() => {
      addCallout('Erreur lors de l\'enregistrement', 'danger')
    })
  }

  async changeSemestres(e) {
    console.log(e)
    console.log(e.target.tomselect.items)

    const { typegroupe } = e.currentTarget.dataset
    e.preventDefault()
    e.stopPropagation()

    post(Routing.generate('administration_type_groupe_semestres', {
      typegroupe,
    }), { semestres: e.target.tomselect.items }).then(() => {
      addCallout('Type de groupe mutualisé enregistrée', 'success')
    }).catch(() => {
      addCallout('Erreur lors de l\'enregistrement', 'danger')
    })
  }
}

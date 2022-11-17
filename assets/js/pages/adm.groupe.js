// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/adm.groupe.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/09/2022 09:06
import $ from 'jquery'
import Routing from 'fos-router'
import { addCallout } from '../util'
import { get, load, post } from '../fetch'

// document.querySelectorAll('.change-parent').forEach((el) => {
//   el.addEventListener('change', ((e) => {
//     const { semestre } = e.currentTarget.dataset
//     post(Routing.generate('administration_groupe_change_parent'), {
//       groupe: e.currentTarget.dataset.groupe,
//       parent: e.currentTarget.value,
//     }).then(() => {
//       load(Routing.generate('administration_groupe_liste_semestre', { semestre }), document.getElementById('groupes_semestre'))
//       addCallout('Mise à jour du parent', 'success')
//     })
//   }))
// })

// document.querySelectorAll('.change-typegroupe').forEach((el) => {
//   el.addEventListener('change', ((e) => {
//     const { semestre } = e.currentTarget.dataset
//     post(Routing.generate('administration_groupe_change_typegroupe'), {
//       groupe: e.currentTarget.dataset.groupe,
//       typegroupe: e.currentTarget.value,
//     }).then(() => {
//       load(Routing.generate('administration_groupe_liste_semestre', { semestre }), document.getElementById('groupes_semestre'))
//       addCallout('Mise à jour du type de groupe', 'success')
//     })
//   }))
// })

// document.querySelectorAll('.change-parcours').forEach((el) => {
//   el.addEventListener('change', ((e) => {
//     const { semestre } = e.currentTarget.dataset
//     post(Routing.generate('administration_groupe_change_parcours'), {
//       groupe: e.currentTarget.dataset.groupe,
//       parcours: e.currentTarget.value,
//     }).then(() => {
//       load(Routing.generate('administration_groupe_liste_semestre', { semestre }), document.getElementById('groupes_semestre'))
//       addCallout('Mise à jour du parcours associé au groupe', 'success')
//     })
//   }))
// })

document.querySelectorAll('.change-type_typegroupe').forEach((el) => {
  el.addEventListener('change', ((e) => {
    post(Routing.generate('administration_typegroupe_change_type', { typeGroupe: $(this).data('typegroupe') }), {
      type: e.currentTarget.value,
    }).then(() => {
      addCallout('Mise à jour du type de type de groupe', 'success')
    })
  }))
})

// document.querySelectorAll('.duplicate-groupe').forEach((el) => {
//   el.addEventListener('click', ((e) => {
//     e.preventDefault()
//     const { semestre } = e.currentTarget.dataset
//     get(Routing.generate('administration_groupe_duplicate', { groupe: $(this).data('groupe') })).then(() => {
//       load(Routing.generate('administration_groupe_liste_semestre', { semestre }), document.getElementById('groupes_semestre'))
//       addCallout('Groupe dupliqué', 'success')
//     })
//   }))
// })

// document.querySelectorAll('.duplicate-type_groupe').forEach((el) => {
//   el.addEventListener('click', ((e) => {
//     e.preventDefault()
//     const { semestre } = e.currentTarget.dataset
//     get(Routing.generate('administration_type_groupe_duplicate', { typegroupe: $(this).data('typegroupe') })).then(() => {
//       load(Routing.generate('administration_groupe_liste_semestre', { semestre }), document.getElementById('groupes_semestre'))
//       load(Routing.generate('administration_type_groupe_liste_semestre', { semestre }), document.getElementById('type_groupes_semestre'))
//       addCallout('Type de groupe dupliqué', 'success')
//     })
//   }))
// })
//
// document.getElementById('addGroupe').addEventListener('click', ((e) => {
//   e.preventDefault()
//   if (document.getElementById('groupe_libelle').value.trim() !== ''
//     && document.getElementById('groupe_ordre').value.trim() !== '') {
//     const { semestre } = e.currentTarget.dataset
//     const data = new FormData($('#form_groupe')[0])
//     $.ajax({
//       url: Routing.generate('administration_groupe_new', { semestre }),
//       data,
//       processData: false,
//       contentType: false,
//       method: 'POST',
//       success() {
//         load(Routing.generate('administration_groupe_liste_semestre', { semestre }), document.getElementById('groupes_semestre'))
//         addCallout('Mise à jour du parcours associé au groupe', 'success')
//       },
//     })
//   } else {
//     addCallout('Veuillez remplir tous les champs obligatoires', 'danger')
//     if (document.getElementById('groupe_libelle').value.trim() === '') {
//       document.getElementById('groupe_libelle').classList.add('is-invalid')
//       document.getElementById('error_groupe_libelle').display = 'block'
//     } else {
//       document.getElementById('groupe_libelle').classList.remove('is-invalid')
//       document.getElementById('error_groupe_libelle').display = 'none'
//     }
//     if (document.getElementById('groupe_ordre').value.trim() === '') {
//       document.getElementById('groupe_ordre').classList.add('is-invalid')
//       document.getElementById('error_groupe_ordre').display = 'block'
//     } else {
//       document.getElementById('groupe_ordre').classList.remove('is-invalid')
//       document.getElementById('error_groupe_ordre').display = 'none'
//     }
//   }
// }))

// document.getElementById('addTypeGroupe').addEventListener('click', ((e) => {
//   e.preventDefault()
//   if (document.getElementById('typegroupe_libelle').value.trim() !== ''
//     && document.getElementById('typegroupe_type').value.trim() !== '') {
//     const { semestre } = e.currentTarget.dataset
//     post(
//       Routing.generate('administration_type_groupe_new', { semestre }),
//       {
//         libelle: document.getElementById('typegroupe_libelle').value.trim(),
//         type: document.getElementById('typegroupe_type').value.trim(),
//         defaut: document.getElementById('typegroupe_defaut').value,
//         mutualise: document.getElementById('typegroupe_mutualise').value,
//       },
//     ).then(() => {
//       load(Routing.generate('administration_groupe_liste_semestre', { semestre }), document.getElementById('groupes_semestre'))
//       load(Routing.generate('administration_type_groupe_liste_semestre', { semestre }), document.getElementById('type_groupes_semestre'))
//       addCallout('Ajout d\'un type de groupe', 'success')
//     })
//   } else {
//     addCallout('Veuillez remplir tous les champs obligatoires', 'danger')
//     if (document.getElementById('typegroupe_libelle').value.trim() === '') {
//       document.getElementById('typegroupe_libelle').classList.add('is-invalid')
//       document.getElementById('error_typegroupe_libelle').display = 'block'
//     } else {
//       document.getElementById('typegroupe_libelle').classList.remove('is-invalid')
//       document.getElementById('error_typegroupe_libelle').display = 'none'
//     }
//     if (document.getElementById('typegroupe_type').value.trim() === '') {
//       document.getElementById('typegroupe_type').classList.add('is-invalid')
//       document.getElementById('error_typegroupe_type').display = 'block'
//     } else {
//       document.getElementById('typegroupe_type').classList.remove('is-invalid')
//       document.getElementById('error_typegroupe_type').display = 'none'
//     }
//   }
// }))
//
// document.querySelectorAll('.changeDefaut').forEach((el) => {
//   el.addEventListener('change', ((e) => {
//     const { semestre } = e.currentTarget.dataset
//     e.preventDefault()
//     e.stopPropagation()
//
//     post(Routing.generate('administration_type_groupe_defaut', {
//       semestre,
//       typegroupe: e.currentTarget.dataset.type_groupe,
//     }), { defaut: e.currentTarget.value }).then(() => {
//       load(Routing.generate('administration_type_groupe_liste_semestre', { semestre }), document.getElementById('type_groupes_semestre'))
//       addCallout('Type de groupe par défaut enregistrée', 'success')
//     }).catch(() => {
//       addCallout('Erreur lors de l\'enregistrement', 'danger')
//     })
//   }))
// })
//
// document.querySelectorAll('.changeMutualise').forEach((el) => {
//   el.addEventListener('change', ((e) => {
//     const { semestre } = e.currentTarget.dataset
//     e.preventDefault()
//     e.stopPropagation()
//
//     post(Routing.generate('administration_type_groupe_defaut', {
//       semestre,
//       typegroupe: e.currentTarget.dataset.type_groupe,
//     }), { defaut: e.currentTarget.value }).then(() => {
//       load(Routing.generate('administration_type_groupe_liste_semestre', { semestre }), document.getElementById('type_groupes_semestre'))
//       addCallout('Type de groupe mutualisé enregistrée', 'success')
//     }).catch(() => {
//       addCallout('Erreur lors de l\'enregistrement', 'danger')
//     })
//   }))
// })

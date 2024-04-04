// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/JsonResponse.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/04/2024 10:47

import { addCallout } from './util'

export default async function JsonResponse(reponse) {
  const data = await reponse.json()
  if (reponse.status === 200) {
    if (data.message !== undefined && data.message.trim() !== '') {
      addCallout(data.message, 'success')
    } else {
      addCallout('Sauvegarde effectuée', 'success')
    }

    return data
  }

  if (reponse.status === 500) {
    if (data.message !== undefined && data.message.trim() !== '') {
      addCallout(data.message, 'error')
    } else {
      addCallout('Erreur lors de la sauvegarde', 'error')
    }
    return data
  }
}

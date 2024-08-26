// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/DateTime.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/08/2024 09:19

function formatTime(dateTime) {
  return new Intl.DateTimeFormat('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(dateTime)
}

function formatDate(dateTime) {
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(dateTime)
}

export { formatTime, formatDate }

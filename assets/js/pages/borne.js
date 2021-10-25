// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/borne.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/10/2021 19:37

import '@fortawesome/fontawesome-pro/scss/fontawesome.scss'
import '@fortawesome/fontawesome-pro/scss/solid.scss'
import '../../css/borne.scss'

require('bootstrap')

window.addEventListener('load', function () { //le dom est chargé
  initLocalClocks()
  horloge()
})

function horloge () {
  var hms = new Date()
  var h, m
  h = hms.getHours()
  m = hms.getMinutes()
  if (m < 10) {
    m = '0' + m
  }

  document.getElementById('heure').innerHTML = h + ':' + m
}

/*
 * Starts any clocks using the user's local time
 * From: cssanimation.rocks/clocks
 */
function initLocalClocks () {
  // Get the local time using JS
  var date = new Date
  var seconds = date.getSeconds()
  var minutes = date.getMinutes()
  var hours = date.getHours()

  // Create an object with each hand and it's angle in degrees
  var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ]
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.' + hands[j].hand)
    for (var k = 0; k < elements.length; k++) {
      elements[k].style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)'
      elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)'
      // If this is a minute hand, note the seconds position (to calculate minute position later)
      if (hands[j].hand === 'minutes') {
        elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle)
      }
    }
  }
}

// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/pages/borne.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/03/2024 16:33
import '@fortawesome/fontawesome-pro/scss/fontawesome.scss'
import '@fortawesome/fontawesome-pro/scss/solid.scss'
import '../../css/borne.scss'

function autoRefresh(minutes) {
  const hms = new Date()
  const timeout = minutes * 60000
  setTimeout('location.reload(true);', timeout)
}

function horloge() {
  const hms = new Date()
  let h
  let m
  h = hms.getHours()
  m = hms.getMinutes()
  if (m < 10) {
    m = `0${m}`
  }

  document.getElementById('heure').innerHTML = `${h}:${m}`
}

/*
 * Starts any clocks using the user's local time
 * From: cssanimation.rocks/clocks
 */
function initLocalClocks() {
  // Get the local time using JS
  const date = new Date()
  const seconds = date.getSeconds()
  const minutes = date.getMinutes()
  const hours = date.getHours()

  // Create an object with each hand and it's angle in degrees
  const hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2),
    },
    {
      hand: 'minutes',
      angle: (minutes * 6),
    },
    {
      hand: 'seconds',
      angle: (seconds * 6),
    },
  ]
  // Loop through each of these hands to set their angle
  for (let j = 0; j < hands.length; j++) {
    const elements = document.querySelectorAll(`.${hands[j].hand}`)
    for (let k = 0; k < elements.length; k++) {
      elements[k].style.webkitTransform = `rotateZ(${hands[j].angle}deg)`
      elements[k].style.transform = `rotateZ(${hands[j].angle}deg)`
      // If this is a minute hand, note the seconds position (to calculate minute position later)
      if (hands[j].hand === 'minutes') {
        elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle)
      }
    }
  }
}

function easeInOutQuad(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t }

const overflowedSessions = []

function scrollOverflowedSessions() {
  overflowedSessions.forEach((session) => {
    scroll(session.container, session.overflowAmount, 4000)
  })

  function scroll(element, amount, duration, onDone) {
    const start = element.scrollTop
    const startTime = performance.now()

    if (start - amount == 0) amount = 0

    function animateScroll() {
      now = performance.now()
      t = (now - startTime) / duration

      element.scrollTop = lerp(start, amount, easeInOutQuad(t))

      if (t < 1) window.requestAnimationFrame(animateScroll)
      else {
        element.scrollTop = amount
        onDone && onDone()
      }
    }

    animateScroll()
  }

  function lerp(start, end, t) { return (1 - t) * start + t * end }
}

function findOverflowedSessions() {
  document.querySelectorAll('.session').forEach((session) => {
    const sessionHeight = session.offsetHeight
    const sessionBodyHeight = session.querySelector('.session-body').offsetHeight
    if (sessionBodyHeight > sessionHeight) {
      overflowedSessions.push({ container: session, overflowAmount: sessionBodyHeight - sessionHeight })
    }
  })
}

window.addEventListener('load', () => { // le dom est chargé
  initLocalClocks()
  horloge()
  setInterval(horloge, 1000)
  autoRefresh(10)
  findOverflowedSessions()
  setInterval(scrollOverflowedSessions, 6000)
})

// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/app.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 17/02/2021 20:09

import {startStimulusApp} from '@symfony/stimulus-bridge'

// Registers Stimulus controllers from controllers.json and in the controllers/ directory
export const app2 = startStimulusApp(require.context(
  '@symfony/stimulus-bridge/lazy-controller-loader!./controllers',
  true,
  /\.(j|t)sx?$/
))

import './js/app.js'

/* Stimulus controller */
import Clipboard from 'stimulus-clipboard'

app2.register('clipboard', Clipboard)


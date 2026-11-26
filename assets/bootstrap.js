// Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/bootstrap.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/11/2026 12:36

import {startStimulusApp} from '@symfony/stimulus-bridge'
import Clipboard from 'stimulus-clipboard'

// Registers Stimulus controllers from controllers.json and in the controllers/ directory
export const app = startStimulusApp(require.context(
  '@symfony/stimulus-bridge/lazy-controller-loader!./controllers',
  true,
  /\.(j|t)sx?$/
))

app.register('clipboard', Clipboard)

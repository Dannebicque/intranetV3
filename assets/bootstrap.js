// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/bootstrap.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/08/2021 08:35

import {startStimulusApp} from '@symfony/stimulus-bridge'

// Registers Stimulus controllers from controllers.json and in the controllers/ directory
export const app = startStimulusApp(require.context(
  '@symfony/stimulus-bridge/lazy-controller-loader!./controllers',
  true,
  /\.(j|t)sx?$/
))

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);
/* Stimulus controller */
import Clipboard from 'stimulus-clipboard'

app.register('clipboard', Clipboard)

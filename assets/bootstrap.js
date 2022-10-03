// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/bootstrap.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/09/2022 22:08

import {startStimulusApp} from '@symfony/stimulus-bridge'
import LiveController from '@symfony/ux-live-component';
import '@symfony/ux-live-component/styles/live.css';

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
//import Notification from "stimulus-notification"

app.register('clipboard', Clipboard)
//app.register('notification', Notification)
app.register('live', LiveController);

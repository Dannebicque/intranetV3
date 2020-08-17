// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/router.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2020 16:18

// const router = require('../../vendor/friensofsymfony/js-routing-bundle/Resources/public/js/router.min.js');
// // dumped_routes.json is the output file for the fos:js-routing:dump command
// const routerConfig = require('../../public/js/fos_js_routes.json');
// router.setRoutingData(routerConfig);
//
// module.exports = router;
const {router} = require('../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js')
require('../../public/js/fos_js_routes.json')
module.exports = router

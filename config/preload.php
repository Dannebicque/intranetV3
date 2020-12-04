<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/config/preload.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/12/2020 13:44

if (file_exists(dirname(__DIR__) . '/var/cache/prod/App_KernelProdContainer.preload.php')) {
    require dirname(__DIR__) . '/var/cache/prod/App_KernelProdContainer.preload.php';
}

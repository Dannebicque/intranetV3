<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/AideController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/07/2021 07:49
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AideController extends AbstractController
{
    #[Route('/aide/{sujet}', name: 'help_article')]
    public function index(
        string $sujet
    ): Response {
        $base_url = 'https://documentation.iutranet.fr/';
        $tab = [
            'sujet' => 'url'
        ];
        if (array_key_exists($sujet, $tab)) {
            return $this->redirect($base_url . $tab[$sujet]);
        }

        return $this->redirect($base_url);

    }
}

<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/BreadcrumbController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/10/2021 14:50
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class BreadcrumbController extends AbstractController
{
    public function display(Request $request, ?string $header = ''): Response
    {
        //todo: utiliser un twigcomponnent ???
        $originalUrl = $request->server->get('PHP_SELF');
        if (str_starts_with($originalUrl, '/index.php')) {
            $originalUrl = substr($originalUrl, 10, strlen($originalUrl));
        }

        if (str_starts_with($originalUrl, '/fr/') || str_starts_with($originalUrl, '/en/')) {
            $originalUrl = substr($originalUrl, 4, strlen($originalUrl));
        }

        $partsOfUrl = explode('/', $originalUrl);
        $path = [];
        if (count($partsOfUrl) > 1) {
            //plus que fr/ et la page en cours (donc header).
            //On construit un tableau pour le path.
            foreach ($partsOfUrl as $part) {
                if (trim($part) !== '') {
                    $t['route'] = $part; //faire un tableau des routes et URL ???
                    $t['libelle'] = $part;
                    $path[] = $t;
                }
            }
        }

        return $this->render('breadcrumb/display.html.twig', [
            'path' => $path,
            'header' => $header,
        ]);
    }
}

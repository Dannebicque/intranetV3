<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/BorneController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller;

use App\Classes\Edt\MyEdtBorne;
use App\Entity\Constantes;
use App\Entity\Semestre;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BorneController extends AbstractController
{
    /**
     * @Route("/borne/{semestre1}/{semestre2}", name="borne")
     */
    public function index(MyEdtBorne $myEdtBorne, Semestre $semestre1, Semestre $semestre2): Response
    {
        $myEdtBorne->init();
        $myEdtBorne->calculSemestre($semestre1, $semestre2);
        // récupération des messages
        $messages = [];
        $messages[] = $semestre1->getBornes();
        $messages[] = $semestre2->getBornes();

        $response = new Response();

        $response->headers->set('Access-Control-Allow-Origin', '*');
        $content = $this->renderView('borne/index.html.twig', [
            't'        => $myEdtBorne->getData(),
            'messages' => $messages,
            'lignes'   => Constantes::TAB_CRENEAUX,
        ]);

        $response->setContent($content);

        return $response;
    }
}

<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/BorneController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/09/2020 06:44

namespace App\Controller;

use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Classes\Edt\MyEdtBorne;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BorneController extends AbstractController
{
    /**
     * @Route("/borne/{semestre1}/{semestre2}", name="borne")
     * @param MyEdtBorne $myEdtBorne
     * @param Semestre   $semestre1
     * @param Semestre   $semestre2
     *
     * @return Response
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
            'lignes'   => Constantes::TAB_CRENEAUX
        ]);

        $response->setContent($content);

        return $response;
    }
}

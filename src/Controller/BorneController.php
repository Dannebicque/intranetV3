<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/BorneController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 7/12/19 11:21 AM
 */

namespace App\Controller;

use App\Entity\Semestre;
use App\MesClasses\Edt\MyEdtBorne;
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
        //$response->headers->set('Content-Type', 'application/json');
        // Allow all websites
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $content = $this->renderView('borne/index.html.twig', [
            't'        => $myEdtBorne->getData(),
            'messages' => $messages,
            'lignes'   => [
                1  => ['8h00', '9h30'],
                4  => ['9h30', '11h00'],
                7  => ['11h00', '12h30'],
                10 => ['12h30', '14h00'],
                13 => ['14h00', '15h30'],
                16 => ['15h30', '17h00'],
                19 => ['17h00', '18h30']
            ]
        ]);

        $response->setContent($content);

        return $response;
    }
}

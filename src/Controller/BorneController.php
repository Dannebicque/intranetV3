<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/BorneController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/11/2022 15:08
 */

namespace App\Controller;

use App\Classes\Edt\MyEdtBorne;
use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\Borne;
use App\Entity\Constantes;
use App\Entity\Semestre;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BorneController extends AbstractController
{
    #[Route(path: '/borne/{semestre1}/{semestre2}', name: 'borne')]

    /** @deprecated */
    public function index(
        TypeMatiereManager $typeMatiereManager,
        MyEdtBorne $myEdtBorne,
        Semestre $semestre1,
        Semestre $semestre2
    ): Response {
        $myEdtBorne->init();
        $myEdtBorne->calculSemestre($semestre1, $semestre2, $semestre1->getAnneeUniversitaire(), $typeMatiereManager);
        // récupération des messages
        $messages = [];
        $messages[] = $semestre1->getBornes();
        $messages[] = $semestre2->getBornes();
        $response = new Response();
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $content = $this->renderView('borne/index.html.twig', [
            't' => $myEdtBorne->getData(),
            'messages' => $messages,
            'lignes' => Constantes::TAB_CRENEAUX,
        ]);
        $response->setContent($content);

        return $response;
    }

    /**
     * @throws \App\Exception\SemestreNotFoundException
     */
    #[Route(path: '/borne-edt/{numBorne}', name: 'borne2')]
    public function borne(TypeMatiereManager $typeMatiereManager, MyEdtBorne $myEdtBorne, int $numBorne = 1): Response
    {
        $nbBornes = [
            1 => [
                'zone1' => ['type' => 'semestre', 'valeur' => 79],
               // 'zone2' => ['type' => 'semestre', 'valeur' => 10],
                'zone3' => ['type' => 'message', 'valeur' => Borne::class],
            ],
            2 => [
                'zone1' => ['type' => 'semestre', 'valeur' => 93],
               // 'zone2' => ['type' => 'semestre', 'valeur' => 5],
                // 'zone2' => ['type' => 'message', 'valeur' => Message::class],
                'zone3' => ['type' => 'message', 'valeur' => Borne::class],
            ],
            3 => [
                'zone1' => ['type' => 'semestre', 'valeur' => 1],
                'zone2' => ['type' => 'semestre', 'valeur' => 2],
                // 'zone2' => ['type' => 'message', 'valeur' => Message::class],
                'zone3' => ['type' => 'message', 'valeur' => Borne::class],
            ],
        ];
        $zones = [];
        $myEdtBorne->init();
        foreach ($nbBornes[$numBorne] as $zone => $partBorne) {
            switch ($partBorne['type']) {
                case 'semestre':
                    $zones[$zone]['type'] = 'semestre';
                    $zones[$zone]['data'] = $myEdtBorne->getAffichageBorneJourSemestre($partBorne['valeur'],
                        $typeMatiereManager);
                    break;
                case 'message':
                    break;
            }
        }
        $response = new Response();
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $content = $this->renderView('borne/index2.html.twig', [
            'zones' => $zones,
            'tabHeures' => Constantes::TAB_HEURES_EDT_2,
        ]);

        $response->setContent($content);

        return $response;
    }
}

<?php
/*
 * Copyright (c) 2025. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/BorneController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/02/2025 08:31
 */

namespace App\Controller;

use App\Classes\Edt\MyEdtBorne;
use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\Borne;
use App\Entity\Constantes;
use App\Exception\SemestreNotFoundException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class BorneController extends AbstractController
{
    /**
     * @throws SemestreNotFoundException
     */
    #[Route(path: '/borne-edt/{numBorne}', name: 'borne2')]
    public function borne(TypeMatiereManager $typeMatiereManager, MyEdtBorne $myEdtBorne, int $numBorne = 1): Response
    {
        $nbBornes = [
            1 => [
                'zone1' => ['type' => 'semestre', 'valeur' => 80],
                'zone3' => ['type' => 'message', 'valeur' => Borne::class],
            ],
            2 => [
                'zone1' => ['type' => 'semestre', 'valeur' => 102],
                'zone3' => ['type' => 'message', 'valeur' => Borne::class],
            ],
            3 => [
                'zone1' => ['type' => 'semestre', 'valeur' => 104],
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
        $largeur = [
            'TP' => 1,
            'PTTP' => 1,
            'TD' => 2,
            'PTTD' => 2,
            'CM' => 8,
            'PTCM' => 8
        ];
        $crenaux = ["0800", "0930", "1100", "1230", "1400", "1530", "1700", "1830", "1930"];

        $response = new Response();
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $content = $this->renderView('borne/index2.html.twig', [
            'zones' => $zones,
            'tabHeures' => Constantes::TAB_HEURES_EDT_2,
            'tabHeuresReversed' => Constantes::TAB_HEURES_EDT_LIGNE_2,
            'largeur' => $largeur,
            'crenaux' => $crenaux
        ]);

        $response->setContent($content);

        return $response;
    }
}

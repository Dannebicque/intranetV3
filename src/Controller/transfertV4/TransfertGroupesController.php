<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/transfertV4/TransfertGroupesController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 15/12/2024 09:12
 */

namespace App\Controller\transfertV4;

use App\Entity\Groupe;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\ScolariteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/transfert')]
class TransfertGroupesController extends AbstractController
{
    /**
     * @param EtudiantRepository $etudiantRepository
     * @param ScolariteRepository $scolariteRepository
     * @param int $id
     * @return Response
     */
    #[Route('/groupes', name: 'api_transfert_groupes', methods: ['GET', 'POST'])]
    public function getEdtIntranet(
        GroupeRepository $groupeRepository,
    ): Response
    {
        $groupes = $groupeRepository->findBy(['parent' => null]);
        $arborescenceGroupes = [];
        foreach ($groupes as $groupe) {
            $arborescenceGroupes[] = $this->construireArborescence($groupe);
        }

        return $this->json($arborescenceGroupes);
    }

    function construireArborescence(Groupe $groupe)
    {
        // Ajouter les informations du groupe dans un tableau
        $arborescence = $groupe->toArray();

        // Si le groupe a des enfants, on les ajoute récursivement dans l'entrée 'enfants'
        $arborescence['enfants'] = [];
        if ($groupe->getEnfants()) {
            foreach ($groupe->getEnfants() as $enfant) {
                $arborescence['enfants'][] = $this->construireArborescence($enfant);
            }
        }

        return $arborescence;
    }
}

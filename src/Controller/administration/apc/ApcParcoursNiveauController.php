<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/apc/ApcParcoursNiveauController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Controller\administration\apc;

use App\Controller\BaseController;
use App\Entity\ApcNiveau;
use App\Entity\ApcParcours;
use App\Entity\ApcParcoursNiveau;
use App\Entity\Diplome;
use App\Repository\ApcComptenceRepository;
use App\Repository\ApcParcoursNiveauRepository;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/apc/parcours/niveau', name: 'administration_')]
class ApcParcoursNiveauController extends BaseController
{
    /**
     * @throws NonUniqueResultException
     */
    #[Route(path: '/ajax/{parcours}/{etat}/{niveau}', name: 'apc_parcours_niveau_ajax', options: ['expose' => true])]
    public function ajax(ApcParcoursNiveauRepository $apcParcoursNiveauRepository, ApcParcours $parcours, $etat, ApcNiveau $niveau): Response
    {
        if (0 == $etat) {
            // existe et on souhaite retirer
            $pn = $apcParcoursNiveauRepository->findParcoursNiveau($parcours, $niveau);
            if ($pn) {
                $this->entityManager->remove($pn);
            }
        } else {
            // n'existe pas on ajoute
            $pn = new ApcParcoursNiveau();
            $pn->setNiveau($niveau);
            $pn->setParcours($parcours);
            $this->entityManager->persist($pn);
        }
        $this->entityManager->flush();

        return $this->json(true);
    }

    #[Route(path: '/configuration/{parcours}/{diplome}', name: 'apc_parcours_niveau_new', methods: ['GET', 'POST'])]
    public function new(
        ApcParcoursNiveauRepository $apcParcoursNiveauRepository,
        ApcComptenceRepository      $apcComptenceRepository,
        ApcParcours                 $parcours,
        Diplome                     $diplome
    ): Response
    {
        $competences = $apcComptenceRepository->findByReferentiel($parcours->getApcReferentiel());
        $tabNiveaux = $apcParcoursNiveauRepository->findNiveauByParcoursArray($parcours);

        return $this->render('apc/apc_parcours_niveau/new.html.twig', [
            'parcours' => $parcours,
            'comptences' => $competences,
            'tabNiveauxId' => $tabNiveaux,
            'diplome' => $diplome
        ]);
    }
}

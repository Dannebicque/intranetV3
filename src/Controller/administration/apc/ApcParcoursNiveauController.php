<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcParcoursNiveauController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/05/2021 16:35
 */

namespace App\Controller\administration\apc;

use App\Controller\BaseController;
use App\Entity\ApcNiveau;
use App\Entity\ApcParcours;
use App\Entity\ApcParcoursNiveau;
use App\Repository\ApcComptenceRepository;
use App\Repository\ApcParcoursNiveauRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/apc/parcours/niveau', name: 'administration_')]
class ApcParcoursNiveauController extends BaseController
{
    /**
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    #[Route(path: '/ajax/{parcours}/{etat}/{niveau}', name: 'apc_parcours_niveau_ajax', options: ['expose' => true])]
    public function ajax(ApcParcoursNiveauRepository $apcParcoursNiveauRepository, ApcParcours $parcours, $etat, ApcNiveau $niveau): Response
    {
        if (0 == $etat) {
            //existe et on souhaite retirer
            $pn = $apcParcoursNiveauRepository->findParcoursNiveau($parcours, $niveau);
            if ($pn) {
                $this->entityManager->remove($pn);
            }
        } else {
            //n'existe pas on ajoute
            $pn = new ApcParcoursNiveau();
            $pn->setNiveau($niveau);
            $pn->setParcours($parcours);
            $this->entityManager->persist($pn);
        }
        $this->entityManager->flush();

        return $this->json(true);
    }

    #[Route(path: '/configuration/{parcours}', name: 'apc_parcours_niveau_new', methods: ['GET', 'POST'])]
    public function new(ApcParcoursNiveauRepository $apcParcoursNiveauRepository, ApcComptenceRepository $apcComptenceRepository, ApcParcours $parcours): Response
    {
        $competences = $apcComptenceRepository->findByDiplome($parcours->getDiplome());
        $tabNiveaux = $apcParcoursNiveauRepository->findNiveauByParcoursArray($parcours);

        return $this->render('apc/apc_parcours_niveau/new.html.twig', [
            'parcours' => $parcours,
            'comptences' => $competences,
            'tabNiveauxId' => $tabNiveaux,
        ]);
    }
}

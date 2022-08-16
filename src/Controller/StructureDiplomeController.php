<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/StructureDiplomeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/08/2022 18:22
 */

namespace App\Controller;

use App\Exception\DiplomeNotFoundException;
use App\Repository\ApcReferentielRepository;
use App\Repository\DiplomeRepository;
use App\Repository\PpnRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StructureDiplomeController extends AbstractController
{
    /**
     * @throws \App\Exception\DiplomeNotFoundException
     */
    #[Route('/structure/diplome/affiche', name: 'structure_diplome_affiche')]
    public function index(
        PpnRepository $ppnRepository,
        ApcReferentielRepository $apcReferentielRepository,
        DiplomeRepository $diplomeRepository,
        Request $request
    ): Response {
        $idDiplome = $request->query->get('diplome');
        $idPpn = $request->query->get('ppn');
        $diplome = $diplomeRepository->find($idDiplome);
        $referentiel = null;
        $ppn = null;
        $parcours = null;

        if (null === $diplome) {
            throw new DiplomeNotFoundException();
        }

        if ($diplome->getTypeDiplome()?->getApc() === true) {
            if ('null' !== $idPpn) {
                $referentiel = $apcReferentielRepository->find($idPpn);
            }

            if (null === $referentiel) {
                $referentiel = $diplome->getReferentiel();
            }
            $parcours = $referentiel->getApcParcours();
        } else {
            if ('null' !== $idPpn) {
                $ppn = $ppnRepository->find($idPpn);
            }

            if (null === $ppn) {
                $ppn = $diplome->getPpns()->first();
            }
        }

        return $this->render('structure_diplome/affiche.html.twig', [
            'diplome' => $diplome,
            'ppn' => $ppn,
            'referentiel' => $referentiel,
            'parcours' => $parcours,
            'referentiels' => $apcReferentielRepository->findBy(['departement' => $diplome->getDepartement()?->getId()]),
            'diplomes' => $diplome->getEnfants(),
        ]);
    }
}

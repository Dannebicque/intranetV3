<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/StructureDiplomeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/02/2024 15:01
 */

namespace App\Controller;

use App\Exception\DiplomeNotFoundException;
use App\Repository\DiplomeRepository;
use App\Repository\PpnRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/{type}', requirements: ['type' => 'administratif|administration'], defaults: ['type' => 'administratif'])]
class StructureDiplomeController extends AbstractController
{
    /**
     * @throws DiplomeNotFoundException
     */
    #[Route('/structure/diplome/affiche', name: 'structure_diplome_affiche')]
    public function index(
        PpnRepository $ppnRepository,
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

        if ('null' !== $idPpn) {
            $ppn = $ppnRepository->find($idPpn);
        }

        if (true === $diplome->isApc()) {
            $referentiel = $diplome->getReferentiel();
            $ppn = $referentiel->getPpns()->first();
            $parcours = $referentiel->getApcParcours();
        }

        if (null === $ppn) {
            $ppn = $diplome->getPpns()->first();
        }

        return $this->render('structure_diplome/affiche.html.twig', [
            'diplome' => $diplome,
            'ppn' => $ppn,
            'referentiel' => $referentiel,
            'parcours' => $parcours,
            'diplomes' => $diplome->getEnfants(),
            'type' => $request->get('type')
        ]);
    }
}

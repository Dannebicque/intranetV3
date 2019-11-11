<?php

/**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administratif/scolarite/RechercheController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 11/11/2019 12:10
 * @lastUpdate 11/11/2019 12:10
 */

namespace App\Controller\administratif\scolarite;

use App\Controller\BaseController;
use App\Repository\DiplomeRepository;
use App\Repository\EtudiantRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("administratif/scolarite/recherche")
 */
class RechercheController extends BaseController
{
    /**
     * @Route("/{type}", name="administratif_scolarite_recherche")
     * @param EtudiantRepository  $etudiantRepository
     * @param PersonnelRepository $personnelRepository
     * @param Request             $request
     * @param                     $type
     *
     * @return RedirectResponse|Response
     */
    public function recherche(
        EtudiantRepository $etudiantRepository,
        PersonnelRepository $personnelRepository,
        SemestreRepository $semestreRepository,
        DiplomeRepository $diplomeRepository,
        Request $request,
        $type
    ) {
        $search = $request->request->get('search');
        if ($type === 'etudiant') {
            $reponses = $etudiantRepository->search($search);
        } else if ($type === 'personnel') {
            $reponses = $personnelRepository->search($search);
        } else {
            return $this->redirectToRoute('erreur_666');
        }

        return $this->render('administratif/recherche/recherche.html.twig', [
            'reponses'  => $reponses,
            'type'      => $type,
            'recherche' => $search,
            'semestres' => $semestreRepository->findAll(),
            'diplomes'  => $diplomeRepository->findActifs()
        ]);
    }
}

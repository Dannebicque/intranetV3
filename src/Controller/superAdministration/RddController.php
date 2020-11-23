<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/RddController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/11/2020 17:55

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Annee;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\AnneeType;
use App\Repository\EtudiantRepository;
use App\Repository\RddDiplomeRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/rdd")
 */
class RddController extends BaseController
{


    /**
     * @Route("/", name="sa_rdd_index", methods="GET")
     *
     * @return Response
     */
    public function index(RddDiplomeRepository $rddDiplomeRepository, EtudiantRepository $etudiantRepository): Response
    {
        $diplomes = $rddDiplomeRepository->findAll();
        $etudiants = $etudiantRepository->findAll();
        $tEtudiant = [];
        foreach ($etudiants as $etudiant) {
            $tEtudiant[$etudiant->getNumEtudiant()] = $etudiant;
        }

        return $this->render('super-administration/scolarite/rdd/index.html.twig',
            [
                'diplomes'  => $diplomes,
                'etudiants' => $tEtudiant
            ]);
    }


}

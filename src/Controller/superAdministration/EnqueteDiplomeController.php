<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/EnqueteDiplomeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 09:27
 */

namespace App\Controller\superAdministration;

use App\Repository\RddDiplomeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/administratif/enquete-diplome')]
class EnqueteDiplomeController extends AbstractController
{
    #[Route(path: '/', name: 'administratif_enquete_diplome_index')]
    public function index(

        RddDiplomeRepository $rddDiplomeRepository): Response
    {
        //todo: reprendre avec questionnaire qualité
        $nbAttendus = $rddDiplomeRepository->findBy(['enqueteAFaire' => 1]);


        return $this->render('super-administration/enquete-diplome/index.html.twig', [
            'nbAttendus' => $nbAttendus,
            'etudiants' => null,
            'reponses' => [],
            'pourcentageRetour' => 0,
        ]);
    }

//    #[Route(path: '/export', name: 'administratif_enquete_diplome_export')]
//    public function export(): Response
//    {
//        return ;
//    }
//
//    #[Route(path: '/export-manquant', name: 'administratif_enquete_diplome_export_manquant')]
//    public function manquant(RddDiplomeRepository $rddDiplomeRepository): Response
//    {
//        $attendus = $rddDiplomeRepository->findBy(['enqueteAFaire' => 1]);
//
//        return ;
//    }
}

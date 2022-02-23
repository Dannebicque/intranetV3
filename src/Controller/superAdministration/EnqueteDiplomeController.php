<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/EnqueteDiplomeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:28
 */

namespace App\Controller\superAdministration;

use App\Classes\Enquetes\MyEnqueteDiplome;
use App\Repository\RddDiplomeRepository;
use function count;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administratif/enquete-diplome')]
class EnqueteDiplomeController extends AbstractController
{
    #[Route(path: '/', name: 'administratif_enquete_diplome_index')]
    public function index(myEnqueteDiplome $myEnqueteDiplome, RddDiplomeRepository $rddDiplomeRepository): Response
    {
        $enquete = $myEnqueteDiplome->getSyntheseReponse();
        $nbAttendus = $rddDiplomeRepository->findBy(['enqueteAFaire' => 1]);
        $pourcentage = (is_countable($enquete->getReponses()) ? count($enquete->getReponses()) : 0) / count($nbAttendus) * 100;

        return $this->render('super-administration/enquete-diplome/index.html.twig', [
            'questionnaire' => $enquete->getQuestionnaire(),
            'reponses' => $enquete->getReponses(),
            'nbAttendus' => $nbAttendus,
            'pourcentageRetour' => $pourcentage,
            'etudiants' => $enquete->getEtudiantsReponses(),
        ]);
    }

    #[Route(path: '/export', name: 'administratif_enquete_diplome_export')]
    public function export(MyEnqueteDiplome $myEnqueteDiplome): Response
    {
        return $myEnqueteDiplome->export();
    }

    #[Route(path: '/export-manquant', name: 'administratif_enquete_diplome_export_manquant')]
    public function manquant(MyEnqueteDiplome $myEnqueteDiplome, RddDiplomeRepository $rddDiplomeRepository): Response
    {
        $attendus = $rddDiplomeRepository->findBy(['enqueteAFaire' => 1]);

        return $myEnqueteDiplome->exportManquant($attendus);
    }
}

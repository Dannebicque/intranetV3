<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appEtudiant/AbsenceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\appEtudiant;

use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\Absence;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class AbsenceController.
 */
#[Route(path: '/application/etudiant/absence')]
class AbsenceController extends BaseController
{
    #[Route(path: '/details/{uuid}', name: 'app_etudiant_absence_detail', options: ['expose' => true])]
    public function details(TypeMatiereManager $typeMatiereManager, #[MapEntity(mapping: ['uuid' => 'uuid'])]
    Absence                                    $absence): Response
    {
        return $this->render('appEtudiant/absence/_detail.html.twig', [
            'absence' => $absence,
            'matiere' => $typeMatiereManager->getMatiere($absence->getIdMatiere(), $absence->getTypeMatiere()),
        ]);
    }
}

<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appEtudiant/AbsenceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

namespace App\Controller\appEtudiant;

use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\Absence;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceController.
 */
#[Route(path: '/application/etudiant/absence')]
class AbsenceController extends BaseController
{
    /**
     * @ParamConverter("absence", options={"mapping": {"uuid": "uuid"}})
     */
    #[Route(path: '/details/{uuid}', name: 'app_etudiant_absence_detail', options: ['expose' => true])]
    public function details(TypeMatiereManager $typeMatiereManager, Absence $absence): Response
    {
        return $this->render('appEtudiant/absence/_detail.html.twig', [
            'absence' => $absence,
            'matiere' => $typeMatiereManager->getMatiere($absence->getIdMatiere(), $absence->getTypeMatiere()),
        ]);
    }
}

<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appEtudiant/AbsenceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:36
 */

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Absence;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceController.
 *
 * @Route("/application/etudiant/absence")
 */
class AbsenceController extends BaseController
{
    /**
     * @Route("/details/{uuid}", name="app_etudiant_absence_detail", options={"expose" = true})
     * @ParamConverter("absence", options={"mapping": {"uuid": "uuid"}})
     */
    public function details(Absence $absence): Response
    {
        return $this->render('appEtudiant/absence/_detail.html.twig', [
            'absence' => $absence,
        ]);
    }
}

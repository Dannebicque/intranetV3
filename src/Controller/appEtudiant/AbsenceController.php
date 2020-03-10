<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appEtudiant/AbsenceController.php
// @author David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Absence;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceController
 * @package App\Controller
 * @Route("/application/etudiant/absence")
 */
class AbsenceController extends BaseController
{
    /**
     *
     * @Route("/details/{uuid}", name="app_etudiant_absence_detail", options={"expose" = true})
     * @param Absence $absence
     * @ParamConverter("absence", options={"mapping": {"uuid": "uuid"}})
     *
     * @return Response
     */
    public function details(Absence $absence): Response
    {
        return $this->render('appEtudiant/absence/_detail.html.twig', [
            'absence' => $absence
        ]);
    }
}

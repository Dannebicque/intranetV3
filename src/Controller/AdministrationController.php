<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/AdministrationController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 3/24/19 9:49 AM
 */

namespace App\Controller;

use App\Repository\StagePeriodeRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AdministrationController
 * @package App\Controller
 * @Route("/administration")
 *
 */
class AdministrationController extends BaseController
{
    /**
     * @Route("/", name="administration_index")
     * @param StagePeriodeRepository $stagePeriodeRepository
     *
     * @return Response
     */
    public function index(StagePeriodeRepository $stagePeriodeRepository): Response
    {
        $periodes = [];
        foreach ($this->dataUserSession->getDiplomes() as $diplome) {
            $pers = $stagePeriodeRepository->findByDiplome($diplome,
                $diplome->getAnneeUniversitaire() ? $diplome->getAnneeUniversitaire()->getAnnee() : (int)date('Y'));
            foreach ($pers as $periode) {
                $periodes[] = $periode;
            }
        }

        return $this->render(
            'administration/index.html.twig',
            ['periodes' => $periodes]
        );
    }
}

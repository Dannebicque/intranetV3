<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/AdministrationController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

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
            $periodes = $stagePeriodeRepository->findByDiplome($diplome, $diplome->getAnneeUniversitaire());
            foreach ($periodes as $periode) {
                $periodes[] = $periode;
            }
        }

        return $this->render(
            'administration/index.html.twig',
            ['periodes' => $periodes]
        );
    }
}

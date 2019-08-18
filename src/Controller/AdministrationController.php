<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/AdministrationController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 18/08/2019 11:48
 * @lastUpdate 12/08/2019 09:18
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

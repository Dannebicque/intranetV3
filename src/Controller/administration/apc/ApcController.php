<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/12/2020 14:31

namespace App\Controller\administration\apc;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\ApcApprentissageCritique;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\ApcApprentissageCritiqueType;
use App\Repository\ApcApprentissageCritiqueRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/apc/")
 */
class ApcController extends BaseController
{
    /**
     * @Route("referentiel/{diplome}", name="administration_apc_referentiel_index", methods={"GET"})
     *
     * @param Diplome $diplome
     *
     * @return Response
     */
    public function referentiel(Diplome $diplome): Response
    {
        return $this->render('administration/apc/referentiel.html.twig', [
            'diplome' => $diplome
        ]);
    }
}

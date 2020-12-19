<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/12/2020 14:57

namespace App\Controller\administration\apc;

use App\Controller\BaseController;
use App\Entity\Diplome;
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
            'diplome'     => $diplome,
            'competences' => $diplome->getApcComptences(),
            'parcours'    => $diplome->getApcParcours()
        ]);
    }
}

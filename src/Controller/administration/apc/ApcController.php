<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/01/2021 15:38

namespace App\Controller\administration\apc;

use App\Classes\Apc\ApcStructure;
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
    public function referentiel(ApcStructure $apcStructure, Diplome $diplome): Response
    {
        $tParcours = $apcStructure->parcoursNiveaux($diplome);

        return $this->render('apc/referentiel.html.twig', [
            'diplome'         => $diplome,
            'competences'     => $diplome->getApcComptences(),
            'parcours'        => $diplome->getApcParcours(),
            'parcoursNiveaux' => $tParcours
        ]);
    }
}

<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/01/2021 15:59

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
        $tParcours = [];
        foreach ($diplome->getApcParcours() as $parcours) {
            $tParcours[$parcours->getId()] = [];
            foreach ($parcours->getApcParcoursNiveaux() as $niveau) {

                if ($niveau !== null && $niveau->getNiveau() !== null) {
                    $niv = $niveau->getNiveau();
                    if (!array_key_exists($niv->getCompetence()->getId(), $tParcours[$parcours->getId()])) {
                        $tParcours[$parcours->getId()][$niv->getCompetence()->getId()] = [];
                    }
                    $tParcours[$parcours->getId()][$niv->getCompetence()->getId()][$niv->getOrdre()] = $niv;
                }
            }
        }
        dump($tParcours);

        return $this->render('administration/apc/referentiel.html.twig', [
            'diplome'         => $diplome,
            'competences'     => $diplome->getApcComptences(),
            'parcours'        => $diplome->getApcParcours(),
            'parcoursNiveaux' => $tParcours
        ]);
    }
}

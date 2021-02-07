<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/AgendaController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller;

use App\Classes\ServiceRealise\ServiceRealiseCelcat;
use App\Classes\ServiceRealise\ServiceRealiseIntranet;
use App\Entity\Previsionnel;
use App\Repository\PrevisionnelRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AgendaController.
 *
 * @Route("/agenda")
 */
class AgendaController extends BaseController
{
    /**
     * @Route("/qv", name="agenda_qv", options={"expose"=true})
     */
    public function qv(PrevisionnelRepository $previsionnelRepository): Response
    {
        return $this->render('agenda/qv.html.twig', [
            'previsionnels' => $previsionnelRepository->findPrevisionnelEnseignantDepartement($this->getConnectedUser(),
                $this->dataUserSession->getDepartement()),
        ]);
    }

    /**
     * @Route("/qv/{previ}", name="agenda_qv_previ", options={"expose"=true})
     */
    public function qvPrevi(
        ServiceRealiseIntranet $serviceRealiseIntranet,
        ServiceRealiseCelcat $serviceRealiseCelcat,
        Previsionnel $previ
    ): Response {
        if (null !== $this->getDepartement() && true === $this->getDepartement()->getOptUpdateCelcat()) {
            $chronologique = $serviceRealiseCelcat->getServiceRealiseParPersonnelMatiere($this->getConnectedUser(),
                $previ->getMatiere());
            $statistiques = $serviceRealiseIntranet->statistiques($chronologique);
        } else {
            $chronologique = $serviceRealiseIntranet->getServiceRealiseParPersonnelMatiere($this->getConnectedUser(),
                $previ->getMatiere());
            $statistiques = $serviceRealiseIntranet->statistiques($chronologique);
        }

        return $this->render('agenda/qvTableau.html.twig', [
            'previ'         => $previ,
            'chronologique' => $chronologique,
            'statistiques'  => $statistiques,
        ]);
    }

    /**
     * @Route("/{semaine}/{filtre}/{valeur}", name="agenda_index", options={"expose"=true},
     *                                        requirements={"semaine":"\d+"})
     *
     * @param int    $semaine
     * @param string $filtre
     * @param string $valeur
     */
    public function index(
        $semaine = 0,
        $filtre = 'prof',
        $valeur = ''
    ): Response {
        if (0 === $semaine) {
            $semaine = (int)date('W');
        }

        return $this->render('agenda/index.html.twig', [
            'filtre'  => $filtre,
            'valeur'  => $valeur,
            'semaine' => $semaine,
        ]);
    }
}

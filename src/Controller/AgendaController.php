<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/AgendaController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

namespace App\Controller;

use App\Classes\Previsionnel\PrevisionnelManager;
use App\Classes\ServiceRealise\ServiceRealiseCelcat;
use App\Classes\ServiceRealise\ServiceRealiseIntranet;
use App\Entity\Previsionnel;
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
    public function qv(PrevisionnelManager $previsionnelManager): Response
    {
        $previsionnel = $previsionnelManager->getPrevisionnelPersonnelDepartementAnnee($this->getConnectedUser(),
            $this->dataUserSession->getDepartement(), $this->dataUserSession->getAnneePrevisionnel());

        return $this->render('agenda/qv.html.twig', [
            'previsionnels' => $previsionnel,
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
        //todo: a généraliser avec SAE, Ressources
        if (null !== $this->getDepartement() && true === $this->getDepartement()->getOptUpdateCelcat()) {
            $chronologique = $serviceRealiseCelcat->getServiceRealiseParPersonnelMatiere($this->getConnectedUser(),
                $previ->getIdMatiere(), $previ->getTypeMatiere());
            $statistiques = $serviceRealiseIntranet->statistiques($chronologique);
        } else {
            $chronologique = $serviceRealiseIntranet->getServiceRealiseParPersonnelMatiere($this->getConnectedUser(),
                $previ->getIdMatiere(), $previ->getTypeMatiere());
            $statistiques = $serviceRealiseIntranet->statistiques($chronologique);
        }

        return $this->render('agenda/qvTableau.html.twig', [
            'previ' => $previ,
            'chronologique' => $chronologique,
            'statistiques' => $statistiques,
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
            'filtre' => $filtre,
            'valeur' => $valeur,
            'semaine' => $semaine,
        ]);
    }
}

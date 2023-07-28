<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/AgendaController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2023 12:29
 */

namespace App\Controller;

use App\Classes\Previsionnel\PrevisionnelManager;
use App\Classes\ServiceRealise\ServiceRealiseCelcat;
use App\Classes\ServiceRealise\ServiceRealiseIntranet;
use App\Entity\Previsionnel;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/agenda')]
class AgendaController extends BaseController
{
    #[Route(path: '/qv', name: 'agenda_qv', options: ['expose' => true])]
    public function qv(PrevisionnelManager $previsionnelManager): Response
    {
        $previsionnel = $previsionnelManager->getPrevisionnelPersonnelDepartementAnneeArray($this->getUser(),
            $this->dataUserSession->getDepartement(), $this->dataUserSession->getAnneePrevisionnel());

        return $this->render('agenda/qv.html.twig', [
            'previsionnels' => $previsionnel,
        ]);
    }

    #[Route(path: '/qv/{previ}', name: 'agenda_qv_previ', options: ['expose' => true])]
    public function qvPrevi(
        ServiceRealiseIntranet $serviceRealiseIntranet,
        ServiceRealiseCelcat $serviceRealiseCelcat,
        Previsionnel $previ
    ): Response {
        // todo: a généraliser avec SAE, Ressources
        if (null !== $this->getDepartement() && true === $this->getDepartement()->getOptUpdateCelcat()) {
            $chronologique = $serviceRealiseCelcat->getServiceRealiseParPersonnelMatiere($this->getUser(),
                $previ->getIdMatiere(), $previ->getTypeMatiere());
        } else {
            $chronologique = $serviceRealiseIntranet->getServiceRealiseParPersonnelMatiere($this->getUser(),
                $previ->getIdMatiere(), $previ->getTypeMatiere(), $this->getAnneeUniversitaire());
        }
        $statistiques = $serviceRealiseIntranet->statistiques($chronologique);

        return $this->render('agenda/qvTableau.html.twig', [
            'previ' => $previ,
            'chronologique' => $chronologique,
            'statistiques' => $statistiques,
        ]);
    }

    #[Route(path: '/{semaine}/{filtre}/{valeur}', name: 'agenda_index', requirements: ['semaine' => '\d+'], options: ['expose' => true])]
    public function index(int $semaine = 0, string $filtre = 'prof', string $valeur = ''): Response
    {
        if (0 === $semaine) {
            $semaine = (int) date('W');
        }

        return $this->render('agenda/index.html.twig', [
            'filtre' => $filtre,
            'valeur' => $valeur,
            'semaine' => $semaine,
        ]);
    }
}

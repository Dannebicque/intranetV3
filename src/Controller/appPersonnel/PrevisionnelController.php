<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/PrevisionnelController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 03/08/2020 16:52

namespace App\Controller\appPersonnel;

use App\Classes\ServiceRealise\ServiceRealiseCelcat;
use App\Classes\ServiceRealise\ServiceRealiseIntranet;
use App\Controller\BaseController;
use App\Classes\MyPrevisionnel;
use App\Entity\Matiere;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PrevisionnelController
 * @IsGranted("ROLE_PERMANENT")
 * @package App\Controller
 * @Route("/application/personnel/previsionnel")
 */
class PrevisionnelController extends BaseController
{
    /**
     * @Route("/", name="previsionnel_index")
     * @param MyPrevisionnel $myPrevisionnel
     *
     * @return Response
     */
    public function index(MyPrevisionnel $myPrevisionnel): Response
    {
        //feature: afficher prévisionnel uniquement du département dans application, et prévisionnel global dans le profil (message pour expliquer)
        $myPrevisionnel->setPersonnel($this->getConnectedUser());
        $myPrevisionnel->getPrevisionnelEnseignantBySemestre($this->dataUserSession->getAnneePrevisionnel());
        $myPrevisionnel->getHrsEnseignant($this->dataUserSession->getAnneePrevisionnel());

        return $this->render('appPersonnel/previsionnel/index.html.twig', [
            'previsionnel' => $myPrevisionnel,
            'personnel'    => $this->getConnectedUser()
        ]);
    }

    /**
     * @Route("/chronologique", name="previsionnel_chronologique")
     *
     * @param ServiceRealiseIntranet $serviceRealiseIntranet
     * @param ServiceRealiseCelcat   $serviceRealiseCelcat
     *
     * @return Response
     */
    public function chronologique(
        ServiceRealiseIntranet $serviceRealiseIntranet,
        ServiceRealiseCelcat $serviceRealiseCelcat
    ): Response {

        if ($this->getDepartement() !== null && $this->getDepartement()->getOptUpdateCelcat() === true) {
            $chronologique = $serviceRealiseCelcat;
        } else {
            $chronologique = $serviceRealiseIntranet;
        }

        return $this->render('appPersonnel/previsionnel/chronologique.html.twig', [
            'chronologique' => $chronologique->getServiceRealiserParEnseignant($this->getConnectedUser(),
                $this->dataUserSession->getAnneeUniversitaire())
        ]);
    }

    /**
     * @Route("/export.{_format}", name="application_personnel_previsionnel_export", methods="GET")
     */
    public function export(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }
}

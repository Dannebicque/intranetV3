<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/PrevisionnelController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\MesClasses\MyPrevisionnel;
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
        //todo: afficher prévisionnel uniquement du département dans application, et prévisionnel global dans le profil (message pour expliquer)
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
     * @param MyPrevisionnel $myPrevisionnel
     *
     * @return Response
     */
    public function chronologique(MyPrevisionnel $myPrevisionnel): Response
    {
        return $this->render('appPersonnel/previsionnel/chronologique.html.twig', [
        ]);
    }

    /**
     * @Route("/help", name="previsionnel_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('appPersonnel/previsionnel/help.html.twig');
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

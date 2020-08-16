<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ProfilPersonnelController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/08/2020 15:45

namespace App\Controller;

use App\Entity\Personnel;
use App\Classes\MyPrevisionnel;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ProfilPersonnelController
 * @package App\Controller
 * @Route("/personnel")
 */
class ProfilPersonnelController extends BaseController
{
    /**
     * @Route("/profil/{slug}/actions", name="profil_personnel_action")
     * @ParamConverter("personnel", options={"mapping": {"slug": "slug"}})
     * @param Personnel $personnel
     *
     * @return Response
     */
    public function actions(Personnel $personnel): Response
    {
        return $this->render('user/composants/actions_personnel.html.twig', [
            'personnel' => $personnel
        ]);
    }

    /**
     * @Route("/profil/{slug}/about", name="profil_personnel_about")
     * @ParamConverter("personnel", options={"mapping": {"slug": "slug"}})
     * @param Personnel $personnel
     *
     * @return Response
     */
    public function about(Personnel $personnel): Response
    {
        return $this->render('user/composants/about.html.twig', [
            'user' => $personnel,
        ]);
    }

    /**
     * @Route("/profil/{slug}/previsionnel", name="profil_personnel_previsionnel")
     * @ParamConverter("personnel", options={"mapping": {"slug": "slug"}})
     * @param MyPrevisionnel $myPrevisionnel
     * @param Personnel      $personnel
     *
     * @return Response
     */
    public function previsionnel(MyPrevisionnel $myPrevisionnel, Personnel $personnel): Response
    {
        $myPrevisionnel->setPersonnel($personnel);
        $myPrevisionnel->getPrevisionnelEnseignantBySemestre($this->dataUserSession->getAnneePrevisionnel());
        $myPrevisionnel->getHrsEnseignant($this->dataUserSession->getAnneePrevisionnel());

        return $this->render('user/composants/previsionnel.html.twig', [
            'previsionnel' => $myPrevisionnel,
            'personnel'    => $personnel
        ]);
    }
}

<?php

namespace App\Controller;

use App\Entity\Personnel;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class ProfilPersonnelController
 * @package App\Controller
 * @Route({"fr":"personnel",
 *         "en":"teacher"})
 */
class ProfilPersonnelController extends BaseController
{
    /**
     * @Route("/profil/{slug}/timeline", name="profil_personnel_timeline")
     * @ParamConverter("personnel", options={"mapping": {"slug": "slug"}})
     * @param Personnel $personnel
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function timeline(Personnel $personnel): Response
    {
        return $this->render('user/composants/timeline.html.twig', [

        ]);
    }

    /**
     * @Route("/profil/{slug}/actions", name="profil_personnel_action")
     * @ParamConverter("personnel", options={"mapping": {"slug": "slug"}})
     * @param Personnel $personnel
     *
     * @return Response
     */
    public function actions(Personnel $personnel): Response
    {
        return $this->render('user/composants/actions.html.twig', [

        ]);
    }

    /**
     * @Route("/profil/{slug}/stages", name="profil_personnel_stages")
     * @ParamConverter("personnel", options={"mapping": {"slug": "slug"}})
     * @param Personnel $personnel
     *
     * @return Response
     */
    public function stages(Personnel $personnel): Response
    {
        return $this->render('user/composants/stages.html.twig', [
            'stages' => $this->getUser()->getAbsences()
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
     * @param Personnel $personnel
     *
     * @return Response
     */
    public function previsionnel(Personnel $personnel): Response
    {
        return $this->render('user/composants/previsionnel.html.twig', [

        ]);
    }


}

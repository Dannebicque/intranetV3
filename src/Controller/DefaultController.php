<?php

namespace App\Controller;

use App\Repository\ActualiteRepository;
use App\Repository\DateRepository;
use App\Repository\FormationRepository;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class DefaultController
 * @package App\Controller
 * @Route("/{_locale}",
 *     requirements={"_locale": "fr|en"},
 *     defaults={"_locale":"fr"})
 */
class DefaultController extends BaseController
{
    /**
     * @Route("/", name="default_homepage")
     * @param ActualiteRepository $actualiteRepository
     * @param DateRepository      $dateRepository
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(ActualiteRepository $actualiteRepository, DateRepository $dateRepository)
    {
        return $this->render('default/index.html.twig', [
            'actualites' => $actualiteRepository->findByFormation($this->dataUserSession->getFormation(), 2),
            'dates'      => $dateRepository->findByFormation($this->dataUserSession->getFormation(), 2)
        ]);
    }

    /**
     * @Route("/super-administration/", name="super_admin_homepage")
     */
    public function superAdminHomepage(FormationRepository $formationRepository)
    {
        return $this->render('super-administration/super_admin_homepage.html.twig', [
            'formations' => $formationRepository->findAll()
        ]);
    }

    /**
     * @Route("/administratif/", name="administratif_homepage")
     */
    public function administratifHomepage()
    {
        return $this->render('default/administratif_homepage.html.twig', [

        ]);
    }
}

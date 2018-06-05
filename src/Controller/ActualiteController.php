<?php

namespace App\Controller;

use App\Repository\ActualiteRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class ActualiteController
 * @package App\Controller
 * @Route("/acutalites")
 */
class ActualiteController extends BaseController
{
    /**
     * @Route("/anciennes", name="actualite_liste")
     */
    public function liste(ActualiteRepository $actualiteRepository)
    {
        return $this->render('actualite/liste.html.twig', [
            'actualites' => $actualiteRepository->findByFormation($this->dataUserSession->getFormation(), 0)
        ]);
    }
}

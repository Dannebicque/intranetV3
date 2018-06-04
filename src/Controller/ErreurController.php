<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ErreurController extends Controller
{
    /**
     * @Route("/404", name="erreur_404")
     */
    public function erreur404()
    {
        return $this->render('erreur/404.html.twig', [
        ]);
    }

    /**
     * @Route("/500", name="erreur_500")
     */
    public function erreur500()
    {
        return $this->render('erreur/500.html.twig', [
        ]);
    }

    /**
     * @Route("/666", name="erreur_666")
     */
    public function erreur666()
    {
        return $this->render('erreur/666.html.twig', [
        ]);
    }
}

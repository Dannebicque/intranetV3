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
}

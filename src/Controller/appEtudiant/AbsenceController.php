<?php

namespace App\Controller\appEtudiant;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class AbsenceController
 * @package App\Controller
 * @Route("/{_locale}/application/etudiant/absence",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class AbsenceController extends Controller
{
    /**
     * @Route("/absence", name="absence")
     */
    public function index()
    {
        return $this->render('absence/index.html.twig', [
        ]);
    }
}

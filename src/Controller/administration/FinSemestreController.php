<?php

namespace App\Controller\administration;

use App\Entity\Semestre;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class FinSemestreController
 * @package App\Controller\administration
 * @Route("/{_locale}/administration/etudiant/fin-semestre",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class FinSemestreController extends Controller
{
    /**
     * @Route("/{semestre}", name="administration_fin_semestre_index")
     * @param Semestre $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Semestre $semestre): Response
    {
        return $this->render('administration/fin_semestre/index.html.twig', [
        ]);
    }
}

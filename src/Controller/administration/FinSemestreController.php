<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class FinSemestreController
 * @package App\Controller\administration
 * @Route("/administration/fin-semestre")
 */
class FinSemestreController extends BaseController
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

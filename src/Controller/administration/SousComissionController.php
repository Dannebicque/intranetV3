<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class SousComissionController
 * @package App\Controller\administration
 * @Route({"fr":"administration/sous-commission",
 *         "en":"administration/subcommittee"}
 *)
 */
class SousComissionController extends BaseController
{
    /**
     * @Route("/{semestre}", name="administration_sous_comission_index")
     * @param Semestre $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Semestre $semestre): Response
    {
        return $this->render('administration/sous_comission/index.html.twig', [
        ]);
    }
}

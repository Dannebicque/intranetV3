<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class CohorteController
 * @package App\Controller\administration
 * @Route({"fr":"administration/cohorte",
 *         "en":"administration/cohort"}
 *)
 */
class CohorteController extends BaseController
{
    /**
     * @Route("/", name="administration_cohorte_index")
     */
    public function index()
    {
        return $this->render('administration/cohorte/index.html.twig', [
            'controller_name' => 'CohorteController',
        ]);
    }

    /**
     * @Route("/export.{_format}", name="administration_cohorte_export", requirements={"_format"="csv|xlsx|pdf"})
     */
    public function export()
    {

    }
}

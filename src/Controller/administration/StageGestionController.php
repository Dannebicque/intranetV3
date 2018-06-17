<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StageGestionController
 * @package App\Controller\administration
 * @Route({"fr":"administration/stage/gestion",
 *         "en":"administration/traineeship/manage"}
 *)
 */
class StageGestionController extends BaseController
{
    /**
     * @Route("/", name="administration_stage_gestion_index")
     */
    public function index()
    {
        return $this->render('stage_gestion/index.html.twig', [
            'controller_name' => 'StageGestionController',
        ]);
    }
}

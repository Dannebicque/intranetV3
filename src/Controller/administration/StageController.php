<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StageController
 * @package App\Controller\administration
 * @Route({"fr":"administration/stage",
 *         "en":"administration/traineeship"}
 *)
 */
class StageController extends BaseController
{
    /**
     * @Route("/", name="administration_stage_index")
     */
    public function index()
    {
        return $this->render('stage/index.html.twig', [
        ]);
    }
}

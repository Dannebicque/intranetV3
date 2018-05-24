<?php

namespace App\Controller\administration;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class StageController
 * @package App\Controller\administration
 * @Route({"fr":"administration/stage",
 *         "en":"administration/traineeship"}
 *)
 */
class StageController extends Controller
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

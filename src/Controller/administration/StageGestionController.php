<?php

namespace App\Controller\administration;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class StageGestionController
 * @package App\Controller\administration
 * @Route("/{_locale}/administration/stage/gestion",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class StageGestionController extends Controller
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

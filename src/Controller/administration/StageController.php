<?php

namespace App\Controller\administration;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class StageController
 * @package App\Controller\administration
 * @Route("/{_locale}/administration/stage",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class StageController extends Controller
{
    /**
     * @Route("/", name="administration_stage_index")
     */
    public function index()
    {
        return $this->render('stage/index.html.twig', [
            'controller_name' => 'StageController',
        ]);
    }
}

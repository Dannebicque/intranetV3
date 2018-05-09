<?php

namespace App\Controller\administration;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class CohorteController
 * @package App\Controller\administration
 * @Route("/{_locale}/cohorte",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class CohorteController extends Controller
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
}

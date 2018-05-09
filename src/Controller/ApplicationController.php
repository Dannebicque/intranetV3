<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class ApplicationController
 * @package App\Controller
 * @Route("/{_locale}/application",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class ApplicationController extends Controller
{
    /**
     * @Route("/", name="application_index")
     */
    public function index()
    {
        return $this->render('application/index.html.twig', [
            'controller_name' => 'ApplicationController',
        ]);
    }
}

<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class DefaultController
 * @package App\Controller
 * @Route("/{_locale}",
 *     requirements={"_locale": "fr|en"},
 *     defaults={"_locale":"fr"})
 */
class DefaultController extends Controller
{
    /**
     * @Route("/", name="default_index")
     */
    public function index()
    {
        return $this->render('default/index.html.twig', [

        ]);
    }
}

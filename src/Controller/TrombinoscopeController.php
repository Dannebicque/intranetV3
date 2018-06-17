<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
    use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class AgendaController
 * @package App\Controller
 * @Route({"fr":"trombinoscope",
 *         "en":"who-s-who"})
 */
class TrombinoscopeController extends BaseController
{
    /**
     * @Route("/", name="trombinoscope_index")
     */
    public function index()
    {
        return $this->render('trombinoscope/index.html.twig', [
        ]);
    }
}

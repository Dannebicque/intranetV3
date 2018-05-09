<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
    use Symfony\Bundle\FrameworkBundle\Controller\Controller;

    /**
     * Class AgendaController
     * @package App\Controller
     * @Route("/{_locale}/trombinoscope",
     *     requirements={
     *         "_locale": "fr|en"})
     */
class TrombinoscopeController extends Controller
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

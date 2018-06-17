<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class AgendaController
 * @package App\Controller
 * @Route("/{_locale}/agenda",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class AgendaController extends BaseController
{
    /**
     * @Route("/", name="agenda_index")
     */
    public function index()
    {
        return $this->render('agenda/index.html.twig', [
            'controller_name' => 'AgendaController',
        ]);
    }
}

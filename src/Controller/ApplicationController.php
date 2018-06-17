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
class ApplicationController extends BaseController
{
    /**
     * @Route("/{onglet}", name="application_index")
     * @param string $onglet
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index($onglet = 'messagerie')
    {
        return $this->render('application/index.html.twig', [
            'onglet' => $onglet
        ]);
    }
}

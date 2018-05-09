<?php

namespace App\Controller\administration;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class EdtController
 * @package App\Controller\administration
 * @Route("/{_locale}/administration/emploi-du-temps",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class EdtController extends Controller
{
    /**
     * @Route("/", name="administration_edt_index")
     */
    public function index()
    {
        return $this->render('administration/edt/index.html.twig', [
            'controller_name' => 'EdtController',
        ]);
    }
}

<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class AdministrationController
 * @package App\Controller
 * @Route("/{_locale}/administration",
 *     requirements={
 *         "_locale": "fr|en"})
 *
 */
class AdministrationController extends Controller
{
    /**
     * @Route("/", name="administration_index")
     */
    public function index()
    {
        return $this->render('administration/index.html.twig', [
        ]);
    }
}

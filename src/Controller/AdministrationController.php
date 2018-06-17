<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
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
class AdministrationController extends BaseController
{
    /**
     * @Route("/", name="administration_index")
     */
    public function index() :Response
    {
        return $this->render('administration/index.html.twig');
    }
}

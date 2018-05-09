<?php

namespace App\Controller\administration;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class ConfigurationController
 * @package App\Controller\administration
 * @Route("/{_locale}/administration/configuration",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class ConfigurationController extends Controller
{
    /**
     * @Route("/configuration", name="administration_configuration")
     */
    public function index()
    {
        return $this->render('administration/configuration/index.html.twig', [
        ]);
    }
}

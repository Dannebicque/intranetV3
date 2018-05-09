<?php

namespace App\Controller\superAdministration;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class IndexController
 * @package App\Controller
 * @Route("/{_locale}/super-administration",
 *      requirements={
 *         "_locale": "fr|en"})
 */
class IndexController extends Controller
{
    /**
     * @Route("/", name="super-administration_index")
     */
    public function index()
    {
        return $this->render('super-administration/index.html.twig', [
        ]);
    }
}

<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class InformationController
 * @package App\Controller
 * @Route("/{_locale}/informations",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class InformationController extends Controller
{
    /**
     * @Route("/", name="informations_index")
     */
    public function index()
    {
        return $this->render('informations/index.html.twig', [
        ]);
    }
}

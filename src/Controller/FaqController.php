<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class FaqController
 * @package App\Controller
 * @Route("/{_locale}/faq",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class FaqController extends Controller
{
    /**
     * @Route("/", name="faq_index")
     */
    public function index()
    {
        return $this->render('faq/index.html.twig', [
        ]);
    }
}

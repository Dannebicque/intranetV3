<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class FaqController
 * @package App\Controller
 * @Route("/foire-aux-questions")
 */
class FaqController extends BaseController
{
    /**
     * @Route("/", name="faq_index")
     */
    public function index(): Response
    {
        return $this->render('faq/index.html.twig', [
        ]);
    }
}

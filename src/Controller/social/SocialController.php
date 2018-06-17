<?php

namespace App\Controller\social;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class SocialController
 * @package App\Controller\social
 * @Route("/{_locale}/social",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class SocialController extends BaseController
{
    /**
     * @Route("/", name="social_index")
     */
    public function index()
    {
        return $this->render('social/index.html.twig', [
        ]);
    }
}

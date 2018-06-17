<?php

namespace App\Controller\social;

use App\Controller\BaseController;
use Symfony\Component\Routing\Annotation\Route;

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

<?php

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PrevisionnelController
 * @package App\Controller\superAdministration
 */
class PrevisionnelController extends BaseController
{
    /**
     * @Route("/previsionnel", name="sa_previsionnel_index")
     */
    public function index(): Response
    {
        return $this->render('super-administration/previsionnel/index.html.twig', [
            'controller_name' => 'ScolariteController',
        ]);
    }
}

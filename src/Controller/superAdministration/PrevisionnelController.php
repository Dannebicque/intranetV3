<?php

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
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
    public function index()
    {
        return $this->render('super-administration/previsionnel/index.html.twig', [
            'controller_name' => 'ScolariteController',
        ]);
    }
}

<?php

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Formation;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StructureController
 * @package App\Controller\administration
 * @Route("/super-administration/structure")
 */
class StructureController extends BaseController
{
    /**
     * @Route("/detail/{formation}", name="sa_structure_index")
     * @param Formation $formation
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Formation $formation): Response
    {
        return $this->render('structure/index.html.twig', [
            'formation' => $formation,
        ]);
    }
}

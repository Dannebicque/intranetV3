<?php

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Departement;
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
     * @Route("/detail/{departement}", name="sa_structure_index")
     * @param Departement $departement
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Departement $departement): Response
    {
        return $this->render('structure/index.html.twig', [
            'departement' => $departement,
        ]);
    }
}

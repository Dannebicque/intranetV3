<?php

namespace App\Controller\superAdministration;

use App\Entity\Formation;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class StructureController
 * @package App\Controller\administration
 * @Route({"fr":"super-administration/structure",
 *         "en":"super-administration/organization"}
 *)
 */
class StructureController extends BaseController
{
    /**
     * @Route("/{formation}", name="sa_structure_index")
     */
    public function index(Formation $formation)
    {
        return $this->render('structure/index.html.twig', [
            'formation' => $formation,
        ]);
    }
}

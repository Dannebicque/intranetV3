<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StructureController
 * @package App\Controller\administration
 * @Route({"fr":"administration/structure",
 *         "en":"administration/organization"}
 *)
 */
class StructureController extends BaseController
{
    /**
     * @Route("/", name="administration_structure_index")
     */
    public function index()
    {
        return $this->render('structure/index.html.twig', [
            'formation' => $this->dataUserSession->getFormation()
        ]);
    }
}

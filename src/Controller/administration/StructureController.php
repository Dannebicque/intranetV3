<?php

namespace App\Controller\administration;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class StructureController
 * @package App\Controller\administration
 * @Route("/{_locale}/administration/structure",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class StructureController extends Controller
{
    /**
     * @Route("/", name="administration_structure_index")
     */
    public function index()
    {
        return $this->render('administration/structure/index.html.twig', [
        ]);
    }
}

<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/StructureController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/08/2020 10:20

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Departement;
use App\Classes\MyStructure;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class StructureController
 * @package App\Controller\administration
 * @Route("/administration/structure")
 */
class StructureController extends BaseController
{
    /**
     * @Route("/", name="administration_structure_index")
     */
    public function index(): Response
    {
        return $this->render('structure/index.html.twig', [
            'departement' => $this->dataUserSession->getDepartement()
        ]);
    }

    /**
     * @Route("/{departement}/export.{_format}", name="administration_structure_export", methods="GET",
     *                                           requirements={"_format"="xlsx|pdf"})
     * @param MyStructure       $myStructure
     * @param Departement       $departement
     * @param                   $_format
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function export(MyStructure $myStructure, Departement $departement, $_format): void
    {
        $myStructure->export($departement, $_format);
    }
}

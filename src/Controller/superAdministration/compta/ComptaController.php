<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/compta/ComptaController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/09/2021 18:13
 */

namespace App\Controller\superAdministration\compta;

use App\Entity\BCCentreFinancier;
use App\Form\BCCentreFinancierType;
use App\Repository\BCCentreFinancierRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administratif/compta', name: 'sa_compta_')]
class ComptaController extends AbstractController
{
    #[Route('/', name: 'index', methods: ['GET'])]
    public function index(): Response
    {
        return $this->render('super-administration/compta/index.html.twig', [
        ]);
    }
}

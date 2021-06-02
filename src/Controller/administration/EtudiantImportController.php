<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EtudiantImportController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/06/2021 13:13
 */

namespace App\Controller\administration;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administration/etudiant/import')]
class EtudiantImportController extends AbstractController
{
    #[Route('/liste_csv', name: 'administration_etudiant_import_liste_csv')]
    public function listeCsv(): Response
    {
        //traitement de l'import
    }
}

<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyFicheSuivi.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/03/2024 16:17
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Classes\Pdf\PdfManager;
use App\Entity\AlternanceFicheSuivi;
use App\Entity\StageFicheSuivi;
use Symfony\Component\HttpFoundation\Response;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class MyFicheSuivi
{
    public function __construct(private PdfManager $myPdf)
    {
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function print(AlternanceFicheSuivi|StageFicheSuivi $ficheSuivi): Response
    {
        if ($ficheSuivi instanceof AlternanceFicheSuivi) {
            return $this->myPdf->pdf()::generePdf('pdf/ficheSuiviAlternant.html.twig',
                ['fiche_suivi' => $ficheSuivi],
                'Suivi-en-entreprise-'.$ficheSuivi->getAlternance()->getEtudiant()->getNom().'-'.$ficheSuivi->getDate()->format('dmY'));
        }

        return $this->myPdf->pdf()::generePdf('pdf/ficheSuiviStage.html.twig',
            ['fiche_suivi' => $ficheSuivi],
            'Suivi-en-entreprise-'.$ficheSuivi->getStage()->getEtudiant()->getNom().'-'.$ficheSuivi->getDate()->format('dmY'));
    }
}

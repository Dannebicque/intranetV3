<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyFicheSuivi.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/05/2022 10:31
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Classes\Pdf\MyPDF;
use App\Entity\AlternanceFicheSuivi;
use App\Entity\StageFicheSuivi;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class MyFicheSuivi
{
    public function __construct(private readonly MyPDF $myPdf)
    {
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function print(AlternanceFicheSuivi|StageFicheSuivi $ficheSuivi): PdfResponse
    {
        if ($ficheSuivi instanceof AlternanceFicheSuivi) {
            return $this->myPdf::generePdf('pdf/ficheSuiviAlternant.html.twig',
                ['fiche_suivi' => $ficheSuivi],
                'Suivi-en-entreprise-'.$ficheSuivi->getAlternance()->getEtudiant()->getNom().'-'.$ficheSuivi->getDate()->format('dmY'));
        }

        return $this->myPdf::generePdf('pdf/ficheSuiviStage.html.twig',
            ['fiche_suivi' => $ficheSuivi],
            'Suivi-en-entreprise-'.$ficheSuivi->getStage()->getEtudiant()->getNom().'-'.$ficheSuivi->getDate()->format('dmY'));
    }
}

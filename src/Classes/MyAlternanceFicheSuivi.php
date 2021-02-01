<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyAlternanceFicheSuivi.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/02/2021 21:17

namespace App\Classes;

use App\Classes\Pdf\MyPDF;
use App\Entity\AlternanceFicheSuivi;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class MyAlternanceFicheSuivi
{
    private MyPDF $myPdf;

    /**
     * MyAlternanceFicheSuivi constructor.
     *
     * @param MyPDF $myPdf
     */
    public function __construct(MyPDF $myPdf)
    {
        $this->myPdf = $myPdf;
    }


    /**
     * @param AlternanceFicheSuivi $alternanceFicheSuivi
     *
     * @return PdfResponse
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function print(AlternanceFicheSuivi $alternanceFicheSuivi): PdfResponse
    {
        return $this->myPdf::generePdf('pdf/ficheSuiviAlternant.html.twig',
            ['alternance_fiche_suivi' => $alternanceFicheSuivi,],
            'Fiche-suivi-alternant-' . $alternanceFicheSuivi->getAlternance()->getEtudiant()->getNom() . '-' . $alternanceFicheSuivi->getDate()->format('dmY'),
            $alternanceFicheSuivi->getAlternance()->getAnnee()->getDiplome()->getDepartement()->getLibelle());
    }
}

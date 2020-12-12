<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyAlternanceFicheSuivi.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/12/2020 14:31

namespace App\Classes;

use App\Classes\Pdf\MyPDF;
use App\Entity\AlternanceFicheSuivi;
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
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function print(AlternanceFicheSuivi $alternanceFicheSuivi): void
    {
        $this->myPdf::generePdf('pdf/ficheSuiviAlternant.html.twig',
            ['alternance_fiche_suivi' => $alternanceFicheSuivi,],
            'Fiche-suivi-alternant-' . $alternanceFicheSuivi->getAlternance()->getEtudiant()->getNom() . '-' . $alternanceFicheSuivi->getDate()->format('dmY'),
            $alternanceFicheSuivi->getAlternance()->getAnnee()->getDiplome()->getDepartement()->getLibelle());
    }
}

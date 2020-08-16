<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyAlternanceFicheSuivi.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/08/2020 16:45

namespace App\Classes;

use App\Classes\Pdf\MyPDF;
use App\Entity\AlternanceFicheSuivi;

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


    public function print(AlternanceFicheSuivi $alternanceFicheSuivi): void
    {
        $this->myPdf::generePdf('pdf/ficheSuiviAlternant.html.twig',
            ['alternance_fiche_suivi' => $alternanceFicheSuivi,],
            'Fiche-suivi-alternant-' . $alternanceFicheSuivi->getAlternance()->getEtudiant()->getNom() . '-' . $alternanceFicheSuivi->getDate()->format('dmY'),
            $alternanceFicheSuivi->getAlternance()->getAnnee()->getDiplome()->getDepartement()->getLibelle());
    }
}

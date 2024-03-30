<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Pdf/PdfManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/03/2024 16:30
 */

namespace App\Classes\Pdf;

use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class PdfManager
{
    public function __construct(
        protected ParameterBagInterface $parameterBag,
        private MyGotenbergPdf          $myGotenbergPdf,
        private MyPDF                   $myPDF
    )
    {

    }

    public function pdf(): PdfInterface
    {
        //selon le paramètre de configuration pdf_service retourner le bon service
        switch ($this->parameterBag->get('pdf_service')) {
            case 'gotenberg':
                return $this->myGotenbergPdf;
            case 'wkhtmltopdf':
                return $this->myPDF;
            default:
                throw new \Exception('Service de génération de PDF inconnu');
        }

    }

}

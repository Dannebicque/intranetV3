<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Pdf/PdfManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:37
 */

namespace App\Classes\Pdf;

use Exception;
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
        return match ($this->parameterBag->get('pdf_service')) {
            'gotenberg' => $this->myGotenbergPdf,
            'wkhtmltopdf' => $this->myPDF,
            default => throw new Exception('Service de génération de PDF inconnu'),
        };
    }
}

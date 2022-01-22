<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Exporter/Type/PdfExporter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 10:41
 */

namespace App\Components\Exporter\Type;

use App\Classes\Pdf\MyPDF;
use App\Components\Exporter\SourceIterator\SourceInterface;
use Symfony\Component\HttpFoundation\Response;

class PdfExporter extends AbstractExporter implements ExporterInterface
{
    protected SourceInterface $datas;
    protected string $nomFichier;
    private MyPDF $myPdf;

    public function __construct(MyPDF $myPDF)
    {
        $this->myPdf = $myPDF;
    }

    public function export(SourceInterface $datas, string $nomFichier): void
    {
        $this->nomFichier = $this->checkNomFichier($nomFichier, 'pdf');
        $this->datas = $datas;
    }

    public function serOrientation(string $orientation): void
    {
        $this->myPdf::addOptions('orientation', $orientation);
    }

    /**
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\LoaderError
     */
    public function genereFichier(): Response
    {
        return $this->myPdf::generePdf('exporter/pdf.html.twig', $this->datas->toArray(), $this->nomFichier);
    }

    public function setOptions(array $options): void
    {
    }
}

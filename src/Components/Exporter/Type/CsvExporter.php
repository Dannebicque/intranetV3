<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Exporter/Type/CsvExporter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 10:41
 */

namespace App\Components\Exporter\Type;

use App\Components\Exporter\SourceIterator\SourceInterface;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class CsvExporter extends AbstractExporter implements ExporterInterface
{
    protected SourceInterface $datas;
    protected string $nomFichier;
    private Environment $environment;
    private string $file;
    private string $delimiter = ';';

    public function __construct(Environment $environment)
    {
        $this->environment = $environment;
    }

    public function setDelimiter(string $delimiter = ';'): void
    {
        $this->delimiter = $delimiter;
    }

    public function export(SourceInterface $datas, string $nomFichier): void
    {
        $this->nomFichier = $this->checkNomFichier($nomFichier, 'csv');
        $this->datas = $datas;
        //prépare le fichier
        $datas = array_merge($this->datas->toArray(), ['delimiter' => $this->delimiter, 'triche' => "\xEF\xBB\xBF"]);
        $this->file = $this->environment->render('exporter/csv.txt.twig',
            $datas
        );
    }

    //gérer le sens, la taille ?
    //le footer par défaut

    public function genereFichier(): Response
    {
        $response = new Response();
        $response->headers->set('Content-Disposition', sprintf('attachment; filename="%s"', $this->nomFichier));
        $response->headers->set('Content-Type', 'text/csv');
        $response->setContent($this->file);

        return $response;
    }
}

<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Exporter/ExporterRegistry.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/10/2021 21:26
 */

namespace App\Components\Exporter;

use App\Components\Exporter\Type\AbstractExporter;
use App\Components\Questionnaire\Exceptions\TypeQuestionNotFoundException;

class ExporterRegistry
{
    public const TAG_TYPE_EXPORTER = 'da.exporter.typeexporter';
    private array $typeExporter = [];

    public function registerTypeExporter(string $name, AbstractExporter $abstractExporter): void
    {
        $this->typeExporter[$name] = $abstractExporter;
    }

    /**
     * @throws \App\Components\Questionnaire\Exceptions\TypeQuestionNotFoundException
     */
    public function getTypeExporter(string $name)
    {
        if (!array_key_exists($name, $this->typeExporter)) {
            throw new TypeQuestionNotFoundException();
        }

        return $this->typeExporter[$name];
    }
}

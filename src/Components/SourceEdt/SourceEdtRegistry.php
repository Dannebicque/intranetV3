<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/SourceEdt/SourceEdtRegistry.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/09/2022 18:34
 */

namespace App\Components\SourceEdt;

use App\Components\SourceEdt\Exceptions\SourceEdtNotFoundException;
use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;
use App\Components\SourceEdt\Source\AbstractEdt;

class SourceEdtRegistry
{
    final public const TAG_SOURCE_EDT = 'da.source.edt';

    private array $sourcesEdt = [];

    public function registerSourceEdt(string $name, AbstractEdt $abstractEdt): void
    {
        $this->sourcesEdt[$abstractEdt::SOURCE] = $abstractEdt;
    }

    /**
     * @throws \App\Components\SourceEdt\Exceptions\SourceEdtNotFoundException
     */
    public function getSourceEdt(string $name): mixed
    {
        if (!array_key_exists($name, $this->sourcesEdt)) {
            throw new SourceEdtNotFoundException();
        }

        return $this->sourcesEdt[$name];
    }

    public function getSourcesEdt(): array
    {
        return $this->sourcesEdt;
    }
}

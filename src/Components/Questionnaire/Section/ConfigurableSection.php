<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Section/ConfigurableSection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 12:20
 */

namespace App\Components\Questionnaire\Section;


class ConfigurableSection extends AbstractSection
{
    public const LABEL = 'configurable.section';

    public ?AbstractSectionAdapter $sectionAdapter = null;
    public array $config = [];
    public string $type_calcul = '';
}

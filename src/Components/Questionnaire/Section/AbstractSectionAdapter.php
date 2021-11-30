<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Section/AbstractSectionAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 11:34
 */

namespace App\Components\Questionnaire\Section;

abstract class AbstractSectionAdapter
{
    public const ENTITY = null;
    public const FIELD_LIBELLE = 'libelle';
    public const FIELD_CODE = '';
    public const FIELD_ID = 'id';

    public function getData(mixed $id): ?array
    {
        return [
            'libelle' => '',
            'code' => '',
            'ordre' => $id,
            'id' => 0,
        ];
    }
}

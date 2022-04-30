<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Section/MatiereSectionAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 11:34
 */

namespace App\Components\Questionnaire\Section;

use App\Entity\Matiere;

class MatiereSectionAdapter extends AbstractSectionAdapter
{
    final public const ENTITY = Matiere::class;
    final public const FIELD_LIBELLE = 'libelle';
    final public const FIELD_CODE = 'ref_matiere';
    final public const LABEL = 'matiere';

    public function getData(mixed $id): ?array
    {
        return [
            'libelle' => '',
            'code' => '',
            'ordre' => 1,
            'id' => $id,
        ];
    }
}

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
    public const ENTITY = Matiere::class;
    public const FIELD_LIBELLE = 'libelle';
    public const FIELD_CODE = 'ref_matiere';
    public const LABEL = 'matiere';

    public function getData(mixed $id): ?array
    {
        return [
            'libelle' => '',
            'code' => '',
            'ordre' => $ordre,
            'id' => 0,
        ];
    }
}

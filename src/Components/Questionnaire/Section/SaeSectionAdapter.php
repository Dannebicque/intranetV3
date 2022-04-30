<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Section/SaeSectionAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 11:34
 */

namespace App\Components\Questionnaire\Section;

use App\Entity\ApcSae;

class SaeSectionAdapter extends AbstractSectionAdapter
{
    public final const ENTITY = ApcSae::class;
    public final const FIELD_LIBELLE = 'libelle';
    public final const FIELD_CODE = 'codeMatiere';
    public final const FIELD_ID = 'id';
    public final const LABEL = 'sae';

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

<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Section/RessourceSectionAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 11:34
 */

namespace App\Components\Questionnaire\Section;

use App\Entity\ApcRessource;

class RessourceSectionAdapter extends AbstractSectionAdapter
{
    final public const ENTITY = ApcRessource::class;
    final public const FIELD_LIBELLE = 'libelle';
    final public const FIELD_CODE = 'codeMatiere';
    final public const LABEL = 'ressources';

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

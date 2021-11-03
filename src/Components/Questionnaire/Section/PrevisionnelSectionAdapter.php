<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Section/PrevisionnelSectionAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 11:34
 */

namespace App\Components\Questionnaire\Section;


use App\DTO\Previsionnel;

class PrevisionnelSectionAdapter extends AbstractSectionAdapter
{
    public const ENTITY = Previsionnel::class;
    public const FIELD_LIBELLE = 'libelle';
    public const FIELD_CODE = 'codeMatiere';
    public const LABEL = 'previsionnel';
}

<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/DTO/EduSignGroupe.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2023 15:56
 */

namespace App\Classes\EduSign\DTO;

class EduSignGroupe
{
    /*
     * {
       "group": {
           "NAME": "Master Digital 2020-2022",
           "DESCRIPTION": "Whatever you want",
           "STUDENTS": ["ad876fgh7","gh76th76FG","n876GBnvPPM", ...],
           "PARENT": "", // If this group is a sub-group, add the id of the parent group
           "API_ID": "jfgjihgfsc97s", // API ID (if needed)
           "API_TYPE": "" // Name of the connector linked to
       }
   }
     */

    public string $name;
    public string $description = '';
    public array $students = [];
    public ?string $parent = '';
    public ?string $api_id = '';
    public ?string $api_type = '';
    public ?string $id_edu_sign = '';

    public function toArray(): array
    {
        return [
            'NAME' => $this->name,
            'DESCRIPTION' => $this->description,
            'STUDENTS' => $this->students,
            'PARENT' => $this->parent,
            'API_ID' => $this->api_id,
            'API_TYPE' => $this->api_type,
            'ID_EDU_SIGN' => $this->id_edu_sign,
        ];
    }
}

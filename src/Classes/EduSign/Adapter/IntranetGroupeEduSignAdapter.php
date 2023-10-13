<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/Adapter/IntranetGroupeEduSignAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2023 15:57
 */

namespace App\Classes\EduSign\Adapter;

use App\Classes\EduSign\DTO\EduSignGroupe;
use App\Classes\EduSign\GroupeInterface;
use App\Entity\Groupe;

class IntranetGroupeEduSignAdapter
{
    private ?EduSignGroupe $groupe;

    public function __construct(GroupeInterface $groupe, string $parent = '')
    {

        $this->groupe = new EduSignGroupe();

        $this->groupe->name = $groupe->getLibelle();
        $this->groupe->description = 'hello';
        $this->groupe->students = [];
        $this->groupe->parent = $parent;
        $this->groupe->api_id = $groupe->getId();
        $this->groupe->id_edu_sign = $groupe->getIdEduSign();
    }

    public function getGroupe(): ?EduSignGroupe
    {
        return $this->groupe;
    }
}

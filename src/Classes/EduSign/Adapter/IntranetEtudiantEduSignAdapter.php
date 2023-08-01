<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/Adapter/IntranetEtudiantEduSignAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/08/2023 15:09
 */

namespace App\Classes\EduSign\Adapter;

use App\Classes\EduSign\EduSignEtudiant;
use App\Entity\Etudiant;

class IntranetEtudiantEduSignAdapter
{
    private EduSignEtudiant $etudiant;

    public function __construct(Etudiant $etudiant)
    {
        $this->etudiant = new EduSignEtudiant();

    }

    public function getEtudiant(): ?EduSignEtudiant
    {
        return $this->etudiant;
    }
}

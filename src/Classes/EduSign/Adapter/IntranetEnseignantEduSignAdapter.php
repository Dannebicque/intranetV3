<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/Adapter/IntranetEnseignantEduSignAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2023 15:57
 */

namespace App\Classes\EduSign\Adapter;

use App\Classes\EduSign\DTO\EduSignEnseignant;
use App\Entity\Personnel;

class IntranetEnseignantEduSignAdapter
{
    private EduSignEnseignant $enseignant;

    public function __construct(Personnel $enseignant)
    {
        $this->enseignant = new EduSignEnseignant();

    }

    public function getEnseignant(): ?EduSignEnseignant
    {
        return $this->enseignant;
    }
}

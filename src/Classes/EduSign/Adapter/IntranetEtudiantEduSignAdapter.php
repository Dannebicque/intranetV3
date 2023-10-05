<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/Adapter/IntranetEtudiantEduSignAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2023 15:57
 */

namespace App\Classes\EduSign\Adapter;

use App\Classes\EduSign\DTO\EduSignEtudiant;
use App\Entity\Etudiant;

class IntranetEtudiantEduSignAdapter
{
    private EduSignEtudiant $etudiant;

    public function __construct(Etudiant $etudiant, array $groupes = [])
    {
        $this->etudiant = new EduSignEtudiant();

        $this->etudiant->firstname = $etudiant->getPrenom();
        $this->etudiant->lastname = $etudiant->getNom();
        $this->etudiant->email = $etudiant->getMailUniv();
        $this->etudiant->groups = $groupes;
        $this->etudiant->api_id = $etudiant->getId();
    }

    public function getEtudiant(): ?EduSignEtudiant
    {
        return $this->etudiant;
    }
}

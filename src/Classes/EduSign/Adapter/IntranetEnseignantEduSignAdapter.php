<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/Adapter/IntranetEnseignantEduSignAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:34
 */

namespace App\Classes\EduSign\Adapter;

use App\Classes\EduSign\DTO\EduSignEnseignant;
use App\Entity\Personnel;

class IntranetEnseignantEduSignAdapter
{
    private ?EduSignEnseignant $enseignant;

    public function __construct(Personnel $enseignant)
    {
        $this->enseignant = new EduSignEnseignant();
        $this->enseignant->firstname = $enseignant->getPrenom();
        $this->enseignant->lastname = $enseignant->getNom();
        $this->enseignant->email = $enseignant->getMailUniv();
//        $this->enseignant->email = $enseignant->getId().'enseignant1@test.fr';
        $this->enseignant->speciality = null;
        $this->enseignant->api_id = $enseignant->getId();
        $departements = $enseignant->getDepartements();
        foreach ($departements as $departement) {
            // ajouter les dept dans les tags
            $this->enseignant->tags[] = $departement->getLibelle();
        }
    }

    public function getEnseignant(): ?EduSignEnseignant
    {
        return $this->enseignant;
    }
}

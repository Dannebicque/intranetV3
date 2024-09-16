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
        $this->enseignant->email = $this->getEmailEnseignant($enseignant);
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

    public function getEmailEnseignant(Personnel $enseignant): string
    {
        // détection de l'envrionnement, si 'dev' alors prendre le mail de l'enseignant, sinon prendre un mail de test
        if ($_SERVER['APP_ENV'] === 'dev') {
            return $enseignant->getId() . '@enseignant_test.fr';
        }
        return $enseignant->getMailUniv();
    }
}

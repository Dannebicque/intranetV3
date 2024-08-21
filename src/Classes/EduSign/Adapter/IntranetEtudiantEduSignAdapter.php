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
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class IntranetEtudiantEduSignAdapter
{
    private EduSignEtudiant $etudiant;

    public function __construct(
        Etudiant $etudiant,
        array $groupes = [],
    )
    {
        $this->etudiant = new EduSignEtudiant();

        $this->etudiant->id = $etudiant->getIdEduSign() ?? null;
        $this->etudiant->firstname = $etudiant->getPrenom();
        $this->etudiant->lastname = $etudiant->getNom();
        $this->etudiant->email = $this->getEmailEtudiant($etudiant);
        $this->etudiant->groups = $groupes;
        $this->etudiant->tags = [];
        $this->etudiant->api_id = $etudiant->getId();
        $this->etudiant->send_email_credentials = false;
        $this->etudiant->new_password_needed = false;
    }

    public function getEtudiant(): ?EduSignEtudiant
    {
        return $this->etudiant;
    }

    public function getEmailEtudiant(Etudiant $etudiant): string
    {
        // détection de l'envrionnement, si 'dev' alors prendre le mail de l'étudiant, sinon prendre un mail de test
        if ($_SERVER['APP_ENV'] === 'dev') {
            return $etudiant->getId() . '@etudiant_test.fr';
        }
            return $etudiant->getMailUniv();
    }
}

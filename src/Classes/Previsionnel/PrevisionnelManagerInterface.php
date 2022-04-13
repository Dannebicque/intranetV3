<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Previsionnel/PrevisionnelManagerInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

namespace App\Classes\Previsionnel;

use App\DTO\PrevisionnelCollection;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Entity\Semestre;

interface PrevisionnelManagerInterface
{
    public function getPrevisionnelPersonnelAnnee(Personnel $personnel, int $annee): PrevisionnelCollection;

    public function getPrevisionnelPersonnelDepartementAnnee(
        Personnel $personnel,
        Departement $departement,
        int $annee
    ): PrevisionnelCollection;

    public function findPrevisionnelMatiere(string | int $matiere, int $anneePrevisionnel): PrevisionnelCollection;

    public function getPrevisionnelSemestre(Semestre $semestre, int $annee): PrevisionnelCollection;
}

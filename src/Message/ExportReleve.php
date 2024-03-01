<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Message/ExportReleve.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Message;

class ExportReleve
{
    public function __construct(private int $semestre, private int $anneeUniversitaire, private int $personnel)
    {
    }

    public function getSemestre(): int
    {
        return $this->semestre;
    }

    public function getAnneeUniversitaire(): int
    {
        return $this->anneeUniversitaire;
    }

    public function getPersonnel(): int
    {
        return $this->personnel;
    }
}

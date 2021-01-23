<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Message/ExportReleve.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 20/01/2021 17:13

namespace App\Message;


class ExportReleve
{
    private int $semestre;
    private int $anneeUniversitaire;
    private int $personnel;

    public function __construct(int $semestre, int $anneeUniversitaire, int $personnel)
    {
        $this->semestre = $semestre;
        $this->anneeUniversitaire = $anneeUniversitaire;
        $this->personnel = $personnel;
    }

    /**
     * @return int
     */
    public function getSemestre(): int
    {
        return $this->semestre;
    }

    /**
     * @return int
     */
    public function getAnneeUniversitaire(): int
    {
        return $this->anneeUniversitaire;
    }

    /**
     * @return int
     */
    public function getPersonnel(): int
    {
        return $this->personnel;
    }


}

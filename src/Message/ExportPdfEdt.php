<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Message/ExportPdfEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:59
 */

namespace App\Message;

class ExportPdfEdt
{
    /**
     * ExportPdfEdt constructor.
     */
    public function __construct(private readonly array $personnels, private readonly int $departement, private readonly int $personnel)
    {
    }

    public function getPersonnels(): array
    {
        return $this->personnels;
    }

    public function getDepartement(): int
    {
        return $this->departement;
    }

    public function getPersonnel(): int
    {
        return $this->personnel;
    }
}

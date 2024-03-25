<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Message/ExportPdfEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Message;

class ExportPdfEdt
{
    /**
     * ExportPdfEdt constructor.
     */
    public function __construct(private array $personnels, private int $departement, private int $personnel)
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

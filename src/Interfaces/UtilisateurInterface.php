<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Interfaces/UtilisateurInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/04/2021 20:50
 */

namespace App\Interfaces;

use App\Entity\AnneeUniversitaire;

interface UtilisateurInterface
{
    public function getId(): ?int;

    public function getMails(): array;

    public function getTypeUser(): ?string;

    public function getAnneeUniversitaire(): ?AnneeUniversitaire;

    public function setPassword(string $password): void;
}

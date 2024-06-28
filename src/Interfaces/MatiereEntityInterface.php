<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Interfaces/MatiereEntityInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 17/12/2021 16:34
 */

namespace App\Interfaces;

interface MatiereEntityInterface
{
    public function getLibelle(): ?string;

    public function getDisplay(): ?string;

    public function getCodeMatiere(): ?string;

    public function getCodeElement(): ?string;

    public function getCmPpn(): ?float;

    public function getTdPpn(): ?float;

    public function getTpPpn(): ?float;

    public function getNbNotes(): ?int;

    public function getCmFormation(): ?float;

    public function getTdFormation(): ?float;

    public function getTpFormation(): ?float;

    public function isSuspendu(): bool;

    public function hasCoefficientDifferent(): bool;
}

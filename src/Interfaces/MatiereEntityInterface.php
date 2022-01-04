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
    public function getLibelle();

    public function getDisplay();

    public function getCodeMatiere();

    public function getCodeElement();

    public function getCmPpn();

    public function getTdPpn();

    public function getTpPpn();

    public function getNbNotes();

    public function getCmFormation();

    public function getTdFormation();

    public function getTpFormation();

    public function isSuspendu();
}

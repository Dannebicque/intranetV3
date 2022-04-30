<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Matieres/MatiereInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/10/2021 11:35
 */

namespace App\Classes\Matieres;

use App\DTO\Matiere;
use App\DTO\MatiereCollection;
use App\Entity\Semestre;

interface MatiereInterface
{
    public function findFromSelect(string $data): ?Matiere; // champ select structuré avec typeMatiere_idmatiere

    public function find(int|string $id): ?Matiere; // récupère depuis un ID

    public function findBySemestre(Semestre $semestre): MatiereCollection;
}

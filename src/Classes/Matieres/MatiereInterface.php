<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Matieres/MatiereInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

namespace App\Classes\Matieres;


use App\DTO\Matiere;
use App\DTO\MatiereCollection;
use App\Entity\Semestre;

interface MatiereInterface
{
    public function findFromSelect($data); //champ select structuré avec typeMatiere_idmatiere

    public function find($id): Matiere; //récupère depuis un ID

    public function findBySemestre(Semestre $semestre): MatiereCollection;
}

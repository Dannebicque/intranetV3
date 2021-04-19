<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Matieres/MatiereInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/04/2021 19:01
 */

namespace App\Classes\Matieres;


interface MatiereInterface
{
    public function findFromSelect($data); //champ select structuré avec typeMatiere_idmatiere

    public function find($id); //récupère depuis un ID
}

<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/UpdateEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/08/2023 14:42
 */

namespace App\Classes\EduSign;

use App\Classes\EduSign\Adapter\IntranetEdtEduSignAdapter;

class UpdateEdt
{
    public function __construct(private readonly ApiEduSign $apiEduSign)
    {
    }

    public function update()
    {
        //récupére les éléments du diplôme
        //construit les objets associés selon le modèle EduSign
        $edt = null;
        $course = (new IntranetEdtEduSignAdapter($edt))->getCourse();

        //envoi une requete pour ajouter les éléments
        $this->apiEduSign->addCourse($course);
    }
}

<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/NotesTri.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

namespace App\Classes;

class NotesTri
{
    public function tri(array $notes, array $matieres): array
    {
        $t = [];
        foreach ($notes as $note) {
            $t[$matieres[$note->getEvaluation()->getTypeIdMatiere()]->codeMatiere.'_'.$note->getId()] = $note;
        }

        ksort($t);

        return $t;
    }
}

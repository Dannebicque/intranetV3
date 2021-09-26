<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Adapter/MatiereRessourceAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/09/2021 18:28
 */

namespace App\Adapter;

use App\DTO\Matiere;
use App\DTO\MatiereCollection;

class MatiereRessourceAdapter extends AbstractMatiereAdapter implements MatiereAdapterInterface
{
    public function collection(array $matieres): MatiereCollection
    {
        $collection = new MatiereCollection();

        foreach ($matieres as $matiere) {
            $collection->add($this->single($matiere));
        }

        return $collection;
    }

    /**
     * @param \App\Entity\ApcRessource|null $matiere
     */
    public function single($matiere): ?Matiere
    {
        $m = parent::single($matiere);
        if (null !== $m) {
            $m->id = $matiere->getId();
            $m->semestre = $matiere->getSemestre();
        }

        return $m;
    }
}

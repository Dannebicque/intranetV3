<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Adapter/MatiereSaeAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/09/2021 18:28
 */

namespace App\Adapter;

use App\DTO\Matiere;
use App\DTO\MatiereCollection;

class MatiereSaeAdapter extends AbstractMatiereAdapter implements MatiereAdapterInterface
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
     * @param \App\Entity\ApcSae|null $matiere
     */
    public function single($matiere): ?Matiere
    {
        if (null === $matiere) {
            return null;
        }
        $m = parent::single($matiere);
        if (null !== $m) {
            $m->id = $matiere->getId();
            $m->projetFormation = $matiere->getProjetFormation();
            $m->projetPpn = $matiere->getProjetPpn();
            $m->semestre = $matiere->getSemestre();
        }

        return $m;
    }
}

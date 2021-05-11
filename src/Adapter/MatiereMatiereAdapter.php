<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Adapter/MatiereMatiereAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/05/2021 10:22
 */

namespace App\Adapter;

use App\DTO\Matiere;
use App\DTO\MatiereCollection;

class MatiereMatiereAdapter extends AbstractMatiereAdapter implements MatiereAdapterInterface
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
     * @param \App\Entity\Matiere|null $matiere
     */
    public function single($matiere): ?Matiere
    {
        $m = parent::single($matiere);
        if (null !== $m) {
            $m->commentaire = $matiere->getCommentaire();
            $m->nbEcts = $matiere->getNbEcts();
            $m->pac = $matiere->getPac();
            $m->ue_id = $matiere->getUe() ? $matiere->getUe()->getId() : 0;
            $m->ue_display = $matiere->getUe() ? $matiere->getUe()->getDisplay() : '-';
            $m->ue_numero = $matiere->getUe() ? $matiere->getUe()->getNumeroUe() : null;
            $m->semestre = $matiere->getUe() ? $matiere->getUe()->getSemestre() : null;
            $m->parcours = $matiere->getParcours();
        }

        return $m;
    }
}

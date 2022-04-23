<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Adapter/MatiereMatiereAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/10/2021 10:36
 */

namespace App\Adapter;

use App\DTO\Matiere;
use App\DTO\MatiereCollection;
use App\DTO\Ue;

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

    public function single(mixed $matiere): ?Matiere
    {
        $m = parent::single($matiere);
        if (null !== $m) {
            $m->apc = false;
            $m->id = $matiere->getId();
            $m->commentaire = $matiere->getCommentaire();
            $m->nbEcts = $matiere->getNbEcts();
            $m->bonification = $matiere->getPac();
            $m->parcours = $matiere->getParcours();
            $m->coefficient = $matiere->getCoefficient();

            $ue = new Ue();
            if (null !== $matiere->getUe()) {
                $ue = new Ue();
                $ue->ue_id = $matiere->getUe()->getId();
                $ue->ue_display = $matiere->getUe()->getDisplay();
                $ue->ue_coefficient = $matiere->getUe()->getCoefficient();
                $ue->ue_numero = $matiere->getUe()->getNumeroUe();
            }
            $m->tab_ues[] = $ue;
        }

        return $m;
    }
}

<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Adapter/MatiereRessourceAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/10/2021 10:36
 */

namespace App\Adapter;

use App\DTO\Matiere;
use App\DTO\MatiereCollection;
use App\DTO\Ue;

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

    public function single(mixed $matiere): ?Matiere
    {
        $m = parent::single($matiere);
        if (null !== $m) {
            $m->apc = true;
            $m->id = $matiere->getId();
            $m->semestre = $matiere->getSemestre();

            foreach ($matiere->getApcRessourceCompetences() as $competence) {
                $ue = new Ue();
                $ue->ue_apc_id = $competence->getCompetence()->getId();
                foreach ($competence->getCompetence()->getUe() as $ueCompetence) {
                    if ($ueCompetence->getSemestre()->getId() === $matiere->getSemestre()->getId()) {
                        $ue->ue_id = $ueCompetence->getId();
                    }
                }

                $ue->ue_display = $competence->getCompetence()->getNomCourt();
                $ue->ue_coefficient = $competence->getCoefficient();
                $ue->ue_numero = (int) $competence->getCompetence()->getCouleur()[1];
                $ue->ue_couleur = $competence->getCompetence()->getCouleur();
                $m->tab_ues[] = $ue;
            }
        }

        return $m;
    }
}

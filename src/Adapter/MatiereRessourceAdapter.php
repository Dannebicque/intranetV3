<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Adapter/MatiereRessourceAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/11/2022 08:59
 */

namespace App\Adapter;

use App\DTO\Matiere;
use App\DTO\MatiereCollection;
use App\DTO\Ue;
use Doctrine\Common\Collections\ArrayCollection;

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
            $m->apcParcours = new ArrayCollection();

            foreach ($matiere->getSemestres() as $semestre) {
                $m->apcParcours->add($semestre->getDiplome()->getApcParcours());
            }

            foreach ($matiere->getApcRessourceCompetences() as $competence) {
                $ue = new Ue();
                $ue->ue_apc_id = $competence->getCompetence()->getId();
                foreach ($competence->getCompetence()->getUe() as $ueCompetence) {
                    foreach ($matiere->getSemestres() as $semestre) {
                        if ($ueCompetence->getSemestre()->getId() === $semestre->getId()) {
                            $ue->ue_id = $ueCompetence->getId();
                        }
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

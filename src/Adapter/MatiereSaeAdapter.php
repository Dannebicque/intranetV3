<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Adapter/MatiereSaeAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/11/2022 08:06
 */

namespace App\Adapter;

use App\DTO\Matiere;
use App\DTO\MatiereCollection;
use App\DTO\Ue;
use Doctrine\Common\Collections\ArrayCollection;

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

    public function single(mixed $matiere): ?Matiere
    {
        if (null === $matiere) {
            return null;
        }
        $m = parent::single($matiere);
        if (null !== $m) {
            $m->id = $matiere->getId();
            $m->projetFormation = $matiere->getProjetFormation();
            $m->projetPpn = $matiere->getProjetPpn();
            $m->apc = true;
            $m->bonification = $matiere->getBonification();

            $m->apcParcours = new ArrayCollection();
            foreach ($matiere->getSemestres() as $semestre) {
                $m->apcParcours->add($semestre->getDiplome()->getApcParcours());
            }

            foreach ($matiere->getApcSaeCompetences() as $competence) {
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

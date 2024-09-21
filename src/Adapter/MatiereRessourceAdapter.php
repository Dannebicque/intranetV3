<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Adapter/MatiereRessourceAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/06/2024 11:18
 */

namespace App\Adapter;

use App\DTO\Matiere;
use App\DTO\MatiereCollection;
use App\DTO\Ue;
use App\Entity\ApcRessourceCompetence;
use App\Repository\ApcRessourceCompetenceRepository;
use Doctrine\Common\Collections\ArrayCollection;

class MatiereRessourceAdapter extends AbstractMatiereAdapter implements MatiereAdapterInterface
{
    public function __construct(
        protected ApcRessourceCompetenceRepository $apcRessourceCompetenceRepository
    )
    {
    }

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
            $m->hasCoefficientDifferent = $matiere->hasCoefficientDifferent();

            foreach ($matiere->getSemestres() as $semestre) {
                $m->apcParcours->add($semestre->getDiplome()->getApcParcours());
            }

            if ($matiere->hasCoefficientDifferent() === false) {
                $competences = $this->apcRessourceCompetenceRepository->getByRessource($matiere);
                $nbCompetences = count($competences);
                for ($i = 0; $i < $nbCompetences; $i += 2) {
                    $apcRessourceCompetence = $competences[$i];
                    $ue = new Ue();
                    $competence = $competences[$i + 1];
                    $ue->ue_apc_id = $competence->getId();
                    foreach ($competence->getUe() as $ueCompetence) {
                        foreach ($matiere->getSemestres() as $semestre) {
                            if ($ueCompetence->getSemestre()->getId() === $semestre->getId()) {
                                $ue->ue_id = $ueCompetence->getId();
                            }
                        }
                    }

                    $ue->ue_display = $competence->getNomCourt();
                    $ue->ue_coefficient = $apcRessourceCompetence->getCoefficient();
                    $ue->ue_numero = (int)$competence->getCouleur()[1];
                    $ue->ue_couleur = $competence->getCouleur();
                    $m->tab_ues[] = $ue;
                }
            } else {
                $competences = $this->apcRessourceCompetenceRepository->getByRessource($matiere);

                $tApcRessourceCompetence = [];
                $tCompetences = [];

                foreach ($competences as $comp) {
                    if ($comp instanceof ApcRessourceCompetence) {
                        $tApcRessourceCompetence[$comp->getCompetence()?->getId()][$comp->getParcours()?->getId()] = $comp;
                    } else {
                        $tCompetences[] = $comp;
                    }
                }

                foreach ($tCompetences as $competence) {
                    $ue = new Ue();
                    $ue->ue_apc_id = $competence->getId();
                    foreach ($competence->getUe() as $ueCompetence) {
                        foreach ($matiere->getSemestres() as $semestre) {
                            if ($ueCompetence->getSemestre()->getId() === $semestre->getId()) {
                                $ue->ue_id = $ueCompetence->getId();
                            }
                        }
                    }

                    $ue->ue_display = $competence->getNomCourt();
                    foreach ($tApcRessourceCompetence[$competence->getId()] as $idParc => $apcParc) {
                        $ue->ue_coefficients[$idParc] = $apcParc->getCoefficient();
                    }
                    $ue->ue_numero = (int)$competence->getCouleur()[1];
                    $ue->ue_couleur = $competence->getCouleur();
                    $m->tab_ues[] = $ue;
                }
                //  dump($m->tab_ues);
            }
        }

        return $m;
    }
}

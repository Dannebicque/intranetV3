<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Matieres/MatiereDelete.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/09/2021 21:44
 */

namespace App\Classes\Matieres;

use App\Entity\Matiere;
use App\Repository\AbsenceRepository;
use App\Repository\EvaluationRepository;
use App\Repository\RattrapageRepository;
use Doctrine\ORM\EntityManagerInterface;

class MatiereDelete
{
    public function __construct(public EvaluationRepository $evaluationRepository, public AbsenceRepository $absenceRepository, public RattrapageRepository $rattrapageRepository, public EntityManagerInterface $entityManager)
    {
    }

    public function delete(Matiere $matiere): bool
    {
        $evaluations = $this->evaluationRepository->findByMatiere($matiere->getId(), Matiere::SOURCE);
        $absences = $this->absenceRepository->findByMatiere($matiere->getId(), Matiere::SOURCE);
        $rattrapages = $this->rattrapageRepository->findByMatiere($matiere->getId(), Matiere::SOURCE);

        if (0 !== count($evaluations) && 0 !== count($rattrapages)) {
            return false;
        }

        foreach ($evaluations as $evaluation) {
            $this->entityManager->remove($evaluation);
        }

        foreach ($absences as $absence) {
            $this->entityManager->remove($absence);
        }

        foreach ($rattrapages as $rattrapage) {
            $this->entityManager->remove($rattrapage);
        }
        $this->entityManager->remove($matiere);
        $this->entityManager->flush();

        return true;
    }
}

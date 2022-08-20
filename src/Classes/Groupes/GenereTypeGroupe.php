<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Groupes/GenereTypeGroupe.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/08/2022 18:00
 */

namespace App\Classes\Groupes;

use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Enums\TypeGroupeEnum;
use Doctrine\ORM\EntityManagerInterface;

class GenereTypeGroupe
{
    public function __construct(protected EntityManagerInterface $entityManager)
    {
    }

    public function generer(Semestre $semestre, Diplome $diplome): void
    {
        $apc = $diplome->isApc();

        $tgCm = new TypeGroupe($semestre);
        $tgCm->setLibelle('CM');
        $tgCm->setType(TypeGroupeEnum::TYPE_GROUPE_CM);
        $tgCm->setOrdreSemestre($semestre->getOrdreLmd());

        $this->entityManager->persist($tgCm);

        $tgTd = new TypeGroupe($semestre);
        $tgTd->setLibelle('TD');
        $tgTd->setType(TypeGroupeEnum::TYPE_GROUPE_TD);
        $tgTd->setDefaut(true);
        $tgTd->setOrdreSemestre($semestre->getOrdreLmd());

        $this->entityManager->persist($tgTd);

        $tgTp = new TypeGroupe($semestre);
        $tgTp->setLibelle('TP');
        $tgTp->setType(TypeGroupeEnum::TYPE_GROUPE_TP);
        $tgTp->setOrdreSemestre($semestre->getOrdreLmd());

        if ($apc) {
            $tgCm->setMutualise(true);
            $tgCm->setDiplome($diplome);

            $tgTd->setMutualise(true);
            $tgTd->setDiplome($diplome);

            $tgTp->setMutualise(true);
            $tgTp->setDiplome($diplome);
        } else {
            $tgCm->setMutualise(false);
            $tgCm->setDiplome($diplome);

            $tgTd->setMutualise(false);
            $tgTd->setDiplome($diplome);

            $tgTp->setMutualise(false);
            $tgTp->setDiplome($diplome);
        }

        $this->entityManager->persist($tgTp);

        $this->entityManager->flush();
    }
}

<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/UpdateEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:39
 */

namespace App\Classes\EduSign;

use App\Classes\EduSign\Adapter\IntranetEtudiantEduSignAdapter;
use App\Repository\DiplomeRepository;
use App\Repository\EtudiantRepository;
use App\Repository\SemestreRepository;

class UpdateEtudiant
{
    public function __construct(
        private readonly ApiEduSign  $apiEduSign,
        protected DiplomeRepository  $diplomeRepository,
        protected SemestreRepository $semestreRepository,
        protected EtudiantRepository $etudiantRepository,
    )
    {
    }

    public function update(): void
    {
//        $diplomesBut = $this->diplomeRepository->findAllWithEduSign();
//
//        foreach ($diplomesBut as $diplome) {
//            $semestres = $this->semestreRepository->findByDiplome($diplome);
            $semestres = $this->semestreRepository->findSemestreEduSign();

            foreach ($semestres as $semestre) {

            $diplome = $semestre->getDiplome();
            $cleApi = $diplome->getKeyEduSign();
                $etudiants = $this->etudiantRepository->findBySemestre($semestre);

                foreach ($etudiants as $etudiant) {
                    $groupes = [];
                    $groupes[] = $etudiant->getSemestre()->getIdEduSign();
                    foreach ($etudiant->getGroupes() as $groupe) {
                        $groupes[] = $groupe->getIdEduSign();
                    }

                    $etudiantEduSign = (new IntranetEtudiantEduSignAdapter($etudiant, $groupes))->getEtudiant();

                    if ($etudiant->getIdEduSign() == null) {
                        $this->apiEduSign->addEtudiant($etudiantEduSign, $cleApi);
                    } else {
                        dump('etudiant déjà envoyé');
                    }
                }
            }
//        }
    }
}

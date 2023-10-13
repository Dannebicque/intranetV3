<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/UpdateGroupe.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/08/2023 15:09
 */

namespace App\Classes\EduSign;

use App\Classes\EduSign\Adapter\IntranetGroupeEduSignAdapter;
use App\Repository\DiplomeRepository;
use App\Repository\GroupeRepository;
use App\Repository\SemestreRepository;

class UpdateGroupe
{
    public function __construct(
        private readonly ApiEduSign  $apiEduSign,
        protected DiplomeRepository  $diplomeRepository,
        protected SemestreRepository $semestreRepository,
        protected GroupeRepository   $groupeRepository,
    )
    {
    }

    public function update()
    {
        $diplomes = $this->diplomeRepository->findAllWithEduSign();

        foreach ($diplomes as $diplome) {

            $cleApi = $diplome->getCleApi();

            $semestres = $this->semestreRepository->findByDiplome($diplome);
            foreach ($semestres as $semestre) {
//                $annee = $semestre->getAnnee();
//                if ($annee->isOptAlternance() == true) {
                $groupe = (new IntranetGroupeEduSignAdapter($semestre))->getGroupe();
                if ($semestre->getIdEduSign() == null) {
                    $this->apiEduSign->addGroupe($groupe, $cleApi);
                } else {
                    dump('groupe déjà envoyé');
                }
            }
        }
        $groupesParents = $this->semestreRepository->findSemestreEduSign();
        foreach ($groupesParents as $parent) {
            $parcours = $parent->getDiplome()->getApcParcours();
            if ($parcours) {
                $groupes = $parcours->getGroupes();
            } else {
                $groupes = $this->groupeRepository->findBySemestre($parent);
            }
            foreach ($groupes as $groupe) {

                if ($groupe->getTypeGroupe()->getLibelle() == 'TD' || 'TP') {
                    foreach ($groupe->getTypeGroupe()->getSemestres() as $semestre) {
                        if ($semestre->getOrdreLmd() == $parent->getOrdreLmd()) {

                            $groupea = (new IntranetGroupeEduSignAdapter($groupe, $parent->getIdEduSign()))->getGroupe();
                            if ($groupe->getIdEduSign() == null) {
                                $this->apiEduSign->addGroupe($groupea, $cleApi);
                            } else {
                                dump('groupe déjà envoyé');
                            }
                        }
                    }
                }
            }
        }
    }
}

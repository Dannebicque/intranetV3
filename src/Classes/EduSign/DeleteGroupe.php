<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/DeleteGroupe.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:37
 */

namespace App\Classes\EduSign;

use App\Classes\EduSign\Adapter\IntranetGroupeEduSignAdapter;
use App\Repository\DiplomeRepository;
use App\Repository\GroupeRepository;
use App\Repository\SemestreRepository;

class DeleteGroupe
{
    public function __construct(
        private readonly ApiEduSign  $apiEduSign,
        protected GroupeRepository   $groupeRepository,
        protected SemestreRepository $semestreRepository,
        protected DiplomeRepository  $diplomeRepository,
    )
    {

    }

    public function delete(): void
    {
        // on récupère les diplomes qui ont la clé EduSign
        $diplomes = $this->diplomeRepository->findAllWithEduSign();
        foreach ($diplomes as $diplome) {
            // on récupère la clé API propre au diplome
            $cleApi = $diplome->getKeyEduSign();

            // on récupère les groupes parents
            $semestres = $this->semestreRepository->findByDiplome($diplome);

            foreach ($semestres as $parent) {
                // on récupère les groupes enfants
                $groupes = $this->groupeRepository->findBySemestre($parent);
                if ($parent->getIdEduSign() !== null) {
                    // on créé des objets Groupe adaptés pour EduSign à partir des parents
                    $parent = (new IntranetGroupeEduSignAdapter($parent))->getGroupe();
                    // on envoie les groupes à EduSign pour suppression
                    $this->apiEduSign->deleteGroupe($parent, $cleApi);
                }

                foreach ($groupes as $groupe) {
                    if ($groupe->getIdEduSign() !== null) {
                        // on créé des objets Groupe adaptés pour EduSign à partir des enfants
                        $group = (new IntranetGroupeEduSignAdapter($groupe))->getGroupe();
                        // on envoie les groupes à EduSign pour suppression
                        $this->apiEduSign->deleteGroupe($group, $cleApi);
                    }
                }
            }
        }
    }

}

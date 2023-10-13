<?php

namespace App\Classes\EduSign;

use App\Classes\EduSign\Adapter\IntranetGroupeEduSignAdapter;
use App\Repository\GroupeRepository;
use App\Repository\SemestreRepository;

class DeleteGroupe
{

    public function __construct(
        private readonly ApiEduSign        $apiEduSign,
        protected GroupeRepository         $groupeRepository,
        protected SemestreRepository       $semestreRepository,
    ) {

    }

    public function delete()
    {
        $groupes = $this->groupeRepository->findAllEduSign();
        $parents = $this->semestreRepository->findSemestreEduSign();

        foreach ($parents as $parent) {
            $parent = (new IntranetGroupeEduSignAdapter($parent))->getGroupe();
            $this->apiEduSign->deleteGroupe($parent);
        }
        foreach ($groupes as $groupe) {
            $group = (new IntranetGroupeEduSignAdapter($groupe))->getGroupe();
            $this->apiEduSign->deleteGroupe($group);
        }
    }

}
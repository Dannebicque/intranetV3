<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/UpdateGroupe.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/02/2024 17:28
 */

namespace App\Classes\EduSign;

use App\Classes\EduSign\Adapter\IntranetGroupeEduSignAdapter;
use App\Entity\Departement;
use App\Repository\DiplomeRepository;
use App\Repository\GroupeRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\Response;

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

    public function update(?string $keyEduSign): bool
    {
        if ($keyEduSign === null) {
            return false;
        } else {
            // on récupère les diplomes qui ont la clé EduSign
            $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);
        }
        foreach ($diplomes as $diplome) {
            // on récupère la clé API propre au département
            $cleApi = $diplome->getKeyEduSign();

            $semestres = $this->semestreRepository->findByDiplome($diplome);
            foreach ($semestres as $semestre) {
                // on récupère les groupes du semestre
                // et on créé des objets Groupe adaptés pour EduSign
                $groupe = (new IntranetGroupeEduSignAdapter($semestre))->getGroupe();
                // Si le groupe n'a pas encore été envoyé à EduSign
                if ($semestre->getIdEduSign() === null) {
                    // on envoie le groupe à EduSign
                    $this->apiEduSign->addGroupe($groupe, $cleApi, 'semestre');
                }
            }

            $departement = $diplome->getDepartement();
        }

        // on va chercher les groupes parents
        $semestres = $this->semestreRepository->findSemestreEduSignDept($departement);
//        dd($semestres);

        foreach ($semestres as $parent) {
            // on vérifie si le groupe parent a un parcours pour récupérer les groupes
            $parcours = $parent->getDiplome()->getApcParcours();
            if ($parcours) {
                $groupes = $parcours->getGroupes();
            } else {
                $groupes = $this->groupeRepository->findBySemestre($parent);
            }
//            dump($groupes);
            foreach ($groupes as $groupe) {
                // on vérifie si le groupe est un TD ou un TP
                if ($groupe->getTypeGroupe() !== null && ($groupe->getTypeGroupe()->getLibelle() === 'TD' || $groupe->getTypeGroupe()->getLibelle() === 'TP')) {
                    // on vérifie si le semestre du groupe est le même que le semestre parent
                    foreach ($groupe->getTypeGroupe()->getSemestres() as $semestre) {
                        if ($semestre === $parent) {
                            // on créé un objet Groupe adapté pour EduSign
                            $groupea = (new IntranetGroupeEduSignAdapter($groupe, $parent->getIdEduSign()))->getGroupe();
                            if ($groupe->getIdEduSign() === null) {
                                // on envoie le groupe à EduSign
                                $this->apiEduSign->addGroupe($groupea, $cleApi, 'groupe');
                            }
                        }
                    }
                }
            }
        }
        return true;
    }
}

<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/UpdateGroupe.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 18:12
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

    public function update(?string $keyEduSign): array
    {
        // on prépare la structure du résultat
        $result = ['success' => true, 'messages' => []];

        // on vérifie si la clé EduSign est présente
        if ($keyEduSign === null) {
            $result['success'] = false;
            $result['messages'][] = 'Clé EduSign manquante.';
            return $result;
        }

        try {
            // on récupère les diplomes qui ont la clé EduSign
            $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);
            foreach ($diplomes as $diplome) {
                // on récupère la clé API propre au diplome
                $cleApi = $diplome->getKeyEduSign();
                // on récupère les semestres du diplome
                $semestres = $this->semestreRepository->findByDiplome($diplome);

                // -------------
                // ------------- GROUPES PARENTS
                // -------------

                foreach ($semestres as $semestre) {
                    // si le semestre a déjà un id EduSign, on ne fait rien
                    if ($semestre->getIdEduSign() === null) {
                        // on créé des objets Groupe adaptés pour EduSign à partir des semestres
                        $groupe = (new IntranetGroupeEduSignAdapter($semestre))->getGroupe();
                        if ($semestre->getIdEduSign() === null) {
                            // on envoie les groupes à EduSign
                            $this->apiEduSign->addGroupe($groupe, $cleApi, 'semestre');
                            $result['messages'][] = "Groupe ajouté pour le semestre {$semestre->getLibelle()}.";
                        }
                    }
                }

                $departement = $diplome->getDepartement();

                // -------------
                // ------------- GROUPES ENFANTS
                // -------------

                // on récupère les groupes parents
                $semestres = $this->semestreRepository->findSemestreEduSignDept($departement);

                foreach ($semestres as $parent) {
                    // on vérifie si le groupe parent a un parcours pour récupérer les groupes
                    $parcours = $parent->getDiplome()->getApcParcours();
                    if ($parcours) {
                        $groupes = $parcours->getGroupes();
                    } else {
                        $groupes = $this->groupeRepository->findBySemestre($parent);
                    }
                    foreach ($groupes as $groupe) {
                        if ($groupe->getIdEduSign() === null) {
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
                                            $result['messages'][] = "Groupe ajouté pour le groupe {$groupe->getLibelle()}.";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } catch (\Exception $e) {
            $result['success'] = false;
            $result['messages'][] = 'Erreur lors de la mise à jour des groupes : ' . $e->getMessage();
        }

        return $result;
    }
}

<?php

namespace App\Classes\EduSign;

use App\Classes\EduSign\Adapter\IntranetGroupeEduSignAdapter;
use App\Classes\EduSign\Api\ApiGroupe;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\DiplomeRepository;
use App\Repository\GroupeRepository;
use App\Repository\SemestreRepository;

class UpdateGroupe
{
    public function __construct(
        private readonly ApiGroupe                       $apiGroupe,
        protected DiplomeRepository                   $diplomeRepository,
        protected SemestreRepository                  $semestreRepository,
        protected GroupeRepository                    $groupeRepository,
        private readonly AnneeUniversitaireRepository $anneeUniversitaireRepository
    )
    {
    }

    public function update(?string $keyEduSign): array
    {
        $result = ['success' => true, 'messages' => []];

        if ($keyEduSign === null) {
            return ['success' => false, 'messages' => ['Clé EduSign manquante.']];
        }

        try {
            $anneeUniv = $this->anneeUniversitaireRepository->findOneBy(['active' => true]);
            $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);

            foreach ($diplomes as $diplome) {
                $cleApi = $diplome->getKeyEduSign();
                $semestres = $this->semestreRepository->findByDiplome($diplome);

                foreach ($semestres as $semestre) {
                        $groupe = (new IntranetGroupeEduSignAdapter($anneeUniv, $semestre))->getGroupe();
                    if ($semestre->getIdEduSign() === null) {
                        $this->apiGroupe->addGroupe($groupe, $cleApi, 'semestre');
                        $result['messages'][] = "Groupe ajouté pour le semestre {$semestre->getLibelle()}.";
                    } else {
                        $this->apiGroupe->updateGroupe($groupe, $cleApi, 'semestre');
                        $result['messages'][] = "Groupe mis à jour pour le semestre {$semestre->getLibelle()}.";
                    }
                }

                $departement = $diplome->getDepartement();
                $semestres = $this->semestreRepository->findSemestreEduSignDept($departement);

                foreach ($semestres as $parent) {
                    $groupes = $parent->getDiplome()->getApcParcours()?->getGroupes() ?? $this->groupeRepository->findBySemestre($parent);

                    foreach ($groupes as $groupe) {
                        if ($groupe->getIdEduSign() === null && in_array($groupe->getTypeGroupe()?->getLibelle(), ['TD', 'TP'])) {
                            foreach ($groupe->getTypeGroupe()->getSemestres() as $semestre) {
                                if ($semestre === $parent) {
                                    $groupea = (new IntranetGroupeEduSignAdapter($anneeUniv, $groupe, $parent->getIdEduSign()))->getGroupe();
                                    if ($groupe->getIdEduSign() === null) {
                                        $this->apiGroupe->addGroupe($groupea, $cleApi, 'groupe');
                                    } else {
                                        $this->apiGroupe->updateGroupe($groupea, $cleApi);
                                    }
                                    $result['messages'][] = "Groupe ajouté pour le groupe {$groupe->getLibelle()}.";
                                }
                            }
                        }
                    }
                }

                // vérifier qu'il n'y a pas de groupe orphelin dans EduSign
                $allGroupes = $this->apiGroupe->getAllGroupes($cleApi);
                // todo: vérifier pour chaque groupe quil existe dans la db + ajouter avant une variable pr identifier les semestres et les groupes
            }
        } catch (\Exception $e) {
            $result['success'] = false;
            $result['messages'][] = 'Erreur lors de la mise à jour des groupes : ' . $e->getMessage();
        }

        return $result;
    }
}
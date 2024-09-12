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
        private readonly ApiGroupe                    $apiGroupe,
        protected DiplomeRepository                   $diplomeRepository,
        protected SemestreRepository                  $semestreRepository,
        protected GroupeRepository                    $groupeRepository,
        private readonly AnneeUniversitaireRepository $anneeUniversitaireRepository,
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
                $semestres = $this->semestreRepository->findByDiplome($diplome);

                foreach ($semestres as $semestre) {
                    $groupe = (new IntranetGroupeEduSignAdapter($anneeUniv, $semestre, 'semestre'))->getGroupe();
                    if ($semestre->getIdEduSign() === null) {
                        $this->apiGroupe->addGroupe($groupe, $keyEduSign, 'semestre');
                        $result['messages'][] = "Groupe ajouté pour le semestre {$semestre->getLibelle()}.";
                    } else {
                        $this->apiGroupe->updateGroupe($groupe, $keyEduSign, 'semestre');
                        $result['messages'][] = "Groupe mis à jour pour le semestre {$semestre->getLibelle()}.";
                    }
                }

                $departement = $diplome->getDepartement();
                $semestres = $diplome->getSemestres();

                foreach ($semestres as $parent) {
                    $groupes = $parent->getDiplome()->getApcParcours()?->getGroupes() ?? $this->groupeRepository->findBySemestre($parent);

                    foreach ($groupes as $groupe) {
                        foreach ($groupe->getTypeGroupe()?->getSemestres() as $semestre) {
                            if ($semestre === $parent) {
                                $groupea = (new IntranetGroupeEduSignAdapter($anneeUniv, $groupe, 'groupe', $parent->getIdEduSign()))->getGroupe();
                                if ($groupe->getIdEduSign() === null || $groupe->getIdEduSign() === '') {
                                    $this->apiGroupe->addGroupe($groupea, $keyEduSign, 'groupe');
                                } else {
                                    $this->apiGroupe->updateGroupe($groupea, $keyEduSign, 'groupe');
                                }
                                $result['messages'][] = "Groupe ajouté pour le groupe {$groupe->getLibelle()}.";
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

    public function deleteMissingGroupes(?string $keyEduSign): array
    {
        $result = ['success' => true, 'messages' => []];

        if ($keyEduSign === null) {
            return ['success' => false, 'messages' => ['Clé EduSign manquante.']];
        }

        try {
            $allGroupes = $this->apiGroupe->getAllGroupes($keyEduSign);

            foreach ($allGroupes as $groupe) {
                $groupeObject = $groupe['PARENT'] === ''
                    ? $this->semestreRepository->findOneBy(['idEduSign' => $groupe['ID']])
                    : $this->groupeRepository->findOneBy(['idEduSign' => $groupe['ID']]);

                if ($groupeObject === null) {
                    $this->apiGroupe->deleteGroupe($groupe['ID'], $keyEduSign);
                    $result['messages'][] = "Groupe supprimé : {$groupe['NAME']}.";
                }
            }
        } catch (\Exception $e) {
            $result['success'] = false;
            $result['messages'][] = 'Erreur lors de la suppression des groupes manquants : ' . $e->getMessage();
        }

        return $result;
    }
}
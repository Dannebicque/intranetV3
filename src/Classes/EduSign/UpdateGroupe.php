<?php

namespace App\Classes\EduSign;

use App\Classes\EduSign\Adapter\IntranetGroupeEduSignAdapter;
use App\Classes\EduSign\Api\ApiGroupe;
use App\Entity\Groupe;
use App\Entity\Semestre;
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
        set_time_limit(0);

        $anneeUniv = $this->anneeUniversitaireRepository->findOneBy(['active' => true]);
        $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);

        foreach ($diplomes as $diplome) {
            $semestres = $this->semestreRepository->findByDiplome($diplome);

            foreach ($semestres as $semestre) {
                $groupe = (new IntranetGroupeEduSignAdapter($anneeUniv, $semestre, 'semestre'))->getGroupe();
                if ($semestre->getIdEduSign() === null) {
                    $result['semestre'.$semestre->getId()] = $this->apiGroupe->addGroupe($groupe, $keyEduSign, 'semestre');
                } else {
                    $result['semestre'.$semestre->getId()] = $this->apiGroupe->updateGroupe($groupe, $keyEduSign, 'semestre');
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
                                $result['groupe'.$groupe->getId()] = $this->apiGroupe->addGroupe($groupea, $keyEduSign, 'groupe');
                            } else {
                                $result['groupe'.$groupe->getId()] = $this->apiGroupe->updateGroupe($groupea, $keyEduSign, 'groupe');
                            }
                        }
                    }
                }
            }
        }

        return $result;
    }

    public function deleteMissingGroupes(?string $keyEduSign): mixed
    {
        $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);
        $result = [];

        foreach ($diplomes as $diplome) {
            $semestres = $this->semestreRepository->findByDiplome($diplome);
            $allGroupes = $this->apiGroupe->getAllGroupes($keyEduSign);

            if ($allGroupes !== null && isset($allGroupes['result']) && is_array($allGroupes['result'])) {
                foreach ($allGroupes as $groupe) {
                    $groupeObject = $groupe['PARENT'] === ''
                        ? $this->semestreRepository->findOneBy(['idEduSign' => $groupe['ID']])
                        : $this->groupeRepository->findOneBy(['idEduSign' => $groupe['ID']]);

                    foreach ($semestres as $semestre) {
                        $groupes = $semestre->getDiplome()->getApcParcours()?->getGroupes() ?? $this->groupeRepository->findBySemestre($semestre);

                        // si $groupeObject n'est pas dans $groupes et n'est pas dans $semestres
                        if (!in_array($groupeObject, $semestres) ?? !$groupes->contains($groupeObject) && !in_array($groupeObject, $semestres)) {
                            $groupeObject = null;
                        }
                    }

                    if ($groupeObject === null) {
                            $result = $this->apiGroupe->deleteGroupe($groupe['ID'], $keyEduSign);
                            // retirer la clé eduSign du groupe ou du semestre
                            if ($groupe['PARENT'] === '') {
                                $groupeEntity = $this->semestreRepository->findOneBy(['idEduSign' => $groupe['ID']]);
                            } else {
                                $groupeEntity = $this->groupeRepository->findOneBy(['idEduSign' => $groupe['ID']]);
                            }
                            if ($groupeEntity !== null) {
                                $groupeEntity->setIdEduSign(null);
                                // sauvegarder le groupe ou le semestre dans le bon repository en fonction de $groupeEntity
                                if ($groupeEntity instanceof Groupe) {
                                    $this->groupeRepository->save($groupeEntity);
                                } elseif ($groupeEntity instanceof Semestre) {
                                    $this->semestreRepository->save($groupeEntity);
                                }
                            }
                        }
                }
            }
        }

        return $result;
    }
}

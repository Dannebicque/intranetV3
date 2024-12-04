<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/UpdateEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/04/2024 10:44
 */

namespace App\Classes\EduSign;

use App\Classes\EduSign\Adapter\IntranetEtudiantEduSignAdapter;
use App\Classes\EduSign\Api\ApiEtudiant;
use App\Classes\EduSign\DTO\EduSignEtudiant;
use App\Entity\Diplome;
use App\Repository\DiplomeRepository;
use App\Repository\EtudiantRepository;
use App\Repository\SemestreRepository;

class UpdateEtudiant
{
    public function __construct(
        private readonly ApiEtudiant $apiEtudiant,
        protected DiplomeRepository  $diplomeRepository,
        protected SemestreRepository $semestreRepository,
        protected EtudiantRepository $etudiantRepository,
        protected EduSignEtudiant    $edusignEtudiant,
    )
    {
    }

    public function update(?string $keyEduSign): array
    {
        $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);

        foreach ($diplomes as $diplome) {
            $semestres = $diplome->getSemestres();

            foreach ($semestres as $semestre) {
                $etudiants = $this->etudiantRepository->findBySemestre($semestre);

                foreach ($etudiants as $etudiant) {
                    // faire un tableau qui regroupe $etudiant->getSemestre()->getIdEduSign() et les id des groupes
                    $groupes = array_merge(
                        [$etudiant->getSemestre()->getIdEduSign()],
                        array_map(fn($g) => $g->getIdEduSign(), $etudiant->getGroupes()->toArray())
                    );
                    // retirer les entrées vides et réindexer
                    $groupes = array_values(array_filter($groupes));

                    $etudiantEduSign = (new IntranetEtudiantEduSignAdapter($etudiant, $groupes))->getEtudiant();

                    if ($etudiant->getIdEduSign() === null || $etudiant->getIdEduSign() === '') {
                        $response = $this->apiEtudiant->addEtudiant($etudiantEduSign, $keyEduSign);
                    } elseif ($etudiant->getAnneeSortie() !== 0) {
                        $response = $this->apiEtudiant->deleteEtudiant($etudiant->getIdEduSign(), $keyEduSign);
                    } else {
                        $response = $this->apiEtudiant->updateEtudiant($etudiantEduSign, $keyEduSign);
                    }

                    $result[$etudiant->getId()] = $response;
                }
            }
        }

        // retirer les entrées vides et réindexer
        $result = array_values(array_filter($result));
        return $result;
    }

    public function deleteMissingEtudiants(?string $keyEduSign): array
    {
        $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);
        $etudiantOut = $this->etudiantRepository->findEduSignOutdated();
        $result = [];

        foreach ($diplomes as $diplome) {
            $semestres = $this->semestreRepository->findByDiplome($diplome);
            $allEtudiants = $this->apiEtudiant->getAllEtudiants($keyEduSign);

            if ($allEtudiants !== null) {

                foreach ($allEtudiants as $etudiant) {
                    if (!is_array($etudiant)) continue;

                    // Si il n'y a pas d'etudiant dans la base de données avec le même ID
                    $etudiantObject = $this->etudiantRepository->findOneBy(['idEduSign' => $etudiant['ID']]);
                    // on change son mail dans edusign
                    if ($etudiantObject === null) {
                        $etudiantObject = $this->etudiantRepository->findOneBy(['id' => $etudiant['API_ID']]);
                        if ($etudiantObject !== null) {
                            $etudiantEduSign = (new IntranetEtudiantEduSignAdapter($etudiantObject, []))->getEtudiant();
                            $etudiantEduSign->email = $etudiantObject->getId() . '@delete.fr';
                            $etudiantEduSign->id = $etudiant['ID'];
                            $result[$etudiantObject->getId()] = $this->apiEtudiant->updateEtudiant($etudiantEduSign, $keyEduSign);
                            // supprimer d'edusign l'étudiant
                            $result = $this->apiEtudiant->deleteEtudiant($etudiant['ID'], $keyEduSign);
                        }
                    }

                    foreach ($semestres as $semestre) {
                        $etudiantSemestres = $this->etudiantRepository->findBySemestre($semestre);

                        if (!in_array($etudiant, $etudiantSemestres) || in_array($etudiant, $etudiantOut)) {
                            $response = $this->apiEtudiant->deleteEtudiant($etudiant['ID'], $keyEduSign);
                            $result[$etudiant['API_ID']] = $response;

                            if ($response === null) {
                                $etudiantObject = $this->etudiantRepository->findOneBy(['id' => $etudiant['API_ID']]);
                                $etudiantObject->setIdEduSign(null);
                                $this->etudiantRepository->save($etudiantObject);
                            }
                        }
                    }
                }
            }
        }

        // retirer les entrées vides et réindexer
        $result = array_values(array_filter($result));
        return $result;
    }

    public function changeSemestre(?Diplome $diplome, string $keyEduSign): array
    {
        $semestres = $diplome->getSemestres();
        $allEtudiants = $this->apiEtudiant->getAllEtudiants($keyEduSign);

        foreach ($semestres as $semestre) {
            $etudiants = $this->etudiantRepository->findBySemestre($semestre);

            foreach ($etudiants as $etudiant) {
                $groupes = array_merge(
                    [$etudiant->getSemestre()->getIdEduSign()],
                    array_map(fn($g) => $g->getIdEduSign(), $etudiant->getGroupes()->toArray())
                );
                $groupes = array_values(array_filter($groupes));

                $etudiantEduSign = (new IntranetEtudiantEduSignAdapter($etudiant, $groupes))->getEtudiant();

                if ($etudiant->getIdEduSign() === null || $etudiant->getIdEduSign() === '') {
                    $result[$etudiant->getId()] = $this->apiEtudiant->addEtudiant($etudiantEduSign, $keyEduSign);
                } else {
                    $result[$etudiant->getId()] = $this->apiEtudiant->updateEtudiant($etudiantEduSign, $keyEduSign);
                }

                //si l'étudiant n'est pas dans la liste des étudiants d'edusign
                if (!in_array($etudiant->getId(), array_column($allEtudiants, 'API_ID'))) {
                    // on construit un étudiant avec le même ID mais avec un mail différent
                    $etudiantEduSign = (new IntranetEtudiantEduSignAdapter($etudiant, []))->getEtudiant();
                    $etudiantEduSign->email = $etudiant->getId() . '@delete.fr';
                    $etudiantEduSign->id = $etudiant['ID'];
                    // on met à jour le mail de l'étudiant dans edusign
                    $result[$etudiant->getId()] = $this->apiEtudiant->updateEtudiant($etudiantEduSign, $keyEduSign);
                    // on supprime l'étudiant d'edusign
                    $result[$etudiant->getId()] = $this->apiEtudiant->deleteEtudiant($etudiant->getIdEduSign(), $keyEduSign);
                }
            }
        }


        // retirer les entrées vides et réindexer
        $result = array_values(array_filter($result));
        return $result;
    }

    public function fixEtudiants(string $keyEduSign): array
    {
        $result = [];

        // Récupérer tous les étudiants depuis EduSign
        $allEtudiants = $this->apiEtudiant->getAllEtudiants($keyEduSign);
        foreach ($allEtudiants as $etudiant) {
            // Trouver le bon étudiant grâce à l'idEduSign sur l'objet dans la base de données
            $etudiantObject = $this->etudiantRepository->findOneBy(['idEduSign' => $etudiant['ID']]);
            // Si je ne le trouve pas je le cherche via API_ID
            if ($etudiantObject === null) {
                $etudiantObject = $this->etudiantRepository->findOneBy(['id' => $etudiant['API_ID']]);

                if ($etudiantObject !== null) {
                    // Mettre à jour l'étudiant dans EduSign pour changer son mail
                    $etudiantEduSign = (new IntranetEtudiantEduSignAdapter($etudiantObject, []))->getEtudiant();
                    $etudiantEduSign->email = $etudiantObject->getId() . '@delete.fr';
                    $etudiantEduSign->groups = [];
                    $etudiantEduSign->id = $etudiant['ID'];
                    $result[$etudiantObject->getId()] = $this->apiEtudiant->updateEtudiant($etudiantEduSign, $keyEduSign);
                    // Supprimer d'EduSign l'étudiant
                    $result[$etudiantObject->getId()] = $this->apiEtudiant->deleteEtudiant($etudiant['ID'], $keyEduSign);
                } else {
                    $result[$etudiant['NAME']] = 'l\'étudiant n\'existe pas dans la base de données';
                }
            }
        }

        return $result ?? [];
    }
}


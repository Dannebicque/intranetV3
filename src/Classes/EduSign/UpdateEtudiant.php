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
        $result = ['success' => true, 'messages' => []];

        if ($keyEduSign === null) {
            return ['success' => false, 'messages' => ['Clé EduSign manquante pour la mise à jour des étudiants.']];
        }

        $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);
        if (empty($diplomes)) {
            return ['success' => false, 'messages' => ['Aucun diplôme trouvé pour la clé EduSign fournie.']];
        }

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

                    try {
                        if ($etudiant->getIdEduSign() === null || $etudiant->getIdEduSign() === '') {
                            $response = $this->apiEtudiant->addEtudiant($etudiantEduSign, $keyEduSign);
                        } elseif ($etudiant->getAnneeSortie() !== 0) {
                            $response = $this->apiEtudiant->deleteEtudiant($etudiant->getIdEduSign(), $keyEduSign);
                        } else {
                            $response = $this->apiEtudiant->updateEtudiant($etudiantEduSign, $keyEduSign);
                        }

                        if ($response['success']) {
                            $result['messages'][] = $etudiant->getIdEduSign() === null
                                ? "Étudiant ajouté : {$etudiant->getNom()} {$etudiant->getPrenom()}."
                                : "Étudiant mis à jour : {$etudiant->getNom()} {$etudiant->getPrenom()}.";
                        } else {
                            $result['success'] = false;
                            $result['messages'][] = "Erreur lors de la mise à jour de l'étudiant {$etudiant->getNom()} {$etudiant->getPrenom()}: " . $response['error'];
                        }
                    } catch (\Exception $e) {
                        $result['success'] = false;
                        $result['messages'][] = "Erreur lors de la mise à jour de l'étudiant {$etudiant->getNom()} {$etudiant->getPrenom()}: " . $e->getMessage();
                    }
                }
            }
        }

        return $result;
    }

    public function deleteMissingEtudiants(?string $keyEduSign): array
    {
        $result = ['success' => true, 'messages' => []];

        if ($keyEduSign === null) {
            return ['success' => false, 'messages' => ['Clé EduSign manquante pour la mise à jour des étudiants.']];
        }

        $etudiantOut = $this->etudiantRepository->findEduSignOutdated();

        foreach ($etudiantOut as $etudiant) {
            try {
                $response = $this->apiEtudiant->deleteEtudiant($etudiant->getIdEduSign(), $keyEduSign);
                if ($response['success']) {
                    $result['messages'][] = "Étudiant supprimé : {$etudiant->getNom()} {$etudiant->getPrenom()}.";
                    $etudiant->setIdEduSign(null);
                    $this->etudiantRepository->save($etudiant);
                } else {
                    $result['success'] = false;
                    $result['messages'][] = "Erreur lors de la suppression de l'étudiant {$etudiant->getNom()} {$etudiant->getPrenom()}: " . $response['error'];
                }
            } catch (\Exception $e) {
                $result['success'] = false;
                $result['messages'][] = "Erreur lors de la suppression de l'étudiant {$etudiant->getNom()} {$etudiant->getPrenom()}: " . $e->getMessage();
            }
        }

        return $result;
    }

    public function changeSemestre(?Diplome $diplome): array
    {
        $result = ['success' => true, 'messages' => []];

        $semestres = $diplome->getSemestres();

        foreach ($semestres as $semestre) {
            $etudiants = $this->etudiantRepository->findBySemestre($semestre);

            foreach ($etudiants as $etudiant) {
                $groupes = array_merge(
                    [$etudiant->getSemestre()->getIdEduSign()],
                    array_map(fn($g) => $g->getIdEduSign(), $etudiant->getGroupes()->toArray())
                );
                $groupes = array_values(array_filter($groupes));

                $etudiantEduSign = (new IntranetEtudiantEduSignAdapter($etudiant, $groupes))->getEtudiant();

                try {
                    if ($etudiant->getIdEduSign() === null || $etudiant->getIdEduSign() === '') {
                        $this->apiEtudiant->addEtudiant($etudiantEduSign, $diplome->getKeyEduSign());
                        $result['messages'][] = "Étudiant ajouté : {$etudiant->getNom()} {$etudiant->getPrenom()}.";
                    } else {
                        $this->apiEtudiant->updateEtudiant($etudiantEduSign, $diplome->getKeyEduSign());
                        $result['messages'][] = "Étudiant mis à jour : {$etudiant->getNom()} {$etudiant->getPrenom()}.";
                    }
                } catch (\Exception $e) {
                    $result['success'] = false;
                    $result['messages'][] = "Erreur lors de la mise à jour de l'étudiant {$etudiant->getNom()} {$etudiant->getPrenom()}: " . $e->getMessage();
                }
            }
        }

        return $result;
    }
}


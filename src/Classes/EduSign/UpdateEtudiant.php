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
use App\Classes\EduSign\DTO\EduSignEtudiant;
use App\Repository\DiplomeRepository;
use App\Repository\EtudiantRepository;
use App\Repository\SemestreRepository;

class UpdateEtudiant
{
    public function __construct(
        private readonly ApiEduSign  $apiEduSign,
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
            $result['success'] = false;
            $result['messages'][] = 'Clé EduSign manquante pour la mise à jour des étudiants.';
            return $result;
        }

        $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $keyEduSign]);
        if (empty($diplomes)) {
            $result['success'] = false;
            $result['messages'][] = 'Aucun diplôme trouvé pour la clé EduSign fournie.';
            return $result;
        }

        foreach ($diplomes as $diplome) {
            $departement = $diplome->getDepartement();
            $semestres = $this->semestreRepository->findSemestreEduSignDept($departement);

            foreach ($semestres as $semestre) {
                $etudiants = $this->etudiantRepository->findBySemestre($semestre);

                foreach ($etudiants as $etudiant) {
                    $groupes = [$etudiant->getSemestre()->getIdEduSign()];
                    foreach ($etudiant->getGroupes() as $groupe) {
                        $groupes[] = $groupe->getIdEduSign();
                    }

                    $etudiantEduSign = (new IntranetEtudiantEduSignAdapter($etudiant, $groupes))->getEtudiant();

                    try {
                        if ($etudiant->getIdEduSign() === null) {
                            $this->apiEduSign->addEtudiant($etudiantEduSign, $keyEduSign);
                            $result['messages'][] = "Étudiant ajouté : {$etudiant->getNom()} {$etudiant->getPrenom()}.";
                        } else {
                            $this->apiEduSign->updateEtudiant($etudiantEduSign, $keyEduSign);
                            $result['messages'][] = "Étudiant mis à jour : {$etudiant->getNom()} {$etudiant->getPrenom()}.";
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

    public function changeSemestre(?array $diplomes): array
    {
        $result = ['success' => true, 'messages' => []];

        foreach ($diplomes as $diplome) {
            $departement = $diplome->getDepartement();
            $semestres = $this->semestreRepository->findSemestreEduSignDept($departement);

            foreach ($semestres as $semestre) {
                $etudiants = $this->etudiantRepository->findBySemestre($semestre);

                foreach ($etudiants as $etudiant) {
                    $groupes = [$etudiant->getSemestre()->getIdEduSign()];
                    foreach ($etudiant->getGroupes() as $groupe) {
                        $groupes[] = $groupe->getIdEduSign();
                    }

                    $etudiantEduSign = (new IntranetEtudiantEduSignAdapter($etudiant, $groupes))->getEtudiant();

                    try {
                        if ($etudiant->getIdEduSign() === null) {
                            $this->apiEduSign->addEtudiant($etudiantEduSign, $diplome->getKeyEduSign());
                            $result['messages'][] = "Étudiant ajouté : {$etudiant->getNom()} {$etudiant->getPrenom()}.";
                        } else {
                            $this->apiEduSign->updateEtudiant($etudiantEduSign, $diplome->getKeyEduSign());
                            $result['messages'][] = "Étudiant mis à jour : {$etudiant->getNom()} {$etudiant->getPrenom()}.";
                        }
                    } catch (\Exception $e) {
                        $result['success'] = false;
                        $result['messages'][] = "Erreur lors de la mise à jour de l'étudiant
                        {$etudiant->getNom()} {$etudiant->getPrenom()}: " . $e->getMessage();
                    }
                }
            }
        }
        return $result;
    }
}


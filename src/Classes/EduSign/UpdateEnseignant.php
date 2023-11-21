<?php

namespace App\Classes\EduSign;

use App\Classes\EduSign\DTO\EduSignEnseignant;
use App\Repository\DiplomeRepository;
use App\Repository\PersonnelRepository;

class UpdateEnseignant
{
    public function __construct(
        private readonly ApiEduSign   $apiEduSign,
        protected PersonnelRepository $personnelRepository,
        protected DiplomeRepository   $diplomeRepository,
        protected EduSignEnseignant   $edusignEnseignant,
    )
    {
    }

    public function update()
    {
        $diplomes = $this->diplomeRepository->findAllWithEduSign();

        foreach ($diplomes as $diplome) {
            $this->cleApi = $diplome->getKeyEduSign();
            $intervenants = $this->apiEduSign->getEnseignant($this->cleApi);

            foreach ($intervenants as $intervenant) {

                $enseignant = $this->personnelRepository->findOneBy(['mailUniv' => $intervenant['EMAIL']]);

                if ($enseignant === null) {
                    $enseignant = $this->personnelRepository->findOneBy(['mailPerso' => $intervenant['EMAIL']]);
                    if ($enseignant === null) {
                        dump('enseignant non trouvé dans l\'intranet');
                        dump($diplome->getSigle());
                        dump($intervenant['FIRSTNAME'] . ' ' . $intervenant['LASTNAME']);
                        dump($intervenant['EMAIL']);
                        dump('-------------');
                    }
                }
                if ($enseignant !== null) {
                    if ($intervenant['API_ID'] !== '') {
                        if ($intervenant['API_ID'] !== strval($enseignant->getId())) {
                            dump('enseignant trouvé mais pas le bon');
                        } else {
                            dump('enseignant trouvé');
                            dump($enseignant->getNom() . ' ' . $enseignant->getPrenom());
                            dump('-------------');
                        }

                    } elseif ($intervenant['API_ID'] === '') {
                        dump('enseignant trouvé mais pas d\'API_ID');
                        // construire un objet EduSignEnseignant pour le passer en paramètre
                        $this->edusignEnseignant->id = $intervenant['ID'];
                        $this->edusignEnseignant->firstname = $enseignant->getPrenom();
                        $this->edusignEnseignant->lastname = $enseignant->getNom();
                        $this->edusignEnseignant->email = $intervenant['EMAIL'];
                        $this->edusignEnseignant->speciality = null;
                        $this->edusignEnseignant->api_id = $enseignant->getId();
                        $this->edusignEnseignant->tags[] = null;

                        $this->apiEduSign->updateEnseignant($this->edusignEnseignant, $this->cleApi);

                        dump('enseignant mis à jour' . $enseignant->getNom() . ' ' . $enseignant->getPrenom());

                    }
                    $departement = $diplome->getDepartement();
                    $departementId = $departement->getId();


                    $existingIdEduSign = $enseignant->getIdEduSign();

// Supprimer les entrées avec des valeurs nulles
                    if($existingIdEduSign !== null) {
                        foreach($existingIdEduSign as $key => $value) {
                            if($value === null || $value === '') {
                                unset($existingIdEduSign[$key]);
                            }
                        }
                        $enseignant->setIdEduSign($existingIdEduSign);
                        $this->personnelRepository->save($enseignant);
                    }

                    if ($existingIdEduSign === null || !array_key_exists($departementId, $existingIdEduSign)) {
                        $jsonId = [$departementId => $intervenant['ID']];

                        if ($existingIdEduSign === null) {
                            // Si idEduSign est null, le définir comme le nouveau tableau $jsonId
                            $enseignant->setIdEduSign($jsonId);
                        } else {
                            // Autrement, ajoute le nouveau tableau $jsonId à l'ancien tableau $existingIdEduSign
                            $enseignant->setIdEduSign($existingIdEduSign + $jsonId);
                        }

                        $this->personnelRepository->save($enseignant);
                        dump('enseignant mis à jour dans l\'intranet ' . $enseignant->getNom() . ' ' . $enseignant->getPrenom());
                    }
                }
            }
        }
    }
}
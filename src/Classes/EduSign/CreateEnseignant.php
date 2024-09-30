<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/CreateEnseignant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:43
 */

namespace App\Classes\EduSign;

use App\Classes\EduSign\Adapter\IntranetEnseignantEduSignAdapter;
use App\Classes\EduSign\Api\ApiPersonnel;
use App\Entity\Diplome;
use App\Entity\Personnel;
use App\Repository\PersonnelRepository;

class CreateEnseignant
{
    public function __construct(
        private readonly ApiPersonnel $apiPersonnel,
        protected PersonnelRepository $personnelRepository)
    {
    }

    public function update(Personnel $personnel, Diplome $diplome, string $cleApi): mixed
    {
            // Construit les objets associés selon le modèle EduSign
            $enseignant = (new IntranetEnseignantEduSignAdapter($personnel))->getEnseignant();

            // Envoi une requête pour ajouter les éléments
            $enseignantEduSign = $this->apiPersonnel->getEnseignantByEmail($enseignant->email, $cleApi);
            if ($enseignantEduSign) {
                $result = $this->apiPersonnel->updateEnseignant($enseignant, $personnel, $diplome, $cleApi);
                // ajouter l'id de l'enseignant dans la table personnel

                $id = $enseignantEduSign['ID'];
                $diplomeId = $diplome->getId();
                $existingIdEduSign = $personnel->getIdEduSign();

                // Supprimer les entrées avec des valeurs nulles
                if ($existingIdEduSign !== null) {
                    foreach ($existingIdEduSign as $key => $value) {
                        if ($value === null || $value === '') {
                            unset($existingIdEduSign[$key]);
                        }
                    }
                    $personnel->setIdEduSign($existingIdEduSign);
                    $this->personnelRepository->save($personnel);
                }
                if ($existingIdEduSign === null || !array_key_exists($diplomeId, $existingIdEduSign)) {
                    $jsonId = [$diplomeId => $id];

                    if ($existingIdEduSign === null) {
                        // Si idEduSign est null, le définir comme le nouveau tableau $jsonId
                        $personnel->setIdEduSign($jsonId);
                    } else {
                        // Autrement, ajoute le nouveau tableau $jsonId à l'ancien tableau $existingIdEduSign
                        $personnel->setIdEduSign($existingIdEduSign + $jsonId);
                    }
                }

                $this->personnelRepository->save($personnel);


            } else {
                $result = $this->apiPersonnel->addEnseignant($enseignant, $personnel, $diplome, $cleApi);
            }

            return $result;

    }
}

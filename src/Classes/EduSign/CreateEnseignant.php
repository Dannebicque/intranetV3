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
        // Construit l'objet associé selon le modèle EduSign
        $enseignant = (new IntranetEnseignantEduSignAdapter($personnel))->getEnseignant();

        // Envoi une requête pour ajouter les éléments
        $enseignantEduSign = $this->apiPersonnel->getEnseignantByEmail($enseignant->email, $cleApi);
        if ($enseignantEduSign) {
            $result = $this->apiPersonnel->updateEnseignant($enseignant, $cleApi);

            $id = $enseignantEduSign['ID'];
            $diplomeId = $diplome->getId();
            $existingIdEduSign = $personnel->getIdEduSign();

            if ($existingIdEduSign !== null) {
                $existingIdEduSign = array_filter($existingIdEduSign, fn($value) => $value !== null && $value !== '');
                $personnel->setIdEduSign($existingIdEduSign);
                $this->personnelRepository->save($personnel);
            }

            if ($existingIdEduSign === null || !array_key_exists($diplomeId, $existingIdEduSign)) {
                $jsonId = [$diplomeId => $id];
                $personnel->setIdEduSign($existingIdEduSign === null ? $jsonId : $existingIdEduSign + $jsonId);
            }

            $this->personnelRepository->save($personnel);

        } else {
            $result = $this->apiPersonnel->addEnseignant($enseignant, $personnel, $diplome, $cleApi);
        }

        return $result;

    }
}

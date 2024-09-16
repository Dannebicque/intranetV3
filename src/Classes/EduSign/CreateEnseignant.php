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
use App\Classes\EduSign\Api\ApiEduSign;
use App\Classes\EduSign\Api\ApiPersonnel;
use App\Entity\Departement;
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

    public function update(Personnel $personnel, Diplome $diplome, string $cleApi): array
    {
        try {
            // Construit les objets associés selon le modèle EduSign
            $enseignant = (new IntranetEnseignantEduSignAdapter($personnel))->getEnseignant();
            // Envoi une requête pour ajouter les éléments
            $result = $this->apiPersonnel->addEnseignant($enseignant, $personnel, $diplome, $cleApi);

            if (!$result['success']) {
                return ['success' => false, 'error' => $result['error']];
            }

            return ['success' => true];
        } catch (\Exception $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }
}
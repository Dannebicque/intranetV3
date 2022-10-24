<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Section/SaeSectionAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 17/09/2022 18:16
 */

namespace App\Components\Questionnaire\Section;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Entity\Annee;
use App\Entity\ApcSae;

class SaeSectionAdapter extends AbstractSectionAdapter
{
    final public const ENTITY = ApcSae::class;
    final public const FIELD_LIBELLE = 'libelle';
    final public const FIELD_CODE = 'codeMatiere';
    final public const FIELD_ID = 'id';
    final public const LABEL = 'sae';

    public function __construct(
        protected PrevisionnelManager $previsionnelManager,
        protected TypeMatiereManager $typeMatiereManager)
    {
    }

    public function getData(mixed $id): ?array
    {
        return [
            'libelle' => '',
            'code' => '',
            'ordre' => 1,
            'id' => $id,
        ];
    }

    public function getAllDataAnnee(Annee $annee, array $selectionnes): array
    {
        $data = [];
        $previs = $this->previsionnelManager->getPrevisionnelSaeAnnee($annee, $annee->getAnneeUniversitaire());
        foreach ($previs as $previ) {
            $data[] = [
                'libelle' => $previ->matiere_libelle,
                'code' => $previ->matiere_code,
                'personnel' => $previ->personnel_prenom.' '.$previ->personnel_nom,
                'id' => $previ->id,
                'checked' => in_array($previ->id, $selectionnes),
            ];
        }

        return $data;
    }
}

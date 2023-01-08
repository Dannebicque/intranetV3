<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Section/SaeSectionAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/01/2023 17:22
 */

namespace App\Components\Questionnaire\Section;

use App\Entity\ApcSae;
use App\Entity\Semestre;
use App\Repository\ApcSaeRepository;

class SaeSectionAdapter extends AbstractSectionAdapter
{
    final public const ENTITY = ApcSae::class;
    final public const FIELD_LIBELLE = 'libelle';
    final public const FIELD_CODE = 'codeMatiere';
    final public const FIELD_ID = 'id';
    final public const LABEL = 'sae';

    public function __construct(
        protected ApcSaeRepository $apcSaeRepository
    ) {
    }

    public function getData(mixed $id): ?array
    {
        $matiere = $this->apcSaeRepository->find($id);
        if (null !== $matiere) {
            return [
                'libelle' => $matiere->getLibelle(),
                'code' => $matiere->getCodeElement(),
                'personnel' => '',
                'id' => $id,
                'affichage' => $matiere->getCodeElement() . ' | ' . $matiere->getLibelle(),
            ];
        }

        return null;
    }

    public function getAllDataSemestre(Semestre $semestre, array $selectionnes): array
    {
        $data = [];
        $previs = $this->apcSaeRepository->findByReferentielOrdreSemestre($semestre->getDiplome()?->getReferentiel(),
            $semestre->getOrdreLmd());
        foreach ($previs as $previ) {
            $data[] = [
                'libelle' => $previ->getLibelle(),
                'code' => $previ->getCodeElement(),
                'personnel' => '',
                'id' => $previ->getId(),
                'checked' => in_array($previ->getId(), $selectionnes),
                'affichage' => $previ->getCodeElement() . ' | ' . $previ->getLibelle(),
            ];
        }

        return $data;
    }
}

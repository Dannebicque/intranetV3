<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Section/MatiereSectionAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/01/2023 17:22
 */

namespace App\Components\Questionnaire\Section;

use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Repository\MatiereRepository;

class MatiereSectionAdapter extends AbstractSectionAdapter
{
    final public const ENTITY = Matiere::class;
    final public const FIELD_LIBELLE = 'libelle';
    final public const FIELD_CODE = 'ref_matiere';
    final public const LABEL = 'matiere';

    public function __construct(
        protected MatiereRepository $matiereRepository
    ) {
    }

    public function getData(mixed $id): ?array
    {
        $matiere = $this->matiereRepository->find($id);
        if (null !== $matiere) {
            return [
                'libelle' => $matiere->getLibelle(),
                'code' => $matiere->getCodeMatiere(),
                'personnel' => '',
                'id' => $id,
                'affichage' => $matiere->getCodeMatiere() . ' | ' . $matiere->getLibelle(),
            ];
        }

        return null;
    }

    public function getAllDataSemestre(Semestre $semestre, array $selectionnes): array
    {
        $data = [];
        $previs = $this->matiereRepository->findBySemestre($semestre);
        foreach ($previs as $previ) {
            $data[] = [
                'libelle' => $previ->getLibelle(),
                'code' => $previ->getCodeMatiere(),
                'personnel' => '',
                'id' => $previ->getId(),
                'checked' => in_array($previ->getId(), $selectionnes, true),
                'affichage' => $previ->getCodeMatiere() . ' | ' . $previ->getLibelle(),
            ];
        }

        return $data;
    }
}

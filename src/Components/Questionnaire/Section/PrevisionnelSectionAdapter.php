<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Section/PrevisionnelSectionAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/01/2023 17:13
 */

namespace App\Components\Questionnaire\Section;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\DTO\Previsionnel;
use App\Entity\Semestre;
use App\Repository\PrevisionnelRepository;

class PrevisionnelSectionAdapter extends AbstractSectionAdapter
{
    final public const ENTITY = Previsionnel::class;
    final public const FIELD_LIBELLE = 'libelle';
    final public const FIELD_PERSONNEL = 'libelle';
    final public const FIELD_CODE = 'codeMatiere';
    final public const LABEL = 'previsionnel';

    public function __construct(
        protected PrevisionnelManager $previsionnelManager,
        protected PrevisionnelRepository $previsionnelRepository,
        protected TypeMatiereManager $typeMatiereManager
    ) {
    }

    public function getData(mixed $id): ?array
    {
        $previ = $this->previsionnelRepository->find($id);
        if (null !== $previ) {
            $matiere = $this->typeMatiereManager->getMatiere($previ->getIdMatiere(), $previ->getTypeMatiere());
            if (null !== $matiere) {
                return [
                    'libelle' => $matiere->libelle,
                    'code' => $matiere->codeMatiere,
                    'personnel' => $previ->getPersonnel()?->getDisplayPr(),
                    'id' => $id,
                    'affichage' => $matiere->codeMatiere . ' | ' . $matiere->libelle . '(' . $previ->getPersonnel()?->getDisplayPr() . ')',
                ];
            }
        }

        return null;
    }

    public function getAllDataSemestre(Semestre $semestre, array $selectionnes): array
    {
        $data = [];
        $previs = $this->previsionnelManager->getPrevisionnelAnnee($semestre->getAnnee(),
            $semestre->getAnnee()?->getAnneeUniversitaire());
        foreach ($previs as $previ) {
            $data[] = [
                'libelle' => $previ->matiere_libelle,
                'code' => $previ->matiere_code,
                'personnel' => $previ->personnel_prenom . ' ' . $previ->personnel_nom,
                'id' => $previ->id,
                'checked' => in_array($previ->id, $selectionnes),
                'affichage' => $previ->matiere_code . ' | ' . $previ->matiere_libelle . '(' . $previ->personnel_prenom . ' ' . $previ->personnel_nom . ')',
            ];
        }

        return $data;
    }
}

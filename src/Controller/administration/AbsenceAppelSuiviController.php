<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/AbsenceAppelSuiviController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2021 13:09
 */

namespace App\Controller\administration;

use App\Classes\Absences\AbsenceEtatAppel;
use App\Classes\Edt\EdtManager;
use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\Semestre;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administration/absence/appel')]
class AbsenceAppelSuiviController extends BaseController
{
    private EdtManager $edtManager;
    private AbsenceEtatAppel $absenceEtatAppel;

    public function __construct(EdtManager $edtManager, AbsenceEtatAppel $absenceEtatAppel)
    {
        $this->edtManager = $edtManager;
        $this->absenceEtatAppel = $absenceEtatAppel;
    }

    #[Route('/{semestre}', name: 'administration_absence_appel_index', requirements: ['semestre' => "\d+"])]
    public function index(
        TypeMatiereManager $typeMatiereManager,
        Semestre $semestre
    ): Response {
        $statsAppel = $this->absenceEtatAppel->getBySemestre($semestre);
        $matieres = $typeMatiereManager->findBySemestreArray($semestre);

        return $this->render('administration/absence_appel/index.html.twig',
            [
                'semestre' => $semestre,
                'pl' => $this->edtManager->getPlanningSemestre($semestre),
                'statsAppel' => $statsAppel,
                'matieres' => $matieres
            ]);
    }

    #[Route('/export/{semestre}', name: 'administration_absence_appel_export')]
    public function export(
        Semestre $semestre
    ) {
    }
}

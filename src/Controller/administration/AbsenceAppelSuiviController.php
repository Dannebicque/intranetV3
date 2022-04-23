<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/AbsenceAppelSuiviController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 09:44
 */

namespace App\Controller\administration;

use App\Classes\Absences\AbsenceEtatAppel;
use App\Classes\Edt\EdtManager;
use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\Semestre;
use App\Table\PlanCoursTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administration/absence/appel')]
class AbsenceAppelSuiviController extends BaseController
{
    public function __construct(private EdtManager $edtManager, private AbsenceEtatAppel $absenceEtatAppel)
    {
    }

    /**
     * @throws \JsonException
     */
    #[Route('/{semestre}', name: 'administration_absence_appel_index', requirements: ['semestre' => "\d+"])]
    public function index(
        Request $request,
        TypeMatiereManager $typeMatiereManager,
        Semestre $semestre
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $semestre);

        $statsAppel = $this->absenceEtatAppel->getBySemestre($semestre);
        $matieres = $typeMatiereManager->findBySemestreArray($semestre);

        $table = $this->createTable(PlanCoursTableType::class, [
            'matieres' => $matieres,
            'statsAppel' => $statsAppel,
            'semestre' => $semestre,
        ]);

        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('administration/absence_appel/index.html.twig',
            [
                'pl' => $this->edtManager->getPlanningSemestre($semestre),
                'semestre' => $semestre,
                'table' => $table,
                'statsAppel' => $statsAppel,
                'matieres' => $matieres,
            ]);
    }

    #[Route('/export/{semestre}.{_format}', name: 'administration_absence_appel_export')]
    public function export(
        Semestre $semestre,
        string $_format
    ): ?Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $semestre);
        //todo: gérer l'export passer par un DTO, et l'injecter aussi dans le table de l'index
        $statsAppel = $this->absenceEtatAppel->getBySemestre($semestre);
//        $datas = new DtoSourceIterator($statsAppel, AbsenceEtatAppel::class);
//
//        return $exporterManager->export($datas, $_format, 'dates');
        return null;
    }
}

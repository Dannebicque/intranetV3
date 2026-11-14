<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appPersonnel/RattrapageController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/11/2026 20:25
 */

namespace App\Controller\appPersonnel;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Personnel;
use App\Repository\AbsenceRepository;
use App\Repository\RattrapageRepository;
use App\Table\PersonnelRattrapageTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route(path: '/application/personnel/rattrapage')]
#[IsGranted('ROLE_PERMANENT')]
class RattrapageController extends BaseController
{
    #[Route(path: '/', name: 'application_personnel_rattrapage_index', options: ['expose' => true])]
    public function index(
        Request            $request,
        TypeMatiereManager $typeMatiereManager,
        AbsenceRepository  $absenceRepository
    ): Response
    {
        if (!$request->isXmlHttpRequest() && 'App\Controller\appPersonnel\RattrapageController::index' !== $request->attributes->get('_controller')) {
            return $this->redirectToRoute('application_index', ['onglet' => 'rattrapage']);
        }

        $semestres = $this->dataUserSession->getSemestres();
        $absences = $absenceRepository->findBySemestresRattrapage($semestres, $this->getAnneeUniversitaire());
        $matieres = $typeMatiereManager->findByDepartementArray($this->getDepartement());

        $table = $this->createTable(PersonnelRattrapageTableType::class, [
            'personnel' => $this->getUser(),
            'anneeUniversitaire' => $this->getAnneeUniversitaire(),
            'semestres' => $semestres,
            'absences' => $absences,
            'matieres' => $matieres,
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('appPersonnel/rattrapage/index.html.twig', [
            'table' => $table,
        ]);
    }

    #[Route(path: '/export.{_format}', name: 'application_personnel_rattrapage_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: ['GET'])]
    public function export(
        MySerializer         $mySerializer,
        TypeMatiereManager   $typeMatiereManager,
        MyExport             $myExport,
        RattrapageRepository $rattrapageRepository,
        string               $_format
    ): Response
    {
        /** @var Personnel $personnel */
        $personnel = $this->getUser();
        $rattrapages = $rattrapageRepository->findByPersonnel($personnel, $this->getAnneeUniversitaire());
        $matieres = $typeMatiereManager->findByDepartementArray($this->getDepartement());

        $tab = [];
        foreach ($rattrapages as $rattrapage) {
            if (array_key_exists($rattrapage->getTypeIdMatiere(), $matieres)) {
                $rattrapage->setLibelleMatiere($matieres[$rattrapage->getTypeIdMatiere()]->display);
            } else {
                $rattrapage->setLibelleMatiere('-');
            }
            $tab[] = $rattrapage;
        }

        $data = $mySerializer->getDataFromSerialization(
            $tab,
            [
                'etudiant' => ['nom', 'prenom'],
                'semestre' => ['libelle'],
                'dateEval',
                'heureEval',
                'duree',
                'libelleMatiere',
                'dateRattrapage',
                'heureRattrapage',
                'salle',
                'etatDemandeLong',
            ],
            ['rattrapage_administration', 'utilisateur', 'matiere', 'semestre'],
            [
                'dateEval' => MySerializer::ONLY_DATE,
                'heureEval' => MySerializer::ONLY_TIME,
                'dateRattrapage' => MySerializer::ONLY_DATE,
                'heureRattrapage' => MySerializer::ONLY_TIME,
            ]
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'mes_rattrapages_' . $this->getAnneeUniversitaire()->getAnnee()
        );
    }
}

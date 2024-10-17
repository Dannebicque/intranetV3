<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/GetCourses.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:38
 */

namespace App\Classes\EduSign;

use App\Classes\Edt\EdtManager;
use App\Classes\EduSign\Api\ApiCours;
use App\Classes\Matieres\TypeMatiereManager;
use App\DTO\Matiere;
use App\Entity\Absence;
use App\Entity\Semestre;
use App\Event\AbsenceEvent;
use App\Repository\AbsenceRepository;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\ApcReferentielRepository;
use App\Repository\CalendrierRepository;
use App\Repository\DepartementRepository;
use App\Repository\DiplomeRepository;
use App\Repository\EdtCelcatRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Carbon\Carbon;
use DateInterval;
use DateTime;
use DateTimeZone;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

class GetCourses
{

    public function __construct(
        private readonly ApiCours               $apiCours,
        private readonly EdtManager            $edtManager,
        private readonly TypeMatiereManager    $typeMatiereManager,
        protected SemestreRepository           $semestreRepository,
        protected PersonnelRepository          $personnelRepository,
        protected EtudiantRepository           $etudiantRepository,
        protected CreateEnseignant             $updateEnseignant,
        protected DepartementRepository        $departementRepository,
        protected EdtPlanningRepository        $edtPlanningRepository,
        protected EdtCelcatRepository          $edtCelcatRepository,
        protected GroupeRepository             $groupeRepository,
        protected DiplomeRepository            $diplomeRepository,
        protected ApcReferentielRepository     $apcReferentielRepository,
        protected AbsenceRepository            $absenceRepository,
        protected AnneeUniversitaireRepository $anneeUniversitaireRepository,
        protected CalendrierRepository         $CalendrierRepository,
        protected EventDispatcherInterface     $eventDispatcher,
    )
    {

    }

    public function getCourse(): void
    {
        $diplomes = $this->diplomeRepository->findAllWithEduSign();

        foreach ($diplomes as $diplome) {
            $keyEduSign = $diplome->getKeyEduSign();
            $semestres = $this->semestreRepository->findByDiplome($diplome);
            $today = Carbon::create('today');
//            $today = Carbon::create('2024-10-05');
            $yesterday = Carbon::create('yesterday');
//            $yesterday = Carbon::create('2024-10-04');
            $semaineReelle = date('W');
//            $semaineReelle = 40;

            foreach ($semestres as $semestre) {
                $eventSemaine = $this->CalendrierRepository->findOneBy([
                    'semaineReelle' => $semaineReelle,
                    'anneeUniversitaire' => $semestre->getAnneeUniversitaire()
                ]);
                $semaine = $eventSemaine->getSemaineFormation();
                $matieresSemestre = $this->getMatieresSemestre($semestre);
                $groupes = $this->groupeRepository->findBySemestre($semestre);
                $edt = $this->edtManager->getPlanningSemestreSemaine(
                    $semestre, $semaine, $semestre->getAnneeUniversitaire(), $matieresSemestre, $groupes
                );

                foreach ($edt->evenements as $evenement) {
                    if (!($evenement->matiere === null || $evenement->matiere === "Inconnue" || $evenement->groupeObjet === null || $evenement->personnelObjet === null)) {

                        if ($evenement->dateObjet->isBetween($today, $yesterday)) {
                            $matiere = $this->typeMatiereManager->getMatiere($evenement->getIdMatiere(), $evenement->getTypeMatiere());
                            $id = $evenement->getIdEduSign();

                            if ($id !== null) {
                                $course = $this->apiCours->getCourse($id, $keyEduSign);
                                if ($course !== null) {
                                    if (!empty($course['STUDENTS']) && $course['PROFESSOR_SIGNATURE'] !== "") {
                                        foreach ($course['STUDENTS'] as $student) {
                                            if ($student['state'] === false) {
                                                $this->newAbsence($course, $student, $matiere);
                                            }
                                        }
                                    }
                                } else {
                                    dump('cours non trouvé');
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    public function getMatieresSemestre(Semestre $semestre): array
    {
        $matieres = $this->typeMatiereManager->findBySemestre($semestre);
        $matieresSemestre = [];
        foreach ($matieres as $matiere) {
            if ($matiere->getSemestres()->contains($semestre)) {
                $matieresSemestre[$matiere->getTypeIdMatiere()] = $matiere;
            }
        }
        return $matieresSemestre;
    }

    public function newAbsence(array $course, array $student, Matiere $matiere): void
    {
        $enseignant = $this->personnelRepository->findByIdEdusign($course['PROFESSOR']);
        $etudiant = $this->etudiantRepository->findOneBy(['idEduSign' => $student['studentId']]);

        $startRaw = Carbon::parse($student['start'], 'UTC');
        $startRaw->setTimezone(new DateTimeZone('Europe/Paris'));
        $endRaw = Carbon::parse($student['end']);

        $startFormat = $startRaw->format('Y-m-d H:i:s');
        $endFormat = $endRaw->format('Y-m-d H:i:s');

        $start = Carbon::createFromFormat("Y-m-d H:i:s", $startFormat);
        $end = Carbon::createFromFormat("Y-m-d H:i:s", $endFormat);

        // Vérification si l'absence existe déjà
        $existingAbsence = $this->absenceRepository->findOneBy([
            'etudiant' => $etudiant,
            'dateHeure' => $start,
            'idMatiere' => $matiere->id,
        ]);

        if ($existingAbsence) {
            // Absence déjà existante, on ne fait rien
            return;
        }

        $dureeSecs = $endRaw->diffInSeconds($startRaw);
        $refDate = new DateTime('2023-01-01 00:00:00');
        $dureeSecs = abs($dureeSecs);
        $refDate->add(new DateInterval('PT' . $dureeSecs . 'S'));
        $dureeFormat = $refDate->format('Y-m-d H:i:s.u');
        $duree = Carbon::createFromFormat("Y-m-d H:i:s.u", $dureeFormat);

        $newAbsence = new Absence();
        $newAbsence->setPersonnel($enseignant);
        $newAbsence->setEtudiant($etudiant);
        $newAbsence->setAnneeUniversitaire($this->anneeUniversitaireRepository->findOneBy(['active' => true]));
        $newAbsence->setDuree($duree);
        $newAbsence->setJustifie(false);
        $newAbsence->setDateHeure($start);
        $newAbsence->setTypeMatiere($matiere->typeMatiere);
        $newAbsence->setIdMatiere($matiere->id);
        $newAbsence->setSemestre($etudiant->getSemestre());
        $newAbsence->setIdEduSign($student['_id']);

        $this->absenceRepository->save($newAbsence);
        dump('absence enregistrée');

        $event = new AbsenceEvent($newAbsence);
        $this->eventDispatcher->dispatch($event, AbsenceEvent::ADDED);
    }
}

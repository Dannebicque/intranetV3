<?php

namespace App\Classes\EduSign;

use App\Classes\Edt\EdtManager;
use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\Absence;
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

class GetCourses
{

    public function __construct(
        private readonly ApiEduSign            $apiEduSign,
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
    )
    {
    }

    public function getCourse()
    {
        $diplomes = $this->diplomeRepository->findAllWithEduSign();

        foreach ($diplomes as $diplome) {

            $cleApi = $diplome->getKeyEduSign();

            $semestres = $this->semestreRepository->findByDiplome($diplome);
            foreach ($semestres as $semestre) {

                $today = Carbon::create('today');

                $yesterday = Carbon::create('yesterday');

                $semaineReelle = date('W');

                $eventSemaine = $this->CalendrierRepository->findOneBy(['semaineReelle' => $semaineReelle, 'anneeUniversitaire' => $semestre->getAnneeUniversitaire()]);
                $semaine = $eventSemaine->getSemaineFormation();

                $referentiel = $this->apcReferentielRepository->findOneBy(['id' => $semestre->getDiplome()->getReferentiel()]);

                if ($referentiel !== null) {
                    $matieres = $this->typeMatiereManager->findByReferentielOrdreSemestreArray($semestre, $referentiel);
                    $matieresSemestre = [];
                    foreach ($matieres as $matiere) {
                        if ($matiere->getSemestres()->contains($semestre)) {
                            $matieresSemestre[$matiere->getTypeIdMatiere()] = $matiere;
                        }
                    }
                } else {
                    $matieresSemestre = [];
                }

                $groupes = $this->groupeRepository->findBySemestre($semestre);

                $edt = $this->edtManager->getPlanningSemestreSemaine($semestre, $semaine, $semestre->getAnneeUniversitaire(), $matieresSemestre, $groupes);

                foreach ($edt->evenements as $evenement) {
                    if (!($evenement->matiere === null || $evenement->matiere === "Inconnue" || $evenement->groupeObjet === null || $evenement->personnelObjet === null)) {

                        if ($evenement->dateObjet->isBetween($today, $yesterday)) {

                            $id = $evenement->getIdEduSign();

                            if ($id !== null) {
                                $course = $this->apiEduSign->getCourses($id, $cleApi);
                                $this->newAbsence($course);
                            } else {
                                dump('evenement sans id EduSign');
                            }
                        } else {
                            dump('evenement hors d\'échéance');
                        }
                    }
                }
            }
        }
    }

    public function getCourseBetween(string $debut, string $fin): void {
        $diplomes = $this->diplomeRepository->findAllWithEduSign();

        foreach ($diplomes as $diplome) {

            $cleApi = $diplome->getKeyEduSign();

            $semestres = $this->semestreRepository->findByDiplome($diplome);
            foreach ($semestres as $semestre) {

                $debut = Carbon::create($debut);

                $fin = Carbon::create($fin);

                $semaineReelle = date('W');

                $eventSemaine = $this->CalendrierRepository->findOneBy(['semaineReelle' => $semaineReelle, 'anneeUniversitaire' => $semestre->getAnneeUniversitaire()]);
                $semaine = $eventSemaine->getSemaineFormation();

                $referentiel = $this->apcReferentielRepository->findOneBy(['id' => $semestre->getDiplome()->getReferentiel()]);

                if ($referentiel !== null) {
                    $matieres = $this->typeMatiereManager->findByReferentielOrdreSemestreArray($semestre, $referentiel);
                    $matieresSemestre = [];
                    foreach ($matieres as $matiere) {
                        if ($matiere->getSemestres()->contains($semestre)) {
                            $matieresSemestre[$matiere->getTypeIdMatiere()] = $matiere;
                        }
                    }
                } else {
                    $matieresSemestre = [];
                }

                $groupes = $this->groupeRepository->findBySemestre($semestre);

                $edt = $this->edtManager->getPlanningSemestreSemaine($semestre, $semaine, $semestre->getAnneeUniversitaire(), $matieresSemestre, $groupes);

                foreach ($edt->evenements as $evenement) {
                    if (!($evenement->matiere === null || $evenement->matiere === "Inconnue" || $evenement->groupeObjet === null || $evenement->personnelObjet === null)) {

                        if ($evenement->dateObjet->isBetween($debut, $fin)) {

                            $id = $evenement->getIdEduSign();

                            if ($id !== null) {
                                $course = $this->apiEduSign->getCourses($id, $cleApi);
                                $this->newAbsence($course);
                            } else {
                                dump('evenement sans id EduSign');
                            }
                        } else {
                            dump('evenement hors d\'échéance');
                        }
                    }
                }
            }
        }
    }

    public function newAbsence(
        $course,
    )
    {
        $enseignant = $this->personnelRepository->findByIdEdusign($course['PROFESSOR']);

        if (!empty($course['STUDENTS'])) {
            foreach ($course['STUDENTS'] as $student) {
                if ($student['state'] === false) {
                    if ($this->edtPlanningRepository->findOneBy(['idEduSign' => $student['courseId']])) {
                        $cours = $this->edtPlanningRepository->findOneBy(['idEduSign' => $student['courseId']]);
                    } elseif ($this->edtCelcatRepository->findOneBy(['idEduSign' => $student['courseId']])) {
                        $cours = $this->edtCelcatRepository->findOneBy(['idEduSign' => $student['courseId']]);
                    } else {
                        $cours = null;
                    }
                    $absence = $this->absenceRepository->findOneBy(['id_edu_sign' => $student['_id']]);

                    if ($absence === null && $cours !== null) {

                        $etudiant = $this->etudiantRepository->findOneBy(['idEduSign' => $student['studentId']]);

                        $startRaw = Carbon::parse($student['start'], 'UTC');
                        $startRaw->setTimezone(new DateTimeZone('Europe/Paris'));
                        $endRaw = Carbon::parse($student['end']);

                        $startFormat = $startRaw->format('Y-m-d H:i:s');
                        $endFormat = $endRaw->format('Y-m-d H:i:s');

                        $start = Carbon::createFromFormat("Y-m-d H:i:s", $startFormat);
                        $end = Carbon::createFromFormat("Y-m-d H:i:s", $endFormat);

                        $dureeSecs = $endRaw->diffInSeconds($startRaw);

                        $refDate = new DateTime('2023-01-01 00:00:00');

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
                        $newAbsence->setTypeMatiere($cours->getTypeMatiere());
                        $newAbsence->setIdMatiere($cours->getIdMatiere());
                        $newAbsence->setSemestre($etudiant->getSemestre());
                        $newAbsence->setIdEduSign($student['_id']);

                        $this->absenceRepository->save($newAbsence);
                        dump('absence enregistrée');
                    } else {
                        dump('absence déjà enregistrée');
                    }
                }
            }
        }
    }
}
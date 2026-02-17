<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/GetCourses.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/10/2024 12:06
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
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\Mailer\MailerInterface;

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
        private readonly MailerInterface      $mailer
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
            $yesterday = Carbon::create('yesterday');
            $semaineReelle = date('W');

            foreach ($semestres as $semestre) {
                $errors = []; // collecte des erreurs pour cet envoi

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
                            $id = $evenement->getIdEduSign();

                            $result = [];
                            if ($id !== null) {
                                $course = $this->apiCours->getCourse($id, $keyEduSign);
                                if ($course !== null) {
                                    $result['evenement'.$evenement->getId()][] = $course;

                                    // si signature du professeur absente mais il y a des étudiants absents -> signaler
                                    if (!empty($course['STUDENTS']) && (empty($course['PROFESSOR_SIGNATURE']) || $course['PROFESSOR_SIGNATURE'] === null)) {
                                        foreach ($course['STUDENTS'] as $student) {
                                            if (isset($student['state']) && $student['state'] === false) {
                                                $errors[] = sprintf('Evenement %d : cours trouvé mais professeur non signé pour le cours edusign id %s (étudiant %s)', $evenement->getId(), $id, $student['studentId'] ?? 'inconnu');
                                            }
                                        }
                                    }

                                    if (!empty($course['STUDENTS']) && $course['PROFESSOR_SIGNATURE'] !== null && $course['PROFESSOR_SIGNATURE'] !== "") {
                                        foreach ($course['STUDENTS'] as $student) {
                                            if (isset($student['state']) && $student['state'] === false) {
                                                $result['evenement'.$evenement->getId()][] = $student;
                                                $matiere = $this->typeMatiereManager->getMatiere($evenement->getIdMatiere(), $evenement->getTypeMatiere());
                                                if ($matiere !== null) {
                                                    $reason = $this->newAbsence($course, $student, $matiere);
                                                    if ($reason !== null) {
                                                        $errors[] = sprintf('Evenement %d (edusign id %s) - étudiant %s : %s', $evenement->getId(), $id, $student['studentId'] ?? 'inconnu', $reason);
                                                    }
                                                } else {
                                                    $errors[] = sprintf('Evenement %d : matière introuvable (idMatiere=%s, type=%s)', $evenement->getId(), $evenement->getIdMatiere(), $evenement->getTypeMatiere());
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    // cours non trouvé sur edusign
                                    $errors[] = sprintf('Evenement %d : cours edusign id %s non trouvé', $evenement->getId(), $id);
                                }
                            }
                        }
                    }
                }

                // n'envoyer un mail que s'il y a des erreurs à reporter
                if (!empty($errors)) {
                    $email = (new TemplatedEmail())
                        ->from('no-reply@univ-reims.fr')
                        ->to('cyndel.herolt@univ-reims.fr')
                        ->subject('EduSign absences - rapport')
                        ->htmlTemplate('emails/error_report.html.twig')
                        ->context([
                            'errors' => $errors,
                            'diplome' => $diplome->getLibelle(),
                            'type' => 'Initialisation',
                        ]);
                    $this->mailer->send($email);
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

    public function newAbsence(array $course, array $student, Matiere $matiere): ?string
    {
        $enseignant = $this->personnelRepository->findByIdEdusign($course['PROFESSOR']);
        $etudiant = $this->etudiantRepository->findOneBy(['idEduSign' => $student['studentId']]);

        if ($etudiant === null) {
            return sprintf('étudiant introuvable (idEduSign=%s)', $student['studentId'] ?? 'inconnu');
        }

        try {
            $startRaw = Carbon::parse($student['start'], 'UTC');
            $startRaw->setTimezone(new DateTimeZone('Europe/Paris'));
        } catch (\Throwable $e) {
            return sprintf('impossible de parser la date de début (%s) : %s', $student['start'] ?? 'inconnu', $e->getMessage());
        }

        try {
            $endRaw = Carbon::parse($student['end'], 'UTC');
            $endRaw->setTimezone(new DateTimeZone('Europe/Paris'));
        } catch (\Throwable $e) {
            return sprintf('impossible de parser la date de fin (%s) : %s', $student['end'] ?? 'inconnu', $e->getMessage());
        }

        $startFormat = $startRaw->format('Y-m-d H:i:s');
        $endFormat = $endRaw->format('Y-m-d H:i:s');

        $start = Carbon::createFromFormat("Y-m-d H:i:s", $startFormat);

        if ($start === null) {
            return 'date de début invalide après formatage';
        }

        // Vérification si l'absence existe déjà
        $existingAbsence = $this->absenceRepository->findOneBy([
            'etudiant' => $etudiant,
            'dateHeure' => $start,
            'idMatiere' => $matiere->id,
            'typeMatiere' => $matiere->typeMatiere,
        ]);

        if ($existingAbsence) {
            // Absence déjà existante
            return 'absence déjà existante';
        }

        $dureeSecs = $endRaw->diffInSeconds($startRaw);
        $refDate = new DateTime('2023-01-01 00:00:00');
        $dureeSecs = abs($dureeSecs);
        $refDate->add(new DateInterval('PT' . $dureeSecs . 'S'));
        $dureeFormat = $refDate->format('Y-m-d H:i:s.u');
        $duree = Carbon::createFromFormat("Y-m-d H:i:s.u", $dureeFormat);

        $newAbsence = new Absence();
        $newAbsence->setPersonnel($enseignant ?? null);
        $newAbsence->setEtudiant($etudiant);
        $newAbsence->setAnneeUniversitaire($this->anneeUniversitaireRepository->findOneBy(['active' => true]));
        $newAbsence->setDuree($duree ?? null);
        $newAbsence->setJustifie(false);
        $newAbsence->setDateHeure($start);
        $newAbsence->setTypeMatiere($matiere->typeMatiere);
        $newAbsence->setIdMatiere($matiere->id);
        $newAbsence->setSemestre($etudiant->getSemestre());
        $newAbsence->setIdEduSign($student['_id']);

        $this->absenceRepository->save($newAbsence);

        $event = new AbsenceEvent($newAbsence);
        $this->eventDispatcher->dispatch($event, AbsenceEvent::ADDED);

        // null signifie succès
        return null;
    }

    public function getCourseBetween(mixed $debut, mixed $fin)
    {
    }
}

<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/GetCourses.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/01/2026 09:56
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
    protected TypeMatiereManager $typeMatiereManager;
    public function __construct(
        private readonly ApiCours               $apiCours,
        private readonly EdtManager            $edtManager,
        TypeMatiereManager                     $typeMatiereManager,
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
        $this->typeMatiereManager = $typeMatiereManager;

    }

    public function getCoursesToday(): void
    {
        $diplomes = $this->diplomeRepository->findAllWithEduSign();
        $today = Carbon::today()->format('Y-m-d');
        $yesterday = Carbon::yesterday()->format('Y-m-d');

        foreach ($diplomes as $diplome) {
            $keyEduSign = $diplome->getKeyEduSign();
            $source = $diplome->isOptUpdateCelcat() ? 'celcat' : 'intranet';
            $courses = $this->apiCours->getAllCoursesBetween($keyEduSign, $yesterday, $today) ?? [];

            if (empty($courses)) {
                continue;
            }
            $errors = $this->processCourses($courses, $source, $today, $yesterday);

            if (!empty($errors)) {
                $this->sendErrorReport($errors, $diplome->getLibelle(), $source);
            }
        }
    }

    private function processCourses(array $courses, string $source, string $today, string $yesterday): array
    {
        $errors = [];

        foreach ($courses as $course) {
            $evenement = $this->edtManager->findCourse($source, $course['API_ID']);
            if (!$evenement) {
                $errors[] = sprintf('Cours edusign id %s : introuvable dans l\'EDT local', $course['ID'] ?? 'inconnu');
                continue;
            }

            // 1) vérifier signature professeur absente -> signaler
            $this->checkProfessorSignature($course, $evenement, $errors);

            // 2) si le cours est signé, créer les absences pour les étudiants marqués absents
            if (!empty($course['STUDENTS']) && !empty($course['PROFESSOR_SIGNATURE'])) {
                foreach ($course['STUDENTS'] as $student) {
                    if (!(isset($student['state']) && $student['state'] === false)) {
                        continue;
                    }

                    // récupérer la matière depuis l'événement
                    $matiere = $this->typeMatiereManager->getMatiere($evenement->getIdMatiere(), $evenement->getTypeMatiere());
                    if ($matiere === null) {
                        $errors[] = sprintf('Evenement %d : matière introuvable (idMatiere=%s, type=%s)', $evenement->getId(), $evenement->getIdMatiere(), $evenement->getTypeMatiere());
                        continue;
                    }

                    $reason = $this->newAbsence($course, $student, $matiere);
                    if ($reason !== null) {
                        $errors[] = sprintf('Evenement %d (edusign id %s) - étudiant %s : %s', $evenement->getId(), $course['ID'] ?? $course['API_ID'] ?? 'inconnu', $student['studentId'] ?? 'inconnu', $reason);
                    }
                }
            }
        }

        return $errors;
    }

    private function checkProfessorSignature(array $course, $evenement, array &$errors): void
    {
        if (empty($course['STUDENTS']) || !empty($course['PROFESSOR_SIGNATURE'])) {
            return;
        }
        $errors[] = sprintf(
            'Evenement %d : professeur non signé pour le cours edusign id %s (étudiant %s)',
            $evenement->getId(),
            $course['ID'] ?? 'inconnu',
            $student['studentId'] ?? 'inconnu'
        );
    }

    private function sendErrorReport(array $errors, string $diplomeLibelle, string $source): void
    {
        $email = (new TemplatedEmail())
            ->from('no-reply@univ-reims.fr')
            ->to('cyndel.herolt@univ-reims.fr')
            ->subject('EduSign absences - rapport')
            ->htmlTemplate('emails/error_report.html.twig')
            ->context(['errors' => $errors, 'diplome' => $diplomeLibelle, 'type' => $source]);

        dump($email);

        $this->mailer->send($email);
    }

    private function newAbsence(array $course, array $student, Matiere $matiere): ?string
    {
        // retrouver enseignant et étudiant
        $enseignant = $this->personnelRepository->findByIdEdusign($course['PROFESSOR'] ?? null);
        $etudiant = $this->etudiantRepository->findOneBy(['idEduSign' => $student['studentId'] ?? null]);

        if ($etudiant === null) {
            return sprintf('étudiant introuvable (idEduSign=%s)', $student['studentId'] ?? 'inconnu');
        }

        try {
            $startRaw = Carbon::parse($student['start'], 'UTC')->setTimezone(new DateTimeZone('Europe/Paris'));
            $endRaw = Carbon::parse($student['end'], 'UTC')->setTimezone(new DateTimeZone('Europe/Paris'));
        } catch (\Throwable $e) {
            return sprintf('impossible de parser les dates (%s/%s) : %s', $student['start'] ?? 'inconnu', $student['end'] ?? 'inconnu', $e->getMessage());
        }

        $start = Carbon::createFromFormat('Y-m-d H:i:s', $startRaw->format('Y-m-d H:i:s'));
        if ($start === false) {
            return 'date de début invalide après formatage';
        }

        // vérifier existence
        $existing = $this->absenceRepository->findOneBy([
            'etudiant' => $etudiant,
            'dateHeure' => $start,
            'idMatiere' => $matiere->id,
            'typeMatiere' => $matiere->typeMatiere,
        ]);

        if ($existing) {
            return 'absence déjà existante';
        }

        // calcul durée
        $dureeSecs = abs($endRaw->diffInSeconds($startRaw));
        $refDate = new DateTime('2023-01-01 00:00:00');
        $refDate->add(new DateInterval('PT' . $dureeSecs . 'S'));
        $duree = Carbon::createFromFormat('Y-m-d H:i:s.u', $refDate->format('Y-m-d H:i:s.u'));

        // création de l'absence
        $newAbsence = new Absence();
        $newAbsence->setPersonnel($enseignant ?? null);
        $newAbsence->setEtudiant($etudiant);
        $newAbsence->setAnneeUniversitaire($this->anneeUniversitaireRepository->findOneBy(['active' => true]));
        $newAbsence->setDuree($duree ?? null);
        $newAbsence->setJustifie(false);
        $newAbsence->setDateHeure($start);
        $newAbsence->setTypeMatiere($matiere->typeMatiere);
        $newAbsence->setIdMatiere($matiere->id);
        $newAbsence->setSemestre($etudiant->getSemestreActif());
        $newAbsence->setIdEduSign($student['_id'] ?? null);

        $this->absenceRepository->save($newAbsence);

        $event = new AbsenceEvent($newAbsence);
        $this->eventDispatcher->dispatch($event, AbsenceEvent::ADDED);

        return null;
    }
}

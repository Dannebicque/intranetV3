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
use App\Classes\EduSign\Adapter\EduSignEdtCelcatAdapter;
use App\Classes\EduSign\Adapter\EduSignEdtIntranetAdapter;
use App\Classes\EduSign\Api\ApiCours;
use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\Absence;
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
use App\Entity\Constantes;

class GetCourses
{
    public function __construct(
        private ApiCours $apiCours,
        private EdtManager $edtManager,
        private TypeMatiereManager $typeMatiereManager,
        private SemestreRepository $semestreRepository,
        private PersonnelRepository $personnelRepository,
        private EtudiantRepository $etudiantRepository,
        private CreateEnseignant $updateEnseignant,
        private DepartementRepository $departementRepository,
        private EdtPlanningRepository $edtPlanningRepository,
        private EdtCelcatRepository $edtCelcatRepository,
        private GroupeRepository $groupeRepository,
        private DiplomeRepository $diplomeRepository,
        private ApcReferentielRepository $apcReferentielRepository,
        private AbsenceRepository $absenceRepository,
        private AnneeUniversitaireRepository $anneeUniversitaireRepository,
        private CalendrierRepository $CalendrierRepository,
        private EventDispatcherInterface $eventDispatcher,
        private MailerInterface $mailer
    ) {}

    public function getCoursesToday(): void
    {
        $today = Carbon::today()->format('Y-m-d');
        $yesterday = Carbon::yesterday()->format('Y-m-d');

        foreach ($this->diplomeRepository->findAllWithEduSign() as $diplome) {
            $source = $diplome->isOptUpdateCelcat() ? 'celcat' : 'intranet';
            $courses = $this->apiCours->getAllCoursesBetween($diplome->getKeyEduSign(), $yesterday, $today) ?? [];

            if ($courses) {
                $errors = $this->processCourses($courses, $source, $diplome);
                if ($errors) {
                    $this->sendErrorReport($errors, $diplome->getLibelle(), $source);
                }
            }
        }
    }

    private function processCourses(array $courses, string $source, $diplome): array
    {
        $errors = [];

        foreach ($courses as $course) {
            $enseignant = $this->personnelRepository->findByIdEdusign($course['PROFESSOR']);
            if (!$enseignant) {
                $errors[] = sprintf('Cours edusign id %s : professeur introuvable', $course['ID'] ?? 'inconnu');
                continue;
            }

            if(empty($course['API_ID']) || $source === 'intranet') {
                $evenement = $this->getCourse($diplome, $course, $enseignant, $source);
            } else {
                $evenement = $this->edtManager->findCourse($source, $course['API_ID']);
            }

            if (!$evenement) {

                $errors[] = sprintf('Cours edusign id %s : introuvable dans l\'EDT local', $course['API_ID'] ?? 'inconnu');
                continue;
            }

            $this->checkProfessorSignature($course, $evenement, $errors);

            if (!empty($course['STUDENTS']) && !empty($course['PROFESSOR_SIGNATURE'])) {
                foreach ($course['STUDENTS'] as $student) {
                    if (!($student['state'] ?? true)) {
                        $matiere = $this->typeMatiereManager->getMatiere($evenement->getIdMatiere(), $evenement->getTypeMatiere());
                        if ($matiere) {
                            $reason = $this->newAbsence($course, $student, $matiere);
                            if ($reason) {
                                $errors[] = is_array($reason) ? $reason['message'] : $reason;
                            }
                        }
                    }
                }
            }
        }

        return $errors;
    }

    private function getCourse($diplome, $course, $enseignant, $source)
    {
        $date = Carbon::parse($course['START'], 'UTC')->setTimezone(new DateTimeZone('Europe/Paris'))->startOfDay();
        // Retourner des objets Carbon (ou DateTime) plutôt que des chaînes formatées
        $heureDebut = Carbon::parse($course['START'], 'UTC')->setTimezone(new DateTimeZone('Europe/Paris'));
        $heureFin = Carbon::parse($course['END'], 'UTC')->setTimezone(new DateTimeZone('Europe/Paris'));
        $enseignant = $this->personnelRepository->findByIdEdusign($course['PROFESSOR']);
        $groupe = $this->groupeRepository->findOneBy(['idEduSign' => $course['GROUP'] ?? null]);

        if ($source === 'celcat') {
            $evenement = $this->edtCelcatRepository->findOneBy([]);
        } else {
            $dateStr = $date->format('Y-m-d');
            $start = Constantes::TAB_HEURES_INDEX[$heureDebut->format('H:i:s')] ?? 0;
            $end = Constantes::TAB_HEURES_INDEX[$heureFin->format('H:i:s')] ?? 0;
            $salle = $course['CLASSROOM'] ?? null;

            $results = $this->edtPlanningRepository->findByEduSignDatas($dateStr, $start, $end, $salle, $enseignant);
            $evenement = !empty($results) ? $results[0] : null;
        }

        return $evenement;
    }

    private function checkProfessorSignature(array $course, $evenement, array &$errors): void
    {
        if (empty($course['STUDENTS']) || !empty($course['PROFESSOR_SIGNATURE'])) {
            return;
        }
        $errors[] = sprintf('Evenement %d : professeur non signé', $evenement->getId());
    }

    private function sendErrorReport(array $errors, string $diplomeLibelle, string $source): void
    {
        $email = (new TemplatedEmail())
            ->from('no-reply@univ-reims.fr')
            ->to('cyndel.herolt@univ-reims.fr')
            ->subject('EduSign absences - rapport')
            ->htmlTemplate('emails/error_report.html.twig')
            ->context(['errors' => $errors, 'diplome' => $diplomeLibelle, 'type' => $source]);
        $this->mailer->send($email);
    }

    private function newAbsence(array $course, array $student, $matiere): ?array
    {
        $etudiant = $this->etudiantRepository->findOneBy(['idEduSign' => $student['studentId'] ?? null]);
        if (!$etudiant) {
            return ['message' => 'étudiant introuvable'];
        }

        try {
            $start = Carbon::parse($student['start'], 'UTC')->setTimezone(new DateTimeZone('Europe/Paris'));
            $end = Carbon::parse($student['end'], 'UTC')->setTimezone(new DateTimeZone('Europe/Paris'));
        } catch (\Throwable $e) {
            return ['message' => 'impossible de parser les dates'];
        }

        $existing = $this->absenceRepository->findOneBy([
            'etudiant' => $etudiant,
            'dateHeure' => $start,
            'idMatiere' => $matiere->id,
            'typeMatiere' => $matiere->typeMatiere,
        ]);

        if ($existing) {
            return ['message' => 'absence déjà existante : id ' . $existing->getId()];
        }

        $newAbsence = new Absence();
        $newAbsence->setEtudiant($etudiant);
        $newAbsence->setDateHeure($start);
        $newAbsence->setTypeMatiere($matiere->typeMatiere);
        $newAbsence->setIdMatiere($matiere->id);

        try {
            $this->absenceRepository->save($newAbsence);
            $this->eventDispatcher->dispatch(new AbsenceEvent($newAbsence), AbsenceEvent::ADDED);
        } catch (\Throwable $e) {
            return ['message' => sprintf('erreur lors de la sauvegarde de l\'absence : %s', $e->getMessage())];
        }

        return null;
    }
}

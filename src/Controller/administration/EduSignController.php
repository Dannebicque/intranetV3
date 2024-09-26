<?php

namespace App\Controller\administration;

use App\Classes\Edt\EdtManager;
use App\Classes\EduSign\Adapter\IntranetEdtEduSignAdapter;
use App\Classes\EduSign\Api\ApiCours;
use App\Classes\EduSign\CreateEnseignant;
use App\Classes\EduSign\FixCourses;
use App\Classes\EduSign\UpdateEdt;
use App\Classes\EduSign\UpdateEtudiant;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyPagination;
use App\Controller\BaseController;
use App\DTO\EvenementEdt;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use App\Repository\DiplomeRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelDepartementRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SalleRepository;
use App\Repository\SemestreRepository;
use Carbon\Carbon;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\RouterInterface;

#[Route('/administration/edusign')]
class EduSignController extends BaseController
{
    private ?EvenementEdt $evenement;

    public function __construct(
        private PersonnelDepartementRepository $personnelDepartementRepository,
        private DiplomeRepository              $diplomeRepository,
        private PersonnelRepository            $personnelRepository,
        private CreateEnseignant               $createEnseignant,
        private CalendrierRepository           $CalendrierRepository,
        private SemestreRepository             $semestreRepository,
        private GroupeRepository               $groupeRepository,
        private EdtManager                     $edtManager,
        private TypeMatiereManager             $typeMatiereManager,
        private SalleRepository                $salleRepository,
        private ApiCours                       $apiCours,
    )
    {
    }

    #[Route('/', name: 'administration_edusign_index')]
    public function index(Request $request, RouterInterface $router): Response
    {
        $departement = $this->getDepartement();
        $personnelsDepartement = $this->personnelDepartementRepository->findBy(['departement' => $departement]);

        $diplomes = $this->diplomeRepository->findAllWithEduSignDepartement($departement);
        $diplomes = array_combine(array_map(fn($d) => $d->getId(), $diplomes), $diplomes);
        $cours = [];

        $diplome = $this->getSelectedDiplome($request, $diplomes);

        $filteredPersonnelsDepartement = array_filter($personnelsDepartement, fn($p) => empty($p->getPersonnel()->getIdEduSign() ?? []) || !array_key_exists($diplome->getId(), $p->getPersonnel()->getIdEduSign()));

        $semestres = $this->semestreRepository->findByDiplome($diplome);

        // Gestion des semaines
        $currentWeek = $request->query->getInt('semaine', date('W'));
        $start = Carbon::now()->setISODate((int)date('Y'), $currentWeek)->startOfWeek();
        $end = $start->copy()->endOfWeek();

        foreach ($semestres as $semestre) {
            $eventSemaine = $this->CalendrierRepository->findOneBy(['semaineReelle' => $currentWeek, 'anneeUniversitaire' => $semestre->getAnneeUniversitaire()]);
            $semaine = $eventSemaine->getSemaineFormation();
            if (Carbon::today()->isWeekend()) {
                $semaine++;
            }
            $matieresDiplome = $this->getMatieresDiplome($semestre->getDiplome());
            $groupes = $this->groupeRepository->findBySemestre($semestre);
            $groupesSemestres[$semestre->getLibelle()] = array_filter($groupes, fn($groupe) => $semestre->getDiplome()->getApcParcours()?->getGroupes() ?? $this->groupeRepository->findBySemestre($semestre));

            $edt = $this->edtManager->getPlanningSemestreSemaine($semestre, $semaine, $semestre->getAnneeUniversitaire(), $matieresDiplome, $groupes);
            $salles = $this->salleRepository->findAll();

            foreach ($edt->evenements as $this->evenement) {
                if ($this->evenement->dateObjet->isBetween($start, $end)) {
                    $this->evenement->matieresDiplome = $matieresDiplome;
                    $this->evenement->semestresGroupe = $semestre;
                    $this->evenement->groupesSemestre = $groupes;
                    $this->evenement->salles = $salles;
                    $this->evenement->enseignants = $personnelsDepartement;
                    $cours[] = $this->evenement;
                }
            }
        }

        $page = $request->query->getInt('page', 1);
        $pagination = new MyPagination($router);
        $pagination->calculPaginationFromArray(
            $cours,
            [
                'path' => 'administration_edusign_index',
                'args' => ['diplome' => $diplome?->getId(), 'semaine' => $currentWeek]
            ],
            10,
            $page
        );
        $semestres = $this->semestreRepository->findByDepartementActifFc($departement);
        $matieres = $this->typeMatiereManager->findByDepartement($departement);

        return $this->render('administration/edusign/index.html.twig', [
            'departement' => $departement,
            'diplomes' => $diplomes,
            'diplomeSelect' => $diplome,
            'pagination' => $pagination,
            'personnelsDepartement' => $filteredPersonnelsDepartement,
            'semestres' => $semestres,
            'matieres' => $matieres,
            'groupesSemestres' => $groupesSemestres ?? null,
            'cours' => $cours,
            'currentWeek' => $currentWeek
        ]);
    }

    private function getSelectedDiplome(Request $request, array $diplomes): ?Diplome
    {
        if ($request->query->get('diplome')) {
            if (!array_key_exists($request->query->get('diplome'), $diplomes)) {
                return $diplomes[array_key_first($diplomes)] ?? null;
            } else {
                return $this->diplomeRepository->findOneBy(['id' => $request->query->get('diplome')]);
            }
        } else {
            return $diplomes[array_key_first($diplomes)] ?? null;
        }
    }

    public function getMatieresSemestre(Semestre $semestre): array
    {
        $matieres = $this->typeMatiereManager->findBySemestre($semestre);
        $matieresSemestre = [];

        foreach ($matieres as $matiere) {
            if (!is_array($matiere) && $matiere->getSemestres()->contains($semestre)) {
                $matieresSemestre[$matiere->getTypeIdMatiere()] = $matiere;
            } elseif (is_array($matiere)) {
                foreach ($matiere as $m) {
                    if ($m->getSemestres()->contains($semestre)) {
                        $matieresSemestre[$m->getTypeIdMatiere()] = $m;
                    }
                }
            }
        }
        return $matieresSemestre;
    }

    public function getMatieresDiplome(Diplome $diplome): array
    {
        $matieres = $this->typeMatiereManager->findByDiplome($diplome);
        $matieresDiplome = [];

        foreach ($matieres as $matiere) {
            if (!is_array($matiere)) {
                $matieresDiplome[$matiere->getTypeIdMatiere()] = $matiere;
            } else {
                foreach ($matiere as $m) {
                    $matieresDiplome[$m->getTypeIdMatiere()] = $m;
                }
            }
        }
        return $matieresDiplome;
    }

    public function getMatieresDepartement(Departement $departement): array
    {
        $matieres = $this->typeMatiereManager->findByDepartement($departement);
        $matieresDepartement = [];

        foreach ($matieres as $matiere) {
            $matieresDepartement[$matiere->getTypeIdMatiere()] = $matiere;
        }
        return $matieresDepartement;
    }

    #[Route('/update/etudiants/{id}', name: 'app_admin_edu_sign_update_etudiants')]
    public function updateEtudiants(?int $id, UpdateEtudiant $updateEtudiant, MailerInterface $mailer): RedirectResponse
    {
            $diplomesErrors = [];

            $diplome = $this->diplomeRepository->findOneBy(['id' => $id]);
            $changeSemestreResult = $updateEtudiant->changeSemestre($diplome);

            if (!$changeSemestreResult['success']) {
                foreach ($changeSemestreResult['messages'] as $message) {
                    $errors[] = $message;
                }
            }

            if (!empty($errors)) {
                $diplomesErrors[$diplome->getLibelle()] = $errors;
            }

            $email = (new TemplatedEmail())
                ->from('no-reply@univ-reims.fr')
                ->to('cyndel.herolt@univ-reims.fr')
                ->subject('EduSign updateEtudiants - error report')
                ->htmlTemplate('emails/error_report.html.twig')
                ->context(['diplomesErrors' => $diplomesErrors]);
            $mailer->send($email);

            if (!empty($diplomesErrors)) {
                $allErrors = [];
                foreach ($diplomesErrors as $diplome => $errors) {
                    foreach ($errors as $error) {
                        $allErrors[] = "[$diplome] $error";
                    }
                }
                $errorMessage = implode("\n", $allErrors);
                $this->addFlashBag(Constantes::FLASHBAG_ERROR, $errorMessage);
            } else {
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Mise à jour des groupes effectuée avec succès');
            }

        return $this->redirectToRoute('administration_edusign_index');
    }

    #[Route('/create-personnel', name: 'app_admin_edu_sign_create_personnel')]
    public function createPersonnel(Request $request, MailerInterface $mailer): RedirectResponse
    {
        $departement = $this->getDepartement();
        $diplomes = $this->diplomeRepository->findAllWithEduSignDepartement($departement);
        $errors = [];

        foreach ($diplomes as $diplome) {
            $keyEduSign = $diplome->getKeyEduSign();

            foreach ($request->get('personnel') as $personnelId) {
                $personnel = $this->personnelRepository->find($personnelId);
                $result = $this->createEnseignant->update($personnel, $diplome, $keyEduSign);

                if (!$result['success']) {
                    $errors[] = $result['error'];
                }
            }
        }

        $email = (new TemplatedEmail())
            ->from('no-reply@univ-reims.fr')
            ->to('cyndel.herolt@univ-reims.fr')
            ->subject('EduSign createPersonnel - error report')
            ->htmlTemplate('emails/error_report.html.twig')
            ->context(['diplomesErrors' => $errors]);
        $mailer->send($email);

        if (!empty($errors)) {
            $errorMessage = implode("\n", $errors);
            $this->addFlashBag(Constantes::FLASHBAG_ERROR, $errorMessage);
        } else {
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Création des personnels effectuée avec succès');
        }

        return $this->redirectToRoute('administration_edusign_index');
    }

    #[Route('/create-courses/{opt}/{id}', name: 'app_admin_edu_sign_create_courses')]
    public function createCourses(?int $opt, ?int $id, UpdateEdt $updateEdt, FixCourses $fixCourses, MailerInterface $mailer): Response
    {
        $diplome = $this->diplomeRepository->findOneBy(['id' => $id]);

        $errors = [];

        $keyEduSign = $diplome->getKeyEduSign();

        $fixResult = $fixCourses->fixCourse($keyEduSign);
        $updateResult = $updateEdt->update($keyEduSign, $opt);

        if (!$updateResult['success']) {
            $errors[] = $updateResult['messages'];
        }
        if (!$fixResult['success']) {
            $errors[] = $fixResult['messages'];
        }

        if (!empty($errors)) {
            $email = (new TemplatedEmail())
                ->from('no-reply@univ-reims.fr')
                ->to('cyndel.herolt@univ-reims.fr')
                ->subject('EduSign createCourses - error report')
                ->htmlTemplate('emails/error_report.html.twig')
                ->context(['diplomesErrors' => $errors]);
            $mailer->send($email);
        }

        return $this->redirectToRoute('administration_edusign_index');
    }

//    todo: transformer en LiveComponent pour changer les datas des select
    #[Route('/update-course/{source}/{id}/', name: 'app_admin_edu_sign_update_cours')]
    public function updateCourse(int $id, string $source, UpdateEdt $updateEdt, Request $request): Response
    {
        $cours = $this->edtManager->findCourse($source, $id);

        $matiere = $request->query->get('matiere');

        $objmatiere = $this->typeMatiereManager->getMatiereFromSelect($matiere);


        $semestre = $this->semestreRepository->findOneBy(['id' => $request->query->get('semestre')]);

        $groupe = $this->groupeRepository->findOneBy(['id' => $request->query->get('groupe')]);
        if (null != $groupe) {
            $groupeOrdre = $groupe->getOrdre();
            $groupeType = $groupe->getTypeGroupe()->getType()->value;
        }

        $enseignant = $this->personnelRepository->findOneBy(['id' => $request->query->get('personnel')]);

        $salle = $request->query->get('salle');

        // Récupérer les nouvelles valeurs de date et d'heure
//        $date = $request->query->get('date');
//        $heureDebut = $request->query->get('heureDebut');
//        $heureFin = $request->query->get('heureFin');

        //todo: adapter les données de date et d'heure à la structure de l'objet
        $cours = $this->edtManager->updateCourse($cours, $source, $objmatiere, $semestre, $groupe, $groupeOrdre ?? null, $groupeType ?? null, $enseignant, $salle);

        $course = $this->edtManager->getCourseEduSign($source, $cours->getId(), $objmatiere, $groupe);

        if ($course->personnelObjet->getIdEduSign() === null) {
            $this->createEnseignant->update($course->personnelObjet, $course->diplome, $course->diplome->getKeyEduSign());
        }

        $courseEdusign = (new IntranetEdtEduSignAdapter($course))->getCourse();
        $keyEduSign = $cours->getSemestre()->getDiplome()->getKeyEduSign();

        if ($courseEdusign->id_edu_sign == null) {
            $this->apiCours->addCourse($courseEdusign, $keyEduSign);
        } else {
            $this->apiCours->updateCourse($courseEdusign, $keyEduSign);
        }

        return $this->redirectToRoute('administration_edusign_index');
    }
}

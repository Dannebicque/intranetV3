<?php

namespace App\Controller\administration;

use App\Classes\EduSign\CreateEnseignant;
use App\Classes\EduSign\UpdateEtudiant;
use App\Classes\EduSign\UpdateGroupe;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Repository\DepartementRepository;
use App\Repository\DiplomeRepository;
use App\Repository\PersonnelDepartementRepository;
use App\Repository\PersonnelRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administration/edusign')]
class EduSignController extends BaseController
{

    public function __construct(
        private readonly PersonnelDepartementRepository $personnelDepartementRepository,
        private readonly DiplomeRepository              $diplomeRepository,
        private readonly PersonnelRepository            $personnelRepository,
        private readonly CreateEnseignant               $createEnseignant,
    )
    {
    }

    #[Route(path: '/', name: 'administration_edusign_index')]
    public function index(): Response
    {
        $departement = $this->getDepartement();
        $personnelsDepartement = $this->personnelDepartementRepository->findBy(['departement' => $departement]);

        // Filter personnelsDepartement
        $filteredPersonnelsDepartement = array_filter($personnelsDepartement, function ($p) use ($departement) {
            $idEduSignArray = $p->getPersonnel()->getIdEduSign() ?? [];
            return empty($idEduSignArray) || !array_key_exists($departement->getId(), $idEduSignArray);
        });


        return $this->render('administration/edusign/index.html.twig', [
            'departement' => $departement,
            'personnelsDepartement' => $filteredPersonnelsDepartement,
        ]);
    }

    #[\Symfony\Component\Routing\Attribute\Route('/update/etudiants/', name: 'app_admin_edu_sign_update_etudiants')]
    public function updateEtudiants(UpdateEtudiant $updateEtudiant, MailerInterface $mailer): RedirectResponse
    {
        $departement = $this->getDepartement();
        $diplomesErrors = [];

        if (!$departement) {
            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'Département introuvable.');
            return $this->redirectToRoute('app_edu_sign');
        }

        $diplomes = $this->diplomeRepository->findAllWithEduSignDepartement($departement);

        $changeSemestreResult = $updateEtudiant->changeSemestre($diplomes);

        if (!$changeSemestreResult['success']) {
            foreach ($changeSemestreResult['messages'] as $message) {
                $errors[] = $message;
            }
        }

        if (!empty($errors)) {
            $diplomesErrors[$departement->getLibelle()] = $errors;
        }


        $email = (new TemplatedEmail())
            ->from('no-reply@univ-reims.fr')
            ->to('cyndel.herolt@univ-reims.fr')
            ->subject('EduSign updateEtudiants - error report')
            ->htmlTemplate('emails/error_report.html.twig')
            ->context([
                'diplomesErrors' => $diplomesErrors,
            ]);
        $mailer->send($email);

        if (!empty($diplomesErrors)) {
            // Concaténer tous les messages d'erreur en une seule chaîne
            $allErrors = [];
            foreach ($diplomesErrors as $diplome => $errors) {
                foreach ($errors as $error) {
                    $allErrors[] = "[$diplome] $error";
                }
            }
            $errorMessage = implode("\n", $allErrors);

            // Utiliser addFlash pour afficher les erreurs
            $this->addFlashBag(Constantes::FLASHBAG_ERROR, $errorMessage);
        } else {
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Mise à jour des groupes effectuée avec succès');
        }

        return $this->redirectToRoute('administration_edusign_index');
    }

    #[\Symfony\Component\Routing\Attribute\Route('/create-personnel', name: 'app_admin_edu_sign_create_personnel')]
    public function createPersonnel(Request $request, MailerInterface $mailer): RedirectResponse
    {
        $departement = $this->getDepartement();
        $diplomes = $this->diplomeRepository->findAllWithEduSignDepartement($departement);
        $errors = [];

        foreach ($diplomes as $diplome) {
            $keyEduSign = $diplome->getKeyEduSign();

            foreach ($request->get('personnel') as $personnelId) {
                $personnel = $this->personnelRepository->find($personnelId);
                $result = $this->createEnseignant->update($personnel, $departement, $keyEduSign);

                if (!$result['success']) {
                    $errors[] = $result['error'];
                }
            }
        }

        if (!empty($errors)) {
            $email = (new TemplatedEmail())
                ->from('no-reply@univ-reims.fr')
                ->to('cyndel.herolt@univ-reims.fr')
                ->subject('EduSign createPersonnel - error report')
                ->htmlTemplate('emails/error_report.html.twig')
                ->context([
                    'errors' => $errors,
                ]);
            $mailer->send($email);

            $errorMessage = implode("\n", $errors);

            $this->addFlashBag(Constantes::FLASHBAG_ERROR, $errorMessage);
        } else {
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Création des personnels effectuée avec succès');
        }

        return $this->redirectToRoute('administration_edusign_index');
    }
    }
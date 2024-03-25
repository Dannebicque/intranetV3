<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/PrevisionnelController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Controller\administration;

use App\Classes\Hrs\HrsManager;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Previsionnel\PrevisionnelImport;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Classes\Previsionnel\PrevisionnelSynthese;
use App\Controller\BaseController;
use App\DTO\HrsCollection;
use App\DTO\PrevisionnelSynthesePersonnels;
use App\Entity\Constantes;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use App\Enums\TypeHrsEnum;
use App\Exception\AnneeUniversitaireNotFoundException;
use App\Exception\MatiereNotFoundException;
use App\Exception\PersonnelNotFoundException;
use App\Form\ImportPrevisionnelType;
use App\Repository\HrsRepository;
use App\Repository\PersonnelRepository;
use App\Repository\PrevisionnelRepository;
use App\Repository\SemestreRepository;
use App\Repository\TypeHrsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/administration/service-previsionnel')]
class PrevisionnelController extends BaseController
{
    #[Route('/annee/{annee}', name: 'administration_previsionnel_index_old', options: ['expose' => true])]
    /** @deprecated */
    public function index(TypeMatiereManager $typeMatiereManager, ?int $annee = 0): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $this->getDepartement());

        if (0 === $annee) {
            if (null === $this->dataUserSession->getAnneePrevisionnel()) {
                throw new AnneeUniversitaireNotFoundException();
            }
            $annee = $this->dataUserSession->getAnneePrevisionnel();
        }

        return $this->render('administration/previsionnel/index.html.twig', [
            'matieres' => $typeMatiereManager->findByDepartement($this->getDepartement()),
            'annee' => $annee,
        ]);
    }

    #[Route('/matiere/{matiere}/{type}/{annee}', name: 'administration_previsionnel_matiere', options: ['expose' => true])]
    /** @deprecated */
    public function matiere(
        PrevisionnelManager $previsionnelManager,
        TypeMatiereManager $typeMatiereManager,
        PrevisionnelSynthese $previsionnelSynthese,
        int $matiere,
        string $type,
        ?int $annee = 0
    ): Response {
        if (0 === $annee) {
            if (null === $this->dataUserSession->getAnneePrevisionnel()) {
                throw new AnneeUniversitaireNotFoundException();
            }
            $annee = $this->dataUserSession->getAnneePrevisionnel();
        }

        $mat = $typeMatiereManager->getMatiere($matiere, $type);

        // $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $mat->semestre); //todo: gérer avec l'année ?

        $previsionnel = $previsionnelManager->getPrevisionnelMatiere($matiere, $type, $annee);
        $synthese = $previsionnelSynthese->getSyntheseMatiere($previsionnel);

        return $this->render('administration/previsionnel/_matiere.html.twig', [
            'previsionnel' => $previsionnel,
            'synthese' => $synthese,
            'annee' => $annee,
            'matiere' => $mat,
        ]);
    }

    #[Route('/semestre/{semestre}/{annee}', name: 'administration_previsionnel_semestre', options: ['expose' => true])]
    /** @deprecated */
    public function semestre(
        PrevisionnelManager $previsionnelManager,
        PrevisionnelSynthese $previsionnelSynthese,
        Semestre $semestre,
        ?int $annee = 0
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $semestre);
        if (0 === $annee) {
            if (null === $this->dataUserSession->getAnneePrevisionnel()) {
                throw new AnneeUniversitaireNotFoundException();
            }
            $annee = $this->dataUserSession->getAnneePrevisionnel();
        }

        $previsionnel = $previsionnelManager->getPrevisionnelSemestre($semestre, $annee);
        $synthese = $previsionnelSynthese->getSyntheseSemestre($previsionnel);

        return $this->render('administration/previsionnel/_semestre.html.twig', [
            'previsionnel' => $previsionnel,
            'annee' => $annee,
            'semestre' => $semestre,
            'synthese' => $synthese,
        ]);
    }

    #[Route('/personnel/{personnel}/{annee}', name: 'administration_previsionnel_personnel', options: ['expose' => true])]
    /** @deprecated */
    public function personnel(
        PrevisionnelManager $previsionnelManager,
        HrsManager $hrsManager,
        PrevisionnelSynthese $previsionnelSynthese,
        Personnel $personnel,
        ?int $annee = 0
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $this->getDepartement());

        if (0 === $annee) {
            if (null === $this->dataUserSession->getAnneePrevisionnel()) {
                throw new AnneeUniversitaireNotFoundException();
            }
            $annee = $this->dataUserSession->getAnneePrevisionnel();
        }

        $previsionnels = $previsionnelManager->getPrevisionnelPersonnelDepartementAnneeArray($personnel,
            $this->getDepartement(), $annee);
        $hrs = $hrsManager->getHrsPersonnelDepartementAnnee($personnel, $this->getDepartement(), $annee);
        $synthsePrevisionnel = $previsionnelSynthese->getSynthese($previsionnels, $personnel)
            ->getHrsEnseignant($hrs);

        return $this->render('administration/previsionnel/_personnel.html.twig', [
            'synthsePrevisionnel' => $synthsePrevisionnel,
            'previsionnels' => $previsionnels,
            'personnel' => $personnel,
            'hrs' => $hrs,
            'annee' => $annee,
        ]);
    }

    #[Route('/ajax/edit/{id}', name: 'administration_previsionnel_ajax_edit', options: ['expose' => true])]
    /** @deprecated */
    public function edit(
        PrevisionnelManager $previsionnelManager,
        Request $request,
        Previsionnel $previsionnel
    ): JsonResponse {
        $name = $request->request->get('field');
        $value = $request->request->get('value');

        $update = $previsionnelManager->update($previsionnel, $name, $value);

        return $update ? new JsonResponse(true, Response::HTTP_OK) : new JsonResponse(false,
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route('/', name: 'administration_previsionnel_index', methods: ['GET', 'POST'])]
    public function create(): RedirectResponse|Response
    {
        return $this->render('administration/previsionnel/new.html.twig');
    }

    #[Route('/new/charge-step', name: 'administration_previsionnel_load_step', methods: ['GET', 'POST'])]
    public function loadStep(
        PersonnelRepository $personnelRepository,
        TypeMatiereManager $typeMatiereManager,
        Request $request): Response
    {
        $type = $request->query->get('type');

        if ($type === 'matiere') {
            return $this->render('previsionnel/administration/_matiere.html.twig', [
                'matieres' => $typeMatiereManager->findByDepartement($this->getDepartement()),
            ]);
        }

        if ($type === 'enseignant') {
            return $this->render('previsionnel/administration/_enseignant.html.twig', [
                'personnels' => $personnelRepository->findByDepartement($this->getDepartement()),
            ]);
        }

        if ($type === 'semestre') {
            return $this->render('previsionnel/administration/_semestre.html.twig', [
                'semestres' => $this->getDataUserSession()->getSemestres(),
            ]);
        }

        if ($type === 'synthese-personnel') {
            return $this->render('previsionnel/administration/_synthesePersonnel.html.twig');
        }

        if ($type === 'actions') {
            return $this->render('previsionnel/administration/_actions.html.twig');
        }

        return $this->render('_stepError.html.twig');
    }

    #[Route('/new/charge-content-matiere', name: 'administration_previsionnel_charge_content_matiere', methods: ['GET', 'POST'])]
    public function loadContentMatiere(
        PrevisionnelManager $previsionnelManager,
        TypeMatiereManager  $typeMatiereManager,
        Request             $request): Response
    {
        $matiere = $typeMatiereManager->getMatiereFromSelect($request->query->get('matiere'));
        $annee = $request->query->get('annee');

        if ($matiere === null) {
            return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        //récupérer le prévisionnel déjà existant matière/année
        $previsionnel = $previsionnelManager->getPrevisionnelMatiere($matiere->id, $matiere->typeMatiere, $annee);

        return $this->render('previsionnel/administration/_matiere_content.html.twig', [
            'matiere' => $matiere,
            'annee' => $annee,
            'previsionnel' => $previsionnel,
        ]);
    }

    #[Route('/new/charge-content-personnel', name: 'administration_previsionnel_charge_content_personnel', methods: ['GET', 'POST'])]
    public function loadContentPersonnel(
        HrsRepository       $hrsRepository,
        TypeHrsRepository   $typeHrsRepository,
        TypeMatiereManager  $typeMatiereManager,
        PrevisionnelManager $previsionnelManager,
        PersonnelRepository $personnelRepository,
        Request             $request): Response
    {
        $personnel = $personnelRepository->find($request->query->get('personnel'));
        $annee = $request->query->get('annee');

        if ($personnel === null) {
            return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        //récupérer le prévisionnel déjà existant matière/année
        $previsionnel = $previsionnelManager->getPrevisionnelPersonnelDepartementAnneeCollection($personnel, $this->getDepartement(), $annee);

        $hrs = $hrsRepository->getPersonnelDepartementAnnee($personnel, $this->getDepartement(), $annee);
        $hrsCollection = new HrsCollection();
        foreach ($hrs as $hr) {
            $hrsCollection->addHrs($hr);
        }

        return $this->render('previsionnel/administration/_personnel_content.html.twig', [
            'personnel' => $personnel,
            'matieres' => $typeMatiereManager->findByDepartement($this->getDepartement()),
            'annee' => $annee,
            'previsionnel' => $previsionnel,
            'primes' => $hrsCollection,
            'typesHrs' => $typeHrsRepository->findAll(),
            'categorieHrs' => TypeHrsEnum::cases()
        ]);
    }

    #[Route('/new/charge-content-semestre', name: 'administration_previsionnel_charge_content_semestre', methods: ['GET', 'POST'])]
    public function loadContentSemestre(
        SemestreRepository  $semestreRepository,
        TypeMatiereManager  $typeMatiereManager,
        PrevisionnelManager $previsionnelManager,
        PersonnelRepository $personnelRepository,
        Request             $request): Response
    {
        $semestre = $semestreRepository->find($request->query->get('semestre'));
        $annee = $request->query->get('annee');

        if ($semestre === null) {
            return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        //récupérer le prévisionnel déjà existant matière/année
        $previsionnel = $previsionnelManager->getPrevisionnelSemestreCollection($semestre, $annee);

        return $this->render('previsionnel/administration/_semestre_content.html.twig', [
            'semestre' => $semestre,
            'matieres' => $typeMatiereManager->findBySemestre($semestre),
            'annee' => $annee,
            'previsionnel' => $previsionnel,
            'personnels' => $personnelRepository->findByDepartement($this->getDepartement()),
        ]);
    }

    #[Route('/new/charge-content-synthese-personnel', name: 'administration_previsionnel_charge_content_synthese_personnel', methods: ['GET', 'POST'])]
    public function loadContentSynthesePersonnel(
        PrevisionnelManager $previsionnelManager,
        Request             $request): Response
    {
        $annee = $request->query->get('annee');

        //récupérer le prévisionnel déjà existant matière/année
        $previsionnel = $previsionnelManager->getPrevisionnelDepartement($this->getDepartement(), $annee);

        $synthesePrevisionnel = new PrevisionnelSynthesePersonnels();
        foreach ($previsionnel as $previsionnelPersonnel) {
            $synthesePrevisionnel->addPrevisionnelPersonnel($previsionnelPersonnel);
        }

        return $this->render('previsionnel/administration/_synthesePersonnel_content.html.twig', [
            'annee' => $annee,
            'previsionnel' => $previsionnel,
            'synthesePrevisionnel' => $synthesePrevisionnel
        ]);
    }

    #[Route('/new/ajax/add-enseignant', name: 'administration_previsionnel_add_enseignant', methods: ['POST'])]
    public function addEnseignant(
        EntityManagerInterface $entityManager,
        PersonnelRepository    $personnelRepository,
        TypeMatiereManager     $typeMatiereManager,
        Request                $request): Response
    {
        $personnel = $personnelRepository->find($request->request->get('intervenant'));
        $matiere = $typeMatiereManager->getMatiereFromSelect($request->request->get('matiere'));
        $annee = $request->request->get('annee');

        if ($personnel === null) {
            throw new PersonnelNotFoundException();
        }

        if ($matiere === null) {
            throw new MatiereNotFoundException();
        }

        $previsionnel = new Previsionnel($annee, $personnel);
        $previsionnel->setTypeMatiere($matiere->typeMatiere);
        $previsionnel->setIdMatiere($matiere->id);

        $entityManager->persist($previsionnel);
        $entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }

    #[Route('/new/ajax/add-matiere', name: 'administration_previsionnel_add_matiere', methods: ['POST'])]
    public function addMatiere(
        EntityManagerInterface $entityManager,
        PersonnelRepository    $personnelRepository,
        TypeMatiereManager     $typeMatiereManager,
        Request                $request): Response
    {
        //todo: reprendre et finaliser nouveau prévisionnel. Reporter sur affichage prof application
//        $personnel = $personnelRepository->find($request->request->get('intervenant'));
//        $matiere = $typeMatiereManager->getMatiereFromSelect($request->request->get('matiere'));
//        $annee = $request->request->get('annee');
//
//        if ($personnel === null) {
//            throw new PersonnelNotFoundException();
//        }
//
//        if ($matiere === null) {
//            throw new MatiereNotFoundException();
//        }
//
//        $previsionnel = new Previsionnel($annee, $personnel);
//        $previsionnel->setTypeMatiere($matiere->typeMatiere);
//        $previsionnel->setIdMatiere($matiere->id);
//
//        $entityManager->persist($previsionnel);
//        $entityManager->flush();
//
//        return new JsonResponse(true, Response::HTTP_OK);
    }

    #[Route('/new/ajax/change-intervenant/{id}', name: 'administration_previsionnel_change_intervenant', methods: ['POST'])]
    public function changeIntervenant(
        EntityManagerInterface $entityManager,
        PersonnelRepository    $personnelRepository,
        Previsionnel           $previsionnel,
        Request                $request): Response
    {
        if ($request->request->get('valeur') === '') {
            $previsionnel->setPersonnel(null);
        } else {
            $personnel = $personnelRepository->find($request->request->get('valeur'));

            if ($personnel === null) {
                throw new PersonnelNotFoundException();
            }
            $previsionnel->setPersonnel($personnel);
        }
        $entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }

    #[Route('/new/ajax/change-matiere/{id}', name: 'administration_previsionnel_change_matiere', methods: ['POST'])]
    public function changeMatiere(
        EntityManagerInterface $entityManager,
        PersonnelRepository    $personnelRepository,
        Previsionnel           $previsionnel,
        Request                $request): Response
    {
        if ($request->request->get('valeur') === '') {
            $previsionnel->setPersonnel(null);
        } else {
            $personnel = $personnelRepository->find($request->request->get('valeur'));

            if ($personnel === null) {
                throw new PersonnelNotFoundException();
            }
            $previsionnel->setPersonnel($personnel);
        }
        $entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }

    #[Route('/new/ajax/change-data/{id}', name: 'administration_previsionnel_change_data', methods: ['POST'])]
    public function changeData(
        EntityManagerInterface $entityManager,
        Previsionnel           $previsionnel,
        Request                $request): Response
    {
        switch ($request->request->get('field')) {
            case 'nbGrCm':
                $previsionnel->setNbGrCm($request->request->get('valeur'));
                break;
            case 'nbHCm':
                $previsionnel->setNbHCm($request->request->get('valeur'));
                break;
            case 'nbGrTd':
                $previsionnel->setNbGrTd($request->request->get('valeur'));
                break;
            case 'nbHTd':
                $previsionnel->setNbHTd($request->request->get('valeur'));
                break;
            case 'nbGrTp':
                $previsionnel->setNbGrTp($request->request->get('valeur'));
                break;
            case 'nbHTp':
                $previsionnel->setNbHTp($request->request->get('valeur'));
                break;
            default:
                throw new Exception();
        }

        $entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }


    /**
     * @throws Exception
     */
    #[Route('/import', name: 'administration_previsionnel_import', methods: ['GET', 'POST'])]
    public function import(PrevisionnelImport $myPrevisionnel, Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $this->getDepartement());

        $form = $this->createForm(
            ImportPrevisionnelType::class,
            null,
            [
                'departement' => $this->getDepartement(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]
        );

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $myPrevisionnel->importCsv($form->getData());
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.import.success.flash');
        }

        return $this->render('administration/previsionnel/import.html.twig', [
            'form' => $form,
        ]);
    }

    #[Route('/dupliquer-annee-complete', name: 'administration_previsionnel_duplicate_annee', methods: ['POST'])]
    public function duplicateAnnee(
        PersonnelRepository $personnelRepository,
        PrevisionnelManager $previsionnelManager,
        Request $request
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $anneeDepart = $request->request->get('annee_depart');
        $annee_destination = $request->request->get('annee_destination');
        $annee_concerver = $request->request->get('annee_concerver');
        $personnels = $personnelRepository->findByDepartement($this->getDepartement());
        $tPersonnels = [];
        foreach ($personnels as $personnel) {
            $tPersonnels[$personnel->getId()] = $personnel;
        }

        $listeAnneesActives = [];
        foreach ($this->getDepartement()?->getDiplomes() as $diplome) {
            foreach ($diplome->getAnnees() as $annee) {
                if (true === $annee->getActif()) {
                    $listeAnneesActives[] = $annee->getId();
                }
            }
        }

        $previsionnelManager->dupliqueAnnee($this->getDepartement(), $anneeDepart, $annee_destination,
            $tPersonnels, $annee_concerver, $listeAnneesActives);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.duplicate_annee.success.flash');

        return $this->redirectToRoute('administration_previsionnel_index', ['annee' => $annee_destination]);
    }

    #[Route('/{id}/dupliquer', name: 'administration_previsionnel_duplicate',
        methods: ['GET'])]
    public function duplicate(Previsionnel $previsionnel): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $newprevisionnel = clone $previsionnel;
        $this->entityManager->persist($newprevisionnel);
        $this->entityManager->flush();
        return new JsonResponse(true, Response::HTTP_OK);
    }

    #[Route('/{id}', name: 'administration_previsionnel_delete', methods: ['DELETE'])]
    public function delete(
        Request $request,
        Previsionnel $previsionnel
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $id = $previsionnel->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($previsionnel);
            $this->entityManager->flush();

            return $this->json(['id' => $id], Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route('/supprimer/annee', name: 'administration_previsionnel_supprimer_annee', methods: ['POST'])]
    public function supprimer(
        PrevisionnelRepository $previsionnelRepository,
        Request $request, PrevisionnelManager $previsionnelManager): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $previsionnels = $previsionnelManager->getPrevisionnelDepartement($this->getDepartement(),
            $request->request->get('annee_supprimer'));

        foreach ($previsionnels as $previsionnel) {
            $p = $previsionnelRepository->find($previsionnel->id);
            $this->entityManager->remove($p);
        }
        $this->entityManager->flush();

        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.delete.success.flash');

        return $this->redirectToRoute('administration_previsionnel_index');
    }
}

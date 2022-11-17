<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/PrevisionnelController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/09/2022 20:29
 */

namespace App\Controller\administration;

use App\Classes\Hrs\HrsManager;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Previsionnel\PrevisionnelImport;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Classes\Previsionnel\PrevisionnelSynthese;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use App\Exception\AnneeUniversitaireNotFoundException;
use App\Form\ImportPrevisionnelType;
use App\Repository\PersonnelRepository;
use App\Repository\PrevisionnelRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administration/service-previsionnel')]
class PrevisionnelController extends BaseController
{
    #[Route('/annee/{annee}', name: 'administration_previsionnel_index', options: ['expose' => true])]
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

        $previsionnels = $previsionnelManager->getPrevisionnelPersonnelDepartementAnnee($personnel,
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

    #[Route('/new', name: 'administration_previsionnel_new', methods: ['GET', 'POST'])]
    public function create(
        PersonnelRepository $personnelRepository,
        TypeMatiereManager $typeMatiereManager,
        Request $request
    ): RedirectResponse|Response {
        // todo: faire une comparaison avec le prévisionnel max... et mettre des alertes.
        if ($request->isMethod('POST')) {
            $matiere = $typeMatiereManager->getMatiereFromSelect($request->request->get('previsionnel_matiere'));
            // $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $matiere->semestre); //todo: faire avec l'année ?

            $annee = '' !== $request->request->get('previsionnel_annee_previsionnel') ? $request->request->get('previsionnel_annee_previsionnel') : $this->dataUserSession->getAnneePrevisionnel();
            if (null !== $matiere) {
                $nbLignes = $request->request->get('nbLignes');
                for ($i = 1; $i <= $nbLignes; ++$i) {
                    $idPersonnel = $request->request->get('intervenant_' . $i);
                    if (isset($idPersonnel)) {
                        $personnel = $personnelRepository->find($idPersonnel);
                    } else {
                        $personnel = null;
                    }

                    $previsionnel = new Previsionnel($annee, $personnel);
                    $previsionnel->setNbHCm($request->request->get('cm_' . $i));
                    $previsionnel->setNbHTd($request->request->get('td_' . $i));
                    $previsionnel->setNbHTp($request->request->get('tp_' . $i));
                    $previsionnel->setNbGrCm($request->request->get('gr_cm_' . $i));
                    $previsionnel->setNbGrTd($request->request->get('gr_td_' . $i));
                    $previsionnel->setNbGrTp($request->request->get('gr_tp_' . $i));
                    $previsionnel->setIdMatiere($matiere->id);
                    $previsionnel->setTypeMatiere($matiere->typeMatiere);
                    $this->entityManager->persist($previsionnel);
                }
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.add.success.flash');

                return $this->redirectToRoute('administration_previsionnel_new');
            }

            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'previsionnel.add.error.flash');

            return $this->redirectToRoute('administration_previsionnel_new');
        }

        return $this->render('administration/previsionnel/new.html.twig', [
            'matieres' => $typeMatiereManager->findByDepartement($this->getDepartement()),
        ]);
    }

    /**
     * @throws \Exception
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
            'form' => $form->createView(),
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
    public function duplicate(Request $request, Previsionnel $previsionnel): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $newprevisionnel = clone $previsionnel;
        $this->entityManager->persist($newprevisionnel);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.duplicate.success.flash');

        return $this->redirect($request->headers->get('referer'));
    }

    #[Route('/{id}', name: 'administration_previsionnel_delete', methods: ['DELETE'])]
    public function delete(
        Request $request,
        Previsionnel $previsionnel
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $id = $previsionnel->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($previsionnel);
            $this->entityManager->flush();

            return $this->json($id, Response::HTTP_OK);
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

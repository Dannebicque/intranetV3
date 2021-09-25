<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/PrevisionnelController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/09/2021 09:47
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
use App\Form\ImportPrevisionnelType;
use App\Repository\PersonnelRepository;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PrevisionnelController.
 *
 * @Route("/administration/service-previsionnel")
 */
class PrevisionnelController extends BaseController
{
    /**
     * @Route("/annee/{annee}", name="administration_previsionnel_index", options={"expose":true})
     */
    public function index(TypeMatiereManager $typeMatiereManager, int $annee = 0): Response
    {
        if (0 === $annee && null !== $this->dataUserSession->getDepartement()) {
            $annee = $this->dataUserSession->getDepartement()->getOptAnneePrevisionnel();
        }

        return $this->render('administration/previsionnel/index.html.twig', [
            'matieres' => $typeMatiereManager->findByDepartement($this->dataUserSession->getDepartement()),
            'annee' => $annee,
        ]);
    }

    /**
     * @Route("/matiere/{matiere}/{type}/{annee}", name="administration_previsionnel_matiere", options={"expose":true})
     */
    public function matiere(
        PrevisionnelManager $previsionnelManager,
        TypeMatiereManager $typeMatiereManager,
        PrevisionnelSynthese $previsionnelSynthese,
        int $matiere,
        string $type,
        int $annee = 0
    ): Response {
        if (0 === $annee && null !== $this->dataUserSession->getDepartement()) {
            $annee = $this->dataUserSession->getDepartement()->getOptAnneePrevisionnel();
        }
        $mat = $typeMatiereManager->getMatiere($matiere, $type);
        $previsionnel = $previsionnelManager->getPrevisionnelMatiere($matiere, $type, $annee);
        $synthese = $previsionnelSynthese->getSyntheseMatiere($previsionnel);

        return $this->render('administration/previsionnel/_matiere.html.twig', [
            'previsionnel' => $previsionnel,
            'synthese' => $synthese,
            'annee' => $annee,
            'matiere' => $mat,
        ]);
    }

    /**
     * @Route("/semestre/{semestre}/{annee}", name="administration_previsionnel_semestre", options={"expose":true})
     */
    public function semestre(
        PrevisionnelManager $previsionnelManager,
        PrevisionnelSynthese $previsionnelSynthese,
        Semestre $semestre,
        int $annee = 0
    ): Response {
        if (0 === $annee && null !== $this->dataUserSession->getDepartement()) {
            $annee = $this->dataUserSession->getDepartement()->getOptAnneePrevisionnel();
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

    /**
     * @Route("/personnel/{personnel}/{annee}", name="administration_previsionnel_personnel", options={"expose":true})
     */
    public function personnel(
        PrevisionnelManager $previsionnelManager,
        HrsManager $hrsManager,
        PrevisionnelSynthese $previsionnelSynthese,
        Personnel $personnel,
        int $annee = 0
    ): Response {
        if (0 === $annee && null !== $this->dataUserSession->getDepartement()) {
            $annee = $this->dataUserSession->getDepartement()->getOptAnneePrevisionnel();
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

    /**
     * @Route("/ajax/edit/{id}", name="administration_previsionnel_ajax_edit", options={"expose":true})
     */
    public function edit(
        PrevisionnelManager $previsionnelManager,
        Request $request,
        Previsionnel $previsionnel
    ): JsonResponse {
        $name = $request->request->get('field');
        $value = $request->request->get('value');

        $update = $previsionnelManager->update($previsionnel, $name, $value);

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/new", name="administration_previsionnel_new", methods="GET|POST")
     *
     * @return RedirectResponse|Response
     */
    public function create(
        PersonnelRepository $personnelRepository,
        TypeMatiereManager $typeMatiereManager,
        Request $request
    ) {
        //todo: faire une comparaison avec le prévisionnel max... et mettre des alertes.
        if ($request->isMethod('POST')) {
            $matiere = $typeMatiereManager->getMatiereFromSelect($request->request->get('previsionnel_matiere'));

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

            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.add.error.flash');

            return $this->redirectToRoute('administration_previsionnel_new');
        }

        return $this->render('administration/previsionnel/new.html.twig', [
            'matieres' => $typeMatiereManager->findByDepartement($this->dataUserSession->getDepartement()),
        ]);
    }

    /**
     * @Route("/import", name="administration_previsionnel_import", methods="GET|POST")
     *
     * @throws Exception
     */
    public function import(PrevisionnelImport $myPrevisionnel, Request $request): Response
    {
        $form = $this->createForm(
            ImportPrevisionnelType::class,
            null,
            [
                'departement' => $this->dataUserSession->getDepartement(),
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

    /**
     * @Route("/dupliquer-annee-complete", name="administration_previsionnel_duplicate_annee", methods="POST")
     */
    public function duplicateAnnee(
        PersonnelRepository $personnelRepository,
        PrevisionnelManager $previsionnelManager,
        Request $request
    ): Response {
        $anneeDepart = $request->request->get('annee_depart');
        $annee_destination = $request->request->get('annee_destination');
        $annee_concerver = $request->request->get('annee_concerver');
        $personnels = $personnelRepository->findByDepartement($this->dataUserSession->getDepartement());
        $tPersonnels = [];
        foreach ($personnels as $personnel) {
            $tPersonnels[$personnel->getId()] = $personnel;
        }

        $previsionnelManager->dupliqueAnnee($this->dataUserSession->getDepartement(), $anneeDepart, $annee_destination,
            $annee_concerver, $tPersonnels);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.duplicate_annee.success.flash');

        return $this->redirectToRoute('administration_previsionnel_index', ['annee' => $annee_destination]);
    }

    /**
     * @Route("/{id}/dupliquer", name="administration_previsionnel_duplicate",
     *                                 methods="GET")
     */
    public function duplicate(Request $request, Previsionnel $previsionnel): Response
    {
        $newprevisionnel = clone $previsionnel;
        $this->entityManager->persist($newprevisionnel);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.duplicate.success.flash');

        return $this->redirect($request->headers->get('referer'));
    }

    /**
     * @Route("/{id}", name="administration_previsionnel_delete", methods="DELETE")
     */
    public function delete(
        Request $request,
        Previsionnel $previsionnel
    ): Response {
        $id = $previsionnel->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($previsionnel);
            $this->entityManager->flush();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/supprimer/annee", name="administration_previsionnel_supprimer_annee", methods="POST")
     */
    public function supprimer(Request $request, PrevisionnelManager $previsionnelManager): Response
    {
        if ($this->isCsrfTokenValid('supprimer', $request->request->get('_token'))) {
            $previsionnelManager->supprimeAnnee($this->dataUserSession->getDepartement(),
                $request->request->get('annee_supprimer'));
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.delete.success.flash');
        }

        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'previsionnel.delete.error.flash');

        return $this->redirectToRoute('administration_previsionnel_index');
    }
}

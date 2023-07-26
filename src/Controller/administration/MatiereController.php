<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/MatiereController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 09:13
 */

namespace App\Controller\administration;

use App\Classes\Configuration;
use App\Classes\Matieres\MatiereDelete;
use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Entity\Matiere;
use App\Entity\Parcour;
use App\Entity\Ue;
use App\Form\MatiereType;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeRepository;
use App\Repository\MatiereRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administration/matiere')]
class MatiereController extends BaseController
{
    #[Route('/{diplome}', name: 'administration_matiere_index', methods: ['GET'])]
    public function index(Diplome $diplome = null): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $this->getDepartement());

        return $this->render('administration/matiere/index.html.twig',
            [
                'diplomeSelect' => $diplome,
            ]);
    }

    #[Route('/diplome/{diplome}', name: 'administration_matiere_diplome', options: ['expose' => true], methods: ['GET'])]
    public function diplome(
        MatiereRepository $matiereRepository,
        ApcRessourceRepository $apcRessourceRepository,
        ApcSaeRepository $apcSaeRepository,
        Diplome $diplome
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $diplome);

        // feature: A optimiser pour pas dépendre des repository??
        if (true === $diplome->isApc()) {
            if (null === $diplome->getReferentiel()) {
                $this->addFlash('danger', 'Le référentiel n\'est pas défini pour ce diplôme');
            }
            return $this->render('administration/matiere/_tableauApc.html.twig', [
                'diplome' => $diplome,
                'ressources' => $apcRessourceRepository->findByReferentiel($diplome->getReferentiel()),
                'saes' => $apcSaeRepository->findByReferentiel($diplome->getReferentiel()),
            ]);
        }

        return $this->render('administration/matiere/_tableau.html.twig', [
            'diplome' => $diplome,
            'matieres' => $matiereRepository->findByDiplome($diplome),
        ]);
    }

    #[Route('/{diplome}/export.{_format}',
        name: 'administration_matiere_export',
        requirements: ['_format' => 'csv|xlsx|pdf'],
        options: ['expose' => true],
        methods: ['GET'])]
    public function export(
        TypeMatiereManager $typeMatiereManager,
        Diplome $diplome,
        string $_format
    ): ?Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $diplome);

        $matieres = $typeMatiereManager->findByDiplome($diplome);
//        $datas = new DtoSourceIterator($matieres, \App\DTO\Matiere::class, $matieres);
//
//        return $exporter->export($datas, $_format, 'matieres');
        return null;
    }

//    public function export(
//        MyExport $myExport,
//        TypeMatiereManager $typeMatiereManager,
//        Diplome $diplome,
//        string $_format
//    ): Response {
//        $actualites = $typeMatiereManager->findByDiplome($diplome);
//
//        return $myExport->genereFichierGenerique(
//            $_format,
//            $actualites,
//            'matieres',
//            ['matiere', 'matiere_administration'],
//            [
//                'libelle',
//                'codeMatiere',
//                'cmPpn',
//                'tdPpn',
//                'tpPpn',
//                'cmFormation',
//                'tdFormation',
//                'tpFormation',
//                'nbNotes',
//                'coefficient',
//                'suspendu',
//            ]
//        );
//    }

    #[Route('/new/{diplome}/{ue}', name: 'administration_matiere_new', methods: ['GET', 'POST'])]
    public function create(Configuration $configuration, Request $request, Diplome $diplome, Ue $ue = null): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $diplome);

        if (true === (bool) ($configuration->get('MODIFICATION_PPN'))) {
            $matiere = new Matiere();
            $form = $this->createForm(MatiereType::class, $matiere, [
                'diplome' => $diplome,
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->persist($matiere);
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.add.success.flash');

                return $this->redirectToRoute('administration_matiere_index');
            }

            return $this->render('administration/matiere/new.html.twig', [
                'matiere' => $matiere,
                'form' => $form,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route('/{id}/detail', name: 'administration_matiere_show', methods: ['GET'])]
    public function show(Matiere $matiere): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $matiere->getSemestre());

        return $this->render('administration/matiere/show.html.twig', ['matiere' => $matiere]);
    }

    #[Route('/{id}/ajax-edit', name: 'administration_matiere_ajax_edit', options: ['expose' => true], methods: ['POST'])]
    public function ajaxEdit(
        Request $request,
        Matiere $matiere
    ): JsonResponse {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $matiere->getSemestre());

        $name = $request->request->get('field');
        $value = $request->request->get('value');

        $update = $matiere->update($name, $value);
        $this->entityManager->flush();

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route('/{id}/{parcours}/change-parcours', name: 'administration_matiere_change_parcours', options: ['expose' => true], methods: ['POST'])]
    public function changeParcours(
        Matiere $matiere,
        ?Parcour $parcours = null
    ): JsonResponse {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $matiere->getSemestre());

        $matiere->setParcours($parcours);
        $this->entityManager->flush();

        return new JsonResponse('', Response::HTTP_OK);
    }

    #[Route('/{id}/{ue}/change-ue', name: 'administration_matiere_change_ue', options: ['expose' => true], methods: ['POST'])]
    public function changeUe(
        Matiere $matiere,
        ?Ue $ue = null
    ): JsonResponse {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $matiere->getSemestre());

        $matiere->setUe($ue);
        $this->entityManager->flush();

        return new JsonResponse('', Response::HTTP_OK);
    }

    #[Route('/{id}/edit', name: 'administration_matiere_edit', methods: ['GET', 'POST'])]
    public function edit(Configuration $configuration, Request $request, Matiere $matiere): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $matiere->getSemestre());

        if (true === (bool) ($configuration->get('MODIFICATION_PPN'))) {
            $form = $this->createForm(MatiereType::class, $matiere, [
                'diplome' => $matiere->getSemestre()?->getAnnee()?->getDiplome(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.edit.success.flash');

                if (null !== $request->request->get('btn_update')) {
                    return $this->redirectToRoute('administration_matiere_index');
                }
            }

            return $this->render('administration/matiere/edit.html.twig', [
                'matiere' => $matiere,
                'form' => $form,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route('/{id}/duplicate', name: 'administration_matiere_duplicate', methods: ['GET', 'POST'])]
    public function duplicate(Configuration $configuration, Matiere $matiere): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $matiere->getSemestre());
        if (true === (bool) ($configuration->get('MODIFICATION_PPN'))) {
            $newMatiere = clone $matiere;

            $this->entityManager->persist($newMatiere);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.duplicate.success.flash');

            return $this->redirectToRoute('administration_matiere_edit', ['id' => $newMatiere->getId()]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route('/{id}', name: 'administration_matiere_delete', methods: ['DELETE'])]
    public function delete(
        MatiereDelete $matiereDelete,
        Request $request,
        Matiere $matiere
    ): JsonResponse {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $matiere->getSemestre());

        $id = $matiere->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $rep = $matiereDelete->delete($matiere);

            if (true === $rep) {
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.success.error.flash');

                return $this->json($id, Response::HTTP_OK);
            }
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'matiere.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}

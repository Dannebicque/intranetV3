<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/MatiereController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/09/2021 21:57
 */

namespace App\Controller\administration;

use App\Classes\Configuration;
use App\Classes\Exporter\ExporterManager;
use App\Classes\Exporter\SourceIterator\DtoSourceIterator;
use App\Classes\Matieres\MatiereDelete;
use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Entity\Matiere;
use App\Entity\Ue;
use App\Form\MatiereType;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeRepository;
use App\Repository\MatiereRepository;
use App\Utils\Tools;
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
        //feature: A optimiser pour pas dépendre des repository??
        if (null !== $diplome->getTypeDiplome() && true === $diplome->getTypeDiplome()->getApc()) {
            return $this->render('administration/matiere/_tableauApc.html.twig', [
                'diplome' => $diplome,
                'ressources' => $apcRessourceRepository->findByDiplome($diplome),
                'saes' => $apcSaeRepository->findByDiplome($diplome),
            ]);
        }

        return $this->render('administration/matiere/_tableau.html.twig', [
            'diplome' => $diplome,
            'matieres' => $matiereRepository->findByDiplome($diplome),
        ]);
    }

    #[Route('/{diplome}/export.{_format}',
        name: 'administration_matiere_export',
        requirements: ['_format' => ['csv', 'xlsx', 'pdf']],
        options: ['expose' => true],
        methods: ['GET'])]
    public function export(
        ExporterManager $exporter,
        TypeMatiereManager $typeMatiereManager,
        Diplome $diplome,
        $_format
    ): Response {
        $matieres = $typeMatiereManager->findByDiplome($diplome);
        $datas = new DtoSourceIterator($matieres, \App\DTO\Matiere::class, $matieres);

        return $exporter->export($datas, $_format, 'matieres');
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
        if (true === Tools::convertToBool($configuration->get('MODIFICATION_PPN'))) {
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
                if (null !== $request->request->get('btn_update')) {
                    return $this->redirectToRoute('administration_matiere_index');
                }

                return $this->redirectToRoute('administration_matiere_index');
            }

            return $this->render('administration/matiere/new.html.twig', [
                'matiere' => $matiere,
                'form' => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route('/{id}/detail', name: 'administration_matiere_show', methods: ['GET'])]
    public function show(Matiere $matiere): Response
    {
        return $this->render('administration/matiere/show.html.twig', ['matiere' => $matiere]);
    }

    #[Route('/{id}/ajax-edit', name: 'administration_matiere_ajax_edit', options: ['expose' => true], methods: ['POST'])]
    public function ajaxEdit(
        Request $request,
        Matiere $matiere
    ): JsonResponse {
        $name = $request->request->get('field');
        $value = $request->request->get('value');

        $update = $matiere->update($name, $value);
        $this->entityManager->flush();

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route('/{id}/edit', name: 'administration_matiere_edit', methods: ['GET', 'POST'])]
    public function edit(Configuration $configuration, Request $request, Matiere $matiere): Response
    {
        if (true === Tools::convertToBool($configuration->get('MODIFICATION_PPN'))) {
            $form = $this->createForm(MatiereType::class, $matiere, [
                'diplome' => $matiere->getSemestre()->getAnnee()->getDiplome(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.edit.success.flash');

                return $this->redirectToRoute('administration_matiere_index');
            }

            return $this->render('administration/matiere/edit.html.twig', [
                'matiere' => $matiere,
                'form' => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route('/{id}/duplicate', name: 'administration_matiere_duplicate', methods: ['GET', 'POST'])]
    public function duplicate(Configuration $configuration, Matiere $matiere): Response
    {
        if (true === Tools::convertToBool($configuration->get('MODIFICATION_PPN'))) {
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
    ) {
        $id = $matiere->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
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

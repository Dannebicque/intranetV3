<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcApprentissageCritiqueController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/10/2020 09:08

namespace App\Controller\administration\apc;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\ApcApprentissageCritique;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\ApcApprentissageCritiqueType;
use App\Repository\ApcApprentissageCritiqueRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/apc/apprentissage/critique")
 */
class ApcApprentissageCritiqueController extends BaseController
{
    /**
     * @Route("/", name="administration_apc_apprentissage_critique_index", methods={"GET"})
     * @param ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository
     *
     * @return Response
     */
    public function index(ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository): Response
    {
        return $this->render('administration/apc/apc_apprentissage_critique/index.html.twig', [
            'apc_apprentissage_critiques' => $apcApprentissageCritiqueRepository->findAll(),
        ]);
    }

    /**
     * @Route("/{diplome}/export.{_format}", name="administration_apc_apprentissage_critique_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport                           $myExport
     * @param ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository
     * @param Diplome                            $diplome
     * @param                                    $_format
     *
     * @return Response
     */
    public function export(
        MyExport $myExport,
        ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository,
        Diplome $diplome,
        $_format
    ): Response {
        $actualites = $apcApprentissageCritiqueRepository->getByDiplome($diplome);

        return $myExport->genereFichierGenerique(
            $_format,
            $actualites,
            'actualites',
            ['actualite_administration', 'utilisateur'],
            ['titre', 'texte', 'departement' => ['libelle']]
        );
    }

    /**
     * @Route("/new", name="administration_apc_apprentissage_critique_new", methods={"GET","POST"})
     * @param Request $request
     *
     * @return Response
     */
    public function new(Request $request): Response
    {
        $apcApprentissageCritique = new ApcApprentissageCritique();
        $form = $this->createForm(ApcApprentissageCritiqueType::class, $apcApprentissageCritique);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($apcApprentissageCritique);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.apprentissageCritique.create.success.flash');

            return $this->redirectToRoute('administration_apc_apprentissage_critique_index');
        }

        return $this->render('administration/apc/apc_apprentissage_critique/new.html.twig', [
            'apc_apprentissage_critique' => $apcApprentissageCritique,
            'form'                       => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_apc_apprentissage_critique_show", methods={"GET"})
     * @param ApcApprentissageCritique $apcApprentissageCritique
     *
     * @return Response
     */
    public function show(ApcApprentissageCritique $apcApprentissageCritique): Response
    {
        return $this->render('administration/apc/apc_apprentissage_critique/show.html.twig', [
            'apc_apprentissage_critique' => $apcApprentissageCritique,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="administration_apc_apprentissage_critique_edit", methods={"GET","POST"})
     * @param Request                  $request
     * @param ApcApprentissageCritique $apcApprentissageCritique
     *
     * @return Response
     */
    public function edit(Request $request, ApcApprentissageCritique $apcApprentissageCritique): Response
    {
        $form = $this->createForm(ApcApprentissageCritiqueType::class, $apcApprentissageCritique);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.apprentissageCritique.edit.success.flash');

            return $this->redirectToRoute('administration_apc_apprentissage_critique_index');
        }

        return $this->render('administration/apc/apc_apprentissage_critique/edit.html.twig', [
            'apc_apprentissage_critique' => $apcApprentissageCritique,
            'form'                       => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_apc_apprentissage_critique_delete", methods={"DELETE"})
     * @param Request                  $request
     * @param ApcApprentissageCritique $apcApprentissageCritique
     *
     * @return Response
     */
    public function delete(Request $request, ApcApprentissageCritique $apcApprentissageCritique): Response
    {
        if ($this->isCsrfTokenValid('delete' . $apcApprentissageCritique->getId(), $request->request->get('_token'))) {
            $this->entityManager->remove($apcApprentissageCritique);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.apprentissageCritique.delete.success.flash');
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.apprentissageCritique.delete.error.flash');

        return $this->redirectToRoute('administration_apc_apprentissage_critique_index');
    }

    /**
     * @Route("/{id}/duplicate", name="administration_apc_apprentissage_critique_duplicate", methods="GET|POST")
     * @param ApcApprentissageCritique $apcApprentissageCritique
     *
     * @return Response
     */
    public function duplicate(ApcApprentissageCritique $apcApprentissageCritique): Response
    {
        $newApcApprentissageCritique = clone $apcApprentissageCritique;

        $this->entityManager->persist($newApcApprentissageCritique);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apcApprentissageCritique.duplicate.success.flash');

        return $this->redirectToRoute('administration_apc_apprentissage_critique_edit',
            ['id' => $newApcApprentissageCritique->getId()]);
    }
}

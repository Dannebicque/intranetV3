<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Form\GroupeType;
use App\MesClasses\MyExport;
use App\Repository\GroupeRepository;
use App\Repository\ParcourRepository;
use App\Repository\TypeGroupeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class GroupeController
 * @package App\Controller\administration
 * @Route("/administration/groupe")
 */
class GroupeController extends BaseController
{
    /**
     * @Route("/", name="administration_groupe_index")
     */
    public function index(GroupeRepository $groupeRepository): Response
    {
        $groupes = $groupeRepository->findByFormation($this->dataUserSession->getFormation());

        return $this->render('administration/groupe/index.html.twig', [
            'groupes' => $groupes
        ]);
    }

    /**
     * @Route("/refresh/{parent}", name="administration_groupe_refresh", methods="GET", options={"expose"=true})
     */
    public function refreshListe(GroupeRepository $groupeRepository, Groupe $parent)
    {
        if ($parent->getTypeGroupe()!== null) {
            $semestre = $parent->getTypeGroupe()->getSemestre();
            $groupes = $groupeRepository->findBySemestre($semestre);

            return $this->render('administration/groupe/_liste.html.twig', [
                'groupes'  => $groupes,
                'semestre' => $semestre
            ]);
        }
    }

    /**
     * @Route("/new", name="administration_groupe_new", methods="POST", options={"expose"=true})
     * @param Request    $request
     *
     *
     * @return Response
     */
    public function create(TypeGroupeRepository $typeGroupeRepository,
                            ParcourRepository $parcourRepository,
                            GroupeRepository $groupeRepository, Request $request): Response
    {
        $typeGroupe = $typeGroupeRepository->find($request->request->get('type'));
        if ($typeGroupe) {
            $groupe = new Groupe($typeGroupe);
            if (!empty($request->request->get('parent'))) {
                $parent = $groupeRepository->find($request->request->get('parent'));
                if ($parent) {
                    $groupe->setParent($parent);
                }
            }
            /*if (!empty($request->request->get('parcours'))) {
                $parcour = $parcourRepository->find($request->request->get('parent'));
                if ($parcour) {
                    $groupe->set($parcour);
                }
            }*/
            $groupe->setLibelle($request->request->get('libelle'));
            $groupe->setCodeApogee($request->request->get('code'));

            $this->entityManager->persist($groupe);
            $this->entityManager->flush();
            return $this->json(true, Response::HTTP_OK);
        }
        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);

    }

    /**
     * @Route("/{id}", name="administration_groupe_show", methods="GET")
     * @param Groupe $groupe
     * @return Response
     */
    public function show(Groupe $groupe): Response
    {
        return $this->render('administration/groupe/show.html.twig', ['groupe' => $groupe]);
    }

    /**
     * @Route("/{semestre}/export.{_format}", name="administration_groupe_export", methods="GET",
     *                                        requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport         $myExport
     * @param GroupeRepository $groupeRepository
     * @param                  $_format
     *
     * @param Semestre         $semestre
     *
     * @return Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function export(
        MyExport $myExport,
        GroupeRepository $groupeRepository,
        $_format,
        Semestre $semestre
    ): Response {
        $groupes = $groupeRepository->findBySemestre($semestre);
        $response = $myExport->genereFichierGenerique(
            $_format,
            $groupes,
            'groupes',
            ['type_groupe_administration', 'groupe_administration', 'semestre'],
            [
                'libelle',
                'codeApogee',
                'parent'     => ['libelle'],
                'typeGroupe' => ['libelle', 'type', 'codeApogee', 'semestre' => ['libelle']]
            ]
        );

        return $response;
    }

    /**
     * @Route("/{id}/edit", name="administration_groupe_edit", methods="POST", options={"expose"=true})
     * @param Request $request
     * @param Groupe  $groupe
     *
     * @return Response
     */
    public function edit(Request $request, Groupe $groupe): Response
    {
        if ($groupe->getTypeGroupe() !== null && $groupe->getTypeGroupe()->getSemestre() !== null) {
            $form = $this->createForm(
                GroupeType::class,
                $groupe,
                [
                    'semestre' => $groupe->getTypeGroupe()->getSemestre(),
                    'attr'     => [
                        'data-provide' => 'validation'
                    ]
                ]
            );
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'groupe.edit.success.flash');

                return $this->redirectToRoute('administration_groupe_index');
            }

            return $this->render('administration/groupe/edit.html.twig', [
                'groupe' => $groupe,
                'form'   => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}/duplicate", name="administration_groupe_duplicate", methods="GET|POST")
     * @param Groupe $groupe
     *
     * @return Response
     */
    public function duplicate(Groupe $groupe): Response
    {
        $newGroupe = clone $groupe;

        $this->entityManager->persist($newGroupe);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'groupe.duplicate.success.flash');

        return $this->redirectToRoute('administration_groupe_edit', ['id' => $newGroupe->getId()]);
    }

    /**
     * @Route("/{id}", name="administration_groupe_delete", methods="DELETE")
     * @param Request $request
     * @param Groupe  $groupe
     *
     * @return Response
     */
    public function delete(Request $request, Groupe $groupe): Response
    {//todo: tester delete cascade

        $id = $groupe->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($groupe);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'groupe.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'groupe.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}

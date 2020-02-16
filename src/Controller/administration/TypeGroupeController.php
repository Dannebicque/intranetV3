<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/TypeGroupeController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 25/11/2019 06:55

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Form\TypeGroupeType;
use App\Repository\SemestreRepository;
use App\Repository\TypeGroupeRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/type-groupe")
 */
class TypeGroupeController extends BaseController
{
    /**
     * @Route("/new/{semestre}", name="administration_type_groupe_new", methods="POST", options={"expose"=true})
     * @param Request            $request
     *
     * @param Semestre           $semestre
     *
     * @return Response
     */
    public function create(Request $request, Semestre $semestre): Response
    {
        $typeGroupe = new TypeGroupe($semestre);
        $typeGroupe->setLibelle($request->request->get('type_groupe_libelle_' . $semestre->getId()));
        $typeGroupe->setType($request->request->get('type_groupe_type_' . $semestre->getId()));
        if ($request->request->get('type_groupe_defaut_' . $semestre->getId()) === 'true') {
            //tous les autres à faux.
            foreach ($semestre->getTypeGroupes() as $tg) {
                $tg->setDefaut(false);
                $this->entityManager->persist($tg);
            }
            $typeGroupe->setDefaut(true);
        } else {
            $typeGroupe->setDefaut(false);
        }

        $this->entityManager->persist($typeGroupe);
        $this->entityManager->flush();

        return $this->redirectToRoute('administration_groupe_index', ['semestre' => $semestre->getId()]);
    }

    /**
     * @Route("/refresh/{semestre}", name="administration_type_groupe_refresh", methods="GET", options={"expose"=true})
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function refreshListe(Semestre $semestre): Response
    {
        return $this->render('administration/type_groupe/_liste.html.twig', [
            'semestre' => $semestre
        ]);
    }

    /**
     * @param Request              $request
     * @param TypeGroupeRepository $typeGroupeRepository
     * @Route("/ajax/groupe_defaut", name="administration_type_groupe_defaut", methods="POST", options={"expose"=true})
     *
     * @return JsonResponse
     */
    public function typeGroupeDefaut(Request $request, TypeGroupeRepository $typeGroupeRepository): JsonResponse
    {
        $typeGroupe = $typeGroupeRepository->find($request->request->get('typegroupe'));

        if ($typeGroupe) {
            $groupes = $typeGroupeRepository->findBySemestre($typeGroupe->getSemestre());

            /** @var TypeGroupe $groupe */
            foreach ($groupes as $groupe) {
                $groupe->setDefaut(false);
                $this->entityManager->persist($groupe);
            }

            $typeGroupe->setDefaut(true);
            $this->entityManager->persist($typeGroupe);
            $this->entityManager->flush();

            return $this->json(true, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);

    }

    /**
     * @Route("/{id}", name="administration_type_groupe_show", methods="GET")
     * @param TypeGroupe $typeGroupe
     *
     * @return Response
     */
    public function show(TypeGroupe $typeGroupe): Response
    {
        return $this->render('administration/type_groupe/show.html.twig', ['type_groupe' => $typeGroupe]);
    }

    /**
     * @Route("/{id}/edit", name="administration_type_groupe_edit", methods="GET|POST")
     * @param Request    $request
     * @param TypeGroupe $typeGroupe
     *
     * @return Response
     */
    public function edit(Request $request, TypeGroupe $typeGroupe): Response
    {
        $form = $this->createForm(TypeGroupeType::class, $typeGroupe,
            ['departement' => $this->dataUserSession->getDepartement()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if ($typeGroupe->getDefaut() === true) {
                /** @var TypeGroupe $groupe */
                foreach ($typeGroupe->getSemestre()->getTypeGroupes() as $groupe) {
                    $groupe->setDefaut(false);
                    $this->entityManager->persist($groupe);
                }
                $typeGroupe->setDefaut(true);
            }
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_groupe.edit.success.flash');

            return $this->redirectToRoute('administration_groupe_index');
        }

        return $this->render('administration/type_groupe/edit.html.twig', [
            'type_groupe' => $typeGroupe,
            'form'        => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_type_groupe_duplicate", methods="GET|POST")
     * @param TypeGroupe $typeGroupe
     *
     * @return Response
     */
    public function duplicate(TypeGroupe $typeGroupe): Response
    {
        $newGroupe = clone $typeGroupe;

        $this->entityManager->persist($newGroupe);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_groupe.duplicate.success.flash');

        return $this->redirectToRoute('administration_groupe_edit', ['id' => $newGroupe->getId()]);
    }

    /**
     * @Route("/{id}", name="administration_type_groupe_delete", methods="DELETE")
     * @param Request    $request
     * @param TypeGroupe $typeGroupe
     *
     * @return Response
     */
    public function delete(Request $request, TypeGroupe $typeGroupe): Response
    {
        //todo: tester delete cascade et la suppression ds groupes et des étudiants affectés.

        $id = $typeGroupe->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($typeGroupe);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_groupe.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_groupe.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}

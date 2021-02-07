<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/TypeGroupeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/type-de-groupe")
 */
class TypeGroupeController extends BaseController
{
    /**
     * @Route("/liste/{semestre}", name="administration_type_groupe_liste_semestre", methods={"GET"},
     *                             options={"expose":true})
     */
    public function listeSemestre(Semestre $semestre): Response
    {
        $typeGroupes = $semestre->getTypeGroupes();

        return $this->render('administration/type_groupe/_listeSemestre.html.twig', [
            'semestre'    => $semestre,
            'typeGroupes' => $typeGroupes,
        ]);
    }

    /**
     * @Route("/new/{semestre}", name="administration_type_groupe_new", methods={"POST"}, options={"expose":true})
     */
    public function new(Request $request, Semestre $semestre): Response
    {
        $typeGroupe = new TypeGroupe($semestre);
        $typeGroupe->setLibelle($request->request->get('libelle'));
        $typeGroupe->setType($request->request->get('type'));
        'on' === $request->request->get('defaut') ? $typeGroupe->setDefaut(true) : $typeGroupe->setDefaut(false);
        $this->entityManager->persist($typeGroupe);
        $this->entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }

    /**
     * @Route("/ajax/update/{id}", name="administration_type_groupe_ajax_edit", methods={"POST"},
     *                             options={"expose":true})
     */
    public function update(Request $request, TypeGroupe $typeGroupe): ?JsonResponse
    {
        $value = $request->request->get('value');

        $typeGroupe->setLibelle($value);
        $this->entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }

    /**
     * @Route("/ajax/update-type/{typeGroupe}", name="administration_typegroupe_change_type", methods={"POST"},
     *                             options={"expose":true})
     */
    public function updateType(
        Request $request,
        TypeGroupe $typeGroupe
    ): ?JsonResponse {
        $typeGroupe->setType($request->request->get('type'));
        $this->entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }

    /**
     * @Route("/update-defaut/{typegroupe}/{semestre}", name="administration_type_groupe_defaut", methods={"POST"},
     *                                                  options={"expose":true})
     */
    public function updateDefaut(Request $request, TypeGroupe $typegroupe, Semestre $semestre): Response
    {
        if (\in_array($request->request->get('defaut'), ['on', 'true'], true)) {
            foreach ($semestre->getTypeGroupes() as $tg) {
                if ($tg->getId() === $typegroupe->getId()) {
                    $tg->setDefaut(true);
                } else {
                    $tg->setDefaut(false);
                }
            }
        } else {
            $typegroupe->setDefaut(false);
        }
        $this->entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }

    /**
     * @Route("/duplicate/{typegroupe}", name="administration_type_groupe_duplicate", methods={"GET"},
     *                                   options={"expose":true})
     */
    public function duplicate(TypeGroupe $typegroupe): Response
    {
        $newGroupe = clone $typegroupe;
        $newGroupe->setLibelle('Copie_' . $newGroupe->getLibelle());
        $this->entityManager->persist($newGroupe);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_groupe.duplicate.success.flash');

        return new JsonResponse(true, Response::HTTP_OK);
    }

    /**
     * @Route("/supprimer/{id}", name="administration_type_groupe_delete", methods={"DELETE"})
     */
    public function delete(Request $request, TypeGroupe $typeGroupe): Response
    {
        $id = $typeGroupe->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($typeGroupe);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'type_groupe.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'type_groupe.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}

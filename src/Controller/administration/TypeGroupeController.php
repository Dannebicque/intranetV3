<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/TypeGroupeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/10/2021 12:14
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Utils\Tools;
use function in_array;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administration/type-de-groupe')]
class TypeGroupeController extends BaseController
{
    #[Route(path: '/liste/{semestre}', name: 'administration_type_groupe_liste_semestre', options: ['expose' => true], methods: ['GET'])]
    public function listeSemestre(Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);
        $typeGroupes = $semestre->getTypeGroupes();

        return $this->render('administration/type_groupe/_listeSemestre.html.twig', [
            'semestre' => $semestre,
            'typeGroupes' => $typeGroupes,
        ]);
    }

    #[Route(path: '/new/{semestre}', name: 'administration_type_groupe_new', options: ['expose' => true], methods: ['POST'])]
    public function new(Request $request, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);
        $typeGroupe = new TypeGroupe($semestre);
        $typeGroupe->setLibelle($request->request->get('libelle'));
        $typeGroupe->setType($request->request->get('type'));
        $typeGroupe->setDefaut(Tools::convertToBool($request->request->get('defaut')));
        $this->entityManager->persist($typeGroupe);
        $this->entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }

    #[Route(path: '/ajax/update/{id}', name: 'administration_type_groupe_ajax_edit', options: ['expose' => true], methods: ['POST'])]
    public function update(Request $request, TypeGroupe $typeGroupe): ?JsonResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $typeGroupe->getSemestre());
        $value = $request->request->get('value');
        $typeGroupe->setLibelle($value);
        $this->entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }

    #[Route(path: '/ajax/update-type/{typeGroupe}', name: 'administration_typegroupe_change_type', options: ['expose' => true], methods: ['POST'])]
    public function updateType(Request $request, TypeGroupe $typeGroupe): ?JsonResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $typeGroupe->getSemestre());
        $typeGroupe->setType($request->request->get('type'));
        $this->entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }

    #[Route(path: '/update-defaut/{typegroupe}/{semestre}', name: 'administration_type_groupe_defaut', options: ['expose' => true], methods: ['POST'])]
    public function updateDefaut(Request $request, TypeGroupe $typegroupe, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);
        if (in_array($request->request->get('defaut'), ['on', 'true'], true)) {
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

    #[Route(path: '/duplicate/{typegroupe}', name: 'administration_type_groupe_duplicate', options: ['expose' => true], methods: ['GET'])]
    public function duplicate(TypeGroupe $typegroupe): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $typegroupe->getSemestre());
        $newGroupe = clone $typegroupe;
        $newGroupe->setLibelle('Copie_'.$newGroupe->getLibelle());
        $this->entityManager->persist($newGroupe);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_groupe.duplicate.success.flash');

        return new JsonResponse(true, Response::HTTP_OK);
    }

    #[Route(path: '/supprimer/{id}', name: 'administration_type_groupe_delete', methods: ['DELETE'])]
    public function delete(Request $request, TypeGroupe $typeGroupe): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $typeGroupe->getSemestre());
        $id = $typeGroupe->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->request->get('_token'))) {
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

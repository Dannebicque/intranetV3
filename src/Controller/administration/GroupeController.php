<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/GroupeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/10/2022 17:51
 */

namespace App\Controller\administration;

use App\Classes\Groupes\GenereGroupes;
use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Exception\DiplomeNotFoundException;
use App\Form\GroupeType;
use App\Repository\GroupeRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administration/groupe')]
class GroupeController extends BaseController
{
    /**
     * @throws \App\Exception\DiplomeNotFoundException
     */
    #[Route(path: '/{semestre}', name: 'administration_groupe_index', requirements: ['semestre' => '\d+'], methods: ['GET', 'POST'])]
    public function index(Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        return $this->render('administration/groupe/index.html.twig', [
            'semestre' => $semestre,
            'diplome' => $this->getDiplomeFromSemestre($semestre),
        ]);
    }

    #[Route(path: '/generation-automatique/{semestre}', name: 'administration_groupe_semestre_generation_auto', requirements: ['semestre' => '\d+'], methods: ['GET'])]
    public function generationAutomatique(Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);

        return $this->render('administration/groupe/generation-automatique.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    /**
     * @throws \App\Exception\DiplomeNotFoundException
     */
    #[Route(path: '/genere-groupes/{semestre}', name: 'administration_groupe_semestre_genere', requirements: ['semestre' => '\d+'], methods: ['POST'])]
    public function genereGroupes(
        GenereGroupes $genereGroupes,
        Request $request, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);
        $diplome = $this->getDiplomeFromSemestre($semestre);

        $genereGroupes->genereGroupesSemestre(
            $semestre,
            $diplome,
            $request->request->get('appelation'),
            (int) $request->request->get('groupe_cm'),
            (int) $request->request->get('groupe_td'),
            (int) $request->request->get('groupe_tp'),
        );

        return $this->redirectToRoute('administration_groupe_index', [
            'semestre' => $semestre->getId(),
        ]);
    }

    /**
     * @throws \App\Exception\DiplomeNotFoundException
     */
    #[Route(path: '/liste/{semestre}', name: 'administration_groupe_liste_semestre', options: ['expose' => true], methods: ['GET'])]
    public function listeSemestre(
        GroupeRepository $groupeRepository, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);
        $diplome = $this->getDiplomeFromSemestre($semestre);

        if (true === $diplome->isApc()) {
            $groupes = $groupeRepository->findByDiplomeAndOrdreSemestre($diplome, $semestre->getOrdreLmd());
        } else {
            $groupes = $groupeRepository->findBySemestre($semestre);
        }

        $typeGroupes = $semestre->getTypeGroupess();

        if (true === $semestre->getDiplome()?->isApc()) {
            if ($semestre->getOrdreLmd() > 2 || Constantes::APC_TYPE_3 === $semestre->getDiplome()?->getTypeStructure()) {
                $parcours = $semestre->getDiplome()?->getReferentiel()?->getApcParcours();
            } else {
                $parcours = null;
            }
        } else {
            $parcours = $semestre->getParcours();
        }

        return $this->render('administration/groupe/_listeSemestre.html.twig', [
            'semestre' => $semestre,
            'diplome' => $diplome,
            'groupes' => $groupes,
            'typeGroupes' => $typeGroupes,
            'parcours' => $parcours,
        ]);
    }

    /**
     * @throws \JsonException
     */
    #[Route(path: '/{semestre}/export.{_format}', name: 'administration_groupe_export', requirements: ['_format' => 'csv|xlsx|pdf'], options: ['expose' => true], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport,
        GroupeRepository $groupeRepository,
        Semestre $semestre,
        string $_format
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);
        $groupes = $groupeRepository->findBySemestre($semestre);
        $data = $mySerializer->getDataFromSerialization(
            $groupes,
            [
                'libelle',
                'typeGroupe' => ['libelle'],
                'codeApogee',
                'parent' => ['libelle'],
                'ordre',
                'parcours' => ['libelle'],
            ],
            ['groupes_administration'],
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'groupes_'.$semestre->getLibelle(),
        );
    }

    /**
     * @throws \App\Exception\DiplomeNotFoundException
     */
    #[Route(path: '/new/{semestre}', name: 'administration_groupe_new', options: ['expose' => true], methods: [
        'GET',
        'POST',
    ])]
    public function new(Request $request, Semestre $semestre): Response
    {
        $diplome = $this->getDiplomeFromSemestre($semestre);
        $groupe = new Groupe();
        $form = $this->createForm(GroupeType::class, $groupe,
            ['semestre' => $semestre, 'attr' => ['id' => 'form_groupe']]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($groupe);
            $this->entityManager->flush();
            $this->addFlash(Constantes::FLASHBAG_SUCCESS, 'Le groupe a été créé avec succès');

            return new JsonResponse(true, Response::HTTP_OK);
        }

        return $this->render('administration/groupe/_new.html.twig', [
            'groupe' => $groupe,
            'semestre' => $semestre,
            'diplome' => $diplome,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/duplicate/{groupe}', name: 'administration_groupe_duplicate', options: ['expose' => true], methods: ['GET'])]
    public function duplicate(Groupe $groupe): Response
    {
        $newGroupe = clone $groupe;
        $newGroupe->setLibelle('Copie_'.$newGroupe->getLibelle());
        $newGroupe->setCodeApogee('Copie_'.$newGroupe->getCodeApogee());
        $this->entityManager->persist($newGroupe);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'groupe.duplicate.success.flash');

        return new JsonResponse(true, Response::HTTP_OK);
    }

    #[Route(path: '/supprimer/{id}', name: 'administration_groupe_delete', methods: ['DELETE'])]
    public function delete(Request $request, Groupe $groupe): Response
    {
        $id = $groupe->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($groupe);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'groupe.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'groupe.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @throws \App\Exception\DiplomeNotFoundException
     */
    private function getDiplomeFromSemestre(Semestre $semestre): Diplome
    {
        if (null === $semestre->getDiplome()) {
            throw new DiplomeNotFoundException();
        }

        return $semestre->getDiplome()->getParent() ?? $semestre->getDiplome();
    }
}

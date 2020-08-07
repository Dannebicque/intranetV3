<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/GroupeController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/08/2020 12:00

namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Form\GroupeType;
use App\Repository\GroupeRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use PHPUnit\Util\Json;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/groupe")
 */
class GroupeController extends BaseController
{
    /**
     * @Route("/{semestre}", name="administration_groupe_index", methods={"GET"}, requirements={"semestre":"\d+"})
     * @param Semestre|null $semestre
     *
     * @return Response
     */
    public function index(Semestre $semestre = null): Response
    {
        return $this->render('administration/groupe/index.html.twig', [
            'afficheSemestre' => $semestre !== null ? $semestre->getId() : null
        ]);
    }

    /**
     * @Route("/liste/{semestre}", name="administration_groupe_liste_semestre", methods={"GET"},
     *                             options={"expose":true})
     * @param GroupeRepository $groupeRepository
     * @param Semestre         $semestre
     *
     * @return Response
     */
    public function listeSemestre(GroupeRepository $groupeRepository, Semestre $semestre): Response
    {
        $typeGroupes = $semestre->getTypeGroupes();
        $groupes = $groupeRepository->findBySemestre($semestre);
        $parcours = $semestre->getParcours();

        return $this->render('administration/groupe/_listeSemestre.html.twig', [
            'semestre'    => $semestre,
            'groupes'     => $groupes,
            'typeGroupes' => $typeGroupes,
            'parcours'    => $parcours
        ]);
    }

    /**
     * @Route("/{semestre}/export.{_format}", name="administration_groupe_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"}, options={"expose":true})
     * @param MyExport            $myExport
     * @param GroupeRepository    $groupeRepository
     *
     * @param                     $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(MyExport $myExport, GroupeRepository $groupeRepository, $_format): Response
    {
        $groupes = $groupeRepository->getByDepartement($this->dataUserSession->getDepartement());

        return $myExport->genereFichierGenerique(
            $_format,
            $groupes,
            'groupes',
            ['groupes_administration'],
            ['type_groupe' => ['semestre', 'libelle'], 'libelle', 'type']//todo: vérifier
        );
    }

    /**
     * @Route("/new/{semestre}", name="administration_groupe_new", methods={"GET","POST"}, options={"expose":true})
     * @param Request  $request
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function new(Request $request, Semestre $semestre): Response
    {
        $groupe = new Groupe();
        $form = $this->createForm(GroupeType::class, $groupe,
            ['semestre' => $semestre, 'attr' => ['id' => 'form_groupe']]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($groupe);
            $entityManager->flush();

            return new JsonResponse(true, Response::HTTP_OK);
        }

        return $this->render('administration/groupe/_new.html.twig', [
            'groupe'   => $groupe,
            'semestre' => $semestre,
            'form'     => $form->createView(),
        ]);
    }

    /**
     * @Route("/duplicate/{groupe}", name="administration_groupe_duplicate", methods={"GET"}, options={"expose":true})
     * @param Groupe $groupe
     *
     * @return Response
     */
    public function duplicate(Groupe $groupe): Response
    {
        $newGroupe = clone $groupe;
        $newGroupe->setLibelle('Copie_' . $newGroupe->getLibelle());
        $newGroupe->setCodeApogee('Copie_' . $newGroupe->getCodeApogee());
        $this->entityManager->persist($newGroupe);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'groupe.duplicate.success.flash');

        return new JsonResponse(true, Response::HTTP_OK);
    }

    /**
     * @Route("/supprimer/{id}", name="administration_groupe_delete", methods={"DELETE"})
     * @param Request $request
     * @param Groupe  $groupe
     *
     * @return Response
     */
    public function delete(Request $request, Groupe $groupe): Response
    {
        $id = $groupe->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
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
}

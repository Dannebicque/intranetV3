<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcParcoursNiveauController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/01/2021 15:56

namespace App\Controller\administration\apc;

use App\Controller\BaseController;
use App\Entity\ApcParcours;
use App\Entity\ApcParcoursNiveau;
use App\Entity\Constantes;
use App\Form\ApcParcoursNiveauType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/apc/parcours/niveau", name="administration_")
 */
class ApcParcoursNiveauController extends BaseController
{
    /**
     * @Route("/new/{parcours}", name="apc_parcours_niveau_new", methods={"GET","POST"})
     * @param Request     $request
     * @param ApcParcours $parcours
     *
     * @return Response
     */
    public function new(Request $request, ApcParcours $parcours): Response
    {
        $apcParcoursNiveau = new ApcParcoursNiveau($parcours);
        $form = $this->createForm(ApcParcoursNiveauType::class, $apcParcoursNiveau);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($apcParcoursNiveau);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.parcoursNiveau.create.success.flash');

            return $this->redirectToRoute('administration_apc_parcours_show',
                ['id' => $apcParcoursNiveau->getParcours()->getId()]);
        }

        return $this->render('apc/apc_parcours_niveau/new.html.twig', [
            'apc_parcours_niveau' => $apcParcoursNiveau,
            'form'                => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="apc_parcours_niveau_edit", methods={"GET","POST"})
     * @param Request           $request
     * @param ApcParcoursNiveau $apcParcoursNiveau
     *
     * @return Response
     */
    public function edit(Request $request, ApcParcoursNiveau $apcParcoursNiveau): Response
    {
        $form = $this->createForm(ApcParcoursNiveauType::class, $apcParcoursNiveau);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.parcoursNiveau.edit.success.flash');

            return $this->redirectToRoute('administration_apc_parcours_show',
                ['id' => $apcParcoursNiveau->getParcours()->getId()]);
        }

        return $this->render('apc/apc_parcours_niveau/edit.html.twig', [
            'apc_parcours_niveau' => $apcParcoursNiveau,
            'form'                => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="apc_parcours_niveau_delete", methods={"DELETE"})
     * @param Request           $request
     * @param ApcParcoursNiveau $apcParcoursNiveau
     *
     * @return Response
     */
    public function delete(Request $request, ApcParcoursNiveau $apcParcoursNiveau): Response
    {
        $parcour = $apcParcoursNiveau->getParcours();
        if ($this->isCsrfTokenValid('delete' . $apcParcoursNiveau->getId(), $request->request->get('_token'))) {
            $this->entityManager->remove($apcParcoursNiveau);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.parcoursNiveau.delete.success.flash');
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.parcoursNiveau.delete.error.flash');

        return $this->redirectToRoute('administration_apc_parcours_show', ['id' => $parcour->getId()]);
    }
}

<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/UeController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:32 PM
 *  * @lastUpdate 4/28/19 6:23 PM
 *  *
 *
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Form\UeType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/structure/unite-enseignement")
 */
class UeController extends BaseController
{
    /**
     * @Route("/new/{semestre}", name="sa_ue_new", methods="GET|POST")
     * @param Request                $request
     *
     * @param Semestre               $semestre
     *
     * @return Response
     */
    public function create(Request $request, Semestre $semestre): Response
    {
        if ($semestre->getAnnee() !== null) {
            $ue = new Ue($semestre);
            $form = $this->createForm(UeType::class, $ue, [
                'diplome' => $semestre->getAnnee()->getDiplome(),
                'attr'    => [
                    'data-provide' => 'validation'
                ]
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->persist($ue);
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ue.add.success.flash');

                return $this->redirectToRoute(
                    'sa_structure_index',
                    ['departement' => $ue->getSemestre()->getAnnee()->getDiplome()->getDepartement()->getId()]
                );
            }

            return $this->render('structure/ue/new.html.twig', [
                'ue'   => $ue,
                'form' => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}", name="sa_ue_show", methods="GET")
     * @param Ue $ue
     *
     * @return Response
     */
    public function show(Ue $ue): Response
    {
        return $this->render('structure/ue/show.html.twig', ['ue' => $ue]);
    }

    /**
     * @Route("/{id}/edit", name="sa_ue_edit", methods="GET|POST")
     * @param Request                $request
     * @param Ue                     $ue
     *
     * @return Response
     */
    public function edit(Request $request, Ue $ue): Response
    {
        if ($ue->getDiplome() !== null) {
            $form = $this->createForm(UeType::class, $ue, [
                'diplome' => $ue->getDiplome(),
                'attr'    => [
                    'data-provide' => 'validation'
                ]
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ue.edit.success.flash');

                return $this->redirectToRoute(
                    'sa_structure_index',
                    ['departement' => $ue->getDiplome()->getDepartement()->getId()]
                );
            }

            return $this->render('structure/ue/edit.html.twig', [
                'ue'   => $ue,
                'form' => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');

    }

    /**
     * @Route("/{id}/duplicate", name="sa_ue_duplicate", methods="GET|POST")
     * @param Ue                     $ue
     *
     * @return Response
     */
    public function duplicate(Ue $ue): Response
    {
        $newUe = clone $ue;

        $this->entityManager->persist($newUe);
        $this->entityManager->flush();

        return $this->redirectToRoute('sa_ue_edit', ['id' => $newUe->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_ue_delete", methods="DELETE")
     * @param Request $request
     * @param Ue      $ue
     *
     * @return Response
     */
    public function delete(Request $request, Ue $ue): Response
    {
        $id = $ue->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            if (count($ue->getMatieres()) === 0) {
                $this->entityManager->remove($ue);
                $this->entityManager->flush();
                $this->addFlashBag(
                    Constantes::FLASHBAG_SUCCESS,
                    'ue.delete.success.flash'
                );

                return $this->json($id, Response::HTTP_OK);
            }

            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'ue.delete.error.non-vide.flash');

            return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'diplome.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @param Ue   $ue
     * @param bool $etat
     *
     * @return RedirectResponse
     * @Route("/activate/{ue}/{etat}", methods={"GET"}, name="sa_ue_activate")
     * @IsGranted("ROLE_SUPER_ADMIN")
     *
     */
    public function activate(Ue $ue, bool $etat): RedirectResponse
    {
        $ue->setActif($etat);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ue.activate.' . $etat . '.flash');

        return $this->redirectToRoute('super_admin_homepage');

    }
}

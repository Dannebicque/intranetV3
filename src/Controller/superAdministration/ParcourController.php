<?php

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Parcour;
use App\Entity\Semestre;
use App\Form\ParcourType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/structure/parcours")
 */
class ParcourController extends BaseController
{
    /**
     * @Route("/new/{semestre}", name="sa_parcour_new", methods="GET|POST")
     * @param Request  $request
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function create(Request $request, Semestre $semestre): Response
    {
        if ($semestre->getAnnee() !== null) {
            $parcour = new Parcour($semestre);

            $form = $this->createForm(ParcourType::class, $parcour, [
                'diplome' => $semestre->getAnnee()->getDiplome(),
                'attr'    => [
                    'data-provide' => 'validation'
                ]
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($parcour);
                $em->flush();

                return $this->redirectToRoute('sa_structure_index',
                    ['formation' => $parcour->getDiplome()->getFormation()->getId()]);
            }

            return $this->render('structure/parcour/new.html.twig', [
                'parcour' => $parcour,
                'form'    => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}", name="sa_parcour_show", methods="GET")
     */
    public function show(Parcour $parcour): Response
    {
        return $this->render('structure/parcour/show.html.twig', ['parcour' => $parcour]);
    }

    /**
     * @Route("/{id}/edit", name="sa_parcour_edit", methods="GET|POST")
     */
    public function edit(Request $request, Parcour $parcour): Response
    {
        if ($parcour->getDiplome() !== null) {
            $form = $this->createForm(ParcourType::class, $parcour, [
                'diplome' => $parcour->getDiplome(),
                'attr'    => [
                    'data-provide' => 'validation'
                ]
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->getDoctrine()->getManager()->flush();

                return $this->redirectToRoute('sa_parcour_edit', ['id' => $parcour->getId()]);
            }

            return $this->render('structure/parcour/edit.html.twig', [
                'parcour' => $parcour,
                'form'    => $form->createView(),
            ]);
        }

        return $this->render('erreur/404.html.twig');
    }

    /**
     * @Route("/{id}/duplicate", name="sa_parcour_duplicate", methods="GET|POST")
     * @param Parcour $parcour
     *
     * @return Response
     */
    public function duplicate(Parcour $parcour): Response
    {
        $newParcour = clone $parcour;

        $this->entityManager->persist($newParcour);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'parcour.duplicate.success.flash');

        return $this->redirectToRoute('sa_parcour_edit', ['id' => $newParcour->getId()]);
    }

    /**
     * @Route("/{id}", name="sa_parcour_delete", methods="DELETE")
     * @param Parcour $id
     */
    public function delete(Parcour $id): void
    {
    }
}

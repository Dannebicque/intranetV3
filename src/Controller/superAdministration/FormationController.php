<?php

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Formation;
use App\Form\FormationType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/structure/formation")
 */
class FormationController extends BaseController
{
    /**
     * @Route("/new", name="sa_formation_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Exception
     */
    public function create(Request $request): Response
    {
        $formation = new Formation();
        $form = $this->createForm(FormationType::class, $formation, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($formation);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'formation.add.success.flash');

            return $this->redirectToRoute('super_admin_homepage');
        }

        return $this->render('structure/formation/new.html.twig', [
            'formation' => $formation,
            'form'      => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_formation_show", methods="GET")
     * @param Formation $formation
     *
     * @return Response
     */
    public function show(Formation $formation): Response
    {
        return $this->render('structure/formation/show.html.twig', ['formation' => $formation]);
    }

    /**
     * @Route("/{id}/edit", name="sa_formation_edit", methods="GET|POST")
     * @param Request                $request
     * @param Formation              $formation
     *
     * @return Response
     */
    public function edit(Request $request, Formation $formation): Response
    {
        $form = $this->createForm(FormationType::class, $formation, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'formation.edit.success.flash');

            return $this->redirectToRoute('super_admin_homepage');
        }

        return $this->render('structure/formation/new.html.twig', [
            'formation' => $formation,
            'form'      => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_formation_delete", methods="DELETE")
     */
    public function delete(): void
    {
    }

    /**
     * @param Formation $formation
     * @param bool      $etat
     * @Route("/activate/{formation}/{etat}", methods={"GET"}, name="sa_formation_activate")
     * @IsGranted("ROLE_SUPER_ADMIN")
     *
     * @return RedirectResponse
     */
    public function activate(Formation $formation, bool $etat): RedirectResponse
    {
        $formation->setActif($etat);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'formation.activate.'.$etat.'.flash');

        return $this->redirectToRoute('super_admin_homepage');

    }
}

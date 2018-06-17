<?php

namespace App\Controller\superAdministration;

use App\Entity\Personnel;
use App\Form\PersonnelType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class RhController extends BaseController
{
    /**
     * @Route("/rh", name="sa_rh_index")
     */
    public function index()
    {
        return $this->render('super-administration/rh/index.html.twig', [
            'controller_name' => 'ScolariteController',
        ]);
    }

    /**
     * @Route("/create", name="sa_rh_add_personnel", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function create(EntityManagerInterface $entityManager, Request $request): Response
    {
        $personnel = new Personnel();
        $form = $this->createForm(PersonnelType::class, $personnel);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $personnel->setRoles(['ROLE_PERMANENT']);
            $personnel->setTypeUser('permanent');
            $entityManager->persist($personnel);
            $entityManager->flush();

            return $this->redirectToRoute('sa_rh_index');
        }

        return $this->render('super-administration/rh/new.html.twig', [
            'personnel' => $personnel,
            'form'      => $form->createView(),
        ]);
    }
}

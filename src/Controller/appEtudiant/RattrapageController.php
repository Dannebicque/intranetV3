<?php

namespace App\Controller\appEtudiant;

use App\Entity\Rattrapage;
use App\Form\RattrapageType;
use App\Repository\RattrapageRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class RattrapageController
 * @package App\Controller\appEtudiant
 * todo: role étudiant
 */
class RattrapageController extends Controller
{
    /**
     * @Route("/rattrapage", name="application_etudiant_rattrapage_index")
     */
    public function index(RattrapageRepository $rattrapageRepository, Request $request)
    {
        $rattrapage = new Rattrapage($this->getUser());
        $form = $this->createForm(RattrapageType::class, $rattrapage,
            [
                'semestre' => $this->getUser()->getSemestre(),
                'action'   => $this->generateUrl('application_etudiant_rattrapage_index')
            ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($rattrapage);
            $em->flush();

            return $this->redirectToRoute('application_index', ['onglet' => 'rattrapage']);
        }

        return $this->render('appEtudiant/rattrapage/index.html.twig', [
            'form'        => $form->createView(),
            'rattrapages' => $rattrapageRepository->findByEtudiant($this->getUser())
        ]);
    }
}

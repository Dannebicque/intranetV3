<?php

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Rattrapage;
use App\Form\RattrapageType;
use App\Repository\RattrapageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RattrapageController
 * @package App\Controller\appEtudiant
 * todo: role étudiant
 */
class RattrapageController extends BaseController
{
    /**
     * @Route("/rattrapage", name="application_etudiant_rattrapage_index")
     * @param EntityManagerInterface $entityManager
     * @param RattrapageRepository   $rattrapageRepository
     * @param Request                $request
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function index(
        EntityManagerInterface $entityManager,
        RattrapageRepository $rattrapageRepository,
        Request $request
    ) {
        $rattrapage = new Rattrapage($this->getUser());
        $form = $this->createForm(RattrapageType::class, $rattrapage,
            [
                'semestre' => $this->getUser()->getSemestre(),
                'action'   => $this->generateUrl('application_etudiant_rattrapage_index')
            ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($rattrapage);
            $entityManager->flush();

            return $this->redirectToRoute('application_index', ['onglet' => 'rattrapage']);
        }

        return $this->render('appEtudiant/rattrapage/index.html.twig', [
            'form'        => $form->createView(),
            'rattrapages' => $rattrapageRepository->findByEtudiant($this->getUser())
        ]);
    }
}

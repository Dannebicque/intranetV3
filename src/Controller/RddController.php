<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/RddController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/12/2020 14:42

namespace App\Controller;

use App\Classes\Tools;
use App\Form\RddType;
use App\Repository\EtudiantRepository;
use App\Repository\RddDiplomeRepository;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RddController
 * @package App\Controller
 * @Route("rdd", name="rdd_")
 */
class RddController extends AbstractController
{
    /**
     * Creates a new candidatureAlternance entity.
     *
     * @Route("/", name="identification")
     * @param Request              $request
     *
     * @param EtudiantRepository   $etudiantRepository
     * @param RddDiplomeRepository $rddDiplomeRepository
     *
     * @return Response
     * @throws Exception
     */
    public function identification(
        Request $request,
        EtudiantRepository $etudiantRepository,
        RddDiplomeRepository $rddDiplomeRepository
    ) {
        if ($request->getMethod() === 'POST') {
            $jour = $request->request->get('jour') < 10 ? '0' . $request->request->get('jour') : $request->request->get('jour');
            $date = Tools::convertDateToObject($jour . '/' . $request->request->get('mois') . '/' . $request->request->get('annee'));
            $etudiant = $etudiantRepository->identificationRdd($request->request->get('login'), $date);

            if ($etudiant !== null) {
                //vérification s'il est bien diplôme
                $diplome = $rddDiplomeRepository->findOneBy(['numEtudiant' => $etudiant['numEtudiant']]);
                if ($diplome !== null) {
                    return $this->redirectToRoute('rdd_inscription',
                        ['numetudiant' => md5('clerdd' . $etudiant['numEtudiant']), 'diplome' => $diplome->getId()]);
                }

                return $this->render('rdd/identification.html.twig', ['erreur' => true]);
            }

            return $this->render('rdd/identification.html.twig', ['erreur' => true]);

        }

        return $this->render('rdd/identification.html.twig', ['erreur' => false]);
    }

    /**
     * Creates a new candidatureAlternance entity.
     *
     * @Route("/inscription/{numetudiant}/{diplome}", name="inscription")
     * @param EtudiantRepository   $etudiantRepository
     * @param RddDiplomeRepository $rddDiplomeRepository
     * @param Request              $request
     *
     * @param                      $numetudiant
     * @param                      $diplome
     *
     * @return Response
     */
    public function inscription(
        EtudiantRepository $etudiantRepository,
        RddDiplomeRepository $rddDiplomeRepository,
        Request $request,
        $numetudiant,
        $diplome
    ) {
        $dip = $rddDiplomeRepository->find($diplome);
        if ($dip !== null) {
            if (md5('clerdd' . $dip->getNumetudiant()) === $numetudiant) {
                $etudiant = $etudiantRepository->findOneBy(['numEtudiant' => $dip->getNumetudiant()]);

                if ($etudiant !== null) {
                    $form = $this->createForm(RddType::class, $etudiant);
                    $form->handleRequest($request);

                    if ($form->isSubmitted() && $form->isValid()) {
                        $dip->setConfirme(true);
                        $em = $this->getDoctrine()->getManager();
                        $em->flush();

                        return $this->render('rdd/confirm.html.twig', [
                            'etudiant'    => $etudiant,
                            'rdd'         => $dip,
                            'numetudiant' => md5('clerdd' . $etudiant->getNumEtudiant()),
                            'diplome'     => $diplome
                        ]);
                    }

                    return $this->render('rdd/new.html.twig', [
                        'form'     => $form->createView(),
                        'etudiant' => $etudiant
                    ]);
                }

                return $this->render('rdd/identification.html.twig', ['erreur' => false]);

            }

            return $this->render('rdd/identification.html.twig', ['erreur' => false]);

        }

        return $this->render('rdd/identification.html.twig', ['erreur' => false]);
    }

    /**
     * Creates a new candidatureAlternance entity.
     *
     * @Route("/enquete/{numetudiant}/{diplome}", name="enquete_diplome")
     * @param EtudiantRepository   $etudiantRepository
     * @param RddDiplomeRepository $rddDiplomeRepository
     *
     * @param                      $numetudiant
     * @param                      $diplome
     *
     * @return Response
     */
    public function enquete(
        EtudiantRepository $etudiantRepository,
        RddDiplomeRepository $rddDiplomeRepository,
        $numetudiant,
        $diplome
    ) {
        $dip = $rddDiplomeRepository->find($diplome);
        if (($dip !== null) && md5('clerdd' . $dip->getNumetudiant()) === $numetudiant) {
            $etudiant = $etudiantRepository->findOneBy(['numEtudiant' => $dip->getNumetudiant()]);

            return $this->render('rdd/enquete.html.twig', [
                'etudiant' => $etudiant
            ]);
        }
    }
}

<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appEtudiant/ProjetController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/09/2022 09:47
 */

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\ProjetEtudiant;
use App\Event\ProjetEvent;
use App\Form\ProjetEtudiantEtudiantType;
use App\Repository\ProjetPeriodeRepository;
use Carbon\Carbon;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

/**
 * Class StageController.
 */
#[Route(path: '/application/etudiant/projet')]
class ProjetController extends BaseController
{
    #[Route(path: '/', name: 'application_etudiant_projet_index')]
    public function index(ProjetPeriodeRepository $projetPeriodeRepository): Response
    {
        $projetsPeriodes = $projetPeriodeRepository->findBySemestre($this->getUser()->getSemestre());
        $projetsEtudiants = [];
        foreach ($this->getUser()->getProjetEtudiants() as $projetEtudiant) {
            if (null !== $projetEtudiant->getProjetPeriode()) {
                $projetsEtudiants[$projetEtudiant->getProjetPeriode()->getId()] = $projetEtudiant;
            }
        }

        return $this->render('appEtudiant/projet/index.html.twig', [
            'projetsPeriodes' => $projetsPeriodes,
            'projetsEtudiants' => $projetsEtudiants,
        ]);
    }

    #[Route(path: '/formulaire/{projetEtudiant}', name: 'application_etudiant_projet_formulaire', methods: 'GET|POST')]
    #[ParamConverter('projetEtudiant', options: ['mapping' => ['projetEtudiant' => 'uuid']])]
    public function create(EventDispatcherInterface $eventDispatcher, Request $request, ProjetEtudiant $projetEtudiant): Response
    {
        if (null !== $projetEtudiant->getProjetPeriode()) {
            $form = $this->createForm(ProjetEtudiantEtudiantType::class, $projetEtudiant, [
                'semestres' => $projetEtudiant->getProjetPeriode()->getSemestres(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $projetEtudiant->setEtatProjet(ProjetEtudiant::ETAT_PROJET_DEPOSE);
                $projetEtudiant->setDateDepose(new Carbon('now'));
                $this->entityManager->flush();

                $event = new ProjetEvent($projetEtudiant);
                $eventDispatcher->dispatch($event, ProjetEvent::CHGT_ETAT_PROJET_DEPOSE);

                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'projet_etudiant.formulaire.success.flash');

                return $this->redirectToRoute('application_index', ['onglet' => 'projet']);
            }

            return $this->render('appEtudiant/projet/formulaire.html.twig', [
                'stageEtudiant' => $projetEtudiant,
                'form' => $form->createView(),
            ]);
        }

        return $this->render('bundles/TwigBundle/Exception/error500.html.twig');
    }

    //    /**
    //     * @Route("/periode/info/{id}", name="application_etudiant_stage_periode_info")
    //     * @param StageEtudiant $stageEtudiant
    //     *
    //     * @return Response
    //     */
    //    public function periodeInfo(StageEtudiant $stageEtudiant): Response
    //    {
    //        return $this->render('appEtudiant/stage/periodeInfo.html.twig', [
    //            'stageEtudiant' => $stageEtudiant,
    //            'stagePeriode'  => $stageEtudiant->getStagePeriode()
    //        ]);
    //    }
    //    /**
    //     * @Route("/entreprise/stage/info/{id}", name="application_etudiant_stage_entreprise_info")
    //     * @param StageEtudiant $stageEtudiant
    //     *
    //     * @return Response
    //     */
    //    public function entrepriseInfo(StageEtudiant $stageEtudiant): Response
    //    {
    //        return $this->render('appEtudiant/stage/entrepriseInfo.html.twig', [
    //            'stageEtudiant' => $stageEtudiant
    //        ]);
    //    }
    //    /**
    //     * @Route("/entreprise/alternance/info/{id}", name="application_etudiant_alternance_entreprise_info")
    //     * @param Alternance $alternance
    //     *
    //     * @return Response
    //     */
    //    public function entrepriseAlternanceInfo(Alternance $alternance): Response
    //    {
    //        return $this->render('appEtudiant/stage/entrepriseAlternanceInfo.html.twig', [
    //            'alternance' => $alternance
    //        ]);
    //    }
}

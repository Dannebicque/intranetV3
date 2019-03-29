<?php

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use App\Events;
use App\Form\StageEtudiantEtudiantType;
use App\Repository\StagePeriodeRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StageController
 * @package App\Controller
 * @Route("/application/etudiant/stage")
 * @IsGranted("ROLE_ETUDIANT")
 */
class StageController extends BaseController
{
    /**
     * @Route("/", name="application_etudiant_stage_index")
     * @param StagePeriodeRepository $stagePeriodeRepository
     *
     * @return Response
     */
    public function index(StagePeriodeRepository $stagePeriodeRepository): Response
    {
        $stagePeriodes = $stagePeriodeRepository->findStageEtudiant($this->getConnectedUser()->getSemestre());
        $stageEtudiants = [];

        foreach ($this->getConnectedUser()->getStageEtudiants() as $stage) {
            if ($stage->getStagePeriode() !== null) {
                $stageEtudiants[$stage->getStagePeriode()->getId()] = $stage;
            }
        }


        return $this->render('appEtudiant/stage/index.html.twig', [
            'stagePeriodes' => $stagePeriodes,
            'stageEtudiants' => $stageEtudiants
        ]);
    }

    /**
     * @Route("/formulaire/{stageEtudiant}", name="application_etudiant_stage_formulaire", methods="GET|POST")
     * @ParamConverter("stageEtudiant", options={"mapping": {"stageEtudiant": "uuid"}})
     *
     * @param EventDispatcherInterface $eventDispatcher
     * @param Request                  $request
     * @param StageEtudiant            $stageEtudiant
     *
     * @return Response
     * @throws \Exception
     */
    public function create(
        EventDispatcherInterface $eventDispatcher,
        Request $request,
        StageEtudiant $stageEtudiant
    ): Response {
        if ($stageEtudiant->getStagePeriode() !== null) {
            $form = $this->createForm(StageEtudiantEtudiantType::class, $stageEtudiant, [
                'flexible' => $stageEtudiant->getStagePeriode()->getDatesFlexibles(),
                'attr'     => [
                    'data-provide' => 'validation'
                ]
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_DEPOSE);
                $stageEtudiant->setDateDepotFormulaire(new \DateTime('now'));
                $this->entityManager->flush();

                $event = new GenericEvent($stageEtudiant);
                $eventDispatcher->dispatch(Events::CHGT_ETAT_STAGE_DEPOSE, $event);
                $eventDispatcher->dispatch(Events::MAIL_CHGT_ETAT_STAGE_DEPOSE, $event);

                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_etudiant.formulaire.success.flash');

                return $this->redirectToRoute('application_index', ['onglet' => 'stage']);
            }

            return $this->render('appEtudiant/stage/formulaire.html.twig', [
                'stageEtudiant' => $stageEtudiant,
                'form'          => $form->createView(),
            ]);
        }

        return $this->render('erreur/500.html.twig');
    }

    /**
     * @Route("/stage/periode/info/{id}", name="application_etudiant_stage_periode_info")
     * @param StageEtudiant $stageEtudiant
     *
     * @return Response
     */
    public function periodeInfo(StageEtudiant $stageEtudiant): Response
    {
        return $this->render('appEtudiant/stage/periodeInfo.html.twig', [
            'stageEtudiant' => $stageEtudiant,
            'stagePeriode'  => $stageEtudiant->getStagePeriode()
        ]);
    }

    /**
     * @Route("/stage/entreprise/info/{id}", name="application_etudiant_stage_entreprise_info")
     * @param StageEtudiant $stageEtudiant
     *
     * @return Response
     */
    public function entrepriseInfo(StageEtudiant $stageEtudiant): Response
    {
        return $this->render('appEtudiant/stage/entrepriseInfo.html.twig', [
            'stageEtudiant' => $stageEtudiant
        ]);
    }
}

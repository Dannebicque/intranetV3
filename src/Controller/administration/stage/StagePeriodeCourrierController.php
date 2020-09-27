<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/stage/StagePeriodeCourrierController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 27/09/2020 14:30

namespace App\Controller\administration\stage;

use App\Classes\MyStageMailTemplate;
use App\Controller\BaseController;
use App\Entity\StageEtudiant;
use App\Entity\StageMailTemplate;
use App\Entity\StagePeriode;
use App\Event\StageEvent;
use App\Repository\StageEtudiantRepository;
use App\Repository\StageMailTemplateRepository;
use Doctrine\ORM\NonUniqueResultException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

/**
 * Class StagePeriodeCourrierController
 * @package App\Controller\administration\stage
 * @Route("/administration/stage/periode/courrier")
 */
class StagePeriodeCourrierController extends BaseController
{
    /**
     * @Route("/test-mail", name="test_mail_stage_twig")
     *
     * @param StageEtudiantRepository  $stageEtudiantRepository
     * @param EventDispatcherInterface $eventDispatcher
     *
     * @return Response
     */
    public function testMail(
        StageEtudiantRepository $stageEtudiantRepository,
        EventDispatcherInterface $eventDispatcher
    ) {
        $stageEtudiant = $stageEtudiantRepository->find(8);
        $eventNotif = StageEvent::CHGT_ETAT_STAGE_AUTORISE;
        $event = new StageEvent($stageEtudiant);


        $eventDispatcher->dispatch($event, $eventNotif);
        echo 'ok event';

        return $this->render('test-mail.html.twig');
    }


    /**
     * @Route("/apercu/{mail}", name="administration_stage_periode_courrier_apercu_defaut")
     *
     * @param $mail
     *
     * @return Response
     */
    public function apercuDefaut($mail): Response
    {
        $donnees = [
            'etudiant'            => [
                'prenom' => 'Etudiant',
                'nom'    => 'De Test',
            ],
            'entreprise'          => [
                'raisonSociale' => 'Fictive Compagnie',
            ],
            'tuteur'              => [
                'prenom' => 'Pierre',
                'nom'    => 'Dupond',
            ],
            'tuteurUniversitaire' => [
                'prenom' => 'John',
                'nom'    => 'Doe',
            ],
            'stagePeriode'        => [
                'libelle'      => 'Période de stage fictive',
                'responsables' => [
                    0 =>
                        ['displayPr' => 'Paul Pierre']
                ]
            ],
            'dateDebutStageFr'    => '01/01/2020',
            'dateFinStageFr'      => '31/12/2020'

        ];


        return $this->render('administration/stage/stage_periode_courrier/apercuDefaut.html.twig', [
            'mail'          => $mail,
            'stageEtudiant' => $donnees
        ]);
    }

    /**
     * @Route("/sauvegarde-modele/{uuid}/{mail}", name="administration_stage_periode_courrier_sauvegarde_modele",
     *                                            options={"expose"=true})
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "uuid"}})
     * @param MyStageMailTemplate $myStageMailTemplate
     * @param Request             $request
     * @param StagePeriode        $stagePeriode
     * @param                     $mail
     *
     * @return Response
     * @throws NonUniqueResultException
     */
    public function sauvegardeModele(
        MyStageMailTemplate $myStageMailTemplate,
        Request $request,
        StagePeriode $stagePeriode,
        $mail
    ): Response {
        $myStageMailTemplate->updateTemplate($mail, $request->request->get('sujet'), $request->request->get('message'),
            $stagePeriode);

        return $this->render('administration/stage/stage_periode_courrier/index.html.twig', [
            'etatsConvention' => StageEtudiant::ETATS,
            'stagePeriode'    => $stagePeriode,
        ]);
    }

    /**
     * @Route("/reset/{id}/{etat}", name="administration_stage_periode_courrier_reset", options={"expose"=true})
     *
     * @param StageMailTemplateRepository $stageMailTemplateRepository
     * @param StagePeriode                $stagePeriode
     * @param                             $etat
     *
     * @return Response
     */
    public function reset(
        StageMailTemplateRepository $stageMailTemplateRepository,
        StagePeriode $stagePeriode,
        $etat
    ): Response {
        $mails = $stageMailTemplateRepository->findBy(['stagePeriode' => $stagePeriode->getId(), 'event' => $etat]);
        foreach ($mails as $mail) {
            if ($mail->getTwigTemplate() !== null) {
                $this->entityManager->remove($mail->getTwigTemplate());
            }
            $this->entityManager->remove($mail);
        }
        $this->entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }

    /**
     * @Route("/{uuid}", name="administration_stage_periode_courrier_index")
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "uuid"}})
     * @param StagePeriode $stagePeriode
     *
     * @return Response
     */
    public function index(
        StageMailTemplateRepository $stageMailTemplateRepository,
        StagePeriode $stagePeriode
    ): Response {

        $courriers = $stageMailTemplateRepository->findByStagePeriodeArray($stagePeriode);

        return $this->render('administration/stage/stage_periode_courrier/index.html.twig', [
            'etatsConvention' => StageEtudiant::ETATS,
            'stagePeriode'    => $stagePeriode,
            'courriers'       => $courriers
        ]);
    }


}

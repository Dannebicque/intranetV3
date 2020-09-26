<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/stage/StagePeriodeCourrierController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/09/2020 08:52

namespace App\Controller\administration\stage;

use App\Controller\BaseController;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use App\Classes\MyStageMailTemplate;
use App\Event\StageEvent;
use App\Repository\StageEtudiantRepository;
use App\Repository\StageMailTemplateRepository;
use Doctrine\ORM\NonUniqueResultException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
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
        return $this->render('administration/stage/stage_periode_courrier/apercuDefaut.html.twig', [
            'mail' => $mail
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

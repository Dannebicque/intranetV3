<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/stage/StagePeriodeCourrierController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 02/10/2020 09:42

namespace App\Controller\administration\stage;

use App\Classes\DatabaseTwigLoader;
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
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class StagePeriodeCourrierController
 * @package App\Controller\administration\stage
 * @Route("/administration/stage/periode/courrier")
 */
class StagePeriodeCourrierController extends BaseController
{

    private $donnees = [
        'etudiant'            => [
            'civilite'  => 'M.',
            'prenom'    => 'Etudiant',
            'nom'       => 'De Test',
            'displayPr' => 'Etudiant De Test',
            'semestre'  => [
                'annee' => [
                    'diplome' => [
                        'typediplome' => [
                            'libelle' => 'DUT'
                        ],
                        'libelle'     => 'MMI',
                        'departement' => [
                            'ufr' => [
                                'sitePrincipal' => [
                                    'adresse' => [
                                        'display' => '9 rue de Québec, 10026 Troyes Cedex'
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ],
        'entreprise'          => [
            'raisonSociale' => 'Fictive Compagnie',
            'responsable'   => [
                'civilite' => 'M.',
                'prenom'   => 'Jacques',
                'nom'      => 'Paul',
            ]
        ],
        'tuteur'              => [
            'civilite' => 'M.',
            'prenom'   => 'Pierre',
            'nom'      => 'Dupond',
        ],
        'tuteurUniversitaire' => [
            'civilite' => 'M.',
            'prenom'   => 'John',
            'nom'      => 'Doe',
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


    /**
     * @Route("/apercu-defaut/{mail}", name="administration_stage_periode_courrier_apercu_defaut")
     *
     * @param $mail
     *
     * @return Response
     */
    public function apercuDefaut($mail): Response
    {
        return $this->render('administration/stage/stage_periode_courrier/apercuDefaut.html.twig', [
            'mail'          => $mail,
            'stageEtudiant' => $this->donnees
        ]);
    }

    /**
     * @Route("/apercu/{stagePeriode}/{mail}", name="administration_stage_periode_courrier_apercu_modele")
     *
     * @param DatabaseTwigLoader          $databaseTwigLoader
     * @param StageMailTemplateRepository $stageMailTemplateRepository
     * @param StagePeriode                $stagePeriode
     * @param                             $mail
     *
     * @return Response
     * @throws NonUniqueResultException
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function apercu(
        DatabaseTwigLoader $databaseTwigLoader,
        StageMailTemplateRepository $stageMailTemplateRepository,
        StagePeriode $stagePeriode,
        $mail
    ): Response {
        $mailTemplate = $stageMailTemplateRepository->findEventPeriode(
            $mail,
            $stagePeriode
        );

        if ($mailTemplate !== null && $mailTemplate->getTwigTemplate() !== null) {
            $twig = new Environment($databaseTwigLoader, ['auto_reload' => true]);

            $mail = $twig->render($twig->load($mailTemplate->getTwigTemplate()->getName()),
                ['stageEtudiant' => $this->donnees]);

            return $this->render('administration/stage/stage_periode_courrier/apercu.html.twig', [
                'mail' => $mail
            ]);
        }

        return $this->render('administration/stage/stage_periode_courrier/apercu.html.twig', [
            'mail' => null
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

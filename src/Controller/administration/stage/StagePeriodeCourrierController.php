<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/stage/StagePeriodeCourrierController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\administration\stage;

use App\Classes\MyStageMailTemplate;
use App\Controller\BaseController;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use App\Repository\StageMailTemplateRepository;
use Doctrine\ORM\NonUniqueResultException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\SyntaxError;

/**
 * Class StagePeriodeCourrierController.
 *
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
                            'libelle' => 'DUT',
                        ],
                        'libelle'     => 'MMI',
                        'departement' => [
                            'ufr' => [
                                'sitePrincipal' => [
                                    'adresse' => [
                                        'display' => '9 rue de Québec, 10026 Troyes Cedex',
                                    ],
                                ],
                            ],
                        ],
                    ],
                ],
            ],
        ],
        'entreprise'          => [
            'raisonSociale' => 'Fictive Compagnie',
            'responsable'   => [
                'civilite'     => 'M.',
                'civiliteLong' => 'Monsieur',
                'prenom'       => 'Jacques',
                'nom'          => 'Paul',
            ],
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
                0 => ['displayPr' => 'Paul Pierre'],
            ],
        ],
        'dateDebutStageFr'    => '01/01/2020',
        'dateFinStageFr'      => '31/12/2020',
    ];

    /**
     * @Route("/apercu-defaut/{mail}", name="administration_stage_periode_courrier_apercu_defaut")
     *
     * @param $mail
     */
    public function apercuDefaut($mail): Response
    {
        return $this->render('administration/stage/stage_periode_courrier/apercuDefaut.html.twig', [
            'mail'          => $mail,
            'stageEtudiant' => $this->donnees,
        ]);
    }

    /**
     * @Route("/apercu/{stagePeriode}/{mail}", name="administration_stage_periode_courrier_apercu_modele")
     *
     * @param $mail
     *
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws SyntaxError
     */
    public function apercu(
        Environment $twig,
        StageMailTemplateRepository $stageMailTemplateRepository,
        StagePeriode $stagePeriode,
        $mail
    ): Response {
        $mailTemplate = $stageMailTemplateRepository->findEventPeriode(
            $mail,
            $stagePeriode
        );

        if (null !== $mailTemplate && null !== $mailTemplate->getTwigTemplate()) {
            $template = $twig->createTemplate($mailTemplate->getTwigTemplate()->getSource());
            $mail = $template->render(['stageEtudiant' => $this->donnees]);

            return $this->render('administration/stage/stage_periode_courrier/apercu.html.twig', [
                'mail' => $mail,
            ]);
        }

        return $this->render('administration/stage/stage_periode_courrier/apercu.html.twig', [
            'mail' => null,
        ]);
    }

    /**
     * @Route("/sauvegarde-modele/{uuid}/{mail}", name="administration_stage_periode_courrier_sauvegarde_modele",
     *                                            options={"expose"=true})
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "uuid"}})
     *
     * @param $mail
     *
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
     * @param $etat
     */
    public function reset(
        StageMailTemplateRepository $stageMailTemplateRepository,
        StagePeriode $stagePeriode,
        $etat
    ): Response {
        $mails = $stageMailTemplateRepository->findBy(['stagePeriode' => $stagePeriode->getId(), 'event' => $etat]);
        foreach ($mails as $mail) {
            if (null !== $mail->getTwigTemplate()) {
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
     */
    public function index(
        StageMailTemplateRepository $stageMailTemplateRepository,
        StagePeriode $stagePeriode
    ): Response {
        $courriers = $stageMailTemplateRepository->findByStagePeriodeArray($stagePeriode);

        return $this->render('administration/stage/stage_periode_courrier/index.html.twig', [
            'etatsConvention' => StageEtudiant::ETATS,
            'stagePeriode'    => $stagePeriode,
            'courriers'       => $courriers,
        ]);
    }
}

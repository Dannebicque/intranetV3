<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/MyStageMailTemplate.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 21/08/2019 12:29
 * @lastUpdate 21/08/2019 11:55
 */

namespace App\MesClasses;


use App\Entity\StageMailTemplate;
use App\Entity\StagePeriode;
use App\Entity\TwigTemplate;
use App\Repository\StageMailTemplateRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;

class MyStageMailTemplate
{
    /** @var StageMailTemplateRepository */
    protected $stageMailTemplateRepository;
    /** @var EntityManagerInterface */
    protected $entityManager;

    /**
     * MyStageMailTemplate constructor.
     *
     * @param StageMailTemplateRepository $stageMailTemplateRepository
     * @param EntityManagerInterface      $entityManager
     */
    public function __construct(
        StageMailTemplateRepository $stageMailTemplateRepository,
        EntityManagerInterface $entityManager
    ) {
        $this->stageMailTemplateRepository = $stageMailTemplateRepository;
        $this->entityManager = $entityManager;
    }


    /**
     * @param              $code
     * @param              $sujet
     * @param              $message
     * @param StagePeriode $stagePeriode
     *
     * @throws NonUniqueResultException
     */
    public function updateTemplate($code, $sujet, $message, StagePeriode $stagePeriode): void
    {
        //rechercher si le modèle existe
        $modele = $this->stageMailTemplateRepository->findEventPeriode('MAIL_CHGT_' . $code, $stagePeriode);

        if ($modele !== null) {
            $modele->setSubject($sujet);
            $template = $modele->getTwigTemplate();
            if ($template !== null) {
                $template->setSource($message);
            } else {
                $template = new TwigTemplate($code . '_' . $stagePeriode->getUuidString(), $message);
                $this->entityManager->persist($template);
                $modele->setTwigTemplate($template);
            }
        } else {
            $modele = new StageMailTemplate();
            $modele->setEvent('MAIL_CHGT_' . $code);
            $modele->setStagePeriode($stagePeriode);
            $modele->setSubject($sujet);
            $template = new TwigTemplate($code . '_' . $stagePeriode->getUuidString(), $message);
            $this->entityManager->persist($template);
            $modele->setTwigTemplate($template);
            $this->entityManager->persist($modele);
        }

        $this->entityManager->flush();
    }
}

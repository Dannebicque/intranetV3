<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyStageMailTemplate.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Entity\StageMailTemplate;
use App\Entity\StagePeriode;
use App\Entity\TwigTemplate;
use App\Repository\StageMailTemplateRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;

class MyStageMailTemplate
{
    protected StageMailTemplateRepository $stageMailTemplateRepository;
    protected EntityManagerInterface $entityManager;

    /**
     * MyStageMailTemplate constructor.
     */
    public function __construct(
        StageMailTemplateRepository $stageMailTemplateRepository,
        EntityManagerInterface $entityManager
    ) {
        $this->stageMailTemplateRepository = $stageMailTemplateRepository;
        $this->entityManager = $entityManager;
    }

    /**
     * @param $code
     * @param $sujet
     * @param $message
     *
     * @throws NonUniqueResultException
     */
    public function updateTemplate($code, $sujet, $message, StagePeriode $stagePeriode): void
    {
        //todo: update du mail généré $this->>load(template) avec Environnment
        //rechercher si le modèle existe
        $modele = $this->stageMailTemplateRepository->findEventPeriode($code, $stagePeriode);

        if (null !== $modele) {
            $modele->setSubject($sujet);
            $template = $modele->getTwigTemplate();
            if (null !== $template) {
                $template->setSource($this->transformeFromEditeur($message));
            } else {
                $template = new TwigTemplate($code . '_' . $stagePeriode->getUuidString(),
                    $this->transformeFromEditeur($message));
                $this->entityManager->persist($template);
                $modele->setTwigTemplate($template);
            }
        } else {
            $modele = new StageMailTemplate();
            $modele->setEvent($code);
            $modele->setStagePeriode($stagePeriode);
            $modele->setSubject($sujet);
            $template = new TwigTemplate($code . '_' . $stagePeriode->getUuidString(),
                $this->transformeFromEditeur($message));
            $this->entityManager->persist($template);
            $modele->setTwigTemplate($template);
            $this->entityManager->persist($modele);
        }

        $this->entityManager->flush();
    }

    private function transformeFromEditeur($message)
    {
        return str_replace(array_keys(StageMailTemplate::CHAMPS_PUBLIPOSTAGE),
            array_values(StageMailTemplate::CHAMPS_PUBLIPOSTAGE), $message);
    }
}

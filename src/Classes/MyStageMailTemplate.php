<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyStageMailTemplate.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
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

readonly class MyStageMailTemplate
{
    public function __construct(
        private StageMailTemplateRepository $stageMailTemplateRepository,
        private EntityManagerInterface      $entityManager
    ) {
    }

    /**
     * @throws NonUniqueResultException
     */
    public function updateTemplate(string $code, string $sujet, string $message, StagePeriode $stagePeriode): void
    {
        // todo: update du mail généré $this->>load(template) avec Environnment
        // rechercher si le modèle existe
        $modele = $this->stageMailTemplateRepository->findEventPeriode($code, $stagePeriode);

        if (null !== $modele) {
            $modele->setSubject($sujet);
            $template = $modele->getTwigTemplate();
            if (null !== $template) {
                $template->setSource($this->transformeFromEditeur($message));
            } else {
                $template = new TwigTemplate($code.'_'.$stagePeriode->getUuidString(),
                    $this->transformeFromEditeur($message));
                $this->entityManager->persist($template);
                $modele->setTwigTemplate($template);
            }
        } else {
            $modele = new StageMailTemplate();
            $modele->setEvent($code);
            $modele->setStagePeriode($stagePeriode);
            $modele->setSubject($sujet);
            $template = new TwigTemplate($code.'_'.$stagePeriode->getUuidString(),
                $this->transformeFromEditeur($message));
            $this->entityManager->persist($template);
            $modele->setTwigTemplate($template);
            $this->entityManager->persist($modele);
        }

        $this->entityManager->flush();
    }

    private function transformeFromEditeur(string $message): string
    {
        return str_replace(array_keys(StageMailTemplate::CHAMPS_PUBLIPOSTAGE),
            array_values(StageMailTemplate::CHAMPS_PUBLIPOSTAGE), $message);
    }
}

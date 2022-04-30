<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Section/EndSection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 12:20
 */

namespace App\Components\Questionnaire\Section;

use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use Carbon\CarbonInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EndSection extends AbstractSection
{
    final public const LABEL = 'end.section';
    final public const DEFAULT_TEMPLATE = 'components/questionnaire/sections/end-section.html.twig';

    public ?string $texteFin = '';
    public ?string $titre = '';
    public ?CarbonInterface $dateOuverture = null;
    public ?CarbonInterface $dateFermeture = null;

    protected function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefaults([
            'template' => self::DEFAULT_TEMPLATE,
        ]);
    }

    public function getVars(): array
    {
        return array_merge(parent::getVars(), [
            'ordre' => $this->ordre,
            'titre' => $this->titre,
            'texteFin' => $this->texteFin,
            'dateOuverture' => $this->dateOuverture,
            'dateFermeture' => $this->dateFermeture,
        ]);
    }

    public function setQuestionnaire(int $ordre, AbstractQuestionnaire $questionnaire, array $options = []): AbstractSection
    {
        $this->setOptions($options);
        $this->ordre = $ordre;
        $this->texteFin = $questionnaire->texteFin;
        $this->titre = $questionnaire->titre;
        $this->dateOuverture = $questionnaire->dateOuverture;
        $this->dateFermeture = $questionnaire->dateFermeture;

        return $this;
    }

    public function getSection(): AbstractSection
    {
        return $this;
    }
}

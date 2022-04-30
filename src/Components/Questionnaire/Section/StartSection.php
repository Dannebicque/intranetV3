<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Section/StartSection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 12:20
 */

namespace App\Components\Questionnaire\Section;

use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use Carbon\CarbonInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StartSection extends AbstractSection
{
    public final const LABEL = 'start.section';
    public final const DEFAULT_TEMPLATE = 'components/questionnaire/sections/start-section.html.twig';

    public ?string $texteDebut = '';
    public ?string $titre = '';
    public ?CarbonInterface $dateOuverture = null;
    public ?CarbonInterface $dateFermeture = null;

    public function setOrdre(int $ordre = 0): void
    {
        $this->ordre = $ordre;
    }

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
            'texteDebut' => $this->texteDebut,
            'dateOuverture' => $this->dateOuverture,
            'dateFermeture' => $this->dateFermeture,
        ]);
    }

    public function setQuestionnaire(AbstractQuestionnaire $questionnaire, array $options = []): StartSection
    {
        $this->setOptions($options);
        $this->ordre = 0;
        $this->texteDebut = $questionnaire->texteDebut;
        $this->titre = $questionnaire->titre;
        $this->dateOuverture = $questionnaire->dateOuverture;
        $this->dateFermeture = $questionnaire->dateFermeture;

        return $this;
    }
}

<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Section/ConfigurableSection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 15:16
 */

namespace App\Components\Questionnaire\Section;

use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;
use App\Entity\Annee;

class ConfigurableSection extends AbstractSection
{
    final public const LABEL = 'configurable.section';

    final public const NB_QUESTIONS_PAR_SECTION = 3;
    public ?AbstractSectionAdapter $sectionAdapter = null;
    public ?array $config = [];
    public string $type_calcul = '';
    public array $sections = []; // en mode configurable, on peut avoir la création de sections

    public function addQuestions(AbstractQuestion $abstractQuestion): void
    {
        // boucler sur toutes les options, et ajouter successivement les questions... QUid des questions enfants ? Logiquement elles ne sont pas envoyées ici
        if (is_array($this->config) && array_key_exists('valeurs', $this->config) && is_array($this->config['valeurs'])) {
            foreach ($this->config['valeurs'] as $valeur) {
                $abstractQuestion->numero = $valeur; // pour tester
                $abstractQuestion->config = $valeur;
                $this->questions->addQuestion($abstractQuestion);
            }
        } else {
            // ce cas ne devrait pas exister...
            $this->questions->addQuestion($abstractQuestion);
        }
    }

    /**
     * @throws \App\Components\Questionnaire\Exceptions\TypeQuestionNotFoundException
     */
    public function initConfigGlobale(?array $config = []): void
    {
        $this->sectionAdapter = $this->questionnaireRegistry->getSectionAdapter($config['sectionAdapter']);
    }

    public function initConfigSection(?array $config = []): void
    {
        $this->config = $config;
    }

    // todo: ajouter un libelle sur la section pour faciliter la gestion

    /**
     * @throws \App\Components\Questionnaire\Exceptions\TypeQuestionNotFoundException
     */
    public function setSection(\App\Components\Questionnaire\DTO\Section $section, array $options = []): void // peut être passer par un dto car on dépend de la BDD...
    {
        $this->options = $options;

        $this->section = $section;
        $this->initConfigGlobale($section->configGlobale);
        $this->initConfigSection($section->configQuestionnaire);
    }

    public function genereSections(): array
    {
        $valeursParSection = [];
        if (is_array($this->config) && array_key_exists('valeurs', $this->config) && is_array($this->config['valeurs'])) {
            $nbSections = ceil(count($this->config['valeurs']) / self::NB_QUESTIONS_PAR_SECTION);
            for ($i = 1; $i <= $nbSections; ++$i) {
                $valeursParSection[$i] = array_slice($this->config['valeurs'], ($i - 1) * self::NB_QUESTIONS_PAR_SECTION, self::NB_QUESTIONS_PAR_SECTION);
                $numSection = $this->section->ordre.'-'.$i;
                $this->sections[$numSection] = new Section($this->questionnaireRegistry);
                $newSection = clone $this->section; // clonage pour gérer indépendement les sections ?

                // Définir les éléments liés ) la configuration
                $this->sections[$numSection]->nbParties = $this->getQuestionsParPartie($i);
                $this->sections[$numSection]->params = ['valeurs' => $valeursParSection[$i]];
                $this->sections[$numSection]->configurable = true;
                $this->sections[$numSection]->abstractSectionAdapter = $this->sectionAdapter;

                $newSection->ordre = $numSection;
                $this->sections[$numSection]->setSection($newSection, $this->options);
            }

            return $this->sections;
        }

        return [];
    }

    private function getQuestionsParPartie(int $i): int
    {
        if ($i * self::NB_QUESTIONS_PAR_SECTION <= (is_countable($this->config['valeurs']) ? count($this->config['valeurs']) : 0)) {
            return self::NB_QUESTIONS_PAR_SECTION;
        }

        return (is_countable($this->config['valeurs']) ? count($this->config['valeurs']) : 0) % self::NB_QUESTIONS_PAR_SECTION;
    }

    public function getDataPourConfiguration(Annee $annee): array
    {
        if (null !== $this->config) {
            $this->config['valeurs'] = [];
        }

        return $this->sectionAdapter->getAllDataAnnee($annee, $this->config['valeurs']);
    }
}

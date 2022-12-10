<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/DependencyInjection/services.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:11
 */

namespace App\Components\Questionnaire\DependencyInjection;

use App\Components\Graphs\GraphRegistry;
use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Components\Questionnaire\Section\ConfigurableSection;
use App\Components\Questionnaire\Section\EndSection;
use App\Components\Questionnaire\Section\MatiereSectionAdapter;
use App\Components\Questionnaire\Section\PrevisionnelSectionAdapter;
use App\Components\Questionnaire\Section\RessourceSectionAdapter;
use App\Components\Questionnaire\Section\SaeSectionAdapter;
use App\Components\Questionnaire\Section\Section;
use App\Components\Questionnaire\Section\StartSection;
use App\Components\Questionnaire\TypeDestinataire\Etudiant;
use App\Components\Questionnaire\TypeDestinataire\Exterieur;
use App\Components\Questionnaire\TypeDestinataire\Personnel;
use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;
use App\Components\Questionnaire\TypeQuestion\TypeChainee;
use App\Components\Questionnaire\TypeQuestion\TypeEchelle;
use App\Components\Questionnaire\TypeQuestion\TypeLibre;
use App\Components\Questionnaire\TypeQuestion\TypeOuiNon;
use App\Components\Questionnaire\TypeQuestion\TypeQcm;
use App\Components\Questionnaire\TypeQuestion\TypeQcu;
use App\Components\Questionnaire\TypeQuestion\TypeSlider;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use function Symfony\Component\DependencyInjection\Loader\Configurator\service;

return static function (ContainerConfigurator $configurator): void {
    $services = $configurator->services();
    $services->defaults()
        ->private()
        ->autowire()
        ->autoconfigure(false);

    $services->set(AbstractQuestion::class)
        ->args([service('app.graph_registry')]);

    $services->set(TypeQcu::class)->tag(QuestionnaireRegistry::TAG_TYPE_QUESTION);
    $services->set(TypeQcm::class)->tag(QuestionnaireRegistry::TAG_TYPE_QUESTION);
    $services->set(TypeLibre::class)->tag(QuestionnaireRegistry::TAG_TYPE_QUESTION);
    $services->set(TypeEchelle::class)->tag(QuestionnaireRegistry::TAG_TYPE_QUESTION);
    $services->set(TypeOuiNon::class)->tag(QuestionnaireRegistry::TAG_TYPE_QUESTION);
    $services->set(TypeSlider::class)->tag(QuestionnaireRegistry::TAG_TYPE_QUESTION);
    $services->set(TypeChainee::class)->tag(QuestionnaireRegistry::TAG_TYPE_QUESTION);

    $services->set(StartSection::class)->tag(QuestionnaireRegistry::TAG_TYPE_SECTION);
    $services->set(ConfigurableSection::class)->tag(QuestionnaireRegistry::TAG_TYPE_SECTION);
    $services->set(Section::class)->tag(QuestionnaireRegistry::TAG_TYPE_SECTION);
    $services->set(EndSection::class)->tag(QuestionnaireRegistry::TAG_TYPE_SECTION);

    $services->set(PrevisionnelSectionAdapter::class)->tag(QuestionnaireRegistry::TAG_TYPE_SECTION_ADAPTER);
    $services->set(MatiereSectionAdapter::class)->tag(QuestionnaireRegistry::TAG_TYPE_SECTION_ADAPTER);
    $services->set(SaeSectionAdapter::class)->tag(QuestionnaireRegistry::TAG_TYPE_SECTION_ADAPTER);
    $services->set(RessourceSectionAdapter::class)->tag(QuestionnaireRegistry::TAG_TYPE_SECTION_ADAPTER);

    $services->set(Personnel::class)->tag(QuestionnaireRegistry::TAG_TYPE_DESTINATAIRE_ADAPTER);
    $services->set(Etudiant::class)->tag(QuestionnaireRegistry::TAG_TYPE_DESTINATAIRE_ADAPTER);
    $services->set(Exterieur::class)->tag(QuestionnaireRegistry::TAG_TYPE_DESTINATAIRE_ADAPTER);
};

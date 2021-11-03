<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/DependencyInjection/services.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 11:41
 */

namespace App\Components\Questionnaire\DependencyInjection;

use App\Components\Questionnaire\Section\ConfigurableSection;
use App\Components\Questionnaire\Section\EndSection;
use App\Components\Questionnaire\Section\MatiereSectionAdapter;
use App\Components\Questionnaire\Section\PrevisionnelSectionAdapter;
use App\Components\Questionnaire\Section\QuestionsSection;
use App\Components\Questionnaire\Section\RessourceSectionAdapter;
use App\Components\Questionnaire\Section\SaeSectionAdapter;
use App\Components\Questionnaire\Section\StartSection;
use App\Components\Questionnaire\TypeQuestion\TypeEchelle;
use App\Components\Questionnaire\TypeQuestion\TypeLibre;
use App\Components\Questionnaire\TypeQuestion\TypeOuiNon;
use App\Components\Questionnaire\TypeQuestion\TypeQcm;
use App\Components\Questionnaire\TypeQuestion\TypeQcu;
use App\Components\Questionnaire\TypeQuestion\TypeSlider;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function(ContainerConfigurator $configurator): void {

    $services = $configurator->services();
    $services->defaults()
        ->private()
        ->autowire(true)
        ->autoconfigure(false);

    $services->set(TypeQcu::class)->tag('da.questionnaire.typequestion');
    $services->set(TypeQcm::class)->tag('da.questionnaire.typequestion');
    $services->set(TypeLibre::class)->tag('da.questionnaire.typequestion');
    $services->set(TypeEchelle::class)->tag('da.questionnaire.typequestion');
    $services->set(TypeOuiNon::class)->tag('da.questionnaire.typequestion');
    $services->set(TypeSlider::class)->tag('da.questionnaire.typequestion');

    $services->set(StartSection::class)->tag('da.questionnaire.typesection');
    $services->set(EndSection::class)->tag('da.questionnaire.typesection');
    $services->set(QuestionsSection::class)->tag('da.questionnaire.typesection');
    $services->set(ConfigurableSection::class)->tag('da.questionnaire.typesection');

    $services->set(PrevisionnelSectionAdapter::class)->tag('da.questionnaire.section.adapter');
    $services->set(MatiereSectionAdapter::class)->tag('da.questionnaire.section.adapter');
    $services->set(SaeSectionAdapter::class)->tag('da.questionnaire.section.adapter');
    $services->set(RessourceSectionAdapter::class)->tag('da.questionnaire.section.adapter');
};

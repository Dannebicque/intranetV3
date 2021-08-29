<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/DependencyInjection/services.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 15:23
 */

namespace App\Components\Questionnaire\DependencyInjection;

use App\Components\Questionnaire\Section\EndSection;
use App\Components\Questionnaire\Section\QuestionsSection;
use App\Components\Questionnaire\Section\StartSection;
use App\Components\Questionnaire\TypeQuestion\TypeEchelle;
use App\Components\Questionnaire\TypeQuestion\TypeLibre;
use App\Components\Questionnaire\TypeQuestion\TypeOuiNon;
use App\Components\Questionnaire\TypeQuestion\TypeQcm;
use App\Components\Questionnaire\TypeQuestion\TypeQcu;
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

    $services->set(StartSection::class)->tag('da.questionnaire.typesection');
    $services->set(EndSection::class)->tag('da.questionnaire.typesection');
    $services->set(QuestionsSection::class)->tag('da.questionnaire.typesection');
};

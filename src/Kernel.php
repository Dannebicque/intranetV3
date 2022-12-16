<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Kernel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/12/2022 12:09
 */

namespace App;

use App\Components\Graphs\DependencyInjection\TypeGraphCompilerPass;
use App\Components\PlanCours\DependencyInjection\PlanCoursCompilerPass;
use App\Components\Questionnaire\DependencyInjection\QuestionnaireCompilerPass;
use App\Components\SourceEdt\DependencyInjection\SourceEdtCompilerPass;
use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Component\DependencyInjection\Compiler\PassConfig;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symfony\Component\HttpKernel\Kernel as BaseKernel;
use function dirname;

class Kernel extends BaseKernel
{
    use MicroKernelTrait;

    protected function build(ContainerBuilder $container): void
    {
        $container->addCompilerPass(new QuestionnaireCompilerPass(), PassConfig::TYPE_BEFORE_OPTIMIZATION, 0);
        $container->addCompilerPass(new SourceEdtCompilerPass(), PassConfig::TYPE_BEFORE_OPTIMIZATION, 0);
        $container->addCompilerPass(new PlanCoursCompilerPass(), PassConfig::TYPE_BEFORE_OPTIMIZATION, 0);
        $container->addCompilerPass(new TypeGraphCompilerPass(), PassConfig::TYPE_BEFORE_OPTIMIZATION, 0);
    }

    protected function configureContainer(ContainerConfigurator $container): void
    {
        $container->import('../config/{packages}/*.yaml');
        $container->import('../config/{packages}/'.$this->environment.'/*.yaml');

        if (is_file(dirname(__DIR__).'/config/services.yaml')) {
            $container->import('../config/services.yaml');
            $container->import('../config/{services}_'.$this->environment.'.yaml');
        } else {
            $container->import('../config/{services}.php');
        }

     //   $container->import('../src/Components/Widget/DependencyInjection/{services}.php');
        $container->import('../src/Components/Questionnaire/DependencyInjection/{services}.php');
        $container->import('../src/Components/SourceEdt/DependencyInjection/{services}.php');
        $container->import('../src/Components/PlanCours/DependencyInjection/{services}.php');
        $container->import('../src/Components/Graphs/DependencyInjection/{services}.php');
    }
}

<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Kernel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App;

use App\Components\Graphs\DependencyInjection\TypeGraphCompilerPass;
use App\Components\PlanCours\DependencyInjection\PlanCoursCompilerPass;
use App\Components\Questionnaire\DependencyInjection\QuestionnaireCompilerPass;
use App\Components\SourceEdt\DependencyInjection\SourceEdtCompilerPass;
use function dirname;
use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symfony\Component\HttpKernel\Kernel as BaseKernel;

class Kernel extends BaseKernel
{
    use MicroKernelTrait;

    protected function build(ContainerBuilder $container): void
    {
        $container->addCompilerPass(new QuestionnaireCompilerPass());
        $container->addCompilerPass(new SourceEdtCompilerPass());
        $container->addCompilerPass(new PlanCoursCompilerPass());
        $container->addCompilerPass(new TypeGraphCompilerPass());
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

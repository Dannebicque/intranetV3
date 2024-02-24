<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Command/EduSignFixCourseBetweenCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:41
 */

namespace App\Command;

use App\Classes\EduSign\FixCourses;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'edusign:fix-course-between',
    description: 'Régularise les cours entre l\'intranet et edusign',)]
class EduSignFixCourseBetweenCommand extends Command
{
    public function __construct(
        private readonly fixCourses $fixCourse,
    )
    {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('debut', InputArgument::REQUIRED, 'Date de début (format: d-m-Y)')
            ->addArgument('fin', InputArgument::REQUIRED, 'Date de fin (format: d-m-Y)');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $debut = $input->getArgument('debut');
        $fin = $input->getArgument('fin');
        $io = new SymfonyStyle($input, $output);

        $this->fixCourse->fixCourseBetween($debut, $fin);

        $io->success('Cours régularisés.');

        return Command::SUCCESS;
    }
}

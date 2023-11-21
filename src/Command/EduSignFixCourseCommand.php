<?php

namespace App\Command;

use App\Classes\EduSign\FixCourses;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'edusign:fix-course',
    description: 'Régularise les cours entre l\'intranet et edusign',)]
class EduSignFixCourseCommand extends Command
{
    public function __construct(
        private fixCourses $fixCourse,
    )
    {
        parent::__construct();
    }

    protected function configure(): void
    {

    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $this->fixCourse->fixCourse();

        $io->success('Cours régularisés.');

        return Command::SUCCESS;
    }
}
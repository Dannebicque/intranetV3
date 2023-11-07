<?php

namespace App\Command;

use App\Classes\EduSign\GetCourses;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'edusign:get-course-between',
    description: 'Mise à jour de l\'emploi du temps',
)]
class EduSignGetCourseBetweenCommand extends Command
{
    public function __construct(
        private GetCourses $getCourses,
    )
    {
        parent::__construct();
    }
    protected function configure()
    {
        $this
            ->addArgument('debut', InputArgument::REQUIRED, 'Date de début (format: d-m-Y)')
            ->addArgument('fin', InputArgument::REQUIRED, 'Date de fin (format: d-m-Y)');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $debut = $input->getArgument('debut');
        $fin = $input->getArgument('fin');
        $io = new SymfonyStyle($input, $output);

        $this->getCourses->getCourseBetween($debut, $fin);

        $io->success('Cours récupéré depuis EduSign.');

        return Command::SUCCESS;
    }
}
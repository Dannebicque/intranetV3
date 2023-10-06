<?php

namespace App\Command;

use App\Classes\EduSign\DeleteCourse;
use App\Classes\EduSign\UpdateEdt;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'edusign:delete-courses',
    description: 'suppression des cours sur edusign',
)]
class EduSignDeleteCourseCommand extends Command
{
    public function __construct(
        private DeleteCourse $deleteCourse,
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

        $this->deleteCourse->delete();//boucler sur département pour chaque update (ou diplome)

        $io->success('Cours supprimés sur EduSign.');

        return Command::SUCCESS;
    }
}
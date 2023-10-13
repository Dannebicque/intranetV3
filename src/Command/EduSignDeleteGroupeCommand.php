<?php

namespace App\Command;

use App\Classes\EduSign\DeleteCourse;
use App\Classes\EduSign\DeleteGroupe;
use App\Classes\EduSign\UpdateEdt;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'edusign:delete-groupes',
    description: 'suppression des groupes sur edusign',
)]
class EduSignDeleteGroupeCommand extends Command
{
    public function __construct(
        private DeleteGroupe $deleteGroupe,
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

        $this->deleteGroupe->delete();

        $io->success('Groupes supprimés sur EduSign.');

        return Command::SUCCESS;
    }
}
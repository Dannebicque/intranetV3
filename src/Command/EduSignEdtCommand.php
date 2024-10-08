<?php

/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Command/EduSignEdtCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/04/2024 11:40
 */

namespace App\Command;

use App\Classes\EduSign\FixCourses;
use App\Classes\EduSign\UpdateEdt;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'edusign:update-edt',
    description: 'Mise à jour de l\'emploi du temps',
)]
class EduSignEdtCommand extends Command
{
    public function __construct(
        private readonly UpdateEdt $updateEdt,
        private readonly FixCourses $fixCourses,
    )
    {
        parent::__construct();
    }


    public function configure(): void
    {
        $this
            ->addArgument('debut', InputArgument::OPTIONAL, 'Date de début (format: d-m-Y)', null);
    }

    public function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $debut = $input->getArgument('debut');
        $week = (int)date('W')+1;

        $this->fixCourses->fixCourses(null, $week);
        if ($debut === null) {
            $this->updateEdt->update(null, 1, $week);
        } else {
            $this->updateEdt->update(null, 3, $debut);
        }

        $io->success('Emploi du temps mis à jour sur EduSign.');

        return Command::SUCCESS;
    }
}

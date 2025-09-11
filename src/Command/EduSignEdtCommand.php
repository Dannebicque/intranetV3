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
use App\Repository\AnneeUniversitaireRepository;
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
        private readonly AnneeUniversitaireRepository $anneeUniversitaireRepository,
    )
    {
        parent::__construct();
    }


    public function configure(): void
    {
    }

    public function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $week = (int)date('W')+1;
        $anneeUniversitaire = $this->anneeUniversitaireRepository->findOneBy(['active' => true]);

        $this->fixCourses->fixCourses(null, $week);
        $this->updateEdt->update(null, 3, $week, $anneeUniversitaire);


        $io->success('Emploi du temps mis à jour sur EduSign.');

        return Command::SUCCESS;
    }
}

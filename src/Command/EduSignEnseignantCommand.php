<?php

/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Command/EduSignEnseignantCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/08/2023 15:58
 */

namespace App\Command;

use App\Classes\EduSign\UpdateEnseignant;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'edusign:update-enseignant',
    description: 'Mise à jour de l\'emploi du temps',
)]
class EduSignEnseignantCommand extends Command
{
    public function __construct(
        private UpdateEnseignant $updateEnseignant,
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

        $this->updateEnseignant->update();//boucler sur département pour chaque update (ou diplome)

        $io->success('Emploi du temps mis à jour sur EduSign.');

        return Command::SUCCESS;
    }
}

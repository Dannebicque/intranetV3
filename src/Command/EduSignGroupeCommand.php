<?php

/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Command/EduSignGroupeCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:41
 */

namespace App\Command;

use App\Classes\EduSign\UpdateGroupe;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'edusign:update-groupe',
    description: 'Mise à jour des groupes',
)]
class EduSignGroupeCommand extends Command
{
    public function __construct(
        private readonly UpdateGroupe $updateGroupe,
    )
    {
        parent::__construct();
    }


    protected function configure(): void
    {
        $this
            ->addArgument('keyEduSign', InputArgument::OPTIONAL, 'Clé EduSign');
    }

protected function execute(InputInterface $input, OutputInterface $output): int
{
    $io = new SymfonyStyle($input, $output);

    $keyEduSign = $input->getArgument('keyEduSign');
    $this->updateGroupe->update($keyEduSign);//boucler sur département pour chaque update (ou diplome)

    $io->success('Groupes mis à jour sur EduSign.');

    return Command::SUCCESS;
}
}

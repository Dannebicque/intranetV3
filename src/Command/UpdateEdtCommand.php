<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Command/UpdateEdtCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:26
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class UpdateEdtCommand extends Command
{
    protected static $defaultName = 'app:update-edt';

    protected function configure()
    {
        $this
            ->setDescription('Synchronisation de l\'emploi du temps avec Celcat')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        if ($input->getOption('option1')) {
            // ...
        }

        $io->success('You have a new command! Now make it your own! Pass --help to see your options.');

        return 0;
    }
}

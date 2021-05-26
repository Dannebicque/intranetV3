<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Command/GenereCodeApogeeCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2021 15:21
 */

namespace App\Command;

use App\Classes\Apogee\GenereCodeApogee;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class GenereCodeApogeeCommand extends Command
{
    protected static $defaultName = 'app:genere-code-apogee';
    protected static $defaultDescription = 'Génére les codes Apogées pour les nouveaux diplôme du B.U.T.';
    protected EntityManagerInterface $entityManager;

    /**
     * GenereCodeApogeeCommand constructor.
     *
     * @param \Doctrine\ORM\EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        parent::__construct();
    }


    protected function configure(): void
    {
        $this
            ->setDescription(self::$defaultDescription)
            ->addArgument('departement', InputArgument::REQUIRED, 'Sigle du diplôme')
            ->addArgument('lettrediplome', InputArgument::REQUIRED, 'Lettre du diplôme')
            ->addArgument('lettredomaine', InputArgument::REQUIRED,
                'Lettre du domaine')//->addOption('option1', null, InputOption::VALUE_NONE, 'Option description')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $arg1 = $input->getArgument('departement');
        $lettrediplome = $input->getArgument('lettrediplome');
        $lettredomaine = $input->getArgument('lettredomaine');

        if ($arg1) {
            $maquette = new GenereCodeApogee($this->entityManager);

            if ($maquette->checkDiplome($arg1) === false) {
                $io->error('Le diplôme n\'existe pas');
            }

            $value = $maquette->genereCodes($lettrediplome, $lettredomaine);

            if ($value === true) {
                $io->success('Codes générés avec succès');

                return Command::SUCCESS;
            }

            $io->success('Erreur lors de la génération des codes');

            return Command::FAILURE;
        }

        $io->error('Vous devez préciser le sigle du diplôme');

        return Command::FAILURE;
    }
}

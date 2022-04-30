<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Command/GenereCodeApogeeCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/07/2021 11:20
 */

namespace App\Command;

use App\Classes\Apogee\GenereCodeApogee;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:genere-code-apogee',
    description: 'Génére les codes Apogées pour les nouveaux diplôme du B.U.T.'
)]
class GenereCodeApogeeCommand extends Command
{
    /**
     * GenereCodeApogeeCommand constructor.
     */
    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected ApcRessourceRepository $apcRessourceRepository,
        protected ApcSaeRepository $apcSaeRepository)
    {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('departement', InputArgument::REQUIRED, 'Sigle du diplôme')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $arg1 = $input->getArgument('departement');

        if ($arg1) {
            $maquette = new GenereCodeApogee($this->entityManager, $this->apcRessourceRepository, $this->apcSaeRepository);

            if (false === $maquette->checkDiplome($arg1)) {
                $io->error('Le diplôme n\'existe pas');
            }

            $value = $maquette->genereCodes();

            if (true === $value) {
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

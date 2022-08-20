<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Command/UpdateTypegroupeCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/08/2022 18:20
 */

namespace App\Command;

use App\Repository\TypeGroupeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:update-typegroupe',
    description: 'Add a short description for your command',
)]
class UpdateTypegroupeCommand extends Command
{
    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected TypeGroupeRepository $typeGroupeRepository
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $tgs = $this->typeGroupeRepository->findAll();

        foreach ($tgs as $tg) {
            if (null === $tg->getDiplome() && null !== $tg->getSemestre()) {
                $tg->setDiplome($tg->getSemestre()->getDiplome());
                $tg->setOrdreSemestre($tg->getSemestre()->getOrdreLmd());
            }
        }

        $this->entityManager->flush();

        $io->success('Types de groupes mis à jour.');

        return Command::SUCCESS;
    }
}

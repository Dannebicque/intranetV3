<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Command/UpdateSemestreLiensCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/08/2022 14:19
 */

namespace App\Command;

use App\Entity\SemestreLien;
use App\Enums\SemestreLienEnum;
use App\Repository\SemestreRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:update-semestre-liens',
    description: 'Add a short description for your command',
)]
class UpdateSemestreLiensCommand extends Command
{
    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected SemestreRepository $semestreRepository
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $semestres = $this->semestreRepository->findAll();

        foreach ($semestres as $semestre) {
            if (null !== $semestre->getPrecedent()) {
                $sl = new SemestreLien();
                $sl->init($semestre, $semestre->getPrecedent(), SemestreLienEnum::PRECEDENT);
                $this->entityManager->persist($sl);
            }

            if (null !== $semestre->getSuivant()) {
                $sl = new SemestreLien();
                $sl->init($semestre, $semestre->getSuivant(), SemestreLienEnum::SUIVANT);
                $this->entityManager->persist($sl);
            }

            if (null !== $semestre->getDecale()) {
                $sl = new SemestreLien();
                $sl->init($semestre, $semestre->getDecale(), SemestreLienEnum::DECALE);
                $this->entityManager->persist($sl);
            }
        }

        $this->entityManager->flush();

        $io->success('Liens des semesres mis à jours');

        return Command::SUCCESS;
    }
}

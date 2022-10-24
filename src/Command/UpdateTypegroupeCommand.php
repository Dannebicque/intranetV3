<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Command/UpdateTypegroupeCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/10/2022 10:14
 */

namespace App\Command;

use App\Repository\SemestreRepository;
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
        protected TypeGroupeRepository $typeGroupeRepository,
        protected SemestreRepository $semestreRepository
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $tgs = $this->typeGroupeRepository->findAll();

        foreach ($tgs as $tg) {
            if ($tg->getDiplome() === null && $tg->getSemestre() !== null) {
                $tg->addSemestre($tg->getSemestre());
                $tg->getSemestre()->addTypeGroupess($tg);
                $this->entityManager->persist($tg);
            } else {
                $semestres = $this->semestreRepository->findByDiplomeEtNumero($tg->getDiplome(), $tg->getOrdreSemestre());
                // nouveau système temporaire... récupérer tous les semestre des diplomes...
                //ajouter les semestres
                foreach ($semestres as $semestre) {
                    $tg->addSemestre($semestre);
                    $semestre->addTypeGroupess($tg);
                    $this->entityManager->persist($tg);
                }
            }
        }

        $this->entityManager->flush();

        $io->success('Types de groupes mis à jour.');

        return Command::SUCCESS;
    }
}
